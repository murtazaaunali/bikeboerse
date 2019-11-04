(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<ion-content>\n  <!-- Logo -->\n  <div padding-horizontal text-center class=\"animated fadeInDown main-login-bg\">\n    <!-- <div class=\"backicon\"><img src=\"../assets/backicon-white.png\"></div> -->\n    <div class=\"mainDiv\">\n      <div class=\"image-circle-avatar\"></div>\n      <h2 ion-text class=\"white\">\n        ANMELDEN\n      </h2>\n    </div>\n  </div>\n  <!-- Login form -->\n  <form class=\"list-form\">\n    <ion-input type=\"email\" aria-placeholder=\"Email\" placeholder=\"Email\" class=\"input-login\" name=\"username\"\n      [(ngModel)]=\"username\">\n    </ion-input>\n    <ion-input type=\"password\" aria-placeholder=\"Password\" placeholder=\"Password\" name=\"password\"\n      [(ngModel)]=\"password\"></ion-input>\n    <button ion-button icon-start block color=\"dark\" class=\"button-login\" (click)=\"login()\">\n      LOGIN\n    </button>\n    <div class=\"hr\"></div>\n    <button ion-button icon-start block color=\"dark\" class=\"button-login login-button-fb\" (click)=\"loginWithFB()\">\n      <div class=\"fb-logo\"><img src=\"../assets/fb-logo.png\"></div>\n      LOGIN MIT FACEBOOK\n    </button>\n    <div class=\"hr\"></div>\n    <button ion-button icon-start block color=\"dark\" class=\"button-login\" [routerLink]=\"['/register']\">\n      Neuen Account erstellen\n    </button>\n    <button ion-button icon-start block color=\"dark\" class=\"button-login\" [routerLink]=\"['/']\">\n      Passwort vergessen\n    </button>\n  </form>\n\n\n\n\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  width: 80%;\n  margin: 0px auto;\n}\n\n.main-login-bg {\n  width: 100%;\n  height: auto;\n  background-image: url('avatar-bg.jpg');\n  margin-bottom: 20px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.mainDiv {\n  padding: 35px 0px;\n}\n\n.image-circle-avatar {\n  background: #fff;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  margin: 0px auto;\n  position: relative;\n  top: 10px;\n}\n\nion-input {\n  border: 1px solid #d1d3d4;\n  padding: 5px !important;\n  border-radius: 160px;\n  color: #555555;\n  margin-bottom: 10px;\n  padding-left: 20px !important;\n  font-size: 14px;\n  background: #fff;\n}\n\nmy .white {\n  color: #fff;\n  font-weight: 300;\n  margin-top: 30px;\n}\n\nbutton {\n  width: 100%;\n  border: none;\n  border-radius: 160px;\n  color: #fff;\n  margin-bottom: 10px;\n  padding: 18px !important;\n  font-size: 16px;\n  background: #62c2e4;\n}\n\nion-input.sc-ion-input-md-h.sc-ion-input-md-s.md.hydrated {\n  border: 1px solid #d1d3d4;\n  border-radius: 160px;\n  color: #555555;\n  margin-bottom: 10px;\n  padding-left: 24px !important;\n  font-size: 16px;\n}\n\n.item-native {\n  border: none !important;\n}\n\n.button-login {\n  width: 100%;\n  border: none;\n  border-radius: 160px;\n  color: #fff;\n  margin-bottom: 10px;\n  padding: 18px !important;\n  font-size: 16px;\n  background: #62c2e4;\n  margin-top: 4px;\n}\n\n.login-button-fb {\n  background: #fff;\n  color: #3a5998;\n  border: 2px solid #3b5998;\n  font-size: 16px;\n  padding: 15px !important;\n}\n\n.fb-logo img {\n  height: 20px;\n  float: left;\n}\n\n.hr {\n  width: 100%;\n  height: 1px;\n  background: #cacaca;\n  margin: 20px 0px;\n}\n\n.backicon {\n  width: 12px;\n  float: left;\n  margin-top: 12px;\n}\n\n.white {\n  color: #fff !important;\n  font-weight: 250;\n  font-size: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0FGOztBRElBO0VBQ0UseUJBQUE7RUFFQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UsdUJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FETUE7RUFFRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5tYWluLWxvZ2luLWJnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvYXZhdGFyLWJnLmpwZycpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG59XG5cbi5tYWluRGl2IHtcbiAgcGFkZGluZzogMzVweCAwcHg7XG59XG5cbi5pbWFnZS1jaXJjbGUtYXZhdGFyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQzZDQ7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbm15IC53aGl0ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xufVxuXG5cbmlvbi1pbnB1dC5zYy1pb24taW5wdXQtbWQtaC5zYy1pb24taW5wdXQtbWQtcy5tZC5oeWRyYXRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQzZDQ7XG5cbiAgYm9yZGVyLXJhZGl1czogMTYwcHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1sb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE2MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMThweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmxvZ2luLWJ1dHRvbi1mYiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjM2E1OTk4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjM2I1OTk4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6MTVweCAhaW1wb3J0YW50O1xufVxuXG4uZmItbG9nbyBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuXG59XG5cbi5ociB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2NhY2FjYTtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLmJhY2tpY29uIHtcblxuICB3aWR0aDogMTJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAyNTA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn0iLCJmb3JtIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLm1haW4tbG9naW4tYmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYXZhdGFyLWJnLmpwZ1wiKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLm1haW5EaXYge1xuICBwYWRkaW5nOiAzNXB4IDBweDtcbn1cblxuLmltYWdlLWNpcmNsZS1hdmF0YXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDNkNDtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE2MHB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxubXkgLndoaXRlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE2MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMThweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG59XG5cbmlvbi1pbnB1dC5zYy1pb24taW5wdXQtbWQtaC5zYy1pb24taW5wdXQtbWQtcy5tZC5oeWRyYXRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQzZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDE2MHB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tbG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5sb2dpbi1idXR0b24tZmIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzNhNTk5ODtcbiAgYm9yZGVyOiAycHggc29saWQgIzNiNTk5ODtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mYi1sb2dvIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5ociB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2NhY2FjYTtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLmJhY2tpY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMjUwO1xuICBmb250LXNpemU6IDM2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/authentication.service */ "./src/app/services/authentication.service.ts");



var LoginPage = /** @class */ (function () {
    function LoginPage(authenticationService) {
        this.authenticationService = authenticationService;
    }
    LoginPage.prototype.login = function () {
        this.authenticationService.login(this.username, this.password);
    };
    LoginPage.prototype.loginWithFB = function () {
        this.authenticationService.loginWithFB();
    };
    LoginPage.prototype.ngOnInit = function () {
        this.authenticationService.ifLoggedIn();
    };
    LoginPage.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map