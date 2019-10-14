(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<ion-content>\n\t<div class=\"ion-padding\">\n\t\t<!-- Product Carousel for Premiumanzeigen  -->\n\t\t<products-carousel [products]=\"productsSlides\" [size]=\"1\" heading=\"Premiumanzeigen\"></products-carousel>\n\t\t\n\t\t<!-- Categories Carousel for Kategorein  -->\n\t\t<categories-carousel [categories]=\"categories\" heading=\"Kategorein\"></categories-carousel>\n\t\t\n\t\t<!-- Google Ads Component  -->\n\t\t<google-ads></google-ads>\n\t\t\n\t\t<!-- Products Carousel for Neuste Artikel  -->\n\t\t<products-carousel [products]=\"productsLatests\" [size]=\"2\" heading=\"Neuste Artikel\"></products-carousel>\n\t\t\n\t\t<!-- Videos Carousel for Neuste User videos  -->\n\t\t<video-carousel [videos]=\"videos\" heading=\"Neuste User videos\"></video-carousel>\n\t</div>\n</ion-content>\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .product-slider .product-heading {\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  margin-top: 0px;\n}\n:host .product-slider .product-main-slider {\n  width: 100%;\n  border: 1px solid #d4d4d4;\n  border-radius: 3px;\n  border-bottom: 2px solid #d4d4d4;\n  height: 258px;\n}\n:host .product-slider .bg-title {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n}\n:host .product-slider .bg-title a {\n  text-decoration: none;\n}\n:host .product-slider .bg-title .product-slider-title {\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  padding: 7px;\n  border-radius: 3px;\n  font-size: 14px;\n  margin-bottom: 0px;\n  width: 70%;\n  text-align: left;\n  line-height: 17px;\n}\n:host .product-slider .bg-title .slider-price {\n  background: #62c2e4;\n  color: #fff;\n  float: left;\n  padding: 1px 9px;\n  border-radius: 50px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: -4px;\n  margin-left: 12px;\n}\n:host .slider-1 .product-heading {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  margin-top: 10px;\n  border-bottom: 2px solid #d4d4d4;\n}\n:host .slider-1 .product-heading span {\n  border-bottom: 2px solid #62c2e4;\n  width: 44px;\n  display: block;\n  position: relative;\n  top: 2px;\n}\n:host .slider-1 .cst-slider-wrap {\n  border: 1px solid #d4d4d4;\n  margin: 2px;\n  border-radius: 4px;\n}\n:host .slider-1 .cst-slider-wrap a {\n  text-decoration: none;\n}\n:host .slider-1 .cst-slider-wrap .product-main-slider {\n  width: 110px;\n  height: 72px;\n  background: url('no-image.png') no-repeat center center;\n  background-size: contain;\n}\n:host .slider-1 .cst-slider-wrap .cat-title {\n  margin-bottom: 3px;\n  text-transform: uppercase;\n  font-size: 11px;\n  text-align: center;\n  color: #2d2d2d;\n  margin-top: 3px;\n  height: 35px;\n  display: inline-block;\n  vertical-align: middle;\n}\n:host .slider-2 .product-heading {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  margin-top: 10px;\n  border-bottom: 2px solid #d4d4d4;\n}\n:host .slider-2 .product-heading span {\n  border-bottom: 2px solid #62c2e4;\n  width: 44px;\n  display: block;\n  position: relative;\n  top: 2px;\n}\n:host .slider-2 .main-bottom-slider {\n  background: #808080;\n  border-radius: 0px 0px 4px 4px;\n}\n:host .slider-2 .main-bottom-slider .slider-price {\n  background: #62c2e4;\n  color: #fff;\n  float: left;\n  padding: 2px 10px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: -9px;\n  margin-left: 5px;\n  position: relative;\n  z-index: 9;\n  margin-bottom: 0px;\n}\n:host .slider-2 .main-bottom-slider .slider-size {\n  background: #62c2e4;\n  color: #fff;\n  float: right;\n  padding: 2px 10px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: -9px;\n  margin-right: 15px;\n  position: relative;\n  z-index: 9;\n  margin-bottom: 0px;\n}\n:host .slider-2 .main-bottom-slider .product-slider-title {\n  background: #808080;\n  color: #fff;\n  font-size: 12px;\n  text-align: left;\n  margin-bottom: 0px;\n  padding: 7px 5px;\n  border-radius: 0px 0px 4px 4px;\n  clear: both;\n  height: 48px;\n}\n:host .slider-2 .cst-slider-wrap {\n  border: 1px solid #d4d4d4;\n  margin: 2px;\n  border-radius: 4px;\n}\n:host .slider-2 .cst-slider-wrap a {\n  text-decoration: none;\n}\n:host .slider-2 .cst-slider-wrap .product-main-slider {\n  width: 165px;\n  height: 135px;\n}\n:host .slider-2 .cst-slider-wrap .cat-title {\n  margin-bottom: 3px;\n  text-transform: uppercase;\n  font-size: 11px;\n  text-align: left;\n  margin-left: 5px;\n  color: #2d2d2d;\n  margin-top: 3px;\n}\n:host .slider-3 .product-heading {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  margin-top: 10px;\n  border-bottom: 2px solid #d4d4d4;\n}\n:host .slider-3 .product-heading span {\n  border-bottom: 2px solid #62c2e4;\n  width: 44px;\n  display: block;\n  position: relative;\n  top: 2px;\n}\n:host .google-add {\n  margin: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRFo7QURJUTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FDRlo7QURLUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNIWjtBREtZO0VBQ0kscUJBQUE7QUNIaEI7QURNWTtFQUNJLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSmhCO0FEUVk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNOaEI7QURpQlE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ2ZaO0FEaUJZO0VBQ0ksZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ2ZoQjtBRG1CUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDakJaO0FEbUJZO0VBQ0kscUJBQUE7QUNqQmhCO0FEb0JZO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtFQUNBLHdCQUFBO0FDbEJoQjtBRHFCWTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDbkJoQjtBRDhCUTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDNUJaO0FEOEJZO0VBQ0ksZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQzVCaEI7QURnQ1E7RUFDSSxtQkFBQTtFQUNBLDhCQUFBO0FDOUJaO0FEZ0NZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUM5QmhCO0FEaUNZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUMvQmhCO0FEa0NZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNoQ2hCO0FEcUNRO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNuQ1o7QURxQ1k7RUFDSSxxQkFBQTtBQ25DaEI7QURzQ1k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ3BDaEI7QUR1Q1k7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ3JDaEI7QURnRFE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQzlDWjtBRGdEWTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUM5Q2hCO0FEd0RJO0VBQ0ksZ0JBQUE7QUN0RFIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5wcm9kdWN0LXNsaWRlciB7XG4gICAgICAgIC5wcm9kdWN0LWhlYWRpbmcge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdC1tYWluLXNsaWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Q0ZDRkNDtcbiAgICAgICAgICAgIGhlaWdodDogMjU4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmctdGl0bGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgbGVmdDogMTVweDtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJvZHVjdC1zbGlkZXItdGl0bGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbGlkZXItcHJpY2Uge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDlweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgICAgIGlvbi1zbGlkZSB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNsaWRlci0xIHtcblxuICAgICAgICAucHJvZHVjdC1oZWFkaW5nIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDRkNGQ0O1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzYyYzJlNDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY3N0LXNsaWRlci13cmFwIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJvZHVjdC1tYWluLXNsaWRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9uby1pbWFnZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXQtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyZDJkMmQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaW9uLXNsaWRlcyB7XG4gICAgICAgICAgICBpb24tc2xpZGUge31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbGlkZXItMiB7XG4gICAgICAgIC5wcm9kdWN0LWhlYWRpbmcge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkNGQ0ZDQ7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjJjMmU0O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5tYWluLWJvdHRvbS1zbGlkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzgwODA4MDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcblxuICAgICAgICAgICAgLnNsaWRlci1wcmljZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC05cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbGlkZXItc2l6ZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtOXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcm9kdWN0LXNsaWRlci10aXRsZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzgwODA4MDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG4gICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAuY3N0LXNsaWRlci13cmFwIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJvZHVjdC1tYWluLXNsaWRlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2NXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTM1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXQtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyZDJkMmQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgICAgIGlvbi1zbGlkZSB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNsaWRlci0zIHtcbiAgICAgICAgLnByb2R1Y3QtaGVhZGluZyB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Q0ZDRkNDtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2MmMyZTQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgICAgIGlvbi1zbGlkZSB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmdvb2dsZS1hZGQge1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIH1cbn0iLCI6aG9zdCAucHJvZHVjdC1zbGlkZXIgLnByb2R1Y3QtaGVhZGluZyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbjpob3N0IC5wcm9kdWN0LXNsaWRlciAucHJvZHVjdC1tYWluLXNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDRkNGQ0O1xuICBoZWlnaHQ6IDI1OHB4O1xufVxuOmhvc3QgLnByb2R1Y3Qtc2xpZGVyIC5iZy10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xufVxuOmhvc3QgLnByb2R1Y3Qtc2xpZGVyIC5iZy10aXRsZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuOmhvc3QgLnByb2R1Y3Qtc2xpZGVyIC5iZy10aXRsZSAucHJvZHVjdC1zbGlkZXItdGl0bGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHdpZHRoOiA3MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xufVxuOmhvc3QgLnByb2R1Y3Qtc2xpZGVyIC5iZy10aXRsZSAuc2xpZGVyLXByaWNlIHtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgY29sb3I6ICNmZmY7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxcHggOXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IC00cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuOmhvc3QgLnNsaWRlci0xIC5wcm9kdWN0LWhlYWRpbmcge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Q0ZDRkNDtcbn1cbjpob3N0IC5zbGlkZXItMSAucHJvZHVjdC1oZWFkaW5nIHNwYW4ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzYyYzJlNDtcbiAgd2lkdGg6IDQ0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuOmhvc3QgLnNsaWRlci0xIC5jc3Qtc2xpZGVyLXdyYXAge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBtYXJnaW46IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuOmhvc3QgLnNsaWRlci0xIC5jc3Qtc2xpZGVyLXdyYXAgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbjpob3N0IC5zbGlkZXItMSAuY3N0LXNsaWRlci13cmFwIC5wcm9kdWN0LW1haW4tc2xpZGVyIHtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDcycHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9uby1pbWFnZS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbjpob3N0IC5zbGlkZXItMSAuY3N0LXNsaWRlci13cmFwIC5jYXQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJkMmQyZDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbjpob3N0IC5zbGlkZXItMiAucHJvZHVjdC1oZWFkaW5nIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkNGQ0ZDQ7XG59XG46aG9zdCAuc2xpZGVyLTIgLnByb2R1Y3QtaGVhZGluZyBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2MmMyZTQ7XG4gIHdpZHRoOiA0NHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cbjpob3N0IC5zbGlkZXItMiAubWFpbi1ib3R0b20tc2xpZGVyIHtcbiAgYmFja2dyb3VuZDogIzgwODA4MDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xufVxuOmhvc3QgLnNsaWRlci0yIC5tYWluLWJvdHRvbS1zbGlkZXIgLnNsaWRlci1wcmljZSB7XG4gIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogLTlweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG46aG9zdCAuc2xpZGVyLTIgLm1haW4tYm90dG9tLXNsaWRlciAuc2xpZGVyLXNpemUge1xuICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAtOXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuOmhvc3QgLnNsaWRlci0yIC5tYWluLWJvdHRvbS1zbGlkZXIgLnByb2R1Y3Qtc2xpZGVyLXRpdGxlIHtcbiAgYmFja2dyb3VuZDogIzgwODA4MDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiA3cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG4gIGNsZWFyOiBib3RoO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG46aG9zdCAuc2xpZGVyLTIgLmNzdC1zbGlkZXItd3JhcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIG1hcmdpbjogMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG46aG9zdCAuc2xpZGVyLTIgLmNzdC1zbGlkZXItd3JhcCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuOmhvc3QgLnNsaWRlci0yIC5jc3Qtc2xpZGVyLXdyYXAgLnByb2R1Y3QtbWFpbi1zbGlkZXIge1xuICB3aWR0aDogMTY1cHg7XG4gIGhlaWdodDogMTM1cHg7XG59XG46aG9zdCAuc2xpZGVyLTIgLmNzdC1zbGlkZXItd3JhcCAuY2F0LXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjMmQyZDJkO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG46aG9zdCAuc2xpZGVyLTMgLnByb2R1Y3QtaGVhZGluZyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDRkNGQ0O1xufVxuOmhvc3QgLnNsaWRlci0zIC5wcm9kdWN0LWhlYWRpbmcgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjJjMmU0O1xuICB3aWR0aDogNDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG46aG9zdCAuZ29vZ2xlLWFkZCB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _services_videos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/videos.service */ "./src/app/services/videos.service.ts");
/* harmony import */ var _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/youtube-video-player/ngx */ "./node_modules/@ionic-native/youtube-video-player/ngx/index.js");






var HomePage = /** @class */ (function () {
    function HomePage(productsService, categoriesService, videosService, youtube) {
        var _this = this;
        this.productsService = productsService;
        this.categoriesService = categoriesService;
        this.videosService = videosService;
        this.youtube = youtube;
        this.slideOpts = {
            slidesPerView: 3
        };
        this.slideOpts2 = {
            slidesPerView: 2
        };
        this.slideOpts3 = {
            slidesPerView: 1
        };
        // Get products for Slider 
        this.productsService.getProducts('0,10', 'online_from').subscribe(function (products) {
            _this.productsSlides = products.records;
            console.log(_this.productsSlides);
        });
        // Get latest products 
        this.productsService.getProducts('0,10', 'user').subscribe(function (products) {
            _this.productsLatests = products.records;
            console.log(_this.productsLatests);
        });
        this.categoriesService.getCategories().subscribe(function (categories) {
            _this.categories = categories['records'];
            console.log(_this.categories);
        });
        this.videosService.getLatestVideos().subscribe(function (videos) {
            _this.videos = videos['records'];
            console.log(_this.videos);
        });
    }
    HomePage.prototype.openVideo = function (video_id) {
        this.youtube.openVideo(video_id);
    };
    HomePage.prototype.missingImage = function (missingImgUrl) {
        console.log(missingImgUrl);
    };
    HomePage.ctorParameters = function () { return [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
        { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] },
        { type: _services_videos_service__WEBPACK_IMPORTED_MODULE_4__["VideosService"] },
        { type: _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_5__["YoutubeVideoPlayer"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"], _services_videos_service__WEBPACK_IMPORTED_MODULE_4__["VideosService"], _ionic_native_youtube_video_player_ngx__WEBPACK_IMPORTED_MODULE_5__["YoutubeVideoPlayer"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map