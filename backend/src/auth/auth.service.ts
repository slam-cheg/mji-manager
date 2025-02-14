import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { writeLog } from '../utils/writeLog';
import { timeStamp } from '../utils/timeStamp';
import { IUserResponse } from './auth.types';
import { IRegisterUserDTO } from './dto/register-user.dto';
import { ICreateUserDTO } from '../user/dto/create-user.dto';
import { keygen } from 'src/utils/keygen';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(requestBody: { data: { login: string; password: string } }): Promise<IUserResponse> {
    const { login, password } = requestBody.data;
    console.log(`Начат процесс входа: ${login} . . .`);

    const user = await this.userService.findByLogin(login);
    if (!user) {
      throw new UnauthorizedException({
        status: 'Ошибка: пользователь не найден',
      });
    }

    // ✅ Проверяем пароль (сравнение с хешем)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException({
        status: 'Ошибка: неверный логин или пароль',
      });
    }

    if (!user.activated) {
      throw new ForbiddenException({
        status: 'Ошибка: аккаунт не активирован',
      });
    }

    // ✅ Теперь `response` соответствует `IUserResponse`
    const response: IUserResponse = {
      status: `Вход в аккаунт ${login} успешен`,
      fio: user.fio || '', // Если `fio` нет, подставляем пустую строку
      activated: user.activated,
      loginIsPossible: true,
      timeStamp: timeStamp(),
      isAdmin: user.isAdmin,
    };

    writeLog(response, 'logIn');
    return response;
  }

  async activateUser(login: string, password: string, key: string) {
    console.log(`Начат процесс активации аккаунта ${login} . . .`);

    const user = await this.userService.findByLogin(login);
    if (!user) {
      throw new UnauthorizedException({
        status: 'Ошибка: пользователь не найден',
      });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException({
        status: 'Ошибка: неверный логин или пароль',
      });
    }

    let activationStatus = {
      status: `Аккаунт ${login} не активирован. Неверный ключ`,
      boolean: false,
      activated: false,
      timeStamp: timeStamp(),
    };

    if (user.activated) {
      activationStatus = {
        status: `Аккаунт ${login} уже активирован`,
        boolean: true,
        activated: true,
        timeStamp: timeStamp(),
      };
    } else if (user.key === key) {
      await this.userService.updateUserActivation(login, true);
      activationStatus = {
        status: `Аккаунт ${login} успешно активирован`,
        boolean: true,
        activated: true,
        timeStamp: timeStamp(),
      };
    } else {
      activationStatus.status = `Аккаунт ${login} не активирован. Такой ключ не зарегистрирован`;
    }

    writeLog(activationStatus, 'Activation');
    return activationStatus;
  }

  async registerUser(registerDTO: IRegisterUserDTO) {
    const { login, password, fio } = registerDTO;
    console.log(`Начат процесс регистрации аккаунта ${login}`);

    const existingUser = await this.userService.findByLogin(login);
    if (existingUser) {
      throw new BadRequestException({
        status: `Регистрация аккаунта ${login} завершилась неудачно. Такой логин уже зарегистрирован`,
        registration: false,
        key: 'Not generated',
        timeStamp: timeStamp(),
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const activationKey = keygen();

    const newUser: ICreateUserDTO = {
      // ✅ Используем строгий тип
      login,
      password: hashedPassword,
      fio,
      key: activationKey,
      activated: false,
    };

    await this.userService.createUser(newUser);

    const response = {
      status: `Регистрация аккаунта ${login} завершилась успешно`,
      registration: true,
      key: activationKey,
      timeStamp: timeStamp(),
    };

    writeLog(response, 'Registration');

    return response;
  }
}
