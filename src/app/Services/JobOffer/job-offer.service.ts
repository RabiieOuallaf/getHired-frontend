import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from '../../Models/Interfaces/Offer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  constructor(private http: HttpClient) { }

  private endPoint = 'http://127.0.0.1:5000/api/v1/freelance';

  getAllOffers(): Observable<Offer[]>{
    return this.http.get<Offer[]>(this.endPoint);
  }

  
}
