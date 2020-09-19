function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen>\n\t<div class=\"wave-container\">\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#73b7ff\" fill-opacity=\"1\" d=\"M0,128L48,154.7C96,181,192,235,288,245.3C384,256,480,224,576,186.7C672,149,768,107,864,80C960,53,1056,43,1152,64C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z\"></path></svg>\n\t</div>\n\t<div class=\"main-content ion-padding login-container\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<img src=\"assets/red.png\">\n\t\t\t\t\t<form\n\t\t\t\t\t\tclass=\"form\"\n\t\t\t\t\t\t[formGroup]=\"loginForm\"\n\t\t\t\t\t\t(ngSubmit)=\"login()\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<p class=\"ion-text-center ion-padding-bottom\">Please enter your <span (click)=\"tipu()\">credentials</span></p>\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\">Your email</ion-label>\n\t\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"username\" placeholder=\"Your Email\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\n\t\t\t\t\t\t<div class=\"validation-errors\">\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of loginFormMessages.username\">\n\t\t\t\t\t\t\t\t<div \n\t\t\t\t\t\t\t\t\tclass=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"loginForm.get('username').hasError(message.type) && (loginForm.get('username').dirty || loginForm.get('username').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t{{ message.message }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\">Password</ion-label>\n\t\t\t\t\t\t\t<ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\n\t\t\t\t\t\t<div class=\"validation-errors ion-text-right\">\n\t\t\t\t\t\t\t<p><a (click)=\"navigatePage('/auth/forgot')\">Forgot Password </a></p>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t<div class=\"ion-text-center\">\n\t\t\t\t\t\t\t<ion-button \n\t\t\t\t\t\t\t\t*ngIf=\"!isLoading\"\n\t\t\t\t\t\t\t\ttype=\"submit\"\n\t\t\t\t\t\t\t\t[disabled]=\"!loginForm.valid\"\n\t\t\t\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t<ion-button \n\t\t\t\t\t\t\t\tdisabled \n\t\t\t\t\t\t\t\t*ngIf=\"isLoading\"\n\t\t\t\t\t\t\t\ttype=\"submit\"\n\t\t\t\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-spinner name=\"bubbles\"></ion-spinner>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t<p>No account yet? <a (click)=\"navigatePage('/auth/register')\">Create an account.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/auth/login/login-routing.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/auth/login/login-routing.module.ts ***!
    \****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppAuthLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/auth/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/login/login.module.ts":
  /*!********************************************!*\
    !*** ./src/app/auth/login/login.module.ts ***!
    \********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppAuthLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/auth/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/auth/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/auth/login/login.page.scss":
  /*!********************************************!*\
    !*** ./src/app/auth/login/login.page.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-content {\n  display: grid;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n  height: 100%;\n}\n\n.form {\n  min-width: 250px !important;\n}\n\n.form .validation-errors {\n  min-height: 25px;\n}\n\n.form .error-message {\n  color: var(--ion-color-danger);\n  text-align: right;\n  font-size: 0.8em;\n  padding-top: 5px;\n}\n\n.form ion-input {\n  --color: var(--ion-color-medium);\n  --placeholder-font-weight: 400;\n  --background: #f2f2f2;\n  border-radius: 15px;\n  --padding-start: 15px !important;\n  margin-top: 0.7rem;\n}\n\n.form ion-item {\n  --background: transparent;\n  --inner-padding-end: 0;\n  border-radius: 15px;\n}\n\nimg {\n  max-width: 8rem;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\nion-button {\n  --border-radius: 50px;\n  --box-shadow: none;\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 40px;\n}\n\n.copyright {\n  font-size: 0.8rem;\n  color: black;\n}\n\n.wave-container {\n  position: relative;\n  color: #FFF;\n  overflow: hidden;\n}\n\n.wave-container > svg {\n  display: block;\n  height: 200px;\n}\n\n@-webkit-keyframes animateWave {\n  0% {\n    transform: scale(1, 0);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\n@keyframes animateWave {\n  0% {\n    transform: scale(1, 0);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\n.wave-container > svg {\n  display: block;\n  transform-origin: bottom;\n  -webkit-animation: animateWave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;\n          animation: animateWave 1000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;\n}\n\n.login-container {\n  margin-top: -20vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Ta3Vuay9za3Vuay0wMDItemV1cy9tb2JpbGUvc3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtBQ0NKOztBRENJO0VBQ0ksZ0JBQUE7QUNDUjs7QURFSTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQVI7O0FER0k7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUNEUjs7QURJSTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0ZSOztBRE1BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSEo7O0FEYUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNWSjs7QURhQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ1ZKOztBRGFBO0VBQ0ksa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7QUNYSjs7QURhQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FDVko7O0FEYUE7RUFDSTtJQUNFLHNCQUFBO0VDVko7RURZRTtJQUNFLHNCQUFBO0VDVko7QUFDRjs7QURJQTtFQUNJO0lBQ0Usc0JBQUE7RUNWSjtFRFlFO0lBQ0Usc0JBQUE7RUNWSjtBQUNGOztBRFlBO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0EsNkVBQUE7VUFBQSxxRUFBQTtBQ1ZKOztBRGFBO0VBQ0ksaUJBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuICBcbi5mb3JtIHtcbiAgICBtaW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIFxuICAgIC52YWxpZGF0aW9uLWVycm9ycyB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1cHg7XG4gICAgfVxuICBcbiAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgfVxuICBcbiAgICBpb24taW5wdXQge1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjdyZW07XG4gICAgfVxuICBcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgfVxufVxuICBcbmltZyB7XG4gICAgbWF4LXdpZHRoOiA4cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiAgXG4vLyBBdm9pZCBrZXlib2FyZCB0byBoaWRlIG9yIG1vdmUgZWxlbWVudHMgaW4gdGhlIFVJXG4vLyBAbWVkaWEgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4vLyAgICAgaW1nIHtcbi8vICAgICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgICAgfVxuLy8gfVxuICBcbmlvbi1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNvcHlyaWdodCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ud2F2ZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMDlGO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud2F2ZS1jb250YWluZXIgPiBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZVdhdmUge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XG4gICAgfVxufVxuLndhdmUtY29udGFpbmVyID4gc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgYW5pbWF0aW9uOiBhbmltYXRlV2F2ZSAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIGZvcndhcmRzO1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAtMjB2aDtcbn0iLCIubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mb3JtIHtcbiAgbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xufVxuLmZvcm0gLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgbWluLWhlaWdodDogMjVweDtcbn1cbi5mb3JtIC5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5mb3JtIGlvbi1pbnB1dCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAuN3JlbTtcbn1cbi5mb3JtIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiA4cmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ud2F2ZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjRkZGO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2F2ZS1jb250YWluZXIgPiBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlV2F2ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gIH1cbn1cbi53YXZlLWNvbnRhaW5lciA+IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gIGFuaW1hdGlvbjogYW5pbWF0ZVdhdmUgMTAwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSBmb3J3YXJkcztcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IC0yMHZoO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.page.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/login/login.page.ts ***!
    \******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppAuthLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/auth/auth.service */
    "./src/app/shared/services/auth/auth.service.ts");
    /* harmony import */


    var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/handler/notify/notify.service */
    "./src/app/shared/handler/notify/notify.service.ts");
    /* harmony import */


    var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/users/users.service */
    "./src/app/shared/services/users/users.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(authService, userService, formBuilder, toastr, router) {
        _classCallCheck(this, LoginPage);

        this.authService = authService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.router = router;
        this.loginFormMessages = {
          'username': [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'pattern',
            message: 'Please enter a valid email.'
          }],
          'password': [{
            type: 'required',
            message: 'Password is required.'
          }, {
            type: 'minlength',
            message: 'At least 6 characters long.'
          }]
        }; // Loading

        this.isLoading = false;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
          });
        }
      }, {
        key: "tryLogin",
        value: function tryLogin(value) {
          console.log(value);
        }
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
        key: "tipu",
        value: function tipu() {
          this.loginForm.controls['username'].setValue('syafiqbasri@pipeline.com.my');
          this.loginForm.controls['password'].setValue('PabloEscobar');
          this.login();
        }
      }, {
        key: "navigateHomePage",
        value: function navigateHomePage() {
          this.router.navigate(['/core/dashboard'], {
            replaceUrl: true
          });
        }
      }, {
        key: "navigatePage",
        value: function navigatePage(path) {
          this.router.navigate([path]);
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/auth/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=auth-login-login-module-es5.js.map