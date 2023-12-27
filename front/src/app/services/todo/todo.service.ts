import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../../interfaces/todo/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000/todos'


  getTodos():Observable<ITodo[]> {
  return this.http.get<ITodo[]>(this.baseUrl)
  }

  getTodosByUserId(id:string):Observable<ITodo[]> {
  return this.http.get<ITodo[]>(this.baseUrl+'/userId/'+id)
  }

  createTodo(newTodo:Partial<ITodo>){
    return this.http.post<ITodo>(this.baseUrl, newTodo)
  }

  editTodo(id:string, updatedTodo:ITodo){
      return this.http.put<ITodo>(`${this.baseUrl}/${id}`, updatedTodo)
  }
  deleteTodo(id:string){
      return this.http.delete<ITodo>(`${this.baseUrl}/${id}`)
  }
}
