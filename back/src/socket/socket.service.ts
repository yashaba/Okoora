import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { ISocketTodoRequest } from 'src/interfaces/todo';

@Injectable()
export class SocketService {
  private readonly connectedClients: Map<string, Socket> = new Map();

  handleConnection(socket: Socket): void {
    const clientId = socket.id;
    this.connectedClients.set(clientId, socket);

    socket.on('disconnect', () => {
      this.connectedClients.delete(clientId);
    });
  }

  handleUpdateTodos(socket: Socket, updateTodoReq: ISocketTodoRequest) {
    socket.broadcast.emit('updateTodos', JSON.stringify(updateTodoReq));
  }
}
