import { jsx as C, jsxs as Ae } from "react/jsx-runtime";
import { ab as Jt, ac as Er, l as Or, ad as Xt, ae as rt, af as Zt, ag as ee, ah as Pr, ai as tt, p as en, aj as V, F as rn, ak as tn, T as nn, e as $r } from "./index-tYeJE1HU.mjs";
import { useQuery as on, QueryClientProvider as an, QueryClient as ln } from "@tanstack/react-query";
import * as ae from "react";
import { useMemo as nt, createContext as un, useState as wr } from "react";
import { getFetchClient as cn, useRBAC as fn } from "@strapi/strapi/admin";
import { z as a } from "zod";
var ce = TypeError;
const sn = {}, pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sn
}, Symbol.toStringTag, { value: "Module" })), yn = /* @__PURE__ */ Jt(pn);
var sr = typeof Map == "function" && Map.prototype, Le = Object.getOwnPropertyDescriptor && sr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Re = sr && Le && typeof Le.get == "function" ? Le.get : null, Rr = sr && Map.prototype.forEach, pr = typeof Set == "function" && Set.prototype, Be = Object.getOwnPropertyDescriptor && pr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Te = pr && Be && typeof Be.get == "function" ? Be.get : null, Tr = pr && Set.prototype.forEach, dn = typeof WeakMap == "function" && WeakMap.prototype, se = dn ? WeakMap.prototype.has : null, mn = typeof WeakSet == "function" && WeakSet.prototype, pe = mn ? WeakSet.prototype.has : null, vn = typeof WeakRef == "function" && WeakRef.prototype, Cr = vn ? WeakRef.prototype.deref : null, gn = Boolean.prototype.valueOf, hn = Object.prototype.toString, Sn = Function.prototype.toString, bn = String.prototype.match, yr = String.prototype.slice, H = String.prototype.replace, An = String.prototype.toUpperCase, _r = String.prototype.toLowerCase, ot = RegExp.prototype.test, Ir = Array.prototype.concat, L = Array.prototype.join, En = Array.prototype.slice, Nr = Math.floor, rr = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ue = Object.getOwnPropertySymbols, tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ie = typeof Symbol == "function" && typeof Symbol.iterator == "object", ye = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ie || !0) ? Symbol.toStringTag : null, at = Object.prototype.propertyIsEnumerable, xr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(r) {
  return r.__proto__;
} : null);
function Fr(r, e) {
  if (r === 1 / 0 || r === -1 / 0 || r !== r || r && r > -1e3 && r < 1e3 || ot.call(/e/, e))
    return e;
  var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof r == "number") {
    var n = r < 0 ? -Nr(-r) : Nr(r);
    if (n !== r) {
      var o = String(n), i = yr.call(e, o.length + 1);
      return H.call(o, t, "$&_") + "." + H.call(H.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return H.call(e, t, "$&_");
}
var nr = yn, Mr = nr.custom, Dr = ut(Mr) ? Mr : null, it = {
  __proto__: null,
  double: '"',
  single: "'"
}, On = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, Ne = function r(e, t, n, o) {
  var i = t || {};
  if (U(i, "quoteStyle") && !U(it, i.quoteStyle))
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
    return ft(e, i);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var c = String(e);
    return l ? Fr(e, c) : c;
  }
  if (typeof e == "bigint") {
    var f = String(e) + "n";
    return l ? Fr(e, f) : f;
  }
  var y = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof n > "u" && (n = 0), n >= y && y > 0 && typeof e == "object")
    return or(e) ? "[Array]" : "[Object]";
  var d = kn(i, n);
  if (typeof o > "u")
    o = [];
  else if (ct(o, e) >= 0)
    return "[Circular]";
  function m(x, q, Z) {
    if (q && (o = En.call(o), o.push(q)), Z) {
      var j = {
        depth: i.depth
      };
      return U(i, "quoteStyle") && (j.quoteStyle = i.quoteStyle), r(x, j, n + 1, o);
    }
    return r(x, i, n + 1, o);
  }
  if (typeof e == "function" && !Lr(e)) {
    var h = Nn(e), v = Ee(e, m);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (v.length > 0 ? " { " + L.call(v, ", ") + " }" : "");
  }
  if (ut(e)) {
    var $ = ie ? H.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : tr.call(e);
    return typeof e == "object" && !ie ? fe($) : $;
  }
  if (Bn(e)) {
    for (var _ = "<" + _r.call(String(e.nodeName)), S = e.attributes || [], I = 0; I < S.length; I++)
      _ += " " + S[I].name + "=" + lt(Pn(S[I].value), "double", i);
    return _ += ">", e.childNodes && e.childNodes.length && (_ += "..."), _ += "</" + _r.call(String(e.nodeName)) + ">", _;
  }
  if (or(e)) {
    if (e.length === 0)
      return "[]";
    var O = Ee(e, m);
    return d && !Wn(O) ? "[" + ar(O, d) + "]" : "[ " + L.call(O, ", ") + " ]";
  }
  if (wn(e)) {
    var P = Ee(e, m);
    return !("cause" in Error.prototype) && "cause" in e && !at.call(e, "cause") ? "{ [" + String(e) + "] " + L.call(Ir.call("[cause]: " + m(e.cause), P), ", ") + " }" : P.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + L.call(P, ", ") + " }";
  }
  if (typeof e == "object" && u) {
    if (Dr && typeof e[Dr] == "function" && nr)
      return nr(e, { depth: y - n });
    if (u !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (xn(e)) {
    var s = [];
    return Rr && Rr.call(e, function(x, q) {
      s.push(m(q, e, !0) + " => " + m(x, e));
    }), Br("Map", Re.call(e), s, d);
  }
  if (Dn(e)) {
    var F = [];
    return Tr && Tr.call(e, function(x) {
      F.push(m(x, e));
    }), Br("Set", Te.call(e), F, d);
  }
  if (Fn(e))
    return We("WeakMap");
  if (Ln(e))
    return We("WeakSet");
  if (Mn(e))
    return We("WeakRef");
  if (Tn(e))
    return fe(m(Number(e)));
  if (_n(e))
    return fe(m(rr.call(e)));
  if (Cn(e))
    return fe(gn.call(e));
  if (Rn(e))
    return fe(m(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && e === globalThis || typeof Er < "u" && e === Er)
    return "{ [object globalThis] }";
  if (!$n(e) && !Lr(e)) {
    var B = Ee(e, m), M = xr ? xr(e) === Object.prototype : e instanceof Object || e.constructor === Object, k = e instanceof Object ? "" : "null prototype", G = !M && ye && Object(e) === e && ye in e ? yr.call(Y(e), 8, -1) : k ? "Object" : "", K = M || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", N = K + (G || k ? "[" + L.call(Ir.call([], G || [], k || []), ": ") + "] " : "");
    return B.length === 0 ? N + "{}" : d ? N + "{" + ar(B, d) + "}" : N + "{ " + L.call(B, ", ") + " }";
  }
  return String(e);
};
function lt(r, e, t) {
  var n = t.quoteStyle || e, o = it[n];
  return o + r + o;
}
function Pn(r) {
  return H.call(String(r), /"/g, "&quot;");
}
function X(r) {
  return !ye || !(typeof r == "object" && (ye in r || typeof r[ye] < "u"));
}
function or(r) {
  return Y(r) === "[object Array]" && X(r);
}
function $n(r) {
  return Y(r) === "[object Date]" && X(r);
}
function Lr(r) {
  return Y(r) === "[object RegExp]" && X(r);
}
function wn(r) {
  return Y(r) === "[object Error]" && X(r);
}
function Rn(r) {
  return Y(r) === "[object String]" && X(r);
}
function Tn(r) {
  return Y(r) === "[object Number]" && X(r);
}
function Cn(r) {
  return Y(r) === "[object Boolean]" && X(r);
}
function ut(r) {
  if (ie)
    return r && typeof r == "object" && r instanceof Symbol;
  if (typeof r == "symbol")
    return !0;
  if (!r || typeof r != "object" || !tr)
    return !1;
  try {
    return tr.call(r), !0;
  } catch {
  }
  return !1;
}
function _n(r) {
  if (!r || typeof r != "object" || !rr)
    return !1;
  try {
    return rr.call(r), !0;
  } catch {
  }
  return !1;
}
var In = Object.prototype.hasOwnProperty || function(r) {
  return r in this;
};
function U(r, e) {
  return In.call(r, e);
}
function Y(r) {
  return hn.call(r);
}
function Nn(r) {
  if (r.name)
    return r.name;
  var e = bn.call(Sn.call(r), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function ct(r, e) {
  if (r.indexOf)
    return r.indexOf(e);
  for (var t = 0, n = r.length; t < n; t++)
    if (r[t] === e)
      return t;
  return -1;
}
function xn(r) {
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
function Fn(r) {
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
function Mn(r) {
  if (!Cr || !r || typeof r != "object")
    return !1;
  try {
    return Cr.call(r), !0;
  } catch {
  }
  return !1;
}
function Dn(r) {
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
function Ln(r) {
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
function Bn(r) {
  return !r || typeof r != "object" ? !1 : typeof HTMLElement < "u" && r instanceof HTMLElement ? !0 : typeof r.nodeName == "string" && typeof r.getAttribute == "function";
}
function ft(r, e) {
  if (r.length > e.maxStringLength) {
    var t = r.length - e.maxStringLength, n = "... " + t + " more character" + (t > 1 ? "s" : "");
    return ft(yr.call(r, 0, e.maxStringLength), e) + n;
  }
  var o = On[e.quoteStyle || "single"];
  o.lastIndex = 0;
  var i = H.call(H.call(r, o, "\\$1"), /[\x00-\x1f]/g, Un);
  return lt(i, "single", e);
}
function Un(r) {
  var e = r.charCodeAt(0), t = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + An.call(e.toString(16));
}
function fe(r) {
  return "Object(" + r + ")";
}
function We(r) {
  return r + " { ? }";
}
function Br(r, e, t, n) {
  var o = n ? ar(t, n) : L.call(t, ", ");
  return r + " (" + e + ") {" + o + "}";
}
function Wn(r) {
  for (var e = 0; e < r.length; e++)
    if (ct(r[e], `
`) >= 0)
      return !1;
  return !0;
}
function kn(r, e) {
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
function ar(r, e) {
  if (r.length === 0)
    return "";
  var t = `
` + e.prev + e.base;
  return t + L.call(r, "," + t) + `
` + e.prev;
}
function Ee(r, e) {
  var t = or(r), n = [];
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
    U(r, c) && (t && String(Number(c)) === c && c < r.length || ie && u["$" + c] instanceof Symbol || (ot.call(/[^\w$]/, c) ? n.push(e(c, r) + ": " + e(r[c], r)) : n.push(c + ": " + e(r[c], r))));
  if (typeof Ue == "function")
    for (var f = 0; f < i.length; f++)
      at.call(r, i[f]) && n.push("[" + e(i[f]) + "]: " + e(r[i[f]], r));
  return n;
}
var Gn = Ne, qn = ce, xe = function(r, e, t) {
  for (var n = r, o; (o = n.next) != null; n = o)
    if (o.key === e)
      return n.next = o.next, t || (o.next = /** @type {NonNullable<typeof list.next>} */
      r.next, r.next = o), o;
}, jn = function(r, e) {
  if (r) {
    var t = xe(r, e);
    return t && t.value;
  }
}, Vn = function(r, e, t) {
  var n = xe(r, e);
  n ? n.value = t : r.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: r.next,
    value: t
  };
}, zn = function(r, e) {
  return r ? !!xe(r, e) : !1;
}, Hn = function(r, e) {
  if (r)
    return xe(r, e, !0);
}, Yn = function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new qn("Side channel does not contain " + Gn(n));
    },
    delete: function(n) {
      var o = e && e.next, i = Hn(e, n);
      return i && o && o === i && (e = void 0), !!i;
    },
    get: function(n) {
      return jn(e, n);
    },
    has: function(n) {
      return zn(e, n);
    },
    set: function(n, o) {
      e || (e = {
        next: void 0
      }), Vn(
        /** @type {NonNullable<typeof $o>} */
        e,
        n,
        o
      );
    }
  };
  return t;
}, st = Object, Kn = Error, Qn = EvalError, Jn = RangeError, Xn = ReferenceError, Zn = SyntaxError, eo = URIError, ro = Math.abs, to = Math.floor, no = Math.max, oo = Math.min, ao = Math.pow, io = Math.round, lo = Number.isNaN || function(e) {
  return e !== e;
}, uo = lo, co = function(e) {
  return uo(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, fo = Object.getOwnPropertyDescriptor, Pe = fo;
if (Pe)
  try {
    Pe([], "length");
  } catch {
    Pe = null;
  }
var pt = Pe, $e = Object.defineProperty || !1;
if ($e)
  try {
    $e({}, "a", { value: 1 });
  } catch {
    $e = !1;
  }
var so = $e, ke, Ur;
function po() {
  return Ur || (Ur = 1, ke = function() {
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
  }), ke;
}
var Ge, Wr;
function yo() {
  if (Wr) return Ge;
  Wr = 1;
  var r = typeof Symbol < "u" && Symbol, e = po();
  return Ge = function() {
    return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, Ge;
}
var qe, kr;
function yt() {
  return kr || (kr = 1, qe = typeof Reflect < "u" && Reflect.getPrototypeOf || null), qe;
}
var je, Gr;
function dt() {
  if (Gr) return je;
  Gr = 1;
  var r = st;
  return je = r.getPrototypeOf || null, je;
}
var mo = "Function.prototype.bind called on incompatible ", vo = Object.prototype.toString, go = Math.max, ho = "[object Function]", qr = function(e, t) {
  for (var n = [], o = 0; o < e.length; o += 1)
    n[o] = e[o];
  for (var i = 0; i < t.length; i += 1)
    n[i + e.length] = t[i];
  return n;
}, So = function(e, t) {
  for (var n = [], o = t, i = 0; o < e.length; o += 1, i += 1)
    n[i] = e[o];
  return n;
}, bo = function(r, e) {
  for (var t = "", n = 0; n < r.length; n += 1)
    t += r[n], n + 1 < r.length && (t += e);
  return t;
}, Ao = function(e) {
  var t = this;
  if (typeof t != "function" || vo.apply(t) !== ho)
    throw new TypeError(mo + t);
  for (var n = So(arguments, 1), o, i = function() {
    if (this instanceof o) {
      var y = t.apply(
        this,
        qr(n, arguments)
      );
      return Object(y) === y ? y : this;
    }
    return t.apply(
      e,
      qr(n, arguments)
    );
  }, u = go(0, t.length - n.length), l = [], c = 0; c < u; c++)
    l[c] = "$" + c;
  if (o = Function("binder", "return function (" + bo(l, ",") + "){ return binder.apply(this,arguments); }")(i), t.prototype) {
    var f = function() {
    };
    f.prototype = t.prototype, o.prototype = new f(), f.prototype = null;
  }
  return o;
}, Eo = Ao, Fe = Function.prototype.bind || Eo, dr = Function.prototype.call, Ve, jr;
function mt() {
  return jr || (jr = 1, Ve = Function.prototype.apply), Ve;
}
var Oo = typeof Reflect < "u" && Reflect && Reflect.apply, Po = Fe, $o = mt(), wo = dr, Ro = Oo, To = Ro || Po.call(wo, $o), Co = Fe, _o = ce, Io = dr, No = To, vt = function(e) {
  if (e.length < 1 || typeof e[0] != "function")
    throw new _o("a function is required");
  return No(Co, Io, e);
}, ze, Vr;
function xo() {
  if (Vr) return ze;
  Vr = 1;
  var r = vt, e = pt, t;
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
var He, zr;
function Fo() {
  if (zr) return He;
  zr = 1;
  var r = yt(), e = dt(), t = xo();
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
var Ye, Hr;
function Mo() {
  if (Hr) return Ye;
  Hr = 1;
  var r = Function.prototype.call, e = Object.prototype.hasOwnProperty, t = Fe;
  return Ye = t.call(r, e), Ye;
}
var g, Do = st, Lo = Kn, Bo = Qn, Uo = Jn, Wo = Xn, le = Zn, oe = ce, ko = eo, Go = ro, qo = to, jo = no, Vo = oo, zo = ao, Ho = io, Yo = co, gt = Function, Ke = function(r) {
  try {
    return gt('"use strict"; return (' + r + ").constructor;")();
  } catch {
  }
}, me = pt, Ko = so, Qe = function() {
  throw new oe();
}, Qo = me ? function() {
  try {
    return arguments.callee, Qe;
  } catch {
    try {
      return me(arguments, "callee").get;
    } catch {
      return Qe;
    }
  }
}() : Qe, re = yo()(), R = Fo(), Jo = dt(), Xo = yt(), ht = mt(), ve = dr, ne = {}, Zo = typeof Uint8Array > "u" || !R ? g : R(Uint8Array), J = {
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
  "%Error%": Lo,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Bo,
  "%Float16Array%": typeof Float16Array > "u" ? g : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? g : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? g : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? g : FinalizationRegistry,
  "%Function%": gt,
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
  "%Object%": Do,
  "%Object.getOwnPropertyDescriptor%": me,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? g : Promise,
  "%Proxy%": typeof Proxy > "u" ? g : Proxy,
  "%RangeError%": Uo,
  "%ReferenceError%": Wo,
  "%Reflect%": typeof Reflect > "u" ? g : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? g : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !re || !R ? g : R((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? g : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": re && R ? R(""[Symbol.iterator]()) : g,
  "%Symbol%": re ? Symbol : g,
  "%SyntaxError%": le,
  "%ThrowTypeError%": Qo,
  "%TypedArray%": Zo,
  "%TypeError%": oe,
  "%Uint8Array%": typeof Uint8Array > "u" ? g : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? g : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? g : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? g : Uint32Array,
  "%URIError%": ko,
  "%WeakMap%": typeof WeakMap > "u" ? g : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? g : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? g : WeakSet,
  "%Function.prototype.call%": ve,
  "%Function.prototype.apply%": ht,
  "%Object.defineProperty%": Ko,
  "%Object.getPrototypeOf%": Jo,
  "%Math.abs%": Go,
  "%Math.floor%": qo,
  "%Math.max%": jo,
  "%Math.min%": Vo,
  "%Math.pow%": zo,
  "%Math.round%": Ho,
  "%Math.sign%": Yo,
  "%Reflect.getPrototypeOf%": Xo
};
if (R)
  try {
    null.error;
  } catch (r) {
    var ea = R(R(r));
    J["%Error.prototype%"] = ea;
  }
var ra = function r(e) {
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
}, Yr = {
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
}, ge = Fe, Ce = Mo(), ta = ge.call(ve, Array.prototype.concat), na = ge.call(ht, Array.prototype.splice), Kr = ge.call(ve, String.prototype.replace), _e = ge.call(ve, String.prototype.slice), oa = ge.call(ve, RegExp.prototype.exec), aa = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ia = /\\(\\)?/g, la = function(e) {
  var t = _e(e, 0, 1), n = _e(e, -1);
  if (t === "%" && n !== "%")
    throw new le("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && t !== "%")
    throw new le("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return Kr(e, aa, function(i, u, l, c) {
    o[o.length] = l ? Kr(c, ia, "$1") : u || i;
  }), o;
}, ua = function(e, t) {
  var n = e, o;
  if (Ce(Yr, n) && (o = Yr[n], n = "%" + o[0] + "%"), Ce(J, n)) {
    var i = J[n];
    if (i === ne && (i = ra(n)), typeof i > "u" && !t)
      throw new oe("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: i
    };
  }
  throw new le("intrinsic " + e + " does not exist!");
}, mr = function(e, t) {
  if (typeof e != "string" || e.length === 0)
    throw new oe("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new oe('"allowMissing" argument must be a boolean');
  if (oa(/^%?[^%]*%?$/, e) === null)
    throw new le("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = la(e), o = n.length > 0 ? n[0] : "", i = ua("%" + o + "%", t), u = i.name, l = i.value, c = !1, f = i.alias;
  f && (o = f[0], na(n, ta([0, 1], f)));
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
}, St = mr, bt = vt, ca = bt([St("%String.prototype.indexOf%")]), At = function(e, t) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    St(e, !!t)
  );
  return typeof n == "function" && ca(e, ".prototype.") > -1 ? bt(
    /** @type {const} */
    [n]
  ) : n;
}, fa = mr, he = At, sa = Ne, pa = ce, Qr = fa("%Map%", !0), ya = he("Map.prototype.get", !0), da = he("Map.prototype.set", !0), ma = he("Map.prototype.has", !0), va = he("Map.prototype.delete", !0), ga = he("Map.prototype.size", !0), Et = !!Qr && /** @type {Exclude<import('.'), false>} */
function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new pa("Side channel does not contain " + sa(n));
    },
    delete: function(n) {
      if (e) {
        var o = va(e, n);
        return ga(e) === 0 && (e = void 0), o;
      }
      return !1;
    },
    get: function(n) {
      if (e)
        return ya(e, n);
    },
    has: function(n) {
      return e ? ma(e, n) : !1;
    },
    set: function(n, o) {
      e || (e = new Qr()), da(e, n, o);
    }
  };
  return t;
}, ha = mr, Me = At, Sa = Ne, Oe = Et, ba = ce, te = ha("%WeakMap%", !0), Aa = Me("WeakMap.prototype.get", !0), Ea = Me("WeakMap.prototype.set", !0), Oa = Me("WeakMap.prototype.has", !0), Pa = Me("WeakMap.prototype.delete", !0), $a = te ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var e, t, n = {
      assert: function(o) {
        if (!n.has(o))
          throw new ba("Side channel does not contain " + Sa(o));
      },
      delete: function(o) {
        if (te && o && (typeof o == "object" || typeof o == "function")) {
          if (e)
            return Pa(e, o);
        } else if (Oe && t)
          return t.delete(o);
        return !1;
      },
      get: function(o) {
        return te && o && (typeof o == "object" || typeof o == "function") && e ? Aa(e, o) : t && t.get(o);
      },
      has: function(o) {
        return te && o && (typeof o == "object" || typeof o == "function") && e ? Oa(e, o) : !!t && t.has(o);
      },
      set: function(o, i) {
        te && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new te()), Ea(e, o, i)) : Oe && (t || (t = Oe()), t.set(o, i));
      }
    };
    return n;
  }
) : Oe, wa = ce, Ra = Ne, Ta = Yn, Ca = Et, _a = $a, Ia = _a || Ca || Ta, Na = function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new wa("Side channel does not contain " + Ra(n));
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
      e || (e = Ia()), e.set(n, o);
    }
  };
  return t;
}, xa = String.prototype.replace, Fa = /%20/g, Je = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, vr = {
  default: Je.RFC3986,
  formatters: {
    RFC1738: function(r) {
      return xa.call(r, Fa, "+");
    },
    RFC3986: function(r) {
      return String(r);
    }
  },
  RFC1738: Je.RFC1738,
  RFC3986: Je.RFC3986
}, Ma = vr, Xe = Object.prototype.hasOwnProperty, Q = Array.isArray, D = function() {
  for (var r = [], e = 0; e < 256; ++e)
    r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return r;
}(), Da = function(e) {
  for (; e.length > 1; ) {
    var t = e.pop(), n = t.obj[t.prop];
    if (Q(n)) {
      for (var o = [], i = 0; i < n.length; ++i)
        typeof n[i] < "u" && o.push(n[i]);
      t.obj[t.prop] = o;
    }
  }
}, Ot = function(e, t) {
  for (var n = t && t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < e.length; ++o)
    typeof e[o] < "u" && (n[o] = e[o]);
  return n;
}, La = function r(e, t, n) {
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
  return Q(e) && !Q(t) && (o = Ot(e, n)), Q(e) && Q(t) ? (t.forEach(function(i, u) {
    if (Xe.call(e, u)) {
      var l = e[u];
      l && typeof l == "object" && i && typeof i == "object" ? e[u] = r(l, i, n) : e.push(i);
    } else
      e[u] = i;
  }), e) : Object.keys(t).reduce(function(i, u) {
    var l = t[u];
    return Xe.call(i, u) ? i[u] = r(i[u], l, n) : i[u] = l, i;
  }, o);
}, Ba = function(e, t) {
  return Object.keys(t).reduce(function(n, o) {
    return n[o] = t[o], n;
  }, e);
}, Ua = function(r, e, t) {
  var n = r.replace(/\+/g, " ");
  if (t === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Wa = function(e, t, n, o, i) {
  if (e.length === 0)
    return e;
  var u = e;
  if (typeof e == "symbol" ? u = Symbol.prototype.toString.call(e) : typeof e != "string" && (u = String(e)), n === "iso-8859-1")
    return escape(u).replace(/%u[0-9a-f]{4}/gi, function(y) {
      return "%26%23" + parseInt(y.slice(2), 16) + "%3B";
    });
  for (var l = "", c = 0; c < u.length; ++c) {
    var f = u.charCodeAt(c);
    if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || i === Ma.RFC1738 && (f === 40 || f === 41)) {
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
}, ka = function(e) {
  for (var t = [{ obj: { o: e }, prop: "o" }], n = [], o = 0; o < t.length; ++o)
    for (var i = t[o], u = i.obj[i.prop], l = Object.keys(u), c = 0; c < l.length; ++c) {
      var f = l[c], y = u[f];
      typeof y == "object" && y !== null && n.indexOf(y) === -1 && (t.push({ obj: u, prop: f }), n.push(y));
    }
  return Da(t), e;
}, Ga = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, qa = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, ja = function(e, t) {
  return [].concat(e, t);
}, Va = function(e, t) {
  if (Q(e)) {
    for (var n = [], o = 0; o < e.length; o += 1)
      n.push(t(e[o]));
    return n;
  }
  return t(e);
}, Pt = {
  arrayToObject: Ot,
  assign: Ba,
  combine: ja,
  compact: ka,
  decode: Ua,
  encode: Wa,
  isBuffer: qa,
  isRegExp: Ga,
  maybeMap: Va,
  merge: La
}, $t = Na, we = Pt, de = vr, za = Object.prototype.hasOwnProperty, Jr = {
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
}, W = Array.isArray, Ha = Array.prototype.push, wt = function(r, e) {
  Ha.apply(r, W(e) ? e : [e]);
}, Ya = Date.prototype.toISOString, Xr = de.default, T = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: we.encode,
  encodeValuesOnly: !1,
  format: Xr,
  formatter: de.formatters[Xr],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return Ya.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Ka = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Ze = {}, Qa = function r(e, t, n, o, i, u, l, c, f, y, d, m, h, v, $, _) {
  for (var S = e, I = _, O = 0, P = !1; (I = I.get(Ze)) !== void 0 && !P; ) {
    var s = I.get(e);
    if (O += 1, typeof s < "u") {
      if (s === O)
        throw new RangeError("Cyclic object value");
      P = !0;
    }
    typeof I.get(Ze) > "u" && (O = 0);
  }
  if (typeof c == "function" ? S = c(t, S) : S instanceof Date ? S = d(S) : n === "comma" && W(S) && (S = we.maybeMap(S, function(j) {
    return j instanceof Date ? d(j) : j;
  })), S === null) {
    if (i)
      return l && !v ? l(t, T.encoder, $, "key", m) : t;
    S = "";
  }
  if (Ka(S) || we.isBuffer(S)) {
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
  if (n === "comma" && W(S))
    v && l && (S = we.maybeMap(S, l)), M = [{ value: S.length > 0 ? S.join(",") || null : void 0 }];
  else if (W(c))
    M = c;
  else {
    var k = Object.keys(S);
    M = f ? k.sort(f) : k;
  }
  for (var G = o && W(S) && S.length === 1 ? t + "[]" : t, K = 0; K < M.length; ++K) {
    var N = M[K], x = typeof N == "object" && typeof N.value < "u" ? N.value : S[N];
    if (!(u && x === null)) {
      var q = W(S) ? typeof n == "function" ? n(G, N) : G : G + (y ? "." + N : "[" + N + "]");
      _.set(e, O);
      var Z = $t();
      Z.set(Ze, _), wt(B, r(
        x,
        q,
        n,
        o,
        i,
        u,
        n === "comma" && v && W(S) ? null : l,
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
}, Ja = function(e) {
  if (!e)
    return T;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var t = e.charset || T.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = de.default;
  if (typeof e.format < "u") {
    if (!za.call(de.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var o = de.formatters[n], i = T.filter;
  return (typeof e.filter == "function" || W(e.filter)) && (i = e.filter), {
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
}, Xa = function(r, e) {
  var t = r, n = Ja(e), o, i;
  typeof n.filter == "function" ? (i = n.filter, t = i("", t)) : W(n.filter) && (i = n.filter, o = i);
  var u = [];
  if (typeof t != "object" || t === null)
    return "";
  var l;
  e && e.arrayFormat in Jr ? l = e.arrayFormat : e && "indices" in e ? l = e.indices ? "indices" : "repeat" : l = "indices";
  var c = Jr[l];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var f = c === "comma" && e && e.commaRoundTrip;
  o || (o = Object.keys(t)), n.sort && o.sort(n.sort);
  for (var y = $t(), d = 0; d < o.length; ++d) {
    var m = o[d];
    n.skipNulls && t[m] === null || wt(u, Qa(
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
}, ue = Pt, ir = Object.prototype.hasOwnProperty, Za = Array.isArray, w = {
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
}, ei = function(r) {
  return r.replace(/&#(\d+);/g, function(e, t) {
    return String.fromCharCode(parseInt(t, 10));
  });
}, Rt = function(r, e) {
  return r && typeof r == "string" && e.comma && r.indexOf(",") > -1 ? r.split(",") : r;
}, ri = "utf8=%26%2310003%3B", ti = "utf8=%E2%9C%93", ni = function(e, t) {
  var n = {}, o = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, u = o.split(t.delimiter, i), l = -1, c, f = t.charset;
  if (t.charsetSentinel)
    for (c = 0; c < u.length; ++c)
      u[c].indexOf("utf8=") === 0 && (u[c] === ti ? f = "utf-8" : u[c] === ri && (f = "iso-8859-1"), l = c, c = u.length);
  for (c = 0; c < u.length; ++c)
    if (c !== l) {
      var y = u[c], d = y.indexOf("]="), m = d === -1 ? y.indexOf("=") : d + 1, h, v;
      m === -1 ? (h = t.decoder(y, w.decoder, f, "key"), v = t.strictNullHandling ? null : "") : (h = t.decoder(y.slice(0, m), w.decoder, f, "key"), v = ue.maybeMap(
        Rt(y.slice(m + 1), t),
        function($) {
          return t.decoder($, w.decoder, f, "value");
        }
      )), v && t.interpretNumericEntities && f === "iso-8859-1" && (v = ei(v)), y.indexOf("[]=") > -1 && (v = Za(v) ? [v] : v), ir.call(n, h) ? n[h] = ue.combine(n[h], v) : n[h] = v;
    }
  return n;
}, oi = function(r, e, t, n) {
  for (var o = n ? e : Rt(e, t), i = r.length - 1; i >= 0; --i) {
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
}, ai = function(e, t, n, o) {
  if (e) {
    var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, u = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, c = n.depth > 0 && u.exec(i), f = c ? i.slice(0, c.index) : i, y = [];
    if (f) {
      if (!n.plainObjects && ir.call(Object.prototype, f) && !n.allowPrototypes)
        return;
      y.push(f);
    }
    for (var d = 0; n.depth > 0 && (c = l.exec(i)) !== null && d < n.depth; ) {
      if (d += 1, !n.plainObjects && ir.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      y.push(c[1]);
    }
    return c && y.push("[" + i.slice(c.index) + "]"), oi(y, t, n, o);
  }
}, ii = function(e) {
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
}, li = function(r, e) {
  var t = ii(e);
  if (r === "" || r === null || typeof r > "u")
    return t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof r == "string" ? ni(r, t) : r, o = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), u = 0; u < i.length; ++u) {
    var l = i[u], c = ai(l, n[l], t, typeof r == "string");
    o = ue.merge(o, c, t);
  }
  return t.allowSparse === !0 ? o : ue.compact(o);
}, ui = Xa, ci = li, fi = vr, er = {
  formats: fi,
  parse: ci,
  stringify: ui
};
const Tt = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED"
}, zi = {
  ...Tt,
  BLOCKED: "BLOCKED",
  OPEN: "OPEN",
  RESOLVED: "RESOLVED"
};
var si = /* @__PURE__ */ ((r) => (r.BAD_LANGUAGE = "BAD_LANGUAGE", r.DISCRIMINATION = "DISCRIMINATION", r.OTHER = "OTHER", r))(si || {});
const z = {
  ...Tt,
  BLOCKED: "BLOCKED",
  OPEN: "OPEN",
  REMOVED: "REMOVED",
  TO_REVIEW: "TO_REVIEW",
  UNKNOWN: "UNKNOWN"
}, pi = a.object({
  entryLabel: a.record(a.array(a.string())),
  approvalFlow: a.array(a.string()),
  blockedAuthorProps: a.array(a.string()),
  reportReasons: a.object({
    BAD_LANGUAGE: a.literal("BAD_LANGUAGE"),
    DISCRIMINATION: a.literal("DISCRIMINATION"),
    OTHER: a.literal("OTHER")
  }),
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
}), Ct = a.intersection(
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
), yi = a.object({
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
}), _t = a.union([
  a.literal(z.PENDING),
  a.literal(z.APPROVED),
  a.literal(z.REJECTED),
  a.literal(z.BLOCKED),
  a.literal(z.OPEN),
  a.literal(z.REMOVED),
  a.literal(z.TO_REVIEW),
  a.literal(z.UNKNOWN)
]), It = a.union([
  a.literal("BAD_LANGUAGE"),
  a.literal("DISCRIMINATION"),
  a.literal("OTHER")
]), di = a.object({
  id: a.number(),
  reason: It,
  content: a.string(),
  resolved: a.boolean(),
  createdAt: a.string(),
  updatedAt: a.string().nullable()
}), Ie = a.object({
  id: a.number(),
  content: a.string(),
  blocked: a.boolean().nullable(),
  blockedThread: a.boolean().nullable(),
  blockReason: a.string().nullable(),
  isAdminComment: a.boolean().nullable(),
  removed: a.boolean().nullable(),
  approvalStatus: _t.nullable(),
  createdAt: a.string(),
  updatedAt: a.string(),
  reports: a.array(di).nullable().optional(),
  author: yi,
  gotThread: a.boolean().nullable().optional(),
  threadFirstItemId: a.number().nullable().optional()
}), Nt = a.object({
  page: a.number(),
  pageSize: a.number(),
  pageCount: a.number(),
  total: a.number()
});
function lr() {
  return Ie.extend({
    related: Ct.optional(),
    documentId: a.string(),
    threadOf: a.lazy(
      () => Ie.merge(a.object({ related: a.string(), threadOf: xt.nullable().optional(), documentId: a.string().optional() }))
    ).nullable().optional()
  });
}
const xt = lr(), mi = a.object({
  pagination: Nt,
  result: a.array(xt)
}), vi = a.object({
  entity: Ct,
  selected: Ie.merge(
    a.object({
      related: a.string(),
      threadOf: lr().omit({ related: !0 }).merge(a.object({ related: a.string() })).nullable().optional()
    })
  ).nullable(),
  level: a.array(lr().omit({ threadOf: !0, related: !0 }))
}), Ft = a.object({
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
}), gi = a.object({
  data: Ft
}), hi = a.object({
  data: a.array(Ft)
}), Si = a.object({
  author: a.unknown(),
  content: a.string(),
  id: a.number(),
  approvalStatus: _t.nullable().optional(),
  reason: It,
  reports: a.array(a.unknown()),
  resolved: a.boolean().optional(),
  updatedAt: a.string().nullable(),
  createdAt: a.string(),
  related: Ie
}), bi = a.object({
  pagination: Nt,
  result: a.array(Si)
}), Ai = a.object({
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
}), Ei = a.object({
  data: a.array(
    Ai
  )
}), Oi = a.object({
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
}), E = "comments", Pi = Or.once((r) => ({
  config: {
    getKey() {
      return [E, "config"];
    },
    async query() {
      const e = await r.get(`/${E}/settings/config`);
      return pi.parseAsync(e.data);
    }
  },
  contentTypeBuilder: {
    single: {
      getKey(e, t) {
        return [E, "moderate", "content-type", t, e];
      },
      async query(e) {
        const t = await r.get(`/content-type-builder/content-types/${e}`);
        return gi.parseAsync(t.data).then((n) => n.data);
      }
    },
    all: {
      getKey() {
        return [E, "moderate", "content-types"];
      },
      async query() {
        const e = await r.get("/content-type-builder/content-types");
        return hi.parseAsync(e.data).then((t) => t.data);
      }
    }
  },
  roles: {
    getKey() {
      return [E, "moderate", "roles"];
    },
    async query() {
      const e = await r.get("/admin/roles");
      return Ei.parseAsync(e.data).then((t) => t.data);
    }
  },
  user: {
    getKey() {
      return [E, "moderate", "user"];
    },
    async query() {
      const e = await r.get("/admin/users/me");
      return Oi.parseAsync(e.data).then((t) => t.data);
    }
  },
  comments: {
    findAll: {
      getKey(e) {
        return [E, "moderate", "all", e ? JSON.stringify(e) : void 0].filter(Boolean);
      },
      async query(e) {
        const t = await r.get(`/${E}/moderate/all?${er.stringify(e, { encode: !1 })}`);
        return mi.parseAsync(t.data);
      }
    },
    findOne: {
      getKey(e, t) {
        return [E, "details", e?.toString(), t ? JSON.stringify(t) : void 0].filter(Boolean);
      },
      async query(e, t) {
        const n = Or.isEmpty(t) ? "" : `?${er.stringify(t, { encode: !1 })}`, o = await r.get(`/${E}/moderate/single/${e}${n}`);
        return vi.parseAsync(o.data);
      }
    },
    approve(e) {
      return r.put(`/${E}/moderate/single/${e}/approve`);
    },
    reject(e) {
      return r.put(`/${E}/moderate/single/${e}/reject`);
    },
    block(e) {
      return r.put(`/${E}/moderate/single/${e}/block`);
    },
    unblock(e) {
      return r.put(`/${E}/moderate/single/${e}/unblock`);
    },
    blockThread(e) {
      return r.put(`/${E}/moderate/thread/${e}/block`);
    },
    unBlockThread(e) {
      return r.put(`/${E}/moderate/thread/${e}/unblock`);
    },
    delete(e) {
      return r.del(`/${E}/moderate/single/${e}/delete`);
    },
    postComment({ id: e, content: t, author: n }) {
      return r.post(`/${E}/moderate/thread/${e}/postComment`, { content: t, author: n });
    },
    updateComment({ id: e, content: t }) {
      return r.put(`/${E}/moderate/single/${e}/update`, { content: t });
    }
  },
  reports: {
    findAll: {
      getKey(e) {
        return [E, "moderate", "reports", e ? JSON.stringify(e) : void 0].filter(Boolean);
      },
      async query(e) {
        const t = await r.get(`/${E}/moderate/reports${e ? `?${er.stringify(e, { encode: !1 })}` : ""}`);
        return bi.parseAsync(t.data);
      }
    },
    resolve({ id: e, reportId: t }) {
      return r.put(`/${E}/moderate/single/${e}/report/${t}/resolve`);
    },
    resolveMultipleReports({ reportIds: e }) {
      return r.put(`/${E}/moderate/multiple/report/resolve`, { reportIds: e });
    },
    resolveCommentMultipleReports({ id: e, reportIds: t }) {
      return r.put(`/${E}/moderate/single/${e}/report/resolve`, { reportIds: t });
    },
    resolveAllAbuseReportsForComment(e) {
      return r.put(`/${E}/moderate/all/${e}/report/resolve`);
    },
    resolveAllAbuseReportsForThread(e) {
      return r.put(`/${E}/moderate/thread/${e}/report/resolve-thread`);
    }
  },
  settings: {
    update(e) {
      return r.put(`/${E}/settings/config`, e);
    },
    restore() {
      return r.del(`/${E}/settings/config`);
    },
    restart() {
      return r.post(`/${E}/settings/restart`);
    }
  }
})), $i = () => {
  const r = cn();
  return nt(() => Pi(r), [r]);
}, wi = un(null), Ri = ({ children: r }) => {
  const e = $i(), { data: t } = on({
    queryKey: e.user.getKey(),
    queryFn: e.user.query
  });
  return t ? /* @__PURE__ */ C(wi.Provider, { value: t, children: r }) : null;
};
console.log("!!darkTheme", !!rt);
console.log("!!lightTheme", !!Zt);
const Ti = new ln({
  defaultOptions: {
    queries: {
      retry: !1,
      refetchOnWindowFocus: !1
    }
  }
}), Hi = ({ children: r }) => /* @__PURE__ */ C(an, { client: Ti, children: /* @__PURE__ */ C(Xt, { theme: { theme: rt, themeName: "light" }, children: /* @__PURE__ */ C(Ri, { children: r }) }) }), Yi = () => {
  const r = nt(
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
};
var ur = { exports: {} }, b = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function Ci() {
  if (Zr) return b;
  Zr = 1;
  var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, i = r ? Symbol.for("react.profiler") : 60114, u = r ? Symbol.for("react.provider") : 60109, l = r ? Symbol.for("react.context") : 60110, c = r ? Symbol.for("react.async_mode") : 60111, f = r ? Symbol.for("react.concurrent_mode") : 60111, y = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, $ = r ? Symbol.for("react.block") : 60121, _ = r ? Symbol.for("react.fundamental") : 60117, S = r ? Symbol.for("react.responder") : 60118, I = r ? Symbol.for("react.scope") : 60119;
  function O(s) {
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
  function P(s) {
    return O(s) === f;
  }
  return b.AsyncMode = c, b.ConcurrentMode = f, b.ContextConsumer = l, b.ContextProvider = u, b.Element = e, b.ForwardRef = y, b.Fragment = n, b.Lazy = v, b.Memo = h, b.Portal = t, b.Profiler = i, b.StrictMode = o, b.Suspense = d, b.isAsyncMode = function(s) {
    return P(s) || O(s) === c;
  }, b.isConcurrentMode = P, b.isContextConsumer = function(s) {
    return O(s) === l;
  }, b.isContextProvider = function(s) {
    return O(s) === u;
  }, b.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }, b.isForwardRef = function(s) {
    return O(s) === y;
  }, b.isFragment = function(s) {
    return O(s) === n;
  }, b.isLazy = function(s) {
    return O(s) === v;
  }, b.isMemo = function(s) {
    return O(s) === h;
  }, b.isPortal = function(s) {
    return O(s) === t;
  }, b.isProfiler = function(s) {
    return O(s) === i;
  }, b.isStrictMode = function(s) {
    return O(s) === o;
  }, b.isSuspense = function(s) {
    return O(s) === d;
  }, b.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === f || s === i || s === o || s === d || s === m || typeof s == "object" && s !== null && (s.$$typeof === v || s.$$typeof === h || s.$$typeof === u || s.$$typeof === l || s.$$typeof === y || s.$$typeof === _ || s.$$typeof === S || s.$$typeof === I || s.$$typeof === $);
  }, b.typeOf = O, b;
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
var et;
function _i() {
  return et || (et = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, i = r ? Symbol.for("react.profiler") : 60114, u = r ? Symbol.for("react.provider") : 60109, l = r ? Symbol.for("react.context") : 60110, c = r ? Symbol.for("react.async_mode") : 60111, f = r ? Symbol.for("react.concurrent_mode") : 60111, y = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, $ = r ? Symbol.for("react.block") : 60121, _ = r ? Symbol.for("react.fundamental") : 60117, S = r ? Symbol.for("react.responder") : 60118, I = r ? Symbol.for("react.scope") : 60119;
    function O(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === f || p === i || p === o || p === d || p === m || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === h || p.$$typeof === u || p.$$typeof === l || p.$$typeof === y || p.$$typeof === _ || p.$$typeof === S || p.$$typeof === I || p.$$typeof === $);
    }
    function P(p) {
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
    var s = c, F = f, B = l, M = u, k = e, G = y, K = n, N = v, x = h, q = t, Z = i, j = o, Bt = d, Sr = !1;
    function Ut(p) {
      return Sr || (Sr = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), br(p) || P(p) === c;
    }
    function br(p) {
      return P(p) === f;
    }
    function Wt(p) {
      return P(p) === l;
    }
    function kt(p) {
      return P(p) === u;
    }
    function Gt(p) {
      return typeof p == "object" && p !== null && p.$$typeof === e;
    }
    function qt(p) {
      return P(p) === y;
    }
    function jt(p) {
      return P(p) === n;
    }
    function Vt(p) {
      return P(p) === v;
    }
    function zt(p) {
      return P(p) === h;
    }
    function Ht(p) {
      return P(p) === t;
    }
    function Yt(p) {
      return P(p) === i;
    }
    function Kt(p) {
      return P(p) === o;
    }
    function Qt(p) {
      return P(p) === d;
    }
    A.AsyncMode = s, A.ConcurrentMode = F, A.ContextConsumer = B, A.ContextProvider = M, A.Element = k, A.ForwardRef = G, A.Fragment = K, A.Lazy = N, A.Memo = x, A.Portal = q, A.Profiler = Z, A.StrictMode = j, A.Suspense = Bt, A.isAsyncMode = Ut, A.isConcurrentMode = br, A.isContextConsumer = Wt, A.isContextProvider = kt, A.isElement = Gt, A.isForwardRef = qt, A.isFragment = jt, A.isLazy = Vt, A.isMemo = zt, A.isPortal = Ht, A.isProfiler = Yt, A.isStrictMode = Kt, A.isSuspense = Qt, A.isValidElementType = O, A.typeOf = P;
  }()), A;
}
process.env.NODE_ENV === "production" ? ur.exports = Ci() : ur.exports = _i();
var Ii = ur.exports, Mt = Ii, Ni = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, xi = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Dt = {};
Dt[Mt.ForwardRef] = Ni;
Dt[Mt.Memo] = xi;
function Fi(r, e, t) {
  if (t === void 0 && (t = Error), !r)
    throw new t(e);
}
var Mi = function(r) {
  process.env.NODE_ENV !== "production" && console.error(r);
}, Di = function(r) {
  process.env.NODE_ENV !== "production" && console.warn(r);
}, Li = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: Mi,
  onWarn: Di
};
function Bi(r) {
  Fi(r, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
Pr(Pr({}, Li), { textComponent: ae.Fragment });
var gr = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = ae.createContext(null)) : ae.createContext(null);
gr.Consumer;
gr.Provider;
var Ui = gr;
function hr() {
  var r = ae.useContext(Ui);
  return Bi(r), r;
}
var cr;
(function(r) {
  r.formatDate = "FormattedDate", r.formatTime = "FormattedTime", r.formatNumber = "FormattedNumber", r.formatList = "FormattedList", r.formatDisplayName = "FormattedDisplayName";
})(cr || (cr = {}));
var fr;
(function(r) {
  r.formatDate = "FormattedDateParts", r.formatTime = "FormattedTimeParts", r.formatNumber = "FormattedNumberParts", r.formatList = "FormattedListParts";
})(fr || (fr = {}));
function Lt(r) {
  var e = function(t) {
    var n = hr(), o = t.value, i = t.children, u = tt(t, ["value", "children"]), l = typeof o == "string" ? new Date(o || 0) : o, c = r === "formatDate" ? n.formatDateToParts(l, u) : n.formatTimeToParts(l, u);
    return i(c);
  };
  return e.displayName = fr[r], e;
}
function Se(r) {
  var e = function(t) {
    var n = hr(), o = t.value, i = t.children, u = tt(
      t,
      ["value", "children"]
    ), l = n[r](o, u);
    if (typeof i == "function")
      return i(l);
    var c = n.textComponent || ae.Fragment;
    return ae.createElement(c, null, l);
  };
  return e.displayName = cr[r], e;
}
Se("formatDate");
Se("formatTime");
Se("formatNumber");
Se("formatList");
Se("formatDisplayName");
Lt("formatDate");
Lt("formatTime");
const Ki = (r, e = "", t = !0) => {
  const { formatMessage: n } = hr();
  let o = "";
  return typeof r == "string" ? o = r : o = r?.id.toString() || o, n(
    {
      id: `${t ? en : "app.components"}.${o}`,
      defaultMessage: e
    },
    typeof r == "string" ? void 0 : r?.props
  );
}, Qi = ({
  title: r,
  onConfirm: e,
  Trigger: t,
  labelConfirm: n,
  iconConfirm: o,
  labelCancel: i,
  children: u
}) => {
  const [l, c] = wr(!1), [f, y] = wr(!1), d = () => c((h) => !h), m = async () => {
    y(!0), await e(), y(!1), d();
  };
  return /* @__PURE__ */ Ae(V.Root, { open: l, children: [
    /* @__PURE__ */ C(V.Trigger, { children: /* @__PURE__ */ C(t, { onClick: d }) }),
    /* @__PURE__ */ Ae(V.Content, { children: [
      /* @__PURE__ */ C(V.Header, { children: r }),
      /* @__PURE__ */ C(V.Body, { children: /* @__PURE__ */ Ae(rn, { justifyContent: "center", direction: "column", children: [
        /* @__PURE__ */ C(tn, { fill: "danger500", stroke: "danger500", height: "24", width: "24" }),
        /* @__PURE__ */ C(nn, { id: "confirm-description", children: u })
      ] }) }),
      /* @__PURE__ */ Ae(V.Footer, { children: [
        /* @__PURE__ */ C(V.Cancel, { children: /* @__PURE__ */ C(
          $r,
          {
            onClick: d,
            disabled: f,
            variant: "tertiary",
            children: i || "Cancel"
          }
        ) }),
        /* @__PURE__ */ C(V.Action, { children: /* @__PURE__ */ C(
          $r,
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
  zi as R,
  wi as U,
  Yi as a,
  hr as b,
  si as c,
  Qi as d,
  Hi as e,
  Ki as g,
  $i as u
};
