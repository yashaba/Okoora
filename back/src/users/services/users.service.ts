import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) {}

 async getUserByCredentials(username: string, password: string) {
    const user = await this.userRepository.findOne({
      where: { username, password },
    });
    return user?.id;
  }
}
