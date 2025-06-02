import { jsx as _, jsxs as Ae } from "react/jsx-runtime";
import { ab as tn, ac as $r, l as wr, ad as nn, ae as it, af as on, ag as ee, ah as Rr, ai as lt, p as an, aj as V, F as ln, ak as un, T as cn, e as Cr } from "./index-B5je850n.mjs";
import { useQuery as fn, QueryClientProvider as sn, QueryClient as pn } from "@tanstack/react-query";
import * as ae from "react";
import { useMemo as ut, createContext as yn, useState as Tr } from "react";
import { getFetchClient as dn, useRBAC as mn } from "@strapi/strapi/admin";
import { z as a } from "zod";
var ce = TypeError;
const vn = {}, gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vn
}, Symbol.toStringTag, { value: "Module" })), hn = /* @__PURE__ */ tn(gn);
var dr = typeof Map == "function" && Map.prototype, Le = Object.getOwnPropertyDescriptor && dr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Re = dr && Le && typeof Le.get == "function" ? Le.get : null, _r = dr && Map.prototype.forEach, mr = typeof Set == "function" && Set.prototype, Be = Object.getOwnPropertyDescriptor && mr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Ce = mr && Be && typeof Be.get == "function" ? Be.get : null, Ir = mr && Set.prototype.forEach, Sn = typeof WeakMap == "function" && WeakMap.prototype, se = Sn ? WeakMap.prototype.has : null, bn = typeof WeakSet == "function" && WeakSet.prototype, pe = bn ? WeakSet.prototype.has : null, An = typeof WeakRef == "function" && WeakRef.prototype, Nr = An ? WeakRef.prototype.deref : null, En = Boolean.prototype.valueOf, On = Object.prototype.toString, Pn = Function.prototype.toString, $n = String.prototype.match, vr = String.prototype.slice, H = String.prototype.replace, wn = String.prototype.toUpperCase, xr = String.prototype.toLowerCase, ct = RegExp.prototype.test, Fr = Array.prototype.concat, L = Array.prototype.join, Rn = Array.prototype.slice, Mr = Math.floor, or = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ue = Object.getOwnPropertySymbols, ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ie = typeof Symbol == "function" && typeof Symbol.iterator == "object", ye = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ie || !0) ? Symbol.toStringTag : null, ft = Object.prototype.propertyIsEnumerable, Dr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(r) {
  return r.__proto__;
} : null);
function Lr(r, e) {
  if (r === 1 / 0 || r === -1 / 0 || r !== r || r && r > -1e3 && r < 1e3 || ct.call(/e/, e))
    return e;
  var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof r == "number") {
    var n = r < 0 ? -Mr(-r) : Mr(r);
    if (n !== r) {
      var o = String(n), i = vr.call(e, o.length + 1);
      return H.call(o, t, "$&_") + "." + H.call(H.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return H.call(e, t, "$&_");
}
var ir = hn, Br = ir.custom, Ur = yt(Br) ? Br : null, st = {
  __proto__: null,
  double: '"',
  single: "'"
}, Cn = {
  __proto__: null,
  double: /(["\\])/g,
  single: /(['\\])/g
}, Ne = function r(e, t, n, o) {
  var i = t || {};
  if (U(i, "quoteStyle") && !U(st, i.quoteStyle))
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
    return mt(e, i);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var f = String(e);
    return l ? Lr(e, f) : f;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return l ? Lr(e, u) : u;
  }
  var p = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof n > "u" && (n = 0), n >= p && p > 0 && typeof e == "object")
    return lr(e) ? "[Array]" : "[Object]";
  var y = zn(i, n);
  if (typeof o > "u")
    o = [];
  else if (dt(o, e) >= 0)
    return "[Circular]";
  function m(x, G, Z) {
    if (G && (o = Rn.call(o), o.push(G)), Z) {
      var j = {
        depth: i.depth
      };
      return U(i, "quoteStyle") && (j.quoteStyle = i.quoteStyle), r(x, j, n + 1, o);
    }
    return r(x, i, n + 1, o);
  }
  if (typeof e == "function" && !qr(e)) {
    var h = Ln(e), v = Ee(e, m);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (v.length > 0 ? " { " + L.call(v, ", ") + " }" : "");
  }
  if (yt(e)) {
    var P = ie ? H.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : ar.call(e);
    return typeof e == "object" && !ie ? fe(P) : P;
  }
  if (Gn(e)) {
    for (var C = "<" + xr.call(String(e.nodeName)), g = e.attributes || [], I = 0; I < g.length; I++)
      C += " " + g[I].name + "=" + pt(Tn(g[I].value), "double", i);
    return C += ">", e.childNodes && e.childNodes.length && (C += "..."), C += "</" + xr.call(String(e.nodeName)) + ">", C;
  }
  if (lr(e)) {
    if (e.length === 0)
      return "[]";
    var O = Ee(e, m);
    return y && !Vn(O) ? "[" + ur(O, y) + "]" : "[ " + L.call(O, ", ") + " ]";
  }
  if (In(e)) {
    var $ = Ee(e, m);
    return !("cause" in Error.prototype) && "cause" in e && !ft.call(e, "cause") ? "{ [" + String(e) + "] " + L.call(Fr.call("[cause]: " + m(e.cause), $), ", ") + " }" : $.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + L.call($, ", ") + " }";
  }
  if (typeof e == "object" && c) {
    if (Ur && typeof e[Ur] == "function" && ir)
      return ir(e, { depth: p - n });
    if (c !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (Bn(e)) {
    var s = [];
    return _r && _r.call(e, function(x, G) {
      s.push(m(G, e, !0) + " => " + m(x, e));
    }), Wr("Map", Re.call(e), s, y);
  }
  if (Wn(e)) {
    var F = [];
    return Ir && Ir.call(e, function(x) {
      F.push(m(x, e));
    }), Wr("Set", Ce.call(e), F, y);
  }
  if (Un(e))
    return qe("WeakMap");
  if (kn(e))
    return qe("WeakSet");
  if (qn(e))
    return qe("WeakRef");
  if (xn(e))
    return fe(m(Number(e)));
  if (Mn(e))
    return fe(m(or.call(e)));
  if (Fn(e))
    return fe(En.call(e));
  if (Nn(e))
    return fe(m(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && e === globalThis || typeof $r < "u" && e === $r)
    return "{ [object globalThis] }";
  if (!_n(e) && !qr(e)) {
    var B = Ee(e, m), M = Dr ? Dr(e) === Object.prototype : e instanceof Object || e.constructor === Object, W = e instanceof Object ? "" : "null prototype", k = !M && ye && Object(e) === e && ye in e ? vr.call(Y(e), 8, -1) : W ? "Object" : "", K = M || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", N = K + (k || W ? "[" + L.call(Fr.call([], k || [], W || []), ": ") + "] " : "");
    return B.length === 0 ? N + "{}" : y ? N + "{" + ur(B, y) + "}" : N + "{ " + L.call(B, ", ") + " }";
  }
  return String(e);
};
function pt(r, e, t) {
  var n = t.quoteStyle || e, o = st[n];
  return o + r + o;
}
function Tn(r) {
  return H.call(String(r), /"/g, "&quot;");
}
function X(r) {
  return !ye || !(typeof r == "object" && (ye in r || typeof r[ye] < "u"));
}
function lr(r) {
  return Y(r) === "[object Array]" && X(r);
}
function _n(r) {
  return Y(r) === "[object Date]" && X(r);
}
function qr(r) {
  return Y(r) === "[object RegExp]" && X(r);
}
function In(r) {
  return Y(r) === "[object Error]" && X(r);
}
function Nn(r) {
  return Y(r) === "[object String]" && X(r);
}
function xn(r) {
  return Y(r) === "[object Number]" && X(r);
}
function Fn(r) {
  return Y(r) === "[object Boolean]" && X(r);
}
function yt(r) {
  if (ie)
    return r && typeof r == "object" && r instanceof Symbol;
  if (typeof r == "symbol")
    return !0;
  if (!r || typeof r != "object" || !ar)
    return !1;
  try {
    return ar.call(r), !0;
  } catch {
  }
  return !1;
}
function Mn(r) {
  if (!r || typeof r != "object" || !or)
    return !1;
  try {
    return or.call(r), !0;
  } catch {
  }
  return !1;
}
var Dn = Object.prototype.hasOwnProperty || function(r) {
  return r in this;
};
function U(r, e) {
  return Dn.call(r, e);
}
function Y(r) {
  return On.call(r);
}
function Ln(r) {
  if (r.name)
    return r.name;
  var e = $n.call(Pn.call(r), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function dt(r, e) {
  if (r.indexOf)
    return r.indexOf(e);
  for (var t = 0, n = r.length; t < n; t++)
    if (r[t] === e)
      return t;
  return -1;
}
function Bn(r) {
  if (!Re || !r || typeof r != "object")
    return !1;
  try {
    Re.call(r);
    try {
      Ce.call(r);
    } catch {
      return !0;
    }
    return r instanceof Map;
  } catch {
  }
  return !1;
}
function Un(r) {
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
function qn(r) {
  if (!Nr || !r || typeof r != "object")
    return !1;
  try {
    return Nr.call(r), !0;
  } catch {
  }
  return !1;
}
function Wn(r) {
  if (!Ce || !r || typeof r != "object")
    return !1;
  try {
    Ce.call(r);
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
function kn(r) {
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
function Gn(r) {
  return !r || typeof r != "object" ? !1 : typeof HTMLElement < "u" && r instanceof HTMLElement ? !0 : typeof r.nodeName == "string" && typeof r.getAttribute == "function";
}
function mt(r, e) {
  if (r.length > e.maxStringLength) {
    var t = r.length - e.maxStringLength, n = "... " + t + " more character" + (t > 1 ? "s" : "");
    return mt(vr.call(r, 0, e.maxStringLength), e) + n;
  }
  var o = Cn[e.quoteStyle || "single"];
  o.lastIndex = 0;
  var i = H.call(H.call(r, o, "\\$1"), /[\x00-\x1f]/g, jn);
  return pt(i, "single", e);
}
function jn(r) {
  var e = r.charCodeAt(0), t = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + wn.call(e.toString(16));
}
function fe(r) {
  return "Object(" + r + ")";
}
function qe(r) {
  return r + " { ? }";
}
function Wr(r, e, t, n) {
  var o = n ? ur(t, n) : L.call(t, ", ");
  return r + " (" + e + ") {" + o + "}";
}
function Vn(r) {
  for (var e = 0; e < r.length; e++)
    if (dt(r[e], `
`) >= 0)
      return !1;
  return !0;
}
function zn(r, e) {
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
function ur(r, e) {
  if (r.length === 0)
    return "";
  var t = `
` + e.prev + e.base;
  return t + L.call(r, "," + t) + `
` + e.prev;
}
function Ee(r, e) {
  var t = lr(r), n = [];
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
    U(r, f) && (t && String(Number(f)) === f && f < r.length || ie && c["$" + f] instanceof Symbol || (ct.call(/[^\w$]/, f) ? n.push(e(f, r) + ": " + e(r[f], r)) : n.push(f + ": " + e(r[f], r))));
  if (typeof Ue == "function")
    for (var u = 0; u < i.length; u++)
      ft.call(r, i[u]) && n.push("[" + e(i[u]) + "]: " + e(r[i[u]], r));
  return n;
}
var Hn = Ne, Yn = ce, xe = function(r, e, t) {
  for (var n = r, o; (o = n.next) != null; n = o)
    if (o.key === e)
      return n.next = o.next, t || (o.next = /** @type {NonNullable<typeof list.next>} */
      r.next, r.next = o), o;
}, Kn = function(r, e) {
  if (r) {
    var t = xe(r, e);
    return t && t.value;
  }
}, Qn = function(r, e, t) {
  var n = xe(r, e);
  n ? n.value = t : r.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: r.next,
    value: t
  };
}, Jn = function(r, e) {
  return r ? !!xe(r, e) : !1;
}, Xn = function(r, e) {
  if (r)
    return xe(r, e, !0);
}, Zn = function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new Yn("Side channel does not contain " + Hn(n));
    },
    delete: function(n) {
      var o = e && e.next, i = Xn(e, n);
      return i && o && o === i && (e = void 0), !!i;
    },
    get: function(n) {
      return Kn(e, n);
    },
    has: function(n) {
      return Jn(e, n);
    },
    set: function(n, o) {
      e || (e = {
        next: void 0
      }), Qn(
        /** @type {NonNullable<typeof $o>} */
        e,
        n,
        o
      );
    }
  };
  return t;
}, vt = Object, eo = Error, ro = EvalError, to = RangeError, no = ReferenceError, oo = SyntaxError, ao = URIError, io = Math.abs, lo = Math.floor, uo = Math.max, co = Math.min, fo = Math.pow, so = Math.round, po = Number.isNaN || function(e) {
  return e !== e;
}, yo = po, mo = function(e) {
  return yo(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, vo = Object.getOwnPropertyDescriptor, Pe = vo;
if (Pe)
  try {
    Pe([], "length");
  } catch {
    Pe = null;
  }
var gt = Pe, $e = Object.defineProperty || !1;
if ($e)
  try {
    $e({}, "a", { value: 1 });
  } catch {
    $e = !1;
  }
var go = $e, We, kr;
function ho() {
  return kr || (kr = 1, We = function() {
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
  }), We;
}
var ke, Gr;
function So() {
  if (Gr) return ke;
  Gr = 1;
  var r = typeof Symbol < "u" && Symbol, e = ho();
  return ke = function() {
    return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : e();
  }, ke;
}
var Ge, jr;
function ht() {
  return jr || (jr = 1, Ge = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ge;
}
var je, Vr;
function St() {
  if (Vr) return je;
  Vr = 1;
  var r = vt;
  return je = r.getPrototypeOf || null, je;
}
var Ve, zr;
function bo() {
  if (zr) return Ve;
  zr = 1;
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
    }, h = t(0, u.length - p.length), v = [], P = 0; P < h; P++)
      v[P] = "$" + P;
    if (y = Function("binder", "return function (" + c(v, ",") + "){ return binder.apply(this,arguments); }")(m), u.prototype) {
      var C = function() {
      };
      C.prototype = u.prototype, y.prototype = new C(), C.prototype = null;
    }
    return y;
  }, Ve;
}
var ze, Hr;
function Fe() {
  if (Hr) return ze;
  Hr = 1;
  var r = bo();
  return ze = Function.prototype.bind || r, ze;
}
var He, Yr;
function gr() {
  return Yr || (Yr = 1, He = Function.prototype.call), He;
}
var Ye, Kr;
function bt() {
  return Kr || (Kr = 1, Ye = Function.prototype.apply), Ye;
}
var Ao = typeof Reflect < "u" && Reflect && Reflect.apply, Eo = Fe(), Oo = bt(), Po = gr(), $o = Ao, wo = $o || Eo.call(Po, Oo), Ro = Fe(), Co = ce, To = gr(), _o = wo, At = function(e) {
  if (e.length < 1 || typeof e[0] != "function")
    throw new Co("a function is required");
  return _o(Ro, To, e);
}, Ke, Qr;
function Io() {
  if (Qr) return Ke;
  Qr = 1;
  var r = At, e = gt, t;
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
  return Ke = n && typeof n.get == "function" ? r([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(l) {
      return i(l == null ? l : o(l));
    }
  ) : !1, Ke;
}
var Qe, Jr;
function No() {
  if (Jr) return Qe;
  Jr = 1;
  var r = ht(), e = St(), t = Io();
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
var Je, Xr;
function xo() {
  if (Xr) return Je;
  Xr = 1;
  var r = Function.prototype.call, e = Object.prototype.hasOwnProperty, t = Fe();
  return Je = t.call(r, e), Je;
}
var S, Fo = vt, Mo = eo, Do = ro, Lo = to, Bo = no, le = oo, oe = ce, Uo = ao, qo = io, Wo = lo, ko = uo, Go = co, jo = fo, Vo = so, zo = mo, Et = Function, Xe = function(r) {
  try {
    return Et('"use strict"; return (' + r + ").constructor;")();
  } catch {
  }
}, me = gt, Ho = go, Ze = function() {
  throw new oe();
}, Yo = me ? function() {
  try {
    return arguments.callee, Ze;
  } catch {
    try {
      return me(arguments, "callee").get;
    } catch {
      return Ze;
    }
  }
}() : Ze, re = So()(), R = No(), Ko = St(), Qo = ht(), Ot = bt(), ve = gr(), ne = {}, Jo = typeof Uint8Array > "u" || !R ? S : R(Uint8Array), J = {
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
  "%Error%": Mo,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Do,
  "%Float16Array%": typeof Float16Array > "u" ? S : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? S : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? S : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? S : FinalizationRegistry,
  "%Function%": Et,
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
  "%Object%": Fo,
  "%Object.getOwnPropertyDescriptor%": me,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? S : Promise,
  "%Proxy%": typeof Proxy > "u" ? S : Proxy,
  "%RangeError%": Lo,
  "%ReferenceError%": Bo,
  "%Reflect%": typeof Reflect > "u" ? S : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? S : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !re || !R ? S : R((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? S : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": re && R ? R(""[Symbol.iterator]()) : S,
  "%Symbol%": re ? Symbol : S,
  "%SyntaxError%": le,
  "%ThrowTypeError%": Yo,
  "%TypedArray%": Jo,
  "%TypeError%": oe,
  "%Uint8Array%": typeof Uint8Array > "u" ? S : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? S : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? S : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? S : Uint32Array,
  "%URIError%": Uo,
  "%WeakMap%": typeof WeakMap > "u" ? S : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? S : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? S : WeakSet,
  "%Function.prototype.call%": ve,
  "%Function.prototype.apply%": Ot,
  "%Object.defineProperty%": Ho,
  "%Object.getPrototypeOf%": Ko,
  "%Math.abs%": qo,
  "%Math.floor%": Wo,
  "%Math.max%": ko,
  "%Math.min%": Go,
  "%Math.pow%": jo,
  "%Math.round%": Vo,
  "%Math.sign%": zo,
  "%Reflect.getPrototypeOf%": Qo
};
if (R)
  try {
    null.error;
  } catch (r) {
    var Xo = R(R(r));
    J["%Error.prototype%"] = Xo;
  }
var Zo = function r(e) {
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
}, Zr = {
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
}, ge = Fe(), Te = xo(), ea = ge.call(ve, Array.prototype.concat), ra = ge.call(Ot, Array.prototype.splice), et = ge.call(ve, String.prototype.replace), _e = ge.call(ve, String.prototype.slice), ta = ge.call(ve, RegExp.prototype.exec), na = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, oa = /\\(\\)?/g, aa = function(e) {
  var t = _e(e, 0, 1), n = _e(e, -1);
  if (t === "%" && n !== "%")
    throw new le("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && t !== "%")
    throw new le("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return et(e, na, function(i, c, l, f) {
    o[o.length] = l ? et(f, oa, "$1") : c || i;
  }), o;
}, ia = function(e, t) {
  var n = e, o;
  if (Te(Zr, n) && (o = Zr[n], n = "%" + o[0] + "%"), Te(J, n)) {
    var i = J[n];
    if (i === ne && (i = Zo(n)), typeof i > "u" && !t)
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
  if (ta(/^%?[^%]*%?$/, e) === null)
    throw new le("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = aa(e), o = n.length > 0 ? n[0] : "", i = ia("%" + o + "%", t), c = i.name, l = i.value, f = !1, u = i.alias;
  u && (o = u[0], ra(n, ea([0, 1], u)));
  for (var p = 1, y = !0; p < n.length; p += 1) {
    var m = n[p], h = _e(m, 0, 1), v = _e(m, -1);
    if ((h === '"' || h === "'" || h === "`" || v === '"' || v === "'" || v === "`") && h !== v)
      throw new le("property names with quotes must have matching quotes");
    if ((m === "constructor" || !y) && (f = !0), o += "." + m, c = "%" + o + "%", Te(J, c))
      l = J[c];
    else if (l != null) {
      if (!(m in l)) {
        if (!t)
          throw new oe("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (me && p + 1 >= n.length) {
        var P = me(l, m);
        y = !!P, y && "get" in P && !("originalValue" in P.get) ? l = P.get : l = l[m];
      } else
        y = Te(l, m), l = l[m];
      y && !f && (J[c] = l);
    }
  }
  return l;
}, Pt = hr, $t = At, la = $t([Pt("%String.prototype.indexOf%")]), wt = function(e, t) {
  var n = (
    /** @type {(this: unknown, ...args: unknown[]) => unknown} */
    Pt(e, !!t)
  );
  return typeof n == "function" && la(e, ".prototype.") > -1 ? $t(
    /** @type {const} */
    [n]
  ) : n;
}, ua = hr, he = wt, ca = Ne, fa = ce, rt = ua("%Map%", !0), sa = he("Map.prototype.get", !0), pa = he("Map.prototype.set", !0), ya = he("Map.prototype.has", !0), da = he("Map.prototype.delete", !0), ma = he("Map.prototype.size", !0), Rt = !!rt && /** @type {Exclude<import('.'), false>} */
function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new fa("Side channel does not contain " + ca(n));
    },
    delete: function(n) {
      if (e) {
        var o = da(e, n);
        return ma(e) === 0 && (e = void 0), o;
      }
      return !1;
    },
    get: function(n) {
      if (e)
        return sa(e, n);
    },
    has: function(n) {
      return e ? ya(e, n) : !1;
    },
    set: function(n, o) {
      e || (e = new rt()), pa(e, n, o);
    }
  };
  return t;
}, va = hr, Me = wt, ga = Ne, Oe = Rt, ha = ce, te = va("%WeakMap%", !0), Sa = Me("WeakMap.prototype.get", !0), ba = Me("WeakMap.prototype.set", !0), Aa = Me("WeakMap.prototype.has", !0), Ea = Me("WeakMap.prototype.delete", !0), Oa = te ? (
  /** @type {Exclude<import('.'), false>} */
  function() {
    var e, t, n = {
      assert: function(o) {
        if (!n.has(o))
          throw new ha("Side channel does not contain " + ga(o));
      },
      delete: function(o) {
        if (te && o && (typeof o == "object" || typeof o == "function")) {
          if (e)
            return Ea(e, o);
        } else if (Oe && t)
          return t.delete(o);
        return !1;
      },
      get: function(o) {
        return te && o && (typeof o == "object" || typeof o == "function") && e ? Sa(e, o) : t && t.get(o);
      },
      has: function(o) {
        return te && o && (typeof o == "object" || typeof o == "function") && e ? Aa(e, o) : !!t && t.has(o);
      },
      set: function(o, i) {
        te && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new te()), ba(e, o, i)) : Oe && (t || (t = Oe()), t.set(o, i));
      }
    };
    return n;
  }
) : Oe, Pa = ce, $a = Ne, wa = Zn, Ra = Rt, Ca = Oa, Ta = Ca || Ra || wa, _a = function() {
  var e, t = {
    assert: function(n) {
      if (!t.has(n))
        throw new Pa("Side channel does not contain " + $a(n));
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
      e || (e = Ta()), e.set(n, o);
    }
  };
  return t;
}, Ia = String.prototype.replace, Na = /%20/g, er = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Sr = {
  default: er.RFC3986,
  formatters: {
    RFC1738: function(r) {
      return Ia.call(r, Na, "+");
    },
    RFC3986: function(r) {
      return String(r);
    }
  },
  RFC1738: er.RFC1738,
  RFC3986: er.RFC3986
}, xa = Sr, rr = Object.prototype.hasOwnProperty, Q = Array.isArray, D = function() {
  for (var r = [], e = 0; e < 256; ++e)
    r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return r;
}(), Fa = function(e) {
  for (; e.length > 1; ) {
    var t = e.pop(), n = t.obj[t.prop];
    if (Q(n)) {
      for (var o = [], i = 0; i < n.length; ++i)
        typeof n[i] < "u" && o.push(n[i]);
      t.obj[t.prop] = o;
    }
  }
}, Ct = function(e, t) {
  for (var n = t && t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < e.length; ++o)
    typeof e[o] < "u" && (n[o] = e[o]);
  return n;
}, Ma = function r(e, t, n) {
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
  return Q(e) && !Q(t) && (o = Ct(e, n)), Q(e) && Q(t) ? (t.forEach(function(i, c) {
    if (rr.call(e, c)) {
      var l = e[c];
      l && typeof l == "object" && i && typeof i == "object" ? e[c] = r(l, i, n) : e.push(i);
    } else
      e[c] = i;
  }), e) : Object.keys(t).reduce(function(i, c) {
    var l = t[c];
    return rr.call(i, c) ? i[c] = r(i[c], l, n) : i[c] = l, i;
  }, o);
}, Da = function(e, t) {
  return Object.keys(t).reduce(function(n, o) {
    return n[o] = t[o], n;
  }, e);
}, La = function(r, e, t) {
  var n = r.replace(/\+/g, " ");
  if (t === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Ba = function(e, t, n, o, i) {
  if (e.length === 0)
    return e;
  var c = e;
  if (typeof e == "symbol" ? c = Symbol.prototype.toString.call(e) : typeof e != "string" && (c = String(e)), n === "iso-8859-1")
    return escape(c).replace(/%u[0-9a-f]{4}/gi, function(p) {
      return "%26%23" + parseInt(p.slice(2), 16) + "%3B";
    });
  for (var l = "", f = 0; f < c.length; ++f) {
    var u = c.charCodeAt(f);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || i === xa.RFC1738 && (u === 40 || u === 41)) {
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
}, Ua = function(e) {
  for (var t = [{ obj: { o: e }, prop: "o" }], n = [], o = 0; o < t.length; ++o)
    for (var i = t[o], c = i.obj[i.prop], l = Object.keys(c), f = 0; f < l.length; ++f) {
      var u = l[f], p = c[u];
      typeof p == "object" && p !== null && n.indexOf(p) === -1 && (t.push({ obj: c, prop: u }), n.push(p));
    }
  return Fa(t), e;
}, qa = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, Wa = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, ka = function(e, t) {
  return [].concat(e, t);
}, Ga = function(e, t) {
  if (Q(e)) {
    for (var n = [], o = 0; o < e.length; o += 1)
      n.push(t(e[o]));
    return n;
  }
  return t(e);
}, Tt = {
  arrayToObject: Ct,
  assign: Da,
  combine: ka,
  compact: Ua,
  decode: La,
  encode: Ba,
  isBuffer: Wa,
  isRegExp: qa,
  maybeMap: Ga,
  merge: Ma
}, _t = _a, we = Tt, de = Sr, ja = Object.prototype.hasOwnProperty, tt = {
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
}, q = Array.isArray, Va = Array.prototype.push, It = function(r, e) {
  Va.apply(r, q(e) ? e : [e]);
}, za = Date.prototype.toISOString, nt = de.default, T = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: we.encode,
  encodeValuesOnly: !1,
  format: nt,
  formatter: de.formatters[nt],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return za.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Ha = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, tr = {}, Ya = function r(e, t, n, o, i, c, l, f, u, p, y, m, h, v, P, C) {
  for (var g = e, I = C, O = 0, $ = !1; (I = I.get(tr)) !== void 0 && !$; ) {
    var s = I.get(e);
    if (O += 1, typeof s < "u") {
      if (s === O)
        throw new RangeError("Cyclic object value");
      $ = !0;
    }
    typeof I.get(tr) > "u" && (O = 0);
  }
  if (typeof f == "function" ? g = f(t, g) : g instanceof Date ? g = y(g) : n === "comma" && q(g) && (g = we.maybeMap(g, function(j) {
    return j instanceof Date ? y(j) : j;
  })), g === null) {
    if (i)
      return l && !v ? l(t, T.encoder, P, "key", m) : t;
    g = "";
  }
  if (Ha(g) || we.isBuffer(g)) {
    if (l) {
      var F = v ? t : l(t, T.encoder, P, "key", m);
      return [h(F) + "=" + h(l(g, T.encoder, P, "value", m))];
    }
    return [h(t) + "=" + h(String(g))];
  }
  var B = [];
  if (typeof g > "u")
    return B;
  var M;
  if (n === "comma" && q(g))
    v && l && (g = we.maybeMap(g, l)), M = [{ value: g.length > 0 ? g.join(",") || null : void 0 }];
  else if (q(f))
    M = f;
  else {
    var W = Object.keys(g);
    M = u ? W.sort(u) : W;
  }
  for (var k = o && q(g) && g.length === 1 ? t + "[]" : t, K = 0; K < M.length; ++K) {
    var N = M[K], x = typeof N == "object" && typeof N.value < "u" ? N.value : g[N];
    if (!(c && x === null)) {
      var G = q(g) ? typeof n == "function" ? n(k, N) : k : k + (p ? "." + N : "[" + N + "]");
      C.set(e, O);
      var Z = _t();
      Z.set(tr, C), It(B, r(
        x,
        G,
        n,
        o,
        i,
        c,
        n === "comma" && v && q(g) ? null : l,
        f,
        u,
        p,
        y,
        m,
        h,
        v,
        P,
        Z
      ));
    }
  }
  return B;
}, Ka = function(e) {
  if (!e)
    return T;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var t = e.charset || T.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = de.default;
  if (typeof e.format < "u") {
    if (!ja.call(de.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var o = de.formatters[n], i = T.filter;
  return (typeof e.filter == "function" || q(e.filter)) && (i = e.filter), {
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
}, Qa = function(r, e) {
  var t = r, n = Ka(e), o, i;
  typeof n.filter == "function" ? (i = n.filter, t = i("", t)) : q(n.filter) && (i = n.filter, o = i);
  var c = [];
  if (typeof t != "object" || t === null)
    return "";
  var l;
  e && e.arrayFormat in tt ? l = e.arrayFormat : e && "indices" in e ? l = e.indices ? "indices" : "repeat" : l = "indices";
  var f = tt[l];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = f === "comma" && e && e.commaRoundTrip;
  o || (o = Object.keys(t)), n.sort && o.sort(n.sort);
  for (var p = _t(), y = 0; y < o.length; ++y) {
    var m = o[y];
    n.skipNulls && t[m] === null || It(c, Ya(
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
}, ue = Tt, cr = Object.prototype.hasOwnProperty, Ja = Array.isArray, w = {
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
}, Xa = function(r) {
  return r.replace(/&#(\d+);/g, function(e, t) {
    return String.fromCharCode(parseInt(t, 10));
  });
}, Nt = function(r, e) {
  return r && typeof r == "string" && e.comma && r.indexOf(",") > -1 ? r.split(",") : r;
}, Za = "utf8=%26%2310003%3B", ei = "utf8=%E2%9C%93", ri = function(e, t) {
  var n = {}, o = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, c = o.split(t.delimiter, i), l = -1, f, u = t.charset;
  if (t.charsetSentinel)
    for (f = 0; f < c.length; ++f)
      c[f].indexOf("utf8=") === 0 && (c[f] === ei ? u = "utf-8" : c[f] === Za && (u = "iso-8859-1"), l = f, f = c.length);
  for (f = 0; f < c.length; ++f)
    if (f !== l) {
      var p = c[f], y = p.indexOf("]="), m = y === -1 ? p.indexOf("=") : y + 1, h, v;
      m === -1 ? (h = t.decoder(p, w.decoder, u, "key"), v = t.strictNullHandling ? null : "") : (h = t.decoder(p.slice(0, m), w.decoder, u, "key"), v = ue.maybeMap(
        Nt(p.slice(m + 1), t),
        function(P) {
          return t.decoder(P, w.decoder, u, "value");
        }
      )), v && t.interpretNumericEntities && u === "iso-8859-1" && (v = Xa(v)), p.indexOf("[]=") > -1 && (v = Ja(v) ? [v] : v), cr.call(n, h) ? n[h] = ue.combine(n[h], v) : n[h] = v;
    }
  return n;
}, ti = function(r, e, t, n) {
  for (var o = n ? e : Nt(e, t), i = r.length - 1; i >= 0; --i) {
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
}, ni = function(e, t, n, o) {
  if (e) {
    var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, c = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, f = n.depth > 0 && c.exec(i), u = f ? i.slice(0, f.index) : i, p = [];
    if (u) {
      if (!n.plainObjects && cr.call(Object.prototype, u) && !n.allowPrototypes)
        return;
      p.push(u);
    }
    for (var y = 0; n.depth > 0 && (f = l.exec(i)) !== null && y < n.depth; ) {
      if (y += 1, !n.plainObjects && cr.call(Object.prototype, f[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      p.push(f[1]);
    }
    return f && p.push("[" + i.slice(f.index) + "]"), ti(p, t, n, o);
  }
}, oi = function(e) {
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
}, ai = function(r, e) {
  var t = oi(e);
  if (r === "" || r === null || typeof r > "u")
    return t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof r == "string" ? ri(r, t) : r, o = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), c = 0; c < i.length; ++c) {
    var l = i[c], f = ni(l, n[l], t, typeof r == "string");
    o = ue.merge(o, f, t);
  }
  return t.allowSparse === !0 ? o : ue.compact(o);
}, ii = Qa, li = ai, ui = Sr, nr = {
  formats: ui,
  parse: li,
  stringify: ii
};
const xt = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED"
}, ji = {
  ...xt,
  BLOCKED: "BLOCKED",
  OPEN: "OPEN",
  RESOLVED: "RESOLVED"
};
var ci = /* @__PURE__ */ ((r) => (r.BAD_LANGUAGE = "BAD_LANGUAGE", r.DISCRIMINATION = "DISCRIMINATION", r.OTHER = "OTHER", r))(ci || {});
const z = {
  ...xt,
  BLOCKED: "BLOCKED",
  OPEN: "OPEN",
  REMOVED: "REMOVED",
  TO_REVIEW: "TO_REVIEW",
  UNKNOWN: "UNKNOWN"
}, fi = a.object({
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
}), Ft = a.intersection(
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
), si = a.object({
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
}), Mt = a.union([
  a.literal(z.PENDING),
  a.literal(z.APPROVED),
  a.literal(z.REJECTED),
  a.literal(z.BLOCKED),
  a.literal(z.OPEN),
  a.literal(z.REMOVED),
  a.literal(z.TO_REVIEW),
  a.literal(z.UNKNOWN)
]), Dt = a.union([
  a.literal("BAD_LANGUAGE"),
  a.literal("DISCRIMINATION"),
  a.literal("OTHER")
]), pi = a.object({
  id: a.number(),
  reason: Dt,
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
  approvalStatus: Mt.nullable(),
  createdAt: a.string(),
  updatedAt: a.string(),
  reports: a.array(pi).nullable().optional(),
  author: si,
  gotThread: a.boolean().nullable().optional(),
  threadFirstItemId: a.number().nullable().optional(),
  entry: a.string().optional()
}), Lt = a.object({
  page: a.number(),
  pageSize: a.number(),
  pageCount: a.number(),
  total: a.number()
});
function fr() {
  return Ie.extend({
    related: Ft.optional(),
    documentId: a.string(),
    threadOf: a.lazy(
      () => Ie.merge(a.object({ related: a.string(), threadOf: Bt.nullable().optional(), documentId: a.string().optional() }))
    ).nullable().optional()
  });
}
const Bt = fr(), yi = a.object({
  pagination: Lt,
  result: a.array(Bt)
}), di = a.object({
  entity: Ft,
  selected: Ie.merge(
    a.object({
      related: a.string(),
      threadOf: fr().omit({ related: !0 }).merge(a.object({ related: a.string() })).nullable().optional()
    })
  ).nullable(),
  level: a.array(fr().omit({ threadOf: !0, related: !0 }))
}), Ut = a.object({
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
}), mi = a.object({
  data: Ut
}), vi = a.object({
  data: a.array(Ut)
}), gi = a.object({
  author: a.unknown(),
  content: a.string(),
  id: a.number(),
  approvalStatus: Mt.nullable().optional(),
  reason: Dt,
  reports: a.array(a.unknown()),
  resolved: a.boolean().optional(),
  updatedAt: a.string().nullable(),
  createdAt: a.string(),
  related: Ie
}), hi = a.object({
  pagination: Lt,
  result: a.array(gi)
}), Si = a.object({
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
}), bi = a.object({
  data: a.array(
    Si
  )
}), Ai = a.object({
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
}), E = "comments", Ei = wr.once((r) => ({
  config: {
    getKey() {
      return [E, "config"];
    },
    async query() {
      const e = await r.get(`/${E}/settings/config`);
      return fi.parseAsync(e.data);
    }
  },
  contentTypeBuilder: {
    single: {
      getKey(e, t) {
        return [E, "moderate", "content-type", t, e];
      },
      async query(e) {
        const t = await r.get(`/content-type-builder/content-types/${e}`);
        return mi.parseAsync(t.data).then((n) => n.data);
      }
    },
    all: {
      getKey() {
        return [E, "moderate", "content-types"];
      },
      async query() {
        const e = await r.get("/content-type-builder/content-types");
        return vi.parseAsync(e.data).then((t) => t.data);
      }
    }
  },
  roles: {
    getKey() {
      return [E, "moderate", "roles"];
    },
    async query() {
      const e = await r.get("/admin/roles");
      return bi.parseAsync(e.data).then((t) => t.data);
    }
  },
  user: {
    getKey() {
      return [E, "moderate", "user"];
    },
    async query() {
      const e = await r.get("/admin/users/me");
      return Ai.parseAsync(e.data).then((t) => t.data);
    }
  },
  comments: {
    findAll: {
      getKey(e) {
        return [E, "moderate", "all", e ? JSON.stringify(e) : void 0].filter(Boolean);
      },
      async query(e) {
        const t = await r.get(`/${E}/moderate/all?${nr.stringify(e, { encode: !1 })}`);
        return yi.parseAsync(t.data);
      }
    },
    findOne: {
      getKey(e, t) {
        return [E, "details", e?.toString(), t ? JSON.stringify(t) : void 0].filter(Boolean);
      },
      async query(e, t) {
        const n = wr.isEmpty(t) ? "" : `?${nr.stringify(t, { encode: !1 })}`, o = await r.get(`/${E}/moderate/single/${e}${n}`);
        return di.parseAsync(o.data);
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
        const t = await r.get(`/${E}/moderate/reports${e ? `?${nr.stringify(e, { encode: !1 })}` : ""}`);
        return hi.parseAsync(t.data);
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
})), Oi = () => {
  const r = dn();
  return ut(() => Ei(r), [r]);
}, Pi = yn(null), $i = ({ children: r }) => {
  const e = Oi(), { data: t } = fn({
    queryKey: e.user.getKey(),
    queryFn: e.user.query
  });
  return t ? /* @__PURE__ */ _(Pi.Provider, { value: t, children: r }) : null;
};
console.log("!!darkTheme", !!it);
console.log("!!lightTheme", !!on);
const wi = new pn({
  defaultOptions: {
    queries: {
      retry: !1,
      refetchOnWindowFocus: !1
    }
  }
}), Vi = ({ children: r }) => /* @__PURE__ */ _(sn, { client: wi, children: /* @__PURE__ */ _(nn, { theme: { theme: it, themeName: "light" }, children: /* @__PURE__ */ _($i, { children: r }) }) }), zi = () => {
  const r = ut(
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
};
var sr = { exports: {} }, b = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ot;
function Ri() {
  if (ot) return b;
  ot = 1;
  var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, i = r ? Symbol.for("react.profiler") : 60114, c = r ? Symbol.for("react.provider") : 60109, l = r ? Symbol.for("react.context") : 60110, f = r ? Symbol.for("react.async_mode") : 60111, u = r ? Symbol.for("react.concurrent_mode") : 60111, p = r ? Symbol.for("react.forward_ref") : 60112, y = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, P = r ? Symbol.for("react.block") : 60121, C = r ? Symbol.for("react.fundamental") : 60117, g = r ? Symbol.for("react.responder") : 60118, I = r ? Symbol.for("react.scope") : 60119;
  function O(s) {
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
    return O(s) === u;
  }
  return b.AsyncMode = f, b.ConcurrentMode = u, b.ContextConsumer = l, b.ContextProvider = c, b.Element = e, b.ForwardRef = p, b.Fragment = n, b.Lazy = v, b.Memo = h, b.Portal = t, b.Profiler = i, b.StrictMode = o, b.Suspense = y, b.isAsyncMode = function(s) {
    return $(s) || O(s) === f;
  }, b.isConcurrentMode = $, b.isContextConsumer = function(s) {
    return O(s) === l;
  }, b.isContextProvider = function(s) {
    return O(s) === c;
  }, b.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }, b.isForwardRef = function(s) {
    return O(s) === p;
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
    return O(s) === y;
  }, b.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === n || s === u || s === i || s === o || s === y || s === m || typeof s == "object" && s !== null && (s.$$typeof === v || s.$$typeof === h || s.$$typeof === c || s.$$typeof === l || s.$$typeof === p || s.$$typeof === C || s.$$typeof === g || s.$$typeof === I || s.$$typeof === P);
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
var at;
function Ci() {
  return at || (at = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, i = r ? Symbol.for("react.profiler") : 60114, c = r ? Symbol.for("react.provider") : 60109, l = r ? Symbol.for("react.context") : 60110, f = r ? Symbol.for("react.async_mode") : 60111, u = r ? Symbol.for("react.concurrent_mode") : 60111, p = r ? Symbol.for("react.forward_ref") : 60112, y = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, P = r ? Symbol.for("react.block") : 60121, C = r ? Symbol.for("react.fundamental") : 60117, g = r ? Symbol.for("react.responder") : 60118, I = r ? Symbol.for("react.scope") : 60119;
    function O(d) {
      return typeof d == "string" || typeof d == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      d === n || d === u || d === i || d === o || d === y || d === m || typeof d == "object" && d !== null && (d.$$typeof === v || d.$$typeof === h || d.$$typeof === c || d.$$typeof === l || d.$$typeof === p || d.$$typeof === C || d.$$typeof === g || d.$$typeof === I || d.$$typeof === P);
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
                var Pr = be && be.$$typeof;
                switch (Pr) {
                  case l:
                  case p:
                  case v:
                  case h:
                  case c:
                    return Pr;
                  default:
                    return De;
                }
            }
          case t:
            return De;
        }
      }
    }
    var s = f, F = u, B = l, M = c, W = e, k = p, K = n, N = v, x = h, G = t, Z = i, j = o, Gt = y, Er = !1;
    function jt(d) {
      return Er || (Er = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Or(d) || $(d) === f;
    }
    function Or(d) {
      return $(d) === u;
    }
    function Vt(d) {
      return $(d) === l;
    }
    function zt(d) {
      return $(d) === c;
    }
    function Ht(d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }
    function Yt(d) {
      return $(d) === p;
    }
    function Kt(d) {
      return $(d) === n;
    }
    function Qt(d) {
      return $(d) === v;
    }
    function Jt(d) {
      return $(d) === h;
    }
    function Xt(d) {
      return $(d) === t;
    }
    function Zt(d) {
      return $(d) === i;
    }
    function en(d) {
      return $(d) === o;
    }
    function rn(d) {
      return $(d) === y;
    }
    A.AsyncMode = s, A.ConcurrentMode = F, A.ContextConsumer = B, A.ContextProvider = M, A.Element = W, A.ForwardRef = k, A.Fragment = K, A.Lazy = N, A.Memo = x, A.Portal = G, A.Profiler = Z, A.StrictMode = j, A.Suspense = Gt, A.isAsyncMode = jt, A.isConcurrentMode = Or, A.isContextConsumer = Vt, A.isContextProvider = zt, A.isElement = Ht, A.isForwardRef = Yt, A.isFragment = Kt, A.isLazy = Qt, A.isMemo = Jt, A.isPortal = Xt, A.isProfiler = Zt, A.isStrictMode = en, A.isSuspense = rn, A.isValidElementType = O, A.typeOf = $;
  }()), A;
}
process.env.NODE_ENV === "production" ? sr.exports = Ri() : sr.exports = Ci();
var Ti = sr.exports, qt = Ti, _i = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ii = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Wt = {};
Wt[qt.ForwardRef] = _i;
Wt[qt.Memo] = Ii;
function Ni(r, e, t) {
  if (t === void 0 && (t = Error), !r)
    throw new t(e);
}
var xi = function(r) {
  process.env.NODE_ENV !== "production" && console.error(r);
}, Fi = function(r) {
  process.env.NODE_ENV !== "production" && console.warn(r);
}, Mi = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: "en",
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: xi,
  onWarn: Fi
};
function Di(r) {
  Ni(r, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
Rr(Rr({}, Mi), { textComponent: ae.Fragment });
var br = typeof window < "u" && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = ae.createContext(null)) : ae.createContext(null);
br.Consumer;
br.Provider;
var Li = br;
function Ar() {
  var r = ae.useContext(Li);
  return Di(r), r;
}
var pr;
(function(r) {
  r.formatDate = "FormattedDate", r.formatTime = "FormattedTime", r.formatNumber = "FormattedNumber", r.formatList = "FormattedList", r.formatDisplayName = "FormattedDisplayName";
})(pr || (pr = {}));
var yr;
(function(r) {
  r.formatDate = "FormattedDateParts", r.formatTime = "FormattedTimeParts", r.formatNumber = "FormattedNumberParts", r.formatList = "FormattedListParts";
})(yr || (yr = {}));
function kt(r) {
  var e = function(t) {
    var n = Ar(), o = t.value, i = t.children, c = lt(t, ["value", "children"]), l = typeof o == "string" ? new Date(o || 0) : o, f = r === "formatDate" ? n.formatDateToParts(l, c) : n.formatTimeToParts(l, c);
    return i(f);
  };
  return e.displayName = yr[r], e;
}
function Se(r) {
  var e = function(t) {
    var n = Ar(), o = t.value, i = t.children, c = lt(
      t,
      ["value", "children"]
    ), l = n[r](o, c);
    if (typeof i == "function")
      return i(l);
    var f = n.textComponent || ae.Fragment;
    return ae.createElement(f, null, l);
  };
  return e.displayName = pr[r], e;
}
Se("formatDate");
Se("formatTime");
Se("formatNumber");
Se("formatList");
Se("formatDisplayName");
kt("formatDate");
kt("formatTime");
const Hi = (r, e = "", t = !0) => {
  const { formatMessage: n } = Ar();
  let o = "";
  return typeof r == "string" ? o = r : o = r?.id.toString() || o, n(
    {
      id: `${t ? an : "app.components"}.${o}`,
      defaultMessage: e
    },
    typeof r == "string" ? void 0 : r?.props
  );
}, Yi = ({
  title: r,
  onConfirm: e,
  Trigger: t,
  labelConfirm: n,
  iconConfirm: o,
  labelCancel: i,
  children: c
}) => {
  const [l, f] = Tr(!1), [u, p] = Tr(!1), y = () => f((h) => !h), m = async () => {
    p(!0), await e(), p(!1), y();
  };
  return /* @__PURE__ */ Ae(V.Root, { open: l, children: [
    /* @__PURE__ */ _(V.Trigger, { children: /* @__PURE__ */ _(t, { onClick: y }) }),
    /* @__PURE__ */ Ae(V.Content, { children: [
      /* @__PURE__ */ _(V.Header, { children: r }),
      /* @__PURE__ */ _(V.Body, { children: /* @__PURE__ */ Ae(ln, { justifyContent: "center", direction: "column", children: [
        /* @__PURE__ */ _(un, { fill: "danger500", stroke: "danger500", height: "24", width: "24" }),
        /* @__PURE__ */ _(cn, { id: "confirm-description", children: c })
      ] }) }),
      /* @__PURE__ */ Ae(V.Footer, { children: [
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
  ji as R,
  Pi as U,
  zi as a,
  Ar as b,
  ci as c,
  Yi as d,
  Vi as e,
  Hi as g,
  Oi as u
};
