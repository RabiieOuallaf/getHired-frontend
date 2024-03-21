import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { educationInstitute } from '../../Models/Interfaces/educationInstitue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationInstituteService {

  constructor(private http: HttpClient) { }
  private endPoint = 'http://localhost:8080/api/v1/education-institute'

  getEducationInstitutes() :Observable<educationInstitute[]>{
    return this.http.get<educationInstitute[]>(`${this.endPoint}/getAll`);
  }

  createEducationInstitute(requestBody: {name: string}) : Observable<educationInstitute>{
    return this.http.post<educationInstitute>(`${this.endPoint}/create`, requestBody);
  }

  deleteEducationInstitute(name: string): Observable<educationInstitute>{
    return this.http.delete<educationInstitute>(`${this.endPoint}/delete/${name}`);
  }
}
