import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../models/client';
import {httpHeaders} from './httpHeaders';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getAllClientsByUser(pagination: number): Observable<Client[]>{
    const userId = JSON.parse(localStorage.getItem('userId'));
    let parameters = new HttpParams();
    parameters = parameters.append('size', String(5));
    parameters = parameters.append('page', String(pagination));
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/users/${userId}/clients/`, {headers: httpHeaders, params: parameters});
  }
  create(client: Client): Observable<Client> {
    const userId = JSON.parse(localStorage.getItem('userId'));
    return this.http.post<Client>(`${this.baseUrl}/users/${userId}/clients/`, client, {headers: httpHeaders});
  }
  changeState(clientId: number): Observable<any>{
    return this.http.put(`${this.baseUrl}/clients/${clientId}/active`, {}, {headers: httpHeaders});
  }
  getById(clientId: number): Observable<Client>{
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/clients/${clientId}/`, {headers: httpHeaders});
  }
  update(client: Client, clientId: number): Observable<Client>{
    // @ts-ignore
    return this.http.put(`${this.baseUrl}/clients/${clientId}/`, client , {headers: httpHeaders});
  }
  getAllClientWithoutPagination(): Observable<Client[]>{
    const userId = JSON.parse(localStorage.getItem('userId'));
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/users/${userId}/clients/`, {headers: httpHeaders});
  }
}
