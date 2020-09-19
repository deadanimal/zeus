(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\" fullscreen>\n\t<div class=\"main-content\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<img src=\"../assets/thunder.svg\">\n\t\t\t\t\t<form\n\t\t\t\t\t\tclass=\"form\"\n\t\t\t\t\t\t[formGroup]=\"loginForm\"\n\t\t\t\t\t\t(ngSubmit)=\"login()\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<p class=\"ion-text-center ion-padding-bottom\">Please enter your credentials</p>\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\">Your email</ion-label>\n\t\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"username\" placeholder=\"Your Email\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\n\t\t\t\t\t\t<div class=\"validation-errors\">\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of loginFormMessages.username\">\n\t\t\t\t\t\t\t\t<div \n\t\t\t\t\t\t\t\t\tclass=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"loginForm.get('username').hasError(message.type) && (loginForm.get('username').dirty || loginForm.get('username').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t{{ message.message }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\">Password</ion-label>\n\t\t\t\t\t\t\t<ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\n\t\t\t\t\t\t<div class=\"validation-errors ion-text-right\">\n\t\t\t\t\t\t\t<p><a (click)=\"navigatePage('/auth/forgot')\">Forgot Password </a></p>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t<div class=\"ion-text-center\">\n\t\t\t\t\t\t\t<ion-button \n\t\t\t\t\t\t\t\t*ngIf=\"!isLoading\"\n\t\t\t\t\t\t\t\ttype=\"submit\"\n\t\t\t\t\t\t\t\t[disabled]=\"!loginForm.valid\"\n\t\t\t\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tLogin\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t<ion-button \n\t\t\t\t\t\t\t\tdisabled \n\t\t\t\t\t\t\t\t*ngIf=\"isLoading\"\n\t\t\t\t\t\t\t\ttype=\"submit\"\n\t\t\t\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-spinner name=\"bubbles\"></ion-spinner>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t<p>No account yet? <a (click)=\"navigatePage('/auth/register')\">Create an account.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/auth/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/auth/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/auth/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-content {\n  display: grid;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n  height: 100vh;\n}\n\n.form {\n  min-width: 250px !important;\n}\n\n.form .validation-errors {\n  min-height: 25px;\n}\n\n.form .error-message {\n  color: var(--ion-color-danger);\n  text-align: right;\n  font-size: 0.8em;\n  padding-top: 5px;\n}\n\n.form ion-input {\n  --color: var(--ion-color-medium);\n  --placeholder-font-weight: 400;\n  --background: #f2f2f2;\n  border-radius: 15px;\n  --padding-start: 15px !important;\n  margin-top: 0.7rem;\n}\n\n.form ion-item {\n  --background: transparent;\n  --inner-padding-end: 0;\n  border-radius: 15px;\n}\n\nimg {\n  max-width: 8rem;\n}\n\nion-button {\n  --border-radius: 50px;\n  --box-shadow: none;\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 40px;\n}\n\n.copyright {\n  font-size: 0.8rem;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Ta3Vuay9za3Vuay0wMDItemV1cy9tb2JpbGUtb3BlcmF0aW9uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7QUNDSjs7QURDSTtFQUNJLGdCQUFBO0FDQ1I7O0FERUk7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREdJO0VBQ0ksZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDRFI7O0FESUk7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNGUjs7QURNQTtFQUNJLGVBQUE7QUNISjs7QURhQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRGFBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4gIFxuLmZvcm0ge1xuICAgIG1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgXG4gICAgLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgICAgICAgbWluLWhlaWdodDogMjVweDtcbiAgICB9XG4gIFxuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG4gIFxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcbiAgICB9XG4gIFxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB9XG59XG4gIFxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDhyZW07XG59XG4gIFxuLy8gQXZvaWQga2V5Ym9hcmQgdG8gaGlkZSBvciBtb3ZlIGVsZW1lbnRzIGluIHRoZSBVSVxuLy8gQG1lZGlhIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuLy8gICAgIGltZyB7XG4vLyAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgIH1cbi8vIH1cbiAgXG5pb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGNvbG9yOiBibGFjaztcbn0iLCIubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uZm9ybSB7XG4gIG1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbn1cbi5mb3JtIC52YWxpZGF0aW9uLWVycm9ycyB7XG4gIG1pbi1oZWlnaHQ6IDI1cHg7XG59XG4uZm9ybSAuZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uZm9ybSBpb24taW5wdXQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwLjdyZW07XG59XG4uZm9ybSBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogOHJlbTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");






let LoginPage = class LoginPage {
    constructor(authService, formBuilder, toastr, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.router = router;
        this.loginFormMessages = {
            'username': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'At least 6 characters long.' }
            ]
        };
        // Loading
        this.isLoading = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
    }
    tryLogin(value) {
        console.log(value);
    }
    login() {
        this.isLoading = true;
        console.log(this.loginForm.value);
        this.authService.obtainToken(this.loginForm.value).subscribe(() => {
            // Success
            this.isLoading = false;
        }, () => {
            // Failed
            this.isLoading = false;
        }, () => {
            // After
            this.toastr.openToastr('Welcome back');
            this.navigateHomePage();
        });
    }
    navigateHomePage() {
        this.router.navigate(['/core/dashboard'], {
            replaceUrl: true
        });
    }
    navigatePage(path) {
        this.router.navigate([path]);
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module-es2015.js.map