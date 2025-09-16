import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryStatsComponent } from './country-stats.component';

describe('CountryStatsComponent', () => {
  let component: CountryStatsComponent;
  let fixture: ComponentFixture<CountryStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryStatsComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
