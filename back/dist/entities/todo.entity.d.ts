import { ObjectId } from 'typeorm';
export declare class Todo {
    id: ObjectId;
    userId: string;
    title: string;
    completed: boolean;
}
