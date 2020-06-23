(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-profile-about-profile-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-about/profile-about.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-about/profile-about.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n      defaultHref=\"/core/profile\"\n      routerLink=\"/core/profile\"\n      routerDirection=\"back\"\n      text=\"\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen>\n  <ion-list class=\"ion-no-margin list-core\" mode=\"ios\">\n    <ion-list-header lines=\"none\" mode=\"ios\">\n\t\t\t<h3>About application</h3>\n\t\t</ion-list-header>\n\n    <ion-item lines=\"none\">\n      <ion-icon name=\"star-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h4>Application version</h4>\n        <p>Zeus 0.1.0-beta</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-icon name=\"information-circle-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h4>Firmware version</h4>\n        <p>Zeus hardware 0.1.0-beta</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-icon name=\"information-circle-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h4>Legal information</h4>\n        <p>Copyright 2020 Pipeline Network Sdn. Bhd. All rights reserved</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/core/profile-about/profile-about-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/profile-about/profile-about-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ProfileAboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAboutPageRoutingModule", function() { return ProfileAboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-about.page */ "./src/app/core/profile-about/profile-about.page.ts");




const routes = [
    {
        path: '',
        component: _profile_about_page__WEBPACK_IMPORTED_MODULE_3__["ProfileAboutPage"]
    }
];
let ProfileAboutPageRoutingModule = class ProfileAboutPageRoutingModule {
};
ProfileAboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileAboutPageRoutingModule);



/***/ }),

/***/ "./src/app/core/profile-about/profile-about.module.ts":
/*!************************************************************!*\
  !*** ./src/app/core/profile-about/profile-about.module.ts ***!
  \************************************************************/
/*! exports provided: ProfileAboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAboutPageModule", function() { return ProfileAboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-about-routing.module */ "./src/app/core/profile-about/profile-about-routing.module.ts");
/* harmony import */ var _profile_about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-about.page */ "./src/app/core/profile-about/profile-about.page.ts");







let ProfileAboutPageModule = class ProfileAboutPageModule {
};
ProfileAboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_about_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileAboutPageRoutingModule"]
        ],
        declarations: [_profile_about_page__WEBPACK_IMPORTED_MODULE_6__["ProfileAboutPage"]]
    })
], ProfileAboutPageModule);



/***/ }),

/***/ "./src/app/core/profile-about/profile-about.page.scss":
/*!************************************************************!*\
  !*** ./src/app/core/profile-about/profile-about.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZmlsZS1hYm91dC9wcm9maWxlLWFib3V0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/profile-about/profile-about.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/profile-about/profile-about.page.ts ***!
  \**********************************************************/
/*! exports provided: ProfileAboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAboutPage", function() { return ProfileAboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProfileAboutPage = class ProfileAboutPage {
    constructor() { }
    ngOnInit() {
    }
};
ProfileAboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-about.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-about/profile-about.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-about.page.scss */ "./src/app/core/profile-about/profile-about.page.scss")).default]
    })
], ProfileAboutPage);



/***/ })

}]);
//# sourceMappingURL=core-profile-about-profile-about-module-es2015.js.map