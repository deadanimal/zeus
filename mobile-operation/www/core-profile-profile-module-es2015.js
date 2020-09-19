(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/profile.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/profile.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\">\n    <ion-title>ion Z Formula</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <!-- Steamer -->\n        <ion-card mode=\"ios\" button (click)=\"create('Steamer', 'OFF')\">\n          <ion-card-header>\n            <p class=\"m-0\">Stmer, Z=x+w</p> \n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n  \n      <ion-col>\n        <ion-card mode=\"ios\" button (click)=\"create('Steamer', 'ON')\">\n          <ion-card-header>\n            <p class=\"m-0\">Stmer</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <!-- Water heater -->\n        <ion-card mode=\"ios\" button (click)=\"create('Heater', 'OFF')\">\n          <ion-card-header>\n            <p class=\"m-0\">H2OH, z = A</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n  \n      <ion-col>\n        <ion-card mode=\"ios\" button (click)=\"create('Heater', 'ON')\">\n          <ion-card-header>\n            <p class=\"m-0\">H2OH</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <!-- Blender -->\n        <ion-card mode=\"ios\" button (click)=\"create('Blender', 'OFF')\">\n          <ion-card-header>\n            <p class=\"m-0\">Bder, Z=A+A</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n  \n      <ion-col>\n        <ion-card mode=\"ios\" button (click)=\"create('Blender', 'ON')\">\n          <ion-card-header>\n            <p class=\"m-0\">Bder</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <!-- Oven -->\n        <ion-card mode=\"ios\" button (click)=\"create('Oven', 'OFF')\">\n          <ion-card-header>\n            <p class=\"m-0\">Ove, Z = C</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n  \n      <ion-col>\n        <ion-card mode=\"ios\" button (click)=\"create('Oven', 'ON')\">\n          <ion-card-header>\n            <p class=\"m-0\">Ove</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <!-- Vaccuum -->\n        <ion-card mode=\"ios\" button (click)=\"create('Vacuum', 'OFF')\">\n          <ion-card-header>\n            <p class=\"m-0\">Va, Z = b</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n  \n      <ion-col>\n        <ion-card mode=\"ios\" button (click)=\"create('Vacuum', 'ON')\">\n          <ion-card-header>\n            <p class=\"m-0\">Va</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <!-- Microwave -->\n        <ion-card mode=\"ios\" button (click)=\"create('Microwave', 'OFF')\">\n          <ion-card-header>\n            <p class=\"m-0\">Mc, Z = A-B+C</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n  \n      <ion-col>\n        <ion-card mode=\"ios\" button (click)=\"create('Microwave', 'ON')\">\n          <ion-card-header>\n            <p class=\"m-0\">Mc</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <!-- Iron -->\n        <ion-card mode=\"ios\" button (click)=\"create('Iron', 'OFF')\">\n          <ion-card-header>\n            <p class=\"m-0\">IrO, Z=C+120</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n  \n      <ion-col>\n        <ion-card mode=\"ios\" button (click)=\"create('Iron', 'ON')\">\n          <ion-card-header>\n            <p class=\"m-0\">IrO</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <!-- Toaster -->\n        <ion-card mode=\"ios\" button (click)=\"create('Toaster', 'OFF')\">\n          <ion-card-header>\n            <p class=\"m-0\">Tter, Z=v+B</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n  \n      <ion-col>\n        <ion-card mode=\"ios\" button (click)=\"create('Toaster', 'ON')\">\n          <ion-card-header>\n            <p class=\"m-0\">Tter</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <!-- Kettle -->\n        <ion-card mode=\"ios\" button (click)=\"create('Kettle', 'OFF')\">\n          <ion-card-header>\n            <p class=\"m-0\">Kitker, Z = x+C</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n  \n      <ion-col>\n        <ion-card mode=\"ios\" button (click)=\"create('Kettle', 'ON')\">\n          <ion-card-header>\n            <p class=\"m-0\">Kitker</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <!-- Rice Cooker -->\n        <ion-card mode=\"ios\" button (click)=\"create('Rice', 'OFF')\">\n          <ion-card-header>\n            <p class=\"m-0\">RCker, Z=x+360</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n  \n      <ion-col>\n        <ion-card mode=\"ios\" button (click)=\"create('Rice', 'ON')\">\n          <ion-card-header>\n            <p class=\"m-0\">RCker</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <!-- Pressure Cooker -->\n        <ion-card mode=\"ios\" button (click)=\"create('Pressure', 'OFF')\">\n          <ion-card-header>\n            <p class=\"m-0\">PCker, Z=Del*pi*360</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n  \n      <ion-col>\n        <ion-card mode=\"ios\" button (click)=\"create('Pressure', 'ON')\">\n          <ion-card-header>\n            <p class=\"m-0\">PCker</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <!-- AC Non Inverter -->\n        <ion-card mode=\"ios\" button (click)=\"create('AC', 'OFF')\">\n          <ion-card-header>\n            <p class=\"m-0\">ANI, Z=A+B+C</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n  \n      <ion-col>\n        <ion-card mode=\"ios\" button (click)=\"create('AC', 'ON')\">\n          <ion-card-header>\n            <p class=\"m-0\">ANI</p>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label>\n        <p>ON AC Wall</p>\n      </ion-label>\n      <ion-button (click)=\"create('ACW', 'ON')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p>OFF AC Wall</p>\n      </ion-label>\n      <ion-button (click)=\"create('ACW', 'OFF')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p>ON Toaster</p>\n      </ion-label>\n      <ion-button (click)=\"create('Toaster', 'ON')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p>OFF Toaster</p>\n      </ion-label>\n      <ion-button (click)=\"create('Toaster', 'OFF')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p>ON Iron</p>\n      </ion-label>\n      <ion-button (click)=\"create('Iron', 'ON')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p>OFF Iron</p>\n      </ion-label>\n      <ion-button (click)=\"create('Iron', 'OFF')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p>ON Vacuum</p>\n      </ion-label>\n      <ion-button (click)=\"create('Vacuum', 'ON')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p>OFF Vacuum</p>\n      </ion-label>\n      <ion-button (click)=\"create('Vacuum', 'OFF')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p>ON Heater</p>\n      </ion-label>\n      <ion-button (click)=\"create('Heater', 'ON')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p>OFF Heater</p>\n      </ion-label>\n      <ion-button (click)=\"create('Heater', 'OFF')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p>ON AC Cassette</p>\n      </ion-label>\n      <ion-button (click)=\"create('ACC', 'ON')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p>OFF AC Cassette</p>\n      </ion-label>\n      <ion-button (click)=\"create('ACC', 'OFF')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p>ON TV</p>\n      </ion-label>\n      <ion-button (click)=\"create('TV', 'ON')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <p>OFF TV</p>\n      </ion-label>\n      <ion-button (click)=\"create('TV', 'OFF')\" slot=\"end\" size=\"large\">GO</ion-button>\n    </ion-item>\n\n  </ion-list> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/core/profile/profile-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/core/profile/profile-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/core/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/core/profile/profile.module.ts":
/*!************************************************!*\
  !*** ./src/app/core/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/core/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/core/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/core/profile/profile.page.scss":
/*!************************************************!*\
  !*** ./src/app/core/profile/profile.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  background: #fff no-repeat center/cover url('cloud-bg.png');\n  text-align: center;\n  -ms-background-size: cover;\n  background-size: cover;\n}\n\nion-content {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeWFmaXFiYXNyaS9EZXZlbG9wbWVudC9Ta3Vuay9za3Vuay0wMDItemV1cy9tb2JpbGUtb3BlcmF0aW9uL3NyYy9hcHAvY29yZS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9jb3JlL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyREFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFJQSxzQkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgdXJsKCdzcmMvYXNzZXRzL2JhY2tncm91bmQvY2xvdWQtYmcucG5nJyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59IiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgdXJsKFwic3JjL2Fzc2V0cy9iYWNrZ3JvdW5kL2Nsb3VkLWJnLnBuZ1wiKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtbXMtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/profile/profile.page.ts":
/*!**********************************************!*\
  !*** ./src/app/core/profile/profile.page.ts ***!
  \**********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_activities_activities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/activities/activities.service */ "./src/app/shared/services/activities/activities.service.ts");




let ProfilePage = class ProfilePage {
    constructor(activityService, fb) {
        this.activityService = activityService;
        this.fb = fb;
        this.iconCh = 'assets/icon/business-and-finance.svg';
    }
    ngOnInit() {
        this.activityForm = this.fb.group({
            at_state: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            appliance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    create(type, state) {
        if (type == 'Steamer' && state == 'ON') {
            this.activityForm.controls['appliance'].setValue('a420e192-f89f-440a-a43b-89b42f05cfe3');
            this.activityForm.controls['at_state'].setValue('ON');
        }
        else if (type == 'Steamer' && state == 'OFF') {
            this.activityForm.controls['appliance'].setValue('a420e192-f89f-440a-a43b-89b42f05cfe3');
            this.activityForm.controls['at_state'].setValue('OF');
        }
        else if (type == 'Heater' && state == 'ON') {
            this.activityForm.controls['appliance'].setValue('9aadb299-ee03-4e6f-9272-396c15295be1');
            this.activityForm.controls['at_state'].setValue('ON');
        }
        else if (type == 'Heater' && state == 'OFF') {
            this.activityForm.controls['appliance'].setValue('9aadb299-ee03-4e6f-9272-396c15295be1');
            this.activityForm.controls['at_state'].setValue('OF');
        }
        else if (type == 'Blender' && state == 'ON') {
            this.activityForm.controls['appliance'].setValue('cefc16b8-56ed-4cf2-bc5f-c5cd0347f587');
            this.activityForm.controls['at_state'].setValue('ON');
        }
        else if (type == 'Blender' && state == 'OFF') {
            this.activityForm.controls['appliance'].setValue('cefc16b8-56ed-4cf2-bc5f-c5cd0347f587');
            this.activityForm.controls['at_state'].setValue('OF');
        }
        else if (type == 'Oven' && state == 'ON') {
            this.activityForm.controls['appliance'].setValue('4ea59be9-d7de-45b3-99ad-58da7f4a8e60');
            this.activityForm.controls['at_state'].setValue('ON');
        }
        else if (type == 'Oven' && state == 'OFF') {
            this.activityForm.controls['appliance'].setValue('4ea59be9-d7de-45b3-99ad-58da7f4a8e60');
            this.activityForm.controls['at_state'].setValue('OF');
        }
        else if (type == 'Vacuum' && state == 'ON') {
            this.activityForm.controls['appliance'].setValue('1e51076c-b2f4-45c1-aa5b-4b0aa26368a1');
            this.activityForm.controls['at_state'].setValue('ON');
        }
        else if (type == 'Vacuum' && state == 'OFF') {
            this.activityForm.controls['appliance'].setValue('1e51076c-b2f4-45c1-aa5b-4b0aa26368a1');
            this.activityForm.controls['at_state'].setValue('OF');
        }
        else if (type == 'Microwave' && state == 'ON') {
            this.activityForm.controls['appliance'].setValue('3e857401-b412-4cee-b2ef-852eaa0919f7');
            this.activityForm.controls['at_state'].setValue('ON');
        }
        else if (type == 'Microwave' && state == 'OFF') {
            this.activityForm.controls['appliance'].setValue('3e857401-b412-4cee-b2ef-852eaa0919f7');
            this.activityForm.controls['at_state'].setValue('OF');
        }
        else if (type == 'Iron' && state == 'ON') {
            this.activityForm.controls['appliance'].setValue('b5367745-3cb8-41ee-a9b0-2141f3fbc0c1');
            this.activityForm.controls['at_state'].setValue('ON');
        }
        else if (type == 'Iron' && state == 'OFF') {
            this.activityForm.controls['appliance'].setValue('b5367745-3cb8-41ee-a9b0-2141f3fbc0c1');
            this.activityForm.controls['at_state'].setValue('OF');
        }
        else if (type == 'Toaster' && state == 'ON') {
            this.activityForm.controls['appliance'].setValue('2e60f56b-7d72-4e0a-9953-a8792aca2315');
            this.activityForm.controls['at_state'].setValue('ON');
        }
        else if (type == 'Toaster' && state == 'OFF') {
            this.activityForm.controls['appliance'].setValue('2e60f56b-7d72-4e0a-9953-a8792aca2315');
            this.activityForm.controls['at_state'].setValue('OF');
        }
        else if (type == 'Kettle' && state == 'ON') {
            this.activityForm.controls['appliance'].setValue('a7d1d358-cd9c-4854-a2ef-ac35c3d80a1f');
            this.activityForm.controls['at_state'].setValue('ON');
        }
        else if (type == 'Kettle' && state == 'OFF') {
            this.activityForm.controls['appliance'].setValue('a7d1d358-cd9c-4854-a2ef-ac35c3d80a1f');
            this.activityForm.controls['at_state'].setValue('OF');
        }
        else if (type == 'Rice' && state == 'ON') {
            this.activityForm.controls['appliance'].setValue('d83116f3-b7fc-4b0b-ad4e-48957a143a56');
            this.activityForm.controls['at_state'].setValue('ON');
        }
        else if (type == 'Rice' && state == 'OFF') {
            this.activityForm.controls['appliance'].setValue('d83116f3-b7fc-4b0b-ad4e-48957a143a56');
            this.activityForm.controls['at_state'].setValue('OF');
        }
        else if (type == 'Pressure' && state == 'ON') {
            this.activityForm.controls['appliance'].setValue('b9005511-f36d-4cca-8d39-5bff95aaf6d5');
            this.activityForm.controls['at_state'].setValue('ON');
        }
        else if (type == 'Pressure' && state == 'OFF') {
            this.activityForm.controls['appliance'].setValue('b9005511-f36d-4cca-8d39-5bff95aaf6d5');
            this.activityForm.controls['at_state'].setValue('OF');
        }
        else if (type == 'AC' && state == 'ON') {
            this.activityForm.controls['appliance'].setValue('9ee236f0-dc38-4bc3-951d-eb7a8d4d63e2');
            this.activityForm.controls['at_state'].setValue('ON');
        }
        else if (type == 'AC' && state == 'OFF') {
            this.activityForm.controls['appliance'].setValue('9ee236f0-dc38-4bc3-951d-eb7a8d4d63e2');
            this.activityForm.controls['at_state'].setValue('OF');
        }
        // Rumah Boss
        // if (type == 'ACW' && state == 'ON') {
        //   this.activityForm.controls['appliance'].setValue('0cffcfe7-a66b-498e-affd-330c57b349bb')
        //   this.activityForm.controls['at_state'].setValue('ON')
        // }
        // else if (type == 'ACW' && state == 'OFF') {
        //   this.activityForm.controls['appliance'].setValue('0cffcfe7-a66b-498e-affd-330c57b349bb')
        //   this.activityForm.controls['at_state'].setValue('OF')
        // }
        // else if (type == 'ACC' && state == 'ON') {
        //   this.activityForm.controls['appliance'].setValue('31db4dc4-f7cd-43e7-865f-abcaf2b6d8af')
        //   this.activityForm.controls['at_state'].setValue('ON')
        // }
        // else if (type == 'ACC' && state == 'OFF') {
        //   this.activityForm.controls['appliance'].setValue('31db4dc4-f7cd-43e7-865f-abcaf2b6d8af')
        //   this.activityForm.controls['at_state'].setValue('OF')
        // }
        // else if (type == 'TV' && state == 'ON') {
        //   this.activityForm.controls['appliance'].setValue('1ccd45ae-92e6-4537-b6f9-7f1e1f390196')
        //   this.activityForm.controls['at_state'].setValue('ON')
        // }
        // else if (type == 'TV' && state == 'OFF') {
        //   this.activityForm.controls['appliance'].setValue('1ccd45ae-92e6-4537-b6f9-7f1e1f390196')
        //   this.activityForm.controls['at_state'].setValue('OF')
        // }
        // else if (type == 'Heater' && state == 'ON') {
        //   this.activityForm.controls['appliance'].setValue('a37c8b39-689d-4205-95ce-c7d2b468898e')
        //   this.activityForm.controls['at_state'].setValue('ON')
        // }
        // else if (type == 'Heater' && state == 'OFF') {
        //   this.activityForm.controls['appliance'].setValue('a37c8b39-689d-4205-95ce-c7d2b468898e')
        //   this.activityForm.controls['at_state'].setValue('OF')
        // }
        // else if (type == 'Vacuum' && state == 'ON') {
        //   this.activityForm.controls['appliance'].setValue('36533f03-603f-458a-ba1d-7df1d5ba01fc')
        //   this.activityForm.controls['at_state'].setValue('ON')
        // }
        // else if (type == 'Vacuum' && state == 'OFF') {
        //   this.activityForm.controls['appliance'].setValue('36533f03-603f-458a-ba1d-7df1d5ba01fc')
        //   this.activityForm.controls['at_state'].setValue('OF')
        // }
        // else if (type == 'Iron' && state == 'ON') {
        //   this.activityForm.controls['appliance'].setValue('fcd6c6a5-da8b-4582-af6c-f6d789d30aaf')
        //   this.activityForm.controls['at_state'].setValue('ON')
        // }
        // else if (type == 'Iron' && state == 'OFF') {
        //   this.activityForm.controls['appliance'].setValue('fcd6c6a5-da8b-4582-af6c-f6d789d30aaf')
        //   this.activityForm.controls['at_state'].setValue('OF')
        // }
        // else if (type == 'Toaster' && state == 'ON') {
        //   this.activityForm.controls['appliance'].setValue('7c368d67-f95a-4671-b3f8-959ecd843749')
        //   this.activityForm.controls['at_state'].setValue('ON')
        // }
        // else if (type == 'Toaster' && state == 'OFF') {
        //   this.activityForm.controls['appliance'].setValue('7c368d67-f95a-4671-b3f8-959ecd843749')
        //   this.activityForm.controls['at_state'].setValue('OF')
        // }
        this.activityService.post(this.activityForm.value).subscribe(() => { });
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_shared_services_activities_activities_service__WEBPACK_IMPORTED_MODULE_3__["ActivitiesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/core/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ }),

/***/ "./src/app/shared/services/activities/activities.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/activities/activities.service.ts ***!
  \******************************************************************/
/*! exports provided: ActivitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesService", function() { return ActivitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ActivitiesService = class ActivitiesService {
    constructor(http) {
        this.http = http;
        // URL
        this.urlAppliances = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/appliances/';
        this.urlActivity = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'v1/appliance-activities/';
        // Data
        this.activities = [];
    }
    post(body) {
        return this.http.post(this.urlActivity, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            console.log('Appliance: ', res);
        }));
    }
};
ActivitiesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ActivitiesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ActivitiesService);



/***/ })

}]);
//# sourceMappingURL=core-profile-profile-module-es2015.js.map