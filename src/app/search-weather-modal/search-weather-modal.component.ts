import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { WeatherAppService } from '../weather-app.service';

@Component({
  selector: 'app-search-weather-modal',
  templateUrl: './search-weather-modal.component.html',
  styleUrls: ['./search-weather-modal.component.css']
})
export class SearchWeatherModalComponent implements OnInit {

  city: string = "";
  weatherData: any;
  temperature: number = 0;
  feelsLike: number = 0;
  description: string = "";
  mintemp: number = 0;
  maxtemp: number = 0;
  humidity: number = 0;
  wind: number = 0;
  sunset: number = 0;
  sunrise: number = 0;
  currenttime: number = 0;
  
  showModalValue = false;
  @Output("closeShowModal") closeShowModal: EventEmitter<boolean> = new EventEmitter();

  constructor(private weatherService: WeatherAppService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.closeShowModal.emit(this.showModalValue);
  }

  
  getWeather() {
    this.weatherService.getWeatherData(this.city)
    .subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
      this.temperature = this.weatherData.main.temp;
      this.mintemp = this.weatherData.main.temp_min;
      this.maxtemp = this.weatherData.main.temp_max;
      this.humidity = this.weatherData.main.humidity;
      this.wind = this.weatherData.wind.speed;
      this.sunset = this.weatherData.sys.sunset;
      this.sunrise = this.weatherData.sys.sunrise;
      this.currenttime = this.weatherData.coord.dt;
      this.description = this.weatherData.weather[0].description;
      this.feelsLike = this.weatherData.main.feels_like;
    })
  }

}
