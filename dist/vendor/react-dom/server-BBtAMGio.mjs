import Wr from "react";
import Ur from "react-dom";
var Ne = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar = Wr, Yr = Ur;
function d(n) {
  var l = "https://react.dev/errors/" + n;
  if (1 < arguments.length) {
    l += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var e = 2; e < arguments.length; e++)
      l += "&args[]=" + encodeURIComponent(arguments[e]);
  }
  return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ur = Symbol.for("react.transitional.element"), fr = Symbol.for("react.portal"), cr = Symbol.for("react.fragment"), hr = Symbol.for("react.strict_mode"), or = Symbol.for("react.profiler"), Gr = Symbol.for("react.provider"), sr = Symbol.for("react.consumer"), ml = Symbol.for("react.context"), ze = Symbol.for("react.forward_ref"), ql = Symbol.for("react.suspense"), He = Symbol.for("react.suspense_list"), Be = Symbol.for("react.memo"), pl = Symbol.for("react.lazy"), Xr = Symbol.for("react.scope"), dr = Symbol.for("react.activity"), Zr = Symbol.for("react.legacy_hidden"), Jr = Symbol.for("react.memo_cache_sentinel"), Qr = Symbol.for("react.view_transition"), _t = Symbol.iterator, Fe = Array.isArray;
function Ot(n, l) {
  var e = n.length & 3, t = n.length - e, r = l;
  for (l = 0; l < t; ) {
    var i = n.charCodeAt(l) & 255 | (n.charCodeAt(++l) & 255) << 8 | (n.charCodeAt(++l) & 255) << 16 | (n.charCodeAt(++l) & 255) << 24;
    ++l, i = 3432918353 * (i & 65535) + ((3432918353 * (i >>> 16) & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = 461845907 * (i & 65535) + ((461845907 * (i >>> 16) & 65535) << 16) & 4294967295, r ^= i, r = r << 13 | r >>> 19, r = 5 * (r & 65535) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295, r = (r & 65535) + 27492 + (((r >>> 16) + 58964 & 65535) << 16);
  }
  switch (i = 0, e) {
    case 3:
      i ^= (n.charCodeAt(l + 2) & 255) << 16;
    case 2:
      i ^= (n.charCodeAt(l + 1) & 255) << 8;
    case 1:
      i ^= n.charCodeAt(l) & 255, i = 3432918353 * (i & 65535) + ((3432918353 * (i >>> 16) & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, r ^= 461845907 * (i & 65535) + ((461845907 * (i >>> 16) & 65535) << 16) & 4294967295;
  }
  return r ^= n.length, r ^= r >>> 16, r = 2246822507 * (r & 65535) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 13, r = 3266489909 * (r & 65535) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, (r ^ r >>> 16) >>> 0;
}
var W = Object.assign, k = Object.prototype.hasOwnProperty, Kr = RegExp(
  "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
), Mt = {}, It = {};
function We(n) {
  return k.call(It, n) ? !0 : k.call(Mt, n) ? !1 : Kr.test(n) ? It[n] = !0 : (Mt[n] = !0, !1);
}
var Vr = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
), mr = /* @__PURE__ */ new Map([
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
]), qr = /["'&<>]/;
function E(n) {
  if (typeof n == "boolean" || typeof n == "number" || typeof n == "bigint")
    return "" + n;
  n = "" + n;
  var l = qr.exec(n);
  if (l) {
    var e = "", t, r = 0;
    for (t = l.index; t < n.length; t++) {
      switch (n.charCodeAt(t)) {
        case 34:
          l = "&quot;";
          break;
        case 38:
          l = "&amp;";
          break;
        case 39:
          l = "&#x27;";
          break;
        case 60:
          l = "&lt;";
          break;
        case 62:
          l = "&gt;";
          break;
        default:
          continue;
      }
      r !== t && (e += n.slice(r, t)), r = t + 1, e += l;
    }
    n = r !== t ? e + n.slice(r, t) : e;
  }
  return n;
}
var pr = /([A-Z])/g, jr = /^ms-/, $r = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function fl(n) {
  return $r.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
}
var On = ar.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, gr = Yr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ni = {
  pending: !1,
  data: null,
  method: null,
  action: null
}, nn = gr.d;
gr.d = {
  f: nn.f,
  r: nn.r,
  D: Ei,
  C: Ti,
  L: Ri,
  m: wi,
  X: Ci,
  S: xi,
  M: Pi
};
var Z = [], vr = /(<\/|<)(s)(cript)/gi;
function br(n, l, e, t) {
  return "" + l + (e === "s" ? "\\u0073" : "\\u0053") + t;
}
function li(n, l, e, t, r) {
  return {
    idPrefix: n === void 0 ? "" : n,
    nextFormID: 0,
    streamingFormat: 0,
    bootstrapScriptContent: e,
    bootstrapScripts: t,
    bootstrapModules: r,
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
function cl() {
  return {
    htmlChunks: null,
    headChunks: null,
    bodyChunks: null,
    contribution: 0
  };
}
function B(n, l, e) {
  return {
    insertionMode: n,
    selectedValue: l,
    tagScope: e
  };
}
function St(n, l, e) {
  switch (l) {
    case "noscript":
      return B(2, null, n.tagScope | 1);
    case "select":
      return B(
        2,
        e.value != null ? e.value : e.defaultValue,
        n.tagScope
      );
    case "svg":
      return B(4, null, n.tagScope);
    case "picture":
      return B(2, null, n.tagScope | 2);
    case "math":
      return B(5, null, n.tagScope);
    case "foreignObject":
      return B(2, null, n.tagScope);
    case "table":
      return B(6, null, n.tagScope);
    case "thead":
    case "tbody":
    case "tfoot":
      return B(7, null, n.tagScope);
    case "colgroup":
      return B(9, null, n.tagScope);
    case "tr":
      return B(8, null, n.tagScope);
    case "head":
      if (2 > n.insertionMode)
        return B(3, null, n.tagScope);
      break;
    case "html":
      if (n.insertionMode === 0)
        return B(1, null, n.tagScope);
  }
  return 6 <= n.insertionMode || 2 > n.insertionMode ? B(2, null, n.tagScope) : n;
}
var Dt = /* @__PURE__ */ new Map();
function yr(n, l) {
  if (typeof l != "object") throw Error(d(62));
  var e = !0, t;
  for (t in l)
    if (k.call(l, t)) {
      var r = l[t];
      if (r != null && typeof r != "boolean" && r !== "") {
        if (t.indexOf("--") === 0) {
          var i = E(t);
          r = E(("" + r).trim());
        } else
          i = Dt.get(t), i === void 0 && (i = E(
            t.replace(pr, "-$1").toLowerCase().replace(jr, "-ms-")
          ), Dt.set(t, i)), r = typeof r == "number" ? r === 0 || Vr.has(t) ? "" + r : r + "px" : E(("" + r).trim());
        e ? (e = !1, n.push(' style="', i, ":", r)) : n.push(";", i, ":", r);
      }
    }
  e || n.push('"');
}
function ke(n, l, e) {
  e && typeof e != "function" && typeof e != "symbol" && n.push(" ", l, '=""');
}
function L(n, l, e) {
  typeof e != "function" && typeof e != "symbol" && typeof e != "boolean" && n.push(" ", l, '="', E(e), '"');
}
var Er = E(
  "javascript:throw new Error('React form unexpectedly submitted.')"
);
function Te(n, l) {
  this.push('<input type="hidden"'), Tr(n), L(this, "name", l), L(this, "value", n), this.push("/>");
}
function Tr(n) {
  if (typeof n != "string") throw Error(d(480));
}
function Rr(n, l) {
  if (typeof l.$$FORM_ACTION == "function") {
    var e = n.nextFormID++;
    n = n.idPrefix + e;
    try {
      var t = l.$$FORM_ACTION(n);
      if (t) {
        var r = t.data;
        r?.forEach(Tr);
      }
      return t;
    } catch (i) {
      if (typeof i == "object" && i !== null && typeof i.then == "function")
        throw i;
    }
  }
  return null;
}
function Lt(n, l, e, t, r, i, a, c) {
  var u = null;
  if (typeof t == "function") {
    var f = Rr(l, t);
    f !== null ? (c = f.name, t = f.action || "", r = f.encType, i = f.method, a = f.target, u = f.data) : (n.push(" ", "formAction", '="', Er, '"'), a = i = r = t = c = null, wr(l, e));
  }
  return c != null && R(n, "name", c), t != null && R(n, "formAction", t), r != null && R(n, "formEncType", r), i != null && R(n, "formMethod", i), a != null && R(n, "formTarget", a), u;
}
function R(n, l, e) {
  switch (l) {
    case "className":
      L(n, "class", e);
      break;
    case "tabIndex":
      L(n, "tabindex", e);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      L(n, l, e);
      break;
    case "style":
      yr(n, e);
      break;
    case "src":
    case "href":
      if (e === "") break;
    case "action":
    case "formAction":
      if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean")
        break;
      e = fl("" + e), n.push(" ", l, '="', E(e), '"');
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
      ke(n, l.toLowerCase(), e);
      break;
    case "xlinkHref":
      if (typeof e == "function" || typeof e == "symbol" || typeof e == "boolean")
        break;
      e = fl("" + e), n.push(" ", "xlink:href", '="', E(e), '"');
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      typeof e != "function" && typeof e != "symbol" && n.push(" ", l, '="', E(e), '"');
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
      e && typeof e != "function" && typeof e != "symbol" && n.push(" ", l, '=""');
      break;
    case "capture":
    case "download":
      e === !0 ? n.push(" ", l, '=""') : e !== !1 && typeof e != "function" && typeof e != "symbol" && n.push(" ", l, '="', E(e), '"');
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e && n.push(" ", l, '="', E(e), '"');
      break;
    case "rowSpan":
    case "start":
      typeof e == "function" || typeof e == "symbol" || isNaN(e) || n.push(" ", l, '="', E(e), '"');
      break;
    case "xlinkActuate":
      L(n, "xlink:actuate", e);
      break;
    case "xlinkArcrole":
      L(n, "xlink:arcrole", e);
      break;
    case "xlinkRole":
      L(n, "xlink:role", e);
      break;
    case "xlinkShow":
      L(n, "xlink:show", e);
      break;
    case "xlinkTitle":
      L(n, "xlink:title", e);
      break;
    case "xlinkType":
      L(n, "xlink:type", e);
      break;
    case "xmlBase":
      L(n, "xml:base", e);
      break;
    case "xmlLang":
      L(n, "xml:lang", e);
      break;
    case "xmlSpace":
      L(n, "xml:space", e);
      break;
    default:
      if ((!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = mr.get(l) || l, We(l))) {
        switch (typeof e) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            var t = l.toLowerCase().slice(0, 5);
            if (t !== "data-" && t !== "aria-") return;
        }
        n.push(" ", l, '="', E(e), '"');
      }
  }
}
function G(n, l, e) {
  if (l != null) {
    if (e != null) throw Error(d(60));
    if (typeof l != "object" || !("__html" in l))
      throw Error(d(61));
    l = l.__html, l != null && n.push("" + l);
  }
}
function ei(n) {
  var l = "";
  return ar.Children.forEach(n, function(e) {
    e != null && (l += e);
  }), l;
}
function wr(n, l) {
  (n.instructions & 16) === 0 && (n.instructions |= 16, l.bootstrapChunks.unshift(
    l.startInlineScript,
    `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,
    "<\/script>"
  ));
}
function N(n, l) {
  n.push(O("link"));
  for (var e in l)
    if (k.call(l, e)) {
      var t = l[e];
      if (t != null)
        switch (e) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(d(399, "link"));
          default:
            R(n, e, t);
        }
    }
  return n.push("/>"), null;
}
var Nt = /(<\/|<)(s)(tyle)/gi;
function zt(n, l, e, t) {
  return "" + l + (e === "s" ? "\\73 " : "\\53 ") + t;
}
function Mn(n, l, e) {
  n.push(O(e));
  for (var t in l)
    if (k.call(l, t)) {
      var r = l[t];
      if (r != null)
        switch (t) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(d(399, e));
          default:
            R(n, t, r);
        }
    }
  return n.push("/>"), null;
}
function Ht(n, l) {
  n.push(O("title"));
  var e = null, t = null, r;
  for (r in l)
    if (k.call(l, r)) {
      var i = l[r];
      if (i != null)
        switch (r) {
          case "children":
            e = i;
            break;
          case "dangerouslySetInnerHTML":
            t = i;
            break;
          default:
            R(n, r, i);
        }
    }
  return n.push(">"), l = Array.isArray(e) ? 2 > e.length ? e[0] : null : e, typeof l != "function" && typeof l != "symbol" && l !== null && l !== void 0 && n.push(E("" + l)), G(n, t, e), n.push(Tn("title")), null;
}
function Ul(n, l) {
  n.push(O("script"));
  var e = null, t = null, r;
  for (r in l)
    if (k.call(l, r)) {
      var i = l[r];
      if (i != null)
        switch (r) {
          case "children":
            e = i;
            break;
          case "dangerouslySetInnerHTML":
            t = i;
            break;
          default:
            R(n, r, i);
        }
    }
  return n.push(">"), G(n, t, e), typeof e == "string" && n.push(("" + e).replace(vr, br)), n.push(Tn("script")), null;
}
function Re(n, l, e) {
  n.push(O(e));
  var t = e = null, r;
  for (r in l)
    if (k.call(l, r)) {
      var i = l[r];
      if (i != null)
        switch (r) {
          case "children":
            e = i;
            break;
          case "dangerouslySetInnerHTML":
            t = i;
            break;
          default:
            R(n, r, i);
        }
    }
  return n.push(">"), G(n, t, e), e;
}
function Sl(n, l, e) {
  n.push(O(e));
  var t = e = null, r;
  for (r in l)
    if (k.call(l, r)) {
      var i = l[r];
      if (i != null)
        switch (r) {
          case "children":
            e = i;
            break;
          case "dangerouslySetInnerHTML":
            t = i;
            break;
          default:
            R(n, r, i);
        }
    }
  return n.push(">"), G(n, t, e), typeof e == "string" ? (n.push(E(e)), null) : e;
}
var ti = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Bt = /* @__PURE__ */ new Map();
function O(n) {
  var l = Bt.get(n);
  if (l === void 0) {
    if (!ti.test(n))
      throw Error(d(65, n));
    l = "<" + n, Bt.set(n, l);
  }
  return l;
}
function ri(n, l, e, t, r, i, a, c, u, f) {
  switch (l) {
    case "div":
    case "span":
    case "svg":
    case "path":
      break;
    case "a":
      n.push(O("a"));
      var o = null, h = null, s;
      for (s in e)
        if (k.call(e, s)) {
          var v = e[s];
          if (v != null)
            switch (s) {
              case "children":
                o = v;
                break;
              case "dangerouslySetInnerHTML":
                h = v;
                break;
              case "href":
                v === "" ? L(n, "href", "") : R(n, s, v);
                break;
              default:
                R(n, s, v);
            }
        }
      if (n.push(">"), G(n, h, o), typeof o == "string") {
        n.push(E(o));
        var b = null;
      } else b = o;
      return b;
    case "g":
    case "p":
    case "li":
      break;
    case "select":
      n.push(O("select"));
      var y = null, C = null, P;
      for (P in e)
        if (k.call(e, P)) {
          var w = e[P];
          if (w != null)
            switch (P) {
              case "children":
                y = w;
                break;
              case "dangerouslySetInnerHTML":
                C = w;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                R(
                  n,
                  P,
                  w
                );
            }
        }
      return n.push(">"), G(n, C, y), y;
    case "option":
      var F = c.selectedValue;
      n.push(O("option"));
      var g = null, A = null, T = null, S = null, U;
      for (U in e)
        if (k.call(e, U)) {
          var _ = e[U];
          if (_ != null)
            switch (U) {
              case "children":
                g = _;
                break;
              case "selected":
                T = _;
                break;
              case "dangerouslySetInnerHTML":
                S = _;
                break;
              case "value":
                A = _;
              default:
                R(
                  n,
                  U,
                  _
                );
            }
        }
      if (F != null) {
        var z = A !== null ? "" + A : ei(g);
        if (Fe(F)) {
          for (var Hn = 0; Hn < F.length; Hn++)
            if ("" + F[Hn] === z) {
              n.push(' selected=""');
              break;
            }
        } else
          "" + F === z && n.push(' selected=""');
      } else T && n.push(' selected=""');
      return n.push(">"), G(n, S, g), g;
    case "textarea":
      n.push(O("textarea"));
      var Y = null, Bn = null, en = null, H;
      for (H in e)
        if (k.call(e, H)) {
          var q = e[H];
          if (q != null)
            switch (H) {
              case "children":
                en = q;
                break;
              case "value":
                Y = q;
                break;
              case "defaultValue":
                Bn = q;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(d(91));
              default:
                R(
                  n,
                  H,
                  q
                );
            }
        }
      if (Y === null && Bn !== null && (Y = Bn), n.push(">"), en != null) {
        if (Y != null) throw Error(d(92));
        if (Fe(en)) {
          if (1 < en.length)
            throw Error(d(93));
          Y = "" + en[0];
        }
        Y = "" + en;
      }
      return typeof Y == "string" && Y[0] === `
` && n.push(`
`), Y !== null && n.push(E("" + Y)), null;
    case "input":
      n.push(O("input"));
      var p = null, Cn = null, cn = null, Wn = null, hn = null, le = null, ee = null, te = null, re = null, Un;
      for (Un in e)
        if (k.call(e, Un)) {
          var Q = e[Un];
          if (Q != null)
            switch (Un) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(399, "input"));
              case "name":
                p = Q;
                break;
              case "formAction":
                Cn = Q;
                break;
              case "formEncType":
                cn = Q;
                break;
              case "formMethod":
                Wn = Q;
                break;
              case "formTarget":
                hn = Q;
                break;
              case "defaultChecked":
                re = Q;
                break;
              case "defaultValue":
                ee = Q;
                break;
              case "checked":
                te = Q;
                break;
              case "value":
                le = Q;
                break;
              default:
                R(
                  n,
                  Un,
                  Q
                );
            }
        }
      var qe = Lt(
        n,
        t,
        r,
        Cn,
        cn,
        Wn,
        hn,
        p
      );
      return te !== null ? ke(n, "checked", te) : re !== null && ke(n, "checked", re), le !== null ? R(n, "value", le) : ee !== null && R(n, "value", ee), n.push("/>"), qe?.forEach(Te, n), null;
    case "button":
      n.push(O("button"));
      var Yn = null, pe = null, je = null, $e = null, nt = null, lt = null, et = null, Gn;
      for (Gn in e)
        if (k.call(e, Gn)) {
          var j = e[Gn];
          if (j != null)
            switch (Gn) {
              case "children":
                Yn = j;
                break;
              case "dangerouslySetInnerHTML":
                pe = j;
                break;
              case "name":
                je = j;
                break;
              case "formAction":
                $e = j;
                break;
              case "formEncType":
                nt = j;
                break;
              case "formMethod":
                lt = j;
                break;
              case "formTarget":
                et = j;
                break;
              default:
                R(
                  n,
                  Gn,
                  j
                );
            }
        }
      var tt = Lt(
        n,
        t,
        r,
        $e,
        nt,
        lt,
        et,
        je
      );
      if (n.push(">"), tt?.forEach(Te, n), G(n, pe, Yn), typeof Yn == "string") {
        n.push(E(Yn));
        var rt = null;
      } else rt = Yn;
      return rt;
    case "form":
      n.push(O("form"));
      var Xn = null, it = null, on = null, Zn = null, Jn = null, Qn = null, Kn;
      for (Kn in e)
        if (k.call(e, Kn)) {
          var tn = e[Kn];
          if (tn != null)
            switch (Kn) {
              case "children":
                Xn = tn;
                break;
              case "dangerouslySetInnerHTML":
                it = tn;
                break;
              case "action":
                on = tn;
                break;
              case "encType":
                Zn = tn;
                break;
              case "method":
                Jn = tn;
                break;
              case "target":
                Qn = tn;
                break;
              default:
                R(
                  n,
                  Kn,
                  tn
                );
            }
        }
      var ie = null, ae = null;
      if (typeof on == "function") {
        var sn = Rr(
          t,
          on
        );
        sn !== null ? (on = sn.action || "", Zn = sn.encType, Jn = sn.method, Qn = sn.target, ie = sn.data, ae = sn.name) : (n.push(
          " ",
          "action",
          '="',
          Er,
          '"'
        ), Qn = Jn = Zn = on = null, wr(t, r));
      }
      if (on != null && R(n, "action", on), Zn != null && R(n, "encType", Zn), Jn != null && R(n, "method", Jn), Qn != null && R(n, "target", Qn), n.push(">"), ae !== null && (n.push('<input type="hidden"'), L(n, "name", ae), n.push("/>"), ie?.forEach(Te, n)), G(n, it, Xn), typeof Xn == "string") {
        n.push(E(Xn));
        var at = null;
      } else at = Xn;
      return at;
    case "menuitem":
      n.push(O("menuitem"));
      for (var wl in e)
        if (k.call(e, wl)) {
          var ut = e[wl];
          if (ut != null)
            switch (wl) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(400));
              default:
                R(
                  n,
                  wl,
                  ut
                );
            }
        }
      return n.push(">"), null;
    case "object":
      n.push(O("object"));
      var Vn = null, ft = null, mn;
      for (mn in e)
        if (k.call(e, mn)) {
          var qn = e[mn];
          if (qn != null)
            switch (mn) {
              case "children":
                Vn = qn;
                break;
              case "dangerouslySetInnerHTML":
                ft = qn;
                break;
              case "data":
                var ct = fl("" + qn);
                if (ct === "") break;
                n.push(
                  " ",
                  "data",
                  '="',
                  E(ct),
                  '"'
                );
                break;
              default:
                R(
                  n,
                  mn,
                  qn
                );
            }
        }
      if (n.push(">"), G(n, ft, Vn), typeof Vn == "string") {
        n.push(E(Vn));
        var ht = null;
      } else ht = Vn;
      return ht;
    case "title":
      if (c.insertionMode === 4 || c.tagScope & 1 || e.itemProp != null)
        var ue = Ht(
          n,
          e
        );
      else
        f ? ue = null : (Ht(r.hoistableChunks, e), ue = void 0);
      return ue;
    case "link":
      var Br = e.rel, rn = e.href, xl = e.precedence;
      if (c.insertionMode === 4 || c.tagScope & 1 || e.itemProp != null || typeof Br != "string" || typeof rn != "string" || rn === "") {
        N(n, e);
        var pn = null;
      } else if (e.rel === "stylesheet")
        if (typeof xl != "string" || e.disabled != null || e.onLoad || e.onError)
          pn = N(
            n,
            e
          );
        else {
          var Pn = r.styles.get(xl), Cl = t.styleResources.hasOwnProperty(rn) ? t.styleResources[rn] : void 0;
          if (Cl !== null) {
            t.styleResources[rn] = null, Pn || (Pn = {
              precedence: E(xl),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, r.styles.set(xl, Pn));
            var Pl = {
              state: 0,
              props: W({}, e, {
                "data-precedence": e.precedence,
                precedence: null
              })
            };
            if (Cl) {
              Cl.length === 2 && hl(Pl.props, Cl);
              var fe = r.preloads.stylesheets.get(rn);
              fe && 0 < fe.length ? fe.length = 0 : Pl.state = 1;
            }
            Pn.sheets.set(rn, Pl), a && a.stylesheets.add(Pl);
          } else if (Pn) {
            var ot = Pn.sheets.get(rn);
            ot && a && a.stylesheets.add(ot);
          }
          u && n.push("<!-- -->"), pn = null;
        }
      else
        e.onLoad || e.onError ? pn = N(
          n,
          e
        ) : (u && n.push("<!-- -->"), pn = f ? null : N(r.hoistableChunks, e));
      return pn;
    case "script":
      var ce = e.async;
      if (typeof e.src != "string" || !e.src || !ce || typeof ce == "function" || typeof ce == "symbol" || e.onLoad || e.onError || c.insertionMode === 4 || c.tagScope & 1 || e.itemProp != null)
        var st = Ul(
          n,
          e
        );
      else {
        var Fl = e.src;
        if (e.type === "module")
          var kl = t.moduleScriptResources, dt = r.preloads.moduleScripts;
        else
          kl = t.scriptResources, dt = r.preloads.scripts;
        var Al = kl.hasOwnProperty(Fl) ? kl[Fl] : void 0;
        if (Al !== null) {
          kl[Fl] = null;
          var he = e;
          if (Al) {
            Al.length === 2 && (he = W({}, e), hl(he, Al));
            var gt = dt.get(Fl);
            gt && (gt.length = 0);
          }
          var vt = [];
          r.scripts.add(vt), Ul(vt, he);
        }
        u && n.push("<!-- -->"), st = null;
      }
      return st;
    case "style":
      var _l = e.precedence, dn = e.href;
      if (c.insertionMode === 4 || c.tagScope & 1 || e.itemProp != null || typeof _l != "string" || typeof dn != "string" || dn === "") {
        n.push(O("style"));
        var Fn = null, bt = null, jn;
        for (jn in e)
          if (k.call(e, jn)) {
            var Ol = e[jn];
            if (Ol != null)
              switch (jn) {
                case "children":
                  Fn = Ol;
                  break;
                case "dangerouslySetInnerHTML":
                  bt = Ol;
                  break;
                default:
                  R(
                    n,
                    jn,
                    Ol
                  );
              }
          }
        n.push(">");
        var $n = Array.isArray(Fn) ? 2 > Fn.length ? Fn[0] : null : Fn;
        typeof $n != "function" && typeof $n != "symbol" && $n !== null && $n !== void 0 && n.push(("" + $n).replace(Nt, zt)), G(n, bt, Fn), n.push(Tn("style"));
        var yt = null;
      } else {
        var gn = r.styles.get(_l);
        if ((t.styleResources.hasOwnProperty(dn) ? t.styleResources[dn] : void 0) !== null) {
          t.styleResources[dn] = null, gn ? gn.hrefs.push(
            E(dn)
          ) : (gn = {
            precedence: E(_l),
            rules: [],
            hrefs: [E(dn)],
            sheets: /* @__PURE__ */ new Map()
          }, r.styles.set(_l, gn));
          var Et = gn.rules, kn = null, Tt = null, Ml;
          for (Ml in e)
            if (k.call(e, Ml)) {
              var oe = e[Ml];
              if (oe != null)
                switch (Ml) {
                  case "children":
                    kn = oe;
                    break;
                  case "dangerouslySetInnerHTML":
                    Tt = oe;
                }
            }
          var nl = Array.isArray(kn) ? 2 > kn.length ? kn[0] : null : kn;
          typeof nl != "function" && typeof nl != "symbol" && nl !== null && nl !== void 0 && Et.push(
            ("" + nl).replace(Nt, zt)
          ), G(Et, Tt, kn);
        }
        gn && a && a.styles.add(gn), u && n.push("<!-- -->"), yt = void 0;
      }
      return yt;
    case "meta":
      if (c.insertionMode === 4 || c.tagScope & 1 || e.itemProp != null)
        var Rt = Mn(
          n,
          e,
          "meta"
        );
      else
        u && n.push("<!-- -->"), Rt = f ? null : typeof e.charSet == "string" ? Mn(r.charsetChunks, e, "meta") : e.name === "viewport" ? Mn(r.viewportChunks, e, "meta") : Mn(r.hoistableChunks, e, "meta");
      return Rt;
    case "listing":
    case "pre":
      n.push(O(l));
      var ll = null, el = null, tl;
      for (tl in e)
        if (k.call(e, tl)) {
          var Il = e[tl];
          if (Il != null)
            switch (tl) {
              case "children":
                ll = Il;
                break;
              case "dangerouslySetInnerHTML":
                el = Il;
                break;
              default:
                R(
                  n,
                  tl,
                  Il
                );
            }
        }
      if (n.push(">"), el != null) {
        if (ll != null) throw Error(d(60));
        if (typeof el != "object" || !("__html" in el))
          throw Error(d(61));
        var vn = el.__html;
        vn != null && (typeof vn == "string" && 0 < vn.length && vn[0] === `
` ? n.push(`
`, vn) : n.push("" + vn));
      }
      return typeof ll == "string" && ll[0] === `
` && n.push(`
`), ll;
    case "img":
      var D = e.src, M = e.srcSet;
      if (!(e.loading === "lazy" || !D && !M || typeof D != "string" && D != null || typeof M != "string" && M != null) && e.fetchPriority !== "low" && !(c.tagScope & 3) && (typeof D != "string" || D[4] !== ":" || D[0] !== "d" && D[0] !== "D" || D[1] !== "a" && D[1] !== "A" || D[2] !== "t" && D[2] !== "T" || D[3] !== "a" && D[3] !== "A") && (typeof M != "string" || M[4] !== ":" || M[0] !== "d" && M[0] !== "D" || M[1] !== "a" && M[1] !== "A" || M[2] !== "t" && M[2] !== "T" || M[3] !== "a" && M[3] !== "A")) {
        var wt = typeof e.sizes == "string" ? e.sizes : void 0, An = M ? M + `
` + (wt || "") : D, se = r.preloads.images, bn = se.get(An);
        if (bn)
          (e.fetchPriority === "high" || 10 > r.highImagePreloads.size) && (se.delete(An), r.highImagePreloads.add(bn));
        else if (!t.imageResources.hasOwnProperty(An)) {
          t.imageResources[An] = Z;
          var de = e.crossOrigin, xt = typeof de == "string" ? de === "use-credentials" ? de : "" : void 0, yn = r.headers, ge;
          yn && 0 < yn.remainingCapacity && typeof e.srcSet != "string" && (e.fetchPriority === "high" || 500 > yn.highImagePreloads.length) && (ge = Gl(D, "image", {
            imageSrcSet: e.srcSet,
            imageSizes: e.sizes,
            crossOrigin: xt,
            integrity: e.integrity,
            nonce: e.nonce,
            type: e.type,
            fetchPriority: e.fetchPriority,
            referrerPolicy: e.refererPolicy
          }), 0 <= (yn.remainingCapacity -= ge.length + 2)) ? (r.resets.image[An] = Z, yn.highImagePreloads && (yn.highImagePreloads += ", "), yn.highImagePreloads += ge) : (bn = [], N(bn, {
            rel: "preload",
            as: "image",
            href: M ? void 0 : D,
            imageSrcSet: M,
            imageSizes: wt,
            crossOrigin: xt,
            integrity: e.integrity,
            type: e.type,
            fetchPriority: e.fetchPriority,
            referrerPolicy: e.referrerPolicy
          }), e.fetchPriority === "high" || 10 > r.highImagePreloads.size ? r.highImagePreloads.add(bn) : (r.bulkPreloads.add(bn), se.set(An, bn)));
        }
      }
      return Mn(n, e, "img");
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
      return Mn(n, e, l);
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
      if (2 > c.insertionMode) {
        var ve = i || r.preamble;
        if (ve.headChunks)
          throw Error(d(545, "`<head>`"));
        ve.headChunks = [];
        var Ct = Re(
          ve.headChunks,
          e,
          "head"
        );
      } else
        Ct = Sl(
          n,
          e,
          "head"
        );
      return Ct;
    case "body":
      if (2 > c.insertionMode) {
        var be = i || r.preamble;
        if (be.bodyChunks)
          throw Error(d(545, "`<body>`"));
        be.bodyChunks = [];
        var Pt = Re(
          be.bodyChunks,
          e,
          "body"
        );
      } else
        Pt = Sl(
          n,
          e,
          "body"
        );
      return Pt;
    case "html":
      if (c.insertionMode === 0) {
        var ye = i || r.preamble;
        if (ye.htmlChunks)
          throw Error(d(545, "`<html>`"));
        ye.htmlChunks = [""];
        var Ft = Re(
          ye.htmlChunks,
          e,
          "html"
        );
      } else
        Ft = Sl(
          n,
          e,
          "html"
        );
      return Ft;
    default:
      if (l.indexOf("-") !== -1) {
        n.push(O(l));
        var Ee = null, kt = null, _n;
        for (_n in e)
          if (k.call(e, _n)) {
            var K = e[_n];
            if (K != null) {
              var At = _n;
              switch (_n) {
                case "children":
                  Ee = K;
                  break;
                case "dangerouslySetInnerHTML":
                  kt = K;
                  break;
                case "style":
                  yr(n, K);
                  break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "ref":
                  break;
                case "className":
                  At = "class";
                default:
                  if (We(_n) && typeof K != "function" && typeof K != "symbol" && K !== !1) {
                    if (K === !0) K = "";
                    else if (typeof K == "object") continue;
                    n.push(
                      " ",
                      At,
                      '="',
                      E(K),
                      '"'
                    );
                  }
              }
            }
          }
        return n.push(">"), G(n, kt, Ee), Ee;
      }
  }
  return Sl(n, e, l);
}
var Wt = /* @__PURE__ */ new Map();
function Tn(n) {
  var l = Wt.get(n);
  return l === void 0 && (l = "</" + n + ">", Wt.set(n, l)), l;
}
function Ut(n, l) {
  n = n.preamble, n.htmlChunks === null && l.htmlChunks && (n.htmlChunks = l.htmlChunks, l.contribution |= 1), n.headChunks === null && l.headChunks && (n.headChunks = l.headChunks, l.contribution |= 4), n.bodyChunks === null && l.bodyChunks && (n.bodyChunks = l.bodyChunks, l.contribution |= 2);
}
function xr(n, l) {
  l = l.bootstrapChunks;
  for (var e = 0; e < l.length - 1; e++)
    n.push(l[e]);
  return e < l.length ? (e = l[e], l.length = 0, n.push(e)) : !0;
}
function Yt(n, l, e) {
  if (n.push('<!--$?--><template id="'), e === null) throw Error(d(395));
  return n.push(l.boundaryPrefix), l = e.toString(16), n.push(l), n.push('"></template>');
}
function Gt(n, l) {
  l = l.contribution, l !== 0 && (n.push("<!--"), n.push("" + l), n.push("-->"));
}
function ii(n, l, e, t) {
  switch (e.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return n.push('<div hidden id="'), n.push(l.segmentPrefix), l = t.toString(16), n.push(l), n.push('">');
    case 4:
      return n.push('<svg aria-hidden="true" style="display:none" id="'), n.push(l.segmentPrefix), l = t.toString(16), n.push(l), n.push('">');
    case 5:
      return n.push('<math aria-hidden="true" style="display:none" id="'), n.push(l.segmentPrefix), l = t.toString(16), n.push(l), n.push('">');
    case 6:
      return n.push('<table hidden id="'), n.push(l.segmentPrefix), l = t.toString(16), n.push(l), n.push('">');
    case 7:
      return n.push('<table hidden><tbody id="'), n.push(l.segmentPrefix), l = t.toString(16), n.push(l), n.push('">');
    case 8:
      return n.push('<table hidden><tr id="'), n.push(l.segmentPrefix), l = t.toString(16), n.push(l), n.push('">');
    case 9:
      return n.push('<table hidden><colgroup id="'), n.push(l.segmentPrefix), l = t.toString(16), n.push(l), n.push('">');
    default:
      throw Error(d(397));
  }
}
function ai(n, l) {
  switch (l.insertionMode) {
    case 0:
    case 1:
    case 3:
    case 2:
      return n.push("</div>");
    case 4:
      return n.push("</svg>");
    case 5:
      return n.push("</math>");
    case 6:
      return n.push("</table>");
    case 7:
      return n.push("</tbody></table>");
    case 8:
      return n.push("</tr></table>");
    case 9:
      return n.push("</colgroup></table>");
    default:
      throw Error(d(397));
  }
}
var ui = /[<\u2028\u2029]/g;
function fi(n) {
  return JSON.stringify(n).replace(
    ui,
    function(l) {
      switch (l) {
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
var ci = /[&><\u2028\u2029]/g;
function al(n) {
  return JSON.stringify(n).replace(
    ci,
    function(l) {
      switch (l) {
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
var Yl = !1, Ae = !0;
function hi(n) {
  var l = n.rules, e = n.hrefs, t = 0;
  if (e.length) {
    for (this.push('<style media="not all" data-precedence="'), this.push(n.precedence), this.push('" data-href="'); t < e.length - 1; t++)
      this.push(e[t]), this.push(" ");
    for (this.push(e[t]), this.push('">'), t = 0; t < l.length; t++) this.push(l[t]);
    Ae = this.push("</style>"), Yl = !0, l.length = 0, e.length = 0;
  }
}
function oi(n) {
  return n.state !== 2 ? Yl = !0 : !1;
}
function Cr(n, l, e) {
  return Yl = !1, Ae = !0, l.styles.forEach(hi, n), l.stylesheets.forEach(oi), Yl && (e.stylesToHoist = !0), Ae;
}
function V(n) {
  for (var l = 0; l < n.length; l++) this.push(n[l]);
  n.length = 0;
}
var un = [];
function si(n) {
  N(un, n.props);
  for (var l = 0; l < un.length; l++)
    this.push(un[l]);
  un.length = 0, n.state = 2;
}
function di(n) {
  var l = 0 < n.sheets.size;
  n.sheets.forEach(si, this), n.sheets.clear();
  var e = n.rules, t = n.hrefs;
  if (!l || t.length) {
    if (this.push('<style data-precedence="'), this.push(n.precedence), n = 0, t.length) {
      for (this.push('" data-href="'); n < t.length - 1; n++)
        this.push(t[n]), this.push(" ");
      this.push(t[n]);
    }
    for (this.push('">'), n = 0; n < e.length; n++)
      this.push(e[n]);
    this.push("</style>"), e.length = 0, t.length = 0;
  }
}
function gi(n) {
  if (n.state === 0) {
    n.state = 1;
    var l = n.props;
    for (N(un, {
      rel: "preload",
      as: "style",
      href: n.props.href,
      crossOrigin: l.crossOrigin,
      fetchPriority: l.fetchPriority,
      integrity: l.integrity,
      media: l.media,
      hrefLang: l.hrefLang,
      referrerPolicy: l.referrerPolicy
    }), n = 0; n < un.length; n++)
      this.push(un[n]);
    un.length = 0;
  }
}
function vi(n) {
  n.sheets.forEach(gi, this), n.sheets.clear();
}
function bi(n, l) {
  n.push("[");
  var e = "[";
  l.stylesheets.forEach(function(t) {
    if (t.state !== 2)
      if (t.state === 3)
        n.push(e), t = al(
          "" + t.props.href
        ), n.push(t), n.push("]"), e = ",[";
      else {
        n.push(e);
        var r = t.props["data-precedence"], i = t.props, a = fl("" + t.props.href);
        a = al(a), n.push(a), r = "" + r, n.push(","), r = al(r), n.push(r);
        for (var c in i)
          if (k.call(i, c) && (r = i[c], r != null))
            switch (c) {
              case "href":
              case "rel":
              case "precedence":
              case "data-precedence":
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(399, "link"));
              default:
                yi(
                  n,
                  c,
                  r
                );
            }
        n.push("]"), e = ",[", t.state = 3;
      }
  }), n.push("]");
}
function yi(n, l, e) {
  var t = l.toLowerCase();
  switch (typeof e) {
    case "function":
    case "symbol":
      return;
  }
  switch (l) {
    case "innerHTML":
    case "dangerouslySetInnerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "style":
    case "ref":
      return;
    case "className":
      t = "class", l = "" + e;
      break;
    case "hidden":
      if (e === !1) return;
      l = "";
      break;
    case "src":
    case "href":
      e = fl(e), l = "" + e;
      break;
    default:
      if (2 < l.length && (l[0] === "o" || l[0] === "O") && (l[1] === "n" || l[1] === "N") || !We(l))
        return;
      l = "" + e;
  }
  n.push(","), t = al(t), n.push(t), n.push(","), t = al(l), n.push(t);
}
function Xt() {
  return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
}
function Ei(n) {
  var l = I || null;
  if (l) {
    var e = l.resumableState, t = l.renderState;
    if (typeof n == "string" && n) {
      if (!e.dnsResources.hasOwnProperty(n)) {
        e.dnsResources[n] = null, e = t.headers;
        var r, i;
        (i = e && 0 < e.remainingCapacity) && (i = (r = "<" + ("" + n).replace(
          Ue,
          Ye
        ) + ">; rel=dns-prefetch", 0 <= (e.remainingCapacity -= r.length + 2))), i ? (t.resets.dns[n] = null, e.preconnects && (e.preconnects += ", "), e.preconnects += r) : (r = [], N(r, { href: n, rel: "dns-prefetch" }), t.preconnects.add(r));
      }
      xn(l);
    }
  } else nn.D(n);
}
function Ti(n, l) {
  var e = I || null;
  if (e) {
    var t = e.resumableState, r = e.renderState;
    if (typeof n == "string" && n) {
      var i = l === "use-credentials" ? "credentials" : typeof l == "string" ? "anonymous" : "default";
      if (!t.connectResources[i].hasOwnProperty(n)) {
        t.connectResources[i][n] = null, t = r.headers;
        var a, c;
        if (c = t && 0 < t.remainingCapacity) {
          if (c = "<" + ("" + n).replace(
            Ue,
            Ye
          ) + ">; rel=preconnect", typeof l == "string") {
            var u = ("" + l).replace(
              _e,
              Oe
            );
            c += '; crossorigin="' + u + '"';
          }
          c = (a = c, 0 <= (t.remainingCapacity -= a.length + 2));
        }
        c ? (r.resets.connect[i][n] = null, t.preconnects && (t.preconnects += ", "), t.preconnects += a) : (i = [], N(i, {
          rel: "preconnect",
          href: n,
          crossOrigin: l
        }), r.preconnects.add(i));
      }
      xn(e);
    }
  } else nn.C(n, l);
}
function Ri(n, l, e) {
  var t = I || null;
  if (t) {
    var r = t.resumableState, i = t.renderState;
    if (l && n) {
      switch (l) {
        case "image":
          if (e)
            var a = e.imageSrcSet, c = e.imageSizes, u = e.fetchPriority;
          var f = a ? a + `
` + (c || "") : n;
          if (r.imageResources.hasOwnProperty(f)) return;
          r.imageResources[f] = Z, r = i.headers;
          var o;
          r && 0 < r.remainingCapacity && typeof a != "string" && u === "high" && (o = Gl(n, l, e), 0 <= (r.remainingCapacity -= o.length + 2)) ? (i.resets.image[f] = Z, r.highImagePreloads && (r.highImagePreloads += ", "), r.highImagePreloads += o) : (r = [], N(
            r,
            W(
              { rel: "preload", href: a ? void 0 : n, as: l },
              e
            )
          ), u === "high" ? i.highImagePreloads.add(r) : (i.bulkPreloads.add(r), i.preloads.images.set(f, r)));
          break;
        case "style":
          if (r.styleResources.hasOwnProperty(n)) return;
          a = [], N(
            a,
            W({ rel: "preload", href: n, as: l }, e)
          ), r.styleResources[n] = !e || typeof e.crossOrigin != "string" && typeof e.integrity != "string" ? Z : [e.crossOrigin, e.integrity], i.preloads.stylesheets.set(n, a), i.bulkPreloads.add(a);
          break;
        case "script":
          if (r.scriptResources.hasOwnProperty(n)) return;
          a = [], i.preloads.scripts.set(n, a), i.bulkPreloads.add(a), N(
            a,
            W({ rel: "preload", href: n, as: l }, e)
          ), r.scriptResources[n] = !e || typeof e.crossOrigin != "string" && typeof e.integrity != "string" ? Z : [e.crossOrigin, e.integrity];
          break;
        default:
          if (r.unknownResources.hasOwnProperty(l)) {
            if (a = r.unknownResources[l], a.hasOwnProperty(n))
              return;
          } else
            a = {}, r.unknownResources[l] = a;
          if (a[n] = Z, (r = i.headers) && 0 < r.remainingCapacity && l === "font" && (f = Gl(n, l, e), 0 <= (r.remainingCapacity -= f.length + 2)))
            i.resets.font[n] = Z, r.fontPreloads && (r.fontPreloads += ", "), r.fontPreloads += f;
          else
            switch (r = [], n = W({ rel: "preload", href: n, as: l }, e), N(r, n), l) {
              case "font":
                i.fontPreloads.add(r);
                break;
              default:
                i.bulkPreloads.add(r);
            }
      }
      xn(t);
    }
  } else nn.L(n, l, e);
}
function wi(n, l) {
  var e = I || null;
  if (e) {
    var t = e.resumableState, r = e.renderState;
    if (n) {
      var i = l && typeof l.as == "string" ? l.as : "script";
      switch (i) {
        case "script":
          if (t.moduleScriptResources.hasOwnProperty(n)) return;
          i = [], t.moduleScriptResources[n] = !l || typeof l.crossOrigin != "string" && typeof l.integrity != "string" ? Z : [l.crossOrigin, l.integrity], r.preloads.moduleScripts.set(n, i);
          break;
        default:
          if (t.moduleUnknownResources.hasOwnProperty(i)) {
            var a = t.unknownResources[i];
            if (a.hasOwnProperty(n)) return;
          } else
            a = {}, t.moduleUnknownResources[i] = a;
          i = [], a[n] = Z;
      }
      N(i, W({ rel: "modulepreload", href: n }, l)), r.bulkPreloads.add(i), xn(e);
    }
  } else nn.m(n, l);
}
function xi(n, l, e) {
  var t = I || null;
  if (t) {
    var r = t.resumableState, i = t.renderState;
    if (n) {
      l = l || "default";
      var a = i.styles.get(l), c = r.styleResources.hasOwnProperty(n) ? r.styleResources[n] : void 0;
      c !== null && (r.styleResources[n] = null, a || (a = {
        precedence: E(l),
        rules: [],
        hrefs: [],
        sheets: /* @__PURE__ */ new Map()
      }, i.styles.set(l, a)), l = {
        state: 0,
        props: W(
          { rel: "stylesheet", href: n, "data-precedence": l },
          e
        )
      }, c && (c.length === 2 && hl(l.props, c), (i = i.preloads.stylesheets.get(n)) && 0 < i.length ? i.length = 0 : l.state = 1), a.sheets.set(n, l), xn(t));
    }
  } else nn.S(n, l, e);
}
function Ci(n, l) {
  var e = I || null;
  if (e) {
    var t = e.resumableState, r = e.renderState;
    if (n) {
      var i = t.scriptResources.hasOwnProperty(n) ? t.scriptResources[n] : void 0;
      i !== null && (t.scriptResources[n] = null, l = W({ src: n, async: !0 }, l), i && (i.length === 2 && hl(l, i), n = r.preloads.scripts.get(n)) && (n.length = 0), n = [], r.scripts.add(n), Ul(n, l), xn(e));
    }
  } else nn.X(n, l);
}
function Pi(n, l) {
  var e = I || null;
  if (e) {
    var t = e.resumableState, r = e.renderState;
    if (n) {
      var i = t.moduleScriptResources.hasOwnProperty(
        n
      ) ? t.moduleScriptResources[n] : void 0;
      i !== null && (t.moduleScriptResources[n] = null, l = W({ src: n, type: "module", async: !0 }, l), i && (i.length === 2 && hl(l, i), n = r.preloads.moduleScripts.get(n)) && (n.length = 0), n = [], r.scripts.add(n), Ul(n, l), xn(e));
    }
  } else nn.M(n, l);
}
function hl(n, l) {
  n.crossOrigin == null && (n.crossOrigin = l[0]), n.integrity == null && (n.integrity = l[1]);
}
function Gl(n, l, e) {
  n = ("" + n).replace(
    Ue,
    Ye
  ), l = ("" + l).replace(
    _e,
    Oe
  ), l = "<" + n + '>; rel=preload; as="' + l + '"';
  for (var t in e)
    k.call(e, t) && (n = e[t], typeof n == "string" && (l += "; " + t.toLowerCase() + '="' + ("" + n).replace(
      _e,
      Oe
    ) + '"'));
  return l;
}
var Ue = /[<>\r\n]/g;
function Ye(n) {
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
var _e = /["';,\r\n]/g;
function Oe(n) {
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
function Zt(n) {
  this.styles.add(n);
}
function Jt(n) {
  this.stylesheets.add(n);
}
function Fi(n, l) {
  var e = n.idPrefix, t = [], r = n.bootstrapScriptContent, i = n.bootstrapScripts, a = n.bootstrapModules;
  r !== void 0 && t.push(
    "<script>",
    ("" + r).replace(vr, br),
    "<\/script>"
  ), r = e + "P:";
  var c = e + "S:";
  e += "B:";
  var u = cl(), f = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), C = {
    images: /* @__PURE__ */ new Map(),
    stylesheets: /* @__PURE__ */ new Map(),
    scripts: /* @__PURE__ */ new Map(),
    moduleScripts: /* @__PURE__ */ new Map()
  };
  if (i !== void 0)
    for (var P = 0; P < i.length; P++) {
      var w = i[P], F, g = void 0, A = void 0, T = {
        rel: "preload",
        as: "script",
        fetchPriority: "low",
        nonce: void 0
      };
      typeof w == "string" ? T.href = F = w : (T.href = F = w.src, T.integrity = A = typeof w.integrity == "string" ? w.integrity : void 0, T.crossOrigin = g = typeof w == "string" || w.crossOrigin == null ? void 0 : w.crossOrigin === "use-credentials" ? "use-credentials" : ""), w = n;
      var S = F;
      w.scriptResources[S] = null, w.moduleScriptResources[S] = null, w = [], N(w, T), v.add(w), t.push('<script src="', E(F)), typeof A == "string" && t.push('" integrity="', E(A)), typeof g == "string" && t.push(
        '" crossorigin="',
        E(g)
      ), t.push('" async=""><\/script>');
    }
  if (a !== void 0)
    for (i = 0; i < a.length; i++)
      T = a[i], g = F = void 0, A = {
        rel: "modulepreload",
        fetchPriority: "low",
        nonce: void 0
      }, typeof T == "string" ? A.href = P = T : (A.href = P = T.src, A.integrity = g = typeof T.integrity == "string" ? T.integrity : void 0, A.crossOrigin = F = typeof T == "string" || T.crossOrigin == null ? void 0 : T.crossOrigin === "use-credentials" ? "use-credentials" : ""), T = n, w = P, T.scriptResources[w] = null, T.moduleScriptResources[w] = null, T = [], N(T, A), v.add(T), t.push(
        '<script type="module" src="',
        E(P)
      ), typeof g == "string" && t.push(
        '" integrity="',
        E(g)
      ), typeof F == "string" && t.push('" crossorigin="', E(F)), t.push('" async=""><\/script>');
  return {
    placeholderPrefix: r,
    segmentPrefix: c,
    boundaryPrefix: e,
    startInlineScript: "<script>",
    preamble: u,
    externalRuntimeScript: null,
    bootstrapChunks: t,
    importMapChunks: [],
    onHeaders: void 0,
    headers: null,
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
    preconnects: f,
    fontPreloads: o,
    highImagePreloads: h,
    styles: s,
    bootstrapScripts: v,
    scripts: b,
    bulkPreloads: y,
    preloads: C,
    stylesToHoist: !1,
    generateStaticMarkup: l
  };
}
function Qt(n, l, e, t) {
  return e.generateStaticMarkup ? (n.push(E(l)), !1) : (l === "" ? n = t : (t && n.push("<!-- -->"), n.push(E(l)), n = !0), n);
}
function Me(n, l, e, t) {
  l.generateStaticMarkup || e && t && n.push("<!-- -->");
}
var ki = Function.prototype.bind, Ai = Symbol.for("react.client.reference");
function Xl(n) {
  if (n == null) return null;
  if (typeof n == "function")
    return n.$$typeof === Ai ? null : n.displayName || n.name || null;
  if (typeof n == "string") return n;
  switch (n) {
    case cr:
      return "Fragment";
    case or:
      return "Profiler";
    case hr:
      return "StrictMode";
    case ql:
      return "Suspense";
    case He:
      return "SuspenseList";
    case dr:
      return "Activity";
  }
  if (typeof n == "object")
    switch (n.$$typeof) {
      case fr:
        return "Portal";
      case ml:
        return (n.displayName || "Context") + ".Provider";
      case sr:
        return (n._context.displayName || "Context") + ".Consumer";
      case ze:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Be:
        return l = n.displayName || null, l !== null ? l : Xl(n.type) || "Memo";
      case pl:
        l = n._payload, n = n._init;
        try {
          return Xl(n(l));
        } catch {
        }
    }
  return null;
}
var Kt = {}, En = null;
function jl(n, l) {
  if (n !== l) {
    n.context._currentValue2 = n.parentValue, n = n.parent;
    var e = l.parent;
    if (n === null) {
      if (e !== null) throw Error(d(401));
    } else {
      if (e === null) throw Error(d(401));
      jl(n, e);
    }
    l.context._currentValue2 = l.value;
  }
}
function Pr(n) {
  n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && Pr(n);
}
function Fr(n) {
  var l = n.parent;
  l !== null && Fr(l), n.context._currentValue2 = n.value;
}
function kr(n, l) {
  if (n.context._currentValue2 = n.parentValue, n = n.parent, n === null) throw Error(d(402));
  n.depth === l.depth ? jl(n, l) : kr(n, l);
}
function Ar(n, l) {
  var e = l.parent;
  if (e === null) throw Error(d(402));
  n.depth === e.depth ? jl(n, e) : Ar(n, e), l.context._currentValue2 = l.value;
}
function an(n) {
  var l = En;
  l !== n && (l === null ? Fr(n) : n === null ? Pr(l) : l.depth === n.depth ? jl(l, n) : l.depth > n.depth ? kr(l, n) : Ar(l, n), En = n);
}
var Vt = {
  enqueueSetState: function(n, l) {
    n = n._reactInternals, n.queue !== null && n.queue.push(l);
  },
  enqueueReplaceState: function(n, l) {
    n = n._reactInternals, n.replace = !0, n.queue = [l];
  },
  enqueueForceUpdate: function() {
  }
}, _i = { id: 1, overflow: "" };
function Ie(n, l, e) {
  var t = n.id;
  n = n.overflow;
  var r = 32 - zl(t) - 1;
  t &= ~(1 << r), e += 1;
  var i = 32 - zl(l) + r;
  if (30 < i) {
    var a = r - r % 5;
    return i = (t & (1 << a) - 1).toString(32), t >>= a, r -= a, {
      id: 1 << 32 - zl(l) + r | e << r | t,
      overflow: i + n
    };
  }
  return {
    id: 1 << i | e << r | t,
    overflow: n
  };
}
var zl = Math.clz32 ? Math.clz32 : Ii, Oi = Math.log, Mi = Math.LN2;
function Ii(n) {
  return n >>>= 0, n === 0 ? 32 : 31 - (Oi(n) / Mi | 0) | 0;
}
var Rn = Error(d(460));
function Dl() {
}
function Si(n, l, e) {
  switch (e = n[e], e === void 0 ? n.push(l) : e !== l && (l.then(Dl, Dl), l = e), l.status) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw l.reason;
    default:
      switch (typeof l.status == "string" ? l.then(Dl, Dl) : (n = l, n.status = "pending", n.then(
        function(t) {
          if (l.status === "pending") {
            var r = l;
            r.status = "fulfilled", r.value = t;
          }
        },
        function(t) {
          if (l.status === "pending") {
            var r = l;
            r.status = "rejected", r.reason = t;
          }
        }
      )), l.status) {
        case "fulfilled":
          return l.value;
        case "rejected":
          throw l.reason;
      }
      throw Hl = l, Rn;
  }
}
var Hl = null;
function Zl() {
  if (Hl === null) throw Error(d(459));
  var n = Hl;
  return Hl = null, n;
}
function Di(n, l) {
  return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
}
var Li = typeof Object.is == "function" ? Object.is : Di, ln = null, Ge = null, Xe = null, Ze = null, Bl = null, x = null, il = !1, Jl = !1, ol = 0, sl = 0, dl = -1, Ql = 0, Ln = null, fn = null, $l = 0;
function $() {
  if (ln === null)
    throw Error(d(321));
  return ln;
}
function mt() {
  if (0 < $l) throw Error(d(312));
  return { memoizedState: null, queue: null, next: null };
}
function Je() {
  return x === null ? Bl === null ? (il = !1, Bl = x = mt()) : (il = !0, x = Bl) : x.next === null ? (il = !1, x = x.next = mt()) : (il = !0, x = x.next), x;
}
function Dn() {
  var n = Ln;
  return Ln = null, n;
}
function gl() {
  Ze = Xe = Ge = ln = null, Jl = !1, Bl = null, $l = 0, x = fn = null;
}
function _r(n, l) {
  return typeof l == "function" ? l(n) : l;
}
function qt(n, l, e) {
  if (ln = $(), x = Je(), il) {
    var t = x.queue;
    if (l = t.dispatch, fn !== null && (e = fn.get(t), e !== void 0)) {
      fn.delete(t), t = x.memoizedState;
      do
        t = n(t, e.action), e = e.next;
      while (e !== null);
      return x.memoizedState = t, [t, l];
    }
    return [x.memoizedState, l];
  }
  return n = n === _r ? typeof l == "function" ? l() : l : e !== void 0 ? e(l) : l, x.memoizedState = n, n = x.queue = { last: null, dispatch: null }, n = n.dispatch = Ni.bind(
    null,
    ln,
    n
  ), [x.memoizedState, n];
}
function pt(n, l) {
  if (ln = $(), x = Je(), l = l === void 0 ? null : l, x !== null) {
    var e = x.memoizedState;
    if (e !== null && l !== null) {
      var t = e[1];
      n: if (t === null) t = !1;
      else {
        for (var r = 0; r < t.length && r < l.length; r++)
          if (!Li(l[r], t[r])) {
            t = !1;
            break n;
          }
        t = !0;
      }
      if (t) return e[0];
    }
  }
  return n = n(), x.memoizedState = [n, l], n;
}
function Ni(n, l, e) {
  if (25 <= $l) throw Error(d(301));
  if (n === ln)
    if (Jl = !0, n = { action: e, next: null }, fn === null && (fn = /* @__PURE__ */ new Map()), e = fn.get(l), e === void 0)
      fn.set(l, n);
    else {
      for (l = e; l.next !== null; ) l = l.next;
      l.next = n;
    }
}
function zi() {
  throw Error(d(394));
}
function Hi() {
  throw Error(d(479));
}
function jt(n, l, e) {
  $();
  var t = sl++, r = Xe;
  if (typeof n.$$FORM_ACTION == "function") {
    var i = null, a = Ze;
    r = r.formState;
    var c = n.$$IS_SIGNATURE_EQUAL;
    if (r !== null && typeof c == "function") {
      var u = r[1];
      c.call(n, r[2], r[3]) && (i = e !== void 0 ? "p" + e : "k" + Ot(
        JSON.stringify([a, null, t]),
        0
      ), u === i && (dl = t, l = r[0]));
    }
    var f = n.bind(null, l);
    return n = function(h) {
      f(h);
    }, typeof f.$$FORM_ACTION == "function" && (n.$$FORM_ACTION = function(h) {
      h = f.$$FORM_ACTION(h), e !== void 0 && (e += "", h.action = e);
      var s = h.data;
      return s && (i === null && (i = e !== void 0 ? "p" + e : "k" + Ot(
        JSON.stringify([
          a,
          null,
          t
        ]),
        0
      )), s.append("$ACTION_KEY", i)), h;
    }), [l, n, !1];
  }
  var o = n.bind(null, l);
  return [
    l,
    function(h) {
      o(h);
    },
    !1
  ];
}
function Or(n) {
  var l = Ql;
  return Ql += 1, Ln === null && (Ln = []), Si(Ln, n, l);
}
function Bi() {
  throw Error(d(393));
}
function rl() {
}
var $t = {
  readContext: function(n) {
    return n._currentValue2;
  },
  use: function(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return Or(n);
      if (n.$$typeof === ml)
        return n._currentValue2;
    }
    throw Error(d(438, String(n)));
  },
  useContext: function(n) {
    return $(), n._currentValue2;
  },
  useMemo: pt,
  useReducer: qt,
  useRef: function(n) {
    ln = $(), x = Je();
    var l = x.memoizedState;
    return l === null ? (n = { current: n }, x.memoizedState = n) : l;
  },
  useState: function(n) {
    return qt(_r, n);
  },
  useInsertionEffect: rl,
  useLayoutEffect: rl,
  useCallback: function(n, l) {
    return pt(function() {
      return n;
    }, l);
  },
  useImperativeHandle: rl,
  useEffect: rl,
  useDebugValue: rl,
  useDeferredValue: function(n, l) {
    return $(), l !== void 0 ? l : n;
  },
  useTransition: function() {
    return $(), [!1, zi];
  },
  useId: function() {
    var n = Ge.treeContext, l = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - zl(n) - 1)).toString(32) + l;
    var e = Wl;
    if (e === null) throw Error(d(404));
    return l = ol++, n = "«" + e.idPrefix + "R" + n, 0 < l && (n += "H" + l.toString(32)), n + "»";
  },
  useSyncExternalStore: function(n, l, e) {
    if (e === void 0)
      throw Error(d(407));
    return e();
  },
  useOptimistic: function(n) {
    return $(), [n, Hi];
  },
  useActionState: jt,
  useFormState: jt,
  useHostTransitionStatus: function() {
    return $(), ni;
  },
  useMemoCache: function(n) {
    for (var l = Array(n), e = 0; e < n; e++)
      l[e] = Jr;
    return l;
  },
  useCacheRefresh: function() {
    return Bi;
  }
}, Wl = null, Wi = {
  getCacheForType: function() {
    throw Error(d(248));
  }
}, we, nr;
function In(n) {
  if (we === void 0)
    try {
      throw Error();
    } catch (e) {
      var l = e.stack.trim().match(/\n( *(at )?)/);
      we = l && l[1] || "", nr = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
  return `
` + we + n + nr;
}
var xe = !1;
function Ll(n, l) {
  if (!n || xe) return "";
  xe = !0;
  var e = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var t = {
      DetermineComponentFrameRoot: function() {
        try {
          if (l) {
            var h = function() {
              throw Error();
            };
            if (Object.defineProperty(h.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(h, []);
              } catch (v) {
                var s = v;
              }
              Reflect.construct(n, [], h);
            } else {
              try {
                h.call();
              } catch (v) {
                s = v;
              }
              n.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (v) {
              s = v;
            }
            (h = n()) && typeof h.catch == "function" && h.catch(function() {
            });
          }
        } catch (v) {
          if (v && s && typeof v.stack == "string")
            return [v.stack, s.stack];
        }
        return [null, null];
      }
    };
    t.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var r = Object.getOwnPropertyDescriptor(
      t.DetermineComponentFrameRoot,
      "name"
    );
    r && r.configurable && Object.defineProperty(
      t.DetermineComponentFrameRoot,
      "name",
      { value: "DetermineComponentFrameRoot" }
    );
    var i = t.DetermineComponentFrameRoot(), a = i[0], c = i[1];
    if (a && c) {
      var u = a.split(`
`), f = c.split(`
`);
      for (r = t = 0; t < u.length && !u[t].includes("DetermineComponentFrameRoot"); )
        t++;
      for (; r < f.length && !f[r].includes(
        "DetermineComponentFrameRoot"
      ); )
        r++;
      if (t === u.length || r === f.length)
        for (t = u.length - 1, r = f.length - 1; 1 <= t && 0 <= r && u[t] !== f[r]; )
          r--;
      for (; 1 <= t && 0 <= r; t--, r--)
        if (u[t] !== f[r]) {
          if (t !== 1 || r !== 1)
            do
              if (t--, r--, 0 > r || u[t] !== f[r]) {
                var o = `
` + u[t].replace(" at new ", " at ");
                return n.displayName && o.includes("<anonymous>") && (o = o.replace("<anonymous>", n.displayName)), o;
              }
            while (1 <= t && 0 <= r);
          break;
        }
    }
  } finally {
    xe = !1, Error.prepareStackTrace = e;
  }
  return (e = n ? n.displayName || n.name : "") ? In(e) : "";
}
function Mr(n) {
  if (typeof n == "string") return In(n);
  if (typeof n == "function")
    return n.prototype && n.prototype.isReactComponent ? Ll(n, !0) : Ll(n, !1);
  if (typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case ze:
        return Ll(n.render, !1);
      case Be:
        return Ll(n.type, !1);
      case pl:
        var l = n, e = l._payload;
        l = l._init;
        try {
          n = l(e);
        } catch {
          return In("Lazy");
        }
        return Mr(n);
    }
    if (typeof n.name == "string")
      return e = n.env, In(
        n.name + (e ? " [" + e + "]" : "")
      );
  }
  switch (n) {
    case He:
      return In("SuspenseList");
    case ql:
      return In("Suspense");
  }
  return "";
}
function Ui(n) {
  if (typeof n == "object" && n !== null && typeof n.environmentName == "string") {
    var l = n.environmentName;
    n = [n].slice(0), typeof n[0] == "string" ? n.splice(
      0,
      1,
      "[%s] " + n[0],
      " " + l + " "
    ) : n.splice(0, 0, "[%s] ", " " + l + " "), n.unshift(console), l = ki.apply(console.error, n), l();
  } else console.error(n);
  return null;
}
function Sn() {
}
function Yi(n, l, e, t, r, i, a, c, u, f, o) {
  var h = /* @__PURE__ */ new Set();
  this.destination = null, this.flushScheduled = !1, this.resumableState = n, this.renderState = l, this.rootFormatContext = e, this.progressiveChunkSize = t === void 0 ? 12800 : t, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = h, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = r === void 0 ? Ui : r, this.onPostpone = f === void 0 ? Sn : f, this.onAllReady = i === void 0 ? Sn : i, this.onShellReady = a === void 0 ? Sn : a, this.onShellError = c === void 0 ? Sn : c, this.onFatalError = u === void 0 ? Sn : u, this.formState = o === void 0 ? null : o;
}
function Gi(n, l, e, t, r, i, a, c, u, f, o, h) {
  return l = new Yi(
    l,
    e,
    t,
    r,
    i,
    a,
    c,
    u,
    f,
    o,
    h
  ), e = Nn(
    l,
    0,
    null,
    t,
    !1,
    !1
  ), e.parentFlushed = !0, n = ul(
    l,
    null,
    n,
    -1,
    null,
    e,
    null,
    null,
    l.abortableTasks,
    null,
    t,
    null,
    _i,
    null,
    !1
  ), zn(n), l.pingedTasks.push(n), l;
}
var I = null;
function Ir(n, l) {
  n.pingedTasks.push(l), n.pingedTasks.length === 1 && (n.flushScheduled = n.destination !== null, Lr(n));
}
function vl(n, l, e, t) {
  return {
    status: 0,
    rootSegmentID: -1,
    parentFlushed: !1,
    pendingTasks: 0,
    completedSegments: [],
    byteSize: 0,
    fallbackAbortableTasks: l,
    errorDigest: null,
    contentState: Xt(),
    fallbackState: Xt(),
    contentPreamble: e,
    fallbackPreamble: t,
    trackedContentKeyPath: null,
    trackedFallbackNode: null
  };
}
function ul(n, l, e, t, r, i, a, c, u, f, o, h, s, v, b) {
  n.allPendingTasks++, r === null ? n.pendingRootTasks++ : r.pendingTasks++;
  var y = {
    replay: null,
    node: e,
    childIndex: t,
    ping: function() {
      return Ir(n, y);
    },
    blockedBoundary: r,
    blockedSegment: i,
    blockedPreamble: a,
    hoistableState: c,
    abortSet: u,
    keyPath: f,
    formatContext: o,
    context: h,
    treeContext: s,
    componentStack: v,
    thenableState: l,
    isFallback: b
  };
  return u.add(y), y;
}
function Sr(n, l, e, t, r, i, a, c, u, f, o, h, s, v) {
  n.allPendingTasks++, i === null ? n.pendingRootTasks++ : i.pendingTasks++, e.pendingTasks++;
  var b = {
    replay: e,
    node: t,
    childIndex: r,
    ping: function() {
      return Ir(n, b);
    },
    blockedBoundary: i,
    blockedSegment: null,
    blockedPreamble: null,
    hoistableState: a,
    abortSet: c,
    keyPath: u,
    formatContext: f,
    context: o,
    treeContext: h,
    componentStack: s,
    thenableState: l,
    isFallback: v
  };
  return c.add(b), b;
}
function Nn(n, l, e, t, r, i) {
  return {
    status: 0,
    parentFlushed: !1,
    id: -1,
    index: l,
    chunks: [],
    children: [],
    preambleChildren: [],
    parentFormatContext: t,
    boundary: e,
    lastPushedText: r,
    textEmbedded: i
  };
}
function zn(n) {
  var l = n.node;
  if (typeof l == "object" && l !== null)
    switch (l.$$typeof) {
      case ur:
        n.componentStack = { parent: n.componentStack, type: l.type };
    }
}
function wn(n) {
  var l = {};
  return n && Object.defineProperty(l, "componentStack", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      try {
        var e = "", t = n;
        do
          e += Mr(t.type), t = t.parent;
        while (t);
        var r = e;
      } catch (i) {
        r = `
Error generating stack: ` + i.message + `
` + i.stack;
      }
      return Object.defineProperty(l, "componentStack", {
        value: r
      }), r;
    }
  }), l;
}
function X(n, l, e) {
  if (n = n.onError, l = n(l, e), l == null || typeof l == "string") return l;
}
function bl(n, l) {
  var e = n.onShellError, t = n.onFatalError;
  e(l), t(l), n.destination !== null ? (n.status = 14, n.destination.destroy(l)) : (n.status = 13, n.fatalError = l);
}
function lr(n, l, e, t, r, i) {
  var a = l.thenableState;
  for (l.thenableState = null, ln = {}, Ge = l, Xe = n, Ze = e, sl = ol = 0, dl = -1, Ql = 0, Ln = a, n = t(r, i); Jl; )
    Jl = !1, sl = ol = 0, dl = -1, Ql = 0, $l += 1, x = null, n = t(r, i);
  return gl(), n;
}
function er(n, l, e, t, r, i, a) {
  var c = !1;
  if (i !== 0 && n.formState !== null) {
    var u = l.blockedSegment;
    if (u !== null) {
      c = !0, u = u.chunks;
      for (var f = 0; f < i; f++)
        f === a ? u.push("<!--F!-->") : u.push("<!--F-->");
    }
  }
  i = l.keyPath, l.keyPath = e, r ? (e = l.treeContext, l.treeContext = Ie(e, 1, 0), m(n, l, t, -1), l.treeContext = e) : c ? m(n, l, t, -1) : J(n, l, t, -1), l.keyPath = i;
}
function Kl(n, l, e, t, r, i) {
  if (typeof t == "function")
    if (t.prototype && t.prototype.isReactComponent) {
      var a = r;
      if ("ref" in r) {
        a = {};
        for (var c in r)
          c !== "ref" && (a[c] = r[c]);
      }
      var u = t.defaultProps;
      if (u) {
        a === r && (a = W({}, a, r));
        for (var f in u)
          a[f] === void 0 && (a[f] = u[f]);
      }
      r = a, a = Kt, u = t.contextType, typeof u == "object" && u !== null && (a = u._currentValue2), a = new t(r, a);
      var o = a.state !== void 0 ? a.state : null;
      if (a.updater = Vt, a.props = r, a.state = o, u = { queue: [], replace: !1 }, a._reactInternals = u, i = t.contextType, a.context = typeof i == "object" && i !== null ? i._currentValue2 : Kt, i = t.getDerivedStateFromProps, typeof i == "function" && (i = i(r, o), o = i == null ? o : W({}, o, i), a.state = o), typeof t.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function"))
        if (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Vt.enqueueReplaceState(
          a,
          a.state,
          null
        ), u.queue !== null && 0 < u.queue.length)
          if (t = u.queue, i = u.replace, u.queue = null, u.replace = !1, i && t.length === 1)
            a.state = t[0];
          else {
            for (u = i ? t[0] : a.state, o = !0, i = i ? 1 : 0; i < t.length; i++)
              f = t[i], f = typeof f == "function" ? f.call(a, u, r, void 0) : f, f != null && (o ? (o = !1, u = W({}, u, f)) : W(u, f));
            a.state = u;
          }
        else u.queue = null;
      if (t = a.render(), n.status === 12) throw null;
      r = l.keyPath, l.keyPath = e, J(n, l, t, -1), l.keyPath = r;
    } else {
      if (t = lr(n, l, e, t, r, void 0), n.status === 12) throw null;
      er(
        n,
        l,
        e,
        t,
        ol !== 0,
        sl,
        dl
      );
    }
  else if (typeof t == "string")
    if (a = l.blockedSegment, a === null)
      a = r.children, u = l.formatContext, o = l.keyPath, l.formatContext = St(u, t, r), l.keyPath = e, m(n, l, a, -1), l.formatContext = u, l.keyPath = o;
    else {
      i = ri(
        a.chunks,
        t,
        r,
        n.resumableState,
        n.renderState,
        l.blockedPreamble,
        l.hoistableState,
        l.formatContext,
        a.lastPushedText,
        l.isFallback
      ), a.lastPushedText = !1, u = l.formatContext, o = l.keyPath, l.keyPath = e, (l.formatContext = St(u, t, r)).insertionMode === 3 ? (e = Nn(
        n,
        0,
        null,
        l.formatContext,
        !1,
        !1
      ), a.preambleChildren.push(e), e = ul(
        n,
        null,
        i,
        -1,
        l.blockedBoundary,
        e,
        l.blockedPreamble,
        l.hoistableState,
        n.abortableTasks,
        l.keyPath,
        l.formatContext,
        l.context,
        l.treeContext,
        l.componentStack,
        l.isFallback
      ), zn(e), n.pingedTasks.push(e)) : m(n, l, i, -1), l.formatContext = u, l.keyPath = o;
      n: {
        switch (l = a.chunks, n = n.resumableState, t) {
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
            if (1 >= u.insertionMode) {
              n.hasBody = !0;
              break n;
            }
            break;
          case "html":
            if (u.insertionMode === 0) {
              n.hasHtml = !0;
              break n;
            }
            break;
          case "head":
            if (1 >= u.insertionMode) break n;
        }
        l.push(Tn(t));
      }
      a.lastPushedText = !1;
    }
  else {
    switch (t) {
      case Zr:
      case hr:
      case or:
      case cr:
        t = l.keyPath, l.keyPath = e, J(n, l, r.children, -1), l.keyPath = t;
        return;
      case dr:
        r.mode !== "hidden" && (t = l.keyPath, l.keyPath = e, J(n, l, r.children, -1), l.keyPath = t);
        return;
      case He:
        t = l.keyPath, l.keyPath = e, J(n, l, r.children, -1), l.keyPath = t;
        return;
      case Qr:
      case Xr:
        throw Error(d(343));
      case ql:
        n: if (l.replay !== null) {
          t = l.keyPath, l.keyPath = e, e = r.children;
          try {
            m(n, l, e, -1);
          } finally {
            l.keyPath = t;
          }
        } else {
          t = l.keyPath;
          var h = l.blockedBoundary;
          i = l.blockedPreamble;
          var s = l.hoistableState;
          f = l.blockedSegment, c = r.fallback, r = r.children;
          var v = /* @__PURE__ */ new Set(), b = 2 > l.formatContext.insertionMode ? vl(
            n,
            v,
            cl(),
            cl()
          ) : vl(n, v, null, null);
          n.trackedPostpones !== null && (b.trackedContentKeyPath = e);
          var y = Nn(
            n,
            f.chunks.length,
            b,
            l.formatContext,
            !1,
            !1
          );
          f.children.push(y), f.lastPushedText = !1;
          var C = Nn(
            n,
            0,
            null,
            l.formatContext,
            !1,
            !1
          );
          if (C.parentFlushed = !0, n.trackedPostpones !== null) {
            a = [e[0], "Suspense Fallback", e[2]], u = [a[1], a[2], [], null], n.trackedPostpones.workingMap.set(a, u), b.trackedFallbackNode = u, l.blockedSegment = y, l.blockedPreamble = b.fallbackPreamble, l.keyPath = a, y.status = 6;
            try {
              m(n, l, c, -1), Me(
                y.chunks,
                n.renderState,
                y.lastPushedText,
                y.textEmbedded
              ), y.status = 1;
            } catch (P) {
              throw y.status = n.status === 12 ? 3 : 4, P;
            } finally {
              l.blockedSegment = f, l.blockedPreamble = i, l.keyPath = t;
            }
            l = ul(
              n,
              null,
              r,
              -1,
              b,
              C,
              b.contentPreamble,
              b.contentState,
              l.abortSet,
              e,
              l.formatContext,
              l.context,
              l.treeContext,
              l.componentStack,
              l.isFallback
            ), zn(l), n.pingedTasks.push(l);
          } else {
            l.blockedBoundary = b, l.blockedPreamble = b.contentPreamble, l.hoistableState = b.contentState, l.blockedSegment = C, l.keyPath = e, C.status = 6;
            try {
              if (m(n, l, r, -1), Me(
                C.chunks,
                n.renderState,
                C.lastPushedText,
                C.textEmbedded
              ), C.status = 1, yl(b, C), b.pendingTasks === 0 && b.status === 0) {
                b.status = 1, n.pendingRootTasks === 0 && l.blockedPreamble && Rl(n);
                break n;
              }
            } catch (P) {
              b.status = 4, n.status === 12 ? (C.status = 3, a = n.fatalError) : (C.status = 4, a = P), u = wn(l.componentStack), o = X(
                n,
                a,
                u
              ), b.errorDigest = o, Ke(n, b);
            } finally {
              l.blockedBoundary = h, l.blockedPreamble = i, l.hoistableState = s, l.blockedSegment = f, l.keyPath = t;
            }
            l = ul(
              n,
              null,
              c,
              -1,
              h,
              y,
              b.fallbackPreamble,
              b.fallbackState,
              v,
              [e[0], "Suspense Fallback", e[2]],
              l.formatContext,
              l.context,
              l.treeContext,
              l.componentStack,
              !0
            ), zn(l), n.pingedTasks.push(l);
          }
        }
        return;
    }
    if (typeof t == "object" && t !== null)
      switch (t.$$typeof) {
        case ze:
          if ("ref" in r)
            for (b in a = {}, r)
              b !== "ref" && (a[b] = r[b]);
          else a = r;
          t = lr(
            n,
            l,
            e,
            t.render,
            a,
            i
          ), er(
            n,
            l,
            e,
            t,
            ol !== 0,
            sl,
            dl
          );
          return;
        case Be:
          Kl(n, l, e, t.type, r, i);
          return;
        case Gr:
        case ml:
          if (u = r.children, a = l.keyPath, r = r.value, o = t._currentValue2, t._currentValue2 = r, i = En, En = t = {
            parent: i,
            depth: i === null ? 0 : i.depth + 1,
            context: t,
            parentValue: o,
            value: r
          }, l.context = t, l.keyPath = e, J(n, l, u, -1), n = En, n === null) throw Error(d(403));
          n.context._currentValue2 = n.parentValue, n = En = n.parent, l.context = n, l.keyPath = a;
          return;
        case sr:
          r = r.children, t = r(t._context._currentValue2), r = l.keyPath, l.keyPath = e, J(n, l, t, -1), l.keyPath = r;
          return;
        case pl:
          if (a = t._init, t = a(t._payload), n.status === 12) throw null;
          Kl(n, l, e, t, r, i);
          return;
      }
    throw Error(
      d(130, t == null ? t : typeof t, "")
    );
  }
}
function Qe(n, l, e, t, r) {
  var i = l.replay, a = l.blockedBoundary, c = Nn(
    n,
    0,
    null,
    l.formatContext,
    !1,
    !1
  );
  c.id = e, c.parentFlushed = !0;
  try {
    l.replay = null, l.blockedSegment = c, m(n, l, t, r), c.status = 1, a === null ? n.completedRootSegment = c : (yl(a, c), a.parentFlushed && n.partialBoundaries.push(a));
  } finally {
    l.replay = i, l.blockedSegment = null;
  }
}
function J(n, l, e, t) {
  l.replay !== null && typeof l.replay.slots == "number" ? Qe(n, l, l.replay.slots, e, t) : (l.node = e, l.childIndex = t, e = l.componentStack, zn(l), Se(n, l), l.componentStack = e);
}
function Se(n, l) {
  var e = l.node, t = l.childIndex;
  if (e !== null) {
    if (typeof e == "object") {
      switch (e.$$typeof) {
        case ur:
          var r = e.type, i = e.key, a = e.props;
          e = a.ref;
          var c = e !== void 0 ? e : null, u = Xl(r), f = i ?? (t === -1 ? 0 : t);
          if (i = [l.keyPath, u, f], l.replay !== null)
            n: {
              var o = l.replay;
              for (t = o.nodes, e = 0; e < t.length; e++) {
                var h = t[e];
                if (f === h[1]) {
                  if (h.length === 4) {
                    if (u !== null && u !== h[0])
                      throw Error(
                        d(490, h[0], u)
                      );
                    var s = h[2];
                    u = h[3], f = l.node, l.replay = {
                      nodes: s,
                      slots: u,
                      pendingTasks: 1
                    };
                    try {
                      if (Kl(n, l, i, r, a, c), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
                        throw Error(d(488));
                      l.replay.pendingTasks--;
                    } catch (g) {
                      if (typeof g == "object" && g !== null && (g === Rn || typeof g.then == "function"))
                        throw l.node === f && (l.replay = o), g;
                      l.replay.pendingTasks--, a = wn(l.componentStack), i = l.blockedBoundary, r = g, a = X(n, r, a), Tl(
                        n,
                        i,
                        s,
                        u,
                        r,
                        a
                      );
                    }
                    l.replay = o;
                  } else {
                    if (r !== ql)
                      throw Error(
                        d(
                          490,
                          "Suspense",
                          Xl(r) || "Unknown"
                        )
                      );
                    l: {
                      o = void 0, r = h[5], c = h[2], u = h[3], f = h[4] === null ? [] : h[4][2], h = h[4] === null ? null : h[4][3];
                      var v = l.keyPath, b = l.replay, y = l.blockedBoundary, C = l.hoistableState, P = a.children, w = a.fallback, F = /* @__PURE__ */ new Set();
                      a = 2 > l.formatContext.insertionMode ? vl(
                        n,
                        F,
                        cl(),
                        cl()
                      ) : vl(
                        n,
                        F,
                        null,
                        null
                      ), a.parentFlushed = !0, a.rootSegmentID = r, l.blockedBoundary = a, l.hoistableState = a.contentState, l.keyPath = i, l.replay = {
                        nodes: c,
                        slots: u,
                        pendingTasks: 1
                      };
                      try {
                        if (m(n, l, P, -1), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
                          throw Error(d(488));
                        if (l.replay.pendingTasks--, a.pendingTasks === 0 && a.status === 0) {
                          a.status = 1, n.completedBoundaries.push(a);
                          break l;
                        }
                      } catch (g) {
                        a.status = 4, s = wn(l.componentStack), o = X(
                          n,
                          g,
                          s
                        ), a.errorDigest = o, l.replay.pendingTasks--, n.clientRenderedBoundaries.push(a);
                      } finally {
                        l.blockedBoundary = y, l.hoistableState = C, l.replay = b, l.keyPath = v;
                      }
                      l = Sr(
                        n,
                        null,
                        {
                          nodes: f,
                          slots: h,
                          pendingTasks: 0
                        },
                        w,
                        -1,
                        y,
                        a.fallbackState,
                        F,
                        [i[0], "Suspense Fallback", i[2]],
                        l.formatContext,
                        l.context,
                        l.treeContext,
                        l.componentStack,
                        !0
                      ), zn(l), n.pingedTasks.push(l);
                    }
                  }
                  t.splice(e, 1);
                  break n;
                }
              }
            }
          else Kl(n, l, i, r, a, c);
          return;
        case fr:
          throw Error(d(257));
        case pl:
          if (s = e._init, e = s(e._payload), n.status === 12) throw null;
          J(n, l, e, t);
          return;
      }
      if (Fe(e)) {
        De(n, l, e, t);
        return;
      }
      if (e === null || typeof e != "object" ? s = null : (s = _t && e[_t] || e["@@iterator"], s = typeof s == "function" ? s : null), s && (s = s.call(e))) {
        if (e = s.next(), !e.done) {
          a = [];
          do
            a.push(e.value), e = s.next();
          while (!e.done);
          De(n, l, a, t);
        }
        return;
      }
      if (typeof e.then == "function")
        return l.thenableState = null, J(n, l, Or(e), t);
      if (e.$$typeof === ml)
        return J(
          n,
          l,
          e._currentValue2,
          t
        );
      throw t = Object.prototype.toString.call(e), Error(
        d(
          31,
          t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
        )
      );
    }
    typeof e == "string" ? (t = l.blockedSegment, t !== null && (t.lastPushedText = Qt(
      t.chunks,
      e,
      n.renderState,
      t.lastPushedText
    ))) : (typeof e == "number" || typeof e == "bigint") && (t = l.blockedSegment, t !== null && (t.lastPushedText = Qt(
      t.chunks,
      "" + e,
      n.renderState,
      t.lastPushedText
    )));
  }
}
function De(n, l, e, t) {
  var r = l.keyPath;
  if (t !== -1 && (l.keyPath = [l.keyPath, "Fragment", t], l.replay !== null)) {
    for (var i = l.replay, a = i.nodes, c = 0; c < a.length; c++) {
      var u = a[c];
      if (u[1] === t) {
        t = u[2], u = u[3], l.replay = { nodes: t, slots: u, pendingTasks: 1 };
        try {
          if (De(n, l, e, -1), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
            throw Error(d(488));
          l.replay.pendingTasks--;
        } catch (h) {
          if (typeof h == "object" && h !== null && (h === Rn || typeof h.then == "function"))
            throw h;
          l.replay.pendingTasks--, e = wn(l.componentStack);
          var f = l.blockedBoundary, o = h;
          e = X(n, o, e), Tl(
            n,
            f,
            t,
            u,
            o,
            e
          );
        }
        l.replay = i, a.splice(c, 1);
        break;
      }
    }
    l.keyPath = r;
    return;
  }
  if (i = l.treeContext, a = e.length, l.replay !== null && (c = l.replay.slots, c !== null && typeof c == "object")) {
    for (t = 0; t < a; t++)
      u = e[t], l.treeContext = Ie(i, a, t), f = c[t], typeof f == "number" ? (Qe(n, l, f, u, t), delete c[t]) : m(n, l, u, t);
    l.treeContext = i, l.keyPath = r;
    return;
  }
  for (c = 0; c < a; c++)
    t = e[c], l.treeContext = Ie(i, a, c), m(n, l, t, c);
  l.treeContext = i, l.keyPath = r;
}
function Ke(n, l) {
  n = n.trackedPostpones, n !== null && (l = l.trackedContentKeyPath, l !== null && (l = n.workingMap.get(l), l !== void 0 && (l.length = 4, l[2] = [], l[3] = null)));
}
function tr(n, l, e) {
  return Sr(
    n,
    e,
    l.replay,
    l.node,
    l.childIndex,
    l.blockedBoundary,
    l.hoistableState,
    l.abortSet,
    l.keyPath,
    l.formatContext,
    l.context,
    l.treeContext,
    l.componentStack,
    l.isFallback
  );
}
function rr(n, l, e) {
  var t = l.blockedSegment, r = Nn(
    n,
    t.chunks.length,
    null,
    l.formatContext,
    t.lastPushedText,
    !0
  );
  return t.children.push(r), t.lastPushedText = !1, ul(
    n,
    e,
    l.node,
    l.childIndex,
    l.blockedBoundary,
    r,
    l.blockedPreamble,
    l.hoistableState,
    l.abortSet,
    l.keyPath,
    l.formatContext,
    l.context,
    l.treeContext,
    l.componentStack,
    l.isFallback
  );
}
function m(n, l, e, t) {
  var r = l.formatContext, i = l.context, a = l.keyPath, c = l.treeContext, u = l.componentStack, f = l.blockedSegment;
  if (f === null)
    try {
      return J(n, l, e, t);
    } catch (s) {
      if (gl(), e = s === Rn ? Zl() : s, typeof e == "object" && e !== null) {
        if (typeof e.then == "function") {
          t = Dn(), n = tr(n, l, t).ping, e.then(n, n), l.formatContext = r, l.context = i, l.keyPath = a, l.treeContext = c, l.componentStack = u, an(i);
          return;
        }
        if (e.message === "Maximum call stack size exceeded") {
          e = Dn(), e = tr(n, l, e), n.pingedTasks.push(e), l.formatContext = r, l.context = i, l.keyPath = a, l.treeContext = c, l.componentStack = u, an(i);
          return;
        }
      }
    }
  else {
    var o = f.children.length, h = f.chunks.length;
    try {
      return J(n, l, e, t);
    } catch (s) {
      if (gl(), f.children.length = o, f.chunks.length = h, e = s === Rn ? Zl() : s, typeof e == "object" && e !== null) {
        if (typeof e.then == "function") {
          t = Dn(), n = rr(n, l, t).ping, e.then(n, n), l.formatContext = r, l.context = i, l.keyPath = a, l.treeContext = c, l.componentStack = u, an(i);
          return;
        }
        if (e.message === "Maximum call stack size exceeded") {
          e = Dn(), e = rr(n, l, e), n.pingedTasks.push(e), l.formatContext = r, l.context = i, l.keyPath = a, l.treeContext = c, l.componentStack = u, an(i);
          return;
        }
      }
    }
  }
  throw l.formatContext = r, l.context = i, l.keyPath = a, l.treeContext = c, an(i), e;
}
function Xi(n) {
  var l = n.blockedBoundary;
  n = n.blockedSegment, n !== null && (n.status = 3, Le(this, l, n));
}
function Tl(n, l, e, t, r, i) {
  for (var a = 0; a < e.length; a++) {
    var c = e[a];
    if (c.length === 4)
      Tl(
        n,
        l,
        c[2],
        c[3],
        r,
        i
      );
    else {
      c = c[5];
      var u = n, f = i, o = vl(
        u,
        /* @__PURE__ */ new Set(),
        null,
        null
      );
      o.parentFlushed = !0, o.rootSegmentID = c, o.status = 4, o.errorDigest = f, o.parentFlushed && u.clientRenderedBoundaries.push(o);
    }
  }
  if (e.length = 0, t !== null) {
    if (l === null) throw Error(d(487));
    if (l.status !== 4 && (l.status = 4, l.errorDigest = i, l.parentFlushed && n.clientRenderedBoundaries.push(l)), typeof t == "object") for (var h in t) delete t[h];
  }
}
function Dr(n, l, e) {
  var t = n.blockedBoundary, r = n.blockedSegment;
  if (r !== null) {
    if (r.status === 6) return;
    r.status = 3;
  }
  if (r = wn(n.componentStack), t === null) {
    if (l.status !== 13 && l.status !== 14) {
      if (t = n.replay, t === null) {
        X(l, e, r), bl(l, e);
        return;
      }
      t.pendingTasks--, t.pendingTasks === 0 && 0 < t.nodes.length && (n = X(l, e, r), Tl(
        l,
        null,
        t.nodes,
        t.slots,
        e,
        n
      )), l.pendingRootTasks--, l.pendingRootTasks === 0 && me(l);
    }
  } else
    t.pendingTasks--, t.status !== 4 && (t.status = 4, n = X(l, e, r), t.status = 4, t.errorDigest = n, Ke(l, t), t.parentFlushed && l.clientRenderedBoundaries.push(t)), t.fallbackAbortableTasks.forEach(function(i) {
      return Dr(i, l, e);
    }), t.fallbackAbortableTasks.clear();
  l.allPendingTasks--, l.allPendingTasks === 0 && Vl(l);
}
function Ve(n, l) {
  try {
    var e = n.renderState, t = e.onHeaders;
    if (t) {
      var r = e.headers;
      if (r) {
        e.headers = null;
        var i = r.preconnects;
        if (r.fontPreloads && (i && (i += ", "), i += r.fontPreloads), r.highImagePreloads && (i && (i += ", "), i += r.highImagePreloads), !l) {
          var a = e.styles.values(), c = a.next();
          n: for (; 0 < r.remainingCapacity && !c.done; c = a.next())
            for (var u = c.value.sheets.values(), f = u.next(); 0 < r.remainingCapacity && !f.done; f = u.next()) {
              var o = f.value, h = o.props, s = h.href, v = o.props, b = Gl(v.href, "style", {
                crossOrigin: v.crossOrigin,
                integrity: v.integrity,
                nonce: v.nonce,
                type: v.type,
                fetchPriority: v.fetchPriority,
                referrerPolicy: v.referrerPolicy,
                media: v.media
              });
              if (0 <= (r.remainingCapacity -= b.length + 2))
                e.resets.style[s] = Z, i && (i += ", "), i += b, e.resets.style[s] = typeof h.crossOrigin == "string" || typeof h.integrity == "string" ? [h.crossOrigin, h.integrity] : Z;
              else break n;
            }
        }
        t(i ? { Link: i } : {});
      }
    }
  } catch (y) {
    X(n, y, {});
  }
}
function me(n) {
  n.trackedPostpones === null && Ve(n, !0), n.trackedPostpones === null && Rl(n), n.onShellError = Sn, n = n.onShellReady, n();
}
function Vl(n) {
  Ve(
    n,
    n.trackedPostpones === null ? !0 : n.completedRootSegment === null || n.completedRootSegment.status !== 5
  ), Rl(n), n = n.onAllReady, n();
}
function yl(n, l) {
  if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null && l.children[0].id === -1) {
    var e = l.children[0];
    e.id = l.id, e.parentFlushed = !0, e.status === 1 && yl(n, e);
  } else n.completedSegments.push(l);
}
function Le(n, l, e) {
  if (l === null) {
    if (e !== null && e.parentFlushed) {
      if (n.completedRootSegment !== null)
        throw Error(d(389));
      n.completedRootSegment = e;
    }
    n.pendingRootTasks--, n.pendingRootTasks === 0 && me(n);
  } else
    l.pendingTasks--, l.status !== 4 && (l.pendingTasks === 0 ? (l.status === 0 && (l.status = 1), e !== null && e.parentFlushed && e.status === 1 && yl(l, e), l.parentFlushed && n.completedBoundaries.push(l), l.status === 1 && (l.fallbackAbortableTasks.forEach(Xi, n), l.fallbackAbortableTasks.clear(), n.pendingRootTasks === 0 && n.trackedPostpones === null && l.contentPreamble !== null && Rl(n))) : e !== null && e.parentFlushed && e.status === 1 && (yl(l, e), l.completedSegments.length === 1 && l.parentFlushed && n.partialBoundaries.push(l)));
  n.allPendingTasks--, n.allPendingTasks === 0 && Vl(n);
}
function Lr(n) {
  if (n.status !== 14 && n.status !== 13) {
    var l = En, e = On.H;
    On.H = $t;
    var t = On.A;
    On.A = Wi;
    var r = I;
    I = n;
    var i = Wl;
    Wl = n.resumableState;
    try {
      var a = n.pingedTasks, c;
      for (c = 0; c < a.length; c++) {
        var u = a[c], f = n, o = u.blockedSegment;
        if (o === null) {
          var h = f;
          if (u.replay.pendingTasks !== 0) {
            an(u.context);
            try {
              if (typeof u.replay.slots == "number" ? Qe(
                h,
                u,
                u.replay.slots,
                u.node,
                u.childIndex
              ) : Se(h, u), u.replay.pendingTasks === 1 && 0 < u.replay.nodes.length)
                throw Error(d(488));
              u.replay.pendingTasks--, u.abortSet.delete(u), Le(h, u.blockedBoundary, null);
            } catch (z) {
              gl();
              var s = z === Rn ? Zl() : z;
              if (typeof s == "object" && s !== null && typeof s.then == "function") {
                var v = u.ping;
                s.then(v, v), u.thenableState = Dn();
              } else {
                u.replay.pendingTasks--, u.abortSet.delete(u);
                var b = wn(u.componentStack);
                f = void 0;
                var y = h, C = u.blockedBoundary, P = h.status === 12 ? h.fatalError : s, w = u.replay.nodes, F = u.replay.slots;
                f = X(
                  y,
                  P,
                  b
                ), Tl(
                  y,
                  C,
                  w,
                  F,
                  P,
                  f
                ), h.pendingRootTasks--, h.pendingRootTasks === 0 && me(h), h.allPendingTasks--, h.allPendingTasks === 0 && Vl(h);
              }
            } finally {
            }
          }
        } else if (h = void 0, y = o, y.status === 0) {
          y.status = 6, an(u.context);
          var g = y.children.length, A = y.chunks.length;
          try {
            Se(f, u), Me(
              y.chunks,
              f.renderState,
              y.lastPushedText,
              y.textEmbedded
            ), u.abortSet.delete(u), y.status = 1, Le(f, u.blockedBoundary, y);
          } catch (z) {
            gl(), y.children.length = g, y.chunks.length = A;
            var T = z === Rn ? Zl() : f.status === 12 ? f.fatalError : z;
            if (typeof T == "object" && T !== null && typeof T.then == "function") {
              y.status = 0, u.thenableState = Dn();
              var S = u.ping;
              T.then(S, S);
            } else {
              var U = wn(u.componentStack);
              u.abortSet.delete(u), y.status = 4;
              var _ = u.blockedBoundary;
              h = X(
                f,
                T,
                U
              ), _ === null ? bl(f, T) : (_.pendingTasks--, _.status !== 4 && (_.status = 4, _.errorDigest = h, Ke(f, _), _.parentFlushed && f.clientRenderedBoundaries.push(_), f.pendingRootTasks === 0 && f.trackedPostpones === null && _.contentPreamble !== null && Rl(f))), f.allPendingTasks--, f.allPendingTasks === 0 && Vl(f);
            }
          } finally {
          }
        }
      }
      a.splice(0, c), n.destination !== null && ne(n, n.destination);
    } catch (z) {
      X(n, z, {}), bl(n, z);
    } finally {
      Wl = i, On.H = e, On.A = t, e === $t && an(l), I = r;
    }
  }
}
function Ce(n, l, e) {
  l.preambleChildren.length && e.push(l.preambleChildren);
  for (var t = !1, r = 0; r < l.children.length; r++)
    t = Nr(
      n,
      l.children[r],
      e
    ) || t;
  return t;
}
function Nr(n, l, e) {
  var t = l.boundary;
  if (t === null)
    return Ce(
      n,
      l,
      e
    );
  var r = t.contentPreamble, i = t.fallbackPreamble;
  if (r === null || i === null) return !1;
  switch (t.status) {
    case 1:
      if (Ut(n.renderState, r), l = t.completedSegments[0], !l) throw Error(d(391));
      return Ce(
        n,
        l,
        e
      );
    case 5:
      if (n.trackedPostpones !== null) return !0;
    case 4:
      if (l.status === 1)
        return Ut(n.renderState, i), Ce(
          n,
          l,
          e
        );
    default:
      return !0;
  }
}
function Rl(n) {
  if (n.completedRootSegment && n.completedPreambleSegments === null) {
    var l = [], e = Nr(
      n,
      n.completedRootSegment,
      l
    ), t = n.renderState.preamble;
    (e === !1 || t.headChunks && t.bodyChunks) && (n.completedPreambleSegments = l);
  }
}
function Nl(n, l, e, t) {
  switch (e.parentFlushed = !0, e.status) {
    case 0:
      e.id = n.nextSegmentId++;
    case 5:
      return t = e.id, e.lastPushedText = !1, e.textEmbedded = !1, n = n.renderState, l.push('<template id="'), l.push(n.placeholderPrefix), n = t.toString(16), l.push(n), l.push('"></template>');
    case 1:
      e.status = 2;
      var r = !0, i = e.chunks, a = 0;
      e = e.children;
      for (var c = 0; c < e.length; c++) {
        for (r = e[c]; a < r.index; a++)
          l.push(i[a]);
        r = El(n, l, r, t);
      }
      for (; a < i.length - 1; a++)
        l.push(i[a]);
      return a < i.length && (r = l.push(i[a])), r;
    default:
      throw Error(d(390));
  }
}
function El(n, l, e, t) {
  var r = e.boundary;
  if (r === null)
    return Nl(n, l, e, t);
  if (r.parentFlushed = !0, r.status === 4) {
    if (!n.renderState.generateStaticMarkup) {
      var i = r.errorDigest;
      l.push("<!--$!-->"), l.push("<template"), i && (l.push(' data-dgst="'), i = E(i), l.push(i), l.push('"')), l.push("></template>");
    }
    return Nl(n, l, e, t), n.renderState.generateStaticMarkup ? l = !0 : ((n = r.fallbackPreamble) && Gt(l, n), l = l.push("<!--/$-->")), l;
  }
  if (r.status !== 1)
    return r.status === 0 && (r.rootSegmentID = n.nextSegmentId++), 0 < r.completedSegments.length && n.partialBoundaries.push(r), Yt(
      l,
      n.renderState,
      r.rootSegmentID
    ), t && (r = r.fallbackState, r.styles.forEach(Zt, t), r.stylesheets.forEach(
      Jt,
      t
    )), Nl(n, l, e, t), l.push("<!--/$-->");
  if (r.byteSize > n.progressiveChunkSize)
    return r.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(r), Yt(
      l,
      n.renderState,
      r.rootSegmentID
    ), Nl(n, l, e, t), l.push("<!--/$-->");
  if (t && (e = r.contentState, e.styles.forEach(Zt, t), e.stylesheets.forEach(Jt, t)), n.renderState.generateStaticMarkup || l.push("<!--$-->"), e = r.completedSegments, e.length !== 1) throw Error(d(391));
  return El(n, l, e[0], t), n.renderState.generateStaticMarkup ? l = !0 : ((n = r.contentPreamble) && Gt(l, n), l = l.push("<!--/$-->")), l;
}
function Pe(n, l, e, t) {
  return ii(
    l,
    n.renderState,
    e.parentFormatContext,
    e.id
  ), El(n, l, e, t), ai(l, e.parentFormatContext);
}
function ir(n, l, e) {
  for (var t = e.completedSegments, r = 0; r < t.length; r++)
    zr(
      n,
      l,
      e,
      t[r]
    );
  t.length = 0, Cr(
    l,
    e.contentState,
    n.renderState
  ), t = n.resumableState, n = n.renderState, r = e.rootSegmentID, e = e.contentState;
  var i = n.stylesToHoist;
  return n.stylesToHoist = !1, l.push(n.startInlineScript), i ? (t.instructions & 2) === 0 ? (t.instructions |= 10, l.push(
    `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
  )) : (t.instructions & 8) === 0 ? (t.instructions |= 8, l.push(
    `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
  )) : l.push('$RR("') : (t.instructions & 2) === 0 ? (t.instructions |= 2, l.push(
    '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'
  )) : l.push('$RC("'), t = r.toString(16), l.push(n.boundaryPrefix), l.push(t), l.push('","'), l.push(n.segmentPrefix), l.push(t), i ? (l.push('",'), bi(l, e)) : l.push('"'), e = l.push(")<\/script>"), xr(l, n) && e;
}
function zr(n, l, e, t) {
  if (t.status === 2) return !0;
  var r = e.contentState, i = t.id;
  if (i === -1) {
    if ((t.id = e.rootSegmentID) === -1)
      throw Error(d(392));
    return Pe(n, l, t, r);
  }
  return i === e.rootSegmentID ? Pe(n, l, t, r) : (Pe(n, l, t, r), e = n.resumableState, n = n.renderState, l.push(n.startInlineScript), (e.instructions & 1) === 0 ? (e.instructions |= 1, l.push(
    '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
  )) : l.push('$RS("'), l.push(n.segmentPrefix), i = i.toString(16), l.push(i), l.push('","'), l.push(n.placeholderPrefix), l.push(i), l = l.push('")<\/script>'), l);
}
function ne(n, l) {
  try {
    if (!(0 < n.pendingRootTasks)) {
      var e, t = n.completedRootSegment;
      if (t !== null) {
        if (t.status === 5) return;
        var r = n.completedPreambleSegments;
        if (r === null) return;
        var i = n.renderState, a = i.preamble, c = a.htmlChunks, u = a.headChunks, f;
        if (c) {
          for (f = 0; f < c.length; f++)
            l.push(c[f]);
          if (u)
            for (f = 0; f < u.length; f++)
              l.push(u[f]);
          else {
            var o = O("head");
            l.push(o), l.push(">");
          }
        } else if (u)
          for (f = 0; f < u.length; f++)
            l.push(u[f]);
        var h = i.charsetChunks;
        for (f = 0; f < h.length; f++)
          l.push(h[f]);
        h.length = 0, i.preconnects.forEach(V, l), i.preconnects.clear();
        var s = i.viewportChunks;
        for (f = 0; f < s.length; f++)
          l.push(s[f]);
        s.length = 0, i.fontPreloads.forEach(V, l), i.fontPreloads.clear(), i.highImagePreloads.forEach(V, l), i.highImagePreloads.clear(), i.styles.forEach(di, l);
        var v = i.importMapChunks;
        for (f = 0; f < v.length; f++)
          l.push(v[f]);
        v.length = 0, i.bootstrapScripts.forEach(V, l), i.scripts.forEach(V, l), i.scripts.clear(), i.bulkPreloads.forEach(V, l), i.bulkPreloads.clear();
        var b = i.hoistableChunks;
        for (f = 0; f < b.length; f++)
          l.push(b[f]);
        for (i = b.length = 0; i < r.length; i++) {
          var y = r[i];
          for (a = 0; a < y.length; a++)
            El(n, l, y[a], null);
        }
        var C = n.renderState.preamble, P = C.headChunks;
        if (C.htmlChunks || P) {
          var w = Tn("head");
          l.push(w);
        }
        var F = C.bodyChunks;
        if (F)
          for (r = 0; r < F.length; r++)
            l.push(F[r]);
        El(n, l, t, null), n.completedRootSegment = null, xr(l, n.renderState);
      }
      var g = n.renderState;
      t = 0;
      var A = g.viewportChunks;
      for (t = 0; t < A.length; t++)
        l.push(A[t]);
      A.length = 0, g.preconnects.forEach(V, l), g.preconnects.clear(), g.fontPreloads.forEach(V, l), g.fontPreloads.clear(), g.highImagePreloads.forEach(
        V,
        l
      ), g.highImagePreloads.clear(), g.styles.forEach(vi, l), g.scripts.forEach(V, l), g.scripts.clear(), g.bulkPreloads.forEach(V, l), g.bulkPreloads.clear();
      var T = g.hoistableChunks;
      for (t = 0; t < T.length; t++)
        l.push(T[t]);
      T.length = 0;
      var S = n.clientRenderedBoundaries;
      for (e = 0; e < S.length; e++) {
        var U = S[e];
        g = l;
        var _ = n.resumableState, z = n.renderState, Hn = U.rootSegmentID, Y = U.errorDigest;
        g.push(z.startInlineScript), (_.instructions & 4) === 0 ? (_.instructions |= 4, g.push(
          '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
        )) : g.push('$RX("'), g.push(z.boundaryPrefix);
        var Bn = Hn.toString(16);
        if (g.push(Bn), g.push('"'), Y) {
          g.push(",");
          var en = fi(
            Y || ""
          );
          g.push(en);
        }
        var H = g.push(")<\/script>");
        if (!H) {
          n.destination = null, e++, S.splice(0, e);
          return;
        }
      }
      S.splice(0, e);
      var q = n.completedBoundaries;
      for (e = 0; e < q.length; e++)
        if (!ir(n, l, q[e])) {
          n.destination = null, e++, q.splice(0, e);
          return;
        }
      q.splice(0, e);
      var p = n.partialBoundaries;
      for (e = 0; e < p.length; e++) {
        var Cn = p[e];
        n: {
          S = n, U = l;
          var cn = Cn.completedSegments;
          for (H = 0; H < cn.length; H++)
            if (!zr(
              S,
              U,
              Cn,
              cn[H]
            )) {
              H++, cn.splice(0, H);
              var Wn = !1;
              break n;
            }
          cn.splice(0, H), Wn = Cr(
            U,
            Cn.contentState,
            S.renderState
          );
        }
        if (!Wn) {
          n.destination = null, e++, p.splice(0, e);
          return;
        }
      }
      p.splice(0, e);
      var hn = n.completedBoundaries;
      for (e = 0; e < hn.length; e++)
        if (!ir(n, l, hn[e])) {
          n.destination = null, e++, hn.splice(0, e);
          return;
        }
      hn.splice(0, e);
    }
  } finally {
    n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && (n.flushScheduled = !1, e = n.resumableState, e.hasBody && (p = Tn("body"), l.push(p)), e.hasHtml && (e = Tn("html"), l.push(e)), n.status = 14, l.push(null), n.destination = null);
  }
}
function xn(n) {
  if (n.flushScheduled === !1 && n.pingedTasks.length === 0 && n.destination !== null) {
    n.flushScheduled = !0;
    var l = n.destination;
    l ? ne(n, l) : n.flushScheduled = !1;
  }
}
function Zi(n, l) {
  if (n.status === 13)
    n.status = 14, l.destroy(n.fatalError);
  else if (n.status !== 14 && n.destination === null) {
    n.destination = l;
    try {
      ne(n, l);
    } catch (e) {
      X(n, e, {}), bl(n, e);
    }
  }
}
function Ji(n, l) {
  (n.status === 11 || n.status === 10) && (n.status = 12);
  try {
    var e = n.abortableTasks;
    if (0 < e.size) {
      var t = l === void 0 ? Error(d(432)) : typeof l == "object" && l !== null && typeof l.then == "function" ? Error(d(530)) : l;
      n.fatalError = t, e.forEach(function(r) {
        return Dr(r, n, t);
      }), e.clear();
    }
    n.destination !== null && ne(n, n.destination);
  } catch (r) {
    X(n, r, {}), bl(n, r);
  }
}
function Qi() {
}
function Hr(n, l, e, t) {
  var r = !1, i = null, a = "", c = !1;
  if (l = li(l ? l.identifierPrefix : void 0), n = Gi(
    n,
    l,
    Fi(l, e),
    B(0, null, 0),
    1 / 0,
    Qi,
    void 0,
    function() {
      c = !0;
    },
    void 0,
    void 0,
    void 0
  ), n.flushScheduled = n.destination !== null, Lr(n), n.status === 10 && (n.status = 11), n.trackedPostpones === null && Ve(n, n.pendingRootTasks === 0), Ji(n, t), Zi(n, {
    push: function(u) {
      return u !== null && (a += u), !0;
    },
    destroy: function(u) {
      r = !0, i = u;
    }
  }), r && i !== t) throw i;
  if (!c) throw Error(d(426));
  return a;
}
var mi = Ne.renderToStaticMarkup = function(n, l) {
  return Hr(
    n,
    l,
    !0,
    'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
  );
}, qi = Ne.renderToString = function(n, l) {
  return Hr(
    n,
    l,
    !1,
    'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
  );
}, pi = Ne.version = "19.1.0";
export {
  Ne as default,
  mi as renderToStaticMarkup,
  qi as renderToString,
  pi as version
};
