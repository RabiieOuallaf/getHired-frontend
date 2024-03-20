import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobApplicants } from '../../Models/Interfaces/JobApplicants';
import { Applicant } from '../../Models/Interfaces/Applicants';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private http: HttpClient) { }

  private authEndPoint = 'http://localhost:8080/api/v1/auth/login/jobseeker'

  authentication(requestBody: {email: string, password: string}): Observable<Applicant>{
   
    return this.http.post<Applicant>(this.authEndPoint, requestBody);
  }
}
