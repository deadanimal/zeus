function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-walkthrough-walkthrough-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkthrough/walkthrough.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkthrough/walkthrough.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWalkthroughWalkthroughPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\" fullscreen>\n\t<ion-slides #introSlides [options]=\"sliderConfig\" (ionSlideDidChange)=\"slideDidChange()\">\n\t\t<ion-slide *ngFor=\"let slide of slides\">\n\t\t\t<ion-skeleton-text *ngIf=\"!imgLoaded\" animated class=\"intro-text\" slot=\"start\">\n\t\t\t</ion-skeleton-text>\n\t\t\t<ion-img src=\"{{slide.image}}\" (ionImgWillLoad)=\"imgLoaded=false\" (ionImgDidLoad)=\"imgLoaded=true\">\n\t\t\t</ion-img>\n\t\t\t<h1 class=\"ion-padding-end ion-padding-start\">{{slide.text}}</h1>\n\t\t</ion-slide>\n\t</ion-slides>\n</ion-content>\n\n<ion-footer class=\"ion-padding ion-no-border\" mode=\"ios\" translucent>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-button \n\t\t\t\t\t*ngIf=\"!endReached\"\n\t\t\t\t\tclass=\"round\"\n\t\t\t\t\tfill=\"clear\"\n\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t(click)=\"navigatePage('/auth/login')\"\n\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t>\n\t\t\t\t\tSkip\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"ion-text-right\">\n\t\t\t\t<ion-button\n\t\t\t\t\t*ngIf=\"!endReached\"\n\t\t\t\t\tclass=\"round\"\n\t\t\t\t\tshape=\"round\"\n\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t(click)=\"next()\"\n\t\t\t\t>\n\t\t\t\t\tNext\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button\n\t\t\t\t\t*ngIf=\"endReached\"\n\t\t\t\t\tclass=\"round\"\n\t\t\t\t\tshape=\"round\"\n\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t(click)=\"navigatePage('/auth/login')\"\n\t\t\t\t>\n\t\t\t\t\tEnter\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/walkthrough/walkthrough-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/walkthrough/walkthrough-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: WalkthroughPageRoutingModule */

  /***/
  function srcAppPagesWalkthroughWalkthroughRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPageRoutingModule", function () {
      return WalkthroughPageRoutingModule;
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


    var _walkthrough_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./walkthrough.page */
    "./src/app/pages/walkthrough/walkthrough.page.ts");

    var routes = [{
      path: '',
      component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_3__["WalkthroughPage"]
    }];

    var WalkthroughPageRoutingModule = function WalkthroughPageRoutingModule() {
      _classCallCheck(this, WalkthroughPageRoutingModule);
    };

    WalkthroughPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WalkthroughPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/walkthrough/walkthrough.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/walkthrough/walkthrough.module.ts ***!
    \*********************************************************/

  /*! exports provided: WalkthroughPageModule */

  /***/
  function srcAppPagesWalkthroughWalkthroughModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function () {
      return WalkthroughPageModule;
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


    var _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./walkthrough-routing.module */
    "./src/app/pages/walkthrough/walkthrough-routing.module.ts");
    /* harmony import */


    var _walkthrough_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./walkthrough.page */
    "./src/app/pages/walkthrough/walkthrough.page.ts");

    var WalkthroughPageModule = function WalkthroughPageModule() {
      _classCallCheck(this, WalkthroughPageModule);
    };

    WalkthroughPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalkthroughPageRoutingModule"]],
      declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]]
    })], WalkthroughPageModule);
    /***/
  },

  /***/
  "./src/app/pages/walkthrough/walkthrough.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/walkthrough/walkthrough.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWalkthroughWalkthroughPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --overflow: hidden;\n}\n\nion-footer {\n  background: transparent;\n}\n\nion-slide {\n  height: 80vh;\n  flex-direction: column;\n}\n\nion-img {\n  max-width: 70vw;\n  max-height: 70vh;\n  margin-bottom: 4vh;\n  overflow: hidden;\n}\n\n.round {\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXJyYWh6ZWx5bmEvRG9jdW1lbnRzL3pldXMvbW9iaWxlL3NyYy9hcHAvcGFnZXMvd2Fsa3Rocm91Z2gvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy93YWxrdGhyb3VnaC93YWxrdGhyb3VnaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93YWxrdGhyb3VnaC93YWxrdGhyb3VnaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuICBcbmlvbi1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuICBcbmlvbi1zbGlkZSB7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4gIFxuaW9uLWltZyB7XG4gICAgbWF4LXdpZHRoOiA3MHZ3O1xuICAgIG1heC1oZWlnaHQ6IDcwdmg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5yb3VuZCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbiAgIiwiaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiA4MHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pb24taW1nIHtcbiAgbWF4LXdpZHRoOiA3MHZ3O1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICBtYXJnaW4tYm90dG9tOiA0dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5yb3VuZCB7XG4gIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/walkthrough/walkthrough.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/walkthrough/walkthrough.page.ts ***!
    \*******************************************************/

  /*! exports provided: WalkthroughPage */

  /***/
  function srcAppPagesWalkthroughWalkthroughPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPage", function () {
      return WalkthroughPage;
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

    var WalkthroughPage = /*#__PURE__*/function () {
      function WalkthroughPage(router) {
        _classCallCheck(this, WalkthroughPage);

        this.router = router;
        this.endReached = false;
        this.imgLoaded = false;
        this.sliderConfig = {
          centeredSlides: true,
          initialSlide: 0,
          speed: 400
        };
        this.slides = [{
          "image": "/assets/img/intro/smarthouse.svg",
          "text": "Smart home monitoring easier"
        }, {
          "image": "/assets/img/intro/development.svg",
          "text": "IoT for your smart house"
        }, {
          "image": "/assets/img/intro/events.svg",
          "text": "Maintenance predictions in your hand"
        }, {
          "image": "/assets/img/intro/calendar.svg",
          "text": "Manage maintenances and monitor your appliances"
        }];
      }

      _createClass(WalkthroughPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.imgLoaded = false;
        }
      }, {
        key: "next",
        value: function next() {
          this.introSlides.slideNext();
        }
      }, {
        key: "slideDidChange",
        value: function slideDidChange() {
          var _this = this;

          this.introSlides.isEnd().then(function (res) {
            _this.endReached = res;
          });
        }
      }, {
        key: "navigatePage",
        value: function navigatePage(path) {
          this.router.navigate([path]);
        }
      }]);

      return WalkthroughPage;
    }();

    WalkthroughPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('introSlides', {
      "static": false
    })], WalkthroughPage.prototype, "introSlides", void 0);
    WalkthroughPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-walkthrough',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./walkthrough.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/walkthrough/walkthrough.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./walkthrough.page.scss */
      "./src/app/pages/walkthrough/walkthrough.page.scss"))["default"]]
    })], WalkthroughPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-walkthrough-walkthrough-module-es5.js.map