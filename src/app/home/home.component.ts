import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';

import { Country } from './country.model';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  @ViewChild('selectsubregion') selectsubregion!: NgSelectComponent;
  @ViewChild('selectcurrencies') selectcurrencies!: NgSelectComponent;
  @ViewChild('selectlanguages') selectlanguages!: NgSelectComponent;

  filterSelectObj: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  constructor(private _httpClient: HttpClient, private cdRef: ChangeDetectorRef) {
    this.countriesDatabase = new CountriesDatabase(this._httpClient);
    this.filterSelectObj = this.getFilterOptions()
  }
  
  getFilterOptions() {
   return [
      {
        name: 'Any Subregion',
        columnProp: 'subregion',
        modelValue:'Any subregion',
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
        modelValue:'Any currency',
  
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
        modelValue:'Any language',
  
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
      this.cdRef.detectChanges();

    }, 2000)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // If the user changes the sort order, reset back to the first page.
    this.sort!.sortChange.subscribe(() => (this.paginator!.pageIndex = 0));
  }

  setFilter(columnProp: any, value: any) {
    const filterObj = this.filterSelectObj.find((item: { columnProp: string; }) => item.columnProp === columnProp);
    filterObj.modelValue = value;
    this.filterChange(filterObj, value)
  }

  filterChange(filter: { columnProp: string | number; }, event: any) {
    this.filterValues[filter.columnProp] = event ? event.trim().toLowerCase() : null;
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
    this.dataSource.filter = "";
    this.filterSelectObj = this.getFilterOptions()
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
