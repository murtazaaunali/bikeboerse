(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["premium-option-premium-option-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/premium-option/premium-option.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/premium-option/premium-option.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    <h2 class=\"main-title text-center\"><img src=\"assets/bedge.png\"> Premium Option </h2>\n    <p class=\"paragraph-description text-center\">Erhalte mehr Sichtbarkeit und Aufmerksamkeit für deine Produkte mit\n      Hilfe von Premiumoptionen!</p>\n    <!-- <div *ngFor=\"let option of options\" class=\"main-list\">\n      <div class=\"list-detail\" [routerLink]=\"'/premium-option'+ option.id\">\n        <h6 class=\"list-left\">{{option.title}}</h6>\n        <p class=\"checklist-desc\">{{ option.desc }}</p>\n      </div>\n    </div> -->\n  </div>\n</ion-content>\n<main-footer></main-footer>\n"

/***/ }),

/***/ "./src/app/premium-option/premium-option.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/premium-option/premium-option.module.ts ***!
  \*********************************************************/
/*! exports provided: PremiumOptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumOptionPageModule", function() { return PremiumOptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _premium_option_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./premium-option.page */ "./src/app/premium-option/premium-option.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _premium_option_page__WEBPACK_IMPORTED_MODULE_6__["PremiumOptionPage"]
    }
];
let PremiumOptionPageModule = class PremiumOptionPageModule {
};
PremiumOptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_premium_option_page__WEBPACK_IMPORTED_MODULE_6__["PremiumOptionPage"]]
    })
], PremiumOptionPageModule);



/***/ }),

/***/ "./src/app/premium-option/premium-option.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/premium-option/premium-option.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .inner-scroll.scroll-y {\n  background-color: #fcfcfc;\n  padding: 10px;\n}\n:host .item-native {\n  padding-left: 0px !important;\n}\nion-icon.md.hydrated {\n  color: #62c2e4;\n  margin-top: 10px;\n  font-size: 21px;\n  float: left;\n}\n.main-title {\n  margin-top: -1px !important;\n  position: relative;\n  top: 10px;\n}\n.main-title img {\n  width: 17px;\n}\n.paragraph-description {\n  margin-top: 25px;\n}\n.list-left {\n  width: 100%;\n  font-weight: 600;\n  float: left;\n}\n.main-list {\n  background: #fff;\n  border: 1px solid #cccc;\n  margin: -1px 15px;\n  border-radius: 2px;\n  padding: 0px 10px;\n}\n.main-list .list-left {\n  margin-bottom: 3px;\n  margin-top: 10px;\n}\n.main-list .checklist-desc {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvcHJlbWl1bS1vcHRpb24vcHJlbWl1bS1vcHRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wcmVtaXVtLW9wdGlvbi9wcmVtaXVtLW9wdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0k7RUFDRSx5QkFMSTtFQU1KLGFBQUE7QUNKTjtBRFFFO0VBQ0UsNEJBQUE7QUNOSjtBRFVBO0VBQ0UsY0FqQlU7RUFrQlYsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1BGO0FEVUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ1BGO0FEU0U7RUFDRSxXQUFBO0FDUEo7QURXQTtFQUNFLGdCQUFBO0FDUkY7QURXQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNSRjtBRFdBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1JGO0FEVUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDUko7QURXRTtFQUNFLGVBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL3ByZW1pdW0tb3B0aW9uL3ByZW1pdW0tb3B0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlY29sb3I6ICM2MmMyZTQ7XG4kYmdjb2xvcjogI2ZjZmNmYztcblxuOmhvc3Qge1xuICAuaW5uZXItc2Nyb2xsIHtcbiAgICAmLnNjcm9sbC15IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ2NvbG9yO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gIH1cblxuICAuaXRlbS1uYXRpdmUge1xuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaW9uLWljb24ubWQuaHlkcmF0ZWQge1xuICBjb2xvcjogJGJsdWVjb2xvcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1haW4tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAtMXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE3cHg7XG4gIH1cbn1cblxuLnBhcmFncmFwaC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5saXN0LWxlZnQge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tYWluLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjYztcbiAgbWFyZ2luOiAtMXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG5cbiAgLmxpc3QtbGVmdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAuY2hlY2tsaXN0LWRlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSIsIjpob3N0IC5pbm5lci1zY3JvbGwuc2Nyb2xsLXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOmhvc3QgLml0ZW0tbmF0aXZlIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWljb24ubWQuaHlkcmF0ZWQge1xuICBjb2xvcjogIzYyYzJlNDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1haW4tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAtMXB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuLm1haW4tdGl0bGUgaW1nIHtcbiAgd2lkdGg6IDE3cHg7XG59XG5cbi5wYXJhZ3JhcGgtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubGlzdC1sZWZ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWFpbi1saXN0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2M7XG4gIG1hcmdpbjogLTFweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuLm1haW4tbGlzdCAubGlzdC1sZWZ0IHtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW4tbGlzdCAuY2hlY2tsaXN0LWRlc2Mge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/premium-option/premium-option.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/premium-option/premium-option.page.ts ***!
  \*******************************************************/
/*! exports provided: PremiumOptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PremiumOptionPage", function() { return PremiumOptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PremiumOptionPage = class PremiumOptionPage {
    constructor() { }
    ngOnInit() {
    }
};
PremiumOptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-premium-option',
        template: __webpack_require__(/*! raw-loader!./premium-option.page.html */ "./node_modules/raw-loader/index.js!./src/app/premium-option/premium-option.page.html"),
        styles: [__webpack_require__(/*! ./premium-option.page.scss */ "./src/app/premium-option/premium-option.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PremiumOptionPage);



/***/ })

}]);
//# sourceMappingURL=premium-option-premium-option-module-es2015.js.map