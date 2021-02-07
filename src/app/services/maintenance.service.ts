import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Maintenance} from '../models/maintenance';
import {httpHeaders} from './httpHeaders';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getAllMaintenanceByUser(): Observable<Maintenance[]>{
    const userId = JSON.parse(localStorage.getItem('userId'));
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/users/${userId}/maintenances/`, {headers: httpHeaders});
  }
  create(maintenance: Maintenance): Observable<Maintenance> {
    const userId = JSON.parse(localStorage.getItem('userId'));
    return this.http.post<Maintenance>(`${this.baseUrl}/users/${userId}/maintenances/`, maintenance, {headers: httpHeaders});
  }
  getById(maintenanceId: number): Observable<Maintenance>{
    // @ts-ignore
    return this.http.get(`${this.baseUrl}/maintenances/${maintenanceId}/`, {headers: httpHeaders});
  }
  update(maintenance: Maintenance, maintenanceId: number): Observable<Maintenance>{
    // @ts-ignore
    return this.http.put(`${this.baseUrl}/maintenances/${maintenanceId}/`, maintenance, {headers: httpHeaders});
  }
  delete(maintenanceId: number): Observable<void>{
    // @ts-ignore
    return this.http.delete(`${this.baseUrl}/maintenances/${maintenanceId}/`, {headers: httpHeaders});
  }
}
