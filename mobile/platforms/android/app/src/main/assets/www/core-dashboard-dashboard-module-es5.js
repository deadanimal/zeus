function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\" mode=\"ios\">\n    <ion-segment-button value=\"A\">\n      <ion-label>Appliance</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"P\">\n      <ion-label>Power</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div *ngIf=\"segment == 'A'\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <canvas #canvasAppliance></canvas>\n        </ion-col>\n\n        <ion-col>\n          ssss\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  \n  <div *ngIf=\"segment == 'P'\">\n    <canvas #canvasPower></canvas>\n  </div>\n\n  <ion-list\n    mode=\"ios\"\n    class=\"ion-no-margin list-core\"\n  >\n    <ion-list-header mode=\"ios\">\n      <h3>News Feed</h3>\n    </ion-list-header>\n\n    <div [hidden]=\"!isFeedEmpty\">\n      <img [src]=\"iconError\" class=\"error-img\">\n      <p class=\"error-text\">No feeds loaded</p>\n    </div>\n    \n    <div [hidden]=\"isFeedEmpty\">\n      <ion-item lines=\"none\" *ngFor=\"let activity of activities\">\n        <ion-avatar slot=\"start\">\n          <img *ngIf=\"activity.appliance == 'TV'\" [src]=\"iconLCD\">\n          <img *ngIf=\"activity.appliance == 'Lamp'\" [src]=\"iconLamp\">\n          <img *ngIf=\"activity.appliance == 'Light'\" [src]=\"iconLamp1\">\n          <img *ngIf=\"activity.appliance == 'Fridge'\" [src]=\"iconDryer\">\n          <img *ngIf=\"activity.appliance == 'AC'\" [src]=\"iconAirCond\">\n          <img *ngIf=\"activity.appliance == 'Dishwasher'\" [src]=\"iconDishwasher\">\n          <img *ngIf=\"activity.appliance == 'Toaster'\" [src]=\"iconToaster\">\n          <img *ngIf=\"activity.appliance == 'Dryer'\" [src]=\"iconDryer\">\n          <img *ngIf=\"activity.appliance == 'Washing'\" [src]=\"iconDryer\">\n          <img *ngIf=\"activity.appliance == 'Microwave'\" [src]=\"iconMicrowave\">\n          <img *ngIf=\"activity.appliance == 'Air'\" [src]=\"iconAir\">\n          <img *ngIf=\"activity.appliance == 'Deep'\" [src]=\"iconDeep\">\n          <img *ngIf=\"activity.appliance == 'Blender'\" [src]=\"iconBlender\">\n          <img *ngIf=\"activity.appliance == 'Induction'\" [src]=\"iconInduction\">\n          <img *ngIf=\"activity.appliance == 'Iron'\" [src]=\"iconIron\">\n          <img *ngIf=\"activity.appliance == 'Vacuum'\" [src]=\"iconVacuum\">\n        </ion-avatar>\n        <ion-label class=\"ion-text-wrap\">\n          <h2>{{activity.appliance}}</h2>\n        </ion-label>\n        <ion-label slot=\"end\" class=\"ion-text-wrap ion-text-right\">\n          <p>{{activity.created_date}}</p>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/core/dashboard/dashboard-routing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/dashboard/dashboard-routing.module.ts ***!
    \************************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppCoreDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/core/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/dashboard/dashboard.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/dashboard/dashboard.module.ts ***!
    \****************************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppCoreDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/core/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/core/dashboard/dashboard.page.ts");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/core/dashboard/dashboard.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/core/dashboard/dashboard.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-img {\n  display: grid;\n  max-width: 7rem !important;\n  margin-top: 3rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.error-text {\n  color: #9d9fa6;\n  display: grid;\n  font-size: 0.9rem;\n  margin-left: 4rem;\n  margin-right: 4rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXJyYWh6ZWx5bmEvRG9jdW1lbnRzL3pldXMvbW9iaWxlL3NyYy9hcHAvY29yZS9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29yZS9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1pbWcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWF4LXdpZHRoOiA3cmVtICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4gIFxuLmVycm9yLXRleHQge1xuICAgIGNvbG9yOiAjOWQ5ZmE2O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDRyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuZXJyb3ItaW1nIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWF4LXdpZHRoOiA3cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6ICM5ZDlmYTY7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/core/dashboard/dashboard.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/dashboard/dashboard.page.ts ***!
    \**************************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppCoreDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
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


    var src_assets_mock_activities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/assets/mock/activities */
    "./src/assets/mock/activities.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);
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

    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage(deviceService, router) {
        _classCallCheck(this, DashboardPage);

        this.deviceService = deviceService;
        this.router = router; // Data

        this.activities = [];
        this.notiActivities = [];
        this.dataKiri = 0;
        this.dataKanan = 0; // Checker

        this.isFeedEmpty = true; // Length

        this.notifyMe = []; // Icon

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
        this.getCSV();
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.segment = 'P';
          this.intervalNoti = setInterval(function () {
            _this.getNoti();
          }, 10000);
        }
      }, {
        key: "getData",
        value: function getData() {
          this.activities = src_assets_mock_activities__WEBPACK_IMPORTED_MODULE_2__["Activity"];

          if (this.activities.length == 0) {
            this.isFeedEmpty = true;
          } else {
            this.isFeedEmpty = false;
          }
        }
      }, {
        key: "view",
        value: function view() {
          var path = '/appliance-detail';
          this.router.navigate([path]);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.initChartPower();
          this.initChartAppliance();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.intervalCSV);
          clearInterval(this.intervalNoti);
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          var _this2 = this;

          console.log('Segment: ', this.segment);
          console.log('Segment changed: ', ev);

          if (this.segment == 'A') {
            setTimeout(function () {
              _this2.initChartAppliance();
            }, 1000);
          }

          if (this.segment == 'P') {
            setTimeout(function () {
              _this2.initChartPower();
            }, 1000);
          }
        }
      }, {
        key: "initChartAppliance",
        value: function initChartAppliance() {
          this.chartAppliance = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.canvasAppliance.nativeElement, {
            type: 'pie',
            data: {
              datasets: [{
                data: [55, 120, 155, 160, 95],
                backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
                label: 'Dataset 1'
              }],
              labels: ['Lamp', 'Solar', 'Fridge', 'Microwave', 'Fan']
            },
            options: {
              responsive: true
            }
          });
        }
      }, {
        key: "initChartPower",
        value: function initChartPower() {
          this.chartPower = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.canvasPower.nativeElement, {
            type: "line",
            data: {
              labels: [],
              datasets: [{
                label: "",
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
              }, {
                label: "",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(192,75,192,0.4)",
                borderColor: "rgba(192,75,192,0.4)",
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
              }, {
                label: "",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,75,0.4)",
                borderColor: "rgba(75,192,75,0.4)",
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
        key: "getCSV",
        value: function getCSV() {
          var _this3 = this;

          this.deviceService.getCSV().subscribe(function (res) {
            var row = res.body.split(",");

            if (res.body.length < 30) {
              var label = moment__WEBPACK_IMPORTED_MODULE_6__["unix"](res.test).format('h:mm:ss a');
              var data1 = row[0] * 240 / 1000;
              var data2 = row[1] * 240 / 1000;
              var data3 = row[2] * 240 / 1000;
              _this3.dataKiri = (_this3.dataKiri + data1 + data2 + data3) / 60;
              _this3.dataKanan = (_this3.dataKanan + data1 + data2 + data3) / 50;

              _this3.chartPower.data.labels.push(label);

              _this3.chartPower.data.datasets[0].data.push(data1);

              _this3.chartPower.data.datasets[1].data.push(data2);

              _this3.chartPower.data.datasets[2].data.push(data3);

              _this3.chartPower.update();
            } // console.log('Dashboard: ', res)
            // this.


            console.log();
          }); // this.intervalCSV = setInterval(
          //   () => {
          //     this.deviceService.getCSV().subscribe(
          //       (res) => {
          //         let row = res.body.split(",")
          //         if (res.body.length < 30) {
          //           let label = moment.unix(res.test).format('h:mm:ss a')
          //           let data1 = row[0]*240/1000
          //           let data2 = row[1]*240/1000
          //           let data3 = row[2]*240/1000
          //           this.dataKiri = (this.dataKiri + data1 + data2 + data3) / 60
          //           this.dataKanan = (this.dataKanan + data1 + data2 + data3) / 50
          //           this.chartPower.data.labels.push(label)
          //           this.chartPower.data.datasets[0].data.push(data1)
          //           this.chartPower.data.datasets[1].data.push(data2)
          //           this.chartPower.data.datasets[2].data.push(data3)
          //           this.chartPower.update()
          //         }
          //         // console.log('Dashboard: ', res)
          //         // this.
          //         console.log()
          //       }
          //     )
          //   }, 1000
          // )
        }
      }, {
        key: "addData",
        value: function addData(chart, label, data) {}
      }, {
        key: "getNoti",
        value: function getNoti() {
          var _this4 = this;

          this.notiActivities = [];
          this.deviceService.getValue().subscribe(function (res) {
            res = res.sort(function (n1, n2) {
              return n1 - n2;
            });
            res.forEach(function (data) {
              data.time = moment__WEBPACK_IMPORTED_MODULE_6__["unix"](data.time).format('h:mm:ss a');

              _this4.notiActivities.push(data);
            });
          }, function () {}, function () {});
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: src_app_shared_services_devices_devices_service__WEBPACK_IMPORTED_MODULE_5__["DevicesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasPower', {
      "static": false
    })], DashboardPage.prototype, "canvasPower", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasAppliance', {
      "static": false
    })], DashboardPage.prototype, "canvasAppliance", void 0);
    DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/core/dashboard/dashboard.page.scss"))["default"]]
    })], DashboardPage);
    /***/
  },

  /***/
  "./src/assets/mock/activities.ts":
  /*!***************************************!*\
    !*** ./src/assets/mock/activities.ts ***!
    \***************************************/

  /*! exports provided: Activity */

  /***/
  function srcAssetsMockActivitiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Activity", function () {
      return Activity;
    });

    var Activity = [{
      appliance: 'Microwave',
      description: 'Turned off',
      created_date: '08:12 a.m'
    }, {
      appliance: 'Microwave',
      description: 'On for 1 minutes',
      created_date: '08:10 a.m'
    }, {
      appliance: 'Toaster',
      description: 'Turned off',
      created_date: '19/04 08:30 p.m'
    }, {
      appliance: 'Toaster',
      description: 'Turned off',
      created_date: '19/04 08:29 p.m'
    }];
    /***/
  }
}]);
//# sourceMappingURL=core-dashboard-dashboard-module-es5.js.map