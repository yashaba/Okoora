import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('login')
  login(@Body() { username, password }) {
    return this.usersService.getUserByCredentials(username, password);
  }
}
