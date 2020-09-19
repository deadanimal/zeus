(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-forgot-forgot-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n\t<ion-toolbar mode=\"ios\" color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button \n\t\t\t\tdefaultHref=\"/auth/login\"\n\t\t\t\trouterLink=\"/auth/login\"\n\t\t\t\trouterDirection=\"back\"\n\t\t\t\ttext=\"\"\n\t\t\t>\n\t\t\t</ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<div class=\"main-content\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<img src=\"assets/red.png\">\n\t\t\t\t\t<h2 class=\"title ion-text-center\">Reset password</h2>\n\t\t\t\t\t<p \n\t\t\t\t\t\tclass=\"subtitle\" \n\t\t\t\t\t\tstyle=\"max-width: 240px; text-align: center; padding-bottom: 20px;\"\n\t\t\t\t\t>\n\t\t\t\t\t\tEnter your email and we will send you a reset link\n\t\t\t\t\t</p>\n\t\t\n\t\t\t\t\t<form class=\"form\" [formGroup]=\"forgotForm\">\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\">Your Email</ion-label>\n\t\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"email\" placeholder=\"Enter your email\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\t\n\t\t\t\t\t\t<div class=\"validation-errors\">\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of forgotFormMessages.email\">\n\t\t\t\t\t\t\t\t<div \n\t\t\t\t\t\t\t\t\tclass=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"forgotForm.get('email').hasError(message.type) && (forgotForm.get('email').dirty || forgotForm.get('email').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t{{ message.message }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t<div class=\"ion-text-center\">\n\t\t\t\t\t\t\t<ion-button \n\t\t\t\t\t\t\t\t*ngIf=\"!isLoading\"\n\t\t\t\t\t\t\t\ttype=\"submit\"\n\t\t\t\t\t\t\t\t[disabled]=\"!forgotForm.valid\"\n\t\t\t\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t\t\t\t(click)=\"resetPassword()\" \n\t\t\t\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\tdisabled\n\t\t\t\t\t\t\t\t*ngIf=\"isLoading\"\n\t\t\t\t\t\t\t\ttype=\"submit\"\n\t\t\t\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-spinner name=\"bubbles\"></ion-spinner>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/auth/forgot/forgot-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/forgot/forgot-routing.module.ts ***!
  \******************************************************/
/*! exports provided: ForgotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function() { return ForgotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.page */ "./src/app/auth/forgot/forgot.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/forgot/forgot.module.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/forgot/forgot.module.ts ***!
  \**********************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-routing.module */ "./src/app/auth/forgot/forgot-routing.module.ts");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/auth/forgot/forgot.page.ts");







let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"]
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })
], ForgotPageModule);



/***/ }),

/***/ "./src/app/auth/forgot/forgot.page.scss":
/*!**********************************************!*\
  !*** ./src/app/auth/forgot/forgot.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-content {\n  display: grid;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n  height: 100%;\n}\n\n.form {\n  min-width: 250px !important;\n}\n\n.form .validation-errors {\n  min-height: 25px;\n}\n\n.form .error-message {\n  color: var(--ion-color-danger);\n  text-align: right;\n  font-size: 0.8em;\n  padding-top: 5px;\n}\n\n.form ion-input {\n  --color: var(--ion-color-medium);\n  --placeholder-font-weight: 400;\n  --background: #F2F2F2;\n  border-radius: 15px;\n  --padding-start: 15px !important;\n  margin-top: 0.7rem;\n}\n\n.form ion-item {\n  --background: transparent;\n  --inner-padding-end: 0;\n  border-radius: 15px;\n}\n\nimg {\n  max-width: 8rem;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\nion-button {\n  --border-radius: 50px;\n  --box-shadow: none;\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Ta3Vuay9za3Vuay0wMDItemV1cy9tb2JpbGUvc3JjL2FwcC9hdXRoL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIiwic3JjL2FwcC9hdXRoL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7QUNDSjs7QURDSTtFQUNJLGdCQUFBO0FDQ1I7O0FERUk7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREdJO0VBQ0ksZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDRFI7O0FESUk7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNGUjs7QURNQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0hKOztBRE1BO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZm9ybSB7XG4gICAgbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICBcbiAgICAudmFsaWRhdGlvbi1lcnJvcnMge1xuICAgICAgICBtaW4taGVpZ2h0OiAyNXB4O1xuICAgIH1cbiAgXG4gICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIH1cbiAgXG4gICAgaW9uLWlucHV0IHtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMC43cmVtO1xuICAgIH1cbiAgXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIH1cbn1cbiAgXG5pbWcge1xuICAgIG1heC13aWR0aDogOHJlbTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn0iLCIubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mb3JtIHtcbiAgbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xufVxuLmZvcm0gLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgbWluLWhlaWdodDogMjVweDtcbn1cbi5mb3JtIC5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5mb3JtIGlvbi1pbnB1dCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAuN3JlbTtcbn1cbi5mb3JtIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiA4cmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/forgot/forgot.page.ts":
/*!********************************************!*\
  !*** ./src/app/auth/forgot/forgot.page.ts ***!
  \********************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");






let ForgotPage = class ForgotPage {
    constructor(authService, formBuilder, router, toastr) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.forgotFormMessages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ]
        };
        // Checker
        this.isLoading = false;
    }
    ngOnInit() {
        this.forgotForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });
    }
    resetPassword() {
        this.isLoading = true;
        this.authService.resetPassword(this.forgotForm.value).subscribe(() => {
            // Success
            this.isLoading = false;
        }, () => {
            // Failed
            this.isLoading = false;
        }, () => {
            // After
            this.toastr.openToastr('A reset link has been sent to your email');
        });
    }
    navigatePage(path) {
        this.router.navigate([path]);
    }
};
ForgotPage.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"] }
];
ForgotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot/forgot.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot.page.scss */ "./src/app/auth/forgot/forgot.page.scss")).default]
    })
], ForgotPage);



/***/ })

}]);
//# sourceMappingURL=auth-forgot-forgot-module-es2015.js.map