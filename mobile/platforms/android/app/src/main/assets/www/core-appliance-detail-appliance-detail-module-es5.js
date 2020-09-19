function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-appliance-detail-appliance-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/appliance-detail/appliance-detail.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/appliance-detail/appliance-detail.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreApplianceDetailApplianceDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button \n        defaultHref=\"/core/appliances\"\n        routerLink=\"/core/appliances\"\n        routerDirection=\"back\"\n        text=\"\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Appliance Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \t<!-- <ion-img\n\t\t[src]=\"iconLamp\"\n\t\tstyle=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\"\n\t>\n\t</ion-img> -->\n\t\t<ion-img *ngIf=\"appliance.type == 'TV'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconLCD\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Lamp'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconLamp\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Light'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconLamp1\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Fridge'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconDryer\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'AC'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconAirCond\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Dishwasher'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconDishwasher\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Toaster'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconToaster\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Dryer'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconDryer\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Washing'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconDryer\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Microwave'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconMicrowave\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Air'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconAir\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Deep'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconDeep\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Blender'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconBlender\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Induction'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconInduction\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Iron'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconIron\"></ion-img>\n\t\t<ion-img *ngIf=\"appliance.type == 'Vacuum'\" style=\"max-width: 50%; margin-top: 5%; margin-left: auto; margin-right: auto\" [src]=\"iconVacuum\"></ion-img>\n\n  <ion-card mode=\"ios\">\n\t\t<ion-card-content>\n\t\t\t<ion-list class=\"ion-margin\">\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t\t<h2 class=\"ion-no-margin\">\n\t\t\t\t\t\t\t{{appliance.name}}\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<ion-text>\n\t\t\t\t\t\t\t<h3 style=\"font-size: 0.7rem; margin: 0;\">\n\t\t\t\t\t\t\t\tYear 2020\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t<h3 style=\"font-size: 0.7rem; margin: 0;\">\n\t\t\t\t\t\t\t\t12 Month Warranty\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<!-- <ion-toggle slot=\"end\" color=\"primary\" disabled></ion-toggle> -->\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card mode=\"ios\">\n\t\t<ion-card-header class=\"ion-text-center\">\n\t\t\t<ion-segment [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\">\n\t\t\t\t<ion-segment-button value=\"D\">\n\t\t\t\t  <ion-label>D</ion-label>\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"W\">\n\t\t\t\t  <ion-label>W</ion-label>\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"M\">\n\t\t\t\t\t<ion-label>M</ion-label>\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"Y\">\n\t\t\t\t\t<ion-label>Y</ion-label>\n\t\t\t\t</ion-segment-button>\n\t\t\t</ion-segment>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\t<div *ngIf=\"segment == 'D'\">\n\t\t\t\t<canvas #canvasDay></canvas>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"segment == 'W'\">\n\t\t\t\t<canvas #canvasWeek></canvas>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"segment == 'M'\">\n\t\t\t\t<canvas #canvasMonth></canvas>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"segment == 'Y'\">\n\t\t\t\t<canvas #canvasYear></canvas>\n\t\t\t</div>\n\t\t</ion-card-content>\n\t\t<ion-list mode=\"ios\">\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t<p class=\"text-bold\">Total usage</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-label slot=\"end\">\n\t\t\t\t\t<h3 class=\"ion-text-end text-bold\">3.3<span class=\"text-small\">kWh</span></h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t<p class=\"text-bold\">Total est. cost</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-label slot=\"end\">\n\t\t\t\t\t<h3 class=\"ion-text-end text-bold\">\n\t\t\t\t\t\t<span class=\"text-small\">~</span>\n\t\t\t\t\t\t0.4<span class=\"text-small\">sen</span>\n\t\t\t\t\t</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t<p class=\"text-bold\">Times on</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-label slot=\"end\">\n\t\t\t\t\t<h3 class=\"ion-text-end text-bold\">\n\t\t\t\t\t\t180<span class=\"text-small\">x</span>\n\t\t\t\t\t</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t<p class=\"text-bold\">Total time on</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-label slot=\"end\">\n\t\t\t\t\t<h3 class=\"ion-text-end text-bold\">\n\t\t\t\t\t\t3<span class=\"text-small\">h</span>\n\t\t\t\t\t\t37<span class=\"text-small\">m</span>\n\t\t\t\t\t</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</ion-card>\n\n\t<ion-card mode=\"ios\">\n\t\t<ion-card-header>\n\t\t\t<h5 class=\"ion-no-margin\" style=\"color: #000;\">\n\t\t\t\tStats\n\t\t\t</h5>\n\t\t</ion-card-header>\n\t\t<ion-list mode=\"ios\">\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t<p class=\"text-bold \">Est. cost/year</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-label slot=\"end\">\n\t\t\t\t\t<h3 class=\"ion-text-end text-bold\"><span class=\"text-small\">~RM</span>45</h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"none\">\n\t\t\t\t<ion-label slot=\"start\">\n\t\t\t\t\t<p class=\"text-bold\">Avg. % of usage</p>\n\t\t\t\t</ion-label>\n\t\t\t\t<ion-label slot=\"end\">\n\t\t\t\t\t<h3 class=\"ion-text-end text-bold\">0.4<span class=\"text-small\">%</span></h3>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/core/appliance-detail/appliance-detail-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/core/appliance-detail/appliance-detail-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ApplianceDetailPageRoutingModule */

  /***/
  function srcAppCoreApplianceDetailApplianceDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplianceDetailPageRoutingModule", function () {
      return ApplianceDetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _appliance_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./appliance-detail.page */
    "./src/app/core/appliance-detail/appliance-detail.page.ts");

    var routes = [{
      path: '',
      component: _appliance_detail_page__WEBPACK_IMPORTED_MODULE_3__["ApplianceDetailPage"]
    }];

    var ApplianceDetailPageRoutingModule = function ApplianceDetailPageRoutingModule() {
      _classCallCheck(this, ApplianceDetailPageRoutingModule);
    };

    ApplianceDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ApplianceDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/appliance-detail/appliance-detail.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/core/appliance-detail/appliance-detail.module.ts ***!
    \******************************************************************/

  /*! exports provided: ApplianceDetailPageModule */

  /***/
  function srcAppCoreApplianceDetailApplianceDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplianceDetailPageModule", function () {
      return ApplianceDetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _appliance_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./appliance-detail-routing.module */
    "./src/app/core/appliance-detail/appliance-detail-routing.module.ts");
    /* harmony import */


    var _appliance_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./appliance-detail.page */
    "./src/app/core/appliance-detail/appliance-detail.page.ts");

    var ApplianceDetailPageModule = function ApplianceDetailPageModule() {
      _classCallCheck(this, ApplianceDetailPageModule);
    };

    ApplianceDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _appliance_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplianceDetailPageRoutingModule"]],
      declarations: [_appliance_detail_page__WEBPACK_IMPORTED_MODULE_6__["ApplianceDetailPage"]]
    })], ApplianceDetailPageModule);
    /***/
  },

  /***/
  "./src/app/core/appliance-detail/appliance-detail.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/core/appliance-detail/appliance-detail.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreApplianceDetailApplianceDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXBwbGlhbmNlLWRldGFpbC9hcHBsaWFuY2UtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/core/appliance-detail/appliance-detail.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/appliance-detail/appliance-detail.page.ts ***!
    \****************************************************************/

  /*! exports provided: ApplianceDetailPage */

  /***/
  function srcAppCoreApplianceDetailApplianceDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplianceDetailPage", function () {
      return ApplianceDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_shared_services_appliances_appliances_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/appliances/appliances.service */
    "./src/app/shared/services/appliances/appliances.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_devices_devices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/devices/devices.service */
    "./src/app/shared/services/devices/devices.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    var ApplianceDetailPage = /*#__PURE__*/function () {
      function ApplianceDetailPage(applianceService, deviceService, router, activatedRoute) {
        var _this = this;

        _classCallCheck(this, ApplianceDetailPage);

        this.applianceService = applianceService;
        this.deviceService = deviceService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.applianceName = 'Lamp'; // Icon

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
        this.getData();
        this.activatedRoute.queryParams.subscribe(function (params) {
          if (params && params.special) {
            _this.appliance = JSON.parse(params.special); // console.log(this.appliance)
          }
        });
      }

      _createClass(ApplianceDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.segment = 'D';
          this.intervalCSV = setInterval(function () {
            _this2.getCSV();
          }, 3000);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.initChartDay();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.intervalCSV);
        }
      }, {
        key: "getData",
        value: function getData() {}
      }, {
        key: "navigatePage",
        value: function navigatePage(path) {
          var navigationPath = '/' + path;
          this.router.navigate([navigationPath]);
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          var _this3 = this;

          console.log(ev);

          if (this.segment == 'D') {
            setTimeout(function () {
              _this3.initChartDay();
            }, 1000);
          } else if (this.segment == 'W') {
            setTimeout(function () {
              _this3.initChartWeek();
            }, 1000);
          } else if (this.segment == 'M') {
            setTimeout(function () {
              _this3.initChartMonth();
            }, 1000);
          } else if (this.segment == 'Y') {
            setTimeout(function () {
              _this3.initChartYear();
            }, 1000);
          }
        }
      }, {
        key: "initChartDay",
        value: function initChartDay() {
          this.chartDay = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.canvasDay.nativeElement, {
            type: "line",
            data: {
              labels: [],
              datasets: [{
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
                data: [],
                spanGaps: false
              }]
            }
          });
        }
      }, {
        key: "initChartWeek",
        value: function initChartWeek() {
          this.chartWeek = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.canvasWeek.nativeElement, {
            type: "line",
            data: {
              labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              datasets: [{
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
              }]
            }
          });
        }
      }, {
        key: "initChartMonth",
        value: function initChartMonth() {
          this.chartMonth = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.canvasMonth.nativeElement, {
            type: "line",
            data: {
              labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
              datasets: [{
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
              }]
            }
          });
        }
      }, {
        key: "initChartYear",
        value: function initChartYear() {
          this.chartYear = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.canvasYear.nativeElement, {
            type: "line",
            data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [{
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
              }]
            }
          });
        }
      }, {
        key: "getCSV",
        value: function getCSV() {
          var _this4 = this;

          this.chartDay.data.labels = [];
          this.chartDay.data.datasets.data = [];
          this.deviceService.getValue().subscribe(function (res) {
            res.forEach(function (data) {
              if (_this4.appliance.type == 'Fridge' && data.label == 'Fridge') {
                var powerValue = Number(data.power) * 240 / 1000;
                var newTime = moment__WEBPACK_IMPORTED_MODULE_6__["unix"](data.time).format('h:mm:ss a');

                _this4.chartDay.data.labels.push(newTime);

                _this4.chartDay.data.datasets[0].data.push(powerValue);

                _this4.chartDay.update();
              } else if (_this4.appliance.type == 'AC' || data.label == 'AC') {
                console.log('tes');
                console.log(_this4.appliance.type);
                console.log(data.label);

                var _powerValue = Number(data.power) * 240 / 1000;

                var _newTime = moment__WEBPACK_IMPORTED_MODULE_6__["unix"](data.time).format('h:mm:ss a');

                _this4.chartDay.data.labels.push(_newTime);

                _this4.chartDay.data.datasets[0].data.push(_powerValue);

                _this4.chartDay.update();
              } else if (_this4.appliance.type == 'Dryer' && data.label == 'Dryer') {
                var _powerValue2 = Number(data.power) * 240 / 1000;

                var _newTime2 = moment__WEBPACK_IMPORTED_MODULE_6__["unix"](data.time).format('h:mm:ss a');

                _this4.chartDay.data.labels.push(_newTime2);

                _this4.chartDay.data.datasets[0].data.push(_powerValue2);

                _this4.chartDay.update();
              } else if (_this4.appliance.type == 'Washing' && data.label == 'Washing') {
                var _powerValue3 = Number(data.power) * 240 / 1000;

                var _newTime3 = moment__WEBPACK_IMPORTED_MODULE_6__["unix"](data.time).format('h:mm:ss a');

                _this4.chartDay.data.labels.push(_newTime3);

                _this4.chartDay.data.datasets[0].data.push(_powerValue3);

                _this4.chartDay.update();
              } else if (_this4.appliance.type == 'Microwave' && data.label == 'Microwave') {
                var _powerValue4 = Number(data.power) * 240 / 1000;

                var _newTime4 = moment__WEBPACK_IMPORTED_MODULE_6__["unix"](data.time).format('h:mm:ss a');

                _this4.chartDay.data.labels.push(_newTime4);

                _this4.chartDay.data.datasets[0].data.push(_powerValue4);

                _this4.chartDay.update();
              } else if (_this4.appliance.type == 'Air' && data.label == 'Air') {
                var _powerValue5 = Number(data.power) * 240 / 1000;

                var _newTime5 = moment__WEBPACK_IMPORTED_MODULE_6__["unix"](data.time).format('h:mm:ss a');

                _this4.chartDay.data.labels.push(_newTime5);

                _this4.chartDay.data.datasets[0].data.push(_powerValue5);

                _this4.chartDay.update();
              } else if (_this4.appliance.type == 'Deep' && data.label == 'Deep') {
                var _powerValue6 = Number(data.power) * 240 / 1000;

                var _newTime6 = moment__WEBPACK_IMPORTED_MODULE_6__["unix"](data.time).format('h:mm:ss a');

                _this4.chartDay.data.labels.push(_newTime6);

                _this4.chartDay.data.datasets[0].data.push(_powerValue6);

                _this4.chartDay.update();
              } else if (_this4.appliance.type == 'Blender' && data.label == 'Blender') {
                var _powerValue7 = Number(data.power) * 240 / 1000;

                var _newTime7 = moment__WEBPACK_IMPORTED_MODULE_6__["unix"](data.time).format('h:mm:ss a');

                _this4.chartDay.data.labels.push(_newTime7);

                _this4.chartDay.data.datasets[0].data.push(_powerValue7);

                _this4.chartDay.update();
              } else if (_this4.appliance.type == 'Induction' && data.label == 'Induction') {
                var _powerValue8 = Number(data.power) * 240 / 1000;

                var _newTime8 = moment__WEBPACK_IMPORTED_MODULE_6__["unix"](data.time).format('h:mm:ss a');

                _this4.chartDay.data.labels.push(_newTime8);

                _this4.chartDay.data.datasets[0].data.push(_powerValue8);

                _this4.chartDay.update();
              } else if (_this4.appliance.type == 'Iron' && data.label == 'Iron') {
                var _powerValue9 = Number(data.power) * 240 / 1000;

                var _newTime9 = moment__WEBPACK_IMPORTED_MODULE_6__["unix"](data.time).format('h:mm:ss a');

                _this4.chartDay.data.labels.push(_newTime9);

                _this4.chartDay.data.datasets[0].data.push(_powerValue9);

                _this4.chartDay.update();
              } else if (_this4.appliance.type == 'Vacuum' && data.label == 'Vacuum') {
                var _powerValue10 = Number(data.power) * 240 / 1000;

                var _newTime10 = moment__WEBPACK_IMPORTED_MODULE_6__["unix"](data.time).format('h:mm:ss a');

                _this4.chartDay.data.labels.push(_newTime10);

                _this4.chartDay.data.datasets[0].data.push(_powerValue10);

                _this4.chartDay.update();
              }
            });
          });
        }
      }]);

      return ApplianceDetailPage;
    }();

    ApplianceDetailPage.ctorParameters = function () {
      return [{
        type: src_app_shared_services_appliances_appliances_service__WEBPACK_IMPORTED_MODULE_3__["AppliancesService"]
      }, {
        type: src_app_shared_services_devices_devices_service__WEBPACK_IMPORTED_MODULE_5__["DevicesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasDay', {
      "static": false
    })], ApplianceDetailPage.prototype, "canvasDay", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasWeek', {
      "static": false
    })], ApplianceDetailPage.prototype, "canvasWeek", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasMonth', {
      "static": false
    })], ApplianceDetailPage.prototype, "canvasMonth", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasYear', {
      "static": false
    })], ApplianceDetailPage.prototype, "canvasYear", void 0);
    ApplianceDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-appliance-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./appliance-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/appliance-detail/appliance-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./appliance-detail.page.scss */
      "./src/app/core/appliance-detail/appliance-detail.page.scss"))["default"]]
    })], ApplianceDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=core-appliance-detail-appliance-detail-module-es5.js.map