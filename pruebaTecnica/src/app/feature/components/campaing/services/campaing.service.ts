import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Campaing } from '../models/campaing.model';

@Injectable({
  providedIn: 'root'
})
export class CampaingService {

  constructor(private http:HttpClient) { }

  getCampaings():Observable<Campaing[]>{
    return this.http.get<Campaing[]>(environment.campanyasUrl);
  }

  updateCampaing(campaing: Campaing): Observable<Campaing> {
    return this.http.put<Campaing>(`${environment.campanyasUrl}/${campaing.id}`, campaing);
  }

  deleteCampaing(campaingId:number): Observable<Campaing> {
    return this.http.delete<Campaing>(`${environment.campanyasUrl}/${campaingId}`);
  }

  addCampaing(campaing: Campaing): Observable<Campaing> {
    return this.http.post<Campaing>(environment.campanyasUrl, campaing);
  }
}
