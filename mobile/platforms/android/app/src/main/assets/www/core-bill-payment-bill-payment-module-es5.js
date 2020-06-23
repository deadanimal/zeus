function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-bill-payment-bill-payment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/bill-payment/bill-payment.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/bill-payment/bill-payment.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreBillPaymentBillPaymentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button \n        defaultHref=\"/core/bills\"\n        routerLink=\"/core/bills\"\n        routerDirection=\"back\"\n        text=\"\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Pay Bill</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list\n    mode=\"ios\"\n    class=\"ion-no-margin list-core\"\n  >\n    <ion-list-header mode=\"ios\">\n      <h3>Information</h3>\n    </ion-list-header>\n\n    <ion-item lines=\"none\">\n      <ion-label position=\"stacked\" mode=\"ios\">\n        <h3>TNB Account No.</h3>\n        <p>12491241</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-no-border\" transparent>\n  <ion-item lines=\"none\" class=\"item-form\">\n    <ion-label position=\"stacked\" mode=\"ios\">Enter Bill Amount (RM)</ion-label>\n    <ion-input placeholder=\"165.00\" type=\"number\"></ion-input>\n  </ion-item>\n  <ion-button \n    expand=\"block\"\n    class=\"round\" \n    shape=\"round\" \n    mode=\"ios\"\n    color=\"primary\"\n    (click)=\"makePayment()\"\n  >\n    Pay\n  </ion-button>\n</ion-footer>\n\n";
    /***/
  },

  /***/
  "./src/app/core/bill-payment/bill-payment-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/core/bill-payment/bill-payment-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: BillPaymentPageRoutingModule */

  /***/
  function srcAppCoreBillPaymentBillPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillPaymentPageRoutingModule", function () {
      return BillPaymentPageRoutingModule;
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


    var _bill_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bill-payment.page */
    "./src/app/core/bill-payment/bill-payment.page.ts");

    var routes = [{
      path: '',
      component: _bill_payment_page__WEBPACK_IMPORTED_MODULE_3__["BillPaymentPage"]
    }];

    var BillPaymentPageRoutingModule = function BillPaymentPageRoutingModule() {
      _classCallCheck(this, BillPaymentPageRoutingModule);
    };

    BillPaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BillPaymentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/bill-payment/bill-payment.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/bill-payment/bill-payment.module.ts ***!
    \**********************************************************/

  /*! exports provided: BillPaymentPageModule */

  /***/
  function srcAppCoreBillPaymentBillPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillPaymentPageModule", function () {
      return BillPaymentPageModule;
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


    var _bill_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bill-payment-routing.module */
    "./src/app/core/bill-payment/bill-payment-routing.module.ts");
    /* harmony import */


    var _bill_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bill-payment.page */
    "./src/app/core/bill-payment/bill-payment.page.ts");

    var BillPaymentPageModule = function BillPaymentPageModule() {
      _classCallCheck(this, BillPaymentPageModule);
    };

    BillPaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bill_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["BillPaymentPageRoutingModule"]],
      declarations: [_bill_payment_page__WEBPACK_IMPORTED_MODULE_6__["BillPaymentPage"]]
    })], BillPaymentPageModule);
    /***/
  },

  /***/
  "./src/app/core/bill-payment/bill-payment.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/core/bill-payment/bill-payment.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreBillPaymentBillPaymentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYmlsbC1wYXltZW50L2JpbGwtcGF5bWVudC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/core/bill-payment/bill-payment.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/bill-payment/bill-payment.page.ts ***!
    \********************************************************/

  /*! exports provided: BillPaymentPage */

  /***/
  function srcAppCoreBillPaymentBillPaymentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillPaymentPage", function () {
      return BillPaymentPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BillPaymentPage = /*#__PURE__*/function () {
      function BillPaymentPage() {
        _classCallCheck(this, BillPaymentPage);
      }

      _createClass(BillPaymentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BillPaymentPage;
    }();

    BillPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bill-payment',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bill-payment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/bill-payment/bill-payment.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bill-payment.page.scss */
      "./src/app/core/bill-payment/bill-payment.page.scss"))["default"]]
    })], BillPaymentPage);
    /***/
  }
}]);
//# sourceMappingURL=core-bill-payment-bill-payment-module-es5.js.map