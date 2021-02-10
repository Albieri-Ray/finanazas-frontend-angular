import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Trust} from '../models/trust';
import {httpHeaders} from './httpHeaders';

@Injectable({
  providedIn: 'root'
})
export class TrustService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getAllTrustByAccount(accountId: number): Observable<Trust[]>{
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/accounts/${accountId}/trusts/`, {headers: httpHeaders});
  }
  create(trust: Trust, accountId: number): Observable<Trust>{
    return this.http.post<Trust>(`${this.baseUrl}/accounts/${accountId}/trusts/`, trust, {headers: httpHeaders});
  }
  update(trust: Trust, trustId: number): Observable<Trust>{
    return this.http.put<Trust>(`${this.baseUrl}/trust/${trustId}/`, trust, {headers: httpHeaders});
  }
  delete(trustId: number): Observable<void>{
    // @ts-ignore
    return this.http.delete(`${this.baseUrl}/trust/${trustId}/`, {headers: httpHeaders});
  }
  getById(trustId: number): Observable<Trust>{
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/trust/${trustId}/`, {headers: httpHeaders});
  }
}
