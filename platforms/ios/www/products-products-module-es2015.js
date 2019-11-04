(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<ion-content class=\"ion-padding\">\n    <ion-split-pane [when]=\"splitPaneState\">\n        <ion-menu side=\"end\" contentId=\"content\">\n            <ion-content>\n                <div class=\"backicon\"><img src=\"../assets/backicon.png\" class=\"bcicon\" (click)=\"openFilter()\">\n                    <img src=\"../assets/tick.png\" class=\"tickright\">\n                </div>\n                <ion-list no-padding>\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <div class=\"tabs\">\n                                <div class=\"tab\">\n                                    <input type=\"radio\" id=\"rd1\" name=\"rd\">\n                                    <label class=\"tab-label\" for=\"rd1\">Hersteller</label>\n                                    <div class=\"tab-content\">\n                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.\n                                    </div>\n                                </div>\n                                <div class=\"tab\">\n                                    <input type=\"radio\" id=\"rd2\" name=\"rd\">\n                                    <label class=\"tab-label\" for=\"rd2\">RahmengroBe</label>\n                                    <div class=\"tab-content\">\n                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.\n                                    </div>\n                                </div>\n                                <div class=\"tab\">\n                                    <input type=\"radio\" id=\"rd3\" name=\"rd\">\n                                    <label class=\"tab-label\" for=\"rd4\">Federweg</label>\n                                    <div class=\"tab-content\">\n                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.\n                                    </div>\n                                </div>\n                                <div class=\"tab\">\n                                    <input type=\"radio\" id=\"rd4\" name=\"rd\">\n                                    <label class=\"tab-label\" for=\"rd4\">LaufradgroBe</label>\n                                    <div class=\"tab-content\">\n                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                </ion-list>\n                <ion-list no-padding>\n                    <p class=\"range-head\">Preis</p>\n                    <div class=\"row\">\n                        <div class=\"range-custom\">\n                            <ion-range [dualKnobs]=\"true\" [pin]=\"false\" [(ngModel)]=\"euro\" [min]=\"0\" [max]=\"2500\"\n                                (ionChange)=\"onAgeChange()\">\n\n                            </ion-range>\n                            <div class=\"slotleft\" slot=\"start\">€ {{euro?.lower}}</div>\n                            <div class=\"slotright\" slot=\"end\">€ {{euro?.upper}}</div>\n                        </div>\n                    </div>\n\n                    <p class=\"range-head\">Umkreis eigrenzen</p>\n                    <div class=\"detail-range\">PLZ 69181</div>\n                    <div class=\"row\">\n                        <div class=\"range-custom\">\n                            <ion-range [dualKnobs]=\"true\" [pin]=\"false\" [(ngModel)]=\"km\" [min]=\"0\" [max]=\"400\"\n                                (ionChange)=\"onAgeChange()\">\n\n                            </ion-range>\n                            <div class=\"slotleft\" slot=\"start\">{{km?.lower}} km</div>\n                            <div class=\"slotright\" slot=\"end\">{{km?.upper}} km</div>\n                        </div>\n                    </div>\n                </ion-list>\n                <ion-list no-padding>\n                    <img src=\"../assets/g-image.jpg\">\n\n                </ion-list>\n            </ion-content>\n        </ion-menu>\n        <ion-router-outlet id=\"content\" main>\n        </ion-router-outlet>\n    </ion-split-pane>\n    <div class=\"main-cat\">\n        <div class=\"cat-name\">{{category}}</div>\n        <p class=\"cat-pt-name\">Premium Artikel</p>\n        <img src=\"../assets/filter.png\" class=\"filter-button\" (click)=\"openFilter()\">\n    </div>\n    <div class=\"scroll\" scrolly=\"true\">\n        <products-list [products]=\"products\"></products-list>\n    </div>\n    <div class=\"border-bottom\"></div>\n</ion-content>\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");









const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }
];
let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
    })
], ProductsPageModule);



/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.product-list {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border: 1px solid #d4d4d4;\n  border-radius: 3px;\n  background-color: #fff;\n}\n.product-list a {\n  text-decoration: none;\n}\n.product-list a .product-title-list {\n  margin-top: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #000;\n}\n.product-list .product-list-image {\n  height: 110px;\n}\n.product-list .price-prod-list {\n  color: #62c2e4;\n  margin-bottom: 0px;\n}\n.product-list .product-icon-image {\n  height: 22px;\n}\n.product-list .border-bottom {\n  border-bottom: 1px solid #d4d4d4;\n  height: 2px;\n}\n.product-list .bottom-icon-list {\n  border-right: 1px solid #d4d4d4;\n}\n.product-list .last-orange {\n  color: #f7790d;\n  font-size: 12px;\n  text-transform: uppercase;\n  margin-bottom: 0px;\n  margin-top: 3px;\n}\n.product-list .last-orange img {\n  width: 12px;\n  margin-right: 2px;\n}\nion-segment.sc-ion-segment-md-h.sc-ion-segment-md-s.md.hydrated {\n  margin-bottom: 18px;\n}\n.star-right {\n  float: right;\n}\n.star-right ion-img {\n  width: 24px;\n  float: left;\n  background: #e9e9e9;\n  padding: 5px;\n  border-radius: 62px;\n  margin-right: 5px;\n}\n.cat-pt-name {\n  font-size: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  font-weight: 600;\n}\n.border-bottom {\n  border-bottom: 1px solid #d4d4d4;\n  height: 2px;\n  margin: 20px 50px;\n}\n.split-pane {\n  position: absolute;\n}\nion-menu[type=overlay] {\n  z-index: 80;\n  position: fixed;\n}\nion-menu[type=reveal] {\n  z-index: 80;\n}\n.split-pane-visible {\n  z-index: 2;\n}\n.filter-button {\n  background: none !important;\n  float: right;\n  top: 13px;\n  position: absolute;\n  right: 17px;\n  width: 26px;\n}\n.filter-button-2 .button-native {\n  background: #fff;\n}\ninput {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n.row {\n  display: -webkit-box;\n  display: flex;\n}\n.row .col {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.row .col:last-child {\n  margin-left: 1em;\n}\n/* Accordion styles */\n.tabs {\n  overflow: hidden;\n}\n.tab {\n  width: 100%;\n  color: white;\n  overflow: hidden;\n}\n.tab-label {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0.5em 1em;\n  background: #ffffff;\n  cursor: pointer;\n  color: #000000;\n  border: 1px solid #e9e9e9;\n  font-size: 14px;\n  font-weight: 400;\n  /* Icon */\n}\n.tab-label::after {\n  content: \"❯\";\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.tab-content {\n  max-height: 0;\n  padding: 0 1em;\n  color: #ffffff;\n  background: white;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n}\n.tab-close {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  font-size: 0.75em;\n  background: #ffffff;\n  cursor: pointer;\n}\n.range-slider {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.range-custom {\n  width: 100%;\n  margin-left: 15px;\n  margin-right: 15px;\n}\ninput:checked + .tab-label::after {\n  -webkit-transform: rotate(275deg);\n          transform: rotate(275deg);\n}\ninput:checked ~ .tab-content {\n  max-height: 100vh;\n  padding: 1em;\n  color: #000;\n}\n:host .item-inner {\n  padding-right: 0px !important;\n}\n.backicon {\n  width: 100%;\n  margin-left: 5px;\n  margin-bottom: 10px;\n  height: 30px;\n  padding-top: 10px;\n}\n.backicon img.bcicon {\n  float: left;\n  width: 12px;\n}\n.backicon img.tickright {\n  float: right;\n  width: 14px;\n  margin-right: 12px;\n}\n.slotleft {\n  float: left;\n  padding-left: 12px;\n  margin-top: -17px;\n}\n.slotright {\n  float: right;\n  margin-right: 12px;\n  margin-top: -17px;\n}\n.range-head {\n  padding-left: 9px;\n  margin-bottom: -11px;\n  margin-top: 20px;\n}\n.range-md .range-knob-handle .range-pin {\n  -webkit-transform: translate3d(0, 0, 0) scale(1);\n          transform: translate3d(0, 0, 0) scale(1);\n}\n.range-md:not(.range-has-pin) .range-knob-handle .range-knob {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  background-color: #000;\n}\n.range-ios .range-knob-handle .range-pin {\n  -webkit-transform: translate3d(0, 0, 0) scale(1);\n          transform: translate3d(0, 0, 0) scale(1);\n}\n.detail-range {\n  background: #fff;\n  padding: 6px 9px;\n  margin-top: 17px;\n  border: 1px solid #e9e9e9;\n}\n.split-pane-md.split-pane-visible > .split-pane-side[side=end] {\n  min-width: 100%;\n  max-width: 100%;\n  border-right: 0;\n  border-left: var(--border);\n}\n.scroll {\n  height: calc(100% - 60px);\n}\ndiv[scrollx=true],\ndiv[scrolly=true] {\n  position: relative;\n  overflow: hidden;\n}\ndiv[scrollx=true] ::-webkit-scrollbar,\ndiv[scrolly=true] ::-webkit-scrollbar {\n  display: none;\n}\ndiv[scrollx=true] {\n  overflow-x: auto;\n}\ndiv[scrolly=true] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwiL1VzZXJzL211cnRhemEvRGVza3RvcC9EYXRhL0lvbmljQXBwcy9Nb3V0YWluQmlrZUFwcC9CaWtlQm9lcnNlL0Jpa2VCb2Vyc2Uvc3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FERUY7QUNBRTtFQUNFLHFCQUFBO0FERUo7QUNBSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FERU47QUNFRTtFQUNFLGFBQUE7QURBSjtBQ0dFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FEREo7QUNJRTtFQUNFLFlBQUE7QURGSjtBQ0tFO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0FESEo7QUNNRTtFQUNFLCtCQUFBO0FESko7QUNPRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURMSjtBQ09JO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FETE47QUNVQTtFQUNFLG1CQUFBO0FEUEY7QUNVQTtFQUNFLFlBQUE7QURQRjtBQ1NFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEUEo7QUNZQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURURjtBQ1lBO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QURURjtBQ1lBO0VBQ0Usa0JBQUE7QURURjtBQ1lBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QURURjtBQ1lBO0VBQ0UsV0FBQTtBRFRGO0FDWUE7RUFDRSxVQUFBO0FEVEY7QUNhQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEVkY7QUNjRTtFQUVFLGdCQUFBO0FEWko7QUNxQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FEbEJGO0FDc0JBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FEbkJGO0FDcUJFO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0FEbkJKO0FDcUJJO0VBQ0UsZ0JBQUE7QURuQk47QUN3QkEscUJBQUE7QUFDQTtFQUNFLGdCQUFBO0FEckJGO0FDeUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRHRCRjtBQ3dCRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQXZDTztFQXdDUCxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBRHRCSjtBQ3dCSTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUR0Qk47QUMwQkU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBNURPO0VBNkRQLGlCQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtBRHhCSjtBQzJCRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQXRFTztFQXVFUCxlQUFBO0FEMUJKO0FDK0JBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBRDVCRjtBQytCQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FENUJGO0FDb0NJO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtBRGpDTjtBQ3FDRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURuQ0o7QUN3Q0U7RUFDRSw2QkFBQTtBRHJDSjtBQ3lDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEdENGO0FDd0NFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUR0Q0o7QUN5Q0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEdkNKO0FDMkNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUR4Q0Y7QUMyQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRHhDRjtBQzJDQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBRHhDRjtBQzJDQTtFQUNFLGdEQUFBO1VBQUEsd0NBQUE7QUR4Q0Y7QUMyQ0E7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0JBQUE7QUR4Q0Y7QUMyQ0E7RUFDRSxnREFBQTtVQUFBLHdDQUFBO0FEeENGO0FDMkNBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUR4Q0Y7QUMyQ0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBRHhDRjtBQzJDQTtFQUdFLHlCQUFBO0FEeENGO0FDMkNBOztFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7QUR4Q0Y7QUMwQ0U7O0VBQ0UsYUFBQTtBRHZDSjtBQzJDQTtFQUNFLGdCQUFBO0FEeENGO0FDMkNBO0VBQ0UsZ0JBQUE7QUR4Q0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucHJvZHVjdC1saXN0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5wcm9kdWN0LWxpc3QgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5wcm9kdWN0LWxpc3QgYSAucHJvZHVjdC10aXRsZS1saXN0IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnByb2R1Y3QtbGlzdCAucHJvZHVjdC1saXN0LWltYWdlIHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cbi5wcm9kdWN0LWxpc3QgLnByaWNlLXByb2QtbGlzdCB7XG4gIGNvbG9yOiAjNjJjMmU0O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ucHJvZHVjdC1saXN0IC5wcm9kdWN0LWljb24taW1hZ2Uge1xuICBoZWlnaHQ6IDIycHg7XG59XG4ucHJvZHVjdC1saXN0IC5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGhlaWdodDogMnB4O1xufVxuLnByb2R1Y3QtbGlzdCAuYm90dG9tLWljb24tbGlzdCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNGQ0ZDQ7XG59XG4ucHJvZHVjdC1saXN0IC5sYXN0LW9yYW5nZSB7XG4gIGNvbG9yOiAjZjc3OTBkO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLnByb2R1Y3QtbGlzdCAubGFzdC1vcmFuZ2UgaW1nIHtcbiAgd2lkdGg6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG5pb24tc2VnbWVudC5zYy1pb24tc2VnbWVudC1tZC1oLnNjLWlvbi1zZWdtZW50LW1kLXMubWQuaHlkcmF0ZWQge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uc3Rhci1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5zdGFyLXJpZ2h0IGlvbi1pbWcge1xuICB3aWR0aDogMjRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNjJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jYXQtcHQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luOiAyMHB4IDUwcHg7XG59XG5cbi5zcGxpdC1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tbWVudVt0eXBlPW92ZXJsYXldIHtcbiAgei1pbmRleDogODA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuaW9uLW1lbnVbdHlwZT1yZXZlYWxdIHtcbiAgei1pbmRleDogODA7XG59XG5cbi5zcGxpdC1wYW5lLXZpc2libGUge1xuICB6LWluZGV4OiAyO1xufVxuXG4uZmlsdGVyLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IDEzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG4gIHdpZHRoOiAyNnB4O1xufVxuXG4uZmlsdGVyLWJ1dHRvbi0yIC5idXR0b24tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yb3cgLmNvbCB7XG4gIGZsZXg6IDE7XG59XG4ucm93IC5jb2w6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbi8qIEFjY29yZGlvbiBzdHlsZXMgKi9cbi50YWJzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhYiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGFiLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLyogSWNvbiAqL1xufVxuLnRhYi1sYWJlbDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKdr1wiO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi50YWItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcbn1cbi50YWItY2xvc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmb250LXNpemU6IDAuNzVlbTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmFuZ2Utc2xpZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnJhbmdlLWN1c3RvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnRhYi1sYWJlbDo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzVkZWcpO1xufVxuaW5wdXQ6Y2hlY2tlZCB+IC50YWItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxZW07XG4gIGNvbG9yOiAjMDAwO1xufVxuXG46aG9zdCAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2ljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5iYWNraWNvbiBpbWcuYmNpY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMnB4O1xufVxuLmJhY2tpY29uIGltZy50aWNrcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5zbG90bGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IC0xN3B4O1xufVxuXG4uc2xvdHJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IC0xN3B4O1xufVxuXG4ucmFuZ2UtaGVhZCB7XG4gIHBhZGRpbmctbGVmdDogOXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTFweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnJhbmdlLW1kIC5yYW5nZS1rbm9iLWhhbmRsZSAucmFuZ2UtcGluIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbn1cblxuLnJhbmdlLW1kOm5vdCgucmFuZ2UtaGFzLXBpbikgLnJhbmdlLWtub2ItaGFuZGxlIC5yYW5nZS1rbm9iIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLnJhbmdlLWlvcyAucmFuZ2Uta25vYi1oYW5kbGUgLnJhbmdlLXBpbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XG59XG5cbi5kZXRhaWwtcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA2cHggOXB4O1xuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xufVxuXG4uc3BsaXQtcGFuZS1tZC5zcGxpdC1wYW5lLXZpc2libGUgPiAuc3BsaXQtcGFuZS1zaWRlW3NpZGU9ZW5kXSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2Nyb2xsIHtcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtIDYwcHgpO1xuICBoZWlnaHQ6IC1tb3otY2FsYygxMDAlIC0gNjBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XG59XG5cbmRpdltzY3JvbGx4PXRydWVdLFxuZGl2W3Njcm9sbHk9dHJ1ZV0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5kaXZbc2Nyb2xseD10cnVlXSA6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuZGl2W3Njcm9sbHk9dHJ1ZV0gOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdltzY3JvbGx4PXRydWVdIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuZGl2W3Njcm9sbHk9dHJ1ZV0ge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSIsIi5wcm9kdWN0LWxpc3Qge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIC5wcm9kdWN0LXRpdGxlLWxpc3Qge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgfVxuXG4gIC5wcm9kdWN0LWxpc3QtaW1hZ2Uge1xuICAgIGhlaWdodDogMTEwcHg7XG4gIH1cblxuICAucHJpY2UtcHJvZC1saXN0IHtcbiAgICBjb2xvcjogIzYyYzJlNDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAucHJvZHVjdC1pY29uLWltYWdlIHtcbiAgICBoZWlnaHQ6IDIycHg7XG4gIH1cblxuICAuYm9yZGVyLWJvdHRvbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cblxuICAuYm90dG9tLWljb24tbGlzdCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgfVxuXG4gIC5sYXN0LW9yYW5nZSB7XG4gICAgY29sb3I6ICNmNzc5MGQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIH1cbiAgfVxufVxuXG5pb24tc2VnbWVudC5zYy1pb24tc2VnbWVudC1tZC1oLnNjLWlvbi1zZWdtZW50LW1kLXMubWQuaHlkcmF0ZWQge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uc3Rhci1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcblxuICBpb24taW1nIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA2MnB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbn1cblxuLmNhdC1wdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGhlaWdodDogMnB4O1xuICBtYXJnaW46IDIwcHggNTBweDtcbn1cblxuLnNwbGl0LXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1tZW51W3R5cGU9XCJvdmVybGF5XCJdIHtcbiAgei1pbmRleDogODA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuaW9uLW1lbnVbdHlwZT1cInJldmVhbFwiXSB7XG4gIHotaW5kZXg6IDgwO1xufVxuXG4uc3BsaXQtcGFuZS12aXNpYmxlIHtcbiAgei1pbmRleDogMjtcblxufVxuXG4uZmlsdGVyLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IDEzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG4gIHdpZHRoOiAyNnB4O1xufVxuXG4uZmlsdGVyLWJ1dHRvbi0yIHtcbiAgLmJ1dHRvbi1uYXRpdmUge1xuXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxufVxuXG4kbWlkbmlnaHQ6ICNmZmZmZmY7XG4kY2xvdWRzOiAjZWNmMGYxO1xuLy8gR2VuZXJhbFxuXG5cbmlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLy8gTGF5b3V0XG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcblxuICAuY29sIHtcbiAgICBmbGV4OiAxO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgfVxuICB9XG59XG5cbi8qIEFjY29yZGlvbiBzdHlsZXMgKi9cbi50YWJzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxufVxuXG4udGFiIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICBiYWNrZ3JvdW5kOiAkbWlkbmlnaHQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLyogSWNvbiAqL1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcXDI3NkZcIjtcbiAgICAgIHdpZHRoOiAxZW07XG4gICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuMzVzO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIH1cbiAgfVxuXG4gICYtY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogMDtcbiAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICBjb2xvcjogJG1pZG5pZ2h0O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMzVzO1xuICB9XG5cbiAgJi1jbG9zZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgYmFja2dyb3VuZDogJG1pZG5pZ2h0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICB9XG59XG5cbi5yYW5nZS1zbGlkZXIge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ucmFuZ2UtY3VzdG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cblxuLy8gOmNoZWNrZWRcbmlucHV0OmNoZWNrZWQge1xuICArLnRhYi1sYWJlbCB7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzVkZWcpO1xuICAgIH1cbiAgfVxuXG4gIH4udGFiLWNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxufVxuXG46aG9zdCB7XG4gIC5pdGVtLWlubmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uYmFja2ljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcblxuICBpbWcuYmNpY29uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMTJweDtcbiAgfVxuXG4gIGltZy50aWNrcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cbn1cblxuLnNsb3RsZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgbWFyZ2luLXRvcDogLTE3cHg7XG59XG5cbi5zbG90cmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgbWFyZ2luLXRvcDogLTE3cHg7XG59XG5cbi5yYW5nZS1oZWFkIHtcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xMXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucmFuZ2UtbWQgLnJhbmdlLWtub2ItaGFuZGxlIC5yYW5nZS1waW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xufVxuXG4ucmFuZ2UtbWQ6bm90KC5yYW5nZS1oYXMtcGluKSAucmFuZ2Uta25vYi1oYW5kbGUgLnJhbmdlLWtub2Ige1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG4ucmFuZ2UtaW9zIC5yYW5nZS1rbm9iLWhhbmRsZSAucmFuZ2UtcGluIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbn1cblxuLmRldGFpbC1yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDZweCA5cHg7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG59XG5cbi5zcGxpdC1wYW5lLW1kLnNwbGl0LXBhbmUtdmlzaWJsZT4uc3BsaXQtcGFuZS1zaWRlW3NpZGU9ZW5kXSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2Nyb2xsIHtcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtIDYwcHgpO1xuICBoZWlnaHQ6IC1tb3otY2FsYygxMDAlIC0gNjBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XG59XG5cbmRpdltzY3JvbGx4PXRydWVdLFxuZGl2W3Njcm9sbHk9dHJ1ZV0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5kaXZbc2Nyb2xseD10cnVlXSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbmRpdltzY3JvbGx5PXRydWVdIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ProductsPage = class ProductsPage {
    constructor(productsService, categoriesService, route) {
        this.productsService = productsService;
        this.categoriesService = categoriesService;
        this.route = route;
        this.splitPaneState = false;
        this.categoryId = 0;
        this.categoryId = parseInt(this.route.snapshot.paramMap.get('categoryid'));
        this.productsService.getProductsByCategory(this.categoryId).subscribe(products => {
            this.products = products.records;
            this.category = this.products[0].category_name;
            console.log(this.products);
        });
    }
    addToWishlist() {
        console.log("Hello!");
    }
    onAgeChange() {
    }
    openFilter() {
        if (this.splitPaneState == false) {
            this.splitPaneState = true;
        }
        else {
            this.splitPaneState = false;
        }
        console.log(this.splitPaneState);
    }
    ngOnInit() {
    }
};
ProductsPage.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html"),
        styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], ProductsPage);



/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map