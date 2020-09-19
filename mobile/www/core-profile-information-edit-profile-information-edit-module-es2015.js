(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-profile-information-edit-profile-information-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-information-edit/profile-information-edit.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-information-edit/profile-information-edit.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n      defaultHref=\"/core/profile\"\n      routerLink=\"/core/profile\"\n      routerDirection=\"back\"\n      text=\"\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Information</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list class=\"ion-no-margin list-core\" mode=\"ios\">\n    <ion-list-header lines=\"none\" mode=\"ios\">\n\t\t\t<h3>Edit information</h3>\n    </ion-list-header>\n\n    <form [formGroup]=\"userForm\">\n      <ion-item class=\"item-form\" lines=\"none\" *ngIf=\"formType == 'name'\">\n        <ion-label position=\"stacked\" mode=\"ios\">Name</ion-label>\n        <ion-input formControlName=\"name\" mode=\"ios\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"item-form\" lines=\"none\" *ngIf=\"formType == 'billing_address'\">\n        <ion-label position=\"stacked\" mode=\"ios\">Billing address</ion-label>\n        <ion-textarea formControlName=\"billing_address\" mode=\"ios\"></ion-textarea>\n      </ion-item>\n    </form>\n  </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-no-border\"  transparent>\n  <ion-button\n    class=\"round\" \n    shape=\"round\" \n    expand=\"block\"\n    mode=\"ios\"\n    (click)=\"update()\"\n    *ngIf=\"!isLoading\"\n  >\n    Update\n  </ion-button>\n  <ion-button\n    class=\"round\" \n    shape=\"round\" \n    expand=\"block\"\n    mode=\"ios\"\n    *ngIf=\"isLoading\"\n  >\n    <ion-spinner name=\"bubbles\"></ion-spinner>\n  </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/core/profile-information-edit/profile-information-edit-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/core/profile-information-edit/profile-information-edit-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ProfileInformationEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformationEditPageRoutingModule", function() { return ProfileInformationEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_information_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-information-edit.page */ "./src/app/core/profile-information-edit/profile-information-edit.page.ts");




const routes = [
    {
        path: '',
        component: _profile_information_edit_page__WEBPACK_IMPORTED_MODULE_3__["ProfileInformationEditPage"]
    }
];
let ProfileInformationEditPageRoutingModule = class ProfileInformationEditPageRoutingModule {
};
ProfileInformationEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileInformationEditPageRoutingModule);



/***/ }),

/***/ "./src/app/core/profile-information-edit/profile-information-edit.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/core/profile-information-edit/profile-information-edit.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfileInformationEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformationEditPageModule", function() { return ProfileInformationEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_information_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-information-edit-routing.module */ "./src/app/core/profile-information-edit/profile-information-edit-routing.module.ts");
/* harmony import */ var _profile_information_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-information-edit.page */ "./src/app/core/profile-information-edit/profile-information-edit.page.ts");







let ProfileInformationEditPageModule = class ProfileInformationEditPageModule {
};
ProfileInformationEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_information_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileInformationEditPageRoutingModule"]
        ],
        declarations: [_profile_information_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProfileInformationEditPage"]]
    })
], ProfileInformationEditPageModule);



/***/ }),

/***/ "./src/app/core/profile-information-edit/profile-information-edit.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/core/profile-information-edit/profile-information-edit.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZmlsZS1pbmZvcm1hdGlvbi1lZGl0L3Byb2ZpbGUtaW5mb3JtYXRpb24tZWRpdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/profile-information-edit/profile-information-edit.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/core/profile-information-edit/profile-information-edit.page.ts ***!
  \********************************************************************************/
/*! exports provided: ProfileInformationEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformationEditPage", function() { return ProfileInformationEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users/users.service */ "./src/app/shared/services/users/users.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");






let ProfileInformationEditPage = class ProfileInformationEditPage {
    constructor(userService, activatedRoute, fb, notify, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.notify = notify;
        this.router = router;
        this.formType = 'name';
        // Checker
        this.isLoading = false;
        this.getData();
        this.activatedRoute.queryParams.subscribe((params) => {
            if (params && params.special) {
                this.formType = JSON.parse(params.special);
                // console.log(this.formType)
            }
        });
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            billing_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.billing_address, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]))
        });
    }
    update() {
        this.isLoading = true;
        this.userService.update(this.user.id, this.userForm.value).subscribe(() => {
            this.isLoading = false;
        }, () => {
            this.isLoading = false;
        }, () => {
            this.notify.openToastr('Successfully updated information');
            this.userForm.reset();
            this.navigatePage('/core/profile');
        });
    }
    navigatePage(path) {
        this.router.navigate([path]);
    }
    getData() {
        this.user = this.userService.user;
    }
};
ProfileInformationEditPage.ctorParameters = () => [
    { type: src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProfileInformationEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-information-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-information-edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-information-edit/profile-information-edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-information-edit.page.scss */ "./src/app/core/profile-information-edit/profile-information-edit.page.scss")).default]
    })
], ProfileInformationEditPage);



/***/ })

}]);
//# sourceMappingURL=core-profile-information-edit-profile-information-edit-module-es2015.js.map