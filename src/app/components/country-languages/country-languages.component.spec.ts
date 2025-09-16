import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryLanguagesComponent } from './country-languages.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

describe('CountryLanguagesComponent', () => {
  let component: CountryLanguagesComponent;
  let fixture: ComponentFixture<CountryLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryLanguagesComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '2' } } }
        },
        {
          provide: CountriesService,
          useValue: {
            getLanguagesByCountry: () =>
              of([{ language: 'Greek' }, { language: 'English' }])
          }
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
