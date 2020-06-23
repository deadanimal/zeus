(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-appliance-detail-appliance-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/appliance-detail/appliance-detail.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/appliance-detail/appliance-detail.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button \n        defaultHref=\"/core/appliances\"\n        routerLink=\"/core/appliances\"\n        routerDirection=\"back\"\n        text=\"\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Appliance detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img\n    [src]=\"iconLamp\"\n    style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\"\n  >\n  </ion-img>\n\n  <ion-card mode=\"ios\">\n\t\t<ion-card-content>\n\t\t\t<ion-list class=\"ion-margin\">\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t\t<h2 class=\"ion-no-margin\">\n\t\t\t\t\t\t\tPhilip Lamp\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<ion-text>\n\t\t\t\t\t\t\t<h3 style=\"font-size: 0.7rem; margin: 0;\">\n\t\t\t\t\t\t\t\tModel E27\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<h3 style=\"font-size: 0.7rem; margin: 0;\">\n\t\t\t\t\t\t\t\tYear 2020\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<h3 style=\"font-size: 0.7rem; margin: 0;\">\n\t\t\t\t\t\t\t\t12 Month Warranty\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-toggle slot=\"end\" color=\"primary\"></ion-toggle>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card mode=\"ios\">\n\t\t<ion-card-header class=\"ion-text-center\">\n\t\t\t<ion-segment [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\">\n\t\t\t\t<ion-segment-button value=\"D\">\n\t\t\t\t  <ion-label>D</ion-label>\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"W\">\n\t\t\t\t  <ion-label>W</ion-label>\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"M\">\n\t\t\t\t\t<ion-label>M</ion-label>\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"Y\">\n\t\t\t\t\t<ion-label>Y</ion-label>\n\t\t\t\t</ion-segment-button>\n\t\t\t</ion-segment>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\t<div *ngIf=\"segment == 'D'\">\n\t\t\t\t<canvas #canvasDay></canvas>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"segment == 'W'\">\n\t\t\t\t<canvas #canvasWeek></canvas>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"segment == 'M'\">\n\t\t\t\t<canvas #canvasMonth></canvas>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"segment == 'Y'\">\n\t\t\t\t<canvas #canvasYear></canvas>\n\t\t\t</div>\n\t\t</ion-card-content>\n\t\t<ion-list mode=\"ios\">\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t<p class=\"text-bold\">Total usage</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-label slot=\"end\">\n\t\t\t\t\t<h3 class=\"ion-text-end text-bold\">3.3<span class=\"text-small\">kWh</span></h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t<p class=\"text-bold\">Total est. cost</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-label slot=\"end\">\n\t\t\t\t\t<h3 class=\"ion-text-end text-bold\">\n\t\t\t\t\t\t<span class=\"text-small\">~</span>\n\t\t\t\t\t\t0.4<span class=\"text-small\">sen</span>\n\t\t\t\t\t</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t<p class=\"text-bold\">Times on</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-label slot=\"end\">\n\t\t\t\t\t<h3 class=\"ion-text-end text-bold\">\n\t\t\t\t\t\t180<span class=\"text-small\">x</span>\n\t\t\t\t\t</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t<p class=\"text-bold\">Total time on</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-label slot=\"end\">\n\t\t\t\t\t<h3 class=\"ion-text-end text-bold\">\n\t\t\t\t\t\t3<span class=\"text-small\">h</span>\n\t\t\t\t\t\t37<span class=\"text-small\">m</span>\n\t\t\t\t\t</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</ion-card>\n\n\t<ion-card mode=\"ios\">\n\t\t<ion-card-header>\n\t\t\t<h5 class=\"ion-no-margin\" style=\"color: #000;\">\n\t\t\t\tStats\n\t\t\t</h5>\n\t\t</ion-card-header>\n\t\t<ion-list mode=\"ios\">\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t<p class=\"text-bold \">Est. cost/year</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-label slot=\"end\">\n\t\t\t\t\t<h3 class=\"ion-text-end text-bold\"><span class=\"text-small\">~RM</span>45</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t<p class=\"text-bold\">Avg. % of usage</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-label slot=\"end\">\n\t\t\t\t\t<h3 class=\"ion-text-end text-bold\">0.4<span class=\"text-small\">%</span></h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/core/appliance-detail/appliance-detail-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/core/appliance-detail/appliance-detail-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ApplianceDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplianceDetailPageRoutingModule", function() { return ApplianceDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _appliance_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appliance-detail.page */ "./src/app/core/appliance-detail/appliance-detail.page.ts");




const routes = [
    {
        path: '',
        component: _appliance_detail_page__WEBPACK_IMPORTED_MODULE_3__["ApplianceDetailPage"]
    }
];
let ApplianceDetailPageRoutingModule = class ApplianceDetailPageRoutingModule {
};
ApplianceDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ApplianceDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/core/appliance-detail/appliance-detail.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/appliance-detail/appliance-detail.module.ts ***!
  \******************************************************************/
/*! exports provided: ApplianceDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplianceDetailPageModule", function() { return ApplianceDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _appliance_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appliance-detail-routing.module */ "./src/app/core/appliance-detail/appliance-detail-routing.module.ts");
/* harmony import */ var _appliance_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appliance-detail.page */ "./src/app/core/appliance-detail/appliance-detail.page.ts");







let ApplianceDetailPageModule = class ApplianceDetailPageModule {
};
ApplianceDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appliance_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplianceDetailPageRoutingModule"]
        ],
        declarations: [_appliance_detail_page__WEBPACK_IMPORTED_MODULE_6__["ApplianceDetailPage"]]
    })
], ApplianceDetailPageModule);



/***/ }),

/***/ "./src/app/core/appliance-detail/appliance-detail.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/core/appliance-detail/appliance-detail.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwbGlhbmNlLWRldGFpbC9hcHBsaWFuY2UtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/appliance-detail/appliance-detail.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/appliance-detail/appliance-detail.page.ts ***!
  \****************************************************************/
/*! exports provided: ApplianceDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplianceDetailPage", function() { return ApplianceDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_services_appliances_appliances_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/appliances/appliances.service */ "./src/app/shared/services/appliances/appliances.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let ApplianceDetailPage = class ApplianceDetailPage {
    constructor(applianceService, router) {
        this.applianceService = applianceService;
        this.router = router;
        this.applianceName = 'Lamp';
        // Icon
        this.iconLamp = 'assets/img/appliance/lamp.svg';
        this.getData();
    }
    ngOnInit() {
        this.segment = 'D';
    }
    ionViewDidEnter() {
        this.initChartDay();
    }
    getData() {
    }
    navigatePage(path) {
        let navigationPath = '/' + path;
        this.router.navigate([navigationPath]);
    }
    segmentChanged(ev) {
        console.log(ev);
        if (this.segment == 'D') {
            setTimeout(() => {
                this.initChartDay();
            }, 1000);
        }
        else if (this.segment == 'W') {
            setTimeout(() => {
                this.initChartWeek();
            }, 1000);
        }
        else if (this.segment == 'M') {
            setTimeout(() => {
                this.initChartMonth();
            }, 1000);
        }
        else if (this.segment == 'Y') {
            setTimeout(() => {
                this.initChartYear();
            }, 1000);
        }
    }
    initChartDay() {
        this.chartDay = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.canvasDay.nativeElement, {
            type: "line",
            data: {
                labels: ["10.00am", "11.00am", "12.00pm", "1.00pm", "2.00pm", "3.00pm", "4.00pm"],
                datasets: [
                    {
                        label: "",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false
                    }
                ]
            }
        });
    }
    initChartWeek() {
        this.chartWeek = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.canvasWeek.nativeElement, {
            type: "line",
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [
                    {
                        label: "",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false
                    }
                ]
            }
        });
    }
    initChartMonth() {
        this.chartMonth = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.canvasMonth.nativeElement, {
            type: "line",
            data: {
                labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
                datasets: [
                    {
                        label: "",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56],
                        spanGaps: false
                    }
                ]
            }
        });
    }
    initChartYear() {
        this.chartYear = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.canvasYear.nativeElement, {
            type: "line",
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false
                    }
                ]
            }
        });
    }
};
ApplianceDetailPage.ctorParameters = () => [
    { type: src_app_shared_services_appliances_appliances_service__WEBPACK_IMPORTED_MODULE_3__["AppliancesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasDay', { static: false })
], ApplianceDetailPage.prototype, "canvasDay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasWeek', { static: false })
], ApplianceDetailPage.prototype, "canvasWeek", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasMonth', { static: false })
], ApplianceDetailPage.prototype, "canvasMonth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasYear', { static: false })
], ApplianceDetailPage.prototype, "canvasYear", void 0);
ApplianceDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appliance-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./appliance-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/appliance-detail/appliance-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./appliance-detail.page.scss */ "./src/app/core/appliance-detail/appliance-detail.page.scss")).default]
    })
], ApplianceDetailPage);



/***/ })

}]);
//# sourceMappingURL=core-appliance-detail-appliance-detail-module-es2015.js.map