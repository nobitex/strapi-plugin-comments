import { ad as en, ae as rn, af as wr, ag as it, p as tn, ah as nn, ai as Rr, l as Tr, aj as an, ak as ee, al as V, F as on, am as ln, T as un, e as Cr } from "./index-Hqosm4sa.mjs";
import * as oe from "react";
import { useState as ar, useEffect as cn, useMemo as lt, createContext as fn } from "react";
import { jsx as _, jsxs as Ee } from "react/jsx-runtime";
import { useQuery as sn, QueryClientProvider as pn, QueryClient as yn } from "@tanstack/react-query";
import { getFetchClient as dn, useRBAC as mn } from "@strapi/strapi/admin";
import { z as o } from "zod";
const vn = () => {
  const r = () => window.matchMedia("(prefers-color-scheme: dark)").matches, [e, t] = ar();
  return cn(() => {
    const a = r() ? "dark" : "light", i = window.localStorage?.STRAPI_THEME;
    t(i === "system" ? a : i);
  }, []), {
    theme: e === "dark" ? en : rn,
    themeName: e
  };
};
var or = { exports: {} }, b = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function gn() {
  if (_r) return b;
  _r = 1;
  var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, a = r ? Symbol.for("react.strict_mode") : 60108, i = r ? Symbol.for("react.profiler") : 60114, c = r ? Symbol.for("react.provider") : 60109, l = r ? Symbol.for("react.context") : 60110, f = r ? Symbol.for("react.async_mode") : 60111, u = r ? Symbol.for("react.concurrent_mode") : 60111, p = r ? Symbol.for("react.forward_ref") : 60112, y = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, O = r ? Symbol.for("react.block") : 60121, T = r ? Symbol.for("react.fundamental") : 60117, g = r ? Symbol.for("react.responder") : 60118, x = r ? Symbol.for("react.scope") : 60119;
  function P(s) {
    if (typeof s == "object" && s !== null) {
      var F = s.$$typeof;
      switch (F) {
        case e:
          switch (s = s.type, s) {
            case f:
            case u:
            case n:
            case i:
            case a:
            case y:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case l:
                case p:
                case v:
                case h:
                case c:
                  return s;
                default:
                  return F;
              }
          }
        case t:
          return F;
      }
    }
  }
  function $(s) {
    return P(s) === u;
  }
  return b.AsyncMode = f, b.ConcurrentMode = u, b.ContextConsumer = l, b.ContextProvider = c, b.Element = e, b.ForwardRef = p, b.Fragment = n, b.Lazy = v, b.Memo = h, b.Portal = t, b.Profiler = i, b.StrictMode = a, b.Suspense = y, b.isAsyncMode = function(s) {
    return $(s) || P(s) === f;
  }, b.isConcurrentMode = $, b.isContextConsumer = function(s) {
    return P(s) === l;
  }, b.isContextProvider = function(s) {
    return P(s) === c;
  }, b.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }, b.isForwardRef = function(s) {
    return P(s) === p;
  }, b.isFragment = function(s) {
    return P(s) === n;
  }, b.isLazy = function(s) {
    return P(s) === v;
  }, b.isMemo = function(s) {
    return P(s) === h;
  }, b.isPortal = function(s) {
    return P(s) === t;
  }, b.isProfiler = function(s) {
    return P(s) === i;
  }, b.isStrictMode = function(s) {
    return P(s) === a;
  }, b.isSuspense = function(s) {
    return P(s) === y;
  }, b.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === u || s === i || s === a || s === y || s === m || typeof s == "object" && s !== null && (s.$$typeof === v || s.$$typeof === h || s.$$typeof === c || s.$$typeof === l || s.$$typeof === p || s.$$typeof === T || s.$$typeof === g || s.$$typeof === x || s.$$typeof === O);
  }, b.typeOf = P, b;
}
var E = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xr;
function hn() {
  return xr || (xr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, a = r ? Symbol.for("react.strict_mode") : 60108, i = r ? Symbol.for("react.profiler") : 60114, c = r ? Symbol.for("react.provider") : 60109, l = r ? Symbol.for("react.context") : 60110, f = r ? Symbol.for("react.async_mode") : 60111, u = r ? Symbol.for("react.concurrent_mode") : 60111, p = r ? Symbol.for("react.forward_ref") : 60112, y = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, O = r ? Symbol.for("react.block") : 60121, T = r ? Symbol.for("react.fundamental") : 60117, g = r ? Symbol.for("react.responder") : 60118, x = r ? Symbol.for("react.scope") : 60119;
    function P(d) {
      return typeof d == "string" || typeof d == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      d === n || d === u || d === i || d === a || d === y || d === m || typeof d == "object" && d !== null && (d.$$typeof === v || d.$$typeof === h || d.$$typeof === c || d.$$typeof === l || d.$$typeof === p || d.$$typeof === T || d.$$typeof === g || d.$$typeof === x || d.$$typeof === O);
    }
    function $(d) {
      if (typeof d == "object" && d !== null) {
        var De = d.$$typeof;
        switch (De) {
          case e:
            var be = d.type;
            switch (be) {
              case f:
              case u:
              case n:
              case i:
              case a:
              case y:
                return be;
              default:
                var $r = be && be.$$typeof;
                switch ($r) {
                  case l:
                  case p:
                  case v:
                  case h:
                  case c:
                    return $r;
                  default:
                    return De;
                }
            }
          case t:
            return De;
        }
      }
    }
    var s = f, F = u, B = l, M = c, q = e, W = p, K = n, I = v, N = h, G = t, Z = i, j = a, qt = y, Pr = !1;
    function Wt(d) {
      return Pr || (Pr = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Or(d) || $(d) === f;
    }
    function Or(d) {
      return $(d) === u;
    }
    function Gt(d) {
      return $(d) === l;
    }
    function jt(d) {
      return $(d) === c;
    }
    function Vt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }
    function zt(d) {
      return $(d) === p;
    }
    function Ht(d) {
      return $(d) === n;
    }
    function Yt(d) {
      return $(d) === v;
    }
    function Kt(d) {
      return $(d) === h;
    }
    function Qt(d) {
      return $(d) === t;
    }
    function Jt(d) {
      return $(d) === i;
    }
    function Xt(d) {
      return $(d) === a;
    }
    function Zt(d) {
      return $(d) === y;
    }
    E.AsyncMode = s, E.ConcurrentMode = F, E.ContextConsumer = B, E.ContextProvider = M, E.Element = q, E.ForwardRef = W, E.Fragment = K, E.Lazy = I, E.Memo = N, E.Portal = G, E.Profiler = Z, E.StrictMode = j, E.Suspense = qt, E.isAsyncMode = Wt, E.isConcurrentMode = Or, E.isContextConsumer = Gt, E.isContextProvider = jt, E.isElement = Vt, E.isForwardRef = zt, E.isFragment = Ht, E.isLazy = Yt, E.isMemo = Kt, E.isPortal = Qt, E.isProfiler = Jt, E.isStrictMode = Xt, E.isSuspense = Zt, E.isValidElementType = P, E.typeOf = $;
  }()), E;
}
process.env.NODE_ENV === "production" ? or.exports = gn() : or.exports = hn();
var Sn = or.exports, ut = Sn, bn = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, En = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ct = {};
ct[ut.ForwardRef] = bn;
ct[ut.Memo] = En;
function An(r, e, t) {
  if (t === void 0 && (t = Error), !r)
    throw new t(e);
}
var Pn = function(r) {
  process.env.NODE_ENV !== "production" && console.error(r);
}, On = function(r) {
  process.env.NODE_ENV !== "production" && console.warn(r);
}, $n = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Pn,
  onWarn: On
};
function wn(r) {
  An(r, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
wr(wr({}, $n), { textComponent: oe.Fragment });
var mr = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = oe.createContext(null)) : oe.createContext(null);
mr.Consumer;
mr.Provider;
var Rn = mr;
function vr() {
  var r = oe.useContext(Rn);
  return wn(r), r;
}
var ir;
(function(r) {
  r.formatDate = "FormattedDate", r.formatTime = "FormattedTime", r.formatNumber = "FormattedNumber", r.formatList = "FormattedList", r.formatDisplayName = "FormattedDisplayName";
})(ir || (ir = {}));
var lr;
(function(r) {
  r.formatDate = "FormattedDateParts", r.formatTime = "FormattedTimeParts", r.formatNumber = "FormattedNumberParts", r.formatList = "FormattedListParts";
})(lr || (lr = {}));
function ft(r) {
  var e = function(t) {
    var n = vr(), a = t.value, i = t.children, c = it(t, ["value", "children"]), l = typeof a == "string" ? new Date(a || 0) : a, f = r === "formatDate" ? n.formatDateToParts(l, c) : n.formatTimeToParts(l, c);
    return i(f);
  };
  return e.displayName = lr[r], e;
}
function ve(r) {
  var e = function(t) {
    var n = vr(), a = t.value, i = t.children, c = it(
      t,
      ["value", "children"]
    ), l = n[r](a, c);
    if (typeof i == "function")
      return i(l);
    var f = n.textComponent || oe.Fragment;
    return oe.createElement(f, null, l);
  };
  return e.displayName = ir[r], e;
}
ve("formatDate");
ve("formatTime");
ve("formatNumber");
ve("formatList");
ve("formatDisplayName");
ft("formatDate");
ft("formatTime");
const Vi = (r, e = "", t = !0) => {
  const { formatMessage: n } = vr();
  let a = "";
  return typeof r == "string" ? a = r : a = r?.id.toString() || a, n(
    {
      id: `${t ? tn : "app.components"}.${a}`,
      defaultMessage: e
    },
    typeof r == "string" ? void 0 : r?.props
  );
}, st = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED"
}, zi = {
  ...st,
  BLOCKED: "BLOCKED",
  OPEN: "OPEN",
  RESOLVED: "RESOLVED"
};
var Tn = /* @__PURE__ */ ((r) => (r.BAD_LANGUAGE = "BAD_LANGUAGE", r.DISCRIMINATION = "DISCRIMINATION", r.OTHER = "OTHER", r))(Tn || {});
const z = {
  ...st,
  BLOCKED: "BLOCKED",
  OPEN: "OPEN",
  REMOVED: "REMOVED",
  TO_REVIEW: "TO_REVIEW",
  UNKNOWN: "UNKNOWN"
};
var ce = TypeError;
const Cn = {}, _n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cn
}, Symbol.toStringTag, { value: "Module" })), xn = /* @__PURE__ */ nn(_n);
var gr = typeof Map == "function" && Map.prototype, Le = Object.getOwnPropertyDescriptor && gr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Re = gr && Le && typeof Le.get == "function" ? Le.get : null, Ir = gr && Map.prototype.forEach, hr = typeof Set == "function" && Set.prototype, Be = Object.getOwnPropertyDescriptor && hr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Te = hr && Be && typeof Be.get == "function" ? Be.get : null, Nr = hr && Set.prototype.forEach, In = typeof WeakMap == "function" && WeakMap.prototype, se = In ? WeakMap.prototype.has : null, Nn = typeof WeakSet == "function" && WeakSet.prototype, pe = Nn ? WeakSet.prototype.has : null, Fn = typeof WeakRef == "function" && WeakRef.prototype, Fr = Fn ? WeakRef.prototype.deref : null, Mn = Boolean.prototype.valueOf, Dn = Object.prototype.toString, Ln = Function.prototype.toString, Bn = String.prototype.match, Sr = String.prototype.slice, H = String.prototype.replace, Un = String.prototype.toUpperCase, Mr = String.prototype.toLowerCase, pt = RegExp.prototype.test, Dr = Array.prototype.concat, L = Array.prototype.join, kn = Array.prototype.slice, Lr = Math.floor, ur = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ue = Object.getOwnPropertySymbols, cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ie = typeof Symbol == "function" && typeof Symbol.iterator == "object", ye = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ie || !0) ? Symbol.toStringTag : null, yt = Object.prototype.propertyIsEnumerable, Br = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(r) {
  return r.__proto__;
} : null);
function Ur(r, e) {
  if (r === 1 / 0 || r === -1 / 0 || r !== r || r && r > -1e3 && r < 1e3 || pt.call(/e/, e))
    return e;
  var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof r == "number") {
    var n = r < 0 ? -Lr(-r) : Lr(r);
    if (n !== r) {
      var a = String(n), i = Sr.call(e, a.length + 1);
      return H.call(a, t, "$&_") + "." + H.call(H.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return H.call(e, t, "$&_");
}
var fr = xn, kr = fr.custom, qr = vt(kr) ? kr : null, dt = {
  __proto__: null,
  double: '"',
  single: "'"
}, qn = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, Ie = function r(e, t, n, a) {
  var i = t || {};
  if (U(i, "quoteStyle") && !U(dt, i.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (U(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var c = U(i, "customInspect") ? i.customInspect : !0;
  if (typeof c != "boolean" && c !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (U(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (U(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var l = i.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return ht(e, i);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var f = String(e);
    return l ? Ur(e, f) : f;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return l ? Ur(e, u) : u;
  }
  var p = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof n > "u" && (n = 0), n >= p && p > 0 && typeof e == "object")
    return sr(e) ? "[Array]" : "[Object]";
  var y = oa(i, n);
  if (typeof a > "u")
    a = [];
  else if (gt(a, e) >= 0)
    return "[Circular]";
  function m(N, G, Z) {
    if (G && (a = kn.call(a), a.push(G)), Z) {
      var j = {
        depth: i.depth
      };
      return U(i, "quoteStyle") && (j.quoteStyle = i.quoteStyle), r(N, j, n + 1, a);
    }
    return r(N, i, n + 1, a);
  }
  if (typeof e == "function" && !Wr(e)) {
    var h = Qn(e), v = Ae(e, m);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (v.length > 0 ? " { " + L.call(v, ", ") + " }" : "");
  }
  if (vt(e)) {
    var O = ie ? H.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : cr.call(e);
    return typeof e == "object" && !ie ? fe(O) : O;
  }
  if (ta(e)) {
    for (var T = "<" + Mr.call(String(e.nodeName)), g = e.attributes || [], x = 0; x < g.length; x++)
      T += " " + g[x].name + "=" + mt(Wn(g[x].value), "double", i);
    return T += ">", e.childNodes && e.childNodes.length && (T += "..."), T += "</" + Mr.call(String(e.nodeName)) + ">", T;
  }
  if (sr(e)) {
    if (e.length === 0)
      return "[]";
    var P = Ae(e, m);
    return y && !aa(P) ? "[" + pr(P, y) + "]" : "[ " + L.call(P, ", ") + " ]";
  }
  if (jn(e)) {
    var $ = Ae(e, m);
    return !("cause" in Error.prototype) && "cause" in e && !yt.call(e, "cause") ? "{ [" + String(e) + "] " + L.call(Dr.call("[cause]: " + m(e.cause), $), ", ") + " }" : $.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + L.call($, ", ") + " }";
  }
  if (typeof e == "object" && c) {
    if (qr && typeof e[qr] == "function" && fr)
      return fr(e, { depth: p - n });
    if (c !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (Jn(e)) {
    var s = [];
    return Ir && Ir.call(e, function(N, G) {
      s.push(m(G, e, !0) + " => " + m(N, e));
    }), Gr("Map", Re.call(e), s, y);
  }
  if (ea(e)) {
    var F = [];
    return Nr && Nr.call(e, function(N) {
      F.push(m(N, e));
    }), Gr("Set", Te.call(e), F, y);
  }
  if (Xn(e))
    return ke("WeakMap");
  if (ra(e))
    return ke("WeakSet");
  if (Zn(e))
    return ke("WeakRef");
  if (zn(e))
    return fe(m(Number(e)));
  if (Yn(e))
    return fe(m(ur.call(e)));
  if (Hn(e))
    return fe(Mn.call(e));
  if (Vn(e))
    return fe(m(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && e === globalThis || typeof Rr < "u" && e === Rr)
    return "{ [object globalThis] }";
  if (!Gn(e) && !Wr(e)) {
    var B = Ae(e, m), M = Br ? Br(e) === Object.prototype : e instanceof Object || e.constructor === Object, q = e instanceof Object ? "" : "null prototype", W = !M && ye && Object(e) === e && ye in e ? Sr.call(Y(e), 8, -1) : q ? "Object" : "", K = M || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", I = K + (W || q ? "[" + L.call(Dr.call([], W || [], q || []), ": ") + "] " : "");
    return B.length === 0 ? I + "{}" : y ? I + "{" + pr(B, y) + "}" : I + "{ " + L.call(B, ", ") + " }";
  }
  return String(e);
};
function mt(r, e, t) {
  var n = t.quoteStyle || e, a = dt[n];
  return a + r + a;
}
function Wn(r) {
  return H.call(String(r), /"/g, "&quot;");
}
function X(r) {
  return !ye || !(typeof r == "object" && (ye in r || typeof r[ye] < "u"));
}
function sr(r) {
  return Y(r) === "[object Array]" && X(r);
}
function Gn(r) {
  return Y(r) === "[object Date]" && X(r);
}
function Wr(r) {
  return Y(r) === "[object RegExp]" && X(r);
}
function jn(r) {
  return Y(r) === "[object Error]" && X(r);
}
function Vn(r) {
  return Y(r) === "[object String]" && X(r);
}
function zn(r) {
  return Y(r) === "[object Number]" && X(r);
}
function Hn(r) {
  return Y(r) === "[object Boolean]" && X(r);
}
function vt(r) {
  if (ie)
    return r && typeof r == "object" && r instanceof Symbol;
  if (typeof r == "symbol")
    return !0;
  if (!r || typeof r != "object" || !cr)
    return !1;
  try {
    return cr.call(r), !0;
  } catch {
  }
  return !1;
}
function Yn(r) {
  if (!r || typeof r != "object" || !ur)
    return !1;
  try {
    return ur.call(r), !0;
  } catch {
  }
  return !1;
}
var Kn = Object.prototype.hasOwnProperty || function(r) {
  return r in this;
};
function U(r, e) {
  return Kn.call(r, e);
}
function Y(r) {
  return Dn.call(r);
}
function Qn(r) {
  if (r.name)
    return r.name;
  var e = Bn.call(Ln.call(r), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function gt(r, e) {
  if (r.indexOf)
    return r.indexOf(e);
  for (var t = 0, n = r.length; t < n; t++)
    if (r[t] === e)
      return t;
  return -1;
}
function Jn(r) {
  if (!Re || !r || typeof r != "object")
    return !1;
  try {
    Re.call(r);
    try {
      Te.call(r);
    } catch {
      return !0;
    }
    return r instanceof Map;
  } catch {
  }
  return !1;
}
function Xn(r) {
  if (!se || !r || typeof r != "object")
    return !1;
  try {
    se.call(r, se);
    try {
      pe.call(r, pe);
    } catch {
      return !0;
    }
    return r instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Zn(r) {
  if (!Fr || !r || typeof r != "object")
    return !1;
  try {
    return Fr.call(r), !0;
  } catch {
  }
  return !1;
}
function ea(r) {
  if (!Te || !r || typeof r != "object")
    return !1;
  try {
    Te.call(r);
    try {
      Re.call(r);
    } catch {
      return !0;
    }
    return r instanceof Set;
  } catch {
  }
  return !1;
}
function ra(r) {
  if (!pe || !r || typeof r != "object")
    return !1;
  try {
    pe.call(r, pe);
    try {
      se.call(r, se);
    } catch {
      return !0;
    }
    return r instanceof WeakSet;
  } catch {
  }
  return !1;
}
function ta(r) {
  return !r || typeof r != "object" ? !1 : typeof HTMLElement < "u" && r instanceof HTMLElement ? !0 : typeof r.nodeName == "string" && typeof r.getAttribute == "function";
}
function ht(r, e) {
  if (r.length > e.maxStringLength) {
    var t = r.length - e.maxStringLength, n = "... " + t + " more character" + (t > 1 ? "s" : "");
    return ht(Sr.call(r, 0, e.maxStringLength), e) + n;
  }
  var a = qn[e.quoteStyle || "single"];
  a.lastIndex = 0;
  var i = H.call(H.call(r, a, "\\$1"), /[\x00-\x1f]/g, na);
  return mt(i, "single", e);
}
function na(r) {
  var e = r.charCodeAt(0), t = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + Un.call(e.toString(16));
}
function fe(r) {
  return "Object(" + r + ")";
}
function ke(r) {
  return r + " { ? }";
}
function Gr(r, e, t, n) {
  var a = n ? pr(t, n) : L.call(t, ", ");
  return r + " (" + e + ") {" + a + "}";
}
function aa(r) {
  for (var e = 0; e < r.length; e++)
    if (gt(r[e], `
`) >= 0)
      return !1;
  return !0;
}
function oa(r, e) {
  var t;
  if (r.indent === "	")
    t = "	";
  else if (typeof r.indent == "number" && r.indent > 0)
    t = L.call(Array(r.indent + 1), " ");
  else
    return null;
  return {
    base: t,
    prev: L.call(Array(e + 1), t)
  };
}
function pr(r, e) {
  if (r.length === 0)
    return "";
  var t = `
` + e.prev + e.base;
  return t + L.call(r, "," + t) + `
` + e.prev;
}
function Ae(r, e) {
  var t = sr(r), n = [];
  if (t) {
    n.length = r.length;
    for (var a = 0; a < r.length; a++)
      n[a] = U(r, a) ? e(r[a], r) : "";
  }
  var i = typeof Ue == "function" ? Ue(r) : [], c;
  if (ie) {
    c = {};
    for (var l = 0; l < i.length; l++)
      c["$" + i[l]] = i[l];
  }
  for (var f in r)
    U(r, f) && (t && String(Number(f)) === f && f < r.length || ie && c["$" + f] instanceof Symbol || (pt.call(/[^\w$]/, f) ? n.push(e(f, r) + ": " + e(r[f], r)) : n.push(f + ": " + e(r[f], r))));
  if (typeof Ue == "function")
    for (var u = 0; u < i.length; u++)
      yt.call(r, i[u]) && n.push("[" + e(i[u]) + "]: " + e(r[i[u]], r));
  return n;
}
var ia = Ie, la = ce, Ne = function(r, e, t) {
  for (var n = r, a; (a = n.next) != null; n = a)
    if (a.key === e)
      return n.next = a.next, t || (a.next = /** @type {NonNullable<typeof list.next>} */
      r.next, r.next = a), a;
}, ua = function(r, e) {
  if (r) {
    var t = Ne(r, e);
    return t && t.value;
  }
}, ca = function(r, e, t) {
  var n = Ne(r, e);
  n ? n.value = t : r.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: r.next,
    value: t
  };
}, fa = function(r, e) {
  return r ? !!Ne(r, e) : !1;
}, sa = function(r, e) {
  if (r)
    return Ne(r, e, !0);
}, pa = function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new la("Side channel does not contain " + ia(n));
    },
    delete: function(n) {
      var a = e && e.next, i = sa(e, n);
      return i && a && a === i && (e = void 0), !!i;
    },
    get: function(n) {
      return ua(e, n);
    },
    has: function(n) {
      return fa(e, n);
    },
    set: function(n, a) {
      e || (e = {
        next: void 0
      }), ca(
        /** @type {NonNullable<typeof $o>} */
        e,
        n,
        a
      );
    }
  };
  return t;
}, St = Object, ya = Error, da = EvalError, ma = RangeError, va = ReferenceError, ga = SyntaxError, ha = URIError, Sa = Math.abs, ba = Math.floor, Ea = Math.max, Aa = Math.min, Pa = Math.pow, Oa = Math.round, $a = Number.isNaN || function(e) {
  return e !== e;
}, wa = $a, Ra = function(e) {
  return wa(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, Ta = Object.getOwnPropertyDescriptor, Oe = Ta;
if (Oe)
  try {
    Oe([], "length");
  } catch {
    Oe = null;
  }
var bt = Oe, $e = Object.defineProperty || !1;
if ($e)
  try {
    $e({}, "a", { value: 1 });
  } catch {
    $e = !1;
  }
var Ca = $e, qe, jr;
function _a() {
  return jr || (jr = 1, qe = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, t = Symbol("test"), n = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var a = 42;
    e[t] = a;
    for (var i in e)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return !1;
    var c = Object.getOwnPropertySymbols(e);
    if (c.length !== 1 || c[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var l = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(e, t)
      );
      if (l.value !== a || l.enumerable !== !0)
        return !1;
    }
    return !0;
  }), qe;
}
var We, Vr;
function xa() {
  if (Vr) return We;
  Vr = 1;
  var r = typeof Symbol < "u" && Symbol, e = _a();
  return We = function() {
    return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, We;
}
var Ge, zr;
function Et() {
  return zr || (zr = 1, Ge = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ge;
}
var je, Hr;
function At() {
  if (Hr) return je;
  Hr = 1;
  var r = St;
  return je = r.getPrototypeOf || null, je;
}
var Ve, Yr;
function Ia() {
  if (Yr) return Ve;
  Yr = 1;
  var r = "Function.prototype.bind called on incompatible ", e = Object.prototype.toString, t = Math.max, n = "[object Function]", a = function(f, u) {
    for (var p = [], y = 0; y < f.length; y += 1)
      p[y] = f[y];
    for (var m = 0; m < u.length; m += 1)
      p[m + f.length] = u[m];
    return p;
  }, i = function(f, u) {
    for (var p = [], y = u, m = 0; y < f.length; y += 1, m += 1)
      p[m] = f[y];
    return p;
  }, c = function(l, f) {
    for (var u = "", p = 0; p < l.length; p += 1)
      u += l[p], p + 1 < l.length && (u += f);
    return u;
  };
  return Ve = function(f) {
    var u = this;
    if (typeof u != "function" || e.apply(u) !== n)
      throw new TypeError(r + u);
    for (var p = i(arguments, 1), y, m = function() {
      if (this instanceof y) {
        var g = u.apply(
          this,
          a(p, arguments)
        );
        return Object(g) === g ? g : this;
      }
      return u.apply(
        f,
        a(p, arguments)
      );
    }, h = t(0, u.length - p.length), v = [], O = 0; O < h; O++)
      v[O] = "$" + O;
    if (y = Function("binder", "return function (" + c(v, ",") + "){ return binder.apply(this,arguments); }")(m), u.prototype) {
      var T = function() {
      };
      T.prototype = u.prototype, y.prototype = new T(), T.prototype = null;
    }
    return y;
  }, Ve;
}
var ze, Kr;
function Fe() {
  if (Kr) return ze;
  Kr = 1;
  var r = Ia();
  return ze = Function.prototype.bind || r, ze;
}
var He, Qr;
function br() {
  return Qr || (Qr = 1, He = Function.prototype.call), He;
}
var Ye, Jr;
function Pt() {
  return Jr || (Jr = 1, Ye = Function.prototype.apply), Ye;
}
var Na = typeof Reflect < "u" && Reflect && Reflect.apply, Fa = Fe(), Ma = Pt(), Da = br(), La = Na, Ba = La || Fa.call(Da, Ma), Ua = Fe(), ka = ce, qa = br(), Wa = Ba, Ot = function(e) {
  if (e.length < 1 || typeof e[0] != "function")
    throw new ka("a function is required");
  return Wa(Ua, qa, e);
}, Ke, Xr;
function Ga() {
  if (Xr) return Ke;
  Xr = 1;
  var r = Ot, e = bt, t;
  try {
    t = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (c) {
    if (!c || typeof c != "object" || !("code" in c) || c.code !== "ERR_PROTO_ACCESS")
      throw c;
  }
  var n = !!t && e && e(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), a = Object, i = a.getPrototypeOf;
  return Ke = n && typeof n.get == "function" ? r([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return i(l == null ? l : a(l));
    }
  ) : !1, Ke;
}
var Qe, Zr;
function ja() {
  if (Zr) return Qe;
  Zr = 1;
  var r = Et(), e = At(), t = Ga();
  return Qe = r ? function(a) {
    return r(a);
  } : e ? function(a) {
    if (!a || typeof a != "object" && typeof a != "function")
      throw new TypeError("getProto: not an object");
    return e(a);
  } : t ? function(a) {
    return t(a);
  } : null, Qe;
}
var Je, et;
function Va() {
  if (et) return Je;
  et = 1;
  var r = Function.prototype.call, e = Object.prototype.hasOwnProperty, t = Fe();
  return Je = t.call(r, e), Je;
}
var S, za = St, Ha = ya, Ya = da, Ka = ma, Qa = va, le = ga, ae = ce, Ja = ha, Xa = Sa, Za = ba, eo = Ea, ro = Aa, to = Pa, no = Oa, ao = Ra, $t = Function, Xe = function(r) {
  try {
    return $t('"use strict"; return (' + r + ").constructor;")();
  } catch {
  }
}, me = bt, oo = Ca, Ze = function() {
  throw new ae();
}, io = me ? function() {
  try {
    return arguments.callee, Ze;
  } catch {
    try {
      return me(arguments, "callee").get;
    } catch {
      return Ze;
    }
  }
}() : Ze, re = xa()(), R = ja(), lo = At(), uo = Et(), wt = Pt(), ge = br(), ne = {}, co = typeof Uint8Array > "u" || !R ? S : R(Uint8Array), J = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? S : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? S : ArrayBuffer,
  "%ArrayIteratorPrototype%": re && R ? R([][Symbol.iterator]()) : S,
  "%AsyncFromSyncIteratorPrototype%": S,
  "%AsyncFunction%": ne,
  "%AsyncGenerator%": ne,
  "%AsyncGeneratorFunction%": ne,
  "%AsyncIteratorPrototype%": ne,
  "%Atomics%": typeof Atomics > "u" ? S : Atomics,
  "%BigInt%": typeof BigInt > "u" ? S : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? S : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? S : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? S : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Ha,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Ya,
  "%Float16Array%": typeof Float16Array > "u" ? S : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? S : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? S : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? S : FinalizationRegistry,
  "%Function%": $t,
  "%GeneratorFunction%": ne,
  "%Int8Array%": typeof Int8Array > "u" ? S : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? S : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? S : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": re && R ? R(R([][Symbol.iterator]())) : S,
  "%JSON%": typeof JSON == "object" ? JSON : S,
  "%Map%": typeof Map > "u" ? S : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !re || !R ? S : R((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": za,
  "%Object.getOwnPropertyDescriptor%": me,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? S : Promise,
  "%Proxy%": typeof Proxy > "u" ? S : Proxy,
  "%RangeError%": Ka,
  "%ReferenceError%": Qa,
  "%Reflect%": typeof Reflect > "u" ? S : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? S : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !re || !R ? S : R((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? S : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": re && R ? R(""[Symbol.iterator]()) : S,
  "%Symbol%": re ? Symbol : S,
  "%SyntaxError%": le,
  "%ThrowTypeError%": io,
  "%TypedArray%": co,
  "%TypeError%": ae,
  "%Uint8Array%": typeof Uint8Array > "u" ? S : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? S : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? S : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? S : Uint32Array,
  "%URIError%": Ja,
  "%WeakMap%": typeof WeakMap > "u" ? S : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? S : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? S : WeakSet,
  "%Function.prototype.call%": ge,
  "%Function.prototype.apply%": wt,
  "%Object.defineProperty%": oo,
  "%Object.getPrototypeOf%": lo,
  "%Math.abs%": Xa,
  "%Math.floor%": Za,
  "%Math.max%": eo,
  "%Math.min%": ro,
  "%Math.pow%": to,
  "%Math.round%": no,
  "%Math.sign%": ao,
  "%Reflect.getPrototypeOf%": uo
};
if (R)
  try {
    null.error;
  } catch (r) {
    var fo = R(R(r));
    J["%Error.prototype%"] = fo;
  }
var so = function r(e) {
  var t;
  if (e === "%AsyncFunction%")
    t = Xe("async function () {}");
  else if (e === "%GeneratorFunction%")
    t = Xe("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    t = Xe("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = r("%AsyncGeneratorFunction%");
    n && (t = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = r("%AsyncGenerator%");
    a && R && (t = R(a.prototype));
  }
  return J[e] = t, t;
}, rt = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, he = Fe(), Ce = Va(), po = he.call(ge, Array.prototype.concat), yo = he.call(wt, Array.prototype.splice), tt = he.call(ge, String.prototype.replace), _e = he.call(ge, String.prototype.slice), mo = he.call(ge, RegExp.prototype.exec), vo = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, go = /\\(\\)?/g, ho = function(e) {
  var t = _e(e, 0, 1), n = _e(e, -1);
  if (t === "%" && n !== "%")
    throw new le("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && t !== "%")
    throw new le("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return tt(e, vo, function(i, c, l, f) {
    a[a.length] = l ? tt(f, go, "$1") : c || i;
  }), a;
}, So = function(e, t) {
  var n = e, a;
  if (Ce(rt, n) && (a = rt[n], n = "%" + a[0] + "%"), Ce(J, n)) {
    var i = J[n];
    if (i === ne && (i = so(n)), typeof i > "u" && !t)
      throw new ae("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: n,
      value: i
    };
  }
  throw new le("intrinsic " + e + " does not exist!");
}, Er = function(e, t) {
  if (typeof e != "string" || e.length === 0)
    throw new ae("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new ae('"allowMissing" argument must be a boolean');
  if (mo(/^%?[^%]*%?$/, e) === null)
    throw new le("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = ho(e), a = n.length > 0 ? n[0] : "", i = So("%" + a + "%", t), c = i.name, l = i.value, f = !1, u = i.alias;
  u && (a = u[0], yo(n, po([0, 1], u)));
  for (var p = 1, y = !0; p < n.length; p += 1) {
    var m = n[p], h = _e(m, 0, 1), v = _e(m, -1);
    if ((h === '"' || h === "'" || h === "`" || v === '"' || v === "'" || v === "`") && h !== v)
      throw new le("property names with quotes must have matching quotes");
    if ((m === "constructor" || !y) && (f = !0), a += "." + m, c = "%" + a + "%", Ce(J, c))
      l = J[c];
    else if (l != null) {
      if (!(m in l)) {
        if (!t)
          throw new ae("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (me && p + 1 >= n.length) {
        var O = me(l, m);
        y = !!O, y && "get" in O && !("originalValue" in O.get) ? l = O.get : l = l[m];
      } else
        y = Ce(l, m), l = l[m];
      y && !f && (J[c] = l);
    }
  }
  return l;
}, Rt = Er, Tt = Ot, bo = Tt([Rt("%String.prototype.indexOf%")]), Ct = function(e, t) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    Rt(e, !!t)
  );
  return typeof n == "function" && bo(e, ".prototype.") > -1 ? Tt(
    /** @type {const} */
    [n]
  ) : n;
}, Eo = Er, Se = Ct, Ao = Ie, Po = ce, nt = Eo("%Map%", !0), Oo = Se("Map.prototype.get", !0), $o = Se("Map.prototype.set", !0), wo = Se("Map.prototype.has", !0), Ro = Se("Map.prototype.delete", !0), To = Se("Map.prototype.size", !0), _t = !!nt && /** @type {Exclude<import('.'), false>} */
function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new Po("Side channel does not contain " + Ao(n));
    },
    delete: function(n) {
      if (e) {
        var a = Ro(e, n);
        return To(e) === 0 && (e = void 0), a;
      }
      return !1;
    },
    get: function(n) {
      if (e)
        return Oo(e, n);
    },
    has: function(n) {
      return e ? wo(e, n) : !1;
    },
    set: function(n, a) {
      e || (e = new nt()), $o(e, n, a);
    }
  };
  return t;
}, Co = Er, Me = Ct, _o = Ie, Pe = _t, xo = ce, te = Co("%WeakMap%", !0), Io = Me("WeakMap.prototype.get", !0), No = Me("WeakMap.prototype.set", !0), Fo = Me("WeakMap.prototype.has", !0), Mo = Me("WeakMap.prototype.delete", !0), Do = te ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var e, t, n = {
      assert: function(a) {
        if (!n.has(a))
          throw new xo("Side channel does not contain " + _o(a));
      },
      delete: function(a) {
        if (te && a && (typeof a == "object" || typeof a == "function")) {
          if (e)
            return Mo(e, a);
        } else if (Pe && t)
          return t.delete(a);
        return !1;
      },
      get: function(a) {
        return te && a && (typeof a == "object" || typeof a == "function") && e ? Io(e, a) : t && t.get(a);
      },
      has: function(a) {
        return te && a && (typeof a == "object" || typeof a == "function") && e ? Fo(e, a) : !!t && t.has(a);
      },
      set: function(a, i) {
        te && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new te()), No(e, a, i)) : Pe && (t || (t = Pe()), t.set(a, i));
      }
    };
    return n;
  }
) : Pe, Lo = ce, Bo = Ie, Uo = pa, ko = _t, qo = Do, Wo = qo || ko || Uo, Go = function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new Lo("Side channel does not contain " + Bo(n));
    },
    delete: function(n) {
      return !!e && e.delete(n);
    },
    get: function(n) {
      return e && e.get(n);
    },
    has: function(n) {
      return !!e && e.has(n);
    },
    set: function(n, a) {
      e || (e = Wo()), e.set(n, a);
    }
  };
  return t;
}, jo = String.prototype.replace, Vo = /%20/g, er = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Ar = {
  default: er.RFC3986,
  formatters: {
    RFC1738: function(r) {
      return jo.call(r, Vo, "+");
    },
    RFC3986: function(r) {
      return String(r);
    }
  },
  RFC1738: er.RFC1738,
  RFC3986: er.RFC3986
}, zo = Ar, rr = Object.prototype.hasOwnProperty, Q = Array.isArray, D = function() {
  for (var r = [], e = 0; e < 256; ++e)
    r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return r;
}(), Ho = function(e) {
  for (; e.length > 1; ) {
    var t = e.pop(), n = t.obj[t.prop];
    if (Q(n)) {
      for (var a = [], i = 0; i < n.length; ++i)
        typeof n[i] < "u" && a.push(n[i]);
      t.obj[t.prop] = a;
    }
  }
}, xt = function(e, t) {
  for (var n = t && t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = 0; a < e.length; ++a)
    typeof e[a] < "u" && (n[a] = e[a]);
  return n;
}, Yo = function r(e, t, n) {
  if (!t)
    return e;
  if (typeof t != "object") {
    if (Q(e))
      e.push(t);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !rr.call(Object.prototype, t)) && (e[t] = !0);
    else
      return [e, t];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(t);
  var a = e;
  return Q(e) && !Q(t) && (a = xt(e, n)), Q(e) && Q(t) ? (t.forEach(function(i, c) {
    if (rr.call(e, c)) {
      var l = e[c];
      l && typeof l == "object" && i && typeof i == "object" ? e[c] = r(l, i, n) : e.push(i);
    } else
      e[c] = i;
  }), e) : Object.keys(t).reduce(function(i, c) {
    var l = t[c];
    return rr.call(i, c) ? i[c] = r(i[c], l, n) : i[c] = l, i;
  }, a);
}, Ko = function(e, t) {
  return Object.keys(t).reduce(function(n, a) {
    return n[a] = t[a], n;
  }, e);
}, Qo = function(r, e, t) {
  var n = r.replace(/\+/g, " ");
  if (t === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Jo = function(e, t, n, a, i) {
  if (e.length === 0)
    return e;
  var c = e;
  if (typeof e == "symbol" ? c = Symbol.prototype.toString.call(e) : typeof e != "string" && (c = String(e)), n === "iso-8859-1")
    return escape(c).replace(/%u[0-9a-f]{4}/gi, function(p) {
      return "%26%23" + parseInt(p.slice(2), 16) + "%3B";
    });
  for (var l = "", f = 0; f < c.length; ++f) {
    var u = c.charCodeAt(f);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || i === zo.RFC1738 && (u === 40 || u === 41)) {
      l += c.charAt(f);
      continue;
    }
    if (u < 128) {
      l = l + D[u];
      continue;
    }
    if (u < 2048) {
      l = l + (D[192 | u >> 6] + D[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      l = l + (D[224 | u >> 12] + D[128 | u >> 6 & 63] + D[128 | u & 63]);
      continue;
    }
    f += 1, u = 65536 + ((u & 1023) << 10 | c.charCodeAt(f) & 1023), l += D[240 | u >> 18] + D[128 | u >> 12 & 63] + D[128 | u >> 6 & 63] + D[128 | u & 63];
  }
  return l;
}, Xo = function(e) {
  for (var t = [{ obj: { o: e }, prop: "o" }], n = [], a = 0; a < t.length; ++a)
    for (var i = t[a], c = i.obj[i.prop], l = Object.keys(c), f = 0; f < l.length; ++f) {
      var u = l[f], p = c[u];
      typeof p == "object" && p !== null && n.indexOf(p) === -1 && (t.push({ obj: c, prop: u }), n.push(p));
    }
  return Ho(t), e;
}, Zo = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, ei = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, ri = function(e, t) {
  return [].concat(e, t);
}, ti = function(e, t) {
  if (Q(e)) {
    for (var n = [], a = 0; a < e.length; a += 1)
      n.push(t(e[a]));
    return n;
  }
  return t(e);
}, It = {
  arrayToObject: xt,
  assign: Ko,
  combine: ri,
  compact: Xo,
  decode: Qo,
  encode: Jo,
  isBuffer: ei,
  isRegExp: Zo,
  maybeMap: ti,
  merge: Yo
}, Nt = Go, we = It, de = Ar, ni = Object.prototype.hasOwnProperty, at = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, t) {
    return e + "[" + t + "]";
  },
  repeat: function(e) {
    return e;
  }
}, k = Array.isArray, ai = Array.prototype.push, Ft = function(r, e) {
  ai.apply(r, k(e) ? e : [e]);
}, oi = Date.prototype.toISOString, ot = de.default, C = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: we.encode,
  encodeValuesOnly: !1,
  format: ot,
  formatter: de.formatters[ot],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return oi.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, ii = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, tr = {}, li = function r(e, t, n, a, i, c, l, f, u, p, y, m, h, v, O, T) {
  for (var g = e, x = T, P = 0, $ = !1; (x = x.get(tr)) !== void 0 && !$; ) {
    var s = x.get(e);
    if (P += 1, typeof s < "u") {
      if (s === P)
        throw new RangeError("Cyclic object value");
      $ = !0;
    }
    typeof x.get(tr) > "u" && (P = 0);
  }
  if (typeof f == "function" ? g = f(t, g) : g instanceof Date ? g = y(g) : n === "comma" && k(g) && (g = we.maybeMap(g, function(j) {
    return j instanceof Date ? y(j) : j;
  })), g === null) {
    if (i)
      return l && !v ? l(t, C.encoder, O, "key", m) : t;
    g = "";
  }
  if (ii(g) || we.isBuffer(g)) {
    if (l) {
      var F = v ? t : l(t, C.encoder, O, "key", m);
      return [h(F) + "=" + h(l(g, C.encoder, O, "value", m))];
    }
    return [h(t) + "=" + h(String(g))];
  }
  var B = [];
  if (typeof g > "u")
    return B;
  var M;
  if (n === "comma" && k(g))
    v && l && (g = we.maybeMap(g, l)), M = [{ value: g.length > 0 ? g.join(",") || null : void 0 }];
  else if (k(f))
    M = f;
  else {
    var q = Object.keys(g);
    M = u ? q.sort(u) : q;
  }
  for (var W = a && k(g) && g.length === 1 ? t + "[]" : t, K = 0; K < M.length; ++K) {
    var I = M[K], N = typeof I == "object" && typeof I.value < "u" ? I.value : g[I];
    if (!(c && N === null)) {
      var G = k(g) ? typeof n == "function" ? n(W, I) : W : W + (p ? "." + I : "[" + I + "]");
      T.set(e, P);
      var Z = Nt();
      Z.set(tr, T), Ft(B, r(
        N,
        G,
        n,
        a,
        i,
        c,
        n === "comma" && v && k(g) ? null : l,
        f,
        u,
        p,
        y,
        m,
        h,
        v,
        O,
        Z
      ));
    }
  }
  return B;
}, ui = function(e) {
  if (!e)
    return C;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var t = e.charset || C.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = de.default;
  if (typeof e.format < "u") {
    if (!ni.call(de.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var a = de.formatters[n], i = C.filter;
  return (typeof e.filter == "function" || k(e.filter)) && (i = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : C.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? C.allowDots : !!e.allowDots,
    charset: t,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : C.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? C.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : C.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : C.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : C.encodeValuesOnly,
    filter: i,
    format: n,
    formatter: a,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : C.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : C.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : C.strictNullHandling
  };
}, ci = function(r, e) {
  var t = r, n = ui(e), a, i;
  typeof n.filter == "function" ? (i = n.filter, t = i("", t)) : k(n.filter) && (i = n.filter, a = i);
  var c = [];
  if (typeof t != "object" || t === null)
    return "";
  var l;
  e && e.arrayFormat in at ? l = e.arrayFormat : e && "indices" in e ? l = e.indices ? "indices" : "repeat" : l = "indices";
  var f = at[l];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = f === "comma" && e && e.commaRoundTrip;
  a || (a = Object.keys(t)), n.sort && a.sort(n.sort);
  for (var p = Nt(), y = 0; y < a.length; ++y) {
    var m = a[y];
    n.skipNulls && t[m] === null || Ft(c, li(
      t[m],
      m,
      f,
      u,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      p
    ));
  }
  var h = c.join(n.delimiter), v = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"), h.length > 0 ? v + h : "";
}, ue = It, yr = Object.prototype.hasOwnProperty, fi = Array.isArray, w = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: ue.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, si = function(r) {
  return r.replace(/&#(\d+);/g, function(e, t) {
    return String.fromCharCode(parseInt(t, 10));
  });
}, Mt = function(r, e) {
  return r && typeof r == "string" && e.comma && r.indexOf(",") > -1 ? r.split(",") : r;
}, pi = "utf8=%26%2310003%3B", yi = "utf8=%E2%9C%93", di = function(e, t) {
  var n = {}, a = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, c = a.split(t.delimiter, i), l = -1, f, u = t.charset;
  if (t.charsetSentinel)
    for (f = 0; f < c.length; ++f)
      c[f].indexOf("utf8=") === 0 && (c[f] === yi ? u = "utf-8" : c[f] === pi && (u = "iso-8859-1"), l = f, f = c.length);
  for (f = 0; f < c.length; ++f)
    if (f !== l) {
      var p = c[f], y = p.indexOf("]="), m = y === -1 ? p.indexOf("=") : y + 1, h, v;
      m === -1 ? (h = t.decoder(p, w.decoder, u, "key"), v = t.strictNullHandling ? null : "") : (h = t.decoder(p.slice(0, m), w.decoder, u, "key"), v = ue.maybeMap(
        Mt(p.slice(m + 1), t),
        function(O) {
          return t.decoder(O, w.decoder, u, "value");
        }
      )), v && t.interpretNumericEntities && u === "iso-8859-1" && (v = si(v)), p.indexOf("[]=") > -1 && (v = fi(v) ? [v] : v), yr.call(n, h) ? n[h] = ue.combine(n[h], v) : n[h] = v;
    }
  return n;
}, mi = function(r, e, t, n) {
  for (var a = n ? e : Mt(e, t), i = r.length - 1; i >= 0; --i) {
    var c, l = r[i];
    if (l === "[]" && t.parseArrays)
      c = [].concat(a);
    else {
      c = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var f = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l, u = parseInt(f, 10);
      !t.parseArrays && f === "" ? c = { 0: a } : !isNaN(u) && l !== f && String(u) === f && u >= 0 && t.parseArrays && u <= t.arrayLimit ? (c = [], c[u] = a) : f !== "__proto__" && (c[f] = a);
    }
    a = c;
  }
  return a;
}, vi = function(e, t, n, a) {
  if (e) {
    var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, c = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, f = n.depth > 0 && c.exec(i), u = f ? i.slice(0, f.index) : i, p = [];
    if (u) {
      if (!n.plainObjects && yr.call(Object.prototype, u) && !n.allowPrototypes)
        return;
      p.push(u);
    }
    for (var y = 0; n.depth > 0 && (f = l.exec(i)) !== null && y < n.depth; ) {
      if (y += 1, !n.plainObjects && yr.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      p.push(f[1]);
    }
    return f && p.push("[" + i.slice(f.index) + "]"), mi(p, t, n, a);
  }
}, gi = function(e) {
  if (!e)
    return w;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var t = typeof e.charset > "u" ? w.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? w.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : w.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : w.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : w.arrayLimit,
    charset: t,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : w.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : w.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : w.decoder,
    delimiter: typeof e.delimiter == "string" || ue.isRegExp(e.delimiter) ? e.delimiter : w.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : w.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : w.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : w.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : w.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : w.strictNullHandling
  };
}, hi = function(r, e) {
  var t = gi(e);
  if (r === "" || r === null || typeof r > "u")
    return t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof r == "string" ? di(r, t) : r, a = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), c = 0; c < i.length; ++c) {
    var l = i[c], f = vi(l, n[l], t, typeof r == "string");
    a = ue.merge(a, f, t);
  }
  return t.allowSparse === !0 ? a : ue.compact(a);
}, Si = ci, bi = hi, Ei = Ar, nr = {
  formats: Ei,
  parse: bi,
  stringify: Si
};
const Ai = o.object({
  entryLabel: o.record(o.array(o.string())),
  approvalFlow: o.array(o.string()),
  blockedAuthorProps: o.array(o.string()),
  reportReasons: o.record(o.string()),
  regex: o.object({
    uid: o.string(),
    relatedUid: o.string(),
    email: o.string(),
    sorting: o.string()
  }),
  enabledCollections: o.array(o.string()),
  moderatorRoles: o.array(o.string()),
  isGQLPluginEnabled: o.boolean(),
  badWords: o.boolean().nullable().optional(),
  gql: o.object({
    auth: o.boolean().nullable()
  }).optional(),
  client: o.object({
    url: o.string().nullable(),
    contactEmail: o.string().nullable()
  }).default({ url: null, contactEmail: null })
}), Dt = o.intersection(
  o.object({
    id: o.number(),
    uid: o.string(),
    documentId: o.string(),
    createdAt: o.string(),
    updatedAt: o.string(),
    publishedAt: o.string().nullable(),
    locale: o.string().nullable().optional()
  }),
  o.record(o.unknown())
), Pi = o.object({
  id: o.union([o.number(), o.string()]),
  name: o.string().optional().nullable(),
  email: o.string(),
  avatar: o.union([
    o.object({
      url: o.string()
    }),
    o.object({
      url: o.string(),
      formats: o.object({
        thumbnail: o.object({
          url: o.string()
        }).nullable()
      })
    }),
    o.string()
  ]).nullable().optional()
}), Lt = o.union([
  o.literal(z.PENDING),
  o.literal(z.APPROVED),
  o.literal(z.REJECTED),
  o.literal(z.BLOCKED),
  o.literal(z.OPEN),
  o.literal(z.REMOVED),
  o.literal(z.TO_REVIEW),
  o.literal(z.UNKNOWN)
]), Oi = o.object({
  id: o.number(),
  reason: o.string().optional().nullable(),
  content: o.string(),
  resolved: o.boolean(),
  createdAt: o.string(),
  updatedAt: o.string().nullable()
}), xe = o.object({
  id: o.number(),
  content: o.string(),
  blocked: o.boolean().nullable(),
  blockedThread: o.boolean().nullable(),
  blockReason: o.string().nullable(),
  isAdminComment: o.boolean().nullable(),
  removed: o.boolean().nullable(),
  approvalStatus: Lt.nullable(),
  createdAt: o.string(),
  updatedAt: o.string(),
  reports: o.array(Oi).nullable().optional(),
  author: Pi,
  gotThread: o.boolean().nullable().optional(),
  threadFirstItemId: o.number().nullable().optional(),
  section: o.string().nullable().optional()
}), Bt = o.object({
  page: o.number(),
  pageSize: o.number(),
  pageCount: o.number(),
  total: o.number()
});
function dr() {
  return xe.extend({
    related: Dt.optional(),
    documentId: o.string(),
    threadOf: o.lazy(
      () => xe.merge(o.object({ related: o.string(), threadOf: Ut.nullable().optional(), documentId: o.string().optional() }))
    ).nullable().optional()
  });
}
const Ut = dr(), $i = o.object({
  pagination: Bt,
  result: o.array(Ut)
}), wi = o.object({
  entity: Dt,
  selected: xe.merge(
    o.object({
      related: o.string(),
      threadOf: dr().omit({ related: !0 }).merge(o.object({ related: o.string() })).nullable().optional()
    })
  ).nullable(),
  level: o.array(dr().omit({ threadOf: !0, related: !0 }))
}), kt = o.object({
  apiID: o.string(),
  uid: o.string(),
  schema: o.object({
    attributes: o.record(o.object({ type: o.union([o.literal("string"), o.string()]) })),
    collectionName: o.string(),
    description: o.string(),
    displayName: o.string(),
    draftAndPublish: o.boolean(),
    kind: o.string(),
    pluralName: o.string(),
    singularName: o.string(),
    visible: o.boolean()
  })
}), Ri = o.object({
  data: kt
}), Ti = o.object({
  data: o.array(kt)
}), Ci = o.object({
  author: o.unknown(),
  content: o.string(),
  id: o.number(),
  approvalStatus: Lt.nullable().optional(),
  reason: o.string().optional().nullable(),
  reports: o.array(o.unknown()),
  resolved: o.boolean().optional(),
  updatedAt: o.string().nullable(),
  createdAt: o.string(),
  related: xe
}), _i = o.object({
  pagination: Bt,
  result: o.array(Ci)
}), xi = o.object({
  id: o.number(),
  documentId: o.string(),
  name: o.string(),
  code: o.string(),
  description: o.string(),
  createdAt: o.string(),
  updatedAt: o.string(),
  publishedAt: o.string(),
  locale: o.string().nullable(),
  usersCount: o.number()
}), Ii = o.object({
  data: o.array(
    xi
  )
}), Ni = o.object({
  data: o.object({
    id: o.number(),
    documentId: o.string(),
    firstname: o.string(),
    lastname: o.string(),
    username: o.string().nullable(),
    email: o.string(),
    isActive: o.boolean(),
    blocked: o.boolean(),
    preferedLanguage: o.string().nullable(),
    createdAt: o.string(),
    updatedAt: o.string(),
    publishedAt: o.string(),
    locale: o.null(),
    roles: o.array(
      o.object({
        id: o.number(),
        name: o.string(),
        description: o.string(),
        code: o.string()
      })
    )
  })
}), A = "comments", Fi = Tr.once((r) => ({
  config: {
    getKey() {
      return [A, "config"];
    },
    async query() {
      const e = await r.get(`/${A}/settings/config`);
      return Ai.parseAsync(e.data);
    }
  },
  contentTypeBuilder: {
    single: {
      getKey(e, t) {
        return [A, "moderate", "content-type", t, e];
      },
      async query(e) {
        const t = await r.get(`/content-type-builder/content-types/${e}`);
        return Ri.parseAsync(t.data).then((n) => n.data);
      }
    },
    all: {
      getKey() {
        return [A, "moderate", "content-types"];
      },
      async query() {
        const e = await r.get("/content-type-builder/content-types");
        return Ti.parseAsync(e.data).then((t) => t.data);
      }
    }
  },
  roles: {
    getKey() {
      return [A, "moderate", "roles"];
    },
    async query() {
      const e = await r.get("/admin/roles");
      return Ii.parseAsync(e.data).then((t) => t.data);
    }
  },
  user: {
    getKey() {
      return [A, "moderate", "user"];
    },
    async query() {
      const e = await r.get("/admin/users/me");
      return Ni.parseAsync(e.data).then((t) => t.data);
    }
  },
  comments: {
    findAll: {
      getKey(e) {
        return [A, "moderate", "all", e ? JSON.stringify(e) : void 0].filter(Boolean);
      },
      async query(e) {
        const t = await r.get(`/${A}/moderate/all?${nr.stringify(e, { encode: !1 })}`);
        return $i.parseAsync(t.data);
      }
    },
    findOne: {
      getKey(e, t) {
        return [A, "details", e?.toString(), t ? JSON.stringify(t) : void 0].filter(Boolean);
      },
      async query(e, t) {
        const n = Tr.isEmpty(t) ? "" : `?${nr.stringify(t, { encode: !1 })}`, a = await r.get(`/${A}/moderate/single/${e}${n}`);
        return wi.parseAsync(a.data);
      }
    },
    approve(e) {
      return r.put(`/${A}/moderate/single/${e}/approve`);
    },
    reject(e) {
      return r.put(`/${A}/moderate/single/${e}/reject`);
    },
    block(e) {
      return r.put(`/${A}/moderate/single/${e}/block`);
    },
    unblock(e) {
      return r.put(`/${A}/moderate/single/${e}/unblock`);
    },
    blockThread(e) {
      return r.put(`/${A}/moderate/thread/${e}/block`);
    },
    unBlockThread(e) {
      return r.put(`/${A}/moderate/thread/${e}/unblock`);
    },
    delete(e) {
      return r.del(`/${A}/moderate/single/${e}/delete`);
    },
    postComment({ id: e, content: t, author: n }) {
      return r.post(`/${A}/moderate/thread/${e}/postComment`, { content: t, author: n });
    },
    updateComment({ id: e, content: t }) {
      return r.put(`/${A}/moderate/single/${e}/update`, { content: t });
    }
  },
  reports: {
    findAll: {
      getKey(e) {
        return [A, "moderate", "reports", e ? JSON.stringify(e) : void 0].filter(Boolean);
      },
      async query(e) {
        const t = await r.get(`/${A}/moderate/reports${e ? `?${nr.stringify(e, { encode: !1 })}` : ""}`);
        return _i.parseAsync(t.data);
      }
    },
    resolve({ id: e, reportId: t }) {
      return r.put(`/${A}/moderate/single/${e}/report/${t}/resolve`);
    },
    resolveMultipleReports({ reportIds: e }) {
      return r.put(`/${A}/moderate/multiple/report/resolve`, { reportIds: e });
    },
    resolveCommentMultipleReports({ id: e, reportIds: t }) {
      return r.put(`/${A}/moderate/single/${e}/report/resolve`, { reportIds: t });
    },
    resolveAllAbuseReportsForComment(e) {
      return r.put(`/${A}/moderate/all/${e}/report/resolve`);
    },
    resolveAllAbuseReportsForThread(e) {
      return r.put(`/${A}/moderate/thread/${e}/report/resolve-thread`);
    }
  },
  settings: {
    update(e) {
      return r.put(`/${A}/settings/config`, e);
    },
    restore() {
      return r.del(`/${A}/settings/config`);
    },
    restart() {
      return r.post(`/${A}/settings/restart`);
    }
  }
})), Mi = () => {
  const r = dn();
  return lt(() => Fi(r), [r]);
}, Di = fn(null), Li = ({ children: r }) => {
  const e = Mi(), { data: t } = sn({
    queryKey: e.user.getKey(),
    queryFn: e.user.query
  });
  return t ? /* @__PURE__ */ _(Di.Provider, { value: t, children: r }) : null;
}, Bi = new yn({
  defaultOptions: {
    queries: {
      retry: !1,
      refetchOnWindowFocus: !1
    }
  }
}), Hi = ({ children: r }) => {
  const e = vn();
  return /* @__PURE__ */ _(pn, { client: Bi, children: /* @__PURE__ */ _(an, { theme: { theme: e }, children: /* @__PURE__ */ _(Li, { children: r }) }) });
}, Yi = () => {
  const r = lt(
    () => ({
      access: ee.access,
      moderate: ee.moderate,
      accessReports: ee.reports,
      reviewReports: ee.reportsReview,
      settings: ee.settings,
      settingsChange: ee.settingsChange
    }),
    []
  ), {
    isLoading: e,
    allowedActions: {
      canCommentsModerate: t,
      canCommentsRead: n,
      canReportsRead: a,
      canSettingsChange: i,
      canSettingsRead: c,
      canReportsReview: l
    }
  } = mn(r);
  return {
    isLoadingForPermissions: e,
    canAccess: n || a || c,
    canModerate: t,
    canAccessReports: a,
    canReviewReports: l,
    canSettings: c,
    canSettingsChange: i
  };
}, Ki = ({
  title: r,
  onConfirm: e,
  Trigger: t,
  labelConfirm: n,
  iconConfirm: a,
  labelCancel: i,
  children: c
}) => {
  const [l, f] = ar(!1), [u, p] = ar(!1), y = () => f((h) => !h), m = async () => {
    p(!0), await e(), p(!1), y();
  };
  return /* @__PURE__ */ Ee(V.Root, { open: l, children: [
    /* @__PURE__ */ _(V.Trigger, { children: /* @__PURE__ */ _(t, { onClick: y }) }),
    /* @__PURE__ */ Ee(V.Content, { children: [
      /* @__PURE__ */ _(V.Header, { children: r }),
      /* @__PURE__ */ _(V.Body, { children: /* @__PURE__ */ Ee(on, { justifyContent: "center", direction: "column", children: [
        /* @__PURE__ */ _(ln, { fill: "danger500", stroke: "danger500", height: "24", width: "24" }),
        /* @__PURE__ */ _(un, { id: "confirm-description", children: c })
      ] }) }),
      /* @__PURE__ */ Ee(V.Footer, { children: [
        /* @__PURE__ */ _(V.Cancel, { children: /* @__PURE__ */ _(
          Cr,
          {
            onClick: y,
            disabled: u,
            variant: "tertiary",
            children: i || "Cancel"
          }
        ) }),
        /* @__PURE__ */ _(V.Action, { children: /* @__PURE__ */ _(
          Cr,
          {
            onClick: m,
            variant: "danger-light",
            loading: u,
            disabled: u,
            startIcon: a,
            children: n
          }
        ) })
      ] })
    ] })
  ] });
};
export {
  z as C,
  zi as R,
  Di as U,
  Yi as a,
  vr as b,
  Tn as c,
  Ki as d,
  Hi as e,
  Vi as g,
  Mi as u
};
