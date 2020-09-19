(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <canvas #canvasPower></canvas>\n\n  <ion-list\n    mode=\"ios\"\n    class=\"ion-no-margin list-core\"\n  >\n    <ion-list-header mode=\"ios\">\n      <h3>News Feed</h3>\n    </ion-list-header>\n\n    <div [hidden]=\"!isFeedEmpty\">\n      <img [src]=\"iconError\" class=\"error-img\">\n      <p class=\"error-text\">No feeds loaded</p>\n    </div>\n    \n    <div [hidden]=\"isFeedEmpty\">\n      <ion-item lines=\"none\" *ngFor=\"let feed of feeds\">\n        <ion-avatar slot=\"start\">\n          <img *ngIf=\"feed.appliance == 'TV'\" [src]=\"iconLCD\">\n          <img *ngIf=\"feed.appliance == 'Lamp'\" [src]=\"iconLamp\">\n          <img *ngIf=\"feed.appliance == 'Light'\" [src]=\"iconLamp1\">\n          <img *ngIf=\"feed.appliance == 'Fridge'\" [src]=\"iconDryer\">\n          <img *ngIf=\"feed.appliance == 'AC'\" [src]=\"iconAirCond\">\n          <img *ngIf=\"feed.appliance == 'AC NI'\" [src]=\"iconAirCond\">\n          <img *ngIf=\"feed.appliance == 'Dishwasher'\" [src]=\"iconDishwasher\">\n          <img *ngIf=\"feed.appliance == 'Toaster'\" [src]=\"iconToaster\">\n          <img *ngIf=\"feed.appliance == 'Dryer'\" [src]=\"iconDryer\">\n          <img *ngIf=\"feed.appliance == 'Washing'\" [src]=\"iconDryer\">\n          <img *ngIf=\"feed.appliance == 'Microwave'\" [src]=\"iconMicrowave\">\n          <img *ngIf=\"feed.appliance == 'Air'\" [src]=\"iconAir\">\n          <img *ngIf=\"feed.appliance == 'Deep'\" [src]=\"iconDeep\">\n          <img *ngIf=\"feed.appliance == 'Blender'\" [src]=\"iconBlender\">\n          <img *ngIf=\"feed.appliance == 'Heater'\" [src]=\"iconBlender\">\n          <img *ngIf=\"feed.appliance == 'Induction'\" [src]=\"iconInduction\">\n          <img *ngIf=\"feed.appliance == 'Iron'\" [src]=\"iconIron\">\n          <img *ngIf=\"feed.appliance == 'Vaccuum'\" [src]=\"iconVacuum\">\n          <img *ngIf=\"feed.appliance == 'Water'\" [src]=\"iconWater\">\n          <img *ngIf=\"feed.appliance == 'Pressure Cooker'\" [src]=\"iconCooker\">\n          <img *ngIf=\"feed.appliance == 'Rice Cooker'\" [src]=\"iconCooker\">\n          <img *ngIf=\"feed.appliance == 'Pressure'\" [src]=\"iconCooker\">\n          <img *ngIf=\"feed.appliance == 'Oven'\" [src]=\"iconMicrowave\">\n          <img *ngIf=\"feed.appliance == 'Steamer'\" [src]=\"iconSteamer\">\n          <img *ngIf=\"feed.appliance == 'Kettle'\" [src]=\"iconKettle\">\n        </ion-avatar>\n        <ion-label class=\"ion-text-wrap\">\n          <h2>{{feed.appliance}}</h2>\n        </ion-label>\n        <ion-label slot=\"end\" class=\"ion-text-wrap ion-text-right\">\n          <ion-badge *ngIf=\"feed.at_state == 'ON'\" color=\"success\">ON</ion-badge>\n          <ion-badge *ngIf=\"feed.at_state == 'OF'\" color=\"light\">OFF</ion-badge>\n          <p>{{feed.created_at}}</p>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/core/dashboard/dashboard-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/core/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/core/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/core/dashboard/dashboard.module.ts":
/*!****************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.module.ts ***!
  \****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/core/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/core/dashboard/dashboard.page.ts");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/core/dashboard/dashboard.page.scss":
/*!****************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-img {\n  display: grid;\n  max-width: 7rem !important;\n  margin-top: 3rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.error-text {\n  color: #9d9fa6;\n  display: grid;\n  font-size: 0.9rem;\n  margin-left: 4rem;\n  margin-right: 4rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Ta3Vuay9za3Vuay0wMDItemV1cy9tb2JpbGUvc3JjL2FwcC9jb3JlL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9jb3JlL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLWltZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXgtd2lkdGg6IDdyZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbiAgXG4uZXJyb3ItdGV4dCB7XG4gICAgY29sb3I6ICM5ZDlmYTY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIi5lcnJvci1pbWcge1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXgtd2lkdGg6IDdyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmVycm9yLXRleHQge1xuICBjb2xvcjogIzlkOWZhNjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbi1sZWZ0OiA0cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/dashboard/dashboard.page.ts":
/*!**************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.page.ts ***!
  \**************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_services_devices_devices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/devices/devices.service */ "./src/app/shared/services/devices/devices.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_services_appliances_appliances_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/appliances/appliances.service */ "./src/app/shared/services/appliances/appliances.service.ts");







let DashboardPage = class DashboardPage {
    constructor(deviceService, applianceService, router) {
        this.deviceService = deviceService;
        this.applianceService = applianceService;
        this.router = router;
        // Data
        this.activities = [];
        this.activitiesLengthOld = 0;
        this.activitiesLengthNew = 0;
        this.notiActivities = [];
        this.dataKiri = 0;
        this.dataKanan = 0;
        this.feeds = [];
        // Checker
        this.isFeedEmpty = true;
        // Length
        this.notifyMe = [];
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
        this.segment = 'P';
        this.intervalFeed = setInterval(() => {
            this.getFeeds();
            this.getCSV();
        }, 2000);
    }
    getFeeds() {
        this.applianceService.getActivity().subscribe((res) => {
            // console.log()
            this.activities = res;
            if (this.activitiesLengthNew == 0) {
                this.activitiesLengthNew = this.activities.length;
            }
            else {
                this.activitiesLengthOld = this.activitiesLengthNew;
                this.activitiesLengthNew = this.activities.length;
            }
            console.log('old', this.activitiesLengthOld);
            console.log('new', this.activitiesLengthNew);
            if (this.activitiesLengthNew != this.activitiesLengthOld) {
                if (this.feeds.length < 5) {
                    console.log('Feed < 5');
                    this.applianceService.appliances.forEach((appliance) => {
                        if (appliance.id == this.activities[this.activitiesLengthNew - 1].appliance) {
                            let applianceName = appliance.name;
                            let timestamp = moment__WEBPACK_IMPORTED_MODULE_5__(this.activities[this.activitiesLengthNew - 1].created_at).format('hh:mm:ss A');
                            this.activities[this.activitiesLengthNew - 1].appliance = applianceName;
                            this.activities[this.activitiesLengthNew - 1].created_at = timestamp;
                            this.feeds.push(this.activities[this.activitiesLengthNew - 1]);
                            console.log('gee', this.activities[this.activitiesLengthNew - 1]);
                            console.log('Jumpa if');
                            this.isFeedEmpty = false;
                        }
                    });
                }
                else {
                    this.applianceService.appliances.forEach((appliance) => {
                        if (appliance.id == this.activities[this.activitiesLengthNew - 1].appliance) {
                            console.log('Jumpa else');
                            let applianceName = appliance.name;
                            let timestamp = moment__WEBPACK_IMPORTED_MODULE_5__(this.activities[this.activitiesLengthNew - 1].created_at).format('hh:mm:ss A');
                            this.activities[this.activitiesLengthNew - 1].appliance = applianceName;
                            this.activities[this.activitiesLengthNew - 1].created_at = timestamp;
                            this.feeds.push(this.activities[this.activitiesLengthNew - 1]);
                            this.feeds.shift();
                        }
                    });
                }
            }
        });
    }
    getCSV() {
        this.deviceService.getCSV().subscribe((res) => {
            console.log('l', res.body.length);
            if (res.body.length < 100) {
                let newData = JSON.parse(res.body);
                if (newData.device == 'bolt-003') {
                    let label = moment__WEBPACK_IMPORTED_MODULE_5__["unix"](newData.time).format('h:mm:ss a');
                    let power = newData.power;
                    console.log('update', label, power);
                    this.chartPower.data.labels.push(label);
                    this.chartPower.data.datasets[0].data.push(power);
                    this.chartPower.update();
                }
            }
            // console.log()
        });
    }
    getData() {
        this.applianceService.get().subscribe();
    }
    view() {
        let path = '/appliance-detail';
        this.router.navigate([path]);
    }
    ionViewWillEnter() {
        this.initChartPower();
        this.initChartAppliance();
    }
    ionViewWillLeave() {
        clearInterval(this.intervalCSV);
        clearInterval(this.intervalFeed);
        console.log('destroy');
    }
    segmentChanged(ev) {
        console.log('Segment: ', this.segment);
        console.log('Segment changed: ', ev);
        if (this.segment == 'A') {
            setTimeout(() => {
                this.initChartAppliance();
            }, 1000);
        }
        if (this.segment == 'P') {
            setTimeout(() => {
                this.initChartPower();
            }, 1000);
        }
    }
    initChartAppliance() {
        this.chartAppliance = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.canvasAppliance.nativeElement, {
            type: 'pie',
            data: {
                datasets: [{
                        data: [
                            55,
                            120,
                            155,
                            160,
                            95
                        ],
                        backgroundColor: [
                            'red',
                            'orange',
                            'yellow',
                            'green',
                            'blue',
                        ],
                        label: 'Dataset 1'
                    }],
                labels: [
                    'Lamp',
                    'Solar',
                    'Fridge',
                    'Microwave',
                    'Fan'
                ]
            },
            options: {
                responsive: true
            }
        });
    }
    initChartPower() {
        this.chartPower = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.canvasPower.nativeElement, {
            type: "line",
            data: {
                labels: [],
                datasets: [
                    {
                        label: "kWh",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,0.4)",
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
                        data: [],
                        spanGaps: false
                    }
                ]
            }
        });
    }
    addData(chart, label, data) {
    }
    getNoti() {
        this.notiActivities = [];
        this.deviceService.getValue().subscribe((res) => {
            res = res.sort((n1, n2) => n1 - n2);
            res.forEach((data) => {
                data.time = moment__WEBPACK_IMPORTED_MODULE_5__["unix"](data.time).format('h:mm:ss a');
                this.notiActivities.push(data);
            });
        }, () => { }, () => { });
    }
};
DashboardPage.ctorParameters = () => [
    { type: src_app_shared_services_devices_devices_service__WEBPACK_IMPORTED_MODULE_4__["DevicesService"] },
    { type: src_app_shared_services_appliances_appliances_service__WEBPACK_IMPORTED_MODULE_6__["AppliancesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasPower', { static: false })
], DashboardPage.prototype, "canvasPower", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasAppliance', { static: false })
], DashboardPage.prototype, "canvasAppliance", void 0);
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/core/dashboard/dashboard.page.scss")).default]
    })
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=core-dashboard-dashboard-module-es2015.js.map