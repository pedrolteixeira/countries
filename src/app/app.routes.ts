import { Routes } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountriesChartComponent } from './countries-chart/countries-chart.component';

export const routes: Routes = [
    { path: '', component: CountriesListComponent },
    { path: 'countries', component: CountriesListComponent },
    { path: 'chart', component: CountriesChartComponent },
];
