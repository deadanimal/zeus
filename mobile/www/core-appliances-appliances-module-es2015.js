(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-appliances-appliances-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/appliances/appliances.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/appliances/appliances.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>Appliances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list mode=\"ios\" class=\"ion-no-margin list-core\">\n    <ion-list-header mode=\"ios\">\n      <h3>Registered Appliances</h3>\n    </ion-list-header>\n\n    <div [hidden]=\"!isListEmpty\">\n      <img [src]=\"iconError\" class=\"error-img\">\n      <p class=\"error-text\">No appliances registered</p>\n    </div>\n\n    <ion-item detail *ngFor=\"let appliance of tempAppliance\" lines=\"none\" (click)=\"view(appliance)\">\n      <ion-avatar slot=\"start\">\n        <img *ngIf=\"appliance.type == 'TV'\" [src]=\"iconLCD\">\n        <img *ngIf=\"appliance.type == 'Lamp'\" [src]=\"iconLamp\">\n        <img *ngIf=\"appliance.type == 'Light'\" [src]=\"iconLamp1\">\n        <img *ngIf=\"appliance.type == 'Fridge'\" [src]=\"iconDryer\">\n        <img *ngIf=\"appliance.type == 'AC'\" [src]=\"iconAirCond\">\n        <img *ngIf=\"appliance.type == 'Dishwasher'\" [src]=\"iconDishwasher\">\n        <img *ngIf=\"appliance.type == 'Toaster'\" [src]=\"iconToaster\">\n        <img *ngIf=\"appliance.type == 'Dryer'\" [src]=\"iconDryer\">\n        <img *ngIf=\"appliance.type == 'Washing'\" [src]=\"iconDryer\">\n        <img *ngIf=\"appliance.type == 'Microwave'\" [src]=\"iconMicrowave\">\n        <img *ngIf=\"appliance.type == 'Air'\" [src]=\"iconAir\">\n        <img *ngIf=\"appliance.type == 'Deep'\" [src]=\"iconDeep\">\n        <img *ngIf=\"appliance.type == 'Blender'\" [src]=\"iconBlender\">\n        <img *ngIf=\"appliance.type == 'Heater'\" [src]=\"iconBlender\">\n        <img *ngIf=\"appliance.type == 'Induction'\" [src]=\"iconInduction\">\n        <img *ngIf=\"appliance.type == 'Iron'\" [src]=\"iconIron\">\n        <img *ngIf=\"appliance.type == 'Vaccuum'\" [src]=\"iconVacuum\">\n        <img *ngIf=\"appliance.type == 'Water'\" [src]=\"iconWater\">\n        <img *ngIf=\"appliance.type == 'Rice'\" [src]=\"iconCooker\">\n        <img *ngIf=\"appliance.type == 'Pressure'\" [src]=\"iconCooker\">\n        <img *ngIf=\"appliance.type == 'Oven'\" [src]=\"iconMicrowave\">\n        <img *ngIf=\"appliance.type == 'Steamer'\" [src]=\"iconSteamer\">\n        <img *ngIf=\"appliance.type == 'Kettle'\" [src]=\"iconKettle\">\n      </ion-avatar>\n\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{appliance.name}}</h2>\n        <!-- <p>{{appliance.description}}</p> -->\n      </ion-label>\n    </ion-item>\n\n  <!-- <ion-item detail lines=\"none\" (click)=\"view()\">\n    <ion-avatar slot=\"start\">\n      <img [src]=\"iconLCD\">\n    </ion-avatar>\n\n    <ion-label class=\"ion-text-wrap\">\n      <h2>Name</h2>\n      <p>Description</p>\n    </ion-label>\n\n    <ion-label slot=\"end\" class=\"ion-text-right\">\n      <ion-badge color=\"success\">On</ion-badge>\n      <p>Reading</p>\n    </ion-label>\n  </ion-item> -->\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/core/appliances/appliances-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/appliances/appliances-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: AppliancesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppliancesPageRoutingModule", function() { return AppliancesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _appliances_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appliances.page */ "./src/app/core/appliances/appliances.page.ts");




const routes = [
    {
        path: '',
        component: _appliances_page__WEBPACK_IMPORTED_MODULE_3__["AppliancesPage"]
    }
];
let AppliancesPageRoutingModule = class AppliancesPageRoutingModule {
};
AppliancesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppliancesPageRoutingModule);



/***/ }),

/***/ "./src/app/core/appliances/appliances.module.ts":
/*!******************************************************!*\
  !*** ./src/app/core/appliances/appliances.module.ts ***!
  \******************************************************/
/*! exports provided: AppliancesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppliancesPageModule", function() { return AppliancesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _appliances_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appliances-routing.module */ "./src/app/core/appliances/appliances-routing.module.ts");
/* harmony import */ var _appliances_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appliances.page */ "./src/app/core/appliances/appliances.page.ts");







let AppliancesPageModule = class AppliancesPageModule {
};
AppliancesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appliances_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppliancesPageRoutingModule"]
        ],
        declarations: [_appliances_page__WEBPACK_IMPORTED_MODULE_6__["AppliancesPage"]]
    })
], AppliancesPageModule);



/***/ }),

/***/ "./src/app/core/appliances/appliances.page.scss":
/*!******************************************************!*\
  !*** ./src/app/core/appliances/appliances.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-img {\n  display: grid;\n  max-width: 7rem !important;\n  margin-top: 3rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.error-text {\n  color: #9d9fa6;\n  display: grid;\n  font-size: 0.9rem;\n  margin-left: 4rem;\n  margin-right: 4rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Ta3Vuay9za3Vuay0wMDItemV1cy9tb2JpbGUvc3JjL2FwcC9jb3JlL2FwcGxpYW5jZXMvYXBwbGlhbmNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvcmUvYXBwbGlhbmNlcy9hcHBsaWFuY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9hcHBsaWFuY2VzL2FwcGxpYW5jZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWltZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXgtd2lkdGg6IDdyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiAgXG4uZXJyb3ItdGV4dCB7XG4gICAgY29sb3I6ICM5ZDlmYTY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIi5lcnJvci1pbWcge1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXgtd2lkdGg6IDdyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmVycm9yLXRleHQge1xuICBjb2xvcjogIzlkOWZhNjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi1sZWZ0OiA0cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/appliances/appliances.page.ts":
/*!****************************************************!*\
  !*** ./src/app/core/appliances/appliances.page.ts ***!
  \****************************************************/
/*! exports provided: Temp, AppliancesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Temp", function() { return Temp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppliancesPage", function() { return AppliancesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_appliances_appliances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/appliances/appliances.service */ "./src/app/shared/services/appliances/appliances.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_base_appliances_base_appliances_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/base-appliances/base-appliances.service */ "./src/app/shared/services/base-appliances/base-appliances.service.ts");
/* harmony import */ var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/users/users.service */ "./src/app/shared/services/users/users.service.ts");
/* harmony import */ var src_app_shared_services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/buildings/buildings.service */ "./src/app/shared/services/buildings/buildings.service.ts");
/* harmony import */ var src_app_shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/accounts/accounts.service */ "./src/app/shared/services/accounts/accounts.service.ts");




// import { Appliance } from 'src/assets/mock/appliances';




class Temp {
    constructor(id, name, active, account, building, appliance_base, type) {
        this.id = id;
        this.name = name;
        this.active = active;
        this.account = account;
        this.building = building;
        this.appliance_base = appliance_base;
        this.type = type;
    }
}
let AppliancesPage = class AppliancesPage {
    constructor(applianceService, baseService, userService, buildingService, accountService, router) {
        this.applianceService = applianceService;
        this.baseService = baseService;
        this.userService = userService;
        this.buildingService = buildingService;
        this.accountService = accountService;
        this.router = router;
        // Data
        this.accounts = [];
        this.appliances = [];
        this.bases = [];
        this.buildings = [];
        this.users = [];
        this.accountID = '0cfe1dc3-f224-4e9f-90ad-8a4d2f3c7378';
        this.tempAppliance = [];
        // Checker
        this.isListEmpty = false;
        // Icon
        this.iconError = 'assets/img/default/404-error.svg';
        this.iconAirCond = 'assets/img/appliance/air-conditioner.svg';
        this.iconDishwasher = 'assets/img/appliance/dishwasher.svg';
        this.iconFridge = 'assets/img/appliance/fridge.svg';
        this.iconLamp = 'assets/img/appliance/lamp.svg';
        this.iconLamp1 = 'assets/img/appliance/lamp-1.svg';
        this.iconLCD = 'assets/img/appliance/lcd.svg';
        this.iconMicrowave = 'assets/img/appliance/microwave.svg';
        this.iconToaster = 'assets/img/appliance/toaster.svg';
        this.iconDryer = 'assets/img/appliance/tumble-dryer.svg';
        this.iconAir = 'assets/img/appliance/air.svg';
        this.iconBlender = 'assets/img/appliance/blender.svg';
        this.iconDeep = 'assets/img/appliance/deep.svg';
        this.iconInduction = 'assets/img/appliance/induction.svg';
        this.iconIron = 'assets/img/appliance/iron.svg';
        this.iconVacuum = 'assets/img/appliance/vacuum.svg';
        this.iconWater = 'assets/img/appliance/water-heater.svg';
        this.iconCooker = 'assets/img/appliance/rice-cooker.svg';
        this.iconSteamer = 'assets/img/appliance/steamer.svg';
        this.iconKettle = 'assets/img/appliance/kettle.svg';
        this.getData();
    }
    ngOnInit() {
    }
    getData() {
        this.applianceService.get().subscribe(() => {
            // this.appliances = this.applianceService.appliances
            this.applianceService.appliances.forEach((appliance) => {
                if (appliance.account == this.accountID) {
                    this.appliances.push(appliance);
                    console.log(this.appliances);
                }
            });
        }, () => { }, () => {
            this.appliances.forEach((appliance) => {
                let splitted = appliance.name.split(' ', 2);
                // console.log('Splitted: ', splitted[1])
                let tempData = {
                    id: appliance.id,
                    name: appliance.name,
                    active: appliance.active,
                    account: appliance.account,
                    building: appliance.building,
                    appliance_base: appliance.appliance_base,
                    type: splitted[0]
                };
                console.log(tempData);
                this.tempAppliance.push(tempData);
            });
        });
        this.accountService.get().subscribe(() => {
            this.accounts = this.accountService.accounts;
        }, () => { }, () => { });
        this.baseService.get().subscribe(() => {
            this.bases = this.baseService.baseAppliances;
        }, () => { }, () => { });
        this.buildingService.get().subscribe(() => {
            this.buildings = this.buildingService.buildings;
        }, () => { }, () => { });
        this.userService.get().subscribe(() => {
            this.users = this.userService.users;
        }, () => { }, () => { });
        // this.appliances = Appliance
        // if (this.appliances.length == 0) {
        //   this.isListEmpty = true
        // }
        // else {
        //   this.isListEmpty = false
        // }
    }
    view(data) {
        let path = '/appliance-detail';
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(data)
            }
        };
        this.router.navigate([path], navigationExtras);
    }
};
AppliancesPage.ctorParameters = () => [
    { type: src_app_shared_services_appliances_appliances_service__WEBPACK_IMPORTED_MODULE_2__["AppliancesService"] },
    { type: src_app_shared_services_base_appliances_base_appliances_service__WEBPACK_IMPORTED_MODULE_4__["BaseAppliancesService"] },
    { type: src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: src_app_shared_services_buildings_buildings_service__WEBPACK_IMPORTED_MODULE_6__["BuildingsService"] },
    { type: src_app_shared_services_accounts_accounts_service__WEBPACK_IMPORTED_MODULE_7__["AccountsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AppliancesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appliances',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./appliances.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/appliances/appliances.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./appliances.page.scss */ "./src/app/core/appliances/appliances.page.scss")).default]
    })
], AppliancesPage);



/***/ }),

/***/ "./src/app/shared/services/accounts/accounts.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/accounts/accounts.service.ts ***!
  \**************************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AccountsService = class AccountsService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlAccounts = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/accounts/';
        this.accounts = [];
        this.accountsFiltered = [];
    }
    post(body) {
        return this.http.post(this.urlAccounts, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Account: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlAccounts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.accounts = res;
            console.log('Accounts: ', this.accounts);
        }));
    }
    getOne(id) {
        let urlTemp = this.urlAccounts + id + '/';
        return this.http.get(urlTemp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.account = res;
            console.log('Account: ', this.account);
        }));
    }
    update(id, body) {
        let urlTemp = this.urlAccounts + id + '/';
        return this.http.patch(urlTemp, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.account = res;
            console.log('Account: ', this.account);
        }));
    }
    delete(id) {
        let urlTemp = this.urlAccounts + id + '/';
        return this.http.delete(urlTemp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Account: ', res);
        }));
    }
    filter(field) {
        let urlTemp = this.urlAccounts + '?' + field;
        return this.http.get(urlTemp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.accountsFiltered = res;
            console.log('Accounts filtered: ', this.accountsFiltered);
        }));
    }
};
AccountsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AccountsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AccountsService);



/***/ }),

/***/ "./src/app/shared/services/appliances/appliances.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/appliances/appliances.service.ts ***!
  \******************************************************************/
/*! exports provided: AppliancesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppliancesService", function() { return AppliancesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AppliancesService = class AppliancesService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlAppliances = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/appliances/';
        this.urlActivity = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/appliance-activities/';
        this.appliances = [];
        this.appliancesFiltered = [];
        this.activities = [];
    }
    post(body) {
        return this.http.post(this.urlAppliances, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Appliance: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlAppliances).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.appliances = res;
            console.log('Appliances: ', this.appliances);
        }));
    }
    getOne(id) {
        let urlID = this.urlAppliances + id + '/';
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.appliance = res;
            console.log('Appliance: ', this.appliance);
        }));
    }
    update(id, body) {
        let urlTemp = this.urlAppliances + id + '/';
        return this.http.patch(urlTemp, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.appliance = res;
            console.log('Appliance: ', this.appliance);
        }));
    }
    delete(id) {
        return this.http.delete(this.urlAppliances + id + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Appliance: ', res);
        }));
    }
    filter(field) {
        let urlTemp = this.urlAppliances + '?' + field;
        return this.http.get(urlTemp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.appliancesFiltered = res;
            console.log('Appliances filtered: ', this.appliancesFiltered);
        }));
    }
    getActivity() {
        return this.http.get(this.urlActivity).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.activities = res;
            console.log('Activity: ', this.activities);
        }));
    }
};
AppliancesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AppliancesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppliancesService);



/***/ }),

/***/ "./src/app/shared/services/base-appliances/base-appliances.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/services/base-appliances/base-appliances.service.ts ***!
  \****************************************************************************/
/*! exports provided: BaseAppliancesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAppliancesService", function() { return BaseAppliancesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let BaseAppliancesService = class BaseAppliancesService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlBaseAppliances = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/base-appliances/';
        this.baseAppliances = [];
        this.baseAppliancesFiltered = [];
    }
    post(body) {
        return this.http.post(this.urlBaseAppliances, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Appliance: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlBaseAppliances).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.baseAppliances = res;
            console.log('Base appliances: ', this.baseAppliances);
        }));
    }
    getOne(id) {
        let urlTemp = this.urlBaseAppliances + id + '/';
        return this.http.get(urlTemp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.baseAppliance = res;
            console.log('Base appliance: ', this.baseAppliance);
        }));
    }
    update(id, body) {
        let urlTemp = this.urlBaseAppliances + id + '/';
        return this.http.patch(urlTemp, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Appliance: ', res);
        }));
    }
    delete(id) {
        let urlTemp = this.urlBaseAppliances + id + '/';
        return this.http.delete(urlTemp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Appliance: ', res);
        }));
    }
    filter(field) {
        let urlTemp = this.urlBaseAppliances + '?' + field;
        return this.http.get(urlTemp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.baseAppliancesFiltered = res;
            console.log('Base appliances filtered: ', this.baseAppliancesFiltered);
        }));
    }
};
BaseAppliancesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BaseAppliancesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaseAppliancesService);



/***/ }),

/***/ "./src/app/shared/services/buildings/buildings.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/buildings/buildings.service.ts ***!
  \****************************************************************/
/*! exports provided: BuildingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsService", function() { return BuildingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let BuildingsService = class BuildingsService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlBuildings = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/buildings/';
        this.buildings = [];
        this.buildingsFiltered = [];
    }
    post(body) {
        return this.http.post(this.urlBuildings, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Building: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlBuildings).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.buildings = res;
            console.log('Buildings: ', this.buildings);
        }));
    }
    getOne(id) {
        let urlTemp = this.urlBuildings + id + '/';
        return this.http.get(urlTemp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.building = res;
            console.log('Building: ', this.building);
        }));
    }
    update(id, body) {
        let urlTemp = this.urlBuildings + id + '/';
        return this.http.patch(urlTemp, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Building: ', res);
        }));
    }
    delete(id) {
        let urlTemp = this.urlBuildings + id + '/';
        return this.http.delete(urlTemp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Building: ', res);
        }));
    }
    filter(field) {
        let urlTemp = this.urlBuildings + '?' + field;
        return this.http.get(urlTemp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.buildingsFiltered = res;
            console.log('Buildings filtered: ', this.buildingsFiltered);
        }));
    }
};
BuildingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BuildingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BuildingsService);



/***/ })

}]);
//# sourceMappingURL=core-appliances-appliances-module-es2015.js.map