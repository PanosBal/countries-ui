import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaxGdpRatioComponent } from './max-gdp-ratio.component';

describe('MaxGdpRatioComponent', () => {
  let component: MaxGdpRatioComponent;
  let fixture: ComponentFixture<MaxGdpRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaxGdpRatioComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaxGdpRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
