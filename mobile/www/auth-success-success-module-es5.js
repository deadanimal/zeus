function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-success-success-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/success/success.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/success/success.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSuccessSuccessPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n\t<ion-toolbar mode=\"ios\" color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"/auth/register\" routerLink=\"/auth/register\" routerDirection=\"back\" text=\"\">\n\t\t\t</ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fullscreen>\n\t<div class=\"main-content\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<img src=\"assets/red.png\">\n\t\t\t\t\t<p class=\"ion-text-center ion-padding-bottom\">Register User Account</p>\n\n\t\t\t\t\t<div *ngIf=\"value===register\">\n\t\t\t\t\t\t<p class=\"ion-text-center ion-padding-bottom\">Register account</p>\n\t\t\t\t\t\t<ion-card class=\"card\">\n\t\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t\t<ng-container>\n\t\t\t\t\t\t\t\t\t<p style=\"color:white;\">Register success. Please log in into your account</p>\n\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"ion-text-center\">\n\t\t\t\t\t\t<ion-button *ngIf=\"!isLoading\" type=\"submit\" shape=\"round\" color=\"primary\" mode=\"ios\">\n\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</div>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/auth/success/success-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/auth/success/success-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: SuccessPageRoutingModule */

  /***/
  function srcAppAuthSuccessSuccessRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessPageRoutingModule", function () {
      return SuccessPageRoutingModule;
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


    var _success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./success.page */
    "./src/app/auth/success/success.page.ts");

    var routes = [{
      path: '',
      component: _success_page__WEBPACK_IMPORTED_MODULE_3__["SuccessPage"]
    }];

    var SuccessPageRoutingModule = function SuccessPageRoutingModule() {
      _classCallCheck(this, SuccessPageRoutingModule);
    };

    SuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SuccessPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/success/success.module.ts":
  /*!************************************************!*\
    !*** ./src/app/auth/success/success.module.ts ***!
    \************************************************/

  /*! exports provided: SuccessPageModule */

  /***/
  function srcAppAuthSuccessSuccessModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessPageModule", function () {
      return SuccessPageModule;
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


    var _success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./success-routing.module */
    "./src/app/auth/success/success-routing.module.ts");
    /* harmony import */


    var _success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./success.page */
    "./src/app/auth/success/success.page.ts");

    var SuccessPageModule = function SuccessPageModule() {
      _classCallCheck(this, SuccessPageModule);
    };

    SuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _success_routing_module__WEBPACK_IMPORTED_MODULE_5__["SuccessPageRoutingModule"]],
      declarations: [_success_page__WEBPACK_IMPORTED_MODULE_6__["SuccessPage"]]
    })], SuccessPageModule);
    /***/
  },

  /***/
  "./src/app/auth/success/success.page.scss":
  /*!************************************************!*\
    !*** ./src/app/auth/success/success.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSuccessSuccessPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-content ion-card {\n  border-radius: 20px 20px 20px 20px !important;\n  background-color: var(--ion-color-custom);\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n}\n\nimg {\n  max-width: 8rem;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.ion-color-custom {\n  --ion-color-base: var(--ion-color-custom);\n  --ion-color-base-rgb: var(--ion-color-custom-rgb);\n  --ion-color-contrast: var(--ion-color-custom-contrast);\n  --ion-color-contrast-rgb: var(--ion-color-custom-contrast-rgb);\n  --ion-color-shade: var(--ion-color-custom-shade);\n  --ion-color-tint: var(--ion-color-custom-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXJyYWh6ZWx5bmEvRG9jdW1lbnRzL3pldXMvbW9iaWxlL3NyYy9hcHAvYXV0aC9zdWNjZXNzL3N1Y2Nlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9hdXRoL3N1Y2Nlc3Mvc3VjY2Vzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw2Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0kseUNBQUE7RUFDQSxpREFBQTtFQUNBLHNEQUFBO0VBQ0EsOERBQUE7RUFDQSxnREFBQTtFQUNBLDhDQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3N1Y2Nlc3Mvc3VjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50e1xuICAgIGlvbi1jYXJke1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLWN1c3RvbSk7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbn1cblxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDhyZW07XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW9uLWNvbG9yLWN1c3RvbSB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWN1c3RvbSk7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1jdXN0b20tcmdiKTtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWN1c3RvbS1jb250cmFzdCk7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItY3VzdG9tLWNvbnRyYXN0LXJnYik7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1jdXN0b20tc2hhZGUpO1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1jdXN0b20tdGludCk7XG4gIH1cblxuXG5cbiIsIi5tYWluLWNvbnRlbnQgaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1jdXN0b20pO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiA4cmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmlvbi1jb2xvci1jdXN0b20ge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItY3VzdG9tKTtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1jdXN0b20tcmdiKTtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1jdXN0b20tY29udHJhc3QpO1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1jdXN0b20tY29udHJhc3QtcmdiKTtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1jdXN0b20tc2hhZGUpO1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItY3VzdG9tLXRpbnQpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/success/success.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/auth/success/success.page.ts ***!
    \**********************************************/

  /*! exports provided: SuccessPage */

  /***/
  function srcAppAuthSuccessSuccessPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessPage", function () {
      return SuccessPage;
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


    var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/handler/notify/notify.service */
    "./src/app/shared/handler/notify/notify.service.ts");
    /* harmony import */


    var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/users/users.service */
    "./src/app/shared/services/users/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var SuccessPage = /*#__PURE__*/function () {
      function SuccessPage(authService, userService, toastr, router) {
        _classCallCheck(this, SuccessPage);

        this.authService = authService;
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
        this.navParams = new _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavParams"](); // Checker

        this.isLoading = false;
        this.value = this.navParams.get('value');
        ;
      }

      _createClass(SuccessPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          this.isLoading = true; // console.log(this.loginForm.value)

          this.authService.obtainToken(this.loginForm.value).subscribe(function () {// Success
            // this.isLoading = false
          }, function () {
            // Failed
            _this.isLoading = false;
          }, function () {
            // After
            _this.getSelf();
          });
        }
      }, {
        key: "getSelf",
        value: function getSelf() {
          var _this2 = this;

          this.userService.getOne(this.authService.userID).subscribe(function () {}, function () {
            _this2.isLoading = false;
          }, function () {
            _this2.isLoading = false;

            _this2.toastr.openToastr('Welcome back');

            _this2.navigateHomePage();
          });
        }
      }, {
        key: "navigateHomePage",
        value: function navigateHomePage() {
          this.router.navigate(['/core/dashboard'], {
            replaceUrl: true
          });
        }
      }]);

      return SuccessPage;
    }();

    SuccessPage.ctorParameters = function () {
      return [{
        type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
      }, {
        type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    SuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-success',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./success.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/success/success.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./success.page.scss */
      "./src/app/auth/success/success.page.scss"))["default"]]
    })], SuccessPage);
    /***/
  }
}]);
//# sourceMappingURL=auth-success-success-module-es5.js.map