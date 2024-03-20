import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from '../../Models/Interfaces/Applicants';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private http: HttpClient) { }

  private authEndPoint = 'http://localhost:8080/api/v1/auth/login/jobseeker'
  private registerEndPoint = 'http://localhost:8080/api/v1/auth/register/jobseeker'

  authentication(requestBody: {email: string, password: string}): Observable<Applicant>{
   
    return this.http.post<Applicant>(this.authEndPoint, requestBody);
  }
  register(requestBody: {email: string, password: string, first_name: string, last_name: string, birthdate: string, industry_id: number, education_level: string, education_institute_id: number, phone: string}): Observable<Applicant>{
    return this.http.post<Applicant>(this.registerEndPoint, requestBody);
  }
}
