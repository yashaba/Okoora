import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Todo {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  userId: string;

  @Column()
  title: string;

  @Column()
  completed: boolean;
}
