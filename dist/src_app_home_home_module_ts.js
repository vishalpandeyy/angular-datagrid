"use strict";
(self["webpackChunkangular_seed"] = self["webpackChunkangular_seed"] || []).push([["src_app_home_home_module_ts"],{

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountriesDatabase": () => (/* binding */ CountriesDatabase),
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _Users_vishalpandey_Documents_GitHub_angular_datagrid_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 6907);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 5096);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 3348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 9101);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 6322);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);

















const _c0 = ["selectsubregion"];
const _c1 = ["selectcurrencies"];
const _c2 = ["selectlanguages"];
function HomeComponent_div_6_div_3_ng_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ng-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19);
  }
}
function HomeComponent_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ng-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_6_div_3_Template_ng_select_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const filter_r16 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](filter_r16.modelValue = $event);
    })("ngModelChange", function HomeComponent_div_6_div_3_Template_ng_select_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const filter_r16 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.filterChange(filter_r16, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_6_div_3_ng_option_2_Template, 2, 2, "ng-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const filter_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false)("ngModel", filter_r16.modelValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", filter_r16.options(ctx_r15.countries));
  }
}
function HomeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function HomeComponent_div_6_Template_input_keyup_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.filterChange({
        columnProp: "name"
      }, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeComponent_div_6_div_3_Template, 3, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.resetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.filterSelectObj);
  }
}
function HomeComponent_p_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " out of");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r26.dataSource.filteredData.length);
  }
}
function HomeComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Showing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_p_8_span_2_Template, 4, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.dataSource.filteredData.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.resultsLength, "");
  }
}
function HomeComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Capital");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r27.capital);
  }
}
function HomeComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r28.name);
  }
}
function HomeComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Subregion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 31)(1, "span")(2, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_td_21_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const row_r29 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.setFilter("subregion", row_r29.subregion));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r29.subregion, "");
  }
}
function HomeComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Currencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeComponent_td_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_td_24_span_1_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);
      const currency_r34 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.setFilter("currencies", currency_r34.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const currency_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", currency_r34.name, "");
  }
}
function HomeComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_td_24_span_1_Template, 3, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r32.currencies);
  }
}
function HomeComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Languages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HomeComponent_td_27_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span")(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_td_27_span_1_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);
      const language_r39 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.setFilter("languages", language_r39.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const language_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", language_r39.name, "");
  }
}
function HomeComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_td_27_span_1_Template, 3, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r37.languages);
  }
}
function HomeComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 34);
  }
}
function HomeComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 35);
  }
}
const _c3 = function (a0, a1) {
  return {
    "refresh-icon": a0,
    "loading": a1
  };
};
class HomeComponent {
  constructor(_httpClient, cdRef) {
    this._httpClient = _httpClient;
    this.cdRef = cdRef;
    this.displayedColumns = ['name', 'capital', 'subregion', 'currencies', 'languages'];
    this.countries = [];
    this.resultsLength = 0;
    this.isLoadingResults = false;
    this.isRateLimitReached = false;
    this.filterValues = {};
    this.filterCount = 0;
    this.filterSelectObj = [];
    this.countriesDatabase = new CountriesDatabase(this._httpClient);
    this.filterSelectObj = this.getFilterOptions();
  }
  getFilterOptions() {
    return [{
      name: 'Any Subregion',
      columnProp: 'subregion',
      modelValue: 'Any subregion',
      options: countries => {
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
      modelValue: 'Any currency',
      options: countries => {
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
      modelValue: 'Any language',
      options: countries => {
        const uniqueLanguages = new Set();
        for (let i = 0; i < countries.length; i++) {
          const languages = countries[i].languages;
          for (let j = 0; j < languages.length; j++) {
            uniqueLanguages.add(languages[j].name);
          }
        }
        return Array.from(uniqueLanguages);
      }
    }];
  }
  getFilterObject(fullObj, columnProp, subProp) {
    const uniqChk = [];
    fullObj.filter(obj => {
      const val = subProp ? obj[columnProp][0][subProp] : obj[columnProp];
      if (!uniqChk.includes(val)) {
        uniqChk.push(val);
      }
      return obj;
    });
    return uniqChk;
  }
  ngAfterViewInit() {
    var _this = this;
    return (0,_Users_vishalpandey_Documents_GitHub_angular_datagrid_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoadingResults = true;
      _this.countries = yield _this.countriesDatabase.getCountries();
      _this.resultsLength = _this.countries.length;
      _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(_this.countries);
      setTimeout(() => {
        _this.isLoadingResults = false;
        _this.cdRef.detectChanges();
      }, 2000);
      _this.dataSource.paginator = _this.paginator;
      _this.dataSource.sort = _this.sort;
      // If the user changes the sort order, reset back to the first page.
      _this.sort.sortChange.subscribe(() => _this.paginator.pageIndex = 0);
    })();
  }
  setFilter(columnProp, value) {
    const filterObj = this.filterSelectObj.find(item => item.columnProp === columnProp);
    filterObj.modelValue = value;
    this.filterChange(filterObj, value);
  }
  filterChange(filter, event) {
    this.filterValues[filter.columnProp] = event ? event.trim().toLowerCase() : null;
    this.dataSource.filterPredicate = data => {
      for (const prop in this.filterValues) {
        if (this.filterValues[prop] && data[prop]) {
          if (Array.isArray(data[prop])) {
            const subProp = this.filterSelectObj.find(o => o.columnProp === prop)?.subProp;
            const matches = data[prop].some(val => val[subProp].toLowerCase().includes(this.filterValues[prop]));
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
  resetFilters() {
    this.filterValues = {};
    this.dataSource.filter = "";
    this.filterSelectObj = this.getFilterOptions();
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  viewQuery: function HomeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selectsubregion = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selectcurrencies = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selectlanguages = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  decls: 35,
  vars: 11,
  consts: [[1, "home"], [1, "content"], ["class", "filters", 4, "ngIf"], [1, "panel"], [4, "ngIf"], ["aria-hidden", "false", "aria-label", "refresh", "fontIcon", "autorenew", 3, "ngClass", "click"], [1, "table-container", "mat-elevation-z8"], ["mat-table", "", "matSort", "", "matSortActive", "name", "matSortDisableClear", "", "matSortDirection", "asc", 3, "dataSource"], ["table", ""], ["matColumnDef", "capital"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", 4, "matHeaderCellDef"], ["matColumnDef", "subregion"], ["matColumnDef", "currencies"], ["matColumnDef", "languages"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of europe countries search results", 3, "length", "pageSize"], [1, "done"], ["mat-fab", ""], [1, "filters"], [1, "app-form"], ["appearance", "outline", "placeholder", "Search countries by name", "matInput", "", 1, "search", 3, "keyup"], [4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "warn", 3, "click"], [3, "multiple", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", ""], ["mat-stroked-button", "", "color", "ocean", 1, "pills", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav-content")(2, "mat-toolbar")(3, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Countries ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeComponent_div_6_Template, 6, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomeComponent_p_8_Template, 6, 2, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_mat_icon_click_9_listener() {
        return ctx.ngAfterViewInit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "table", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HomeComponent_th_14_Template, 2, 0, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HomeComponent_td_15_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeComponent_th_17_Template, 2, 0, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HomeComponent_td_18_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HomeComponent_th_20_Template, 2, 0, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HomeComponent_td_21_Template, 4, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, HomeComponent_th_23_Template, 2, 0, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, HomeComponent_td_24_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, HomeComponent_th_26_Template, 2, 0, "th", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, HomeComponent_td_27_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, HomeComponent_tr_28_Template, 1, 0, "tr", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, HomeComponent_tr_29_Template, 1, 0, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-paginator", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 20)(32, "button", 21)(33, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "check circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c3, ctx.isLoadingResults, ctx.isLoadingResults));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 30);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContent, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbar, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgOptionComponent],
  styles: ["[_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n[_nghost-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]   .mat-mdc-text-field-infix[_ngcontent-%COMP%] {\n  height: 32px;\n}\n[_nghost-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n[_nghost-%COMP%]   input.search[_ngcontent-%COMP%] {\n  min-height: 32px;\n  min-width: 220px;\n  border-radius: 5px;\n  border: 1px solid #646363;\n}\n[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  margin: 2em auto;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   mat-toolbar-row[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .filters[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n[_nghost-%COMP%]   mat-sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n[_nghost-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #174790;\n  color: #fff;\n}\n[_nghost-%COMP%]   .panel[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  background-color: #f2f4f6;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  height: 32px;\n  margin: 1rem 0;\n}\n[_nghost-%COMP%]   .refresh-icon.loading[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n[_nghost-%COMP%]   .done[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  color: #fff;\n}\n[_nghost-%COMP%]   .pills[_ngcontent-%COMP%] {\n  border: 1px solid;\n  border-color: #149aed;\n  color: #149aed;\n}\n[_nghost-%COMP%]   ng-select[_ngcontent-%COMP%] {\n  min-width: 150px;\n  border-color: #149aed;\n}\n[_nghost-%COMP%]   ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  height: 36px;\n  border: 1px solid #646363;\n}\n[_nghost-%COMP%]   .app-form[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]   .app-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUFBSjtBQUdFOztFQUVFLFlBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUhKO0FBTUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBSko7QUFPRTtFQUNFLDhCQUFBO0FBTEo7QUFRRTtFQUNFLGdCQUFBO0FBTko7QUFTRTtFQUNFLFlBQUE7QUFQSjtBQVVFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBUko7QUFXRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQVRKO0FBWUU7RUFDRSxrQ0FBQTtBQVZKO0FBYUU7RUFDRTtJQUNFLHVCQUFBO0VBWEo7RUFjRTtJQUNFLHlCQUFBO0VBWko7QUFDRjtBQWVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWJKO0FBZ0JFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFkSjtBQWlCRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUFmSjtBQWlCSTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQWZOO0FBbUJFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBakJKO0FBb0JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFsQko7QUFxQkU7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFQW5CSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cblxuICAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIsXG4gIC5tYXQtbWRjLXRleHQtZmllbGQtaW5maXgge1xuICAgIGhlaWdodDogMzJweDtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgaW5wdXQuc2VhcmNoIHtcbiAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgIG1pbi13aWR0aDogMjIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NDYzNjM7XG4gIH1cblxuICBtYXQtY2FyZCB7XG4gICAgbWFyZ2luOiAyZW0gYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIG1hdC10b29sYmFyLXJvdyB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmZpbHRlcnMge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cblxuICBtYXQtc2lkZW5hdiB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG5cbiAgbWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzQ3OTA7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAucGFuZWwge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmY0ZjY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gIH1cblxuICAucmVmcmVzaC1pY29uLmxvYWRpbmcge1xuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cblxuICAuZG9uZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5waWxscyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMTQ5YWVkO1xuICAgIGNvbG9yOiAjMTQ5YWVkO1xuICB9XG5cbiAgbmctc2VsZWN0IHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1jb2xvcjogIzE0OWFlZDtcblxuICAgICYubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjQ2MzYzO1xuICAgIH1cbiAgfVxuXG4gIC5hcHAtZm9ybSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDFyZW07XG4gIH1cblxuICAudGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuYXBwLWZvcm0ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMXJlbTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});
class CountriesDatabase {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
  }
  getCountries() {
    var _this2 = this;
    return (0,_Users_vishalpandey_Documents_GitHub_angular_datagrid_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requestUrl = 'https://restcountries.com/v2/region/europe';
      return _this2._httpClient.get(requestUrl).toPromise();
    })();
  }
}

/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 5067);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-option-highlight */ 5074);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);









const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class HomeModule {}
HomeModule.ɵfac = function HomeModule_Factory(t) {
  return new (t || HomeModule)();
};
HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: HomeModule
});
HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_7__.NgOptionHighlightModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, _ng_select_ng_option_highlight__WEBPACK_IMPORTED_MODULE_7__.NgOptionHighlightModule]
  });
})();

/***/ }),

/***/ 5074:
/*!************************************************************************************************!*\
  !*** ./node_modules/@ng-select/ng-option-highlight/fesm2020/ng-select-ng-option-highlight.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgOptionHighlightDirective": () => (/* binding */ NgOptionHighlightDirective),
/* harmony export */   "NgOptionHighlightModule": () => (/* binding */ NgOptionHighlightModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);


class NgOptionHighlightDirective {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.element = this.elementRef.nativeElement;
  }
  ngOnChanges() {
    if (this._canHighlight) {
      this._highlightLabel();
    }
  }
  ngAfterViewInit() {
    this.label = this.element.innerHTML;
    if (this._canHighlight) {
      this._highlightLabel();
    }
  }
  _escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  _highlightLabel() {
    const label = this.label;
    if (!this.term) {
      this._setInnerHtml(label);
      return;
    }
    const alternationString = this._escapeRegExp(this.term).replace(' ', '|');
    const termRegex = new RegExp(alternationString, 'gi');
    this._setInnerHtml(label.replace(termRegex, `<span class=\"highlighted\">$&</span>`));
  }
  get _canHighlight() {
    return this._isDefined(this.term) && this._isDefined(this.label);
  }
  _setInnerHtml(html) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
  }
  _isDefined(value) {
    return value !== undefined && value !== null;
  }
}
NgOptionHighlightDirective.ɵfac = function NgOptionHighlightDirective_Factory(t) {
  return new (t || NgOptionHighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
NgOptionHighlightDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgOptionHighlightDirective,
  selectors: [["", "ngOptionHighlight", ""]],
  inputs: {
    term: ["ngOptionHighlight", "term"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionHighlightDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngOptionHighlight]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    term: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['ngOptionHighlight']
    }]
  });
})();
class NgOptionHighlightModule {}
NgOptionHighlightModule.ɵfac = function NgOptionHighlightModule_Factory(t) {
  return new (t || NgOptionHighlightModule)();
};
NgOptionHighlightModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgOptionHighlightModule
});
NgOptionHighlightModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionHighlightModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgOptionHighlightDirective],
      exports: [NgOptionHighlightDirective]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ng-option-highlight
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 3054:
/*!****************************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/fesm2020/ng-select-ng-select.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgFooterTemplateDirective": () => (/* binding */ NgFooterTemplateDirective),
/* harmony export */   "NgHeaderTemplateDirective": () => (/* binding */ NgHeaderTemplateDirective),
/* harmony export */   "NgItemLabelDirective": () => (/* binding */ NgItemLabelDirective),
/* harmony export */   "NgLabelTemplateDirective": () => (/* binding */ NgLabelTemplateDirective),
/* harmony export */   "NgLoadingSpinnerTemplateDirective": () => (/* binding */ NgLoadingSpinnerTemplateDirective),
/* harmony export */   "NgLoadingTextTemplateDirective": () => (/* binding */ NgLoadingTextTemplateDirective),
/* harmony export */   "NgMultiLabelTemplateDirective": () => (/* binding */ NgMultiLabelTemplateDirective),
/* harmony export */   "NgNotFoundTemplateDirective": () => (/* binding */ NgNotFoundTemplateDirective),
/* harmony export */   "NgOptgroupTemplateDirective": () => (/* binding */ NgOptgroupTemplateDirective),
/* harmony export */   "NgOptionComponent": () => (/* binding */ NgOptionComponent),
/* harmony export */   "NgOptionTemplateDirective": () => (/* binding */ NgOptionTemplateDirective),
/* harmony export */   "NgSelectComponent": () => (/* binding */ NgSelectComponent),
/* harmony export */   "NgSelectConfig": () => (/* binding */ NgSelectConfig),
/* harmony export */   "NgSelectModule": () => (/* binding */ NgSelectModule),
/* harmony export */   "NgTagTemplateDirective": () => (/* binding */ NgTagTemplateDirective),
/* harmony export */   "NgTypeToSearchTemplateDirective": () => (/* binding */ NgTypeToSearchTemplateDirective),
/* harmony export */   "SELECTION_MODEL_FACTORY": () => (/* binding */ SELECTION_MODEL_FACTORY)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1695);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3911);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3066);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6477);







const _c0 = ["content"];
const _c1 = ["scroll"];
const _c2 = ["padding"];
const _c3 = function (a0) {
  return {
    searchTerm: a0
  };
};
function NgDropdownPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r0.filterValue));
  }
}
function NgDropdownPanelComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r4.filterValue));
  }
}
const _c4 = ["*"];
const _c5 = ["searchInput"];
function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.unselect(item_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r7.label)("escape", ctx_r9.escapeHTML);
  }
}
function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) {}
const _c6 = function (a0, a1, a2) {
  return {
    item: a0,
    clear: a1,
    label: a2
  };
};
function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-value-disabled", item_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.labelTemplate || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c6, item_r7.value, ctx_r6.clearItem, item_r7.label));
  }
}
function NgSelectComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedItems)("ngForTrackBy", ctx_r0.trackByOption);
  }
}
function NgSelectComponent_5_ng_template_0_Template(rf, ctx) {}
const _c7 = function (a0, a1) {
  return {
    items: a0,
    clear: a1
  };
};
function NgSelectComponent_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c7, ctx_r1.selectedValues, ctx_r1.clearItem));
  }
}
function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
  }
}
function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.loadingSpinnerTemplate || _r16);
  }
}
function NgSelectComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.clearAllText);
  }
}
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r24.label)("escape", ctx_r26.escapeHTML);
  }
}
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) {}
const _c8 = function (a0, a1, a2, a3) {
  return {
    item: a0,
    item$: a1,
    index: a2,
    searchTerm: a3
  };
};
function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const item_r24 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.toggleItem(item_r24));
    })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const item_r24 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.onItemHover(item_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-disabled", item_r24.disabled)("ng-option-selected", item_r24.selected)("ng-optgroup", item_r24.children)("ng-option", !item_r24.children)("ng-option-child", !!item_r24.parent)("ng-option-marked", item_r24 === ctx_r19.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", item_r24.children ? "group" : "option")("aria-selected", item_r24.selected)("id", item_r24 == null ? null : item_r24.htmlId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r24.children ? ctx_r19.optgroupTemplate || _r25 : ctx_r19.optionTemplate || _r25)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c8, item_r24.value, item_r24, item_r24.index, ctx_r19.searchTerm));
  }
}
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.addTagText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r33.searchTerm, "\"");
  }
}
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r35.itemsList.unmarkItem());
    })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r37.selectTag());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-marked", !ctx_r20.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.tagTemplate || _r32)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r20.searchTerm));
  }
}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.notFoundText);
  }
}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.notFoundTemplate || _r38)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r21.searchTerm));
  }
}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.typeToSearchText);
  }
}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.typeToSearchTemplate || _r41);
  }
}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.loadingText);
  }
}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.loadingTextTemplate || _r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r23.searchTerm));
  }
}
function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r47.viewPortItems = $event);
    })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r49.scroll.emit($event));
    })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r50.scrollToEnd.emit($event));
    })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r51.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-multiple", ctx_r5.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("virtualScroll", ctx_r5.virtualScroll)("bufferAmount", ctx_r5.bufferAmount)("appendTo", ctx_r5.appendTo)("position", ctx_r5.dropdownPosition)("headerTemplate", ctx_r5.headerTemplate)("footerTemplate", ctx_r5.footerTemplate)("filterValue", ctx_r5.searchTerm)("items", ctx_r5.itemsList.filteredItems)("markedItem", ctx_r5.itemsList.markedItem)("ngClass", ctx_r5.appendTo ? ctx_r5.classes : null)("id", ctx_r5.dropdownId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.viewPortItems)("ngForTrackBy", ctx_r5.trackByOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showAddTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showNoItemsFound());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showTypeToSearch());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading && ctx_r5.itemsList.filteredItems.length === 0);
  }
}
const unescapedHTMLExp = /[&<>"']/g;
const hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#39;'
};
function escapeHTML(value) {
  return value && hasUnescapedHTMLExp.test(value) ? value.replace(unescapedHTMLExp, chr => htmlEscapes[chr]) : value;
}
function isDefined(value) {
  return value !== undefined && value !== null;
}
function isObject(value) {
  return typeof value === 'object' && isDefined(value);
}
function isPromise(value) {
  return value instanceof Promise;
}
function isFunction(value) {
  return value instanceof Function;
}
class NgItemLabelDirective {
  constructor(element) {
    this.element = element;
    this.escape = true;
  }
  ngOnChanges(changes) {
    this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
  }
}
NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) {
  return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgItemLabelDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgItemLabelDirective,
  selectors: [["", "ngItemLabel", ""]],
  inputs: {
    ngItemLabel: "ngItemLabel",
    escape: "escape"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgItemLabelDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngItemLabel]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    ngItemLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    escape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgOptionTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) {
  return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgOptionTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgOptionTemplateDirective,
  selectors: [["", "ng-option-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-option-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgOptgroupTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) {
  return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgOptgroupTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgOptgroupTemplateDirective,
  selectors: [["", "ng-optgroup-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-optgroup-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgLabelTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) {
  return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgLabelTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgLabelTemplateDirective,
  selectors: [["", "ng-label-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-label-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgMultiLabelTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) {
  return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgMultiLabelTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgMultiLabelTemplateDirective,
  selectors: [["", "ng-multi-label-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-multi-label-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgHeaderTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) {
  return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgHeaderTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgHeaderTemplateDirective,
  selectors: [["", "ng-header-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-header-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgFooterTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) {
  return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgFooterTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgFooterTemplateDirective,
  selectors: [["", "ng-footer-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-footer-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgNotFoundTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) {
  return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgNotFoundTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgNotFoundTemplateDirective,
  selectors: [["", "ng-notfound-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-notfound-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgTypeToSearchTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) {
  return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgTypeToSearchTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgTypeToSearchTemplateDirective,
  selectors: [["", "ng-typetosearch-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-typetosearch-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgLoadingTextTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) {
  return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgLoadingTextTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgLoadingTextTemplateDirective,
  selectors: [["", "ng-loadingtext-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-loadingtext-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgTagTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) {
  return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgTagTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgTagTemplateDirective,
  selectors: [["", "ng-tag-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-tag-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
// eslint-disable-next-line @angular-eslint/directive-selector
class NgLoadingSpinnerTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) {
  return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
NgLoadingSpinnerTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgLoadingSpinnerTemplateDirective,
  selectors: [["", "ng-loadingspinner-tmp", ""]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ng-loadingspinner-tmp]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
function newId() {
  // First character is an 'a', it's good practice to tag id to begin with a letter
  return 'axxxxxxxxxxx'.replace(/[x]/g, () => {
    // eslint-disable-next-line no-bitwise
    const val = Math.random() * 16 | 0;
    return val.toString(16);
  });
}
const diacritics = {
  '\u24B6': 'A',
  '\uFF21': 'A',
  '\u00C0': 'A',
  '\u00C1': 'A',
  '\u00C2': 'A',
  '\u1EA6': 'A',
  '\u1EA4': 'A',
  '\u1EAA': 'A',
  '\u1EA8': 'A',
  '\u00C3': 'A',
  '\u0100': 'A',
  '\u0102': 'A',
  '\u1EB0': 'A',
  '\u1EAE': 'A',
  '\u1EB4': 'A',
  '\u1EB2': 'A',
  '\u0226': 'A',
  '\u01E0': 'A',
  '\u00C4': 'A',
  '\u01DE': 'A',
  '\u1EA2': 'A',
  '\u00C5': 'A',
  '\u01FA': 'A',
  '\u01CD': 'A',
  '\u0200': 'A',
  '\u0202': 'A',
  '\u1EA0': 'A',
  '\u1EAC': 'A',
  '\u1EB6': 'A',
  '\u1E00': 'A',
  '\u0104': 'A',
  '\u023A': 'A',
  '\u2C6F': 'A',
  '\uA732': 'AA',
  '\u00C6': 'AE',
  '\u01FC': 'AE',
  '\u01E2': 'AE',
  '\uA734': 'AO',
  '\uA736': 'AU',
  '\uA738': 'AV',
  '\uA73A': 'AV',
  '\uA73C': 'AY',
  '\u24B7': 'B',
  '\uFF22': 'B',
  '\u1E02': 'B',
  '\u1E04': 'B',
  '\u1E06': 'B',
  '\u0243': 'B',
  '\u0182': 'B',
  '\u0181': 'B',
  '\u24B8': 'C',
  '\uFF23': 'C',
  '\u0106': 'C',
  '\u0108': 'C',
  '\u010A': 'C',
  '\u010C': 'C',
  '\u00C7': 'C',
  '\u1E08': 'C',
  '\u0187': 'C',
  '\u023B': 'C',
  '\uA73E': 'C',
  '\u24B9': 'D',
  '\uFF24': 'D',
  '\u1E0A': 'D',
  '\u010E': 'D',
  '\u1E0C': 'D',
  '\u1E10': 'D',
  '\u1E12': 'D',
  '\u1E0E': 'D',
  '\u0110': 'D',
  '\u018B': 'D',
  '\u018A': 'D',
  '\u0189': 'D',
  '\uA779': 'D',
  '\u01F1': 'DZ',
  '\u01C4': 'DZ',
  '\u01F2': 'Dz',
  '\u01C5': 'Dz',
  '\u24BA': 'E',
  '\uFF25': 'E',
  '\u00C8': 'E',
  '\u00C9': 'E',
  '\u00CA': 'E',
  '\u1EC0': 'E',
  '\u1EBE': 'E',
  '\u1EC4': 'E',
  '\u1EC2': 'E',
  '\u1EBC': 'E',
  '\u0112': 'E',
  '\u1E14': 'E',
  '\u1E16': 'E',
  '\u0114': 'E',
  '\u0116': 'E',
  '\u00CB': 'E',
  '\u1EBA': 'E',
  '\u011A': 'E',
  '\u0204': 'E',
  '\u0206': 'E',
  '\u1EB8': 'E',
  '\u1EC6': 'E',
  '\u0228': 'E',
  '\u1E1C': 'E',
  '\u0118': 'E',
  '\u1E18': 'E',
  '\u1E1A': 'E',
  '\u0190': 'E',
  '\u018E': 'E',
  '\u24BB': 'F',
  '\uFF26': 'F',
  '\u1E1E': 'F',
  '\u0191': 'F',
  '\uA77B': 'F',
  '\u24BC': 'G',
  '\uFF27': 'G',
  '\u01F4': 'G',
  '\u011C': 'G',
  '\u1E20': 'G',
  '\u011E': 'G',
  '\u0120': 'G',
  '\u01E6': 'G',
  '\u0122': 'G',
  '\u01E4': 'G',
  '\u0193': 'G',
  '\uA7A0': 'G',
  '\uA77D': 'G',
  '\uA77E': 'G',
  '\u24BD': 'H',
  '\uFF28': 'H',
  '\u0124': 'H',
  '\u1E22': 'H',
  '\u1E26': 'H',
  '\u021E': 'H',
  '\u1E24': 'H',
  '\u1E28': 'H',
  '\u1E2A': 'H',
  '\u0126': 'H',
  '\u2C67': 'H',
  '\u2C75': 'H',
  '\uA78D': 'H',
  '\u24BE': 'I',
  '\uFF29': 'I',
  '\u00CC': 'I',
  '\u00CD': 'I',
  '\u00CE': 'I',
  '\u0128': 'I',
  '\u012A': 'I',
  '\u012C': 'I',
  '\u0130': 'I',
  '\u00CF': 'I',
  '\u1E2E': 'I',
  '\u1EC8': 'I',
  '\u01CF': 'I',
  '\u0208': 'I',
  '\u020A': 'I',
  '\u1ECA': 'I',
  '\u012E': 'I',
  '\u1E2C': 'I',
  '\u0197': 'I',
  '\u24BF': 'J',
  '\uFF2A': 'J',
  '\u0134': 'J',
  '\u0248': 'J',
  '\u24C0': 'K',
  '\uFF2B': 'K',
  '\u1E30': 'K',
  '\u01E8': 'K',
  '\u1E32': 'K',
  '\u0136': 'K',
  '\u1E34': 'K',
  '\u0198': 'K',
  '\u2C69': 'K',
  '\uA740': 'K',
  '\uA742': 'K',
  '\uA744': 'K',
  '\uA7A2': 'K',
  '\u24C1': 'L',
  '\uFF2C': 'L',
  '\u013F': 'L',
  '\u0139': 'L',
  '\u013D': 'L',
  '\u1E36': 'L',
  '\u1E38': 'L',
  '\u013B': 'L',
  '\u1E3C': 'L',
  '\u1E3A': 'L',
  '\u0141': 'L',
  '\u023D': 'L',
  '\u2C62': 'L',
  '\u2C60': 'L',
  '\uA748': 'L',
  '\uA746': 'L',
  '\uA780': 'L',
  '\u01C7': 'LJ',
  '\u01C8': 'Lj',
  '\u24C2': 'M',
  '\uFF2D': 'M',
  '\u1E3E': 'M',
  '\u1E40': 'M',
  '\u1E42': 'M',
  '\u2C6E': 'M',
  '\u019C': 'M',
  '\u24C3': 'N',
  '\uFF2E': 'N',
  '\u01F8': 'N',
  '\u0143': 'N',
  '\u00D1': 'N',
  '\u1E44': 'N',
  '\u0147': 'N',
  '\u1E46': 'N',
  '\u0145': 'N',
  '\u1E4A': 'N',
  '\u1E48': 'N',
  '\u0220': 'N',
  '\u019D': 'N',
  '\uA790': 'N',
  '\uA7A4': 'N',
  '\u01CA': 'NJ',
  '\u01CB': 'Nj',
  '\u24C4': 'O',
  '\uFF2F': 'O',
  '\u00D2': 'O',
  '\u00D3': 'O',
  '\u00D4': 'O',
  '\u1ED2': 'O',
  '\u1ED0': 'O',
  '\u1ED6': 'O',
  '\u1ED4': 'O',
  '\u00D5': 'O',
  '\u1E4C': 'O',
  '\u022C': 'O',
  '\u1E4E': 'O',
  '\u014C': 'O',
  '\u1E50': 'O',
  '\u1E52': 'O',
  '\u014E': 'O',
  '\u022E': 'O',
  '\u0230': 'O',
  '\u00D6': 'O',
  '\u022A': 'O',
  '\u1ECE': 'O',
  '\u0150': 'O',
  '\u01D1': 'O',
  '\u020C': 'O',
  '\u020E': 'O',
  '\u01A0': 'O',
  '\u1EDC': 'O',
  '\u1EDA': 'O',
  '\u1EE0': 'O',
  '\u1EDE': 'O',
  '\u1EE2': 'O',
  '\u1ECC': 'O',
  '\u1ED8': 'O',
  '\u01EA': 'O',
  '\u01EC': 'O',
  '\u00D8': 'O',
  '\u01FE': 'O',
  '\u0186': 'O',
  '\u019F': 'O',
  '\uA74A': 'O',
  '\uA74C': 'O',
  '\u01A2': 'OI',
  '\uA74E': 'OO',
  '\u0222': 'OU',
  '\u24C5': 'P',
  '\uFF30': 'P',
  '\u1E54': 'P',
  '\u1E56': 'P',
  '\u01A4': 'P',
  '\u2C63': 'P',
  '\uA750': 'P',
  '\uA752': 'P',
  '\uA754': 'P',
  '\u24C6': 'Q',
  '\uFF31': 'Q',
  '\uA756': 'Q',
  '\uA758': 'Q',
  '\u024A': 'Q',
  '\u24C7': 'R',
  '\uFF32': 'R',
  '\u0154': 'R',
  '\u1E58': 'R',
  '\u0158': 'R',
  '\u0210': 'R',
  '\u0212': 'R',
  '\u1E5A': 'R',
  '\u1E5C': 'R',
  '\u0156': 'R',
  '\u1E5E': 'R',
  '\u024C': 'R',
  '\u2C64': 'R',
  '\uA75A': 'R',
  '\uA7A6': 'R',
  '\uA782': 'R',
  '\u24C8': 'S',
  '\uFF33': 'S',
  '\u1E9E': 'S',
  '\u015A': 'S',
  '\u1E64': 'S',
  '\u015C': 'S',
  '\u1E60': 'S',
  '\u0160': 'S',
  '\u1E66': 'S',
  '\u1E62': 'S',
  '\u1E68': 'S',
  '\u0218': 'S',
  '\u015E': 'S',
  '\u2C7E': 'S',
  '\uA7A8': 'S',
  '\uA784': 'S',
  '\u24C9': 'T',
  '\uFF34': 'T',
  '\u1E6A': 'T',
  '\u0164': 'T',
  '\u1E6C': 'T',
  '\u021A': 'T',
  '\u0162': 'T',
  '\u1E70': 'T',
  '\u1E6E': 'T',
  '\u0166': 'T',
  '\u01AC': 'T',
  '\u01AE': 'T',
  '\u023E': 'T',
  '\uA786': 'T',
  '\uA728': 'TZ',
  '\u24CA': 'U',
  '\uFF35': 'U',
  '\u00D9': 'U',
  '\u00DA': 'U',
  '\u00DB': 'U',
  '\u0168': 'U',
  '\u1E78': 'U',
  '\u016A': 'U',
  '\u1E7A': 'U',
  '\u016C': 'U',
  '\u00DC': 'U',
  '\u01DB': 'U',
  '\u01D7': 'U',
  '\u01D5': 'U',
  '\u01D9': 'U',
  '\u1EE6': 'U',
  '\u016E': 'U',
  '\u0170': 'U',
  '\u01D3': 'U',
  '\u0214': 'U',
  '\u0216': 'U',
  '\u01AF': 'U',
  '\u1EEA': 'U',
  '\u1EE8': 'U',
  '\u1EEE': 'U',
  '\u1EEC': 'U',
  '\u1EF0': 'U',
  '\u1EE4': 'U',
  '\u1E72': 'U',
  '\u0172': 'U',
  '\u1E76': 'U',
  '\u1E74': 'U',
  '\u0244': 'U',
  '\u24CB': 'V',
  '\uFF36': 'V',
  '\u1E7C': 'V',
  '\u1E7E': 'V',
  '\u01B2': 'V',
  '\uA75E': 'V',
  '\u0245': 'V',
  '\uA760': 'VY',
  '\u24CC': 'W',
  '\uFF37': 'W',
  '\u1E80': 'W',
  '\u1E82': 'W',
  '\u0174': 'W',
  '\u1E86': 'W',
  '\u1E84': 'W',
  '\u1E88': 'W',
  '\u2C72': 'W',
  '\u24CD': 'X',
  '\uFF38': 'X',
  '\u1E8A': 'X',
  '\u1E8C': 'X',
  '\u24CE': 'Y',
  '\uFF39': 'Y',
  '\u1EF2': 'Y',
  '\u00DD': 'Y',
  '\u0176': 'Y',
  '\u1EF8': 'Y',
  '\u0232': 'Y',
  '\u1E8E': 'Y',
  '\u0178': 'Y',
  '\u1EF6': 'Y',
  '\u1EF4': 'Y',
  '\u01B3': 'Y',
  '\u024E': 'Y',
  '\u1EFE': 'Y',
  '\u24CF': 'Z',
  '\uFF3A': 'Z',
  '\u0179': 'Z',
  '\u1E90': 'Z',
  '\u017B': 'Z',
  '\u017D': 'Z',
  '\u1E92': 'Z',
  '\u1E94': 'Z',
  '\u01B5': 'Z',
  '\u0224': 'Z',
  '\u2C7F': 'Z',
  '\u2C6B': 'Z',
  '\uA762': 'Z',
  '\u24D0': 'a',
  '\uFF41': 'a',
  '\u1E9A': 'a',
  '\u00E0': 'a',
  '\u00E1': 'a',
  '\u00E2': 'a',
  '\u1EA7': 'a',
  '\u1EA5': 'a',
  '\u1EAB': 'a',
  '\u1EA9': 'a',
  '\u00E3': 'a',
  '\u0101': 'a',
  '\u0103': 'a',
  '\u1EB1': 'a',
  '\u1EAF': 'a',
  '\u1EB5': 'a',
  '\u1EB3': 'a',
  '\u0227': 'a',
  '\u01E1': 'a',
  '\u00E4': 'a',
  '\u01DF': 'a',
  '\u1EA3': 'a',
  '\u00E5': 'a',
  '\u01FB': 'a',
  '\u01CE': 'a',
  '\u0201': 'a',
  '\u0203': 'a',
  '\u1EA1': 'a',
  '\u1EAD': 'a',
  '\u1EB7': 'a',
  '\u1E01': 'a',
  '\u0105': 'a',
  '\u2C65': 'a',
  '\u0250': 'a',
  '\uA733': 'aa',
  '\u00E6': 'ae',
  '\u01FD': 'ae',
  '\u01E3': 'ae',
  '\uA735': 'ao',
  '\uA737': 'au',
  '\uA739': 'av',
  '\uA73B': 'av',
  '\uA73D': 'ay',
  '\u24D1': 'b',
  '\uFF42': 'b',
  '\u1E03': 'b',
  '\u1E05': 'b',
  '\u1E07': 'b',
  '\u0180': 'b',
  '\u0183': 'b',
  '\u0253': 'b',
  '\u24D2': 'c',
  '\uFF43': 'c',
  '\u0107': 'c',
  '\u0109': 'c',
  '\u010B': 'c',
  '\u010D': 'c',
  '\u00E7': 'c',
  '\u1E09': 'c',
  '\u0188': 'c',
  '\u023C': 'c',
  '\uA73F': 'c',
  '\u2184': 'c',
  '\u24D3': 'd',
  '\uFF44': 'd',
  '\u1E0B': 'd',
  '\u010F': 'd',
  '\u1E0D': 'd',
  '\u1E11': 'd',
  '\u1E13': 'd',
  '\u1E0F': 'd',
  '\u0111': 'd',
  '\u018C': 'd',
  '\u0256': 'd',
  '\u0257': 'd',
  '\uA77A': 'd',
  '\u01F3': 'dz',
  '\u01C6': 'dz',
  '\u24D4': 'e',
  '\uFF45': 'e',
  '\u00E8': 'e',
  '\u00E9': 'e',
  '\u00EA': 'e',
  '\u1EC1': 'e',
  '\u1EBF': 'e',
  '\u1EC5': 'e',
  '\u1EC3': 'e',
  '\u1EBD': 'e',
  '\u0113': 'e',
  '\u1E15': 'e',
  '\u1E17': 'e',
  '\u0115': 'e',
  '\u0117': 'e',
  '\u00EB': 'e',
  '\u1EBB': 'e',
  '\u011B': 'e',
  '\u0205': 'e',
  '\u0207': 'e',
  '\u1EB9': 'e',
  '\u1EC7': 'e',
  '\u0229': 'e',
  '\u1E1D': 'e',
  '\u0119': 'e',
  '\u1E19': 'e',
  '\u1E1B': 'e',
  '\u0247': 'e',
  '\u025B': 'e',
  '\u01DD': 'e',
  '\u24D5': 'f',
  '\uFF46': 'f',
  '\u1E1F': 'f',
  '\u0192': 'f',
  '\uA77C': 'f',
  '\u24D6': 'g',
  '\uFF47': 'g',
  '\u01F5': 'g',
  '\u011D': 'g',
  '\u1E21': 'g',
  '\u011F': 'g',
  '\u0121': 'g',
  '\u01E7': 'g',
  '\u0123': 'g',
  '\u01E5': 'g',
  '\u0260': 'g',
  '\uA7A1': 'g',
  '\u1D79': 'g',
  '\uA77F': 'g',
  '\u24D7': 'h',
  '\uFF48': 'h',
  '\u0125': 'h',
  '\u1E23': 'h',
  '\u1E27': 'h',
  '\u021F': 'h',
  '\u1E25': 'h',
  '\u1E29': 'h',
  '\u1E2B': 'h',
  '\u1E96': 'h',
  '\u0127': 'h',
  '\u2C68': 'h',
  '\u2C76': 'h',
  '\u0265': 'h',
  '\u0195': 'hv',
  '\u24D8': 'i',
  '\uFF49': 'i',
  '\u00EC': 'i',
  '\u00ED': 'i',
  '\u00EE': 'i',
  '\u0129': 'i',
  '\u012B': 'i',
  '\u012D': 'i',
  '\u00EF': 'i',
  '\u1E2F': 'i',
  '\u1EC9': 'i',
  '\u01D0': 'i',
  '\u0209': 'i',
  '\u020B': 'i',
  '\u1ECB': 'i',
  '\u012F': 'i',
  '\u1E2D': 'i',
  '\u0268': 'i',
  '\u0131': 'i',
  '\u24D9': 'j',
  '\uFF4A': 'j',
  '\u0135': 'j',
  '\u01F0': 'j',
  '\u0249': 'j',
  '\u24DA': 'k',
  '\uFF4B': 'k',
  '\u1E31': 'k',
  '\u01E9': 'k',
  '\u1E33': 'k',
  '\u0137': 'k',
  '\u1E35': 'k',
  '\u0199': 'k',
  '\u2C6A': 'k',
  '\uA741': 'k',
  '\uA743': 'k',
  '\uA745': 'k',
  '\uA7A3': 'k',
  '\u24DB': 'l',
  '\uFF4C': 'l',
  '\u0140': 'l',
  '\u013A': 'l',
  '\u013E': 'l',
  '\u1E37': 'l',
  '\u1E39': 'l',
  '\u013C': 'l',
  '\u1E3D': 'l',
  '\u1E3B': 'l',
  '\u017F': 'l',
  '\u0142': 'l',
  '\u019A': 'l',
  '\u026B': 'l',
  '\u2C61': 'l',
  '\uA749': 'l',
  '\uA781': 'l',
  '\uA747': 'l',
  '\u01C9': 'lj',
  '\u24DC': 'm',
  '\uFF4D': 'm',
  '\u1E3F': 'm',
  '\u1E41': 'm',
  '\u1E43': 'm',
  '\u0271': 'm',
  '\u026F': 'm',
  '\u24DD': 'n',
  '\uFF4E': 'n',
  '\u01F9': 'n',
  '\u0144': 'n',
  '\u00F1': 'n',
  '\u1E45': 'n',
  '\u0148': 'n',
  '\u1E47': 'n',
  '\u0146': 'n',
  '\u1E4B': 'n',
  '\u1E49': 'n',
  '\u019E': 'n',
  '\u0272': 'n',
  '\u0149': 'n',
  '\uA791': 'n',
  '\uA7A5': 'n',
  '\u01CC': 'nj',
  '\u24DE': 'o',
  '\uFF4F': 'o',
  '\u00F2': 'o',
  '\u00F3': 'o',
  '\u00F4': 'o',
  '\u1ED3': 'o',
  '\u1ED1': 'o',
  '\u1ED7': 'o',
  '\u1ED5': 'o',
  '\u00F5': 'o',
  '\u1E4D': 'o',
  '\u022D': 'o',
  '\u1E4F': 'o',
  '\u014D': 'o',
  '\u1E51': 'o',
  '\u1E53': 'o',
  '\u014F': 'o',
  '\u022F': 'o',
  '\u0231': 'o',
  '\u00F6': 'o',
  '\u022B': 'o',
  '\u1ECF': 'o',
  '\u0151': 'o',
  '\u01D2': 'o',
  '\u020D': 'o',
  '\u020F': 'o',
  '\u01A1': 'o',
  '\u1EDD': 'o',
  '\u1EDB': 'o',
  '\u1EE1': 'o',
  '\u1EDF': 'o',
  '\u1EE3': 'o',
  '\u1ECD': 'o',
  '\u1ED9': 'o',
  '\u01EB': 'o',
  '\u01ED': 'o',
  '\u00F8': 'o',
  '\u01FF': 'o',
  '\u0254': 'o',
  '\uA74B': 'o',
  '\uA74D': 'o',
  '\u0275': 'o',
  '\u01A3': 'oi',
  '\u0223': 'ou',
  '\uA74F': 'oo',
  '\u24DF': 'p',
  '\uFF50': 'p',
  '\u1E55': 'p',
  '\u1E57': 'p',
  '\u01A5': 'p',
  '\u1D7D': 'p',
  '\uA751': 'p',
  '\uA753': 'p',
  '\uA755': 'p',
  '\u24E0': 'q',
  '\uFF51': 'q',
  '\u024B': 'q',
  '\uA757': 'q',
  '\uA759': 'q',
  '\u24E1': 'r',
  '\uFF52': 'r',
  '\u0155': 'r',
  '\u1E59': 'r',
  '\u0159': 'r',
  '\u0211': 'r',
  '\u0213': 'r',
  '\u1E5B': 'r',
  '\u1E5D': 'r',
  '\u0157': 'r',
  '\u1E5F': 'r',
  '\u024D': 'r',
  '\u027D': 'r',
  '\uA75B': 'r',
  '\uA7A7': 'r',
  '\uA783': 'r',
  '\u24E2': 's',
  '\uFF53': 's',
  '\u00DF': 's',
  '\u015B': 's',
  '\u1E65': 's',
  '\u015D': 's',
  '\u1E61': 's',
  '\u0161': 's',
  '\u1E67': 's',
  '\u1E63': 's',
  '\u1E69': 's',
  '\u0219': 's',
  '\u015F': 's',
  '\u023F': 's',
  '\uA7A9': 's',
  '\uA785': 's',
  '\u1E9B': 's',
  '\u24E3': 't',
  '\uFF54': 't',
  '\u1E6B': 't',
  '\u1E97': 't',
  '\u0165': 't',
  '\u1E6D': 't',
  '\u021B': 't',
  '\u0163': 't',
  '\u1E71': 't',
  '\u1E6F': 't',
  '\u0167': 't',
  '\u01AD': 't',
  '\u0288': 't',
  '\u2C66': 't',
  '\uA787': 't',
  '\uA729': 'tz',
  '\u24E4': 'u',
  '\uFF55': 'u',
  '\u00F9': 'u',
  '\u00FA': 'u',
  '\u00FB': 'u',
  '\u0169': 'u',
  '\u1E79': 'u',
  '\u016B': 'u',
  '\u1E7B': 'u',
  '\u016D': 'u',
  '\u00FC': 'u',
  '\u01DC': 'u',
  '\u01D8': 'u',
  '\u01D6': 'u',
  '\u01DA': 'u',
  '\u1EE7': 'u',
  '\u016F': 'u',
  '\u0171': 'u',
  '\u01D4': 'u',
  '\u0215': 'u',
  '\u0217': 'u',
  '\u01B0': 'u',
  '\u1EEB': 'u',
  '\u1EE9': 'u',
  '\u1EEF': 'u',
  '\u1EED': 'u',
  '\u1EF1': 'u',
  '\u1EE5': 'u',
  '\u1E73': 'u',
  '\u0173': 'u',
  '\u1E77': 'u',
  '\u1E75': 'u',
  '\u0289': 'u',
  '\u24E5': 'v',
  '\uFF56': 'v',
  '\u1E7D': 'v',
  '\u1E7F': 'v',
  '\u028B': 'v',
  '\uA75F': 'v',
  '\u028C': 'v',
  '\uA761': 'vy',
  '\u24E6': 'w',
  '\uFF57': 'w',
  '\u1E81': 'w',
  '\u1E83': 'w',
  '\u0175': 'w',
  '\u1E87': 'w',
  '\u1E85': 'w',
  '\u1E98': 'w',
  '\u1E89': 'w',
  '\u2C73': 'w',
  '\u24E7': 'x',
  '\uFF58': 'x',
  '\u1E8B': 'x',
  '\u1E8D': 'x',
  '\u24E8': 'y',
  '\uFF59': 'y',
  '\u1EF3': 'y',
  '\u00FD': 'y',
  '\u0177': 'y',
  '\u1EF9': 'y',
  '\u0233': 'y',
  '\u1E8F': 'y',
  '\u00FF': 'y',
  '\u1EF7': 'y',
  '\u1E99': 'y',
  '\u1EF5': 'y',
  '\u01B4': 'y',
  '\u024F': 'y',
  '\u1EFF': 'y',
  '\u24E9': 'z',
  '\uFF5A': 'z',
  '\u017A': 'z',
  '\u1E91': 'z',
  '\u017C': 'z',
  '\u017E': 'z',
  '\u1E93': 'z',
  '\u1E95': 'z',
  '\u01B6': 'z',
  '\u0225': 'z',
  '\u0240': 'z',
  '\u2C6C': 'z',
  '\uA763': 'z',
  '\u0386': '\u0391',
  '\u0388': '\u0395',
  '\u0389': '\u0397',
  '\u038A': '\u0399',
  '\u03AA': '\u0399',
  '\u038C': '\u039F',
  '\u038E': '\u03A5',
  '\u03AB': '\u03A5',
  '\u038F': '\u03A9',
  '\u03AC': '\u03B1',
  '\u03AD': '\u03B5',
  '\u03AE': '\u03B7',
  '\u03AF': '\u03B9',
  '\u03CA': '\u03B9',
  '\u0390': '\u03B9',
  '\u03CC': '\u03BF',
  '\u03CD': '\u03C5',
  '\u03CB': '\u03C5',
  '\u03B0': '\u03C5',
  '\u03C9': '\u03C9',
  '\u03C2': '\u03C3'
};
function stripSpecialChars(text) {
  const match = a => diacritics[a] || a;
  return text.replace(/[^\u0000-\u007E]/g, match);
}
class ItemsList {
  constructor(_ngSelect, _selectionModel) {
    this._ngSelect = _ngSelect;
    this._selectionModel = _selectionModel;
    this._items = [];
    this._filteredItems = [];
    this._markedIndex = -1;
  }
  get items() {
    return this._items;
  }
  get filteredItems() {
    return this._filteredItems;
  }
  get markedIndex() {
    return this._markedIndex;
  }
  get selectedItems() {
    return this._selectionModel.value;
  }
  get markedItem() {
    return this._filteredItems[this._markedIndex];
  }
  get noItemsToSelect() {
    return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
  }
  get maxItemsSelected() {
    return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
  }
  get lastSelectedItem() {
    let i = this.selectedItems.length - 1;
    for (; i >= 0; i--) {
      const item = this.selectedItems[i];
      if (!item.disabled) {
        return item;
      }
    }
    return null;
  }
  setItems(items) {
    this._items = items.map((item, index) => this.mapItem(item, index));
    if (this._ngSelect.groupBy) {
      this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
      this._items = this._flatten(this._groups);
    } else {
      this._groups = new Map();
      this._groups.set(undefined, this._items);
    }
    this._filteredItems = [...this._items];
  }
  select(item) {
    if (item.selected || this.maxItemsSelected) {
      return;
    }
    const multiple = this._ngSelect.multiple;
    if (!multiple) {
      this.clearSelected();
    }
    this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
    if (this._ngSelect.hideSelected) {
      this._hideSelected(item);
    }
  }
  unselect(item) {
    if (!item.selected) {
      return;
    }
    this._selectionModel.unselect(item, this._ngSelect.multiple);
    if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
      this._showSelected(item);
    }
  }
  findItem(value) {
    let findBy;
    if (this._ngSelect.compareWith) {
      findBy = item => this._ngSelect.compareWith(item.value, value);
    } else if (this._ngSelect.bindValue) {
      findBy = item => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue) === value;
    } else {
      findBy = item => item.value === value || !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel);
    }
    return this._items.find(item => findBy(item));
  }
  addItem(item) {
    const option = this.mapItem(item, this._items.length);
    this._items.push(option);
    this._filteredItems.push(option);
    return option;
  }
  clearSelected(keepDisabled = false) {
    this._selectionModel.clear(keepDisabled);
    this._items.forEach(item => {
      item.selected = keepDisabled && item.selected && item.disabled;
      item.marked = false;
    });
    if (this._ngSelect.hideSelected) {
      this.resetFilteredItems();
    }
  }
  findByLabel(term) {
    term = stripSpecialChars(term).toLocaleLowerCase();
    return this.filteredItems.find(item => {
      const label = stripSpecialChars(item.label).toLocaleLowerCase();
      return label.substr(0, term.length) === term;
    });
  }
  filter(term) {
    if (!term) {
      this.resetFilteredItems();
      return;
    }
    this._filteredItems = [];
    term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
    const match = this._ngSelect.searchFn || this._defaultSearchFn;
    const hideSelected = this._ngSelect.hideSelected;
    for (const key of Array.from(this._groups.keys())) {
      const matchedItems = [];
      for (const item of this._groups.get(key)) {
        if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
          continue;
        }
        const searchItem = this._ngSelect.searchFn ? item.value : item;
        if (match(term, searchItem)) {
          matchedItems.push(item);
        }
      }
      if (matchedItems.length > 0) {
        const [last] = matchedItems.slice(-1);
        if (last.parent) {
          const head = this._items.find(x => x === last.parent);
          this._filteredItems.push(head);
        }
        this._filteredItems.push(...matchedItems);
      }
    }
  }
  resetFilteredItems() {
    if (this._filteredItems.length === this._items.length) {
      return;
    }
    if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
      this._filteredItems = this._items.filter(x => !x.selected);
    } else {
      this._filteredItems = this._items;
    }
  }
  unmarkItem() {
    this._markedIndex = -1;
  }
  markNextItem() {
    this._stepToItem(+1);
  }
  markPreviousItem() {
    this._stepToItem(-1);
  }
  markItem(item) {
    this._markedIndex = this._filteredItems.indexOf(item);
  }
  markSelectedOrDefault(markDefault) {
    if (this._filteredItems.length === 0) {
      return;
    }
    const lastMarkedIndex = this._getLastMarkedIndex();
    if (lastMarkedIndex > -1) {
      this._markedIndex = lastMarkedIndex;
    } else {
      this._markedIndex = markDefault ? this.filteredItems.findIndex(x => !x.disabled) : -1;
    }
  }
  resolveNested(option, key) {
    if (!isObject(option)) {
      return option;
    }
    if (key.indexOf('.') === -1) {
      return option[key];
    } else {
      const keys = key.split('.');
      let value = option;
      for (let i = 0, len = keys.length; i < len; ++i) {
        if (value == null) {
          return null;
        }
        value = value[keys[i]];
      }
      return value;
    }
  }
  mapItem(item, index) {
    const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
    const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
    return {
      index,
      label: isDefined(label) ? label.toString() : '',
      value,
      disabled: item.disabled,
      htmlId: `${this._ngSelect.dropdownId}-${index}`
    };
  }
  mapSelectedItems() {
    const multiple = this._ngSelect.multiple;
    for (const selected of this.selectedItems) {
      const value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
      const item = isDefined(value) ? this.findItem(value) : null;
      this._selectionModel.unselect(selected, multiple);
      this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
    }
    if (this._ngSelect.hideSelected) {
      this._filteredItems = this.filteredItems.filter(x => this.selectedItems.indexOf(x) === -1);
    }
  }
  _showSelected(item) {
    this._filteredItems.push(item);
    if (item.parent) {
      const parent = item.parent;
      const parentExists = this._filteredItems.find(x => x === parent);
      if (!parentExists) {
        this._filteredItems.push(parent);
      }
    } else if (item.children) {
      for (const child of item.children) {
        child.selected = false;
        this._filteredItems.push(child);
      }
    }
    this._filteredItems = [...this._filteredItems.sort((a, b) => a.index - b.index)];
  }
  _hideSelected(item) {
    this._filteredItems = this._filteredItems.filter(x => x !== item);
    if (item.parent) {
      const children = item.parent.children;
      if (children.every(x => x.selected)) {
        this._filteredItems = this._filteredItems.filter(x => x !== item.parent);
      }
    } else if (item.children) {
      this._filteredItems = this.filteredItems.filter(x => x.parent !== item);
    }
  }
  _defaultSearchFn(search, opt) {
    const label = stripSpecialChars(opt.label).toLocaleLowerCase();
    return label.indexOf(search) > -1;
  }
  _getNextItemIndex(steps) {
    if (steps > 0) {
      return this._markedIndex >= this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
    }
    return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
  }
  _stepToItem(steps) {
    if (this._filteredItems.length === 0 || this._filteredItems.every(x => x.disabled)) {
      return;
    }
    this._markedIndex = this._getNextItemIndex(steps);
    if (this.markedItem.disabled) {
      this._stepToItem(steps);
    }
  }
  _getLastMarkedIndex() {
    if (this._ngSelect.hideSelected) {
      return -1;
    }
    if (this._markedIndex > -1 && this.markedItem === undefined) {
      return -1;
    }
    const selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
    if (this.lastSelectedItem && selectedIndex < 0) {
      return -1;
    }
    return Math.max(this.markedIndex, selectedIndex);
  }
  _groupBy(items, prop) {
    const groups = new Map();
    if (items.length === 0) {
      return groups;
    }
    // Check if items are already grouped by given key.
    if (Array.isArray(items[0].value[prop])) {
      for (const item of items) {
        const children = (item.value[prop] || []).map((x, index) => this.mapItem(x, index));
        groups.set(item, children);
      }
      return groups;
    }
    const isFnKey = isFunction(this._ngSelect.groupBy);
    const keyFn = item => {
      const key = isFnKey ? prop(item.value) : item.value[prop];
      return isDefined(key) ? key : undefined;
    };
    // Group items by key.
    for (const item of items) {
      const key = keyFn(item);
      const group = groups.get(key);
      if (group) {
        group.push(item);
      } else {
        groups.set(key, [item]);
      }
    }
    return groups;
  }
  _flatten(groups) {
    const isGroupByFn = isFunction(this._ngSelect.groupBy);
    const items = [];
    for (const key of Array.from(groups.keys())) {
      let i = items.length;
      if (key === undefined) {
        const withoutGroup = groups.get(undefined) || [];
        items.push(...withoutGroup.map(x => {
          x.index = i++;
          return x;
        }));
        continue;
      }
      const isObjectKey = isObject(key);
      const parent = {
        label: isObjectKey ? '' : String(key),
        children: undefined,
        parent: null,
        index: i++,
        disabled: !this._ngSelect.selectableGroup,
        htmlId: newId()
      };
      const groupKey = isGroupByFn ? this._ngSelect.bindLabel : this._ngSelect.groupBy;
      const groupValue = this._ngSelect.groupValue || (() => {
        if (isObjectKey) {
          return key.value;
        }
        return {
          [groupKey]: key
        };
      });
      const children = groups.get(key).map(x => {
        x.parent = parent;
        x.children = undefined;
        x.index = i++;
        return x;
      });
      parent.children = children;
      parent.value = groupValue(key, children.map(x => x.value));
      items.push(parent);
      items.push(...children);
    }
    return items;
  }
}
var KeyCode;
(function (KeyCode) {
  KeyCode[KeyCode["Tab"] = 9] = "Tab";
  KeyCode[KeyCode["Enter"] = 13] = "Enter";
  KeyCode[KeyCode["Esc"] = 27] = "Esc";
  KeyCode[KeyCode["Space"] = 32] = "Space";
  KeyCode[KeyCode["ArrowUp"] = 38] = "ArrowUp";
  KeyCode[KeyCode["ArrowDown"] = 40] = "ArrowDown";
  KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
})(KeyCode || (KeyCode = {}));
class NgDropdownPanelService {
  constructor() {
    this._dimensions = {
      itemHeight: 0,
      panelHeight: 0,
      itemsPerViewport: 0
    };
  }
  get dimensions() {
    return this._dimensions;
  }
  calculateItems(scrollPos, itemsLength, buffer) {
    const d = this._dimensions;
    const scrollHeight = d.itemHeight * itemsLength;
    const scrollTop = Math.max(0, scrollPos);
    const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
    let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
    const maxStartEnd = end;
    const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
    let start = Math.min(maxStart, Math.floor(indexByScrollTop));
    let topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
    topPadding = !isNaN(topPadding) ? topPadding : 0;
    start = !isNaN(start) ? start : -1;
    end = !isNaN(end) ? end : -1;
    start -= buffer;
    start = Math.max(0, start);
    end += buffer;
    end = Math.min(itemsLength, end);
    return {
      topPadding,
      scrollHeight,
      start,
      end
    };
  }
  setDimensions(itemHeight, panelHeight) {
    const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
    this._dimensions = {
      itemHeight,
      panelHeight,
      itemsPerViewport
    };
  }
  getScrollTo(itemTop, itemHeight, lastScroll) {
    const {
      panelHeight
    } = this.dimensions;
    const itemBottom = itemTop + itemHeight;
    const top = lastScroll;
    const bottom = top + panelHeight;
    if (panelHeight >= itemBottom && lastScroll === itemTop) {
      return null;
    }
    if (itemBottom > bottom) {
      return top + itemBottom - bottom;
    } else if (itemTop <= top) {
      return itemTop;
    }
    return null;
  }
}
NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) {
  return new (t || NgDropdownPanelService)();
};
NgDropdownPanelService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgDropdownPanelService,
  factory: NgDropdownPanelService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
const CSS_POSITIONS = ['top', 'right', 'bottom', 'left'];
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_1__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_2__.asapScheduler;
class NgDropdownPanelComponent {
  constructor(_renderer, _zone, _panelService, _elementRef, _document) {
    this._renderer = _renderer;
    this._zone = _zone;
    this._panelService = _panelService;
    this._document = _document;
    this.items = [];
    this.position = 'auto';
    this.virtualScroll = false;
    this.filterValue = null;
    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._scrollToEndFired = false;
    this._updateScrollHeight = false;
    this._lastScrollPosition = 0;
    this._dropdown = _elementRef.nativeElement;
  }
  get currentPosition() {
    return this._currentPosition;
  }
  get itemsLength() {
    return this._itemsLength;
  }
  set itemsLength(value) {
    if (value !== this._itemsLength) {
      this._itemsLength = value;
      this._onItemsLengthChanged();
    }
  }
  get _startOffset() {
    if (this.markedItem) {
      const {
        itemHeight,
        panelHeight
      } = this._panelService.dimensions;
      const offset = this.markedItem.index * itemHeight;
      return panelHeight > offset ? 0 : offset;
    }
    return 0;
  }
  ngOnInit() {
    this._select = this._dropdown.parentElement;
    this._virtualPadding = this.paddingElementRef.nativeElement;
    this._scrollablePanel = this.scrollElementRef.nativeElement;
    this._contentPanel = this.contentElementRef.nativeElement;
    this._handleScroll();
    this._handleOutsideClick();
    this._appendDropdown();
    this._setupMousedownListener();
  }
  ngOnChanges(changes) {
    if (changes.items) {
      const change = changes.items;
      this._onItemsChange(change.currentValue, change.firstChange);
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this._destroy$.unsubscribe();
    if (this.appendTo) {
      this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
    }
  }
  scrollTo(option, startFromOption = false) {
    if (!option) {
      return;
    }
    const index = this.items.indexOf(option);
    if (index < 0 || index >= this.itemsLength) {
      return;
    }
    let scrollTo;
    if (this.virtualScroll) {
      const itemHeight = this._panelService.dimensions.itemHeight;
      scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
    } else {
      const item = this._dropdown.querySelector(`#${option.htmlId}`);
      const lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
      scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
    }
    if (isDefined(scrollTo)) {
      this._scrollablePanel.scrollTop = scrollTo;
    }
  }
  scrollToTag() {
    const panel = this._scrollablePanel;
    panel.scrollTop = panel.scrollHeight - panel.clientHeight;
  }
  adjustPosition() {
    this._updateYPosition();
  }
  _handleDropdownPosition() {
    this._currentPosition = this._calculateCurrentPosition(this._dropdown);
    if (CSS_POSITIONS.includes(this._currentPosition)) {
      this._updateDropdownClass(this._currentPosition);
    } else {
      this._updateDropdownClass('bottom');
    }
    if (this.appendTo) {
      this._updateYPosition();
    }
    this._dropdown.style.opacity = '1';
  }
  _updateDropdownClass(currentPosition) {
    CSS_POSITIONS.forEach(position => {
      const REMOVE_CSS_CLASS = `ng-select-${position}`;
      this._renderer.removeClass(this._dropdown, REMOVE_CSS_CLASS);
      this._renderer.removeClass(this._select, REMOVE_CSS_CLASS);
    });
    const ADD_CSS_CLASS = `ng-select-${currentPosition}`;
    this._renderer.addClass(this._dropdown, ADD_CSS_CLASS);
    this._renderer.addClass(this._select, ADD_CSS_CLASS);
  }
  _handleScroll() {
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.scrollElementRef.nativeElement, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(0, SCROLL_SCHEDULER)).subscribe(e => {
        const path = e.path || e.composedPath && e.composedPath();
        const scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;
        this._onContentScrolled(scrollTop);
      });
    });
  }
  _handleOutsideClick() {
    if (!this._document) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._document, 'touchstart', {
        capture: true
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._document, 'mousedown', {
        capture: true
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe($event => this._checkToClose($event));
    });
  }
  _checkToClose($event) {
    if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
      return;
    }
    const path = $event.path || $event.composedPath && $event.composedPath();
    if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
      return;
    }
    this._zone.run(() => this.outsideClick.emit());
  }
  _onItemsChange(items, firstChange) {
    this.items = items || [];
    this._scrollToEndFired = false;
    this.itemsLength = items.length;
    if (this.virtualScroll) {
      this._updateItemsRange(firstChange);
    } else {
      this._setVirtualHeight();
      this._updateItems(firstChange);
    }
  }
  _updateItems(firstChange) {
    this.update.emit(this.items);
    if (firstChange === false) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        const panelHeight = this._scrollablePanel.clientHeight;
        this._panelService.setDimensions(0, panelHeight);
        this._handleDropdownPosition();
        this.scrollTo(this.markedItem, firstChange);
      });
    });
  }
  _updateItemsRange(firstChange) {
    this._zone.runOutsideAngular(() => {
      this._measureDimensions().then(() => {
        if (firstChange) {
          this._renderItemsRange(this._startOffset);
          this._handleDropdownPosition();
        } else {
          this._renderItemsRange();
        }
      });
    });
  }
  _onContentScrolled(scrollTop) {
    if (this.virtualScroll) {
      this._renderItemsRange(scrollTop);
    }
    this._lastScrollPosition = scrollTop;
    this._fireScrollToEnd(scrollTop);
  }
  _updateVirtualHeight(height) {
    if (this._updateScrollHeight) {
      this._virtualPadding.style.height = `${height}px`;
      this._updateScrollHeight = false;
    }
  }
  _setVirtualHeight() {
    if (!this._virtualPadding) {
      return;
    }
    this._virtualPadding.style.height = `0px`;
  }
  _onItemsLengthChanged() {
    this._updateScrollHeight = true;
  }
  _renderItemsRange(scrollTop = null) {
    if (scrollTop && this._lastScrollPosition === scrollTop) {
      return;
    }
    scrollTop = scrollTop || this._scrollablePanel.scrollTop;
    const range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
    this._updateVirtualHeight(range.scrollHeight);
    this._contentPanel.style.transform = `translateY(${range.topPadding}px)`;
    this._zone.run(() => {
      this.update.emit(this.items.slice(range.start, range.end));
      this.scroll.emit({
        start: range.start,
        end: range.end
      });
    });
    if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
      this._scrollablePanel.scrollTop = scrollTop;
      this._lastScrollPosition = scrollTop;
    }
  }
  _measureDimensions() {
    if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
      return Promise.resolve(this._panelService.dimensions);
    }
    const [first] = this.items;
    this.update.emit([first]);
    return Promise.resolve().then(() => {
      const option = this._dropdown.querySelector(`#${first.htmlId}`);
      const optionHeight = option.clientHeight;
      this._virtualPadding.style.height = `${optionHeight * this.itemsLength}px`;
      const panelHeight = this._scrollablePanel.clientHeight;
      this._panelService.setDimensions(optionHeight, panelHeight);
      return this._panelService.dimensions;
    });
  }
  _fireScrollToEnd(scrollTop) {
    if (this._scrollToEndFired || scrollTop === 0) {
      return;
    }
    const padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;
    if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight - 1) {
      this._zone.run(() => this.scrollToEnd.emit());
      this._scrollToEndFired = true;
    }
  }
  _calculateCurrentPosition(dropdownEl) {
    if (this.position !== 'auto') {
      return this.position;
    }
    const selectRect = this._select.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const offsetTop = selectRect.top + window.pageYOffset;
    const height = selectRect.height;
    const dropdownHeight = dropdownEl.getBoundingClientRect().height;
    if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
      return 'top';
    } else {
      return 'bottom';
    }
  }
  _appendDropdown() {
    if (!this.appendTo) {
      return;
    }
    this._parent = document.querySelector(this.appendTo);
    if (!this._parent) {
      throw new Error(`appendTo selector ${this.appendTo} did not found any parent element`);
    }
    this._updateXPosition();
    this._parent.appendChild(this._dropdown);
  }
  _updateXPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const offsetLeft = select.left - parent.left;
    this._dropdown.style.left = offsetLeft + 'px';
    this._dropdown.style.width = select.width + 'px';
    this._dropdown.style.minWidth = select.width + 'px';
  }
  _updateYPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const delta = select.height;
    if (this._currentPosition === 'top') {
      const offsetBottom = parent.bottom - select.bottom;
      this._dropdown.style.bottom = offsetBottom + delta + 'px';
      this._dropdown.style.top = 'auto';
    } else if (this._currentPosition === 'bottom') {
      const offsetTop = select.top - parent.top;
      this._dropdown.style.top = offsetTop + delta + 'px';
      this._dropdown.style.bottom = 'auto';
    }
  }
  _setupMousedownListener() {
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._dropdown, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(event => {
        const target = event.target;
        if (target.tagName === 'INPUT') {
          return;
        }
        event.preventDefault();
      });
    });
  }
}
NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) {
  return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT, 8));
};
NgDropdownPanelComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgDropdownPanelComponent,
  selectors: [["ng-dropdown-panel"]],
  viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
    }
  },
  inputs: {
    items: "items",
    markedItem: "markedItem",
    position: "position",
    appendTo: "appendTo",
    bufferAmount: "bufferAmount",
    virtualScroll: "virtualScroll",
    headerTemplate: "headerTemplate",
    footerTemplate: "footerTemplate",
    filterValue: "filterValue"
  },
  outputs: {
    update: "update",
    scroll: "scroll",
    scrollToEnd: "scrollToEnd",
    outsideClick: "outsideClick"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 9,
  vars: 6,
  consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]],
  template: function NgDropdownPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      selector: 'ng-dropdown-panel',
      template: `
        <div *ngIf="headerTemplate" class="ng-dropdown-header">
            <ng-container [ngTemplateOutlet]="headerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
        <div #scroll class="ng-dropdown-panel-items scroll-host">
            <div #padding [class.total-padding]="virtualScroll"></div>
            <div #content [class.scrollable-content]="virtualScroll && items.length">
                <ng-content></ng-content>
            </div>
        </div>
        <div *ngIf="footerTemplate" class="ng-dropdown-footer">
            <ng-container [ngTemplateOutlet]="footerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
    `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: NgDropdownPanelService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
      }]
    }];
  }, {
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    markedItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bufferAmount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scrollToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    outsideClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    contentElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }],
    scrollElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['scroll', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }],
    paddingElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['padding', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }]
  });
})();
class NgOptionComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._disabled = false;
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = this._isDisabled(value);
  }
  get label() {
    return (this.elementRef.nativeElement.textContent || '').trim();
  }
  ngOnChanges(changes) {
    if (changes.disabled) {
      this.stateChange$.next({
        value: this.value,
        disabled: this._disabled
      });
    }
  }
  ngAfterViewChecked() {
    if (this.label !== this._previousLabel) {
      this._previousLabel = this.label;
      this.stateChange$.next({
        value: this.value,
        disabled: this._disabled,
        label: this.elementRef.nativeElement.innerHTML
      });
    }
  }
  ngOnDestroy() {
    this.stateChange$.complete();
  }
  _isDisabled(value) {
    return value != null && `${value}` !== 'false';
  }
}
NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) {
  return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
NgOptionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgOptionComponent,
  selectors: [["ng-option"]],
  inputs: {
    value: "value",
    disabled: "disabled"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c4,
  decls: 1,
  vars: 0,
  template: function NgOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ng-option',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `<ng-content></ng-content>`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgSelectConfig {
  constructor() {
    this.notFoundText = 'No items found';
    this.typeToSearchText = 'Type to search';
    this.addTagText = 'Add item';
    this.loadingText = 'Loading...';
    this.clearAllText = 'Clear all';
    this.disableVirtualScroll = true;
    this.openOnEnter = true;
    this.appearance = 'underline';
  }
}
NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) {
  return new (t || NgSelectConfig)();
};
NgSelectConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgSelectConfig,
  factory: NgSelectConfig.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class ConsoleService {
  warn(message) {
    console.warn(message);
  }
}
ConsoleService.ɵfac = function ConsoleService_Factory(t) {
  return new (t || ConsoleService)();
};
ConsoleService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ConsoleService,
  factory: ConsoleService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
const SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ng-select-selection-model');
class NgSelectComponent {
  constructor(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
    this.classes = classes;
    this.autoFocus = autoFocus;
    this.config = config;
    this._cd = _cd;
    this._console = _console;
    this.markFirst = true;
    this.dropdownPosition = 'auto';
    this.loading = false;
    this.closeOnSelect = true;
    this.hideSelected = false;
    this.selectOnTab = false;
    this.bufferAmount = 4;
    this.selectableGroup = false;
    this.selectableGroupAsModel = true;
    this.searchFn = null;
    this.trackByFn = null;
    this.clearOnBackspace = true;
    this.labelForId = null;
    this.inputAttrs = {};
    this.readonly = false;
    this.searchWhileComposing = true;
    this.minTermLength = 0;
    this.editableSearchTerm = false;
    this.keyDownFn = _ => true;
    this.multiple = false;
    this.addTag = false;
    this.searchable = true;
    this.clearable = true;
    this.isOpen = false;
    // output events
    this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.useDefaultClass = true;
    this.viewPortItems = [];
    this.searchTerm = null;
    this.dropdownId = newId();
    this.escapeHTML = true;
    this._items = [];
    this._defaultLabel = 'label';
    this._pressedKeys = [];
    this._isComposing = false;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._onChange = _ => {};
    this._onTouched = () => {};
    this.clearItem = item => {
      const option = this.selectedItems.find(x => x.value === item);
      this.unselect(option);
    };
    this.trackByOption = (_, item) => {
      if (this.trackByFn) {
        return this.trackByFn(item.value);
      }
      return item;
    };
    this._mergeGlobalConfig(config);
    this.itemsList = new ItemsList(this, newSelectionModel());
    this.element = _elementRef.nativeElement;
  }
  get items() {
    return this._items;
  }
  set items(value) {
    if (value === null) {
      value = [];
    }
    this._itemsAreUsed = true;
    this._items = value;
  }
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    if (fn !== undefined && fn !== null && !isFunction(fn)) {
      throw Error('`compareWith` must be a function.');
    }
    this._compareWith = fn;
  }
  get clearSearchOnAdd() {
    if (isDefined(this._clearSearchOnAdd)) {
      return this._clearSearchOnAdd;
    } else if (isDefined(this.config.clearSearchOnAdd)) {
      return this.config.clearSearchOnAdd;
    }
    return this.closeOnSelect;
  }
  set clearSearchOnAdd(value) {
    this._clearSearchOnAdd = value;
  }
  get disabled() {
    return this.readonly || this._disabled;
  }
  get filtered() {
    return !!this.searchTerm && this.searchable || this._isComposing;
  }
  get single() {
    return !this.multiple;
  }
  get _editableSearchTerm() {
    return this.editableSearchTerm && !this.multiple;
  }
  get selectedItems() {
    return this.itemsList.selectedItems;
  }
  get selectedValues() {
    return this.selectedItems.map(x => x.value);
  }
  get hasValue() {
    return this.selectedItems.length > 0;
  }
  get currentPanelPosition() {
    if (this.dropdownPanel) {
      return this.dropdownPanel.currentPosition;
    }
    return undefined;
  }
  ngOnInit() {
    this._handleKeyPresses();
    this._setInputAttributes();
  }
  ngOnChanges(changes) {
    if (changes.multiple) {
      this.itemsList.clearSelected();
    }
    if (changes.items) {
      this._setItems(changes.items.currentValue || []);
    }
    if (changes.isOpen) {
      this._manualOpen = isDefined(changes.isOpen.currentValue);
    }
  }
  ngAfterViewInit() {
    if (!this._itemsAreUsed) {
      this.escapeHTML = false;
      this._setItemsFromNgOptions();
    }
    if (isDefined(this.autoFocus)) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  handleKeyDown($event) {
    const keyCode = KeyCode[$event.which];
    if (keyCode) {
      if (this.keyDownFn($event) === false) {
        return;
      }
      this.handleKeyCode($event);
    } else if ($event.key && $event.key.length === 1) {
      this._keyPress$.next($event.key.toLocaleLowerCase());
    }
  }
  handleKeyCode($event) {
    switch ($event.which) {
      case KeyCode.ArrowDown:
        this._handleArrowDown($event);
        break;
      case KeyCode.ArrowUp:
        this._handleArrowUp($event);
        break;
      case KeyCode.Space:
        this._handleSpace($event);
        break;
      case KeyCode.Enter:
        this._handleEnter($event);
        break;
      case KeyCode.Tab:
        this._handleTab($event);
        break;
      case KeyCode.Esc:
        this.close();
        $event.preventDefault();
        break;
      case KeyCode.Backspace:
        this._handleBackspace();
        break;
    }
  }
  handleMousedown($event) {
    const target = $event.target;
    if (target.tagName !== 'INPUT') {
      $event.preventDefault();
    }
    if (target.classList.contains('ng-clear-wrapper')) {
      this.handleClearClick();
      return;
    }
    if (target.classList.contains('ng-arrow-wrapper')) {
      this.handleArrowClick();
      return;
    }
    if (target.classList.contains('ng-value-icon')) {
      return;
    }
    if (!this.focused) {
      this.focus();
    }
    if (this.searchable) {
      this.open();
    } else {
      this.toggle();
    }
  }
  handleArrowClick() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  handleClearClick() {
    if (this.hasValue) {
      this.itemsList.clearSelected(true);
      this._updateNgModel();
    }
    this._clearSearch();
    this.focus();
    this.clearEvent.emit();
    this._onSelectionChanged();
  }
  clearModel() {
    if (!this.clearable) {
      return;
    }
    this.itemsList.clearSelected();
    this._updateNgModel();
  }
  writeValue(value) {
    this.itemsList.clearSelected();
    this._handleWriteValue(value);
    this._cd.markForCheck();
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(state) {
    this._disabled = state;
    this._cd.markForCheck();
  }
  toggle() {
    if (!this.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    if (this.disabled || this.isOpen || this._manualOpen) {
      return;
    }
    if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
      return;
    }
    this.isOpen = true;
    this.itemsList.markSelectedOrDefault(this.markFirst);
    this.openEvent.emit();
    if (!this.searchTerm) {
      this.focus();
    }
    this.detectChanges();
  }
  close() {
    if (!this.isOpen || this._manualOpen) {
      return;
    }
    this.isOpen = false;
    this._isComposing = false;
    if (!this._editableSearchTerm) {
      this._clearSearch();
    } else {
      this.itemsList.resetFilteredItems();
    }
    this.itemsList.unmarkItem();
    this._onTouched();
    this.closeEvent.emit();
    this._cd.markForCheck();
  }
  toggleItem(item) {
    if (!item || item.disabled || this.disabled) {
      return;
    }
    if (this.multiple && item.selected) {
      this.unselect(item);
    } else {
      this.select(item);
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this._onSelectionChanged();
  }
  select(item) {
    if (!item.selected) {
      this.itemsList.select(item);
      if (this.clearSearchOnAdd && !this._editableSearchTerm) {
        this._clearSearch();
      }
      this._updateNgModel();
      if (this.multiple) {
        this.addEvent.emit(item.value);
      }
    }
    if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
      this.close();
    }
  }
  focus() {
    if (!this.searchInput.nativeElement.readOnly) {
      this.searchInput.nativeElement.focus();
    }
    ;
  }
  blur() {
    this.searchInput.nativeElement.blur();
  }
  unselect(item) {
    if (!item) {
      return;
    }
    this.itemsList.unselect(item);
    this.focus();
    this._updateNgModel();
    this.removeEvent.emit(item);
  }
  selectTag() {
    let tag;
    if (isFunction(this.addTag)) {
      tag = this.addTag(this.searchTerm);
    } else {
      tag = this._primitive ? this.searchTerm : {
        [this.bindLabel]: this.searchTerm
      };
    }
    const handleTag = item => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item);
    if (isPromise(tag)) {
      tag.then(item => this.select(handleTag(item))).catch(() => {});
    } else if (tag) {
      this.select(handleTag(tag));
    }
  }
  showClear() {
    return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
  }
  get showAddTag() {
    if (!this._validTerm) {
      return false;
    }
    const term = this.searchTerm.toLowerCase().trim();
    return this.addTag && !this.itemsList.filteredItems.some(x => x.label.toLowerCase() === term) && (!this.hideSelected && this.isOpen || !this.selectedItems.some(x => x.label.toLowerCase() === term)) && !this.loading;
  }
  showNoItemsFound() {
    const empty = this.itemsList.filteredItems.length === 0;
    return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
  }
  showTypeToSearch() {
    const empty = this.itemsList.filteredItems.length === 0;
    return empty && this._isTypeahead && !this._validTerm && !this.loading;
  }
  onCompositionStart() {
    this._isComposing = true;
  }
  onCompositionEnd(term) {
    this._isComposing = false;
    if (this.searchWhileComposing) {
      return;
    }
    this.filter(term);
  }
  filter(term) {
    if (this._isComposing && !this.searchWhileComposing) {
      return;
    }
    this.searchTerm = term;
    if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
      this.typeahead.next(term);
    }
    if (!this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
      if (this.isOpen) {
        this.itemsList.markSelectedOrDefault(this.markFirst);
      }
    }
    this.searchEvent.emit({
      term,
      items: this.itemsList.filteredItems.map(x => x.value)
    });
    this.open();
  }
  onInputFocus($event) {
    if (this.focused) {
      return;
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.element.classList.add('ng-select-focused');
    this.focusEvent.emit($event);
    this.focused = true;
  }
  onInputBlur($event) {
    this.element.classList.remove('ng-select-focused');
    this.blurEvent.emit($event);
    if (!this.isOpen && !this.disabled) {
      this._onTouched();
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.focused = false;
  }
  onItemHover(item) {
    if (item.disabled) {
      return;
    }
    this.itemsList.markItem(item);
  }
  detectChanges() {
    if (!this._cd.destroyed) {
      this._cd.detectChanges();
    }
  }
  _setSearchTermFromItems() {
    const selected = this.selectedItems && this.selectedItems[0];
    this.searchTerm = selected && selected.label || null;
  }
  _setItems(items) {
    const firstItem = items[0];
    this.bindLabel = this.bindLabel || this._defaultLabel;
    this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
    this.itemsList.setItems(items);
    if (items.length > 0 && this.hasValue) {
      this.itemsList.mapSelectedItems();
    }
    if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
    }
    if (this._isTypeahead || this.isOpen) {
      this.itemsList.markSelectedOrDefault(this.markFirst);
    }
  }
  _setItemsFromNgOptions() {
    const mapNgOptions = options => {
      this.items = options.map(option => ({
        $ngOptionValue: option.value,
        $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
        disabled: option.disabled
      }));
      this.itemsList.setItems(this.items);
      if (this.hasValue) {
        this.itemsList.mapSelectedItems();
      }
      this.detectChanges();
    };
    const handleOptionChange = () => {
      const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this.ngOptions.changes, this._destroy$);
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...this.ngOptions.map(option => option.stateChange$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(changedOrDestroyed)).subscribe(option => {
        const item = this.itemsList.findItem(option.value);
        item.disabled = option.disabled;
        item.label = option.label || item.label;
        this._cd.detectChanges();
      });
    };
    this.ngOptions.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.ngOptions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(options => {
      this.bindLabel = this._defaultLabel;
      mapNgOptions(options);
      handleOptionChange();
    });
  }
  _isValidWriteValue(value) {
    if (!isDefined(value) || this.multiple && value === '' || Array.isArray(value) && value.length === 0) {
      return false;
    }
    const validateBinding = item => {
      if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
        this._console.warn(`Setting object(${JSON.stringify(item)}) as your model with bindValue is not allowed unless [compareWith] is used.`);
        return false;
      }
      return true;
    };
    if (this.multiple) {
      if (!Array.isArray(value)) {
        this._console.warn('Multiple select ngModel should be array.');
        return false;
      }
      return value.every(item => validateBinding(item));
    } else {
      return validateBinding(value);
    }
  }
  _handleWriteValue(ngModel) {
    if (!this._isValidWriteValue(ngModel)) {
      return;
    }
    const select = val => {
      let item = this.itemsList.findItem(val);
      if (item) {
        this.itemsList.select(item);
      } else {
        const isValObject = isObject(val);
        const isPrimitive = !isValObject && !this.bindValue;
        if (isValObject || isPrimitive) {
          this.itemsList.select(this.itemsList.mapItem(val, null));
        } else if (this.bindValue) {
          item = {
            [this.bindLabel]: null,
            [this.bindValue]: val
          };
          this.itemsList.select(this.itemsList.mapItem(item, null));
        }
      }
    };
    if (this.multiple) {
      ngModel.forEach(item => select(item));
    } else {
      select(ngModel);
    }
  }
  _handleKeyPresses() {
    if (this.searchable) {
      return;
    }
    this._keyPress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(letter => this._pressedKeys.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(() => this._pressedKeys.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(() => this._pressedKeys.join(''))).subscribe(term => {
      const item = this.itemsList.findByLabel(term);
      if (item) {
        if (this.isOpen) {
          this.itemsList.markItem(item);
          this._scrollToMarked();
          this._cd.markForCheck();
        } else {
          this.select(item);
        }
      }
      this._pressedKeys = [];
    });
  }
  _setInputAttributes() {
    const input = this.searchInput.nativeElement;
    const attributes = {
      type: 'text',
      autocorrect: 'off',
      autocapitalize: 'off',
      autocomplete: this.labelForId ? 'off' : this.dropdownId,
      ...this.inputAttrs
    };
    for (const key of Object.keys(attributes)) {
      input.setAttribute(key, attributes[key]);
    }
  }
  _updateNgModel() {
    const model = [];
    for (const item of this.selectedItems) {
      if (this.bindValue) {
        let value = null;
        if (item.children) {
          const groupKey = this.groupValue ? this.bindValue : this.groupBy;
          value = item.value[groupKey || this.groupBy];
        } else {
          value = this.itemsList.resolveNested(item.value, this.bindValue);
        }
        model.push(value);
      } else {
        model.push(item.value);
      }
    }
    const selected = this.selectedItems.map(x => x.value);
    if (this.multiple) {
      this._onChange(model);
      this.changeEvent.emit(selected);
    } else {
      this._onChange(isDefined(model[0]) ? model[0] : null);
      this.changeEvent.emit(selected[0]);
    }
    this._cd.markForCheck();
  }
  _clearSearch() {
    if (!this.searchTerm) {
      return;
    }
    this._changeSearch(null);
    this.itemsList.resetFilteredItems();
  }
  _changeSearch(searchTerm) {
    this.searchTerm = searchTerm;
    if (this._isTypeahead) {
      this.typeahead.next(searchTerm);
    }
  }
  _scrollToMarked() {
    if (!this.isOpen || !this.dropdownPanel) {
      return;
    }
    this.dropdownPanel.scrollTo(this.itemsList.markedItem);
  }
  _scrollToTag() {
    if (!this.isOpen || !this.dropdownPanel) {
      return;
    }
    this.dropdownPanel.scrollToTag();
  }
  _onSelectionChanged() {
    if (this.isOpen && this.multiple && this.appendTo) {
      // Make sure items are rendered.
      this._cd.detectChanges();
      this.dropdownPanel.adjustPosition();
    }
  }
  _handleTab($event) {
    if (this.isOpen === false && !this.addTag) {
      return;
    }
    if (this.selectOnTab) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
        $event.preventDefault();
      } else if (this.showAddTag) {
        this.selectTag();
        $event.preventDefault();
      } else {
        this.close();
      }
    } else {
      this.close();
    }
  }
  _handleEnter($event) {
    if (this.isOpen || this._manualOpen) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
      } else if (this.showAddTag) {
        this.selectTag();
      }
    } else if (this.openOnEnter) {
      this.open();
    } else {
      return;
    }
    $event.preventDefault();
  }
  _handleSpace($event) {
    if (this.isOpen || this._manualOpen) {
      return;
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowDown($event) {
    if (this._nextItemIsTag(+1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markNextItem();
      this._scrollToMarked();
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowUp($event) {
    if (!this.isOpen) {
      return;
    }
    if (this._nextItemIsTag(-1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markPreviousItem();
      this._scrollToMarked();
    }
    $event.preventDefault();
  }
  _nextItemIsTag(nextStep) {
    const nextIndex = this.itemsList.markedIndex + nextStep;
    return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
  }
  _handleBackspace() {
    if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
      return;
    }
    if (this.multiple) {
      this.unselect(this.itemsList.lastSelectedItem);
    } else {
      this.clearModel();
    }
  }
  get _isTypeahead() {
    return this.typeahead && this.typeahead.observers.length > 0;
  }
  get _validTerm() {
    const term = this.searchTerm && this.searchTerm.trim();
    return term && term.length >= this.minTermLength;
  }
  _mergeGlobalConfig(config) {
    this.placeholder = this.placeholder || config.placeholder;
    this.notFoundText = this.notFoundText || config.notFoundText;
    this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
    this.addTagText = this.addTagText || config.addTagText;
    this.loadingText = this.loadingText || config.loadingText;
    this.clearAllText = this.clearAllText || config.clearAllText;
    this.virtualScroll = isDefined(this.virtualScroll) ? this.virtualScroll : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
    this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
    this.appendTo = this.appendTo || config.appendTo;
    this.bindValue = this.bindValue || config.bindValue;
    this.bindLabel = this.bindLabel || config.bindLabel;
    this.appearance = this.appearance || config.appearance;
  }
}
NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) {
  return new (t || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConsoleService));
};
NgSelectComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgSelectComponent,
  selectors: [["ng-select"]],
  contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
    }
  },
  viewQuery: function NgSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgDropdownPanelComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    }
  },
  hostVars: 20,
  hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-typeahead", ctx.typeahead)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select", ctx.useDefaultClass)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-single", ctx.single);
    }
  },
  inputs: {
    bindLabel: "bindLabel",
    bindValue: "bindValue",
    markFirst: "markFirst",
    placeholder: "placeholder",
    notFoundText: "notFoundText",
    typeToSearchText: "typeToSearchText",
    addTagText: "addTagText",
    loadingText: "loadingText",
    clearAllText: "clearAllText",
    appearance: "appearance",
    dropdownPosition: "dropdownPosition",
    appendTo: "appendTo",
    loading: "loading",
    closeOnSelect: "closeOnSelect",
    hideSelected: "hideSelected",
    selectOnTab: "selectOnTab",
    openOnEnter: "openOnEnter",
    maxSelectedItems: "maxSelectedItems",
    groupBy: "groupBy",
    groupValue: "groupValue",
    bufferAmount: "bufferAmount",
    virtualScroll: "virtualScroll",
    selectableGroup: "selectableGroup",
    selectableGroupAsModel: "selectableGroupAsModel",
    searchFn: "searchFn",
    trackByFn: "trackByFn",
    clearOnBackspace: "clearOnBackspace",
    labelForId: "labelForId",
    inputAttrs: "inputAttrs",
    tabIndex: "tabIndex",
    readonly: "readonly",
    searchWhileComposing: "searchWhileComposing",
    minTermLength: "minTermLength",
    editableSearchTerm: "editableSearchTerm",
    keyDownFn: "keyDownFn",
    typeahead: "typeahead",
    multiple: "multiple",
    addTag: "addTag",
    searchable: "searchable",
    clearable: "clearable",
    isOpen: "isOpen",
    items: "items",
    compareWith: "compareWith",
    clearSearchOnAdd: "clearSearchOnAdd"
  },
  outputs: {
    blurEvent: "blur",
    focusEvent: "focus",
    changeEvent: "change",
    openEvent: "open",
    closeEvent: "close",
    searchEvent: "search",
    clearEvent: "clear",
    addEvent: "add",
    removeEvent: "remove",
    scroll: "scroll",
    scrollToEnd: "scrollToEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgSelectComponent),
    multi: true
  }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 14,
  vars: 19,
  consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], ["role", "combobox", "aria-haspopup", "listbox", 1, "ng-input"], ["aria-autocomplete", "list", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", "role", "listbox", "aria-label", "Options list", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], ["role", "listbox", "aria-label", "Options list", 1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]],
  template: function NgSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
        return ctx.handleMousedown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, null, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.filter(_r2.value));
      })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() {
        return ctx.onCompositionStart();
      })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onCompositionEnd(_r2.value));
      })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) {
        return ctx.onInputFocus($event);
      })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) {
        return ctx.onInputBlur($event);
      })("change", function NgSelectComponent_Template_input_change_7_listener($event) {
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.multiLabelTemplate || !ctx.multiple) && ctx.selectedItems.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple && ctx.multiLabelTemplate && ctx.selectedValues.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen ? ctx.dropdownId : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClear());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, NgDropdownPanelComponent, NgItemLabelDirective],
  styles: ["@charset \"UTF-8\";.ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ng-select',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgSelectComponent),
        multi: true
      }, NgDropdownPanelService],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"(!multiLabelTemplate  || !multiple ) && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiple && multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\"\n            role=\"combobox\" \n            [attr.aria-expanded]=\"isOpen\" \n            [attr.aria-owns]=\"isOpen ? dropdownId : null\" \n            aria-haspopup=\"listbox\">\n\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\"\n                   aria-autocomplete=\"list\"\n                   [attr.aria-controls]=\"isOpen ? dropdownId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\"\n                   role=\"listbox\"\n                   aria-label=\"Options list\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
      styles: ["@charset \"UTF-8\";.ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['class']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['autofocus']
      }]
    }, {
      type: NgSelectConfig
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [SELECTION_MODEL_FACTORY]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: ConsoleService
    }];
  }, {
    bindLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bindValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    markFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    notFoundText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    typeToSearchText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    addTagText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearAllText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeOnSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectOnTab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openOnEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxSelectedItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bufferAmount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectableGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectableGroupAsModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    searchFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackByFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearOnBackspace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelForId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputAttrs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    searchWhileComposing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minTermLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    editableSearchTerm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyDownFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    typeahead: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-typeahead']
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-multiple']
    }],
    addTag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-taggable']
    }],
    searchable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-searchable']
    }],
    clearable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-clearable']
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-opened']
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearSearchOnAdd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    blurEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['blur']
    }],
    focusEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['focus']
    }],
    changeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['change']
    }],
    openEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['open']
    }],
    closeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['close']
    }],
    searchEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['search']
    }],
    clearEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['clear']
    }],
    addEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['add']
    }],
    removeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['remove']
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['scroll']
    }],
    scrollToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['scrollToEnd']
    }],
    optionTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgOptionTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    optgroupTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgOptgroupTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    labelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgLabelTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    multiLabelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgMultiLabelTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgHeaderTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgFooterTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    notFoundTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgNotFoundTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    typeToSearchTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgTypeToSearchTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    loadingTextTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgLoadingTextTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    tagTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgTagTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    loadingSpinnerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgLoadingSpinnerTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    dropdownPanel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgDropdownPanelComponent)]
    }],
    searchInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['searchInput', {
        static: true
      }]
    }],
    ngOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgOptionComponent, {
        descendants: true
      }]
    }],
    useDefaultClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-disabled']
    }],
    filtered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-filtered']
    }],
    single: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-single']
    }],
    handleKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
function DefaultSelectionModelFactory() {
  return new DefaultSelectionModel();
}
class DefaultSelectionModel {
  constructor() {
    this._selected = [];
  }
  get value() {
    return this._selected;
  }
  select(item, multiple, groupAsModel) {
    item.selected = true;
    if (!item.children || !multiple && groupAsModel) {
      this._selected.push(item);
    }
    if (multiple) {
      if (item.parent) {
        const childrenCount = item.parent.children.length;
        const selectedCount = item.parent.children.filter(x => x.selected).length;
        item.parent.selected = childrenCount === selectedCount;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, true);
        this._removeChildren(item);
        if (groupAsModel && this._activeChildren(item)) {
          this._selected = [...this._selected.filter(x => x.parent !== item), item];
        } else {
          this._selected = [...this._selected, ...item.children.filter(x => !x.disabled)];
        }
      }
    }
  }
  unselect(item, multiple) {
    this._selected = this._selected.filter(x => x !== item);
    item.selected = false;
    if (multiple) {
      if (item.parent && item.parent.selected) {
        const children = item.parent.children;
        this._removeParent(item.parent);
        this._removeChildren(item.parent);
        this._selected.push(...children.filter(x => x !== item && !x.disabled));
        item.parent.selected = false;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, false);
        this._removeChildren(item);
      }
    }
  }
  clear(keepDisabled) {
    this._selected = keepDisabled ? this._selected.filter(x => x.disabled) : [];
  }
  _setChildrenSelectedState(children, selected) {
    for (const child of children) {
      if (child.disabled) {
        continue;
      }
      child.selected = selected;
    }
  }
  _removeChildren(parent) {
    this._selected = [...this._selected.filter(x => x.parent !== parent), ...parent.children.filter(x => x.parent === parent && x.disabled && x.selected)];
  }
  _removeParent(parent) {
    this._selected = this._selected.filter(x => x !== parent);
  }
  _activeChildren(item) {
    return item.children.every(x => !x.disabled || x.selected);
  }
}
class NgSelectModule {}
NgSelectModule.ɵfac = function NgSelectModule_Factory(t) {
  return new (t || NgSelectModule)();
};
NgSelectModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgSelectModule
});
NgSelectModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [{
    provide: SELECTION_MODEL_FACTORY,
    useValue: DefaultSelectionModelFactory
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule],
      exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective],
      providers: [{
        provide: SELECTION_MODEL_FACTORY,
        useValue: DefaultSelectionModelFactory
      }]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ng-select
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map