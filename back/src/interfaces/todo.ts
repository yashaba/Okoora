export interface ITodo {
  id: string;
  userId: string;
  title: string;
  completed: boolean;
}

export interface ISocketTodoRequest {
  type: string;
  data: ITodo;
}
