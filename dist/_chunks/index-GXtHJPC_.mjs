import { ad as en, ae as rn, af as wr, ag as it, p as tn, ah as nn, ai as Rr, l as Tr, aj as on, ak as ee, al as V, F as an, am as ln, T as un, e as Cr } from "./index-CLh6xcgQ.mjs";
import * as ae from "react";
import { useState as or, useEffect as cn, useMemo as lt, createContext as fn } from "react";
import { jsx as _, jsxs as Ee } from "react/jsx-runtime";
import { useQuery as sn, QueryClientProvider as pn, QueryClient as yn } from "@tanstack/react-query";
import { getFetchClient as dn, useRBAC as mn } from "@strapi/strapi/admin";
import { z as a } from "zod";
const vn = () => {
  const r = () => window.matchMedia("(prefers-color-scheme: dark)").matches, [e, t] = or();
  return cn(() => {
    const o = r() ? "dark" : "light", i = window.localStorage?.STRAPI_THEME;
    t(i === "system" ? o : i);
  }, []), {
    theme: e === "dark" ? en : rn,
    themeName: e
  };
};
var ar = { exports: {} }, E = {};
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
  if (_r) return E;
  _r = 1;
  var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, i = r ? Symbol.for("react.profiler") : 60114, c = r ? Symbol.for("react.provider") : 60109, l = r ? Symbol.for("react.context") : 60110, f = r ? Symbol.for("react.async_mode") : 60111, u = r ? Symbol.for("react.concurrent_mode") : 60111, p = r ? Symbol.for("react.forward_ref") : 60112, y = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, O = r ? Symbol.for("react.block") : 60121, T = r ? Symbol.for("react.fundamental") : 60117, g = r ? Symbol.for("react.responder") : 60118, x = r ? Symbol.for("react.scope") : 60119;
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
            case o:
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
  return E.AsyncMode = f, E.ConcurrentMode = u, E.ContextConsumer = l, E.ContextProvider = c, E.Element = e, E.ForwardRef = p, E.Fragment = n, E.Lazy = v, E.Memo = h, E.Portal = t, E.Profiler = i, E.StrictMode = o, E.Suspense = y, E.isAsyncMode = function(s) {
    return $(s) || P(s) === f;
  }, E.isConcurrentMode = $, E.isContextConsumer = function(s) {
    return P(s) === l;
  }, E.isContextProvider = function(s) {
    return P(s) === c;
  }, E.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }, E.isForwardRef = function(s) {
    return P(s) === p;
  }, E.isFragment = function(s) {
    return P(s) === n;
  }, E.isLazy = function(s) {
    return P(s) === v;
  }, E.isMemo = function(s) {
    return P(s) === h;
  }, E.isPortal = function(s) {
    return P(s) === t;
  }, E.isProfiler = function(s) {
    return P(s) === i;
  }, E.isStrictMode = function(s) {
    return P(s) === o;
  }, E.isSuspense = function(s) {
    return P(s) === y;
  }, E.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === u || s === i || s === o || s === y || s === m || typeof s == "object" && s !== null && (s.$$typeof === v || s.$$typeof === h || s.$$typeof === c || s.$$typeof === l || s.$$typeof === p || s.$$typeof === T || s.$$typeof === g || s.$$typeof === x || s.$$typeof === O);
  }, E.typeOf = P, E;
}
var A = {};
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
    var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, i = r ? Symbol.for("react.profiler") : 60114, c = r ? Symbol.for("react.provider") : 60109, l = r ? Symbol.for("react.context") : 60110, f = r ? Symbol.for("react.async_mode") : 60111, u = r ? Symbol.for("react.concurrent_mode") : 60111, p = r ? Symbol.for("react.forward_ref") : 60112, y = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, O = r ? Symbol.for("react.block") : 60121, T = r ? Symbol.for("react.fundamental") : 60117, g = r ? Symbol.for("react.responder") : 60118, x = r ? Symbol.for("react.scope") : 60119;
    function P(d) {
      return typeof d == "string" || typeof d == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      d === n || d === u || d === i || d === o || d === y || d === m || typeof d == "object" && d !== null && (d.$$typeof === v || d.$$typeof === h || d.$$typeof === c || d.$$typeof === l || d.$$typeof === p || d.$$typeof === T || d.$$typeof === g || d.$$typeof === x || d.$$typeof === O);
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
              case o:
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
    var s = f, F = u, B = l, M = c, q = e, W = p, Y = n, I = v, N = h, G = t, Z = i, j = o, qt = y, Pr = !1;
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
    function Kt(d) {
      return $(d) === v;
    }
    function Yt(d) {
      return $(d) === h;
    }
    function Qt(d) {
      return $(d) === t;
    }
    function Jt(d) {
      return $(d) === i;
    }
    function Xt(d) {
      return $(d) === o;
    }
    function Zt(d) {
      return $(d) === y;
    }
    A.AsyncMode = s, A.ConcurrentMode = F, A.ContextConsumer = B, A.ContextProvider = M, A.Element = q, A.ForwardRef = W, A.Fragment = Y, A.Lazy = I, A.Memo = N, A.Portal = G, A.Profiler = Z, A.StrictMode = j, A.Suspense = qt, A.isAsyncMode = Wt, A.isConcurrentMode = Or, A.isContextConsumer = Gt, A.isContextProvider = jt, A.isElement = Vt, A.isForwardRef = zt, A.isFragment = Ht, A.isLazy = Kt, A.isMemo = Yt, A.isPortal = Qt, A.isProfiler = Jt, A.isStrictMode = Xt, A.isSuspense = Zt, A.isValidElementType = P, A.typeOf = $;
  }()), A;
}
process.env.NODE_ENV === "production" ? ar.exports = gn() : ar.exports = hn();
var Sn = ar.exports, ut = Sn, bn = {
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
wr(wr({}, $n), { textComponent: ae.Fragment });
var mr = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = ae.createContext(null)) : ae.createContext(null);
mr.Consumer;
mr.Provider;
var Rn = mr;
function vr() {
  var r = ae.useContext(Rn);
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
    var n = vr(), o = t.value, i = t.children, c = it(t, ["value", "children"]), l = typeof o == "string" ? new Date(o || 0) : o, f = r === "formatDate" ? n.formatDateToParts(l, c) : n.formatTimeToParts(l, c);
    return i(f);
  };
  return e.displayName = lr[r], e;
}
function ve(r) {
  var e = function(t) {
    var n = vr(), o = t.value, i = t.children, c = it(
      t,
      ["value", "children"]
    ), l = n[r](o, c);
    if (typeof i == "function")
      return i(l);
    var f = n.textComponent || ae.Fragment;
    return ae.createElement(f, null, l);
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
  let o = "";
  return typeof r == "string" ? o = r : o = r?.id.toString() || o, n(
    {
      id: `${t ? tn : "app.components"}.${o}`,
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
      var o = String(n), i = Sr.call(e, o.length + 1);
      return H.call(o, t, "$&_") + "." + H.call(H.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
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
}, Ie = function r(e, t, n, o) {
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
  var y = ao(i, n);
  if (typeof o > "u")
    o = [];
  else if (gt(o, e) >= 0)
    return "[Circular]";
  function m(N, G, Z) {
    if (G && (o = kn.call(o), o.push(G)), Z) {
      var j = {
        depth: i.depth
      };
      return U(i, "quoteStyle") && (j.quoteStyle = i.quoteStyle), r(N, j, n + 1, o);
    }
    return r(N, i, n + 1, o);
  }
  if (typeof e == "function" && !Wr(e)) {
    var h = Qn(e), v = Ae(e, m);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (v.length > 0 ? " { " + L.call(v, ", ") + " }" : "");
  }
  if (vt(e)) {
    var O = ie ? H.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : cr.call(e);
    return typeof e == "object" && !ie ? fe(O) : O;
  }
  if (to(e)) {
    for (var T = "<" + Mr.call(String(e.nodeName)), g = e.attributes || [], x = 0; x < g.length; x++)
      T += " " + g[x].name + "=" + mt(Wn(g[x].value), "double", i);
    return T += ">", e.childNodes && e.childNodes.length && (T += "..."), T += "</" + Mr.call(String(e.nodeName)) + ">", T;
  }
  if (sr(e)) {
    if (e.length === 0)
      return "[]";
    var P = Ae(e, m);
    return y && !oo(P) ? "[" + pr(P, y) + "]" : "[ " + L.call(P, ", ") + " ]";
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
  if (eo(e)) {
    var F = [];
    return Nr && Nr.call(e, function(N) {
      F.push(m(N, e));
    }), Gr("Set", Te.call(e), F, y);
  }
  if (Xn(e))
    return ke("WeakMap");
  if (ro(e))
    return ke("WeakSet");
  if (Zn(e))
    return ke("WeakRef");
  if (zn(e))
    return fe(m(Number(e)));
  if (Kn(e))
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
    var B = Ae(e, m), M = Br ? Br(e) === Object.prototype : e instanceof Object || e.constructor === Object, q = e instanceof Object ? "" : "null prototype", W = !M && ye && Object(e) === e && ye in e ? Sr.call(K(e), 8, -1) : q ? "Object" : "", Y = M || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", I = Y + (W || q ? "[" + L.call(Dr.call([], W || [], q || []), ": ") + "] " : "");
    return B.length === 0 ? I + "{}" : y ? I + "{" + pr(B, y) + "}" : I + "{ " + L.call(B, ", ") + " }";
  }
  return String(e);
};
function mt(r, e, t) {
  var n = t.quoteStyle || e, o = dt[n];
  return o + r + o;
}
function Wn(r) {
  return H.call(String(r), /"/g, "&quot;");
}
function X(r) {
  return !ye || !(typeof r == "object" && (ye in r || typeof r[ye] < "u"));
}
function sr(r) {
  return K(r) === "[object Array]" && X(r);
}
function Gn(r) {
  return K(r) === "[object Date]" && X(r);
}
function Wr(r) {
  return K(r) === "[object RegExp]" && X(r);
}
function jn(r) {
  return K(r) === "[object Error]" && X(r);
}
function Vn(r) {
  return K(r) === "[object String]" && X(r);
}
function zn(r) {
  return K(r) === "[object Number]" && X(r);
}
function Hn(r) {
  return K(r) === "[object Boolean]" && X(r);
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
function Kn(r) {
  if (!r || typeof r != "object" || !ur)
    return !1;
  try {
    return ur.call(r), !0;
  } catch {
  }
  return !1;
}
var Yn = Object.prototype.hasOwnProperty || function(r) {
  return r in this;
};
function U(r, e) {
  return Yn.call(r, e);
}
function K(r) {
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
function eo(r) {
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
function ro(r) {
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
function to(r) {
  return !r || typeof r != "object" ? !1 : typeof HTMLElement < "u" && r instanceof HTMLElement ? !0 : typeof r.nodeName == "string" && typeof r.getAttribute == "function";
}
function ht(r, e) {
  if (r.length > e.maxStringLength) {
    var t = r.length - e.maxStringLength, n = "... " + t + " more character" + (t > 1 ? "s" : "");
    return ht(Sr.call(r, 0, e.maxStringLength), e) + n;
  }
  var o = qn[e.quoteStyle || "single"];
  o.lastIndex = 0;
  var i = H.call(H.call(r, o, "\\$1"), /[\x00-\x1f]/g, no);
  return mt(i, "single", e);
}
function no(r) {
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
  var o = n ? pr(t, n) : L.call(t, ", ");
  return r + " (" + e + ") {" + o + "}";
}
function oo(r) {
  for (var e = 0; e < r.length; e++)
    if (gt(r[e], `
`) >= 0)
      return !1;
  return !0;
}
function ao(r, e) {
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
    for (var o = 0; o < r.length; o++)
      n[o] = U(r, o) ? e(r[o], r) : "";
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
var io = Ie, lo = ce, Ne = function(r, e, t) {
  for (var n = r, o; (o = n.next) != null; n = o)
    if (o.key === e)
      return n.next = o.next, t || (o.next = /** @type {NonNullable<typeof list.next>} */
      r.next, r.next = o), o;
}, uo = function(r, e) {
  if (r) {
    var t = Ne(r, e);
    return t && t.value;
  }
}, co = function(r, e, t) {
  var n = Ne(r, e);
  n ? n.value = t : r.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: r.next,
    value: t
  };
}, fo = function(r, e) {
  return r ? !!Ne(r, e) : !1;
}, so = function(r, e) {
  if (r)
    return Ne(r, e, !0);
}, po = function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new lo("Side channel does not contain " + io(n));
    },
    delete: function(n) {
      var o = e && e.next, i = so(e, n);
      return i && o && o === i && (e = void 0), !!i;
    },
    get: function(n) {
      return uo(e, n);
    },
    has: function(n) {
      return fo(e, n);
    },
    set: function(n, o) {
      e || (e = {
        next: void 0
      }), co(
        /** @type {NonNullable<typeof $o>} */
        e,
        n,
        o
      );
    }
  };
  return t;
}, St = Object, yo = Error, mo = EvalError, vo = RangeError, go = ReferenceError, ho = SyntaxError, So = URIError, bo = Math.abs, Eo = Math.floor, Ao = Math.max, Po = Math.min, Oo = Math.pow, $o = Math.round, wo = Number.isNaN || function(e) {
  return e !== e;
}, Ro = wo, To = function(e) {
  return Ro(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, Co = Object.getOwnPropertyDescriptor, Oe = Co;
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
var _o = $e, qe, jr;
function xo() {
  return jr || (jr = 1, qe = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var e = {}, t = Symbol("test"), n = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var o = 42;
    e[t] = o;
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
      if (l.value !== o || l.enumerable !== !0)
        return !1;
    }
    return !0;
  }), qe;
}
var We, Vr;
function Io() {
  if (Vr) return We;
  Vr = 1;
  var r = typeof Symbol < "u" && Symbol, e = xo();
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
var Ve, Kr;
function No() {
  if (Kr) return Ve;
  Kr = 1;
  var r = "Function.prototype.bind called on incompatible ", e = Object.prototype.toString, t = Math.max, n = "[object Function]", o = function(f, u) {
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
          o(p, arguments)
        );
        return Object(g) === g ? g : this;
      }
      return u.apply(
        f,
        o(p, arguments)
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
var ze, Yr;
function Fe() {
  if (Yr) return ze;
  Yr = 1;
  var r = No();
  return ze = Function.prototype.bind || r, ze;
}
var He, Qr;
function br() {
  return Qr || (Qr = 1, He = Function.prototype.call), He;
}
var Ke, Jr;
function Pt() {
  return Jr || (Jr = 1, Ke = Function.prototype.apply), Ke;
}
var Fo = typeof Reflect < "u" && Reflect && Reflect.apply, Mo = Fe(), Do = Pt(), Lo = br(), Bo = Fo, Uo = Bo || Mo.call(Lo, Do), ko = Fe(), qo = ce, Wo = br(), Go = Uo, Ot = function(e) {
  if (e.length < 1 || typeof e[0] != "function")
    throw new qo("a function is required");
  return Go(ko, Wo, e);
}, Ye, Xr;
function jo() {
  if (Xr) return Ye;
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
  ), o = Object, i = o.getPrototypeOf;
  return Ye = n && typeof n.get == "function" ? r([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return i(l == null ? l : o(l));
    }
  ) : !1, Ye;
}
var Qe, Zr;
function Vo() {
  if (Zr) return Qe;
  Zr = 1;
  var r = Et(), e = At(), t = jo();
  return Qe = r ? function(o) {
    return r(o);
  } : e ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return e(o);
  } : t ? function(o) {
    return t(o);
  } : null, Qe;
}
var Je, et;
function zo() {
  if (et) return Je;
  et = 1;
  var r = Function.prototype.call, e = Object.prototype.hasOwnProperty, t = Fe();
  return Je = t.call(r, e), Je;
}
var S, Ho = St, Ko = yo, Yo = mo, Qo = vo, Jo = go, le = ho, oe = ce, Xo = So, Zo = bo, ea = Eo, ra = Ao, ta = Po, na = Oo, oa = $o, aa = To, $t = Function, Xe = function(r) {
  try {
    return $t('"use strict"; return (' + r + ").constructor;")();
  } catch {
  }
}, me = bt, ia = _o, Ze = function() {
  throw new oe();
}, la = me ? function() {
  try {
    return arguments.callee, Ze;
  } catch {
    try {
      return me(arguments, "callee").get;
    } catch {
      return Ze;
    }
  }
}() : Ze, re = Io()(), R = Vo(), ua = At(), ca = Et(), wt = Pt(), ge = br(), ne = {}, fa = typeof Uint8Array > "u" || !R ? S : R(Uint8Array), J = {
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
  "%Error%": Ko,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Yo,
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
  "%Object%": Ho,
  "%Object.getOwnPropertyDescriptor%": me,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? S : Promise,
  "%Proxy%": typeof Proxy > "u" ? S : Proxy,
  "%RangeError%": Qo,
  "%ReferenceError%": Jo,
  "%Reflect%": typeof Reflect > "u" ? S : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? S : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !re || !R ? S : R((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? S : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": re && R ? R(""[Symbol.iterator]()) : S,
  "%Symbol%": re ? Symbol : S,
  "%SyntaxError%": le,
  "%ThrowTypeError%": la,
  "%TypedArray%": fa,
  "%TypeError%": oe,
  "%Uint8Array%": typeof Uint8Array > "u" ? S : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? S : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? S : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? S : Uint32Array,
  "%URIError%": Xo,
  "%WeakMap%": typeof WeakMap > "u" ? S : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? S : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? S : WeakSet,
  "%Function.prototype.call%": ge,
  "%Function.prototype.apply%": wt,
  "%Object.defineProperty%": ia,
  "%Object.getPrototypeOf%": ua,
  "%Math.abs%": Zo,
  "%Math.floor%": ea,
  "%Math.max%": ra,
  "%Math.min%": ta,
  "%Math.pow%": na,
  "%Math.round%": oa,
  "%Math.sign%": aa,
  "%Reflect.getPrototypeOf%": ca
};
if (R)
  try {
    null.error;
  } catch (r) {
    var sa = R(R(r));
    J["%Error.prototype%"] = sa;
  }
var pa = function r(e) {
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
    var o = r("%AsyncGenerator%");
    o && R && (t = R(o.prototype));
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
}, he = Fe(), Ce = zo(), ya = he.call(ge, Array.prototype.concat), da = he.call(wt, Array.prototype.splice), tt = he.call(ge, String.prototype.replace), _e = he.call(ge, String.prototype.slice), ma = he.call(ge, RegExp.prototype.exec), va = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ga = /\\(\\)?/g, ha = function(e) {
  var t = _e(e, 0, 1), n = _e(e, -1);
  if (t === "%" && n !== "%")
    throw new le("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && t !== "%")
    throw new le("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return tt(e, va, function(i, c, l, f) {
    o[o.length] = l ? tt(f, ga, "$1") : c || i;
  }), o;
}, Sa = function(e, t) {
  var n = e, o;
  if (Ce(rt, n) && (o = rt[n], n = "%" + o[0] + "%"), Ce(J, n)) {
    var i = J[n];
    if (i === ne && (i = pa(n)), typeof i > "u" && !t)
      throw new oe("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: i
    };
  }
  throw new le("intrinsic " + e + " does not exist!");
}, Er = function(e, t) {
  if (typeof e != "string" || e.length === 0)
    throw new oe("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new oe('"allowMissing" argument must be a boolean');
  if (ma(/^%?[^%]*%?$/, e) === null)
    throw new le("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = ha(e), o = n.length > 0 ? n[0] : "", i = Sa("%" + o + "%", t), c = i.name, l = i.value, f = !1, u = i.alias;
  u && (o = u[0], da(n, ya([0, 1], u)));
  for (var p = 1, y = !0; p < n.length; p += 1) {
    var m = n[p], h = _e(m, 0, 1), v = _e(m, -1);
    if ((h === '"' || h === "'" || h === "`" || v === '"' || v === "'" || v === "`") && h !== v)
      throw new le("property names with quotes must have matching quotes");
    if ((m === "constructor" || !y) && (f = !0), o += "." + m, c = "%" + o + "%", Ce(J, c))
      l = J[c];
    else if (l != null) {
      if (!(m in l)) {
        if (!t)
          throw new oe("base intrinsic for " + e + " exists, but the property is not available.");
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
}, Rt = Er, Tt = Ot, ba = Tt([Rt("%String.prototype.indexOf%")]), Ct = function(e, t) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    Rt(e, !!t)
  );
  return typeof n == "function" && ba(e, ".prototype.") > -1 ? Tt(
    /** @type {const} */
    [n]
  ) : n;
}, Ea = Er, Se = Ct, Aa = Ie, Pa = ce, nt = Ea("%Map%", !0), Oa = Se("Map.prototype.get", !0), $a = Se("Map.prototype.set", !0), wa = Se("Map.prototype.has", !0), Ra = Se("Map.prototype.delete", !0), Ta = Se("Map.prototype.size", !0), _t = !!nt && /** @type {Exclude<import('.'), false>} */
function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new Pa("Side channel does not contain " + Aa(n));
    },
    delete: function(n) {
      if (e) {
        var o = Ra(e, n);
        return Ta(e) === 0 && (e = void 0), o;
      }
      return !1;
    },
    get: function(n) {
      if (e)
        return Oa(e, n);
    },
    has: function(n) {
      return e ? wa(e, n) : !1;
    },
    set: function(n, o) {
      e || (e = new nt()), $a(e, n, o);
    }
  };
  return t;
}, Ca = Er, Me = Ct, _a = Ie, Pe = _t, xa = ce, te = Ca("%WeakMap%", !0), Ia = Me("WeakMap.prototype.get", !0), Na = Me("WeakMap.prototype.set", !0), Fa = Me("WeakMap.prototype.has", !0), Ma = Me("WeakMap.prototype.delete", !0), Da = te ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var e, t, n = {
      assert: function(o) {
        if (!n.has(o))
          throw new xa("Side channel does not contain " + _a(o));
      },
      delete: function(o) {
        if (te && o && (typeof o == "object" || typeof o == "function")) {
          if (e)
            return Ma(e, o);
        } else if (Pe && t)
          return t.delete(o);
        return !1;
      },
      get: function(o) {
        return te && o && (typeof o == "object" || typeof o == "function") && e ? Ia(e, o) : t && t.get(o);
      },
      has: function(o) {
        return te && o && (typeof o == "object" || typeof o == "function") && e ? Fa(e, o) : !!t && t.has(o);
      },
      set: function(o, i) {
        te && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new te()), Na(e, o, i)) : Pe && (t || (t = Pe()), t.set(o, i));
      }
    };
    return n;
  }
) : Pe, La = ce, Ba = Ie, Ua = po, ka = _t, qa = Da, Wa = qa || ka || Ua, Ga = function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new La("Side channel does not contain " + Ba(n));
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
    set: function(n, o) {
      e || (e = Wa()), e.set(n, o);
    }
  };
  return t;
}, ja = String.prototype.replace, Va = /%20/g, er = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Ar = {
  default: er.RFC3986,
  formatters: {
    RFC1738: function(r) {
      return ja.call(r, Va, "+");
    },
    RFC3986: function(r) {
      return String(r);
    }
  },
  RFC1738: er.RFC1738,
  RFC3986: er.RFC3986
}, za = Ar, rr = Object.prototype.hasOwnProperty, Q = Array.isArray, D = function() {
  for (var r = [], e = 0; e < 256; ++e)
    r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return r;
}(), Ha = function(e) {
  for (; e.length > 1; ) {
    var t = e.pop(), n = t.obj[t.prop];
    if (Q(n)) {
      for (var o = [], i = 0; i < n.length; ++i)
        typeof n[i] < "u" && o.push(n[i]);
      t.obj[t.prop] = o;
    }
  }
}, xt = function(e, t) {
  for (var n = t && t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < e.length; ++o)
    typeof e[o] < "u" && (n[o] = e[o]);
  return n;
}, Ka = function r(e, t, n) {
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
  var o = e;
  return Q(e) && !Q(t) && (o = xt(e, n)), Q(e) && Q(t) ? (t.forEach(function(i, c) {
    if (rr.call(e, c)) {
      var l = e[c];
      l && typeof l == "object" && i && typeof i == "object" ? e[c] = r(l, i, n) : e.push(i);
    } else
      e[c] = i;
  }), e) : Object.keys(t).reduce(function(i, c) {
    var l = t[c];
    return rr.call(i, c) ? i[c] = r(i[c], l, n) : i[c] = l, i;
  }, o);
}, Ya = function(e, t) {
  return Object.keys(t).reduce(function(n, o) {
    return n[o] = t[o], n;
  }, e);
}, Qa = function(r, e, t) {
  var n = r.replace(/\+/g, " ");
  if (t === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Ja = function(e, t, n, o, i) {
  if (e.length === 0)
    return e;
  var c = e;
  if (typeof e == "symbol" ? c = Symbol.prototype.toString.call(e) : typeof e != "string" && (c = String(e)), n === "iso-8859-1")
    return escape(c).replace(/%u[0-9a-f]{4}/gi, function(p) {
      return "%26%23" + parseInt(p.slice(2), 16) + "%3B";
    });
  for (var l = "", f = 0; f < c.length; ++f) {
    var u = c.charCodeAt(f);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || i === za.RFC1738 && (u === 40 || u === 41)) {
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
}, Xa = function(e) {
  for (var t = [{ obj: { o: e }, prop: "o" }], n = [], o = 0; o < t.length; ++o)
    for (var i = t[o], c = i.obj[i.prop], l = Object.keys(c), f = 0; f < l.length; ++f) {
      var u = l[f], p = c[u];
      typeof p == "object" && p !== null && n.indexOf(p) === -1 && (t.push({ obj: c, prop: u }), n.push(p));
    }
  return Ha(t), e;
}, Za = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, ei = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, ri = function(e, t) {
  return [].concat(e, t);
}, ti = function(e, t) {
  if (Q(e)) {
    for (var n = [], o = 0; o < e.length; o += 1)
      n.push(t(e[o]));
    return n;
  }
  return t(e);
}, It = {
  arrayToObject: xt,
  assign: Ya,
  combine: ri,
  compact: Xa,
  decode: Qa,
  encode: Ja,
  isBuffer: ei,
  isRegExp: Za,
  maybeMap: ti,
  merge: Ka
}, Nt = Ga, we = It, de = Ar, ni = Object.prototype.hasOwnProperty, ot = {
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
}, k = Array.isArray, oi = Array.prototype.push, Ft = function(r, e) {
  oi.apply(r, k(e) ? e : [e]);
}, ai = Date.prototype.toISOString, at = de.default, C = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: we.encode,
  encodeValuesOnly: !1,
  format: at,
  formatter: de.formatters[at],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return ai.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, ii = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, tr = {}, li = function r(e, t, n, o, i, c, l, f, u, p, y, m, h, v, O, T) {
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
  for (var W = o && k(g) && g.length === 1 ? t + "[]" : t, Y = 0; Y < M.length; ++Y) {
    var I = M[Y], N = typeof I == "object" && typeof I.value < "u" ? I.value : g[I];
    if (!(c && N === null)) {
      var G = k(g) ? typeof n == "function" ? n(W, I) : W : W + (p ? "." + I : "[" + I + "]");
      T.set(e, P);
      var Z = Nt();
      Z.set(tr, T), Ft(B, r(
        N,
        G,
        n,
        o,
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
  var o = de.formatters[n], i = C.filter;
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
    formatter: o,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : C.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : C.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : C.strictNullHandling
  };
}, ci = function(r, e) {
  var t = r, n = ui(e), o, i;
  typeof n.filter == "function" ? (i = n.filter, t = i("", t)) : k(n.filter) && (i = n.filter, o = i);
  var c = [];
  if (typeof t != "object" || t === null)
    return "";
  var l;
  e && e.arrayFormat in ot ? l = e.arrayFormat : e && "indices" in e ? l = e.indices ? "indices" : "repeat" : l = "indices";
  var f = ot[l];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = f === "comma" && e && e.commaRoundTrip;
  o || (o = Object.keys(t)), n.sort && o.sort(n.sort);
  for (var p = Nt(), y = 0; y < o.length; ++y) {
    var m = o[y];
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
  var n = {}, o = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, c = o.split(t.delimiter, i), l = -1, f, u = t.charset;
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
  for (var o = n ? e : Mt(e, t), i = r.length - 1; i >= 0; --i) {
    var c, l = r[i];
    if (l === "[]" && t.parseArrays)
      c = [].concat(o);
    else {
      c = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var f = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l, u = parseInt(f, 10);
      !t.parseArrays && f === "" ? c = { 0: o } : !isNaN(u) && l !== f && String(u) === f && u >= 0 && t.parseArrays && u <= t.arrayLimit ? (c = [], c[u] = o) : f !== "__proto__" && (c[f] = o);
    }
    o = c;
  }
  return o;
}, vi = function(e, t, n, o) {
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
    return f && p.push("[" + i.slice(f.index) + "]"), mi(p, t, n, o);
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
  for (var n = typeof r == "string" ? di(r, t) : r, o = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), c = 0; c < i.length; ++c) {
    var l = i[c], f = vi(l, n[l], t, typeof r == "string");
    o = ue.merge(o, f, t);
  }
  return t.allowSparse === !0 ? o : ue.compact(o);
}, Si = ci, bi = hi, Ei = Ar, nr = {
  formats: Ei,
  parse: bi,
  stringify: Si
};
const Ai = a.object({
  entryLabel: a.record(a.array(a.string())),
  approvalFlow: a.array(a.string()),
  blockedAuthorProps: a.array(a.string()),
  reportReasons: a.record(a.string()),
  regex: a.object({
    uid: a.string(),
    relatedUid: a.string(),
    email: a.string(),
    sorting: a.string()
  }),
  enabledCollections: a.array(a.string()),
  moderatorRoles: a.array(a.string()),
  isGQLPluginEnabled: a.boolean(),
  badWords: a.boolean().nullable().optional(),
  gql: a.object({
    auth: a.boolean().nullable()
  }).optional(),
  client: a.object({
    url: a.string().nullable(),
    contactEmail: a.string().nullable()
  }).default({ url: null, contactEmail: null })
}), Dt = a.intersection(
  a.object({
    id: a.number(),
    uid: a.string(),
    documentId: a.string(),
    createdAt: a.string(),
    updatedAt: a.string(),
    publishedAt: a.string().nullable(),
    locale: a.string().nullable().optional()
  }),
  a.record(a.unknown())
), Pi = a.object({
  id: a.union([a.number(), a.string()]),
  name: a.string().optional().nullable(),
  email: a.string(),
  avatar: a.union([
    a.object({
      url: a.string()
    }),
    a.object({
      url: a.string(),
      formats: a.object({
        thumbnail: a.object({
          url: a.string()
        }).nullable()
      })
    }),
    a.string()
  ]).nullable().optional()
}), Lt = a.union([
  a.literal(z.PENDING),
  a.literal(z.APPROVED),
  a.literal(z.REJECTED),
  a.literal(z.BLOCKED),
  a.literal(z.OPEN),
  a.literal(z.REMOVED),
  a.literal(z.TO_REVIEW),
  a.literal(z.UNKNOWN)
]), Oi = a.object({
  id: a.number(),
  reason: a.string().optional().nullable(),
  content: a.string(),
  resolved: a.boolean(),
  createdAt: a.string(),
  updatedAt: a.string().nullable()
}), xe = a.object({
  id: a.number(),
  content: a.string(),
  blocked: a.boolean().nullable(),
  blockedThread: a.boolean().nullable(),
  blockReason: a.string().nullable(),
  isAdminComment: a.boolean().nullable(),
  removed: a.boolean().nullable(),
  approvalStatus: Lt.nullable(),
  createdAt: a.string(),
  updatedAt: a.string(),
  reports: a.array(Oi).nullable().optional(),
  author: Pi,
  gotThread: a.boolean().nullable().optional(),
  threadFirstItemId: a.number().nullable().optional(),
  section: a.string().nullable().optional()
}), Bt = a.object({
  page: a.number(),
  pageSize: a.number(),
  pageCount: a.number(),
  total: a.number()
});
function dr() {
  return xe.extend({
    related: Dt.optional(),
    documentId: a.string(),
    threadOf: a.lazy(
      () => xe.merge(a.object({ related: a.string(), threadOf: Ut.nullable().optional(), documentId: a.string().optional() }))
    ).nullable().optional()
  });
}
const Ut = dr(), $i = a.object({
  pagination: Bt,
  result: a.array(Ut)
}), wi = a.object({
  entity: Dt,
  selected: xe.merge(
    a.object({
      related: a.string(),
      threadOf: dr().omit({ related: !0 }).merge(a.object({ related: a.string() })).nullable().optional()
    })
  ).nullable(),
  level: a.array(dr().omit({ threadOf: !0, related: !0 }))
}), kt = a.object({
  apiID: a.string(),
  uid: a.string(),
  schema: a.object({
    attributes: a.record(a.object({ type: a.union([a.literal("string"), a.string()]) })),
    collectionName: a.string(),
    description: a.string(),
    displayName: a.string(),
    draftAndPublish: a.boolean(),
    kind: a.string(),
    pluralName: a.string(),
    singularName: a.string(),
    visible: a.boolean()
  })
}), Ri = a.object({
  data: kt
}), Ti = a.object({
  data: a.array(kt)
}), Ci = a.object({
  author: a.unknown(),
  content: a.string(),
  id: a.number(),
  approvalStatus: Lt.nullable().optional(),
  reason: a.string().optional().nullable(),
  reports: a.array(a.unknown()),
  resolved: a.boolean().optional(),
  updatedAt: a.string().nullable(),
  createdAt: a.string(),
  related: xe
}), _i = a.object({
  pagination: Bt,
  result: a.array(Ci)
}), xi = a.object({
  id: a.number(),
  documentId: a.string(),
  name: a.string(),
  code: a.string(),
  description: a.string(),
  createdAt: a.string(),
  updatedAt: a.string(),
  publishedAt: a.string(),
  locale: a.string().nullable(),
  usersCount: a.number()
}), Ii = a.object({
  data: a.array(
    xi
  )
}), Ni = a.object({
  data: a.object({
    id: a.number(),
    documentId: a.string(),
    firstname: a.string(),
    lastname: a.string(),
    username: a.string().nullable(),
    email: a.string(),
    isActive: a.boolean(),
    blocked: a.boolean(),
    preferedLanguage: a.string().nullable(),
    createdAt: a.string(),
    updatedAt: a.string(),
    publishedAt: a.string(),
    locale: a.null(),
    roles: a.array(
      a.object({
        id: a.number(),
        name: a.string(),
        description: a.string(),
        code: a.string()
      })
    )
  })
}), b = "comments", Fi = Tr.once((r) => ({
  config: {
    getKey() {
      return [b, "config"];
    },
    async query() {
      const e = await r.get(`/${b}/settings/config`);
      return Ai.parseAsync(e.data);
    }
  },
  contentTypeBuilder: {
    single: {
      getKey(e, t) {
        return [b, "moderate", "content-type", t, e];
      },
      async query(e) {
        const t = await r.get(`/content-type-builder/content-types/${e}`);
        return Ri.parseAsync(t.data).then((n) => n.data);
      }
    },
    all: {
      getKey() {
        return [b, "moderate", "content-types"];
      },
      async query() {
        const e = await r.get("/content-type-builder/content-types");
        return Ti.parseAsync(e.data).then((t) => t.data);
      }
    }
  },
  roles: {
    getKey() {
      return [b, "moderate", "roles"];
    },
    async query() {
      const e = await r.get("/admin/roles");
      return Ii.parseAsync(e.data).then((t) => t.data);
    }
  },
  user: {
    getKey() {
      return [b, "moderate", "user"];
    },
    async query() {
      const e = await r.get("/admin/users/me");
      return Ni.parseAsync(e.data).then((t) => t.data);
    }
  },
  comments: {
    findAll: {
      getKey(e) {
        return [b, "moderate", "all", e ? JSON.stringify(e) : void 0].filter(Boolean);
      },
      async query(e) {
        const t = await r.get(`/${b}/moderate/all?${nr.stringify(e, { encode: !1 })}`);
        return $i.parseAsync(t.data);
      }
    },
    findAllSections: {
      getKey() {
        return [b, "moderate", "sections"];
      },
      async query() {
        return (await r.get(`/${b}/moderate/sections`)).data;
      }
    },
    findOne: {
      getKey(e, t) {
        return [b, "details", e?.toString(), t ? JSON.stringify(t) : void 0].filter(Boolean);
      },
      async query(e, t) {
        const n = Tr.isEmpty(t) ? "" : `?${nr.stringify(t, { encode: !1 })}`, o = await r.get(`/${b}/moderate/single/${e}${n}`);
        return wi.parseAsync(o.data);
      }
    },
    approve(e) {
      return r.put(`/${b}/moderate/single/${e}/approve`);
    },
    reject(e) {
      return r.put(`/${b}/moderate/single/${e}/reject`);
    },
    block(e) {
      return r.put(`/${b}/moderate/single/${e}/block`);
    },
    unblock(e) {
      return r.put(`/${b}/moderate/single/${e}/unblock`);
    },
    blockThread(e) {
      return r.put(`/${b}/moderate/thread/${e}/block`);
    },
    unBlockThread(e) {
      return r.put(`/${b}/moderate/thread/${e}/unblock`);
    },
    delete(e) {
      return r.del(`/${b}/moderate/single/${e}/delete`);
    },
    postComment({ id: e, content: t, author: n }) {
      return r.post(`/${b}/moderate/thread/${e}/postComment`, { content: t, author: n });
    },
    updateComment({ id: e, content: t }) {
      return r.put(`/${b}/moderate/single/${e}/update`, { content: t });
    }
  },
  reports: {
    findAll: {
      getKey(e) {
        return [b, "moderate", "reports", e ? JSON.stringify(e) : void 0].filter(Boolean);
      },
      async query(e) {
        const t = await r.get(`/${b}/moderate/reports${e ? `?${nr.stringify(e, { encode: !1 })}` : ""}`);
        return _i.parseAsync(t.data);
      }
    },
    resolve({ id: e, reportId: t }) {
      return r.put(`/${b}/moderate/single/${e}/report/${t}/resolve`);
    },
    resolveMultipleReports({ reportIds: e }) {
      return r.put(`/${b}/moderate/multiple/report/resolve`, { reportIds: e });
    },
    resolveCommentMultipleReports({ id: e, reportIds: t }) {
      return r.put(`/${b}/moderate/single/${e}/report/resolve`, { reportIds: t });
    },
    resolveAllAbuseReportsForComment(e) {
      return r.put(`/${b}/moderate/all/${e}/report/resolve`);
    },
    resolveAllAbuseReportsForThread(e) {
      return r.put(`/${b}/moderate/thread/${e}/report/resolve-thread`);
    }
  },
  settings: {
    update(e) {
      return r.put(`/${b}/settings/config`, e);
    },
    restore() {
      return r.del(`/${b}/settings/config`);
    },
    restart() {
      return r.post(`/${b}/settings/restart`);
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
  return /* @__PURE__ */ _(pn, { client: Bi, children: /* @__PURE__ */ _(on, { theme: { theme: e }, children: /* @__PURE__ */ _(Li, { children: r }) }) });
}, Ki = () => {
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
      canReportsRead: o,
      canSettingsChange: i,
      canSettingsRead: c,
      canReportsReview: l
    }
  } = mn(r);
  return {
    isLoadingForPermissions: e,
    canAccess: n || o || c,
    canModerate: t,
    canAccessReports: o,
    canReviewReports: l,
    canSettings: c,
    canSettingsChange: i
  };
}, Yi = ({
  title: r,
  onConfirm: e,
  Trigger: t,
  labelConfirm: n,
  iconConfirm: o,
  labelCancel: i,
  children: c
}) => {
  const [l, f] = or(!1), [u, p] = or(!1), y = () => f((h) => !h), m = async () => {
    p(!0), await e(), p(!1), y();
  };
  return /* @__PURE__ */ Ee(V.Root, { open: l, children: [
    /* @__PURE__ */ _(V.Trigger, { children: /* @__PURE__ */ _(t, { onClick: y }) }),
    /* @__PURE__ */ Ee(V.Content, { children: [
      /* @__PURE__ */ _(V.Header, { children: r }),
      /* @__PURE__ */ _(V.Body, { children: /* @__PURE__ */ Ee(an, { justifyContent: "center", direction: "column", children: [
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
            startIcon: o,
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
  Ki as a,
  vr as b,
  Tn as c,
  Yi as d,
  Hi as e,
  Vi as g,
  Mi as u
};
