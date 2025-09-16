import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesService} from '../../services/countries.service';
import { CountryMaxGdpRatio } from '../../models/models';

@Component({
  selector: 'app-max-gdp-ratio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './max-gdp-ratio.component.html',
  styleUrl: './max-gdp-ratio.component.css'
})
export class MaxGdpRatioComponent implements OnInit {
  records: CountryMaxGdpRatio[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getMaxGdpPerPopulation().subscribe({
      next: (data) => {
        this.records = data;
      },
      error: (err) => {
        console.error('Error fetching max GDP/population stats:', err);
      }
    });
  }
}
