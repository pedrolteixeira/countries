import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-countries-chart',
  standalone: true,
  imports: [NgxChartsModule, CommonModule],
  providers: [CountriesService],
  templateUrl: './countries-chart.component.html',
  styleUrl: './countries-chart.component.css'
})
export class CountriesChartComponent {
  countries: any = [];
  populacaoPorRegiao: { [key: string]: number } = {};
  single: { name: string; value: number }[] = [];
  loading: boolean = true;

  view: any = [700, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Região';
  showYAxisLabel = true;
  yAxisLabel = 'População';
  colorScheme: any = {
    domain: ['#D50000', '#FF9100', '#FFD600', '#00B0FF', '#69F0AE', '#F50057']
  };

  constructor(public countriesService: CountriesService) {}

  ngOnInit(): void {
    this.carregarCountries();
  }

  carregarCountries(): void {
    this.countriesService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
        this.calcularPopulacaoPorRegiao();
        this.transformarObjetoGrafico();
      },
      error: (error) => console.error(error)
    })
  }

  calcularPopulacaoPorRegiao(): void {
    this.populacaoPorRegiao = this.countries.reduce((total: { [key: string]: number }, country: { region: string; population: number }) => {
      let region = country.region;
      if (!total[region]) {
        total[region] = 0;
      }
      total[region] += country.population;
      return total;
    }, {});
  }

  transformarObjetoGrafico(): void {
    this.single = Object.keys(this.populacaoPorRegiao).map(region => ({
      name: region,
      value: this.populacaoPorRegiao[region]
    }));
    this.loading = false;
  }
}
