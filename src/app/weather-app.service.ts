import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherAppService {

  apiKey = '567e2f2df17e6e39a6246e6cb0b9e583';
  constructor(private http: HttpClient) { }

  getWeatherData(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`);
  }

  getWeatherDefault() {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${this.apiKey}&units=metric`);
    //https://api.openweathermap.org/data/2.5/forecast?q=Delhi&appid=76c425f83d3dd4a696721e5d4d4cc3fe&units=metric
  }
}
