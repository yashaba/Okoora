import { Socket } from 'socket.io';
import { ISocketTodoRequest } from 'src/interfaces/todo';
export declare class SocketService {
    private readonly connectedClients;
    handleConnection(socket: Socket): void;
    handleUpdateTodos(socket: Socket, updateTodoReq: ISocketTodoRequest): void;
}
