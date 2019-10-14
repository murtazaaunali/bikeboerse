(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<ion-content padding>\n  <!-- Logo -->\n  <div padding-horizontal text-center class=\"animated fadeInDown register-account\">\n    <div class=\"backicon\"><img src=\"../assets/backicon.png\"></div>\n    <h2 ion-text class=\"text-primary text-register\">\n      Account erstellen\n    </h2>\n  </div>\n  <!-- Login form -->\n  <ion-card>\n    <form class=\"list-form\">\n      <ion-input type=\"text\" placeholder=\"Nickname\" [(ngModel)]=\"nickname\" name=\"nickname\" class=\"input-login\">\n      </ion-input>\n      <ion-input type=\"text\" placeholder=\"Vorname\" [(ngModel)]=\"firstname\" name=\"firstname\" class=\"input-login\">\n      </ion-input>\n      <ion-input type=\"text\" placeholder=\"Nachname\" [(ngModel)]=\"lastname\" name=\"lastname\" class=\"input-login\">\n      </ion-input>\n      <ion-input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" class=\"input-login\"></ion-input>\n      <ion-input type=\"email\" placeholder=\"Email wiederholen\" [(ngModel)]=\"verifyemail\" name=\"verifyemail\"\n        class=\"input-login\"></ion-input>\n      <ion-input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" class=\"input-login\">\n      </ion-input>\n      <ion-input type=\"password\" placeholder=\"Password wiederholen\" [(ngModel)]=\"verifypassword\" name=\"verifypassword\"\n        class=\"input-login\"></ion-input>\n      <p class=\"tc\">Mit der Erstellung eines Account akzeptieren Sie unsere <span class=\"blue\">AGB</span>\n        sowie\n        <span class=\"blue\">Datenschutzerklärung</span>\n      </p>\n      <button ion-button icon-start block color=\"dark\" (click)=\"register()\" class=\"button-login\">\n        ACCOUNT ERSTELLEN\n      </button>\n    </form>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");








const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-login-bg {\n  width: 100%;\n  height: 60%;\n  background-image: url('avatar-bg.jpg');\n  margin-bottom: 20px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.mainDiv {\n  padding: 13px 0px;\n}\n\n.image-circle-avatar {\n  background: #fff;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  text-align: center;\n  margin: 0px auto;\n  position: relative;\n  top: 10px;\n}\n\nion-card {\n  padding: 35px 10px;\n  background: #fff;\n  margin: 0px;\n  border-radius: 0px;\n}\n\nion-input.sc-ion-input-md-h.sc-ion-input-md-s.md.hydrated {\n  border: 1px solid #d1d3d4;\n  padding: 10px;\n  border-radius: 160px;\n  color: #555555;\n  margin-bottom: 10px;\n  padding-left: 24px;\n  font-size: 14px;\n}\n\n.white {\n  color: #fff;\n  font-weight: 300;\n  margin-top: 30px;\n}\n\nbutton {\n  width: 80%;\n  border: none;\n  border-radius: 160px;\n  color: #fff;\n  margin-bottom: 10px;\n  padding: 18px !important;\n  font-size: 14px;\n  background: #62c2e4;\n}\n\nion-input.sc-ion-input-md-h.sc-ion-input-md-s.md.hydrated {\n  border: 1px solid #d1d3d4;\n  border-radius: 160px;\n  color: #555555;\n  margin-bottom: 10px;\n  padding-left: 24px !important;\n  font-size: 16px;\n}\n\n.item-native {\n  border: none !important;\n}\n\n.button-login {\n  width: 100%;\n  border: none;\n  border-radius: 160px;\n  color: #fff;\n  margin-bottom: 10px;\n  padding: 18px !important;\n  font-size: 16px;\n  background: #62c2e4;\n  margin-top: 4px;\n}\n\n.login-button-fb {\n  background: #fff;\n  color: #3a5998;\n  border: 2px solid #3b5998;\n  font-size: 14px;\n}\n\n.hr {\n  width: 100%;\n  height: 1px;\n  background: #cacaca;\n  margin: 20px 0px;\n}\n\n.text-register {\n  color: #222222;\n  font-size: 18px;\n  font-weight: normal;\n}\n\n.backicon {\n  float: left;\n  width: 12px;\n}\n\n.register-account {\n  margin: 20px 0px;\n  margin-bottom: 30px;\n}\n\nion-input {\n  border: 1px solid #e6e6e6;\n  border-radius: 20px;\n  padding: 0px 10px !important;\n  margin-bottom: 10px;\n}\n\n.tc {\n  font-size: 16px;\n  width: 100%;\n  text-align: center;\n  color: #444444;\n  line-height: 1.5;\n  margin: 20px auto;\n}\n\n.blue {\n  color: #1f93c2;\n}\n\nform {\n  width: 80%;\n  margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDREY7O0FES0E7RUFDRSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0ZGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURRQTtFQUNFLHlCQUFBO0VBRUEsb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNORjs7QURTQTtFQUNFLHVCQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDTkY7O0FEU0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNORjs7QURnQkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNiRjs7QURpQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDZEY7O0FEbUJBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ2hCRjs7QURtQkE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQ2hCRjs7QURtQkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsY0FBQTtBQ2hCRjs7QURtQkE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNoQkYiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1sb2dpbi1iZyB7XG5cblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2F2YXRhci1iZy5qcGcnKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxufVxuXG4ubWFpbkRpdiB7XG4gIHBhZGRpbmc6IDEzcHggMHB4O1xufVxuXG4uaW1hZ2UtY2lyY2xlLWF2YXRhciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcblxuXG59XG5cbmlvbi1jYXJkIHtcbiAgcGFkZGluZzogMzVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG5pb24taW5wdXQuc2MtaW9uLWlucHV0LW1kLWguc2MtaW9uLWlucHV0LW1kLXMubWQuaHlkcmF0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkM2Q0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xufVxuXG5cbmlvbi1pbnB1dC5zYy1pb24taW5wdXQtbWQtaC5zYy1pb24taW5wdXQtbWQtcy5tZC5oeWRyYXRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQzZDQ7XG5cbiAgYm9yZGVyLXJhZGl1czogMTYwcHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1sb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE2MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMThweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmxvZ2luLWJ1dHRvbi1mYiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjM2E1OTk4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjM2I1OTk4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8vICAuZmItbG9nbyB7XG4vLyAgICAgIHdpZHRoOiA2MHB4O1xuLy8gICAgICBoZWlnaHQ6IDYwcHg7XG5cbi8vICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ZiLWxvZ28ucG5nXCIpO1xuXG4vLyAgICB9XG4uaHIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNjYWNhY2E7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cblxuLnRleHQtcmVnaXN0ZXIge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5cblxuLmJhY2tpY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMnB4O1xufVxuXG4ucmVnaXN0ZXItYWNjb3VudCB7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50YyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiAjMWY5M2MyO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn0iLCIubWFpbi1sb2dpbi1iZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2F2YXRhci1iZy5qcGdcIik7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5tYWluRGl2IHtcbiAgcGFkZGluZzogMTNweCAwcHg7XG59XG5cbi5pbWFnZS1jaXJjbGUtYXZhdGFyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIHBhZGRpbmc6IDM1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuaW9uLWlucHV0LnNjLWlvbi1pbnB1dC1tZC1oLnNjLWlvbi1pbnB1dC1tZC1zLm1kLmh5ZHJhdGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDNkNDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTYwcHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLndoaXRlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTYwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbn1cblxuaW9uLWlucHV0LnNjLWlvbi1pbnB1dC1tZC1oLnNjLWlvbi1pbnB1dC1tZC1zLm1kLmh5ZHJhdGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDNkNDtcbiAgYm9yZGVyLXJhZGl1czogMTYwcHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1sb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE2MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMThweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmxvZ2luLWJ1dHRvbi1mYiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjM2E1OTk4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjM2I1OTk4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ociB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2NhY2FjYTtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuLnRleHQtcmVnaXN0ZXIge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYmFja2ljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEycHg7XG59XG5cbi5yZWdpc3Rlci1hY2NvdW50IHtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMHB4IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRjIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICMxZjkzYzI7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/account.service */ "./src/app/services/account.service.ts");



let RegisterPage = class RegisterPage {
    constructor(accountService) {
        this.accountService = accountService;
    }
    register() {
        this.accountService.registerUser(this.nickname, this.firstname, this.lastname, this.email, this.password);
    }
    ngOnInit() {
    }
};
RegisterPage.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map