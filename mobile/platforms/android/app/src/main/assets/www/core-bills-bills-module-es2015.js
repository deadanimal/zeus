(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-bills-bills-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/bills/bills.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/bills/bills.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>Bills</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"wave-container\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#5e72e4\" fill-opacity=\"1\" d=\"M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,186.7C672,149,768,107,864,80C960,53,1056,43,1152,64C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z\"></path></svg>\n  </div>\n  <div class=\"ion-margin-start ion-margin-bottom welcome-container\">\n    <p class=\"ion-no-margin ion-margin-top text-white\"></p>\n    <h4 class=\"ion-no-margin text-white\"></h4>\n  </div>\n\n  <ion-card mode=\"ios\" class=\"card-core\" class=\"ion-no-margin ion-margin-start ion-margin-end summary-container\">\n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-label>\n          <p class=\"ion-text-bold\">Due on 19/05/2020</p>\n          <h2 class=\"ion-text-bold\">RM182.77</h2>\n        </ion-label>\n        <ion-button class=\"btn-core\" color=\"primary\" (click)=\"navigatePage('/bill-payment')\">Pay Bill</ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list\n    mode=\"ios\"\n    class=\"ion-no-margin list-core\"\n  >\n    <ion-list-header mode=\"ios\">\n      <h3>History</h3>\n    </ion-list-header>\n\n    <!-- <div [hidden]=\"!isListEmpty\">\n      <img [src]=\"iconError\" class=\"error-img\">\n      <p class=\"error-text\">No bills founded</p>\n    </div> -->\n    \n    <div>\n      <ion-item lines=\"none\" detail (click)=\"navigatePage('/bill-detail')\">\n        <ion-icon name=\"receipt-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h3>February 2020</h3>\n          <p>Paid</p>\n        </ion-label>\n        <ion-label slot=\"end\" class=\"ion-text-wrap ion-text-right\">\n          <h3>RM186.75</h3>\n          <p>11/03/2020</p>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/core/bills/bills-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/core/bills/bills-routing.module.ts ***!
  \****************************************************/
/*! exports provided: BillsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsPageRoutingModule", function() { return BillsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bills_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bills.page */ "./src/app/core/bills/bills.page.ts");




const routes = [
    {
        path: '',
        component: _bills_page__WEBPACK_IMPORTED_MODULE_3__["BillsPage"]
    }
];
let BillsPageRoutingModule = class BillsPageRoutingModule {
};
BillsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BillsPageRoutingModule);



/***/ }),

/***/ "./src/app/core/bills/bills.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/bills/bills.module.ts ***!
  \********************************************/
/*! exports provided: BillsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsPageModule", function() { return BillsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bills_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bills-routing.module */ "./src/app/core/bills/bills-routing.module.ts");
/* harmony import */ var _bills_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bills.page */ "./src/app/core/bills/bills.page.ts");







let BillsPageModule = class BillsPageModule {
};
BillsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bills_routing_module__WEBPACK_IMPORTED_MODULE_5__["BillsPageRoutingModule"]
        ],
        declarations: [_bills_page__WEBPACK_IMPORTED_MODULE_6__["BillsPage"]]
    })
], BillsPageModule);



/***/ }),

/***/ "./src/app/core/bills/bills.page.scss":
/*!********************************************!*\
  !*** ./src/app/core/bills/bills.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card.extras {\n  display: relative;\n  width: 100%;\n}\n\n.wave-container {\n  position: relative;\n  color: #FFF;\n  overflow: hidden;\n}\n\n.wave-container > svg {\n  display: block;\n  height: 200px;\n}\n\n@-webkit-keyframes animateWave {\n  0% {\n    transform: scale(1, 0);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\n@keyframes animateWave {\n  0% {\n    transform: scale(1, 0);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\n.wave-container > svg {\n  display: block;\n  transform-origin: bottom;\n  -webkit-animation: animateWave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;\n          animation: animateWave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;\n}\n\n.welcome-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.welcome-text {\n  margin: 7rem 1.25rem 2.5rem 1.25rem;\n}\n\n.text-white {\n  color: #fff !important;\n}\n\n.summary-container {\n  margin-top: -15vh;\n}\n\n.chart-container {\n  background: #fff;\n  height: 40vh;\n  padding-top: 10px;\n}\n\n.error-img {\n  display: grid;\n  max-width: 7rem !important;\n  margin-top: 3rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.error-text {\n  color: #9d9fa6;\n  display: grid;\n  font-size: 0.9rem;\n  margin-left: 4rem;\n  margin-right: 4rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Ta3Vuay9za3Vuay0wMDItemV1cy96ZXVzLW1vYmlsZS9zcmMvYXBwL2NvcmUvYmlsbHMvYmlsbHMucGFnZS5zY3NzIiwic3JjL2FwcC9jb3JlL2JpbGxzL2JpbGxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNFLHNCQUFBO0VDQ0o7RURDRTtJQUNFLHNCQUFBO0VDQ0o7QUFDRjs7QURQQTtFQUNJO0lBQ0Usc0JBQUE7RUNDSjtFRENFO0lBQ0Usc0JBQUE7RUNDSjtBQUNGOztBRENBO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0EsNkVBQUE7VUFBQSxxRUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0NKOztBREVBO0VBQ0ksbUNBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9iaWxscy9iaWxscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC5leHRyYXMge1xuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ud2F2ZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMDlGO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud2F2ZS1jb250YWluZXIgPiBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZVdhdmUge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgfVxufVxuLndhdmUtY29udGFpbmVyID4gc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgYW5pbWF0aW9uOiBhbmltYXRlV2F2ZSAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIGZvcndhcmRzO1xufVxuXG4ud2VsY29tZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLndlbGNvbWUtdGV4dCB7XG4gICAgbWFyZ2luOiA3cmVtIDEuMjVyZW0gMi41cmVtIDEuMjVyZW07XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uc3VtbWFyeS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IC0xNXZoO1xufVxuXG4uY2hhcnQtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGhlaWdodDogNDB2aDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmVycm9yLWltZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXgtd2lkdGg6IDdyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiAgXG4uZXJyb3ItdGV4dCB7XG4gICAgY29sb3I6ICM5ZDlmYTY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsImlvbi1jYXJkLmV4dHJhcyB7XG4gIGRpc3BsYXk6IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndhdmUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI0ZGRjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndhdmUtY29udGFpbmVyID4gc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZVdhdmUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICB9XG59XG4ud2F2ZS1jb250YWluZXIgPiBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICBhbmltYXRpb246IGFuaW1hdGVXYXZlIDEwMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgZm9yd2FyZHM7XG59XG5cbi53ZWxjb21lLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ud2VsY29tZS10ZXh0IHtcbiAgbWFyZ2luOiA3cmVtIDEuMjVyZW0gMi41cmVtIDEuMjVyZW07XG59XG5cbi50ZXh0LXdoaXRlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLnN1bW1hcnktY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogLTE1dmg7XG59XG5cbi5jaGFydC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDQwdmg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uZXJyb3ItaW1nIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWF4LXdpZHRoOiA3cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6ICM5ZDlmYTY7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/core/bills/bills.page.ts":
/*!******************************************!*\
  !*** ./src/app/core/bills/bills.page.ts ***!
  \******************************************/
/*! exports provided: BillsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsPage", function() { return BillsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_bills_bills_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/bills/bills.service */ "./src/app/shared/services/bills/bills.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let BillsPage = class BillsPage {
    constructor(billService, router) {
        this.billService = billService;
        this.router = router;
        // Data
        this.bills = [];
        // Icon
        this.iconError = 'assets/img/default/404-error.svg';
        // Checker
        this.isListEmpty = true;
    }
    ngOnInit() {
    }
    getData() {
    }
    navigatePage(path) {
        this.router.navigate([path]);
    }
};
BillsPage.ctorParameters = () => [
    { type: src_app_shared_services_bills_bills_service__WEBPACK_IMPORTED_MODULE_2__["BillsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
BillsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bills',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bills.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/bills/bills.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bills.page.scss */ "./src/app/core/bills/bills.page.scss")).default]
    })
], BillsPage);



/***/ }),

/***/ "./src/app/shared/services/bills/bills.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/bills/bills.service.ts ***!
  \********************************************************/
/*! exports provided: BillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsService", function() { return BillsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let BillsService = class BillsService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlBills = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/bills/';
        // Data
        this.bills = [];
    }
    post(body) {
        return this.http.post(this.urlBills, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Bill: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlBills).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Bills: ', res);
            this.bills = res;
        }));
    }
    getOne(id) {
        let urlID = this.urlBills + id + '/';
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Bill: ', res);
            this.bill = res;
        }));
    }
    update(body) {
        return this.http.patch(this.urlBills, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Bill: ', res);
        }));
    }
    delete(id) {
        return this.http.delete(this.urlBills + id + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Bill: ', res);
        }));
    }
};
BillsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BillsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BillsService);



/***/ })

}]);
//# sourceMappingURL=core-bills-bills-module-es2015.js.map