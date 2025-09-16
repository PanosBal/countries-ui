import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country, Language, CountryMaxGdpRatio, CountryStatsView,  Region } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl + 'countries');
  }

  getLanguagesByCountry(id: number): Observable<Language[]> {
    return this.http.get<Language[]>(this.baseUrl + 'countries/' + id + '/languages');
  }

  getMaxGdpPerPopulation(): Observable<CountryMaxGdpRatio[]> {
    return this.http.get<CountryMaxGdpRatio[]>(this.baseUrl + 'stats/max-gdp-per-pop');
  }

  getCountryStats(params: {
    regionId?: number | null;
    yearFrom?: number | null;
    yearTo?: number | null;
    page?: number;
    size?: number;
  }): Observable<CountryStatsView[]> {
    const query: any = {};
    if (params.regionId != null) query.regionId = params.regionId;
    if (params.yearFrom != null) query.yearFrom = params.yearFrom;
    if (params.yearTo != null) query.yearTo = params.yearTo;
    if (params.page != null) query.page = params.page;
    if (params.size != null) query.size = params.size;

    return this.http.get<CountryStatsView[]>(this.baseUrl + 'stats/country-stats', {
      params: query
    });
  }

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>('http://localhost:8080/api/regions');
  }
}
