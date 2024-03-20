import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobApplicants } from '../../Models/Interfaces/JobApplicants';

@Injectable({
  providedIn: 'root'
})
export class JobApplicantService {

  constructor(private http: HttpClient) { }

  private endPoint = 'http://localhost:8080/api/applications'
  private authEndPoint = 'http://localhost:8080/api/v1/auth/login/jobseeker'

  getApplication(applicant_id: number, jobOffer_id: number): Observable<JobApplicants>{
    const applicationndPoint = `${this.endPoint}?applicant_id=${applicant_id}&jobOffer_id=${jobOffer_id}`;
    return this.http.get<JobApplicants>(applicationndPoint);
  }

  createApplication(requestBody: {applicant_id: number, jobOffer_id: number, name: string, email : string, phone: number}): Observable<JobApplicants>{
    return this.http.post<JobApplicants>(this.endPoint, requestBody);
  }

  findApplicationsByJobOffer(jobOffer_id: number): Observable<JobApplicants[]>{
    const singleApplicationEndPoint = `${this.endPoint}/${jobOffer_id}`;
    return this.http.get<JobApplicants[]>(singleApplicationEndPoint);
  }
  authentication(requestBody: {email: string, password: string}): Observable<JobApplicants>{
    const authenticationEndPoint = `${this.authEndPoint}`;
    return this.http.post<JobApplicants>(this.authEndPoint, requestBody);
  }
}
