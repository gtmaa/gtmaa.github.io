module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "qVkA");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2Hgx":
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;
  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done) if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }
    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }
  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || '').match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

/***/ }),

/***/ "A5Mw":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"tps-funeral-2026-06-24\",\"title\":\"Deploying for Toronto Police Funeral\",\"date\":\"2026-06-20\",\"category\":\"Support 7\",\"body\":\"Support 7 will be deployed on June 24th in support of the regimental funeral for Toronto Police Constable Marc Pinizzotto. GTMAA members will provide canteen and rehab services to first responders attending the service.\"},{\"id\":\"club-bbq-2026-06\",\"title\":\"Annual Club BBQ\",\"date\":\"2026-06-16\",\"category\":\"Club News\",\"body\":\"Members gathered for the GTMAA's annual summer barbecue. Thanks to everyone who came out and to Peter Garnett for hosting. A great chance to catch up between callouts.\"},{\"id\":\"sup7-2026-05-31\",\"title\":\"2nd Alarm House Fire\",\"date\":\"2026-05-31\",\"category\":\"Support 7\",\"location\":\"130 Ellesmere Road, Scarborough\",\"body\":\"Support 7 responded to a 2nd alarm house fire at 130 Ellesmere Road in Maryvale. Eight members provided refreshments on a hot afternoon, logging 22 hours of service before clearing at 1705.\"},{\"id\":\"sup7-2026-05-29\",\"title\":\"2nd Alarm House Fire\",\"date\":\"2026-05-29\",\"category\":\"Support 7\",\"location\":\"38 Madras Crescent, Scarborough\",\"body\":\"Support 7 was called out to a 2nd alarm house fire at 38 Madras Crescent in Morningside. Eight members attended and logged 25.5 hours of service. The canteen returned to quarters at 1945.\"},{\"id\":\"sup7-2026-05-21\",\"title\":\"2nd Alarm Dwelling Fire\",\"date\":\"2026-05-21\",\"category\":\"Support 7\",\"location\":\"24 Brigadoon Crescent, Scarborough\",\"body\":\"Support 7 responded to a 2nd alarm dwelling fire at 24 Brigadoon Crescent in the L'Amoreaux neighbourhood. Eight members were in attendance from 1840 to 2130, combining for 22 hours of service.\"},{\"id\":\"sup7-2026-05-04\",\"title\":\"3rd Alarm High-Rise Fire\",\"date\":\"2026-05-04\",\"category\":\"Support 7\",\"location\":\"11 Thorncliffe Park Drive, East York\",\"body\":\"Support 7 was dispatched to a 3rd alarm high-rise fire at 11 Thorncliffe Park Drive, the same building that saw a prolonged 5-alarm incident last November. Service was provided until 1645, with 18.75 hours of manpower logged.\"},{\"id\":\"beaches-easter-parade-2026-04-05\",\"title\":\"Beaches Easter Parade\",\"date\":\"2026-04-05\",\"category\":\"Club News\",\"body\":\"GTMAA members took part in the annual Beaches Easter Parade along Queen Street East, from Neville Park to Woodbine. A small but dedicated crew represented the club and got the job done.\"},{\"id\":\"st-patricks-parade-2026-03-15\",\"title\":\"St. Patrick's Day Parade\",\"date\":\"2026-03-15\",\"category\":\"Club News\",\"body\":\"GTMAA members joined the annual St. Patrick's Day Parade in downtown Toronto, with Support 7 in service for the day.\"}]");

/***/ }),

/***/ "E02R":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "IL7q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/



/* eslint-disable no-unused-vars */
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(_extends({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }
    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}
module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};

/***/ }),

/***/ "NS33":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("E02R");
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  ;
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  ;
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "QRet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return q; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var t,
  u,
  r,
  o = 0,
  i = [],
  c = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,
  f = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,
  e = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,
  a = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,
  v = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
function m(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(u, t, o || r), o = 0;
  var i = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}
function l(n) {
  return o = 1, p(w, n);
}
function p(n, r, o) {
  var i = m(t++, 2);
  return i.t = n, i.__c || (i.__ = [o ? o(r) : w(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }], i.__c = u), i.__;
}
function y(r, o) {
  var i = m(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
}
function h(r, o) {
  var i = m(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
}
function s(n) {
  return o = 5, d(function () {
    return {
      current: n
    };
  }, []);
}
function _(n, t, u) {
  o = 6, h(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}
function d(n, u) {
  var r = m(t++, 7);
  return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}
function A(n, t) {
  return o = 8, d(function () {
    return n;
  }, t);
}
function F(n) {
  var r = u.context[n.__c],
    o = m(t++, 9);
  return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}
function T(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u ? u(t) : t);
}
function q(n) {
  var r = m(t++, 10),
    o = l();
  return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}
function x() {
  for (var t; t = i.shift();) if (t.__P) try {
    t.__H.__h.forEach(g), t.__H.__h.forEach(j), t.__H.__h = [];
  } catch (u) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  u = null, c && c(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  f && f(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(g), r.__h.forEach(j), r.__h = []);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (t) {
  e && e(t);
  var o = t.__c;
  o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r === preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || ((r = preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame) || function (n) {
    var t,
      u = function u() {
        clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
      },
      r = setTimeout(u, 100);
    b && (t = requestAnimationFrame(u));
  })(x)), u = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || j(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, t.__v);
    }
  }), a && a(t, u);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (t) {
  v && v(t);
  var u,
    r = t.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      g(n);
    } catch (n) {
      u = n;
    }
  }), u && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, r.__v));
};
var b = "function" == typeof requestAnimationFrame;
function g(n) {
  var t = u,
    r = n.__c;
  "function" == typeof r && (n.__c = void 0, r()), u = t;
}
function j(n) {
  var t = u;
  n.__c = n.__(), u = t;
}
function k(n, t) {
  return !n || n.length !== t.length || t.some(function (t, u) {
    return t !== n[u];
  });
}
function w(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "W0B4":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("NS33")();
}

/***/ }),

/***/ "WiT8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}
var React = __webpack_require__("l8WD");
var React__default = _interopDefault(React);
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }
  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }
  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }
  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }
    var mountedInstances = [];
    var state;
    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }
    var SideEffect = /*#__PURE__*/
    function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);
      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };
      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }
        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };
      var _proto = SideEffect.prototype;
      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };
      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };
      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };
      return SideEffect;
    }(React.PureComponent);
    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
    _defineProperty(SideEffect, "canUseDOM", canUseDOM);
    return SideEffect;
  };
}
module.exports = withSideEffect;

/***/ }),

/***/ "l8WD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return un; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return tn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return en; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flushSync", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return X; });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QRet");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




function C(n, t) {
  for (var e in t) n[e] = t[e];
  return n;
}
function S(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;
  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
  return !1;
}
function E(n) {
  this.props = n;
}
function g(n, t) {
  function e(n) {
    var e = this.props.ref,
      r = e == n.ref;
    return !r && e && (e.call ? e(null) : e.current = null), t ? !t(this.props, n) || !r : S(this.props, n);
  }
  function r(t) {
    return this.shouldComponentUpdate = e, Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(n, t);
  }
  return r.displayName = "Memo(" + (n.displayName || n.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r;
}
(E.prototype = new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]()).isPureReactComponent = !0, E.prototype.shouldComponentUpdate = function (n, t) {
  return S(this.props, n) || S(this.state, t);
};
var w = preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b;
preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), w && w(n);
};
var R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function x(n) {
  function t(t, e) {
    var r = C({}, t);
    return delete r.ref, n(r, (e = t.ref || e) && ("object" != _typeof(e) || "current" in e) ? e : null);
  }
  return t.$$typeof = R, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
}
var N = function N(n, t) {
    return null == n ? null : Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).map(t));
  },
  k = {
    map: N,
    forEach: N,
    count: function count(n) {
      return n ? Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).length : 0;
    },
    only: function only(n) {
      var t = Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n);
      if (1 !== t.length) throw "Children.only";
      return t[0];
    },
    toArray: preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"]
  },
  A = preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e;
preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e = function (n, t, e) {
  if (n.then) for (var r, u = t; u = u.__;) if ((r = u.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t);
  A(n, t, e);
};
var O = preact__WEBPACK_IMPORTED_MODULE_1__["options"].unmount;
function L() {
  this.__u = 0, this.t = null, this.__b = null;
}
function U(n) {
  var t = n.__.__c;
  return t && t.__e && t.__e(n);
}
function F(n) {
  var t, e, r;
  function u(u) {
    if (t || (t = n()).then(function (n) {
      e = n.default || n;
    }, function (n) {
      r = n;
    }), r) throw r;
    if (!e) throw t;
    return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(e, u);
  }
  return u.displayName = "Lazy", u.__f = !0, u;
}
function M() {
  this.u = null, this.o = null;
}
preact__WEBPACK_IMPORTED_MODULE_1__["options"].unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), O && O(n);
}, (L.prototype = new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]()).__c = function (n, t) {
  var e = t.__c,
    r = this;
  null == r.t && (r.t = []), r.t.push(e);
  var u = U(r.__v),
    o = !1,
    i = function i() {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };
  e.__R = i;
  var l = function l() {
      if (! --r.__u) {
        if (r.state.__e) {
          var n = r.state.__e;
          r.__v.__k[0] = function n(t, e, r) {
            return t && (t.__v = null, t.__k = t.__k && t.__k.map(function (t) {
              return n(t, e, r);
            }), t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
          }(n, n.__c.__P, n.__c.__O);
        }
        var t;
        for (r.setState({
          __e: r.__b = null
        }); t = r.t.pop();) t.forceUpdate();
      }
    },
    c = !0 === t.__h;
  r.__u++ || c || r.setState({
    __e: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, L.prototype.componentWillUnmount = function () {
  this.t = [];
}, L.prototype.render = function (n, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"),
        r = this.__v.__k[0].__c;
      this.__v.__k[0] = function n(t, e, r) {
        return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function (n) {
          "function" == typeof n.__c && n.__c();
        }), t.__c.__H = null), null != (t = C({}, t)).__c && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function (t) {
          return n(t, e, r);
        })), t;
      }(this.__b, e, r.__O = r.__P);
    }
    this.__b = null;
  }
  var u = t.__e && Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, n.fallback);
  return u && (u.__h = null), [Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, t.__e ? null : n.children), u];
};
var T = function T(n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();
    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};
function D(n) {
  return this.getChildContext = function () {
    return n.context;
  }, n.children;
}
function I(n) {
  var t = this,
    e = n.i;
  t.componentWillUnmount = function () {
    Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null, t.l), t.l = null, t.i = null;
  }, t.i && t.i !== e && t.componentWillUnmount(), n.__v ? (t.l || (t.i = e, t.l = {
    nodeType: 1,
    parentNode: e,
    childNodes: [],
    appendChild: function appendChild(n) {
      this.childNodes.push(n), t.i.appendChild(n);
    },
    insertBefore: function insertBefore(n, e) {
      this.childNodes.push(n), t.i.appendChild(n);
    },
    removeChild: function removeChild(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t.i.removeChild(n);
    }
  }), Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(D, {
    context: t.context
  }, n.__v), t.l)) : t.l && t.componentWillUnmount();
}
function W(n, t) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(I, {
    __v: n,
    i: t
  });
}
(M.prototype = new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]()).__e = function (n) {
  var t = this,
    e = U(t.__v),
    r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function o() {
      t.props.revealOrder ? (r.push(u), T(t, n, r)) : u();
    };
    e ? e(o) : o();
  };
}, M.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
  return n.children;
}, M.prototype.componentDidUpdate = M.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    T(n, e, t);
  });
};
var j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
  P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  V = "undefined" != typeof document,
  z = function z(n) {
    return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(n);
  };
function B(n, t, e) {
  return null == t.__k && (t.textContent = ""), Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
function $(n, t, e) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])(n, t), "function" == typeof e && e(), n ? n.__c : null;
}
preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (n) {
  Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype, n, {
    configurable: !0,
    get: function get() {
      return this["UNSAFE_" + n];
    },
    set: function set(t) {
      Object.defineProperty(this, n, {
        configurable: !0,
        writable: !0,
        value: t
      });
    }
  });
});
var H = preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;
function Z() {}
function Y() {
  return this.cancelBubble;
}
function q() {
  return this.defaultPrevented;
}
preact__WEBPACK_IMPORTED_MODULE_1__["options"].event = function (n) {
  return H && (n = H(n)), n.persist = Z, n.isPropagationStopped = Y, n.isDefaultPrevented = q, n.nativeEvent = n;
};
var G,
  J = {
    configurable: !0,
    get: function get() {
      return this.class;
    }
  },
  K = preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;
preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode = function (n) {
  var t = n.type,
    e = n.props,
    r = e;
  if ("string" == typeof t) {
    var u = -1 === t.indexOf("-");
    for (var o in r = {}, e) {
      var i = e[o];
      V && "children" === o && "noscript" === t || "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !z(e.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : u && P.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i);
    }
    "select" == t && r.multiple && Array.isArray(r.value) && (r.value = Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function (n) {
      n.props.selected = -1 != r.value.indexOf(n.props.value);
    })), "select" == t && null != r.defaultValue && (r.value = Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function (n) {
      n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
    })), n.props = r, e.class != e.className && (J.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", J));
  }
  n.$$typeof = j, K && K(n);
};
var Q = preact__WEBPACK_IMPORTED_MODULE_1__["options"].__r;
preact__WEBPACK_IMPORTED_MODULE_1__["options"].__r = function (n) {
  Q && Q(n), G = n.__c;
};
var X = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function readContext(n) {
          return G.__n[n.__c].props.value;
        }
      }
    }
  },
  nn = "17.0.2";
function tn(n) {
  return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"].bind(null, n);
}
function en(n) {
  return !!n && n.$$typeof === j;
}
function rn(n) {
  return en(n) ? preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(null, arguments) : n;
}
function un(n) {
  return !!n.__k && (Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null, n), !0);
}
function on(n) {
  return n && (n.base || 1 === n.nodeType && n) || null;
}
var ln = function ln(n, t) {
    return n(t);
  },
  cn = function cn(n, t) {
    return n(t);
  },
  fn = preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"];
/* harmony default export */ __webpack_exports__["default"] = ({
  useState: preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useState */ "k"],
  useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useReducer */ "i"],
  useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useEffect */ "d"],
  useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useLayoutEffect */ "g"],
  useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useRef */ "j"],
  useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useImperativeHandle */ "f"],
  useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useMemo */ "h"],
  useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useCallback */ "a"],
  useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useContext */ "b"],
  useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_0__[/* useDebugValue */ "c"],
  version: "17.0.2",
  Children: k,
  render: B,
  hydrate: $,
  unmountComponentAtNode: un,
  createPortal: W,
  createElement: preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],
  createContext: preact__WEBPACK_IMPORTED_MODULE_1__["createContext"],
  createFactory: tn,
  cloneElement: rn,
  createRef: preact__WEBPACK_IMPORTED_MODULE_1__["createRef"],
  Fragment: preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
  isValidElement: en,
  findDOMNode: on,
  Component: preact__WEBPACK_IMPORTED_MODULE_1__["Component"],
  PureComponent: E,
  memo: g,
  forwardRef: x,
  flushSync: cn,
  unstable_batchedUpdates: ln,
  StrictMode: preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],
  Suspense: L,
  SuspenseList: M,
  lazy: F,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: X
});


/***/ }),

/***/ "qVkA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./style/index.scss
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// EXTERNAL MODULE: ../node_modules/preact/hooks/dist/hooks.module.js
var hooks_module = __webpack_require__("QRet");

// CONCATENATED MODULE: ../node_modules/preact-router/dist/preact-router.module.js


var preact_router_module_a = {};
function preact_router_module_c(n, t) {
  for (var r in t) n[r] = t[r];
  return n;
}
function preact_router_module_s(n, t, r) {
  var i,
    o = /(?:\?([^#]*))?(#.*)?$/,
    e = n.match(o),
    u = {};
  if (e && e[1]) for (var f = e[1].split("&"), c = 0; c < f.length; c++) {
    var s = f[c].split("=");
    u[decodeURIComponent(s[0])] = decodeURIComponent(s.slice(1).join("="));
  }
  n = d(n.replace(o, "")), t = d(t || "");
  for (var h = Math.max(n.length, t.length), v = 0; v < h; v++) if (t[v] && ":" === t[v].charAt(0)) {
    var l = t[v].replace(/(^:|[+*?]+$)/g, ""),
      p = (t[v].match(/[+*?]+$/) || preact_router_module_a)[0] || "",
      m = ~p.indexOf("+"),
      y = ~p.indexOf("*"),
      U = n[v] || "";
    if (!U && !y && (p.indexOf("?") < 0 || m)) {
      i = !1;
      break;
    }
    if (u[l] = decodeURIComponent(U), m || y) {
      u[l] = n.slice(v).map(decodeURIComponent).join("/");
      break;
    }
  } else if (t[v] !== n[v]) {
    i = !1;
    break;
  }
  return (!0 === r.default || !1 !== i) && u;
}
function preact_router_module_h(n, t) {
  return n.rank < t.rank ? 1 : n.rank > t.rank ? -1 : n.index - t.index;
}
function preact_router_module_v(n, t) {
  return n.index = t, n.rank = function (n) {
    return n.props.default ? 0 : d(n.props.path).map(preact_router_module_l).join("");
  }(n), n.props;
}
function d(n) {
  return n.replace(/(^\/+|\/+$)/g, "").split("/");
}
function preact_router_module_l(n) {
  return ":" == n.charAt(0) ? 1 + "*+?".indexOf(n.charAt(n.length - 1)) || 4 : 5;
}
var preact_router_module_p = {},
  preact_router_module_m = [],
  y = [],
  U = null,
  g = {
    url: R()
  },
  k = Object(external_preact_["createContext"])(g);
function C() {
  var n = Object(hooks_module["b" /* useContext */])(k);
  if (n === g) {
    var t = Object(hooks_module["k" /* useState */])()[1];
    Object(hooks_module["d" /* useEffect */])(function () {
      return y.push(t), function () {
        return y.splice(y.indexOf(t), 1);
      };
    }, []);
  }
  return [n, $];
}
function R() {
  var n;
  return "" + ((n = U && U.location ? U.location : U && U.getCurrentLocation ? U.getCurrentLocation() : "undefined" != typeof location ? location : preact_router_module_p).pathname || "") + (n.search || "");
}
function $(n, t) {
  return void 0 === t && (t = !1), "string" != typeof n && n.url && (t = n.replace, n = n.url), function (n) {
    for (var t = preact_router_module_m.length; t--;) if (preact_router_module_m[t].canRoute(n)) return !0;
    return !1;
  }(n) && function (n, t) {
    void 0 === t && (t = "push"), U && U[t] ? U[t](n) : "undefined" != typeof history && history[t + "State"] && history[t + "State"](null, null, n);
  }(n, t ? "replace" : "push"), I(n);
}
function I(n) {
  for (var t = !1, r = 0; r < preact_router_module_m.length; r++) preact_router_module_m[r].routeTo(n) && (t = !0);
  return t;
}
function M(n) {
  if (n && n.getAttribute) {
    var t = n.getAttribute("href"),
      r = n.getAttribute("target");
    if (t && t.match(/^\//g) && (!r || r.match(/^_?self$/i))) return $(t);
  }
}
function b(n) {
  return n.stopImmediatePropagation && n.stopImmediatePropagation(), n.stopPropagation && n.stopPropagation(), n.preventDefault(), !1;
}
function W(n) {
  if (!(n.ctrlKey || n.metaKey || n.altKey || n.shiftKey || n.button)) {
    var t = n.target;
    do {
      if ("a" === t.localName && t.getAttribute("href")) {
        if (t.hasAttribute("data-native") || t.hasAttribute("native")) return;
        if (M(t)) return b(n);
      }
    } while (t = t.parentNode);
  }
}
var w = !1;
function D(n) {
  n.history && (U = n.history), this.state = {
    url: n.url || R()
  };
}
preact_router_module_c(D.prototype = new external_preact_["Component"](), {
  shouldComponentUpdate: function shouldComponentUpdate(n) {
    return !0 !== n.static || n.url !== this.props.url || n.onChange !== this.props.onChange;
  },
  canRoute: function canRoute(n) {
    var t = Object(external_preact_["toChildArray"])(this.props.children);
    return void 0 !== this.g(t, n);
  },
  routeTo: function routeTo(n) {
    this.setState({
      url: n
    });
    var t = this.canRoute(n);
    return this.p || this.forceUpdate(), t;
  },
  componentWillMount: function componentWillMount() {
    this.p = !0;
  },
  componentDidMount: function componentDidMount() {
    var n = this;
    w || (w = !0, U || addEventListener("popstate", function () {
      I(R());
    }), addEventListener("click", W)), preact_router_module_m.push(this), U && (this.u = U.listen(function (t) {
      var r = t.location || t;
      n.routeTo("" + (r.pathname || "") + (r.search || ""));
    })), this.p = !1;
  },
  componentWillUnmount: function componentWillUnmount() {
    "function" == typeof this.u && this.u(), preact_router_module_m.splice(preact_router_module_m.indexOf(this), 1);
  },
  componentWillUpdate: function componentWillUpdate() {
    this.p = !0;
  },
  componentDidUpdate: function componentDidUpdate() {
    this.p = !1;
  },
  g: function g(n, t) {
    n = n.filter(preact_router_module_v).sort(preact_router_module_h);
    for (var r = 0; r < n.length; r++) {
      var i = n[r],
        o = preact_router_module_s(t, i.props.path, i.props);
      if (o) return [i, o];
    }
  },
  render: function render(n, t) {
    var e,
      u,
      f = n.onChange,
      a = t.url,
      s = this.c,
      h = this.g(Object(external_preact_["toChildArray"])(n.children), a);
    if (h && (u = Object(external_preact_["cloneElement"])(h[0], preact_router_module_c(preact_router_module_c({
      url: a,
      matches: e = h[1]
    }, e), {
      key: void 0,
      ref: void 0
    }))), a !== (s && s.url)) {
      preact_router_module_c(g, s = this.c = {
        url: a,
        previous: s && s.url,
        current: u,
        path: u ? u.props.path : null,
        matches: e
      }), s.router = this, s.active = u ? [u] : [];
      for (var v = y.length; v--;) y[v]({});
      "function" == typeof f && f(s);
    }
    return Object(external_preact_["h"])(k.Provider, {
      value: s
    }, u);
  }
});
var preact_router_module_E = function E(n) {
    return Object(external_preact_["h"])("a", preact_router_module_c({
      onClick: W
    }, n));
  },
  preact_router_module_L = function L(n) {
    return Object(external_preact_["h"])(n.component, n);
  };

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("W0B4");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ../node_modules/react-side-effect/lib/index.js
var lib = __webpack_require__("WiT8");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ../node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__("2Hgx");
var react_fast_compare_default = /*#__PURE__*/__webpack_require__.n(react_fast_compare);

// EXTERNAL MODULE: ../node_modules/preact/compat/dist/compat.module.js
var compat_module = __webpack_require__("l8WD");

// EXTERNAL MODULE: ../node_modules/object-assign/index.js
var object_assign = __webpack_require__("IL7q");
var object_assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ../node_modules/react-helmet/es/Helmet.js
function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }





var ATTRIBUTE_NAMES = {
  BODY: "bodyAttributes",
  HTML: "htmlAttributes",
  TITLE: "titleAttributes"
};
var TAG_NAMES = {
  BASE: "base",
  BODY: "body",
  HEAD: "head",
  HTML: "html",
  LINK: "link",
  META: "meta",
  NOSCRIPT: "noscript",
  SCRIPT: "script",
  STYLE: "style",
  TITLE: "title"
};
var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
  return TAG_NAMES[name];
});
var TAG_PROPERTIES = {
  CHARSET: "charset",
  CSS_TEXT: "cssText",
  HREF: "href",
  HTTPEQUIV: "http-equiv",
  INNER_HTML: "innerHTML",
  ITEM_PROP: "itemprop",
  NAME: "name",
  PROPERTY: "property",
  REL: "rel",
  SRC: "src",
  TARGET: "target"
};
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate"
};
var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
  obj[REACT_TAG_MAP[key]] = key;
  return obj;
}, {});
var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
var HELMET_ATTRIBUTE = "data-react-helmet";
var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};
var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof2(superClass));
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
};
var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (_typeof2(call) === "object" || typeof call === "function") ? call : self;
};
var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
  var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
  var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
  var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (innermostTemplate && innermostTitle) {
    // use function arg to avoid need to escape $ characters
    return innermostTemplate.replace(/%s/g, function () {
      return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
    });
  }
  var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || undefined;
};
var getOnChangeClientState = function getOnChangeClientState(propsList) {
  return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};
var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
  return propsList.filter(function (props) {
    return typeof props[tagType] !== "undefined";
  }).map(function (props) {
    return props[tagType];
  }).reduce(function (tagAttrs, current) {
    return _extends({}, tagAttrs, current);
  }, {});
};
var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
  return propsList.filter(function (props) {
    return typeof props[TAG_NAMES.BASE] !== "undefined";
  }).map(function (props) {
    return props[TAG_NAMES.BASE];
  }).reverse().reduce(function (innermostBaseTag, tag) {
    if (!innermostBaseTag.length) {
      var keys = Object.keys(tag);
      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
          return innermostBaseTag.concat(tag);
        }
      }
    }
    return innermostBaseTag;
  }, []);
};
var Helmet_getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
  // Calculate list of tags, giving priority innermost component (end of the propslist)
  var approvedSeenTags = {};
  return propsList.filter(function (props) {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
    }
    return false;
  }).map(function (props) {
    return props[tagName];
  }).reverse().reduce(function (approvedTags, instanceTags) {
    var instanceSeenTags = {};
    instanceTags.filter(function (tag) {
      var primaryAttributeKey = void 0;
      var keys = Object.keys(tag);
      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase();

        // Special rule with link tags, since rel and href are both primary tags, rel takes priority
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        // Special case for innerHTML which doesn't work lowercased
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      var value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach(function (tag) {
      return approvedTags.push(tag);
    });

    // Update seen tags with tags from this instance
    var keys = Object.keys(instanceSeenTags);
    for (var i = 0; i < keys.length; i++) {
      var attributeKey = keys[i];
      var tagUnion = object_assign_default()({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getInnermostProperty = function getInnermostProperty(propsList, property) {
  for (var i = propsList.length - 1; i >= 0; i--) {
    var props = propsList[i];
    if (props.hasOwnProperty(property)) {
      return props[property];
    }
  }
  return null;
};
var reducePropsToState = function reducePropsToState(propsList) {
  return {
    baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
    bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
    defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
    encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
    linkTags: Helmet_getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
    metaTags: Helmet_getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
    noscriptTags: Helmet_getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
    onChangeClientState: getOnChangeClientState(propsList),
    scriptTags: Helmet_getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
    styleTags: Helmet_getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
    title: getTitleFromPropsList(propsList),
    titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
  };
};
var rafPolyfill = function () {
  var clock = Date.now();
  return function (callback) {
    var currentTime = Date.now();
    if (currentTime - clock > 16) {
      clock = currentTime;
      callback(currentTime);
    } else {
      setTimeout(function () {
        rafPolyfill(callback);
      }, 0);
    }
  };
}();
var cafPolyfill = function cafPolyfill(id) {
  return clearTimeout(id);
};
var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;
var warn = function warn(msg) {
  return console && typeof console.warn === "function" && console.warn(msg);
};
var _helmetCallback = null;
var handleClientStateChange = function handleClientStateChange(newState) {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(function () {
      commitTagChanges(newState, function () {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var commitTagChanges = function commitTagChanges(newState, cb) {
  var baseTag = newState.baseTag,
    bodyAttributes = newState.bodyAttributes,
    htmlAttributes = newState.htmlAttributes,
    linkTags = newState.linkTags,
    metaTags = newState.metaTags,
    noscriptTags = newState.noscriptTags,
    onChangeClientState = newState.onChangeClientState,
    scriptTags = newState.scriptTags,
    styleTags = newState.styleTags,
    title = newState.title,
    titleAttributes = newState.titleAttributes;
  updateAttributes(TAG_NAMES.BODY, bodyAttributes);
  updateAttributes(TAG_NAMES.HTML, htmlAttributes);
  updateTitle(title, titleAttributes);
  var tagUpdates = {
    baseTag: updateTags(TAG_NAMES.BASE, baseTag),
    linkTags: updateTags(TAG_NAMES.LINK, linkTags),
    metaTags: updateTags(TAG_NAMES.META, metaTags),
    noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
    scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
    styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
  };
  var addedTags = {};
  var removedTags = {};
  Object.keys(tagUpdates).forEach(function (tagType) {
    var _tagUpdates$tagType = tagUpdates[tagType],
      newTags = _tagUpdates$tagType.newTags,
      oldTags = _tagUpdates$tagType.oldTags;
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  cb && cb();
  onChangeClientState(newState, addedTags, removedTags);
};
var flattenArray = function flattenArray(possibleArray) {
  return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};
var updateTitle = function updateTitle(title, attributes) {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes(TAG_NAMES.TITLE, attributes);
};
var updateAttributes = function updateAttributes(tagName, attributes) {
  var elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  var attributesToRemove = [].concat(helmetAttributes);
  var attributeKeys = Object.keys(attributes);
  for (var i = 0; i < attributeKeys.length; i++) {
    var attribute = attributeKeys[i];
    var value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    var indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
    elementTag.removeAttribute(attributesToRemove[_i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTags = function updateTags(type, tags) {
  var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
  var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
  var oldTags = Array.prototype.slice.call(tagNodes);
  var newTags = [];
  var indexToDelete = void 0;
  if (tags && tags.length) {
    tags.forEach(function (tag) {
      var newElement = document.createElement(type);
      for (var attribute in tag) {
        if (tag.hasOwnProperty(attribute)) {
          if (attribute === TAG_PROPERTIES.INNER_HTML) {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");

      // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
      if (oldTags.some(function (existingTag, index) {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach(function (tag) {
    return tag.parentNode.removeChild(tag);
  });
  newTags.forEach(function (tag) {
    return headElement.appendChild(tag);
  });
  return {
    oldTags: oldTags,
    newTags: newTags
  };
};
var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
  return Object.keys(attributes).reduce(function (str, key) {
    var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
    return str ? str + " " + attr : attr;
  }, "");
};
var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
  var attributeString = generateElementAttributesAsString(attributes);
  var flattenedTitle = flattenArray(title);
  return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};
var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
  return tags.reduce(function (str, tag) {
    var attributeHtml = Object.keys(tag).filter(function (attribute) {
      return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
    }).reduce(function (string, attribute) {
      var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
      return string ? string + " " + attr : attr;
    }, "");
    var tagContent = tag.innerHTML || tag.cssText || "";
    var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
    return str + "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
  }, "");
};
var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
  var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(attributes).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key] || key] = attributes[key];
    return obj;
  }, initProps);
};
var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
  var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(props).reduce(function (obj, key) {
    obj[HTML_TAG_MAP[key] || key] = props[key];
    return obj;
  }, initAttributes);
};
var Helmet_generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
  var _initProps;

  // assigning into an array to define toString function on it
  var initProps = (_initProps = {
    key: title
  }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
  var props = convertElementAttributestoReactProps(attributes, initProps);
  return [compat_module["default"].createElement(TAG_NAMES.TITLE, props, title)];
};
var Helmet_generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
  return tags.map(function (tag, i) {
    var _mappedTag;
    var mappedTag = (_mappedTag = {
      key: i
    }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);
    Object.keys(tag).forEach(function (attribute) {
      var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;
      if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
        var content = tag.innerHTML || tag.cssText;
        mappedTag.dangerouslySetInnerHTML = {
          __html: content
        };
      } else {
        mappedTag[mappedAttribute] = tag[attribute];
      }
    });
    return compat_module["default"].createElement(type, mappedTag);
  });
};
var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
  switch (type) {
    case TAG_NAMES.TITLE:
      return {
        toComponent: function toComponent() {
          return Helmet_generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
        },
        toString: function toString() {
          return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
        }
      };
    case ATTRIBUTE_NAMES.BODY:
    case ATTRIBUTE_NAMES.HTML:
      return {
        toComponent: function toComponent() {
          return convertElementAttributestoReactProps(tags);
        },
        toString: function toString() {
          return generateElementAttributesAsString(tags);
        }
      };
    default:
      return {
        toComponent: function toComponent() {
          return Helmet_generateTagsAsReactComponent(type, tags);
        },
        toString: function toString() {
          return generateTagsAsString(type, tags, encode);
        }
      };
  }
};
var mapStateOnServer = function mapStateOnServer(_ref) {
  var baseTag = _ref.baseTag,
    bodyAttributes = _ref.bodyAttributes,
    encode = _ref.encode,
    htmlAttributes = _ref.htmlAttributes,
    linkTags = _ref.linkTags,
    metaTags = _ref.metaTags,
    noscriptTags = _ref.noscriptTags,
    scriptTags = _ref.scriptTags,
    styleTags = _ref.styleTags,
    _ref$title = _ref.title,
    title = _ref$title === undefined ? "" : _ref$title,
    titleAttributes = _ref.titleAttributes;
  return {
    base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
    bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
    htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
    link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
    meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
    noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
    script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
    style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
    title: getMethodsForTag(TAG_NAMES.TITLE, {
      title: title,
      titleAttributes: titleAttributes
    }, encode)
  };
};
var Helmet_Helmet = function Helmet(Component) {
  var _class, _temp;
  return _temp = _class = function (_React$Component) {
    inherits(HelmetWrapper, _React$Component);
    function HelmetWrapper() {
      classCallCheck(this, HelmetWrapper);
      return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }
    HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      return !react_fast_compare_default()(this.props, nextProps);
    };
    HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
      if (!nestedChildren) {
        return null;
      }
      switch (child.type) {
        case TAG_NAMES.SCRIPT:
        case TAG_NAMES.NOSCRIPT:
          return {
            innerHTML: nestedChildren
          };
        case TAG_NAMES.STYLE:
          return {
            cssText: nestedChildren
          };
      }
      throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    };
    HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
      var _babelHelpers$extends;
      var child = _ref.child,
        arrayTypeChildren = _ref.arrayTypeChildren,
        newChildProps = _ref.newChildProps,
        nestedChildren = _ref.nestedChildren;
      return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
    };
    HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
      var _babelHelpers$extends2, _babelHelpers$extends3;
      var child = _ref2.child,
        newProps = _ref2.newProps,
        newChildProps = _ref2.newChildProps,
        nestedChildren = _ref2.nestedChildren;
      switch (child.type) {
        case TAG_NAMES.TITLE:
          return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));
        case TAG_NAMES.BODY:
          return _extends({}, newProps, {
            bodyAttributes: _extends({}, newChildProps)
          });
        case TAG_NAMES.HTML:
          return _extends({}, newProps, {
            htmlAttributes: _extends({}, newChildProps)
          });
      }
      return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
    };
    HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
      var newFlattenedProps = _extends({}, newProps);
      Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
        var _babelHelpers$extends4;
        newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
      });
      return newFlattenedProps;
    };
    HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
      if (false) {}
      return true;
    };
    HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
      var _this2 = this;
      var arrayTypeChildren = {};
      compat_module["default"].Children.forEach(children, function (child) {
        if (!child || !child.props) {
          return;
        }
        var _child$props = child.props,
          nestedChildren = _child$props.children,
          childProps = objectWithoutProperties(_child$props, ["children"]);
        var newChildProps = convertReactPropstoHtmlAttributes(childProps);
        _this2.warnOnInvalidChildren(child, nestedChildren);
        switch (child.type) {
          case TAG_NAMES.LINK:
          case TAG_NAMES.META:
          case TAG_NAMES.NOSCRIPT:
          case TAG_NAMES.SCRIPT:
          case TAG_NAMES.STYLE:
            arrayTypeChildren = _this2.flattenArrayTypeChildren({
              child: child,
              arrayTypeChildren: arrayTypeChildren,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;
          default:
            newProps = _this2.mapObjectTypeChildren({
              child: child,
              newProps: newProps,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;
        }
      });
      newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
      return newProps;
    };
    HelmetWrapper.prototype.render = function render() {
      var _props = this.props,
        children = _props.children,
        props = objectWithoutProperties(_props, ["children"]);
      var newProps = _extends({}, props);
      if (children) {
        newProps = this.mapChildrenToProps(children, newProps);
      }
      return compat_module["default"].createElement(Component, newProps);
    };
    createClass(HelmetWrapper, null, [{
      key: "canUseDOM",
      // Component.peek comes from react-side-effect:
      // For testing, you may use a static peek() method available on the returned component.
      // It lets you get the current state without resetting the mounted instance stack.
      // Don’t use it for anything other than testing.

      /**
       * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
       * @param {Object} bodyAttributes: {"className": "root"}
       * @param {String} defaultTitle: "Default Title"
       * @param {Boolean} defer: true
       * @param {Boolean} encodeSpecialCharacters: true
       * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
       * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
       * @param {Array} meta: [{"name": "description", "content": "Test description"}]
       * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
       * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
       * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
       * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
       * @param {String} title: "Title"
       * @param {Object} titleAttributes: {"itemprop": "name"}
       * @param {String} titleTemplate: "MySite.com - %s"
       */
      set: function set$$1(canUseDOM) {
        Component.canUseDOM = canUseDOM;
      }
    }]);
    return HelmetWrapper;
  }(compat_module["default"].Component), _class.propTypes = {
    base: prop_types_default.a.object,
    bodyAttributes: prop_types_default.a.object,
    children: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node), prop_types_default.a.node]),
    defaultTitle: prop_types_default.a.string,
    defer: prop_types_default.a.bool,
    encodeSpecialCharacters: prop_types_default.a.bool,
    htmlAttributes: prop_types_default.a.object,
    link: prop_types_default.a.arrayOf(prop_types_default.a.object),
    meta: prop_types_default.a.arrayOf(prop_types_default.a.object),
    noscript: prop_types_default.a.arrayOf(prop_types_default.a.object),
    onChangeClientState: prop_types_default.a.func,
    script: prop_types_default.a.arrayOf(prop_types_default.a.object),
    style: prop_types_default.a.arrayOf(prop_types_default.a.object),
    title: prop_types_default.a.string,
    titleAttributes: prop_types_default.a.object,
    titleTemplate: prop_types_default.a.string
  }, _class.defaultProps = {
    defer: true,
    encodeSpecialCharacters: true
  }, _class.peek = Component.peek, _class.rewind = function () {
    var mappedState = Component.rewind();
    if (!mappedState) {
      // provide fallback if mappedState is undefined
      mappedState = mapStateOnServer({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
    return mappedState;
  }, _temp;
};
var NullComponent = function NullComponent() {
  return null;
};
var HelmetSideEffects = lib_default()(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);
var HelmetExport = Helmet_Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;
/* harmony default export */ var es_Helmet = (HelmetExport);

// CONCATENATED MODULE: ./lib/posts.ts
var STALE_AFTER_MONTHS = 6;
function formatDate(date) {
  var d = new Date(date);
  if (isNaN(d.getTime())) return date;
  return d.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  });
}

/**
 * Returns posts no older than STALE_AFTER_MONTHS, newest first.
 * Posts with an unparseable date are dropped.
 */
function getActivePosts(posts) {
  var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var cutoff = new Date(now);
  cutoff.setMonth(cutoff.getMonth() - STALE_AFTER_MONTHS);
  return posts.filter(function (post) {
    var d = new Date(post.date);
    return !isNaN(d.getTime()) && d >= cutoff;
  }).sort(function (a, b) {
    return b.date.localeCompare(a.date);
  });
}
// EXTERNAL MODULE: ./data/posts.json
var posts = __webpack_require__("A5Mw");

// CONCATENATED MODULE: ./components/club-news/style.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var style = ({"grid":"grid__+jJ-L","card":"card__VYvnR","badge":"badge__6ZRLd","location":"location__K-ioX","date":"date__vu5np","cardLink":"cardLink__MBRHo","empty":"empty__IPnQG"});
// CONCATENATED MODULE: ./components/club-news/index.tsx




var club_news_posts = getActivePosts(posts);
var club_news_ClubNews = function ClubNews() {
  return Object(external_preact_["h"])("section", null, Object(external_preact_["h"])("h2", null, "Club News"), club_news_posts.length === 0 ? Object(external_preact_["h"])("p", {
    class: style.empty
  }, "Check back soon for the latest club news and Support 7 callouts.") : Object(external_preact_["h"])("div", {
    class: style.grid
  }, club_news_posts.map(function (post) {
    return Object(external_preact_["h"])("article", {
      key: post.id,
      class: style.card
    }, post.category && Object(external_preact_["h"])("span", {
      class: style.badge
    }, post.category), Object(external_preact_["h"])("h3", null, post.title), post.location && Object(external_preact_["h"])("p", {
      class: style.location
    }, Object(external_preact_["h"])("i", {
      class: "fas fa-map-marker-alt",
      "aria-hidden": "true"
    }), " ", post.location), Object(external_preact_["h"])("time", {
      class: style.date,
      dateTime: post.date
    }, formatDate(post.date)), Object(external_preact_["h"])("p", null, post.body), post.link && Object(external_preact_["h"])("p", {
      class: style.cardLink
    }, Object(external_preact_["h"])("a", {
      href: post.link
    }, "Related link")));
  })));
};
/* harmony default export */ var club_news = (club_news_ClubNews);
// CONCATENATED MODULE: ./routes/home/style.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var home_style = ({"section":"section__Do9Tx","col":"col__XD6T8","group":"group__6ppgu","span_3_of_3":"span_3_of_3__ABfqm","span_2_of_3":"span_2_of_3__wvYZ1","span_1_of_3":"span_1_of_3__PWUh9","span_2_of_2":"span_2_of_2__8Bjlk","span_1_of_2":"span_1_of_2__ElsF+","home":"home__s0ssE","hero":"hero__jT+30","welcome":"welcome__iFXCz","welcomeImg":"welcomeImg__TyPqH"});
// CONCATENATED MODULE: ./routes/home/index.tsx




var home_Home = function Home() {
  return Object(external_preact_["h"])("div", {
    class: home_style.home
  }, Object(external_preact_["h"])(HelmetExport, null, Object(external_preact_["h"])("title", null, "Greater Toronto Multiple Alarm Association")), Object(external_preact_["h"])("section", {
    class: home_style.welcome
  }, Object(external_preact_["h"])("div", {
    class: home_style.welcomeText
  }, Object(external_preact_["h"])("h2", null, "Welcome"), Object(external_preact_["h"])("p", null, "The members of the Greater Toronto Multiple Alarm Association welcome you to our voice on the internet. We are one of the largest fire buff clubs in Canada, providing canteen and rehab services to the Toronto Fire Services (and previous fire departments) for almost 40 years. Fires happen day and night, often in the worst weather possible. Our volunteers are prepared to answer the call whenever it comes."), Object(external_preact_["h"])("p", null, "The G.T.M.A.A. is an inclusive, non-profit organization that is always looking for new fire buffs and fire service enthusiasts to fill out our ranks. Persons of all ages, including those belonging to other public service organizations, are always welcome. Check out our event calendar and get in touch if you are interested in joining us.")), Object(external_preact_["h"])("img", {
    class: home_style.welcomeImg,
    src: "/assets/people/2013-fallen-firefighter-memorial_thumb.jpg",
    alt: "GTMAA members at the 2013 Fallen Firefighter Memorial"
  })), Object(external_preact_["h"])(club_news, null), Object(external_preact_["h"])("section", null, Object(external_preact_["h"])("h2", null, "Meetings"), Object(external_preact_["h"])("p", null, "A general business meeting is held on the third Tuesday of every month, starting at 7 P.M. Each meeting is open to guests with the exception of the April meeting. Most meetings conclude with some type of entertainment - either slides or a video or a guest speaker. Some months we hold our meetings off site at another fire service facility. Guests are advised to contact us before visiting to confirm the location.")), Object(external_preact_["h"])("section", null, Object(external_preact_["h"])("h2", null, "The Trumpet"), Object(external_preact_["h"])("p", null, "The Trumpet is the voice of the Greater Toronto Multiple Alarm Association. Since 1976 it has been the foremost source on fire service information in the Toronto area. No other publication gives you more - apparatus deliveries, department news, a monthly synopsis of major multiple alarm incidents, as well as the latest club news. Most issues are rounded out with interesting photos. For the low price of $10, receive a PDF version of The Trumpet in your inbox every month of the year. Contact us today to sign up for your subscription.")));
};
/* harmony default export */ var home = (home_Home);
// CONCATENATED MODULE: ./lib/cx.js
function cx() {
  var out = '';
  for (var i = 0; i < arguments.length; i++) {
    // eslint-disable-next-line prefer-rest-params
    var x = arguments[i];
    if (out) out += ' ';
    if (x) out += x;
  }
  return out;
}
// CONCATENATED MODULE: ./routes/about-us/style.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var about_us_style = ({"section":"section__7KcG4","col":"col__iLYL3","group":"group__A6V8T","span_3_of_3":"span_3_of_3__v1hTd","span_2_of_3":"span_2_of_3__h6ZPm","span_1_of_3":"span_1_of_3__qeLhE","span_2_of_2":"span_2_of_2__JBBNE","span_1_of_2":"span_1_of_2__54dIs","about":"about__sO6bl","trio":"trio__m815t","ifbaCrest":"ifbaCrest__EyYo+"});
// CONCATENATED MODULE: ./routes/about-us/index.tsx




var about_us_AboutUs = function AboutUs() {
  return Object(external_preact_["h"])("div", {
    class: about_us_style.about
  }, Object(external_preact_["h"])(HelmetExport, null, Object(external_preact_["h"])("title", null, "Greater Toronto Multiple Alarm Association - About Us")), Object(external_preact_["h"])("h1", null, "ABOUT US"), Object(external_preact_["h"])("section", null, Object(external_preact_["h"])("h2", null, "Executive Committee"), Object(external_preact_["h"])("p", null, "Updated June 2026"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "President - Jeremy Reigber"), Object(external_preact_["h"])("li", null, "Vice President - Tony Coelho"), Object(external_preact_["h"])("li", null, "Treasurer - Jennifer MacDonald"), Object(external_preact_["h"])("li", null, "Secretary - Brian Noble"), Object(external_preact_["h"])("li", null, "Chaplain - Dr. Ron Nickle"), Object(external_preact_["h"])("li", null, "Directors"), Object(external_preact_["h"])("ul", null, Object(external_preact_["h"])("li", null, "John Hanley"), Object(external_preact_["h"])("li", null, "Gord MacBride"), Object(external_preact_["h"])("li", null, "Linda Betsworth")))), Object(external_preact_["h"])("section", null, Object(external_preact_["h"])("h2", null, "Club History"), Object(external_preact_["h"])("p", null, "In 1975 a small group of fire buffs that had been meeting informally saw the need for a formal fire buffing group in the Metro Toronto area. Out of that need was born the Metro Toronto Multiple Alarm Association, officially formed on February 25, 1975. The group originally met in members\u2019 basements. Later, the MTMAA would later benefit from the generosity of member Bruce Beauchamp\u2019s family, setting up a meeting room above their tailor shop on Adelaide Street West. That location provided a great vantage point for watching responding apparatus from the Adelaide Street firehall."), Object(external_preact_["h"])("p", null, "Wanting to expand their service to the community, in 1977 the members of MTMAA took over the operation of the Scarborough Fire Department canteen truck. In late 1979 members began operation of a canteen service for the Etobicoke and Mississauga Fire Departments that lasted two years until a new fire buff club, The Lakeshore Fire Buffs, started up and took over the service. Forty years later, we continue to proudly provide canteen and rehab services to the amalgamated Toronto Fire Services."), Object(external_preact_["h"])("p", null, "The most infamous response in the club\u2019s history began on the evening of November 10, 1979, when a Canadian Pacific freight train carrying volatile chemicals derailed near the intersection of Mavis Road and Dundas Street in Mississauga. The ensuing evacuation displaced over 200,000 residents. Members spent the next eleven days serving hot and cold drinks, snacks and meals to responding personnel, logging a total of 772 volunteer hours on scene."), Object(external_preact_["h"])("p", null, "Through the 1980s, MTMAA moved again. Buildings come and buildings go in the big city, and we were allowed the use of the Toronto Firefighters Association meeting hall at 39 Commissioners Street. Meetings were held on the former apparatus bay of Fire Hall #30 \u2013 an old single-bay firehall active until 1980. The 1990s were interesting and turbulent times for the Fire Service in Toronto. 1998 saw the amalgamation of the Toronto Fire Department with it\u2019s five suburban counterparts. Metro Toronto was no more, so MTMAA became GTMAA \u2013 the Greater Toronto Multiple Alarm Association. The canteen service (now called Support 7) was expanded westward from Scarborough into the new City of Toronto."), Object(external_preact_["h"])("p", null, "Over the years, GTMAA has grown to about 40 members and twice as many subscribers. While many have moved on, new members are continuously attracted to our ideas of fellowship and inclusiveness. Our friends and alumni often walk through the door unannounced, always welcome from as far afield as the United States, Europe, and Asia.")), Object(external_preact_["h"])("section", {
    class: cx(about_us_style.section, about_us_style.group, about_us_style.trio)
  }, Object(external_preact_["h"])("img", {
    class: cx(about_us_style.col, about_us_style.span_1_of_3),
    src: "/assets/people/gary-and-og-buffs-pose-with-old-canteen.gif"
  }), Object(external_preact_["h"])("img", {
    class: cx(about_us_style.col, about_us_style.span_1_of_3),
    src: "/assets/people/scarborough-photo-tour-1977.jpg"
  }), Object(external_preact_["h"])("img", {
    class: cx(about_us_style.col, about_us_style.span_1_of_3),
    src: "/assets/people/delivery-of-old-support-7-dec-1996.jpg"
  })), Object(external_preact_["h"])("section", null, Object(external_preact_["h"])("h2", null, "What is a Fire Buff?"), Object(external_preact_["h"])("p", null, "In general terms, a \u201Cbuff\u201D is defined as anyone with an intense interest or passion in virtually any subject. But did you know the very origin of the word \u201Cbuff\u201D can be traced to the fire service? More than a century ago as the legend goes, civilian supporters of the New York City Fire Department were frequently seen at extra-alarm blazes regardless of time or temperature. Standing on the sidewalk watching their helmeted heroes hard at work, these well-to-do citizens were conspicuous in their (expensive) buffalo-hide robes or coats. Hence their nickname \u201Cthe buffaloes\u201D \u2013 inevitably short-formed to \u201Cbuffs\u201D."), Object(external_preact_["h"])("p", null, "A fire buff, therefore, is a person with an all-consuming interest in the fire service. Mostly civilians, they are ardent admirers and enthusiastic supporters of all firefighters and the job they do. More than a few firefighters \u2014 professional and volunteer \u2013 are also avid fire buffs in their off-duty hours."), Object(external_preact_["h"])("p", null, "\u201CFires to us are not mere spectacles\u201D Baltimore fire buff Karl Detzer wrote many years ago. \u201CThey are demonstrations of strategy and tactics, for behind the apparent confusion at any working fire there is generalship. A real buff can tell at a glance just how the battle lines are drawn. The placement of hose lines and ladders, the use of high-pressure turrets and water towers, the location of windows being smashed with axes \u2013 all these are clues as to what kind of fire it is, where it is centred and how the job of extinguishing the blaze is progressing\u201D"), Object(external_preact_["h"])("p", null, "Fire buffing has, in many respects, the same connotations as sports fans supporting their local teams. Fire buffs are basically eager students of the science of firefighting with a parallel interest in a host of other activities, such as compiling fire department histories; photographing apparatus, stations, and fires; building model fire engines; monitoring radio scanners; and collecting/trading patches."), Object(external_preact_["h"])("p", null, "Courtesy Walt McCall \u2013 fire buff, author, and historian from Windsor, ON")), Object(external_preact_["h"])("section", {
    class: cx(about_us_style.section, about_us_style.group)
  }, Object(external_preact_["h"])("img", {
    class: cx(about_us_style.col, about_us_style.span_1_of_3),
    src: "/assets/apparatus/old-support-7-at-canada-day-parade_thumb.jpg"
  }), Object(external_preact_["h"])("img", {
    class: cx(about_us_style.col, about_us_style.span_1_of_3),
    src: "/assets/people/firefighters-at-100-echo-point-incident_thumb.jpg"
  }), Object(external_preact_["h"])("img", {
    class: cx(about_us_style.col, about_us_style.span_1_of_3),
    src: "/assets/people/2012-ifba-convention.jpg"
  })), Object(external_preact_["h"])("section", null, Object(external_preact_["h"])("h2", null, "Affiliations"), Object(external_preact_["h"])("img", {
    class: about_us_style.ifbaCrest,
    src: "/assets/ifba-crest.png"
  }), Object(external_preact_["h"])("p", null, "The GTMAA is a proud member of the ", Object(external_preact_["h"])("a", {
    href: "https://ifba.org"
  }, "International Fire Buff Associates (IFBA)"), ", an organization formed to strengthen the bond among independent groups of fire buffs. The official mission of the IFBA is \u201Cto serve as a common ground for Fire Buffs, active in promoting the general welfare of Fire Departments, allied emergency services, their officers and members.\u201D"), Object(external_preact_["h"])("p", null, "The IFBA was founded at the International Association of Fire Chiefs convention held in Toronto in 1953. Members of the GTMAA have had the distinction of serving among the highest levels of the IFBA Executive Office and frequently attend annual IFBA conventions held across North America. Thanks to the hard work of our membership, the annual convention returned to Toronto in 2012 with the GTMAA serving as host club.")));
};
/* harmony default export */ var about_us = (about_us_AboutUs);
// CONCATENATED MODULE: ./routes/canteen/style.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var canteen_style = ({"section":"section__eu8ro","col":"col__2xwdI","group":"group__z2Roe","span_3_of_3":"span_3_of_3__O2Apn","span_2_of_3":"span_2_of_3__Xm2QC","span_1_of_3":"span_1_of_3__L6S5I","span_2_of_2":"span_2_of_2__CUdi7","span_1_of_2":"span_1_of_2__EGYsk","canteen":"canteen__p4+p9"});
// CONCATENATED MODULE: ./routes/canteen/index.tsx




var canteen_Canteen = function Canteen() {
  return Object(external_preact_["h"])("div", {
    class: canteen_style.canteen
  }, Object(external_preact_["h"])(HelmetExport, null, Object(external_preact_["h"])("title", null, "Greater Toronto Multiple Alarm Association - Canteen")), Object(external_preact_["h"])("h1", null, "CANTEEN"), Object(external_preact_["h"])("div", {
    class: cx(canteen_style.section, canteen_style.group)
  }, Object(external_preact_["h"])("img", {
    class: cx(canteen_style.col, canteen_style.span_1_of_2),
    src: "/assets/apparatus/support-7_thumb.jpg"
  }), Object(external_preact_["h"])("img", {
    class: cx(canteen_style.col, canteen_style.span_1_of_2),
    src: "/assets/apparatus/support-7-operating-side_thumb.jpg"
  })), Object(external_preact_["h"])("section", null, Object(external_preact_["h"])("p", null, "It comes as no surprise that firefighters must undergo intense, physically demanding conditions while working \u2018on the job\u2019. The call for service may came through at any hour of the day or night, often without warning. The purpose of a mobile canteen unit is to provide firefighters with an opportunity for rehydration and rest, allowing quick recovery of work capacity. Though the GTMAA has operated a canteen service for many decades, the importance of fireground rehab was brought to the forefront when it became a formalized standard (NFPA 1584) for fire departments in 2008."), Object(external_preact_["h"])("p", null, "Our current rehab vehicle, Support 7, is a 2021 Freightliner MT-55 upfitted by PK Van Bodies of Oshawa. Its namesake evolved from the former Scarborough station that it was originally assigned to, Station #7 at 740 Markham Road \u2013 now known as Station 231. The truck features a full-size fridge, microwave, and a pair of Bunn commercial coffee-makers. It is fully stocked with sports drinks, bottled water, hot beverages, and snacks."), Object(external_preact_["h"])("p", null, "The truck is currently owned and maintained by Toronto Fire Services. Financial support for rehab supplies such as snacks and drinks is provided by the Toronto Professional Fire Fighters\u2019 Association Local 3888.")), Object(external_preact_["h"])("section", null, Object(external_preact_["h"])("h2", null, "Requesting Support 7"), Object(external_preact_["h"])("h3", null, "AT AN OFFICIAL EMERGENCY SCENE"), Object(external_preact_["h"])("p", null, "Support 7 is paged out via the Toronto Fire Services Communication Centre. Our first run area is primarily in North and East Commands. Please have the Incident Commander contact Toronto Fire to request the services of a canteen. There are volunteers on call 24/7."), Object(external_preact_["h"])("h3", null, "FOR A PUBLIC RELATIONS or TRAINING EVENT"), Object(external_preact_["h"])("p", null, "The designated event coordinator should place a request with needs and other pertinent details at least 2-3 weeks in advance. Final approval will be determined by TFS and the GTMAA Executive Board. Requests can be made via email to ", Object(external_preact_["h"])("a", {
    href: "mailto:gtmaa1975@gmail.com"
  }, "gtmaa1975@gmail.com"))), Object(external_preact_["h"])("section", null, Object(external_preact_["h"])("h2", null, "Retired Units"), Object(external_preact_["h"])("div", {
    class: cx(canteen_style.section, canteen_style.group)
  }, Object(external_preact_["h"])("img", {
    class: cx(canteen_style.col, canteen_style.span_1_of_3),
    src: "/assets/apparatus/old-support-7-operating-side_thumb.jpg"
  }), Object(external_preact_["h"])("p", {
    class: cx(canteen_style.col, canteen_style.span_2_of_3)
  }, "Delivered December 16, 1996 to much fan-fare, this GMC Step Van was the first purpose-built canteen operated by the club. Specifically designed to get firefighters inside and out of the elements, it featured state-of-the-art canteen equipment of its era, complete with air conditioning, a 5 kW generator, portable lights, and a long benched seating area for all-season rehab. Upfitting was performed by PK Van Bodies of Oshawa. The unit was retired from front-line service in September 2021 after a quarter century of use.")), Object(external_preact_["h"])("div", {
    class: cx(canteen_style.section, canteen_style.group)
  }, Object(external_preact_["h"])("img", {
    class: cx(canteen_style.col, canteen_style.span_1_of_3),
    src: "/assets/apparatus/SFDSUN1.jpg"
  }), Object(external_preact_["h"])("p", {
    class: cx(canteen_style.col, canteen_style.span_2_of_3)
  }, "In 1986, through the goodwill of Scarborough\u2019s Fire Chief Bill Wretham, the original canteen truck was replaced with a surplus 1978 GMC mechanics van. The canteen truck was christened \u2018Support Unit #1\u2019 (or SUN 1) and was painted yellow like all other Scarborough apparatus from that era. MTMAA member Bob Viel directed the interior remodeling of this vehicle to make the best use of its space.")), Object(external_preact_["h"])("div", {
    class: cx(canteen_style.section, canteen_style.group)
  }, Object(external_preact_["h"])("img", {
    class: cx(canteen_style.col, canteen_style.span_1_of_3),
    src: "/assets/apparatus/1977-canteen.jpg"
  }), Object(external_preact_["h"])("p", {
    class: cx(canteen_style.col, canteen_style.span_2_of_3)
  }, "This is the rig that started it all \u2013 a 1963 Ford Vanette delivery van donated by the the Carling Brewing Company. The canteen was funded by the Scarborough Fire Fighter\u2019s Association Local 626. In 1977 it was already past its prime, but it still provided the M.T.M.A.A. and Scarborough firefighters with almost 10 years of faithful service."))));
};
/* harmony default export */ var canteen = (canteen_Canteen);
// CONCATENATED MODULE: ./routes/membership/style.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var membership_style = ({"section":"section__erSBq","col":"col__-Jj8I","group":"group__I+V9V","span_3_of_3":"span_3_of_3__02D2e","span_2_of_3":"span_2_of_3__WU9P0","span_1_of_3":"span_1_of_3__UIFdy","span_2_of_2":"span_2_of_2__yP2fi","span_1_of_2":"span_1_of_2__+ezQd","membership":"membership__Qpnqm"});
// CONCATENATED MODULE: ./routes/membership/index.tsx




var membership_Membership = function Membership() {
  return Object(external_preact_["h"])("div", {
    class: membership_style.membership
  }, Object(external_preact_["h"])(HelmetExport, null, Object(external_preact_["h"])("title", null, "Greater Toronto Multiple Alarm Association - Membership")), Object(external_preact_["h"])("h1", null, "MEMBERSHIP"), Object(external_preact_["h"])("div", {
    class: cx(membership_style.section, membership_style.group)
  }, Object(external_preact_["h"])("div", {
    class: cx(membership_style.col, membership_style.span_2_of_3)
  }, Object(external_preact_["h"])("p", null, "The lifeblood of The Greater Toronto Multiple Alarm Association is it\u2019s members. Since it\u2019s inception in 1975, the GTMAA has had the privilege to include among it\u2019s membership more than 100 men and women who, together, have contributed tens of thousands of volunteer hours giving something back to the community in which they live."), Object(external_preact_["h"])("p", null, "Our members have always come from all walks of life. All with varied interests in the fire service \u2013 whether it be volunteering on the Support 7 Canteen, taking fire photographs, listening to radio scanners, or simply coming out to our meetings to talk about what\u2019s new in the fire service. Persons of all ages, including those belonging to other public service organizations, are always welcome.")), Object(external_preact_["h"])("img", {
    class: cx(membership_style.col, membership_style.span_1_of_3),
    src: "/assets/people/members-and-canteen-at-station-221-opening_thumb.jpg"
  })), Object(external_preact_["h"])("section", null, Object(external_preact_["h"])("div", {
    class: cx(membership_style.section, membership_style.group)
  }, Object(external_preact_["h"])("img", {
    class: cx(membership_style.col, membership_style.span_1_of_3),
    src: "/assets/people/carolyn-and-jen-at-mississauga-call_thumb.jpg"
  }), Object(external_preact_["h"])("div", {
    class: cx(membership_style.col, membership_style.span_2_of_3)
  }, Object(external_preact_["h"])("h2", null, "Application process"), Object(external_preact_["h"])("p", null, "The members of the Greater Toronto Multiple Alarm Association take their membership seriously. Those persons believing that they may wish to become members in GTMAA are invited to join us at our regular monthly meetings to see what we are all about. A probationary membership is offered to prospective members after they have satisfied the GTMAA Executive Board of their sincerity and maturity. Full membership may be offered at a later time by the General Membership. All members work hard to uphold our bylaws concerning good conduct.")))));
};
/* harmony default export */ var membership = (membership_Membership);
// CONCATENATED MODULE: ../node_modules/preact-router/match/index.module.js


var index_module_s = ["className", "activeClass", "activeClassName", "path"];
function index_module_l(a) {
  var e = C()[0];
  return a.children({
    url: e.url,
    path: e.path,
    matches: !1 !== preact_router_module_s(e.path || e.url, a.path, {})
  });
}
function index_module_c(l) {
  var c = l.className,
    n = l.activeClass,
    u = l.activeClassName,
    i = l.path,
    p = function (a, t) {
      if (null == a) return {};
      var r,
        e,
        s = {},
        l = Object.keys(a);
      for (e = 0; e < l.length; e++) t.indexOf(r = l[e]) >= 0 || (s[r] = a[r]);
      return s;
    }(l, index_module_s),
    h = C()[0],
    f = i && h.path && preact_router_module_s(h.path, i, {}) || preact_router_module_s(h.url, p.href, {}),
    o = p.class || c || "",
    m = f && (n || u) || "";
  return p.class = o + (o && m && " ") + m, Object(external_preact_["h"])(preact_router_module_E, p);
}

// CONCATENATED MODULE: ./routes/notfound/style.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var notfound_style = ({"notfound":"notfound__LIgBX"});
// CONCATENATED MODULE: ./routes/notfound/index.tsx




var notfound_Notfound = function Notfound() {
  return Object(external_preact_["h"])("div", {
    class: notfound_style.notfound
  }, Object(external_preact_["h"])(HelmetExport, null, Object(external_preact_["h"])("title", null, "Greater Toronto Multiple Alarm Association - 404 Error")), Object(external_preact_["h"])("h1", null, "Error 404"), Object(external_preact_["h"])("p", null, "That page doesn't exist."), Object(external_preact_["h"])(index_module_c, {
    href: "/"
  }, Object(external_preact_["h"])("h4", null, "Back to Home")));
};
/* harmony default export */ var notfound = (notfound_Notfound);
// CONCATENATED MODULE: ./routes/scanner-feeds/style.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var scanner_feeds_style = ({"scannerFeeds":"scannerFeeds__bg41g","player":"player__3kxIE"});
// CONCATENATED MODULE: ./routes/scanner-feeds/index.tsx



var scanner_feeds_ScannerFeeds = function ScannerFeeds() {
  var bg = 'fafafa';
  var fg = '444';
  if (typeof window !== "undefined") {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var useDarkMode = mq.matches;
    if (useDarkMode) {
      bg = '121212';
      fg = 'eee';
    }
  }
  return Object(external_preact_["h"])("div", {
    class: scanner_feeds_style.scannerFeeds
  }, Object(external_preact_["h"])(HelmetExport, null, Object(external_preact_["h"])("title", null, "Greater Toronto Multiple Alarm Association - Scanner Feeds")), Object(external_preact_["h"])("h1", null, "TORONTO FIRE SCANNER FEEDS"), Object(external_preact_["h"])("p", null, "This feed provides a live stream of TFS radio traffic for South Command and the Automated Dispatch channel."), Object(external_preact_["h"])("section", null, Object(external_preact_["h"])("h2", null, "Toronto Fire South Command and Automated Dispatch"), Object(external_preact_["h"])("iframe", {
    class: scanner_feeds_style.player,
    src: "https://api.broadcastify.com/embed/player/?key=61000615&feedId=3140&html5=1&stats=1&as=1&bg=".concat(bg, "&fg=").concat(fg),
    frameBorder: "0"
  }, "Your browser does not support iFrames.")));
};
/* harmony default export */ var scanner_feeds = (scanner_feeds_ScannerFeeds);
// CONCATENATED MODULE: ./routes/shift-calendar/style.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var shift_calendar_style = ({"shift":"shift__0+O2-","cal":"cal__KIe-8"});
// CONCATENATED MODULE: ./routes/shift-calendar/index.tsx



var shift_calendar_ShiftCalendar = function ShiftCalendar() {
  return Object(external_preact_["h"])("div", {
    class: shift_calendar_style.shift
  }, Object(external_preact_["h"])(HelmetExport, null, Object(external_preact_["h"])("title", null, "Greater Toronto Multiple Alarm Association - Shift Calendar")), Object(external_preact_["h"])("h1", null, "TORONTO FIRE SHIFT CALENDAR"), Object(external_preact_["h"])("p", null, "The Toronto Fire Services Suppression Division is divided into four platoons, each working a 24-hour shift. Shift rotation is staggered over twenty-eight days as depicted in the below schedule provided by the Toronto Professional Firefighters Association. The staggered rotation allows each platoon to have two complete weekends off per month. Shift change occurs at 07:00 hrs each morning."), Object(external_preact_["h"])("img", {
    class: shift_calendar_style.cal,
    src: "/assets/shift-calendars/2026.jpg",
    alt: "2026 Toronto Fire Services shift calendar"
  }));
};
/* harmony default export */ var shift_calendar = (shift_calendar_ShiftCalendar);
// CONCATENATED MODULE: ./routes/stations/style.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var stations_style = ({"stations":"stations__IEPzX","map":"map__T3vkp"});
// CONCATENATED MODULE: ./routes/stations/index.tsx



var stations_Stations = function Stations() {
  return Object(external_preact_["h"])("div", {
    class: stations_style.stations
  }, Object(external_preact_["h"])(HelmetExport, null, Object(external_preact_["h"])("title", null, "Greater Toronto Multiple Alarm Association - Station Map")), Object(external_preact_["h"])("h1", null, "TORONTO FIRE STATION MAP"), Object(external_preact_["h"])("iframe", {
    title: "Fire Stations in Toronto",
    class: stations_style.map,
    src: "https://www.google.com/maps/d/u/1/embed?mid=1iuypwfDOQwGxeCONOwVxQ_8j0nQ&z=11",
    frameBorder: "0"
  }, "Your browser does not support iFrames."));
};
/* harmony default export */ var stations = (stations_Stations);
// CONCATENATED MODULE: ./components/header/style.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var header_style = ({"header":"header__DTK6R","crest":"crest__uXn2h","active":"active__DToWY","menuIcon":"menuIcon__Q3qA4","open":"open__e3V+P"});
// CONCATENATED MODULE: ./components/header/index.tsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var header_Header = function Header() {
  var _useState = Object(hooks_module["k" /* useState */])(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var toggle = Object(hooks_module["a" /* useCallback */])(function () {
    return setOpen(!open);
  }, [open]);
  return Object(external_preact_["h"])("header", {
    class: header_style.header
  }, Object(external_preact_["h"])(HelmetExport, null, Object(external_preact_["h"])("title", null, "Greater Toronto Multiple Alarm Association")), Object(external_preact_["h"])("h1", null, "GTMAA"), Object(external_preact_["h"])("img", {
    class: header_style.crest,
    src: "/assets/icons/apple-touch-icon.png"
  }), Object(external_preact_["h"])("div", {
    class: header_style.menuIcon,
    onClick: toggle
  }, open ? Object(external_preact_["h"])("img", {
    src: "/assets/close-menu-icon.svg"
  }) : Object(external_preact_["h"])("img", {
    src: "/assets/hamburger-menu.icon.svg"
  })), Object(external_preact_["h"])("nav", {
    class: open ? header_style.open : ""
  }, Object(external_preact_["h"])(index_module_c, {
    activeClassName: header_style.active,
    onClick: toggle,
    href: "/"
  }, "Home"), Object(external_preact_["h"])(index_module_c, {
    activeClassName: header_style.active,
    onClick: toggle,
    href: "/about-us"
  }, "About"), Object(external_preact_["h"])(index_module_c, {
    activeClassName: header_style.active,
    onClick: toggle,
    href: "/canteen"
  }, "Canteen"), Object(external_preact_["h"])(index_module_c, {
    activeClassName: header_style.active,
    onClick: toggle,
    href: "/membership"
  }, "Membership"), Object(external_preact_["h"])(index_module_c, {
    activeClassName: header_style.active,
    onClick: toggle,
    href: "/live-feed"
  }, "Scanner Feeds"), Object(external_preact_["h"])(index_module_c, {
    activeClassName: header_style.active,
    onClick: toggle,
    href: "/shift-calendar"
  }, "Shift Calendar"), Object(external_preact_["h"])(index_module_c, {
    activeClassName: header_style.active,
    onClick: toggle,
    href: "/stations"
  }, "Stations")));
};
/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./components/footer/style.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var footer_style = ({"footer":"footer__kmcya","socialLink":"socialLink__DgUVN"});
// CONCATENATED MODULE: ./components/footer/index.tsx



var footer_Footer = function Footer() {
  return Object(external_preact_["h"])("footer", {
    class: footer_style.footer
  }, Object(external_preact_["h"])("a", {
    class: cx(footer_style.socialLink, footer_style.grow),
    href: "https://instagram.com/gtmaa.sup7"
  }, Object(external_preact_["h"])("i", {
    class: "fab fa-instagram"
  })), Object(external_preact_["h"])("a", {
    class: cx(footer_style.socialLink, footer_style.grow),
    href: "https://fb.com/gtmaa"
  }, Object(external_preact_["h"])("i", {
    class: "fab fa-facebook-square"
  })), Object(external_preact_["h"])("a", {
    class: cx(footer_style.socialLink, footer_style.grow),
    href: "https://twitter.com/gtmaa"
  }, Object(external_preact_["h"])("i", {
    class: "fab fa-twitter-square"
  })), Object(external_preact_["h"])("a", {
    class: cx(footer_style.socialLink, footer_style.grow),
    href: "mailto:gtmaa1975@gmail.com"
  }, Object(external_preact_["h"])("i", {
    class: "far fa-envelope"
  })));
};
/* harmony default export */ var footer = (footer_Footer);
// CONCATENATED MODULE: ./components/app.tsx
function app_slicedToArray(arr, i) { return app_arrayWithHoles(arr) || app_iterableToArrayLimit(arr, i) || app_unsupportedIterableToArray(arr, i) || app_nonIterableRest(); }
function app_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function app_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return app_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return app_arrayLikeToArray(o, minLen); }
function app_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function app_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function app_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var app_App = function App() {
  var _useState = Object(hooks_module["k" /* useState */])(0),
    _useState2 = app_slicedToArray(_useState, 2),
    headerKey = _useState2[0],
    setHeaderKey = _useState2[1];
  return Object(external_preact_["h"])("div", {
    id: "preact_root"
  }, Object(external_preact_["h"])(header, {
    key: headerKey
  }), Object(external_preact_["h"])(D, {
    onChange: function onChange() {
      return setHeaderKey(function (k) {
        return k + 1;
      });
    }
  }, Object(external_preact_["h"])(home, {
    path: "/"
  }), Object(external_preact_["h"])(about_us, {
    path: "/about-us"
  }), Object(external_preact_["h"])(canteen, {
    path: "/canteen"
  }), Object(external_preact_["h"])(membership, {
    path: "/membership"
  }), Object(external_preact_["h"])(scanner_feeds, {
    path: "/live-feed"
  }), Object(external_preact_["h"])(shift_calendar, {
    path: "/shift-calendar"
  }), Object(external_preact_["h"])(stations, {
    path: "/stations"
  }), Object(external_preact_["h"])(notfound, {
    default: true
  })), Object(external_preact_["h"])(footer, null));
};
/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./index.ts


/* harmony default export */ var index = __webpack_exports__["default"] = (app);

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map