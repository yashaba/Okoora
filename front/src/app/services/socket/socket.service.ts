import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { ITodo } from '../../interfaces/todo/todo';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  sendMessage(message: {type:string,data:ITodo}): void {
    this.socket.emit('updateTodos', message);
  }

  receiveMessage(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('updateTodos', (data: string) => {
        observer.next(data);
      });
    });
  }
}
