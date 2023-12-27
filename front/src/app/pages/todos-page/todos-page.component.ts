import { Component, OnInit, signal } from '@angular/core';
import { ISocketTodoResponse, ITodo } from '../../interfaces/todo/todo';
import { TodoService } from '../../services/todo/todo.service';
import { SocketService } from '../../services/socket/socket.service';
import { AuthGuard } from '../../services/auth/auth.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss'],
})



export class TodosPageComponent implements OnInit {
  newTodoTxt: string = '';
  destroy$ = new Subject()
  userId: string = this.userService.userId
  todoFilter: string = 'ALL'
  displayAmount = 20
  
  constructor(private todoService: TodoService, private socketService: SocketService, private userService: UserService, private router: Router) {
  }
  todos: ITodo[] = []
  
  editTodo(todoStr: string) {
    const updatedTodo = JSON.parse(todoStr) as ITodo
    this.todoService.editTodo(updatedTodo.id, updatedTodo)
    .pipe(takeUntil(this.destroy$))
    .subscribe((updatedTodoRes) => {
      if (updatedTodoRes) {
        let targetTodo = this.todos.find((todo) => todo.id === updatedTodoRes.id)
        if (targetTodo) {
          targetTodo = updatedTodoRes
          this.socketService.sendMessage({ type: 'UPDATE', data: updatedTodoRes })
        }
      }
    })
    
  }
  
  deleteTodo(todoToDeleteStr: string) {
    const todoToDelete = JSON.parse(todoToDeleteStr) as ITodo
    this.todoService.deleteTodo(todoToDelete.id).subscribe(() => {
      this.socketService.sendMessage({ type: 'DELETE', data: todoToDelete })
      this.todos = this.todos.filter((todo) => todo.id !== todoToDelete.id)
    })
  }
  
  createTodo() {
    this.newTodoTxt = this.newTodoTxt.trim()
    if (!this.newTodoTxt) return
    const newTodo: Partial<ITodo> = { completed: false, title: this.newTodoTxt, userId: this.userId }
    this.todoService.createTodo(newTodo).pipe(takeUntil(this.destroy$)).subscribe((newTodoRes) => {
      this.todos = [newTodoRes, ...this.todos]
      this.socketService.sendMessage({ type: 'CREATE', data: newTodoRes })
    })
    
    this.newTodoTxt = ''
  }
  
  filterTodos(filter: string, displayAmount: number) {
    switch (filter) {
      case 'ALL':
        return this.todos.slice(0, displayAmount)
        
        case 'DONE':
          return this.todos.filter((todo) => todo.completed).slice(0, displayAmount)
          
          case 'ACTIVE':
            return this.todos.filter((todo) => !todo.completed).slice(0, displayAmount)
            
            default:
              return this.todos
            }
    }

  ngOnInit() {
    this.todoService.getTodosByUserId(this.userId).pipe(takeUntil(this.destroy$)).subscribe((todos) => {
      this.todos = todos
    })
    
    this.socketService.receiveMessage().pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.handleSocketResponse(JSON.parse(res))
    })
  }

  logout() {
    this.userService.logout()
    this.router.navigate(['/'])
  }
  
  handleSocketResponse(res: ISocketTodoResponse) {
    switch (res.type) {
      case 'CREATE':
        this.todos = [res.data, ...this.todos];
        break;
        case 'UPDATE':
        const index = this.todos.findIndex((todo) => todo.id === res.data.id);
        if (index !== -1) {
          this.todos[index] = res.data;
        }
        break;
        case 'DELETE':
          const idx = this.todos.findIndex((todo) => todo.id === res.data.id);
          if (idx !== -1) {
            this.todos.splice(idx, 1)
        }
        break;
      default:
        console.warn(`Unhandled message type: ${res.type}`);
    }
  }

  ngOnDestroy() {
    this.destroy$.next(null)
    this.destroy$.complete()
  }


  calculateTodos() {
    const doneTodos = this.todos.filter((todo) => todo.completed).length
    const doneTodoPrecentage = doneTodos / this.todos.length * 100
    return doneTodoPrecentage
  }
}
