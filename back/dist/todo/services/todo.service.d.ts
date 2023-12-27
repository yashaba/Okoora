import { Todo } from '../../entities/todo.entity';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'typeorm';
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: MongoRepository<Todo>);
    getByUserId(id: string): Promise<Todo[]>;
    findAll(): Promise<Todo[]>;
    create(todo: Todo): Promise<Todo>;
    update(id: ObjectId, todo: Todo): Promise<Todo>;
    remove(id: string): Promise<void>;
}
