(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<ion-content>\n  <div class=\"product-slider relative\">\n    <div class=\"backicon\"><img src=\"../assets/backicon.png\" class=\"bcicon\"></div>\n    <ion-slides [pager]=\"true\">\n      <ion-slide *ngFor=\"let image of images\">\n        <ion-img [src]=\"image\" class=\"product-img\"></ion-img>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div class=\"product-list\">\n    <ion-grid class=\"padding\">\n      <ion-row>\n        <ion-col size=\"11\">\n          <p class=\"mb0 black-title\">{{ title }}</p>\n        </ion-col>\n        <ion-col size=\"1\">\n          <div class=\"list-detail\">\n            <div class=\"star-right\">\n              <p>\n                <ion-img [routerLink]=\"['/']\" src=\"../assets/star.png\"></ion-img>\n              </p>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <p size class=\"mb0 blue\"><span class=\"grey-bold\">Preis: </span>\n            <span class=\"amount elementblue\">{{ price }}</span>\n          </p>\n        </ion-col>\n        <ion-col size=\"6\">\n          <p class=\"mb0\"><span class=\"grey-bold\">Größe: </span>\n            <span class=\"length elementblue\">{{ size }}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <p class=\"mb0\"><span class=\"grey-bold\">Pay Pal: </span>\n            <span class=\"amount\">{{ paypal == 1 ? 'Ja' : 'No' }}</span></p>\n        </ion-col>\n        <ion-col size=\"6\">\n          <p class=\"mb0\"><span class=\"grey-bold\">Abholung: </span>\n            <span class=\"amount\">{{ pickup == 1 ? 'Ja' : 'No' }}</span></p>\n        </ion-col>\n        <ion-col size=\"6\">\n          <p class=\"mb0 grey-bold small-size\">Hersteller:</p>\n          <p class=\"mb0 grey-bold small-size\">Federweg Gabel:</p>\n        </ion-col>\n        <ion-col size=\"6\">\n          <p class=\"mb0\"> <span class=\"amount\">{{ brand }}</span> </p>\n          <p class=\"mb0\"> <span class=\"amount\">{{ fork }}</span> </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class=\"box\">\n            {{ desc }}\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <p class=\"text-center-doe\">Verkaufer: <span class=\"grey-bold\">{{ user }}</span></p>\n    <div class=\"main-btn\">\n      <button ion-button icon-start block color=\"dark\" class=\"button-login\">\n        KONTAKTIEREN\n      </button>\n    </div>\n    <google-ads></google-ads>\n    <div class=\"main-video\" padding>\n      <div class=\"slider-1\">\n        <h5 class=\"product-heading font-10\">BEISPIELVIDEO</h5>\n        <div class=\"cst-slider-wrap\">\n          <img src=\"../assets/video-bg.png\">\n        </div>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <p class=\"mb0 grey-bold small-size\">Grundpreis:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"mb0\">{{ baseprice }} </p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"mb0 grey-bold small-size\">Ort:</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <p class=\"mb0\">160mm </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div id='map'>\n      <img src=\"../assets/g-image.jpg\">\n    </div>\n    <div class=\"slider-2\" padding>\n      <h5 class=\"product-heading\">Neuste Artikel<span></span></h5>\n      <ion-slides>\n        <ion-slide>\n          <div class=\"cst-slider-wrap\">\n            <a href=\"#\">\n              <img src=\"../assets/video-bg.png\" class=\"product-main-slider\">\n              <div class=\"main-bottom-slider\">\n                <p class=\"slider-price\">123123123 €</p>\n                <p class=\"slider-price\">M</p>\n                <p class=\"product-slider-title\">Lorem Ipsum</p>\n              </div>\n            </a>\n          </div>\n          <div class=\"cst-slider-wrap\">\n            <a href=\"#\">\n              <img src=\"../assets/video-bg.png\" class=\"product-main-slider\">\n              <div class=\"main-bottom-slider\">\n                <p class=\"slider-price\">123123123 €</p>\n                <p class=\"slider-price\">M</p>\n                <p class=\"product-slider-title\">Lorem Ipsum</p>\n              </div>\n            </a>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n</ion-content>\n<main-footer></main-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "./src/app/product/product.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]
    }
];
let ProductPageModule = class ProductPageModule {
};
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



/***/ }),

/***/ "./src/app/product/product.page.scss":
/*!*******************************************!*\
  !*** ./src/app/product/product.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .slider-1 .product-heading {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  margin-top: 10px;\n}\n:host .slider-1 .product-heading span {\n  border-bottom: 2px solid #62c2e4;\n  width: 44px;\n  display: block;\n  position: relative;\n  top: 2px;\n}\n:host .star-right {\n  float: right;\n}\n:host .star-right p {\n  text-align: right;\n}\n:host .star-right p ion-img {\n  width: 24px;\n  float: left;\n  background: #e9e9e9;\n  padding: 5px;\n  border-radius: 62px;\n  margin-right: 5px;\n}\n.mb0 {\n  margin-bottom: 0px;\n}\n.grey-bold {\n  color: #555555;\n  font-weight: bold;\n  font-size: 18px;\n}\n.bold-blue {\n  font-weight: bold;\n}\n.blue {\n  color: #1f93c2;\n  font-size: 18px;\n}\n.comments {\n  background: #fff;\n  border: 1px solid #c3c3c3;\n  padding: 20px;\n  font-size: 12px;\n  border-radius: 3px;\n  padding-top: 0px;\n  height: 200px;\n  padding-left: 4px;\n}\n.item-native {\n  border: none;\n  --padding-start: 0px !important;\n  --padding-end: 0px !important;\n}\n.p0 {\n  padding: 0px !important;\n}\n.button-login {\n  width: 80%;\n  border: none;\n  border-radius: 160px;\n  color: #fff;\n  margin-bottom: 10px;\n  padding: 18px !important;\n  font-size: 16px;\n  background: #62c2e4;\n}\n.google-add {\n  margin: 10px 0px;\n}\n.text-center-doe {\n  text-align: center;\n  margin-top: 2rem;\n  font-size: 11px;\n}\n.font-10 {\n  font-size: 10px;\n}\n.main-btn {\n  margin: 0px auto;\n  text-align: center;\n  width: 100%;\n}\n.p0 {\n  padding: 0px !important;\n  --border-color: transparent !important;\n}\n.item-native {\n  --border-color: red;\n}\n.footer {\n  margin-bottom: 0px;\n  background: #fff;\n  margin-left: 20px;\n  margin-right: 20px;\n}\nbutton.footer {\n  padding: 0px;\n  width: 100%;\n  background: transparent;\n  margin: 0px;\n}\n.amount {\n  font-size: 18px;\n}\n.w20 img {\n  width: 20px;\n  margin-bottom: 10px;\n}\n.label-footer {\n  font-size: 12px;\n}\nfooter {\n  border-top: 2px solid #fcfcfc;\n  padding-top: 5px !important;\n}\n.elementblue {\n  background: #61c2e4 !important;\n  color: #fff !important;\n  font-size: 18px !important;\n  border-radius: 50px !important;\n  width: 100px !important;\n  display: block;\n  height: 30px;\n  text-align: center;\n  margin: 0px;\n  padding: 0px;\n  float: right;\n}\n.relative {\n  position: relative;\n}\n.backicon img {\n  width: 13px;\n}\n.backicon {\n  position: absolute;\n  top: 5px;\n  z-index: 9999;\n  left: 3%;\n}\n.black-title {\n  color: #000;\n  font-size: 20px;\n  font-weight: 600;\n}\ndiv#map img {\n  width: 100%;\n}\n.main-bottom-slider {\n  background: #808080;\n  border-radius: 0px 0px 4px 4px;\n}\n.main-bottom-slider .slider-price {\n  background: #62c2e4;\n  color: #fff;\n  float: left;\n  padding: 2px 6px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: -9px;\n  margin-left: 5px;\n  width: 70px;\n  position: relative;\n  z-index: 9;\n  margin-bottom: 0px;\n}\n.main-bottom-slider .product-slider-title {\n  background: #808080;\n  color: #fff;\n  font-size: 12px;\n  text-align: left;\n  margin-bottom: 0px;\n  padding: 7px 5px;\n  border-radius: 0px 0px 4px 4px;\n  clear: both;\n}\n.product-img {\n  width: 100%;\n  height: 280px;\n}\n.padding {\n  padding: 20px;\n}\n.box {\n  background: #ffffff;\n  border-radius: 5px;\n  border: 1px solid #cccccc;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0hOO0FETU07RUFDRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDSlI7QURTRTtFQUNFLFlBQUE7QUNQSjtBRFNJO0VBQ0UsaUJBQUE7QUNQTjtBRFNNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUFI7QURjQTtFQUNFLGtCQUFBO0FDWEY7QURjQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNYRjtBRGNBO0VBQ0UsaUJBQUE7QUNYRjtBRGNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNYRjtBRGNBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ1hGO0FEY0E7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ1hGO0FEY0E7RUFDRSx1QkFBQTtBQ1hGO0FEY0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNYRjtBRGVBO0VBQ0UsZ0JBQUE7QUNaRjtBRGVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNaRjtBRGVBO0VBQ0UsZUFBQTtBQ1pGO0FEZUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1pGO0FEZUE7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0FDWkY7QURlQTtFQUNFLG1CQUFBO0FDWkY7QURpQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQ2ZGO0FEb0JBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNqQkY7QURzQkE7RUFDRSxlQUFBO0FDbkJGO0FEc0JBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDbkJGO0FEc0JBO0VBQ0UsZUFBQTtBQ25CRjtBRHNCQTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7QUNuQkY7QURzQkE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ25CRjtBRHNCQTtFQUNFLGtCQUFBO0FDbkJGO0FEc0JBO0VBQ0UsV0FBQTtBQ25CRjtBRHNCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0FDbkJGO0FEc0JBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ25CRjtBRHNCQTtFQUNFLFdBQUE7QUNuQkY7QURzQkE7RUFDRSxtQkFBQTtFQUNBLDhCQUFBO0FDbkJGO0FEcUJFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDbkJKO0FEc0JFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ3BCSjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDckJGO0FEd0JBO0VBQ0UsYUFBQTtBQ3JCRjtBRHdCQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNyQkYiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gIC5zbGlkZXItMSB7XG5cbiAgICAucHJvZHVjdC1oZWFkaW5nIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDRkNGQ0O1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2MmMyZTQ7XG4gICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3Rhci1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgcCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgaW9uLWltZyB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2MnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG4ubWIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZ3JleS1ib2xkIHtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ib2xkLWJsdWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJsdWUge1xuICBjb2xvcjogIzFmOTNjMjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY29tbWVudHMge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wMCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWxvZ2luIHtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xuXG59XG5cbi5nb29nbGUtYWRkIHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cblxuLnRleHQtY2VudGVyLWRvZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZm9udC0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm1haW4tYnRuIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnAwIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICAtLWJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4vLyBmb290ZXIgc3RhcnRcblxuLmZvb3RlciB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcblxuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG5cbn1cblxuYnV0dG9uLmZvb3RlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDBweDtcblxuXG59XG5cbi5hbW91bnQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi53MjAgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sYWJlbC1mb290ZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmNmY2ZjO1xuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lbGVtZW50Ymx1ZSB7XG4gIGJhY2tncm91bmQ6ICM2MWMyZTQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5iYWNraWNvbiBpbWcge1xuICB3aWR0aDogMTNweDtcbn1cblxuLmJhY2tpY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgei1pbmRleDogOTk5OTtcbiAgbGVmdDogMyU7XG59XG5cbi5ibGFjay10aXRsZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmRpdiNtYXAgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLWJvdHRvbS1zbGlkZXIge1xuICBiYWNrZ3JvdW5kOiAjODA4MDgwO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG5cbiAgLnNsaWRlci1wcmljZSB7XG4gICAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogLTlweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA5O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5wcm9kdWN0LXNsaWRlci10aXRsZSB7XG4gICAgYmFja2dyb3VuZDogIzgwODA4MDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZzogN3B4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLnByb2R1Y3QtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjgwcHg7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmJveCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgcGFkZGluZzogMTBweDtcbn0iLCI6aG9zdCAuc2xpZGVyLTEgLnByb2R1Y3QtaGVhZGluZyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG46aG9zdCAuc2xpZGVyLTEgLnByb2R1Y3QtaGVhZGluZyBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2MmMyZTQ7XG4gIHdpZHRoOiA0NHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cbjpob3N0IC5zdGFyLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuOmhvc3QgLnN0YXItcmlnaHQgcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuOmhvc3QgLnN0YXItcmlnaHQgcCBpb24taW1nIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDYycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubWIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZ3JleS1ib2xkIHtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ib2xkLWJsdWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJsdWUge1xuICBjb2xvcjogIzFmOTNjMjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY29tbWVudHMge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wMCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWxvZ2luIHtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xufVxuXG4uZ29vZ2xlLWFkZCB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbi50ZXh0LWNlbnRlci1kb2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmZvbnQtMTAge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5tYWluLWJ0biB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wMCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgLS1ib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuYnV0dG9uLmZvb3RlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLncyMCBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxhYmVsLWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmY2ZjZmM7XG4gIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmVsZW1lbnRibHVlIHtcbiAgYmFja2dyb3VuZDogIzYxYzJlNCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhY2tpY29uIGltZyB7XG4gIHdpZHRoOiAxM3B4O1xufVxuXG4uYmFja2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICB6LWluZGV4OiA5OTk5O1xuICBsZWZ0OiAzJTtcbn1cblxuLmJsYWNrLXRpdGxlIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuZGl2I21hcCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW4tYm90dG9tLXNsaWRlciB7XG4gIGJhY2tncm91bmQ6ICM4MDgwODA7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbn1cbi5tYWluLWJvdHRvbS1zbGlkZXIgLnNsaWRlci1wcmljZSB7XG4gIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAtOXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB3aWR0aDogNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ubWFpbi1ib3R0b20tc2xpZGVyIC5wcm9kdWN0LXNsaWRlci10aXRsZSB7XG4gIGJhY2tncm91bmQ6ICM4MDgwODA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZzogN3B4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xuICBjbGVhcjogYm90aDtcbn1cblxuLnByb2R1Y3QtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjgwcHg7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmJveCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/products.service */ "./src/app/services/products.service.ts");




let ProductPage = class ProductPage {
    constructor(route, productService) {
        this.route = route;
        this.productService = productService;
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        console.log('product id:' + this.id);
        this.productService.getProduct(this.id).subscribe(product => {
            console.log(product);
            this.title = product.title;
            this.price = product.price;
            this.paypal = product.paypal;
            this.pickup = product.pickup;
            this.brand = product.brand;
            this.size = product.size;
            this.fork = product.fork;
            this.user = product.user;
            this.images = product.filename;
            this.desc = product.desc;
            this.baseprice = product.baseprice;
        });
    }
    ngOnInit() { }
};
ProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }
];
ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.page.html */ "./node_modules/raw-loader/index.js!./src/app/product/product.page.html"),
        styles: [__webpack_require__(/*! ./product.page.scss */ "./src/app/product/product.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]])
], ProductPage);



/***/ })

}]);
//# sourceMappingURL=product-product-module-es2015.js.map