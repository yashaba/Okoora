import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userId: string = '';
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/users';

  setUserId(userId: string) {
    this.userId = userId;
  }

  login(username:string, password:string): Observable<string | null> {
    return this.http.post<string | null>(this.baseUrl + '/login', { username, password }).pipe(tap((res) => {
      if (res) {
        this.setUserId(res);
      }
    }));
  }

  logout(){
  this.setUserId('');
  }
}