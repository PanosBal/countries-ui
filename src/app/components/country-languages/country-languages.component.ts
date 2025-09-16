import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CountriesService} from '../../services/countries.service';
import { Language } from '../../models/models';

@Component({
  selector: 'app-country-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-languages.component.html',
  styleUrl: './country-languages.component.css'
})
export class CountryLanguagesComponent {
  languages: Language[] = [];
  countryId!: number;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.countryId = Number(this.route.snapshot.paramMap.get('id'));

    this.countriesService.getLanguagesByCountry(this.countryId).subscribe({
      next: (data) => {
        this.languages = data;
      },
      error: (err) => {
        console.error('Error fetching languages:', err);
      }
    });
  }
}
