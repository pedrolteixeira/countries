import { Component } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Country } from '../models/country.model';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  providers: [CountriesService],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.css'
})
export class CountriesListComponent {
  countries: Country[] = [];
  loading: boolean = true;

  pagina: any = 1;
  itemsPerPage: number = 15;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.carregarCountries('');
  }

  carregarCountries(region: string): void {
    this.loading = true;
    if (region) {
      this.countriesService.getCountriesByRegion(region).subscribe({
        next: (data) => {
          this.countries = data;
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
          this.loading = false;
        }
      });
    } else {
      this.countriesService.getCountries().subscribe({
        next: (data) => {
          this.countries = data;
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
          this.loading = false;
        }
      });
    }
  }
  
}
