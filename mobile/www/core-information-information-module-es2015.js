(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-information-information-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/information/information.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/information/information.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-title>Information</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content class=\"ion-padding\" fullscreen>\n  <div class=\"main-content\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h3 style = \"padding-bottom:5%;\">Safety Knowledge and Action</h3>\n          <ion-card (click)=\"expandItem(item)\" *ngFor=\"let item of items\">\n            <ion-card-header color=\"primary\">\n              <ion-card-title>{{item.title}}</ion-card-title>\n            </ion-card-header>\n            <app-expandable expandHeight=\"200px\" [expanded]=\"item.expanded\">\n              <ion-card-content style=\"background-color:#e0e0e0\">\n                <p >{{item.message}}</p>\n              </ion-card-content>\n            </app-expandable>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/expandable/expandable/expandable.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expandable/expandable/expandable.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n  <ng-content></ng-content>\n</div>\n");

/***/ }),

/***/ "./src/app/core/information/information-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/information/information-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: InformationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageRoutingModule", function() { return InformationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./information.page */ "./src/app/core/information/information.page.ts");




const routes = [
    {
        path: '',
        component: _information_page__WEBPACK_IMPORTED_MODULE_3__["InformationPage"]
    }
];
let InformationPageRoutingModule = class InformationPageRoutingModule {
};
InformationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InformationPageRoutingModule);



/***/ }),

/***/ "./src/app/core/information/information.module.ts":
/*!********************************************************!*\
  !*** ./src/app/core/information/information.module.ts ***!
  \********************************************************/
/*! exports provided: InformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageModule", function() { return InformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _expandable_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../expandable/expandable/expandable.component */ "./src/app/expandable/expandable/expandable.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _information_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information-routing.module */ "./src/app/core/information/information-routing.module.ts");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./information.page */ "./src/app/core/information/information.page.ts");








let InformationPageModule = class InformationPageModule {
};
InformationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _information_routing_module__WEBPACK_IMPORTED_MODULE_6__["InformationPageRoutingModule"]
        ],
        declarations: [
            _information_page__WEBPACK_IMPORTED_MODULE_7__["InformationPage"],
            _expandable_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_1__["ExpandableComponent"]
        ]
    })
], InformationPageModule);



/***/ }),

/***/ "./src/app/core/information/information.page.scss":
/*!********************************************************!*\
  !*** ./src/app/core/information/information.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-title {\n  font-size: medium;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXJyYWh6ZWx5bmEvRG9jdW1lbnRzL3pldXMvbW9iaWxlL3NyYy9hcHAvY29yZS9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvcmUvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLy8gLmlvbi1jb2xvci1jdXN0b20ge1xuLy8gICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1jdXN0b20pO1xuLy8gICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItY3VzdG9tLXJnYik7XG4vLyAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1jdXN0b20tY29udHJhc3QpO1xuLy8gICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWN1c3RvbS1jb250cmFzdC1yZ2IpO1xuLy8gICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItY3VzdG9tLXNoYWRlKTtcbi8vICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItY3VzdG9tLXRpbnQpO1xuLy8gICB9XG4iLCJpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/core/information/information.page.ts":
/*!******************************************************!*\
  !*** ./src/app/core/information/information.page.ts ***!
  \******************************************************/
/*! exports provided: InformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPage", function() { return InformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InformationPage = class InformationPage {
    constructor() {
        this.items = [];
        this.items = [
            { expanded: false, title: 'Protect small children from hazard', message: "Toddlers and small children are very curious- and they love to explore just about everything. Parents of small children " +
                    "should put tamper-resistant safety caps on all unused electrical outlets. In addition, all loose cards should be tidied up and put " +
                    "out of reach to avoid kids tugging on them." },
            { expanded: false, title: 'Avoid extension cord as much as possible', message: "Running extension cords through the house can trip up residents; this can cause injury and damage to the wire or outlet " +
                    "if it causes the cord to be ripped out of the wall. If you find yourself using extension cords very often, consider having an " +
                    "electrican install new outlets throughout your home." },
            { expanded: false, title: 'Keep electrical equipment or outlet away from water', message: "Water conducts electricity, so even the slightest exposure to this dangerous mix can lead to injury. Make sure you wipe " +
                    "up any spills to ensure that plugs don\'t get well." },
            { expanded: false, title: 'Don\'t overload your outlets', message: "Every outlet in your home is designed to deliver a certain amount of electricity; by plugging too many devices into it at " +
                    "once, you could cause a small explosion or a fire. If you have a lot of things to plug in, use a power strip (an energy saving " +
                    "one of course!)that can safely accommodate your needs. " },
            { expanded: false, title: 'Replace and repair the damage power cords', message: "Exposed wiring is a danger that cannot go overlooked, the NFPA wrote. If you see the protective coating on a wire is stripped " +
                    "away, be sure to replace it or cover it with electrical tape as soon as possible." }
        ];
    }
    ngOnInit() {
    }
    expandItem(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.items.map(listItem => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
};
InformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-information',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./information.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/information/information.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./information.page.scss */ "./src/app/core/information/information.page.scss")).default]
    })
], InformationPage);



/***/ }),

/***/ "./src/app/expandable/expandable/expandable.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/expandable/expandable/expandable.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXJyYWh6ZWx5bmEvRG9jdW1lbnRzL3pldXMvbW9iaWxlL3NyYy9hcHAvZXhwYW5kYWJsZS9leHBhbmRhYmxlL2V4cGFuZGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4cGFuZGFibGUvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLHdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9leHBhbmRhYmxlL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmQtd3JhcHBlciB7XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UtaW4tb3V0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH0iLCIuZXhwYW5kLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNvbGxhcHNlZCB7XG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/expandable/expandable/expandable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/expandable/expandable/expandable.component.ts ***!
  \***************************************************************/
/*! exports provided: ExpandableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function() { return ExpandableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ExpandableComponent = class ExpandableComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "100px";
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    }
};
ExpandableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], ExpandableComponent.prototype, "expandWrapper", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded")
], ExpandableComponent.prototype, "expanded", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight")
], ExpandableComponent.prototype, "expandHeight", void 0);
ExpandableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expandable',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./expandable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/expandable/expandable/expandable.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./expandable.component.scss */ "./src/app/expandable/expandable/expandable.component.scss")).default]
    })
], ExpandableComponent);



/***/ })

}]);
//# sourceMappingURL=core-information-information-module-es2015.js.map