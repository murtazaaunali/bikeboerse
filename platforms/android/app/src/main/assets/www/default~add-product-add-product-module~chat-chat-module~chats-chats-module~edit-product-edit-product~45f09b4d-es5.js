(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-product-add-product-module~chat-chat-module~chats-chats-module~edit-product-edit-product~45f09b4d"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/account-userinfo/account-userinfo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/account-userinfo/account-userinfo.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div padding-horizontal text-center class=\"animated fadeInDown register-account\">\n  <div class=\"backicon\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" class=\"backicon\"></ion-back-button>\n    </ion-buttons>\n  </div>\n  <div class=\"\">\n    <div class=\"main-image\">\n      <span class=\"cam-image\">\n        <ion-img class=\"cam-img\" (click)=\"selectImage()\" src=\"../assets/cam-icon.png\"></ion-img>\n      </span>\n      <ion-img src=\"../assets/avatar-image.png\"></ion-img>\n\n    </div>\n    <h2 ion-text class=\"text-primary text-register\">\n      {{ username }}\n    </h2>\n    <div [routerLink]=\"['/settings']\" class=\"pull-right settings\">\n      <ion-img src=\"../assets/settings.png\"></ion-img>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/categories-carousel/categories-carousel.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/categories-carousel/categories-carousel.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-1\">\n  <h5 class=\"product-heading\">{{ _heading }}<span></span></h5>\n  <ion-slides #categorySlider [pager]=\"false\" [scrollbar]=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let category of _categories\">\n      <div class=\"cst-slider-wrap\">\n        <a [routerLink]=\"'/products/' + category.id\">\n          <img #thisImage [src]=\"category.filename\" onerror=\"this.src='../assets/no-image.png'\" (load)=\"loaded = true\"\n            [ngClass]=\"{'img-loaded':loaded}\" [hidden]=\"!loaded\" *ngIf=\"category.filename\"\n            [routerLink]=\"'/products/' + category.id\" />\n          <ion-spinner [ngClass]=\"{'center':true}\" *ngIf=\"!loaded\"></ion-spinner>\n          <p class=\"cat-title\">{{ category.title  }}</p>\n        </a>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/google-ads/google-ads.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/google-ads/google-ads.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"google-add\">\n  <ion-img cache=\"true\" src=\"assets/google-add.png\" class=\"add-img\"></ion-img>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main-footer/main-footer.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main-footer/main-footer.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <ion-row class=\"footer\">\n    <ion-col>\n      <button [routerLink]=\"['/videos']\" ion-button icon-only color=\"grey\" clear small class=\"footer w20\">\n        <img src=\"../assets/player.png\">\n        <div class=\"label-footer\">Player</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button [routerLink]=\"['/add-product']\" ion-button icon-only color=\"grey\" clear small class=\"footer w20\">\n        <img src=\"../assets/add.png\">\n        <div class=\"label-footer\">Inserieren</div>\n      </button>\n    </ion-col>\n    <ion-col>\n      <button [routerLink]=\"['/chats']\" ion-button icon-only color=\"grey\" clear small class=\"footer w20\">\n        <img src=\"../assets/chat.png\">\n        <div class=\"label-footer\">Chat</div>\n      </button>\n    </ion-col>\n  </ion-row>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main-header/main-header.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main-header/main-header.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"dark\">\n\t\t<ion-thumbnail slot=\"start\">\n\t\t\t<ion-img [routerLink]=\"['/']\" src=\"assets/logo.png\" class=\"logo-header\"></ion-img>\n\t\t</ion-thumbnail>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button [routerLink]=\"['/search']\" routerLinkActive=\"router-link-active\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"md-search\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button [routerLink]=\"['/my-account']\" routerLinkActive=\"router-link-active\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"md-person\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/myaccount-header/myaccount-header.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/myaccount-header/myaccount-header.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-segment>\n  <ion-segment-button [routerLink]=\"['/my-products']\" routerLinkActive=\"active-link1\" class=\"padding-0\">\n    <ion-label class=\"padding-0\">ARTIKEL</ion-label>\n  </ion-segment-button>\n  <ion-segment-button [routerLink]=\"['/wishlist']\" routerLinkActive=\"active-link2\" class=\"padding-0\">\n    <ion-label class=\"padding-0\">MERKLISTE</ion-label>\n  </ion-segment-button>\n  <ion-segment-button [routerLink]=\"['/my-account']\" routerLinkActive=\"active-link3\" class=\"padding-0\">\n    <ion-label class=\"padding-0\">ACCOUNT</ion-label>\n  </ion-segment-button>\n  <ion-segment-button class=\"padding-0\">\n    <ion-label class=\"padding-0\">HILFE</ion-label>\n  </ion-segment-button>\n</ion-segment>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/products-carousel/products-carousel.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/products-carousel/products-carousel.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-slider\" *ngIf=\"_size == 1\">\n  <h5 class=\"product-heading\">{{ _heading }}</h5>\n  <ion-slides pager [pager]=\"false\" [scrollbar]=\"true\">\n    <ion-slide *ngFor=\"let product of _products\">\n      <img [src]=\"product.filename\" onerror=\"this.src='../assets/no-image.png'\" (load)=\"loaded = true\"\n        [ngClass]=\"{'img-loaded':loaded}\" [hidden]=\"!loaded\" *ngIf=\"product.filename\"\n        [routerLink]=\"'/product/' + product.id\" class=\"product-main-slider\" />\n      <ion-spinner [ngClass]=\"{'center':true}\" *ngIf=\"!loaded\"></ion-spinner>\n      <div class=\"bg-title\">\n        <p class=\"product-slider-title\">{{product.title}}</p>\n        <p class=\"slider-price\">{{product.price}} €</p>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</div>\n\n<div class=\"slider-2\" *ngIf=\"_size == 2\">\n  <h5 class=\"product-heading\">{{ _heading }}<span></span></h5>\n  <ion-slides #categorySlider [pager]=\"false\" [scrollbar]=\"true\" [options]=\"slideOpts2\">\n    <ion-slide *ngFor=\"let product of _products\">\n      <div class=\"cst-slider-wrap\">\n        <a [routerLink]=\"'/product/' + product.id\">\n          <img [src]=\"product.filename\" onerror=\"this.src='../assets/no-image.png'\" (load)=\"loaded = true\"\n            [ngClass]=\"{'img-loaded':loaded}\" [hidden]=\"!loaded\" *ngIf=\"product.filename\"\n            [routerLink]=\"'/product/' + product.id\" class=\"product-main-slider\" />\n          <ion-spinner [ngClass]=\"{'center':true}\" *ngIf=\"!loaded\"></ion-spinner>\n          <div class=\"main-bottom-slider\">\n            <p class=\"slider-price\">{{ product.price }} €</p>\n            <p class=\"slider-size\">{{product.size}}</p>\n            <p class=\"product-slider-title\">{{ product.title }}</p>\n          </div>\n        </a>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/products-list/products-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/products-list/products-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid class=\"product-list\" *ngFor=\"let product of _products\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-img [routerLink]=\"'/product/' + product.id\" [src]=\"product.filename\" class=\"product-list-image\">\n        </ion-img>\n      </ion-col>\n      <ion-col size=\"6\">\n        <div class=\"list-detail\">\n          <a href=\"#\">\n            <h4 class=\"product-title-list\">{{product.title}}</h4>\n          </a>\n          <p class=\"price-prod-list\">{{product.price}} € - VB</p>\n          <p class=\"size-prod-list\">Größe <span>{{product.size}}</span>\n\n          </p>\n          <div class=\"star-right\">\n            <ion-img (click)=\"addToWishlist()\" src=\"assets/star.png\"></ion-img>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/skeleton-item/skeleton-item.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/skeleton-item/skeleton-item.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"styles\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/video-carousel/video-carousel.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/video-carousel/video-carousel.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider-3\">\n  <h5 class=\"product-heading\"> {{ _heading }}<span></span></h5>\n  <ion-slides #categorySlider [pager]=\"false\" [scrollbar]=\"true\" [options]=\"slideOpts3\">\n    <ion-slide *ngFor=\"let video of _videos\">\n      <ion-img cache=\"true\" (click)=\"openVideo(video.id)\" [src]=\"video.video_thumb\"></ion-img>\n    </ion-slide>\n  </ion-slides>\n</div>"

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/finalize.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/finalize.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
function finalize(callback) {
    return function (source) { return source.lift(new FinallyOperator(callback)); };
}
exports.finalize = finalize;
var FinallyOperator = (function () {
    function FinallyOperator(callback) {
        this.callback = callback;
    }
    FinallyOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new FinallySubscriber(subscriber, this.callback));
    };
    return FinallyOperator;
}());
var FinallySubscriber = (function (_super) {
    __extends(FinallySubscriber, _super);
    function FinallySubscriber(destination, callback) {
        var _this = _super.call(this, destination) || this;
        _this.add(new Subscription_1.Subscription(callback));
        return _this;
    }
    return FinallySubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=finalize.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (function () {
    return typeof Symbol === 'function'
        ? Symbol('rxSubscriber')
        : '@@rxSubscriber_' + Math.random();
})();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UnsubscriptionErrorImpl = (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./src/app/components/account-userinfo/account-userinfo.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/account-userinfo/account-userinfo.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-image ion-img {\n  width: 100px;\n  margin: 0 auto;\n}\n\n.cam-icon {\n  width: 100px;\n  margin: 0 auto;\n}\n\nion-img.cam-img {\n  width: 30px !important;\n  position: relative;\n  left: 8px;\n}\n\n.settings {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n\n.settings ion-img {\n  max-width: 30px !important;\n}\n\n.backicon ion-img {\n  max-width: 18px !important;\n}\n\n.text-register {\n  color: #222222;\n  font-size: 18px;\n  font-weight: normal;\n  text-align: center;\n}\n\n.backicon {\n  float: left;\n  width: 12px;\n}\n\n.register-account {\n  position: relative;\n}\n\nion-img.cam-img {\n  width: 30px !important;\n  position: relative;\n  left: 68px;\n  top: 55px;\n}\n\n.settings {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n\n.settings ion-img {\n  max-width: 30px !important;\n}\n\n.backicon ion-img {\n  max-width: 18px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LXVzZXJpbmZvL2FjY291bnQtdXNlcmluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC11c2VyaW5mby9hY2NvdW50LXVzZXJpbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC11c2VyaW5mby9hY2NvdW50LXVzZXJpbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4taW1hZ2UgaW9uLWltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2FtLWljb24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuaW9uLWltZy5jYW0taW1nIHtcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA4cHg7XG59XG5cbi5zZXR0aW5ncyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG59XG5cbi5zZXR0aW5ncyBpb24taW1nIHtcbiAgICBtYXgtd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmJhY2tpY29uIGlvbi1pbWcge1xuICAgIG1heC13aWR0aDogMThweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1yZWdpc3RlciB7XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2ljb24ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMnB4O1xufVxuXG4ucmVnaXN0ZXItYWNjb3VudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24taW1nLmNhbS1pbWcge1xuICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDY4cHg7XG4gICAgdG9wOiA1NXB4O1xufVxuXG4uc2V0dGluZ3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogMHB4O1xufVxuXG4uc2V0dGluZ3MgaW9uLWltZyB7XG4gICAgbWF4LXdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNraWNvbiBpb24taW1nIHtcbiAgICBtYXgtd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbn0iLCIubWFpbi1pbWFnZSBpb24taW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNhbS1pY29uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaW9uLWltZy5jYW0taW1nIHtcbiAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA4cHg7XG59XG5cbi5zZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5zZXR0aW5ncyBpb24taW1nIHtcbiAgbWF4LXdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNraWNvbiBpb24taW1nIHtcbiAgbWF4LXdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXJlZ2lzdGVyIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2ljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEycHg7XG59XG5cbi5yZWdpc3Rlci1hY2NvdW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24taW1nLmNhbS1pbWcge1xuICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDY4cHg7XG4gIHRvcDogNTVweDtcbn1cblxuLnNldHRpbmdzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDBweDtcbn1cblxuLnNldHRpbmdzIGlvbi1pbWcge1xuICBtYXgtd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmJhY2tpY29uIGlvbi1pbWcge1xuICBtYXgtd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/account-userinfo/account-userinfo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/account-userinfo/account-userinfo.component.ts ***!
  \***************************************************************************/
/*! exports provided: AccountUserinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountUserinfoComponent", function() { return AccountUserinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/finalize */ "./node_modules/rxjs/internal/operators/finalize.js");
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_9__);










var STORAGE_KEY = 'user_image';
var AccountUserinfoComponent = /** @class */ (function () {
    function AccountUserinfoComponent(camera, file, http, actionSheetController, toastController, storage, platform, loadingController, ref, filePath, webview) {
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.storage = storage;
        this.platform = platform;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this.webview = webview;
        this.images = [];
    }
    AccountUserinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('USER_INFO').then(function (response) {
            _this.username = response.name;
            _this.picture = response.picture;
            _this.user_id = response.id;
        });
    };
    AccountUserinfoComponent.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    AccountUserinfoComponent.prototype.presentToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountUserinfoComponent.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountUserinfoComponent.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        });
    };
    AccountUserinfoComponent.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    AccountUserinfoComponent.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            _this.updateStoredImages(newFileName);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    AccountUserinfoComponent.prototype.updateStoredImages = function (name) {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            if (!arr) {
                var newImages = [name];
                _this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                arr.push(name);
                _this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
            var filePath = _this.file.dataDirectory + name;
            var resPath = _this.pathForImage(filePath);
            var newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
            _this.images = [newEntry].concat(_this.images);
            _this.ref.detectChanges(); // trigger change detection cycle
        });
    };
    AccountUserinfoComponent.prototype.startUpload = function (imgEntry) {
        var _this = this;
        this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(function (entry) {
            entry.file(function (file) { return _this.readFile(file); });
        })
            .catch(function (err) {
            _this.presentToast('Error while reading file.');
        });
    };
    AccountUserinfoComponent.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('file', imgBlob, file.name);
            _this.uploadImageData(formData);
        };
        reader.readAsArrayBuffer(file);
    };
    AccountUserinfoComponent.prototype.uploadImageData = function (formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Uploading image...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.http.post("http://localhost:8888/upload.php", formData)
                            .pipe(Object(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                            loading.dismiss();
                        }))
                            .subscribe(function (res) {
                            if (res['success']) {
                                _this.presentToast('File upload complete.');
                            }
                            else {
                                _this.presentToast('File upload failed.');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountUserinfoComponent.ctorParameters = function () { return [
        { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
        { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"] }
    ]; };
    AccountUserinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'account-userinfo',
            template: __webpack_require__(/*! raw-loader!./account-userinfo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/account-userinfo/account-userinfo.component.html"),
            styles: [__webpack_require__(/*! ./account-userinfo.component.scss */ "./src/app/components/account-userinfo/account-userinfo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"]])
    ], AccountUserinfoComponent);
    return AccountUserinfoComponent;
}());



/***/ }),

/***/ "./src/app/components/categories-carousel/categories-carousel.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/categories-carousel/categories-carousel.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider-1 .product-heading {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  margin-top: 10px;\n  border-bottom: 2px solid #d4d4d4;\n}\n.slider-1 .product-heading span {\n  border-bottom: 2px solid #62c2e4;\n  width: 44px;\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.slider-1 .cst-slider-wrap {\n  border: 1px solid #d4d4d4;\n  margin: 2px;\n  border-radius: 4px;\n}\n.slider-1 .cst-slider-wrap a {\n  text-decoration: none;\n}\n.slider-1 .cst-slider-wrap .product-main-slider {\n  width: 110px;\n  height: 72px;\n  background: url('no-image.png') no-repeat center center;\n  background-size: contain;\n}\n.slider-1 .cst-slider-wrap .cat-title {\n  margin-bottom: 3px;\n  text-transform: uppercase;\n  font-size: 11px;\n  text-align: center;\n  color: #2d2d2d;\n  margin-top: 3px;\n  height: 35px;\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzLWNhcm91c2VsL2NhdGVnb3JpZXMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy1jYXJvdXNlbC9jYXRlZ29yaWVzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNEUjtBREdRO0VBQ0ksZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0RaO0FES0k7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0hSO0FES1E7RUFDSSxxQkFBQTtBQ0haO0FETVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVEQUFBO0VBQ0Esd0JBQUE7QUNKWjtBRE9RO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNMWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmllcy1jYXJvdXNlbC9jYXRlZ29yaWVzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlci0xIHtcblxuICAgIC5wcm9kdWN0LWhlYWRpbmcge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Q0ZDRkNDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjJjMmU0O1xuICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNzdC1zbGlkZXItd3JhcCB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZHVjdC1tYWluLXNsaWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9uby1pbWFnZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXQtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjMmQyZDJkO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuc2xpZGVyLTEgLnByb2R1Y3QtaGVhZGluZyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDRkNGQ0O1xufVxuLnNsaWRlci0xIC5wcm9kdWN0LWhlYWRpbmcgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjJjMmU0O1xuICB3aWR0aDogNDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG4uc2xpZGVyLTEgLmNzdC1zbGlkZXItd3JhcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIG1hcmdpbjogMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uc2xpZGVyLTEgLmNzdC1zbGlkZXItd3JhcCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNsaWRlci0xIC5jc3Qtc2xpZGVyLXdyYXAgLnByb2R1Y3QtbWFpbi1zbGlkZXIge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogNzJweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL25vLWltYWdlLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLnNsaWRlci0xIC5jc3Qtc2xpZGVyLXdyYXAgLmNhdC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmQyZDJkO1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/categories-carousel/categories-carousel.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/categories-carousel/categories-carousel.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CategoriesCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesCarouselComponent", function() { return CategoriesCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoriesCarouselComponent = /** @class */ (function () {
    function CategoriesCarouselComponent() {
        this.slideOpts = {
            slidesPerView: 3
        };
        this.slideOpts2 = {
            slidesPerView: 2
        };
        this.slideOpts3 = {
            slidesPerView: 1
        };
    }
    CategoriesCarouselComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(CategoriesCarouselComponent.prototype, "categories", {
        set: function (categories) {
            // Here you can do what you want with the variable
            this._categories = categories;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoriesCarouselComponent.prototype, "heading", {
        set: function (heading) {
            // Here you can do what you want with the variable
            this._heading = heading;
        },
        enumerable: true,
        configurable: true
    });
    CategoriesCarouselComponent.prototype.missingImage = function (missingImgUrl) {
        console.log(missingImgUrl);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], CategoriesCarouselComponent.prototype, "categories", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], CategoriesCarouselComponent.prototype, "heading", null);
    CategoriesCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'categories-carousel',
            template: __webpack_require__(/*! raw-loader!./categories-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/categories-carousel/categories-carousel.component.html"),
            styles: [__webpack_require__(/*! ./categories-carousel.component.scss */ "./src/app/components/categories-carousel/categories-carousel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoriesCarouselComponent);
    return CategoriesCarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/components/main-header/main-header.component */ "./src/app/components/main-header/main-header.component.ts");
/* harmony import */ var _app_components_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/components/main-footer/main-footer.component */ "./src/app/components/main-footer/main-footer.component.ts");
/* harmony import */ var _app_components_skeleton_item_skeleton_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/components/skeleton-item/skeleton-item */ "./src/app/components/skeleton-item/skeleton-item.ts");
/* harmony import */ var _myaccount_header_myaccount_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myaccount-header/myaccount-header.component */ "./src/app/components/myaccount-header/myaccount-header.component.ts");
/* harmony import */ var _account_userinfo_account_userinfo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-userinfo/account-userinfo.component */ "./src/app/components/account-userinfo/account-userinfo.component.ts");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/components/products-list/products-list.component.ts");
/* harmony import */ var _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products-carousel/products-carousel.component */ "./src/app/components/products-carousel/products-carousel.component.ts");
/* harmony import */ var _categories_carousel_categories_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./categories-carousel/categories-carousel.component */ "./src/app/components/categories-carousel/categories-carousel.component.ts");
/* harmony import */ var _google_ads_google_ads_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./google-ads/google-ads.component */ "./src/app/components/google-ads/google-ads.component.ts");
/* harmony import */ var _video_carousel_video_carousel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./video-carousel/video-carousel.component */ "./src/app/components/video-carousel/video-carousel.component.ts");






// Components










var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_6__["MainHeaderComponent"],
                _app_components_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_7__["MainFooterComponent"],
                _app_components_skeleton_item_skeleton_item__WEBPACK_IMPORTED_MODULE_8__["SkeletonItemComponent"],
                _myaccount_header_myaccount_header_component__WEBPACK_IMPORTED_MODULE_9__["MyaccountHeaderComponent"],
                _account_userinfo_account_userinfo_component__WEBPACK_IMPORTED_MODULE_10__["AccountUserinfoComponent"],
                _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductsListComponent"],
                _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_12__["ProductsCarouselComponent"],
                _categories_carousel_categories_carousel_component__WEBPACK_IMPORTED_MODULE_13__["CategoriesCarouselComponent"],
                _google_ads_google_ads_component__WEBPACK_IMPORTED_MODULE_14__["GoogleAdsComponent"],
                _video_carousel_video_carousel_component__WEBPACK_IMPORTED_MODULE_15__["VideoCarouselComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            exports: [
                _app_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_6__["MainHeaderComponent"],
                _app_components_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_7__["MainFooterComponent"],
                _app_components_skeleton_item_skeleton_item__WEBPACK_IMPORTED_MODULE_8__["SkeletonItemComponent"],
                _myaccount_header_myaccount_header_component__WEBPACK_IMPORTED_MODULE_9__["MyaccountHeaderComponent"],
                _account_userinfo_account_userinfo_component__WEBPACK_IMPORTED_MODULE_10__["AccountUserinfoComponent"],
                _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductsListComponent"],
                _products_carousel_products_carousel_component__WEBPACK_IMPORTED_MODULE_12__["ProductsCarouselComponent"],
                _categories_carousel_categories_carousel_component__WEBPACK_IMPORTED_MODULE_13__["CategoriesCarouselComponent"],
                _google_ads_google_ads_component__WEBPACK_IMPORTED_MODULE_14__["GoogleAdsComponent"],
                _video_carousel_video_carousel_component__WEBPACK_IMPORTED_MODULE_15__["VideoCarouselComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/google-ads/google-ads.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/google-ads/google-ads.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".google-add {\n  margin: 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvY29tcG9uZW50cy9nb29nbGUtYWRzL2dvb2dsZS1hZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZ29vZ2xlLWFkcy9nb29nbGUtYWRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ29vZ2xlLWFkcy9nb29nbGUtYWRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvb2dsZS1hZGQge1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG59IiwiLmdvb2dsZS1hZGQge1xuICBtYXJnaW46IDEwcHggMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/google-ads/google-ads.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/google-ads/google-ads.component.ts ***!
  \***************************************************************/
/*! exports provided: GoogleAdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAdsComponent", function() { return GoogleAdsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoogleAdsComponent = /** @class */ (function () {
    function GoogleAdsComponent() {
    }
    GoogleAdsComponent.prototype.ngOnInit = function () { };
    GoogleAdsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'google-ads',
            template: __webpack_require__(/*! raw-loader!./google-ads.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/google-ads/google-ads.component.html"),
            styles: [__webpack_require__(/*! ./google-ads.component.scss */ "./src/app/components/google-ads/google-ads.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoogleAdsComponent);
    return GoogleAdsComponent;
}());



/***/ }),

/***/ "./src/app/components/main-footer/main-footer.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-footer/main-footer.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  margin-bottom: 0px;\n  background: #fff;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nbutton.footer {\n  padding: 0px;\n  width: 100%;\n  background: transparent;\n  margin: 0px;\n}\n\n.w20 img {\n  width: 20px;\n  margin-bottom: 10px;\n}\n\n.label-footer {\n  font-size: 12px;\n}\n\nfooter {\n  border-top: 2px solid #fcfcfc;\n  padding-top: 5px !important;\n}\n\np.text-tc {\n  background: white;\n  border: 1px solid #cacaca;\n  padding: 10px;\n  text-align: center;\n  color: #555555;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\nspan.strong-txt {\n  font-weight: bold;\n}\n\n.hr-myAccount {\n  margin: 20px auto;\n  width: 60%;\n  height: 1px;\n  background: #c3c3c3;\n}\n\n.animated.fadeInDown.register-account {\n  padding: 0px;\n}\n\nion-segment-button.md.segment-button-has-label.segment-button-has-label-only.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant.hydrated {\n  font-size: 12px;\n}\n\n.padding-0 button.button-native {\n  padding: 0px !important;\n}\n\nion-ripple-effect.md.hydrated {\n  border: 1px solid #cacaca;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\n:host(.segment-button-checked) {\n  border-color: none !important;\n  border: none !important;\n}\n\nion-segment-button {\n  height: 34px;\n  min-height: 30px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 50px !important;\n  min-width: 10px !important;\n  border: 1px solid #cacaca;\n  margin: 2px;\n  padding: 2px;\n  font-size: 10px !important;\n  border-radius: 4px;\n}\n\nion-segment-button.padding-0.hydrated.md.segment-button-has-label.segment-button-has-label-only.segment-button-checked.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant {\n  background: #62c2e4;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvY29tcG9uZW50cy9tYWluLWZvb3Rlci9tYWluLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWZvb3Rlci9tYWluLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FETUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0hKOztBRFFBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDTEo7O0FEUUE7RUFDSSxlQUFBO0FDTEo7O0FEUUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0FDTEo7O0FEUUE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFFBO0VBQ0ksaUJBQUE7QUNMSjs7QURRQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFFBO0VBQ0ksWUFBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtBQ0xKOztBRFFBO0VBQ0ksdUJBQUE7QUNMSjs7QURRQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFFBO0VBQ0ksNkJBQUE7RUFDQSx1QkFBQTtBQ0xKOztBRFFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFNBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tZm9vdGVyL21haW4tZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZm9vdGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcblxuXG59XG5cbmJ1dHRvbi5mb290ZXIge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW46IDBweDtcblxuXG59XG5cbi53MjAgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubGFiZWwtZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbmZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmY2ZjZmM7XG4gICAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuXG5wLnRleHQtdGMge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuc3Bhbi5zdHJvbmctdHh0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhyLW15QWNjb3VudCB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjYzNjM2MzO1xufVxuXG4uYW5pbWF0ZWQuZmFkZUluRG93bi5yZWdpc3Rlci1hY2NvdW50IHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbi5tZC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkuc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudC5oeWRyYXRlZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucGFkZGluZy0wIGJ1dHRvbi5idXR0b24tbmF0aXZlIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudFxufVxuXG5pb24tcmlwcGxlLWVmZmVjdC5tZC5oeWRyYXRlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOmhvc3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpIHtcbiAgICBib3JkZXItY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICAgIG1hcmdpbjogMnB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uLnBhZGRpbmctMC5oeWRyYXRlZC5tZC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkuc2VnbWVudC1idXR0b24tY2hlY2tlZC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3AuaW9uLWFjdGl2YXRhYmxlLmlvbi1hY3RpdmF0YWJsZS1pbnN0YW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xuICAgIGNvbG9yOiAjZmZmO1xufSIsIi5mb290ZXIge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbmJ1dHRvbi5mb290ZXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi53MjAgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sYWJlbC1mb290ZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmZvb3RlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmNmY2ZjO1xuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbnAudGV4dC10YyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuc3Bhbi5zdHJvbmctdHh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oci1teUFjY291bnQge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6ICNjM2MzYzM7XG59XG5cbi5hbmltYXRlZC5mYWRlSW5Eb3duLnJlZ2lzdGVyLWFjY291bnQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbi5tZC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkuc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudC5oeWRyYXRlZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnBhZGRpbmctMCBidXR0b24uYnV0dG9uLW5hdGl2ZSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tcmlwcGxlLWVmZmVjdC5tZC5oeWRyYXRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbjpob3N0KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKSB7XG4gIGJvcmRlci1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uLnBhZGRpbmctMC5oeWRyYXRlZC5tZC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkuc2VnbWVudC1idXR0b24tY2hlY2tlZC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3AuaW9uLWFjdGl2YXRhYmxlLmlvbi1hY3RpdmF0YWJsZS1pbnN0YW50IHtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgY29sb3I6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/main-footer/main-footer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/main-footer/main-footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFooterComponent", function() { return MainFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainFooterComponent = /** @class */ (function () {
    function MainFooterComponent() {
    }
    MainFooterComponent.prototype.ngOnInit = function () { };
    MainFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-footer',
            template: __webpack_require__(/*! raw-loader!./main-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main-footer/main-footer.component.html"),
            styles: [__webpack_require__(/*! ./main-footer.component.scss */ "./src/app/components/main-footer/main-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainFooterComponent);
    return MainFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/main-header/main-header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-header/main-header.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-toolbar {\n  background-color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvY29tcG9uZW50cy9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4taGVhZGVyL21haW4taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICB9XG59IiwiOmhvc3QgaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/main-header/main-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/main-header/main-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainHeaderComponent = /** @class */ (function () {
    function MainHeaderComponent() {
    }
    MainHeaderComponent.prototype.ngOnInit = function () { };
    MainHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-header',
            template: __webpack_require__(/*! raw-loader!./main-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main-header/main-header.component.html"),
            styles: [__webpack_require__(/*! ./main-header.component.scss */ "./src/app/components/main-header/main-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/myaccount-header/myaccount-header.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/myaccount-header/myaccount-header.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-segment-button.md.segment-button-has-label.segment-button-has-label-only.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant.hydrated {\n  font-size: 12px;\n}\n\n.padding-0 button.button-native {\n  padding: 0px !important;\n}\n\nion-ripple-effect.md.hydrated {\n  border: 1px solid #cacaca;\n  padding: 0px;\n  margin: 0px;\n  border-radius: 10px;\n}\n\n:host(.segment-button-checked) {\n  border-color: none !important;\n  border: none !important;\n}\n\nion-segment-button {\n  height: 34px;\n  min-height: 30px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 50px !important;\n  min-width: 10px !important;\n  border: 1px solid #cacaca;\n  margin: 2px;\n  padding: 2px;\n  font-size: 12px !important;\n  border-radius: 4px;\n  background: #fff;\n  color: #000000;\n}\n\n.active-link1,\n.active-link2,\n.active-link3,\n.active-link4 {\n  background: #62c2e4;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvY29tcG9uZW50cy9teWFjY291bnQtaGVhZGVyL215YWNjb3VudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbXlhY2NvdW50LWhlYWRlci9teWFjY291bnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBOzs7O0VBSUksbUJBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215YWNjb3VudC1oZWFkZXIvbXlhY2NvdW50LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWdtZW50LWJ1dHRvbi5tZC5zZWdtZW50LWJ1dHRvbi1oYXMtbGFiZWwuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkuc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudC5oeWRyYXRlZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucGFkZGluZy0wIGJ1dHRvbi5idXR0b24tbmF0aXZlIHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudFxufVxuXG5pb24tcmlwcGxlLWVmZmVjdC5tZC5oeWRyYXRlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOmhvc3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpIHtcbiAgICBib3JkZXItY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICAgIG1hcmdpbjogMnB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmFjdGl2ZS1saW5rMSxcbi5hY3RpdmUtbGluazIsXG4uYWN0aXZlLWxpbmszLFxuLmFjdGl2ZS1saW5rNCB7XG4gICAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgICBjb2xvcjogI2ZmZjtcbn0iLCJpb24tc2VnbWVudC1idXR0b24ubWQuc2VnbWVudC1idXR0b24taGFzLWxhYmVsLnNlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbC1vbmx5LnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLXRvcC5pb24tYWN0aXZhdGFibGUuaW9uLWFjdGl2YXRhYmxlLWluc3RhbnQuaHlkcmF0ZWQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wYWRkaW5nLTAgYnV0dG9uLmJ1dHRvbi1uYXRpdmUge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXJpcHBsZS1lZmZlY3QubWQuaHlkcmF0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG46aG9zdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCkge1xuICBib3JkZXItY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGhlaWdodDogMzRweDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYWN0aXZlLWxpbmsxLFxuLmFjdGl2ZS1saW5rMixcbi5hY3RpdmUtbGluazMsXG4uYWN0aXZlLWxpbms0IHtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgY29sb3I6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/myaccount-header/myaccount-header.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/myaccount-header/myaccount-header.component.ts ***!
  \***************************************************************************/
/*! exports provided: MyaccountHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountHeaderComponent", function() { return MyaccountHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyaccountHeaderComponent = /** @class */ (function () {
    function MyaccountHeaderComponent() {
    }
    MyaccountHeaderComponent.prototype.ngOnInit = function () { };
    MyaccountHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'myaccount-header',
            template: __webpack_require__(/*! raw-loader!./myaccount-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/myaccount-header/myaccount-header.component.html"),
            styles: [__webpack_require__(/*! ./myaccount-header.component.scss */ "./src/app/components/myaccount-header/myaccount-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyaccountHeaderComponent);
    return MyaccountHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/products-carousel/products-carousel.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/products-carousel/products-carousel.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-slider .product-heading {\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  margin-top: 0px;\n}\n.product-slider .product-main-slider {\n  width: 100%;\n  border: 1px solid #d4d4d4;\n  border-radius: 3px;\n  border-bottom: 2px solid #d4d4d4;\n  height: 258px;\n}\n.product-slider .bg-title {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n}\n.product-slider .bg-title a {\n  text-decoration: none;\n}\n.product-slider .bg-title .product-slider-title {\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  padding: 7px;\n  border-radius: 3px;\n  font-size: 14px;\n  margin-bottom: 0px;\n  width: 70%;\n  text-align: left;\n  line-height: 17px;\n}\n.product-slider .bg-title .slider-price {\n  background: #62c2e4;\n  color: #fff;\n  float: left;\n  padding: 1px 9px;\n  border-radius: 50px;\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: -4px;\n  margin-left: 12px;\n}\n.slider-1 .product-heading {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  margin-top: 10px;\n  border-bottom: 2px solid #d4d4d4;\n}\n.slider-1 .product-heading span {\n  border-bottom: 2px solid #62c2e4;\n  width: 44px;\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.slider-1 .cst-slider-wrap {\n  border: 1px solid #d4d4d4;\n  margin: 2px;\n  border-radius: 4px;\n}\n.slider-1 .cst-slider-wrap a {\n  text-decoration: none;\n}\n.slider-1 .cst-slider-wrap .product-main-slider {\n  width: 110px;\n  height: 72px;\n  background: url('no-image.png') no-repeat center center;\n  background-size: contain;\n}\n.slider-1 .cst-slider-wrap .cat-title {\n  margin-bottom: 3px;\n  text-transform: uppercase;\n  font-size: 11px;\n  text-align: center;\n  color: #2d2d2d;\n  margin-top: 3px;\n  height: 35px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.slider-2 .product-heading {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  margin-top: 10px;\n  border-bottom: 2px solid #d4d4d4;\n}\n.slider-2 .product-heading span {\n  border-bottom: 2px solid #62c2e4;\n  width: 44px;\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.slider-2 .main-bottom-slider {\n  background: #808080;\n  border-radius: 0px 0px 4px 4px;\n}\n.slider-2 .main-bottom-slider .slider-price {\n  background: #62c2e4;\n  color: #fff;\n  float: left;\n  padding: 2px 10px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: -9px;\n  margin-left: 5px;\n  position: relative;\n  z-index: 9;\n  margin-bottom: 0px;\n}\n.slider-2 .main-bottom-slider .slider-size {\n  background: #62c2e4;\n  color: #fff;\n  float: right;\n  padding: 2px 10px;\n  border-radius: 50px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-top: -9px;\n  margin-right: 15px;\n  position: relative;\n  z-index: 9;\n  margin-bottom: 0px;\n}\n.slider-2 .main-bottom-slider .product-slider-title {\n  background: #808080;\n  color: #fff;\n  font-size: 12px;\n  text-align: left;\n  margin-bottom: 0px;\n  padding: 7px 5px;\n  border-radius: 0px 0px 4px 4px;\n  clear: both;\n  height: 48px;\n}\n.slider-2 .cst-slider-wrap {\n  border: 1px solid #d4d4d4;\n  margin: 2px;\n  border-radius: 4px;\n}\n.slider-2 .cst-slider-wrap a {\n  text-decoration: none;\n}\n.slider-2 .cst-slider-wrap .product-main-slider {\n  width: 165px;\n  height: 135px;\n}\n.slider-2 .cst-slider-wrap .cat-title {\n  margin-bottom: 3px;\n  text-transform: uppercase;\n  font-size: 11px;\n  text-align: left;\n  margin-left: 5px;\n  color: #2d2d2d;\n  margin-top: 3px;\n}\n.img-loaded + ion-spinner {\n  display: none;\n}\n.center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy1jYXJvdXNlbC9wcm9kdWN0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy1jYXJvdXNlbC9wcm9kdWN0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQVI7QURHSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FDRFI7QURJSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNGUjtBRElRO0VBQ0kscUJBQUE7QUNGWjtBREtRO0VBQ0ksOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNIWjtBRE9RO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTFo7QURnQkk7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ2RSO0FEZ0JRO0VBQ0ksZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ2RaO0FEa0JJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNoQlI7QURrQlE7RUFDSSxxQkFBQTtBQ2hCWjtBRG1CUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdURBQUE7RUFDQSx3QkFBQTtBQ2pCWjtBRG9CUTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDbEJaO0FENkJJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUMzQlI7QUQ2QlE7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDM0JaO0FEK0JJO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtBQzdCUjtBRCtCUTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDN0JaO0FEZ0NRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUM5Qlo7QURpQ1E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQy9CWjtBRG9DSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDbENSO0FEb0NRO0VBQ0kscUJBQUE7QUNsQ1o7QURxQ1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ25DWjtBRHNDUTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDcENaO0FEOENBO0VBQ0ksYUFBQTtBQzVDSjtBRGdEQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDN0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy1jYXJvdXNlbC9wcm9kdWN0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXNsaWRlciB7XG4gICAgLnByb2R1Y3QtaGVhZGluZyB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1tYWluLXNsaWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDRkNGQ0O1xuICAgICAgICBoZWlnaHQ6IDI1OHB4O1xuICAgIH1cblxuICAgIC5iZy10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICBsZWZ0OiAxNXB4O1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3Qtc2xpZGVyLXRpdGxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcblxuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlci1wcmljZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweCA5cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1zbGlkZXMge1xuICAgICAgICBpb24tc2xpZGUge31cbiAgICB9XG59XG5cbi5zbGlkZXItMSB7XG5cbiAgICAucHJvZHVjdC1oZWFkaW5nIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkNGQ0ZDQ7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzYyYzJlNDtcbiAgICAgICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jc3Qtc2xpZGVyLXdyYXAge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgICAgICBtYXJnaW46IDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3QtbWFpbi1zbGlkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvbm8taW1hZ2UucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIH1cblxuICAgICAgICAuY2F0LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzJkMmQyZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGlvbi1zbGlkZXMge1xuICAgICAgICBpb24tc2xpZGUge31cbiAgICB9XG59XG5cbi5zbGlkZXItMiB7XG4gICAgLnByb2R1Y3QtaGVhZGluZyB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDRkNGQ0O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2MmMyZTQ7XG4gICAgICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbi1ib3R0b20tc2xpZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzgwODA4MDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA0cHggNHB4O1xuXG4gICAgICAgIC5zbGlkZXItcHJpY2Uge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTlweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlci1zaXplIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtOXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0LXNsaWRlci10aXRsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODA4MDgwO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogN3B4IDVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAuY3N0LXNsaWRlci13cmFwIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0LW1haW4tc2xpZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTM1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2F0LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMmQyZDJkO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgaW9uLXNsaWRlIHt9XG4gICAgfVxufVxuXG4uaW1nLWxvYWRlZCtpb24tc3Bpbm5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLy8gLmNlbnRlciBpbiBteSBjYXNlIHRvIG1ha2UgdGhlIHNwaW5uZXIgYXQgdGhlIGNlbnRlclxuLmNlbnRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSIsIi5wcm9kdWN0LXNsaWRlciAucHJvZHVjdC1oZWFkaW5nIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnByb2R1Y3Qtc2xpZGVyIC5wcm9kdWN0LW1haW4tc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGhlaWdodDogMjU4cHg7XG59XG4ucHJvZHVjdC1zbGlkZXIgLmJnLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE1cHg7XG59XG4ucHJvZHVjdC1zbGlkZXIgLmJnLXRpdGxlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucHJvZHVjdC1zbGlkZXIgLmJnLXRpdGxlIC5wcm9kdWN0LXNsaWRlci10aXRsZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgd2lkdGg6IDcwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG4ucHJvZHVjdC1zbGlkZXIgLmJnLXRpdGxlIC5zbGlkZXItcHJpY2Uge1xuICBiYWNrZ3JvdW5kOiAjNjJjMmU0O1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDFweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uc2xpZGVyLTEgLnByb2R1Y3QtaGVhZGluZyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDRkNGQ0O1xufVxuLnNsaWRlci0xIC5wcm9kdWN0LWhlYWRpbmcgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjJjMmU0O1xuICB3aWR0aDogNDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG4uc2xpZGVyLTEgLmNzdC1zbGlkZXItd3JhcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIG1hcmdpbjogMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uc2xpZGVyLTEgLmNzdC1zbGlkZXItd3JhcCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNsaWRlci0xIC5jc3Qtc2xpZGVyLXdyYXAgLnByb2R1Y3QtbWFpbi1zbGlkZXIge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogNzJweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL25vLWltYWdlLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLnNsaWRlci0xIC5jc3Qtc2xpZGVyLXdyYXAgLmNhdC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmQyZDJkO1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnNsaWRlci0yIC5wcm9kdWN0LWhlYWRpbmcge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Q0ZDRkNDtcbn1cbi5zbGlkZXItMiAucHJvZHVjdC1oZWFkaW5nIHNwYW4ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzYyYzJlNDtcbiAgd2lkdGg6IDQ0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuLnNsaWRlci0yIC5tYWluLWJvdHRvbS1zbGlkZXIge1xuICBiYWNrZ3JvdW5kOiAjODA4MDgwO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDRweCA0cHg7XG59XG4uc2xpZGVyLTIgLm1haW4tYm90dG9tLXNsaWRlciAuc2xpZGVyLXByaWNlIHtcbiAgYmFja2dyb3VuZDogIzYyYzJlNDtcbiAgY29sb3I6ICNmZmY7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAycHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAtOXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5zbGlkZXItMiAubWFpbi1ib3R0b20tc2xpZGVyIC5zbGlkZXItc2l6ZSB7XG4gIGJhY2tncm91bmQ6ICM2MmMyZTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uc2xpZGVyLTIgLm1haW4tYm90dG9tLXNsaWRlciAucHJvZHVjdC1zbGlkZXItdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjODA4MDgwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDdweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbiAgY2xlYXI6IGJvdGg7XG4gIGhlaWdodDogNDhweDtcbn1cbi5zbGlkZXItMiAuY3N0LXNsaWRlci13cmFwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgbWFyZ2luOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5zbGlkZXItMiAuY3N0LXNsaWRlci13cmFwIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc2xpZGVyLTIgLmNzdC1zbGlkZXItd3JhcCAucHJvZHVjdC1tYWluLXNsaWRlciB7XG4gIHdpZHRoOiAxNjVweDtcbiAgaGVpZ2h0OiAxMzVweDtcbn1cbi5zbGlkZXItMiAuY3N0LXNsaWRlci13cmFwIC5jYXQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICMyZDJkMmQ7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbi5pbWctbG9hZGVkICsgaW9uLXNwaW5uZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/products-carousel/products-carousel.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/products-carousel/products-carousel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsCarouselComponent", function() { return ProductsCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsCarouselComponent = /** @class */ (function () {
    function ProductsCarouselComponent() {
        this.slideOpts = {
            slidesPerView: 3
        };
        this.slideOpts2 = {
            slidesPerView: 2
        };
        this.slideOpts3 = {
            slidesPerView: 1
        };
    }
    ProductsCarouselComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ProductsCarouselComponent.prototype, "products", {
        set: function (products) {
            this._products = products;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCarouselComponent.prototype, "heading", {
        set: function (heading) {
            this._heading = heading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductsCarouselComponent.prototype, "size", {
        set: function (size) {
            this._size = size;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ProductsCarouselComponent.prototype, "products", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], ProductsCarouselComponent.prototype, "heading", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], ProductsCarouselComponent.prototype, "size", null);
    ProductsCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'products-carousel',
            template: __webpack_require__(/*! raw-loader!./products-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/products-carousel/products-carousel.component.html"),
            styles: [__webpack_require__(/*! ./products-carousel.component.scss */ "./src/app/components/products-carousel/products-carousel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsCarouselComponent);
    return ProductsCarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/products-list/products-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/products-list/products-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.product-list {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  border: 1px solid #d4d4d4;\n  border-radius: 3px;\n  background-color: #fff;\n}\n.product-list a {\n  text-decoration: none;\n}\n.product-list a .product-title-list {\n  margin-top: 0px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #000;\n}\n.product-list .product-list-image {\n  height: 110px;\n}\n.product-list .price-prod-list {\n  color: #62c2e4;\n  margin-bottom: 0px;\n}\n.product-list .product-icon-image {\n  height: 22px;\n}\n.product-list .border-bottom {\n  border-bottom: 1px solid #d4d4d4;\n  height: 2px;\n}\n.product-list .bottom-icon-list {\n  border-right: 1px solid #d4d4d4;\n}\n.product-list .last-orange {\n  color: #f7790d;\n  font-size: 12px;\n  text-transform: uppercase;\n  margin-bottom: 0px;\n  margin-top: 3px;\n}\n.product-list .last-orange img {\n  width: 12px;\n  margin-right: 2px;\n}\nion-segment.sc-ion-segment-md-h.sc-ion-segment-md-s.md.hydrated {\n  margin-bottom: 18px;\n}\n.star-right {\n  float: right;\n}\n.star-right ion-img {\n  width: 24px;\n  float: left;\n  background: #e9e9e9;\n  padding: 5px;\n  border-radius: 62px;\n  margin-right: 5px;\n}\n.cat-pt-name {\n  font-size: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  font-weight: 600;\n}\n.border-bottom {\n  border-bottom: 1px solid #d4d4d4;\n  height: 2px;\n  margin: 20px 50px;\n}\n.split-pane {\n  position: absolute;\n}\nion-menu[type=overlay] {\n  z-index: 80;\n  position: fixed;\n}\nion-menu[type=reveal] {\n  z-index: 80;\n}\n.split-pane-visible {\n  z-index: 2;\n}\n.filter-button {\n  background: none !important;\n  float: right;\n  top: 13px;\n  position: absolute;\n  right: 17px;\n  width: 26px;\n}\n.filter-button-2 .button-native {\n  background: #fff;\n}\ninput {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n.row {\n  display: -webkit-box;\n  display: flex;\n}\n.row .col {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.row .col:last-child {\n  margin-left: 1em;\n}\n/* Accordion styles */\n.tabs {\n  overflow: hidden;\n}\n.tab {\n  width: 100%;\n  color: white;\n  overflow: hidden;\n}\n.tab-label {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 0.5em 1em;\n  background: #ffffff;\n  cursor: pointer;\n  color: #000000;\n  border: 1px solid #e9e9e9;\n  font-size: 14px;\n  font-weight: 400;\n  /* Icon */\n}\n.tab-label::after {\n  content: \"❯\";\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.tab-content {\n  max-height: 0;\n  padding: 0 1em;\n  color: #ffffff;\n  background: white;\n  -webkit-transition: all 0.35s;\n  transition: all 0.35s;\n}\n.tab-close {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  font-size: 0.75em;\n  background: #ffffff;\n  cursor: pointer;\n}\n.range-slider {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.range-custom {\n  width: 100%;\n  margin-left: 15px;\n  margin-right: 15px;\n}\ninput:checked + .tab-label::after {\n  -webkit-transform: rotate(275deg);\n          transform: rotate(275deg);\n}\ninput:checked ~ .tab-content {\n  max-height: 100vh;\n  padding: 1em;\n  color: #000;\n}\n:host .item-inner {\n  padding-right: 0px !important;\n}\n.backicon {\n  width: 100%;\n  margin-left: 5px;\n  margin-bottom: 10px;\n  height: 30px;\n  padding-top: 10px;\n}\n.backicon img.bcicon {\n  float: left;\n  width: 12px;\n}\n.backicon img.tickright {\n  float: right;\n  width: 14px;\n  margin-right: 12px;\n}\n.slotleft {\n  float: left;\n  padding-left: 12px;\n  margin-top: -17px;\n}\n.slotright {\n  float: right;\n  margin-right: 12px;\n  margin-top: -17px;\n}\n.range-head {\n  padding-left: 9px;\n  margin-bottom: -11px;\n  margin-top: 20px;\n}\n.range-md .range-knob-handle .range-pin {\n  -webkit-transform: translate3d(0, 0, 0) scale(1);\n          transform: translate3d(0, 0, 0) scale(1);\n}\n.range-md:not(.range-has-pin) .range-knob-handle .range-knob {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  background-color: #000;\n}\n.range-ios .range-knob-handle .range-pin {\n  -webkit-transform: translate3d(0, 0, 0) scale(1);\n          transform: translate3d(0, 0, 0) scale(1);\n}\n.detail-range {\n  background: #fff;\n  padding: 6px 9px;\n  margin-top: 17px;\n  border: 1px solid #e9e9e9;\n}\n.split-pane-md.split-pane-visible > .split-pane-side[side=end] {\n  min-width: 100%;\n  max-width: 100%;\n  border-right: 0;\n  border-left: var(--border);\n}\n.scroll {\n  height: calc(100% - 60px);\n}\ndiv[scrollx=true],\ndiv[scrolly=true] {\n  position: relative;\n  overflow: hidden;\n}\ndiv[scrollx=true] ::-webkit-scrollbar,\ndiv[scrolly=true] ::-webkit-scrollbar {\n  display: none;\n}\ndiv[scrollx=true] {\n  overflow-x: auto;\n}\ndiv[scrolly=true] {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbXVydGF6YS9EZXNrdG9wL0RhdGEvSW9uaWNBcHBzL01vdXRhaW5CaWtlQXBwL0Jpa2VCb2Vyc2UvQmlrZUJvZXJzZS9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBREVKO0FDQUk7RUFDSSxxQkFBQTtBREVSO0FDQVE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBREVaO0FDRUk7RUFDSSxhQUFBO0FEQVI7QUNHSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBRERSO0FDSUk7RUFDSSxZQUFBO0FERlI7QUNLSTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtBREhSO0FDTUk7RUFDSSwrQkFBQTtBREpSO0FDT0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FETFI7QUNPUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBRExaO0FDVUE7RUFDSSxtQkFBQTtBRFBKO0FDVUE7RUFDSSxZQUFBO0FEUEo7QUNTSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRFBSO0FDWUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEVEo7QUNZQTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEVEo7QUNZQTtFQUNJLGtCQUFBO0FEVEo7QUNZQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FEVEo7QUNZQTtFQUNJLFdBQUE7QURUSjtBQ1lBO0VBQ0ksVUFBQTtBRFRKO0FDYUE7RUFDSSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRFZKO0FDY0k7RUFFSSxnQkFBQTtBRFpSO0FDcUJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRGxCSjtBQ3NCQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBRG5CSjtBQ3FCSTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtBRG5CUjtBQ3FCUTtFQUNJLGdCQUFBO0FEbkJaO0FDd0JBLHFCQUFBO0FBQ0E7RUFDSSxnQkFBQTtBRHJCSjtBQ3lCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUR0Qko7QUN3Qkk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkF2Q0c7RUF3Q0gsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUR0QlI7QUN3QlE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FEdEJaO0FDMEJJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxjQTVERztFQTZESCxpQkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7QUR4QlI7QUMyQkk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkF0RUc7RUF1RUgsZUFBQTtBRDFCUjtBQytCQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUQ1Qko7QUMrQkE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRDVCSjtBQ29DUTtFQUNJLGlDQUFBO1VBQUEseUJBQUE7QURqQ1o7QUNxQ0k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEbkNSO0FDd0NJO0VBQ0ksNkJBQUE7QURyQ1I7QUN5Q0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRHRDSjtBQ3dDSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FEdENSO0FDeUNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRHZDUjtBQzJDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEeENKO0FDMkNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUR4Q0o7QUMyQ0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUR4Q0o7QUMyQ0E7RUFDSSxnREFBQTtVQUFBLHdDQUFBO0FEeENKO0FDMkNBO0VBQ0ksMkJBQUE7VUFBQSxtQkFBQTtFQUNBLHNCQUFBO0FEeENKO0FDMkNBO0VBQ0ksZ0RBQUE7VUFBQSx3Q0FBQTtBRHhDSjtBQzJDQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FEeENKO0FDMkNBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUR4Q0o7QUMyQ0E7RUFHSSx5QkFBQTtBRHhDSjtBQzJDQTs7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0FEeENKO0FDMENJOztFQUNJLGFBQUE7QUR2Q1I7QUMyQ0E7RUFDSSxnQkFBQTtBRHhDSjtBQzJDQTtFQUNJLGdCQUFBO0FEeENKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucHJvZHVjdC1saXN0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5wcm9kdWN0LWxpc3QgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5wcm9kdWN0LWxpc3QgYSAucHJvZHVjdC10aXRsZS1saXN0IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnByb2R1Y3QtbGlzdCAucHJvZHVjdC1saXN0LWltYWdlIHtcbiAgaGVpZ2h0OiAxMTBweDtcbn1cbi5wcm9kdWN0LWxpc3QgLnByaWNlLXByb2QtbGlzdCB7XG4gIGNvbG9yOiAjNjJjMmU0O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ucHJvZHVjdC1saXN0IC5wcm9kdWN0LWljb24taW1hZ2Uge1xuICBoZWlnaHQ6IDIycHg7XG59XG4ucHJvZHVjdC1saXN0IC5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIGhlaWdodDogMnB4O1xufVxuLnByb2R1Y3QtbGlzdCAuYm90dG9tLWljb24tbGlzdCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkNGQ0ZDQ7XG59XG4ucHJvZHVjdC1saXN0IC5sYXN0LW9yYW5nZSB7XG4gIGNvbG9yOiAjZjc3OTBkO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLnByb2R1Y3QtbGlzdCAubGFzdC1vcmFuZ2UgaW1nIHtcbiAgd2lkdGg6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG5pb24tc2VnbWVudC5zYy1pb24tc2VnbWVudC1tZC1oLnNjLWlvbi1zZWdtZW50LW1kLXMubWQuaHlkcmF0ZWQge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uc3Rhci1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5zdGFyLXJpZ2h0IGlvbi1pbWcge1xuICB3aWR0aDogMjRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNjJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jYXQtcHQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luOiAyMHB4IDUwcHg7XG59XG5cbi5zcGxpdC1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tbWVudVt0eXBlPW92ZXJsYXldIHtcbiAgei1pbmRleDogODA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuaW9uLW1lbnVbdHlwZT1yZXZlYWxdIHtcbiAgei1pbmRleDogODA7XG59XG5cbi5zcGxpdC1wYW5lLXZpc2libGUge1xuICB6LWluZGV4OiAyO1xufVxuXG4uZmlsdGVyLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0b3A6IDEzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG4gIHdpZHRoOiAyNnB4O1xufVxuXG4uZmlsdGVyLWJ1dHRvbi0yIC5idXR0b24tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yb3cgLmNvbCB7XG4gIGZsZXg6IDE7XG59XG4ucm93IC5jb2w6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbi8qIEFjY29yZGlvbiBzdHlsZXMgKi9cbi50YWJzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhYiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGFiLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLyogSWNvbiAqL1xufVxuLnRhYi1sYWJlbDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKdr1wiO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXM7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi50YWItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcbn1cbi50YWItY2xvc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmb250LXNpemU6IDAuNzVlbTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmFuZ2Utc2xpZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnJhbmdlLWN1c3RvbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnRhYi1sYWJlbDo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzVkZWcpO1xufVxuaW5wdXQ6Y2hlY2tlZCB+IC50YWItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAxZW07XG4gIGNvbG9yOiAjMDAwO1xufVxuXG46aG9zdCAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYmFja2ljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5iYWNraWNvbiBpbWcuYmNpY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMnB4O1xufVxuLmJhY2tpY29uIGltZy50aWNrcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5zbG90bGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IC0xN3B4O1xufVxuXG4uc2xvdHJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IC0xN3B4O1xufVxuXG4ucmFuZ2UtaGVhZCB7XG4gIHBhZGRpbmctbGVmdDogOXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTFweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnJhbmdlLW1kIC5yYW5nZS1rbm9iLWhhbmRsZSAucmFuZ2UtcGluIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbn1cblxuLnJhbmdlLW1kOm5vdCgucmFuZ2UtaGFzLXBpbikgLnJhbmdlLWtub2ItaGFuZGxlIC5yYW5nZS1rbm9iIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLnJhbmdlLWlvcyAucmFuZ2Uta25vYi1oYW5kbGUgLnJhbmdlLXBpbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XG59XG5cbi5kZXRhaWwtcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA2cHggOXB4O1xuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xufVxuXG4uc3BsaXQtcGFuZS1tZC5zcGxpdC1wYW5lLXZpc2libGUgPiAuc3BsaXQtcGFuZS1zaWRlW3NpZGU9ZW5kXSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiB2YXIoLS1ib3JkZXIpO1xufVxuXG4uc2Nyb2xsIHtcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtIDYwcHgpO1xuICBoZWlnaHQ6IC1tb3otY2FsYygxMDAlIC0gNjBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XG59XG5cbmRpdltzY3JvbGx4PXRydWVdLFxuZGl2W3Njcm9sbHk9dHJ1ZV0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5kaXZbc2Nyb2xseD10cnVlXSA6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuZGl2W3Njcm9sbHk9dHJ1ZV0gOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdltzY3JvbGx4PXRydWVdIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuZGl2W3Njcm9sbHk9dHJ1ZV0ge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSIsIi5wcm9kdWN0LWxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgLnByb2R1Y3QtdGl0bGUtbGlzdCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvZHVjdC1saXN0LWltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICB9XG5cbiAgICAucHJpY2UtcHJvZC1saXN0IHtcbiAgICAgICAgY29sb3I6ICM2MmMyZTQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pY29uLWltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgIH1cblxuICAgIC5ib3JkZXItYm90dG9tIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgIH1cblxuICAgIC5ib3R0b20taWNvbi1saXN0IHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q0ZDRkNDtcbiAgICB9XG5cbiAgICAubGFzdC1vcmFuZ2Uge1xuICAgICAgICBjb2xvcjogI2Y3NzkwZDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLXNlZ21lbnQuc2MtaW9uLXNlZ21lbnQtbWQtaC5zYy1pb24tc2VnbWVudC1tZC1zLm1kLmh5ZHJhdGVkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uc3Rhci1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgaW9uLWltZyB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2MnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG5cbn1cblxuLmNhdC1wdC1uYW1lIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgIGhlaWdodDogMnB4O1xuICAgIG1hcmdpbjogMjBweCA1MHB4O1xufVxuXG4uc3BsaXQtcGFuZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5pb24tbWVudVt0eXBlPVwib3ZlcmxheVwiXSB7XG4gICAgei1pbmRleDogODA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG5pb24tbWVudVt0eXBlPVwicmV2ZWFsXCJdIHtcbiAgICB6LWluZGV4OiA4MDtcbn1cblxuLnNwbGl0LXBhbmUtdmlzaWJsZSB7XG4gICAgei1pbmRleDogMjtcblxufVxuXG4uZmlsdGVyLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0b3A6IDEzcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxN3B4O1xuICAgIHdpZHRoOiAyNnB4O1xufVxuXG4uZmlsdGVyLWJ1dHRvbi0yIHtcbiAgICAuYnV0dG9uLW5hdGl2ZSB7XG5cbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB9XG59XG5cbiRtaWRuaWdodDogI2ZmZmZmZjtcbiRjbG91ZHM6ICNlY2YwZjE7XG4vLyBHZW5lcmFsXG5cblxuaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4vLyBMYXlvdXRcbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuY29sIHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyogQWNjb3JkaW9uIHN0eWxlcyAqL1xuLnRhYnMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbn1cblxuLnRhYiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICAgICAgYmFja2dyb3VuZDogJG1pZG5pZ2h0O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIC8qIEljb24gKi9cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlxcMjc2RlwiO1xuICAgICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWNvbnRlbnQge1xuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgICAgY29sb3I6ICRtaWRuaWdodDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMzVzO1xuICAgIH1cblxuICAgICYtY2xvc2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkbWlkbmlnaHQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIH1cbn1cblxuLnJhbmdlLXNsaWRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ucmFuZ2UtY3VzdG9tIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cblxuLy8gOmNoZWNrZWRcbmlucHV0OmNoZWNrZWQge1xuICAgICsudGFiLWxhYmVsIHtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzVkZWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgfi50YWItY29udGVudCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbn1cblxuOmhvc3Qge1xuICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uYmFja2ljb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICBpbWcuYmNpY29uIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgIH1cblxuICAgIGltZy50aWNrcmlnaHQge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgfVxufVxuXG4uc2xvdGxlZnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcbn1cblxuLnNsb3RyaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAtMTdweDtcbn1cblxuLnJhbmdlLWhlYWQge1xuICAgIHBhZGRpbmctbGVmdDogOXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xMXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5yYW5nZS1tZCAucmFuZ2Uta25vYi1oYW5kbGUgLnJhbmdlLXBpbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbn1cblxuLnJhbmdlLW1kOm5vdCgucmFuZ2UtaGFzLXBpbikgLnJhbmdlLWtub2ItaGFuZGxlIC5yYW5nZS1rbm9iIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5yYW5nZS1pb3MgLnJhbmdlLWtub2ItaGFuZGxlIC5yYW5nZS1waW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XG59XG5cbi5kZXRhaWwtcmFuZ2Uge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogNnB4IDlweDtcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZTk7XG59XG5cbi5zcGxpdC1wYW5lLW1kLnNwbGl0LXBhbmUtdmlzaWJsZT4uc3BsaXQtcGFuZS1zaWRlW3NpZGU9ZW5kXSB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IHZhcigtLWJvcmRlcik7XG59XG5cbi5zY3JvbGwge1xuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA2MHB4KTtcbiAgICBoZWlnaHQ6IC1tb3otY2FsYygxMDAlIC0gNjBweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbn1cblxuZGl2W3Njcm9sbHg9dHJ1ZV0sXG5kaXZbc2Nyb2xseT10cnVlXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbmRpdltzY3JvbGx4PXRydWVdIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG5kaXZbc2Nyb2xseT10cnVlXSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/products-list/products-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/products-list/products-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent() {
    }
    ProductsListComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ProductsListComponent.prototype, "products", {
        set: function (products) {
            // Here you can do what you want with the variable
            this._products = products;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ProductsListComponent.prototype, "products", null);
    ProductsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'products-list',
            template: __webpack_require__(/*! raw-loader!./products-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/products-list/products-list.component.html"),
            styles: [__webpack_require__(/*! ./products-list.component.scss */ "./src/app/components/products-list/products-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsListComponent);
    return ProductsListComponent;
}());



/***/ }),

/***/ "./src/app/components/skeleton-item/skeleton-item.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/skeleton-item/skeleton-item.ts ***!
  \***********************************************************/
/*! exports provided: SkeletonItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonItemComponent", function() { return SkeletonItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**

  # Ionic 3 Skeleton Loader component

  ## Setup

  After clone or download this project.

  Install Ionic CLI

  ```
  $ npm install -g ionic
  ```

  Install dependencies

  ```
  $ cd <project>
  $ npm install
  ```

  Run the app on Localhost

  ```
  $ ionic serve
  ```

  See more at [Get started with Ionic](https://ionicframework.com/getting-started/)

  ## skeleton-item
  `<skeleton-item>` is the main block to build more complex skeleton-style loading screen

  ### Usage

  ```
  <skeleton-item height="50px" width="50px" rounded></skeleton-item>
  ```

  You can add CSS classes or inline CSS as normal HTML element

  ```
  <skeleton-item class="pin-image" height="50px" width="50px" rounded style="margin-bottom: 16px"></skeleton-item>
  ```

  ### Available attributes

  - {height: string} can be px or %, default value is '16px'
  - {width: string} can be px or %, default value is '100%'
  - {radius: string} set border-radius, default value is '4px'
  - {rounded} set border-radius to 999em to make rounded block when the height and width have the same value
  - {no-animated} disable animation effect

 */


var SkeletonItemComponent = /** @class */ (function () {
    function SkeletonItemComponent() {
        this.styles = {};
    }
    SkeletonItemComponent.prototype.ngOnInit = function () {
        this.styles = {
            width: this.width ? this.width : '100%',
            height: this.height ? this.height : '16px'
        };
        if (typeof this.radius !== 'undefined' && this.radius !== '') {
            this.styles.borderRadius = this.radius;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SkeletonItemComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SkeletonItemComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SkeletonItemComponent.prototype, "radius", void 0);
    SkeletonItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'skeleton-item',
            template: __webpack_require__(/*! raw-loader!./skeleton-item.html */ "./node_modules/raw-loader/index.js!./src/app/components/skeleton-item/skeleton-item.html")
        })
    ], SkeletonItemComponent);
    return SkeletonItemComponent;
}());



/***/ }),

/***/ "./src/app/components/video-carousel/video-carousel.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/video-carousel/video-carousel.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider-3 .product-heading {\n  text-transform: uppercase;\n  margin-bottom: 15px;\n  margin-top: 10px;\n  border-bottom: 2px solid #d4d4d4;\n}\n.slider-3 .product-heading span {\n  border-bottom: 2px solid #62c2e4;\n  width: 44px;\n  display: block;\n  position: relative;\n  top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdXJ0YXphL0Rlc2t0b3AvRGF0YS9Jb25pY0FwcHMvTW91dGFpbkJpa2VBcHAvQmlrZUJvZXJzZS9CaWtlQm9lcnNlL3NyYy9hcHAvY29tcG9uZW50cy92aWRlby1jYXJvdXNlbC92aWRlby1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy92aWRlby1jYXJvdXNlbC92aWRlby1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDQVI7QURFUTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlkZW8tY2Fyb3VzZWwvdmlkZW8tY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyLTMge1xuICAgIC5wcm9kdWN0LWhlYWRpbmcge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Q0ZDRkNDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjJjMmU0O1xuICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5zbGlkZXItMyAucHJvZHVjdC1oZWFkaW5nIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkNGQ0ZDQ7XG59XG4uc2xpZGVyLTMgLnByb2R1Y3QtaGVhZGluZyBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2MmMyZTQ7XG4gIHdpZHRoOiA0NHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/video-carousel/video-carousel.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/video-carousel/video-carousel.component.ts ***!
  \***********************************************************************/
/*! exports provided: VideoCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCarouselComponent", function() { return VideoCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoCarouselComponent = /** @class */ (function () {
    function VideoCarouselComponent() {
        this.slideOpts3 = {
            slidesPerView: 1
        };
    }
    VideoCarouselComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(VideoCarouselComponent.prototype, "videos", {
        set: function (videos) {
            this._videos = videos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoCarouselComponent.prototype, "heading", {
        set: function (heading) {
            this._heading = heading;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], VideoCarouselComponent.prototype, "videos", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], VideoCarouselComponent.prototype, "heading", null);
    VideoCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'video-carousel',
            template: __webpack_require__(/*! raw-loader!./video-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/video-carousel/video-carousel.component.html"),
            styles: [__webpack_require__(/*! ./video-carousel.component.scss */ "./src/app/components/video-carousel/video-carousel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoCarouselComponent);
    return VideoCarouselComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~add-product-add-product-module~chat-chat-module~chats-chats-module~edit-product-edit-product~45f09b4d-es5.js.map