(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-bill-detail-bill-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/bill-detail/bill-detail.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/bill-detail/bill-detail.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button \n        defaultHref=\"/core/bills\"\n        routerLink=\"/core/bills\"\n        routerDirection=\"back\"\n        text=\"\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Bill detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list\n    mode=\"ios\"\n    class=\"ion-no-margin list-core\"\n  >\n    <ion-list-header mode=\"ios\">\n      <h3>Bill statement</h3>\n    </ion-list-header>\n    \n    <ion-item lines=\"none\">\n      <ion-label>\n        <h3>Date</h3>\n      </ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-wrap ion-text-right\">\n        05/04/2020\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label>\n        <h3>Account no.</h3>\n      </ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-wrap ion-text-right\">\n        10812310241\n      </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label>\n        <h3>Amount paid</h3>\n      </ion-label>\n      <ion-label slot=\"end\" class=\"ion-text-wrap ion-text-right\">\n        <h3><span class=\"text-small\">RM</span>200.00</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/core/bill-detail/bill-detail-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/bill-detail/bill-detail-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BillDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetailPageRoutingModule", function() { return BillDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bill_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill-detail.page */ "./src/app/core/bill-detail/bill-detail.page.ts");




const routes = [
    {
        path: '',
        component: _bill_detail_page__WEBPACK_IMPORTED_MODULE_3__["BillDetailPage"]
    }
];
let BillDetailPageRoutingModule = class BillDetailPageRoutingModule {
};
BillDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BillDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/core/bill-detail/bill-detail.module.ts":
/*!********************************************************!*\
  !*** ./src/app/core/bill-detail/bill-detail.module.ts ***!
  \********************************************************/
/*! exports provided: BillDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetailPageModule", function() { return BillDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bill_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bill-detail-routing.module */ "./src/app/core/bill-detail/bill-detail-routing.module.ts");
/* harmony import */ var _bill_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bill-detail.page */ "./src/app/core/bill-detail/bill-detail.page.ts");







let BillDetailPageModule = class BillDetailPageModule {
};
BillDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bill_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["BillDetailPageRoutingModule"]
        ],
        declarations: [_bill_detail_page__WEBPACK_IMPORTED_MODULE_6__["BillDetailPage"]]
    })
], BillDetailPageModule);



/***/ }),

/***/ "./src/app/core/bill-detail/bill-detail.page.scss":
/*!********************************************************!*\
  !*** ./src/app/core/bill-detail/bill-detail.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYmlsbC1kZXRhaWwvYmlsbC1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/bill-detail/bill-detail.page.ts":
/*!******************************************************!*\
  !*** ./src/app/core/bill-detail/bill-detail.page.ts ***!
  \******************************************************/
/*! exports provided: BillDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetailPage", function() { return BillDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BillDetailPage = class BillDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
BillDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bill-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bill-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/bill-detail/bill-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bill-detail.page.scss */ "./src/app/core/bill-detail/bill-detail.page.scss")).default]
    })
], BillDetailPage);



/***/ })

}]);
//# sourceMappingURL=core-bill-detail-bill-detail-module-es2015.js.map