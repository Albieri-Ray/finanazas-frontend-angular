import {HttpHeaders} from '@angular/common/http';
const token = JSON.parse(localStorage.getItem('token'));
export const httpHeaders: HttpHeaders = new HttpHeaders({
  Authorization: `Bearer ${token}`
});

