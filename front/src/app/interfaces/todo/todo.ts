export interface ITodo {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

export interface ISocketTodoResponse {
  type: 'CREATE' | 'UPDATE' | 'DELETE';
  data: ITodo;
}
