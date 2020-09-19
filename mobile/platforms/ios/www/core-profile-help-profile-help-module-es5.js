function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-profile-help-profile-help-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-help/profile-help.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-help/profile-help.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreProfileHelpProfileHelpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n      defaultHref=\"/core/profile\"\n      routerLink=\"/core/profile\"\n      routerDirection=\"back\"\n      text=\"\"\n      >\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Help</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list\n    mode=\"ios\"\n    class=\"ion-no-margin list-core\"\n  >\n    <ion-list-header mode=\"ios\">\n      <h3>New ticket</h3>\n    </ion-list-header>\n\n    <ion-item lines=\"none\" detail (click)=\"navigatePage('/profile-help-ticket')\">\n      <ion-icon name=\"reader-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n      <ion-label>\n        <h3>Create new ticket</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-list-header mode=\"ios\">\n      <h3>Ticket history</h3>\n    </ion-list-header>\n\n    <ion-item lines=\"none\" detail (click)=\"navigatePage('/profile-help-ticket')\">\n      <ion-avatar slot=\"start\">\n\t\t\t\t<img [src]=\"iconSpeech\">\n\t\t\t</ion-avatar>\n      <ion-label class=\"ion-text-wrap\">\n        <h4>Ticket</h4>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/core/profile-help/profile-help-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/core/profile-help/profile-help-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: ProfileHelpPageRoutingModule */

  /***/
  function srcAppCoreProfileHelpProfileHelpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileHelpPageRoutingModule", function () {
      return ProfileHelpPageRoutingModule;
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


    var _profile_help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-help.page */
    "./src/app/core/profile-help/profile-help.page.ts");

    var routes = [{
      path: '',
      component: _profile_help_page__WEBPACK_IMPORTED_MODULE_3__["ProfileHelpPage"]
    }];

    var ProfileHelpPageRoutingModule = function ProfileHelpPageRoutingModule() {
      _classCallCheck(this, ProfileHelpPageRoutingModule);
    };

    ProfileHelpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfileHelpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/profile-help/profile-help.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/profile-help/profile-help.module.ts ***!
    \**********************************************************/

  /*! exports provided: ProfileHelpPageModule */

  /***/
  function srcAppCoreProfileHelpProfileHelpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileHelpPageModule", function () {
      return ProfileHelpPageModule;
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


    var _profile_help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-help-routing.module */
    "./src/app/core/profile-help/profile-help-routing.module.ts");
    /* harmony import */


    var _profile_help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-help.page */
    "./src/app/core/profile-help/profile-help.page.ts");

    var ProfileHelpPageModule = function ProfileHelpPageModule() {
      _classCallCheck(this, ProfileHelpPageModule);
    };

    ProfileHelpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_help_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileHelpPageRoutingModule"]],
      declarations: [_profile_help_page__WEBPACK_IMPORTED_MODULE_6__["ProfileHelpPage"]]
    })], ProfileHelpPageModule);
    /***/
  },

  /***/
  "./src/app/core/profile-help/profile-help.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/core/profile-help/profile-help.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreProfileHelpProfileHelpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZmlsZS1oZWxwL3Byb2ZpbGUtaGVscC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/core/profile-help/profile-help.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/profile-help/profile-help.page.ts ***!
    \********************************************************/

  /*! exports provided: ProfileHelpPage */

  /***/
  function srcAppCoreProfileHelpProfileHelpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileHelpPage", function () {
      return ProfileHelpPage;
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


    var src_app_shared_services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/tickets/tickets.service */
    "./src/app/shared/services/tickets/tickets.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProfileHelpPage = /*#__PURE__*/function () {
      function ProfileHelpPage(ticketService, router) {
        _classCallCheck(this, ProfileHelpPage);

        this.ticketService = ticketService;
        this.router = router; // Icon

        this.iconSpeech = 'assets/img/settings/speech-bubble.svg'; // Data

        this.tickets = [];
      }

      _createClass(ProfileHelpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigatePage",
        value: function navigatePage(path) {
          this.router.navigate([path]);
        }
      }, {
        key: "getData",
        value: function getData() {
          this.tickets = this.ticketService.ticketsFiltered;
        }
      }]);

      return ProfileHelpPage;
    }();

    ProfileHelpPage.ctorParameters = function () {
      return [{
        type: src_app_shared_services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_2__["TicketsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProfileHelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-help',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-help.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-help/profile-help.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-help.page.scss */
      "./src/app/core/profile-help/profile-help.page.scss"))["default"]]
    })], ProfileHelpPage);
    /***/
  },

  /***/
  "./src/app/shared/services/tickets/tickets.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/services/tickets/tickets.service.ts ***!
    \************************************************************/

  /*! exports provided: TicketsService */

  /***/
  function srcAppSharedServicesTicketsTicketsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketsService", function () {
      return TicketsService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TicketsService = /*#__PURE__*/function () {
      function TicketsService(http) {
        _classCallCheck(this, TicketsService);

        this.http = http; // URL

        this.urlTickets = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/tickets/';
        this.tickets = [];
        this.ticketsFiltered = [];
      }

      _createClass(TicketsService, [{
        key: "post",
        value: function post(body) {
          return this.http.post(this.urlTickets, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('Ticket: ', res);
          }));
        }
      }, {
        key: "get",
        value: function get() {
          var _this = this;

          return this.http.get(this.urlTickets).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('Tickets: ', res);
            _this.tickets = res;
          }));
        }
      }, {
        key: "getOne",
        value: function getOne(id) {
          var _this2 = this;

          var urlID = this.urlTickets + id + '/';
          return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('Ticket: ', res);
            _this2.ticket = res;
          }));
        }
      }, {
        key: "update",
        value: function update(body) {
          return this.http.patch(this.urlTickets, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('Ticket: ', res);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"](this.urlTickets + id + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log('Ticket: ', res);
          }));
        }
      }]);

      return TicketsService;
    }();

    TicketsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    TicketsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TicketsService);
    /***/
  }
}]);
//# sourceMappingURL=core-profile-help-profile-help-module-es5.js.map