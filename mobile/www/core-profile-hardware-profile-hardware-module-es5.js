function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-profile-hardware-profile-hardware-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-hardware/profile-hardware.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-hardware/profile-hardware.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreProfileHardwareProfileHardwarePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\" color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/core/profile\" routerLink=\"/core/profile\" routerDirection=\"back\" text=\"\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>Setting</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fullscreen>\n  <div class=\"main-content\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n\n          <form class=\"form\" [formGroup]=\"userForm\">\n            <ion-item lines=\"none\" class=\"ion-no-padding ion-no-margin\">\n              <ion-label position=\"stacked\">Password</ion-label>\n              <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\"></ion-input>\n            </ion-item>\n            <div class=\"message\">\n              <p class=\"message-text\">Change password</p>\n            </div>\n\n            <ion-item lines=\"full\" class=\"ion-no-padding ion-no-margin\">\n              <ion-label position=\"stacked\">Select connectivity</ion-label>\n              <ion-select mode=\"ios\">\n                <ion-select-option value=\"4G\">Network 4G</ion-select-option>\n                <ion-select-option value=\"3G\">Network 3G</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <p class=\"message-text\">Change WiFi</p>\n\n            <!-- <ion-item lines=\"full\" class=\"ion-no-padding ion-no-margin\">\n              <ion-label position=\"stacked\">Select theme</ion-label>\n              <ion-select mode=\"ios\">\n                <ion-select-option value=\"4G\">Dark mode</ion-select-option>\n                <ion-select-option value=\"3G\">Light mode</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <p class=\"message-text\">Change theme</p> -->\n\n          </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-footer class=\"ion-padding ion-no-border\" transparent>\n    <ion-button class=\"round\" shape=\"round\" expand=\"block\" mode=\"ios\" (click)=\"update()\" *ngIf=\"!isLoading\">\n      Update\n    </ion-button>\n    <ion-button class=\"round\" shape=\"round\" expand=\"block\" mode=\"ios\" *ngIf=\"isLoading\">\n      <ion-spinner name=\"bubbles\"></ion-spinner>\n    </ion-button>\n  </ion-footer>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/core/profile-hardware/profile-hardware-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/core/profile-hardware/profile-hardware-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ProfileHardwarePageRoutingModule */

  /***/
  function srcAppCoreProfileHardwareProfileHardwareRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileHardwarePageRoutingModule", function () {
      return ProfileHardwarePageRoutingModule;
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


    var _profile_hardware_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-hardware.page */
    "./src/app/core/profile-hardware/profile-hardware.page.ts");

    var routes = [{
      path: '',
      component: _profile_hardware_page__WEBPACK_IMPORTED_MODULE_3__["ProfileHardwarePage"]
    }];

    var ProfileHardwarePageRoutingModule = function ProfileHardwarePageRoutingModule() {
      _classCallCheck(this, ProfileHardwarePageRoutingModule);
    };

    ProfileHardwarePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfileHardwarePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/profile-hardware/profile-hardware.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/core/profile-hardware/profile-hardware.module.ts ***!
    \******************************************************************/

  /*! exports provided: ProfileHardwarePageModule */

  /***/
  function srcAppCoreProfileHardwareProfileHardwareModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileHardwarePageModule", function () {
      return ProfileHardwarePageModule;
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


    var _profile_hardware_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-hardware-routing.module */
    "./src/app/core/profile-hardware/profile-hardware-routing.module.ts");
    /* harmony import */


    var _profile_hardware_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-hardware.page */
    "./src/app/core/profile-hardware/profile-hardware.page.ts");

    var ProfileHardwarePageModule = function ProfileHardwarePageModule() {
      _classCallCheck(this, ProfileHardwarePageModule);
    };

    ProfileHardwarePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_hardware_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileHardwarePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_profile_hardware_page__WEBPACK_IMPORTED_MODULE_6__["ProfileHardwarePage"]]
    })], ProfileHardwarePageModule);
    /***/
  },

  /***/
  "./src/app/core/profile-hardware/profile-hardware.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/core/profile-hardware/profile-hardware.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreProfileHardwareProfileHardwarePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-content {\n  display: grid;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  justify-items: center;\n}\n\n.form {\n  min-width: 250px !important;\n}\n\n.form ion-input {\n  --color: var(--ion-color-medium);\n  --placeholder-font-weight: 400;\n  --background: #F2F2F2;\n  border-radius: 15px;\n  --padding-start: 15px !important;\n  margin-top: 0.7rem;\n}\n\n.form ion-item {\n  --background: transparent;\n  --inner-padding-end: 0;\n  border-radius: 15px;\n  margin-bottom: 1rem;\n}\n\n.form .message-text {\n  color: blue;\n  font-size: x-small;\n  margin: 0 auto;\n  text-align: right !important;\n}\n\n.form .select-option {\n  color: grey !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYXJyYWh6ZWx5bmEvRG9jdW1lbnRzL3pldXMvbW9iaWxlL3NyYy9hcHAvY29yZS9wcm9maWxlLWhhcmR3YXJlL3Byb2ZpbGUtaGFyZHdhcmUucGFnZS5zY3NzIiwic3JjL2FwcC9jb3JlL3Byb2ZpbGUtaGFyZHdhcmUvcHJvZmlsZS1oYXJkd2FyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURHQTtFQUNJLDJCQUFBO0FDQUo7O0FERUk7RUFDSSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURHSTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDRFI7O0FESUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNGUjs7QURLSTtFQUNJLHNCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Byb2ZpbGUtaGFyZHdhcmUvcHJvZmlsZS1oYXJkd2FyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxufVxuXG4uZm9ybSB7XG4gICAgbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICBcbiAgICBpb24taW5wdXQge1xuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNGMkYyRjI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjdyZW07XG4gICAgfVxuICBcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgIC5tZXNzYWdlLXRleHR7XG4gICAgICAgIGNvbG9yOmJsdWU7IFxuICAgICAgICBmb250LXNpemU6eC1zbWFsbDsgXG4gICAgICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgICAgICAgdGV4dC1hbGlnbjpyaWdodCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zZWxlY3Qtb3B0aW9ue1xuICAgICAgICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbn0iLCIubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybSB7XG4gIG1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbn1cbi5mb3JtIGlvbi1pbnB1dCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OiA0MDA7XG4gIC0tYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAuN3JlbTtcbn1cbi5mb3JtIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5mb3JtIC5tZXNzYWdlLXRleHQge1xuICBjb2xvcjogYmx1ZTtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cbi5mb3JtIC5zZWxlY3Qtb3B0aW9uIHtcbiAgY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/core/profile-hardware/profile-hardware.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/profile-hardware/profile-hardware.page.ts ***!
    \****************************************************************/

  /*! exports provided: ProfileHardwarePage */

  /***/
  function srcAppCoreProfileHardwareProfileHardwarePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileHardwarePage", function () {
      return ProfileHardwarePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/handler/notify/notify.service */
    "./src/app/shared/handler/notify/notify.service.ts");

    var ProfileHardwarePage = /*#__PURE__*/function () {
      function ProfileHardwarePage(fb, // private authService = AuthService,
      notify, router) {
        _classCallCheck(this, ProfileHardwarePage);

        this.fb = fb;
        this.notify = notify;
        this.router = router; // Checker

        this.isLoading = false;
      }

      _createClass(ProfileHardwarePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userForm = this.fb.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.auth.password1)
          });
        } // updated() {
        //   this.isLoading = true
        //   this.authService.changePassword(this.userForm.value).subscribe(
        //     () => {
        //       this.isLoading = false
        //     },
        //     () => {
        //       this.isLoading = false
        //     },
        //     () => {
        //       this.notify.openToastr('Successfully updated information')
        //       this.userForm.reset()
        //       this.navigatePage('/core/profile')
        //     }
        //   )
        // }

      }, {
        key: "navigatePage",
        value: function navigatePage(path) {
          this.router.navigate([path]);
        }
      }, {
        key: "connect",
        value: function connect() {}
      }]);

      return ProfileHardwarePage;
    }();

    ProfileHardwarePage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProfileHardwarePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-profile-hardware',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-hardware.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile-hardware/profile-hardware.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-hardware.page.scss */
      "./src/app/core/profile-hardware/profile-hardware.page.scss"))["default"]]
    })], ProfileHardwarePage);
    /***/
  }
}]);
//# sourceMappingURL=core-profile-hardware-profile-hardware-module-es5.js.map