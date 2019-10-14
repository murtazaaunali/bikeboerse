(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/messages/messages.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messages/messages.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n<ion-content padding>\n    <div class=\"backicon\"><img src=\"../assets/backicon.png\"></div>\n    <ion-item-sliding (ionSwipe)=\"delete(item)\">\n        <ion-item no-padding class=\"main-message-list\" style=\"background-color: #0d47a1 !important\">\n            <div class=\"main-list-message\">\n\n           <p class=\"date-message\">Montag, 17:40</p>\n            <ion-img [routerLink]=\"['/']\" src=\"assets/avatar-image.png\" class=\"message-profile\"></ion-img>\n            <p class=\"message-list-name\">Produkt Titel Produkt Titel  <span class=\"message-name\">John Doe</span></p>\n\n            </div>\n        </ion-item>\n        <ion-item-options>\n            <button class=\"del-icon\" ion-button expandable (click)=\"delete(item)\">  <ion-img [routerLink]=\"['/']\" src=\"assets/icon-delete-white.png\" class=\"del-img\"></ion-img></button>\n        </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding (ionSwipe)=\"delete(item)\">\n        <ion-item no-padding class=\"main-message-list\" style=\"background-color: #0d47a1 !important\">\n            <div class=\"main-list-message\">\n\n                <p class=\"date-message\">Montag, 17:40</p>\n                <ion-img [routerLink]=\"['/']\" src=\"assets/avatar-image.png\" class=\"message-profile\"></ion-img>\n                <p class=\"message-list-name\">Produkt Titel Produkt Titel  <span class=\"message-name\">John Doe</span></p>\n\n            </div>\n        </ion-item>\n        <ion-item-options>\n            <button class=\"del-icon\" ion-button expandable (click)=\"delete(item)\">  <ion-img [routerLink]=\"['/']\" src=\"assets/icon-delete-white.png\" class=\"del-img\"></ion-img></button>\n        </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding (ionSwipe)=\"delete(item)\">\n        <ion-item no-padding class=\"main-message-list\" style=\"background-color: #0d47a1 !important\">\n            <div class=\"main-list-message\">\n\n                <p class=\"date-message\">Montag, 17:40</p>\n                <ion-img [routerLink]=\"['/']\" src=\"assets/avatar-image.png\" class=\"message-profile\"></ion-img>\n                <p class=\"message-list-name\">Produkt Titel Produkt Titel  <span class=\"message-name\">John Doe</span></p>\n\n            </div>\n        </ion-item>\n        <ion-item-options>\n            <button class=\"del-icon\" ion-button expandable (click)=\"delete(item)\">  <ion-img [routerLink]=\"['/']\" src=\"assets/icon-delete-white.png\" class=\"del-img\"></ion-img></button>\n        </ion-item-options>\n    </ion-item-sliding>\n</ion-content>\n<main-footer></main-footer>"

/***/ }),

/***/ "./src/app/messages/messages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.page */ "./src/app/messages/messages.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]
    }
];
let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"]]
    })
], MessagesPageModule);



/***/ }),

/***/ "./src/app/messages/messages.page.scss":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backicon {\n  float: left;\n  width: 12px;\n  margin-bottom: 20px;\n}\n\nbutton.del-icon {\n  background: #fc6666;\n  margin-top: 5px;\n  padding: 0px 30px;\n}\n\nbutton.del-icon .del-img {\n  width: 30px;\n}\n\n.main-message-list {\n  border-top: 1px solid #d4d4d4;\n  border-radius: 3px;\n  margin-top: 5px;\n  border-right: 1px solid #d4d4d4;\n  border-left: 1px solid #d4d4d4;\n  --ion-item-background: #fff;\n}\n\n.main-message-list .item-inner {\n  padding: 0px;\n}\n\n.main-list-message {\n  width: 100%;\n}\n\n.main-list-message .date-message {\n  font-size: 12px;\n  width: 100%;\n  text-align: right;\n  margin-bottom: 0px;\n}\n\n.main-list-message .message-profile {\n  width: 60px;\n  float: left;\n  padding-bottom: 17px;\n  padding-left: 8px;\n}\n\n.main-list-message .message-list-name {\n  font-weight: 600;\n  margin-top: 7px;\n  padding-left: 20px;\n  float: left;\n  font-size: 15px;\n}\n\n.main-list-message .message-list-name span {\n  clear: both;\n  display: block;\n  color: #62c2e4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIiwic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRERFO0VBQ0UsV0FBQTtBQ0dKOztBREFFO0VBRUksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0YsMkJBQUE7QUNFSjs7QURESTtFQUNFLFlBQUE7QUNHTjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURERTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDR0o7O0FERkk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNJTiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNraWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmJ1dHRvbi5kZWwtaWNvbiB7XG4gIGJhY2tncm91bmQ6ICNmYzY2NjY7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG4gIC5kZWwtaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxufVxuICAubWFpbi1tZXNzYWdlLWxpc3R7XG5cbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgLml0ZW0taW5uZXJ7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIH1cblxuLm1haW4tbGlzdC1tZXNzYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC5kYXRlLW1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLm1lc3NhZ2UtcHJvZmlsZSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDE3cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIH1cbiAgLm1lc3NhZ2UtbGlzdC1uYW1lIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHNwYW57XG4gICAgICBjbGVhcjogYm90aDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6ICM2MmMyZTQ7XG4gICAgfVxuICB9XG59IiwiLmJhY2tpY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5idXR0b24uZGVsLWljb24ge1xuICBiYWNrZ3JvdW5kOiAjZmM2NjY2O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xufVxuYnV0dG9uLmRlbC1pY29uIC5kZWwtaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5tYWluLW1lc3NhZ2UtbGlzdCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNmZmY7XG59XG4ubWFpbi1tZXNzYWdlLWxpc3QgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tYWluLWxpc3QtbWVzc2FnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW4tbGlzdC1tZXNzYWdlIC5kYXRlLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLm1haW4tbGlzdC1tZXNzYWdlIC5tZXNzYWdlLXByb2ZpbGUge1xuICB3aWR0aDogNjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxN3B4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5tYWluLWxpc3QtbWVzc2FnZSAubWVzc2FnZS1saXN0LW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYWluLWxpc3QtbWVzc2FnZSAubWVzc2FnZS1saXN0LW5hbWUgc3BhbiB7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM2MmMyZTQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/messages/messages.page.ts":
/*!*******************************************!*\
  !*** ./src/app/messages/messages.page.ts ***!
  \*******************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessagesPage = class MessagesPage {
    constructor() { }
    ngOnInit() {
    }
};
MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__(/*! raw-loader!./messages.page.html */ "./node_modules/raw-loader/index.js!./src/app/messages/messages.page.html"),
        styles: [__webpack_require__(/*! ./messages.page.scss */ "./src/app/messages/messages.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MessagesPage);



/***/ })

}]);
//# sourceMappingURL=messages-messages-module-es2015.js.map