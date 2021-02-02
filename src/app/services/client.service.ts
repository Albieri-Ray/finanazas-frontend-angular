import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getAllClientsByUser(): Observable<Client[]>{
    const userId = JSON.parse(localStorage.getItem('userId'));
    const token = JSON.parse(localStorage.getItem('token'));

    /*const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${token}`)
    };*/
    let parameters = new HttpParams();
    parameters = parameters.append('size', String(5));
    parameters = parameters.append('page', String(0));
    // const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/users/${userId}/clients/`, {headers: httpHeaders, params: parameters});
  }
}
