import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ActivateUserDTO } from './dto/activate-user.dto';
import { IRegisterUserDTO } from './dto/register-user.dto';
import { API_ROUTES } from 'src/config/api.config';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(API_ROUTES.auth.login)
  async login(@Body() body: { data: { login: string; password: string } }) {
    return this.authService.validateUser(body);
  }

  @Post(API_ROUTES.auth.register)
  async register(@Body() body: IRegisterUserDTO) {
    return this.authService.registerUser(body);
  }

  @Post(API_ROUTES.auth.activate)
  async activateAccount(@Body() body: ActivateUserDTO) {
    return this.authService.activateUser(body.login, body.password, body.key);
  }
}