(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-product-edit-product-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-product/edit-product.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-product/edit-product.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n\n<ion-content padding>\n  <!-- Logo -->\n  <div padding-horizontal text-center class=\"animated fadeInDown register-account\">\n\n    <div class=\"backicon\"><img src=\"../assets/backicon.png\"></div>\n    <h2 ion-text class=\"text-primary text-register\">\n      Artikel bearbeiten\n    </h2>\n\n  </div>\n\n  <!-- Login form -->\n  <form class=\"list-form\">\n\n\n    <ion-input type=\"text\"  placeholder=\"Titel\" class=\"input-login\"></ion-input>\n\n\n    <ion-textarea class=\"comments\" placeholder=\"Beschreibung\"></ion-textarea>\n    <ion-grid>\n\n      <ion-row>\n        <ion-col size= \"6\">\n          <p size class=\"mb0 blue\"><span class=\"bold-grey blue\">Preis</span><span class=\"amount blue\">\n                      <ion-input type=\"text\"  placeholder=\"12345,95\" class=\"input-amount\"></ion-input></span><span class=\"pull-left grey\">€</span></p>\n        </ion-col>\n        <ion-col size= \"6\">\n          <select name=\"carlist\" form=\"carform\" class=\"festpreis\">\n            <option value=\"volvo\">Festpreis</option>\n            <option value=\"saab\">Festpreis</option>\n            <option value=\"opel\">Festpreis</option>\n            <option value=\"audi\">Festpreis</option>\n          </select>\n\n        </ion-col>\n\n\n      </ion-row>\n      <ion-row>\n        <ion-col size= \"6\">\n\n\n          <ion-label>Pay Pal:</ion-label>\n          <ion-toggle color=\"secondary\" name=\"paypal\" checked></ion-toggle>\n\n        </ion-col>\n        <ion-col size= \"6\">\n\n\n          <ion-label>Abholung:</ion-label>\n          <ion-toggle color=\"secondary\"  name=\"abholung\" ></ion-toggle>\n\n        </ion-col>\n\n        <div class=\"hr\"></div>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <p class=\"text-side\">Wichtige Details </p>\n    <ion-input type=\"text\"  placeholder=\"Hersteller\" class=\"input-login\"></ion-input>\n\n    <ion-input type=\"text\"  placeholder=\"Federweg Gabel\" class=\"input-login\"></ion-input>\n\n    <div class=\"hr\"></div>\n    <p class=\"text-side\">Rahmengröße\n\n    </p>\n    <ion-segment>\n      <ion-segment-button checked class=\"padding-0\" >\n        <ion-label class=\"padding-0\">XS</ion-label>\n      </ion-segment-button>\n      <ion-segment-button class=\"padding-0\">\n        <ion-label class=\"padding-0\">S</ion-label>\n      </ion-segment-button>\n      <ion-segment-button class=\"padding-0\">\n        <ion-label class=\"padding-0\">L</ion-label>\n      </ion-segment-button>\n      <ion-segment-button class=\"padding-0\">\n        <ion-label class=\"padding-0\">XL</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div class=\"main-cm\">\n      <p size class=\"mb0 blue font-12\"><span class=\"bold-grey blue\">Andere Größe </span><span class=\"amount blue\">\n         <ion-input type=\"text\"  placeholder=\"55cm\" class=\"input-amount w40\"></ion-input></span><span class=\"pull-left grey\"></span></p>\n    </div>\n\n    <div class=\"hr\"></div>\n\n    <p class=\"text-side\">Laufradgröße\n\n    </p>\n    <ion-segment>\n      <ion-segment-button checked class=\"padding-0\" >\n        <ion-label class=\"padding-0\">26“</ion-label>\n      </ion-segment-button>\n      <ion-segment-button class=\"padding-0\">\n        <ion-label class=\"padding-0\">27,5“</ion-label>\n      </ion-segment-button>\n      <ion-segment-button class=\"padding-0\">\n        <ion-label class=\"padding-0\">27,5+</ion-label>\n      </ion-segment-button>\n      <ion-segment-button class=\"padding-0\">\n        <ion-label class=\"padding-0\">28“</ion-label>\n      </ion-segment-button>\n      <ion-segment-button class=\"padding-0\">\n        <ion-label class=\"padding-0\">29“</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <div class=\"maintext-wich\">\n      <p class=\"text-side p0 m0\">Video zu deinem Artikel hinzufügen </p>\n      <ion-input type=\"text\"  placeholder=\"YouTube Link einfügen\" class=\"input-login\"></ion-input>\n\n    </div>\n\n\n    <div class=\"cam-img\">\n      <div class=\"box col-sm-3\">+7</div>\n      <div class=\"box col-sm-3\"></div>\n      <div class=\"box col-sm-3\"></div>\n      <div class=\"box col-sm-3\"></div>\n      <div class=\"cam-img-blue\">\n        <img src=\"../assets/cam-image.png\">\n\n      </div>\n\n\n    </div>\n    <button ion-button icon-start block color=\"dark\" class=\"button-login\">\n     FERTIG\n    </button>\n\n\n  </form>\n</ion-content>\n\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/edit-product/edit-product.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit-product/edit-product.module.ts ***!
  \*****************************************************/
/*! exports provided: EditProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductPageModule", function() { return EditProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-product.page */ "./src/app/edit-product/edit-product.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _edit_product_page__WEBPACK_IMPORTED_MODULE_6__["EditProductPage"]
    }
];
var EditProductPageModule = /** @class */ (function () {
    function EditProductPageModule() {
    }
    EditProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_product_page__WEBPACK_IMPORTED_MODULE_6__["EditProductPage"]]
        })
    ], EditProductPageModule);
    return EditProductPageModule;
}());



/***/ }),

/***/ "./src/app/edit-product/edit-product.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/edit-product/edit-product.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-login-bg {\n  width: 100%;\n  height: 60%;\n  background-image: url('avatar-bg.jpg');\n  margin-bottom: 20px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.mainDiv {\n  padding: 13px 0px;\n}\n\n.image-circle-avatar {\n  background: #fff;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  text-align: center;\n  margin: 0px auto;\n  position: relative;\n  top: 10px;\n}\n\n.white {\n  color: #fff;\n  font-weight: 300;\n  margin-top: 30px;\n}\n\nbutton {\n  width: 80%;\n  border: none;\n  border-radius: 160px;\n  color: #fff;\n  margin-bottom: 10px;\n  padding: 18px !important;\n  font-size: 14px;\n  background: #62c2e4;\n  margin-top: 20%;\n}\n\nion-input.sc-ion-input-md-h.sc-ion-input-md-s.md.hydrated {\n  border: 1px solid #d1d3d4;\n  background: #fff;\n  border-radius: 3px;\n  color: #555555;\n  margin-bottom: 10px;\n  padding-left: 0px !important;\n  font-size: 12px;\n}\n\n.item-native {\n  border: none !important;\n}\n\n.button-login {\n  width: 100%;\n  border: none;\n  border-radius: 160px;\n  color: #fff;\n  margin-bottom: 10px;\n  padding: 18px !important;\n  font-size: 16px;\n  background: #62c2e4;\n  margin-top: 20%;\n}\n\n.login-button-fb {\n  background: #fff;\n  color: #3a5998;\n  border: 2px solid #3b5998;\n  font-size: 14px;\n}\n\n.hr {\n  width: 100%;\n  height: 1px;\n  background: #cacaca;\n  margin: 20px 0px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.p0 {\n  padding: 0px;\n}\n\n.m0 {\n  margin: 0px;\n}\n\n.maintext-wich {\n  margin-top: 20px;\n}\n\n.text-register {\n  color: #222222;\n  font-size: 18px;\n  font-weight: normal;\n}\n\n.box {\n  width: 20%;\n  height: 40px;\n  background: #bce0fd;\n  float: left;\n  margin-right: 3px;\n  margin-left: 3px;\n  padding: 8px;\n  color: #fff;\n  font-size: 14px;\n  padding: 8px;\n  color: #fff;\n  font-size: 14px;\n}\n\n.cam-img-blue img {\n  width: 20px;\n  float: left;\n}\n\n.backicon {\n  float: left;\n  width: 12px;\n}\n\n.register-account {\n  margin: 20px 0px;\n}\n\n.tc {\n  font-size: 14px;\n  width: 70%;\n  text-align: center;\n  color: #444444;\n  line-height: 1.6;\n  margin: 20px auto;\n}\n\n.blue {\n  color: #1f93c2;\n}\n\nform {\n  width: 90%;\n  margin: 0px auto;\n}\n\n.p0 {\n  padding: 0px !important;\n  --border-color: transparent !important;\n}\n\n.comments {\n  background: #fff;\n  border: 1px solid #c3c3c3;\n  padding: 20px;\n  font-size: 12px;\n  border-radius: 3px;\n  padding-top: 0px;\n  padding-left: 0px !important;\n}\n\n.item-native {\n  border: none;\n  --padding-start: 0px !important;\n  --padding-end: 0px !important;\n}\n\n.bold-grey {\n  font-weight: bold;\n  color: #555555;\n  float: left;\n  margin-top: 5px;\n}\n\nion-input.input-amount.sc-ion-input-md-h.sc-ion-input-md-s.md.hydrated {\n  width: 50px;\n  background: #fff;\n  --padding-start: 0px !important;\n  --padding-end: 0px !important;\n  padding-left: 5px !important;\n  height: 30px;\n  font-size: 10px;\n  margin-right: 8px;\n  float: left;\n  position: relative;\n  left: 5px;\n}\n\n.grey {\n  color: #555555;\n  font-size: 14px;\n  margin-top: 5px;\n}\n\n.festpreis {\n  background: #fff;\n  border: 1px solid #c3c3c3;\n  border-radius: 3px;\n  padding: 4px;\n  height: 28px;\n  width: 100%;\n  font-size: 14px;\n  color: #555555;\n  padding-left: 20px;\n}\n\nion-toggle {\n  padding: 4px;\n  padding-left: 7px;\n  height: 17px;\n}\n\nion-label.sc-ion-label-md-h.sc-ion-label-md-s.md.hydrated {\n  position: relative;\n  bottom: 0px;\n}\n\n.ion-color-secondary {\n  --ion-color-base: #fff !important;\n}\n\n.toggle-inner {\n  top: 1px !important;\n}\n\n:host(.ion-color.toggle-checked) .toggle-inner {\n  top: 1px !important;\n}\n\n.hr {\n  border: 1px solid #c3c3c3;\n  width: 60%;\n  height: 1px;\n  margin: 10px auto;\n}\n\n.text-side {\n  font-size: 12px;\n  text-align: left;\n  color: #555555;\n}\n\nion-segment-button.md.segment-button-has-label.segment-button-has-label-only.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant.hydrated {\n  font-size: 12px;\n}\n\n.padding-0 button.button-native {\n  padding: 0px !important;\n}\n\nion-ripple-effect.md.hydrated {\n  border: 1px solid #cacaca;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\n:host(.segment-button-checked) {\n  border-color: none !important;\n  border: none !important;\n}\n\nion-segment-button {\n  height: 34px;\n  min-height: 30px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 50px !important;\n  min-width: 10px !important;\n  border: 1px solid #cacaca;\n  margin: 2px;\n  padding: 2px;\n  font-size: 14px !important;\n  border-radius: 4px;\n}\n\nion-segment-button.padding-0.hydrated.md.segment-button-has-label.segment-button-has-label-only.segment-button-checked.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant {\n  background: #62c2e4;\n  color: #fff;\n}\n\n.font-12 {\n  font-size: 12px !important;\n}\n\n.w40 {\n  width: 40% !important;\n}\n\n.main-cm {\n  width: 100%;\n  float: left;\n  margin-top: 10px;\n}\n\n.cam-img {\n  float: left;\n  width: 100%;\n}\n\n.cam-img-blue {\n  margin-top: 8px;\n  position: relative;\n  left: 10px;\n}\n\n.w15 {\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBR0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0ZGOztBREtBO0VBQVMsaUJBQUE7QUNEVDs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURJQTtFQUFPLFdBQUE7RUFBVyxnQkFBQTtFQUFxQixnQkFBQTtBQ0V2Qzs7QUREQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNJRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ0dGOztBRERBO0VBQWEsdUJBQUE7QUNLYjs7QURIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUFpQixnQkFBQTtFQUNmLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNRRjs7QURBQTtFQUVFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0VGOztBREFBO0VBQUksWUFBQTtBQ0lKOztBREhBO0VBQUksV0FBQTtBQ09KOztBRE5BO0VBQWUsZ0JBQUE7QUNVZjs7QURSQTtFQUFlLGNBQUE7RUFBYyxlQUFBO0VBQWUsbUJBQUE7QUNjNUM7O0FEWEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFHQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNZRjs7QURWQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDYUY7O0FEUkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ1dGOztBRFRBO0VBQWtCLGdCQUFBO0FDYWxCOztBRFpBO0VBQVEsZUFBQTtFQUNOLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUVBLGlCQUFBO0FDZUY7O0FEZnFCO0VBQU0sY0FBQTtBQ21CM0I7O0FEbEJBO0VBQUssVUFBQTtFQUFVLGdCQUFBO0FDdUJmOztBRHRCQTtFQUNFLHVCQUFBO0VBQ0Esc0NBQUE7QUN5QkY7O0FEdkJBO0VBQVUsZ0JBQUE7RUFBZ0IseUJBQUE7RUFBeUIsYUFBQTtFQUFhLGVBQUE7RUFBZSxrQkFBQTtFQUFtQixnQkFBQTtFQUNoRyw0QkFBQTtBQ2dDRjs7QUQvQkE7RUFBYSxZQUFBO0VBQWEsK0JBQUE7RUFDeEIsNkJBQUE7QUNvQ0Y7O0FEbkNBO0VBQVcsaUJBQUE7RUFBaUIsY0FBQTtFQUFjLFdBQUE7RUFBVyxlQUFBO0FDMENyRDs7QUR6Q0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQzRDRjs7QUR6Q0E7RUFBTSxjQUFBO0VBQWMsZUFBQTtFQUFlLGVBQUE7QUMrQ25DOztBRDlDQTtFQUFlLGdCQUFBO0VBQ2IseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNrREY7O0FEakRBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ29ERjs7QURsREE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNxREY7O0FEbkRBO0VBQ0UsaUNBQUE7QUNzREY7O0FEckRBO0VBQWMsbUJBQUE7QUN5RGQ7O0FEdkRBO0VBQ0UsbUJBQUE7QUMwREY7O0FEeERBO0VBQUkseUJBQUE7RUFBeUIsVUFBQTtFQUFVLFdBQUE7RUFBVyxpQkFBQTtBQytEbEQ7O0FEOURBO0VBQVcsZUFBQTtFQUFlLGdCQUFBO0VBQWdCLGNBQUE7QUNvRTFDOztBRGpFQTtFQUNFLGVBQUE7QUNvRUY7O0FEbEVBO0VBQWdDLHVCQUFBO0FDc0VoQzs7QURyRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUN3RUY7O0FEdEVBO0VBQ0UsNkJBQUE7RUFDQSx1QkFBQTtBQ3lFRjs7QUR2RUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDMEVGOztBRHRFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ3lFRjs7QUR2RUE7RUFBUywwQkFBQTtBQzJFVDs7QUQxRUE7RUFBSyxxQkFBQTtBQzhFTDs7QUQ3RUE7RUFBUyxXQUFBO0VBQVcsV0FBQTtFQUFXLGdCQUFBO0FDbUYvQjs7QURsRkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ3FGRjs7QURuRkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDc0ZGOztBRHBGQTtFQUFLLFdBQUE7QUN3RkwiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXByb2R1Y3QvZWRpdC1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1haW4tbG9naW4tYmd7XG5cblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2F2YXRhci1iZy5qcGcnKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxufVxuLm1haW5EaXZ7cGFkZGluZzoxM3B4IDBweDt9XG4uaW1hZ2UtY2lyY2xlLWF2YXRhcntcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOjEwcHg7XG5cblxufVxuXG4ud2hpdGV7Y29sb3I6I2ZmZjtmb250LXdlaWdodDogMzAwOyAgICBtYXJnaW4tdG9wOiAzMHB4O31cbmJ1dHRvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTYwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgbWFyZ2luLXRvcDogMjAlO1xufVxuXG5cbmlvbi1pbnB1dC5zYy1pb24taW5wdXQtbWQtaC5zYy1pb24taW5wdXQtbWQtcy5tZC5oeWRyYXRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQzZDQ7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLml0ZW0tbmF0aXZle2JvcmRlcjpub25lICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9uLWxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTYwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgbWFyZ2luLXRvcDoyMCU7XG59XG4ubG9naW4tYnV0dG9uLWZie2JhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjM2E1OTk4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjM2I1OTk4O1xuICBmb250LXNpemU6IDE0cHg7fVxuLy8gIC5mYi1sb2dvIHtcbi8vICAgICAgd2lkdGg6IDYwcHg7XG4vLyAgICAgIGhlaWdodDogNjBweDtcblxuLy8gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvZmItbG9nby5wbmdcIik7XG5cbi8vICAgIH1cbi5oclxue1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MXB4O1xuICBiYWNrZ3JvdW5kOiAgI2NhY2FjYTtcbiAgbWFyZ2luOjIwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnAwe3BhZGRpbmc6MHB4O31cbi5tMHttYXJnaW46MHB4O31cbi5tYWludGV4dC13aWNoe21hcmdpbi10b3A6MjBweDt9XG5cbi50ZXh0LXJlZ2lzdGVye2NvbG9yOiMyMjIyMjI7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6IG5vcm1hbDt9XG5cblxuLmJveHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjYmNlMGZkO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcblxuXG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYW0taW1nLWJsdWUgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5cblxuLmJhY2tpY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMnB4O1xufVxuLnJlZ2lzdGVyLWFjY291bnR7bWFyZ2luOjIwcHggMHB4O31cbi50Y3sgICAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogNzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBsaW5lLWhlaWdodDogMS42O1xuXG4gIG1hcmdpbjogMjBweCBhdXRvO30uYmx1ZXtjb2xvcjojMWY5M2MyO31cbmZvcm17d2lkdGg6OTAlO21hcmdpbjowcHggYXV0bzt9XG4ucDB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5jb21tZW50c3tiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjYzNjM2MzO3BhZGRpbmc6MjBweDtmb250LXNpemU6MTJweDtib3JkZXItcmFkaXVzOiAzcHg7cGFkZGluZy10b3A6MHB4O1xuICBwYWRkaW5nLWxlZnQ6MHB4ICFpbXBvcnRhbnQ7fVxuLml0ZW0tbmF0aXZle2JvcmRlcjpub25lOyAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDt9XG4uYm9sZC1ncmV5e2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6IzU1NTU1NTtmbG9hdDpsZWZ0O21hcmdpbi10b3A6IDVweDt9XG5pb24taW5wdXQuaW5wdXQtYW1vdW50LnNjLWlvbi1pbnB1dC1tZC1oLnNjLWlvbi1pbnB1dC1tZC1zLm1kLmh5ZHJhdGVkIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNXB4O1xuXG59XG4uZ3JleXtjb2xvcjojNTU1NTU1O2ZvbnQtc2l6ZToxNHB4O21hcmdpbi10b3A6IDVweDt9XG4uZmVzdHByZWlzeyAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O31cbmlvbi10b2dnbGUge1xuICBwYWRkaW5nOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBoZWlnaHQ6IDE3cHg7XG59XG5pb24tbGFiZWwuc2MtaW9uLWxhYmVsLW1kLWguc2MtaW9uLWxhYmVsLW1kLXMubWQuaHlkcmF0ZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMHB4O1xufVxuLmlvbi1jb2xvci1zZWNvbmRhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiAjZmZmICFpbXBvcnRhbnQ7fVxuLnRvZ2dsZS1pbm5lcnt0b3A6IDFweCAhaW1wb3J0YW50O31cblxuOmhvc3QoLmlvbi1jb2xvci50b2dnbGUtY2hlY2tlZCkgLnRvZ2dsZS1pbm5lciB7XG4gIHRvcDogMXB4ICFpbXBvcnRhbnQ7XG59XG4uaHJ7Ym9yZGVyOjFweCBzb2xpZCAjYzNjM2MzO3dpZHRoOjYwJTtoZWlnaHQ6MXB4O21hcmdpbjoxMHB4IGF1dG87fVxuLnRleHQtc2lkZXtmb250LXNpemU6MTJweDt0ZXh0LWFsaWduOmxlZnQ7Y29sb3I6IzU1NTU1NX1cblxuXG5pb24tc2VnbWVudC1idXR0b24ubWQuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLnNlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbC1vbmx5LnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLXRvcC5pb24tYWN0aXZhdGFibGUuaW9uLWFjdGl2YXRhYmxlLWluc3RhbnQuaHlkcmF0ZWQge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucGFkZGluZy0wIGJ1dHRvbi5idXR0b24tbmF0aXZle3BhZGRpbmc6MHB4ICFpbXBvcnRhbnR9XG5pb24tcmlwcGxlLWVmZmVjdC5tZC5oeWRyYXRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG46aG9zdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCkge1xuICBib3JkZXItY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGhlaWdodDogMzRweDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uLnBhZGRpbmctMC5oeWRyYXRlZC5tZC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkuc2VnbWVudC1idXR0b24tY2hlY2tlZC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3AuaW9uLWFjdGl2YXRhYmxlLmlvbi1hY3RpdmF0YWJsZS1pbnN0YW50IHtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgY29sb3I6ICNmZmY7XG59XG4uZm9udC0xMntmb250LXNpemU6MTJweCAhaW1wb3J0YW50O31cbi53NDB7d2lkdGg6NDAlICFpbXBvcnRhbnQ7fVxuLm1haW4tY217d2lkdGg6MTAwJTtmbG9hdDpsZWZ0O21hcmdpbi10b3A6MTBweDt9XG4uY2FtLWltZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYW0taW1nLWJsdWUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTBweDtcbn1cbi53MTV7d2lkdGg6MTVweH0iLCIubWFpbi1sb2dpbi1iZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2F2YXRhci1iZy5qcGdcIik7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5tYWluRGl2IHtcbiAgcGFkZGluZzogMTNweCAwcHg7XG59XG5cbi5pbWFnZS1jaXJjbGUtYXZhdGFyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cbmlvbi1pbnB1dC5zYy1pb24taW5wdXQtbWQtaC5zYy1pb24taW5wdXQtbWQtcy5tZC5oeWRyYXRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQzZDQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tbG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cbi5sb2dpbi1idXR0b24tZmIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzNhNTk5ODtcbiAgYm9yZGVyOiAycHggc29saWQgIzNiNTk5ODtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaHIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNjYWNhY2E7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5wMCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLm0wIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5tYWludGV4dC13aWNoIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRleHQtcmVnaXN0ZXIge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYm94IHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjYmNlMGZkO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2FtLWltZy1ibHVlIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmJhY2tpY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMnB4O1xufVxuXG4ucmVnaXN0ZXItYWNjb3VudCB7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbi50YyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDcwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICMxZjkzYzI7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4ucDAge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5jb21tZW50cyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBib3JkZXI6IG5vbmU7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYm9sZC1ncmV5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5pb24taW5wdXQuaW5wdXQtYW1vdW50LnNjLWlvbi1pbnB1dC1tZC1oLnNjLWlvbi1pbnB1dC1tZC1zLm1kLmh5ZHJhdGVkIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDVweDtcbn1cblxuLmdyZXkge1xuICBjb2xvcjogIzU1NTU1NTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5mZXN0cHJlaXMge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG5pb24tdG9nZ2xlIHtcbiAgcGFkZGluZzogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgaGVpZ2h0OiAxN3B4O1xufVxuXG5pb24tbGFiZWwuc2MtaW9uLWxhYmVsLW1kLWguc2MtaW9uLWxhYmVsLW1kLXMubWQuaHlkcmF0ZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4uaW9uLWNvbG9yLXNlY29uZGFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLnRvZ2dsZS1pbm5lciB7XG4gIHRvcDogMXB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0KC5pb24tY29sb3IudG9nZ2xlLWNoZWNrZWQpIC50b2dnbGUtaW5uZXIge1xuICB0b3A6IDFweCAhaW1wb3J0YW50O1xufVxuXG4uaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi50ZXh0LXNpZGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjNTU1NTU1O1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ubWQuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLnNlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbC1vbmx5LnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLXRvcC5pb24tYWN0aXZhdGFibGUuaW9uLWFjdGl2YXRhYmxlLWluc3RhbnQuaHlkcmF0ZWQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wYWRkaW5nLTAgYnV0dG9uLmJ1dHRvbi1uYXRpdmUge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXJpcHBsZS1lZmZlY3QubWQuaHlkcmF0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG46aG9zdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCkge1xuICBib3JkZXItY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGhlaWdodDogMzRweDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbi5wYWRkaW5nLTAuaHlkcmF0ZWQubWQuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLnNlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbC1vbmx5LnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQuc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudCB7XG4gIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9udC0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4udzQwIHtcbiAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1jbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNhbS1pbWcge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYW0taW1nLWJsdWUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTBweDtcbn1cblxuLncxNSB7XG4gIHdpZHRoOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/edit-product/edit-product.page.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-product/edit-product.page.ts ***!
  \***************************************************/
/*! exports provided: EditProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductPage", function() { return EditProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditProductPage = /** @class */ (function () {
    function EditProductPage() {
    }
    EditProductPage.prototype.ngOnInit = function () {
    };
    EditProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! raw-loader!./edit-product.page.html */ "./node_modules/raw-loader/index.js!./src/app/edit-product/edit-product.page.html"),
            styles: [__webpack_require__(/*! ./edit-product.page.scss */ "./src/app/edit-product/edit-product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditProductPage);
    return EditProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-product-edit-product-module-es5.js.map