import ka from "react";
import Fa from "react-dom";
var $l = {};
/**
 * @license React
 * react-dom-server.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr = ka, Aa = Fa;
function b(n) {
  var e = "https://react.dev/errors/" + n;
  if (1 < arguments.length) {
    e += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var l = 2; l < arguments.length; l++)
      e += "&args[]=" + encodeURIComponent(arguments[l]);
  }
  return "Minified React error #" + n + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var zt = Symbol.for("react.transitional.element"), Ht = Symbol.for("react.portal"), Wt = Symbol.for("react.fragment"), Ut = Symbol.for("react.strict_mode"), Yt = Symbol.for("react.profiler"), Oa = Symbol.for("react.provider"), Gt = Symbol.for("react.consumer"), al = Symbol.for("react.context"), er = Symbol.for("react.forward_ref"), il = Symbol.for("react.suspense"), lr = Symbol.for("react.suspense_list"), rr = Symbol.for("react.memo"), cl = Symbol.for("react.lazy"), Ma = Symbol.for("react.scope"), Xt = Symbol.for("react.activity"), Ia = Symbol.for("react.legacy_hidden"), _a = Symbol.for("react.memo_cache_sentinel"), La = Symbol.for("react.view_transition"), pr = Symbol.iterator, Wl = Array.isArray;
function $r(n, e) {
  var l = n.length & 3, r = n.length - l, t = e;
  for (e = 0; e < r; ) {
    var a = n.charCodeAt(e) & 255 | (n.charCodeAt(++e) & 255) << 8 | (n.charCodeAt(++e) & 255) << 16 | (n.charCodeAt(++e) & 255) << 24;
    ++e, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, a = 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295, t ^= a, t = t << 13 | t >>> 19, t = 5 * (t & 65535) + ((5 * (t >>> 16) & 65535) << 16) & 4294967295, t = (t & 65535) + 27492 + (((t >>> 16) + 58964 & 65535) << 16);
  }
  switch (a = 0, l) {
    case 3:
      a ^= (n.charCodeAt(e + 2) & 255) << 16;
    case 2:
      a ^= (n.charCodeAt(e + 1) & 255) << 8;
    case 1:
      a ^= n.charCodeAt(e) & 255, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, t ^= 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295;
  }
  return t ^= n.length, t ^= t >>> 16, t = 2246822507 * (t & 65535) + ((2246822507 * (t >>> 16) & 65535) << 16) & 4294967295, t ^= t >>> 13, t = 3266489909 * (t & 65535) + ((3266489909 * (t >>> 16) & 65535) << 16) & 4294967295, (t ^ t >>> 16) >>> 0;
}
var Zt = new MessageChannel(), Jt = [];
Zt.port1.onmessage = function() {
  var n = Jt.shift();
  n && n();
};
function tr(n) {
  Jt.push(n), Zt.port2.postMessage(null);
}
function Ba(n) {
  setTimeout(function() {
    throw n;
  });
}
var Na = Promise, Qt = typeof queueMicrotask == "function" ? queueMicrotask : function(n) {
  Na.resolve(null).then(n).catch(Ba);
}, Q = null, V = 0;
function h(n, e) {
  if (e.byteLength !== 0)
    if (2048 < e.byteLength)
      0 < V && (n.enqueue(
        new Uint8Array(Q.buffer, 0, V)
      ), Q = new Uint8Array(2048), V = 0), n.enqueue(e);
    else {
      var l = Q.length - V;
      l < e.byteLength && (l === 0 ? n.enqueue(Q) : (Q.set(e.subarray(0, l), V), n.enqueue(Q), e = e.subarray(l)), Q = new Uint8Array(2048), V = 0), Q.set(e, V), V += e.byteLength;
    }
}
function x(n, e) {
  return h(n, e), !0;
}
function Ol(n) {
  Q && 0 < V && (n.enqueue(new Uint8Array(Q.buffer, 0, V)), Q = null, V = 0);
}
var Vt = new TextEncoder();
function g(n) {
  return Vt.encode(n);
}
function o(n) {
  return Vt.encode(n);
}
function Kt(n, e) {
  typeof n.error == "function" ? n.error(e) : n.close();
}
var X = Object.assign, P = Object.prototype.hasOwnProperty, Da = RegExp(
  "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
), nt = {}, et = {};
function ar(n) {
  return P.call(et, n) ? !0 : P.call(nt, n) ? !1 : Da.test(n) ? et[n] = !0 : (nt[n] = !0, !1);
}
var za = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
), Ha = /* @__PURE__ */ new Map([
  ["acceptCharset", "accept-charset"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
  ["crossOrigin", "crossorigin"],
  ["accentHeight", "accent-height"],
  ["alignmentBaseline", "alignment-baseline"],
  ["arabicForm", "arabic-form"],
  ["baselineShift", "baseline-shift"],
  ["capHeight", "cap-height"],
  ["clipPath", "clip-path"],
  ["clipRule", "clip-rule"],
  ["colorInterpolation", "color-interpolation"],
  ["colorInterpolationFilters", "color-interpolation-filters"],
  ["colorProfile", "color-profile"],
  ["colorRendering", "color-rendering"],
  ["dominantBaseline", "dominant-baseline"],
  ["enableBackground", "enable-background"],
  ["fillOpacity", "fill-opacity"],
  ["fillRule", "fill-rule"],
  ["floodColor", "flood-color"],
  ["floodOpacity", "flood-opacity"],
  ["fontFamily", "font-family"],
  ["fontSize", "font-size"],
  ["fontSizeAdjust", "font-size-adjust"],
  ["fontStretch", "font-stretch"],
  ["fontStyle", "font-style"],
  ["fontVariant", "font-variant"],
  ["fontWeight", "font-weight"],
  ["glyphName", "glyph-name"],
  ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
  ["glyphOrientationVertical", "glyph-orientation-vertical"],
  ["horizAdvX", "horiz-adv-x"],
  ["horizOriginX", "horiz-origin-x"],
  ["imageRendering", "image-rendering"],
  ["letterSpacing", "letter-spacing"],
  ["lightingColor", "lighting-color"],
  ["markerEnd", "marker-end"],
  ["markerMid", "marker-mid"],
  ["markerStart", "marker-start"],
  ["overlinePosition", "overline-position"],
  ["overlineThickness", "overline-thickness"],
  ["paintOrder", "paint-order"],
  ["panose-1", "panose-1"],
  ["pointerEvents", "pointer-events"],
  ["renderingIntent", "rendering-intent"],
  ["shapeRendering", "shape-rendering"],
  ["stopColor", "stop-color"],
  ["stopOpacity", "stop-opacity"],
  ["strikethroughPosition", "strikethrough-position"],
  ["strikethroughThickness", "strikethrough-thickness"],
  ["strokeDasharray", "stroke-dasharray"],
  ["strokeDashoffset", "stroke-dashoffset"],
  ["strokeLinecap", "stroke-linecap"],
  ["strokeLinejoin", "stroke-linejoin"],
  ["strokeMiterlimit", "stroke-miterlimit"],
  ["strokeOpacity", "stroke-opacity"],
  ["strokeWidth", "stroke-width"],
  ["textAnchor", "text-anchor"],
  ["textDecoration", "text-decoration"],
  ["textRendering", "text-rendering"],
  ["transformOrigin", "transform-origin"],
  ["underlinePosition", "underline-position"],
  ["underlineThickness", "underline-thickness"],
  ["unicodeBidi", "unicode-bidi"],
  ["unicodeRange", "unicode-range"],
  ["unitsPerEm", "units-per-em"],
  ["vAlphabetic", "v-alphabetic"],
  ["vHanging", "v-hanging"],
  ["vIdeographic", "v-ideographic"],
  ["vMathematical", "v-mathematical"],
  ["vectorEffect", "vector-effect"],
  ["vertAdvY", "vert-adv-y"],
  ["vertOriginX", "vert-origin-x"],
  ["vertOriginY", "vert-origin-y"],
  ["wordSpacing", "word-spacing"],
  ["writingMode", "writing-mode"],
  ["xmlnsXlink", "xmlns:xlink"],
  ["xHeight", "x-height"]
]), Wa = /["'&<>]/;
function R(n) {
  if (typeof n == "boolean" || typeof n == "number" || typeof n == "bigint")
    return "" + n;
  n = "" + n;
  var e = Wa.exec(n);
  if (e) {
    var l = "", r, t = 0;
    for (r = e.index; r < n.length; r++) {
      switch (n.charCodeAt(r)) {
        case 34:
          e = "&quot;";
          break;
        case 38:
          e = "&amp;";
          break;
        case 39:
          e = "&#x27;";
          break;
        case 60:
          e = "&lt;";
          break;
        case 62:
          e = "&gt;";
          break;
        default:
          continue;
      }
      t !== r && (l += n.slice(t, r)), t = r + 1, l += e;
    }
    n = t !== r ? l + n.slice(t, r) : l;
  }
  return n;
}
var Ua = /([A-Z])/g, Ya = /^ms-/, Ga = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function be(n) {
  return Ga.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
}
var Wn = nr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, mt = Aa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Xa = {
  pending: !1,
  data: null,
  method: null,
  action: null
}, on = mt.d;
mt.d = {
  f: on.f,
  r: on.r,
  D: Cc,
  C: xc,
  L: Sc,
  m: Pc,
  X: Fc,
  S: kc,
  M: Ac
};
var p = [];
o('"></template>');
var Za = o("<script>"), qt = o("<\/script>"), Ja = o('<script src="'), Qa = o('<script type="module" src="'), lt = o('" nonce="'), rt = o('" integrity="'), tt = o('" crossorigin="'), at = o('" async=""><\/script>'), Ul = /(<\/|<)(s)(cript)/gi;
function Yl(n, e, l, r) {
  return "" + e + (l === "s" ? "\\u0073" : "\\u0053") + r;
}
var Va = o(
  '<script type="importmap">'
), Ka = o("<\/script>");
function jt(n, e, l, r, t, a) {
  var i = e === void 0 ? Za : o(
    '<script nonce="' + R(e) + '">'
  ), u = n.idPrefix;
  l = [];
  var c = n.bootstrapScriptContent, f = n.bootstrapScripts, s = n.bootstrapModules;
  if (c !== void 0 && l.push(
    i,
    g(
      ("" + c).replace(Ul, Yl)
    ),
    qt
  ), c = [], r !== void 0 && (c.push(Va), c.push(
    g(
      ("" + JSON.stringify(r)).replace(Ul, Yl)
    )
  ), c.push(Ka)), r = t ? {
    preconnects: "",
    fontPreloads: "",
    highImagePreloads: "",
    remainingCapacity: 2 + (typeof a == "number" ? a : 2e3)
  } : null, t = {
    placeholderPrefix: o(u + "P:"),
    segmentPrefix: o(u + "S:"),
    boundaryPrefix: o(u + "B:"),
    startInlineScript: i,
    preamble: ye(),
    externalRuntimeScript: null,
    bootstrapChunks: l,
    importMapChunks: c,
    onHeaders: t,
    headers: r,
    resets: {
      font: {},
      dns: {},
      connect: { default: {}, anonymous: {}, credentials: {} },
      image: {},
      style: {}
    },
    charsetChunks: [],
    viewportChunks: [],
    hoistableChunks: [],
    preconnects: /* @__PURE__ */ new Set(),
    fontPreloads: /* @__PURE__ */ new Set(),
    highImagePreloads: /* @__PURE__ */ new Set(),
    styles: /* @__PURE__ */ new Map(),
    bootstrapScripts: /* @__PURE__ */ new Set(),
    scripts: /* @__PURE__ */ new Set(),
    bulkPreloads: /* @__PURE__ */ new Set(),
    preloads: {
      images: /* @__PURE__ */ new Map(),
      stylesheets: /* @__PURE__ */ new Map(),
      scripts: /* @__PURE__ */ new Map(),
      moduleScripts: /* @__PURE__ */ new Map()
    },
    nonce: e,
    hoistableState: null,
    stylesToHoist: !1
  }, f !== void 0)
    for (r = 0; r < f.length; r++) {
      var d = f[r];
      u = i = void 0, c = {
        rel: "preload",
        as: "script",
        fetchPriority: "low",
        nonce: e
      }, typeof d == "string" ? c.href = a = d : (c.href = a = d.src, c.integrity = u = typeof d.integrity == "string" ? d.integrity : void 0, c.crossOrigin = i = typeof d == "string" || d.crossOrigin == null ? void 0 : d.crossOrigin === "use-credentials" ? "use-credentials" : ""), d = n;
      var v = a;
      d.scriptResources[v] = null, d.moduleScriptResources[v] = null, d = [], D(d, c), t.bootstrapScripts.add(d), l.push(
        Ja,
        g(R(a))
      ), e && l.push(
        lt,
        g(R(e))
      ), typeof u == "string" && l.push(
        rt,
        g(R(u))
      ), typeof i == "string" && l.push(
        tt,
        g(R(i))
      ), l.push(at);
    }
  if (s !== void 0)
    for (f = 0; f < s.length; f++)
      c = s[f], i = a = void 0, u = {
        rel: "modulepreload",
        fetchPriority: "low",
        nonce: e
      }, typeof c == "string" ? u.href = r = c : (u.href = r = c.src, u.integrity = i = typeof c.integrity == "string" ? c.integrity : void 0, u.crossOrigin = a = typeof c == "string" || c.crossOrigin == null ? void 0 : c.crossOrigin === "use-credentials" ? "use-credentials" : ""), c = n, d = r, c.scriptResources[d] = null, c.moduleScriptResources[d] = null, c = [], D(c, u), t.bootstrapScripts.add(c), l.push(
        Qa,
        g(R(r))
      ), e && l.push(
        lt,
        g(R(e))
      ), typeof i == "string" && l.push(
        rt,
        g(R(i))
      ), typeof a == "string" && l.push(
        tt,
        g(R(a))
      ), l.push(at);
  return t;
}
function pt(n, e, l, r, t) {
  return {
    idPrefix: n === void 0 ? "" : n,
    nextFormID: 0,
    streamingFormat: 0,
    bootstrapScriptContent: l,
    bootstrapScripts: r,
    bootstrapModules: t,
    instructions: 0,
    hasBody: !1,
    hasHtml: !1,
    unknownResources: {},
    dnsResources: {},
    connectResources: { default: {}, anonymous: {}, credentials: {} },
    imageResources: {},
    styleResources: {},
    scriptResources: {},
    moduleUnknownResources: {},
    moduleScriptResources: {}
  };
}
function ye() {
  return {
    htmlChunks: null,
    headChunks: null,
    bodyChunks: null,
    contribution: 0
  };
}
function G(n, e, l) {
  return {
    insertionMode: n,
    selectedValue: e,
    tagScope: l
  };
}
function $t(n) {
  return G(
    n === "http://www.w3.org/2000/svg" ? 4 : n === "http://www.w3.org/1998/Math/MathML" ? 5 : 0,
    null,
    0
  );
}
function it(n, e, l) {
  switch (e) {
    case "noscript":
      return G(2, null, n.tagScope | 1);
    case "select":
      return G(
        2,
        l.value != null ? l.value : l.defaultValue,
        n.tagScope
      );
    case "svg":
      return G(4, null, n.tagScope);
    case "picture":
      return G(2, null, n.tagScope | 2);
    case "math":
      return G(5, null, n.tagScope);
    case "foreignObject":
      return G(2, null, n.tagScope);
    case "table":
      return G(6, null, n.tagScope);
    case "thead":
    case "tbody":
    case "tfoot":
      return G(7, null, n.tagScope);
    case "colgroup":
      return G(9, null, n.tagScope);
    case "tr":
      return G(8, null, n.tagScope);
    case "head":
      if (2 > n.insertionMode)
        return G(3, null, n.tagScope);
      break;
    case "html":
      if (n.insertionMode === 0)
        return G(1, null, n.tagScope);
  }
  return 6 <= n.insertionMode || 2 > n.insertionMode ? G(2, null, n.tagScope) : n;
}
var hn = o("<!-- -->");
function ct(n, e, l, r) {
  return e === "" ? r : (r && n.push(hn), n.push(g(R(e))), !0);
}
var ut = /* @__PURE__ */ new Map(), ma = o(' style="'), ft = o(":"), qa = o(";");
function na(n, e) {
  if (typeof e != "object") throw Error(b(62));
  var l = !0, r;
  for (r in e)
    if (P.call(e, r)) {
      var t = e[r];
      if (t != null && typeof t != "boolean" && t !== "") {
        if (r.indexOf("--") === 0) {
          var a = g(R(r));
          t = g(
            R(("" + t).trim())
          );
        } else
          a = ut.get(r), a === void 0 && (a = o(
            R(
              r.replace(Ua, "-$1").toLowerCase().replace(Ya, "-ms-")
            )
          ), ut.set(r, a)), t = typeof t == "number" ? t === 0 || za.has(r) ? g("" + t) : g(t + "px") : g(
            R(("" + t).trim())
          );
        l ? (l = !1, n.push(
          ma,
          a,
          ft,
          t
        )) : n.push(qa, a, ft, t);
      }
    }
  l || n.push(K);
}
var U = o(" "), j = o('="'), K = o('"'), Gl = o('=""');
function Xl(n, e, l) {
  l && typeof l != "function" && typeof l != "symbol" && n.push(U, g(e), Gl);
}
function B(n, e, l) {
  typeof l != "function" && typeof l != "symbol" && typeof l != "boolean" && n.push(
    U,
    g(e),
    j,
    g(R(l)),
    K
  );
}
var ea = o(
  R(
    "javascript:throw new Error('React form unexpectedly submitted.')"
  )
), la = o('<input type="hidden"');
function Ml(n, e) {
  this.push(la), ra(n), B(this, "name", e), B(this, "value", n), this.push(Ee);
}
function ra(n) {
  if (typeof n != "string") throw Error(b(480));
}
function ta(n, e) {
  if (typeof e.$$FORM_ACTION == "function") {
    var l = n.nextFormID++;
    n = n.idPrefix + l;
    try {
      var r = e.$$FORM_ACTION(n);
      if (r) {
        var t = r.data;
        t?.forEach(ra);
      }
      return r;
    } catch (a) {
      if (typeof a == "object" && a !== null && typeof a.then == "function")
        throw a;
    }
  }
  return null;
}
function ht(n, e, l, r, t, a, i, u) {
  var c = null;
  if (typeof r == "function") {
    var f = ta(e, r);
    f !== null ? (u = f.name, r = f.action || "", t = f.encType, a = f.method, i = f.target, c = f.data) : (n.push(
      U,
      g("formAction"),
      j,
      ea,
      K
    ), i = a = t = r = u = null, aa(e, l));
  }
  return u != null && C(n, "name", u), r != null && C(n, "formAction", r), t != null && C(n, "formEncType", t), a != null && C(n, "formMethod", a), i != null && C(n, "formTarget", i), c;
}
function C(n, e, l) {
  switch (e) {
    case "className":
      B(n, "class", l);
      break;
    case "tabIndex":
      B(n, "tabindex", l);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      B(n, e, l);
      break;
    case "style":
      na(n, l);
      break;
    case "src":
    case "href":
      if (l === "") break;
    case "action":
    case "formAction":
      if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean")
        break;
      l = be("" + l), n.push(
        U,
        g(e),
        j,
        g(R(l)),
        K
      );
      break;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "ref":
      break;
    case "autoFocus":
    case "multiple":
    case "muted":
      Xl(n, e.toLowerCase(), l);
      break;
    case "xlinkHref":
      if (typeof l == "function" || typeof l == "symbol" || typeof l == "boolean")
        break;
      l = be("" + l), n.push(
        U,
        g("xlink:href"),
        j,
        g(R(l)),
        K
      );
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      typeof l != "function" && typeof l != "symbol" && n.push(
        U,
        g(e),
        j,
        g(R(l)),
        K
      );
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      l && typeof l != "function" && typeof l != "symbol" && n.push(
        U,
        g(e),
        Gl
      );
      break;
    case "capture":
    case "download":
      l === !0 ? n.push(
        U,
        g(e),
        Gl
      ) : l !== !1 && typeof l != "function" && typeof l != "symbol" && n.push(
        U,
        g(e),
        j,
        g(R(l)),
        K
      );
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l && n.push(
        U,
        g(e),
        j,
        g(R(l)),
        K
      );
      break;
    case "rowSpan":
    case "start":
      typeof l == "function" || typeof l == "symbol" || isNaN(l) || n.push(
        U,
        g(e),
        j,
        g(R(l)),
        K
      );
      break;
    case "xlinkActuate":
      B(n, "xlink:actuate", l);
      break;
    case "xlinkArcrole":
      B(n, "xlink:arcrole", l);
      break;
    case "xlinkRole":
      B(n, "xlink:role", l);
      break;
    case "xlinkShow":
      B(n, "xlink:show", l);
      break;
    case "xlinkTitle":
      B(n, "xlink:title", l);
      break;
    case "xlinkType":
      B(n, "xlink:type", l);
      break;
    case "xmlBase":
      B(n, "xml:base", l);
      break;
    case "xmlLang":
      B(n, "xml:lang", l);
      break;
    case "xmlSpace":
      B(n, "xml:space", l);
      break;
    default:
      if ((!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Ha.get(e) || e, ar(e))) {
        switch (typeof l) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            var r = e.toLowerCase().slice(0, 5);
            if (r !== "data-" && r !== "aria-") return;
        }
        n.push(
          U,
          g(e),
          j,
          g(R(l)),
          K
        );
      }
  }
}
var N = o(">"), Ee = o("/>");
function J(n, e, l) {
  if (e != null) {
    if (l != null) throw Error(b(60));
    if (typeof e != "object" || !("__html" in e))
      throw Error(b(61));
    e = e.__html, e != null && n.push(g("" + e));
  }
}
function ja(n) {
  var e = "";
  return nr.Children.forEach(n, function(l) {
    l != null && (e += l);
  }), e;
}
var Il = o(' selected=""'), pa = o(
  `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`
);
function aa(n, e) {
  (n.instructions & 16) === 0 && (n.instructions |= 16, e.bootstrapChunks.unshift(
    e.startInlineScript,
    pa,
    qt
  ));
}
var $a = o("<!--F!-->"), ni = o("<!--F-->");
function D(n, e) {
  n.push(A("link"));
  for (var l in e)
    if (P.call(e, l)) {
      var r = e[l];
      if (r != null)
        switch (l) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(b(399, "link"));
          default:
            C(n, l, r);
        }
    }
  return n.push(Ee), null;
}
var ot = /(<\/|<)(s)(tyle)/gi;
function dt(n, e, l, r) {
  return "" + e + (l === "s" ? "\\73 " : "\\53 ") + r;
}
function Un(n, e, l) {
  n.push(A(l));
  for (var r in e)
    if (P.call(e, r)) {
      var t = e[r];
      if (t != null)
        switch (r) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(b(399, l));
          default:
            C(n, r, t);
        }
    }
  return n.push(Ee), null;
}
function st(n, e) {
  n.push(A("title"));
  var l = null, r = null, t;
  for (t in e)
    if (P.call(e, t)) {
      var a = e[t];
      if (a != null)
        switch (t) {
          case "children":
            l = a;
            break;
          case "dangerouslySetInnerHTML":
            r = a;
            break;
          default:
            C(n, t, a);
        }
    }
  return n.push(N), e = Array.isArray(l) ? 2 > l.length ? l[0] : null : l, typeof e != "function" && typeof e != "symbol" && e !== null && e !== void 0 && n.push(g(R("" + e))), J(n, r, l), n.push(Mn("title")), null;
}
function qe(n, e) {
  n.push(A("script"));
  var l = null, r = null, t;
  for (t in e)
    if (P.call(e, t)) {
      var a = e[t];
      if (a != null)
        switch (t) {
          case "children":
            l = a;
            break;
          case "dangerouslySetInnerHTML":
            r = a;
            break;
          default:
            C(n, t, a);
        }
    }
  return n.push(N), J(n, r, l), typeof l == "string" && n.push(
    g(("" + l).replace(Ul, Yl))
  ), n.push(Mn("script")), null;
}
function _l(n, e, l) {
  n.push(A(l));
  var r = l = null, t;
  for (t in e)
    if (P.call(e, t)) {
      var a = e[t];
      if (a != null)
        switch (t) {
          case "children":
            l = a;
            break;
          case "dangerouslySetInnerHTML":
            r = a;
            break;
          default:
            C(n, t, a);
        }
    }
  return n.push(N), J(n, r, l), l;
}
function Ye(n, e, l) {
  n.push(A(l));
  var r = l = null, t;
  for (t in e)
    if (P.call(e, t)) {
      var a = e[t];
      if (a != null)
        switch (t) {
          case "children":
            l = a;
            break;
          case "dangerouslySetInnerHTML":
            r = a;
            break;
          default:
            C(n, t, a);
        }
    }
  return n.push(N), J(n, r, l), typeof l == "string" ? (n.push(g(R(l))), null) : l;
}
var Ll = o(`
`), ei = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, gt = /* @__PURE__ */ new Map();
function A(n) {
  var e = gt.get(n);
  if (e === void 0) {
    if (!ei.test(n))
      throw Error(b(65, n));
    e = o("<" + n), gt.set(n, e);
  }
  return e;
}
var li = o("<!DOCTYPE html>");
function ri(n, e, l, r, t, a, i, u, c, f) {
  switch (e) {
    case "div":
    case "span":
    case "svg":
    case "path":
      break;
    case "a":
      n.push(A("a"));
      var s = null, d = null, v;
      for (v in l)
        if (P.call(l, v)) {
          var y = l[v];
          if (y != null)
            switch (v) {
              case "children":
                s = y;
                break;
              case "dangerouslySetInnerHTML":
                d = y;
                break;
              case "href":
                y === "" ? B(n, "href", "") : C(n, v, y);
                break;
              default:
                C(n, v, y);
            }
        }
      if (n.push(N), J(n, d, s), typeof s == "string") {
        n.push(g(R(s)));
        var E = null;
      } else E = s;
      return E;
    case "g":
    case "p":
    case "li":
      break;
    case "select":
      n.push(A("select"));
      var T = null, k = null, O;
      for (O in l)
        if (P.call(l, O)) {
          var w = l[O];
          if (w != null)
            switch (O) {
              case "children":
                T = w;
                break;
              case "dangerouslySetInnerHTML":
                k = w;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                C(
                  n,
                  O,
                  w
                );
            }
        }
      return n.push(N), J(n, k, T), T;
    case "option":
      var z = u.selectedValue;
      n.push(A("option"));
      var F = null, Z = null, H = null, sn = null, tn;
      for (tn in l)
        if (P.call(l, tn)) {
          var M = l[tn];
          if (M != null)
            switch (tn) {
              case "children":
                F = M;
                break;
              case "selected":
                H = M;
                break;
              case "dangerouslySetInnerHTML":
                sn = M;
                break;
              case "value":
                Z = M;
              default:
                C(
                  n,
                  tn,
                  M
                );
            }
        }
      if (z != null) {
        var Y = Z !== null ? "" + Z : ja(F);
        if (Wl(z)) {
          for (var q = 0; q < z.length; q++)
            if ("" + z[q] === Y) {
              n.push(Il);
              break;
            }
        } else
          "" + z === Y && n.push(Il);
      } else H && n.push(Il);
      return n.push(N), J(n, sn, F), F;
    case "textarea":
      n.push(A("textarea"));
      var W = null, gn = null, an = null, cn;
      for (cn in l)
        if (P.call(l, cn)) {
          var vn = l[cn];
          if (vn != null)
            switch (cn) {
              case "children":
                an = vn;
                break;
              case "value":
                W = vn;
                break;
              case "defaultValue":
                gn = vn;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(b(91));
              default:
                C(
                  n,
                  cn,
                  vn
                );
            }
        }
      if (W === null && gn !== null && (W = gn), n.push(N), an != null) {
        if (W != null) throw Error(b(92));
        if (Wl(an)) {
          if (1 < an.length)
            throw Error(b(93));
          W = "" + an[0];
        }
        W = "" + an;
      }
      return typeof W == "string" && W[0] === `
` && n.push(Ll), W !== null && n.push(
        g(R("" + W))
      ), null;
    case "input":
      n.push(A("input"));
      var wn = null, br = null, yr = null, Er = null, Tr = null, ol = null, dl = null, sl = null, gl = null, Kn;
      for (Kn in l)
        if (P.call(l, Kn)) {
          var nn = l[Kn];
          if (nn != null)
            switch (Kn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(b(399, "input"));
              case "name":
                wn = nn;
                break;
              case "formAction":
                br = nn;
                break;
              case "formEncType":
                yr = nn;
                break;
              case "formMethod":
                Er = nn;
                break;
              case "formTarget":
                Tr = nn;
                break;
              case "defaultChecked":
                gl = nn;
                break;
              case "defaultValue":
                dl = nn;
                break;
              case "checked":
                sl = nn;
                break;
              case "value":
                ol = nn;
                break;
              default:
                C(
                  n,
                  Kn,
                  nn
                );
            }
        }
      var Rr = ht(
        n,
        r,
        t,
        br,
        yr,
        Er,
        Tr,
        wn
      );
      return sl !== null ? Xl(n, "checked", sl) : gl !== null && Xl(n, "checked", gl), ol !== null ? C(n, "value", ol) : dl !== null && C(n, "value", dl), n.push(Ee), Rr?.forEach(Ml, n), null;
    case "button":
      n.push(A("button"));
      var mn = null, wr = null, Cr = null, xr = null, Sr = null, Pr = null, kr = null, qn;
      for (qn in l)
        if (P.call(l, qn)) {
          var un = l[qn];
          if (un != null)
            switch (qn) {
              case "children":
                mn = un;
                break;
              case "dangerouslySetInnerHTML":
                wr = un;
                break;
              case "name":
                Cr = un;
                break;
              case "formAction":
                xr = un;
                break;
              case "formEncType":
                Sr = un;
                break;
              case "formMethod":
                Pr = un;
                break;
              case "formTarget":
                kr = un;
                break;
              default:
                C(
                  n,
                  qn,
                  un
                );
            }
        }
      var Fr = ht(
        n,
        r,
        t,
        xr,
        Sr,
        Pr,
        kr,
        Cr
      );
      if (n.push(N), Fr?.forEach(Ml, n), J(n, wr, mn), typeof mn == "string") {
        n.push(
          g(R(mn))
        );
        var Ar = null;
      } else Ar = mn;
      return Ar;
    case "form":
      n.push(A("form"));
      var jn = null, Or = null, Cn = null, pn = null, $n = null, ne = null, ee;
      for (ee in l)
        if (P.call(l, ee)) {
          var bn = l[ee];
          if (bn != null)
            switch (ee) {
              case "children":
                jn = bn;
                break;
              case "dangerouslySetInnerHTML":
                Or = bn;
                break;
              case "action":
                Cn = bn;
                break;
              case "encType":
                pn = bn;
                break;
              case "method":
                $n = bn;
                break;
              case "target":
                ne = bn;
                break;
              default:
                C(
                  n,
                  ee,
                  bn
                );
            }
        }
      var vl = null, bl = null;
      if (typeof Cn == "function") {
        var xn = ta(
          r,
          Cn
        );
        xn !== null ? (Cn = xn.action || "", pn = xn.encType, $n = xn.method, ne = xn.target, vl = xn.data, bl = xn.name) : (n.push(
          U,
          g("action"),
          j,
          ea,
          K
        ), ne = $n = pn = Cn = null, aa(r, t));
      }
      if (Cn != null && C(n, "action", Cn), pn != null && C(n, "encType", pn), $n != null && C(n, "method", $n), ne != null && C(n, "target", ne), n.push(N), bl !== null && (n.push(la), B(n, "name", bl), n.push(Ee), vl?.forEach(Ml, n)), J(n, Or, jn), typeof jn == "string") {
        n.push(
          g(R(jn))
        );
        var Mr = null;
      } else Mr = jn;
      return Mr;
    case "menuitem":
      n.push(A("menuitem"));
      for (var Me in l)
        if (P.call(l, Me)) {
          var Ir = l[Me];
          if (Ir != null)
            switch (Me) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(b(400));
              default:
                C(
                  n,
                  Me,
                  Ir
                );
            }
        }
      return n.push(N), null;
    case "object":
      n.push(A("object"));
      var le = null, _r = null, re;
      for (re in l)
        if (P.call(l, re)) {
          var te = l[re];
          if (te != null)
            switch (re) {
              case "children":
                le = te;
                break;
              case "dangerouslySetInnerHTML":
                _r = te;
                break;
              case "data":
                var Lr = be("" + te);
                if (Lr === "") break;
                n.push(
                  U,
                  g("data"),
                  j,
                  g(R(Lr)),
                  K
                );
                break;
              default:
                C(
                  n,
                  re,
                  te
                );
            }
        }
      if (n.push(N), J(n, _r, le), typeof le == "string") {
        n.push(
          g(R(le))
        );
        var Br = null;
      } else Br = le;
      return Br;
    case "title":
      if (u.insertionMode === 4 || u.tagScope & 1 || l.itemProp != null)
        var yl = st(
          n,
          l
        );
      else
        f ? yl = null : (st(t.hoistableChunks, l), yl = void 0);
      return yl;
    case "link":
      var Pa = l.rel, yn = l.href, Ie = l.precedence;
      if (u.insertionMode === 4 || u.tagScope & 1 || l.itemProp != null || typeof Pa != "string" || typeof yn != "string" || yn === "") {
        D(n, l);
        var ae = null;
      } else if (l.rel === "stylesheet")
        if (typeof Ie != "string" || l.disabled != null || l.onLoad || l.onError)
          ae = D(
            n,
            l
          );
        else {
          var Bn = t.styles.get(Ie), _e = r.styleResources.hasOwnProperty(yn) ? r.styleResources[yn] : void 0;
          if (_e !== null) {
            r.styleResources[yn] = null, Bn || (Bn = {
              precedence: g(R(Ie)),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, t.styles.set(Ie, Bn));
            var Le = {
              state: 0,
              props: X({}, l, {
                "data-precedence": l.precedence,
                precedence: null
              })
            };
            if (_e) {
              _e.length === 2 && Te(Le.props, _e);
              var El = t.preloads.stylesheets.get(yn);
              El && 0 < El.length ? El.length = 0 : Le.state = 1;
            }
            Bn.sheets.set(yn, Le), i && i.stylesheets.add(Le);
          } else if (Bn) {
            var Nr = Bn.sheets.get(yn);
            Nr && i && i.stylesheets.add(Nr);
          }
          c && n.push(hn), ae = null;
        }
      else
        l.onLoad || l.onError ? ae = D(
          n,
          l
        ) : (c && n.push(hn), ae = f ? null : D(t.hoistableChunks, l));
      return ae;
    case "script":
      var Tl = l.async;
      if (typeof l.src != "string" || !l.src || !Tl || typeof Tl == "function" || typeof Tl == "symbol" || l.onLoad || l.onError || u.insertionMode === 4 || u.tagScope & 1 || l.itemProp != null)
        var Dr = qe(
          n,
          l
        );
      else {
        var Be = l.src;
        if (l.type === "module")
          var Ne = r.moduleScriptResources, zr = t.preloads.moduleScripts;
        else
          Ne = r.scriptResources, zr = t.preloads.scripts;
        var De = Ne.hasOwnProperty(Be) ? Ne[Be] : void 0;
        if (De !== null) {
          Ne[Be] = null;
          var Rl = l;
          if (De) {
            De.length === 2 && (Rl = X({}, l), Te(Rl, De));
            var Hr = zr.get(Be);
            Hr && (Hr.length = 0);
          }
          var Wr = [];
          t.scripts.add(Wr), qe(Wr, Rl);
        }
        c && n.push(hn), Dr = null;
      }
      return Dr;
    case "style":
      var ze = l.precedence, Sn = l.href;
      if (u.insertionMode === 4 || u.tagScope & 1 || l.itemProp != null || typeof ze != "string" || typeof Sn != "string" || Sn === "") {
        n.push(A("style"));
        var Nn = null, Ur = null, ie;
        for (ie in l)
          if (P.call(l, ie)) {
            var He = l[ie];
            if (He != null)
              switch (ie) {
                case "children":
                  Nn = He;
                  break;
                case "dangerouslySetInnerHTML":
                  Ur = He;
                  break;
                default:
                  C(
                    n,
                    ie,
                    He
                  );
              }
          }
        n.push(N);
        var ce = Array.isArray(Nn) ? 2 > Nn.length ? Nn[0] : null : Nn;
        typeof ce != "function" && typeof ce != "symbol" && ce !== null && ce !== void 0 && n.push(
          g(("" + ce).replace(ot, dt))
        ), J(n, Ur, Nn), n.push(Mn("style"));
        var Yr = null;
      } else {
        var Pn = t.styles.get(ze);
        if ((r.styleResources.hasOwnProperty(Sn) ? r.styleResources[Sn] : void 0) !== null) {
          r.styleResources[Sn] = null, Pn ? Pn.hrefs.push(
            g(R(Sn))
          ) : (Pn = {
            precedence: g(
              R(ze)
            ),
            rules: [],
            hrefs: [g(R(Sn))],
            sheets: /* @__PURE__ */ new Map()
          }, t.styles.set(ze, Pn));
          var Gr = Pn.rules, Dn = null, Xr = null, We;
          for (We in l)
            if (P.call(l, We)) {
              var wl = l[We];
              if (wl != null)
                switch (We) {
                  case "children":
                    Dn = wl;
                    break;
                  case "dangerouslySetInnerHTML":
                    Xr = wl;
                }
            }
          var ue = Array.isArray(Dn) ? 2 > Dn.length ? Dn[0] : null : Dn;
          typeof ue != "function" && typeof ue != "symbol" && ue !== null && ue !== void 0 && Gr.push(
            g(
              ("" + ue).replace(ot, dt)
            )
          ), J(Gr, Xr, Dn);
        }
        Pn && i && i.styles.add(Pn), c && n.push(hn), Yr = void 0;
      }
      return Yr;
    case "meta":
      if (u.insertionMode === 4 || u.tagScope & 1 || l.itemProp != null)
        var Zr = Un(
          n,
          l,
          "meta"
        );
      else
        c && n.push(hn), Zr = f ? null : typeof l.charSet == "string" ? Un(t.charsetChunks, l, "meta") : l.name === "viewport" ? Un(t.viewportChunks, l, "meta") : Un(t.hoistableChunks, l, "meta");
      return Zr;
    case "listing":
    case "pre":
      n.push(A(e));
      var fe = null, he = null, oe;
      for (oe in l)
        if (P.call(l, oe)) {
          var Ue = l[oe];
          if (Ue != null)
            switch (oe) {
              case "children":
                fe = Ue;
                break;
              case "dangerouslySetInnerHTML":
                he = Ue;
                break;
              default:
                C(
                  n,
                  oe,
                  Ue
                );
            }
        }
      if (n.push(N), he != null) {
        if (fe != null) throw Error(b(60));
        if (typeof he != "object" || !("__html" in he))
          throw Error(b(61));
        var kn = he.__html;
        kn != null && (typeof kn == "string" && 0 < kn.length && kn[0] === `
` ? n.push(Ll, g(kn)) : n.push(g("" + kn)));
      }
      return typeof fe == "string" && fe[0] === `
` && n.push(Ll), fe;
    case "img":
      var L = l.src, I = l.srcSet;
      if (!(l.loading === "lazy" || !L && !I || typeof L != "string" && L != null || typeof I != "string" && I != null) && l.fetchPriority !== "low" && !(u.tagScope & 3) && (typeof L != "string" || L[4] !== ":" || L[0] !== "d" && L[0] !== "D" || L[1] !== "a" && L[1] !== "A" || L[2] !== "t" && L[2] !== "T" || L[3] !== "a" && L[3] !== "A") && (typeof I != "string" || I[4] !== ":" || I[0] !== "d" && I[0] !== "D" || I[1] !== "a" && I[1] !== "A" || I[2] !== "t" && I[2] !== "T" || I[3] !== "a" && I[3] !== "A")) {
        var Jr = typeof l.sizes == "string" ? l.sizes : void 0, zn = I ? I + `
` + (Jr || "") : L, Cl = t.preloads.images, Fn = Cl.get(zn);
        if (Fn)
          (l.fetchPriority === "high" || 10 > t.highImagePreloads.size) && (Cl.delete(zn), t.highImagePreloads.add(Fn));
        else if (!r.imageResources.hasOwnProperty(zn)) {
          r.imageResources[zn] = p;
          var xl = l.crossOrigin, Qr = typeof xl == "string" ? xl === "use-credentials" ? xl : "" : void 0, An = t.headers, Sl;
          An && 0 < An.remainingCapacity && typeof l.srcSet != "string" && (l.fetchPriority === "high" || 500 > An.highImagePreloads.length) && (Sl = pe(L, "image", {
            imageSrcSet: l.srcSet,
            imageSizes: l.sizes,
            crossOrigin: Qr,
            integrity: l.integrity,
            nonce: l.nonce,
            type: l.type,
            fetchPriority: l.fetchPriority,
            referrerPolicy: l.refererPolicy
          }), 0 <= (An.remainingCapacity -= Sl.length + 2)) ? (t.resets.image[zn] = p, An.highImagePreloads && (An.highImagePreloads += ", "), An.highImagePreloads += Sl) : (Fn = [], D(Fn, {
            rel: "preload",
            as: "image",
            href: I ? void 0 : L,
            imageSrcSet: I,
            imageSizes: Jr,
            crossOrigin: Qr,
            integrity: l.integrity,
            type: l.type,
            fetchPriority: l.fetchPriority,
            referrerPolicy: l.referrerPolicy
          }), l.fetchPriority === "high" || 10 > t.highImagePreloads.size ? t.highImagePreloads.add(Fn) : (t.bulkPreloads.add(Fn), Cl.set(zn, Fn)));
        }
      }
      return Un(n, l, "img");
    case "base":
    case "area":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "param":
    case "source":
    case "track":
    case "wbr":
      return Un(n, l, e);
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      break;
    case "head":
      if (2 > u.insertionMode) {
        var Pl = a || t.preamble;
        if (Pl.headChunks)
          throw Error(b(545, "`<head>`"));
        Pl.headChunks = [];
        var Vr = _l(
          Pl.headChunks,
          l,
          "head"
        );
      } else
        Vr = Ye(
          n,
          l,
          "head"
        );
      return Vr;
    case "body":
      if (2 > u.insertionMode) {
        var kl = a || t.preamble;
        if (kl.bodyChunks)
          throw Error(b(545, "`<body>`"));
        kl.bodyChunks = [];
        var Kr = _l(
          kl.bodyChunks,
          l,
          "body"
        );
      } else
        Kr = Ye(
          n,
          l,
          "body"
        );
      return Kr;
    case "html":
      if (u.insertionMode === 0) {
        var Fl = a || t.preamble;
        if (Fl.htmlChunks)
          throw Error(b(545, "`<html>`"));
        Fl.htmlChunks = [li];
        var mr = _l(
          Fl.htmlChunks,
          l,
          "html"
        );
      } else
        mr = Ye(
          n,
          l,
          "html"
        );
      return mr;
    default:
      if (e.indexOf("-") !== -1) {
        n.push(A(e));
        var Al = null, qr = null, Hn;
        for (Hn in l)
          if (P.call(l, Hn)) {
            var en = l[Hn];
            if (en != null) {
              var jr = Hn;
              switch (Hn) {
                case "children":
                  Al = en;
                  break;
                case "dangerouslySetInnerHTML":
                  qr = en;
                  break;
                case "style":
                  na(n, en);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "ref":
                  break;
                case "className":
                  jr = "class";
                default:
                  if (ar(Hn) && typeof en != "function" && typeof en != "symbol" && en !== !1) {
                    if (en === !0) en = "";
                    else if (typeof en == "object") continue;
                    n.push(
                      U,
                      g(jr),
                      j,
                      g(R(en)),
                      K
                    );
                  }
              }
            }
          }
        return n.push(N), J(n, qr, Al), Al;
      }
  }
  return Ye(n, l, e);
}
var vt = /* @__PURE__ */ new Map();
function Mn(n) {
  var e = vt.get(n);
  return e === void 0 && (e = o("</" + n + ">"), vt.set(n, e)), e;
}
function bt(n, e) {
  n = n.preamble, n.htmlChunks === null && e.htmlChunks && (n.htmlChunks = e.htmlChunks, e.contribution |= 1), n.headChunks === null && e.headChunks && (n.headChunks = e.headChunks, e.contribution |= 4), n.bodyChunks === null && e.bodyChunks && (n.bodyChunks = e.bodyChunks, e.contribution |= 2);
}
function ia(n, e) {
  e = e.bootstrapChunks;
  for (var l = 0; l < e.length - 1; l++)
    h(n, e[l]);
  return l < e.length ? (l = e[l], e.length = 0, x(n, l)) : !0;
}
var ti = o('<template id="'), ai = o('"></template>'), ii = o("<!--$-->"), ci = o(
  '<!--$?--><template id="'
), ui = o('"></template>'), fi = o("<!--$!-->"), Ge = o("<!--/$-->"), hi = o("<template"), oi = o('"'), di = o(' data-dgst="');
o(' data-msg="');
o(' data-stck="');
o(' data-cstck="');
var si = o("></template>");
function yt(n, e, l) {
  if (h(n, ci), l === null) throw Error(b(395));
  return h(n, e.boundaryPrefix), h(n, g(l.toString(16))), x(n, ui);
}
var gi = o("<!--"), vi = o("-->");
function Et(n, e) {
  e = e.contribution, e !== 0 && (h(n, gi), h(n, g("" + e)), h(n, vi));
}
var bi = o('<div hidden id="'), yi = o('">'), Ei = o("</div>"), Ti = o(
  '<svg aria-hidden="true" style="display:none" id="'
), Ri = o('">'), wi = o("</svg>"), Ci = o(
  '<math aria-hidden="true" style="display:none" id="'
), xi = o('">'), Si = o("</math>"), Pi = o('<table hidden id="'), ki = o('">'), Fi = o("</table>"), Ai = o('<table hidden><tbody id="'), Oi = o('">'), Mi = o("</tbody></table>"), Ii = o('<table hidden><tr id="'), _i = o('">'), Li = o("</tr></table>"), Bi = o(
  '<table hidden><colgroup id="'
), Ni = o('">'), Di = o("</colgroup></table>");
function zi(n, e, l, r) {
  switch (l.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return h(n, bi), h(n, e.segmentPrefix), h(n, g(r.toString(16))), x(n, yi);
    case 4:
      return h(n, Ti), h(n, e.segmentPrefix), h(n, g(r.toString(16))), x(n, Ri);
    case 5:
      return h(n, Ci), h(n, e.segmentPrefix), h(n, g(r.toString(16))), x(n, xi);
    case 6:
      return h(n, Pi), h(n, e.segmentPrefix), h(n, g(r.toString(16))), x(n, ki);
    case 7:
      return h(n, Ai), h(n, e.segmentPrefix), h(n, g(r.toString(16))), x(n, Oi);
    case 8:
      return h(n, Ii), h(n, e.segmentPrefix), h(n, g(r.toString(16))), x(n, _i);
    case 9:
      return h(n, Bi), h(n, e.segmentPrefix), h(n, g(r.toString(16))), x(n, Ni);
    default:
      throw Error(b(397));
  }
}
function Hi(n, e) {
  switch (e.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return x(n, Ei);
    case 4:
      return x(n, wi);
    case 5:
      return x(n, Si);
    case 6:
      return x(n, Fi);
    case 7:
      return x(n, Mi);
    case 8:
      return x(n, Li);
    case 9:
      return x(n, Di);
    default:
      throw Error(b(397));
  }
}
var Wi = o(
  '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
), Ui = o('$RS("'), Yi = o('","'), Gi = o('")<\/script>');
o('<template data-rsi="" data-sid="');
o('" data-pid="');
var Xi = o(
  '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'
), Zi = o('$RC("'), Ji = o(
  `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
), Qi = o(
  `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
), Vi = o('$RR("'), Ki = o('","'), mi = o('",'), qi = o('"'), ji = o(")<\/script>");
o('<template data-rci="" data-bid="');
o('<template data-rri="" data-bid="');
o('" data-sid="');
o('" data-sty="');
var pi = o(
  '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
), $i = o('$RX("'), nc = o('"'), ec = o(","), lc = o(")<\/script>");
o('<template data-rxi="" data-bid="');
o('" data-dgst="');
o('" data-msg="');
o('" data-stck="');
o('" data-cstck="');
var rc = /[<\u2028\u2029]/g;
function tc(n) {
  return JSON.stringify(n).replace(
    rc,
    function(e) {
      switch (e) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
  );
}
var ac = /[&><\u2028\u2029]/g;
function ge(n) {
  return JSON.stringify(n).replace(
    ac,
    function(e) {
      switch (e) {
        case "&":
          return "\\u0026";
        case ">":
          return "\\u003e";
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
  );
}
var ic = o(
  '<style media="not all" data-precedence="'
), cc = o('" data-href="'), uc = o('">'), fc = o("</style>"), je = !1, Zl = !0;
function hc(n) {
  var e = n.rules, l = n.hrefs, r = 0;
  if (l.length) {
    for (h(this, ic), h(this, n.precedence), h(this, cc); r < l.length - 1; r++)
      h(this, l[r]), h(this, ua);
    for (h(this, l[r]), h(this, uc), r = 0; r < e.length; r++) h(this, e[r]);
    Zl = x(
      this,
      fc
    ), je = !0, e.length = 0, l.length = 0;
  }
}
function oc(n) {
  return n.state !== 2 ? je = !0 : !1;
}
function ca(n, e, l) {
  return je = !1, Zl = !0, e.styles.forEach(hc, n), e.stylesheets.forEach(oc), je && (l.stylesToHoist = !0), Zl;
}
function ln(n) {
  for (var e = 0; e < n.length; e++) h(this, n[e]);
  n.length = 0;
}
var Tn = [];
function dc(n) {
  D(Tn, n.props);
  for (var e = 0; e < Tn.length; e++)
    h(this, Tn[e]);
  Tn.length = 0, n.state = 2;
}
var sc = o(
  '<style data-precedence="'
), gc = o('" data-href="'), ua = o(" "), vc = o('">'), bc = o("</style>");
function yc(n) {
  var e = 0 < n.sheets.size;
  n.sheets.forEach(dc, this), n.sheets.clear();
  var l = n.rules, r = n.hrefs;
  if (!e || r.length) {
    if (h(this, sc), h(this, n.precedence), n = 0, r.length) {
      for (h(this, gc); n < r.length - 1; n++)
        h(this, r[n]), h(this, ua);
      h(this, r[n]);
    }
    for (h(this, vc), n = 0; n < l.length; n++)
      h(this, l[n]);
    h(this, bc), l.length = 0, r.length = 0;
  }
}
function Ec(n) {
  if (n.state === 0) {
    n.state = 1;
    var e = n.props;
    for (D(Tn, {
      rel: "preload",
      as: "style",
      href: n.props.href,
      crossOrigin: e.crossOrigin,
      fetchPriority: e.fetchPriority,
      integrity: e.integrity,
      media: e.media,
      hrefLang: e.hrefLang,
      referrerPolicy: e.referrerPolicy
    }), n = 0; n < Tn.length; n++)
      h(this, Tn[n]);
    Tn.length = 0;
  }
}
function Tc(n) {
  n.sheets.forEach(Ec, this), n.sheets.clear();
}
var Tt = o("["), Rt = o(",["), Jl = o(","), Bl = o("]");
function Rc(n, e) {
  h(n, Tt);
  var l = Tt;
  e.stylesheets.forEach(function(r) {
    if (r.state !== 2)
      if (r.state === 3)
        h(n, l), h(
          n,
          g(
            ge("" + r.props.href)
          )
        ), h(n, Bl), l = Rt;
      else {
        h(n, l);
        var t = r.props["data-precedence"], a = r.props, i = be("" + r.props.href);
        h(
          n,
          g(ge(i))
        ), t = "" + t, h(n, Jl), h(
          n,
          g(ge(t))
        );
        for (var u in a)
          if (P.call(a, u) && (t = a[u], t != null))
            switch (u) {
              case "href":
              case "rel":
              case "precedence":
              case "data-precedence":
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(b(399, "link"));
              default:
                wc(
                  n,
                  u,
                  t
                );
            }
        h(n, Bl), l = Rt, r.state = 3;
      }
  }), h(n, Bl);
}
function wc(n, e, l) {
  var r = e.toLowerCase();
  switch (typeof l) {
    case "function":
    case "symbol":
      return;
  }
  switch (e) {
    case "innerHTML":
    case "dangerouslySetInnerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "style":
    case "ref":
      return;
    case "className":
      r = "class", e = "" + l;
      break;
    case "hidden":
      if (l === !1) return;
      e = "";
      break;
    case "src":
    case "href":
      l = be(l), e = "" + l;
      break;
    default:
      if (2 < e.length && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N") || !ar(e))
        return;
      e = "" + l;
  }
  h(n, Jl), h(
    n,
    g(ge(r))
  ), h(n, Jl), h(
    n,
    g(ge(e))
  );
}
function wt() {
  return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
}
function Cc(n) {
  var e = _ || null;
  if (e) {
    var l = e.resumableState, r = e.renderState;
    if (typeof n == "string" && n) {
      if (!l.dnsResources.hasOwnProperty(n)) {
        l.dnsResources[n] = null, l = r.headers;
        var t, a;
        (a = l && 0 < l.remainingCapacity) && (a = (t = "<" + ("" + n).replace(
          ir,
          cr
        ) + ">; rel=dns-prefetch", 0 <= (l.remainingCapacity -= t.length + 2))), a ? (r.resets.dns[n] = null, l.preconnects && (l.preconnects += ", "), l.preconnects += t) : (t = [], D(t, { href: n, rel: "dns-prefetch" }), r.preconnects.add(t));
      }
      Ln(e);
    }
  } else on.D(n);
}
function xc(n, e) {
  var l = _ || null;
  if (l) {
    var r = l.resumableState, t = l.renderState;
    if (typeof n == "string" && n) {
      var a = e === "use-credentials" ? "credentials" : typeof e == "string" ? "anonymous" : "default";
      if (!r.connectResources[a].hasOwnProperty(n)) {
        r.connectResources[a][n] = null, r = t.headers;
        var i, u;
        if (u = r && 0 < r.remainingCapacity) {
          if (u = "<" + ("" + n).replace(
            ir,
            cr
          ) + ">; rel=preconnect", typeof e == "string") {
            var c = ("" + e).replace(
              Ql,
              Vl
            );
            u += '; crossorigin="' + c + '"';
          }
          u = (i = u, 0 <= (r.remainingCapacity -= i.length + 2));
        }
        u ? (t.resets.connect[a][n] = null, r.preconnects && (r.preconnects += ", "), r.preconnects += i) : (a = [], D(a, {
          rel: "preconnect",
          href: n,
          crossOrigin: e
        }), t.preconnects.add(a));
      }
      Ln(l);
    }
  } else on.C(n, e);
}
function Sc(n, e, l) {
  var r = _ || null;
  if (r) {
    var t = r.resumableState, a = r.renderState;
    if (e && n) {
      switch (e) {
        case "image":
          if (l)
            var i = l.imageSrcSet, u = l.imageSizes, c = l.fetchPriority;
          var f = i ? i + `
` + (u || "") : n;
          if (t.imageResources.hasOwnProperty(f)) return;
          t.imageResources[f] = p, t = a.headers;
          var s;
          t && 0 < t.remainingCapacity && typeof i != "string" && c === "high" && (s = pe(n, e, l), 0 <= (t.remainingCapacity -= s.length + 2)) ? (a.resets.image[f] = p, t.highImagePreloads && (t.highImagePreloads += ", "), t.highImagePreloads += s) : (t = [], D(
            t,
            X(
              { rel: "preload", href: i ? void 0 : n, as: e },
              l
            )
          ), c === "high" ? a.highImagePreloads.add(t) : (a.bulkPreloads.add(t), a.preloads.images.set(f, t)));
          break;
        case "style":
          if (t.styleResources.hasOwnProperty(n)) return;
          i = [], D(
            i,
            X({ rel: "preload", href: n, as: e }, l)
          ), t.styleResources[n] = !l || typeof l.crossOrigin != "string" && typeof l.integrity != "string" ? p : [l.crossOrigin, l.integrity], a.preloads.stylesheets.set(n, i), a.bulkPreloads.add(i);
          break;
        case "script":
          if (t.scriptResources.hasOwnProperty(n)) return;
          i = [], a.preloads.scripts.set(n, i), a.bulkPreloads.add(i), D(
            i,
            X({ rel: "preload", href: n, as: e }, l)
          ), t.scriptResources[n] = !l || typeof l.crossOrigin != "string" && typeof l.integrity != "string" ? p : [l.crossOrigin, l.integrity];
          break;
        default:
          if (t.unknownResources.hasOwnProperty(e)) {
            if (i = t.unknownResources[e], i.hasOwnProperty(n))
              return;
          } else
            i = {}, t.unknownResources[e] = i;
          if (i[n] = p, (t = a.headers) && 0 < t.remainingCapacity && e === "font" && (f = pe(n, e, l), 0 <= (t.remainingCapacity -= f.length + 2)))
            a.resets.font[n] = p, t.fontPreloads && (t.fontPreloads += ", "), t.fontPreloads += f;
          else
            switch (t = [], n = X({ rel: "preload", href: n, as: e }, l), D(t, n), e) {
              case "font":
                a.fontPreloads.add(t);
                break;
              default:
                a.bulkPreloads.add(t);
            }
      }
      Ln(r);
    }
  } else on.L(n, e, l);
}
function Pc(n, e) {
  var l = _ || null;
  if (l) {
    var r = l.resumableState, t = l.renderState;
    if (n) {
      var a = e && typeof e.as == "string" ? e.as : "script";
      switch (a) {
        case "script":
          if (r.moduleScriptResources.hasOwnProperty(n)) return;
          a = [], r.moduleScriptResources[n] = !e || typeof e.crossOrigin != "string" && typeof e.integrity != "string" ? p : [e.crossOrigin, e.integrity], t.preloads.moduleScripts.set(n, a);
          break;
        default:
          if (r.moduleUnknownResources.hasOwnProperty(a)) {
            var i = r.unknownResources[a];
            if (i.hasOwnProperty(n)) return;
          } else
            i = {}, r.moduleUnknownResources[a] = i;
          a = [], i[n] = p;
      }
      D(a, X({ rel: "modulepreload", href: n }, e)), t.bulkPreloads.add(a), Ln(l);
    }
  } else on.m(n, e);
}
function kc(n, e, l) {
  var r = _ || null;
  if (r) {
    var t = r.resumableState, a = r.renderState;
    if (n) {
      e = e || "default";
      var i = a.styles.get(e), u = t.styleResources.hasOwnProperty(n) ? t.styleResources[n] : void 0;
      u !== null && (t.styleResources[n] = null, i || (i = {
        precedence: g(R(e)),
        rules: [],
        hrefs: [],
        sheets: /* @__PURE__ */ new Map()
      }, a.styles.set(e, i)), e = {
        state: 0,
        props: X(
          { rel: "stylesheet", href: n, "data-precedence": e },
          l
        )
      }, u && (u.length === 2 && Te(e.props, u), (a = a.preloads.stylesheets.get(n)) && 0 < a.length ? a.length = 0 : e.state = 1), i.sheets.set(n, e), Ln(r));
    }
  } else on.S(n, e, l);
}
function Fc(n, e) {
  var l = _ || null;
  if (l) {
    var r = l.resumableState, t = l.renderState;
    if (n) {
      var a = r.scriptResources.hasOwnProperty(n) ? r.scriptResources[n] : void 0;
      a !== null && (r.scriptResources[n] = null, e = X({ src: n, async: !0 }, e), a && (a.length === 2 && Te(e, a), n = t.preloads.scripts.get(n)) && (n.length = 0), n = [], t.scripts.add(n), qe(n, e), Ln(l));
    }
  } else on.X(n, e);
}
function Ac(n, e) {
  var l = _ || null;
  if (l) {
    var r = l.resumableState, t = l.renderState;
    if (n) {
      var a = r.moduleScriptResources.hasOwnProperty(
        n
      ) ? r.moduleScriptResources[n] : void 0;
      a !== null && (r.moduleScriptResources[n] = null, e = X({ src: n, type: "module", async: !0 }, e), a && (a.length === 2 && Te(e, a), n = t.preloads.moduleScripts.get(n)) && (n.length = 0), n = [], t.scripts.add(n), qe(n, e), Ln(l));
    }
  } else on.M(n, e);
}
function Te(n, e) {
  n.crossOrigin == null && (n.crossOrigin = e[0]), n.integrity == null && (n.integrity = e[1]);
}
function pe(n, e, l) {
  n = ("" + n).replace(
    ir,
    cr
  ), e = ("" + e).replace(
    Ql,
    Vl
  ), e = "<" + n + '>; rel=preload; as="' + e + '"';
  for (var r in l)
    P.call(l, r) && (n = l[r], typeof n == "string" && (e += "; " + r.toLowerCase() + '="' + ("" + n).replace(
      Ql,
      Vl
    ) + '"'));
  return e;
}
var ir = /[<>\r\n]/g;
function cr(n) {
  switch (n) {
    case "<":
      return "%3C";
    case ">":
      return "%3E";
    case `
`:
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error(
        "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
      );
  }
}
var Ql = /["';,\r\n]/g;
function Vl(n) {
  switch (n) {
    case '"':
      return "%22";
    case "'":
      return "%27";
    case ";":
      return "%3B";
    case ",":
      return "%2C";
    case `
`:
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error(
        "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
      );
  }
}
function Ct(n) {
  this.styles.add(n);
}
function xt(n) {
  this.stylesheets.add(n);
}
var Oc = Function.prototype.bind, Mc = Symbol.for("react.client.reference");
function $e(n) {
  if (n == null) return null;
  if (typeof n == "function")
    return n.$$typeof === Mc ? null : n.displayName || n.name || null;
  if (typeof n == "string") return n;
  switch (n) {
    case Wt:
      return "Fragment";
    case Yt:
      return "Profiler";
    case Ut:
      return "StrictMode";
    case il:
      return "Suspense";
    case lr:
      return "SuspenseList";
    case Xt:
      return "Activity";
  }
  if (typeof n == "object")
    switch (n.$$typeof) {
      case Ht:
        return "Portal";
      case al:
        return (n.displayName || "Context") + ".Provider";
      case Gt:
        return (n._context.displayName || "Context") + ".Consumer";
      case er:
        var e = n.render;
        return n = n.displayName, n || (n = e.displayName || e.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case rr:
        return e = n.displayName || null, e !== null ? e : $e(n.type) || "Memo";
      case cl:
        e = n._payload, n = n._init;
        try {
          return $e(n(e));
        } catch {
        }
    }
  return null;
}
var St = {}, On = null;
function ul(n, e) {
  if (n !== e) {
    n.context._currentValue = n.parentValue, n = n.parent;
    var l = e.parent;
    if (n === null) {
      if (l !== null) throw Error(b(401));
    } else {
      if (l === null) throw Error(b(401));
      ul(n, l);
    }
    e.context._currentValue = e.value;
  }
}
function fa(n) {
  n.context._currentValue = n.parentValue, n = n.parent, n !== null && fa(n);
}
function ha(n) {
  var e = n.parent;
  e !== null && ha(e), n.context._currentValue = n.value;
}
function oa(n, e) {
  if (n.context._currentValue = n.parentValue, n = n.parent, n === null) throw Error(b(402));
  n.depth === e.depth ? ul(n, e) : oa(n, e);
}
function da(n, e) {
  var l = e.parent;
  if (l === null) throw Error(b(402));
  n.depth === l.depth ? ul(n, l) : da(n, l), e.context._currentValue = e.value;
}
function En(n) {
  var e = On;
  e !== n && (e === null ? ha(n) : n === null ? fa(e) : e.depth === n.depth ? ul(e, n) : e.depth > n.depth ? oa(e, n) : da(e, n), On = n);
}
var Pt = {
  enqueueSetState: function(n, e) {
    n = n._reactInternals, n.queue !== null && n.queue.push(e);
  },
  enqueueReplaceState: function(n, e) {
    n = n._reactInternals, n.replace = !0, n.queue = [e];
  },
  enqueueForceUpdate: function() {
  }
}, Ic = { id: 1, overflow: "" };
function Kl(n, e, l) {
  var r = n.id;
  n = n.overflow;
  var t = 32 - Qe(r) - 1;
  r &= ~(1 << t), l += 1;
  var a = 32 - Qe(e) + t;
  if (30 < a) {
    var i = t - t % 5;
    return a = (r & (1 << i) - 1).toString(32), r >>= i, t -= i, {
      id: 1 << 32 - Qe(e) + t | l << t | r,
      overflow: a + n
    };
  }
  return {
    id: 1 << a | l << t | r,
    overflow: n
  };
}
var Qe = Math.clz32 ? Math.clz32 : Bc, _c = Math.log, Lc = Math.LN2;
function Bc(n) {
  return n >>>= 0, n === 0 ? 32 : 31 - (_c(n) / Lc | 0) | 0;
}
var In = Error(b(460));
function Xe() {
}
function Nc(n, e, l) {
  switch (l = n[l], l === void 0 ? n.push(e) : l !== e && (e.then(Xe, Xe), e = l), e.status) {
    case "fulfilled":
      return e.value;
    case "rejected":
      throw e.reason;
    default:
      switch (typeof e.status == "string" ? e.then(Xe, Xe) : (n = e, n.status = "pending", n.then(
        function(r) {
          if (e.status === "pending") {
            var t = e;
            t.status = "fulfilled", t.value = r;
          }
        },
        function(r) {
          if (e.status === "pending") {
            var t = e;
            t.status = "rejected", t.reason = r;
          }
        }
      )), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
      }
      throw Ve = e, In;
  }
}
var Ve = null;
function nl() {
  if (Ve === null) throw Error(b(459));
  var n = Ve;
  return Ve = null, n;
}
function Dc(n, e) {
  return n === e && (n !== 0 || 1 / n === 1 / e) || n !== n && e !== e;
}
var zc = typeof Object.is == "function" ? Object.is : Dc, dn = null, ur = null, fr = null, hr = null, Ke = null, S = null, se = !1, el = !1, Re = 0, we = 0, Ce = -1, ll = 0, Zn = null, Rn = null, fl = 0;
function fn() {
  if (dn === null)
    throw Error(b(321));
  return dn;
}
function kt() {
  if (0 < fl) throw Error(b(312));
  return { memoizedState: null, queue: null, next: null };
}
function or() {
  return S === null ? Ke === null ? (se = !1, Ke = S = kt()) : (se = !0, S = Ke) : S.next === null ? (se = !1, S = S.next = kt()) : (se = !0, S = S.next), S;
}
function Xn() {
  var n = Zn;
  return Zn = null, n;
}
function xe() {
  hr = fr = ur = dn = null, el = !1, Ke = null, fl = 0, S = Rn = null;
}
function sa(n, e) {
  return typeof e == "function" ? e(n) : e;
}
function Ft(n, e, l) {
  if (dn = fn(), S = or(), se) {
    var r = S.queue;
    if (e = r.dispatch, Rn !== null && (l = Rn.get(r), l !== void 0)) {
      Rn.delete(r), r = S.memoizedState;
      do
        r = n(r, l.action), l = l.next;
      while (l !== null);
      return S.memoizedState = r, [r, e];
    }
    return [S.memoizedState, e];
  }
  return n = n === sa ? typeof e == "function" ? e() : e : l !== void 0 ? l(e) : e, S.memoizedState = n, n = S.queue = { last: null, dispatch: null }, n = n.dispatch = Hc.bind(
    null,
    dn,
    n
  ), [S.memoizedState, n];
}
function At(n, e) {
  if (dn = fn(), S = or(), e = e === void 0 ? null : e, S !== null) {
    var l = S.memoizedState;
    if (l !== null && e !== null) {
      var r = l[1];
      n: if (r === null) r = !1;
      else {
        for (var t = 0; t < r.length && t < e.length; t++)
          if (!zc(e[t], r[t])) {
            r = !1;
            break n;
          }
        r = !0;
      }
      if (r) return l[0];
    }
  }
  return n = n(), S.memoizedState = [n, e], n;
}
function Hc(n, e, l) {
  if (25 <= fl) throw Error(b(301));
  if (n === dn)
    if (el = !0, n = { action: l, next: null }, Rn === null && (Rn = /* @__PURE__ */ new Map()), l = Rn.get(e), l === void 0)
      Rn.set(e, n);
    else {
      for (e = l; e.next !== null; ) e = e.next;
      e.next = n;
    }
}
function Wc() {
  throw Error(b(394));
}
function Uc() {
  throw Error(b(479));
}
function Ot(n, e, l) {
  fn();
  var r = we++, t = fr;
  if (typeof n.$$FORM_ACTION == "function") {
    var a = null, i = hr;
    t = t.formState;
    var u = n.$$IS_SIGNATURE_EQUAL;
    if (t !== null && typeof u == "function") {
      var c = t[1];
      u.call(n, t[2], t[3]) && (a = l !== void 0 ? "p" + l : "k" + $r(
        JSON.stringify([i, null, r]),
        0
      ), c === a && (Ce = r, e = t[0]));
    }
    var f = n.bind(null, e);
    return n = function(d) {
      f(d);
    }, typeof f.$$FORM_ACTION == "function" && (n.$$FORM_ACTION = function(d) {
      d = f.$$FORM_ACTION(d), l !== void 0 && (l += "", d.action = l);
      var v = d.data;
      return v && (a === null && (a = l !== void 0 ? "p" + l : "k" + $r(
        JSON.stringify([
          i,
          null,
          r
        ]),
        0
      )), v.append("$ACTION_KEY", a)), d;
    }), [e, n, !1];
  }
  var s = n.bind(null, e);
  return [
    e,
    function(d) {
      s(d);
    },
    !1
  ];
}
function ga(n) {
  var e = ll;
  return ll += 1, Zn === null && (Zn = []), Nc(Zn, n, e);
}
function Yc() {
  throw Error(b(393));
}
function de() {
}
var Mt = {
  readContext: function(n) {
    return n._currentValue;
  },
  use: function(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return ga(n);
      if (n.$$typeof === al) return n._currentValue;
    }
    throw Error(b(438, String(n)));
  },
  useContext: function(n) {
    return fn(), n._currentValue;
  },
  useMemo: At,
  useReducer: Ft,
  useRef: function(n) {
    dn = fn(), S = or();
    var e = S.memoizedState;
    return e === null ? (n = { current: n }, S.memoizedState = n) : e;
  },
  useState: function(n) {
    return Ft(sa, n);
  },
  useInsertionEffect: de,
  useLayoutEffect: de,
  useCallback: function(n, e) {
    return At(function() {
      return n;
    }, e);
  },
  useImperativeHandle: de,
  useEffect: de,
  useDebugValue: de,
  useDeferredValue: function(n, e) {
    return fn(), e !== void 0 ? e : n;
  },
  useTransition: function() {
    return fn(), [!1, Wc];
  },
  useId: function() {
    var n = ur.treeContext, e = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - Qe(n) - 1)).toString(32) + e;
    var l = me;
    if (l === null) throw Error(b(404));
    return e = Re++, n = "«" + l.idPrefix + "R" + n, 0 < e && (n += "H" + e.toString(32)), n + "»";
  },
  useSyncExternalStore: function(n, e, l) {
    if (l === void 0)
      throw Error(b(407));
    return l();
  },
  useOptimistic: function(n) {
    return fn(), [n, Uc];
  },
  useActionState: Ot,
  useFormState: Ot,
  useHostTransitionStatus: function() {
    return fn(), Xa;
  },
  useMemoCache: function(n) {
    for (var e = Array(n), l = 0; l < n; l++)
      e[l] = _a;
    return e;
  },
  useCacheRefresh: function() {
    return Yc;
  }
}, me = null, Gc = {
  getCacheForType: function() {
    throw Error(b(248));
  }
}, Nl, It;
function Yn(n) {
  if (Nl === void 0)
    try {
      throw Error();
    } catch (l) {
      var e = l.stack.trim().match(/\n( *(at )?)/);
      Nl = e && e[1] || "", It = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
  return `
` + Nl + n + It;
}
var Dl = !1;
function Ze(n, e) {
  if (!n || Dl) return "";
  Dl = !0;
  var l = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var r = {
      DetermineComponentFrameRoot: function() {
        try {
          if (e) {
            var d = function() {
              throw Error();
            };
            if (Object.defineProperty(d.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(d, []);
              } catch (y) {
                var v = y;
              }
              Reflect.construct(n, [], d);
            } else {
              try {
                d.call();
              } catch (y) {
                v = y;
              }
              n.call(d.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (y) {
              v = y;
            }
            (d = n()) && typeof d.catch == "function" && d.catch(function() {
            });
          }
        } catch (y) {
          if (y && v && typeof y.stack == "string")
            return [y.stack, v.stack];
        }
        return [null, null];
      }
    };
    r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var t = Object.getOwnPropertyDescriptor(
      r.DetermineComponentFrameRoot,
      "name"
    );
    t && t.configurable && Object.defineProperty(
      r.DetermineComponentFrameRoot,
      "name",
      { value: "DetermineComponentFrameRoot" }
    );
    var a = r.DetermineComponentFrameRoot(), i = a[0], u = a[1];
    if (i && u) {
      var c = i.split(`
`), f = u.split(`
`);
      for (t = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot"); )
        r++;
      for (; t < f.length && !f[t].includes(
        "DetermineComponentFrameRoot"
      ); )
        t++;
      if (r === c.length || t === f.length)
        for (r = c.length - 1, t = f.length - 1; 1 <= r && 0 <= t && c[r] !== f[t]; )
          t--;
      for (; 1 <= r && 0 <= t; r--, t--)
        if (c[r] !== f[t]) {
          if (r !== 1 || t !== 1)
            do
              if (r--, t--, 0 > t || c[r] !== f[t]) {
                var s = `
` + c[r].replace(" at new ", " at ");
                return n.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", n.displayName)), s;
              }
            while (1 <= r && 0 <= t);
          break;
        }
    }
  } finally {
    Dl = !1, Error.prepareStackTrace = l;
  }
  return (l = n ? n.displayName || n.name : "") ? Yn(l) : "";
}
function va(n) {
  if (typeof n == "string") return Yn(n);
  if (typeof n == "function")
    return n.prototype && n.prototype.isReactComponent ? Ze(n, !0) : Ze(n, !1);
  if (typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case er:
        return Ze(n.render, !1);
      case rr:
        return Ze(n.type, !1);
      case cl:
        var e = n, l = e._payload;
        e = e._init;
        try {
          n = e(l);
        } catch {
          return Yn("Lazy");
        }
        return va(n);
    }
    if (typeof n.name == "string")
      return l = n.env, Yn(
        n.name + (l ? " [" + l + "]" : "")
      );
  }
  switch (n) {
    case lr:
      return Yn("SuspenseList");
    case il:
      return Yn("Suspense");
  }
  return "";
}
function Xc(n) {
  if (typeof n == "object" && n !== null && typeof n.environmentName == "string") {
    var e = n.environmentName;
    n = [n].slice(0), typeof n[0] == "string" ? n.splice(
      0,
      1,
      "%c%s%c " + n[0],
      "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
      " " + e + " ",
      ""
    ) : n.splice(
      0,
      0,
      "%c%s%c ",
      "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
      " " + e + " ",
      ""
    ), n.unshift(console), e = Oc.apply(console.error, n), e();
  } else console.error(n);
  return null;
}
function Gn() {
}
function Zc(n, e, l, r, t, a, i, u, c, f, s) {
  var d = /* @__PURE__ */ new Set();
  this.destination = null, this.flushScheduled = !1, this.resumableState = n, this.renderState = e, this.rootFormatContext = l, this.progressiveChunkSize = r === void 0 ? 12800 : r, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = d, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = t === void 0 ? Xc : t, this.onPostpone = f === void 0 ? Gn : f, this.onAllReady = a === void 0 ? Gn : a, this.onShellReady = i === void 0 ? Gn : i, this.onShellError = u === void 0 ? Gn : u, this.onFatalError = c === void 0 ? Gn : c, this.formState = s === void 0 ? null : s;
}
function ba(n, e, l, r, t, a, i, u, c, f, s, d) {
  return e = new Zc(
    e,
    l,
    r,
    t,
    a,
    i,
    u,
    c,
    f,
    s,
    d
  ), l = Jn(
    e,
    0,
    null,
    r,
    !1,
    !1
  ), l.parentFlushed = !0, n = ve(
    e,
    null,
    n,
    -1,
    null,
    l,
    null,
    null,
    e.abortableTasks,
    null,
    r,
    null,
    Ic,
    null,
    !1
  ), Qn(n), e.pingedTasks.push(n), e;
}
function Jc(n, e, l, r, t, a, i, u, c, f, s) {
  return n = ba(
    n,
    e,
    l,
    r,
    t,
    a,
    i,
    u,
    c,
    f,
    s,
    void 0
  ), n.trackedPostpones = {
    workingMap: /* @__PURE__ */ new Map(),
    rootNodes: [],
    rootSlots: null
  }, n;
}
var _ = null;
function ya(n, e) {
  n.pingedTasks.push(e), n.pingedTasks.length === 1 && (n.flushScheduled = n.destination !== null, n.trackedPostpones !== null || n.status === 10 ? Qt(function() {
    return pl(n);
  }) : tr(function() {
    return pl(n);
  }));
}
function Se(n, e, l, r) {
  return {
    status: 0,
    rootSegmentID: -1,
    parentFlushed: !1,
    pendingTasks: 0,
    completedSegments: [],
    byteSize: 0,
    fallbackAbortableTasks: e,
    errorDigest: null,
    contentState: wt(),
    fallbackState: wt(),
    contentPreamble: l,
    fallbackPreamble: r,
    trackedContentKeyPath: null,
    trackedFallbackNode: null
  };
}
function ve(n, e, l, r, t, a, i, u, c, f, s, d, v, y, E) {
  n.allPendingTasks++, t === null ? n.pendingRootTasks++ : t.pendingTasks++;
  var T = {
    replay: null,
    node: l,
    childIndex: r,
    ping: function() {
      return ya(n, T);
    },
    blockedBoundary: t,
    blockedSegment: a,
    blockedPreamble: i,
    hoistableState: u,
    abortSet: c,
    keyPath: f,
    formatContext: s,
    context: d,
    treeContext: v,
    componentStack: y,
    thenableState: e,
    isFallback: E
  };
  return c.add(T), T;
}
function Ea(n, e, l, r, t, a, i, u, c, f, s, d, v, y) {
  n.allPendingTasks++, a === null ? n.pendingRootTasks++ : a.pendingTasks++, l.pendingTasks++;
  var E = {
    replay: l,
    node: r,
    childIndex: t,
    ping: function() {
      return ya(n, E);
    },
    blockedBoundary: a,
    blockedSegment: null,
    blockedPreamble: null,
    hoistableState: i,
    abortSet: u,
    keyPath: c,
    formatContext: f,
    context: s,
    treeContext: d,
    componentStack: v,
    thenableState: e,
    isFallback: y
  };
  return u.add(E), E;
}
function Jn(n, e, l, r, t, a) {
  return {
    status: 0,
    parentFlushed: !1,
    id: -1,
    index: e,
    chunks: [],
    children: [],
    preambleChildren: [],
    parentFormatContext: r,
    boundary: l,
    lastPushedText: t,
    textEmbedded: a
  };
}
function Qn(n) {
  var e = n.node;
  if (typeof e == "object" && e !== null)
    switch (e.$$typeof) {
      case zt:
        n.componentStack = { parent: n.componentStack, type: e.type };
    }
}
function _n(n) {
  var e = {};
  return n && Object.defineProperty(e, "componentStack", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      try {
        var l = "", r = n;
        do
          l += va(r.type), r = r.parent;
        while (r);
        var t = l;
      } catch (a) {
        t = `
Error generating stack: ` + a.message + `
` + a.stack;
      }
      return Object.defineProperty(e, "componentStack", {
        value: t
      }), t;
    }
  }), e;
}
function m(n, e, l) {
  if (n = n.onError, e = n(e, l), e == null || typeof e == "string") return e;
}
function Pe(n, e) {
  var l = n.onShellError, r = n.onFatalError;
  l(e), r(e), n.destination !== null ? (n.status = 14, Kt(n.destination, e)) : (n.status = 13, n.fatalError = e);
}
function _t(n, e, l, r, t, a) {
  var i = e.thenableState;
  for (e.thenableState = null, dn = {}, ur = e, fr = n, hr = l, we = Re = 0, Ce = -1, ll = 0, Zn = i, n = r(t, a); el; )
    el = !1, we = Re = 0, Ce = -1, ll = 0, fl += 1, S = null, n = r(t, a);
  return xe(), n;
}
function Lt(n, e, l, r, t, a, i) {
  var u = !1;
  if (a !== 0 && n.formState !== null) {
    var c = e.blockedSegment;
    if (c !== null) {
      u = !0, c = c.chunks;
      for (var f = 0; f < a; f++)
        f === i ? c.push($a) : c.push(ni);
    }
  }
  a = e.keyPath, e.keyPath = l, t ? (l = e.treeContext, e.treeContext = Kl(l, 1, 0), rn(n, e, r, -1), e.treeContext = l) : u ? rn(n, e, r, -1) : $(n, e, r, -1), e.keyPath = a;
}
function rl(n, e, l, r, t, a) {
  if (typeof r == "function")
    if (r.prototype && r.prototype.isReactComponent) {
      var i = t;
      if ("ref" in t) {
        i = {};
        for (var u in t)
          u !== "ref" && (i[u] = t[u]);
      }
      var c = r.defaultProps;
      if (c) {
        i === t && (i = X({}, i, t));
        for (var f in c)
          i[f] === void 0 && (i[f] = c[f]);
      }
      t = i, i = St, c = r.contextType, typeof c == "object" && c !== null && (i = c._currentValue), i = new r(t, i);
      var s = i.state !== void 0 ? i.state : null;
      if (i.updater = Pt, i.props = t, i.state = s, c = { queue: [], replace: !1 }, i._reactInternals = c, a = r.contextType, i.context = typeof a == "object" && a !== null ? a._currentValue : St, a = r.getDerivedStateFromProps, typeof a == "function" && (a = a(t, s), s = a == null ? s : X({}, s, a), i.state = s), typeof r.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function"))
        if (r = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), r !== i.state && Pt.enqueueReplaceState(
          i,
          i.state,
          null
        ), c.queue !== null && 0 < c.queue.length)
          if (r = c.queue, a = c.replace, c.queue = null, c.replace = !1, a && r.length === 1)
            i.state = r[0];
          else {
            for (c = a ? r[0] : i.state, s = !0, a = a ? 1 : 0; a < r.length; a++)
              f = r[a], f = typeof f == "function" ? f.call(i, c, t, void 0) : f, f != null && (s ? (s = !1, c = X({}, c, f)) : X(c, f));
            i.state = c;
          }
        else c.queue = null;
      if (r = i.render(), n.status === 12) throw null;
      t = e.keyPath, e.keyPath = l, $(n, e, r, -1), e.keyPath = t;
    } else {
      if (r = _t(n, e, l, r, t, void 0), n.status === 12) throw null;
      Lt(
        n,
        e,
        l,
        r,
        Re !== 0,
        we,
        Ce
      );
    }
  else if (typeof r == "string")
    if (i = e.blockedSegment, i === null)
      i = t.children, c = e.formatContext, s = e.keyPath, e.formatContext = it(c, r, t), e.keyPath = l, rn(n, e, i, -1), e.formatContext = c, e.keyPath = s;
    else {
      a = ri(
        i.chunks,
        r,
        t,
        n.resumableState,
        n.renderState,
        e.blockedPreamble,
        e.hoistableState,
        e.formatContext,
        i.lastPushedText,
        e.isFallback
      ), i.lastPushedText = !1, c = e.formatContext, s = e.keyPath, e.keyPath = l, (e.formatContext = it(c, r, t)).insertionMode === 3 ? (l = Jn(
        n,
        0,
        null,
        e.formatContext,
        !1,
        !1
      ), i.preambleChildren.push(l), l = ve(
        n,
        null,
        a,
        -1,
        e.blockedBoundary,
        l,
        e.blockedPreamble,
        e.hoistableState,
        n.abortableTasks,
        e.keyPath,
        e.formatContext,
        e.context,
        e.treeContext,
        e.componentStack,
        e.isFallback
      ), Qn(l), n.pingedTasks.push(l)) : rn(n, e, a, -1), e.formatContext = c, e.keyPath = s;
      n: {
        switch (e = i.chunks, n = n.resumableState, r) {
          case "title":
          case "style":
          case "script":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break n;
          case "body":
            if (1 >= c.insertionMode) {
              n.hasBody = !0;
              break n;
            }
            break;
          case "html":
            if (c.insertionMode === 0) {
              n.hasHtml = !0;
              break n;
            }
            break;
          case "head":
            if (1 >= c.insertionMode) break n;
        }
        e.push(Mn(r));
      }
      i.lastPushedText = !1;
    }
  else {
    switch (r) {
      case Ia:
      case Ut:
      case Yt:
      case Wt:
        r = e.keyPath, e.keyPath = l, $(n, e, t.children, -1), e.keyPath = r;
        return;
      case Xt:
        t.mode !== "hidden" && (r = e.keyPath, e.keyPath = l, $(n, e, t.children, -1), e.keyPath = r);
        return;
      case lr:
        r = e.keyPath, e.keyPath = l, $(n, e, t.children, -1), e.keyPath = r;
        return;
      case La:
      case Ma:
        throw Error(b(343));
      case il:
        n: if (e.replay !== null) {
          r = e.keyPath, e.keyPath = l, l = t.children;
          try {
            rn(n, e, l, -1);
          } finally {
            e.keyPath = r;
          }
        } else {
          r = e.keyPath;
          var d = e.blockedBoundary;
          a = e.blockedPreamble;
          var v = e.hoistableState;
          f = e.blockedSegment, u = t.fallback, t = t.children;
          var y = /* @__PURE__ */ new Set(), E = 2 > e.formatContext.insertionMode ? Se(
            n,
            y,
            ye(),
            ye()
          ) : Se(n, y, null, null);
          n.trackedPostpones !== null && (E.trackedContentKeyPath = l);
          var T = Jn(
            n,
            f.chunks.length,
            E,
            e.formatContext,
            !1,
            !1
          );
          f.children.push(T), f.lastPushedText = !1;
          var k = Jn(
            n,
            0,
            null,
            e.formatContext,
            !1,
            !1
          );
          if (k.parentFlushed = !0, n.trackedPostpones !== null) {
            i = [l[0], "Suspense Fallback", l[2]], c = [i[1], i[2], [], null], n.trackedPostpones.workingMap.set(i, c), E.trackedFallbackNode = c, e.blockedSegment = T, e.blockedPreamble = E.fallbackPreamble, e.keyPath = i, T.status = 6;
            try {
              rn(n, e, u, -1), T.lastPushedText && T.textEmbedded && T.chunks.push(hn), T.status = 1;
            } catch (O) {
              throw T.status = n.status === 12 ? 3 : 4, O;
            } finally {
              e.blockedSegment = f, e.blockedPreamble = a, e.keyPath = r;
            }
            e = ve(
              n,
              null,
              t,
              -1,
              E,
              k,
              E.contentPreamble,
              E.contentState,
              e.abortSet,
              l,
              e.formatContext,
              e.context,
              e.treeContext,
              e.componentStack,
              e.isFallback
            ), Qn(e), n.pingedTasks.push(e);
          } else {
            e.blockedBoundary = E, e.blockedPreamble = E.contentPreamble, e.hoistableState = E.contentState, e.blockedSegment = k, e.keyPath = l, k.status = 6;
            try {
              if (rn(n, e, t, -1), k.lastPushedText && k.textEmbedded && k.chunks.push(hn), k.status = 1, ke(E, k), E.pendingTasks === 0 && E.status === 0) {
                E.status = 1, n.pendingRootTasks === 0 && e.blockedPreamble && Oe(n);
                break n;
              }
            } catch (O) {
              E.status = 4, n.status === 12 ? (k.status = 3, i = n.fatalError) : (k.status = 4, i = O), c = _n(e.componentStack), s = m(
                n,
                i,
                c
              ), E.errorDigest = s, sr(n, E);
            } finally {
              e.blockedBoundary = d, e.blockedPreamble = a, e.hoistableState = v, e.blockedSegment = f, e.keyPath = r;
            }
            e = ve(
              n,
              null,
              u,
              -1,
              d,
              T,
              E.fallbackPreamble,
              E.fallbackState,
              y,
              [l[0], "Suspense Fallback", l[2]],
              e.formatContext,
              e.context,
              e.treeContext,
              e.componentStack,
              !0
            ), Qn(e), n.pingedTasks.push(e);
          }
        }
        return;
    }
    if (typeof r == "object" && r !== null)
      switch (r.$$typeof) {
        case er:
          if ("ref" in t)
            for (E in i = {}, t)
              E !== "ref" && (i[E] = t[E]);
          else i = t;
          r = _t(
            n,
            e,
            l,
            r.render,
            i,
            a
          ), Lt(
            n,
            e,
            l,
            r,
            Re !== 0,
            we,
            Ce
          );
          return;
        case rr:
          rl(n, e, l, r.type, t, a);
          return;
        case Oa:
        case al:
          if (c = t.children, i = e.keyPath, t = t.value, s = r._currentValue, r._currentValue = t, a = On, On = r = {
            parent: a,
            depth: a === null ? 0 : a.depth + 1,
            context: r,
            parentValue: s,
            value: t
          }, e.context = r, e.keyPath = l, $(n, e, c, -1), n = On, n === null) throw Error(b(403));
          n.context._currentValue = n.parentValue, n = On = n.parent, e.context = n, e.keyPath = i;
          return;
        case Gt:
          t = t.children, r = t(r._context._currentValue), t = e.keyPath, e.keyPath = l, $(n, e, r, -1), e.keyPath = t;
          return;
        case cl:
          if (i = r._init, r = i(r._payload), n.status === 12) throw null;
          rl(n, e, l, r, t, a);
          return;
      }
    throw Error(
      b(130, r == null ? r : typeof r, "")
    );
  }
}
function dr(n, e, l, r, t) {
  var a = e.replay, i = e.blockedBoundary, u = Jn(
    n,
    0,
    null,
    e.formatContext,
    !1,
    !1
  );
  u.id = l, u.parentFlushed = !0;
  try {
    e.replay = null, e.blockedSegment = u, rn(n, e, r, t), u.status = 1, i === null ? n.completedRootSegment = u : (ke(i, u), i.parentFlushed && n.partialBoundaries.push(i));
  } finally {
    e.replay = a, e.blockedSegment = null;
  }
}
function $(n, e, l, r) {
  e.replay !== null && typeof e.replay.slots == "number" ? dr(n, e, e.replay.slots, l, r) : (e.node = l, e.childIndex = r, l = e.componentStack, Qn(e), ml(n, e), e.componentStack = l);
}
function ml(n, e) {
  var l = e.node, r = e.childIndex;
  if (l !== null) {
    if (typeof l == "object") {
      switch (l.$$typeof) {
        case zt:
          var t = l.type, a = l.key, i = l.props;
          l = i.ref;
          var u = l !== void 0 ? l : null, c = $e(t), f = a ?? (r === -1 ? 0 : r);
          if (a = [e.keyPath, c, f], e.replay !== null)
            n: {
              var s = e.replay;
              for (r = s.nodes, l = 0; l < r.length; l++) {
                var d = r[l];
                if (f === d[1]) {
                  if (d.length === 4) {
                    if (c !== null && c !== d[0])
                      throw Error(
                        b(490, d[0], c)
                      );
                    var v = d[2];
                    c = d[3], f = e.node, e.replay = {
                      nodes: v,
                      slots: c,
                      pendingTasks: 1
                    };
                    try {
                      if (rl(n, e, a, t, i, u), e.replay.pendingTasks === 1 && 0 < e.replay.nodes.length)
                        throw Error(b(488));
                      e.replay.pendingTasks--;
                    } catch (F) {
                      if (typeof F == "object" && F !== null && (F === In || typeof F.then == "function"))
                        throw e.node === f && (e.replay = s), F;
                      e.replay.pendingTasks--, i = _n(e.componentStack), a = e.blockedBoundary, t = F, i = m(n, t, i), Ae(
                        n,
                        a,
                        v,
                        c,
                        t,
                        i
                      );
                    }
                    e.replay = s;
                  } else {
                    if (t !== il)
                      throw Error(
                        b(
                          490,
                          "Suspense",
                          $e(t) || "Unknown"
                        )
                      );
                    e: {
                      s = void 0, t = d[5], u = d[2], c = d[3], f = d[4] === null ? [] : d[4][2], d = d[4] === null ? null : d[4][3];
                      var y = e.keyPath, E = e.replay, T = e.blockedBoundary, k = e.hoistableState, O = i.children, w = i.fallback, z = /* @__PURE__ */ new Set();
                      i = 2 > e.formatContext.insertionMode ? Se(
                        n,
                        z,
                        ye(),
                        ye()
                      ) : Se(
                        n,
                        z,
                        null,
                        null
                      ), i.parentFlushed = !0, i.rootSegmentID = t, e.blockedBoundary = i, e.hoistableState = i.contentState, e.keyPath = a, e.replay = {
                        nodes: u,
                        slots: c,
                        pendingTasks: 1
                      };
                      try {
                        if (rn(n, e, O, -1), e.replay.pendingTasks === 1 && 0 < e.replay.nodes.length)
                          throw Error(b(488));
                        if (e.replay.pendingTasks--, i.pendingTasks === 0 && i.status === 0) {
                          i.status = 1, n.completedBoundaries.push(i);
                          break e;
                        }
                      } catch (F) {
                        i.status = 4, v = _n(e.componentStack), s = m(
                          n,
                          F,
                          v
                        ), i.errorDigest = s, e.replay.pendingTasks--, n.clientRenderedBoundaries.push(i);
                      } finally {
                        e.blockedBoundary = T, e.hoistableState = k, e.replay = E, e.keyPath = y;
                      }
                      e = Ea(
                        n,
                        null,
                        {
                          nodes: f,
                          slots: d,
                          pendingTasks: 0
                        },
                        w,
                        -1,
                        T,
                        i.fallbackState,
                        z,
                        [a[0], "Suspense Fallback", a[2]],
                        e.formatContext,
                        e.context,
                        e.treeContext,
                        e.componentStack,
                        !0
                      ), Qn(e), n.pingedTasks.push(e);
                    }
                  }
                  r.splice(l, 1);
                  break n;
                }
              }
            }
          else rl(n, e, a, t, i, u);
          return;
        case Ht:
          throw Error(b(257));
        case cl:
          if (v = l._init, l = v(l._payload), n.status === 12) throw null;
          $(n, e, l, r);
          return;
      }
      if (Wl(l)) {
        ql(n, e, l, r);
        return;
      }
      if (l === null || typeof l != "object" ? v = null : (v = pr && l[pr] || l["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(l))) {
        if (l = v.next(), !l.done) {
          i = [];
          do
            i.push(l.value), l = v.next();
          while (!l.done);
          ql(n, e, i, r);
        }
        return;
      }
      if (typeof l.then == "function")
        return e.thenableState = null, $(n, e, ga(l), r);
      if (l.$$typeof === al)
        return $(
          n,
          e,
          l._currentValue,
          r
        );
      throw r = Object.prototype.toString.call(l), Error(
        b(
          31,
          r === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : r
        )
      );
    }
    typeof l == "string" ? (r = e.blockedSegment, r !== null && (r.lastPushedText = ct(
      r.chunks,
      l,
      n.renderState,
      r.lastPushedText
    ))) : (typeof l == "number" || typeof l == "bigint") && (r = e.blockedSegment, r !== null && (r.lastPushedText = ct(
      r.chunks,
      "" + l,
      n.renderState,
      r.lastPushedText
    )));
  }
}
function ql(n, e, l, r) {
  var t = e.keyPath;
  if (r !== -1 && (e.keyPath = [e.keyPath, "Fragment", r], e.replay !== null)) {
    for (var a = e.replay, i = a.nodes, u = 0; u < i.length; u++) {
      var c = i[u];
      if (c[1] === r) {
        r = c[2], c = c[3], e.replay = { nodes: r, slots: c, pendingTasks: 1 };
        try {
          if (ql(n, e, l, -1), e.replay.pendingTasks === 1 && 0 < e.replay.nodes.length)
            throw Error(b(488));
          e.replay.pendingTasks--;
        } catch (d) {
          if (typeof d == "object" && d !== null && (d === In || typeof d.then == "function"))
            throw d;
          e.replay.pendingTasks--, l = _n(e.componentStack);
          var f = e.blockedBoundary, s = d;
          l = m(n, s, l), Ae(
            n,
            f,
            r,
            c,
            s,
            l
          );
        }
        e.replay = a, i.splice(u, 1);
        break;
      }
    }
    e.keyPath = t;
    return;
  }
  if (a = e.treeContext, i = l.length, e.replay !== null && (u = e.replay.slots, u !== null && typeof u == "object")) {
    for (r = 0; r < i; r++)
      c = l[r], e.treeContext = Kl(a, i, r), f = u[r], typeof f == "number" ? (dr(n, e, f, c, r), delete u[r]) : rn(n, e, c, r);
    e.treeContext = a, e.keyPath = t;
    return;
  }
  for (u = 0; u < i; u++)
    r = l[u], e.treeContext = Kl(a, i, u), rn(n, e, r, u);
  e.treeContext = a, e.keyPath = t;
}
function sr(n, e) {
  n = n.trackedPostpones, n !== null && (e = e.trackedContentKeyPath, e !== null && (e = n.workingMap.get(e), e !== void 0 && (e.length = 4, e[2] = [], e[3] = null)));
}
function Bt(n, e, l) {
  return Ea(
    n,
    l,
    e.replay,
    e.node,
    e.childIndex,
    e.blockedBoundary,
    e.hoistableState,
    e.abortSet,
    e.keyPath,
    e.formatContext,
    e.context,
    e.treeContext,
    e.componentStack,
    e.isFallback
  );
}
function Nt(n, e, l) {
  var r = e.blockedSegment, t = Jn(
    n,
    r.chunks.length,
    null,
    e.formatContext,
    r.lastPushedText,
    !0
  );
  return r.children.push(t), r.lastPushedText = !1, ve(
    n,
    l,
    e.node,
    e.childIndex,
    e.blockedBoundary,
    t,
    e.blockedPreamble,
    e.hoistableState,
    e.abortSet,
    e.keyPath,
    e.formatContext,
    e.context,
    e.treeContext,
    e.componentStack,
    e.isFallback
  );
}
function rn(n, e, l, r) {
  var t = e.formatContext, a = e.context, i = e.keyPath, u = e.treeContext, c = e.componentStack, f = e.blockedSegment;
  if (f === null)
    try {
      return $(n, e, l, r);
    } catch (v) {
      if (xe(), l = v === In ? nl() : v, typeof l == "object" && l !== null) {
        if (typeof l.then == "function") {
          r = Xn(), n = Bt(n, e, r).ping, l.then(n, n), e.formatContext = t, e.context = a, e.keyPath = i, e.treeContext = u, e.componentStack = c, En(a);
          return;
        }
        if (l.message === "Maximum call stack size exceeded") {
          l = Xn(), l = Bt(n, e, l), n.pingedTasks.push(l), e.formatContext = t, e.context = a, e.keyPath = i, e.treeContext = u, e.componentStack = c, En(a);
          return;
        }
      }
    }
  else {
    var s = f.children.length, d = f.chunks.length;
    try {
      return $(n, e, l, r);
    } catch (v) {
      if (xe(), f.children.length = s, f.chunks.length = d, l = v === In ? nl() : v, typeof l == "object" && l !== null) {
        if (typeof l.then == "function") {
          r = Xn(), n = Nt(n, e, r).ping, l.then(n, n), e.formatContext = t, e.context = a, e.keyPath = i, e.treeContext = u, e.componentStack = c, En(a);
          return;
        }
        if (l.message === "Maximum call stack size exceeded") {
          l = Xn(), l = Nt(n, e, l), n.pingedTasks.push(l), e.formatContext = t, e.context = a, e.keyPath = i, e.treeContext = u, e.componentStack = c, En(a);
          return;
        }
      }
    }
  }
  throw e.formatContext = t, e.context = a, e.keyPath = i, e.treeContext = u, En(a), l;
}
function Qc(n) {
  var e = n.blockedBoundary;
  n = n.blockedSegment, n !== null && (n.status = 3, jl(this, e, n));
}
function Ae(n, e, l, r, t, a) {
  for (var i = 0; i < l.length; i++) {
    var u = l[i];
    if (u.length === 4)
      Ae(
        n,
        e,
        u[2],
        u[3],
        t,
        a
      );
    else {
      u = u[5];
      var c = n, f = a, s = Se(
        c,
        /* @__PURE__ */ new Set(),
        null,
        null
      );
      s.parentFlushed = !0, s.rootSegmentID = u, s.status = 4, s.errorDigest = f, s.parentFlushed && c.clientRenderedBoundaries.push(s);
    }
  }
  if (l.length = 0, r !== null) {
    if (e === null) throw Error(b(487));
    if (e.status !== 4 && (e.status = 4, e.errorDigest = a, e.parentFlushed && n.clientRenderedBoundaries.push(e)), typeof r == "object") for (var d in r) delete r[d];
  }
}
function Ta(n, e, l) {
  var r = n.blockedBoundary, t = n.blockedSegment;
  if (t !== null) {
    if (t.status === 6) return;
    t.status = 3;
  }
  if (t = _n(n.componentStack), r === null) {
    if (e.status !== 13 && e.status !== 14) {
      if (r = n.replay, r === null) {
        m(e, l, t), Pe(e, l);
        return;
      }
      r.pendingTasks--, r.pendingTasks === 0 && 0 < r.nodes.length && (n = m(e, l, t), Ae(
        e,
        null,
        r.nodes,
        r.slots,
        l,
        n
      )), e.pendingRootTasks--, e.pendingRootTasks === 0 && vr(e);
    }
  } else
    r.pendingTasks--, r.status !== 4 && (r.status = 4, n = m(e, l, t), r.status = 4, r.errorDigest = n, sr(e, r), r.parentFlushed && e.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(a) {
      return Ta(a, e, l);
    }), r.fallbackAbortableTasks.clear();
  e.allPendingTasks--, e.allPendingTasks === 0 && tl(e);
}
function gr(n, e) {
  try {
    var l = n.renderState, r = l.onHeaders;
    if (r) {
      var t = l.headers;
      if (t) {
        l.headers = null;
        var a = t.preconnects;
        if (t.fontPreloads && (a && (a += ", "), a += t.fontPreloads), t.highImagePreloads && (a && (a += ", "), a += t.highImagePreloads), !e) {
          var i = l.styles.values(), u = i.next();
          n: for (; 0 < t.remainingCapacity && !u.done; u = i.next())
            for (var c = u.value.sheets.values(), f = c.next(); 0 < t.remainingCapacity && !f.done; f = c.next()) {
              var s = f.value, d = s.props, v = d.href, y = s.props, E = pe(y.href, "style", {
                crossOrigin: y.crossOrigin,
                integrity: y.integrity,
                nonce: y.nonce,
                type: y.type,
                fetchPriority: y.fetchPriority,
                referrerPolicy: y.referrerPolicy,
                media: y.media
              });
              if (0 <= (t.remainingCapacity -= E.length + 2))
                l.resets.style[v] = p, a && (a += ", "), a += E, l.resets.style[v] = typeof d.crossOrigin == "string" || typeof d.integrity == "string" ? [d.crossOrigin, d.integrity] : p;
              else break n;
            }
        }
        r(a ? { Link: a } : {});
      }
    }
  } catch (T) {
    m(n, T, {});
  }
}
function vr(n) {
  n.trackedPostpones === null && gr(n, !0), n.trackedPostpones === null && Oe(n), n.onShellError = Gn, n = n.onShellReady, n();
}
function tl(n) {
  gr(
    n,
    n.trackedPostpones === null ? !0 : n.completedRootSegment === null || n.completedRootSegment.status !== 5
  ), Oe(n), n = n.onAllReady, n();
}
function ke(n, e) {
  if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null && e.children[0].id === -1) {
    var l = e.children[0];
    l.id = e.id, l.parentFlushed = !0, l.status === 1 && ke(n, l);
  } else n.completedSegments.push(e);
}
function jl(n, e, l) {
  if (e === null) {
    if (l !== null && l.parentFlushed) {
      if (n.completedRootSegment !== null)
        throw Error(b(389));
      n.completedRootSegment = l;
    }
    n.pendingRootTasks--, n.pendingRootTasks === 0 && vr(n);
  } else
    e.pendingTasks--, e.status !== 4 && (e.pendingTasks === 0 ? (e.status === 0 && (e.status = 1), l !== null && l.parentFlushed && l.status === 1 && ke(e, l), e.parentFlushed && n.completedBoundaries.push(e), e.status === 1 && (e.fallbackAbortableTasks.forEach(Qc, n), e.fallbackAbortableTasks.clear(), n.pendingRootTasks === 0 && n.trackedPostpones === null && e.contentPreamble !== null && Oe(n))) : l !== null && l.parentFlushed && l.status === 1 && (ke(e, l), e.completedSegments.length === 1 && e.parentFlushed && n.partialBoundaries.push(e)));
  n.allPendingTasks--, n.allPendingTasks === 0 && tl(n);
}
function pl(n) {
  if (n.status !== 14 && n.status !== 13) {
    var e = On, l = Wn.H;
    Wn.H = Mt;
    var r = Wn.A;
    Wn.A = Gc;
    var t = _;
    _ = n;
    var a = me;
    me = n.resumableState;
    try {
      var i = n.pingedTasks, u;
      for (u = 0; u < i.length; u++) {
        var c = i[u], f = n, s = c.blockedSegment;
        if (s === null) {
          var d = f;
          if (c.replay.pendingTasks !== 0) {
            En(c.context);
            try {
              if (typeof c.replay.slots == "number" ? dr(
                d,
                c,
                c.replay.slots,
                c.node,
                c.childIndex
              ) : ml(d, c), c.replay.pendingTasks === 1 && 0 < c.replay.nodes.length)
                throw Error(b(488));
              c.replay.pendingTasks--, c.abortSet.delete(c), jl(d, c.blockedBoundary, null);
            } catch (Y) {
              xe();
              var v = Y === In ? nl() : Y;
              if (typeof v == "object" && v !== null && typeof v.then == "function") {
                var y = c.ping;
                v.then(y, y), c.thenableState = Xn();
              } else {
                c.replay.pendingTasks--, c.abortSet.delete(c);
                var E = _n(c.componentStack);
                f = void 0;
                var T = d, k = c.blockedBoundary, O = d.status === 12 ? d.fatalError : v, w = c.replay.nodes, z = c.replay.slots;
                f = m(
                  T,
                  O,
                  E
                ), Ae(
                  T,
                  k,
                  w,
                  z,
                  O,
                  f
                ), d.pendingRootTasks--, d.pendingRootTasks === 0 && vr(d), d.allPendingTasks--, d.allPendingTasks === 0 && tl(d);
              }
            } finally {
            }
          }
        } else if (d = void 0, T = s, T.status === 0) {
          T.status = 6, En(c.context);
          var F = T.children.length, Z = T.chunks.length;
          try {
            ml(f, c), T.lastPushedText && T.textEmbedded && T.chunks.push(hn), c.abortSet.delete(c), T.status = 1, jl(f, c.blockedBoundary, T);
          } catch (Y) {
            xe(), T.children.length = F, T.chunks.length = Z;
            var H = Y === In ? nl() : f.status === 12 ? f.fatalError : Y;
            if (typeof H == "object" && H !== null && typeof H.then == "function") {
              T.status = 0, c.thenableState = Xn();
              var sn = c.ping;
              H.then(sn, sn);
            } else {
              var tn = _n(c.componentStack);
              c.abortSet.delete(c), T.status = 4;
              var M = c.blockedBoundary;
              d = m(
                f,
                H,
                tn
              ), M === null ? Pe(f, H) : (M.pendingTasks--, M.status !== 4 && (M.status = 4, M.errorDigest = d, sr(f, M), M.parentFlushed && f.clientRenderedBoundaries.push(M), f.pendingRootTasks === 0 && f.trackedPostpones === null && M.contentPreamble !== null && Oe(f))), f.allPendingTasks--, f.allPendingTasks === 0 && tl(f);
            }
          } finally {
          }
        }
      }
      i.splice(0, u), n.destination !== null && hl(n, n.destination);
    } catch (Y) {
      m(n, Y, {}), Pe(n, Y);
    } finally {
      me = a, Wn.H = l, Wn.A = r, l === Mt && En(e), _ = t;
    }
  }
}
function zl(n, e, l) {
  e.preambleChildren.length && l.push(e.preambleChildren);
  for (var r = !1, t = 0; t < e.children.length; t++)
    r = Ra(
      n,
      e.children[t],
      l
    ) || r;
  return r;
}
function Ra(n, e, l) {
  var r = e.boundary;
  if (r === null)
    return zl(
      n,
      e,
      l
    );
  var t = r.contentPreamble, a = r.fallbackPreamble;
  if (t === null || a === null) return !1;
  switch (r.status) {
    case 1:
      if (bt(n.renderState, t), e = r.completedSegments[0], !e) throw Error(b(391));
      return zl(
        n,
        e,
        l
      );
    case 5:
      if (n.trackedPostpones !== null) return !0;
    case 4:
      if (e.status === 1)
        return bt(n.renderState, a), zl(
          n,
          e,
          l
        );
    default:
      return !0;
  }
}
function Oe(n) {
  if (n.completedRootSegment && n.completedPreambleSegments === null) {
    var e = [], l = Ra(
      n,
      n.completedRootSegment,
      e
    ), r = n.renderState.preamble;
    (l === !1 || r.headChunks && r.bodyChunks) && (n.completedPreambleSegments = e);
  }
}
function Je(n, e, l, r) {
  switch (l.parentFlushed = !0, l.status) {
    case 0:
      l.id = n.nextSegmentId++;
    case 5:
      return r = l.id, l.lastPushedText = !1, l.textEmbedded = !1, n = n.renderState, h(e, ti), h(e, n.placeholderPrefix), n = g(r.toString(16)), h(e, n), x(e, ai);
    case 1:
      l.status = 2;
      var t = !0, a = l.chunks, i = 0;
      l = l.children;
      for (var u = 0; u < l.length; u++) {
        for (t = l[u]; i < t.index; i++)
          h(e, a[i]);
        t = Fe(n, e, t, r);
      }
      for (; i < a.length - 1; i++)
        h(e, a[i]);
      return i < a.length && (t = x(e, a[i])), t;
    default:
      throw Error(b(390));
  }
}
function Fe(n, e, l, r) {
  var t = l.boundary;
  if (t === null)
    return Je(n, e, l, r);
  if (t.parentFlushed = !0, t.status === 4) {
    var a = t.errorDigest;
    return x(e, fi), h(e, hi), a && (h(e, di), h(e, g(R(a))), h(
      e,
      oi
    )), x(e, si), Je(n, e, l, r), (n = t.fallbackPreamble) && Et(e, n), x(e, Ge);
  }
  if (t.status !== 1)
    return t.status === 0 && (t.rootSegmentID = n.nextSegmentId++), 0 < t.completedSegments.length && n.partialBoundaries.push(t), yt(
      e,
      n.renderState,
      t.rootSegmentID
    ), r && (t = t.fallbackState, t.styles.forEach(Ct, r), t.stylesheets.forEach(
      xt,
      r
    )), Je(n, e, l, r), x(e, Ge);
  if (t.byteSize > n.progressiveChunkSize)
    return t.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(t), yt(
      e,
      n.renderState,
      t.rootSegmentID
    ), Je(n, e, l, r), x(e, Ge);
  if (r && (l = t.contentState, l.styles.forEach(Ct, r), l.stylesheets.forEach(xt, r)), x(e, ii), l = t.completedSegments, l.length !== 1) throw Error(b(391));
  return Fe(n, e, l[0], r), (n = t.contentPreamble) && Et(e, n), x(e, Ge);
}
function Hl(n, e, l, r) {
  return zi(
    e,
    n.renderState,
    l.parentFormatContext,
    l.id
  ), Fe(n, e, l, r), Hi(e, l.parentFormatContext);
}
function Dt(n, e, l) {
  for (var r = l.completedSegments, t = 0; t < r.length; t++)
    wa(
      n,
      e,
      l,
      r[t]
    );
  r.length = 0, ca(
    e,
    l.contentState,
    n.renderState
  ), r = n.resumableState, n = n.renderState, t = l.rootSegmentID, l = l.contentState;
  var a = n.stylesToHoist;
  return n.stylesToHoist = !1, h(e, n.startInlineScript), a ? (r.instructions & 2) === 0 ? (r.instructions |= 10, h(e, Ji)) : (r.instructions & 8) === 0 ? (r.instructions |= 8, h(e, Qi)) : h(e, Vi) : (r.instructions & 2) === 0 ? (r.instructions |= 2, h(e, Xi)) : h(e, Zi), r = g(t.toString(16)), h(e, n.boundaryPrefix), h(e, r), h(e, Ki), h(e, n.segmentPrefix), h(e, r), a ? (h(e, mi), Rc(e, l)) : h(e, qi), l = x(e, ji), ia(e, n) && l;
}
function wa(n, e, l, r) {
  if (r.status === 2) return !0;
  var t = l.contentState, a = r.id;
  if (a === -1) {
    if ((r.id = l.rootSegmentID) === -1)
      throw Error(b(392));
    return Hl(n, e, r, t);
  }
  return a === l.rootSegmentID ? Hl(n, e, r, t) : (Hl(n, e, r, t), l = n.resumableState, n = n.renderState, h(e, n.startInlineScript), (l.instructions & 1) === 0 ? (l.instructions |= 1, h(e, Wi)) : h(e, Ui), h(e, n.segmentPrefix), a = g(a.toString(16)), h(e, a), h(e, Yi), h(e, n.placeholderPrefix), h(e, a), e = x(e, Gi), e);
}
function hl(n, e) {
  Q = new Uint8Array(2048), V = 0;
  try {
    if (!(0 < n.pendingRootTasks)) {
      var l, r = n.completedRootSegment;
      if (r !== null) {
        if (r.status === 5) return;
        var t = n.completedPreambleSegments;
        if (t === null) return;
        var a = n.renderState, i = a.preamble, u = i.htmlChunks, c = i.headChunks, f;
        if (u) {
          for (f = 0; f < u.length; f++)
            h(e, u[f]);
          if (c)
            for (f = 0; f < c.length; f++)
              h(e, c[f]);
          else
            h(e, A("head")), h(e, N);
        } else if (c)
          for (f = 0; f < c.length; f++)
            h(e, c[f]);
        var s = a.charsetChunks;
        for (f = 0; f < s.length; f++)
          h(e, s[f]);
        s.length = 0, a.preconnects.forEach(ln, e), a.preconnects.clear();
        var d = a.viewportChunks;
        for (f = 0; f < d.length; f++)
          h(e, d[f]);
        d.length = 0, a.fontPreloads.forEach(ln, e), a.fontPreloads.clear(), a.highImagePreloads.forEach(ln, e), a.highImagePreloads.clear(), a.styles.forEach(yc, e);
        var v = a.importMapChunks;
        for (f = 0; f < v.length; f++)
          h(e, v[f]);
        v.length = 0, a.bootstrapScripts.forEach(ln, e), a.scripts.forEach(ln, e), a.scripts.clear(), a.bulkPreloads.forEach(ln, e), a.bulkPreloads.clear();
        var y = a.hoistableChunks;
        for (f = 0; f < y.length; f++)
          h(e, y[f]);
        for (a = y.length = 0; a < t.length; a++) {
          var E = t[a];
          for (i = 0; i < E.length; i++)
            Fe(n, e, E[i], null);
        }
        var T = n.renderState.preamble, k = T.headChunks;
        (T.htmlChunks || k) && h(e, Mn("head"));
        var O = T.bodyChunks;
        if (O)
          for (t = 0; t < O.length; t++)
            h(e, O[t]);
        Fe(n, e, r, null), n.completedRootSegment = null, ia(e, n.renderState);
      }
      var w = n.renderState;
      r = 0;
      var z = w.viewportChunks;
      for (r = 0; r < z.length; r++)
        h(e, z[r]);
      z.length = 0, w.preconnects.forEach(ln, e), w.preconnects.clear(), w.fontPreloads.forEach(ln, e), w.fontPreloads.clear(), w.highImagePreloads.forEach(
        ln,
        e
      ), w.highImagePreloads.clear(), w.styles.forEach(Tc, e), w.scripts.forEach(ln, e), w.scripts.clear(), w.bulkPreloads.forEach(ln, e), w.bulkPreloads.clear();
      var F = w.hoistableChunks;
      for (r = 0; r < F.length; r++)
        h(e, F[r]);
      F.length = 0;
      var Z = n.clientRenderedBoundaries;
      for (l = 0; l < Z.length; l++) {
        var H = Z[l];
        w = e;
        var sn = n.resumableState, tn = n.renderState, M = H.rootSegmentID, Y = H.errorDigest;
        h(
          w,
          tn.startInlineScript
        ), (sn.instructions & 4) === 0 ? (sn.instructions |= 4, h(w, pi)) : h(w, $i), h(w, tn.boundaryPrefix), h(w, g(M.toString(16))), h(w, nc), Y && (h(
          w,
          ec
        ), h(
          w,
          g(
            tc(Y || "")
          )
        ));
        var q = x(
          w,
          lc
        );
        if (!q) {
          n.destination = null, l++, Z.splice(0, l);
          return;
        }
      }
      Z.splice(0, l);
      var W = n.completedBoundaries;
      for (l = 0; l < W.length; l++)
        if (!Dt(n, e, W[l])) {
          n.destination = null, l++, W.splice(0, l);
          return;
        }
      W.splice(0, l), Ol(e), Q = new Uint8Array(2048), V = 0;
      var gn = n.partialBoundaries;
      for (l = 0; l < gn.length; l++) {
        var an = gn[l];
        n: {
          Z = n, H = e;
          var cn = an.completedSegments;
          for (q = 0; q < cn.length; q++)
            if (!wa(
              Z,
              H,
              an,
              cn[q]
            )) {
              q++, cn.splice(0, q);
              var vn = !1;
              break n;
            }
          cn.splice(0, q), vn = ca(
            H,
            an.contentState,
            Z.renderState
          );
        }
        if (!vn) {
          n.destination = null, l++, gn.splice(0, l);
          return;
        }
      }
      gn.splice(0, l);
      var wn = n.completedBoundaries;
      for (l = 0; l < wn.length; l++)
        if (!Dt(n, e, wn[l])) {
          n.destination = null, l++, wn.splice(0, l);
          return;
        }
      wn.splice(0, l);
    }
  } finally {
    n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 ? (n.flushScheduled = !1, l = n.resumableState, l.hasBody && h(e, Mn("body")), l.hasHtml && h(e, Mn("html")), Ol(e), n.status = 14, e.close(), n.destination = null) : Ol(e);
  }
}
function Ca(n) {
  n.flushScheduled = n.destination !== null, Qt(function() {
    return pl(n);
  }), tr(function() {
    n.status === 10 && (n.status = 11), n.trackedPostpones === null && gr(n, n.pendingRootTasks === 0);
  });
}
function Ln(n) {
  n.flushScheduled === !1 && n.pingedTasks.length === 0 && n.destination !== null && (n.flushScheduled = !0, tr(function() {
    var e = n.destination;
    e ? hl(n, e) : n.flushScheduled = !1;
  }));
}
function xa(n, e) {
  if (n.status === 13)
    n.status = 14, Kt(e, n.fatalError);
  else if (n.status !== 14 && n.destination === null) {
    n.destination = e;
    try {
      hl(n, e);
    } catch (l) {
      m(n, l, {}), Pe(n, l);
    }
  }
}
function Vn(n, e) {
  (n.status === 11 || n.status === 10) && (n.status = 12);
  try {
    var l = n.abortableTasks;
    if (0 < l.size) {
      var r = e === void 0 ? Error(b(432)) : typeof e == "object" && e !== null && typeof e.then == "function" ? Error(b(530)) : e;
      n.fatalError = r, l.forEach(function(t) {
        return Ta(t, n, r);
      }), l.clear();
    }
    n.destination !== null && hl(n, n.destination);
  } catch (t) {
    m(n, t, {}), Pe(n, t);
  }
}
function Sa() {
  var n = nr.version;
  if (n !== "19.1.0")
    throw Error(
      b(
        527,
        n,
        "19.1.0"
      )
    );
}
Sa();
Sa();
var mc = $l.prerender = function(n, e) {
  return new Promise(function(l, r) {
    var t = e ? e.onHeaders : void 0, a;
    t && (a = function(s) {
      t(new Headers(s));
    });
    var i = pt(
      e ? e.identifierPrefix : void 0,
      e ? e.unstable_externalRuntimeSrc : void 0,
      e ? e.bootstrapScriptContent : void 0,
      e ? e.bootstrapScripts : void 0,
      e ? e.bootstrapModules : void 0
    ), u = Jc(
      n,
      i,
      jt(
        i,
        void 0,
        e ? e.unstable_externalRuntimeSrc : void 0,
        e ? e.importMap : void 0,
        a,
        e ? e.maxHeadersLength : void 0
      ),
      $t(e ? e.namespaceURI : void 0),
      e ? e.progressiveChunkSize : void 0,
      e ? e.onError : void 0,
      function() {
        var s = {
          prelude: new ReadableStream(
            {
              type: "bytes",
              pull: function(d) {
                xa(u, d);
              },
              cancel: function(d) {
                u.destination = null, Vn(u, d);
              }
            },
            { highWaterMark: 0 }
          )
        };
        l(s);
      },
      void 0,
      void 0,
      r,
      e ? e.onPostpone : void 0
    );
    if (e && e.signal) {
      var c = e.signal;
      if (c.aborted) Vn(u, c.reason);
      else {
        var f = function() {
          Vn(u, c.reason), c.removeEventListener("abort", f);
        };
        c.addEventListener("abort", f);
      }
    }
    Ca(u);
  });
}, qc = $l.renderToReadableStream = function(n, e) {
  return new Promise(function(l, r) {
    var t, a, i = new Promise(function(y, E) {
      a = y, t = E;
    }), u = e ? e.onHeaders : void 0, c;
    u && (c = function(y) {
      u(new Headers(y));
    });
    var f = pt(
      e ? e.identifierPrefix : void 0,
      e ? e.unstable_externalRuntimeSrc : void 0,
      e ? e.bootstrapScriptContent : void 0,
      e ? e.bootstrapScripts : void 0,
      e ? e.bootstrapModules : void 0
    ), s = ba(
      n,
      f,
      jt(
        f,
        e ? e.nonce : void 0,
        e ? e.unstable_externalRuntimeSrc : void 0,
        e ? e.importMap : void 0,
        c,
        e ? e.maxHeadersLength : void 0
      ),
      $t(e ? e.namespaceURI : void 0),
      e ? e.progressiveChunkSize : void 0,
      e ? e.onError : void 0,
      a,
      function() {
        var y = new ReadableStream(
          {
            type: "bytes",
            pull: function(E) {
              xa(s, E);
            },
            cancel: function(E) {
              s.destination = null, Vn(s, E);
            }
          },
          { highWaterMark: 0 }
        );
        y.allReady = i, l(y);
      },
      function(y) {
        i.catch(function() {
        }), r(y);
      },
      t,
      e ? e.onPostpone : void 0,
      e ? e.formState : void 0
    );
    if (e && e.signal) {
      var d = e.signal;
      if (d.aborted) Vn(s, d.reason);
      else {
        var v = function() {
          Vn(s, d.reason), d.removeEventListener("abort", v);
        };
        d.addEventListener("abort", v);
      }
    }
    Ca(s);
  });
}, jc = $l.version = "19.1.0";
export {
  $l as default,
  mc as prerender,
  qc as renderToReadableStream,
  jc as version
};
