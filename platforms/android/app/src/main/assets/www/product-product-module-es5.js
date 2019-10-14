(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<ion-content *ngFor=\"let product of productModel\">\n  <div class=\"product-slider relative\">\n    <div class=\"backicon\"><img src=\"../assets/backicon.png\" class=\"bcicon\"></div>\n    <ion-slides>\n      <ion-slide>\n        <img src=\"../assets/small-car-1.png\">\n        <img src=\"../assets/video-bg.png\">\n        <img src=\"../assets/small-car-1.png\">\n        <div class=\"bg-title\"></div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div class=\"product-list\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"11\">\n          <p class=\"mb0 black-title\">{{ product.title }}</p>\n          <p class=\"mb0 black-title\">Titel of the product of the second line...</p>\n        </ion-col>\n        <ion-col size=\"1\">\n          <div class=\"list-detail\">\n            <div class=\"star-right\">\n              <p>\n                <ion-img [routerLink]=\"['/']\" src=\"../assets/star.png\"></ion-img>\n              </p>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <p size class=\"mb0 blue\"><span class=\"grey-bold\">Preis : </span><span\n              class=\"amount elementblue\">{{ product.price }}</span>\n          </p>\n        </ion-col>\n        <ion-col size=\"6\">\n          <p class=\"mb0\"><span class=\"grey-bold\">Größe:</span><span class=\"length elementblue\">{{ product.size }}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <p class=\"mb0\"><span class=\"grey-bold\">Pay Pal:</span> <span\n              class=\"amount\">{{ product.paypal == 1 ? 'Ja' : 'No' }}</span></p>\n        </ion-col>\n        <ion-col size=\"6\">\n          <p class=\"mb0\"><span class=\"grey-bold\">Abholung : </span> <span\n              class=\"amount\">{{ product.pickup == 1 ? 'Ja' : 'No' }}</span></p>\n        </ion-col>\n        <ion-col size=\"6\">\n          <p class=\"mb0 grey-bold small-size\">Hersteller:</p>\n          <p class=\"mb0 grey-bold small-size\">Federweg Gabel:</p>\n        </ion-col>\n        <ion-col size=\"6\">\n          <p class=\"mb0\">{{ product.brand }} </p>\n          <p class=\"mb0\"> {{ product.fork }} </p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-item class=\"p0\">\n      <ion-textarea class=\"comments\" placeholder=\"Beschreibung\"></ion-textarea>\n    </ion-item>\n    <p class=\"text-center-doe\">Verkaufer: <span class=\"grey-bold\">{{ product.user }}</span></p>\n    <div class=\"main-btn\">\n      <button ion-button icon-start block color=\"dark\" class=\"button-login\">\n        KONTAKTIEREN\n      </button>\n    </div>\n    <div class=\"google-add\">\n      <ion-img [routerLink]=\"['/']\" src=\"assets/google-add.png\" class=\"add-img\"></ion-img>\n    </div>\n    <div class=\"main-video\" padding>\n      <div class=\"slider-1\">\n        <h5 class=\"product-heading font-10\">BEISPIELVIDEO</h5>\n        <ion-slides>\n          <ion-slide>\n            <div class=\"cst-slider-wrap\">\n              <img src=\"../assets/video-bg.png\">\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <p class=\"mb0 grey-bold small-size\">Grundpreis:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"mb0\">{{ product.baseprice }} </p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"mb0 grey-bold small-size\">Ort:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"mb0\">160mm </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div id='map'>\n      <img src=\"../assets/g-image.jpg\">\n    </div>\n    <div class=\"slider-2\" padding>\n      <h5 class=\"product-heading\">Neuste Artikel<span></span></h5>\n      <ion-slides>\n        <ion-slide>\n          <div class=\"cst-slider-wrap\">\n            <a href=\"#\">\n              <img src=\"../assets/video-bg.png\" class=\"product-main-slider\">\n              <div class=\"main-bottom-slider\">\n                <p class=\"slider-price\">123123123 €</p>\n                <p class=\"slider-price\">M</p>\n                <p class=\"product-slider-title\">Lorem Ipsum</p>\n              </div>\n            </a>\n          </div>\n          <div class=\"cst-slider-wrap\">\n            <a href=\"#\">\n              <img src=\"../assets/video-bg.png\" class=\"product-main-slider\">\n              <div class=\"main-bottom-slider\">\n                <p class=\"slider-price\">123123123 €</p>\n                <p class=\"slider-price\">M</p>\n                <p class=\"product-slider-title\">Lorem Ipsum</p>\n              </div>\n            </a>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n</ion-content>\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "./src/app/product/product.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]
    }
];
var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
        })
    ], ProductPageModule);
    return ProductPageModule;
}());



/***/ }),

/***/ "./src/app/product/product.page.scss":
/*!*******************************************!*\
  !*** ./src/app/product/product.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .slider-1 .product-heading {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  margin-top: 10px;\n}\n:host .slider-1 .product-heading span {\n  border-bottom: 2px solid #62c2e4;\n  width: 44px;\n  display: block;\n  position: relative;\n  top: 2px;\n}\n:host .star-right {\n  float: right;\n}\n:host .star-right p {\n  text-align: right;\n}\n:host .star-right p ion-img {\n  width: 24px;\n  float: left;\n  background: #e9e9e9;\n  padding: 5px;\n  border-radius: 62px;\n  margin-right: 5px;\n}\n.mb0 {\n  margin-bottom: 0px;\n}\n.grey-bold {\n  color: #555555;\n  font-weight: bold;\n}\n.bold-blue {\n  font-weight: bold;\n}\n.blue {\n  color: #1f93c2;\n}\n.comments {\n  background: #fff;\n  border: 1px solid #c3c3c3;\n  padding: 20px;\n  font-size: 12px;\n  border-radius: 3px;\n  padding-top: 0px;\n  height: 200px;\n  padding-left: 4px;\n}\n.item-native {\n  border: none;\n  --padding-start: 0px !important;\n  --padding-end: 0px !important;\n}\n.p0 {\n  padding: 0px !important;\n}\n.button-login {\n  width: 80%;\n  border: none;\n  border-radius: 160px;\n  color: #fff;\n  margin-bottom: 10px;\n  padding: 18px !important;\n  font-size: 16px;\n  background: #62c2e4;\n}\n.google-add {\n  margin: 10px 0px;\n}\n.text-center-doe {\n  text-align: center;\n  margin-top: 2rem;\n  font-size: 11px;\n}\n.font-10 {\n  font-size: 10px;\n}\n.main-btn {\n  margin: 0px auto;\n  text-align: center;\n  width: 100%;\n}\n.p0 {\n  padding: 0px !important;\n  --border-color: transparent !important;\n}\n.item-native {\n  --border-color:red;\n}\n.footer {\n  margin-bottom: 0px;\n  background: #fff;\n  margin-left: 20px;\n  margin-right: 20px;\n}\nbutton.footer {\n  padding: 0px;\n  width: 100%;\n  background: transparent;\n  margin: 0px;\n}\n.w20 img {\n  width: 20px;\n  margin-bottom: 10px;\n}\n.label-footer {\n  font-size: 12px;\n}\nfooter {\n  border-top: 2px solid #fcfcfc;\n  padding-top: 5px !important;\n}\n.elementblue {\n  background: #1f93c2 !important;\n  color: #fff !important;\n  padding: 5px !important;\n  font-size: 12px !important;\n  border-radius: 50px !important;\n}\n.relative {\n  position: relative;\n}\n.backicon img {\n  width: 13px;\n}\n.backicon {\n  position: absolute;\n  top: 5px;\n  z-index: 9999;\n  left: 3%;\n}\n.black-title {\n  color: #000;\n  font-size: 12px;\n  font-weight: 600;\n}\ndiv#map img {\n  width: 100%;\n}\n.main-bottom-slider {\n  background: #808080;\n  border-radius: 0px 0px 4px 4px;\n}\n.main-bottom-slider .slider-price {\n  background: #62c2e4;\n  color: #fff;\n  float: left;\n  padding: 2px 6px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: -9px;\n  margin-left: 5px;\n  width: 70px;\n  position: relative;\n  z-index: 9;\n  margin-bottom: 0px;\n}\n.main-bottom-slider .product-slider-title {\n  background: #808080;\n  color: #fff;\n  font-size: 12px;\n  text-align: left;\n  margin-bottom: 0px;\n  padding: 7px 5px;\n  border-radius: 0px 0px 4px 4px;\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0hOO0FETU07RUFDRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDSlI7QURRRTtFQUNFLFlBQUE7QUNOSjtBRE9JO0VBQ0UsaUJBQUE7QUNMTjtBRE1NO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSlI7QURVQTtFQUFLLGtCQUFBO0FDTkw7QURPQTtFQUFXLGNBQUE7RUFBYyxpQkFBQTtBQ0Z6QjtBREdBO0VBQVcsaUJBQUE7QUNDWDtBREFBO0VBQU0sY0FBQTtBQ0lOO0FESEE7RUFBVSxnQkFBQTtFQUFnQix5QkFBQTtFQUF5QixhQUFBO0VBQWEsZUFBQTtFQUFlLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWdCLGFBQUE7RUFBYyxpQkFBQTtBQ2NoSTtBRGJBO0VBQWEsWUFBQTtFQUFhLCtCQUFBO0VBQ3hCLDZCQUFBO0FDa0JGO0FEakJBO0VBQUksdUJBQUE7QUNxQko7QURuQkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNzQkY7QURsQkE7RUFDRSxnQkFBQTtBQ3FCRjtBRG5CQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDc0JGO0FEcEJBO0VBQVMsZUFBQTtBQ3dCVDtBRHZCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDMEJGO0FEeEJBO0VBQ0UsdUJBQUE7RUFDQSxzQ0FBQTtBQzJCRjtBRHhCQTtFQUFhLGtCQUFBO0FDNEJiO0FEekJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUMyQkY7QUR2QkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQzBCRjtBRHRCQTtFQUFTLFdBQUE7RUFBZSxtQkFBQTtBQzJCeEI7QUQxQkE7RUFBYyxlQUFBO0FDOEJkO0FEN0JBO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtBQ2dDRjtBRDlCQTtFQUFpQiw4QkFBQTtFQUNmLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0FDa0NGO0FEakNFO0VBQVUsa0JBQUE7QUNxQ1o7QURwQ0U7RUFDRSxXQUFBO0FDdUNKO0FEckNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7QUN3Q0Y7QUR0Q0E7RUFBYSxXQUFBO0VBQ2IsZUFBQTtFQUFlLGdCQUFBO0FDMkNmO0FEekNBO0VBQ0UsV0FBQTtBQzRDRjtBRDFDQTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7QUM2Q0Y7QUQzQ0U7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUM2Q047QUQxQ0U7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDNENOIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICAuc2xpZGVyLTEge1xuXG4gICAgLnByb2R1Y3QtaGVhZGluZyB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Q0ZDRkNDtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjJjMmU0O1xuICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zdGFyLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgaW9uLWltZ3tcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDYycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4ubWIwe21hcmdpbi1ib3R0b206MHB4O31cbi5ncmV5LWJvbGR7Y29sb3I6IzU1NTU1NTtmb250LXdlaWdodDogYm9sZDt9XG4uYm9sZC1ibHVle2ZvbnQtd2VpZ2h0OmJvbGQ7fVxuLmJsdWV7Y29sb3I6IzFmOTNjMjt9XG4uY29tbWVudHN7YmFja2dyb3VuZDojZmZmO2JvcmRlcjoxcHggc29saWQgI2MzYzNjMztwYWRkaW5nOjIwcHg7Zm9udC1zaXplOjEycHg7Ym9yZGVyLXJhZGl1czogM3B4O3BhZGRpbmctdG9wOjBweDtoZWlnaHQ6IDIwMHB4O3BhZGRpbmctbGVmdDogNHB4O31cbi5pdGVtLW5hdGl2ZXtib3JkZXI6bm9uZTsgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7fVxuLnAwe3BhZGRpbmc6MHB4ICFpbXBvcnRhbnRcbjt9XG4uYnV0dG9uLWxvZ2luIHtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xuXG59XG5cbi5nb29nbGUtYWRkIHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbi50ZXh0LWNlbnRlci1kb2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5mb250LTEwe2ZvbnQtc2l6ZToxMHB4O31cbi5tYWluLWJ0biB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucDB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tbmF0aXZley0tYm9yZGVyLWNvbG9yOnJlZDtcdH1cbi8vIGZvb3RlciBzdGFydFxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cblxufVxuYnV0dG9uLmZvb3RlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDBweDtcblxuXG59XG4udzIwIGltZ3t3aWR0aDoyMHB4OyAgICBtYXJnaW4tYm90dG9tOiAxMHB4O31cbi5sYWJlbC1mb290ZXJ7Zm9udC1zaXplOjEycHg7fVxuZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmY2ZjZmM7XG4gIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbn1cbi5lbGVtZW50Ymx1ZXsgICAgYmFja2dyb3VuZDogIzFmOTNjMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDt9XG4gIC5yZWxhdGl2ZXtwb3NpdGlvbjpyZWxhdGl2ZTt9XG4gIC5iYWNraWNvbiBpbWcge1xuICAgIHdpZHRoOiAxM3B4O1xufVxuLmJhY2tpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgei1pbmRleDogOTk5OTtcbiAgbGVmdDogMyU7XG59XG4uYmxhY2stdGl0bGV7Y29sb3I6IzAwMDtcbmZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OjYwMDtcbn1cbmRpdiNtYXAgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbi1ib3R0b20tc2xpZGVyIHtcbiAgYmFja2dyb3VuZDogIzgwODA4MDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xuXG4gIC5zbGlkZXItcHJpY2Uge1xuICAgICAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tdG9wOiAtOXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogOTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5wcm9kdWN0LXNsaWRlci10aXRsZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjODA4MDgwO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgcGFkZGluZzogN3B4IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbiAgICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG5cbiIsIjpob3N0IC5zbGlkZXItMSAucHJvZHVjdC1oZWFkaW5nIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbjpob3N0IC5zbGlkZXItMSAucHJvZHVjdC1oZWFkaW5nIHNwYW4ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzYyYzJlNDtcbiAgd2lkdGg6IDQ0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuOmhvc3QgLnN0YXItcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG46aG9zdCAuc3Rhci1yaWdodCBwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46aG9zdCAuc3Rhci1yaWdodCBwIGlvbi1pbWcge1xuICB3aWR0aDogMjRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNjJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5tYjAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5ncmV5LWJvbGQge1xuICBjb2xvcjogIzU1NTU1NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib2xkLWJsdWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJsdWUge1xuICBjb2xvcjogIzFmOTNjMjtcbn1cblxuLmNvbW1lbnRzIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBib3JkZXI6IG5vbmU7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucDAge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1sb2dpbiB7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTYwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbn1cblxuLmdvb2dsZS1hZGQge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4udGV4dC1jZW50ZXItZG9lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5mb250LTEwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubWFpbi1idG4ge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucDAge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIC0tYm9yZGVyLWNvbG9yOnJlZDtcbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuYnV0dG9uLmZvb3RlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDBweDtcbn1cblxuLncyMCBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxhYmVsLWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmY2ZjZmM7XG4gIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmVsZW1lbnRibHVlIHtcbiAgYmFja2dyb3VuZDogIzFmOTNjMiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmFja2ljb24gaW1nIHtcbiAgd2lkdGg6IDEzcHg7XG59XG5cbi5iYWNraWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGxlZnQ6IDMlO1xufVxuXG4uYmxhY2stdGl0bGUge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5kaXYjbWFwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi1ib3R0b20tc2xpZGVyIHtcbiAgYmFja2dyb3VuZDogIzgwODA4MDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xufVxuLm1haW4tYm90dG9tLXNsaWRlciAuc2xpZGVyLXByaWNlIHtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgY29sb3I6ICNmZmY7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5tYWluLWJvdHRvbS1zbGlkZXIgLnByb2R1Y3Qtc2xpZGVyLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogIzgwODA4MDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiA3cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG4gIGNsZWFyOiBib3RoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/product/product.page.ts":
/*!*****************************************!*\
  !*** ./src/app/product/product.page.ts ***!
  \*****************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/products.service */ "./src/app/services/products.service.ts");




var ProductPage = /** @class */ (function () {
    function ProductPage(route, productService) {
        var _this = this;
        this.route = route;
        this.productService = productService;
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        console.log('product id:' + this.id);
        this.productService.getProduct(this.id).subscribe(function (products) {
            _this.productModel = products.records;
            console.log(_this.productModel);
        });
    }
    ProductPage.prototype.ngOnInit = function () { };
    ProductPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }
    ]; };
    ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! raw-loader!./product.page.html */ "./node_modules/raw-loader/index.js!./src/app/product/product.page.html"),
            styles: [__webpack_require__(/*! ./product.page.scss */ "./src/app/product/product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]])
    ], ProductPage);
    return ProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=product-product-module-es5.js.map