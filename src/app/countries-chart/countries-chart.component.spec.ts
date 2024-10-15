import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesChartComponent } from './countries-chart.component';

describe('CountriesChartComponent', () => {
  let component: CountriesChartComponent;
  let fixture: ComponentFixture<CountriesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
