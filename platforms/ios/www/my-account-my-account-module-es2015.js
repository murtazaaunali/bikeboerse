(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-account-my-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/my-account/my-account.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-account/my-account.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<ion-content padding>\n\t<!-- Logo -->\n\t<account-userinfo></account-userinfo>\n\t<!-- Header -->\n\t<myaccount-header></myaccount-header>\n\t<!-- /Header -->\n\t<button class=\"myAccountbtn\">Rechnungen</button>\n\t<button class=\"myAccountbtn\" (click)=\"updateProfile()\">Nickname ändern</button>\n\t<button class=\"myAccountbtn\" (click)=\"changePassword()\">Passwort ändern</button>\n\t<button class=\"myAccountbtn\" (click)=\"logout()\">Logout</button>\n\t<div class=\"hr-myAccount\"></div>\n\n\t<p class=\"text-tc\">\n\t\tHändler können ihre Pflichtangaben über unsere <span class=\"strong-txt\">Homepage</span>\n\t\thinterlassen!\n\t</p>\n\n\n</ion-content>\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/my-account/my-account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.module.ts ***!
  \*************************************************/
/*! exports provided: MyAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPageModule", function() { return MyAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _my_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-account.page */ "./src/app/my-account/my-account.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _my_account_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountPage"]
    }
];
let MyAccountPageModule = class MyAccountPageModule {
};
MyAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_my_account_page__WEBPACK_IMPORTED_MODULE_6__["MyAccountPage"]]
    })
], MyAccountPageModule);



/***/ }),

/***/ "./src/app/my-account/my-account.page.scss":
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-register {\n  color: #222222;\n  font-size: 18px;\n  font-weight: normal;\n  text-align: center;\n}\n\n.backicon {\n  float: left;\n  width: 12px;\n}\n\n.register-account {\n  position: relative;\n}\n\n.main-image img {\n  width: 100px;\n}\n\nimg.cam-img {\n  width: 30px !important;\n  position: relative;\n  left: 8px;\n}\n\n.settings {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n\n.settings img {\n  max-width: 30px !important;\n}\n\n.backicon img {\n  max-width: 18px !important;\n}\n\nbutton.myAccountbtn {\n  border: 1px solid #c3c3c3;\n  background: #fff;\n  width: 100%;\n  padding: 12px 0px;\n  margin: 10px 0px;\n  border-radius: 5px;\n  color: #555555;\n  font-weight: 400;\n}\n\n.footer {\n  margin-bottom: 0px;\n  background: #fff;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nbutton.footer {\n  padding: 0px;\n  width: 100%;\n  background: transparent;\n  margin: 0px;\n}\n\n.w20 img {\n  width: 20px;\n  margin-bottom: 10px;\n}\n\n.label-footer {\n  font-size: 12px;\n}\n\nfooter {\n  border-top: 2px solid #fcfcfc;\n  padding-top: 5px !important;\n}\n\np.text-tc {\n  background: white;\n  border: 1px solid #cacaca;\n  padding: 10px;\n  text-align: center;\n  color: #555555;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\nspan.strong-txt {\n  font-weight: bold;\n}\n\n.hr-myAccount {\n  margin: 20px auto;\n  width: 60%;\n  height: 1px;\n  background: #c3c3c3;\n}\n\n.animated.fadeInDown.register-account {\n  padding: 0px;\n}\n\nion-segment-button.md.segment-button-has-label.segment-button-has-label-only.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant.hydrated {\n  font-size: 12px;\n}\n\n.padding-0 button.button-native {\n  padding: 0px !important;\n}\n\nion-ripple-effect.md.hydrated {\n  border: 1px solid #cacaca;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\n:host(.segment-button-checked) {\n  border-color: none !important;\n  border: none !important;\n}\n\nion-segment-button {\n  height: 34px;\n  min-height: 30px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 50px !important;\n  min-width: 10px !important;\n  border: 1px solid #cacaca;\n  margin: 2px;\n  padding: 2px;\n  font-size: 10px !important;\n  border-radius: 4px;\n}\n\nion-segment-button.padding-0.hydrated.md.segment-button-has-label.segment-button-has-label-only.segment-button-checked.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant {\n  background: #62c2e4;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvbXktYWNjb3VudC9teS1hY2NvdW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXktYWNjb3VudC9teS1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURNQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDSEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNMSjs7QURRQTtFQUNJLGVBQUE7QUNMSjs7QURRQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7QUNMSjs7QURRQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEUUE7RUFDSSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0FDTEo7O0FEUUE7RUFDSSxlQUFBO0FDTEo7O0FEUUE7RUFDSSx1QkFBQTtBQ0xKOztBRFFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDTEo7O0FEUUE7RUFDSSw2QkFBQTtFQUNBLHVCQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEU0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL215LWFjY291bnQvbXktYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1yZWdpc3RlciB7XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2ljb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMnB4O1xufVxuXG4ucmVnaXN0ZXItYWNjb3VudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbi1pbWFnZSBpbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuaW1nLmNhbS1pbWcge1xuICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDhweDtcbn1cblxuLnNldHRpbmdzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDBweDtcbn1cblxuLnNldHRpbmdzIGltZyB7XG4gICAgbWF4LXdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNraWNvbiBpbWcge1xuICAgIG1heC13aWR0aDogMThweCAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ubXlBY2NvdW50YnRuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuXG4uZm9vdGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcblxuXG59XG5cbmJ1dHRvbi5mb290ZXIge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW46IDBweDtcblxuXG59XG5cbi53MjAgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGFiZWwtZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbmZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmY2ZjZmM7XG4gICAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG5wLnRleHQtdGMge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuc3Bhbi5zdHJvbmctdHh0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhyLW15QWNjb3VudCB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjYzNjM2MzO1xufVxuXG4uYW5pbWF0ZWQuZmFkZUluRG93bi5yZWdpc3Rlci1hY2NvdW50IHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbi5tZC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkuc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudC5oeWRyYXRlZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucGFkZGluZy0wIGJ1dHRvbi5idXR0b24tbmF0aXZlIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudFxufVxuXG5pb24tcmlwcGxlLWVmZmVjdC5tZC5oeWRyYXRlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOmhvc3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpIHtcbiAgICBib3JkZXItY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICAgIG1hcmdpbjogMnB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uLnBhZGRpbmctMC5oeWRyYXRlZC5tZC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkuc2VnbWVudC1idXR0b24tY2hlY2tlZC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3AuaW9uLWFjdGl2YXRhYmxlLmlvbi1hY3RpdmF0YWJsZS1pbnN0YW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xuICAgIGNvbG9yOiAjZmZmO1xufSIsIi50ZXh0LXJlZ2lzdGVyIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2ljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEycHg7XG59XG5cbi5yZWdpc3Rlci1hY2NvdW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbi1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbmltZy5jYW0taW1nIHtcbiAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA4cHg7XG59XG5cbi5zZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5zZXR0aW5ncyBpbWcge1xuICBtYXgtd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmJhY2tpY29uIGltZyB7XG4gIG1heC13aWR0aDogMThweCAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ubXlBY2NvdW50YnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5idXR0b24uZm9vdGVyIHtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4udzIwIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGFiZWwtZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5mb290ZXIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2ZjZmNmYztcbiAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG5wLnRleHQtdGMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU1NTU1NTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbnNwYW4uc3Ryb25nLXR4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaHItbXlBY2NvdW50IHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjYzNjM2MzO1xufVxuXG4uYW5pbWF0ZWQuZmFkZUluRG93bi5yZWdpc3Rlci1hY2NvdW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ubWQuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLnNlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbC1vbmx5LnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLXRvcC5pb24tYWN0aXZhdGFibGUuaW9uLWFjdGl2YXRhYmxlLWluc3RhbnQuaHlkcmF0ZWQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wYWRkaW5nLTAgYnV0dG9uLmJ1dHRvbi1uYXRpdmUge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXJpcHBsZS1lZmZlY3QubWQuaHlkcmF0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG46aG9zdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCkge1xuICBib3JkZXItY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGhlaWdodDogMzRweDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbi5wYWRkaW5nLTAuaHlkcmF0ZWQubWQuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLnNlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbC1vbmx5LnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQuc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudCB7XG4gIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/my-account/my-account.page.ts":
/*!***********************************************!*\
  !*** ./src/app/my-account/my-account.page.ts ***!
  \***********************************************/
/*! exports provided: MyAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountPage", function() { return MyAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/authentication.service */ "./src/app/services/authentication.service.ts");



let MyAccountPage = class MyAccountPage {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
    }
    updateProfile() {
    }
    changePassword() {
    }
    logout() {
        this.authenticationService.logout();
    }
};
MyAccountPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
MyAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-account',
        template: __webpack_require__(/*! raw-loader!./my-account.page.html */ "./node_modules/raw-loader/index.js!./src/app/my-account/my-account.page.html"),
        styles: [__webpack_require__(/*! ./my-account.page.scss */ "./src/app/my-account/my-account.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], MyAccountPage);



/***/ })

}]);
//# sourceMappingURL=my-account-my-account-module-es2015.js.map