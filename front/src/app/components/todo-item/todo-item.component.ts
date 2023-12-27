import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { ITodo } from '../../interfaces/todo/todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})



export class TodoItemComponent implements OnInit {
  @Input({required: true})
  todo!: ITodo;
  @Output() deleteTodoEvent = new EventEmitter<string>()
  @Output() todoEditedEvent = new EventEmitter<string>()

  isEditing: boolean = false
  updateTxt: string = '';
  
  applyEditTxt(){
  this.todo.title = this.updateTxt
  this.editTodo()
  this.isEditing = false
  }

  cancelEditTxt(){
    this.updateTxt = this.todo.title 
    this.isEditing = false
    }

  editTodo(){
    this.todoEditedEvent.emit(JSON.stringify(this.todo))
  }

  toggleTodo(todo: ITodo){
    todo.completed = !todo.completed
  }

  ngOnInit(){
    this.updateTxt = this.todo.title
  }

  deleteTodo(){
  this.deleteTodoEvent.emit(JSON.stringify(this.todo))
  }

}
