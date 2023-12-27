import { OnGatewayConnection } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { SocketService } from './socket.service';
import { ISocketTodoRequest } from 'src/interfaces/todo';
export declare class SocketGateway implements OnGatewayConnection {
    private readonly socketService;
    private server;
    constructor(socketService: SocketService);
    handleConnection(socket: Socket): void;
    handleEvent(updateTodoReq: ISocketTodoRequest, socket: Socket): void;
}
