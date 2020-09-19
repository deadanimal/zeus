(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>auth-layout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AuthLayoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutPageRoutingModule", function() { return AuthLayoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_layout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-layout.page */ "./src/app/layouts/auth-layout/auth-layout.page.ts");




const routes = [
    {
        path: '',
        component: _auth_layout_page__WEBPACK_IMPORTED_MODULE_3__["AuthLayoutPage"]
    }
];
let AuthLayoutPageRoutingModule = class AuthLayoutPageRoutingModule {
};
AuthLayoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthLayoutPageRoutingModule);



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutPageModule", function() { return AuthLayoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _auth_layout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-layout-routing.module */ "./src/app/layouts/auth-layout/auth-layout-routing.module.ts");
/* harmony import */ var _auth_layout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-layout.page */ "./src/app/layouts/auth-layout/auth-layout.page.ts");







let AuthLayoutPageModule = class AuthLayoutPageModule {
};
AuthLayoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _auth_layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutPageRoutingModule"]
        ],
        declarations: [_auth_layout_page__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutPage"]]
    })
], AuthLayoutPageModule);



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.page.ts ***!
  \*********************************************************/
/*! exports provided: AuthLayoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutPage", function() { return AuthLayoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AuthLayoutPage = class AuthLayoutPage {
    constructor() { }
    ngOnInit() {
    }
};
AuthLayoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-layout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth-layout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./auth-layout.page.scss */ "./src/app/layouts/auth-layout/auth-layout.page.scss")).default]
    })
], AuthLayoutPage);



/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module-es2015.js.map