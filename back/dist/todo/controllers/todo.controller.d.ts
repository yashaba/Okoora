import { TodoService } from '../services/todo.service';
import { Todo } from 'src/entities/todo.entity';
import { ObjectId } from 'typeorm';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    findAll(): Promise<Todo[]>;
    getByUserId(id: string): Promise<Todo[]>;
    create(todo: Todo): Promise<Todo>;
    update(id: ObjectId, todo: Todo): Promise<Todo>;
    remove(id: string): Promise<void>;
}
