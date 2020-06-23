function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-profile-hardware-profile-hardware-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-hardware/profile-hardware.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-hardware/profile-hardware.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreProfileHardwareProfileHardwarePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n      defaultHref=\"/core/profile\"\n      routerLink=\"/core/profile\"\n      routerDirection=\"back\"\n      text=\"\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Hardware</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list class=\"ion-no-margin list-core\" mode=\"ios\">\n    <ion-list-header lines=\"none\" mode=\"ios\">\n\t\t\t<h3>Information</h3>\n    </ion-list-header>\n    \n    <ion-item lines=\"none\" class=\"item-form\">\n      <ion-label position=\"stacked\" mode=\"ios\">Connected device</ion-label>\n      <ion-input placeholder=\"Connected device\"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-no-border\" transparent>\n  <ion-button \n    class=\"round\" \n    shape=\"round\"\n    color=\"primary\"\n    expand=\"block\"\n    mode=\"ios\"\n    (click)=\"connect()\"\n  >\n    Connect\n  </ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/core/profile-hardware/profile-hardware-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/core/profile-hardware/profile-hardware-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ProfileHardwarePageRoutingModule */

  /***/
  function srcAppCoreProfileHardwareProfileHardwareRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileHardwarePageRoutingModule", function () {
      return ProfileHardwarePageRoutingModule;
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


    var _profile_hardware_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-hardware.page */
    "./src/app/core/profile-hardware/profile-hardware.page.ts");

    var routes = [{
      path: '',
      component: _profile_hardware_page__WEBPACK_IMPORTED_MODULE_3__["ProfileHardwarePage"]
    }];

    var ProfileHardwarePageRoutingModule = function ProfileHardwarePageRoutingModule() {
      _classCallCheck(this, ProfileHardwarePageRoutingModule);
    };

    ProfileHardwarePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfileHardwarePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/profile-hardware/profile-hardware.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/core/profile-hardware/profile-hardware.module.ts ***!
    \******************************************************************/

  /*! exports provided: ProfileHardwarePageModule */

  /***/
  function srcAppCoreProfileHardwareProfileHardwareModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileHardwarePageModule", function () {
      return ProfileHardwarePageModule;
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


    var _profile_hardware_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-hardware-routing.module */
    "./src/app/core/profile-hardware/profile-hardware-routing.module.ts");
    /* harmony import */


    var _profile_hardware_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-hardware.page */
    "./src/app/core/profile-hardware/profile-hardware.page.ts");

    var ProfileHardwarePageModule = function ProfileHardwarePageModule() {
      _classCallCheck(this, ProfileHardwarePageModule);
    };

    ProfileHardwarePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_hardware_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileHardwarePageRoutingModule"]],
      declarations: [_profile_hardware_page__WEBPACK_IMPORTED_MODULE_6__["ProfileHardwarePage"]]
    })], ProfileHardwarePageModule);
    /***/
  },

  /***/
  "./src/app/core/profile-hardware/profile-hardware.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/core/profile-hardware/profile-hardware.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreProfileHardwareProfileHardwarePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZmlsZS1oYXJkd2FyZS9wcm9maWxlLWhhcmR3YXJlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/core/profile-hardware/profile-hardware.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/profile-hardware/profile-hardware.page.ts ***!
    \****************************************************************/

  /*! exports provided: ProfileHardwarePage */

  /***/
  function srcAppCoreProfileHardwareProfileHardwarePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileHardwarePage", function () {
      return ProfileHardwarePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileHardwarePage = /*#__PURE__*/function () {
      function ProfileHardwarePage() {
        _classCallCheck(this, ProfileHardwarePage);
      }

      _createClass(ProfileHardwarePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileHardwarePage;
    }();

    ProfileHardwarePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-hardware',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-hardware.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-hardware/profile-hardware.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-hardware.page.scss */
      "./src/app/core/profile-hardware/profile-hardware.page.scss"))["default"]]
    })], ProfileHardwarePage);
    /***/
  }
}]);
//# sourceMappingURL=core-profile-hardware-profile-hardware-module-es5.js.map