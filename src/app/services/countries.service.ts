import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  api: string = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get<any>(this.api);
  }

  getCountriesByRegion(region: string): Observable<any[]> {
    return this.getCountries().pipe(
      map(countries => countries.filter((country: { region: string; }) => country.region === region))
    );
  }
}
