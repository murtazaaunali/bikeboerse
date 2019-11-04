(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-video-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/video/video.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video/video.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<ion-content>\n  <div class=\"clearfix\"></div>\n  <div>\n    <iframe width=\"100%\" height=\"315\" [src]=\"trustedVideoUrl\" frameborder=\"0\" allowfullscreen></iframe>\n  </div>\n</ion-content>\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/video/video.module.ts":
/*!***************************************!*\
  !*** ./src/app/video/video.module.ts ***!
  \***************************************/
/*! exports provided: VideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video.page */ "./src/app/video/video.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]
    }
];
let VideoPageModule = class VideoPageModule {
};
VideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]]
    })
], VideoPageModule);



/***/ }),

/***/ "./src/app/video/video.page.scss":
/*!***************************************!*\
  !*** ./src/app/video/video.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.backicon {\n  float: left;\n  width: 12px;\n  margin-top: 20px;\n}\n.searchline {\n  font-size: 11px;\n  color: #555555;\n  text-align: left;\n  margin-top: 10px;\n}\n.search-bar-video {\n  background: #fff !important;\n  border: 1px solid #555555 !important;\n  border-radius: 30px !important;\n  width: 100% !important;\n  font-size: 11px !important;\n  margin-top: 10px;\n  padding-left: 15px !important;\n  height: 35px !important;\n  text-align: left;\n}\n.searchline-smalltext {\n  font-size: 9px;\n  color: #555555;\n  text-align: left;\n}\n.searchlineinput {\n  position: relative;\n}\n.icon-correct {\n  position: absolute;\n  width: 30px;\n  height: 23px;\n  background-image: url('correct.png');\n  right: 4%;\n  z-index: 9999;\n  top: 6px;\n}\n.product-list {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border: 1px solid #d4d4d4;\n  border-radius: 3px;\n  background-color: #fff;\n}\n.product-list a {\n  text-decoration: none;\n}\n.product-list a .product-title-list {\n  margin-top: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #000;\n}\n.product-list .price-prod-list {\n  color: #62c2e4;\n  margin-bottom: 0px;\n}\n.product-list .product-icon-image {\n  height: 22px;\n}\n.product-list .border-bottom {\n  border-bottom: 1px solid #d4d4d4;\n  height: 2px;\n}\n.product-list .bottom-icon-list {\n  border-right: 1px solid #d4d4d4;\n}\n.product-list .last-orange {\n  color: #f7790d;\n  font-size: 12px;\n  text-transform: uppercase;\n  margin-bottom: 0px;\n  margin-top: 3px;\n}\n.product-list .last-orange img {\n  width: 12px;\n  margin-right: 2px;\n}\nion-segment.sc-ion-segment-md-h.sc-ion-segment-md-s.md.hydrated {\n  margin-bottom: 18px;\n}\n.star-right {\n  float: right;\n}\n.star-right ion-img {\n  width: 24px;\n  float: left;\n  background: #e9e9e9;\n  padding: 5px;\n  border-radius: 62px;\n  margin-right: 5px;\n}\n.cat-pt-name {\n  font-size: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  font-weight: 600;\n}\n.border-bottom {\n  border-bottom: 1px solid #d4d4d4;\n  height: 2px;\n  margin: 20px 50px;\n}\n.split-pane {\n  position: absolute;\n}\nion-menu[type=overlay] {\n  z-index: 80;\n  position: fixed;\n}\nion-menu[type=reveal] {\n  z-index: 80;\n}\n.split-pane-visible {\n  z-index: 2;\n}\n.filter-button {\n  background: none !important;\n  float: right;\n  top: 0px;\n  position: absolute;\n  right: 17px;\n}\n.filter-button-2 .button-native {\n  background: #fff;\n}\ninput {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n.row {\n  display: -webkit-box;\n  display: flex;\n}\n.row .col {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.row .col:last-child {\n  margin-left: 1em;\n}\n/* Accordion styles */\n.tabs {\n  overflow: hidden;\n}\n.tab {\n  width: 100%;\n  color: white;\n  overflow: hidden;\n}\n.tab-label {\n  display: -webkit-box;\n  display: flex;\n  padding: 0.5em 1em;\n  background: #ffffff;\n  cursor: pointer;\n  color: #000000;\n  border: 1px solid #e9e9e9;\n  font-size: 14px;\n  font-weight: 400;\n  /* Icon */\n}\n.tab-label::after {\n  content: \"❯\";\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  position: absolute;\n  right: 5%;\n}\n.tab-content {\n  max-height: 0;\n  padding: 0 1em;\n  color: #ffffff;\n  background: white;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n}\n.tab-close {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  font-size: 0.75em;\n  background: #ffffff;\n  cursor: pointer;\n}\n.range-slider {\n  margin-left: 15px;\n  margin-right: 15px;\n}\ninput:checked + .tab-label::after {\n  -webkit-transform: rotate(275deg);\n          transform: rotate(275deg);\n}\ninput:checked ~ .tab-content {\n  max-height: 100vh;\n  padding: 1em;\n  color: #000;\n}\n:host .item-inner {\n  padding-right: 0px !important;\n}\nbutton.del-icon {\n  background: #fc6666;\n  margin-top: 5px;\n  padding: 0px 30px;\n}\nbutton.del-icon .del-img {\n  width: 30px;\n}\n.main-message-list {\n  border-top: 1px solid #d4d4d4;\n  border-radius: 3px;\n  margin-top: 5px;\n  border-right: 1px solid #d4d4d4;\n  border-left: 1px solid #d4d4d4;\n  --ion-item-background: #fff;\n}\n.main-message-list .item-inner {\n  padding: 0px;\n}\n.main-list-message {\n  width: 100%;\n}\n.main-list-message .date-message {\n  font-size: 12px;\n  width: 100%;\n  text-align: right;\n  margin-bottom: 0px;\n}\n.main-list-message .message-profile {\n  width: 100px;\n  float: left;\n  padding-bottom: 17px;\n  padding-left: 8px;\n  padding: 10px;\n  height: 60px;\n}\n.main-list-message .message-list-name {\n  font-weight: 600;\n  margin-top: 7px;\n  float: left;\n  font-size: 15px;\n}\n.main-list-message .message-list-name span {\n  clear: both;\n  display: block;\n  color: #62c2e4;\n}\n.heart-icon {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vdmlkZW8ucGFnZS5zY3NzIiwiL1VzZXJzL211cnRhemEvRGVza3RvcC9EYXRhL0lvbmljQXBwcy9Nb3V0YWluQmlrZUFwcC9CaWtlQm9lcnNlL0Jpa2VCb2Vyc2Uvc3JjL2FwcC92aWRlby92aWRlby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBREVGO0FDQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURFRjtBQ0VBO0VBQ0UsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEQ0Y7QUNFQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURDRjtBQ0dBO0VBRUUsa0JBQUE7QURERjtBQ0lBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0FEREY7QUNLQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBREZGO0FDSUU7RUFDRSxxQkFBQTtBREZKO0FDSUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBREZOO0FDUUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUROSjtBQ1NFO0VBQ0UsWUFBQTtBRFBKO0FDVUU7RUFDRSxnQ0FBQTtFQUNBLFdBQUE7QURSSjtBQ1dFO0VBQ0UsK0JBQUE7QURUSjtBQ1lFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRFZKO0FDWUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QURWTjtBQ2VBO0VBQ0UsbUJBQUE7QURaRjtBQ2VBO0VBQ0UsWUFBQTtBRFpGO0FDY0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURaSjtBQ2lCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURkRjtBQ2lCQTtFQUNFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEZEY7QUNpQkE7RUFDRSxrQkFBQTtBRGRGO0FDaUJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QURkRjtBQ2lCQTtFQUNFLFdBQUE7QURkRjtBQ2lCQTtFQUNFLFVBQUE7QURkRjtBQ2tCQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURmRjtBQ21CRTtFQUVFLGdCQUFBO0FEakJKO0FDMEJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRHZCRjtBQzJCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBRHhCRjtBQzBCRTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtBRHhCSjtBQzBCSTtFQUNFLGdCQUFBO0FEeEJOO0FDNkJBLHFCQUFBO0FBQ0E7RUFDRSxnQkFBQTtBRDFCRjtBQzhCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUQzQkY7QUM2QkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQXZDTztFQXdDUCxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBRDVCSjtBQzhCSTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUQ1Qk47QUNnQ0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBOURPO0VBK0RQLGlCQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtBRDlCSjtBQ2lDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQXhFTztFQXlFUCxlQUFBO0FEaENKO0FDcUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBRGxDRjtBQ3lDSTtFQUNFLGlDQUFBO1VBQUEseUJBQUE7QUR0Q047QUMwQ0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEeENKO0FDNkNFO0VBQ0UsNkJBQUE7QUQxQ0o7QUM4Q0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRDNDRjtBQzZDRTtFQUNFLFdBQUE7QUQzQ0o7QUMrQ0E7RUFFRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBRDdDRjtBQytDRTtFQUNFLFlBQUE7QUQ3Q0o7QUNpREE7RUFDRSxXQUFBO0FEOUNGO0FDZ0RFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEOUNKO0FDaURFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUQvQ0o7QUNrREU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtBRGpESjtBQ21ESTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRGpETjtBQ3NEQTtFQUNFLGtCQUFBO0FEbkRGIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8vdmlkZW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmJhY2tpY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2VhcmNobGluZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zZWFyY2gtYmFyLXZpZGVvIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNlYXJjaGxpbmUtc21hbGx0ZXh0IHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2VhcmNobGluZWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbi1jb3JyZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY29ycmVjdC5wbmdcIik7XG4gIHJpZ2h0OiA0JTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiA2cHg7XG59XG5cbi5wcm9kdWN0LWxpc3Qge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnByb2R1Y3QtbGlzdCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnByb2R1Y3QtbGlzdCBhIC5wcm9kdWN0LXRpdGxlLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDA7XG59XG4ucHJvZHVjdC1saXN0IC5wcmljZS1wcm9kLWxpc3Qge1xuICBjb2xvcjogIzYyYzJlNDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnByb2R1Y3QtbGlzdCAucHJvZHVjdC1pY29uLWltYWdlIHtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuLnByb2R1Y3QtbGlzdCAuYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBoZWlnaHQ6IDJweDtcbn1cbi5wcm9kdWN0LWxpc3QgLmJvdHRvbS1pY29uLWxpc3Qge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDRkNGQ0O1xufVxuLnByb2R1Y3QtbGlzdCAubGFzdC1vcmFuZ2Uge1xuICBjb2xvcjogI2Y3NzkwZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbi5wcm9kdWN0LWxpc3QgLmxhc3Qtb3JhbmdlIGltZyB7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuaW9uLXNlZ21lbnQuc2MtaW9uLXNlZ21lbnQtbWQtaC5zYy1pb24tc2VnbWVudC1tZC1zLm1kLmh5ZHJhdGVkIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLnN0YXItcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc3Rhci1yaWdodCBpb24taW1nIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDYycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY2F0LXB0LW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgaGVpZ2h0OiAycHg7XG4gIG1hcmdpbjogMjBweCA1MHB4O1xufVxuXG4uc3BsaXQtcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLW1lbnVbdHlwZT1vdmVybGF5XSB7XG4gIHotaW5kZXg6IDgwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbmlvbi1tZW51W3R5cGU9cmV2ZWFsXSB7XG4gIHotaW5kZXg6IDgwO1xufVxuXG4uc3BsaXQtcGFuZS12aXNpYmxlIHtcbiAgei1pbmRleDogMjtcbn1cblxuLmZpbHRlci1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG59XG5cbi5maWx0ZXItYnV0dG9uLTIgLmJ1dHRvbi1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnJvdyAuY29sIHtcbiAgZmxleDogMTtcbn1cbi5yb3cgLmNvbDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLyogQWNjb3JkaW9uIHN0eWxlcyAqL1xuLnRhYnMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFiIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi50YWItbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLyogSWNvbiAqL1xufVxuLnRhYi1sYWJlbDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKdr1wiO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNSU7XG59XG4udGFiLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwIDFlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG59XG4udGFiLWNsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJhbmdlLXNsaWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAudGFiLWxhYmVsOjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3NWRlZyk7XG59XG5pbnB1dDpjaGVja2VkIH4gLnRhYi1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDFlbTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbjpob3N0IC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbi5kZWwtaWNvbiB7XG4gIGJhY2tncm91bmQ6ICNmYzY2NjY7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG59XG5idXR0b24uZGVsLWljb24gLmRlbC1pbWcge1xuICB3aWR0aDogMzBweDtcbn1cblxuLm1haW4tbWVzc2FnZS1saXN0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5tYWluLW1lc3NhZ2UtbGlzdCAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm1haW4tbGlzdC1tZXNzYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbi1saXN0LW1lc3NhZ2UgLmRhdGUtbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ubWFpbi1saXN0LW1lc3NhZ2UgLm1lc3NhZ2UtcHJvZmlsZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxN3B4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLm1haW4tbGlzdC1tZXNzYWdlIC5tZXNzYWdlLWxpc3QtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYWluLWxpc3QtbWVzc2FnZSAubWVzc2FnZS1saXN0LW5hbWUgc3BhbiB7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM2MmMyZTQ7XG59XG5cbi5oZWFydC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSIsIi5iYWNraWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTJweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNlYXJjaGxpbmUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG59XG5cbi5zZWFyY2gtYmFyLXZpZGVvIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNlYXJjaGxpbmUtc21hbGx0ZXh0IHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG59XG5cbi5zZWFyY2hsaW5laW5wdXQge1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmljb24tY29ycmVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjNweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2NvcnJlY3QucG5nXCIpO1xuICByaWdodDogNCU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRvcDogNnB4O1xufVxuXG5cbi5wcm9kdWN0LWxpc3Qge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIC5wcm9kdWN0LXRpdGxlLWxpc3Qge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cblxuXG4gIH1cblxuICAucHJpY2UtcHJvZC1saXN0IHtcbiAgICBjb2xvcjogIzYyYzJlNDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAucHJvZHVjdC1pY29uLWltYWdlIHtcbiAgICBoZWlnaHQ6IDIycHg7XG4gIH1cblxuICAuYm9yZGVyLWJvdHRvbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cblxuICAuYm90dG9tLWljb24tbGlzdCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgfVxuXG4gIC5sYXN0LW9yYW5nZSB7XG4gICAgY29sb3I6ICNmNzc5MGQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgIH1cbiAgfVxufVxuXG5pb24tc2VnbWVudC5zYy1pb24tc2VnbWVudC1tZC1oLnNjLWlvbi1zZWdtZW50LW1kLXMubWQuaHlkcmF0ZWQge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uc3Rhci1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcblxuICBpb24taW1nIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA2MnB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbn1cblxuLmNhdC1wdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGhlaWdodDogMnB4O1xuICBtYXJnaW46IDIwcHggNTBweDtcbn1cblxuLnNwbGl0LXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1tZW51W3R5cGU9XCJvdmVybGF5XCJdIHtcbiAgei1pbmRleDogODA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuaW9uLW1lbnVbdHlwZT1cInJldmVhbFwiXSB7XG4gIHotaW5kZXg6IDgwO1xufVxuXG4uc3BsaXQtcGFuZS12aXNpYmxlIHtcbiAgei1pbmRleDogMjtcblxufVxuXG4uZmlsdGVyLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTdweDtcbn1cblxuLmZpbHRlci1idXR0b24tMiB7XG4gIC5idXR0b24tbmF0aXZlIHtcblxuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbn1cblxuJG1pZG5pZ2h0OiAjZmZmZmZmO1xuJGNsb3VkczogI2VjZjBmMTtcbi8vIEdlbmVyYWxcblxuXG5pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbi8vIExheW91dFxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLmNvbCB7XG4gICAgZmxleDogMTtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIH1cbiAgfVxufVxuXG4vKiBBY2NvcmRpb24gc3R5bGVzICovXG4udGFicyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbn1cblxuLnRhYiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgJi1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogLjVlbSAxZW07XG4gICAgYmFja2dyb3VuZDogJG1pZG5pZ2h0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIC8qIEljb24gKi9cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXFwyNzZGXCI7XG4gICAgICB3aWR0aDogMWVtO1xuICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiA1JTtcbiAgICB9XG4gIH1cblxuICAmLWNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgcGFkZGluZzogMCAxZW07XG4gICAgY29sb3I6ICRtaWRuaWdodDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcbiAgfVxuXG4gICYtY2xvc2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIGJhY2tncm91bmQ6ICRtaWRuaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgfVxufVxuXG4ucmFuZ2Utc2xpZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLy8gOmNoZWNrZWRcbmlucHV0OmNoZWNrZWQge1xuICArLnRhYi1sYWJlbCB7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzVkZWcpO1xuICAgIH1cbiAgfVxuXG4gIH4udGFiLWNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxufVxuXG46aG9zdCB7XG4gIC5pdGVtLWlubmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5idXR0b24uZGVsLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjZmM2NjY2O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xuXG4gIC5kZWwtaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxufVxuXG4ubWFpbi1tZXNzYWdlLWxpc3Qge1xuXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNmZmY7XG5cbiAgLml0ZW0taW5uZXIge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuXG4ubWFpbi1saXN0LW1lc3NhZ2Uge1xuICB3aWR0aDogMTAwJTtcblxuICAuZGF0ZS1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLm1lc3NhZ2UtcHJvZmlsZSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctYm90dG9tOiAxN3B4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgLm1lc3NhZ2UtbGlzdC1uYW1lIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuXG4gICAgc3BhbiB7XG4gICAgICBjbGVhcjogYm90aDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6ICM2MmMyZTQ7XG4gICAgfVxuICB9XG59XG5cbi5oZWFydC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/video/video.page.ts":
/*!*************************************!*\
  !*** ./src/app/video/video.page.ts ***!
  \*************************************/
/*! exports provided: VideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPage", function() { return VideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");





let VideoPage = class VideoPage {
    constructor(route, domSanitizer, screenOrientation) {
        this.route = route;
        this.domSanitizer = domSanitizer;
        this.screenOrientation = screenOrientation;
        this.video_id = this.route.snapshot.paramMap.get('id');
        console.log("Video ID: " + this.video_id);
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/" + this.video_id);
    }
    ngOnInit() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }
    ngOnDestroy() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
};
VideoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"] }
];
VideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video',
        template: __webpack_require__(/*! raw-loader!./video.page.html */ "./node_modules/raw-loader/index.js!./src/app/video/video.page.html"),
        styles: [__webpack_require__(/*! ./video.page.scss */ "./src/app/video/video.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"]])
], VideoPage);



/***/ })

}]);
//# sourceMappingURL=video-video-module-es2015.js.map