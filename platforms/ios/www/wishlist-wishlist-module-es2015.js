(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-wishlist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/wishlist/wishlist.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/wishlist/wishlist.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<ion-content>\n    <div class=\"ion-padding\">\n        <account-userinfo></account-userinfo>\n        <myaccount-header></myaccount-header>\n        <div *ngIf=\"products\">\n            <div class=\"product-list\" *ngFor=\"let product of products\">\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"6\">\n                            <ion-img [routerLink]=\"'/product/' + product.id\" [src]=\"product.filename\"\n                                class=\"product-list-image\"></ion-img>\n                        </ion-col>\n                        <ion-col size=\"6\">\n                            <div class=\"list-detail\">\n                                <a href=\"#\">\n                                    <h4 class=\"product-title-list\">{{ product.title }}</h4>\n                                </a>\n                                <p class=\"price-prod-list\">{{ product.price }} € - VB</p>\n                                <p class=\"size-prod-list\">Größe <span>{{ product.size }}</span></p>\n                                <div class=\"star-right\">\n                                    <p>\n                                        <ion-img [routerLink]=\"['/']\" src=\"assets/star.png\"></ion-img>\n                                        Entfernen\n                                    </p>\n                                </div>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n        </div>\n        <div [hidden]=\"products\">\n            <ion-card>\n                <ion-card-content>\n                    No products found.\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/wishlist/wishlist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.module.ts ***!
  \*********************************************/
/*! exports provided: WishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/wishlist/wishlist.page.ts");








const routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_7__["WishlistPage"]
    }
];
let WishlistPageModule = class WishlistPageModule {
};
WishlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_7__["WishlistPage"]]
    })
], WishlistPageModule);



/***/ }),

/***/ "./src/app/wishlist/wishlist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/wishlist/wishlist.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-register {\n  color: #222222;\n  font-size: 18px;\n  font-weight: normal;\n  text-align: center;\n}\n\n.backicon {\n  float: left;\n  width: 12px;\n}\n\n.register-account {\n  position: relative;\n}\n\n.main-image img {\n  width: 100px;\n}\n\nimg.cam-img {\n  width: 30px !important;\n  position: relative;\n  left: 8px;\n}\n\n.settings {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n\n.settings img {\n  max-width: 30px !important;\n}\n\n.backicon img {\n  max-width: 18px !important;\n}\n\nbutton.myAccountbtn {\n  border: 1px solid #c3c3c3;\n  background: #fff;\n  width: 100%;\n  padding: 12px 0px;\n  margin: 10px 0px;\n  border-radius: 5px;\n  color: #555555;\n  font-weight: 400;\n}\n\n.footer {\n  margin-bottom: 0px;\n  background: #fff;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nbutton.footer {\n  padding: 0px;\n  width: 100%;\n  background: transparent;\n  margin: 0px;\n}\n\n.w20 img {\n  width: 20px;\n  margin-bottom: 10px;\n}\n\n.label-footer {\n  font-size: 12px;\n}\n\nfooter {\n  border-top: 2px solid #fcfcfc;\n  padding-top: 5px !important;\n}\n\np.text-tc {\n  background: white;\n  border: 1px solid #cacaca;\n  padding: 10px;\n  text-align: center;\n  color: #555555;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\nspan.strong-txt {\n  font-weight: bold;\n}\n\n.hr-myAccount {\n  margin: 20px auto;\n  width: 60%;\n  height: 1px;\n  background: #c3c3c3;\n}\n\n.animated.fadeInDown.register-account {\n  padding: 0px;\n}\n\nion-segment-button.md.segment-button-has-label.segment-button-has-label-only.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant.hydrated {\n  font-size: 12px;\n}\n\n.padding-0 button.button-native {\n  padding: 0px !important;\n}\n\nion-ripple-effect.md.hydrated {\n  border: 1px solid #cacaca;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\n:host(.segment-button-checked) {\n  border-color: none !important;\n  border: none !important;\n}\n\nion-segment-button {\n  height: 34px;\n  min-height: 30px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 50px !important;\n  min-width: 10px !important;\n  border: 1px solid #cacaca;\n  margin: 2px;\n  padding: 2px;\n  font-size: 10px !important;\n  border-radius: 4px;\n}\n\n.product-list {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border: 1px solid #d4d4d4;\n  border-radius: 3px;\n  background-color: #fff;\n}\n\n.product-list a {\n  text-decoration: none;\n}\n\n.product-list a .product-title-list {\n  margin-top: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #000;\n}\n\n.product-list .price-prod-list {\n  color: #62c2e4;\n  margin-bottom: 0px;\n}\n\n.product-list .product-icon-image {\n  height: 22px;\n}\n\n.product-list .border-bottom {\n  border-bottom: 1px solid #d4d4d4;\n  height: 2px;\n}\n\n.product-list .bottom-icon-list {\n  border-right: 1px solid #d4d4d4;\n}\n\n.product-list .last-orange {\n  color: #f7790d;\n  font-size: 12px;\n  text-transform: uppercase;\n  margin-bottom: 0px;\n  margin-top: 3px;\n}\n\n.product-list .last-orange img {\n  width: 12px;\n  margin-right: 2px;\n}\n\nion-segment.sc-ion-segment-md-h.sc-ion-segment-md-s.md.hydrated {\n  margin-bottom: 18px;\n}\n\n.star-right {\n  float: right;\n}\n\n.star-right p {\n  text-align: right;\n}\n\n.star-right p ion-img {\n  width: 24px;\n  float: left;\n  background: #e9e9e9;\n  padding: 5px;\n  border-radius: 62px;\n  margin-right: 5px;\n}\n\nion-segment-button.padding-0.hydrated.md.segment-button-has-label.segment-button-has-label-only.segment-button-checked.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant {\n  background: #62c2e4;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC93aXNobGlzdC93aXNobGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBbUIsY0FBQTtFQUNqQixlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNHRjs7QUREQTtFQUFrQixrQkFBQTtBQ0tsQjs7QURKQTtFQUNFLFlBQUE7QUNPRjs7QURMQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDUUY7O0FETkE7RUFBVSxrQkFBQTtFQUF1QixVQUFBO0VBQy9CLFFBQUE7QUNXRjs7QURUQTtFQUFjLDBCQUFBO0FDYWQ7O0FEWkE7RUFBYywwQkFBQTtBQ2dCZDs7QURmQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDa0JGOztBRGRBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNnQkY7O0FEWkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ2VGOztBRFhBO0VBQVMsV0FBQTtFQUFlLG1CQUFBO0FDZ0J4Qjs7QURmQTtFQUFjLGVBQUE7QUNtQmQ7O0FEbEJBO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtBQ3FCRjs7QURuQkE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3NCRjs7QURwQkE7RUFDRSxpQkFBQTtBQ3VCRjs7QURyQkE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUN3QkY7O0FEdEJBO0VBQ0UsWUFBQTtBQ3lCRjs7QUR2QkE7RUFDRSxlQUFBO0FDMEJGOztBRHhCQTtFQUFnQyx1QkFBQTtBQzRCaEM7O0FEM0JBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDOEJGOztBRDVCQTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7QUMrQkY7O0FEN0JBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ2dDRjs7QUQ3QkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNnQ0Y7O0FEL0JFO0VBRUUscUJBQUE7QUNnQ0o7O0FEL0JJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNpQ047O0FENUJFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDOEJKOztBRDNCRTtFQUNFLFlBQUE7QUM2Qko7O0FEM0JFO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0FDNkJKOztBRDNCRTtFQUNFLCtCQUFBO0FDNkJKOztBRDNCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUM2Qko7O0FENUJJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDOEJOOztBRDFCQTtFQUNFLG1CQUFBO0FDNkJGOztBRDNCQTtFQUNFLFlBQUE7QUM4QkY7O0FEN0JFO0VBQ0UsaUJBQUE7QUMrQko7O0FEOUJJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDZ0NOOztBRDVCQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQytCRiIsImZpbGUiOiJzcmMvYXBwL3dpc2hsaXN0L3dpc2hsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRleHQtcmVnaXN0ZXJ7ICAgIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjt9XG4uYmFja2ljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEycHg7XG59XG4ucmVnaXN0ZXItYWNjb3VudHtwb3NpdGlvbjogcmVsYXRpdmU7fVxuLm1haW4taW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuaW1nLmNhbS1pbWcge1xuICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDhweDtcbn1cbi5zZXR0aW5nc3twb3NpdGlvbjogYWJzb2x1dGU7ICAgIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuLnNldHRpbmdzIGltZ3ttYXgtd2lkdGg6MzBweCAhaW1wb3J0YW50O31cbi5iYWNraWNvbiBpbWd7bWF4LXdpZHRoOjE4cHggIWltcG9ydGFudDt9XG5idXR0b24ubXlBY2NvdW50YnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5cbi5mb290ZXIge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcblxuXG59XG5idXR0b24uZm9vdGVyIHtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMHB4O1xuXG5cbn1cbi53MjAgaW1ne3dpZHRoOjIwcHg7ICAgIG1hcmdpbi1ib3R0b206IDEwcHg7fVxuLmxhYmVsLWZvb3Rlcntmb250LXNpemU6MTJweDt9XG5mb290ZXIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2ZjZmNmYztcbiAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xufVxucC50ZXh0LXRjIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuc3Bhbi5zdHJvbmctdHh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaHItbXlBY2NvdW50IHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjYzNjM2MzO1xufVxuLmFuaW1hdGVkLmZhZGVJbkRvd24ucmVnaXN0ZXItYWNjb3VudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbi5tZC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkuc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudC5oeWRyYXRlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wYWRkaW5nLTAgYnV0dG9uLmJ1dHRvbi1uYXRpdmV7cGFkZGluZzowcHggIWltcG9ydGFudH1cbmlvbi1yaXBwbGUtZWZmZWN0Lm1kLmh5ZHJhdGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbjpob3N0KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKSB7XG4gIGJvcmRlci1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxufVxuLnByb2R1Y3QtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGFcbiAge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAucHJvZHVjdC10aXRsZS1saXN0IHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG5cblxuICB9XG4gIC5wcmljZS1wcm9kLWxpc3Qge1xuICAgIGNvbG9yOiAjNjJjMmU0O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5wcm9kdWN0LWljb24taW1hZ2Uge1xuICAgIGhlaWdodDogMjJweDtcbiAgfVxuICAuYm9yZGVyLWJvdHRvbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cbiAgLmJvdHRvbS1pY29uLWxpc3Qge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIH1cbiAgLmxhc3Qtb3JhbmdlIHtcbiAgICBjb2xvcjogI2Y3NzkwZDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIH1cbiAgfVxufVxuaW9uLXNlZ21lbnQuc2MtaW9uLXNlZ21lbnQtbWQtaC5zYy1pb24tc2VnbWVudC1tZC1zLm1kLmh5ZHJhdGVkIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cbi5zdGFyLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwe1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGlvbi1pbWd7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDYycHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG4gIH1cbn1cbmlvbi1zZWdtZW50LWJ1dHRvbi5wYWRkaW5nLTAuaHlkcmF0ZWQubWQuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLnNlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbC1vbmx5LnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQuc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudCB7XG4gIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gIGNvbG9yOiAjZmZmO1xufSIsIi50ZXh0LXJlZ2lzdGVyIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2ljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEycHg7XG59XG5cbi5yZWdpc3Rlci1hY2NvdW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbi1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbmltZy5jYW0taW1nIHtcbiAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA4cHg7XG59XG5cbi5zZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5zZXR0aW5ncyBpbWcge1xuICBtYXgtd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmJhY2tpY29uIGltZyB7XG4gIG1heC13aWR0aDogMThweCAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ubXlBY2NvdW50YnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5idXR0b24uZm9vdGVyIHtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4udzIwIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGFiZWwtZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5mb290ZXIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2ZjZmNmYztcbiAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG5wLnRleHQtdGMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU1NTU1NTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbnNwYW4uc3Ryb25nLXR4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaHItbXlBY2NvdW50IHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjYzNjM2MzO1xufVxuXG4uYW5pbWF0ZWQuZmFkZUluRG93bi5yZWdpc3Rlci1hY2NvdW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ubWQuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLnNlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbC1vbmx5LnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLXRvcC5pb24tYWN0aXZhdGFibGUuaW9uLWFjdGl2YXRhYmxlLWluc3RhbnQuaHlkcmF0ZWQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wYWRkaW5nLTAgYnV0dG9uLmJ1dHRvbi1uYXRpdmUge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXJpcHBsZS1lZmZlY3QubWQuaHlkcmF0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG46aG9zdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCkge1xuICBib3JkZXItY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGhlaWdodDogMzRweDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5wcm9kdWN0LWxpc3Qge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnByb2R1Y3QtbGlzdCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnByb2R1Y3QtbGlzdCBhIC5wcm9kdWN0LXRpdGxlLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDA7XG59XG4ucHJvZHVjdC1saXN0IC5wcmljZS1wcm9kLWxpc3Qge1xuICBjb2xvcjogIzYyYzJlNDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnByb2R1Y3QtbGlzdCAucHJvZHVjdC1pY29uLWltYWdlIHtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuLnByb2R1Y3QtbGlzdCAuYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBoZWlnaHQ6IDJweDtcbn1cbi5wcm9kdWN0LWxpc3QgLmJvdHRvbS1pY29uLWxpc3Qge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDRkNGQ0O1xufVxuLnByb2R1Y3QtbGlzdCAubGFzdC1vcmFuZ2Uge1xuICBjb2xvcjogI2Y3NzkwZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbi5wcm9kdWN0LWxpc3QgLmxhc3Qtb3JhbmdlIGltZyB7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuaW9uLXNlZ21lbnQuc2MtaW9uLXNlZ21lbnQtbWQtaC5zYy1pb24tc2VnbWVudC1tZC1zLm1kLmh5ZHJhdGVkIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLnN0YXItcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc3Rhci1yaWdodCBwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc3Rhci1yaWdodCBwIGlvbi1pbWcge1xuICB3aWR0aDogMjRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNjJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbi5wYWRkaW5nLTAuaHlkcmF0ZWQubWQuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLnNlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbC1vbmx5LnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQuc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudCB7XG4gIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/wishlist/wishlist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/wishlist/wishlist.page.ts ***!
  \*******************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");




let WishlistPage = class WishlistPage {
    constructor(productsService, storage) {
        this.productsService = productsService;
        this.storage = storage;
        this.storage.get('USER_INFO').then((response) => {
            this.productsService.getProductsByUserWatchlist(response.id).subscribe(products => {
                this.products = products.records;
            });
        });
    }
    ngOnInit() {
    }
};
WishlistPage.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
WishlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: __webpack_require__(/*! raw-loader!./wishlist.page.html */ "./node_modules/raw-loader/index.js!./src/app/wishlist/wishlist.page.html"),
        styles: [__webpack_require__(/*! ./wishlist.page.scss */ "./src/app/wishlist/wishlist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], WishlistPage);



/***/ })

}]);
//# sourceMappingURL=wishlist-wishlist-module-es2015.js.map