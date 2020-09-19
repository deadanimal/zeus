(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-bills-bills-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/bills/bills.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/bills/bills.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>Bills</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <div class=\"wave-container\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#73b7ff\" fill-opacity=\"1\" d=\"M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,186.7C672,149,768,107,864,80C960,53,1056,43,1152,64C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z\"></path></svg>\n  </div>\n  <div class=\"ion-margin-start ion-margin-bottom welcome-container\">\n    <p class=\"ion-no-margin ion-margin-top text-white\"></p>\n    <h4 class=\"ion-no-margin text-white\"></h4>\n  </div>\n\n  <ion-card mode=\"ios\" class=\"card-core\" class=\"ion-no-margin ion-margin-start ion-margin-end summary-container\">\n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-label>\n          <p class=\"ion-text-bold\">Due on 19/05/2020</p>\n          <h2 class=\"ion-text-bold\">RM182.77</h2>\n        </ion-label>\n        <ion-button class=\"btn-core\" color=\"primary\" (click)=\"navigatePage('/bill-payment')\">Pay Bill</ion-button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list\n    mode=\"ios\"\n    class=\"ion-no-margin list-core\"\n  >\n    <ion-list-header mode=\"ios\">\n      <h3>History</h3>\n    </ion-list-header>\n\n    <!-- <div [hidden]=\"!isListEmpty\">\n      <img [src]=\"iconError\" class=\"error-img\">\n      <p class=\"error-text\">No bills founded</p>\n    </div> -->\n    \n    <div>\n      <ion-item lines=\"none\" detail (click)=\"navigatePage('/bill-detail')\">\n        <ion-icon name=\"receipt-outline\" color=\"primary\" slot=\"start\"></ion-icon>\n        <ion-label>\n          <h3>February 2020</h3>\n          <p>Paid</p>\n        </ion-label>\n        <ion-label slot=\"end\" class=\"ion-text-wrap ion-text-right\">\n          <h3>RM186.75</h3>\n          <p>11/03/2020</p>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-card.extras {\n  display: relative;\n  width: 100%;\n}\n\n.wave-container {\n  position: relative;\n  color: #FFF;\n  overflow: hidden;\n}\n\n.wave-container > svg {\n  display: block;\n  height: 200px;\n}\n\n@-webkit-keyframes animateWave {\n  0% {\n    transform: scale(1, 0);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\n@keyframes animateWave {\n  0% {\n    transform: scale(1, 0);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\n.wave-container > svg {\n  display: block;\n  transform-origin: bottom;\n  -webkit-animation: animateWave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;\n          animation: animateWave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;\n}\n\n.welcome-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.welcome-text {\n  margin: 7rem 1.25rem 2.5rem 1.25rem;\n}\n\n.text-white {\n  color: #fff !important;\n}\n\n.summary-container {\n  margin-top: -15vh;\n}\n\n.chart-container {\n  background: #fff;\n  height: 40vh;\n  padding-top: 10px;\n}\n\n.error-img {\n  display: grid;\n  max-width: 7rem !important;\n  margin-top: 3rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.error-text {\n  color: #9d9fa6;\n  display: grid;\n  font-size: 0.9rem;\n  margin-left: 4rem;\n  margin-right: 4rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Ta3Vuay9za3Vuay0wMDItemV1cy9tb2JpbGUvc3JjL2FwcC9jb3JlL2JpbGxzL2JpbGxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29yZS9iaWxscy9iaWxscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDRSxzQkFBQTtFQ0NKO0VEQ0U7SUFDRSxzQkFBQTtFQ0NKO0FBQ0Y7O0FEUEE7RUFDSTtJQUNFLHNCQUFBO0VDQ0o7RURDRTtJQUNFLHNCQUFBO0VDQ0o7QUFDRjs7QURDQTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtFQUNBLDZFQUFBO1VBQUEscUVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNDSjs7QURFQTtFQUNJLG1DQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYmlsbHMvYmlsbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQuZXh0cmFzIHtcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLndhdmUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gYmFja2dyb3VuZDogIzA5RjtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndhdmUtY29udGFpbmVyID4gc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVXYXZlIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLDEpO1xuICAgIH1cbn1cbi53YXZlLWNvbnRhaW5lciA+IHN2ZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgIGFuaW1hdGlvbjogYW5pbWF0ZVdhdmUgMTAwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSBmb3J3YXJkcztcbn1cblxuLndlbGNvbWUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG59XG5cbi53ZWxjb21lLXRleHQge1xuICAgIG1hcmdpbjogN3JlbSAxLjI1cmVtIDIuNXJlbSAxLjI1cmVtO1xufVxuXG4udGV4dC13aGl0ZSB7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLnN1bW1hcnktY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAtMTV2aDtcbn1cblxuLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5lcnJvci1pbWcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWF4LXdpZHRoOiA3cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4gIFxuLmVycm9yLXRleHQge1xuICAgIGNvbG9yOiAjOWQ5ZmE2O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCJpb24tY2FyZC5leHRyYXMge1xuICBkaXNwbGF5OiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53YXZlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNGRkY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53YXZlLWNvbnRhaW5lciA+IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVXYXZlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgfVxufVxuLndhdmUtY29udGFpbmVyID4gc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlV2F2ZSAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIGZvcndhcmRzO1xufVxuXG4ud2VsY29tZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLndlbGNvbWUtdGV4dCB7XG4gIG1hcmdpbjogN3JlbSAxLjI1cmVtIDIuNXJlbSAxLjI1cmVtO1xufVxuXG4udGV4dC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5zdW1tYXJ5LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IC0xNXZoO1xufVxuXG4uY2hhcnQtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiA0MHZoO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmVycm9yLWltZyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1heC13aWR0aDogN3JlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIGNvbG9yOiAjOWQ5ZmE2O1xuICBkaXNwbGF5OiBncmlkO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XG4gIG1hcmdpbi1yaWdodDogNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

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
        this.bills = [];
        this.billsFiltered = [];
    }
    post(body) {
        return this.http.post(this.urlBills, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Bill: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlBills).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.bills = res;
            console.log('Bills: ', this.bills);
        }));
    }
    getOne(id) {
        let urlTemp = this.urlBills + id + '/';
        return this.http.get(urlTemp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.bill = res;
            console.log('Bill: ', this.bill);
        }));
    }
    update(id, body) {
        let urlTemp = this.urlBills + id + '/';
        return this.http.patch(urlTemp, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.bill = res;
            console.log('Bill: ', this.bill);
        }));
    }
    delete(id) {
        return this.http.delete(this.urlBills + id + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Bill: ', res);
        }));
    }
    filter(field) {
        let urlTemp = this.urlBills + '?' + field;
        return this.http.get(urlTemp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.billsFiltered = res;
            console.log('Bills filtered: ', this.billsFiltered);
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