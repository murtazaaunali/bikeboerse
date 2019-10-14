(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/settings/settings.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<ion-content padding>\n  <!-- Logo -->\n  <div class=\"bg-color\">\n    <div padding-horizontal text-center class=\"animated fadeInDown policies bg-color\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" class=\"backicon\"></ion-back-button>\n      </ion-buttons>\n      <!-- <div class=\"backicon\"><img src=\"../assets/backicon.png\"></div> -->\n      <div class=\"mt2\">\n        <div class=\"text-tc main-div-settings\">\n          <ul class=\"main-nav-settings\">\n            <li (click)=\"openNotifications()\"><span class=\"icon-1\"><img src=\"../assets/bell.png\"></span><span\n                class=\"main-text\">Benachrichtigungen</span></li>\n            <li (click)=\"openNotifications()\"><span class=\"icon-1\"><img src=\"../assets/file.png\"></span><span\n                class=\"main-text\">Datenschutz</span>\n            </li>\n            <li (click)=\"openNotifications()\"><span class=\"icon-1\"><img src=\"../assets/file.png\"></span><span\n                class=\"main-text\">Nutzungsbedingungen</span></li>\n            <li (click)=\"openNotifications()\"><span class=\"icon-1\"><img src=\"../assets/file.png\"></span><span\n                class=\"main-text\">Copyright</span></li>\n            <li (click)=\"openNotifications()\"><span class=\"icon-1\"><img src=\"../assets/acc_setting.png\"></span><span\n                class=\"main-text\">Hilfe</span>\n            </li>\n            <li (click)=\"openNotifications()\"><span class=\"icon-1\"><img src=\"../assets/bug.png\"></span><span\n                class=\"main-text\">Störung melden</span>\n            </li>\n          </ul>\n        </div>\n        <p class=\"version\">Version 1.0</p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #fcfcfc;\n}\n\n.mt2 {\n  margin-top: 2rem;\n}\n\n.text-policies {\n  color: #222222;\n  font-size: 18px;\n  font-weight: normal;\n  text-align: center;\n}\n\n.backicon {\n  width: 12px;\n}\n\n.version {\n  color: #444444;\n  margin-top: 10px;\n  font-size: 12px;\n}\n\n.policies {\n  position: relative;\n}\n\nspan.icon-1 {\n  width: 30%;\n  float: left;\n}\n\nspan.main-text {\n  width: 70%;\n  float: left;\n  text-align: left;\n}\n\n.main-nav-settings {\n  list-style: none;\n  margin: 10px;\n  padding: 10px;\n  font-size: 14px;\n  color: #444444;\n  font-weight: normal;\n  display: grid;\n}\n\n.main-nav-settings li {\n  padding: 20px 10px;\n}\n\nspan.icon-1 img {\n  width: auto;\n  height: 18px;\n  float: left;\n}\n\n.backicon {\n  display: block;\n}\n\n.backicon img {\n  max-width: 18px !important;\n  display: block;\n}\n\n.footer {\n  margin-bottom: 0px;\n  background: #fff;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nbutton.footer {\n  padding: 0px;\n  width: 100%;\n  background: transparent;\n  margin: 0px;\n}\n\n.w20 img {\n  width: 20px;\n  margin-bottom: 10px;\n}\n\n.label-footer {\n  font-size: 12px;\n}\n\nfooter {\n  border-top: 2px solid #fcfcfc;\n  padding-top: 5px !important;\n}\n\n.text-tc {\n  background: white;\n  border: 1px solid #c3c3c3;\n  padding: 10px;\n  text-align: center;\n  color: #555555;\n  font-size: 12px;\n  border-radius: 3px;\n  width: 85%;\n  margin: 0px auto;\n}\n\nspan.strong-txt {\n  font-weight: bold;\n}\n\n.hr-myAccount {\n  margin: 20px auto;\n  width: 60%;\n  height: 1px;\n  background: #c3c3c3;\n}\n\n.animated.fadeInDown.policies {\n  padding: 0px;\n}\n\nion-segment-button.md.segment-button-has-label.segment-button-has-label-only.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant.hydrated {\n  font-size: 12px;\n}\n\n.padding-0 button.button-native {\n  padding: 0px !important;\n}\n\nion-ripple-effect.md.hydrated {\n  border: 1px solid #cacaca;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\n:host(.segment-button-checked) {\n  border-color: none !important;\n  border: none !important;\n}\n\nion-segment-button {\n  height: 30px;\n  min-height: 30px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 50px !important;\n  min-width: 10px !important;\n  border: 1px solid #cacaca;\n  margin: 2px;\n  padding: 2px;\n  font-size: 10px !important;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSwrQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURLQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBRUUsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDSEY7O0FET0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNKRjs7QURPQTtFQUNFLGNBQUE7QUNKRjs7QURPQTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQ0pGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURXQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDUkY7O0FEYUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNWRjs7QURhQTtFQUNFLGVBQUE7QUNWRjs7QURhQTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7QUNWRjs7QURhQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDVkY7O0FEYUE7RUFDRSxpQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDVkY7O0FEYUE7RUFDRSxZQUFBO0FDVkY7O0FEYUE7RUFDRSxlQUFBO0FDVkY7O0FEYUE7RUFDRSx1QkFBQTtBQ1ZGOztBRGFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDVkY7O0FEYUE7RUFDRSw2QkFBQTtFQUNBLHVCQUFBO0FDVkY7O0FEYUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYmctY29sb3J7YmFja2dyb3VuZDpyZWQgIWltcG9ydGFudDt9XG5pb24tY29udGVudCB7XG5cbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbn1cblxuLm10MiB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG5cbn1cblxuLnRleHQtcG9saWNpZXMge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNraWNvbiB7XG5cbiAgd2lkdGg6IDEycHg7XG59XG5cbi52ZXJzaW9uIHtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnBvbGljaWVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5zcGFuLmljb24tMSB7XG4gIHdpZHRoOiAzMCU7XG4gIGZsb2F0OiBsZWZ0O1xuXG59XG5cbnNwYW4ubWFpbi10ZXh0IHtcbiAgd2lkdGg6IDcwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5tYWluLW5hdi1zZXR0aW5ncyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLm1haW4tbmF2LXNldHRpbmdzIGxpIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuXG5zcGFuLmljb24tMSBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxOHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmJhY2tpY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5iYWNraWNvbiBpbWcge1xuICBtYXgtd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLmZvb3RlciB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcblxuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG5cbn1cblxuYnV0dG9uLmZvb3RlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDBweDtcblxuXG59XG5cbi53MjAgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sYWJlbC1mb290ZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmNmY2ZjO1xuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXRjIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG5zcGFuLnN0cm9uZy10eHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhyLW15QWNjb3VudCB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2MzYzNjMztcbn1cblxuLmFuaW1hdGVkLmZhZGVJbkRvd24ucG9saWNpZXMge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbi5tZC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkuc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudC5oeWRyYXRlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnBhZGRpbmctMCBidXR0b24uYnV0dG9uLW5hdGl2ZSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50XG59XG5cbmlvbi1yaXBwbGUtZWZmZWN0Lm1kLmh5ZHJhdGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOmhvc3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICBtYXJnaW46IDJweDtcbiAgcGFkZGluZzogMnB4O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xufVxuXG4ubXQyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnRleHQtcG9saWNpZXMge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNraWNvbiB7XG4gIHdpZHRoOiAxMnB4O1xufVxuXG4udmVyc2lvbiB7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wb2xpY2llcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuc3Bhbi5pY29uLTEge1xuICB3aWR0aDogMzAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuc3Bhbi5tYWluLXRleHQge1xuICB3aWR0aDogNzAlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1haW4tbmF2LXNldHRpbmdzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubWFpbi1uYXYtc2V0dGluZ3MgbGkge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG5cbnNwYW4uaWNvbi0xIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uYmFja2ljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJhY2tpY29uIGltZyB7XG4gIG1heC13aWR0aDogMThweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuYnV0dG9uLmZvb3RlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDBweDtcbn1cblxuLncyMCBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxhYmVsLWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmY2ZjZmM7XG4gIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLnRleHQtdGMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU1NTU1NTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbnNwYW4uc3Ryb25nLXR4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaHItbXlBY2NvdW50IHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjYzNjM2MzO1xufVxuXG4uYW5pbWF0ZWQuZmFkZUluRG93bi5wb2xpY2llcyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uLm1kLnNlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwtb25seS5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3AuaW9uLWFjdGl2YXRhYmxlLmlvbi1hY3RpdmF0YWJsZS1pbnN0YW50Lmh5ZHJhdGVkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucGFkZGluZy0wIGJ1dHRvbi5idXR0b24tbmF0aXZlIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yaXBwbGUtZWZmZWN0Lm1kLmh5ZHJhdGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOmhvc3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICBtYXJnaW46IDJweDtcbiAgcGFkZGluZzogMnB4O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");



var SettingsPage = /** @class */ (function () {
    function SettingsPage(iab) {
        this.iab = iab;
    }
    SettingsPage.prototype.openNotifications = function () {
        var browser = this.iab.create('https://bikeboerse.com/faq/');
    };
    SettingsPage.prototype.openDataProtection = function () {
        var browser = this.iab.create('https://bikeboerse.com/faq/');
    };
    SettingsPage.prototype.openTermsofUse = function () {
        var browser = this.iab.create('https://bikeboerse.com/faq/');
    };
    SettingsPage.prototype.openCopyrights = function () {
        var browser = this.iab.create('https://bikeboerse.com/faq/');
    };
    SettingsPage.prototype.openHelp = function () {
        var browser = this.iab.create('https://bikeboerse.com/faq/');
    };
    SettingsPage.prototype.openReportFault = function () {
        var browser = this.iab.create('https://bikeboerse.com/faq/');
    };
    SettingsPage.prototype.ngOnInit = function () {
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es5.js.map