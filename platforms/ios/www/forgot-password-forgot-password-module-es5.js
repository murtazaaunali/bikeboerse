(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>forgot-password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- Logo -->\n    <div padding-horizontal text-center class=\"animated fadeInDown main-login-bg\">\n        <!-- <div class=\"backicon\"><img src=\"../assets/backicon-white.png\"></div> -->\n      <div class=\"mainDiv\">\n        <div class=\"image-circle-avatar\"></div>\n        <h2 ion-text class=\"white\">\n          ANMELDEN\n        </h2>\n      </div>\n    </div>\n  \n    <!-- Login form -->\n    <form class=\"list-form\">\n  \n  \n      <ion-input type=\"email\" aria-placeholder=\"Email\" placeholder=\"Email\" class=\"input-login\"></ion-input>\n  \n  \n     \n      <button ion-button icon-start block color=\"dark\" class=\"button-login\">\n  \n          Passwort vergessen\n      </button>\n  \n     \n\n  \n  \n      \n    </form>\n  \n\n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  width: 80%;\n  margin: 0px auto;\n}\n\n.main-login-bg {\n  width: 100%;\n  height: auto;\n  background-image: url('avatar-bg.jpg');\n  margin-bottom: 20px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.mainDiv {\n  padding: 13px 0px;\n}\n\n.image-circle-avatar {\n  background: #fff;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  text-align: center;\n  margin: 0px auto;\n  position: relative;\n  top: 10px;\n}\n\nion-input.sc-ion-input-md-h.sc-ion-input-md-s.md.hydrated {\n  border: 1px solid #d1d3d4;\n  padding: 10px;\n  border-radius: 160px;\n  color: #555555;\n  margin-bottom: 10px;\n  padding-left: 24px;\n  font-size: 16px;\n}\n\nmy .white {\n  color: #fff;\n  font-weight: 300;\n  margin-top: 30px;\n}\n\nbutton {\n  width: 100%;\n  border: none;\n  border-radius: 160px;\n  color: #fff;\n  margin-bottom: 10px;\n  padding: 18px !important;\n  font-size: 16px;\n  background: #62c2e4;\n}\n\nion-input.sc-ion-input-md-h.sc-ion-input-md-s.md.hydrated {\n  border: 1px solid #d1d3d4;\n  border-radius: 160px;\n  color: #555555;\n  margin-bottom: 10px;\n  padding-left: 24px !important;\n  font-size: 16px;\n}\n\n.item-native {\n  border: none !important;\n}\n\n.button-login {\n  width: 100%;\n  border: none;\n  border-radius: 160px;\n  color: #fff;\n  margin-bottom: 10px;\n  padding: 18px !important;\n  font-size: 16px;\n  background: #62c2e4;\n  margin-top: 4px;\n}\n\n.login-button-fb {\n  background: #fff;\n  color: #3a5998;\n  border: 2px solid #3b5998;\n  font-size: 16px;\n}\n\n.fb-logo img {\n  height: 20px;\n  float: left;\n}\n\n.hr {\n  width: 100%;\n  height: 1px;\n  background: #cacaca;\n  margin: 20px 0px;\n}\n\n.backicon {\n  width: 12px;\n  float: left;\n  margin-top: 12px;\n}\n\n.white {\n  color: #fff !important;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUssVUFBQTtFQUFVLGdCQUFBO0FDR2Y7O0FERkE7RUFHRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDR0Y7O0FEQUE7RUFBUyxpQkFBQTtBQ0lUOztBREhBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNELGtCQUFBO0VBQ0EsU0FBQTtBQ01EOztBREZBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNLRjs7QURKQztFQUNNLFdBQUE7RUFBVyxnQkFBQTtFQUFxQixnQkFBQTtBQ1N2Qzs7QURSQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1dGOztBRFBBO0VBQ0UseUJBQUE7RUFFQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ1NGOztBRFBBO0VBQWEsdUJBQUE7QUNXYjs7QURUQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNZRjs7QURWQTtFQUFpQixnQkFBQTtFQUNmLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNjRjs7QURiRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDZ0JKOztBRGJFO0VBRUEsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDZUY7O0FEYkU7RUFFTSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDZVI7O0FEYkk7RUFBTyxzQkFBQTtFQUF1QixtQkFBQTtBQ2tCbEMiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17d2lkdGg6ODAlO21hcmdpbjowcHggYXV0bzt9XG4ubWFpbi1sb2dpbi1iZ3tcbiBcbiAgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2F2YXRhci1iZy5qcGcnKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgXG59XG4ubWFpbkRpdntwYWRkaW5nOjEzcHggMHB4O31cbi5pbWFnZS1jaXJjbGUtYXZhdGFye1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiBwb3NpdGlvbjogcmVsYXRpdmU7XG4gdG9wOjEwcHg7XG5cblxufVxuaW9uLWlucHV0LnNjLWlvbi1pbnB1dC1tZC1oLnNjLWlvbi1pbnB1dC1tZC1zLm1kLmh5ZHJhdGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDNkNDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTYwcHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1teVxuLndoaXRle2NvbG9yOiNmZmY7Zm9udC13ZWlnaHQ6IDMwMDsgICAgbWFyZ2luLXRvcDogMzBweDt9XG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xufVxuXG5cbmlvbi1pbnB1dC5zYy1pb24taW5wdXQtbWQtaC5zYy1pb24taW5wdXQtbWQtcy5tZC5oeWRyYXRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQzZDQ7XG4gIFxuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaXRlbS1uYXRpdmV7Ym9yZGVyOm5vbmUgIWltcG9ydGFudDtcbn1cbi5idXR0b24tbG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xuICBtYXJnaW4tdG9wOjRweDtcbn1cbi5sb2dpbi1idXR0b24tZmJ7YmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMzYTU5OTg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzYjU5OTg7XG4gIGZvbnQtc2l6ZTogMTZweDt9XG4gIC5mYi1sb2dvIGltZyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgIFxuICAgICAgfVxuICAuaHJcbiAge1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MXB4O1xuICBiYWNrZ3JvdW5kOiAgI2NhY2FjYTtcbiAgbWFyZ2luOjIwcHggMHB4O1xuICB9XG4gIC5iYWNraWNvbiB7XG4gICAgXG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIH1cbiAgICAud2hpdGV7Y29sb3I6I2ZmZiAhaW1wb3J0YW50OyBmb250LXdlaWdodCA6IG5vcm1hbDt9ICAgIiwiZm9ybSB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5tYWluLWxvZ2luLWJnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2F2YXRhci1iZy5qcGdcIik7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5tYWluRGl2IHtcbiAgcGFkZGluZzogMTNweCAwcHg7XG59XG5cbi5pbWFnZS1jaXJjbGUtYXZhdGFyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuXG5pb24taW5wdXQuc2MtaW9uLWlucHV0LW1kLWguc2MtaW9uLWlucHV0LW1kLXMubWQuaHlkcmF0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkM2Q0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5teSAud2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTYwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbn1cblxuaW9uLWlucHV0LnNjLWlvbi1pbnB1dC1tZC1oLnNjLWlvbi1pbnB1dC1tZC1zLm1kLmh5ZHJhdGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDNkNDtcbiAgYm9yZGVyLXJhZGl1czogMTYwcHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1sb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE2MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMThweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmxvZ2luLWJ1dHRvbi1mYiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjM2E1OTk4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjM2I1OTk4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5mYi1sb2dvIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5ociB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2NhY2FjYTtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLmJhY2tpY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage() {
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
    };
    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.page.html"),
            styles: [__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module-es5.js.map