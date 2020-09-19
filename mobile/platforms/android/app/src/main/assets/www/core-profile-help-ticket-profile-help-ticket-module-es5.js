function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-profile-help-ticket-profile-help-ticket-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-help-ticket/profile-help-ticket.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-help-ticket/profile-help-ticket.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreProfileHelpTicketProfileHelpTicketPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n      defaultHref=\"/core/profile\"\n      routerLink=\"/core/profile\"\n      routerDirection=\"back\"\n      text=\"\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Ticket</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-padding\">\n  <ion-toolbar color=\"primary\">\n    <ion-textarea (keyup.enter)=\"sendMessage()\" [(ngModel)]=\"input\" placeholder=\"Enter your message here\" name=\"message\"></ion-textarea>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"send-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/core/profile-help-ticket/profile-help-ticket-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/core/profile-help-ticket/profile-help-ticket-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: ProfileHelpTicketPageRoutingModule */

  /***/
  function srcAppCoreProfileHelpTicketProfileHelpTicketRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileHelpTicketPageRoutingModule", function () {
      return ProfileHelpTicketPageRoutingModule;
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


    var _profile_help_ticket_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-help-ticket.page */
    "./src/app/core/profile-help-ticket/profile-help-ticket.page.ts");

    var routes = [{
      path: '',
      component: _profile_help_ticket_page__WEBPACK_IMPORTED_MODULE_3__["ProfileHelpTicketPage"]
    }];

    var ProfileHelpTicketPageRoutingModule = function ProfileHelpTicketPageRoutingModule() {
      _classCallCheck(this, ProfileHelpTicketPageRoutingModule);
    };

    ProfileHelpTicketPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfileHelpTicketPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/profile-help-ticket/profile-help-ticket.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/core/profile-help-ticket/profile-help-ticket.module.ts ***!
    \************************************************************************/

  /*! exports provided: ProfileHelpTicketPageModule */

  /***/
  function srcAppCoreProfileHelpTicketProfileHelpTicketModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileHelpTicketPageModule", function () {
      return ProfileHelpTicketPageModule;
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


    var _profile_help_ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-help-ticket-routing.module */
    "./src/app/core/profile-help-ticket/profile-help-ticket-routing.module.ts");
    /* harmony import */


    var _profile_help_ticket_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-help-ticket.page */
    "./src/app/core/profile-help-ticket/profile-help-ticket.page.ts");

    var ProfileHelpTicketPageModule = function ProfileHelpTicketPageModule() {
      _classCallCheck(this, ProfileHelpTicketPageModule);
    };

    ProfileHelpTicketPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_help_ticket_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileHelpTicketPageRoutingModule"]],
      declarations: [_profile_help_ticket_page__WEBPACK_IMPORTED_MODULE_6__["ProfileHelpTicketPage"]]
    })], ProfileHelpTicketPageModule);
    /***/
  },

  /***/
  "./src/app/core/profile-help-ticket/profile-help-ticket.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/core/profile-help-ticket/profile-help-ticket.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreProfileHelpTicketProfileHelpTicketPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZmlsZS1oZWxwLXRpY2tldC9wcm9maWxlLWhlbHAtdGlja2V0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/core/profile-help-ticket/profile-help-ticket.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/core/profile-help-ticket/profile-help-ticket.page.ts ***!
    \**********************************************************************/

  /*! exports provided: ProfileHelpTicketPage */

  /***/
  function srcAppCoreProfileHelpTicketProfileHelpTicketPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileHelpTicketPage", function () {
      return ProfileHelpTicketPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileHelpTicketPage = /*#__PURE__*/function () {
      function ProfileHelpTicketPage() {
        _classCallCheck(this, ProfileHelpTicketPage);
      }

      _createClass(ProfileHelpTicketPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendMessage",
        value: function sendMessage() {}
      }]);

      return ProfileHelpTicketPage;
    }();

    ProfileHelpTicketPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-help-ticket',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-help-ticket.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-help-ticket/profile-help-ticket.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-help-ticket.page.scss */
      "./src/app/core/profile-help-ticket/profile-help-ticket.page.scss"))["default"]]
    })], ProfileHelpTicketPage);
    /***/
  }
}]);
//# sourceMappingURL=core-profile-help-ticket-profile-help-ticket-module-es5.js.map