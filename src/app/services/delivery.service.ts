import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Delivery} from '../models/delivery';
import {httpHeaders} from './httpHeaders';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getAllByDeliveriesByClient(clientId: number): Observable<Delivery[]>{
    let parameters = new HttpParams();
    parameters = parameters.append('size', String(10));
    parameters = parameters.append('page', String(0));
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/clients/${clientId}/deliveries/`, {headers: httpHeaders, params: parameters});
  }
  create(delivery: Delivery, clientId: number): Observable<Delivery>{
    return this.http.post<Delivery>(`${this.baseUrl}/clients/${clientId}/deliveries/`, delivery, {headers: httpHeaders});
  }
  update(delivery: Delivery, deliveryId: number): Observable<Delivery>{
    return this.http.put<Delivery>(`${this.baseUrl}/deliveries/${deliveryId}/`, delivery, {headers: httpHeaders});
  }
  getById(deliveryId: number): Observable<Delivery>{
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/deliveries/${deliveryId}/`, {headers: httpHeaders});
  }
}
