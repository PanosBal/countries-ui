import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryLanguagesComponent } from './components/country-languages/country-languages.component';
import { MaxGdpRatioComponent } from './components/max-gdp-ratio/max-gdp-ratio.component';
import { CountryStatsComponent } from './components/country-stats/country-stats.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countries', component: CountriesListComponent },
  { path: 'countries/:id/languages', component: CountryLanguagesComponent },
  { path: 'stats/max-gdp-per-pop', component: MaxGdpRatioComponent },
  { path: 'stats/country-stats', component: CountryStatsComponent },
  { path: '**', redirectTo: '' }
];