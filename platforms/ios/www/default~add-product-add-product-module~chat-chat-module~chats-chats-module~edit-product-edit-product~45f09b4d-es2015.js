(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-product-add-product-module~chat-chat-module~chats-chats-module~edit-product-edit-product~45f09b4d"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/account-userinfo/account-userinfo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/account-userinfo/account-userinfo.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div padding-horizontal text-center class=\"animated fadeInDown register-account\">\n  <div class=\"backicon\">\n    <ion-img src=\"../assets/backicon.png\"></ion-img>\n  </div>\n  <div class=\"\">\n    <div class=\"main-image\">\n      <span class=\"cam-image\">\n        <ion-img class=\"cam-img\" src=\"../assets/cam-icon.png\"></ion-img>\n      </span>\n      <ion-img src=\"../assets/avatar-image.png\"></ion-img>\n\n    </div>\n    <h2 ion-text class=\"text-primary text-register\">\n      {{ username }}\n    </h2>\n    <div [routerLink]=\"['/settings']\" class=\"pull-right settings\">\n      <ion-img src=\"../assets/settings.png\"></ion-img>\n    </div>\n  </div>\n</div>"

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

/***/ "./node_modules/raw-loader/index.js!./src/app/components/skeleton-item/skeleton-item.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/skeleton-item/skeleton-item.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"styles\"></div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators/finalize */ "./node_modules/rxjs/internal/operators/finalize.js");
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_9__);










const STORAGE_KEY = 'user_image';
let AccountUserinfoComponent = class AccountUserinfoComponent {
    constructor(camera, file, http, actionSheetController, toastController, storage, platform, loadingController, ref, filePath, webview) {
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
    ngOnInit() {
        this.storage.get('USER_INFO').then((response) => {
            this.username = response.name;
            this.picture = response.picture;
            this.user_id = response.id;
        });
    }
    pathForImage(img) {
        if (img === null) {
            return '';
        }
        else {
            let converted = this.webview.convertFileSrc(img);
            return converted;
        }
    }
    presentToast(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                position: 'bottom',
                duration: 3000
            });
            toast.present();
        });
    }
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    takePicture(sourceType) {
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                this.filePath.resolveNativePath(imagePath)
                    .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            }
        });
    }
    createFileName() {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    }
    copyFileToLocalDir(namePath, currentName, newFileName) {
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
            this.updateStoredImages(newFileName);
        }, error => {
            this.presentToast('Error while storing file.');
        });
    }
    updateStoredImages(name) {
        this.storage.get(STORAGE_KEY).then(images => {
            let arr = JSON.parse(images);
            if (!arr) {
                let newImages = [name];
                this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                arr.push(name);
                this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
            let filePath = this.file.dataDirectory + name;
            let resPath = this.pathForImage(filePath);
            let newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
            this.images = [newEntry, ...this.images];
            this.ref.detectChanges(); // trigger change detection cycle
        });
    }
    startUpload(imgEntry) {
        this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(entry => {
            entry.file(file => this.readFile(file));
        })
            .catch(err => {
            this.presentToast('Error while reading file.');
        });
    }
    readFile(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const formData = new FormData();
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('file', imgBlob, file.name);
            this.uploadImageData(formData);
        };
        reader.readAsArrayBuffer(file);
    }
    uploadImageData(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Uploading image...',
            });
            yield loading.present();
            this.http.post("http://localhost:8888/upload.php", formData)
                .pipe(Object(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                loading.dismiss();
            }))
                .subscribe(res => {
                if (res['success']) {
                    this.presentToast('File upload complete.');
                }
                else {
                    this.presentToast('File upload failed.');
                }
            });
        });
    }
};
AccountUserinfoComponent.ctorParameters = () => [
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
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/components/main-header/main-header.component */ "./src/app/components/main-header/main-header.component.ts");
/* harmony import */ var _app_components_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/components/main-footer/main-footer.component */ "./src/app/components/main-footer/main-footer.component.ts");
/* harmony import */ var _app_components_skeleton_item_skeleton_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/components/skeleton-item/skeleton-item */ "./src/app/components/skeleton-item/skeleton-item.ts");
/* harmony import */ var _myaccount_header_myaccount_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myaccount-header/myaccount-header.component */ "./src/app/components/myaccount-header/myaccount-header.component.ts");
/* harmony import */ var _account_userinfo_account_userinfo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-userinfo/account-userinfo.component */ "./src/app/components/account-userinfo/account-userinfo.component.ts");






// Components





let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_6__["MainHeaderComponent"], _app_components_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_7__["MainFooterComponent"], _app_components_skeleton_item_skeleton_item__WEBPACK_IMPORTED_MODULE_8__["SkeletonItemComponent"], _myaccount_header_myaccount_header_component__WEBPACK_IMPORTED_MODULE_9__["MyaccountHeaderComponent"], _account_userinfo_account_userinfo_component__WEBPACK_IMPORTED_MODULE_10__["AccountUserinfoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        exports: [_app_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_6__["MainHeaderComponent"], _app_components_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_7__["MainFooterComponent"], _app_components_skeleton_item_skeleton_item__WEBPACK_IMPORTED_MODULE_8__["SkeletonItemComponent"], _myaccount_header_myaccount_header_component__WEBPACK_IMPORTED_MODULE_9__["MyaccountHeaderComponent"], _account_userinfo_account_userinfo_component__WEBPACK_IMPORTED_MODULE_10__["AccountUserinfoComponent"]]
    })
], ComponentsModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainFooterComponent = class MainFooterComponent {
    constructor() { }
    ngOnInit() { }
};
MainFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'main-footer',
        template: __webpack_require__(/*! raw-loader!./main-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main-footer/main-footer.component.html"),
        styles: [__webpack_require__(/*! ./main-footer.component.scss */ "./src/app/components/main-footer/main-footer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainFooterComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainHeaderComponent = class MainHeaderComponent {
    constructor() { }
    ngOnInit() { }
};
MainHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'main-header',
        template: __webpack_require__(/*! raw-loader!./main-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main-header/main-header.component.html"),
        styles: [__webpack_require__(/*! ./main-header.component.scss */ "./src/app/components/main-header/main-header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainHeaderComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyaccountHeaderComponent = class MyaccountHeaderComponent {
    constructor() { }
    ngOnInit() { }
};
MyaccountHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'myaccount-header',
        template: __webpack_require__(/*! raw-loader!./myaccount-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/myaccount-header/myaccount-header.component.html"),
        styles: [__webpack_require__(/*! ./myaccount-header.component.scss */ "./src/app/components/myaccount-header/myaccount-header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MyaccountHeaderComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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


let SkeletonItemComponent = class SkeletonItemComponent {
    constructor() {
        this.styles = {};
    }
    ngOnInit() {
        this.styles = {
            width: this.width ? this.width : '100%',
            height: this.height ? this.height : '16px'
        };
        if (typeof this.radius !== 'undefined' && this.radius !== '') {
            this.styles.borderRadius = this.radius;
        }
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



/***/ })

}]);
//# sourceMappingURL=default~add-product-add-product-module~chat-chat-module~chats-chats-module~edit-product-edit-product~45f09b4d-es2015.js.map