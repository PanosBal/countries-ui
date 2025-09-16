import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountriesService} from '../../services/countries.service';
import { CountryStatsView, Region } from '../../models/models';

@Component({
  selector: 'app-country-stats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country-stats.component.html',
  styleUrl: './country-stats.component.css'
})
export class CountryStatsComponent implements OnInit {
  stats: CountryStatsView[] = [];
  total = 0;
  regions: Region[] = [];

  selectedRegionId: number | null = null;
  yearFrom: number | null = null;
  yearTo: number | null = null;

  page = 0;
  size = 15;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.loadRegions();
    this.loadStats();
  }

  loadRegions(): void {
    this.countriesService.getRegions().subscribe({
      next: (data) => (this.regions = data),
      error: (err) => console.error('Error fetching regions', err)
    });
  }

  loadStats(): void {
    this.countriesService
      .getCountryStats({
        regionId: this.selectedRegionId,
        yearFrom: this.yearFrom,
        yearTo: this.yearTo,
        page: this.page,
        size: this.size
      })
      .subscribe({
        next: (data: any) => {
          this.stats = data.items;
          this.total = data.total;
        },
        error: (err) => {
          console.error('Error fetching stats', err);
        }
      });
  }

  applyFilters(): void {
    this.page = 0;
    this.loadStats();
  }

  nextPage(): void {
    this.page++;
    this.loadStats();
  }

  prevPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadStats();
    }
  }
}
