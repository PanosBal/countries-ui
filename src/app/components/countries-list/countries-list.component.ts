import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../models/models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule, DecimalPipe, RouterLink],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.css'
})
export class CountriesListComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
      },
      error: (err) => {
        console.error('Error fetching countries:', err);
      }
    });
  }
}
