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


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\" mode=\"ios\">\n    <ion-segment-button value=\"A\">\n      <ion-label>Appliance</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"P\">\n      <ion-label>Power</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div *ngIf=\"segment == 'A'\">\n    <canvas #canvasAppliance></canvas>\n  </div>\n  \n  <div *ngIf=\"segment == 'P'\">\n    <canvas #canvasPower></canvas>\n  </div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-right\">\n        <ion-label>\n          <h1>461<span class=\"text-small\">W</span></h1>\n          <p><span class=\"text-small\">RM0.70/hr</span></p>\n        </ion-label>\n      </ion-col>\n      <ion-col>\n        <ion-label>\n          <h1>691<span class=\"text-small\">W</span></h1>\n          <p><span class=\"text-small\">RM0.70/hr</span></p>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list\n    mode=\"ios\"\n    class=\"ion-no-margin list-core\"\n  >\n    <ion-list-header mode=\"ios\">\n      <h3>Feed</h3>\n    </ion-list-header>\n\n    <div [hidden]=\"!isFeedEmpty\">\n      <img [src]=\"iconError\" class=\"error-img\">\n      <p class=\"error-text\">No feeds loaded</p>\n    </div>\n    \n    <div [hidden]=\"isFeedEmpty\">\n      <ion-item detail lines=\"none\" detail *ngFor=\"let activity of activities\" (click)=\"view()\">\n        <ion-avatar slot=\"start\">\n          <img *ngIf=\"activity.appliance == 'Microwave'\" [src]=\"iconMicrowave\">\n          <img *ngIf=\"activity.appliance == 'Toaster'\" [src]=\"iconToaster\">\n        </ion-avatar>\n        <ion-label class=\"ion-text-wrap\">\n          <h2>{{activity.appliance}}</h2>\n          <p>{{activity.description}}</p>\n        </ion-label>\n        <ion-label slot=\"end\" class=\"ion-text-wrap ion-text-right\">\n          <p>{{activity.created_date}}</p>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n";
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


    __webpack_exports__["default"] = ".error-img {\n  display: grid;\n  max-width: 7rem !important;\n  margin-top: 3rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.error-text {\n  color: #9d9fa6;\n  display: grid;\n  font-size: 0.9rem;\n  margin-left: 4rem;\n  margin-right: 4rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Ta3Vuay9za3Vuay0wMDItemV1cy96ZXVzLW1vYmlsZS9zcmMvYXBwL2NvcmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvcmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItaW1nIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1heC13aWR0aDogN3JlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuICBcbi5lcnJvci10ZXh0IHtcbiAgICBjb2xvcjogIzlkOWZhNjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLmVycm9yLWltZyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1heC13aWR0aDogN3JlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIGNvbG9yOiAjOWQ5ZmE2O1xuICBkaXNwbGF5OiBncmlkO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XG4gIG1hcmdpbi1yaWdodDogNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
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

    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage(router) {
        _classCallCheck(this, DashboardPage);

        this.router = router; // Data

        this.activities = []; // Checker

        this.isFeedEmpty = true; // Icon

        this.iconError = 'assets/img/default/404-error.svg';
        this.iconMicrowave = 'assets/img/appliance/microwave.svg';
        this.iconToaster = 'assets/img/appliance/toaster.svg';
        this.getData();
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.segment = 'A';
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
          this.initChartAppliance();
          this.initChartPower();
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          var _this = this;

          console.log('Segment: ', this.segment);
          console.log('Segment changed: ', ev);

          if (this.segment == 'A') {
            setTimeout(function () {
              _this.initChartAppliance();
            }, 1000);
          }

          if (this.segment == 'P') {
            setTimeout(function () {
              _this.initChartPower();
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
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
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