import { ad as Kt, ae as Qt, af as Pr, ag as rt, p as Jt, ah as Xt, ai as Or, l as $r, aj as Zt, ak as ee, al as V, F as en, am as rn, T as tn, e as wr } from "./index-DiKfRfmm.mjs";
import * as ae from "react";
import { useState as rr, useEffect as nn, useMemo as tt, createContext as on } from "react";
import { jsx as C, jsxs as Ee } from "react/jsx-runtime";
import { useQuery as an, QueryClientProvider as ln, QueryClient as un } from "@tanstack/react-query";
import { getFetchClient as cn, useRBAC as fn } from "@strapi/strapi/admin";
import { z as a } from "zod";
const sn = () => {
  const r = () => window.matchMedia("(prefers-color-scheme: dark)").matches, [e, t] = rr();
  return nn(() => {
    const o = r() ? "dark" : "light", i = window.localStorage?.STRAPI_THEME;
    t(i === "system" ? o : i);
  }, []), {
    theme: e === "dark" ? Kt : Qt,
    themeName: e
  };
};
var tr = { exports: {} }, b = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function pn() {
  if (Rr) return b;
  Rr = 1;
  var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, i = r ? Symbol.for("react.profiler") : 60114, u = r ? Symbol.for("react.provider") : 60109, l = r ? Symbol.for("react.context") : 60110, c = r ? Symbol.for("react.async_mode") : 60111, f = r ? Symbol.for("react.concurrent_mode") : 60111, y = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, $ = r ? Symbol.for("react.block") : 60121, _ = r ? Symbol.for("react.fundamental") : 60117, S = r ? Symbol.for("react.responder") : 60118, x = r ? Symbol.for("react.scope") : 60119;
  function P(s) {
    if (typeof s == "object" && s !== null) {
      var F = s.$$typeof;
      switch (F) {
        case e:
          switch (s = s.type, s) {
            case c:
            case f:
            case n:
            case i:
            case o:
            case d:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case l:
                case y:
                case v:
                case h:
                case u:
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
  function O(s) {
    return P(s) === f;
  }
  return b.AsyncMode = c, b.ConcurrentMode = f, b.ContextConsumer = l, b.ContextProvider = u, b.Element = e, b.ForwardRef = y, b.Fragment = n, b.Lazy = v, b.Memo = h, b.Portal = t, b.Profiler = i, b.StrictMode = o, b.Suspense = d, b.isAsyncMode = function(s) {
    return O(s) || P(s) === c;
  }, b.isConcurrentMode = O, b.isContextConsumer = function(s) {
    return P(s) === l;
  }, b.isContextProvider = function(s) {
    return P(s) === u;
  }, b.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }, b.isForwardRef = function(s) {
    return P(s) === y;
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
    return P(s) === o;
  }, b.isSuspense = function(s) {
    return P(s) === d;
  }, b.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === f || s === i || s === o || s === d || s === m || typeof s == "object" && s !== null && (s.$$typeof === v || s.$$typeof === h || s.$$typeof === u || s.$$typeof === l || s.$$typeof === y || s.$$typeof === _ || s.$$typeof === S || s.$$typeof === x || s.$$typeof === $);
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
var Tr;
function yn() {
  return Tr || (Tr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, i = r ? Symbol.for("react.profiler") : 60114, u = r ? Symbol.for("react.provider") : 60109, l = r ? Symbol.for("react.context") : 60110, c = r ? Symbol.for("react.async_mode") : 60111, f = r ? Symbol.for("react.concurrent_mode") : 60111, y = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, $ = r ? Symbol.for("react.block") : 60121, _ = r ? Symbol.for("react.fundamental") : 60117, S = r ? Symbol.for("react.responder") : 60118, x = r ? Symbol.for("react.scope") : 60119;
    function P(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === f || p === i || p === o || p === d || p === m || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === h || p.$$typeof === u || p.$$typeof === l || p.$$typeof === y || p.$$typeof === _ || p.$$typeof === S || p.$$typeof === x || p.$$typeof === $);
    }
    function O(p) {
      if (typeof p == "object" && p !== null) {
        var De = p.$$typeof;
        switch (De) {
          case e:
            var be = p.type;
            switch (be) {
              case c:
              case f:
              case n:
              case i:
              case o:
              case d:
                return be;
              default:
                var Ar = be && be.$$typeof;
                switch (Ar) {
                  case l:
                  case y:
                  case v:
                  case h:
                  case u:
                    return Ar;
                  default:
                    return De;
                }
            }
          case t:
            return De;
        }
      }
    }
    var s = c, F = f, B = l, M = u, W = e, q = y, K = n, I = v, N = h, G = t, Z = i, j = o, Dt = d, br = !1;
    function Lt(p) {
      return br || (br = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Er(p) || O(p) === c;
    }
    function Er(p) {
      return O(p) === f;
    }
    function Bt(p) {
      return O(p) === l;
    }
    function Ut(p) {
      return O(p) === u;
    }
    function kt(p) {
      return typeof p == "object" && p !== null && p.$$typeof === e;
    }
    function Wt(p) {
      return O(p) === y;
    }
    function qt(p) {
      return O(p) === n;
    }
    function Gt(p) {
      return O(p) === v;
    }
    function jt(p) {
      return O(p) === h;
    }
    function Vt(p) {
      return O(p) === t;
    }
    function zt(p) {
      return O(p) === i;
    }
    function Ht(p) {
      return O(p) === o;
    }
    function Yt(p) {
      return O(p) === d;
    }
    E.AsyncMode = s, E.ConcurrentMode = F, E.ContextConsumer = B, E.ContextProvider = M, E.Element = W, E.ForwardRef = q, E.Fragment = K, E.Lazy = I, E.Memo = N, E.Portal = G, E.Profiler = Z, E.StrictMode = j, E.Suspense = Dt, E.isAsyncMode = Lt, E.isConcurrentMode = Er, E.isContextConsumer = Bt, E.isContextProvider = Ut, E.isElement = kt, E.isForwardRef = Wt, E.isFragment = qt, E.isLazy = Gt, E.isMemo = jt, E.isPortal = Vt, E.isProfiler = zt, E.isStrictMode = Ht, E.isSuspense = Yt, E.isValidElementType = P, E.typeOf = O;
  }()), E;
}
process.env.NODE_ENV === "production" ? tr.exports = pn() : tr.exports = yn();
var dn = tr.exports, nt = dn, mn = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, vn = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ot = {};
ot[nt.ForwardRef] = mn;
ot[nt.Memo] = vn;
function gn(r, e, t) {
  if (t === void 0 && (t = Error), !r)
    throw new t(e);
}
var hn = function(r) {
  process.env.NODE_ENV !== "production" && console.error(r);
}, Sn = function(r) {
  process.env.NODE_ENV !== "production" && console.warn(r);
}, bn = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: hn,
  onWarn: Sn
};
function En(r) {
  gn(r, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
Pr(Pr({}, bn), { textComponent: ae.Fragment });
var pr = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = ae.createContext(null)) : ae.createContext(null);
pr.Consumer;
pr.Provider;
var An = pr;
function yr() {
  var r = ae.useContext(An);
  return En(r), r;
}
var nr;
(function(r) {
  r.formatDate = "FormattedDate", r.formatTime = "FormattedTime", r.formatNumber = "FormattedNumber", r.formatList = "FormattedList", r.formatDisplayName = "FormattedDisplayName";
})(nr || (nr = {}));
var or;
(function(r) {
  r.formatDate = "FormattedDateParts", r.formatTime = "FormattedTimeParts", r.formatNumber = "FormattedNumberParts", r.formatList = "FormattedListParts";
})(or || (or = {}));
function at(r) {
  var e = function(t) {
    var n = yr(), o = t.value, i = t.children, u = rt(t, ["value", "children"]), l = typeof o == "string" ? new Date(o || 0) : o, c = r === "formatDate" ? n.formatDateToParts(l, u) : n.formatTimeToParts(l, u);
    return i(c);
  };
  return e.displayName = or[r], e;
}
function ve(r) {
  var e = function(t) {
    var n = yr(), o = t.value, i = t.children, u = rt(
      t,
      ["value", "children"]
    ), l = n[r](o, u);
    if (typeof i == "function")
      return i(l);
    var c = n.textComponent || ae.Fragment;
    return ae.createElement(c, null, l);
  };
  return e.displayName = nr[r], e;
}
ve("formatDate");
ve("formatTime");
ve("formatNumber");
ve("formatList");
ve("formatDisplayName");
at("formatDate");
at("formatTime");
const Hi = (r, e = "", t = !0) => {
  const { formatMessage: n } = yr();
  let o = "";
  return typeof r == "string" ? o = r : o = r?.id.toString() || o, n(
    {
      id: `${t ? Jt : "app.components"}.${o}`,
      defaultMessage: e
    },
    typeof r == "string" ? void 0 : r?.props
  );
}, it = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED"
}, Yi = {
  ...it,
  BLOCKED: "BLOCKED",
  OPEN: "OPEN",
  RESOLVED: "RESOLVED"
};
var Pn = /* @__PURE__ */ ((r) => (r.BAD_LANGUAGE = "BAD_LANGUAGE", r.DISCRIMINATION = "DISCRIMINATION", r.OTHER = "OTHER", r))(Pn || {});
const z = {
  ...it,
  BLOCKED: "BLOCKED",
  OPEN: "OPEN",
  REMOVED: "REMOVED",
  TO_REVIEW: "TO_REVIEW",
  UNKNOWN: "UNKNOWN"
};
var ce = TypeError;
const On = {}, $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: On
}, Symbol.toStringTag, { value: "Module" })), wn = /* @__PURE__ */ Xt($n);
var dr = typeof Map == "function" && Map.prototype, Le = Object.getOwnPropertyDescriptor && dr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Re = dr && Le && typeof Le.get == "function" ? Le.get : null, Cr = dr && Map.prototype.forEach, mr = typeof Set == "function" && Set.prototype, Be = Object.getOwnPropertyDescriptor && mr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Te = mr && Be && typeof Be.get == "function" ? Be.get : null, _r = mr && Set.prototype.forEach, Rn = typeof WeakMap == "function" && WeakMap.prototype, se = Rn ? WeakMap.prototype.has : null, Tn = typeof WeakSet == "function" && WeakSet.prototype, pe = Tn ? WeakSet.prototype.has : null, Cn = typeof WeakRef == "function" && WeakRef.prototype, xr = Cn ? WeakRef.prototype.deref : null, _n = Boolean.prototype.valueOf, xn = Object.prototype.toString, In = Function.prototype.toString, Nn = String.prototype.match, vr = String.prototype.slice, H = String.prototype.replace, Fn = String.prototype.toUpperCase, Ir = String.prototype.toLowerCase, lt = RegExp.prototype.test, Nr = Array.prototype.concat, L = Array.prototype.join, Mn = Array.prototype.slice, Fr = Math.floor, ar = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ue = Object.getOwnPropertySymbols, ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ie = typeof Symbol == "function" && typeof Symbol.iterator == "object", ye = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ie || !0) ? Symbol.toStringTag : null, ut = Object.prototype.propertyIsEnumerable, Mr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(r) {
  return r.__proto__;
} : null);
function Dr(r, e) {
  if (r === 1 / 0 || r === -1 / 0 || r !== r || r && r > -1e3 && r < 1e3 || lt.call(/e/, e))
    return e;
  var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof r == "number") {
    var n = r < 0 ? -Fr(-r) : Fr(r);
    if (n !== r) {
      var o = String(n), i = vr.call(e, o.length + 1);
      return H.call(o, t, "$&_") + "." + H.call(H.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return H.call(e, t, "$&_");
}
var lr = wn, Lr = lr.custom, Br = st(Lr) ? Lr : null, ct = {
  __proto__: null,
  double: '"',
  single: "'"
}, Dn = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, Ie = function r(e, t, n, o) {
  var i = t || {};
  if (U(i, "quoteStyle") && !U(ct, i.quoteStyle))
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (U(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var u = U(i, "customInspect") ? i.customInspect : !0;
  if (typeof u != "boolean" && u !== "symbol")
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
    return yt(e, i);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var c = String(e);
    return l ? Dr(e, c) : c;
  }
  if (typeof e == "bigint") {
    var f = String(e) + "n";
    return l ? Dr(e, f) : f;
  }
  var y = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof n > "u" && (n = 0), n >= y && y > 0 && typeof e == "object")
    return ur(e) ? "[Array]" : "[Object]";
  var d = eo(i, n);
  if (typeof o > "u")
    o = [];
  else if (pt(o, e) >= 0)
    return "[Circular]";
  function m(N, G, Z) {
    if (G && (o = Mn.call(o), o.push(G)), Z) {
      var j = {
        depth: i.depth
      };
      return U(i, "quoteStyle") && (j.quoteStyle = i.quoteStyle), r(N, j, n + 1, o);
    }
    return r(N, i, n + 1, o);
  }
  if (typeof e == "function" && !Ur(e)) {
    var h = Vn(e), v = Ae(e, m);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (v.length > 0 ? " { " + L.call(v, ", ") + " }" : "");
  }
  if (st(e)) {
    var $ = ie ? H.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : ir.call(e);
    return typeof e == "object" && !ie ? fe($) : $;
  }
  if (Jn(e)) {
    for (var _ = "<" + Ir.call(String(e.nodeName)), S = e.attributes || [], x = 0; x < S.length; x++)
      _ += " " + S[x].name + "=" + ft(Ln(S[x].value), "double", i);
    return _ += ">", e.childNodes && e.childNodes.length && (_ += "..."), _ += "</" + Ir.call(String(e.nodeName)) + ">", _;
  }
  if (ur(e)) {
    if (e.length === 0)
      return "[]";
    var P = Ae(e, m);
    return d && !Zn(P) ? "[" + cr(P, d) + "]" : "[ " + L.call(P, ", ") + " ]";
  }
  if (Un(e)) {
    var O = Ae(e, m);
    return !("cause" in Error.prototype) && "cause" in e && !ut.call(e, "cause") ? "{ [" + String(e) + "] " + L.call(Nr.call("[cause]: " + m(e.cause), O), ", ") + " }" : O.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + L.call(O, ", ") + " }";
  }
  if (typeof e == "object" && u) {
    if (Br && typeof e[Br] == "function" && lr)
      return lr(e, { depth: y - n });
    if (u !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (zn(e)) {
    var s = [];
    return Cr && Cr.call(e, function(N, G) {
      s.push(m(G, e, !0) + " => " + m(N, e));
    }), kr("Map", Re.call(e), s, d);
  }
  if (Kn(e)) {
    var F = [];
    return _r && _r.call(e, function(N) {
      F.push(m(N, e));
    }), kr("Set", Te.call(e), F, d);
  }
  if (Hn(e))
    return ke("WeakMap");
  if (Qn(e))
    return ke("WeakSet");
  if (Yn(e))
    return ke("WeakRef");
  if (Wn(e))
    return fe(m(Number(e)));
  if (Gn(e))
    return fe(m(ar.call(e)));
  if (qn(e))
    return fe(_n.call(e));
  if (kn(e))
    return fe(m(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && e === globalThis || typeof Or < "u" && e === Or)
    return "{ [object globalThis] }";
  if (!Bn(e) && !Ur(e)) {
    var B = Ae(e, m), M = Mr ? Mr(e) === Object.prototype : e instanceof Object || e.constructor === Object, W = e instanceof Object ? "" : "null prototype", q = !M && ye && Object(e) === e && ye in e ? vr.call(Y(e), 8, -1) : W ? "Object" : "", K = M || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", I = K + (q || W ? "[" + L.call(Nr.call([], q || [], W || []), ": ") + "] " : "");
    return B.length === 0 ? I + "{}" : d ? I + "{" + cr(B, d) + "}" : I + "{ " + L.call(B, ", ") + " }";
  }
  return String(e);
};
function ft(r, e, t) {
  var n = t.quoteStyle || e, o = ct[n];
  return o + r + o;
}
function Ln(r) {
  return H.call(String(r), /"/g, "&quot;");
}
function X(r) {
  return !ye || !(typeof r == "object" && (ye in r || typeof r[ye] < "u"));
}
function ur(r) {
  return Y(r) === "[object Array]" && X(r);
}
function Bn(r) {
  return Y(r) === "[object Date]" && X(r);
}
function Ur(r) {
  return Y(r) === "[object RegExp]" && X(r);
}
function Un(r) {
  return Y(r) === "[object Error]" && X(r);
}
function kn(r) {
  return Y(r) === "[object String]" && X(r);
}
function Wn(r) {
  return Y(r) === "[object Number]" && X(r);
}
function qn(r) {
  return Y(r) === "[object Boolean]" && X(r);
}
function st(r) {
  if (ie)
    return r && typeof r == "object" && r instanceof Symbol;
  if (typeof r == "symbol")
    return !0;
  if (!r || typeof r != "object" || !ir)
    return !1;
  try {
    return ir.call(r), !0;
  } catch {
  }
  return !1;
}
function Gn(r) {
  if (!r || typeof r != "object" || !ar)
    return !1;
  try {
    return ar.call(r), !0;
  } catch {
  }
  return !1;
}
var jn = Object.prototype.hasOwnProperty || function(r) {
  return r in this;
};
function U(r, e) {
  return jn.call(r, e);
}
function Y(r) {
  return xn.call(r);
}
function Vn(r) {
  if (r.name)
    return r.name;
  var e = Nn.call(In.call(r), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function pt(r, e) {
  if (r.indexOf)
    return r.indexOf(e);
  for (var t = 0, n = r.length; t < n; t++)
    if (r[t] === e)
      return t;
  return -1;
}
function zn(r) {
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
function Hn(r) {
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
function Yn(r) {
  if (!xr || !r || typeof r != "object")
    return !1;
  try {
    return xr.call(r), !0;
  } catch {
  }
  return !1;
}
function Kn(r) {
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
function Qn(r) {
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
function Jn(r) {
  return !r || typeof r != "object" ? !1 : typeof HTMLElement < "u" && r instanceof HTMLElement ? !0 : typeof r.nodeName == "string" && typeof r.getAttribute == "function";
}
function yt(r, e) {
  if (r.length > e.maxStringLength) {
    var t = r.length - e.maxStringLength, n = "... " + t + " more character" + (t > 1 ? "s" : "");
    return yt(vr.call(r, 0, e.maxStringLength), e) + n;
  }
  var o = Dn[e.quoteStyle || "single"];
  o.lastIndex = 0;
  var i = H.call(H.call(r, o, "\\$1"), /[\x00-\x1f]/g, Xn);
  return ft(i, "single", e);
}
function Xn(r) {
  var e = r.charCodeAt(0), t = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + Fn.call(e.toString(16));
}
function fe(r) {
  return "Object(" + r + ")";
}
function ke(r) {
  return r + " { ? }";
}
function kr(r, e, t, n) {
  var o = n ? cr(t, n) : L.call(t, ", ");
  return r + " (" + e + ") {" + o + "}";
}
function Zn(r) {
  for (var e = 0; e < r.length; e++)
    if (pt(r[e], `
`) >= 0)
      return !1;
  return !0;
}
function eo(r, e) {
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
function cr(r, e) {
  if (r.length === 0)
    return "";
  var t = `
` + e.prev + e.base;
  return t + L.call(r, "," + t) + `
` + e.prev;
}
function Ae(r, e) {
  var t = ur(r), n = [];
  if (t) {
    n.length = r.length;
    for (var o = 0; o < r.length; o++)
      n[o] = U(r, o) ? e(r[o], r) : "";
  }
  var i = typeof Ue == "function" ? Ue(r) : [], u;
  if (ie) {
    u = {};
    for (var l = 0; l < i.length; l++)
      u["$" + i[l]] = i[l];
  }
  for (var c in r)
    U(r, c) && (t && String(Number(c)) === c && c < r.length || ie && u["$" + c] instanceof Symbol || (lt.call(/[^\w$]/, c) ? n.push(e(c, r) + ": " + e(r[c], r)) : n.push(c + ": " + e(r[c], r))));
  if (typeof Ue == "function")
    for (var f = 0; f < i.length; f++)
      ut.call(r, i[f]) && n.push("[" + e(i[f]) + "]: " + e(r[i[f]], r));
  return n;
}
var ro = Ie, to = ce, Ne = function(r, e, t) {
  for (var n = r, o; (o = n.next) != null; n = o)
    if (o.key === e)
      return n.next = o.next, t || (o.next = /** @type {NonNullable<typeof list.next>} */
      r.next, r.next = o), o;
}, no = function(r, e) {
  if (r) {
    var t = Ne(r, e);
    return t && t.value;
  }
}, oo = function(r, e, t) {
  var n = Ne(r, e);
  n ? n.value = t : r.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: r.next,
    value: t
  };
}, ao = function(r, e) {
  return r ? !!Ne(r, e) : !1;
}, io = function(r, e) {
  if (r)
    return Ne(r, e, !0);
}, lo = function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new to("Side channel does not contain " + ro(n));
    },
    delete: function(n) {
      var o = e && e.next, i = io(e, n);
      return i && o && o === i && (e = void 0), !!i;
    },
    get: function(n) {
      return no(e, n);
    },
    has: function(n) {
      return ao(e, n);
    },
    set: function(n, o) {
      e || (e = {
        next: void 0
      }), oo(
        /** @type {NonNullable<typeof $o>} */
        e,
        n,
        o
      );
    }
  };
  return t;
}, dt = Object, uo = Error, co = EvalError, fo = RangeError, so = ReferenceError, po = SyntaxError, yo = URIError, mo = Math.abs, vo = Math.floor, go = Math.max, ho = Math.min, So = Math.pow, bo = Math.round, Eo = Number.isNaN || function(e) {
  return e !== e;
}, Ao = Eo, Po = function(e) {
  return Ao(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, Oo = Object.getOwnPropertyDescriptor, Oe = Oo;
if (Oe)
  try {
    Oe([], "length");
  } catch {
    Oe = null;
  }
var mt = Oe, $e = Object.defineProperty || !1;
if ($e)
  try {
    $e({}, "a", { value: 1 });
  } catch {
    $e = !1;
  }
var $o = $e, We, Wr;
function wo() {
  return Wr || (Wr = 1, We = function() {
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
    var u = Object.getOwnPropertySymbols(e);
    if (u.length !== 1 || u[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
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
  }), We;
}
var qe, qr;
function Ro() {
  if (qr) return qe;
  qr = 1;
  var r = typeof Symbol < "u" && Symbol, e = wo();
  return qe = function() {
    return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, qe;
}
var Ge, Gr;
function vt() {
  return Gr || (Gr = 1, Ge = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ge;
}
var je, jr;
function gt() {
  if (jr) return je;
  jr = 1;
  var r = dt;
  return je = r.getPrototypeOf || null, je;
}
var To = "Function.prototype.bind called on incompatible ", Co = Object.prototype.toString, _o = Math.max, xo = "[object Function]", Vr = function(e, t) {
  for (var n = [], o = 0; o < e.length; o += 1)
    n[o] = e[o];
  for (var i = 0; i < t.length; i += 1)
    n[i + e.length] = t[i];
  return n;
}, Io = function(e, t) {
  for (var n = [], o = t, i = 0; o < e.length; o += 1, i += 1)
    n[i] = e[o];
  return n;
}, No = function(r, e) {
  for (var t = "", n = 0; n < r.length; n += 1)
    t += r[n], n + 1 < r.length && (t += e);
  return t;
}, Fo = function(e) {
  var t = this;
  if (typeof t != "function" || Co.apply(t) !== xo)
    throw new TypeError(To + t);
  for (var n = Io(arguments, 1), o, i = function() {
    if (this instanceof o) {
      var y = t.apply(
        this,
        Vr(n, arguments)
      );
      return Object(y) === y ? y : this;
    }
    return t.apply(
      e,
      Vr(n, arguments)
    );
  }, u = _o(0, t.length - n.length), l = [], c = 0; c < u; c++)
    l[c] = "$" + c;
  if (o = Function("binder", "return function (" + No(l, ",") + "){ return binder.apply(this,arguments); }")(i), t.prototype) {
    var f = function() {
    };
    f.prototype = t.prototype, o.prototype = new f(), f.prototype = null;
  }
  return o;
}, Mo = Fo, Fe = Function.prototype.bind || Mo, gr = Function.prototype.call, Ve, zr;
function ht() {
  return zr || (zr = 1, Ve = Function.prototype.apply), Ve;
}
var Do = typeof Reflect < "u" && Reflect && Reflect.apply, Lo = Fe, Bo = ht(), Uo = gr, ko = Do, Wo = ko || Lo.call(Uo, Bo), qo = Fe, Go = ce, jo = gr, Vo = Wo, St = function(e) {
  if (e.length < 1 || typeof e[0] != "function")
    throw new Go("a function is required");
  return Vo(qo, jo, e);
}, ze, Hr;
function zo() {
  if (Hr) return ze;
  Hr = 1;
  var r = St, e = mt, t;
  try {
    t = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (u) {
    if (!u || typeof u != "object" || !("code" in u) || u.code !== "ERR_PROTO_ACCESS")
      throw u;
  }
  var n = !!t && e && e(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, i = o.getPrototypeOf;
  return ze = n && typeof n.get == "function" ? r([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return i(l == null ? l : o(l));
    }
  ) : !1, ze;
}
var He, Yr;
function Ho() {
  if (Yr) return He;
  Yr = 1;
  var r = vt(), e = gt(), t = zo();
  return He = r ? function(o) {
    return r(o);
  } : e ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return e(o);
  } : t ? function(o) {
    return t(o);
  } : null, He;
}
var Ye, Kr;
function Yo() {
  if (Kr) return Ye;
  Kr = 1;
  var r = Function.prototype.call, e = Object.prototype.hasOwnProperty, t = Fe;
  return Ye = t.call(r, e), Ye;
}
var g, Ko = dt, Qo = uo, Jo = co, Xo = fo, Zo = so, le = po, oe = ce, ea = yo, ra = mo, ta = vo, na = go, oa = ho, aa = So, ia = bo, la = Po, bt = Function, Ke = function(r) {
  try {
    return bt('"use strict"; return (' + r + ").constructor;")();
  } catch {
  }
}, me = mt, ua = $o, Qe = function() {
  throw new oe();
}, ca = me ? function() {
  try {
    return arguments.callee, Qe;
  } catch {
    try {
      return me(arguments, "callee").get;
    } catch {
      return Qe;
    }
  }
}() : Qe, re = Ro()(), R = Ho(), fa = gt(), sa = vt(), Et = ht(), ge = gr, ne = {}, pa = typeof Uint8Array > "u" || !R ? g : R(Uint8Array), J = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? g : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? g : ArrayBuffer,
  "%ArrayIteratorPrototype%": re && R ? R([][Symbol.iterator]()) : g,
  "%AsyncFromSyncIteratorPrototype%": g,
  "%AsyncFunction%": ne,
  "%AsyncGenerator%": ne,
  "%AsyncGeneratorFunction%": ne,
  "%AsyncIteratorPrototype%": ne,
  "%Atomics%": typeof Atomics > "u" ? g : Atomics,
  "%BigInt%": typeof BigInt > "u" ? g : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? g : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? g : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? g : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Qo,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Jo,
  "%Float16Array%": typeof Float16Array > "u" ? g : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? g : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? g : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? g : FinalizationRegistry,
  "%Function%": bt,
  "%GeneratorFunction%": ne,
  "%Int8Array%": typeof Int8Array > "u" ? g : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? g : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? g : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": re && R ? R(R([][Symbol.iterator]())) : g,
  "%JSON%": typeof JSON == "object" ? JSON : g,
  "%Map%": typeof Map > "u" ? g : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !re || !R ? g : R((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Ko,
  "%Object.getOwnPropertyDescriptor%": me,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? g : Promise,
  "%Proxy%": typeof Proxy > "u" ? g : Proxy,
  "%RangeError%": Xo,
  "%ReferenceError%": Zo,
  "%Reflect%": typeof Reflect > "u" ? g : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? g : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !re || !R ? g : R((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? g : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": re && R ? R(""[Symbol.iterator]()) : g,
  "%Symbol%": re ? Symbol : g,
  "%SyntaxError%": le,
  "%ThrowTypeError%": ca,
  "%TypedArray%": pa,
  "%TypeError%": oe,
  "%Uint8Array%": typeof Uint8Array > "u" ? g : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? g : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? g : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? g : Uint32Array,
  "%URIError%": ea,
  "%WeakMap%": typeof WeakMap > "u" ? g : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? g : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? g : WeakSet,
  "%Function.prototype.call%": ge,
  "%Function.prototype.apply%": Et,
  "%Object.defineProperty%": ua,
  "%Object.getPrototypeOf%": fa,
  "%Math.abs%": ra,
  "%Math.floor%": ta,
  "%Math.max%": na,
  "%Math.min%": oa,
  "%Math.pow%": aa,
  "%Math.round%": ia,
  "%Math.sign%": la,
  "%Reflect.getPrototypeOf%": sa
};
if (R)
  try {
    null.error;
  } catch (r) {
    var ya = R(R(r));
    J["%Error.prototype%"] = ya;
  }
var da = function r(e) {
  var t;
  if (e === "%AsyncFunction%")
    t = Ke("async function () {}");
  else if (e === "%GeneratorFunction%")
    t = Ke("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    t = Ke("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = r("%AsyncGeneratorFunction%");
    n && (t = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var o = r("%AsyncGenerator%");
    o && R && (t = R(o.prototype));
  }
  return J[e] = t, t;
}, Qr = {
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
}, he = Fe, Ce = Yo(), ma = he.call(ge, Array.prototype.concat), va = he.call(Et, Array.prototype.splice), Jr = he.call(ge, String.prototype.replace), _e = he.call(ge, String.prototype.slice), ga = he.call(ge, RegExp.prototype.exec), ha = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Sa = /\\(\\)?/g, ba = function(e) {
  var t = _e(e, 0, 1), n = _e(e, -1);
  if (t === "%" && n !== "%")
    throw new le("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && t !== "%")
    throw new le("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return Jr(e, ha, function(i, u, l, c) {
    o[o.length] = l ? Jr(c, Sa, "$1") : u || i;
  }), o;
}, Ea = function(e, t) {
  var n = e, o;
  if (Ce(Qr, n) && (o = Qr[n], n = "%" + o[0] + "%"), Ce(J, n)) {
    var i = J[n];
    if (i === ne && (i = da(n)), typeof i > "u" && !t)
      throw new oe("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: i
    };
  }
  throw new le("intrinsic " + e + " does not exist!");
}, hr = function(e, t) {
  if (typeof e != "string" || e.length === 0)
    throw new oe("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new oe('"allowMissing" argument must be a boolean');
  if (ga(/^%?[^%]*%?$/, e) === null)
    throw new le("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = ba(e), o = n.length > 0 ? n[0] : "", i = Ea("%" + o + "%", t), u = i.name, l = i.value, c = !1, f = i.alias;
  f && (o = f[0], va(n, ma([0, 1], f)));
  for (var y = 1, d = !0; y < n.length; y += 1) {
    var m = n[y], h = _e(m, 0, 1), v = _e(m, -1);
    if ((h === '"' || h === "'" || h === "`" || v === '"' || v === "'" || v === "`") && h !== v)
      throw new le("property names with quotes must have matching quotes");
    if ((m === "constructor" || !d) && (c = !0), o += "." + m, u = "%" + o + "%", Ce(J, u))
      l = J[u];
    else if (l != null) {
      if (!(m in l)) {
        if (!t)
          throw new oe("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (me && y + 1 >= n.length) {
        var $ = me(l, m);
        d = !!$, d && "get" in $ && !("originalValue" in $.get) ? l = $.get : l = l[m];
      } else
        d = Ce(l, m), l = l[m];
      d && !c && (J[u] = l);
    }
  }
  return l;
}, At = hr, Pt = St, Aa = Pt([At("%String.prototype.indexOf%")]), Ot = function(e, t) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    At(e, !!t)
  );
  return typeof n == "function" && Aa(e, ".prototype.") > -1 ? Pt(
    /** @type {const} */
    [n]
  ) : n;
}, Pa = hr, Se = Ot, Oa = Ie, $a = ce, Xr = Pa("%Map%", !0), wa = Se("Map.prototype.get", !0), Ra = Se("Map.prototype.set", !0), Ta = Se("Map.prototype.has", !0), Ca = Se("Map.prototype.delete", !0), _a = Se("Map.prototype.size", !0), $t = !!Xr && /** @type {Exclude<import('.'), false>} */
function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new $a("Side channel does not contain " + Oa(n));
    },
    delete: function(n) {
      if (e) {
        var o = Ca(e, n);
        return _a(e) === 0 && (e = void 0), o;
      }
      return !1;
    },
    get: function(n) {
      if (e)
        return wa(e, n);
    },
    has: function(n) {
      return e ? Ta(e, n) : !1;
    },
    set: function(n, o) {
      e || (e = new Xr()), Ra(e, n, o);
    }
  };
  return t;
}, xa = hr, Me = Ot, Ia = Ie, Pe = $t, Na = ce, te = xa("%WeakMap%", !0), Fa = Me("WeakMap.prototype.get", !0), Ma = Me("WeakMap.prototype.set", !0), Da = Me("WeakMap.prototype.has", !0), La = Me("WeakMap.prototype.delete", !0), Ba = te ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var e, t, n = {
      assert: function(o) {
        if (!n.has(o))
          throw new Na("Side channel does not contain " + Ia(o));
      },
      delete: function(o) {
        if (te && o && (typeof o == "object" || typeof o == "function")) {
          if (e)
            return La(e, o);
        } else if (Pe && t)
          return t.delete(o);
        return !1;
      },
      get: function(o) {
        return te && o && (typeof o == "object" || typeof o == "function") && e ? Fa(e, o) : t && t.get(o);
      },
      has: function(o) {
        return te && o && (typeof o == "object" || typeof o == "function") && e ? Da(e, o) : !!t && t.has(o);
      },
      set: function(o, i) {
        te && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new te()), Ma(e, o, i)) : Pe && (t || (t = Pe()), t.set(o, i));
      }
    };
    return n;
  }
) : Pe, Ua = ce, ka = Ie, Wa = lo, qa = $t, Ga = Ba, ja = Ga || qa || Wa, Va = function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new Ua("Side channel does not contain " + ka(n));
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
      e || (e = ja()), e.set(n, o);
    }
  };
  return t;
}, za = String.prototype.replace, Ha = /%20/g, Je = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Sr = {
  default: Je.RFC3986,
  formatters: {
    RFC1738: function(r) {
      return za.call(r, Ha, "+");
    },
    RFC3986: function(r) {
      return String(r);
    }
  },
  RFC1738: Je.RFC1738,
  RFC3986: Je.RFC3986
}, Ya = Sr, Xe = Object.prototype.hasOwnProperty, Q = Array.isArray, D = function() {
  for (var r = [], e = 0; e < 256; ++e)
    r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return r;
}(), Ka = function(e) {
  for (; e.length > 1; ) {
    var t = e.pop(), n = t.obj[t.prop];
    if (Q(n)) {
      for (var o = [], i = 0; i < n.length; ++i)
        typeof n[i] < "u" && o.push(n[i]);
      t.obj[t.prop] = o;
    }
  }
}, wt = function(e, t) {
  for (var n = t && t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < e.length; ++o)
    typeof e[o] < "u" && (n[o] = e[o]);
  return n;
}, Qa = function r(e, t, n) {
  if (!t)
    return e;
  if (typeof t != "object") {
    if (Q(e))
      e.push(t);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Xe.call(Object.prototype, t)) && (e[t] = !0);
    else
      return [e, t];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(t);
  var o = e;
  return Q(e) && !Q(t) && (o = wt(e, n)), Q(e) && Q(t) ? (t.forEach(function(i, u) {
    if (Xe.call(e, u)) {
      var l = e[u];
      l && typeof l == "object" && i && typeof i == "object" ? e[u] = r(l, i, n) : e.push(i);
    } else
      e[u] = i;
  }), e) : Object.keys(t).reduce(function(i, u) {
    var l = t[u];
    return Xe.call(i, u) ? i[u] = r(i[u], l, n) : i[u] = l, i;
  }, o);
}, Ja = function(e, t) {
  return Object.keys(t).reduce(function(n, o) {
    return n[o] = t[o], n;
  }, e);
}, Xa = function(r, e, t) {
  var n = r.replace(/\+/g, " ");
  if (t === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Za = function(e, t, n, o, i) {
  if (e.length === 0)
    return e;
  var u = e;
  if (typeof e == "symbol" ? u = Symbol.prototype.toString.call(e) : typeof e != "string" && (u = String(e)), n === "iso-8859-1")
    return escape(u).replace(/%u[0-9a-f]{4}/gi, function(y) {
      return "%26%23" + parseInt(y.slice(2), 16) + "%3B";
    });
  for (var l = "", c = 0; c < u.length; ++c) {
    var f = u.charCodeAt(c);
    if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || i === Ya.RFC1738 && (f === 40 || f === 41)) {
      l += u.charAt(c);
      continue;
    }
    if (f < 128) {
      l = l + D[f];
      continue;
    }
    if (f < 2048) {
      l = l + (D[192 | f >> 6] + D[128 | f & 63]);
      continue;
    }
    if (f < 55296 || f >= 57344) {
      l = l + (D[224 | f >> 12] + D[128 | f >> 6 & 63] + D[128 | f & 63]);
      continue;
    }
    c += 1, f = 65536 + ((f & 1023) << 10 | u.charCodeAt(c) & 1023), l += D[240 | f >> 18] + D[128 | f >> 12 & 63] + D[128 | f >> 6 & 63] + D[128 | f & 63];
  }
  return l;
}, ei = function(e) {
  for (var t = [{ obj: { o: e }, prop: "o" }], n = [], o = 0; o < t.length; ++o)
    for (var i = t[o], u = i.obj[i.prop], l = Object.keys(u), c = 0; c < l.length; ++c) {
      var f = l[c], y = u[f];
      typeof y == "object" && y !== null && n.indexOf(y) === -1 && (t.push({ obj: u, prop: f }), n.push(y));
    }
  return Ka(t), e;
}, ri = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, ti = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, ni = function(e, t) {
  return [].concat(e, t);
}, oi = function(e, t) {
  if (Q(e)) {
    for (var n = [], o = 0; o < e.length; o += 1)
      n.push(t(e[o]));
    return n;
  }
  return t(e);
}, Rt = {
  arrayToObject: wt,
  assign: Ja,
  combine: ni,
  compact: ei,
  decode: Xa,
  encode: Za,
  isBuffer: ti,
  isRegExp: ri,
  maybeMap: oi,
  merge: Qa
}, Tt = Va, we = Rt, de = Sr, ai = Object.prototype.hasOwnProperty, Zr = {
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
}, k = Array.isArray, ii = Array.prototype.push, Ct = function(r, e) {
  ii.apply(r, k(e) ? e : [e]);
}, li = Date.prototype.toISOString, et = de.default, T = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: we.encode,
  encodeValuesOnly: !1,
  format: et,
  formatter: de.formatters[et],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return li.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, ui = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Ze = {}, ci = function r(e, t, n, o, i, u, l, c, f, y, d, m, h, v, $, _) {
  for (var S = e, x = _, P = 0, O = !1; (x = x.get(Ze)) !== void 0 && !O; ) {
    var s = x.get(e);
    if (P += 1, typeof s < "u") {
      if (s === P)
        throw new RangeError("Cyclic object value");
      O = !0;
    }
    typeof x.get(Ze) > "u" && (P = 0);
  }
  if (typeof c == "function" ? S = c(t, S) : S instanceof Date ? S = d(S) : n === "comma" && k(S) && (S = we.maybeMap(S, function(j) {
    return j instanceof Date ? d(j) : j;
  })), S === null) {
    if (i)
      return l && !v ? l(t, T.encoder, $, "key", m) : t;
    S = "";
  }
  if (ui(S) || we.isBuffer(S)) {
    if (l) {
      var F = v ? t : l(t, T.encoder, $, "key", m);
      return [h(F) + "=" + h(l(S, T.encoder, $, "value", m))];
    }
    return [h(t) + "=" + h(String(S))];
  }
  var B = [];
  if (typeof S > "u")
    return B;
  var M;
  if (n === "comma" && k(S))
    v && l && (S = we.maybeMap(S, l)), M = [{ value: S.length > 0 ? S.join(",") || null : void 0 }];
  else if (k(c))
    M = c;
  else {
    var W = Object.keys(S);
    M = f ? W.sort(f) : W;
  }
  for (var q = o && k(S) && S.length === 1 ? t + "[]" : t, K = 0; K < M.length; ++K) {
    var I = M[K], N = typeof I == "object" && typeof I.value < "u" ? I.value : S[I];
    if (!(u && N === null)) {
      var G = k(S) ? typeof n == "function" ? n(q, I) : q : q + (y ? "." + I : "[" + I + "]");
      _.set(e, P);
      var Z = Tt();
      Z.set(Ze, _), Ct(B, r(
        N,
        G,
        n,
        o,
        i,
        u,
        n === "comma" && v && k(S) ? null : l,
        c,
        f,
        y,
        d,
        m,
        h,
        v,
        $,
        Z
      ));
    }
  }
  return B;
}, fi = function(e) {
  if (!e)
    return T;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var t = e.charset || T.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = de.default;
  if (typeof e.format < "u") {
    if (!ai.call(de.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var o = de.formatters[n], i = T.filter;
  return (typeof e.filter == "function" || k(e.filter)) && (i = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : T.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? T.allowDots : !!e.allowDots,
    charset: t,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : T.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? T.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : T.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : T.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : T.encodeValuesOnly,
    filter: i,
    format: n,
    formatter: o,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : T.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : T.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : T.strictNullHandling
  };
}, si = function(r, e) {
  var t = r, n = fi(e), o, i;
  typeof n.filter == "function" ? (i = n.filter, t = i("", t)) : k(n.filter) && (i = n.filter, o = i);
  var u = [];
  if (typeof t != "object" || t === null)
    return "";
  var l;
  e && e.arrayFormat in Zr ? l = e.arrayFormat : e && "indices" in e ? l = e.indices ? "indices" : "repeat" : l = "indices";
  var c = Zr[l];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var f = c === "comma" && e && e.commaRoundTrip;
  o || (o = Object.keys(t)), n.sort && o.sort(n.sort);
  for (var y = Tt(), d = 0; d < o.length; ++d) {
    var m = o[d];
    n.skipNulls && t[m] === null || Ct(u, ci(
      t[m],
      m,
      c,
      f,
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
      y
    ));
  }
  var h = u.join(n.delimiter), v = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"), h.length > 0 ? v + h : "";
}, ue = Rt, fr = Object.prototype.hasOwnProperty, pi = Array.isArray, w = {
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
}, yi = function(r) {
  return r.replace(/&#(\d+);/g, function(e, t) {
    return String.fromCharCode(parseInt(t, 10));
  });
}, _t = function(r, e) {
  return r && typeof r == "string" && e.comma && r.indexOf(",") > -1 ? r.split(",") : r;
}, di = "utf8=%26%2310003%3B", mi = "utf8=%E2%9C%93", vi = function(e, t) {
  var n = {}, o = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, u = o.split(t.delimiter, i), l = -1, c, f = t.charset;
  if (t.charsetSentinel)
    for (c = 0; c < u.length; ++c)
      u[c].indexOf("utf8=") === 0 && (u[c] === mi ? f = "utf-8" : u[c] === di && (f = "iso-8859-1"), l = c, c = u.length);
  for (c = 0; c < u.length; ++c)
    if (c !== l) {
      var y = u[c], d = y.indexOf("]="), m = d === -1 ? y.indexOf("=") : d + 1, h, v;
      m === -1 ? (h = t.decoder(y, w.decoder, f, "key"), v = t.strictNullHandling ? null : "") : (h = t.decoder(y.slice(0, m), w.decoder, f, "key"), v = ue.maybeMap(
        _t(y.slice(m + 1), t),
        function($) {
          return t.decoder($, w.decoder, f, "value");
        }
      )), v && t.interpretNumericEntities && f === "iso-8859-1" && (v = yi(v)), y.indexOf("[]=") > -1 && (v = pi(v) ? [v] : v), fr.call(n, h) ? n[h] = ue.combine(n[h], v) : n[h] = v;
    }
  return n;
}, gi = function(r, e, t, n) {
  for (var o = n ? e : _t(e, t), i = r.length - 1; i >= 0; --i) {
    var u, l = r[i];
    if (l === "[]" && t.parseArrays)
      u = [].concat(o);
    else {
      u = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l, f = parseInt(c, 10);
      !t.parseArrays && c === "" ? u = { 0: o } : !isNaN(f) && l !== c && String(f) === c && f >= 0 && t.parseArrays && f <= t.arrayLimit ? (u = [], u[f] = o) : c !== "__proto__" && (u[c] = o);
    }
    o = u;
  }
  return o;
}, hi = function(e, t, n, o) {
  if (e) {
    var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, u = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, c = n.depth > 0 && u.exec(i), f = c ? i.slice(0, c.index) : i, y = [];
    if (f) {
      if (!n.plainObjects && fr.call(Object.prototype, f) && !n.allowPrototypes)
        return;
      y.push(f);
    }
    for (var d = 0; n.depth > 0 && (c = l.exec(i)) !== null && d < n.depth; ) {
      if (d += 1, !n.plainObjects && fr.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      y.push(c[1]);
    }
    return c && y.push("[" + i.slice(c.index) + "]"), gi(y, t, n, o);
  }
}, Si = function(e) {
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
}, bi = function(r, e) {
  var t = Si(e);
  if (r === "" || r === null || typeof r > "u")
    return t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof r == "string" ? vi(r, t) : r, o = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), u = 0; u < i.length; ++u) {
    var l = i[u], c = hi(l, n[l], t, typeof r == "string");
    o = ue.merge(o, c, t);
  }
  return t.allowSparse === !0 ? o : ue.compact(o);
}, Ei = si, Ai = bi, Pi = Sr, er = {
  formats: Pi,
  parse: Ai,
  stringify: Ei
};
const Oi = a.object({
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
}), xt = a.intersection(
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
), $i = a.object({
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
}), It = a.union([
  a.literal(z.PENDING),
  a.literal(z.APPROVED),
  a.literal(z.REJECTED),
  a.literal(z.BLOCKED),
  a.literal(z.OPEN),
  a.literal(z.REMOVED),
  a.literal(z.TO_REVIEW),
  a.literal(z.UNKNOWN)
]), wi = a.object({
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
  approvalStatus: It.nullable(),
  createdAt: a.string(),
  updatedAt: a.string(),
  reports: a.array(wi).nullable().optional(),
  author: $i,
  gotThread: a.boolean().nullable().optional(),
  threadFirstItemId: a.number().nullable().optional(),
  section: a.string().nullable().optional()
}), Nt = a.object({
  page: a.number(),
  pageSize: a.number(),
  pageCount: a.number(),
  total: a.number()
});
function sr() {
  return xe.extend({
    related: xt.optional(),
    documentId: a.string(),
    threadOf: a.lazy(
      () => xe.merge(a.object({ related: a.string(), threadOf: Ft.nullable().optional(), documentId: a.string().optional() }))
    ).nullable().optional()
  });
}
const Ft = sr(), Ri = a.object({
  pagination: Nt,
  result: a.array(Ft)
}), Ti = a.object({
  entity: xt,
  selected: xe.merge(
    a.object({
      related: a.string(),
      threadOf: sr().omit({ related: !0 }).merge(a.object({ related: a.string() })).nullable().optional()
    })
  ).nullable(),
  level: a.array(sr().omit({ threadOf: !0, related: !0 }))
}), Mt = a.object({
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
}), Ci = a.object({
  data: Mt
}), _i = a.object({
  data: a.array(Mt)
}), xi = a.object({
  author: a.unknown(),
  content: a.string(),
  id: a.number(),
  approvalStatus: It.nullable().optional(),
  reason: a.string().optional().nullable(),
  reports: a.array(a.unknown()),
  resolved: a.boolean().optional(),
  updatedAt: a.string().nullable(),
  createdAt: a.string(),
  related: xe
}), Ii = a.object({
  pagination: Nt,
  result: a.array(xi)
}), Ni = a.object({
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
}), Fi = a.object({
  data: a.array(
    Ni
  )
}), Mi = a.object({
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
}), A = "comments", Di = $r.once((r) => ({
  config: {
    getKey() {
      return [A, "config"];
    },
    async query() {
      const e = await r.get(`/${A}/settings/config`);
      return Oi.parseAsync(e.data);
    }
  },
  contentTypeBuilder: {
    single: {
      getKey(e, t) {
        return [A, "moderate", "content-type", t, e];
      },
      async query(e) {
        const t = await r.get(`/content-type-builder/content-types/${e}`);
        return Ci.parseAsync(t.data).then((n) => n.data);
      }
    },
    all: {
      getKey() {
        return [A, "moderate", "content-types"];
      },
      async query() {
        const e = await r.get("/content-type-builder/content-types");
        return _i.parseAsync(e.data).then((t) => t.data);
      }
    }
  },
  roles: {
    getKey() {
      return [A, "moderate", "roles"];
    },
    async query() {
      const e = await r.get("/admin/roles");
      return Fi.parseAsync(e.data).then((t) => t.data);
    }
  },
  user: {
    getKey() {
      return [A, "moderate", "user"];
    },
    async query() {
      const e = await r.get("/admin/users/me");
      return Mi.parseAsync(e.data).then((t) => t.data);
    }
  },
  comments: {
    findAll: {
      getKey(e) {
        return [A, "moderate", "all", e ? JSON.stringify(e) : void 0].filter(Boolean);
      },
      async query(e) {
        const t = await r.get(`/${A}/moderate/all?${er.stringify(e, { encode: !1 })}`);
        return Ri.parseAsync(t.data);
      }
    },
    findOne: {
      getKey(e, t) {
        return [A, "details", e?.toString(), t ? JSON.stringify(t) : void 0].filter(Boolean);
      },
      async query(e, t) {
        const n = $r.isEmpty(t) ? "" : `?${er.stringify(t, { encode: !1 })}`, o = await r.get(`/${A}/moderate/single/${e}${n}`);
        return Ti.parseAsync(o.data);
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
        const t = await r.get(`/${A}/moderate/reports${e ? `?${er.stringify(e, { encode: !1 })}` : ""}`);
        return Ii.parseAsync(t.data);
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
})), Li = () => {
  const r = cn();
  return tt(() => Di(r), [r]);
}, Bi = on(null), Ui = ({ children: r }) => {
  const e = Li(), { data: t } = an({
    queryKey: e.user.getKey(),
    queryFn: e.user.query
  });
  return t ? /* @__PURE__ */ C(Bi.Provider, { value: t, children: r }) : null;
}, ki = new un({
  defaultOptions: {
    queries: {
      retry: !1,
      refetchOnWindowFocus: !1
    }
  }
}), Ki = ({ children: r }) => {
  const e = sn();
  return /* @__PURE__ */ C(ln, { client: ki, children: /* @__PURE__ */ C(Zt, { theme: { theme: e }, children: /* @__PURE__ */ C(Ui, { children: r }) }) });
}, Qi = () => {
  const r = tt(
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
      canSettingsRead: u,
      canReportsReview: l
    }
  } = fn(r);
  return {
    isLoadingForPermissions: e,
    canAccess: n || o || u,
    canModerate: t,
    canAccessReports: o,
    canReviewReports: l,
    canSettings: u,
    canSettingsChange: i
  };
}, Ji = ({
  title: r,
  onConfirm: e,
  Trigger: t,
  labelConfirm: n,
  iconConfirm: o,
  labelCancel: i,
  children: u
}) => {
  const [l, c] = rr(!1), [f, y] = rr(!1), d = () => c((h) => !h), m = async () => {
    y(!0), await e(), y(!1), d();
  };
  return /* @__PURE__ */ Ee(V.Root, { open: l, children: [
    /* @__PURE__ */ C(V.Trigger, { children: /* @__PURE__ */ C(t, { onClick: d }) }),
    /* @__PURE__ */ Ee(V.Content, { children: [
      /* @__PURE__ */ C(V.Header, { children: r }),
      /* @__PURE__ */ C(V.Body, { children: /* @__PURE__ */ Ee(en, { justifyContent: "center", direction: "column", children: [
        /* @__PURE__ */ C(rn, { fill: "danger500", stroke: "danger500", height: "24", width: "24" }),
        /* @__PURE__ */ C(tn, { id: "confirm-description", children: u })
      ] }) }),
      /* @__PURE__ */ Ee(V.Footer, { children: [
        /* @__PURE__ */ C(V.Cancel, { children: /* @__PURE__ */ C(
          wr,
          {
            onClick: d,
            disabled: f,
            variant: "tertiary",
            children: i || "Cancel"
          }
        ) }),
        /* @__PURE__ */ C(V.Action, { children: /* @__PURE__ */ C(
          wr,
          {
            onClick: m,
            variant: "danger-light",
            loading: f,
            disabled: f,
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
  Yi as R,
  Bi as U,
  Qi as a,
  yr as b,
  Pn as c,
  Ji as d,
  Ki as e,
  Hi as g,
  Li as u
};
