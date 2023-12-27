import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../../entities/todo.entity';
import { MongoRepository } from 'typeorm';
import { ObjectId } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: MongoRepository<Todo>,
  ) {}

  async getByUserId(id: string): Promise<Todo[]> {
    return this.todoRepository.find({ where: { userId: id } });
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async create(todo: Todo): Promise<Todo> {
    return this.todoRepository.save(todo);
  }

  async update(id: ObjectId, todo: Todo): Promise<Todo> {
    await this.todoRepository.update(id, todo);
    const updatedTodo = await this.todoRepository.findOne({ where: { id } });
    return updatedTodo;
  }

  async remove(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
