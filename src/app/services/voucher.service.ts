import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Voucher} from '../models/voucher';
import {httpHeaders} from './httpHeaders';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getAllVouchersByDelivery(deliveryId: number): Observable<Voucher[]>{
    let parameters = new HttpParams();
    parameters = parameters.append('size', String(10));
    parameters = parameters.append('page', String(0));
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/deliveries/${deliveryId}/vouchers/`, {headers: httpHeaders, params: parameters});
  }
  create(deliveryId: number): Observable<Voucher>{
    // @ts-ignore
    return this.http.post(`${this.baseUrl}/deliveries/${deliveryId}/vouchers/`, {}, {headers: httpHeaders});
  }
  delete(voucherId: number): Observable<void>{
    // @ts-ignore
    return this.http.delete(`${this.baseUrl}/vouchers/${voucherId}/`, {headers: httpHeaders});
  }
}
