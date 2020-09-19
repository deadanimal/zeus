(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n\t<ion-toolbar mode=\"ios\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button \n\t\t\t\tdefaultHref=\"/auth/login\"\n\t\t\t\trouterLink=\"/auth/login\"\n\t\t\t\trouterDirection=\"back\"\n\t\t\t>\n\t\t\t</ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fullscreen>\n\t<div class=\"main-content\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col>\n\t\t\t\t\t<img src=\"../assets/img/register.svg\">\n\t\t\t\t\t<p class=\"ion-text-center ion-padding-bottom\">Please enter your data</p>\n\t\n\t\t\t\t\t<form\n\t\t\t\t\t\tclass=\"form\"\n\t\t\t\t\t\t[formGroup]=\"registerForm\"\n\t\t\t\t\t\t(ngSubmit)=\"register()\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\">Your Username</ion-label>\n\t\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"username\" placeholder=\"Username\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\n\t\t\t\t\t\t<div class=\"validation-errors\">\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of registerFormMessages.username\">\n\t\t\t\t\t\t\t\t<div \n\t\t\t\t\t\t\t\t\tclass=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"registerForm.get('username').hasError(message.type) && (registerForm.get('username').dirty || registerForm.get('username').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t{{ message.message }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\">Your Password</ion-label>\n\t\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"password1\" placeholder=\"Password\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\n\t\t\t\t\t\t<div class=\"validation-errors\">\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of registerFormMessages.password1\">\n\t\t\t\t\t\t\t\t<div \n\t\t\t\t\t\t\t\t\tclass=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"registerForm.get('password1').hasError(message.type) && (registerForm.get('password1').dirty || registerForm.get('password1').touched)\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t{{ message.message }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-no-padding ion-no-margin\">\n\t\t\t\t\t\t\t<ion-label position=\"stacked\">Confirm Your Password</ion-label>\n\t\t\t\t\t\t\t<ion-input type=\"password\" formControlName=\"password2\" placeholder=\"Confirm password\"></ion-input>\n\t\t\t\t\t\t</ion-item>\n\t\n\t\t\t\t\t\t<div class=\"validation-errors\">\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let message of registerFormMessages.password2\">\n\t\t\t\t\t\t\t\t<div \n\t\t\t\t\t\t\t\t\tclass=\"error-message\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"registerForm.get('password2').hasError(message.type) && (registerForm.get('password2').dirty || registerForm.get('password2').touched)\">\n\t\t\t\t\t\t\t\t\t{{ message.message }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t<div class=\"ion-text-center\">\n\t\t\t\t\t\t\t<ion-button \n\t\t\t\t\t\t\t\t*ngIf=\"!isLoading\"\n\t\t\t\t\t\t\t\ttype=\"submit\"\n\t\t\t\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t\t[disabled]=\"!registerForm.valid\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tRegister\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\tdisabled\n\t\t\t\t\t\t\t\t*ngIf=\"isLoading\"\n\t\t\t\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t\t\t\tmode=\"ios\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-spinner name=\"bubbles\"></ion-spinner>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t<p class=\"go-to-login\">\n\t\t\t\t\t\t\t\tAlready have an account? \n\t\t\t\t\t\t\t\t<a (click)=\"navigatePage('/auth/login')\">Try to Log In.</a>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/auth/register/register-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/register/register-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/auth/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/register/register.module.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/auth/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/auth/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/auth/register/register.page.scss":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-content {\n  display: grid;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n  height: 100%;\n}\n\n.form {\n  min-width: 250px !important;\n}\n\n.form .validation-errors {\n  min-height: 25px;\n}\n\n.form .error-message {\n  color: var(--ion-color-danger);\n  text-align: right;\n  font-size: 0.8em;\n  padding-top: 5px;\n}\n\n.form ion-input {\n  --color: var(--ion-color-medium);\n  --placeholder-font-weight: 400;\n  --background: #F2F2F2;\n  border-radius: 15px;\n  --padding-start: 15px !important;\n  margin-top: 0.7rem;\n}\n\n.form ion-item {\n  --background: transparent;\n  --inner-padding-end: 0;\n  border-radius: 15px;\n}\n\nimg {\n  max-width: 8rem;\n}\n\nion-button {\n  --border-radius: 50px;\n  --box-shadow: none;\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 40px;\n}\n\n.copyright {\n  font-size: 0.8rem;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Ta3Vuay9za3Vuay0wMDItemV1cy9tb2JpbGUtb3BlcmF0aW9uL3NyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7QUNDSjs7QURDSTtFQUNJLGdCQUFBO0FDQ1I7O0FERUk7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREdJO0VBQ0ksZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDRFI7O0FESUk7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNGUjs7QURNQTtFQUNJLGVBQUE7QUNISjs7QURNQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1BO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmZvcm0ge1xuICAgIG1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgXG4gICAgLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgICAgICAgbWluLWhlaWdodDogMjVweDtcbiAgICB9XG4gIFxuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG4gIFxuICAgIGlvbi1pbnB1dCB7XG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcbiAgICB9XG4gIFxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB9XG59XG4gIFxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDhyZW07XG59XG5cbmlvbi1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNvcHlyaWdodCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgY29sb3I6IGJsYWNrO1xufSIsIi5tYWluLWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZvcm0ge1xuICBtaW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG59XG4uZm9ybSAudmFsaWRhdGlvbi1lcnJvcnMge1xuICBtaW4taGVpZ2h0OiAyNXB4O1xufVxuLmZvcm0gLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmZvcm0gaW9uLWlucHV0IHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgLS1iYWNrZ3JvdW5kOiAjRjJGMkYyO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xufVxuLmZvcm0gaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDhyZW07XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/register/register.page.ts":
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");






let RegisterPage = class RegisterPage {
    constructor(authService, formBuilder, router, toastr) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastr = toastr;
        this.registerFormMessages = {
            'username': [
                { type: 'required', message: 'Name is required.' },
                { type: 'pattern', message: 'Enter a valid name.' }
            ],
            'password1': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'At least 6 characters long.' }
            ],
            'password2': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'At least 6 characters long.' }
            ]
        };
        // Checker
        this.isLoading = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
    }
    register() {
        this.isLoading = true;
        this.authService.registerAccount(this.registerForm.value).subscribe(() => {
            // Success
            this.isLoading = false;
        }, () => {
            // Failed
            this.isLoading = false;
        }, () => {
            // After
            this.toastr.openToastr('Successfully registered your account');
        });
    }
    navigatePage(path) {
        this.router.navigate([path]);
    }
};
RegisterPage.ctorParameters = () => [
    { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/auth/register/register.page.scss")).default]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=auth-register-register-module-es2015.js.map