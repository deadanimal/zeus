function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/profile.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/profile.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list\n    mode=\"ios\"\n    class=\"ion-no-margin list-core\"\n  >\n    <ion-list-header mode=\"ios\">\n      <h3>Personal</h3>\n    </ion-list-header>\n\n    <ion-item lines=\"none\" detail (click)=\"navigatePage('/profile-information')\">\n      <ion-icon name=\"person-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n      <ion-label>\n        <h3>Information</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-list-header mode=\"ios\">\n      <h3>Hardware</h3>\n    </ion-list-header>\n    \n    <ion-item lines=\"none\" detail (click)=\"navigatePage('/profile-hardware')\">\n      <ion-icon name=\"hardware-chip-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n      <ion-label>\n        <h3>Settings</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-list-header mode=\"ios\">\n      <h3>Support</h3>\n    </ion-list-header>\n\n    <ion-item lines=\"none\" detail (click)=\"navigatePage('/profile-help')\">\n      <ion-icon name=\"help-buoy-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n      <ion-label>\n        <h3>Help</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail (click)=\"navigatePage('/profile-share')\">\n      <ion-icon name=\"share-social-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n      <ion-label>\n        <h3>Share</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail (click)=\"navigatePage('/profile-about')\">\n      <ion-icon name=\"information-circle-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n      <ion-label>\n        <h3>About</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-no-border\" transparent>\n  <ion-button\n    class=\"round\" \n    shape=\"round\" \n    expand=\"block\"\n    mode=\"ios\"\n    (click)=\"logout()\"\n  >\n    Logout\n  </ion-button>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/core/profile/profile-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/profile/profile-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppCoreProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/core/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/profile/profile.module.ts":
  /*!************************************************!*\
    !*** ./src/app/core/profile/profile.module.ts ***!
    \************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppCoreProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/core/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/core/profile/profile.page.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/core/profile/profile.page.scss":
  /*!************************************************!*\
    !*** ./src/app/core/profile/profile.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/core/profile/profile.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/core/profile/profile.page.ts ***!
    \**********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppCoreProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/users/users.service */
    "./src/app/shared/services/users/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/handler/jwt/jwt.service */
    "./src/app/shared/handler/jwt/jwt.service.ts");

    var ProfilePage = /*#__PURE__*/function () {
      // Language
      // selectedLanguage: string
      // languageTypes = [
      //   { value: 'en', text: 'English' },
      //   { value: 'bm', text: 'Bahasa Malaysia' }
      // ]
      function ProfilePage(authService, userService, jwtService, router) {
        _classCallCheck(this, ProfilePage);

        this.authService = authService;
        this.userService = userService;
        this.jwtService = jwtService;
        this.router = router;
        this.getData();
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigatePage",
        value: function navigatePage(path) {
          this.router.navigate([path]);
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this = this;

          this.userService.getOne(this.authService.userID).subscribe(function () {
            _this.user = _this.userService.user;
          }, function () {}, function () {});
        }
      }, {
        key: "logout",
        value: function logout() {
          this.jwtService.destroyToken();
          this.navigatePage('/');
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
      }, {
        type: src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/core/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=core-profile-profile-module-es5.js.map