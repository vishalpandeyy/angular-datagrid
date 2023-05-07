import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatSort, SortDirection } from '@angular/material/sort';
import { Observable, merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { Country } from './country.model';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements AfterViewInit {
  displayedColumns = ['name', 'capital', 'subregion', 'currencies', 'languages'];
  countriesDatabase: CountriesDatabase | undefined;
  dataSource: any;
  countries: Country[] = [];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  filterValues = {};
  filterSelectObj: any = [
    {
      name: 'Any Subregion',
      columnProp: 'subregion',
      options: (countries: Country[]) => {
        const uniqueSubregions = new Set();
        for (let i = 0; i < countries.length; i++) {
          uniqueSubregions.add(countries[i].subregion);
        }
        return Array.from(uniqueSubregions);
      }
    }, {
      name: 'Any Currency',
      columnProp: 'currencies',
      subProp: 'name',
      options:(countries: Country[]) => {
        const uniqueCurrencies = new Set();
        for (let i = 0; i < countries.length; i++) {
          const currencies = countries[i].currencies;
          for (let j = 0; j < currencies.length; j++) {
            uniqueCurrencies.add(currencies[j].name);
          }
        }
        return Array.from(uniqueCurrencies);
      }
    }, {
      name: 'Any Language',
      columnProp: 'languages',
      subProp: 'name',
      options: (countries: Country[]) => {
        const uniqueLanguages = new Set();
        for (let i = 0; i < countries.length; i++) {
          const languages = countries[i].languages;

          for (let j = 0; j < languages.length; j++) {
            uniqueLanguages.add(languages[j].name);
          }
        }
        return Array.from(uniqueLanguages);
      }
    }
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  constructor(private _httpClient: HttpClient) {

  }
  getFilterObject(fullObj: any, columnProp: string, subProp?: string) {
    const uniqChk: any[] = [];
    fullObj.filter((obj: any) => {
      const val = subProp ? obj[columnProp][0][subProp] : obj[columnProp]
      if (!uniqChk.includes(val)) {
        uniqChk.push(val);
      }
      return obj;
    });
    return uniqChk;
  }
  async ngAfterViewInit() {
    this.countriesDatabase = new CountriesDatabase(this._httpClient);
    this.countries = await this.countriesDatabase.getCountries();
    this.dataSource = new MatTableDataSource(this.countries);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // If the user changes the sort order, reset back to the first page.
    this.sort!.sortChange.subscribe(() => (this.paginator!.pageIndex = 0));

    // this.filterSelectObj.filter((o: { options: any[]; columnProp: string; subProp: string;}) => {
    //     o.options = this.getFilterObject(this.countries, o.columnProp);
    // });
  }

  filterChange(filter: string, event: Event) {

  }

  resetFilters() {

  }
  applyFilter(event: Event, columnName: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (columnName === 'name') {
      this.dataSource.filterPredicate = (data: Country, filter: string) => {
        const name = data.name.toLowerCase();
        return name.indexOf(filter) !== -1;
      };
    }
  }
}



// datasource
// https://restcountries.com/v2/region/europe


export class CountriesDatabase {

  constructor(private _httpClient: HttpClient) {
  }

  async getCountries(): Promise<Country[]> {
    const requestUrl = 'https://restcountries.com/v2/region/europe';
    return this._httpClient.get<Country[]>(requestUrl).toPromise();
  }


}