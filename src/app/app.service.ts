import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GET_API, POST_PUT_DELETE_API } from './api-config';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getUserList(): Observable<any> {
    const url = GET_API;
    return this.http.get<any>(url);
  }

  postUserDetails(details: any) {
    const url = POST_PUT_DELETE_API;
    return this.http.post<any>(url, details);
  }

  updateUserDetails(details: any) {
    const url = POST_PUT_DELETE_API;
    return this.http.put<any>(url, details);
  }

  deleteUserDetails(details: any) {
    const url = POST_PUT_DELETE_API;
    return this.http.delete<any>(url, details);
  }
}
