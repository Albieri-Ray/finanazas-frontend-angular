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
  getAllClientsByUser(): Observable<Client[]>{
    const userId = JSON.parse(localStorage.getItem('userId'));
    let parameters = new HttpParams();
    parameters = parameters.append('size', String(5));
    parameters = parameters.append('page', String(0));
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/users/${userId}/clients/`, {headers: httpHeaders, params: parameters});
  }
}
