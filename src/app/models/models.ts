export interface Country {
  countryId: number;
  name: string;
  area: number;
  countryCode2: string;
}

export interface Language {
  language: string;
}

export interface CountryMaxGdpRatio {
  name: string;
  countryCode3: string;
  year: number;
  population: number;
  gdp: number;
}

export interface CountryStatsView {
  continentName: string;
  regionId: number;
  regionName: string;
  countryName: string;
  year: number;
  population: number;
  gdp: number;
}

export interface Region {
  regionId: number;
  name: string;
}