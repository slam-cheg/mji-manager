import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':login')
  async getUser(@Param('login') login: string) {
    return this.userService.findByLogin(login);
  }

  @Post()
  async createUser(
    @Body() body: { login: string; password: string; email: string },
  ) {
    return this.userService.createUser(body.login, body.password, body.email);
  }
}
