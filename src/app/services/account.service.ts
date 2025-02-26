import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account} from '../models/account';
import {httpHeaders} from './httpHeaders';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getAllAccountsByClient(clientId: number): Observable<Account[]>{
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/clients/${clientId}/accounts/`, {headers: httpHeaders});
  }
  create(lineOfCreditId: number, maintenanceId: number, clientId: number): Observable<Account>{
    // @ts-ignore
    return this.http.post(`${this.baseUrl}/clients/${clientId}/maintenances/${maintenanceId}/lineOfCredits/${lineOfCreditId}/accounts/`
      , {}, {headers: httpHeaders});
  }
  updateMaintenance(maintenanceId: number, accountId: number): Observable<Account>{
    // @ts-ignore
    return this.http.put(`${this.baseUrl}/maintenances/${maintenanceId}/accounts/${accountId}/`, {}, {headers: httpHeaders});
  }
}
