import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {Login} from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  login(login: Login): Observable<any> {
    return this.http.post<Login>(`${this.baseUrl}/login/`, login);
  }
  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register/`, user);
  }
}
