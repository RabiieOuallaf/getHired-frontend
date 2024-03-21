import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../../Models/Interfaces/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  private authEndPoint = 'http://localhost:8080/api/v1/auth/login/admin'

  authentication(requestBody: {email: string, password: string}) : Observable<Admin> {
    return this.http.post<Admin>(this.authEndPoint, requestBody);
  }
}
