(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chats-chats-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/chats/chats.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chats/chats.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n\n<ion-content padding>\n    <div class=\"flex\">\n            <div class=\"message-wrap\">\n\n                    <div class=\"me box\">\n                       \n                       \n                            <div class=\"sender-chat\">\n                                Hi! Ist das Bike noch zu haben? \n                                Kann man es sich anschauen? Und \n                                sind alle Rechnungen vorhanden?</div>\n                                <div class=\"sender-img\">\n                                    <img class=\"friend-img sender-chat-img\" src=\"../assets/avatar-image.png\" alt=\"\">   \n                                </div>\n                            \n                               \n                           \n                         \n                      </div>\n                      <div class=\"me boxleft\">\n                       \n                       \n                       \n                            <div class=\"sender-img\">\n                                <img class=\"friend-img sender-chat-img\" src=\"../assets/avatar-image.png\" alt=\"\">   \n                            </div>\n                            <div class=\"sender-main-chat-white sender-chat-grey\">\n                            Hi! Ist das Bike noch zu haben? \n                              Kann man es sich anschauen? Und \n                              sind alle Rechnungen vorhanden?</div>\n                        \n                           \n                       \n                     \n                  </div>\n                  <div class=\"clearfix\"></div>\n                 <div class=\"date-time\">\n                   <p>Montag, 10:40 Uhr</p>\n                 </div>\n                 <div class=\"me box\">\n                       \n                       \n                  <div class=\"sender-chat\">\n                      Hi! Ist das Bike noch zu haben? \n                      Kann man es sich anschauen? Und \n                      sind alle Rechnungen vorhanden?</div>\n                      <div class=\"sender-img\">\n                          <img class=\"friend-img sender-chat-img\" src=\"../assets/avatar-image.png\" alt=\"\">   \n                      </div>\n                  \n                     \n                 \n               \n            </div>\n            <div class=\"me boxleft\">\n             \n             \n             \n                  <div class=\"sender-img\">\n                      <img class=\"friend-img sender-chat-img\" src=\"../assets/avatar-image.png\" alt=\"\">   \n                  </div>\n                  <div class=\"sender-main-chat-white sender-chat-grey\">\n                   Hi! Ist das Bike noch zu haben? \n                    Kann man es sich anschauen? Und \n                    sind alle Rechnungen vorhanden?</div>\n              \n                 \n             \n            \n            </div>\n               \n              </div>\n\n    </div>\n    \n \n  <div class=\"searchlineinput\">\n    <div class=\"icon-correct\"></div>\n    <div class=\"icon-chat-cam\"></div>\n<ion-input type=\"text\" aria-placeholder=\"Nachricht eingeben…\" placeholder=\"Nachricht eingeben…\"class=\"search-bar-video\"></ion-input>\n</div>\n</ion-content>\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/chats/chats.module.ts":
/*!***************************************!*\
  !*** ./src/app/chats/chats.module.ts ***!
  \***************************************/
/*! exports provided: ChatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chats.page */ "./src/app/chats/chats.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _chats_page__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]
    }
];
var ChatsPageModule = /** @class */ (function () {
    function ChatsPageModule() {
    }
    ChatsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]]
        })
    ], ChatsPageModule);
    return ChatsPageModule;
}());



/***/ }),

/***/ "./src/app/chats/chats.page.scss":
/*!***************************************!*\
  !*** ./src/app/chats/chats.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid {\n  padding: 0;\n}\n\n.sender p, .me p {\n  border-radius: 5px;\n  margin: 0;\n}\n\n.sender {\n  text-align: left;\n  background-color: #fff;\n  padding: 12px 10px;\n  border: 1px solid #d1d1d1;\n  line-height: 3rem;\n}\n\n.sender .friend-img {\n  margin: 0 0;\n}\n\n.me .txt {\n  display: inline;\n  text-align: right;\n}\n\n.me p {\n  background-color: #62c2e4;\n  color: #fff;\n}\n\n.text-input {\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.box {\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin-top: 10px;\n  display: -webkit-box !important;\n  display: flex !important;\n  justify-content: flex-end !important;\n}\n\n.boxleft {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  margin-top: 45px;\n}\n\n.sender-chat-grey {\n  color: #555 !important;\n  border: 1px solid #62c2e4 !important;\n  background-color: #fff !important;\n  color: #555 !important;\n  border-radius: 5px;\n}\n\n.date-time {\n  margin: 35px 0px;\n  text-align: center;\n}\n\n.date-time p {\n  color: #555;\n}\n\n.searchline {\n  font-size: 11px;\n  color: #555555;\n  text-align: left;\n  margin-top: 10px;\n}\n\n.search-bar-video {\n  background: #fff !important;\n  border: 1px solid #ccc !important;\n  border-radius: 30px !important;\n  width: 100% !important;\n  font-size: 11px !important;\n  margin-top: 10px;\n  padding-left: 50px !important;\n  height: 35px !important;\n  text-align: left;\n}\n\n.searchline-smalltext {\n  font-size: 9px;\n  color: #555555;\n  text-align: left;\n}\n\n.searchlineinput {\n  float: left;\n  position: relative;\n  width: 100%;\n  margin-top: 2rem;\n}\n\n.icon-correct {\n  position: absolute;\n  width: 30px;\n  height: 23px;\n  background-image: url('correct.png');\n  right: 4%;\n  z-index: 9999;\n  top: 16px;\n}\n\n.icon-chat-cam {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  background-image: url('chat-cam.png');\n  left: 2%;\n  z-index: 9999;\n  top: 12.5px;\n  background-repeat: no-repeat;\n}\n\n.sender-main-chat-white {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 10px;\n  border-radius: 3px;\n  padding: 10px;\n  position: relative;\n}\n\n.sender-main-chat {\n  width: 100% !important;\n}\n\n.message-wrap {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n*, ::after, ::before {\n  box-sizing: border-box;\n}\n\n.sender-chat {\n  background: #62c2e4;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: 10px;\n  border-radius: 3px;\n  padding: 10px;\n  position: relative;\n  color: #fff;\n  overflow-wrap: break-word;\n}\n\n.sender-img {\n  /* width: 30%; */\n  width: 40px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvY2hhdHMvY2hhdHMucGFnZS5zY3NzIiwic3JjL2FwcC9jaGF0cy9jaGF0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxVQUFBO0FDRE47O0FEU007RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNOUjs7QURXSTtFQUVJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNUUjs7QURXTTtFQUNFLFdBQUE7QUNUUjs7QURlTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ1pSOztBRGNXO0VBQ0gseUJBQUE7RUFDQSxXQUFBO0FDWlI7O0FEaUJJO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNkTjs7QURrQkk7RUFFRixzQkFBQTtVQUFBLHFCQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFBQSx3QkFBQTtFQUNBLG9DQUFBO0FDaEJGOztBRGtCQTtFQUNFLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLGdCQUFBO0FDZkY7O0FEbUJBO0VBQWtCLHNCQUFBO0VBQXNCLG9DQUFBO0VBQW1DLGlDQUFBO0VBQ3pFLHNCQUFBO0VBQXNCLGtCQUFBO0FDWnhCOztBRGFFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBRFlJO0VBRUUsV0FBQTtBQ1hOOztBRGNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDWEY7O0FEY0E7RUFDRSwyQkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNYRjs7QURhQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNWRjs7QURhQTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1hGOztBRGFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDVkE7O0FEWUE7RUFBZSxrQkFBQTtFQUNiLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ1JGOztBRFNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURRQTtFQUNFLHNCQUFBO0FDTEY7O0FET0E7RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUNKRjs7QURPQTtFQUNFLHNCQUFBO0FDSkY7O0FETUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9jaGF0cy9jaGF0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuICAgIC5ncmlkIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICBcbiAgICAuc2VuZGVyLCAubWUge1xuICAgICAgLmZyaWVuZC1pbWcge1xuICAgICAgXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICBcbiAgICAuc2VuZGVyIHtcbiAgIFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMWQxZDE7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgIFxuICAgICAgLmZyaWVuZC1pbWcge1xuICAgICAgICBtYXJnaW46IDAgMDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICBcbiAgICAubWUge1xuICAgICAgLnR4dCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICAgICAgIHAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJjMmU0O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgXG4gICAgICB9XG4gICAgfVxuICBcbiAgICAudGV4dC1pbnB1dCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbiAgIFxuICBcbiAgICAuYm94IHtcbiBcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cbi5ib3hsZWZ0IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiA0NXB4O1xuICBcbn1cblxuLnNlbmRlci1jaGF0LWdyZXl7Y29sb3I6IzU1NSAhaW1wb3J0YW50O2JvcmRlcjoxcHggc29saWQgIzYyYzJlNCFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNTU1IWltcG9ydGFudDtib3JkZXItcmFkaXVzOiA1cHg7ICAgIH1cbiAgLmRhdGUtdGltZSB7XG4gICAgbWFyZ2luOiAzNXB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBwe1xuXG4gICAgICBjb2xvcjojNTU1O1xuICAgIH1cbn1cbi5zZWFyY2hsaW5leyAgICBcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTBweDtcblxufVxuLnNlYXJjaC1iYXItdmlkZW97XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOjEwcHg7XG4gIHBhZGRpbmctbGVmdDogNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5zZWFyY2hsaW5lLXNtYWxsdGV4dHtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuIFxufVxuLnNlYXJjaGxpbmVpbnB1dHtcblxuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDoycmVtO1xufVxuLmljb24tY29ycmVjdHtcbnBvc2l0aW9uOmFic29sdXRlO1xud2lkdGg6MzBweDtcbmhlaWdodDoyM3B4O1xuYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi8uLi9hc3NldHMvY29ycmVjdC5wbmdcIik7XG5yaWdodDogNCU7XG56LWluZGV4OiA5OTk5O1xudG9wOiAxNnB4O1xufVxuLmljb24tY2hhdC1jYW17cG9zaXRpb246YWJzb2x1dGU7XG4gIHdpZHRoOjMwcHg7XG4gIGhlaWdodDozMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi4uLy4uL2Fzc2V0cy9jaGF0LWNhbS5wbmdcIik7XG4gIGxlZnQ6IDIlO1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDEyLjVweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDt9XG4gIC5zZW5kZXItbWFpbi1jaGF0LXdoaXRlIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlbmRlci1tYWluLWNoYXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLm1lc3NhZ2Utd3JhcCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICAvLyBwYWRkaW5nOiAxLjI1cmVtO1xufVxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnNlbmRlci1jaGF0IHtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cbn1cbi5zZW5kZXItaW1ne1xuICAvKiB3aWR0aDogMzAlOyAqL1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufSIsIi5ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNlbmRlciBwLCAubWUgcCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2VuZGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTJweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDFkMWQxO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbn1cbi5zZW5kZXIgLmZyaWVuZC1pbWcge1xuICBtYXJnaW46IDAgMDtcbn1cblxuLm1lIC50eHQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1lIHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjJjMmU0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRleHQtaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmJveCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5ib3hsZWZ0IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiA0NXB4O1xufVxuXG4uc2VuZGVyLWNoYXQtZ3JleSB7XG4gIGNvbG9yOiAjNTU1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2MmMyZTQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzU1NSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5kYXRlLXRpbWUge1xuICBtYXJnaW46IDM1cHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGF0ZS10aW1lIHAge1xuICBjb2xvcjogIzU1NTtcbn1cblxuLnNlYXJjaGxpbmUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2VhcmNoLWJhci12aWRlbyB7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zZWFyY2hsaW5lLXNtYWxsdGV4dCB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNlYXJjaGxpbmVpbnB1dCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uaWNvbi1jb3JyZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY29ycmVjdC5wbmdcIik7XG4gIHJpZ2h0OiA0JTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAxNnB4O1xufVxuXG4uaWNvbi1jaGF0LWNhbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2NoYXQtY2FtLnBuZ1wiKTtcbiAgbGVmdDogMiU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRvcDogMTIuNXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uc2VuZGVyLW1haW4tY2hhdC13aGl0ZSB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlbmRlci1tYWluLWNoYXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubWVzc2FnZS13cmFwIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNlbmRlci1jaGF0IHtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5zZW5kZXItaW1nIHtcbiAgLyogd2lkdGg6IDMwJTsgKi9cbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chats/chats.page.ts":
/*!*************************************!*\
  !*** ./src/app/chats/chats.page.ts ***!
  \*************************************/
/*! exports provided: ChatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPage", function() { return ChatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatsPage = /** @class */ (function () {
    function ChatsPage() {
    }
    ChatsPage.prototype.ngOnInit = function () {
    };
    ChatsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chats',
            template: __webpack_require__(/*! raw-loader!./chats.page.html */ "./node_modules/raw-loader/index.js!./src/app/chats/chats.page.html"),
            styles: [__webpack_require__(/*! ./chats.page.scss */ "./src/app/chats/chats.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatsPage);
    return ChatsPage;
}());



/***/ })

}]);
//# sourceMappingURL=chats-chats-module-es5.js.map