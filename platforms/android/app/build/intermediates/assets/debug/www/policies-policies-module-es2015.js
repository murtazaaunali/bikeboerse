(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policies-policies-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/policies/policies.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/policies/policies.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n\n<ion-content padding>\n  <!-- Logo -->\n  <div class=\"bg-color\">\n\n    <div padding-horizontal text-center class=\"animated fadeInDown policies bg-color\">\n\n      <div class=\"backicon\"><img src=\"../assets/backicon.png\"></div>\n\n\n      <div class=\"mt2\">\n\n        <div class=\"text-tc main-div-settings\">\n\n          <ul class=\"main-nav-settings\">\n            <li><span class=\"icon-1\"><img src=\"../assets/bell.png\"></span><span\n                class=\"main-text\">Benachrichtigungen</span></li>\n            <li><span class=\"icon-1\"><img src=\"../assets/file.png\"></span><span class=\"main-text\">Datenschutz</span>\n            </li>\n            <li><span class=\"icon-1\"><img src=\"../assets/file.png\"></span><span\n                class=\"main-text\">Nutzungsbedingungen</span></li>\n            <li><span class=\"icon-1\"><img src=\"../assets/file.png\"></span><span class=\"main-text\">Copyright</span></li>\n            <li><span class=\"icon-1\"><img src=\"../assets/acc_setting.png\"></span><span class=\"main-text\">Hilfe</span>\n            </li>\n            <li><span class=\"icon-1\"><img src=\"../assets/bug.png\"></span><span class=\"main-text\">Störung melden</span>\n            </li>\n\n          </ul>\n\n        </div>\n\n        <p class=\"version\">Version 1.0</p>\n\n\n      </div>\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/policies/policies.module.ts":
/*!*********************************************!*\
  !*** ./src/app/policies/policies.module.ts ***!
  \*********************************************/
/*! exports provided: PoliciesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesPageModule", function() { return PoliciesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _policies_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policies.page */ "./src/app/policies/policies.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _policies_page__WEBPACK_IMPORTED_MODULE_6__["PoliciesPage"]
    }
];
let PoliciesPageModule = class PoliciesPageModule {
};
PoliciesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_policies_page__WEBPACK_IMPORTED_MODULE_6__["PoliciesPage"]]
    })
], PoliciesPageModule);



/***/ }),

/***/ "./src/app/policies/policies.page.scss":
/*!*********************************************!*\
  !*** ./src/app/policies/policies.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: #fcfcfc;\n}\n\n.mt2 {\n  margin-top: 2rem;\n}\n\n.text-policies {\n  color: #222222;\n  font-size: 18px;\n  font-weight: normal;\n  text-align: center;\n}\n\n.backicon {\n  width: 12px;\n}\n\n.version {\n  color: #444444;\n  margin-top: 10px;\n  font-size: 12px;\n}\n\n.policies {\n  position: relative;\n}\n\nspan.icon-1 {\n  width: 30%;\n  float: left;\n}\n\nspan.main-text {\n  width: 70%;\n  float: left;\n  text-align: left;\n}\n\n.main-nav-settings {\n  list-style: none;\n  margin: 10px;\n  padding: 10px;\n  font-size: 14px;\n  color: #444444;\n  font-weight: normal;\n  display: grid;\n}\n\n.main-nav-settings li {\n  padding: 20px 10px;\n}\n\nspan.icon-1 img {\n  width: auto;\n  height: 18px;\n  float: left;\n}\n\n.backicon img {\n  max-width: 18px !important;\n}\n\n.footer {\n  margin-bottom: 0px;\n  background: #fff;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nbutton.footer {\n  padding: 0px;\n  width: 100%;\n  background: transparent;\n  margin: 0px;\n}\n\n.w20 img {\n  width: 20px;\n  margin-bottom: 10px;\n}\n\n.label-footer {\n  font-size: 12px;\n}\n\nfooter {\n  border-top: 2px solid #fcfcfc;\n  padding-top: 5px !important;\n}\n\n.text-tc {\n  background: white;\n  border: 1px solid #c3c3c3;\n  padding: 10px;\n  text-align: center;\n  color: #555555;\n  font-size: 12px;\n  border-radius: 3px;\n  width: 85%;\n  margin: 0px auto;\n}\n\nspan.strong-txt {\n  font-weight: bold;\n}\n\n.hr-myAccount {\n  margin: 20px auto;\n  width: 60%;\n  height: 1px;\n  background: #c3c3c3;\n}\n\n.animated.fadeInDown.policies {\n  padding: 0px;\n}\n\nion-segment-button.md.segment-button-has-label.segment-button-has-label-only.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant.hydrated {\n  font-size: 12px;\n}\n\n.padding-0 button.button-native {\n  padding: 0px !important;\n}\n\nion-ripple-effect.md.hydrated {\n  border: 1px solid #cacaca;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\n:host(.segment-button-checked) {\n  border-color: none !important;\n  border: none !important;\n}\n\nion-segment-button {\n  height: 30px;\n  min-height: 30px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 50px !important;\n  min-width: 10px !important;\n  border: 1px solid #cacaca;\n  margin: 2px;\n  padding: 2px;\n  font-size: 10px !important;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvcG9saWNpZXMvcG9saWNpZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wb2xpY2llcy9wb2xpY2llcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSwrQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBRUksV0FBQTtBQ0hKOztBRE1BO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1BO0VBQ0ksa0JBQUE7QUNISjs7QURNQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDSEo7O0FET0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNKSjs7QURPQTtFQUNJLGtCQUFBO0FDSko7O0FET0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNKSjs7QURPQTtFQUNJLDBCQUFBO0FDSko7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNSSjs7QURhQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ1ZKOztBRGFBO0VBQ0ksZUFBQTtBQ1ZKOztBRGFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtBQ1ZKOztBRGFBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNWSjs7QURhQTtFQUNJLGlCQUFBO0FDVko7O0FEYUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNWSjs7QURhQTtFQUNJLFlBQUE7QUNWSjs7QURhQTtFQUNJLGVBQUE7QUNWSjs7QURhQTtFQUNJLHVCQUFBO0FDVko7O0FEYUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNWSjs7QURhQTtFQUNJLDZCQUFBO0VBQ0EsdUJBQUE7QUNWSjs7QURhQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL3BvbGljaWVzL3BvbGljaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5iZy1jb2xvcntiYWNrZ3JvdW5kOnJlZCAhaW1wb3J0YW50O31cbmlvbi1jb250ZW50IHtcblxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG59XG5cbi5tdDIge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG5cbn1cblxuLnRleHQtcG9saWNpZXMge1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhY2tpY29uIHtcblxuICAgIHdpZHRoOiAxMnB4O1xufVxuXG4udmVyc2lvbiB7XG4gICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wb2xpY2llcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5zcGFuLmljb24tMSB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBmbG9hdDogbGVmdDtcblxufVxuXG5zcGFuLm1haW4tdGV4dCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubWFpbi1uYXYtc2V0dGluZ3Mge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuLm1haW4tbmF2LXNldHRpbmdzIGxpIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG5cbnNwYW4uaWNvbi0xIGltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uYmFja2ljb24gaW1nIHtcbiAgICBtYXgtd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbn1cblxuXG4uZm9vdGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcblxuXG59XG5cbmJ1dHRvbi5mb290ZXIge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW46IDBweDtcblxuXG59XG5cbi53MjAgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGFiZWwtZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbmZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmY2ZjZmM7XG4gICAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC10YyB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzU1NTU1NTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuc3Bhbi5zdHJvbmctdHh0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhyLW15QWNjb3VudCB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjYzNjM2MzO1xufVxuXG4uYW5pbWF0ZWQuZmFkZUluRG93bi5wb2xpY2llcyB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ubWQuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLnNlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbC1vbmx5LnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLXRvcC5pb24tYWN0aXZhdGFibGUuaW9uLWFjdGl2YXRhYmxlLWluc3RhbnQuaHlkcmF0ZWQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnBhZGRpbmctMCBidXR0b24uYnV0dG9uLW5hdGl2ZSB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnRcbn1cblxuaW9uLXJpcHBsZS1lZmZlY3QubWQuaHlkcmF0ZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbjpob3N0KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKSB7XG4gICAgYm9yZGVyLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgICBtYXJnaW46IDJweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xufVxuXG4ubXQyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnRleHQtcG9saWNpZXMge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNraWNvbiB7XG4gIHdpZHRoOiAxMnB4O1xufVxuXG4udmVyc2lvbiB7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wb2xpY2llcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuc3Bhbi5pY29uLTEge1xuICB3aWR0aDogMzAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuc3Bhbi5tYWluLXRleHQge1xuICB3aWR0aDogNzAlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1haW4tbmF2LXNldHRpbmdzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubWFpbi1uYXYtc2V0dGluZ3MgbGkge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG5cbnNwYW4uaWNvbi0xIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uYmFja2ljb24gaW1nIHtcbiAgbWF4LXdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXIge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbmJ1dHRvbi5mb290ZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi53MjAgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sYWJlbC1mb290ZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmNmY2ZjO1xuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXRjIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG5zcGFuLnN0cm9uZy10eHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhyLW15QWNjb3VudCB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2MzYzNjMztcbn1cblxuLmFuaW1hdGVkLmZhZGVJbkRvd24ucG9saWNpZXMge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbi5tZC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkuc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudC5oeWRyYXRlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnBhZGRpbmctMCBidXR0b24uYnV0dG9uLW5hdGl2ZSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tcmlwcGxlLWVmZmVjdC5tZC5oeWRyYXRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbjpob3N0KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKSB7XG4gIGJvcmRlci1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/policies/policies.page.ts":
/*!*******************************************!*\
  !*** ./src/app/policies/policies.page.ts ***!
  \*******************************************/
/*! exports provided: PoliciesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesPage", function() { return PoliciesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");



let PoliciesPage = class PoliciesPage {
    constructor(iab) {
        this.iab = iab;
    }
    openNotifications() { }
    openDataProtection() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');
        browser.close();
    }
    openTermsofUse() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');
        browser.close();
    }
    openCopyrights() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');
        browser.close();
    }
    openHelp() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');
        browser.close();
    }
    openReportFault() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');
        browser.close();
    }
    ngOnInit() {
    }
};
PoliciesPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] }
];
PoliciesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-policies',
        template: __webpack_require__(/*! raw-loader!./policies.page.html */ "./node_modules/raw-loader/index.js!./src/app/policies/policies.page.html"),
        styles: [__webpack_require__(/*! ./policies.page.scss */ "./src/app/policies/policies.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]])
], PoliciesPage);



/***/ })

}]);
//# sourceMappingURL=policies-policies-module-es2015.js.map