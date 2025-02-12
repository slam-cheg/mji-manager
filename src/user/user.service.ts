import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByLogin(login: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { login } });
  }

  async createUser(login: string, password: string, email: string): Promise<User> {
    const user = this.userRepository.create({ login, password, email });
    return this.userRepository.save(user);
  }

  async deactivateUser(login: string): Promise<void> {
    await this.userRepository.update({ login }, { isActive: false });
  }
}
