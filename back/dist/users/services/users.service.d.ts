import { User } from 'src/entities/user.entity';
import { MongoRepository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: MongoRepository<User>);
    getUserByCredentials(username: string, password: string): Promise<number>;
}
