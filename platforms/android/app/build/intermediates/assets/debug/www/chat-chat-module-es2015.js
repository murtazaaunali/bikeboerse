(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n\n<ion-content padding>\n    <div class=\"animated fadeInDown register-account bg-white\">\n\n        <div class=\"backicon\"><img src=\"../assets/backicon.png\"></div>\n         <h2 ion-text class=\"text-primary insert-done\">\n\n      Inserieren 1/2\n         </h2>\n        </div>\n        <ion-segment>\n            <ion-segment-button checked class=\"padding-0\" >\n              <ion-label class=\"padding-0\">Hardtail</ion-label>\n            </ion-segment-button>\n            <ion-segment-button class=\"padding-0\">\n              <ion-label class=\"padding-0\">AM/Enduro</ion-label>\n            </ion-segment-button>\n            <ion-segment-button class=\"padding-0\">\n              <ion-label class=\"padding-0\">AM/Enduro</ion-label>\n            </ion-segment-button>\n            \n          </ion-segment>\n    \n          <ion-segment>\n          \n              <ion-segment-button class=\"padding-0\">\n                  <ion-label class=\"padding-0\">XC/Tour</ion-label>\n                </ion-segment-button>\n              <ion-segment-button class=\"padding-0\">\n                <ion-label class=\"padding-0\">Rennrad</ion-label>\n              </ion-segment-button>\n              <ion-segment-button class=\"padding-0\">\n                <ion-label class=\"padding-0\">E-Bike</ion-label>\n              </ion-segment-button>\n              \n            </ion-segment>\n            <ion-segment>\n            <ion-segment-button class=\"padding-0\">\n                <ion-label class=\"padding-0\">BMX/Dirt</ion-label>\n              </ion-segment-button>\n            <ion-segment-button class=\"padding-0\">\n              <ion-label class=\"padding-0\">Urban/Fixie</ion-label>\n            </ion-segment-button>\n            <ion-segment-button class=\"padding-0\">\n              <ion-label class=\"padding-0\">Rahmen/Sets</ion-label>\n            </ion-segment-button>\n            \n          </ion-segment>\n          <div class=\"clearfix\"></div>\n        <div class=\"hr\"></div>\n        <ion-segment>\n            <ion-segment-button class=\"padding-0\">\n                <ion-label class=\"padding-0\">Bekleidung</ion-label>\n              </ion-segment-button>\n            <ion-segment-button class=\"padding-0\">\n              <ion-label class=\"padding-0\">Einzelteile</ion-label>\n            </ion-segment-button>\n            <ion-segment-button class=\"padding-0\">\n              <ion-label class=\"padding-0\">Zubehör</ion-label>\n            </ion-segment-button>\n            \n          </ion-segment>\n<div class=\"btn-arrow\">\n  <button ion-button icon-start block color=\"dark\" class=\"button-login\">\n    <img class=\"w15\" src=\"../assets/right-arrow.png\">\n       </button>\n\n</div>\n          \n</ion-content>\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
let ChatPageModule = class ChatPageModule {
};
ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backicon {\n  float: left;\n  width: 12px;\n}\n\n.bg-white {\n  background: #fff;\n  padding: 10px 5px 5px 5px;\n  position: relative;\n  top: 0px;\n  z-index: 9999;\n}\n\n.bg-white h2.text-primary.insert-done {\n  color: #555555;\n  font-size: 15px;\n  text-align: center;\n  margin-top: 0px;\n  position: relative;\n  left: -10px;\n}\n\nion-segment-button {\n  height: 34px;\n  min-height: 30px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 50px;\n  min-width: 10px !important;\n  border: 1px solid #cacaca;\n  margin: 2px;\n  padding: 2px;\n  font-size: 12px !important;\n  border-radius: 4px;\n  color: #555555;\n}\n\nion-label.padding-0.sc-ion-label-md-h.sc-ion-label-md-s.md.hydrated {\n  font-size: 11px;\n}\n\nion-segment.sc-ion-segment-md-h.sc-ion-segment-md-s.md.hydrated {\n  margin-bottom: 20px;\n}\n\n.hr {\n  border: 1px solid #c3c3c3;\n  width: 60%;\n  height: 1px;\n  margin: 25px auto;\n}\n\nion-segment-button.padding-0.hydrated.md.segment-button-has-label.segment-button-has-label-only.segment-button-checked.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant[_ngcontent-hvv-c1] {\n  background: #62c2e4;\n  color: #fff;\n}\n\n.btn-arrow {\n  width: 100%;\n  text-align: center;\n}\n\n.button-login {\n  width: 80%;\n  border: none;\n  border-radius: 160px;\n  color: #fff;\n  margin-bottom: 10px;\n  padding: 18px !important;\n  font-size: 16px;\n  background: #62c2e4;\n}\n\n.w15 {\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREFJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFUjs7QURDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLG1CQUFBO0FDSUo7O0FERkE7RUFBSSx5QkFBQTtFQUF5QixVQUFBO0VBQVUsV0FBQTtFQUFXLGlCQUFBO0FDU2xEOztBRE5BO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDU0o7O0FEUEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNVSjs7QURSQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1dKOztBRFJFO0VBQ0UsV0FBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNraWNvbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTJweDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHggNXB4IDVweCA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMHB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgaDIudGV4dC1wcmltYXJ5Lmluc2VydC1kb25lIHtcbiAgICAgICAgY29sb3I6ICM1NTU1NTU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgfVxufVxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWluLXdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgICBtYXJnaW46IDJweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiM1NTU1NTVcbn1cbmlvbi1sYWJlbC5wYWRkaW5nLTAuc2MtaW9uLWxhYmVsLW1kLWguc2MtaW9uLWxhYmVsLW1kLXMubWQuaHlkcmF0ZWQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cbmlvbi1zZWdtZW50LnNjLWlvbi1zZWdtZW50LW1kLWguc2MtaW9uLXNlZ21lbnQtbWQtcy5tZC5oeWRyYXRlZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5ocntib3JkZXI6MXB4IHNvbGlkICNjM2MzYzM7d2lkdGg6NjAlO2hlaWdodDoxcHg7bWFyZ2luOjI1cHggYXV0bzt9XG5cblxuaW9uLXNlZ21lbnQtYnV0dG9uLnBhZGRpbmctMC5oeWRyYXRlZC5tZC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkuc2VnbWVudC1idXR0b24tY2hlY2tlZC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3AuaW9uLWFjdGl2YXRhYmxlLmlvbi1hY3RpdmF0YWJsZS1pbnN0YW50W19uZ2NvbnRlbnQtaHZ2LWMxXSB7XG4gICAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tYXJyb3d7XG4gICAgd2lkdGg6MTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnV0dG9uLWxvZ2luIHtcbiAgICB3aWR0aDo4MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogMThweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xuICAgIC8vIG1hcmdpbi10b3A6MjAlO1xuICB9XG4gIC53MTV7XG4gICAgd2lkdGg6IDE1cHg7XG59IiwiLmJhY2tpY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMnB4O1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDVweCA1cHggNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuLmJnLXdoaXRlIGgyLnRleHQtcHJpbWFyeS5pbnNlcnQtZG9uZSB7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xMHB4O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtaW4td2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICM1NTU1NTU7XG59XG5cbmlvbi1sYWJlbC5wYWRkaW5nLTAuc2MtaW9uLWxhYmVsLW1kLWguc2MtaW9uLWxhYmVsLW1kLXMubWQuaHlkcmF0ZWQge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbmlvbi1zZWdtZW50LnNjLWlvbi1zZWdtZW50LW1kLWguc2MtaW9uLXNlZ21lbnQtbWQtcy5tZC5oeWRyYXRlZCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5ociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IDI1cHggYXV0bztcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uLnBhZGRpbmctMC5oeWRyYXRlZC5tZC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkuc2VnbWVudC1idXR0b24tY2hlY2tlZC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3AuaW9uLWFjdGl2YXRhYmxlLmlvbi1hY3RpdmF0YWJsZS1pbnN0YW50W19uZ2NvbnRlbnQtaHZ2LWMxXSB7XG4gIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWFycm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1sb2dpbiB7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTYwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbn1cblxuLncxNSB7XG4gIHdpZHRoOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.page.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatPage = class ChatPage {
    constructor() { }
    ngOnInit() {
    }
};
ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.page.html"),
        styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/chat/chat.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatPage);



/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es2015.js.map