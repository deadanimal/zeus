(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-walkthrough-walkthrough-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkthrough/walkthrough.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkthrough/walkthrough.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\" fullscreen>\n\t<ion-slides #introSlides [options]=\"sliderConfig\" (ionSlideDidChange)=\"slideDidChange()\">\n\t\t<ion-slide *ngFor=\"let slide of slides\">\n\t\t\t<ion-skeleton-text *ngIf=\"!imgLoaded\" animated class=\"intro-text\" slot=\"start\">\n\t\t\t</ion-skeleton-text>\n\t\t\t<ion-img src=\"{{slide.image}}\" (ionImgWillLoad)=\"imgLoaded=false\" (ionImgDidLoad)=\"imgLoaded=true\">\n\t\t\t</ion-img>\n\t\t\t<h1 class=\"ion-padding-end ion-padding-start\">{{slide.text}}</h1>\n\t\t</ion-slide>\n\t</ion-slides>\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-no-border\" mode=\"ios\" translucent>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-button \n\t\t\t\t\t*ngIf=\"!endReached\"\n\t\t\t\t\tclass=\"round\"\n\t\t\t\t\tfill=\"clear\"\n\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t(click)=\"navigatePage('/auth/login')\"\n\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t>\n\t\t\t\t\tSkip\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"ion-text-right\">\n\t\t\t\t<ion-button\n\t\t\t\t\t*ngIf=\"!endReached\"\n\t\t\t\t\tclass=\"round\"\n\t\t\t\t\tshape=\"round\"\n\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t(click)=\"next()\"\n\t\t\t\t>\n\t\t\t\t\tNext\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button\n\t\t\t\t\t*ngIf=\"endReached\"\n\t\t\t\t\tclass=\"round\"\n\t\t\t\t\tshape=\"round\"\n\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t(click)=\"navigatePage('/auth/login')\"\n\t\t\t\t>\n\t\t\t\t\tEnter\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/walkthrough/walkthrough-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/walkthrough/walkthrough-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: WalkthroughPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageRoutingModule", function() { return WalkthroughPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _walkthrough_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkthrough.page */ "./src/app/pages/walkthrough/walkthrough.page.ts");




const routes = [
    {
        path: '',
        component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_3__["WalkthroughPage"]
    }
];
let WalkthroughPageRoutingModule = class WalkthroughPageRoutingModule {
};
WalkthroughPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WalkthroughPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/walkthrough/walkthrough.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/walkthrough/walkthrough.module.ts ***!
  \*********************************************************/
/*! exports provided: WalkthroughPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkthrough-routing.module */ "./src/app/pages/walkthrough/walkthrough-routing.module.ts");
/* harmony import */ var _walkthrough_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walkthrough.page */ "./src/app/pages/walkthrough/walkthrough.page.ts");







let WalkthroughPageModule = class WalkthroughPageModule {
};
WalkthroughPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalkthroughPageRoutingModule"]
        ],
        declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]]
    })
], WalkthroughPageModule);



/***/ }),

/***/ "./src/app/pages/walkthrough/walkthrough.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/walkthrough/walkthrough.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --overflow: hidden;\n}\n\nion-footer {\n  background: transparent;\n}\n\nion-slide {\n  height: 80vh;\n  flex-direction: column;\n}\n\nion-img {\n  max-width: 70vw;\n  max-height: 70vh;\n  margin-bottom: 4vh;\n  overflow: hidden;\n}\n\n.round {\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Ta3Vuay9za3Vuay0wMDItemV1cy96ZXVzLW1vYmlsZS9zcmMvYXBwL3BhZ2VzL3dhbGt0aHJvdWdoL3dhbGt0aHJvdWdoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2Fsa3Rocm91Z2gvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2Fsa3Rocm91Z2gvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiAgXG5pb24tZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiAgXG5pb24tc2xpZGUge1xuICAgIGhlaWdodDogODB2aDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuICBcbmlvbi1pbWcge1xuICAgIG1heC13aWR0aDogNzB2dztcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xuICAgIG1hcmdpbi1ib3R0b206IDR2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucm91bmQge1xuICAgIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4gICIsImlvbi1jb250ZW50IHtcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGhlaWdodDogODB2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW9uLWltZyB7XG4gIG1heC13aWR0aDogNzB2dztcbiAgbWF4LWhlaWdodDogNzB2aDtcbiAgbWFyZ2luLWJvdHRvbTogNHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucm91bmQge1xuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/walkthrough/walkthrough.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/walkthrough/walkthrough.page.ts ***!
  \*******************************************************/
/*! exports provided: WalkthroughPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPage", function() { return WalkthroughPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let WalkthroughPage = class WalkthroughPage {
    constructor(router) {
        this.router = router;
        this.endReached = false;
        this.imgLoaded = false;
        this.sliderConfig = {
            centeredSlides: true,
            initialSlide: 0,
            speed: 400
        };
        this.slides = [
            { "image": "/assets/img/intro/smarthouse.svg", "text": "Smart home monitoring easier" },
            { "image": "/assets/img/intro/development.svg", "text": "IoT for your smart house" },
            { "image": "/assets/img/intro/events.svg", "text": "Maintenance predictions in your hand" },
            { "image": "/assets/img/intro/calendar.svg", "text": "Manage maintenances and monitor your appliances" }
        ];
    }
    ngOnInit() {
        this.imgLoaded = false;
    }
    next() {
        this.introSlides.slideNext();
    }
    slideDidChange() {
        this.introSlides.isEnd().then(res => {
            this.endReached = res;
        });
    }
    navigatePage(path) {
        this.router.navigate([path]);
    }
};
WalkthroughPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('introSlides', { static: false })
], WalkthroughPage.prototype, "introSlides", void 0);
WalkthroughPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-walkthrough',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./walkthrough.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkthrough/walkthrough.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./walkthrough.page.scss */ "./src/app/pages/walkthrough/walkthrough.page.scss")).default]
    })
], WalkthroughPage);



/***/ })

}]);
//# sourceMappingURL=pages-walkthrough-walkthrough-module-es2015.js.map