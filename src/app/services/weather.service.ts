import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  getWeather(location: string): Observable<string> {
    const url: string = environment.weatherUrl;
    const apiKey: string = environment.weatherApiKey;
    return this.httpClient.get<string>(`${url}?access_key=${apiKey}&query=${location}`);
  }

}
