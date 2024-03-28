import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherAppService } from './weather-app.service';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';
import { SearchWeatherModalComponent } from './search-weather-modal/search-weather-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SearchWeatherModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
