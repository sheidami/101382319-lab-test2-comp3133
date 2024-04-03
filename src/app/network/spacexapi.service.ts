
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Mission } from '../models/mission';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {
 
  private REST_API_URL = "https://api.spacexdata.com/v3/launches";

  constructor(private httpClient: HttpClient, private router: Router) { }

  public navigate(commands: any[], extras?: { state: { mission: Mission } }): void {
    this.router.navigate(commands, extras);
  }

  public getAllList(): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(this.REST_API_URL).pipe(retry(3))
  }
  public getFilteredMissionsByYear(launch_year: string) : Observable<Mission[]> {
    const FILTER_MISSION = `https://api.spacexdata.com/v3/launches?launch_year=${launch_year}`
    return this.httpClient.get<Mission[]>(FILTER_MISSION).pipe(retry(3))
  }

  public getMissionListDetailsByFlightNumber(flight_number: string) : Observable<Mission> {
    const FILTER_BY_FLIGHT = `https://api.spacexdata.com/v3/launches/${flight_number}`
    return this.httpClient.get<Mission>(FILTER_BY_FLIGHT).pipe(retry(3))
  }
  
}