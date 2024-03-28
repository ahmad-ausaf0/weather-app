import { Component, OnInit } from '@angular/core';
import { WeatherAppService } from '../weather-app.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string = "";
  weatherData: any;
  temperature: number = 0;
  feelsLike: number = 0;
  description: string = "";
  mintemp: number = 0;
  maxtemp: number = 0;
  humidity: number = 0;
  wind: number = 0;
  sunset: any;
  sunrise: any;
  currenttime: any;
  name: string = '';

  showModal = false;

  constructor(private weatherService: WeatherAppService) { 
    this.weatherService.getWeatherDefault().subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
      this.temperature = this.weatherData.main.temp;
      this.mintemp = this.weatherData.main.temp_min;
      this.maxtemp = this.weatherData.main.temp_max;
      this.humidity = this.weatherData.main.humidity;
      this.wind = this.weatherData.wind.speed;
      this.description = this.weatherData.weather[0].description;
      this.feelsLike = this.weatherData.main.feels_like;
      this.name = this.weatherData.name;
      // this.city = this.weatherData.name;
      const sunriseTimestamp = this.weatherData.sys.sunrise; 
      const sunriseDate = new Date(sunriseTimestamp * 1000);
      const sunriseTime = sunriseDate.toLocaleTimeString();
      console.log(sunriseTime);
      this.sunrise = sunriseTime;

      const sunsetTimestamp = this.weatherData.sys.sunset;
      const sunsetDate = new Date(sunsetTimestamp * 1000);
      const sunsetTime = sunsetDate.toLocaleTimeString();
      console.log(sunsetTime);
      this.sunset = sunsetTime;
      
    })
  }

  ngOnInit(): void {
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
      this.name = this.weatherData.name;

      const sunriseTimestamp = this.weatherData.sys.sunrise; 
      const sunriseDate = new Date(sunriseTimestamp * 1000);
      const sunriseTime = sunriseDate.toLocaleTimeString();
      console.log(sunriseTime);
      this.sunrise = sunriseTime;

      const sunsetTimestamp = this.weatherData.sys.sunset;
      const sunsetDate = new Date(sunsetTimestamp * 1000);
      const sunsetTime = sunsetDate.toLocaleTimeString();
      console.log(sunsetTime);
      this.sunset = sunsetTime;
      
      this.city = '';
    })
  }

  openModal(): void {
    this.showModal = true;
    console.log(this.showModal);
    
  }

  closeModal(value:boolean) {
    this.showModal = value;
    console.log(this.showModal);
  }
}

// import { Component, OnInit } from '@angular/core';

// import { WeatherAppService } from '../weather-app.service';
// @Component({
//   selector: 'app-weather',
//   templateUrl: './weather.component.html',
//   styleUrls: ['./weather.component.css'],
// })
// export class WeatherComponent implements OnInit {
//   myweather: any;
//   temperature: number = 0;
//   mintemp: number = 0;
//   maxtemp: number = 0;
//   humidity: number = 0;
//   wind: number = 0;
//   city: string = 'buxar';
//   sunset: number = 0;
//   sunrise: number = 0;
//   currenttime: number = 0;

//   constructor(private weathersService: WeatherAppService) {}

//   ngOnInit(): void {
//     this.weathersService.getWeatherData(this.city).subscribe({
//       next: (res) => {
//         this.myweather = res;
//         console.log(res);
//         console.log(this.myweather);
//         this.temperature = this.myweather.main.temp;
//         this.mintemp = this.myweather.main.temp_min;
//         this.maxtemp = this.myweather.main.temp_max;
//         this.humidity = this.myweather.main.humidity;
//         this.wind = this.myweather.wind.speed;
//         this.sunset = this.myweather.sys.sunset;
//         this.sunrise = this.myweather.sys.sunrise;
//         this.currenttime = this.myweather.coord.dt;
//       },
//       complete: () => console.log('API call Success'),
//     });
//   }
// }
