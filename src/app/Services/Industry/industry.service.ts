import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Industry } from '../../Models/Interfaces/Industry';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor(private http: HttpClient) { }
  private endPoint = 'http://localhost:8080/api/v1/industry'

  getIndustries(): Observable<Industry[]>{

    const industries = this.http.get<Industry[]>(`${this.endPoint}/getAll`);
    return industries;
  }

  createIndustry(requestBody: {name: string}): Observable<Industry>{
    return this.http.post<Industry>(`${this.endPoint}/create`, requestBody);
  }

  deleteIndustry(name: string): Observable<Industry>{
    return this.http.delete<Industry>(`${this.endPoint}/delete/${name}`);  }
  
}
