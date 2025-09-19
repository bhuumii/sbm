var u = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var E = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), $ = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), k = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), C = Symbol.iterator;
function x(e) {
  return e === null || typeof e != "object" ? null : (e = C && e[C] || e["@@iterator"], typeof e == "function" ? e : null);
}
var O = {
  isMounted: function() {
    return !1;
  },
  enqueueForceUpdate: function() {
  },
  enqueueReplaceState: function() {
  },
  enqueueSetState: function() {
  }
}, g = Object.assign, P = {};
function v(e, t, r) {
  this.props = e, this.context = t, this.refs = P, this.updater = r || O;
}
v.prototype.isReactComponent = {};
v.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
v.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function H() {
}
H.prototype = v.prototype;
function y(e, t, r) {
  this.props = e, this.context = t, this.refs = P, this.updater = r || O;
}
var R = y.prototype = new H();
R.constructor = y;
g(R, v.prototype);
R.isPureReactComponent = !0;
var d = Array.isArray, i = { H: null, A: null, T: null, S: null, V: null }, N = Object.prototype.hasOwnProperty;
function m(e, t, r, n, s, f) {
  return r = f.ref, {
    $$typeof: E,
    type: e,
    key: t,
    ref: r !== void 0 ? r : null,
    props: f
  };
}
function q(e, t) {
  return m(
    e.type,
    t,
    void 0,
    void 0,
    void 0,
    e.props
  );
}
function T(e) {
  return typeof e == "object" && e !== null && e.$$typeof === E;
}
function z(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(r) {
    return t[r];
  });
}
var S = /\/+/g;
function l(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? z("" + e.key) : t.toString(36);
}
function A() {
}
function G(e) {
  switch (e.status) {
    case "fulfilled":
      return e.value;
    case "rejected":
      throw e.reason;
    default:
      switch (typeof e.status == "string" ? e.then(A, A) : (e.status = "pending", e.then(
        function(t) {
          e.status === "pending" && (e.status = "fulfilled", e.value = t);
        },
        function(t) {
          e.status === "pending" && (e.status = "rejected", e.reason = t);
        }
      )), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
      }
  }
  throw e;
}
function p(e, t, r, n, s) {
  var f = typeof e;
  (f === "undefined" || f === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (f) {
      case "bigint":
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case E:
          case I:
            o = !0;
            break;
          case h:
            return o = e._init, p(
              o(e._payload),
              t,
              r,
              n,
              s
            );
        }
    }
  if (o)
    return s = s(e), o = n === "" ? "." + l(e, 0) : n, d(s) ? (r = "", o != null && (r = o.replace(S, "$&/") + "/"), p(s, t, r, "", function(j) {
      return j;
    })) : s != null && (T(s) && (s = q(
      s,
      r + (s.key == null || e && e.key === s.key ? "" : ("" + s.key).replace(
        S,
        "$&/"
      ) + "/") + o
    )), t.push(s)), 1;
  o = 0;
  var a = n === "" ? "." : n + ":";
  if (d(e))
    for (var c = 0; c < e.length; c++)
      n = e[c], f = a + l(n, c), o += p(
        n,
        t,
        r,
        f,
        s
      );
  else if (c = x(e), typeof c == "function")
    for (e = c.call(e), c = 0; !(n = e.next()).done; )
      n = n.value, f = a + l(n, c++), o += p(
        n,
        t,
        r,
        f,
        s
      );
  else if (f === "object") {
    if (typeof e.then == "function")
      return p(
        G(e),
        t,
        r,
        n,
        s
      );
    throw t = String(e), Error(
      "Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."
    );
  }
  return o;
}
function _(e, t, r) {
  if (e == null) return e;
  var n = [], s = 0;
  return p(e, n, "", "", function(f) {
    return t.call(r, f, s++);
  }), n;
}
function K(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(
      function(r) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
      },
      function(r) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
      }
    ), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var w = typeof reportError == "function" ? reportError : function(e) {
  if (typeof window == "object" && typeof window.ErrorEvent == "function") {
    var t = new window.ErrorEvent("error", {
      bubbles: !0,
      cancelable: !0,
      message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
      error: e
    });
    if (!window.dispatchEvent(t)) return;
  } else if (typeof process == "object" && typeof process.emit == "function") {
    process.emit("uncaughtException", e);
    return;
  }
  console.error(e);
};
function W() {
}
var B = u.Children = {
  map: _,
  forEach: function(e, t, r) {
    _(
      e,
      function() {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function(e) {
    var t = 0;
    return _(e, function() {
      t++;
    }), t;
  },
  toArray: function(e) {
    return _(e, function(t) {
      return t;
    }) || [];
  },
  only: function(e) {
    if (!T(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  }
}, Q = u.Component = v, V = u.Fragment = $, X = u.Profiler = L, Z = u.PureComponent = y, J = u.StrictMode = M, F = u.Suspense = b, ee = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, te = u.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function(e) {
    return i.H.useMemoCache(e);
  }
}, re = u.cache = function(e) {
  return function() {
    return e.apply(null, arguments);
  };
}, ne = u.cloneElement = function(e, t, r) {
  if (e == null)
    throw Error(
      "The argument must be a React element, but you passed " + e + "."
    );
  var n = g({}, e.props), s = e.key, f = void 0;
  if (t != null)
    for (o in t.ref !== void 0 && (f = void 0), t.key !== void 0 && (s = "" + t.key), t)
      !N.call(t, o) || o === "key" || o === "__self" || o === "__source" || o === "ref" && t.ref === void 0 || (n[o] = t[o]);
  var o = arguments.length - 2;
  if (o === 1) n.children = r;
  else if (1 < o) {
    for (var a = Array(o), c = 0; c < o; c++)
      a[c] = arguments[c + 2];
    n.children = a;
  }
  return m(e.type, s, void 0, void 0, f, n);
}, ue = u.createContext = function(e) {
  return e = {
    $$typeof: Y,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  }, e.Provider = e, e.Consumer = {
    $$typeof: U,
    _context: e
  }, e;
}, oe = u.createElement = function(e, t, r) {
  var n, s = {}, f = null;
  if (t != null)
    for (n in t.key !== void 0 && (f = "" + t.key), t)
      N.call(t, n) && n !== "key" && n !== "__self" && n !== "__source" && (s[n] = t[n]);
  var o = arguments.length - 2;
  if (o === 1) s.children = r;
  else if (1 < o) {
    for (var a = Array(o), c = 0; c < o; c++)
      a[c] = arguments[c + 2];
    s.children = a;
  }
  if (e && e.defaultProps)
    for (n in o = e.defaultProps, o)
      s[n] === void 0 && (s[n] = o[n]);
  return m(e, f, void 0, void 0, null, s);
}, se = u.createRef = function() {
  return { current: null };
}, ie = u.forwardRef = function(e) {
  return { $$typeof: D, render: e };
}, fe = u.isValidElement = T, ce = u.lazy = function(e) {
  return {
    $$typeof: h,
    _payload: { _status: -1, _result: e },
    _init: K
  };
}, ae = u.memo = function(e, t) {
  return {
    $$typeof: k,
    type: e,
    compare: t === void 0 ? null : t
  };
}, pe = u.startTransition = function(e) {
  var t = i.T, r = {};
  i.T = r;
  try {
    var n = e(), s = i.S;
    s !== null && s(r, n), typeof n == "object" && n !== null && typeof n.then == "function" && n.then(W, w);
  } catch (f) {
    w(f);
  } finally {
    i.T = t;
  }
}, ve = u.unstable_useCacheRefresh = function() {
  return i.H.useCacheRefresh();
}, _e = u.use = function(e) {
  return i.H.use(e);
}, le = u.useActionState = function(e, t, r) {
  return i.H.useActionState(e, t, r);
}, Ee = u.useCallback = function(e, t) {
  return i.H.useCallback(e, t);
}, ye = u.useContext = function(e) {
  return i.H.useContext(e);
}, Re = u.useDebugValue = function() {
}, me = u.useDeferredValue = function(e, t) {
  return i.H.useDeferredValue(e, t);
}, Te = u.useEffect = function(e, t, r) {
  var n = i.H;
  if (typeof r == "function")
    throw Error(
      "useEffect CRUD overload is not enabled in this build of React."
    );
  return n.useEffect(e, t);
}, Ce = u.useId = function() {
  return i.H.useId();
}, de = u.useImperativeHandle = function(e, t, r) {
  return i.H.useImperativeHandle(e, t, r);
}, Se = u.useInsertionEffect = function(e, t) {
  return i.H.useInsertionEffect(e, t);
}, Ae = u.useLayoutEffect = function(e, t) {
  return i.H.useLayoutEffect(e, t);
}, we = u.useMemo = function(e, t) {
  return i.H.useMemo(e, t);
}, he = u.useOptimistic = function(e, t) {
  return i.H.useOptimistic(e, t);
}, Oe = u.useReducer = function(e, t, r) {
  return i.H.useReducer(e, t, r);
}, ge = u.useRef = function(e) {
  return i.H.useRef(e);
}, Pe = u.useState = function(e) {
  return i.H.useState(e);
}, He = u.useSyncExternalStore = function(e, t, r) {
  return i.H.useSyncExternalStore(
    e,
    t,
    r
  );
}, Ne = u.useTransition = function() {
  return i.H.useTransition();
}, je = u.version = "19.1.0";
export {
  B as Children,
  Q as Component,
  V as Fragment,
  X as Profiler,
  Z as PureComponent,
  J as StrictMode,
  F as Suspense,
  ee as __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  te as __COMPILER_RUNTIME,
  re as cache,
  ne as cloneElement,
  ue as createContext,
  oe as createElement,
  se as createRef,
  u as default,
  ie as forwardRef,
  fe as isValidElement,
  ce as lazy,
  ae as memo,
  pe as startTransition,
  ve as unstable_useCacheRefresh,
  _e as use,
  le as useActionState,
  Ee as useCallback,
  ye as useContext,
  Re as useDebugValue,
  me as useDeferredValue,
  Te as useEffect,
  Ce as useId,
  de as useImperativeHandle,
  Se as useInsertionEffect,
  Ae as useLayoutEffect,
  we as useMemo,
  he as useOptimistic,
  Oe as useReducer,
  ge as useRef,
  Pe as useState,
  He as useSyncExternalStore,
  Ne as useTransition,
  je as version
};
