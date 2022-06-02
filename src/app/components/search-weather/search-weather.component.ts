import { WeatherService } from './../../services/weather.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css']
})
export class SearchWeatherComponent implements OnInit {

  weatherForm: FormGroup;
  weatherResult: any;
  path:string;
  constructor(
    private X: FormBuilder,
    private weatherService: WeatherService,
    private router: Router) { }

  ngOnInit() {
    this.weatherForm = this.X.group({
      city: ['', [Validators.required]],

    })
  }

  search() {
    console.log('Here city', this.weatherForm.value);
    this.weatherService.getWeather(this.weatherForm.value).subscribe(
      (data) => {
        console.log('Here weather data from BE', data.result);
        this.weatherResult = data.result;
        this.path = `https://openweathermap.org/img/w/${data.result.image}.png`;
      }
    )
  }

}
