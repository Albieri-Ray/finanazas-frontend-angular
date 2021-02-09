import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LineOfCredit} from '../models/line-of-credit';
import {httpHeaders} from './httpHeaders';

@Injectable({
  providedIn: 'root'
})
export class LineOfCreditService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getLineOfCreditById(lineOfCreditId: number): Observable<LineOfCredit>{
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/lineaOfCredits/${lineOfCreditId}/`, {headers: httpHeaders});
  }
  create(lineOfCredit: LineOfCredit): Observable<LineOfCredit>{
    // @ts-ignore
    return this.http.post(`${this.baseUrl}/lineaOfCredits/`, lineOfCredit, {headers: httpHeaders});
  }
  getById(lineOfCreditId: number): Observable<LineOfCredit>{
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/lineaOfCredits/${lineOfCreditId}/`, {headers: httpHeaders});
  }
  update(lineOfCredit: LineOfCredit, lineOfCreditId: number): Observable<LineOfCredit>{
    // @ts-ignore
    return this.http.put(`${this.baseUrl}/lineaOfCredits/${lineOfCreditId}/`, lineOfCredit, {headers: httpHeaders});
  }
}
