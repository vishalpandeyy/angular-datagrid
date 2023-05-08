import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { Country } from './country.model';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  displayedColumns = ['name', 'capital', 'subregion', 'currencies', 'languages'];
  countriesDatabase: CountriesDatabase;
  dataSource: any;
  countries: Country[] = [];
  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;
  filterValues: any = {};
  filterCount = 0;
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
    this.countriesDatabase = new CountriesDatabase(this._httpClient);

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
    this.isLoadingResults = true;
    this.countries = await this.countriesDatabase.getCountries();
    this.resultsLength = this.countries.length;
    this.dataSource = new MatTableDataSource(this.countries);
    setTimeout(() => {
      this.isLoadingResults = false;
    }, 2000)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // If the user changes the sort order, reset back to the first page.
    this.sort!.sortChange.subscribe(() => (this.paginator!.pageIndex = 0));

 
  }

  filterChange(filter: { columnProp: string | number; }, event: any) {
    this.filterValues[filter.columnProp] = event.trim().toLowerCase();
  
    this.dataSource.filterPredicate = (data: any) => {
      for (const prop in this.filterValues) {
        if (this.filterValues[prop] && data[prop]) {
          if (Array.isArray(data[prop])) {
            const subProp = this.filterSelectObj.find((o: { columnProp: string; }) => o.columnProp === prop)?.subProp;
            const matches = data[prop].some((val: { [x: string]: string; }) => val[subProp].toLowerCase().includes(this.filterValues[prop]));
            if (!matches) {
              return false;
            }
          } else if (!data[prop].toLowerCase().includes(this.filterValues[prop])) {
            return false;
          }
        }
      }
      return true;
    };
  
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }

  resetFilters(): void {
    this.filterValues = {}
    this.filterSelectObj.forEach((value: { modelValue: undefined; }, key: any) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }
}

export class CountriesDatabase {

  constructor(private _httpClient: HttpClient) {
  }

  async getCountries(): Promise<Country[]> {
    const requestUrl = 'https://restcountries.com/v2/region/europe';
    return this._httpClient.get<Country[]>(requestUrl).toPromise();
  }
}
