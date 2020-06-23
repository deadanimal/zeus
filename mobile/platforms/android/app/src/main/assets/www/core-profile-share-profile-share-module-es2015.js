(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-profile-share-profile-share-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-share/profile-share.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-share/profile-share.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n      defaultHref=\"/core/profile\"\n      routerLink=\"/core/profile\"\n      routerDirection=\"back\"\n      text=\"\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Share</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list class=\"ion-no-margin list-core\" mode=\"ios\">\n    <ion-list-header lines=\"none\" mode=\"ios\">\n\t\t\t<h3>Share application</h3>\n\t\t</ion-list-header>\n\n    <ion-item lines=\"none\" detail (click)=\"rate()\">\n      <ion-icon name=\"star-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n      <ion-label>Rate this app</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/core/profile-share/profile-share-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/profile-share/profile-share-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: ProfileSharePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSharePageRoutingModule", function() { return ProfileSharePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_share_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-share.page */ "./src/app/core/profile-share/profile-share.page.ts");




const routes = [
    {
        path: '',
        component: _profile_share_page__WEBPACK_IMPORTED_MODULE_3__["ProfileSharePage"]
    }
];
let ProfileSharePageRoutingModule = class ProfileSharePageRoutingModule {
};
ProfileSharePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileSharePageRoutingModule);



/***/ }),

/***/ "./src/app/core/profile-share/profile-share.module.ts":
/*!************************************************************!*\
  !*** ./src/app/core/profile-share/profile-share.module.ts ***!
  \************************************************************/
/*! exports provided: ProfileSharePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSharePageModule", function() { return ProfileSharePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_share_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-share-routing.module */ "./src/app/core/profile-share/profile-share-routing.module.ts");
/* harmony import */ var _profile_share_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-share.page */ "./src/app/core/profile-share/profile-share.page.ts");







let ProfileSharePageModule = class ProfileSharePageModule {
};
ProfileSharePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_share_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileSharePageRoutingModule"]
        ],
        declarations: [_profile_share_page__WEBPACK_IMPORTED_MODULE_6__["ProfileSharePage"]]
    })
], ProfileSharePageModule);



/***/ }),

/***/ "./src/app/core/profile-share/profile-share.page.scss":
/*!************************************************************!*\
  !*** ./src/app/core/profile-share/profile-share.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZmlsZS1zaGFyZS9wcm9maWxlLXNoYXJlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/profile-share/profile-share.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/profile-share/profile-share.page.ts ***!
  \**********************************************************/
/*! exports provided: ProfileSharePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSharePage", function() { return ProfileSharePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProfileSharePage = class ProfileSharePage {
    constructor() { }
    ngOnInit() {
    }
    rate() {
    }
};
ProfileSharePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-share',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-share.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-share/profile-share.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-share.page.scss */ "./src/app/core/profile-share/profile-share.page.scss")).default]
    })
], ProfileSharePage);



/***/ })

}]);
//# sourceMappingURL=core-profile-share-profile-share-module-es2015.js.map