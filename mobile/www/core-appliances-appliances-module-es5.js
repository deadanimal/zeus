function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-appliances-appliances-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/appliances/appliances.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/appliances/appliances.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreAppliancesAppliancesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>Appliances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list mode=\"ios\" class=\"ion-no-margin list-core\">\n    <ion-list-header mode=\"ios\">\n      <h3>Registered appliances</h3>\n    </ion-list-header>\n\n    <div [hidden]=\"!isListEmpty\">\n      <img [src]=\"iconError\" class=\"error-img\">\n      <p class=\"error-text\">No appliances registered</p>\n    </div>\n\n    <ion-item detail *ngFor=\"let appliance of appliances\" lines=\"none\" (click)=\"view()\">\n      <ion-avatar slot=\"start\">\n        <img *ngIf=\"appliance.appliance == 'TV'\" [src]=\"iconLCD\">\n        <img *ngIf=\"appliance.appliance == 'Lamp'\" [src]=\"iconLamp\">\n        <img *ngIf=\"appliance.appliance == 'Light'\" [src]=\"iconLamp1\">\n        <img *ngIf=\"appliance.appliance == 'Fridge'\" [src]=\"iconFridge\">\n        <img *ngIf=\"appliance.appliance == 'Airconditioner'\" [src]=\"iconAirCond\">\n        <img *ngIf=\"appliance.appliance == 'Dishwasher'\" [src]=\"iconDishwasher\">\n        <img *ngIf=\"appliance.appliance == 'Toaster'\" [src]=\"iconToaster\">\n        <img *ngIf=\"appliance.appliance == 'Dryer'\" [src]=\"iconDryer\">\n      </ion-avatar>\n\n      <ion-label class=\"ion-text-wrap\">\n        <h2>{{appliance.appliance}}</h2>\n        <p>{{appliance.description}}</p>\n      </ion-label>\n\n      <ion-label slot=\"end\" class=\"ion-text-right\">\n        <ion-badge *ngIf=\"appliance.status == 'On'\" color=\"success\">On</ion-badge>\n        <ion-badge *ngIf=\"appliance.status == 'Off'\" color=\"medium\">Off</ion-badge>\n        <p>{{appliance.reading}}</p>\n      </ion-label>\n    </ion-item>\n\n  <!-- <ion-item detail lines=\"none\" (click)=\"view()\">\n    <ion-avatar slot=\"start\">\n      <img [src]=\"iconLCD\">\n    </ion-avatar>\n\n    <ion-label class=\"ion-text-wrap\">\n      <h2>Name</h2>\n      <p>Description</p>\n    </ion-label>\n\n    <ion-label slot=\"end\" class=\"ion-text-right\">\n      <ion-badge color=\"success\">On</ion-badge>\n      <p>Reading</p>\n    </ion-label>\n  </ion-item> -->\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/core/appliances/appliances-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/appliances/appliances-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: AppliancesPageRoutingModule */

  /***/
  function srcAppCoreAppliancesAppliancesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppliancesPageRoutingModule", function () {
      return AppliancesPageRoutingModule;
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


    var _appliances_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./appliances.page */
    "./src/app/core/appliances/appliances.page.ts");

    var routes = [{
      path: '',
      component: _appliances_page__WEBPACK_IMPORTED_MODULE_3__["AppliancesPage"]
    }];

    var AppliancesPageRoutingModule = function AppliancesPageRoutingModule() {
      _classCallCheck(this, AppliancesPageRoutingModule);
    };

    AppliancesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppliancesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/appliances/appliances.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/appliances/appliances.module.ts ***!
    \******************************************************/

  /*! exports provided: AppliancesPageModule */

  /***/
  function srcAppCoreAppliancesAppliancesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppliancesPageModule", function () {
      return AppliancesPageModule;
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


    var _appliances_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./appliances-routing.module */
    "./src/app/core/appliances/appliances-routing.module.ts");
    /* harmony import */


    var _appliances_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./appliances.page */
    "./src/app/core/appliances/appliances.page.ts");

    var AppliancesPageModule = function AppliancesPageModule() {
      _classCallCheck(this, AppliancesPageModule);
    };

    AppliancesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _appliances_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppliancesPageRoutingModule"]],
      declarations: [_appliances_page__WEBPACK_IMPORTED_MODULE_6__["AppliancesPage"]]
    })], AppliancesPageModule);
    /***/
  },

  /***/
  "./src/app/core/appliances/appliances.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/core/appliances/appliances.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreAppliancesAppliancesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-img {\n  display: grid;\n  max-width: 7rem !important;\n  margin-top: 3rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.error-text {\n  color: #9d9fa6;\n  display: grid;\n  font-size: 0.9rem;\n  margin-left: 4rem;\n  margin-right: 4rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Ta3Vuay9za3Vuay0wMDItemV1cy96ZXVzLW1vYmlsZS9zcmMvYXBwL2NvcmUvYXBwbGlhbmNlcy9hcHBsaWFuY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29yZS9hcHBsaWFuY2VzL2FwcGxpYW5jZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2FwcGxpYW5jZXMvYXBwbGlhbmNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItaW1nIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1heC13aWR0aDogN3JlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuICBcbi5lcnJvci10ZXh0IHtcbiAgICBjb2xvcjogIzlkOWZhNjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLmVycm9yLWltZyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1heC13aWR0aDogN3JlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIGNvbG9yOiAjOWQ5ZmE2O1xuICBkaXNwbGF5OiBncmlkO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XG4gIG1hcmdpbi1yaWdodDogNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/appliances/appliances.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/appliances/appliances.page.ts ***!
    \****************************************************/

  /*! exports provided: AppliancesPage */

  /***/
  function srcAppCoreAppliancesAppliancesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppliancesPage", function () {
      return AppliancesPage;
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


    var src_app_shared_services_appliances_appliances_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/appliances/appliances.service */
    "./src/app/shared/services/appliances/appliances.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_assets_mock_appliances__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/assets/mock/appliances */
    "./src/assets/mock/appliances.ts");

    var AppliancesPage = /*#__PURE__*/function () {
      function AppliancesPage(applianceService, router) {
        _classCallCheck(this, AppliancesPage);

        this.applianceService = applianceService;
        this.router = router; // Data

        this.appliances = []; // Checker

        this.isListEmpty = true; // Icon

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
        this.getData();
      }

      _createClass(AppliancesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getData",
        value: function getData() {
          this.appliances = src_assets_mock_appliances__WEBPACK_IMPORTED_MODULE_4__["Appliance"];

          if (this.appliances.length == 0) {
            this.isListEmpty = true;
          } else {
            this.isListEmpty = false;
          }
        }
      }, {
        key: "view",
        value: function view() {
          var path = '/appliance-detail';
          this.router.navigate([path]);
        }
      }]);

      return AppliancesPage;
    }();

    AppliancesPage.ctorParameters = function () {
      return [{
        type: src_app_shared_services_appliances_appliances_service__WEBPACK_IMPORTED_MODULE_2__["AppliancesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AppliancesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-appliances',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./appliances.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/appliances/appliances.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./appliances.page.scss */
      "./src/app/core/appliances/appliances.page.scss"))["default"]]
    })], AppliancesPage);
    /***/
  },

  /***/
  "./src/assets/mock/appliances.ts":
  /*!***************************************!*\
    !*** ./src/assets/mock/appliances.ts ***!
    \***************************************/

  /*! exports provided: Appliance */

  /***/
  function srcAssetsMockAppliancesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Appliance", function () {
      return Appliance;
    });

    var Appliance = [{
      appliance: 'TV',
      description: 'Philips T1012',
      status: 'On',
      reading: '20Wh/RM10.00'
    }, {
      appliance: 'Lamp',
      description: 'Philips room lamp',
      status: 'On',
      reading: '5Wh/RM0.50'
    }, {
      appliance: 'Light',
      description: 'Philips porch light',
      status: 'Off',
      reading: '5Wh/RM0.50'
    }, {
      appliance: 'Fridge',
      description: 'Samsung main fridge',
      status: 'On',
      reading: '25Wh/RM20.00'
    }, {
      appliance: 'Lamp',
      description: 'Philips bathroom light',
      status: 'Off',
      reading: '5Wh/RM0.60'
    }, {
      appliance: 'Airconditioner',
      description: 'Daikin living hall air-conditioner',
      status: 'On',
      reading: '30Wh/RM120.00'
    }, {
      appliance: 'Dishwasher',
      description: 'Zing main dishwasher',
      status: 'Off',
      reading: '35Wh/RM130.00'
    }, {
      appliance: 'Toaster',
      description: 'Xiaomi smart toaster',
      status: 'Off',
      reading: '15Wh/RM30.00'
    }, {
      appliance: 'Dryer',
      description: 'Samsung dryer',
      status: 'Off',
      reading: '45Wh/RM55.00'
    }];
    /***/
  }
}]);
//# sourceMappingURL=core-appliances-appliances-module-es5.js.map