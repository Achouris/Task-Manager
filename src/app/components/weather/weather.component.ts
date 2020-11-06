import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherSearchForm: FormGroup;
  weather: any;

  constructor(private weatherService: WeatherService, private fb: FormBuilder) {
    this.weatherSearchForm = this.fb.group({
      location: ''
    });
  }

  ngOnInit(): void {
  }

  getWeather() {
    const location: string = this.weatherSearchForm.get('location').value;
    this.weatherService.getWeather(location).subscribe((res) => {
      this.weather = res;
    });
  }

}
