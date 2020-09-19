(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-profile-help-profile-help-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-help/profile-help.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-help/profile-help.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/core/profile\" routerLink=\"/core/profile\" routerDirection=\"back\" text=\"\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Help</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list mode=\"ios\" class=\"ion-no-margin list-core\">\n    <ion-list-header mode=\"ios\">\n      <h3>New ticket</h3>\n    </ion-list-header>\n\n    <ion-item lines=\"none\" detail (click)=\"navigatePage('/profile-help-ticket')\">\n      <ion-icon name=\"reader-outline\" color=\"primary\" slot=\"end\"></ion-icon>\n      <ion-label>\n        <h3>Create new ticket</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-list-header mode=\"ios\">\n      <h3>Ticket history</h3>\n    </ion-list-header>\n\n    <ion-item lines=\"none\" detail (click)=\"navigatePage('/profile-help-ticket')\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"iconSpeech\">\n      </ion-avatar>\n      <ion-label class=\"ion-text-wrap\">\n        <h4>Ticket</h4>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list-header mode=\"ios\">\n    <h3>Help and support</h3>\n  </ion-list-header>\n\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\">\n      <img [src]=\"iconPhone1\">\n    </ion-avatar>\n    <ion-label class=\"ion-text-wrap\">\n      <h4>Hotline</h4>\n      <p>03-1234567</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-avatar slot=\"start\">\n      <img [src]=\"iconPhone2\">\n    </ion-avatar>\n    <ion-label class=\"ion-text-wrap\">\n      <h4>Technical support</h4>\n      <p>15454</p>\n    </ion-label>\n  </ion-item>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/core/profile-help/profile-help-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/profile-help/profile-help-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ProfileHelpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHelpPageRoutingModule", function() { return ProfileHelpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-help.page */ "./src/app/core/profile-help/profile-help.page.ts");




const routes = [
    {
        path: '',
        component: _profile_help_page__WEBPACK_IMPORTED_MODULE_3__["ProfileHelpPage"]
    }
];
let ProfileHelpPageRoutingModule = class ProfileHelpPageRoutingModule {
};
ProfileHelpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileHelpPageRoutingModule);



/***/ }),

/***/ "./src/app/core/profile-help/profile-help.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/profile-help/profile-help.module.ts ***!
  \**********************************************************/
/*! exports provided: ProfileHelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHelpPageModule", function() { return ProfileHelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-help-routing.module */ "./src/app/core/profile-help/profile-help-routing.module.ts");
/* harmony import */ var _profile_help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-help.page */ "./src/app/core/profile-help/profile-help.page.ts");







let ProfileHelpPageModule = class ProfileHelpPageModule {
};
ProfileHelpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_help_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileHelpPageRoutingModule"]
        ],
        declarations: [_profile_help_page__WEBPACK_IMPORTED_MODULE_6__["ProfileHelpPage"]]
    })
], ProfileHelpPageModule);



/***/ }),

/***/ "./src/app/core/profile-help/profile-help.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/profile-help/profile-help.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZmlsZS1oZWxwL3Byb2ZpbGUtaGVscC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/profile-help/profile-help.page.ts":
/*!********************************************************!*\
  !*** ./src/app/core/profile-help/profile-help.page.ts ***!
  \********************************************************/
/*! exports provided: ProfileHelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHelpPage", function() { return ProfileHelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/tickets/tickets.service */ "./src/app/shared/services/tickets/tickets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ProfileHelpPage = class ProfileHelpPage {
    constructor(ticketService, router) {
        this.ticketService = ticketService;
        this.router = router;
        // Icon
        this.iconSpeech = 'assets/img/settings/speech-bubble.svg';
        this.iconPhone1 = 'assets/img/settings/phone1.svg';
        this.iconPhone2 = 'assets/img/settings/phone2.svg';
        // Data
        this.tickets = [];
    }
    ngOnInit() {
    }
    navigatePage(path) {
        this.router.navigate([path]);
    }
    getData() {
        this.tickets = this.ticketService.ticketsFiltered;
    }
};
ProfileHelpPage.ctorParameters = () => [
    { type: src_app_shared_services_tickets_tickets_service__WEBPACK_IMPORTED_MODULE_2__["TicketsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProfileHelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-help',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-help.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-help/profile-help.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-help.page.scss */ "./src/app/core/profile-help/profile-help.page.scss")).default]
    })
], ProfileHelpPage);



/***/ }),

/***/ "./src/app/shared/services/tickets/tickets.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/tickets/tickets.service.ts ***!
  \************************************************************/
/*! exports provided: TicketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsService", function() { return TicketsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TicketsService = class TicketsService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlTickets = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/tickets/';
        this.tickets = [];
        this.ticketsFiltered = [];
    }
    post(body) {
        return this.http.post(this.urlTickets, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Ticket: ', res);
        }));
    }
    get() {
        return this.http.get(this.urlTickets).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Tickets: ', res);
            this.tickets = res;
        }));
    }
    getOne(id) {
        let urlID = this.urlTickets + id + '/';
        return this.http.get(urlID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Ticket: ', res);
            this.ticket = res;
        }));
    }
    update(body) {
        return this.http.patch(this.urlTickets, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Ticket: ', res);
        }));
    }
    delete(id) {
        return this.http.delete(this.urlTickets + id + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Ticket: ', res);
        }));
    }
};
TicketsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TicketsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TicketsService);



/***/ })

}]);
//# sourceMappingURL=core-profile-help-profile-help-module-es2015.js.map