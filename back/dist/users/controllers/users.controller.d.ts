import { UsersService } from '../services/users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    login({ username, password }: {
        username: any;
        password: any;
    }): Promise<number>;
}
