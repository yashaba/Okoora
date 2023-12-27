import { WebSocketGateway, OnGatewayConnection, WebSocketServer,SubscribeMessage,MessageBody,ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { SocketService } from './socket.service';
import { ISocketTodoRequest } from 'src/interfaces/todo';


@WebSocketGateway({ cors: true })
export class SocketGateway implements OnGatewayConnection {
  @WebSocketServer()
  private server: Socket;

  constructor(private readonly socketService: SocketService) {}

  handleConnection(socket: Socket): void {
    this.socketService.handleConnection(socket);
  }

  @SubscribeMessage('updateTodos')
  handleEvent(@MessageBody() updateTodoReq: ISocketTodoRequest,@ConnectedSocket() socket: Socket) {
    this.socketService.handleUpdateTodos(socket, updateTodoReq);


}


}