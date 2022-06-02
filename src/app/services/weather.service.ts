import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherURL: string = "http://localhost:3000/weather"
  constructor(private httpClient: HttpClient) { }

  getWeather(obj) {
    return this.httpClient.post<{ result: any }>(this.weatherURL, obj);
  }

  // Send Req to get all teams from Sport Data API
  getCountryTeams(obj) {
    return this.httpClient.post(`http://localhost:3000/api/teams`, obj)
  }

}
