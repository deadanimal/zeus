(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-operations-operations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/operations/operations.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/operations/operations.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\">\n    <ion-title>Operations</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div *ngIf=\"isSearching\">\n    <ion-spinner name=\"crescent\" color=\"primary\"></ion-spinner>\n  </div>\n  \n  <div *ngIf=\"!isSearching\">\n    <div *ngIf=\"isEmpty\" class=\"empty-list ion-text-center\">\n      <img [src]=\"iconEmpty\" class=\"empty-img\">\n      <p>No wifi detected in your area</p>\n    </div>\n  \n    <ion-list *ngIf=\"!isEmpty\" class=\"list-core\">\n      <ion-list-header>\n        <h3>Find WiFi to connect</h3>\n      </ion-list-header>\n      <ion-item lines=\"none\" class=\"item-core\" *ngFor=\"let wifi of scannedWifis\">\n        <ion-icon name=\"wifi-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n        <ion-label class=\"ion-text-wrap\">\n          <h3>{{wifi.SSID}}</h3>\n          <p>{{wifi.BSSID}}</p>\n        </ion-label>\n        <ion-button\n          slot=\"end\"\n          color=\"primary\"\n          shape=\"round\"\n          mode=\"ios\"\n          (click)=\"connect(wifi)\"\n        >\n          Connect\n        </ion-button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/core/operations/operations-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/operations/operations-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: OperationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsPageRoutingModule", function() { return OperationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _operations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations.page */ "./src/app/core/operations/operations.page.ts");




const routes = [
    {
        path: '',
        component: _operations_page__WEBPACK_IMPORTED_MODULE_3__["OperationsPage"]
    }
];
let OperationsPageRoutingModule = class OperationsPageRoutingModule {
};
OperationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OperationsPageRoutingModule);



/***/ }),

/***/ "./src/app/core/operations/operations.module.ts":
/*!******************************************************!*\
  !*** ./src/app/core/operations/operations.module.ts ***!
  \******************************************************/
/*! exports provided: OperationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsPageModule", function() { return OperationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _operations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operations-routing.module */ "./src/app/core/operations/operations-routing.module.ts");
/* harmony import */ var _operations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operations.page */ "./src/app/core/operations/operations.page.ts");







let OperationsPageModule = class OperationsPageModule {
};
OperationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _operations_routing_module__WEBPACK_IMPORTED_MODULE_5__["OperationsPageRoutingModule"]
        ],
        declarations: [_operations_page__WEBPACK_IMPORTED_MODULE_6__["OperationsPage"]]
    })
], OperationsPageModule);



/***/ }),

/***/ "./src/app/core/operations/operations.page.scss":
/*!******************************************************!*\
  !*** ./src/app/core/operations/operations.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".empty-list {\n  margin-top: 3rem;\n}\n.empty-list .empty-img {\n  max-width: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Ta3Vuay9za3Vuay0wMDItemV1cy9tb2JpbGUtb3BlcmF0aW9uL3NyYy9hcHAvY29yZS9vcGVyYXRpb25zL29wZXJhdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9jb3JlL29wZXJhdGlvbnMvb3BlcmF0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL29wZXJhdGlvbnMvb3BlcmF0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wdHktbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAuZW1wdHktaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1cmVtO1xuICAgIH1cbn0iLCIuZW1wdHktbGlzdCB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG4uZW1wdHktbGlzdCAuZW1wdHktaW1nIHtcbiAgbWF4LXdpZHRoOiA1cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/core/operations/operations.page.ts":
/*!****************************************************!*\
  !*** ./src/app/core/operations/operations.page.ts ***!
  \****************************************************/
/*! exports provided: OperationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationsPage", function() { return OperationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/hotspot/ngx */ "./node_modules/@ionic-native/hotspot/__ivy_ngcc__/ngx/index.js");



let OperationsPage = class OperationsPage {
    constructor(hotspot) {
        this.hotspot = hotspot;
        // Data
        this.scannedWifis = [];
        // Checker
        this.isEmpty = true;
        this.isSearching = false;
        // Icon
        this.iconEmpty = 'assets/icon/no-wifi.svg';
    }
    ngOnInit() {
        this.wifiLoader = setInterval(() => {
            this.hotspot.scanWifi().then((networks) => {
                this.scannedWifis = networks;
                if (this.scannedWifis) {
                    this.isEmpty = false;
                    console.log(this.scannedWifis);
                }
            });
        }, 5000);
    }
    connect(selectedConnection) {
        let ssid = selectedConnection;
        let password = '';
        this.hotspot.connectToWifi(ssid.SSID, password).then(() => {
            //connection to the WiFi network was successfull
            console.log('Connected');
        }).catch(() => {
            //connection to the WiFi network failed
            console.log('Error');
        });
    }
};
OperationsPage.ctorParameters = () => [
    { type: _ionic_native_hotspot_ngx__WEBPACK_IMPORTED_MODULE_2__["Hotspot"] }
];
OperationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-operations',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./operations.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/operations/operations.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./operations.page.scss */ "./src/app/core/operations/operations.page.scss")).default]
    })
], OperationsPage);



/***/ })

}]);
//# sourceMappingURL=core-operations-operations-module-es2015.js.map