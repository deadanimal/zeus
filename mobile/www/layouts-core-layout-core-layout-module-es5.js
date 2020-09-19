function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-core-layout-core-layout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/core-layout/core-layout.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/core-layout/core-layout.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsCoreLayoutCoreLayoutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"dashboard\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label></ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"appliances\">\n      <ion-icon name=\"bulb-outline\"></ion-icon>\n      <ion-label></ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"information\">\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\n      <ion-label></ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label></ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/layouts/core-layout/core-layout-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/layouts/core-layout/core-layout-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CoreLayoutPageRoutingModule */

  /***/
  function srcAppLayoutsCoreLayoutCoreLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreLayoutPageRoutingModule", function () {
      return CoreLayoutPageRoutingModule;
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


    var _core_layout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core-layout.page */
    "./src/app/layouts/core-layout/core-layout.page.ts");

    var routes = [{
      path: '',
      component: _core_layout_page__WEBPACK_IMPORTED_MODULE_3__["CoreLayoutPage"],
      children: [{
        path: 'appliances',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | core-appliances-appliances-module */
            [__webpack_require__.e("common"), __webpack_require__.e("core-appliances-appliances-module")]).then(__webpack_require__.bind(null,
            /*! ../../core/appliances/appliances.module */
            "./src/app/core/appliances/appliances.module.ts")).then(function (m) {
              return m.AppliancesPageModule;
            });
          }
        }]
      }, {
        path: 'information',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | core-information-information-module */
            "core-information-information-module").then(__webpack_require__.bind(null,
            /*! ../../core/information/information.module */
            "./src/app/core/information/information.module.ts")).then(function (m) {
              return m.InformationPageModule;
            });
          }
        }]
      }, {
        path: 'dashboard',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | core-dashboard-dashboard-module */
            [__webpack_require__.e("default~core-appliance-detail-appliance-detail-module~core-dashboard-dashboard-module"), __webpack_require__.e("core-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ../../core/dashboard/dashboard.module */
            "./src/app/core/dashboard/dashboard.module.ts")).then(function (m) {
              return m.DashboardPageModule;
            });
          }
        }]
      }, {
        path: 'profile',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | core-profile-profile-module */
            [__webpack_require__.e("default~auth-forgot-forgot-module~auth-login-login-module~auth-register-register-module~auth-success~4d23f364"), __webpack_require__.e("common"), __webpack_require__.e("core-profile-profile-module")]).then(__webpack_require__.bind(null,
            /*! ../../core/profile/profile.module */
            "./src/app/core/profile/profile.module.ts")).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/core/dashboard',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/core/dashboard',
      pathMatch: 'full'
    }];

    var CoreLayoutPageRoutingModule = function CoreLayoutPageRoutingModule() {
      _classCallCheck(this, CoreLayoutPageRoutingModule);
    };

    CoreLayoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CoreLayoutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/layouts/core-layout/core-layout.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layouts/core-layout/core-layout.module.ts ***!
    \***********************************************************/

  /*! exports provided: CoreLayoutPageModule */

  /***/
  function srcAppLayoutsCoreLayoutCoreLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreLayoutPageModule", function () {
      return CoreLayoutPageModule;
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


    var _core_layout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core-layout-routing.module */
    "./src/app/layouts/core-layout/core-layout-routing.module.ts");
    /* harmony import */


    var _core_layout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./core-layout.page */
    "./src/app/layouts/core-layout/core-layout.page.ts");

    var CoreLayoutPageModule = function CoreLayoutPageModule() {
      _classCallCheck(this, CoreLayoutPageModule);
    };

    CoreLayoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _core_layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoreLayoutPageRoutingModule"]],
      declarations: [_core_layout_page__WEBPACK_IMPORTED_MODULE_6__["CoreLayoutPage"]]
    })], CoreLayoutPageModule);
    /***/
  },

  /***/
  "./src/app/layouts/core-layout/core-layout.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/layouts/core-layout/core-layout.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsCoreLayoutCoreLayoutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29yZS1sYXlvdXQvY29yZS1sYXlvdXQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layouts/core-layout/core-layout.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/layouts/core-layout/core-layout.page.ts ***!
    \*********************************************************/

  /*! exports provided: CoreLayoutPage */

  /***/
  function srcAppLayoutsCoreLayoutCoreLayoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreLayoutPage", function () {
      return CoreLayoutPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CoreLayoutPage = /*#__PURE__*/function () {
      function CoreLayoutPage() {
        _classCallCheck(this, CoreLayoutPage);
      }

      _createClass(CoreLayoutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CoreLayoutPage;
    }();

    CoreLayoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-core-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./core-layout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/core-layout/core-layout.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./core-layout.page.scss */
      "./src/app/layouts/core-layout/core-layout.page.scss"))["default"]]
    })], CoreLayoutPage);
    /***/
  }
}]);
//# sourceMappingURL=layouts-core-layout-core-layout-module-es5.js.map