(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-profile-information-profile-information-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-information/profile-information.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-information/profile-information.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n      defaultHref=\"/core/profile\"\n      routerLink=\"/core/profile\"\n      routerDirection=\"back\"\n      text=\"\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Information</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list class=\"ion-no-margin list-core\" mode=\"ios\">\n    <ion-list-header lines=\"none\" mode=\"ios\">\n\t\t\t<h3>Information</h3>\n    </ion-list-header>\n    \n    <ion-item lines=\"none\">\n      <!-- <ion-icon name=\"person-outline\" color=\"primary\" slot=\"end\"></ion-icon> -->\n      <ion-label class=\"ion-text-wrap\">\n        <h4>Email</h4>\n        <p>{{user.username}}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail (click)=\"edit('/profile-information-edit', 'name')\">\n      <ion-icon name=\"mail-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h4>Name</h4>\n        <p>{{user.name}}</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail (click)=\"edit('/profile-information-edit', 'billing_address')\">\n      <ion-icon name=\"home-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n      <ion-label class=\"ion-text-wrap\">\n        <h4>Billing address</h4>\n        <p>{{user.billing_address}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/core/profile-information/profile-information-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/core/profile-information/profile-information-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ProfileInformationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformationPageRoutingModule", function() { return ProfileInformationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-information.page */ "./src/app/core/profile-information/profile-information.page.ts");




const routes = [
    {
        path: '',
        component: _profile_information_page__WEBPACK_IMPORTED_MODULE_3__["ProfileInformationPage"]
    }
];
let ProfileInformationPageRoutingModule = class ProfileInformationPageRoutingModule {
};
ProfileInformationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileInformationPageRoutingModule);



/***/ }),

/***/ "./src/app/core/profile-information/profile-information.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/profile-information/profile-information.module.ts ***!
  \************************************************************************/
/*! exports provided: ProfileInformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformationPageModule", function() { return ProfileInformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_information_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-information-routing.module */ "./src/app/core/profile-information/profile-information-routing.module.ts");
/* harmony import */ var _profile_information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-information.page */ "./src/app/core/profile-information/profile-information.page.ts");







let ProfileInformationPageModule = class ProfileInformationPageModule {
};
ProfileInformationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_information_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileInformationPageRoutingModule"]
        ],
        declarations: [_profile_information_page__WEBPACK_IMPORTED_MODULE_6__["ProfileInformationPage"]]
    })
], ProfileInformationPageModule);



/***/ }),

/***/ "./src/app/core/profile-information/profile-information.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/core/profile-information/profile-information.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZmlsZS1pbmZvcm1hdGlvbi9wcm9maWxlLWluZm9ybWF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/profile-information/profile-information.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/profile-information/profile-information.page.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileInformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformationPage", function() { return ProfileInformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/users/users.service */ "./src/app/shared/services/users/users.service.ts");




let ProfileInformationPage = class ProfileInformationPage {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.getData();
    }
    ngOnInit() {
    }
    navigatePage(path) {
        this.router.navigate([path]);
    }
    getData() {
        this.user = this.userService.user;
    }
    edit(path, type) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(type)
            }
        };
        this.router.navigate([path], navigationExtras);
    }
};
ProfileInformationPage.ctorParameters = () => [
    { type: src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileInformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-information',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-information.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-information/profile-information.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-information.page.scss */ "./src/app/core/profile-information/profile-information.page.scss")).default]
    })
], ProfileInformationPage);



/***/ })

}]);
//# sourceMappingURL=core-profile-information-profile-information-module-es2015.js.map