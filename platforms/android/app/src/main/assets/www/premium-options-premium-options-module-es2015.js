(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["premium-options-premium-options-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/premium-options/premium-options.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/premium-options/premium-options.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    <h2 class=\"main-title text-center\"><img src=\"assets/bedge.png\"> Premium Option </h2>\n    <p class=\"paragraph-description text-center\">Erhalte mehr Sichtbarkeit und Aufmerksamkeit für deine Produkte mit\n      Hilfe von Premiumoptionen!</p>\n    <div class=\"checkbox-premium-option\">\n      <ion-list>\n        <ion-item *ngFor=\"let option of options\">\n          <ion-checkbox slot=\"start\" value=\"one\" color=\"secondary\"></ion-checkbox>\n          <ion-label class=\"main-label-check\"><b>{{ option.title }}</b>\n            <p class=\"check-desc\">{{ option.desc }}</p>\n            <div class=\"right-check\">\n              <p>{{ option.price }} €</p>\n              <img src=\"assets/exclaimation-mark.png\" />\n            </div>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"total-check\">\n      <p class=\"total-desc\">Preis inkl. Umsatzsteuer</p>\n      <p class=\"totla-check-number\">Summe: 4,99 €</p>\n    </div>\n    <div class=\"button-total-check\">\n      <ion-button class=\"check-final-btn\" shape=\"round\" color=\"secondary\">Kaufen und mit Paypal zahlen\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/premium-options/premium-options.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/premium-options/premium-options.module.ts ***!
  \***********************************************************/
/*! exports provided: PremiumOptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumOptionsPageModule", function() { return PremiumOptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _premium_options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./premium-options.page */ "./src/app/premium-options/premium-options.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _premium_options_page__WEBPACK_IMPORTED_MODULE_6__["PremiumOptionsPage"]
    }
];
let PremiumOptionsPageModule = class PremiumOptionsPageModule {
};
PremiumOptionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_premium_options_page__WEBPACK_IMPORTED_MODULE_6__["PremiumOptionsPage"]]
    })
], PremiumOptionsPageModule);



/***/ }),

/***/ "./src/app/premium-options/premium-options.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/premium-options/premium-options.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .inner-scroll.scroll-y {\n  background-color: #fcfcfc;\n  padding: 10px;\n}\n:host .item-native {\n  padding-left: 0px !important;\n}\nion-icon.md.hydrated {\n  color: #62c2e4;\n  margin-top: 10px;\n  font-size: 21px;\n  float: left;\n}\n.main-title {\n  margin-top: -1px !important;\n  position: relative;\n  top: 10px;\n}\n.main-title img {\n  width: 17px;\n}\n.paragraph-description {\n  margin-top: 25px;\n}\n.right-check {\n  float: right;\n  text-align: center;\n  margin-top: -25px;\n}\n.right-check img {\n  width: 20px;\n}\n.right-check p {\n  font-size: 16px;\n  font-weight: 600;\n  color: #555555;\n}\n.check-desc {\n  float: left;\n  font-size: 12px;\n  width: 80%;\n}\n.main-label-check b {\n  float: left;\n  width: 100%;\n}\n.total-check .total-desc {\n  float: left;\n  color: #888888;\n  padding-left: 20px;\n}\n.total-check .totla-check-number {\n  float: right;\n  padding-right: 13px;\n  font-weight: 600;\n  font-size: 16px;\n}\n.button-total-check {\n  width: 90%;\n  margin: 0px auto;\n}\n.button-total-check ion-button.md.button.button-round.button-solid.ion-activatable.ion-focusable.hydrated {\n  width: 100%;\n  height: 50px;\n}\nion-item.item-label.item.md.in-list {\n  border-bottom: 1px solid #dedede;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvcHJlbWl1bS1vcHRpb25zL3ByZW1pdW0tb3B0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByZW1pdW0tb3B0aW9ucy9wcmVtaXVtLW9wdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJO0VBQ0UseUJBTEk7RUFNSixhQUFBO0FDSk47QURRRTtFQUNFLDRCQUFBO0FDTko7QURVQTtFQUNFLGNBakJVO0VBa0JWLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNQRjtBRFVBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNQRjtBRFNFO0VBQ0UsV0FBQTtBQ1BKO0FEWUE7RUFDRSxnQkFBQTtBQ1RGO0FEWUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1RGO0FEV0U7RUFDRSxXQUFBO0FDVEo7QURZRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNWSjtBRGNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDWEY7QURlRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDWko7QURpQkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDZEo7QURpQkU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNmSjtBRG1CQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ2hCRjtBRGtCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDaEJKO0FEd0JRO0VBQ0UsZ0NBQUE7QUNyQlYiLCJmaWxlIjoic3JjL2FwcC9wcmVtaXVtLW9wdGlvbnMvcHJlbWl1bS1vcHRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlY29sb3I6ICM2MmMyZTQ7XG4kYmdjb2xvcjogI2ZjZmNmYztcblxuOmhvc3Qge1xuICAuaW5uZXItc2Nyb2xsIHtcbiAgICAmLnNjcm9sbC15IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gIH1cblxuICAuaXRlbS1uYXRpdmUge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaW9uLWljb24ubWQuaHlkcmF0ZWQge1xuICBjb2xvcjogJGJsdWVjb2xvcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1haW4tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAtMXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE3cHg7XG4gIH1cblxufVxuXG4ucGFyYWdyYXBoLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnJpZ2h0LWNoZWNrIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzU1NTU1NTtcbiAgfVxufVxuXG4uY2hlY2stZGVzYyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5tYWluLWxhYmVsLWNoZWNrIHtcbiAgYiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnRvdGFsLWNoZWNrIHtcbiAgLnRvdGFsLWRlc2Mge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiAjODg4ODg4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxuXG4gIC50b3RsYS1jaGVjay1udW1iZXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5idXR0b24tdG90YWwtY2hlY2sge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuXG4gIGlvbi1idXR0b24ubWQuYnV0dG9uLmJ1dHRvbi1yb3VuZC5idXR0b24tc29saWQuaW9uLWFjdGl2YXRhYmxlLmlvbi1mb2N1c2FibGUuaHlkcmF0ZWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxufVxuXG5pb24taXRlbSB7XG4gICYuaXRlbS1sYWJlbCB7XG4gICAgJi5pdGVtIHtcbiAgICAgICYubWQge1xuICAgICAgICAmLmluLWxpc3Qge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiOmhvc3QgLmlubmVyLXNjcm9sbC5zY3JvbGwteSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46aG9zdCAuaXRlbS1uYXRpdmUge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taWNvbi5tZC5oeWRyYXRlZCB7XG4gIGNvbG9yOiAjNjJjMmU0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWFpbi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IC0xcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG59XG4ubWFpbi10aXRsZSBpbWcge1xuICB3aWR0aDogMTdweDtcbn1cblxuLnBhcmFncmFwaC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5yaWdodC1jaGVjayB7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtMjVweDtcbn1cbi5yaWdodC1jaGVjayBpbWcge1xuICB3aWR0aDogMjBweDtcbn1cbi5yaWdodC1jaGVjayBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzU1NTU1NTtcbn1cblxuLmNoZWNrLWRlc2Mge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogODAlO1xufVxuXG4ubWFpbi1sYWJlbC1jaGVjayBiIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG90YWwtY2hlY2sgLnRvdGFsLWRlc2Mge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi50b3RhbC1jaGVjayAudG90bGEtY2hlY2stbnVtYmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5idXR0b24tdG90YWwtY2hlY2sge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLmJ1dHRvbi10b3RhbC1jaGVjayBpb24tYnV0dG9uLm1kLmJ1dHRvbi5idXR0b24tcm91bmQuYnV0dG9uLXNvbGlkLmlvbi1hY3RpdmF0YWJsZS5pb24tZm9jdXNhYmxlLmh5ZHJhdGVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbn1cblxuaW9uLWl0ZW0uaXRlbS1sYWJlbC5pdGVtLm1kLmluLWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/premium-options/premium-options.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/premium-options/premium-options.page.ts ***!
  \*********************************************************/
/*! exports provided: PremiumOptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumOptionsPage", function() { return PremiumOptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/account.service */ "./src/app/services/account.service.ts");



let PremiumOptionsPage = class PremiumOptionsPage {
    constructor(accountService) {
        this.accountService = accountService;
        this.accountService.getAllPremiumOptions().subscribe(options => {
            this.options = options['records'];
            console.log(this.options);
        });
    }
    ngOnInit() {
    }
};
PremiumOptionsPage.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
];
PremiumOptionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-premium-options',
        template: __webpack_require__(/*! raw-loader!./premium-options.page.html */ "./node_modules/raw-loader/index.js!./src/app/premium-options/premium-options.page.html"),
        styles: [__webpack_require__(/*! ./premium-options.page.scss */ "./src/app/premium-options/premium-options.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
], PremiumOptionsPage);



/***/ })

}]);
//# sourceMappingURL=premium-options-premium-options-module-es2015.js.map