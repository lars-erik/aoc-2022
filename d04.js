var Fa = Object.defineProperty;
var Na = (s, e, t) => e in s ? Fa(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var sn = (s, e, t) => (Na(s, typeof e != "symbol" ? e + "" : e, t), t);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    n(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const r = {};
    return i.integrity && (r.integrity = i.integrity), i.referrerpolicy && (r.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? r.credentials = "include" : i.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function n(i) {
    if (i.ep)
      return;
    i.ep = !0;
    const r = t(i);
    fetch(i.href, r);
  }
})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Rr = "147", Ua = 0, Gr = 1, za = 2, Ks = 1, Oa = 2, Jn = 3, Bn = 0, Mt = 1, Gt = 2, Kt = 0, zn = 1, Vr = 2, kr = 3, Wr = 4, Ba = 5, Nn = 100, Ga = 101, Va = 102, Hr = 103, Xr = 104, ka = 200, Wa = 201, Ha = 202, Xa = 203, Qs = 204, ea = 205, qa = 206, Ya = 207, Za = 208, ja = 209, $a = 210, Ja = 0, Ka = 1, Qa = 2, yr = 3, eo = 4, to = 5, no = 6, io = 7, ta = 0, ro = 1, so = 2, kt = 0, ao = 1, oo = 2, lo = 3, co = 4, uo = 5, na = 300, Gn = 301, Vn = 302, br = 303, wr = 304, Fi = 306, Tr = 1e3, Et = 1001, Er = 1002, at = 1003, qr = 1004, Yr = 1005, vt = 1006, ho = 1007, Ni = 1008, _n = 1009, fo = 1010, po = 1011, ia = 1012, mo = 1013, dn = 1014, fn = 1015, Qn = 1016, go = 1017, _o = 1018, On = 1020, xo = 1021, vo = 1022, At = 1023, Mo = 1024, So = 1025, pn = 1026, kn = 1027, yo = 1028, bo = 1029, wo = 1030, To = 1031, Eo = 1033, Wi = 33776, Hi = 33777, Xi = 33778, qi = 33779, Zr = 35840, jr = 35841, $r = 35842, Jr = 35843, Ao = 36196, Kr = 37492, Qr = 37496, es = 37808, ts = 37809, ns = 37810, is = 37811, rs = 37812, ss = 37813, as = 37814, os = 37815, ls = 37816, cs = 37817, us = 37818, hs = 37819, ds = 37820, fs = 37821, ps = 36492, xn = 3e3, ze = 3001, Co = 3200, Lo = 3201, Do = 0, Ro = 1, Ct = "srgb", ei = "srgb-linear", Yi = 7680, Po = 519, ms = 35044, gs = "300 es", Ar = 1035;
class Hn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, o = i.length; r < o; r++)
        i[r].call(this, e);
      e.target = null;
    }
  }
}
const Qe = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Zi = Math.PI / 180, _s = 180 / Math.PI;
function ti() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Qe[s & 255] + Qe[s >> 8 & 255] + Qe[s >> 16 & 255] + Qe[s >> 24 & 255] + "-" + Qe[e & 255] + Qe[e >> 8 & 255] + "-" + Qe[e >> 16 & 15 | 64] + Qe[e >> 24 & 255] + "-" + Qe[t & 63 | 128] + Qe[t >> 8 & 255] + "-" + Qe[t >> 16 & 255] + Qe[t >> 24 & 255] + Qe[n & 255] + Qe[n >> 8 & 255] + Qe[n >> 16 & 255] + Qe[n >> 24 & 255]).toLowerCase();
}
function dt(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function Io(s, e) {
  return (s % e + e) % e;
}
function ji(s, e, t) {
  return (1 - t) * s + t * e;
}
function xs(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function Cr(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function ai(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function ct(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Fe {
  constructor(e = 0, t = 0) {
    Fe.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, o = this.y - e.y;
    return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class ft {
  constructor() {
    ft.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, r, o, a, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = r, h[5] = c, h[6] = n, h[7] = o, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], h = n[4], d = n[7], f = n[2], m = n[5], v = n[8], p = i[0], u = i[3], x = i[6], T = i[1], w = i[4], b = i[7], S = i[2], L = i[5], F = i[8];
    return r[0] = o * p + a * T + c * S, r[3] = o * u + a * w + c * L, r[6] = o * x + a * b + c * F, r[1] = l * p + h * T + d * S, r[4] = l * u + h * w + d * L, r[7] = l * x + h * b + d * F, r[2] = f * p + m * T + v * S, r[5] = f * u + m * w + v * L, r[8] = f * x + m * b + v * F, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8];
    return t * o * h - t * a * l - n * r * h + n * a * c + i * r * l - i * o * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], d = h * o - a * l, f = a * c - h * r, m = l * r - o * c, v = t * d + n * f + i * m;
    if (v === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / v;
    return e[0] = d * p, e[1] = (i * l - h * n) * p, e[2] = (a * n - i * o) * p, e[3] = f * p, e[4] = (h * t - i * c) * p, e[5] = (i * r - a * t) * p, e[6] = m * p, e[7] = (n * c - l * t) * p, e[8] = (o * t - n * r) * p, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, r, o, a) {
    const c = Math.cos(r), l = Math.sin(r);
    return this.set(
      n * c,
      n * l,
      -n * (c * o + l * a) + o + e,
      -i * l,
      i * c,
      -i * (-l * o + c * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  scale(e, t) {
    return this.premultiply($i.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply($i.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply($i.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const $i = /* @__PURE__ */ new ft();
function ra(s) {
  for (let e = s.length - 1; e >= 0; --e)
    if (s[e] >= 65535)
      return !0;
  return !1;
}
function Pi(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function mn(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Ci(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
const Ji = {
  [Ct]: { [ei]: mn },
  [ei]: { [Ct]: Ci }
}, rt = {
  legacyMode: !0,
  get workingColorSpace() {
    return ei;
  },
  set workingColorSpace(s) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(s, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return s;
    if (Ji[e] && Ji[e][t] !== void 0) {
      const n = Ji[e][t];
      return s.r = n(s.r), s.g = n(s.g), s.b = n(s.b), s;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(s, e) {
    return this.convert(s, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(s, e) {
    return this.convert(s, e, this.workingColorSpace);
  }
}, sa = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, We = { r: 0, g: 0, b: 0 }, yt = { h: 0, s: 0, l: 0 }, oi = { h: 0, s: 0, l: 0 };
function Ki(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
function li(s, e) {
  return e.r = s.r, e.g = s.g, e.b = s.b, e;
}
class Oe {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Ct) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, rt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = rt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, rt.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = rt.workingColorSpace) {
    if (e = Io(e, 1), t = dt(t, 0, 1), n = dt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r;
      this.r = Ki(o, r, e + 1 / 3), this.g = Ki(o, r, e), this.b = Ki(o, r, e - 1 / 3);
    }
    return rt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Ct) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
      let r;
      const o = i[1], a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, rt.toWorkingColorSpace(this, t), n(r[4]), this;
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, rt.toWorkingColorSpace(this, t), n(r[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
            const c = parseFloat(r[1]) / 360, l = parseFloat(r[2]) / 100, h = parseFloat(r[3]) / 100;
            return n(r[4]), this.setHSL(c, l, h, t);
          }
          break;
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], o = r.length;
      if (o === 3)
        return this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255, this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255, this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255, rt.toWorkingColorSpace(this, t), this;
      if (o === 6)
        return this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255, this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255, this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255, rt.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Ct) {
    const n = sa[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = mn(e.r), this.g = mn(e.g), this.b = mn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ci(e.r), this.g = Ci(e.g), this.b = Ci(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ct) {
    return rt.fromWorkingColorSpace(li(this, We), e), dt(We.r * 255, 0, 255) << 16 ^ dt(We.g * 255, 0, 255) << 8 ^ dt(We.b * 255, 0, 255) << 0;
  }
  getHexString(e = Ct) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = rt.workingColorSpace) {
    rt.fromWorkingColorSpace(li(this, We), t);
    const n = We.r, i = We.g, r = We.b, o = Math.max(n, i, r), a = Math.min(n, i, r);
    let c, l;
    const h = (a + o) / 2;
    if (a === o)
      c = 0, l = 0;
    else {
      const d = o - a;
      switch (l = h <= 0.5 ? d / (o + a) : d / (2 - o - a), o) {
        case n:
          c = (i - r) / d + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - n) / d + 2;
          break;
        case r:
          c = (n - i) / d + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = rt.workingColorSpace) {
    return rt.fromWorkingColorSpace(li(this, We), t), e.r = We.r, e.g = We.g, e.b = We.b, e;
  }
  getStyle(e = Ct) {
    return rt.fromWorkingColorSpace(li(this, We), e), e !== Ct ? `color(${e} ${We.r} ${We.g} ${We.b})` : `rgb(${We.r * 255 | 0},${We.g * 255 | 0},${We.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(yt), yt.h += e, yt.s += t, yt.l += n, this.setHSL(yt.h, yt.s, yt.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(yt), e.getHSL(oi);
    const n = ji(yt.h, oi.h, t), i = ji(yt.s, oi.s, t), r = ji(yt.l, oi.l, t);
    return this.setHSL(n, i, r), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
Oe.NAMES = sa;
let Sn;
class aa {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Sn === void 0 && (Sn = Pi("canvas")), Sn.width = e.width, Sn.height = e.height;
      const n = Sn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Sn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Pi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let o = 0; o < r.length; o++)
        r[o] = mn(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(mn(t[n] / 255) * 255) : t[n] = mn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class oa {
  constructor(e = null) {
    this.isSource = !0, this.uuid = ti(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? r.push(Qi(i[o].image)) : r.push(Qi(i[o]));
      } else
        r = Qi(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Qi(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? aa.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Fo = 0;
class pt extends Hn {
  constructor(e = pt.DEFAULT_IMAGE, t = pt.DEFAULT_MAPPING, n = Et, i = Et, r = vt, o = Ni, a = At, c = _n, l = pt.DEFAULT_ANISOTROPY, h = xn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Fo++ }), this.uuid = ti(), this.name = "", this.source = new oa(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new Fe(0, 0), this.repeat = new Fe(1, 1), this.center = new Fe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ft(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== na)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case Tr:
          e.x = e.x - Math.floor(e.x);
          break;
        case Et:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Er:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Tr:
          e.y = e.y - Math.floor(e.y);
          break;
        case Et:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Er:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
pt.DEFAULT_IMAGE = null;
pt.DEFAULT_MAPPING = na;
pt.DEFAULT_ANISOTROPY = 1;
class $e {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    $e.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const c = e.elements, l = c[0], h = c[4], d = c[8], f = c[1], m = c[5], v = c[9], p = c[2], u = c[6], x = c[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(d - p) < 0.01 && Math.abs(v - u) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(d + p) < 0.1 && Math.abs(v + u) < 0.1 && Math.abs(l + m + x - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const w = (l + 1) / 2, b = (m + 1) / 2, S = (x + 1) / 2, L = (h + f) / 4, F = (d + p) / 4, g = (v + u) / 4;
      return w > b && w > S ? w < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(w), i = L / n, r = F / n) : b > S ? b < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(b), n = L / i, r = g / i) : S < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(S), n = F / r, i = g / r), this.set(n, i, r, t), this;
    }
    let T = Math.sqrt((u - v) * (u - v) + (d - p) * (d - p) + (f - h) * (f - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (u - v) / T, this.y = (d - p) / T, this.z = (f - h) / T, this.w = Math.acos((l + m + x - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class vn extends Hn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new $e(0, 0, e, t), this.scissorTest = !1, this.viewport = new $e(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new pt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : vt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new oa(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class la extends pt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = at, this.minFilter = at, this.wrapR = Et, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class No extends pt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = at, this.minFilter = at, this.wrapR = Et, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ni {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, o, a) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], d = n[i + 3];
    const f = r[o + 0], m = r[o + 1], v = r[o + 2], p = r[o + 3];
    if (a === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
      return;
    }
    if (a === 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = v, e[t + 3] = p;
      return;
    }
    if (d !== p || c !== f || l !== m || h !== v) {
      let u = 1 - a;
      const x = c * f + l * m + h * v + d * p, T = x >= 0 ? 1 : -1, w = 1 - x * x;
      if (w > Number.EPSILON) {
        const S = Math.sqrt(w), L = Math.atan2(S, x * T);
        u = Math.sin(u * L) / S, a = Math.sin(a * L) / S;
      }
      const b = a * T;
      if (c = c * u + f * b, l = l * u + m * b, h = h * u + v * b, d = d * u + p * b, u === 1 - a) {
        const S = 1 / Math.sqrt(c * c + l * l + h * h + d * d);
        c *= S, l *= S, h *= S, d *= S;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, o) {
    const a = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], d = r[o], f = r[o + 1], m = r[o + 2], v = r[o + 3];
    return e[t] = a * v + h * d + c * m - l * f, e[t + 1] = c * v + h * f + l * d - a * m, e[t + 2] = l * v + h * m + a * f - c * d, e[t + 3] = h * v - a * d - c * f - l * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, i = e._y, r = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), h = a(i / 2), d = a(r / 2), f = c(n / 2), m = c(i / 2), v = c(r / 2);
    switch (o) {
      case "XYZ":
        this._x = f * h * d + l * m * v, this._y = l * m * d - f * h * v, this._z = l * h * v + f * m * d, this._w = l * h * d - f * m * v;
        break;
      case "YXZ":
        this._x = f * h * d + l * m * v, this._y = l * m * d - f * h * v, this._z = l * h * v - f * m * d, this._w = l * h * d + f * m * v;
        break;
      case "ZXY":
        this._x = f * h * d - l * m * v, this._y = l * m * d + f * h * v, this._z = l * h * v + f * m * d, this._w = l * h * d - f * m * v;
        break;
      case "ZYX":
        this._x = f * h * d - l * m * v, this._y = l * m * d + f * h * v, this._z = l * h * v - f * m * d, this._w = l * h * d + f * m * v;
        break;
      case "YZX":
        this._x = f * h * d + l * m * v, this._y = l * m * d + f * h * v, this._z = l * h * v - f * m * d, this._w = l * h * d - f * m * v;
        break;
      case "XZY":
        this._x = f * h * d - l * m * v, this._y = l * m * d - f * h * v, this._z = l * h * v + f * m * d, this._w = l * h * d + f * m * v;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], o = t[1], a = t[5], c = t[9], l = t[2], h = t[6], d = t[10], f = n + a + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (h - c) * m, this._y = (r - l) * m, this._z = (o - i) * m;
    } else if (n > a && n > d) {
      const m = 2 * Math.sqrt(1 + n - a - d);
      this._w = (h - c) / m, this._x = 0.25 * m, this._y = (i + o) / m, this._z = (r + l) / m;
    } else if (a > d) {
      const m = 2 * Math.sqrt(1 + a - n - d);
      this._w = (r - l) / m, this._x = (i + o) / m, this._y = 0.25 * m, this._z = (c + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + d - n - a);
      this._w = (o - i) / m, this._x = (r + l) / m, this._y = (c + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(dt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, o = e._w, a = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + o * a + i * l - r * c, this._y = i * h + o * c + r * a - n * l, this._z = r * h + o * l + n * c - i * a, this._w = o * h - n * a - i * c - r * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, r = this._z, o = this._w;
    let a = o * e._w + n * e._x + i * e._y + r * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = i, this._z = r, this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * r + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, a), d = Math.sin((1 - t) * h) / l, f = Math.sin(t * h) / l;
    return this._w = o * d + this._w * f, this._x = n * d + this._x * f, this._y = i * d + this._y * f, this._z = r * d + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class I {
  constructor(e = 0, t = 0, n = 0) {
    I.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(vs.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(vs.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, o = e.y, a = e.z, c = e.w, l = c * t + o * i - a * n, h = c * n + a * t - r * i, d = c * i + r * n - o * t, f = -r * t - o * n - a * i;
    return this.x = l * c + f * -r + h * -a - d * -o, this.y = h * c + f * -o + d * -r - l * -a, this.z = d * c + f * -a + l * -o - h * -r, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, r = e.z, o = t.x, a = t.y, c = t.z;
    return this.x = i * c - r * a, this.y = r * o - n * c, this.z = n * a - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return er.copy(this).projectOnVector(e), this.sub(er);
  }
  reflect(e) {
    return this.sub(er.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(dt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const er = /* @__PURE__ */ new I(), vs = /* @__PURE__ */ new ni();
class ii {
  constructor(e = new I(1 / 0, 1 / 0, 1 / 0), t = new I(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0;
    for (let c = 0, l = e.length; c < l; c += 3) {
      const h = e[c], d = e[c + 1], f = e[c + 2];
      h < t && (t = h), d < n && (n = d), f < i && (i = f), h > r && (r = h), d > o && (o = d), f > a && (a = f);
    }
    return this.min.set(t, n, i), this.max.set(r, o, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0;
    for (let c = 0, l = e.count; c < l; c++) {
      const h = e.getX(c), d = e.getY(c), f = e.getZ(c);
      h < t && (t = h), d < n && (n = d), f < i && (i = f), h > r && (r = h), d > o && (o = d), f > a && (a = f);
    }
    return this.min.set(t, n, i), this.max.set(r, o, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = an.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const r = n.attributes.position;
        for (let o = 0, a = r.count; o < a; o++)
          an.fromBufferAttribute(r, o).applyMatrix4(e.matrixWorld), this.expandByPoint(an);
      } else
        n.boundingBox === null && n.computeBoundingBox(), tr.copy(n.boundingBox), tr.applyMatrix4(e.matrixWorld), this.union(tr);
    const i = e.children;
    for (let r = 0, o = i.length; r < o; r++)
      this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, an), an.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Yn), ci.subVectors(this.max, Yn), yn.subVectors(e.a, Yn), bn.subVectors(e.b, Yn), wn.subVectors(e.c, Yn), Ht.subVectors(bn, yn), Xt.subVectors(wn, bn), on.subVectors(yn, wn);
    let t = [
      0,
      -Ht.z,
      Ht.y,
      0,
      -Xt.z,
      Xt.y,
      0,
      -on.z,
      on.y,
      Ht.z,
      0,
      -Ht.x,
      Xt.z,
      0,
      -Xt.x,
      on.z,
      0,
      -on.x,
      -Ht.y,
      Ht.x,
      0,
      -Xt.y,
      Xt.x,
      0,
      -on.y,
      on.x,
      0
    ];
    return !nr(t, yn, bn, wn, ci) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !nr(t, yn, bn, wn, ci)) ? !1 : (ui.crossVectors(Ht, Xt), t = [ui.x, ui.y, ui.z], nr(t, yn, bn, wn, ci));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return an.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(an).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Ft[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Ft[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Ft[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Ft[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Ft[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Ft[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Ft[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Ft[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Ft), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Ft = [
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I()
], an = /* @__PURE__ */ new I(), tr = /* @__PURE__ */ new ii(), yn = /* @__PURE__ */ new I(), bn = /* @__PURE__ */ new I(), wn = /* @__PURE__ */ new I(), Ht = /* @__PURE__ */ new I(), Xt = /* @__PURE__ */ new I(), on = /* @__PURE__ */ new I(), Yn = /* @__PURE__ */ new I(), ci = /* @__PURE__ */ new I(), ui = /* @__PURE__ */ new I(), ln = /* @__PURE__ */ new I();
function nr(s, e, t, n, i) {
  for (let r = 0, o = s.length - 3; r <= o; r += 3) {
    ln.fromArray(s, r);
    const a = i.x * Math.abs(ln.x) + i.y * Math.abs(ln.y) + i.z * Math.abs(ln.z), c = e.dot(ln), l = t.dot(ln), h = n.dot(ln);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a)
      return !1;
  }
  return !0;
}
const Uo = /* @__PURE__ */ new ii(), Zn = /* @__PURE__ */ new I(), ir = /* @__PURE__ */ new I();
class Pr {
  constructor(e = new I(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Uo.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, o = e.length; r < o; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    Zn.subVectors(e, this.center);
    const t = Zn.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Zn, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ir.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Zn.copy(e.center).add(ir)), this.expandByPoint(Zn.copy(e.center).sub(ir))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Nt = /* @__PURE__ */ new I(), rr = /* @__PURE__ */ new I(), hi = /* @__PURE__ */ new I(), qt = /* @__PURE__ */ new I(), sr = /* @__PURE__ */ new I(), di = /* @__PURE__ */ new I(), ar = /* @__PURE__ */ new I();
class zo {
  constructor(e = new I(), t = new I(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Nt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Nt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Nt.copy(this.direction).multiplyScalar(t).add(this.origin), Nt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    rr.copy(e).add(t).multiplyScalar(0.5), hi.copy(t).sub(e).normalize(), qt.copy(this.origin).sub(rr);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(hi), a = qt.dot(this.direction), c = -qt.dot(hi), l = qt.lengthSq(), h = Math.abs(1 - o * o);
    let d, f, m, v;
    if (h > 0)
      if (d = o * c - a, f = o * a - c, v = r * h, d >= 0)
        if (f >= -v)
          if (f <= v) {
            const p = 1 / h;
            d *= p, f *= p, m = d * (d + o * f + 2 * a) + f * (o * d + f + 2 * c) + l;
          } else
            f = r, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * c) + l;
        else
          f = -r, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * c) + l;
      else
        f <= -v ? (d = Math.max(0, -(-o * r + a)), f = d > 0 ? -r : Math.min(Math.max(-r, -c), r), m = -d * d + f * (f + 2 * c) + l) : f <= v ? (d = 0, f = Math.min(Math.max(-r, -c), r), m = f * (f + 2 * c) + l) : (d = Math.max(0, -(o * r + a)), f = d > 0 ? r : Math.min(Math.max(-r, -c), r), m = -d * d + f * (f + 2 * c) + l);
    else
      f = o > 0 ? -r : r, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * c) + l;
    return n && n.copy(this.direction).multiplyScalar(d).add(this.origin), i && i.copy(hi).multiplyScalar(f).add(rr), m;
  }
  intersectSphere(e, t) {
    Nt.subVectors(e.center, this.origin);
    const n = Nt.dot(this.direction), i = Nt.dot(Nt) - n * n, r = e.radius * e.radius;
    if (i > r)
      return null;
    const o = Math.sqrt(r - i), a = n - o, c = n + o;
    return a < 0 && c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, o, a, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (e.min.x - f.x) * l, i = (e.max.x - f.x) * l) : (n = (e.max.x - f.x) * l, i = (e.min.x - f.x) * l), h >= 0 ? (r = (e.min.y - f.y) * h, o = (e.max.y - f.y) * h) : (r = (e.max.y - f.y) * h, o = (e.min.y - f.y) * h), n > o || r > i || ((r > n || isNaN(n)) && (n = r), (o < i || isNaN(i)) && (i = o), d >= 0 ? (a = (e.min.z - f.z) * d, c = (e.max.z - f.z) * d) : (a = (e.max.z - f.z) * d, c = (e.min.z - f.z) * d), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Nt) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    sr.subVectors(t, e), di.subVectors(n, e), ar.crossVectors(sr, di);
    let o = this.direction.dot(ar), a;
    if (o > 0) {
      if (i)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    qt.subVectors(this.origin, e);
    const c = a * this.direction.dot(di.crossVectors(qt, di));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(sr.cross(qt));
    if (l < 0 || c + l > o)
      return null;
    const h = -a * qt.dot(ar);
    return h < 0 ? null : this.at(h / o, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Je {
  constructor() {
    Je.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, r, o, a, c, l, h, d, f, m, v, p, u) {
    const x = this.elements;
    return x[0] = e, x[4] = t, x[8] = n, x[12] = i, x[1] = r, x[5] = o, x[9] = a, x[13] = c, x[2] = l, x[6] = h, x[10] = d, x[14] = f, x[3] = m, x[7] = v, x[11] = p, x[15] = u, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Je().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Tn.setFromMatrixColumn(e, 0).length(), r = 1 / Tn.setFromMatrixColumn(e, 1).length(), o = 1 / Tn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(r), d = Math.sin(r);
    if (e.order === "XYZ") {
      const f = o * h, m = o * d, v = a * h, p = a * d;
      t[0] = c * h, t[4] = -c * d, t[8] = l, t[1] = m + v * l, t[5] = f - p * l, t[9] = -a * c, t[2] = p - f * l, t[6] = v + m * l, t[10] = o * c;
    } else if (e.order === "YXZ") {
      const f = c * h, m = c * d, v = l * h, p = l * d;
      t[0] = f + p * a, t[4] = v * a - m, t[8] = o * l, t[1] = o * d, t[5] = o * h, t[9] = -a, t[2] = m * a - v, t[6] = p + f * a, t[10] = o * c;
    } else if (e.order === "ZXY") {
      const f = c * h, m = c * d, v = l * h, p = l * d;
      t[0] = f - p * a, t[4] = -o * d, t[8] = v + m * a, t[1] = m + v * a, t[5] = o * h, t[9] = p - f * a, t[2] = -o * l, t[6] = a, t[10] = o * c;
    } else if (e.order === "ZYX") {
      const f = o * h, m = o * d, v = a * h, p = a * d;
      t[0] = c * h, t[4] = v * l - m, t[8] = f * l + p, t[1] = c * d, t[5] = p * l + f, t[9] = m * l - v, t[2] = -l, t[6] = a * c, t[10] = o * c;
    } else if (e.order === "YZX") {
      const f = o * c, m = o * l, v = a * c, p = a * l;
      t[0] = c * h, t[4] = p - f * d, t[8] = v * d + m, t[1] = d, t[5] = o * h, t[9] = -a * h, t[2] = -l * h, t[6] = m * d + v, t[10] = f - p * d;
    } else if (e.order === "XZY") {
      const f = o * c, m = o * l, v = a * c, p = a * l;
      t[0] = c * h, t[4] = -d, t[8] = l * h, t[1] = f * d + p, t[5] = o * h, t[9] = m * d - v, t[2] = v * d - m, t[6] = a * h, t[10] = p * d + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Oo, e, Bo);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return ut.subVectors(e, t), ut.lengthSq() === 0 && (ut.z = 1), ut.normalize(), Yt.crossVectors(n, ut), Yt.lengthSq() === 0 && (Math.abs(n.z) === 1 ? ut.x += 1e-4 : ut.z += 1e-4, ut.normalize(), Yt.crossVectors(n, ut)), Yt.normalize(), fi.crossVectors(ut, Yt), i[0] = Yt.x, i[4] = fi.x, i[8] = ut.x, i[1] = Yt.y, i[5] = fi.y, i[9] = ut.y, i[2] = Yt.z, i[6] = fi.z, i[10] = ut.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], h = n[1], d = n[5], f = n[9], m = n[13], v = n[2], p = n[6], u = n[10], x = n[14], T = n[3], w = n[7], b = n[11], S = n[15], L = i[0], F = i[4], g = i[8], E = i[12], P = i[1], q = i[5], oe = i[9], N = i[13], R = i[2], X = i[6], $ = i[10], Z = i[14], H = i[3], Q = i[7], J = i[11], U = i[15];
    return r[0] = o * L + a * P + c * R + l * H, r[4] = o * F + a * q + c * X + l * Q, r[8] = o * g + a * oe + c * $ + l * J, r[12] = o * E + a * N + c * Z + l * U, r[1] = h * L + d * P + f * R + m * H, r[5] = h * F + d * q + f * X + m * Q, r[9] = h * g + d * oe + f * $ + m * J, r[13] = h * E + d * N + f * Z + m * U, r[2] = v * L + p * P + u * R + x * H, r[6] = v * F + p * q + u * X + x * Q, r[10] = v * g + p * oe + u * $ + x * J, r[14] = v * E + p * N + u * Z + x * U, r[3] = T * L + w * P + b * R + S * H, r[7] = T * F + w * q + b * X + S * Q, r[11] = T * g + w * oe + b * $ + S * J, r[15] = T * E + w * N + b * Z + S * U, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], o = e[1], a = e[5], c = e[9], l = e[13], h = e[2], d = e[6], f = e[10], m = e[14], v = e[3], p = e[7], u = e[11], x = e[15];
    return v * (+r * c * d - i * l * d - r * a * f + n * l * f + i * a * m - n * c * m) + p * (+t * c * m - t * l * f + r * o * f - i * o * m + i * l * h - r * c * h) + u * (+t * l * d - t * a * m - r * o * d + n * o * m + r * a * h - n * l * h) + x * (-i * a * h - t * c * d + t * a * f + i * o * d - n * o * f + n * c * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], d = e[9], f = e[10], m = e[11], v = e[12], p = e[13], u = e[14], x = e[15], T = d * u * l - p * f * l + p * c * m - a * u * m - d * c * x + a * f * x, w = v * f * l - h * u * l - v * c * m + o * u * m + h * c * x - o * f * x, b = h * p * l - v * d * l + v * a * m - o * p * m - h * a * x + o * d * x, S = v * d * c - h * p * c - v * a * f + o * p * f + h * a * u - o * d * u, L = t * T + n * w + i * b + r * S;
    if (L === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const F = 1 / L;
    return e[0] = T * F, e[1] = (p * f * r - d * u * r - p * i * m + n * u * m + d * i * x - n * f * x) * F, e[2] = (a * u * r - p * c * r + p * i * l - n * u * l - a * i * x + n * c * x) * F, e[3] = (d * c * r - a * f * r - d * i * l + n * f * l + a * i * m - n * c * m) * F, e[4] = w * F, e[5] = (h * u * r - v * f * r + v * i * m - t * u * m - h * i * x + t * f * x) * F, e[6] = (v * c * r - o * u * r - v * i * l + t * u * l + o * i * x - t * c * x) * F, e[7] = (o * f * r - h * c * r + h * i * l - t * f * l - o * i * m + t * c * m) * F, e[8] = b * F, e[9] = (v * d * r - h * p * r - v * n * m + t * p * m + h * n * x - t * d * x) * F, e[10] = (o * p * r - v * a * r + v * n * l - t * p * l - o * n * x + t * a * x) * F, e[11] = (h * a * r - o * d * r - h * n * l + t * d * l + o * n * m - t * a * m) * F, e[12] = S * F, e[13] = (h * p * i - v * d * i + v * n * f - t * p * f - h * n * u + t * d * u) * F, e[14] = (v * a * i - o * p * i - v * n * c + t * p * c + o * n * u - t * a * u) * F, e[15] = (o * d * i - h * a * i + h * n * c - t * d * c - o * n * f + t * a * f) * F, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, o = e.x, a = e.y, c = e.z, l = r * o, h = r * a;
    return this.set(
      l * o + n,
      l * a - i * c,
      l * c + i * a,
      0,
      l * a + i * c,
      h * a + n,
      h * c - i * o,
      0,
      l * c - i * a,
      h * c + i * o,
      r * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, r, o) {
    return this.set(
      1,
      n,
      r,
      0,
      e,
      1,
      o,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, o = t._y, a = t._z, c = t._w, l = r + r, h = o + o, d = a + a, f = r * l, m = r * h, v = r * d, p = o * h, u = o * d, x = a * d, T = c * l, w = c * h, b = c * d, S = n.x, L = n.y, F = n.z;
    return i[0] = (1 - (p + x)) * S, i[1] = (m + b) * S, i[2] = (v - w) * S, i[3] = 0, i[4] = (m - b) * L, i[5] = (1 - (f + x)) * L, i[6] = (u + T) * L, i[7] = 0, i[8] = (v + w) * F, i[9] = (u - T) * F, i[10] = (1 - (f + p)) * F, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = Tn.set(i[0], i[1], i[2]).length();
    const o = Tn.set(i[4], i[5], i[6]).length(), a = Tn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], bt.copy(this);
    const l = 1 / r, h = 1 / o, d = 1 / a;
    return bt.elements[0] *= l, bt.elements[1] *= l, bt.elements[2] *= l, bt.elements[4] *= h, bt.elements[5] *= h, bt.elements[6] *= h, bt.elements[8] *= d, bt.elements[9] *= d, bt.elements[10] *= d, t.setFromRotationMatrix(bt), n.x = r, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, r, o) {
    const a = this.elements, c = 2 * r / (t - e), l = 2 * r / (n - i), h = (t + e) / (t - e), d = (n + i) / (n - i), f = -(o + r) / (o - r), m = -2 * o * r / (o - r);
    return a[0] = c, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = l, a[9] = d, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = f, a[14] = m, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, o) {
    const a = this.elements, c = 1 / (t - e), l = 1 / (n - i), h = 1 / (o - r), d = (t + e) * c, f = (n + i) * l, m = (o + r) * h;
    return a[0] = 2 * c, a[4] = 0, a[8] = 0, a[12] = -d, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -f, a[2] = 0, a[6] = 0, a[10] = -2 * h, a[14] = -m, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Tn = /* @__PURE__ */ new I(), bt = /* @__PURE__ */ new Je(), Oo = /* @__PURE__ */ new I(0, 0, 0), Bo = /* @__PURE__ */ new I(1, 1, 1), Yt = /* @__PURE__ */ new I(), fi = /* @__PURE__ */ new I(), ut = /* @__PURE__ */ new I(), Ms = /* @__PURE__ */ new Je(), Ss = /* @__PURE__ */ new ni();
class ri {
  constructor(e = 0, t = 0, n = 0, i = ri.DefaultOrder) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, r = i[0], o = i[4], a = i[8], c = i[1], l = i[5], h = i[9], d = i[2], f = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(dt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-dt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(dt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-dt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(dt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-d, r)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-dt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ms.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ms, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ss.setFromEuler(this), this.setFromQuaternion(Ss, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
  }
}
ri.DefaultOrder = "XYZ";
ri.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class ca {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Go = 0;
const ys = /* @__PURE__ */ new I(), En = /* @__PURE__ */ new ni(), Ut = /* @__PURE__ */ new Je(), pi = /* @__PURE__ */ new I(), jn = /* @__PURE__ */ new I(), Vo = /* @__PURE__ */ new I(), ko = /* @__PURE__ */ new ni(), bs = /* @__PURE__ */ new I(1, 0, 0), ws = /* @__PURE__ */ new I(0, 1, 0), Ts = /* @__PURE__ */ new I(0, 0, 1), Wo = { type: "added" }, Es = { type: "removed" };
class mt extends Hn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Go++ }), this.uuid = ti(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = mt.DefaultUp.clone();
    const e = new I(), t = new ri(), n = new ni(), i = new I(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Je()
      },
      normalMatrix: {
        value: new ft()
      }
    }), this.matrix = new Je(), this.matrixWorld = new Je(), this.matrixAutoUpdate = mt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = mt.DefaultMatrixWorldAutoUpdate, this.layers = new ca(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return En.setFromAxisAngle(e, t), this.quaternion.multiply(En), this;
  }
  rotateOnWorldAxis(e, t) {
    return En.setFromAxisAngle(e, t), this.quaternion.premultiply(En), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(bs, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(ws, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ts, e);
  }
  translateOnAxis(e, t) {
    return ys.copy(e).applyQuaternion(this.quaternion), this.position.add(ys.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(bs, e);
  }
  translateY(e) {
    return this.translateOnAxis(ws, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ts, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(Ut.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? pi.copy(e) : pi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), jn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ut.lookAt(jn, pi, this.up) : Ut.lookAt(pi, jn, this.up), this.quaternion.setFromRotationMatrix(Ut), i && (Ut.extractRotation(i.matrixWorld), En.setFromRotationMatrix(Ut), this.quaternion.premultiply(En.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Wo)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Es)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Es);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Ut.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Ut.multiply(e.parent.matrixWorld)), e.applyMatrix4(Ut), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(jn, e, Vo), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(jn, ko, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let r = 0, o = i.length; r < o; r++) {
        const a = i[r];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function r(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const d = c[l];
            r(e.shapes, d);
          }
        else
          r(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          a.push(r(e.materials, this.material[c]));
        i.material = a;
      } else
        i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        i.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const a = o(e.geometries), c = o(e.materials), l = o(e.textures), h = o(e.images), d = o(e.shapes), f = o(e.skeletons), m = o(e.animations), v = o(e.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), v.length > 0 && (n.nodes = v);
    }
    return n.object = i, n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const h = a[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
mt.DefaultUp = /* @__PURE__ */ new I(0, 1, 0);
mt.DefaultMatrixAutoUpdate = !0;
mt.DefaultMatrixWorldAutoUpdate = !0;
const wt = /* @__PURE__ */ new I(), zt = /* @__PURE__ */ new I(), or = /* @__PURE__ */ new I(), Ot = /* @__PURE__ */ new I(), An = /* @__PURE__ */ new I(), Cn = /* @__PURE__ */ new I(), As = /* @__PURE__ */ new I(), lr = /* @__PURE__ */ new I(), cr = /* @__PURE__ */ new I(), ur = /* @__PURE__ */ new I();
class Bt {
  constructor(e = new I(), t = new I(), n = new I()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), wt.subVectors(e, t), i.cross(wt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    wt.subVectors(i, t), zt.subVectors(n, t), or.subVectors(e, t);
    const o = wt.dot(wt), a = wt.dot(zt), c = wt.dot(or), l = zt.dot(zt), h = zt.dot(or), d = o * l - a * a;
    if (d === 0)
      return r.set(-2, -1, -1);
    const f = 1 / d, m = (l * c - a * h) * f, v = (o * h - a * c) * f;
    return r.set(1 - m - v, v, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Ot), Ot.x >= 0 && Ot.y >= 0 && Ot.x + Ot.y <= 1;
  }
  static getUV(e, t, n, i, r, o, a, c) {
    return this.getBarycoord(e, t, n, i, Ot), c.set(0, 0), c.addScaledVector(r, Ot.x), c.addScaledVector(o, Ot.y), c.addScaledVector(a, Ot.z), c;
  }
  static isFrontFacing(e, t, n, i) {
    return wt.subVectors(n, t), zt.subVectors(e, t), wt.cross(zt).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return wt.subVectors(this.c, this.b), zt.subVectors(this.a, this.b), wt.cross(zt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Bt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Bt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return Bt.getUV(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Bt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Bt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let o, a;
    An.subVectors(i, n), Cn.subVectors(r, n), lr.subVectors(e, n);
    const c = An.dot(lr), l = Cn.dot(lr);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    cr.subVectors(e, i);
    const h = An.dot(cr), d = Cn.dot(cr);
    if (h >= 0 && d <= h)
      return t.copy(i);
    const f = c * d - h * l;
    if (f <= 0 && c >= 0 && h <= 0)
      return o = c / (c - h), t.copy(n).addScaledVector(An, o);
    ur.subVectors(e, r);
    const m = An.dot(ur), v = Cn.dot(ur);
    if (v >= 0 && m <= v)
      return t.copy(r);
    const p = m * l - c * v;
    if (p <= 0 && l >= 0 && v <= 0)
      return a = l / (l - v), t.copy(n).addScaledVector(Cn, a);
    const u = h * v - m * d;
    if (u <= 0 && d - h >= 0 && m - v >= 0)
      return As.subVectors(r, i), a = (d - h) / (d - h + (m - v)), t.copy(i).addScaledVector(As, a);
    const x = 1 / (u + p + f);
    return o = p * x, a = f * x, t.copy(n).addScaledVector(An, o).addScaledVector(Cn, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Ho = 0;
class Ui extends Hn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Ho++ }), this.uuid = ti(), this.name = "", this.type = "Material", this.blending = zn, this.side = Bn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Qs, this.blendDst = ea, this.blendEquation = Nn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = yr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Po, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Yi, this.stencilZFail = Yi, this.stencilZPass = Yi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== zn && (n.blending = this.blending), this.side !== Bn && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function i(r) {
      const o = [];
      for (const a in r) {
        const c = r[a];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (t) {
      const r = i(e.textures), o = i(e.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r)
        n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class ua extends Ui {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Oe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = ta, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Ve = /* @__PURE__ */ new I(), mi = /* @__PURE__ */ new Fe();
class Dt {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = ms, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        mi.fromBufferAttribute(this, t), mi.applyMatrix3(e), this.setXY(t, mi.x, mi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Ve.fromBufferAttribute(this, t), Ve.applyMatrix3(e), this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ve.fromBufferAttribute(this, t), Ve.applyMatrix4(e), this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ve.fromBufferAttribute(this, t), Ve.applyNormalMatrix(e), this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ve.fromBufferAttribute(this, t), Ve.transformDirection(e), this.setXYZ(t, Ve.x, Ve.y, Ve.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = ai(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = ai(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = ai(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = ai(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), n = ct(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), i = ct(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), i = ct(i, this.array), r = ct(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== ms && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class ha extends Dt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class da extends Dt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class gn extends Dt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Xo = 0;
const xt = /* @__PURE__ */ new Je(), hr = /* @__PURE__ */ new mt(), Ln = /* @__PURE__ */ new I(), ht = /* @__PURE__ */ new ii(), $n = /* @__PURE__ */ new ii(), je = /* @__PURE__ */ new I();
class Mn extends Hn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Xo++ }), this.uuid = ti(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (ra(e) ? da : ha)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new ft().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return xt.makeRotationFromQuaternion(e), this.applyMatrix4(xt), this;
  }
  rotateX(e) {
    return xt.makeRotationX(e), this.applyMatrix4(xt), this;
  }
  rotateY(e) {
    return xt.makeRotationY(e), this.applyMatrix4(xt), this;
  }
  rotateZ(e) {
    return xt.makeRotationZ(e), this.applyMatrix4(xt), this;
  }
  translate(e, t, n) {
    return xt.makeTranslation(e, t, n), this.applyMatrix4(xt), this;
  }
  scale(e, t, n) {
    return xt.makeScale(e, t, n), this.applyMatrix4(xt), this;
  }
  lookAt(e) {
    return hr.lookAt(e), hr.updateMatrix(), this.applyMatrix4(hr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ln).negate(), this.translate(Ln.x, Ln.y, Ln.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new gn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ii());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new I(-1 / 0, -1 / 0, -1 / 0),
        new I(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          ht.setFromBufferAttribute(r), this.morphTargetsRelative ? (je.addVectors(this.boundingBox.min, ht.min), this.boundingBox.expandByPoint(je), je.addVectors(this.boundingBox.max, ht.max), this.boundingBox.expandByPoint(je)) : (this.boundingBox.expandByPoint(ht.min), this.boundingBox.expandByPoint(ht.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Pr());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new I(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (ht.setFromBufferAttribute(e), t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r];
          $n.setFromBufferAttribute(a), this.morphTargetsRelative ? (je.addVectors(ht.min, $n.min), ht.expandByPoint(je), je.addVectors(ht.max, $n.max), ht.expandByPoint(je)) : (ht.expandByPoint($n.min), ht.expandByPoint($n.max));
        }
      ht.getCenter(n);
      let i = 0;
      for (let r = 0, o = e.count; r < o; r++)
        je.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(je));
      if (t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r], c = this.morphTargetsRelative;
          for (let l = 0, h = a.count; l < h; l++)
            je.fromBufferAttribute(a, l), c && (Ln.fromBufferAttribute(e, l), je.add(Ln)), i = Math.max(i, n.distanceToSquared(je));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, r = t.normal.array, o = t.uv.array, a = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Dt(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let P = 0; P < a; P++)
      l[P] = new I(), h[P] = new I();
    const d = new I(), f = new I(), m = new I(), v = new Fe(), p = new Fe(), u = new Fe(), x = new I(), T = new I();
    function w(P, q, oe) {
      d.fromArray(i, P * 3), f.fromArray(i, q * 3), m.fromArray(i, oe * 3), v.fromArray(o, P * 2), p.fromArray(o, q * 2), u.fromArray(o, oe * 2), f.sub(d), m.sub(d), p.sub(v), u.sub(v);
      const N = 1 / (p.x * u.y - u.x * p.y);
      !isFinite(N) || (x.copy(f).multiplyScalar(u.y).addScaledVector(m, -p.y).multiplyScalar(N), T.copy(m).multiplyScalar(p.x).addScaledVector(f, -u.x).multiplyScalar(N), l[P].add(x), l[q].add(x), l[oe].add(x), h[P].add(T), h[q].add(T), h[oe].add(T));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: n.length
    }]);
    for (let P = 0, q = b.length; P < q; ++P) {
      const oe = b[P], N = oe.start, R = oe.count;
      for (let X = N, $ = N + R; X < $; X += 3)
        w(
          n[X + 0],
          n[X + 1],
          n[X + 2]
        );
    }
    const S = new I(), L = new I(), F = new I(), g = new I();
    function E(P) {
      F.fromArray(r, P * 3), g.copy(F);
      const q = l[P];
      S.copy(q), S.sub(F.multiplyScalar(F.dot(q))).normalize(), L.crossVectors(g, q);
      const N = L.dot(h[P]) < 0 ? -1 : 1;
      c[P * 4] = S.x, c[P * 4 + 1] = S.y, c[P * 4 + 2] = S.z, c[P * 4 + 3] = N;
    }
    for (let P = 0, q = b.length; P < q; ++P) {
      const oe = b[P], N = oe.start, R = oe.count;
      for (let X = N, $ = N + R; X < $; X += 3)
        E(n[X + 0]), E(n[X + 1]), E(n[X + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Dt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, m = n.count; f < m; f++)
          n.setXYZ(f, 0, 0, 0);
      const i = new I(), r = new I(), o = new I(), a = new I(), c = new I(), l = new I(), h = new I(), d = new I();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const v = e.getX(f + 0), p = e.getX(f + 1), u = e.getX(f + 2);
          i.fromBufferAttribute(t, v), r.fromBufferAttribute(t, p), o.fromBufferAttribute(t, u), h.subVectors(o, r), d.subVectors(i, r), h.cross(d), a.fromBufferAttribute(n, v), c.fromBufferAttribute(n, p), l.fromBufferAttribute(n, u), a.add(h), c.add(h), l.add(h), n.setXYZ(v, a.x, a.y, a.z), n.setXYZ(p, c.x, c.y, c.z), n.setXYZ(u, l.x, l.y, l.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          i.fromBufferAttribute(t, f + 0), r.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), h.subVectors(o, r), d.subVectors(i, r), h.cross(d), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      je.fromBufferAttribute(e, t), je.normalize(), e.setXYZ(t, je.x, je.y, je.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array, h = a.itemSize, d = a.normalized, f = new l.constructor(c.length * h);
      let m = 0, v = 0;
      for (let p = 0, u = c.length; p < u; p++) {
        a.isInterleavedBufferAttribute ? m = c[p] * a.data.stride + a.offset : m = c[p] * h;
        for (let x = 0; x < h; x++)
          f[v++] = l[m++];
      }
      return new Dt(f, h, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Mn(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const c = i[a], l = e(c, n);
      t.setAttribute(a, l);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const c = [], l = r[a];
      for (let h = 0, d = l.length; h < d; h++) {
        const f = l[h], m = e(f, n);
        c.push(m);
      }
      t.morphAttributes[a] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, c = o.length; a < c; a++) {
      const l = o[a];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const m = l[d];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, r = !0);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const h = [], d = r[l];
      for (let f = 0, m = d.length; f < m; f++)
        h.push(d[f].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, h = o.length; l < h; l++) {
      const d = o[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Cs = /* @__PURE__ */ new Je(), Dn = /* @__PURE__ */ new zo(), dr = /* @__PURE__ */ new Pr(), Zt = /* @__PURE__ */ new I(), jt = /* @__PURE__ */ new I(), $t = /* @__PURE__ */ new I(), fr = /* @__PURE__ */ new I(), pr = /* @__PURE__ */ new I(), mr = /* @__PURE__ */ new I(), gi = /* @__PURE__ */ new I(), _i = /* @__PURE__ */ new I(), xi = /* @__PURE__ */ new I(), vi = /* @__PURE__ */ new Fe(), Mi = /* @__PURE__ */ new Fe(), Si = /* @__PURE__ */ new Fe(), gr = /* @__PURE__ */ new I(), yi = /* @__PURE__ */ new I();
class Vt extends mt {
  constructor(e = new Mn(), t = new ua()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), dr.copy(n.boundingSphere), dr.applyMatrix4(r), e.ray.intersectsSphere(dr) === !1) || (Cs.copy(r).invert(), Dn.copy(e.ray).applyMatrix4(Cs), n.boundingBox !== null && Dn.intersectsBox(n.boundingBox) === !1))
      return;
    let o;
    const a = n.index, c = n.attributes.position, l = n.morphAttributes.position, h = n.morphTargetsRelative, d = n.attributes.uv, f = n.attributes.uv2, m = n.groups, v = n.drawRange;
    if (a !== null)
      if (Array.isArray(i))
        for (let p = 0, u = m.length; p < u; p++) {
          const x = m[p], T = i[x.materialIndex], w = Math.max(x.start, v.start), b = Math.min(a.count, Math.min(x.start + x.count, v.start + v.count));
          for (let S = w, L = b; S < L; S += 3) {
            const F = a.getX(S), g = a.getX(S + 1), E = a.getX(S + 2);
            o = bi(this, T, e, Dn, c, l, h, d, f, F, g, E), o && (o.faceIndex = Math.floor(S / 3), o.face.materialIndex = x.materialIndex, t.push(o));
          }
        }
      else {
        const p = Math.max(0, v.start), u = Math.min(a.count, v.start + v.count);
        for (let x = p, T = u; x < T; x += 3) {
          const w = a.getX(x), b = a.getX(x + 1), S = a.getX(x + 2);
          o = bi(this, i, e, Dn, c, l, h, d, f, w, b, S), o && (o.faceIndex = Math.floor(x / 3), t.push(o));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(i))
        for (let p = 0, u = m.length; p < u; p++) {
          const x = m[p], T = i[x.materialIndex], w = Math.max(x.start, v.start), b = Math.min(c.count, Math.min(x.start + x.count, v.start + v.count));
          for (let S = w, L = b; S < L; S += 3) {
            const F = S, g = S + 1, E = S + 2;
            o = bi(this, T, e, Dn, c, l, h, d, f, F, g, E), o && (o.faceIndex = Math.floor(S / 3), o.face.materialIndex = x.materialIndex, t.push(o));
          }
        }
      else {
        const p = Math.max(0, v.start), u = Math.min(c.count, v.start + v.count);
        for (let x = p, T = u; x < T; x += 3) {
          const w = x, b = x + 1, S = x + 2;
          o = bi(this, i, e, Dn, c, l, h, d, f, w, b, S), o && (o.faceIndex = Math.floor(x / 3), t.push(o));
        }
      }
  }
}
function qo(s, e, t, n, i, r, o, a) {
  let c;
  if (e.side === Mt ? c = n.intersectTriangle(o, r, i, !0, a) : c = n.intersectTriangle(i, r, o, e.side !== Gt, a), c === null)
    return null;
  yi.copy(a), yi.applyMatrix4(s.matrixWorld);
  const l = t.ray.origin.distanceTo(yi);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: yi.clone(),
    object: s
  };
}
function bi(s, e, t, n, i, r, o, a, c, l, h, d) {
  Zt.fromBufferAttribute(i, l), jt.fromBufferAttribute(i, h), $t.fromBufferAttribute(i, d);
  const f = s.morphTargetInfluences;
  if (r && f) {
    gi.set(0, 0, 0), _i.set(0, 0, 0), xi.set(0, 0, 0);
    for (let v = 0, p = r.length; v < p; v++) {
      const u = f[v], x = r[v];
      u !== 0 && (fr.fromBufferAttribute(x, l), pr.fromBufferAttribute(x, h), mr.fromBufferAttribute(x, d), o ? (gi.addScaledVector(fr, u), _i.addScaledVector(pr, u), xi.addScaledVector(mr, u)) : (gi.addScaledVector(fr.sub(Zt), u), _i.addScaledVector(pr.sub(jt), u), xi.addScaledVector(mr.sub($t), u)));
    }
    Zt.add(gi), jt.add(_i), $t.add(xi);
  }
  s.isSkinnedMesh && (s.boneTransform(l, Zt), s.boneTransform(h, jt), s.boneTransform(d, $t));
  const m = qo(s, e, t, n, Zt, jt, $t, gr);
  if (m) {
    a && (vi.fromBufferAttribute(a, l), Mi.fromBufferAttribute(a, h), Si.fromBufferAttribute(a, d), m.uv = Bt.getUV(gr, Zt, jt, $t, vi, Mi, Si, new Fe())), c && (vi.fromBufferAttribute(c, l), Mi.fromBufferAttribute(c, h), Si.fromBufferAttribute(c, d), m.uv2 = Bt.getUV(gr, Zt, jt, $t, vi, Mi, Si, new Fe()));
    const v = {
      a: l,
      b: h,
      c: d,
      normal: new I(),
      materialIndex: 0
    };
    Bt.getNormal(Zt, jt, $t, v.normal), m.face = v;
  }
  return m;
}
class si extends Mn {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: r,
      depthSegments: o
    };
    const a = this;
    i = Math.floor(i), r = Math.floor(r), o = Math.floor(o);
    const c = [], l = [], h = [], d = [];
    let f = 0, m = 0;
    v("z", "y", "x", -1, -1, n, t, e, o, r, 0), v("z", "y", "x", 1, -1, n, t, -e, o, r, 1), v("x", "z", "y", 1, 1, e, n, t, i, o, 2), v("x", "z", "y", 1, -1, e, n, -t, i, o, 3), v("x", "y", "z", 1, -1, e, t, n, i, r, 4), v("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(c), this.setAttribute("position", new gn(l, 3)), this.setAttribute("normal", new gn(h, 3)), this.setAttribute("uv", new gn(d, 2));
    function v(p, u, x, T, w, b, S, L, F, g, E) {
      const P = b / F, q = S / g, oe = b / 2, N = S / 2, R = L / 2, X = F + 1, $ = g + 1;
      let Z = 0, H = 0;
      const Q = new I();
      for (let J = 0; J < $; J++) {
        const U = J * q - N;
        for (let G = 0; G < X; G++) {
          const j = G * P - oe;
          Q[p] = j * T, Q[u] = U * w, Q[x] = R, l.push(Q.x, Q.y, Q.z), Q[p] = 0, Q[u] = 0, Q[x] = L > 0 ? 1 : -1, h.push(Q.x, Q.y, Q.z), d.push(G / F), d.push(1 - J / g), Z += 1;
        }
      }
      for (let J = 0; J < g; J++)
        for (let U = 0; U < F; U++) {
          const G = f + U + X * J, j = f + U + X * (J + 1), ee = f + (U + 1) + X * (J + 1), ie = f + (U + 1) + X * J;
          c.push(G, j, ie), c.push(j, ee, ie), H += 6;
        }
      a.addGroup(m, H, E), m += H, f += Z;
    }
  }
  static fromJSON(e) {
    return new si(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Wn(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function st(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = Wn(s[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function Yo(s) {
  const e = [];
  for (let t = 0; t < s.length; t++)
    e.push(s[t].clone());
  return e;
}
function fa(s) {
  return s.getRenderTarget() === null && s.outputEncoding === ze ? Ct : ei;
}
const Zo = { clone: Wn, merge: st };
var jo = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, $o = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Qt extends Ui {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = jo, this.fragmentShader = $o, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Wn(e.uniforms), this.uniformsGroups = Yo(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? t.uniforms[i] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[i] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[i] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class pa extends mt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Je(), this.projectionMatrix = new Je(), this.projectionMatrixInverse = new Je();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Tt extends pa {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = _s * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Zi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return _s * 2 * Math.atan(
      Math.tan(Zi * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, r, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Zi * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth, l = o.fullHeight;
      r += o.offsetX * i / c, t -= o.offsetY * n / l, i *= o.width / c, n *= o.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Rn = -90, Pn = 1;
class Jo extends mt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new Tt(Rn, Pn, e, t);
    i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const r = new Tt(Rn, Pn, e, t);
    r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), this.add(r);
    const o = new Tt(Rn, Pn, e, t);
    o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(0, 1, 0), this.add(o);
    const a = new Tt(Rn, Pn, e, t);
    a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(0, -1, 0), this.add(a);
    const c = new Tt(Rn, Pn, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
    const l = new Tt(Rn, Pn, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, r, o, a, c, l] = this.children, h = e.getRenderTarget(), d = e.toneMapping, f = e.xr.enabled;
    e.toneMapping = kt, e.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(h), e.toneMapping = d, e.xr.enabled = f, n.texture.needsPMREMUpdate = !0;
  }
}
class ma extends pt {
  constructor(e, t, n, i, r, o, a, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Gn, super(e, t, n, i, r, o, a, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Ko extends vn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new ma(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : vt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }, i = new si(5, 5, 5), r = new Qt({
      name: "CubemapFromEquirect",
      uniforms: Wn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Mt,
      blending: Kt
    });
    r.uniforms.tEquirect.value = t;
    const o = new Vt(i, r), a = t.minFilter;
    return t.minFilter === Ni && (t.minFilter = vt), new Jo(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const _r = /* @__PURE__ */ new I(), Qo = /* @__PURE__ */ new I(), el = /* @__PURE__ */ new ft();
class cn {
  constructor(e = new I(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = _r.subVectors(n, t).cross(Qo.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(_r), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || el.getNormalMatrix(e), i = this.coplanarPoint(_r).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const In = /* @__PURE__ */ new Pr(), wi = /* @__PURE__ */ new I();
class ga {
  constructor(e = new cn(), t = new cn(), n = new cn(), i = new cn(), r = new cn(), o = new cn()) {
    this.planes = [e, t, n, i, r, o];
  }
  set(e, t, n, i, r, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], r = n[1], o = n[2], a = n[3], c = n[4], l = n[5], h = n[6], d = n[7], f = n[8], m = n[9], v = n[10], p = n[11], u = n[12], x = n[13], T = n[14], w = n[15];
    return t[0].setComponents(a - i, d - c, p - f, w - u).normalize(), t[1].setComponents(a + i, d + c, p + f, w + u).normalize(), t[2].setComponents(a + r, d + l, p + m, w + x).normalize(), t[3].setComponents(a - r, d - l, p - m, w - x).normalize(), t[4].setComponents(a - o, d - h, p - v, w - T).normalize(), t[5].setComponents(a + o, d + h, p + v, w + T).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(In);
  }
  intersectsSprite(e) {
    return In.center.set(0, 0, 0), In.radius = 0.7071067811865476, In.applyMatrix4(e.matrixWorld), this.intersectsSphere(In);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (wi.x = i.normal.x > 0 ? e.max.x : e.min.x, wi.y = i.normal.y > 0 ? e.max.y : e.min.y, wi.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(wi) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function _a() {
  let s = null, e = !1, t = null, n = null;
  function i(r, o) {
    t(r, o), n = s.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = s.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      s.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(r) {
      t = r;
    },
    setContext: function(r) {
      s = r;
    }
  };
}
function tl(s, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, h) {
    const d = l.array, f = l.usage, m = s.createBuffer();
    s.bindBuffer(h, m), s.bufferData(h, d, f), l.onUploadCallback();
    let v;
    if (d instanceof Float32Array)
      v = 5126;
    else if (d instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          v = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        v = 5123;
    else if (d instanceof Int16Array)
      v = 5122;
    else if (d instanceof Uint32Array)
      v = 5125;
    else if (d instanceof Int32Array)
      v = 5124;
    else if (d instanceof Int8Array)
      v = 5120;
    else if (d instanceof Uint8Array)
      v = 5121;
    else if (d instanceof Uint8ClampedArray)
      v = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + d);
    return {
      buffer: m,
      type: v,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function r(l, h, d) {
    const f = h.array, m = h.updateRange;
    s.bindBuffer(d, l), m.count === -1 ? s.bufferSubData(d, 0, f) : (t ? s.bufferSubData(
      d,
      m.offset * f.BYTES_PER_ELEMENT,
      f,
      m.offset,
      m.count
    ) : s.bufferSubData(
      d,
      m.offset * f.BYTES_PER_ELEMENT,
      f.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), h.onUploadCallback();
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (s.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const f = n.get(l);
      (!f || f.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const d = n.get(l);
    d === void 0 ? n.set(l, i(l, h)) : d.version < l.version && (r(d.buffer, l, h), d.version = l.version);
  }
  return {
    get: o,
    remove: a,
    update: c
  };
}
class zi extends Mn {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(i), l = a + 1, h = c + 1, d = e / a, f = t / c, m = [], v = [], p = [], u = [];
    for (let x = 0; x < h; x++) {
      const T = x * f - o;
      for (let w = 0; w < l; w++) {
        const b = w * d - r;
        v.push(b, -T, 0), p.push(0, 0, 1), u.push(w / a), u.push(1 - x / c);
      }
    }
    for (let x = 0; x < c; x++)
      for (let T = 0; T < a; T++) {
        const w = T + l * x, b = T + l * (x + 1), S = T + 1 + l * (x + 1), L = T + 1 + l * x;
        m.push(w, b, L), m.push(b, S, L);
      }
    this.setIndex(m), this.setAttribute("position", new gn(v, 3)), this.setAttribute("normal", new gn(p, 3)), this.setAttribute("uv", new gn(u, 2));
  }
  static fromJSON(e) {
    return new zi(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var nl = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, il = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, rl = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, sl = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, al = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, ol = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, ll = "vec3 transformed = vec3( position );", cl = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, ul = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, hl = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, dl = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, fl = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, pl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, ml = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, gl = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, _l = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, xl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, vl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Ml = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Sl = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, yl = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, bl = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, wl = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Tl = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, El = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Al = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Cl = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Ll = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Dl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Rl = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Pl = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Il = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Fl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Nl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Ul = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, zl = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Ol = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Bl = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Gl = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Vl = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, kl = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Wl = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Hl = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Xl = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, ql = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Yl = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Zl = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, jl = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, $l = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, Jl = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Kl = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Ql = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, ec = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, tc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, nc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ic = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, rc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, sc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, ac = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, oc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, lc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, cc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, uc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, hc = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, dc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, fc = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, pc = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, mc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, gc = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, _c = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, xc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, vc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Mc = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, Sc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, yc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, bc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, wc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Tc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Ec = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Ac = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Cc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Lc = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Dc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Rc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Pc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Ic = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Fc = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Nc = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, Uc = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, zc = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Oc = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, Bc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Gc = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Vc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, kc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Wc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Hc = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Xc = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, qc = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, Yc = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, Zc = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, jc = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, $c = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, Jc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, Kc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, Qc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const eu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, tu = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, nu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, iu = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, ru = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, su = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, au = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, ou = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, lu = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, cu = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, uu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, hu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, du = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, fu = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, pu = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, mu = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, gu = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, _u = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, xu = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, vu = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Mu = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Su = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, yu = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, bu = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, wu = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Tu = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Eu = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Au = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Cu = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Lu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Du = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Ru = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Pu = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Iu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Se = {
  alphamap_fragment: nl,
  alphamap_pars_fragment: il,
  alphatest_fragment: rl,
  alphatest_pars_fragment: sl,
  aomap_fragment: al,
  aomap_pars_fragment: ol,
  begin_vertex: ll,
  beginnormal_vertex: cl,
  bsdfs: ul,
  iridescence_fragment: hl,
  bumpmap_pars_fragment: dl,
  clipping_planes_fragment: fl,
  clipping_planes_pars_fragment: pl,
  clipping_planes_pars_vertex: ml,
  clipping_planes_vertex: gl,
  color_fragment: _l,
  color_pars_fragment: xl,
  color_pars_vertex: vl,
  color_vertex: Ml,
  common: Sl,
  cube_uv_reflection_fragment: yl,
  defaultnormal_vertex: bl,
  displacementmap_pars_vertex: wl,
  displacementmap_vertex: Tl,
  emissivemap_fragment: El,
  emissivemap_pars_fragment: Al,
  encodings_fragment: Cl,
  encodings_pars_fragment: Ll,
  envmap_fragment: Dl,
  envmap_common_pars_fragment: Rl,
  envmap_pars_fragment: Pl,
  envmap_pars_vertex: Il,
  envmap_physical_pars_fragment: Xl,
  envmap_vertex: Fl,
  fog_vertex: Nl,
  fog_pars_vertex: Ul,
  fog_fragment: zl,
  fog_pars_fragment: Ol,
  gradientmap_pars_fragment: Bl,
  lightmap_fragment: Gl,
  lightmap_pars_fragment: Vl,
  lights_lambert_fragment: kl,
  lights_lambert_pars_fragment: Wl,
  lights_pars_begin: Hl,
  lights_toon_fragment: ql,
  lights_toon_pars_fragment: Yl,
  lights_phong_fragment: Zl,
  lights_phong_pars_fragment: jl,
  lights_physical_fragment: $l,
  lights_physical_pars_fragment: Jl,
  lights_fragment_begin: Kl,
  lights_fragment_maps: Ql,
  lights_fragment_end: ec,
  logdepthbuf_fragment: tc,
  logdepthbuf_pars_fragment: nc,
  logdepthbuf_pars_vertex: ic,
  logdepthbuf_vertex: rc,
  map_fragment: sc,
  map_pars_fragment: ac,
  map_particle_fragment: oc,
  map_particle_pars_fragment: lc,
  metalnessmap_fragment: cc,
  metalnessmap_pars_fragment: uc,
  morphcolor_vertex: hc,
  morphnormal_vertex: dc,
  morphtarget_pars_vertex: fc,
  morphtarget_vertex: pc,
  normal_fragment_begin: mc,
  normal_fragment_maps: gc,
  normal_pars_fragment: _c,
  normal_pars_vertex: xc,
  normal_vertex: vc,
  normalmap_pars_fragment: Mc,
  clearcoat_normal_fragment_begin: Sc,
  clearcoat_normal_fragment_maps: yc,
  clearcoat_pars_fragment: bc,
  iridescence_pars_fragment: wc,
  output_fragment: Tc,
  packing: Ec,
  premultiplied_alpha_fragment: Ac,
  project_vertex: Cc,
  dithering_fragment: Lc,
  dithering_pars_fragment: Dc,
  roughnessmap_fragment: Rc,
  roughnessmap_pars_fragment: Pc,
  shadowmap_pars_fragment: Ic,
  shadowmap_pars_vertex: Fc,
  shadowmap_vertex: Nc,
  shadowmask_pars_fragment: Uc,
  skinbase_vertex: zc,
  skinning_pars_vertex: Oc,
  skinning_vertex: Bc,
  skinnormal_vertex: Gc,
  specularmap_fragment: Vc,
  specularmap_pars_fragment: kc,
  tonemapping_fragment: Wc,
  tonemapping_pars_fragment: Hc,
  transmission_fragment: Xc,
  transmission_pars_fragment: qc,
  uv_pars_fragment: Yc,
  uv_pars_vertex: Zc,
  uv_vertex: jc,
  uv2_pars_fragment: $c,
  uv2_pars_vertex: Jc,
  uv2_vertex: Kc,
  worldpos_vertex: Qc,
  background_vert: eu,
  background_frag: tu,
  backgroundCube_vert: nu,
  backgroundCube_frag: iu,
  cube_vert: ru,
  cube_frag: su,
  depth_vert: au,
  depth_frag: ou,
  distanceRGBA_vert: lu,
  distanceRGBA_frag: cu,
  equirect_vert: uu,
  equirect_frag: hu,
  linedashed_vert: du,
  linedashed_frag: fu,
  meshbasic_vert: pu,
  meshbasic_frag: mu,
  meshlambert_vert: gu,
  meshlambert_frag: _u,
  meshmatcap_vert: xu,
  meshmatcap_frag: vu,
  meshnormal_vert: Mu,
  meshnormal_frag: Su,
  meshphong_vert: yu,
  meshphong_frag: bu,
  meshphysical_vert: wu,
  meshphysical_frag: Tu,
  meshtoon_vert: Eu,
  meshtoon_frag: Au,
  points_vert: Cu,
  points_frag: Lu,
  shadow_vert: Du,
  shadow_frag: Ru,
  sprite_vert: Pu,
  sprite_frag: Iu
}, ne = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Oe(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new ft() },
    uv2Transform: { value: /* @__PURE__ */ new ft() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: /* @__PURE__ */ new Fe(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Oe(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Oe(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new ft() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Oe(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Fe(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new ft() }
  }
}, Lt = {
  basic: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.fog
    ]),
    vertexShader: Se.meshbasic_vert,
    fragmentShader: Se.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new Oe(0) }
      }
    ]),
    vertexShader: Se.meshlambert_vert,
    fragmentShader: Se.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.specularmap,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new Oe(0) },
        specular: { value: /* @__PURE__ */ new Oe(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Se.meshphong_vert,
    fragmentShader: Se.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.envmap,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.roughnessmap,
      ne.metalnessmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new Oe(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Se.meshphysical_vert,
    fragmentShader: Se.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.aomap,
      ne.lightmap,
      ne.emissivemap,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.gradientmap,
      ne.fog,
      ne.lights,
      {
        emissive: { value: /* @__PURE__ */ new Oe(0) }
      }
    ]),
    vertexShader: Se.meshtoon_vert,
    fragmentShader: Se.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      ne.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Se.meshmatcap_vert,
    fragmentShader: Se.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ st([
      ne.points,
      ne.fog
    ]),
    vertexShader: Se.points_vert,
    fragmentShader: Se.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Se.linedashed_vert,
    fragmentShader: Se.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.displacementmap
    ]),
    vertexShader: Se.depth_vert,
    fragmentShader: Se.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.bumpmap,
      ne.normalmap,
      ne.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Se.meshnormal_vert,
    fragmentShader: Se.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ st([
      ne.sprite,
      ne.fog
    ]),
    vertexShader: Se.sprite_vert,
    fragmentShader: Se.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new ft() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Se.background_vert,
    fragmentShader: Se.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Se.backgroundCube_vert,
    fragmentShader: Se.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Se.cube_vert,
    fragmentShader: Se.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Se.equirect_vert,
    fragmentShader: Se.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ st([
      ne.common,
      ne.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new I() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Se.distanceRGBA_vert,
    fragmentShader: Se.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ st([
      ne.lights,
      ne.fog,
      {
        color: { value: /* @__PURE__ */ new Oe(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Se.shadow_vert,
    fragmentShader: Se.shadow_frag
  }
};
Lt.physical = {
  uniforms: /* @__PURE__ */ st([
    Lt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Fe(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Oe(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Fe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Oe(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new Oe(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: Se.meshphysical_vert,
  fragmentShader: Se.meshphysical_frag
};
const Ti = { r: 0, b: 0, g: 0 };
function Fu(s, e, t, n, i, r, o) {
  const a = new Oe(0);
  let c = r === !0 ? 0 : 1, l, h, d = null, f = 0, m = null;
  function v(u, x) {
    let T = !1, w = x.isScene === !0 ? x.background : null;
    w && w.isTexture && (w = (x.backgroundBlurriness > 0 ? t : e).get(w));
    const b = s.xr, S = b.getSession && b.getSession();
    S && S.environmentBlendMode === "additive" && (w = null), w === null ? p(a, c) : w && w.isColor && (p(w, 1), T = !0), (s.autoClear || T) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil), w && (w.isCubeTexture || w.mapping === Fi) ? (h === void 0 && (h = new Vt(
      new si(1, 1, 1),
      new Qt({
        name: "BackgroundCubeMaterial",
        uniforms: Wn(Lt.backgroundCube.uniforms),
        vertexShader: Lt.backgroundCube.vertexShader,
        fragmentShader: Lt.backgroundCube.fragmentShader,
        side: Mt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(L, F, g) {
      this.matrixWorld.copyPosition(g.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), h.material.uniforms.envMap.value = w, h.material.uniforms.flipEnvMap.value = w.isCubeTexture && w.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, (d !== w || f !== w.version || m !== s.toneMapping) && (h.material.needsUpdate = !0, d = w, f = w.version, m = s.toneMapping), h.layers.enableAll(), u.unshift(h, h.geometry, h.material, 0, 0, null)) : w && w.isTexture && (l === void 0 && (l = new Vt(
      new zi(2, 2),
      new Qt({
        name: "BackgroundMaterial",
        uniforms: Wn(Lt.background.uniforms),
        vertexShader: Lt.background.vertexShader,
        fragmentShader: Lt.background.fragmentShader,
        side: Bn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = w, l.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, w.matrixAutoUpdate === !0 && w.updateMatrix(), l.material.uniforms.uvTransform.value.copy(w.matrix), (d !== w || f !== w.version || m !== s.toneMapping) && (l.material.needsUpdate = !0, d = w, f = w.version, m = s.toneMapping), l.layers.enableAll(), u.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(u, x) {
    u.getRGB(Ti, fa(s)), n.buffers.color.setClear(Ti.r, Ti.g, Ti.b, x, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(u, x = 1) {
      a.set(u), c = x, p(a, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(u) {
      c = u, p(a, c);
    },
    render: v
  };
}
function Nu(s, e, t, n) {
  const i = s.getParameter(34921), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || r !== null, a = {}, c = u(null);
  let l = c, h = !1;
  function d(R, X, $, Z, H) {
    let Q = !1;
    if (o) {
      const J = p(Z, $, X);
      l !== J && (l = J, m(l.object)), Q = x(R, Z, $, H), Q && T(R, Z, $, H);
    } else {
      const J = X.wireframe === !0;
      (l.geometry !== Z.id || l.program !== $.id || l.wireframe !== J) && (l.geometry = Z.id, l.program = $.id, l.wireframe = J, Q = !0);
    }
    H !== null && t.update(H, 34963), (Q || h) && (h = !1, g(R, X, $, Z), H !== null && s.bindBuffer(34963, t.get(H).buffer));
  }
  function f() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function m(R) {
    return n.isWebGL2 ? s.bindVertexArray(R) : r.bindVertexArrayOES(R);
  }
  function v(R) {
    return n.isWebGL2 ? s.deleteVertexArray(R) : r.deleteVertexArrayOES(R);
  }
  function p(R, X, $) {
    const Z = $.wireframe === !0;
    let H = a[R.id];
    H === void 0 && (H = {}, a[R.id] = H);
    let Q = H[X.id];
    Q === void 0 && (Q = {}, H[X.id] = Q);
    let J = Q[Z];
    return J === void 0 && (J = u(f()), Q[Z] = J), J;
  }
  function u(R) {
    const X = [], $ = [], Z = [];
    for (let H = 0; H < i; H++)
      X[H] = 0, $[H] = 0, Z[H] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: X,
      enabledAttributes: $,
      attributeDivisors: Z,
      object: R,
      attributes: {},
      index: null
    };
  }
  function x(R, X, $, Z) {
    const H = l.attributes, Q = X.attributes;
    let J = 0;
    const U = $.getAttributes();
    for (const G in U)
      if (U[G].location >= 0) {
        const ee = H[G];
        let ie = Q[G];
        if (ie === void 0 && (G === "instanceMatrix" && R.instanceMatrix && (ie = R.instanceMatrix), G === "instanceColor" && R.instanceColor && (ie = R.instanceColor)), ee === void 0 || ee.attribute !== ie || ie && ee.data !== ie.data)
          return !0;
        J++;
      }
    return l.attributesNum !== J || l.index !== Z;
  }
  function T(R, X, $, Z) {
    const H = {}, Q = X.attributes;
    let J = 0;
    const U = $.getAttributes();
    for (const G in U)
      if (U[G].location >= 0) {
        let ee = Q[G];
        ee === void 0 && (G === "instanceMatrix" && R.instanceMatrix && (ee = R.instanceMatrix), G === "instanceColor" && R.instanceColor && (ee = R.instanceColor));
        const ie = {};
        ie.attribute = ee, ee && ee.data && (ie.data = ee.data), H[G] = ie, J++;
      }
    l.attributes = H, l.attributesNum = J, l.index = Z;
  }
  function w() {
    const R = l.newAttributes;
    for (let X = 0, $ = R.length; X < $; X++)
      R[X] = 0;
  }
  function b(R) {
    S(R, 0);
  }
  function S(R, X) {
    const $ = l.newAttributes, Z = l.enabledAttributes, H = l.attributeDivisors;
    $[R] = 1, Z[R] === 0 && (s.enableVertexAttribArray(R), Z[R] = 1), H[R] !== X && ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](R, X), H[R] = X);
  }
  function L() {
    const R = l.newAttributes, X = l.enabledAttributes;
    for (let $ = 0, Z = X.length; $ < Z; $++)
      X[$] !== R[$] && (s.disableVertexAttribArray($), X[$] = 0);
  }
  function F(R, X, $, Z, H, Q) {
    n.isWebGL2 === !0 && ($ === 5124 || $ === 5125) ? s.vertexAttribIPointer(R, X, $, H, Q) : s.vertexAttribPointer(R, X, $, Z, H, Q);
  }
  function g(R, X, $, Z) {
    if (n.isWebGL2 === !1 && (R.isInstancedMesh || Z.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    w();
    const H = Z.attributes, Q = $.getAttributes(), J = X.defaultAttributeValues;
    for (const U in Q) {
      const G = Q[U];
      if (G.location >= 0) {
        let j = H[U];
        if (j === void 0 && (U === "instanceMatrix" && R.instanceMatrix && (j = R.instanceMatrix), U === "instanceColor" && R.instanceColor && (j = R.instanceColor)), j !== void 0) {
          const ee = j.normalized, ie = j.itemSize, k = t.get(j);
          if (k === void 0)
            continue;
          const Ce = k.buffer, ce = k.type, xe = k.bytesPerElement;
          if (j.isInterleavedBufferAttribute) {
            const le = j.data, Pe = le.stride, ye = j.offset;
            if (le.isInstancedInterleavedBuffer) {
              for (let _e = 0; _e < G.locationSize; _e++)
                S(G.location + _e, le.meshPerAttribute);
              R.isInstancedMesh !== !0 && Z._maxInstanceCount === void 0 && (Z._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let _e = 0; _e < G.locationSize; _e++)
                b(G.location + _e);
            s.bindBuffer(34962, Ce);
            for (let _e = 0; _e < G.locationSize; _e++)
              F(
                G.location + _e,
                ie / G.locationSize,
                ce,
                ee,
                Pe * xe,
                (ye + ie / G.locationSize * _e) * xe
              );
          } else {
            if (j.isInstancedBufferAttribute) {
              for (let le = 0; le < G.locationSize; le++)
                S(G.location + le, j.meshPerAttribute);
              R.isInstancedMesh !== !0 && Z._maxInstanceCount === void 0 && (Z._maxInstanceCount = j.meshPerAttribute * j.count);
            } else
              for (let le = 0; le < G.locationSize; le++)
                b(G.location + le);
            s.bindBuffer(34962, Ce);
            for (let le = 0; le < G.locationSize; le++)
              F(
                G.location + le,
                ie / G.locationSize,
                ce,
                ee,
                ie * xe,
                ie / G.locationSize * le * xe
              );
          }
        } else if (J !== void 0) {
          const ee = J[U];
          if (ee !== void 0)
            switch (ee.length) {
              case 2:
                s.vertexAttrib2fv(G.location, ee);
                break;
              case 3:
                s.vertexAttrib3fv(G.location, ee);
                break;
              case 4:
                s.vertexAttrib4fv(G.location, ee);
                break;
              default:
                s.vertexAttrib1fv(G.location, ee);
            }
        }
      }
    }
    L();
  }
  function E() {
    oe();
    for (const R in a) {
      const X = a[R];
      for (const $ in X) {
        const Z = X[$];
        for (const H in Z)
          v(Z[H].object), delete Z[H];
        delete X[$];
      }
      delete a[R];
    }
  }
  function P(R) {
    if (a[R.id] === void 0)
      return;
    const X = a[R.id];
    for (const $ in X) {
      const Z = X[$];
      for (const H in Z)
        v(Z[H].object), delete Z[H];
      delete X[$];
    }
    delete a[R.id];
  }
  function q(R) {
    for (const X in a) {
      const $ = a[X];
      if ($[R.id] === void 0)
        continue;
      const Z = $[R.id];
      for (const H in Z)
        v(Z[H].object), delete Z[H];
      delete $[R.id];
    }
  }
  function oe() {
    N(), h = !0, l !== c && (l = c, m(l.object));
  }
  function N() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: d,
    reset: oe,
    resetDefaultState: N,
    dispose: E,
    releaseStatesOfGeometry: P,
    releaseStatesOfProgram: q,
    initAttributes: w,
    enableAttribute: b,
    disableUnusedAttributes: L
  };
}
function Uu(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(l) {
    r = l;
  }
  function a(l, h) {
    s.drawArrays(r, l, h), t.update(h, r, 1);
  }
  function c(l, h, d) {
    if (d === 0)
      return;
    let f, m;
    if (i)
      f = s, m = "drawArraysInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", f === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[m](r, l, h, d), t.update(h, r, d);
  }
  this.setMode = o, this.render = a, this.renderInstances = c;
}
function zu(s, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const F = e.get("EXT_texture_filter_anisotropic");
      n = s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function r(F) {
    if (F === "highp") {
      if (s.getShaderPrecisionFormat(35633, 36338).precision > 0 && s.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      F = "mediump";
    }
    return F === "mediump" && s.getShaderPrecisionFormat(35633, 36337).precision > 0 && s.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && s instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && s instanceof WebGL2ComputeRenderingContext;
  let a = t.precision !== void 0 ? t.precision : "highp";
  const c = r(a);
  c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c);
  const l = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, d = s.getParameter(34930), f = s.getParameter(35660), m = s.getParameter(3379), v = s.getParameter(34076), p = s.getParameter(34921), u = s.getParameter(36347), x = s.getParameter(36348), T = s.getParameter(36349), w = f > 0, b = o || e.has("OES_texture_float"), S = w && b, L = o ? s.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: a,
    logarithmicDepthBuffer: h,
    maxTextures: d,
    maxVertexTextures: f,
    maxTextureSize: m,
    maxCubemapSize: v,
    maxAttributes: p,
    maxVertexUniforms: u,
    maxVaryings: x,
    maxFragmentUniforms: T,
    vertexTextures: w,
    floatFragmentTextures: b,
    floatVertexTextures: S,
    maxSamples: L
  };
}
function Ou(s) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const o = new cn(), a = new ft(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f, m) {
    const v = d.length !== 0 || f || n !== 0 || i;
    return i = f, t = h(d, m, 0), n = d.length, v;
  }, this.beginShadows = function() {
    r = !0, h(null);
  }, this.endShadows = function() {
    r = !1, l();
  }, this.setState = function(d, f, m) {
    const v = d.clippingPlanes, p = d.clipIntersection, u = d.clipShadows, x = s.get(d);
    if (!i || v === null || v.length === 0 || r && !u)
      r ? h(null) : l();
    else {
      const T = r ? 0 : n, w = T * 4;
      let b = x.clippingState || null;
      c.value = b, b = h(v, f, w, m);
      for (let S = 0; S !== w; ++S)
        b[S] = t[S];
      x.clippingState = b, this.numIntersection = p ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(d, f, m, v) {
    const p = d !== null ? d.length : 0;
    let u = null;
    if (p !== 0) {
      if (u = c.value, v !== !0 || u === null) {
        const x = m + p * 4, T = f.matrixWorldInverse;
        a.getNormalMatrix(T), (u === null || u.length < x) && (u = new Float32Array(x));
        for (let w = 0, b = m; w !== p; ++w, b += 4)
          o.copy(d[w]).applyMatrix4(T, a), o.normal.toArray(u, b), u[b + 3] = o.constant;
      }
      c.value = u, c.needsUpdate = !0;
    }
    return e.numPlanes = p, e.numIntersection = 0, u;
  }
}
function Bu(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === br ? o.mapping = Gn : a === wr && (o.mapping = Vn), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === br || a === wr)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new Ko(c.height / 2);
            return l.fromEquirectangularTexture(s, o), e.set(o, l), o.addEventListener("dispose", i), t(l.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const c = e.get(a);
    c !== void 0 && (e.delete(a), c.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class xa extends pa {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, o = n + e, a = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, o = r + l * this.view.width, a -= h * this.view.offsetY, c = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Un = 4, Ls = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], hn = 20, xr = /* @__PURE__ */ new xa(), Ds = /* @__PURE__ */ new Oe();
let vr = null;
const un = (1 + Math.sqrt(5)) / 2, Fn = 1 / un, Rs = [
  /* @__PURE__ */ new I(1, 1, 1),
  /* @__PURE__ */ new I(-1, 1, 1),
  /* @__PURE__ */ new I(1, 1, -1),
  /* @__PURE__ */ new I(-1, 1, -1),
  /* @__PURE__ */ new I(0, un, Fn),
  /* @__PURE__ */ new I(0, un, -Fn),
  /* @__PURE__ */ new I(Fn, 0, un),
  /* @__PURE__ */ new I(-Fn, 0, un),
  /* @__PURE__ */ new I(un, Fn, 0),
  /* @__PURE__ */ new I(-un, Fn, 0)
];
class Ps {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    vr = this._renderer.getRenderTarget(), this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ns(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Fs(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(vr), e.scissorTest = !1, Ei(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Gn || e.mapping === Vn ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), vr = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: vt,
      minFilter: vt,
      generateMipmaps: !1,
      type: Qn,
      format: At,
      encoding: xn,
      depthBuffer: !1
    }, i = Is(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Is(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Gu(r)), this._blurMaterial = Vu(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Vt(this._lodPlanes[0], e);
    this._renderer.compile(t, xr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Tt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, d = h.autoClear, f = h.toneMapping;
    h.getClearColor(Ds), h.toneMapping = kt, h.autoClear = !1;
    const m = new ua({
      name: "PMREM.Background",
      side: Mt,
      depthWrite: !1,
      depthTest: !1
    }), v = new Vt(new si(), m);
    let p = !1;
    const u = e.background;
    u ? u.isColor && (m.color.copy(u), e.background = null, p = !0) : (m.color.copy(Ds), p = !0);
    for (let x = 0; x < 6; x++) {
      const T = x % 3;
      T === 0 ? (a.up.set(0, c[x], 0), a.lookAt(l[x], 0, 0)) : T === 1 ? (a.up.set(0, 0, c[x]), a.lookAt(0, l[x], 0)) : (a.up.set(0, c[x], 0), a.lookAt(0, 0, l[x]));
      const w = this._cubeSize;
      Ei(i, T * w, x > 2 ? w : 0, w, w), h.setRenderTarget(i), p && h.render(v, a), h.render(e, a);
    }
    v.geometry.dispose(), v.material.dispose(), h.toneMapping = f, h.autoClear = d, e.background = u;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Gn || e.mapping === Vn;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ns()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Fs());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new Vt(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Ei(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, xr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = Rs[(i - 1) % Rs.length];
      this._blur(e, i - 1, i, r, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      i,
      "latitudinal",
      r
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      i,
      "longitudinal",
      r
    );
  }
  _halfBlur(e, t, n, i, r, o, a) {
    const c = this._renderer, l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, d = new Vt(this._lodPlanes[i], l), f = l.uniforms, m = this._sizeLods[n] - 1, v = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * hn - 1), p = r / v, u = isFinite(r) ? 1 + Math.floor(h * p) : hn;
    u > hn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${hn}`);
    const x = [];
    let T = 0;
    for (let F = 0; F < hn; ++F) {
      const g = F / p, E = Math.exp(-g * g / 2);
      x.push(E), F === 0 ? T += E : F < u && (T += 2 * E);
    }
    for (let F = 0; F < x.length; F++)
      x[F] = x[F] / T;
    f.envMap.value = e.texture, f.samples.value = u, f.weights.value = x, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: w } = this;
    f.dTheta.value = v, f.mipInt.value = w - n;
    const b = this._sizeLods[i], S = 3 * b * (i > w - Un ? i - w + Un : 0), L = 4 * (this._cubeSize - b);
    Ei(t, S, L, 3 * b, 2 * b), c.setRenderTarget(t), c.render(d, xr);
  }
}
function Gu(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - Un + 1 + Ls.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let c = 1 / a;
    o > s - Un ? c = Ls[o - s + Un - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), h = -l, d = 1 + l, f = [h, h, d, h, d, d, h, h, d, d, h, d], m = 6, v = 6, p = 3, u = 2, x = 1, T = new Float32Array(p * v * m), w = new Float32Array(u * v * m), b = new Float32Array(x * v * m);
    for (let L = 0; L < m; L++) {
      const F = L % 3 * 2 / 3 - 1, g = L > 2 ? 0 : -1, E = [
        F,
        g,
        0,
        F + 2 / 3,
        g,
        0,
        F + 2 / 3,
        g + 1,
        0,
        F,
        g,
        0,
        F + 2 / 3,
        g + 1,
        0,
        F,
        g + 1,
        0
      ];
      T.set(E, p * v * L), w.set(f, u * v * L);
      const P = [L, L, L, L, L, L];
      b.set(P, x * v * L);
    }
    const S = new Mn();
    S.setAttribute("position", new Dt(T, p)), S.setAttribute("uv", new Dt(w, u)), S.setAttribute("faceIndex", new Dt(b, x)), e.push(S), i > Un && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Is(s, e, t) {
  const n = new vn(s, e, t);
  return n.texture.mapping = Fi, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Ei(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function Vu(s, e, t) {
  const n = new Float32Array(hn), i = new I(0, 1, 0);
  return new Qt({
    name: "SphericalGaussianBlur",
    defines: {
      n: hn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: Ir(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Kt,
    depthTest: !1,
    depthWrite: !1
  });
}
function Fs() {
  return new Qt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Ir(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Kt,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ns() {
  return new Qt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Ir(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Kt,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ir() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function ku(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === br || c === wr, h = c === Gn || c === Vn;
      if (l || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let d = e.get(a);
          return t === null && (t = new Ps(s)), d = l ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d), e.set(a, d), d.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const d = a.image;
            if (l && d && d.height > 0 || h && d && i(d)) {
              t === null && (t = new Ps(s));
              const f = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, f), a.addEventListener("dispose", r), f.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      a[h] !== void 0 && c++;
    return c === l;
  }
  function r(a) {
    const c = a.target;
    c.removeEventListener("dispose", r);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function Wu(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function Hu(s, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function o(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const v in f.attributes)
      e.remove(f.attributes[v]);
    f.removeEventListener("dispose", o), delete i[f.id];
    const m = r.get(f);
    m && (e.remove(m), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(d, f) {
    return i[f.id] === !0 || (f.addEventListener("dispose", o), i[f.id] = !0, t.memory.geometries++), f;
  }
  function c(d) {
    const f = d.attributes;
    for (const v in f)
      e.update(f[v], 34962);
    const m = d.morphAttributes;
    for (const v in m) {
      const p = m[v];
      for (let u = 0, x = p.length; u < x; u++)
        e.update(p[u], 34962);
    }
  }
  function l(d) {
    const f = [], m = d.index, v = d.attributes.position;
    let p = 0;
    if (m !== null) {
      const T = m.array;
      p = m.version;
      for (let w = 0, b = T.length; w < b; w += 3) {
        const S = T[w + 0], L = T[w + 1], F = T[w + 2];
        f.push(S, L, L, F, F, S);
      }
    } else {
      const T = v.array;
      p = v.version;
      for (let w = 0, b = T.length / 3 - 1; w < b; w += 3) {
        const S = w + 0, L = w + 1, F = w + 2;
        f.push(S, L, L, F, F, S);
      }
    }
    const u = new (ra(f) ? da : ha)(f, 1);
    u.version = p;
    const x = r.get(d);
    x && e.remove(x), r.set(d, u);
  }
  function h(d) {
    const f = r.get(d);
    if (f) {
      const m = d.index;
      m !== null && f.version < m.version && l(d);
    } else
      l(d);
    return r.get(d);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: h
  };
}
function Xu(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(f) {
    r = f;
  }
  let a, c;
  function l(f) {
    a = f.type, c = f.bytesPerElement;
  }
  function h(f, m) {
    s.drawElements(r, m, a, f * c), t.update(m, r, 1);
  }
  function d(f, m, v) {
    if (v === 0)
      return;
    let p, u;
    if (i)
      p = s, u = "drawElementsInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", p === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[u](r, m, a, f * c, v), t.update(m, r, v);
  }
  this.setMode = o, this.setIndex = l, this.render = h, this.renderInstances = d;
}
function qu(s) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, o, a) {
    switch (t.calls++, o) {
      case 4:
        t.triangles += a * (r / 3);
        break;
      case 1:
        t.lines += a * (r / 2);
        break;
      case 3:
        t.lines += a * (r - 1);
        break;
      case 2:
        t.lines += a * r;
        break;
      case 0:
        t.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function Yu(s, e) {
  return s[0] - e[0];
}
function Zu(s, e) {
  return Math.abs(e[1]) - Math.abs(s[1]);
}
function ju(s, e, t) {
  const n = {}, i = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), o = new $e(), a = [];
  for (let l = 0; l < 8; l++)
    a[l] = [l, 0];
  function c(l, h, d, f) {
    const m = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const p = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, u = p !== void 0 ? p.length : 0;
      let x = r.get(h);
      if (x === void 0 || x.count !== u) {
        let $ = function() {
          R.dispose(), r.delete(h), h.removeEventListener("dispose", $);
        };
        var v = $;
        x !== void 0 && x.texture.dispose();
        const b = h.morphAttributes.position !== void 0, S = h.morphAttributes.normal !== void 0, L = h.morphAttributes.color !== void 0, F = h.morphAttributes.position || [], g = h.morphAttributes.normal || [], E = h.morphAttributes.color || [];
        let P = 0;
        b === !0 && (P = 1), S === !0 && (P = 2), L === !0 && (P = 3);
        let q = h.attributes.position.count * P, oe = 1;
        q > e.maxTextureSize && (oe = Math.ceil(q / e.maxTextureSize), q = e.maxTextureSize);
        const N = new Float32Array(q * oe * 4 * u), R = new la(N, q, oe, u);
        R.type = fn, R.needsUpdate = !0;
        const X = P * 4;
        for (let Z = 0; Z < u; Z++) {
          const H = F[Z], Q = g[Z], J = E[Z], U = q * oe * 4 * Z;
          for (let G = 0; G < H.count; G++) {
            const j = G * X;
            b === !0 && (o.fromBufferAttribute(H, G), N[U + j + 0] = o.x, N[U + j + 1] = o.y, N[U + j + 2] = o.z, N[U + j + 3] = 0), S === !0 && (o.fromBufferAttribute(Q, G), N[U + j + 4] = o.x, N[U + j + 5] = o.y, N[U + j + 6] = o.z, N[U + j + 7] = 0), L === !0 && (o.fromBufferAttribute(J, G), N[U + j + 8] = o.x, N[U + j + 9] = o.y, N[U + j + 10] = o.z, N[U + j + 11] = J.itemSize === 4 ? o.w : 1);
          }
        }
        x = {
          count: u,
          texture: R,
          size: new Fe(q, oe)
        }, r.set(h, x), h.addEventListener("dispose", $);
      }
      let T = 0;
      for (let b = 0; b < m.length; b++)
        T += m[b];
      const w = h.morphTargetsRelative ? 1 : 1 - T;
      f.getUniforms().setValue(s, "morphTargetBaseInfluence", w), f.getUniforms().setValue(s, "morphTargetInfluences", m), f.getUniforms().setValue(s, "morphTargetsTexture", x.texture, t), f.getUniforms().setValue(s, "morphTargetsTextureSize", x.size);
    } else {
      const p = m === void 0 ? 0 : m.length;
      let u = n[h.id];
      if (u === void 0 || u.length !== p) {
        u = [];
        for (let S = 0; S < p; S++)
          u[S] = [S, 0];
        n[h.id] = u;
      }
      for (let S = 0; S < p; S++) {
        const L = u[S];
        L[0] = S, L[1] = m[S];
      }
      u.sort(Zu);
      for (let S = 0; S < 8; S++)
        S < p && u[S][1] ? (a[S][0] = u[S][0], a[S][1] = u[S][1]) : (a[S][0] = Number.MAX_SAFE_INTEGER, a[S][1] = 0);
      a.sort(Yu);
      const x = h.morphAttributes.position, T = h.morphAttributes.normal;
      let w = 0;
      for (let S = 0; S < 8; S++) {
        const L = a[S], F = L[0], g = L[1];
        F !== Number.MAX_SAFE_INTEGER && g ? (x && h.getAttribute("morphTarget" + S) !== x[F] && h.setAttribute("morphTarget" + S, x[F]), T && h.getAttribute("morphNormal" + S) !== T[F] && h.setAttribute("morphNormal" + S, T[F]), i[S] = g, w += g) : (x && h.hasAttribute("morphTarget" + S) === !0 && h.deleteAttribute("morphTarget" + S), T && h.hasAttribute("morphNormal" + S) === !0 && h.deleteAttribute("morphNormal" + S), i[S] = 0);
      }
      const b = h.morphTargetsRelative ? 1 : 1 - w;
      f.getUniforms().setValue(s, "morphTargetBaseInfluence", b), f.getUniforms().setValue(s, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function $u(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(c) {
    const l = n.render.frame, h = c.geometry, d = e.get(c, h);
    return i.get(d) !== l && (e.update(d), i.set(d, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), t.update(c.instanceMatrix, 34962), c.instanceColor !== null && t.update(c.instanceColor, 34962)), d;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: r,
    dispose: o
  };
}
const va = /* @__PURE__ */ new pt(), Ma = /* @__PURE__ */ new la(), Sa = /* @__PURE__ */ new No(), ya = /* @__PURE__ */ new ma(), Us = [], zs = [], Os = new Float32Array(16), Bs = new Float32Array(9), Gs = new Float32Array(4);
function Xn(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0)
    return s;
  const i = e * t;
  let r = Us[i];
  if (r === void 0 && (r = new Float32Array(i), Us[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, s[o].toArray(r, a);
  }
  return r;
}
function He(s, e) {
  if (s.length !== e.length)
    return !1;
  for (let t = 0, n = s.length; t < n; t++)
    if (s[t] !== e[t])
      return !1;
  return !0;
}
function Xe(s, e) {
  for (let t = 0, n = e.length; t < n; t++)
    s[t] = e[t];
}
function Oi(s, e) {
  let t = zs[e];
  t === void 0 && (t = new Int32Array(e), zs[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = s.allocateTextureUnit();
  return t;
}
function Ju(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function Ku(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (He(t, e))
      return;
    s.uniform2fv(this.addr, e), Xe(t, e);
  }
}
function Qu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (He(t, e))
      return;
    s.uniform3fv(this.addr, e), Xe(t, e);
  }
}
function eh(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (He(t, e))
      return;
    s.uniform4fv(this.addr, e), Xe(t, e);
  }
}
function th(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (He(t, e))
      return;
    s.uniformMatrix2fv(this.addr, !1, e), Xe(t, e);
  } else {
    if (He(t, n))
      return;
    Gs.set(n), s.uniformMatrix2fv(this.addr, !1, Gs), Xe(t, n);
  }
}
function nh(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (He(t, e))
      return;
    s.uniformMatrix3fv(this.addr, !1, e), Xe(t, e);
  } else {
    if (He(t, n))
      return;
    Bs.set(n), s.uniformMatrix3fv(this.addr, !1, Bs), Xe(t, n);
  }
}
function ih(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (He(t, e))
      return;
    s.uniformMatrix4fv(this.addr, !1, e), Xe(t, e);
  } else {
    if (He(t, n))
      return;
    Os.set(n), s.uniformMatrix4fv(this.addr, !1, Os), Xe(t, n);
  }
}
function rh(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function sh(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (He(t, e))
      return;
    s.uniform2iv(this.addr, e), Xe(t, e);
  }
}
function ah(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (He(t, e))
      return;
    s.uniform3iv(this.addr, e), Xe(t, e);
  }
}
function oh(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (He(t, e))
      return;
    s.uniform4iv(this.addr, e), Xe(t, e);
  }
}
function lh(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function ch(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (He(t, e))
      return;
    s.uniform2uiv(this.addr, e), Xe(t, e);
  }
}
function uh(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (He(t, e))
      return;
    s.uniform3uiv(this.addr, e), Xe(t, e);
  }
}
function hh(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (He(t, e))
      return;
    s.uniform4uiv(this.addr, e), Xe(t, e);
  }
}
function dh(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || va, i);
}
function fh(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Sa, i);
}
function ph(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || ya, i);
}
function mh(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Ma, i);
}
function gh(s) {
  switch (s) {
    case 5126:
      return Ju;
    case 35664:
      return Ku;
    case 35665:
      return Qu;
    case 35666:
      return eh;
    case 35674:
      return th;
    case 35675:
      return nh;
    case 35676:
      return ih;
    case 5124:
    case 35670:
      return rh;
    case 35667:
    case 35671:
      return sh;
    case 35668:
    case 35672:
      return ah;
    case 35669:
    case 35673:
      return oh;
    case 5125:
      return lh;
    case 36294:
      return ch;
    case 36295:
      return uh;
    case 36296:
      return hh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return dh;
    case 35679:
    case 36299:
    case 36307:
      return fh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ph;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return mh;
  }
}
function _h(s, e) {
  s.uniform1fv(this.addr, e);
}
function xh(s, e) {
  const t = Xn(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function vh(s, e) {
  const t = Xn(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Mh(s, e) {
  const t = Xn(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function Sh(s, e) {
  const t = Xn(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function yh(s, e) {
  const t = Xn(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function bh(s, e) {
  const t = Xn(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function wh(s, e) {
  s.uniform1iv(this.addr, e);
}
function Th(s, e) {
  s.uniform2iv(this.addr, e);
}
function Eh(s, e) {
  s.uniform3iv(this.addr, e);
}
function Ah(s, e) {
  s.uniform4iv(this.addr, e);
}
function Ch(s, e) {
  s.uniform1uiv(this.addr, e);
}
function Lh(s, e) {
  s.uniform2uiv(this.addr, e);
}
function Dh(s, e) {
  s.uniform3uiv(this.addr, e);
}
function Rh(s, e) {
  s.uniform4uiv(this.addr, e);
}
function Ph(s, e, t) {
  const n = this.cache, i = e.length, r = Oi(t, i);
  He(n, r) || (s.uniform1iv(this.addr, r), Xe(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture2D(e[o] || va, r[o]);
}
function Ih(s, e, t) {
  const n = this.cache, i = e.length, r = Oi(t, i);
  He(n, r) || (s.uniform1iv(this.addr, r), Xe(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture3D(e[o] || Sa, r[o]);
}
function Fh(s, e, t) {
  const n = this.cache, i = e.length, r = Oi(t, i);
  He(n, r) || (s.uniform1iv(this.addr, r), Xe(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTextureCube(e[o] || ya, r[o]);
}
function Nh(s, e, t) {
  const n = this.cache, i = e.length, r = Oi(t, i);
  He(n, r) || (s.uniform1iv(this.addr, r), Xe(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture2DArray(e[o] || Ma, r[o]);
}
function Uh(s) {
  switch (s) {
    case 5126:
      return _h;
    case 35664:
      return xh;
    case 35665:
      return vh;
    case 35666:
      return Mh;
    case 35674:
      return Sh;
    case 35675:
      return yh;
    case 35676:
      return bh;
    case 5124:
    case 35670:
      return wh;
    case 35667:
    case 35671:
      return Th;
    case 35668:
    case 35672:
      return Eh;
    case 35669:
    case 35673:
      return Ah;
    case 5125:
      return Ch;
    case 36294:
      return Lh;
    case 36295:
      return Dh;
    case 36296:
      return Rh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Ph;
    case 35679:
    case 36299:
    case 36307:
      return Ih;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Fh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Nh;
  }
}
class zh {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = gh(t.type);
  }
}
class Oh {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Uh(t.type);
  }
}
class Bh {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, o = i.length; r !== o; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Mr = /(\w+)(\])?(\[|\.)?/g;
function Vs(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function Gh(s, e, t) {
  const n = s.name, i = n.length;
  for (Mr.lastIndex = 0; ; ) {
    const r = Mr.exec(n), o = Mr.lastIndex;
    let a = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === i) {
      Vs(t, l === void 0 ? new zh(a, s, e) : new Oh(a, s, e));
      break;
    } else {
      let d = t.map[a];
      d === void 0 && (d = new Bh(a), Vs(t, d)), t = d;
    }
  }
}
class Li {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), o = e.getUniformLocation(t, r.name);
      Gh(r, o, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, o = t.length; r !== o; ++r) {
      const a = t[r], c = n[a.id];
      c.needsUpdate !== !1 && a.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function ks(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
let Vh = 0;
function kh(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = i; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Wh(s) {
  switch (s) {
    case xn:
      return ["Linear", "( value )"];
    case ze:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", s), ["Linear", "( value )"];
  }
}
function Ws(s, e, t) {
  const n = s.getShaderParameter(e, 35713), i = s.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + kh(s.getShaderSource(e), o);
  } else
    return i;
}
function Hh(s, e) {
  const t = Wh(e);
  return "vec4 " + s + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Xh(s, e) {
  let t;
  switch (e) {
    case ao:
      t = "Linear";
      break;
    case oo:
      t = "Reinhard";
      break;
    case lo:
      t = "OptimizedCineon";
      break;
    case co:
      t = "ACESFilmic";
      break;
    case uo:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function qh(s) {
  return [
    s.extensionDerivatives || !!s.envMapCubeUVHeight || s.bumpMap || s.tangentSpaceNormalMap || s.clearcoatNormalMap || s.flatShading || s.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) && s.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) && s.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Kn).join(`
`);
}
function Yh(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Zh(s, e) {
  const t = {}, n = s.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i), o = r.name;
    let a = 1;
    r.type === 35674 && (a = 2), r.type === 35675 && (a = 3), r.type === 35676 && (a = 4), t[o] = {
      type: r.type,
      location: s.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function Kn(s) {
  return s !== "";
}
function Hs(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Xs(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const jh = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Lr(s) {
  return s.replace(jh, $h);
}
function $h(s, e) {
  const t = Se[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return Lr(t);
}
const Jh = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function qs(s) {
  return s.replace(Jh, Kh);
}
function Kh(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Ys(s) {
  let e = "precision " + s.precision + ` float;
precision ` + s.precision + " int;";
  return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Qh(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === Ks ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === Oa ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === Jn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function ed(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case Gn:
      case Vn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Fi:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function td(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case Vn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function nd(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case ta:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case ro:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case so:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function id(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function rd(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const c = Qh(t), l = ed(t), h = td(t), d = nd(t), f = id(t), m = t.isWebGL2 ? "" : qh(t), v = Yh(r), p = i.createProgram();
  let u, x, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (u = [
    v
  ].filter(Kn).join(`
`), u.length > 0 && (u += `
`), x = [
    m,
    v
  ].filter(Kn).join(`
`), x.length > 0 && (x += `
`)) : (u = [
    Ys(t),
    "#define SHADER_NAME " + t.shaderName,
    v,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Kn).join(`
`), x = [
    m,
    Ys(t),
    "#define SHADER_NAME " + t.shaderName,
    v,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + d : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== kt ? "#define TONE_MAPPING" : "",
    t.toneMapping !== kt ? Se.tonemapping_pars_fragment : "",
    t.toneMapping !== kt ? Xh("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Se.encodings_pars_fragment,
    Hh("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Kn).join(`
`)), o = Lr(o), o = Hs(o, t), o = Xs(o, t), a = Lr(a), a = Hs(a, t), a = Xs(a, t), o = qs(o), a = qs(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, u = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + u, x = [
    "#define varying in",
    t.glslVersion === gs ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === gs ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + x);
  const w = T + u + o, b = T + x + a, S = ks(i, 35633, w), L = ks(i, 35632, b);
  if (i.attachShader(p, S), i.attachShader(p, L), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p), s.debug.checkShaderErrors) {
    const E = i.getProgramInfoLog(p).trim(), P = i.getShaderInfoLog(S).trim(), q = i.getShaderInfoLog(L).trim();
    let oe = !0, N = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      oe = !1;
      const R = Ws(i, S, "vertex"), X = Ws(i, L, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(p, 35715) + `

Program Info Log: ` + E + `
` + R + `
` + X
      );
    } else
      E !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", E) : (P === "" || q === "") && (N = !1);
    N && (this.diagnostics = {
      runnable: oe,
      programLog: E,
      vertexShader: {
        log: P,
        prefix: u
      },
      fragmentShader: {
        log: q,
        prefix: x
      }
    });
  }
  i.deleteShader(S), i.deleteShader(L);
  let F;
  this.getUniforms = function() {
    return F === void 0 && (F = new Li(i, p)), F;
  };
  let g;
  return this.getAttributes = function() {
    return g === void 0 && (g = Zh(i, p)), g;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(p), this.program = void 0;
  }, this.name = t.shaderName, this.id = Vh++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = S, this.fragmentShader = L, this;
}
let sd = 0;
class ad {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new od(e), t.set(e, n)), n;
  }
}
class od {
  constructor(e) {
    this.id = sd++, this.code = e, this.usedTimes = 0;
  }
}
function ld(s, e, t, n, i, r, o) {
  const a = new ca(), c = new ad(), l = [], h = i.isWebGL2, d = i.logarithmicDepthBuffer, f = i.vertexTextures;
  let m = i.precision;
  const v = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function p(g, E, P, q, oe) {
    const N = q.fog, R = oe.geometry, X = g.isMeshStandardMaterial ? q.environment : null, $ = (g.isMeshStandardMaterial ? t : e).get(g.envMap || X), Z = !!$ && $.mapping === Fi ? $.image.height : null, H = v[g.type];
    g.precision !== null && (m = i.getMaxPrecision(g.precision), m !== g.precision && console.warn("THREE.WebGLProgram.getParameters:", g.precision, "not supported, using", m, "instead."));
    const Q = R.morphAttributes.position || R.morphAttributes.normal || R.morphAttributes.color, J = Q !== void 0 ? Q.length : 0;
    let U = 0;
    R.morphAttributes.position !== void 0 && (U = 1), R.morphAttributes.normal !== void 0 && (U = 2), R.morphAttributes.color !== void 0 && (U = 3);
    let G, j, ee, ie;
    if (H) {
      const Pe = Lt[H];
      G = Pe.vertexShader, j = Pe.fragmentShader;
    } else
      G = g.vertexShader, j = g.fragmentShader, c.update(g), ee = c.getVertexShaderID(g), ie = c.getFragmentShaderID(g);
    const k = s.getRenderTarget(), Ce = g.alphaTest > 0, ce = g.clearcoat > 0, xe = g.iridescence > 0;
    return {
      isWebGL2: h,
      shaderID: H,
      shaderName: g.type,
      vertexShader: G,
      fragmentShader: j,
      defines: g.defines,
      customVertexShaderID: ee,
      customFragmentShaderID: ie,
      isRawShaderMaterial: g.isRawShaderMaterial === !0,
      glslVersion: g.glslVersion,
      precision: m,
      instancing: oe.isInstancedMesh === !0,
      instancingColor: oe.isInstancedMesh === !0 && oe.instanceColor !== null,
      supportsVertexTextures: f,
      outputEncoding: k === null ? s.outputEncoding : k.isXRRenderTarget === !0 ? k.texture.encoding : xn,
      map: !!g.map,
      matcap: !!g.matcap,
      envMap: !!$,
      envMapMode: $ && $.mapping,
      envMapCubeUVHeight: Z,
      lightMap: !!g.lightMap,
      aoMap: !!g.aoMap,
      emissiveMap: !!g.emissiveMap,
      bumpMap: !!g.bumpMap,
      normalMap: !!g.normalMap,
      objectSpaceNormalMap: g.normalMapType === Ro,
      tangentSpaceNormalMap: g.normalMapType === Do,
      decodeVideoTexture: !!g.map && g.map.isVideoTexture === !0 && g.map.encoding === ze,
      clearcoat: ce,
      clearcoatMap: ce && !!g.clearcoatMap,
      clearcoatRoughnessMap: ce && !!g.clearcoatRoughnessMap,
      clearcoatNormalMap: ce && !!g.clearcoatNormalMap,
      iridescence: xe,
      iridescenceMap: xe && !!g.iridescenceMap,
      iridescenceThicknessMap: xe && !!g.iridescenceThicknessMap,
      displacementMap: !!g.displacementMap,
      roughnessMap: !!g.roughnessMap,
      metalnessMap: !!g.metalnessMap,
      specularMap: !!g.specularMap,
      specularIntensityMap: !!g.specularIntensityMap,
      specularColorMap: !!g.specularColorMap,
      opaque: g.transparent === !1 && g.blending === zn,
      alphaMap: !!g.alphaMap,
      alphaTest: Ce,
      gradientMap: !!g.gradientMap,
      sheen: g.sheen > 0,
      sheenColorMap: !!g.sheenColorMap,
      sheenRoughnessMap: !!g.sheenRoughnessMap,
      transmission: g.transmission > 0,
      transmissionMap: !!g.transmissionMap,
      thicknessMap: !!g.thicknessMap,
      combine: g.combine,
      vertexTangents: !!g.normalMap && !!R.attributes.tangent,
      vertexColors: g.vertexColors,
      vertexAlphas: g.vertexColors === !0 && !!R.attributes.color && R.attributes.color.itemSize === 4,
      vertexUvs: !!g.map || !!g.bumpMap || !!g.normalMap || !!g.specularMap || !!g.alphaMap || !!g.emissiveMap || !!g.roughnessMap || !!g.metalnessMap || !!g.clearcoatMap || !!g.clearcoatRoughnessMap || !!g.clearcoatNormalMap || !!g.iridescenceMap || !!g.iridescenceThicknessMap || !!g.displacementMap || !!g.transmissionMap || !!g.thicknessMap || !!g.specularIntensityMap || !!g.specularColorMap || !!g.sheenColorMap || !!g.sheenRoughnessMap,
      uvsVertexOnly: !(!!g.map || !!g.bumpMap || !!g.normalMap || !!g.specularMap || !!g.alphaMap || !!g.emissiveMap || !!g.roughnessMap || !!g.metalnessMap || !!g.clearcoatNormalMap || !!g.iridescenceMap || !!g.iridescenceThicknessMap || g.transmission > 0 || !!g.transmissionMap || !!g.thicknessMap || !!g.specularIntensityMap || !!g.specularColorMap || g.sheen > 0 || !!g.sheenColorMap || !!g.sheenRoughnessMap) && !!g.displacementMap,
      fog: !!N,
      useFog: g.fog === !0,
      fogExp2: N && N.isFogExp2,
      flatShading: !!g.flatShading,
      sizeAttenuation: g.sizeAttenuation,
      logarithmicDepthBuffer: d,
      skinning: oe.isSkinnedMesh === !0,
      morphTargets: R.morphAttributes.position !== void 0,
      morphNormals: R.morphAttributes.normal !== void 0,
      morphColors: R.morphAttributes.color !== void 0,
      morphTargetsCount: J,
      morphTextureStride: U,
      numDirLights: E.directional.length,
      numPointLights: E.point.length,
      numSpotLights: E.spot.length,
      numSpotLightMaps: E.spotLightMap.length,
      numRectAreaLights: E.rectArea.length,
      numHemiLights: E.hemi.length,
      numDirLightShadows: E.directionalShadowMap.length,
      numPointLightShadows: E.pointShadowMap.length,
      numSpotLightShadows: E.spotShadowMap.length,
      numSpotLightShadowsWithMaps: E.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: g.dithering,
      shadowMapEnabled: s.shadowMap.enabled && P.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: g.toneMapped ? s.toneMapping : kt,
      physicallyCorrectLights: s.physicallyCorrectLights,
      premultipliedAlpha: g.premultipliedAlpha,
      doubleSided: g.side === Gt,
      flipSided: g.side === Mt,
      useDepthPacking: !!g.depthPacking,
      depthPacking: g.depthPacking || 0,
      index0AttributeName: g.index0AttributeName,
      extensionDerivatives: g.extensions && g.extensions.derivatives,
      extensionFragDepth: g.extensions && g.extensions.fragDepth,
      extensionDrawBuffers: g.extensions && g.extensions.drawBuffers,
      extensionShaderTextureLOD: g.extensions && g.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: g.customProgramCacheKey()
    };
  }
  function u(g) {
    const E = [];
    if (g.shaderID ? E.push(g.shaderID) : (E.push(g.customVertexShaderID), E.push(g.customFragmentShaderID)), g.defines !== void 0)
      for (const P in g.defines)
        E.push(P), E.push(g.defines[P]);
    return g.isRawShaderMaterial === !1 && (x(E, g), T(E, g), E.push(s.outputEncoding)), E.push(g.customProgramCacheKey), E.join();
  }
  function x(g, E) {
    g.push(E.precision), g.push(E.outputEncoding), g.push(E.envMapMode), g.push(E.envMapCubeUVHeight), g.push(E.combine), g.push(E.vertexUvs), g.push(E.fogExp2), g.push(E.sizeAttenuation), g.push(E.morphTargetsCount), g.push(E.morphAttributeCount), g.push(E.numDirLights), g.push(E.numPointLights), g.push(E.numSpotLights), g.push(E.numSpotLightMaps), g.push(E.numHemiLights), g.push(E.numRectAreaLights), g.push(E.numDirLightShadows), g.push(E.numPointLightShadows), g.push(E.numSpotLightShadows), g.push(E.numSpotLightShadowsWithMaps), g.push(E.shadowMapType), g.push(E.toneMapping), g.push(E.numClippingPlanes), g.push(E.numClipIntersection), g.push(E.depthPacking);
  }
  function T(g, E) {
    a.disableAll(), E.isWebGL2 && a.enable(0), E.supportsVertexTextures && a.enable(1), E.instancing && a.enable(2), E.instancingColor && a.enable(3), E.map && a.enable(4), E.matcap && a.enable(5), E.envMap && a.enable(6), E.lightMap && a.enable(7), E.aoMap && a.enable(8), E.emissiveMap && a.enable(9), E.bumpMap && a.enable(10), E.normalMap && a.enable(11), E.objectSpaceNormalMap && a.enable(12), E.tangentSpaceNormalMap && a.enable(13), E.clearcoat && a.enable(14), E.clearcoatMap && a.enable(15), E.clearcoatRoughnessMap && a.enable(16), E.clearcoatNormalMap && a.enable(17), E.iridescence && a.enable(18), E.iridescenceMap && a.enable(19), E.iridescenceThicknessMap && a.enable(20), E.displacementMap && a.enable(21), E.specularMap && a.enable(22), E.roughnessMap && a.enable(23), E.metalnessMap && a.enable(24), E.gradientMap && a.enable(25), E.alphaMap && a.enable(26), E.alphaTest && a.enable(27), E.vertexColors && a.enable(28), E.vertexAlphas && a.enable(29), E.vertexUvs && a.enable(30), E.vertexTangents && a.enable(31), E.uvsVertexOnly && a.enable(32), g.push(a.mask), a.disableAll(), E.fog && a.enable(0), E.useFog && a.enable(1), E.flatShading && a.enable(2), E.logarithmicDepthBuffer && a.enable(3), E.skinning && a.enable(4), E.morphTargets && a.enable(5), E.morphNormals && a.enable(6), E.morphColors && a.enable(7), E.premultipliedAlpha && a.enable(8), E.shadowMapEnabled && a.enable(9), E.physicallyCorrectLights && a.enable(10), E.doubleSided && a.enable(11), E.flipSided && a.enable(12), E.useDepthPacking && a.enable(13), E.dithering && a.enable(14), E.specularIntensityMap && a.enable(15), E.specularColorMap && a.enable(16), E.transmission && a.enable(17), E.transmissionMap && a.enable(18), E.thicknessMap && a.enable(19), E.sheen && a.enable(20), E.sheenColorMap && a.enable(21), E.sheenRoughnessMap && a.enable(22), E.decodeVideoTexture && a.enable(23), E.opaque && a.enable(24), g.push(a.mask);
  }
  function w(g) {
    const E = v[g.type];
    let P;
    if (E) {
      const q = Lt[E];
      P = Zo.clone(q.uniforms);
    } else
      P = g.uniforms;
    return P;
  }
  function b(g, E) {
    let P;
    for (let q = 0, oe = l.length; q < oe; q++) {
      const N = l[q];
      if (N.cacheKey === E) {
        P = N, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new rd(s, E, g, r), l.push(P)), P;
  }
  function S(g) {
    if (--g.usedTimes === 0) {
      const E = l.indexOf(g);
      l[E] = l[l.length - 1], l.pop(), g.destroy();
    }
  }
  function L(g) {
    c.remove(g);
  }
  function F() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: u,
    getUniforms: w,
    acquireProgram: b,
    releaseProgram: S,
    releaseShaderCache: L,
    programs: l,
    dispose: F
  };
}
function cd() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(r) {
    let o = s.get(r);
    return o === void 0 && (o = {}, s.set(r, o)), o;
  }
  function t(r) {
    s.delete(r);
  }
  function n(r, o, a) {
    s.get(r)[o] = a;
  }
  function i() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function ud(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function Zs(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function js() {
  const s = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(d, f, m, v, p, u) {
    let x = s[e];
    return x === void 0 ? (x = {
      id: d.id,
      object: d,
      geometry: f,
      material: m,
      groupOrder: v,
      renderOrder: d.renderOrder,
      z: p,
      group: u
    }, s[e] = x) : (x.id = d.id, x.object = d, x.geometry = f, x.material = m, x.groupOrder = v, x.renderOrder = d.renderOrder, x.z = p, x.group = u), e++, x;
  }
  function a(d, f, m, v, p, u) {
    const x = o(d, f, m, v, p, u);
    m.transmission > 0 ? n.push(x) : m.transparent === !0 ? i.push(x) : t.push(x);
  }
  function c(d, f, m, v, p, u) {
    const x = o(d, f, m, v, p, u);
    m.transmission > 0 ? n.unshift(x) : m.transparent === !0 ? i.unshift(x) : t.unshift(x);
  }
  function l(d, f) {
    t.length > 1 && t.sort(d || ud), n.length > 1 && n.sort(f || Zs), i.length > 1 && i.sort(f || Zs);
  }
  function h() {
    for (let d = e, f = s.length; d < f; d++) {
      const m = s[d];
      if (m.id === null)
        break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: a,
    unshift: c,
    finish: h,
    sort: l
  };
}
function hd() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let o;
    return r === void 0 ? (o = new js(), s.set(n, [o])) : i >= r.length ? (o = new js(), r.push(o)) : o = r[i], o;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function dd() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new I(),
            color: new Oe()
          };
          break;
        case "SpotLight":
          t = {
            position: new I(),
            direction: new I(),
            color: new Oe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new I(),
            color: new Oe(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new I(),
            skyColor: new Oe(),
            groundColor: new Oe()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Oe(),
            position: new I(),
            halfWidth: new I(),
            halfHeight: new I()
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
function fd() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Fe()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Fe()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Fe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
let pd = 0;
function md(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function gd(s, e) {
  const t = new dd(), n = fd(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let h = 0; h < 9; h++)
    i.probe.push(new I());
  const r = new I(), o = new Je(), a = new Je();
  function c(h, d) {
    let f = 0, m = 0, v = 0;
    for (let q = 0; q < 9; q++)
      i.probe[q].set(0, 0, 0);
    let p = 0, u = 0, x = 0, T = 0, w = 0, b = 0, S = 0, L = 0, F = 0, g = 0;
    h.sort(md);
    const E = d !== !0 ? Math.PI : 1;
    for (let q = 0, oe = h.length; q < oe; q++) {
      const N = h[q], R = N.color, X = N.intensity, $ = N.distance, Z = N.shadow && N.shadow.map ? N.shadow.map.texture : null;
      if (N.isAmbientLight)
        f += R.r * X * E, m += R.g * X * E, v += R.b * X * E;
      else if (N.isLightProbe)
        for (let H = 0; H < 9; H++)
          i.probe[H].addScaledVector(N.sh.coefficients[H], X);
      else if (N.isDirectionalLight) {
        const H = t.get(N);
        if (H.color.copy(N.color).multiplyScalar(N.intensity * E), N.castShadow) {
          const Q = N.shadow, J = n.get(N);
          J.shadowBias = Q.bias, J.shadowNormalBias = Q.normalBias, J.shadowRadius = Q.radius, J.shadowMapSize = Q.mapSize, i.directionalShadow[p] = J, i.directionalShadowMap[p] = Z, i.directionalShadowMatrix[p] = N.shadow.matrix, b++;
        }
        i.directional[p] = H, p++;
      } else if (N.isSpotLight) {
        const H = t.get(N);
        H.position.setFromMatrixPosition(N.matrixWorld), H.color.copy(R).multiplyScalar(X * E), H.distance = $, H.coneCos = Math.cos(N.angle), H.penumbraCos = Math.cos(N.angle * (1 - N.penumbra)), H.decay = N.decay, i.spot[x] = H;
        const Q = N.shadow;
        if (N.map && (i.spotLightMap[F] = N.map, F++, Q.updateMatrices(N), N.castShadow && g++), i.spotLightMatrix[x] = Q.matrix, N.castShadow) {
          const J = n.get(N);
          J.shadowBias = Q.bias, J.shadowNormalBias = Q.normalBias, J.shadowRadius = Q.radius, J.shadowMapSize = Q.mapSize, i.spotShadow[x] = J, i.spotShadowMap[x] = Z, L++;
        }
        x++;
      } else if (N.isRectAreaLight) {
        const H = t.get(N);
        H.color.copy(R).multiplyScalar(X), H.halfWidth.set(N.width * 0.5, 0, 0), H.halfHeight.set(0, N.height * 0.5, 0), i.rectArea[T] = H, T++;
      } else if (N.isPointLight) {
        const H = t.get(N);
        if (H.color.copy(N.color).multiplyScalar(N.intensity * E), H.distance = N.distance, H.decay = N.decay, N.castShadow) {
          const Q = N.shadow, J = n.get(N);
          J.shadowBias = Q.bias, J.shadowNormalBias = Q.normalBias, J.shadowRadius = Q.radius, J.shadowMapSize = Q.mapSize, J.shadowCameraNear = Q.camera.near, J.shadowCameraFar = Q.camera.far, i.pointShadow[u] = J, i.pointShadowMap[u] = Z, i.pointShadowMatrix[u] = N.shadow.matrix, S++;
        }
        i.point[u] = H, u++;
      } else if (N.isHemisphereLight) {
        const H = t.get(N);
        H.skyColor.copy(N.color).multiplyScalar(X * E), H.groundColor.copy(N.groundColor).multiplyScalar(X * E), i.hemi[w] = H, w++;
      }
    }
    T > 0 && (e.isWebGL2 || s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_FLOAT_1, i.rectAreaLTC2 = ne.LTC_FLOAT_2) : s.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_HALF_1, i.rectAreaLTC2 = ne.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = f, i.ambient[1] = m, i.ambient[2] = v;
    const P = i.hash;
    (P.directionalLength !== p || P.pointLength !== u || P.spotLength !== x || P.rectAreaLength !== T || P.hemiLength !== w || P.numDirectionalShadows !== b || P.numPointShadows !== S || P.numSpotShadows !== L || P.numSpotMaps !== F) && (i.directional.length = p, i.spot.length = x, i.rectArea.length = T, i.point.length = u, i.hemi.length = w, i.directionalShadow.length = b, i.directionalShadowMap.length = b, i.pointShadow.length = S, i.pointShadowMap.length = S, i.spotShadow.length = L, i.spotShadowMap.length = L, i.directionalShadowMatrix.length = b, i.pointShadowMatrix.length = S, i.spotLightMatrix.length = L + F - g, i.spotLightMap.length = F, i.numSpotLightShadowsWithMaps = g, P.directionalLength = p, P.pointLength = u, P.spotLength = x, P.rectAreaLength = T, P.hemiLength = w, P.numDirectionalShadows = b, P.numPointShadows = S, P.numSpotShadows = L, P.numSpotMaps = F, i.version = pd++);
  }
  function l(h, d) {
    let f = 0, m = 0, v = 0, p = 0, u = 0;
    const x = d.matrixWorldInverse;
    for (let T = 0, w = h.length; T < w; T++) {
      const b = h[T];
      if (b.isDirectionalLight) {
        const S = i.directional[f];
        S.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(x), f++;
      } else if (b.isSpotLight) {
        const S = i.spot[v];
        S.position.setFromMatrixPosition(b.matrixWorld), S.position.applyMatrix4(x), S.direction.setFromMatrixPosition(b.matrixWorld), r.setFromMatrixPosition(b.target.matrixWorld), S.direction.sub(r), S.direction.transformDirection(x), v++;
      } else if (b.isRectAreaLight) {
        const S = i.rectArea[p];
        S.position.setFromMatrixPosition(b.matrixWorld), S.position.applyMatrix4(x), a.identity(), o.copy(b.matrixWorld), o.premultiply(x), a.extractRotation(o), S.halfWidth.set(b.width * 0.5, 0, 0), S.halfHeight.set(0, b.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), p++;
      } else if (b.isPointLight) {
        const S = i.point[m];
        S.position.setFromMatrixPosition(b.matrixWorld), S.position.applyMatrix4(x), m++;
      } else if (b.isHemisphereLight) {
        const S = i.hemi[u];
        S.direction.setFromMatrixPosition(b.matrixWorld), S.direction.transformDirection(x), u++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function $s(s, e) {
  const t = new gd(s, e), n = [], i = [];
  function r() {
    n.length = 0, i.length = 0;
  }
  function o(d) {
    n.push(d);
  }
  function a(d) {
    i.push(d);
  }
  function c(d) {
    t.setup(n, d);
  }
  function l(d) {
    t.setupView(n, d);
  }
  return {
    init: r,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: o,
    pushShadow: a
  };
}
function _d(s, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, o = 0) {
    const a = t.get(r);
    let c;
    return a === void 0 ? (c = new $s(s, e), t.set(r, [c])) : o >= a.length ? (c = new $s(s, e), a.push(c)) : c = a[o], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class xd extends Ui {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Co, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class vd extends Ui {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new I(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Md = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Sd = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function yd(s, e, t) {
  let n = new ga();
  const i = new Fe(), r = new Fe(), o = new $e(), a = new xd({ depthPacking: Lo }), c = new vd(), l = {}, h = t.maxTextureSize, d = { 0: Mt, 1: Bn, 2: Gt }, f = new Qt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Fe() },
      radius: { value: 4 }
    },
    vertexShader: Md,
    fragmentShader: Sd
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const v = new Mn();
  v.setAttribute(
    "position",
    new Dt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const p = new Vt(v, f), u = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Ks, this.render = function(b, S, L) {
    if (u.enabled === !1 || u.autoUpdate === !1 && u.needsUpdate === !1 || b.length === 0)
      return;
    const F = s.getRenderTarget(), g = s.getActiveCubeFace(), E = s.getActiveMipmapLevel(), P = s.state;
    P.setBlending(Kt), P.buffers.color.setClear(1, 1, 1, 1), P.buffers.depth.setTest(!0), P.setScissorTest(!1);
    for (let q = 0, oe = b.length; q < oe; q++) {
      const N = b[q], R = N.shadow;
      if (R === void 0) {
        console.warn("THREE.WebGLShadowMap:", N, "has no shadow.");
        continue;
      }
      if (R.autoUpdate === !1 && R.needsUpdate === !1)
        continue;
      i.copy(R.mapSize);
      const X = R.getFrameExtents();
      if (i.multiply(X), r.copy(R.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / X.x), i.x = r.x * X.x, R.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / X.y), i.y = r.y * X.y, R.mapSize.y = r.y)), R.map === null) {
        const Z = this.type !== Jn ? { minFilter: at, magFilter: at } : {};
        R.map = new vn(i.x, i.y, Z), R.map.texture.name = N.name + ".shadowMap", R.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(R.map), s.clear();
      const $ = R.getViewportCount();
      for (let Z = 0; Z < $; Z++) {
        const H = R.getViewport(Z);
        o.set(
          r.x * H.x,
          r.y * H.y,
          r.x * H.z,
          r.y * H.w
        ), P.viewport(o), R.updateMatrices(N, Z), n = R.getFrustum(), w(S, L, R.camera, N, this.type);
      }
      R.isPointLightShadow !== !0 && this.type === Jn && x(R, L), R.needsUpdate = !1;
    }
    u.needsUpdate = !1, s.setRenderTarget(F, g, E);
  };
  function x(b, S) {
    const L = e.update(p);
    f.defines.VSM_SAMPLES !== b.blurSamples && (f.defines.VSM_SAMPLES = b.blurSamples, m.defines.VSM_SAMPLES = b.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), b.mapPass === null && (b.mapPass = new vn(i.x, i.y)), f.uniforms.shadow_pass.value = b.map.texture, f.uniforms.resolution.value = b.mapSize, f.uniforms.radius.value = b.radius, s.setRenderTarget(b.mapPass), s.clear(), s.renderBufferDirect(S, null, L, f, p, null), m.uniforms.shadow_pass.value = b.mapPass.texture, m.uniforms.resolution.value = b.mapSize, m.uniforms.radius.value = b.radius, s.setRenderTarget(b.map), s.clear(), s.renderBufferDirect(S, null, L, m, p, null);
  }
  function T(b, S, L, F, g, E) {
    let P = null;
    const q = L.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (q !== void 0 ? P = q : P = L.isPointLight === !0 ? c : a, s.localClippingEnabled && S.clipShadows === !0 && Array.isArray(S.clippingPlanes) && S.clippingPlanes.length !== 0 || S.displacementMap && S.displacementScale !== 0 || S.alphaMap && S.alphaTest > 0 || S.map && S.alphaTest > 0) {
      const oe = P.uuid, N = S.uuid;
      let R = l[oe];
      R === void 0 && (R = {}, l[oe] = R);
      let X = R[N];
      X === void 0 && (X = P.clone(), R[N] = X), P = X;
    }
    return P.visible = S.visible, P.wireframe = S.wireframe, E === Jn ? P.side = S.shadowSide !== null ? S.shadowSide : S.side : P.side = S.shadowSide !== null ? S.shadowSide : d[S.side], P.alphaMap = S.alphaMap, P.alphaTest = S.alphaTest, P.map = S.map, P.clipShadows = S.clipShadows, P.clippingPlanes = S.clippingPlanes, P.clipIntersection = S.clipIntersection, P.displacementMap = S.displacementMap, P.displacementScale = S.displacementScale, P.displacementBias = S.displacementBias, P.wireframeLinewidth = S.wireframeLinewidth, P.linewidth = S.linewidth, L.isPointLight === !0 && P.isMeshDistanceMaterial === !0 && (P.referencePosition.setFromMatrixPosition(L.matrixWorld), P.nearDistance = F, P.farDistance = g), P;
  }
  function w(b, S, L, F, g) {
    if (b.visible === !1)
      return;
    if (b.layers.test(S.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && g === Jn) && (!b.frustumCulled || n.intersectsObject(b))) {
      b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse, b.matrixWorld);
      const q = e.update(b), oe = b.material;
      if (Array.isArray(oe)) {
        const N = q.groups;
        for (let R = 0, X = N.length; R < X; R++) {
          const $ = N[R], Z = oe[$.materialIndex];
          if (Z && Z.visible) {
            const H = T(b, Z, F, L.near, L.far, g);
            s.renderBufferDirect(L, null, q, H, b, $);
          }
        }
      } else if (oe.visible) {
        const N = T(b, oe, F, L.near, L.far, g);
        s.renderBufferDirect(L, null, q, N, b, null);
      }
    }
    const P = b.children;
    for (let q = 0, oe = P.length; q < oe; q++)
      w(P[q], S, L, F, g);
  }
}
function bd(s, e, t) {
  const n = t.isWebGL2;
  function i() {
    let A = !1;
    const B = new $e();
    let Y = null;
    const ae = new $e(0, 0, 0, 0);
    return {
      setMask: function(he) {
        Y !== he && !A && (s.colorMask(he, he, he, he), Y = he);
      },
      setLocked: function(he) {
        A = he;
      },
      setClear: function(he, Re, Ye, Ke, en) {
        en === !0 && (he *= Ke, Re *= Ke, Ye *= Ke), B.set(he, Re, Ye, Ke), ae.equals(B) === !1 && (s.clearColor(he, Re, Ye, Ke), ae.copy(B));
      },
      reset: function() {
        A = !1, Y = null, ae.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let A = !1, B = null, Y = null, ae = null;
    return {
      setTest: function(he) {
        he ? Ce(2929) : ce(2929);
      },
      setMask: function(he) {
        B !== he && !A && (s.depthMask(he), B = he);
      },
      setFunc: function(he) {
        if (Y !== he) {
          switch (he) {
            case Ja:
              s.depthFunc(512);
              break;
            case Ka:
              s.depthFunc(519);
              break;
            case Qa:
              s.depthFunc(513);
              break;
            case yr:
              s.depthFunc(515);
              break;
            case eo:
              s.depthFunc(514);
              break;
            case to:
              s.depthFunc(518);
              break;
            case no:
              s.depthFunc(516);
              break;
            case io:
              s.depthFunc(517);
              break;
            default:
              s.depthFunc(515);
          }
          Y = he;
        }
      },
      setLocked: function(he) {
        A = he;
      },
      setClear: function(he) {
        ae !== he && (s.clearDepth(he), ae = he);
      },
      reset: function() {
        A = !1, B = null, Y = null, ae = null;
      }
    };
  }
  function o() {
    let A = !1, B = null, Y = null, ae = null, he = null, Re = null, Ye = null, Ke = null, en = null;
    return {
      setTest: function(Ue) {
        A || (Ue ? Ce(2960) : ce(2960));
      },
      setMask: function(Ue) {
        B !== Ue && !A && (s.stencilMask(Ue), B = Ue);
      },
      setFunc: function(Ue, Pt, _t) {
        (Y !== Ue || ae !== Pt || he !== _t) && (s.stencilFunc(Ue, Pt, _t), Y = Ue, ae = Pt, he = _t);
      },
      setOp: function(Ue, Pt, _t) {
        (Re !== Ue || Ye !== Pt || Ke !== _t) && (s.stencilOp(Ue, Pt, _t), Re = Ue, Ye = Pt, Ke = _t);
      },
      setLocked: function(Ue) {
        A = Ue;
      },
      setClear: function(Ue) {
        en !== Ue && (s.clearStencil(Ue), en = Ue);
      },
      reset: function() {
        A = !1, B = null, Y = null, ae = null, he = null, Re = null, Ye = null, Ke = null, en = null;
      }
    };
  }
  const a = new i(), c = new r(), l = new o(), h = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
  let f = {}, m = {}, v = /* @__PURE__ */ new WeakMap(), p = [], u = null, x = !1, T = null, w = null, b = null, S = null, L = null, F = null, g = null, E = !1, P = null, q = null, oe = null, N = null, R = null;
  const X = s.getParameter(35661);
  let $ = !1, Z = 0;
  const H = s.getParameter(7938);
  H.indexOf("WebGL") !== -1 ? (Z = parseFloat(/^WebGL (\d)/.exec(H)[1]), $ = Z >= 1) : H.indexOf("OpenGL ES") !== -1 && (Z = parseFloat(/^OpenGL ES (\d)/.exec(H)[1]), $ = Z >= 2);
  let Q = null, J = {};
  const U = s.getParameter(3088), G = s.getParameter(2978), j = new $e().fromArray(U), ee = new $e().fromArray(G);
  function ie(A, B, Y) {
    const ae = new Uint8Array(4), he = s.createTexture();
    s.bindTexture(A, he), s.texParameteri(A, 10241, 9728), s.texParameteri(A, 10240, 9728);
    for (let Re = 0; Re < Y; Re++)
      s.texImage2D(B + Re, 0, 6408, 1, 1, 0, 6408, 5121, ae);
    return he;
  }
  const k = {};
  k[3553] = ie(3553, 3553, 1), k[34067] = ie(34067, 34069, 6), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Ce(2929), c.setFunc(yr), nt(!1), gt(Gr), Ce(2884), et(Kt);
  function Ce(A) {
    f[A] !== !0 && (s.enable(A), f[A] = !0);
  }
  function ce(A) {
    f[A] !== !1 && (s.disable(A), f[A] = !1);
  }
  function xe(A, B) {
    return m[A] !== B ? (s.bindFramebuffer(A, B), m[A] = B, n && (A === 36009 && (m[36160] = B), A === 36160 && (m[36009] = B)), !0) : !1;
  }
  function le(A, B) {
    let Y = p, ae = !1;
    if (A)
      if (Y = v.get(B), Y === void 0 && (Y = [], v.set(B, Y)), A.isWebGLMultipleRenderTargets) {
        const he = A.texture;
        if (Y.length !== he.length || Y[0] !== 36064) {
          for (let Re = 0, Ye = he.length; Re < Ye; Re++)
            Y[Re] = 36064 + Re;
          Y.length = he.length, ae = !0;
        }
      } else
        Y[0] !== 36064 && (Y[0] = 36064, ae = !0);
    else
      Y[0] !== 1029 && (Y[0] = 1029, ae = !0);
    ae && (t.isWebGL2 ? s.drawBuffers(Y) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y));
  }
  function Pe(A) {
    return u !== A ? (s.useProgram(A), u = A, !0) : !1;
  }
  const ye = {
    [Nn]: 32774,
    [Ga]: 32778,
    [Va]: 32779
  };
  if (n)
    ye[Hr] = 32775, ye[Xr] = 32776;
  else {
    const A = e.get("EXT_blend_minmax");
    A !== null && (ye[Hr] = A.MIN_EXT, ye[Xr] = A.MAX_EXT);
  }
  const _e = {
    [ka]: 0,
    [Wa]: 1,
    [Ha]: 768,
    [Qs]: 770,
    [$a]: 776,
    [Za]: 774,
    [qa]: 772,
    [Xa]: 769,
    [ea]: 771,
    [ja]: 775,
    [Ya]: 773
  };
  function et(A, B, Y, ae, he, Re, Ye, Ke) {
    if (A === Kt) {
      x === !0 && (ce(3042), x = !1);
      return;
    }
    if (x === !1 && (Ce(3042), x = !0), A !== Ba) {
      if (A !== T || Ke !== E) {
        if ((w !== Nn || L !== Nn) && (s.blendEquation(32774), w = Nn, L = Nn), Ke)
          switch (A) {
            case zn:
              s.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Vr:
              s.blendFunc(1, 1);
              break;
            case kr:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Wr:
              s.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", A);
              break;
          }
        else
          switch (A) {
            case zn:
              s.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Vr:
              s.blendFunc(770, 1);
              break;
            case kr:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Wr:
              s.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", A);
              break;
          }
        b = null, S = null, F = null, g = null, T = A, E = Ke;
      }
      return;
    }
    he = he || B, Re = Re || Y, Ye = Ye || ae, (B !== w || he !== L) && (s.blendEquationSeparate(ye[B], ye[he]), w = B, L = he), (Y !== b || ae !== S || Re !== F || Ye !== g) && (s.blendFuncSeparate(_e[Y], _e[ae], _e[Re], _e[Ye]), b = Y, S = ae, F = Re, g = Ye), T = A, E = !1;
  }
  function tt(A, B) {
    A.side === Gt ? ce(2884) : Ce(2884);
    let Y = A.side === Mt;
    B && (Y = !Y), nt(Y), A.blending === zn && A.transparent === !1 ? et(Kt) : et(A.blending, A.blendEquation, A.blendSrc, A.blendDst, A.blendEquationAlpha, A.blendSrcAlpha, A.blendDstAlpha, A.premultipliedAlpha), c.setFunc(A.depthFunc), c.setTest(A.depthTest), c.setMask(A.depthWrite), a.setMask(A.colorWrite);
    const ae = A.stencilWrite;
    l.setTest(ae), ae && (l.setMask(A.stencilWriteMask), l.setFunc(A.stencilFunc, A.stencilRef, A.stencilFuncMask), l.setOp(A.stencilFail, A.stencilZFail, A.stencilZPass)), Ie(A.polygonOffset, A.polygonOffsetFactor, A.polygonOffsetUnits), A.alphaToCoverage === !0 ? Ce(32926) : ce(32926);
  }
  function nt(A) {
    P !== A && (A ? s.frontFace(2304) : s.frontFace(2305), P = A);
  }
  function gt(A) {
    A !== Ua ? (Ce(2884), A !== q && (A === Gr ? s.cullFace(1029) : A === za ? s.cullFace(1028) : s.cullFace(1032))) : ce(2884), q = A;
  }
  function ke(A) {
    A !== oe && ($ && s.lineWidth(A), oe = A);
  }
  function Ie(A, B, Y) {
    A ? (Ce(32823), (N !== B || R !== Y) && (s.polygonOffset(B, Y), N = B, R = Y)) : ce(32823);
  }
  function Rt(A) {
    A ? Ce(3089) : ce(3089);
  }
  function St(A) {
    A === void 0 && (A = 33984 + X - 1), Q !== A && (s.activeTexture(A), Q = A);
  }
  function y(A, B, Y) {
    Y === void 0 && (Q === null ? Y = 33984 + X - 1 : Y = Q);
    let ae = J[Y];
    ae === void 0 && (ae = { type: void 0, texture: void 0 }, J[Y] = ae), (ae.type !== A || ae.texture !== B) && (Q !== Y && (s.activeTexture(Y), Q = Y), s.bindTexture(A, B || k[A]), ae.type = A, ae.texture = B);
  }
  function _() {
    const A = J[Q];
    A !== void 0 && A.type !== void 0 && (s.bindTexture(A.type, null), A.type = void 0, A.texture = void 0);
  }
  function O() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function K() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function te() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function re() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function ve() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function se() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function W() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function pe() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function ge() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function ue() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function me(A) {
    j.equals(A) === !1 && (s.scissor(A.x, A.y, A.z, A.w), j.copy(A));
  }
  function de(A) {
    ee.equals(A) === !1 && (s.viewport(A.x, A.y, A.z, A.w), ee.copy(A));
  }
  function Le(A, B) {
    let Y = d.get(B);
    Y === void 0 && (Y = /* @__PURE__ */ new WeakMap(), d.set(B, Y));
    let ae = Y.get(A);
    ae === void 0 && (ae = s.getUniformBlockIndex(B, A.name), Y.set(A, ae));
  }
  function Ne(A, B) {
    const ae = d.get(B).get(A);
    h.get(A) !== ae && (s.uniformBlockBinding(B, ae, A.__bindingPointIndex), h.set(A, ae));
  }
  function qe() {
    s.disable(3042), s.disable(2884), s.disable(2929), s.disable(32823), s.disable(3089), s.disable(2960), s.disable(32926), s.blendEquation(32774), s.blendFunc(1, 0), s.blendFuncSeparate(1, 0, 1, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(513), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(519, 0, 4294967295), s.stencilOp(7680, 7680, 7680), s.clearStencil(0), s.cullFace(1029), s.frontFace(2305), s.polygonOffset(0, 0), s.activeTexture(33984), s.bindFramebuffer(36160, null), n === !0 && (s.bindFramebuffer(36009, null), s.bindFramebuffer(36008, null)), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), f = {}, Q = null, J = {}, m = {}, v = /* @__PURE__ */ new WeakMap(), p = [], u = null, x = !1, T = null, w = null, b = null, S = null, L = null, F = null, g = null, E = !1, P = null, q = null, oe = null, N = null, R = null, j.set(0, 0, s.canvas.width, s.canvas.height), ee.set(0, 0, s.canvas.width, s.canvas.height), a.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: a,
      depth: c,
      stencil: l
    },
    enable: Ce,
    disable: ce,
    bindFramebuffer: xe,
    drawBuffers: le,
    useProgram: Pe,
    setBlending: et,
    setMaterial: tt,
    setFlipSided: nt,
    setCullFace: gt,
    setLineWidth: ke,
    setPolygonOffset: Ie,
    setScissorTest: Rt,
    activeTexture: St,
    bindTexture: y,
    unbindTexture: _,
    compressedTexImage2D: O,
    compressedTexImage3D: K,
    texImage2D: ge,
    texImage3D: ue,
    updateUBOMapping: Le,
    uniformBlockBinding: Ne,
    texStorage2D: W,
    texStorage3D: pe,
    texSubImage2D: te,
    texSubImage3D: re,
    compressedTexSubImage2D: ve,
    compressedTexSubImage3D: se,
    scissor: me,
    viewport: de,
    reset: qe
  };
}
function wd(s, e, t, n, i, r, o) {
  const a = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, h = i.maxTextureSize, d = i.maxSamples, f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), v = /* @__PURE__ */ new WeakMap();
  let p;
  const u = /* @__PURE__ */ new WeakMap();
  let x = !1;
  try {
    x = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function T(y, _) {
    return x ? new OffscreenCanvas(y, _) : Pi("canvas");
  }
  function w(y, _, O, K) {
    let te = 1;
    if ((y.width > K || y.height > K) && (te = K / Math.max(y.width, y.height)), te < 1 || _ === !0)
      if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap) {
        const re = _ ? Cr : Math.floor, ve = re(te * y.width), se = re(te * y.height);
        p === void 0 && (p = T(ve, se));
        const W = O ? T(ve, se) : p;
        return W.width = ve, W.height = se, W.getContext("2d").drawImage(y, 0, 0, ve, se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + y.width + "x" + y.height + ") to (" + ve + "x" + se + ")."), W;
      } else
        return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + y.width + "x" + y.height + ")."), y;
    return y;
  }
  function b(y) {
    return xs(y.width) && xs(y.height);
  }
  function S(y) {
    return a ? !1 : y.wrapS !== Et || y.wrapT !== Et || y.minFilter !== at && y.minFilter !== vt;
  }
  function L(y, _) {
    return y.generateMipmaps && _ && y.minFilter !== at && y.minFilter !== vt;
  }
  function F(y) {
    s.generateMipmap(y);
  }
  function g(y, _, O, K, te = !1) {
    if (a === !1)
      return _;
    if (y !== null) {
      if (s[y] !== void 0)
        return s[y];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let re = _;
    return _ === 6403 && (O === 5126 && (re = 33326), O === 5131 && (re = 33325), O === 5121 && (re = 33321)), _ === 33319 && (O === 5126 && (re = 33328), O === 5131 && (re = 33327), O === 5121 && (re = 33323)), _ === 6408 && (O === 5126 && (re = 34836), O === 5131 && (re = 34842), O === 5121 && (re = K === ze && te === !1 ? 35907 : 32856), O === 32819 && (re = 32854), O === 32820 && (re = 32855)), (re === 33325 || re === 33326 || re === 33327 || re === 33328 || re === 34842 || re === 34836) && e.get("EXT_color_buffer_float"), re;
  }
  function E(y, _, O) {
    return L(y, O) === !0 || y.isFramebufferTexture && y.minFilter !== at && y.minFilter !== vt ? Math.log2(Math.max(_.width, _.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? _.mipmaps.length : 1;
  }
  function P(y) {
    return y === at || y === qr || y === Yr ? 9728 : 9729;
  }
  function q(y) {
    const _ = y.target;
    _.removeEventListener("dispose", q), N(_), _.isVideoTexture && v.delete(_);
  }
  function oe(y) {
    const _ = y.target;
    _.removeEventListener("dispose", oe), X(_);
  }
  function N(y) {
    const _ = n.get(y);
    if (_.__webglInit === void 0)
      return;
    const O = y.source, K = u.get(O);
    if (K) {
      const te = K[_.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && R(y), Object.keys(K).length === 0 && u.delete(O);
    }
    n.remove(y);
  }
  function R(y) {
    const _ = n.get(y);
    s.deleteTexture(_.__webglTexture);
    const O = y.source, K = u.get(O);
    delete K[_.__cacheKey], o.memory.textures--;
  }
  function X(y) {
    const _ = y.texture, O = n.get(y), K = n.get(_);
    if (K.__webglTexture !== void 0 && (s.deleteTexture(K.__webglTexture), o.memory.textures--), y.depthTexture && y.depthTexture.dispose(), y.isWebGLCubeRenderTarget)
      for (let te = 0; te < 6; te++)
        s.deleteFramebuffer(O.__webglFramebuffer[te]), O.__webglDepthbuffer && s.deleteRenderbuffer(O.__webglDepthbuffer[te]);
    else {
      if (s.deleteFramebuffer(O.__webglFramebuffer), O.__webglDepthbuffer && s.deleteRenderbuffer(O.__webglDepthbuffer), O.__webglMultisampledFramebuffer && s.deleteFramebuffer(O.__webglMultisampledFramebuffer), O.__webglColorRenderbuffer)
        for (let te = 0; te < O.__webglColorRenderbuffer.length; te++)
          O.__webglColorRenderbuffer[te] && s.deleteRenderbuffer(O.__webglColorRenderbuffer[te]);
      O.__webglDepthRenderbuffer && s.deleteRenderbuffer(O.__webglDepthRenderbuffer);
    }
    if (y.isWebGLMultipleRenderTargets)
      for (let te = 0, re = _.length; te < re; te++) {
        const ve = n.get(_[te]);
        ve.__webglTexture && (s.deleteTexture(ve.__webglTexture), o.memory.textures--), n.remove(_[te]);
      }
    n.remove(_), n.remove(y);
  }
  let $ = 0;
  function Z() {
    $ = 0;
  }
  function H() {
    const y = $;
    return y >= c && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + c), $ += 1, y;
  }
  function Q(y) {
    const _ = [];
    return _.push(y.wrapS), _.push(y.wrapT), _.push(y.wrapR || 0), _.push(y.magFilter), _.push(y.minFilter), _.push(y.anisotropy), _.push(y.internalFormat), _.push(y.format), _.push(y.type), _.push(y.generateMipmaps), _.push(y.premultiplyAlpha), _.push(y.flipY), _.push(y.unpackAlignment), _.push(y.encoding), _.join();
  }
  function J(y, _) {
    const O = n.get(y);
    if (y.isVideoTexture && Rt(y), y.isRenderTargetTexture === !1 && y.version > 0 && O.__version !== y.version) {
      const K = y.image;
      if (K === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (K.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ce(O, y, _);
        return;
      }
    }
    t.bindTexture(3553, O.__webglTexture, 33984 + _);
  }
  function U(y, _) {
    const O = n.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      ce(O, y, _);
      return;
    }
    t.bindTexture(35866, O.__webglTexture, 33984 + _);
  }
  function G(y, _) {
    const O = n.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      ce(O, y, _);
      return;
    }
    t.bindTexture(32879, O.__webglTexture, 33984 + _);
  }
  function j(y, _) {
    const O = n.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      xe(O, y, _);
      return;
    }
    t.bindTexture(34067, O.__webglTexture, 33984 + _);
  }
  const ee = {
    [Tr]: 10497,
    [Et]: 33071,
    [Er]: 33648
  }, ie = {
    [at]: 9728,
    [qr]: 9984,
    [Yr]: 9986,
    [vt]: 9729,
    [ho]: 9985,
    [Ni]: 9987
  };
  function k(y, _, O) {
    if (O ? (s.texParameteri(y, 10242, ee[_.wrapS]), s.texParameteri(y, 10243, ee[_.wrapT]), (y === 32879 || y === 35866) && s.texParameteri(y, 32882, ee[_.wrapR]), s.texParameteri(y, 10240, ie[_.magFilter]), s.texParameteri(y, 10241, ie[_.minFilter])) : (s.texParameteri(y, 10242, 33071), s.texParameteri(y, 10243, 33071), (y === 32879 || y === 35866) && s.texParameteri(y, 32882, 33071), (_.wrapS !== Et || _.wrapT !== Et) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), s.texParameteri(y, 10240, P(_.magFilter)), s.texParameteri(y, 10241, P(_.minFilter)), _.minFilter !== at && _.minFilter !== vt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const K = e.get("EXT_texture_filter_anisotropic");
      if (_.type === fn && e.has("OES_texture_float_linear") === !1 || a === !1 && _.type === Qn && e.has("OES_texture_half_float_linear") === !1)
        return;
      (_.anisotropy > 1 || n.get(_).__currentAnisotropy) && (s.texParameterf(y, K.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, i.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy);
    }
  }
  function Ce(y, _) {
    let O = !1;
    y.__webglInit === void 0 && (y.__webglInit = !0, _.addEventListener("dispose", q));
    const K = _.source;
    let te = u.get(K);
    te === void 0 && (te = {}, u.set(K, te));
    const re = Q(_);
    if (re !== y.__cacheKey) {
      te[re] === void 0 && (te[re] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, O = !0), te[re].usedTimes++;
      const ve = te[y.__cacheKey];
      ve !== void 0 && (te[y.__cacheKey].usedTimes--, ve.usedTimes === 0 && R(_)), y.__cacheKey = re, y.__webglTexture = te[re].texture;
    }
    return O;
  }
  function ce(y, _, O) {
    let K = 3553;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (K = 35866), _.isData3DTexture && (K = 32879);
    const te = Ce(y, _), re = _.source;
    t.bindTexture(K, y.__webglTexture, 33984 + O);
    const ve = n.get(re);
    if (re.version !== ve.__version || te === !0) {
      t.activeTexture(33984 + O), s.pixelStorei(37440, _.flipY), s.pixelStorei(37441, _.premultiplyAlpha), s.pixelStorei(3317, _.unpackAlignment), s.pixelStorei(37443, 0);
      const se = S(_) && b(_.image) === !1;
      let W = w(_.image, se, !1, h);
      W = St(_, W);
      const pe = b(W) || a, ge = r.convert(_.format, _.encoding);
      let ue = r.convert(_.type), me = g(_.internalFormat, ge, ue, _.encoding, _.isVideoTexture);
      k(K, _, pe);
      let de;
      const Le = _.mipmaps, Ne = a && _.isVideoTexture !== !0, qe = ve.__version === void 0 || te === !0, A = E(_, W, pe);
      if (_.isDepthTexture)
        me = 6402, a ? _.type === fn ? me = 36012 : _.type === dn ? me = 33190 : _.type === On ? me = 35056 : me = 33189 : _.type === fn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), _.format === pn && me === 6402 && _.type !== ia && _.type !== dn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), _.type = dn, ue = r.convert(_.type)), _.format === kn && me === 6402 && (me = 34041, _.type !== On && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), _.type = On, ue = r.convert(_.type))), qe && (Ne ? t.texStorage2D(3553, 1, me, W.width, W.height) : t.texImage2D(3553, 0, me, W.width, W.height, 0, ge, ue, null));
      else if (_.isDataTexture)
        if (Le.length > 0 && pe) {
          Ne && qe && t.texStorage2D(3553, A, me, Le[0].width, Le[0].height);
          for (let B = 0, Y = Le.length; B < Y; B++)
            de = Le[B], Ne ? t.texSubImage2D(3553, B, 0, 0, de.width, de.height, ge, ue, de.data) : t.texImage2D(3553, B, me, de.width, de.height, 0, ge, ue, de.data);
          _.generateMipmaps = !1;
        } else
          Ne ? (qe && t.texStorage2D(3553, A, me, W.width, W.height), t.texSubImage2D(3553, 0, 0, 0, W.width, W.height, ge, ue, W.data)) : t.texImage2D(3553, 0, me, W.width, W.height, 0, ge, ue, W.data);
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Ne && qe && t.texStorage3D(35866, A, me, Le[0].width, Le[0].height, W.depth);
          for (let B = 0, Y = Le.length; B < Y; B++)
            de = Le[B], _.format !== At ? ge !== null ? Ne ? t.compressedTexSubImage3D(35866, B, 0, 0, 0, de.width, de.height, W.depth, ge, de.data, 0, 0) : t.compressedTexImage3D(35866, B, me, de.width, de.height, W.depth, 0, de.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ne ? t.texSubImage3D(35866, B, 0, 0, 0, de.width, de.height, W.depth, ge, ue, de.data) : t.texImage3D(35866, B, me, de.width, de.height, W.depth, 0, ge, ue, de.data);
        } else {
          Ne && qe && t.texStorage2D(3553, A, me, Le[0].width, Le[0].height);
          for (let B = 0, Y = Le.length; B < Y; B++)
            de = Le[B], _.format !== At ? ge !== null ? Ne ? t.compressedTexSubImage2D(3553, B, 0, 0, de.width, de.height, ge, de.data) : t.compressedTexImage2D(3553, B, me, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ne ? t.texSubImage2D(3553, B, 0, 0, de.width, de.height, ge, ue, de.data) : t.texImage2D(3553, B, me, de.width, de.height, 0, ge, ue, de.data);
        }
      else if (_.isDataArrayTexture)
        Ne ? (qe && t.texStorage3D(35866, A, me, W.width, W.height, W.depth), t.texSubImage3D(35866, 0, 0, 0, 0, W.width, W.height, W.depth, ge, ue, W.data)) : t.texImage3D(35866, 0, me, W.width, W.height, W.depth, 0, ge, ue, W.data);
      else if (_.isData3DTexture)
        Ne ? (qe && t.texStorage3D(32879, A, me, W.width, W.height, W.depth), t.texSubImage3D(32879, 0, 0, 0, 0, W.width, W.height, W.depth, ge, ue, W.data)) : t.texImage3D(32879, 0, me, W.width, W.height, W.depth, 0, ge, ue, W.data);
      else if (_.isFramebufferTexture) {
        if (qe)
          if (Ne)
            t.texStorage2D(3553, A, me, W.width, W.height);
          else {
            let B = W.width, Y = W.height;
            for (let ae = 0; ae < A; ae++)
              t.texImage2D(3553, ae, me, B, Y, 0, ge, ue, null), B >>= 1, Y >>= 1;
          }
      } else if (Le.length > 0 && pe) {
        Ne && qe && t.texStorage2D(3553, A, me, Le[0].width, Le[0].height);
        for (let B = 0, Y = Le.length; B < Y; B++)
          de = Le[B], Ne ? t.texSubImage2D(3553, B, 0, 0, ge, ue, de) : t.texImage2D(3553, B, me, ge, ue, de);
        _.generateMipmaps = !1;
      } else
        Ne ? (qe && t.texStorage2D(3553, A, me, W.width, W.height), t.texSubImage2D(3553, 0, 0, 0, ge, ue, W)) : t.texImage2D(3553, 0, me, ge, ue, W);
      L(_, pe) && F(K), ve.__version = re.version, _.onUpdate && _.onUpdate(_);
    }
    y.__version = _.version;
  }
  function xe(y, _, O) {
    if (_.image.length !== 6)
      return;
    const K = Ce(y, _), te = _.source;
    t.bindTexture(34067, y.__webglTexture, 33984 + O);
    const re = n.get(te);
    if (te.version !== re.__version || K === !0) {
      t.activeTexture(33984 + O), s.pixelStorei(37440, _.flipY), s.pixelStorei(37441, _.premultiplyAlpha), s.pixelStorei(3317, _.unpackAlignment), s.pixelStorei(37443, 0);
      const ve = _.isCompressedTexture || _.image[0].isCompressedTexture, se = _.image[0] && _.image[0].isDataTexture, W = [];
      for (let B = 0; B < 6; B++)
        !ve && !se ? W[B] = w(_.image[B], !1, !0, l) : W[B] = se ? _.image[B].image : _.image[B], W[B] = St(_, W[B]);
      const pe = W[0], ge = b(pe) || a, ue = r.convert(_.format, _.encoding), me = r.convert(_.type), de = g(_.internalFormat, ue, me, _.encoding), Le = a && _.isVideoTexture !== !0, Ne = re.__version === void 0 || K === !0;
      let qe = E(_, pe, ge);
      k(34067, _, ge);
      let A;
      if (ve) {
        Le && Ne && t.texStorage2D(34067, qe, de, pe.width, pe.height);
        for (let B = 0; B < 6; B++) {
          A = W[B].mipmaps;
          for (let Y = 0; Y < A.length; Y++) {
            const ae = A[Y];
            _.format !== At ? ue !== null ? Le ? t.compressedTexSubImage2D(34069 + B, Y, 0, 0, ae.width, ae.height, ue, ae.data) : t.compressedTexImage2D(34069 + B, Y, de, ae.width, ae.height, 0, ae.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Le ? t.texSubImage2D(34069 + B, Y, 0, 0, ae.width, ae.height, ue, me, ae.data) : t.texImage2D(34069 + B, Y, de, ae.width, ae.height, 0, ue, me, ae.data);
          }
        }
      } else {
        A = _.mipmaps, Le && Ne && (A.length > 0 && qe++, t.texStorage2D(34067, qe, de, W[0].width, W[0].height));
        for (let B = 0; B < 6; B++)
          if (se) {
            Le ? t.texSubImage2D(34069 + B, 0, 0, 0, W[B].width, W[B].height, ue, me, W[B].data) : t.texImage2D(34069 + B, 0, de, W[B].width, W[B].height, 0, ue, me, W[B].data);
            for (let Y = 0; Y < A.length; Y++) {
              const he = A[Y].image[B].image;
              Le ? t.texSubImage2D(34069 + B, Y + 1, 0, 0, he.width, he.height, ue, me, he.data) : t.texImage2D(34069 + B, Y + 1, de, he.width, he.height, 0, ue, me, he.data);
            }
          } else {
            Le ? t.texSubImage2D(34069 + B, 0, 0, 0, ue, me, W[B]) : t.texImage2D(34069 + B, 0, de, ue, me, W[B]);
            for (let Y = 0; Y < A.length; Y++) {
              const ae = A[Y];
              Le ? t.texSubImage2D(34069 + B, Y + 1, 0, 0, ue, me, ae.image[B]) : t.texImage2D(34069 + B, Y + 1, de, ue, me, ae.image[B]);
            }
          }
      }
      L(_, ge) && F(34067), re.__version = te.version, _.onUpdate && _.onUpdate(_);
    }
    y.__version = _.version;
  }
  function le(y, _, O, K, te) {
    const re = r.convert(O.format, O.encoding), ve = r.convert(O.type), se = g(O.internalFormat, re, ve, O.encoding);
    n.get(_).__hasExternalTextures || (te === 32879 || te === 35866 ? t.texImage3D(te, 0, se, _.width, _.height, _.depth, 0, re, ve, null) : t.texImage2D(te, 0, se, _.width, _.height, 0, re, ve, null)), t.bindFramebuffer(36160, y), Ie(_) ? f.framebufferTexture2DMultisampleEXT(36160, K, te, n.get(O).__webglTexture, 0, ke(_)) : (te === 3553 || te >= 34069 && te <= 34074) && s.framebufferTexture2D(36160, K, te, n.get(O).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Pe(y, _, O) {
    if (s.bindRenderbuffer(36161, y), _.depthBuffer && !_.stencilBuffer) {
      let K = 33189;
      if (O || Ie(_)) {
        const te = _.depthTexture;
        te && te.isDepthTexture && (te.type === fn ? K = 36012 : te.type === dn && (K = 33190));
        const re = ke(_);
        Ie(_) ? f.renderbufferStorageMultisampleEXT(36161, re, K, _.width, _.height) : s.renderbufferStorageMultisample(36161, re, K, _.width, _.height);
      } else
        s.renderbufferStorage(36161, K, _.width, _.height);
      s.framebufferRenderbuffer(36160, 36096, 36161, y);
    } else if (_.depthBuffer && _.stencilBuffer) {
      const K = ke(_);
      O && Ie(_) === !1 ? s.renderbufferStorageMultisample(36161, K, 35056, _.width, _.height) : Ie(_) ? f.renderbufferStorageMultisampleEXT(36161, K, 35056, _.width, _.height) : s.renderbufferStorage(36161, 34041, _.width, _.height), s.framebufferRenderbuffer(36160, 33306, 36161, y);
    } else {
      const K = _.isWebGLMultipleRenderTargets === !0 ? _.texture : [_.texture];
      for (let te = 0; te < K.length; te++) {
        const re = K[te], ve = r.convert(re.format, re.encoding), se = r.convert(re.type), W = g(re.internalFormat, ve, se, re.encoding), pe = ke(_);
        O && Ie(_) === !1 ? s.renderbufferStorageMultisample(36161, pe, W, _.width, _.height) : Ie(_) ? f.renderbufferStorageMultisampleEXT(36161, pe, W, _.width, _.height) : s.renderbufferStorage(36161, W, _.width, _.height);
      }
    }
    s.bindRenderbuffer(36161, null);
  }
  function ye(y, _) {
    if (_ && _.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, y), !(_.depthTexture && _.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(_.depthTexture).__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = !0), J(_.depthTexture, 0);
    const K = n.get(_.depthTexture).__webglTexture, te = ke(_);
    if (_.depthTexture.format === pn)
      Ie(_) ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, K, 0, te) : s.framebufferTexture2D(36160, 36096, 3553, K, 0);
    else if (_.depthTexture.format === kn)
      Ie(_) ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, K, 0, te) : s.framebufferTexture2D(36160, 33306, 3553, K, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function _e(y) {
    const _ = n.get(y), O = y.isWebGLCubeRenderTarget === !0;
    if (y.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (O)
        throw new Error("target.depthTexture not supported in Cube render targets");
      ye(_.__webglFramebuffer, y);
    } else if (O) {
      _.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        t.bindFramebuffer(36160, _.__webglFramebuffer[K]), _.__webglDepthbuffer[K] = s.createRenderbuffer(), Pe(_.__webglDepthbuffer[K], y, !1);
    } else
      t.bindFramebuffer(36160, _.__webglFramebuffer), _.__webglDepthbuffer = s.createRenderbuffer(), Pe(_.__webglDepthbuffer, y, !1);
    t.bindFramebuffer(36160, null);
  }
  function et(y, _, O) {
    const K = n.get(y);
    _ !== void 0 && le(K.__webglFramebuffer, y, y.texture, 36064, 3553), O !== void 0 && _e(y);
  }
  function tt(y) {
    const _ = y.texture, O = n.get(y), K = n.get(_);
    y.addEventListener("dispose", oe), y.isWebGLMultipleRenderTargets !== !0 && (K.__webglTexture === void 0 && (K.__webglTexture = s.createTexture()), K.__version = _.version, o.memory.textures++);
    const te = y.isWebGLCubeRenderTarget === !0, re = y.isWebGLMultipleRenderTargets === !0, ve = b(y) || a;
    if (te) {
      O.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        O.__webglFramebuffer[se] = s.createFramebuffer();
    } else {
      if (O.__webglFramebuffer = s.createFramebuffer(), re)
        if (i.drawBuffers) {
          const se = y.texture;
          for (let W = 0, pe = se.length; W < pe; W++) {
            const ge = n.get(se[W]);
            ge.__webglTexture === void 0 && (ge.__webglTexture = s.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && y.samples > 0 && Ie(y) === !1) {
        const se = re ? _ : [_];
        O.__webglMultisampledFramebuffer = s.createFramebuffer(), O.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, O.__webglMultisampledFramebuffer);
        for (let W = 0; W < se.length; W++) {
          const pe = se[W];
          O.__webglColorRenderbuffer[W] = s.createRenderbuffer(), s.bindRenderbuffer(36161, O.__webglColorRenderbuffer[W]);
          const ge = r.convert(pe.format, pe.encoding), ue = r.convert(pe.type), me = g(pe.internalFormat, ge, ue, pe.encoding, y.isXRRenderTarget === !0), de = ke(y);
          s.renderbufferStorageMultisample(36161, de, me, y.width, y.height), s.framebufferRenderbuffer(36160, 36064 + W, 36161, O.__webglColorRenderbuffer[W]);
        }
        s.bindRenderbuffer(36161, null), y.depthBuffer && (O.__webglDepthRenderbuffer = s.createRenderbuffer(), Pe(O.__webglDepthRenderbuffer, y, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (te) {
      t.bindTexture(34067, K.__webglTexture), k(34067, _, ve);
      for (let se = 0; se < 6; se++)
        le(O.__webglFramebuffer[se], y, _, 36064, 34069 + se);
      L(_, ve) && F(34067), t.unbindTexture();
    } else if (re) {
      const se = y.texture;
      for (let W = 0, pe = se.length; W < pe; W++) {
        const ge = se[W], ue = n.get(ge);
        t.bindTexture(3553, ue.__webglTexture), k(3553, ge, ve), le(O.__webglFramebuffer, y, ge, 36064 + W, 3553), L(ge, ve) && F(3553);
      }
      t.unbindTexture();
    } else {
      let se = 3553;
      (y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (a ? se = y.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(se, K.__webglTexture), k(se, _, ve), le(O.__webglFramebuffer, y, _, 36064, se), L(_, ve) && F(se), t.unbindTexture();
    }
    y.depthBuffer && _e(y);
  }
  function nt(y) {
    const _ = b(y) || a, O = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture];
    for (let K = 0, te = O.length; K < te; K++) {
      const re = O[K];
      if (L(re, _)) {
        const ve = y.isWebGLCubeRenderTarget ? 34067 : 3553, se = n.get(re).__webglTexture;
        t.bindTexture(ve, se), F(ve), t.unbindTexture();
      }
    }
  }
  function gt(y) {
    if (a && y.samples > 0 && Ie(y) === !1) {
      const _ = y.isWebGLMultipleRenderTargets ? y.texture : [y.texture], O = y.width, K = y.height;
      let te = 16384;
      const re = [], ve = y.stencilBuffer ? 33306 : 36096, se = n.get(y), W = y.isWebGLMultipleRenderTargets === !0;
      if (W)
        for (let pe = 0; pe < _.length; pe++)
          t.bindFramebuffer(36160, se.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(36160, 36064 + pe, 36161, null), t.bindFramebuffer(36160, se.__webglFramebuffer), s.framebufferTexture2D(36009, 36064 + pe, 3553, null, 0);
      t.bindFramebuffer(36008, se.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, se.__webglFramebuffer);
      for (let pe = 0; pe < _.length; pe++) {
        re.push(36064 + pe), y.depthBuffer && re.push(ve);
        const ge = se.__ignoreDepthValues !== void 0 ? se.__ignoreDepthValues : !1;
        if (ge === !1 && (y.depthBuffer && (te |= 256), y.stencilBuffer && (te |= 1024)), W && s.framebufferRenderbuffer(36008, 36064, 36161, se.__webglColorRenderbuffer[pe]), ge === !0 && (s.invalidateFramebuffer(36008, [ve]), s.invalidateFramebuffer(36009, [ve])), W) {
          const ue = n.get(_[pe]).__webglTexture;
          s.framebufferTexture2D(36009, 36064, 3553, ue, 0);
        }
        s.blitFramebuffer(0, 0, O, K, 0, 0, O, K, te, 9728), m && s.invalidateFramebuffer(36008, re);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), W)
        for (let pe = 0; pe < _.length; pe++) {
          t.bindFramebuffer(36160, se.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(36160, 36064 + pe, 36161, se.__webglColorRenderbuffer[pe]);
          const ge = n.get(_[pe]).__webglTexture;
          t.bindFramebuffer(36160, se.__webglFramebuffer), s.framebufferTexture2D(36009, 36064 + pe, 3553, ge, 0);
        }
      t.bindFramebuffer(36009, se.__webglMultisampledFramebuffer);
    }
  }
  function ke(y) {
    return Math.min(d, y.samples);
  }
  function Ie(y) {
    const _ = n.get(y);
    return a && y.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1;
  }
  function Rt(y) {
    const _ = o.render.frame;
    v.get(y) !== _ && (v.set(y, _), y.update());
  }
  function St(y, _) {
    const O = y.encoding, K = y.format, te = y.type;
    return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || y.format === Ar || O !== xn && (O === ze ? a === !1 ? e.has("EXT_sRGB") === !0 && K === At ? (y.format = Ar, y.minFilter = vt, y.generateMipmaps = !1) : _ = aa.sRGBToLinear(_) : (K !== At || te !== _n) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", O)), _;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = Z, this.setTexture2D = J, this.setTexture2DArray = U, this.setTexture3D = G, this.setTextureCube = j, this.rebindTextures = et, this.setupRenderTarget = tt, this.updateRenderTargetMipmap = nt, this.updateMultisampleRenderTarget = gt, this.setupDepthRenderbuffer = _e, this.setupFrameBufferTexture = le, this.useMultisampledRTT = Ie;
}
function Td(s, e, t) {
  const n = t.isWebGL2;
  function i(r, o = null) {
    let a;
    if (r === _n)
      return 5121;
    if (r === go)
      return 32819;
    if (r === _o)
      return 32820;
    if (r === fo)
      return 5120;
    if (r === po)
      return 5122;
    if (r === ia)
      return 5123;
    if (r === mo)
      return 5124;
    if (r === dn)
      return 5125;
    if (r === fn)
      return 5126;
    if (r === Qn)
      return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (r === xo)
      return 6406;
    if (r === At)
      return 6408;
    if (r === Mo)
      return 6409;
    if (r === So)
      return 6410;
    if (r === pn)
      return 6402;
    if (r === kn)
      return 34041;
    if (r === vo)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (r === Ar)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === yo)
      return 6403;
    if (r === bo)
      return 36244;
    if (r === wo)
      return 33319;
    if (r === To)
      return 33320;
    if (r === Eo)
      return 36249;
    if (r === Wi || r === Hi || r === Xi || r === qi)
      if (o === ze)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (r === Wi)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Hi)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Xi)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === qi)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (r === Wi)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Hi)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Xi)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === qi)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === Zr || r === jr || r === $r || r === Jr)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (r === Zr)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === jr)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === $r)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === Jr)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === Ao)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === Kr || r === Qr)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (r === Kr)
          return o === ze ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === Qr)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === es || r === ts || r === ns || r === is || r === rs || r === ss || r === as || r === os || r === ls || r === cs || r === us || r === hs || r === ds || r === fs)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (r === es)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === ts)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === ns)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === is)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === rs)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === ss)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === as)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === os)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === ls)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === cs)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === us)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === hs)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === ds)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === fs)
          return o === ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === ps)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (r === ps)
          return o === ze ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    return r === On ? n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : s[r] !== void 0 ? s[r] : null;
  }
  return { convert: i };
}
class Ed extends Tt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Ai extends mt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Ad = { type: "move" };
class Sr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Ai(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ai(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new I(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new I()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Ai(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new I(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new I()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, r = null, o = null;
    const a = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = !0;
        for (const p of e.hand.values()) {
          const u = t.getJointPose(p, n), x = this._getHandJoint(l, p);
          u !== null && (x.matrix.fromArray(u.transform.matrix), x.matrix.decompose(x.position, x.rotation, x.scale), x.jointRadius = u.radius), x.visible = u !== null;
        }
        const h = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], f = h.position.distanceTo(d.position), m = 0.02, v = 5e-3;
        l.inputState.pinching && f > m + v ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && f <= m - v && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Ad)));
    }
    return a !== null && (a.visible = i !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Ai();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Cd extends pt {
  constructor(e, t, n, i, r, o, a, c, l, h) {
    if (h = h !== void 0 ? h : pn, h !== pn && h !== kn)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === pn && (n = dn), n === void 0 && h === kn && (n = On), super(null, i, r, o, a, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : at, this.minFilter = c !== void 0 ? c : at, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class Ld extends Hn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, o = null, a = "local-floor", c = null, l = null, h = null, d = null, f = null, m = null;
    const v = t.getContextAttributes();
    let p = null, u = null;
    const x = [], T = [], w = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Map(), S = new Tt();
    S.layers.enable(1), S.viewport = new $e();
    const L = new Tt();
    L.layers.enable(2), L.viewport = new $e();
    const F = [S, L], g = new Ed();
    g.layers.enable(1), g.layers.enable(2);
    let E = null, P = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(U) {
      let G = x[U];
      return G === void 0 && (G = new Sr(), x[U] = G), G.getTargetRaySpace();
    }, this.getControllerGrip = function(U) {
      let G = x[U];
      return G === void 0 && (G = new Sr(), x[U] = G), G.getGripSpace();
    }, this.getHand = function(U) {
      let G = x[U];
      return G === void 0 && (G = new Sr(), x[U] = G), G.getHandSpace();
    };
    function q(U) {
      const G = T.indexOf(U.inputSource);
      if (G === -1)
        return;
      const j = x[G];
      j !== void 0 && j.dispatchEvent({ type: U.type, data: U.inputSource });
    }
    function oe() {
      i.removeEventListener("select", q), i.removeEventListener("selectstart", q), i.removeEventListener("selectend", q), i.removeEventListener("squeeze", q), i.removeEventListener("squeezestart", q), i.removeEventListener("squeezeend", q), i.removeEventListener("end", oe), i.removeEventListener("inputsourceschange", N);
      for (let U = 0; U < x.length; U++) {
        const G = T[U];
        G !== null && (T[U] = null, x[U].disconnect(G));
      }
      E = null, P = null, e.setRenderTarget(p), f = null, d = null, h = null, i = null, u = null, J.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(U) {
      r = U, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(U) {
      a = U, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(U) {
      c = U;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return h;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(U) {
      if (i = U, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", q), i.addEventListener("selectstart", q), i.addEventListener("selectend", q), i.addEventListener("squeeze", q), i.addEventListener("squeezestart", q), i.addEventListener("squeezeend", q), i.addEventListener("end", oe), i.addEventListener("inputsourceschange", N), v.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const G = {
            antialias: i.renderState.layers === void 0 ? v.antialias : !0,
            alpha: v.alpha,
            depth: v.depth,
            stencil: v.stencil,
            framebufferScaleFactor: r
          };
          f = new XRWebGLLayer(i, t, G), i.updateRenderState({ baseLayer: f }), u = new vn(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: At,
              type: _n,
              encoding: e.outputEncoding,
              stencilBuffer: v.stencil
            }
          );
        } else {
          let G = null, j = null, ee = null;
          v.depth && (ee = v.stencil ? 35056 : 33190, G = v.stencil ? kn : pn, j = v.stencil ? On : dn);
          const ie = {
            colorFormat: 32856,
            depthFormat: ee,
            scaleFactor: r
          };
          h = new XRWebGLBinding(i, t), d = h.createProjectionLayer(ie), i.updateRenderState({ layers: [d] }), u = new vn(
            d.textureWidth,
            d.textureHeight,
            {
              format: At,
              type: _n,
              depthTexture: new Cd(d.textureWidth, d.textureHeight, j, void 0, void 0, void 0, void 0, void 0, void 0, G),
              stencilBuffer: v.stencil,
              encoding: e.outputEncoding,
              samples: v.antialias ? 4 : 0
            }
          );
          const k = e.properties.get(u);
          k.__ignoreDepthValues = d.ignoreDepthValues;
        }
        u.isXRRenderTarget = !0, this.setFoveation(1), c = null, o = await i.requestReferenceSpace(a), J.setContext(i), J.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function N(U) {
      for (let G = 0; G < U.removed.length; G++) {
        const j = U.removed[G], ee = T.indexOf(j);
        ee >= 0 && (T[ee] = null, x[ee].disconnect(j));
      }
      for (let G = 0; G < U.added.length; G++) {
        const j = U.added[G];
        let ee = T.indexOf(j);
        if (ee === -1) {
          for (let k = 0; k < x.length; k++)
            if (k >= T.length) {
              T.push(j), ee = k;
              break;
            } else if (T[k] === null) {
              T[k] = j, ee = k;
              break;
            }
          if (ee === -1)
            break;
        }
        const ie = x[ee];
        ie && ie.connect(j);
      }
    }
    const R = new I(), X = new I();
    function $(U, G, j) {
      R.setFromMatrixPosition(G.matrixWorld), X.setFromMatrixPosition(j.matrixWorld);
      const ee = R.distanceTo(X), ie = G.projectionMatrix.elements, k = j.projectionMatrix.elements, Ce = ie[14] / (ie[10] - 1), ce = ie[14] / (ie[10] + 1), xe = (ie[9] + 1) / ie[5], le = (ie[9] - 1) / ie[5], Pe = (ie[8] - 1) / ie[0], ye = (k[8] + 1) / k[0], _e = Ce * Pe, et = Ce * ye, tt = ee / (-Pe + ye), nt = tt * -Pe;
      G.matrixWorld.decompose(U.position, U.quaternion, U.scale), U.translateX(nt), U.translateZ(tt), U.matrixWorld.compose(U.position, U.quaternion, U.scale), U.matrixWorldInverse.copy(U.matrixWorld).invert();
      const gt = Ce + tt, ke = ce + tt, Ie = _e - nt, Rt = et + (ee - nt), St = xe * ce / ke * gt, y = le * ce / ke * gt;
      U.projectionMatrix.makePerspective(Ie, Rt, St, y, gt, ke);
    }
    function Z(U, G) {
      G === null ? U.matrixWorld.copy(U.matrix) : U.matrixWorld.multiplyMatrices(G.matrixWorld, U.matrix), U.matrixWorldInverse.copy(U.matrixWorld).invert();
    }
    this.updateCamera = function(U) {
      if (i === null)
        return;
      g.near = L.near = S.near = U.near, g.far = L.far = S.far = U.far, (E !== g.near || P !== g.far) && (i.updateRenderState({
        depthNear: g.near,
        depthFar: g.far
      }), E = g.near, P = g.far);
      const G = U.parent, j = g.cameras;
      Z(g, G);
      for (let ie = 0; ie < j.length; ie++)
        Z(j[ie], G);
      g.matrixWorld.decompose(g.position, g.quaternion, g.scale), U.matrix.copy(g.matrix), U.matrix.decompose(U.position, U.quaternion, U.scale);
      const ee = U.children;
      for (let ie = 0, k = ee.length; ie < k; ie++)
        ee[ie].updateMatrixWorld(!0);
      j.length === 2 ? $(g, S, L) : g.projectionMatrix.copy(S.projectionMatrix);
    }, this.getCamera = function() {
      return g;
    }, this.getFoveation = function() {
      if (d !== null)
        return d.fixedFoveation;
      if (f !== null)
        return f.fixedFoveation;
    }, this.setFoveation = function(U) {
      d !== null && (d.fixedFoveation = U), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = U);
    }, this.getPlanes = function() {
      return w;
    };
    let H = null;
    function Q(U, G) {
      if (l = G.getViewerPose(c || o), m = G, l !== null) {
        const j = l.views;
        f !== null && (e.setRenderTargetFramebuffer(u, f.framebuffer), e.setRenderTarget(u));
        let ee = !1;
        j.length !== g.cameras.length && (g.cameras.length = 0, ee = !0);
        for (let ie = 0; ie < j.length; ie++) {
          const k = j[ie];
          let Ce = null;
          if (f !== null)
            Ce = f.getViewport(k);
          else {
            const xe = h.getViewSubImage(d, k);
            Ce = xe.viewport, ie === 0 && (e.setRenderTargetTextures(
              u,
              xe.colorTexture,
              d.ignoreDepthValues ? void 0 : xe.depthStencilTexture
            ), e.setRenderTarget(u));
          }
          let ce = F[ie];
          ce === void 0 && (ce = new Tt(), ce.layers.enable(ie), ce.viewport = new $e(), F[ie] = ce), ce.matrix.fromArray(k.transform.matrix), ce.projectionMatrix.fromArray(k.projectionMatrix), ce.viewport.set(Ce.x, Ce.y, Ce.width, Ce.height), ie === 0 && g.matrix.copy(ce.matrix), ee === !0 && g.cameras.push(ce);
        }
      }
      for (let j = 0; j < x.length; j++) {
        const ee = T[j], ie = x[j];
        ee !== null && ie !== void 0 && ie.update(ee, G, c || o);
      }
      if (H && H(U, G), G.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: G.detectedPlanes });
        let j = null;
        for (const ee of w)
          G.detectedPlanes.has(ee) || (j === null && (j = []), j.push(ee));
        if (j !== null)
          for (const ee of j)
            w.delete(ee), b.delete(ee), n.dispatchEvent({ type: "planeremoved", data: ee });
        for (const ee of G.detectedPlanes)
          if (!w.has(ee))
            w.add(ee), b.set(ee, G.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: ee });
          else {
            const ie = b.get(ee);
            ee.lastChangedTime > ie && (b.set(ee, ee.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: ee }));
          }
      }
      m = null;
    }
    const J = new _a();
    J.setAnimationLoop(Q), this.setAnimationLoop = function(U) {
      H = U;
    }, this.dispose = function() {
    };
  }
}
function Dd(s, e) {
  function t(p, u) {
    u.color.getRGB(p.fogColor.value, fa(s)), u.isFog ? (p.fogNear.value = u.near, p.fogFar.value = u.far) : u.isFogExp2 && (p.fogDensity.value = u.density);
  }
  function n(p, u, x, T, w) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial ? i(p, u) : u.isMeshToonMaterial ? (i(p, u), h(p, u)) : u.isMeshPhongMaterial ? (i(p, u), l(p, u)) : u.isMeshStandardMaterial ? (i(p, u), d(p, u), u.isMeshPhysicalMaterial && f(p, u, w)) : u.isMeshMatcapMaterial ? (i(p, u), m(p, u)) : u.isMeshDepthMaterial ? i(p, u) : u.isMeshDistanceMaterial ? (i(p, u), v(p, u)) : u.isMeshNormalMaterial ? i(p, u) : u.isLineBasicMaterial ? (r(p, u), u.isLineDashedMaterial && o(p, u)) : u.isPointsMaterial ? a(p, u, x, T) : u.isSpriteMaterial ? c(p, u) : u.isShadowMaterial ? (p.color.value.copy(u.color), p.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function i(p, u) {
    p.opacity.value = u.opacity, u.color && p.diffuse.value.copy(u.color), u.emissive && p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (p.map.value = u.map), u.alphaMap && (p.alphaMap.value = u.alphaMap), u.bumpMap && (p.bumpMap.value = u.bumpMap, p.bumpScale.value = u.bumpScale, u.side === Mt && (p.bumpScale.value *= -1)), u.displacementMap && (p.displacementMap.value = u.displacementMap, p.displacementScale.value = u.displacementScale, p.displacementBias.value = u.displacementBias), u.emissiveMap && (p.emissiveMap.value = u.emissiveMap), u.normalMap && (p.normalMap.value = u.normalMap, p.normalScale.value.copy(u.normalScale), u.side === Mt && p.normalScale.value.negate()), u.specularMap && (p.specularMap.value = u.specularMap), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
    const x = e.get(u).envMap;
    if (x && (p.envMap.value = x, p.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = u.reflectivity, p.ior.value = u.ior, p.refractionRatio.value = u.refractionRatio), u.lightMap) {
      p.lightMap.value = u.lightMap;
      const b = s.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = u.lightMapIntensity * b;
    }
    u.aoMap && (p.aoMap.value = u.aoMap, p.aoMapIntensity.value = u.aoMapIntensity);
    let T;
    u.map ? T = u.map : u.specularMap ? T = u.specularMap : u.displacementMap ? T = u.displacementMap : u.normalMap ? T = u.normalMap : u.bumpMap ? T = u.bumpMap : u.roughnessMap ? T = u.roughnessMap : u.metalnessMap ? T = u.metalnessMap : u.alphaMap ? T = u.alphaMap : u.emissiveMap ? T = u.emissiveMap : u.clearcoatMap ? T = u.clearcoatMap : u.clearcoatNormalMap ? T = u.clearcoatNormalMap : u.clearcoatRoughnessMap ? T = u.clearcoatRoughnessMap : u.iridescenceMap ? T = u.iridescenceMap : u.iridescenceThicknessMap ? T = u.iridescenceThicknessMap : u.specularIntensityMap ? T = u.specularIntensityMap : u.specularColorMap ? T = u.specularColorMap : u.transmissionMap ? T = u.transmissionMap : u.thicknessMap ? T = u.thicknessMap : u.sheenColorMap ? T = u.sheenColorMap : u.sheenRoughnessMap && (T = u.sheenRoughnessMap), T !== void 0 && (T.isWebGLRenderTarget && (T = T.texture), T.matrixAutoUpdate === !0 && T.updateMatrix(), p.uvTransform.value.copy(T.matrix));
    let w;
    u.aoMap ? w = u.aoMap : u.lightMap && (w = u.lightMap), w !== void 0 && (w.isWebGLRenderTarget && (w = w.texture), w.matrixAutoUpdate === !0 && w.updateMatrix(), p.uv2Transform.value.copy(w.matrix));
  }
  function r(p, u) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity;
  }
  function o(p, u) {
    p.dashSize.value = u.dashSize, p.totalSize.value = u.dashSize + u.gapSize, p.scale.value = u.scale;
  }
  function a(p, u, x, T) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.size.value = u.size * x, p.scale.value = T * 0.5, u.map && (p.map.value = u.map), u.alphaMap && (p.alphaMap.value = u.alphaMap), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
    let w;
    u.map ? w = u.map : u.alphaMap && (w = u.alphaMap), w !== void 0 && (w.matrixAutoUpdate === !0 && w.updateMatrix(), p.uvTransform.value.copy(w.matrix));
  }
  function c(p, u) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.rotation.value = u.rotation, u.map && (p.map.value = u.map), u.alphaMap && (p.alphaMap.value = u.alphaMap), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
    let x;
    u.map ? x = u.map : u.alphaMap && (x = u.alphaMap), x !== void 0 && (x.matrixAutoUpdate === !0 && x.updateMatrix(), p.uvTransform.value.copy(x.matrix));
  }
  function l(p, u) {
    p.specular.value.copy(u.specular), p.shininess.value = Math.max(u.shininess, 1e-4);
  }
  function h(p, u) {
    u.gradientMap && (p.gradientMap.value = u.gradientMap);
  }
  function d(p, u) {
    p.roughness.value = u.roughness, p.metalness.value = u.metalness, u.roughnessMap && (p.roughnessMap.value = u.roughnessMap), u.metalnessMap && (p.metalnessMap.value = u.metalnessMap), e.get(u).envMap && (p.envMapIntensity.value = u.envMapIntensity);
  }
  function f(p, u, x) {
    p.ior.value = u.ior, u.sheen > 0 && (p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), p.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (p.sheenColorMap.value = u.sheenColorMap), u.sheenRoughnessMap && (p.sheenRoughnessMap.value = u.sheenRoughnessMap)), u.clearcoat > 0 && (p.clearcoat.value = u.clearcoat, p.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (p.clearcoatMap.value = u.clearcoatMap), u.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap), u.clearcoatNormalMap && (p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), p.clearcoatNormalMap.value = u.clearcoatNormalMap, u.side === Mt && p.clearcoatNormalScale.value.negate())), u.iridescence > 0 && (p.iridescence.value = u.iridescence, p.iridescenceIOR.value = u.iridescenceIOR, p.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (p.iridescenceMap.value = u.iridescenceMap), u.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = u.iridescenceThicknessMap)), u.transmission > 0 && (p.transmission.value = u.transmission, p.transmissionSamplerMap.value = x.texture, p.transmissionSamplerSize.value.set(x.width, x.height), u.transmissionMap && (p.transmissionMap.value = u.transmissionMap), p.thickness.value = u.thickness, u.thicknessMap && (p.thicknessMap.value = u.thicknessMap), p.attenuationDistance.value = u.attenuationDistance, p.attenuationColor.value.copy(u.attenuationColor)), p.specularIntensity.value = u.specularIntensity, p.specularColor.value.copy(u.specularColor), u.specularIntensityMap && (p.specularIntensityMap.value = u.specularIntensityMap), u.specularColorMap && (p.specularColorMap.value = u.specularColorMap);
  }
  function m(p, u) {
    u.matcap && (p.matcap.value = u.matcap);
  }
  function v(p, u) {
    p.referencePosition.value.copy(u.referencePosition), p.nearDistance.value = u.nearDistance, p.farDistance.value = u.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function Rd(s, e, t, n) {
  let i = {}, r = {}, o = [];
  const a = t.isWebGL2 ? s.getParameter(35375) : 0;
  function c(T, w) {
    const b = w.program;
    n.uniformBlockBinding(T, b);
  }
  function l(T, w) {
    let b = i[T.id];
    b === void 0 && (v(T), b = h(T), i[T.id] = b, T.addEventListener("dispose", u));
    const S = w.program;
    n.updateUBOMapping(T, S);
    const L = e.render.frame;
    r[T.id] !== L && (f(T), r[T.id] = L);
  }
  function h(T) {
    const w = d();
    T.__bindingPointIndex = w;
    const b = s.createBuffer(), S = T.__size, L = T.usage;
    return s.bindBuffer(35345, b), s.bufferData(35345, S, L), s.bindBuffer(35345, null), s.bindBufferBase(35345, w, b), b;
  }
  function d() {
    for (let T = 0; T < a; T++)
      if (o.indexOf(T) === -1)
        return o.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(T) {
    const w = i[T.id], b = T.uniforms, S = T.__cache;
    s.bindBuffer(35345, w);
    for (let L = 0, F = b.length; L < F; L++) {
      const g = b[L];
      if (m(g, L, S) === !0) {
        const E = g.value, P = g.__offset;
        typeof E == "number" ? (g.__data[0] = E, s.bufferSubData(35345, P, g.__data)) : (g.value.isMatrix3 ? (g.__data[0] = g.value.elements[0], g.__data[1] = g.value.elements[1], g.__data[2] = g.value.elements[2], g.__data[3] = g.value.elements[0], g.__data[4] = g.value.elements[3], g.__data[5] = g.value.elements[4], g.__data[6] = g.value.elements[5], g.__data[7] = g.value.elements[0], g.__data[8] = g.value.elements[6], g.__data[9] = g.value.elements[7], g.__data[10] = g.value.elements[8], g.__data[11] = g.value.elements[0]) : E.toArray(g.__data), s.bufferSubData(35345, P, g.__data));
      }
    }
    s.bindBuffer(35345, null);
  }
  function m(T, w, b) {
    const S = T.value;
    if (b[w] === void 0)
      return typeof S == "number" ? b[w] = S : b[w] = S.clone(), !0;
    if (typeof S == "number") {
      if (b[w] !== S)
        return b[w] = S, !0;
    } else {
      const L = b[w];
      if (L.equals(S) === !1)
        return L.copy(S), !0;
    }
    return !1;
  }
  function v(T) {
    const w = T.uniforms;
    let b = 0;
    const S = 16;
    let L = 0;
    for (let F = 0, g = w.length; F < g; F++) {
      const E = w[F], P = p(E);
      if (E.__data = new Float32Array(P.storage / Float32Array.BYTES_PER_ELEMENT), E.__offset = b, F > 0) {
        L = b % S;
        const q = S - L;
        L !== 0 && q - P.boundary < 0 && (b += S - L, E.__offset = b);
      }
      b += P.storage;
    }
    return L = b % S, L > 0 && (b += S - L), T.__size = b, T.__cache = {}, this;
  }
  function p(T) {
    const w = T.value, b = {
      boundary: 0,
      storage: 0
    };
    return typeof w == "number" ? (b.boundary = 4, b.storage = 4) : w.isVector2 ? (b.boundary = 8, b.storage = 8) : w.isVector3 || w.isColor ? (b.boundary = 16, b.storage = 12) : w.isVector4 ? (b.boundary = 16, b.storage = 16) : w.isMatrix3 ? (b.boundary = 48, b.storage = 48) : w.isMatrix4 ? (b.boundary = 64, b.storage = 64) : w.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", w), b;
  }
  function u(T) {
    const w = T.target;
    w.removeEventListener("dispose", u);
    const b = o.indexOf(w.__bindingPointIndex);
    o.splice(b, 1), s.deleteBuffer(i[w.id]), delete i[w.id], delete r[w.id];
  }
  function x() {
    for (const T in i)
      s.deleteBuffer(i[T]);
    o = [], i = {}, r = {};
  }
  return {
    bind: c,
    update: l,
    dispose: x
  };
}
function Pd() {
  const s = Pi("canvas");
  return s.style.display = "block", s;
}
function ba(s = {}) {
  this.isWebGLRenderer = !0;
  const e = s.canvas !== void 0 ? s.canvas : Pd(), t = s.context !== void 0 ? s.context : null, n = s.depth !== void 0 ? s.depth : !0, i = s.stencil !== void 0 ? s.stencil : !0, r = s.antialias !== void 0 ? s.antialias : !1, o = s.premultipliedAlpha !== void 0 ? s.premultipliedAlpha : !0, a = s.preserveDrawingBuffer !== void 0 ? s.preserveDrawingBuffer : !1, c = s.powerPreference !== void 0 ? s.powerPreference : "default", l = s.failIfMajorPerformanceCaveat !== void 0 ? s.failIfMajorPerformanceCaveat : !1;
  let h;
  t !== null ? h = t.getContextAttributes().alpha : h = s.alpha !== void 0 ? s.alpha : !1;
  let d = null, f = null;
  const m = [], v = [];
  this.domElement = e, this.debug = {
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = xn, this.physicallyCorrectLights = !1, this.toneMapping = kt, this.toneMappingExposure = 1;
  const p = this;
  let u = !1, x = 0, T = 0, w = null, b = -1, S = null;
  const L = new $e(), F = new $e();
  let g = null, E = e.width, P = e.height, q = 1, oe = null, N = null;
  const R = new $e(0, 0, E, P), X = new $e(0, 0, E, P);
  let $ = !1;
  const Z = new ga();
  let H = !1, Q = !1, J = null;
  const U = new Je(), G = new Fe(), j = new I(), ee = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function ie() {
    return w === null ? q : 1;
  }
  let k = t;
  function Ce(M, D) {
    for (let z = 0; z < M.length; z++) {
      const C = M[z], V = e.getContext(C, D);
      if (V !== null)
        return V;
    }
    return null;
  }
  try {
    const M = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: r,
      premultipliedAlpha: o,
      preserveDrawingBuffer: a,
      powerPreference: c,
      failIfMajorPerformanceCaveat: l
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Rr}`), e.addEventListener("webglcontextlost", me, !1), e.addEventListener("webglcontextrestored", de, !1), e.addEventListener("webglcontextcreationerror", Le, !1), k === null) {
      const D = ["webgl2", "webgl", "experimental-webgl"];
      if (p.isWebGL1Renderer === !0 && D.shift(), k = Ce(D, M), k === null)
        throw Ce(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    k.getShaderPrecisionFormat === void 0 && (k.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (M) {
    throw console.error("THREE.WebGLRenderer: " + M.message), M;
  }
  let ce, xe, le, Pe, ye, _e, et, tt, nt, gt, ke, Ie, Rt, St, y, _, O, K, te, re, ve, se, W, pe;
  function ge() {
    ce = new Wu(k), xe = new zu(k, ce, s), ce.init(xe), se = new Td(k, ce, xe), le = new bd(k, ce, xe), Pe = new qu(), ye = new cd(), _e = new wd(k, ce, le, ye, xe, se, Pe), et = new Bu(p), tt = new ku(p), nt = new tl(k, xe), W = new Nu(k, ce, nt, xe), gt = new Hu(k, nt, Pe, W), ke = new $u(k, gt, nt, Pe), te = new ju(k, xe, _e), _ = new Ou(ye), Ie = new ld(p, et, tt, ce, xe, W, _), Rt = new Dd(p, ye), St = new hd(), y = new _d(ce, xe), K = new Fu(p, et, tt, le, ke, h, o), O = new yd(p, ke, xe), pe = new Rd(k, Pe, xe, le), re = new Uu(k, ce, Pe, xe), ve = new Xu(k, ce, Pe, xe), Pe.programs = Ie.programs, p.capabilities = xe, p.extensions = ce, p.properties = ye, p.renderLists = St, p.shadowMap = O, p.state = le, p.info = Pe;
  }
  ge();
  const ue = new Ld(p, k);
  this.xr = ue, this.getContext = function() {
    return k;
  }, this.getContextAttributes = function() {
    return k.getContextAttributes();
  }, this.forceContextLoss = function() {
    const M = ce.get("WEBGL_lose_context");
    M && M.loseContext();
  }, this.forceContextRestore = function() {
    const M = ce.get("WEBGL_lose_context");
    M && M.restoreContext();
  }, this.getPixelRatio = function() {
    return q;
  }, this.setPixelRatio = function(M) {
    M !== void 0 && (q = M, this.setSize(E, P, !1));
  }, this.getSize = function(M) {
    return M.set(E, P);
  }, this.setSize = function(M, D, z) {
    if (ue.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    E = M, P = D, e.width = Math.floor(M * q), e.height = Math.floor(D * q), z !== !1 && (e.style.width = M + "px", e.style.height = D + "px"), this.setViewport(0, 0, M, D);
  }, this.getDrawingBufferSize = function(M) {
    return M.set(E * q, P * q).floor();
  }, this.setDrawingBufferSize = function(M, D, z) {
    E = M, P = D, q = z, e.width = Math.floor(M * z), e.height = Math.floor(D * z), this.setViewport(0, 0, M, D);
  }, this.getCurrentViewport = function(M) {
    return M.copy(L);
  }, this.getViewport = function(M) {
    return M.copy(R);
  }, this.setViewport = function(M, D, z, C) {
    M.isVector4 ? R.set(M.x, M.y, M.z, M.w) : R.set(M, D, z, C), le.viewport(L.copy(R).multiplyScalar(q).floor());
  }, this.getScissor = function(M) {
    return M.copy(X);
  }, this.setScissor = function(M, D, z, C) {
    M.isVector4 ? X.set(M.x, M.y, M.z, M.w) : X.set(M, D, z, C), le.scissor(F.copy(X).multiplyScalar(q).floor());
  }, this.getScissorTest = function() {
    return $;
  }, this.setScissorTest = function(M) {
    le.setScissorTest($ = M);
  }, this.setOpaqueSort = function(M) {
    oe = M;
  }, this.setTransparentSort = function(M) {
    N = M;
  }, this.getClearColor = function(M) {
    return M.copy(K.getClearColor());
  }, this.setClearColor = function() {
    K.setClearColor.apply(K, arguments);
  }, this.getClearAlpha = function() {
    return K.getClearAlpha();
  }, this.setClearAlpha = function() {
    K.setClearAlpha.apply(K, arguments);
  }, this.clear = function(M = !0, D = !0, z = !0) {
    let C = 0;
    M && (C |= 16384), D && (C |= 256), z && (C |= 1024), k.clear(C);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", me, !1), e.removeEventListener("webglcontextrestored", de, !1), e.removeEventListener("webglcontextcreationerror", Le, !1), St.dispose(), y.dispose(), ye.dispose(), et.dispose(), tt.dispose(), ke.dispose(), W.dispose(), pe.dispose(), Ie.dispose(), ue.dispose(), ue.removeEventListener("sessionstart", ae), ue.removeEventListener("sessionend", he), J && (J.dispose(), J = null), Re.stop();
  };
  function me(M) {
    M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), u = !0;
  }
  function de() {
    console.log("THREE.WebGLRenderer: Context Restored."), u = !1;
    const M = Pe.autoReset, D = O.enabled, z = O.autoUpdate, C = O.needsUpdate, V = O.type;
    ge(), Pe.autoReset = M, O.enabled = D, O.autoUpdate = z, O.needsUpdate = C, O.type = V;
  }
  function Le(M) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
  }
  function Ne(M) {
    const D = M.target;
    D.removeEventListener("dispose", Ne), qe(D);
  }
  function qe(M) {
    A(M), ye.remove(M);
  }
  function A(M) {
    const D = ye.get(M).programs;
    D !== void 0 && (D.forEach(function(z) {
      Ie.releaseProgram(z);
    }), M.isShaderMaterial && Ie.releaseShaderCache(M));
  }
  this.renderBufferDirect = function(M, D, z, C, V, fe) {
    D === null && (D = ee);
    const Me = V.isMesh && V.matrixWorld.determinant() < 0, be = Da(M, D, z, C, V);
    le.setMaterial(C, Me);
    let we = z.index, De = 1;
    C.wireframe === !0 && (we = gt.getWireframeAttribute(z), De = 2);
    const Te = z.drawRange, Ee = z.attributes.position;
    let Be = Te.start * De, ot = (Te.start + Te.count) * De;
    fe !== null && (Be = Math.max(Be, fe.start * De), ot = Math.min(ot, (fe.start + fe.count) * De)), we !== null ? (Be = Math.max(Be, 0), ot = Math.min(ot, we.count)) : Ee != null && (Be = Math.max(Be, 0), ot = Math.min(ot, Ee.count));
    const It = ot - Be;
    if (It < 0 || It === 1 / 0)
      return;
    W.setup(V, C, be, z, we);
    let tn, Ge = re;
    if (we !== null && (tn = nt.get(we), Ge = ve, Ge.setIndex(tn)), V.isMesh)
      C.wireframe === !0 ? (le.setLineWidth(C.wireframeLinewidth * ie()), Ge.setMode(1)) : Ge.setMode(4);
    else if (V.isLine) {
      let Ae = C.linewidth;
      Ae === void 0 && (Ae = 1), le.setLineWidth(Ae * ie()), V.isLineSegments ? Ge.setMode(1) : V.isLineLoop ? Ge.setMode(2) : Ge.setMode(3);
    } else
      V.isPoints ? Ge.setMode(0) : V.isSprite && Ge.setMode(4);
    if (V.isInstancedMesh)
      Ge.renderInstances(Be, It, V.count);
    else if (z.isInstancedBufferGeometry) {
      const Ae = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0, Bi = Math.min(z.instanceCount, Ae);
      Ge.renderInstances(Be, It, Bi);
    } else
      Ge.render(Be, It);
  }, this.compile = function(M, D) {
    function z(C, V, fe) {
      C.transparent === !0 && C.side === Gt ? (C.side = Mt, C.needsUpdate = !0, _t(C, V, fe), C.side = Bn, C.needsUpdate = !0, _t(C, V, fe), C.side = Gt) : _t(C, V, fe);
    }
    f = y.get(M), f.init(), v.push(f), M.traverseVisible(function(C) {
      C.isLight && C.layers.test(D.layers) && (f.pushLight(C), C.castShadow && f.pushShadow(C));
    }), f.setupLights(p.physicallyCorrectLights), M.traverse(function(C) {
      const V = C.material;
      if (V)
        if (Array.isArray(V))
          for (let fe = 0; fe < V.length; fe++) {
            const Me = V[fe];
            z(Me, M, C);
          }
        else
          z(V, M, C);
    }), v.pop(), f = null;
  };
  let B = null;
  function Y(M) {
    B && B(M);
  }
  function ae() {
    Re.stop();
  }
  function he() {
    Re.start();
  }
  const Re = new _a();
  Re.setAnimationLoop(Y), typeof self < "u" && Re.setContext(self), this.setAnimationLoop = function(M) {
    B = M, ue.setAnimationLoop(M), M === null ? Re.stop() : Re.start();
  }, ue.addEventListener("sessionstart", ae), ue.addEventListener("sessionend", he), this.render = function(M, D) {
    if (D !== void 0 && D.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (u === !0)
      return;
    M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === !0 && D.updateMatrixWorld(), ue.enabled === !0 && ue.isPresenting === !0 && (ue.cameraAutoUpdate === !0 && ue.updateCamera(D), D = ue.getCamera()), M.isScene === !0 && M.onBeforeRender(p, M, D, w), f = y.get(M, v.length), f.init(), v.push(f), U.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), Z.setFromProjectionMatrix(U), Q = this.localClippingEnabled, H = _.init(this.clippingPlanes, Q, D), d = St.get(M, m.length), d.init(), m.push(d), Ye(M, D, 0, p.sortObjects), d.finish(), p.sortObjects === !0 && d.sort(oe, N), H === !0 && _.beginShadows();
    const z = f.state.shadowsArray;
    if (O.render(z, M, D), H === !0 && _.endShadows(), this.info.autoReset === !0 && this.info.reset(), K.render(d, M), f.setupLights(p.physicallyCorrectLights), D.isArrayCamera) {
      const C = D.cameras;
      for (let V = 0, fe = C.length; V < fe; V++) {
        const Me = C[V];
        Ke(d, M, Me, Me.viewport);
      }
    } else
      Ke(d, M, D);
    w !== null && (_e.updateMultisampleRenderTarget(w), _e.updateRenderTargetMipmap(w)), M.isScene === !0 && M.onAfterRender(p, M, D), W.resetDefaultState(), b = -1, S = null, v.pop(), v.length > 0 ? f = v[v.length - 1] : f = null, m.pop(), m.length > 0 ? d = m[m.length - 1] : d = null;
  };
  function Ye(M, D, z, C) {
    if (M.visible === !1)
      return;
    if (M.layers.test(D.layers)) {
      if (M.isGroup)
        z = M.renderOrder;
      else if (M.isLOD)
        M.autoUpdate === !0 && M.update(D);
      else if (M.isLight)
        f.pushLight(M), M.castShadow && f.pushShadow(M);
      else if (M.isSprite) {
        if (!M.frustumCulled || Z.intersectsSprite(M)) {
          C && j.setFromMatrixPosition(M.matrixWorld).applyMatrix4(U);
          const Me = ke.update(M), be = M.material;
          be.visible && d.push(M, Me, be, z, j.z, null);
        }
      } else if ((M.isMesh || M.isLine || M.isPoints) && (M.isSkinnedMesh && M.skeleton.frame !== Pe.render.frame && (M.skeleton.update(), M.skeleton.frame = Pe.render.frame), !M.frustumCulled || Z.intersectsObject(M))) {
        C && j.setFromMatrixPosition(M.matrixWorld).applyMatrix4(U);
        const Me = ke.update(M), be = M.material;
        if (Array.isArray(be)) {
          const we = Me.groups;
          for (let De = 0, Te = we.length; De < Te; De++) {
            const Ee = we[De], Be = be[Ee.materialIndex];
            Be && Be.visible && d.push(M, Me, Be, z, j.z, Ee);
          }
        } else
          be.visible && d.push(M, Me, be, z, j.z, null);
      }
    }
    const fe = M.children;
    for (let Me = 0, be = fe.length; Me < be; Me++)
      Ye(fe[Me], D, z, C);
  }
  function Ke(M, D, z, C) {
    const V = M.opaque, fe = M.transmissive, Me = M.transparent;
    f.setupLightsView(z), fe.length > 0 && en(V, D, z), C && le.viewport(L.copy(C)), V.length > 0 && Ue(V, D, z), fe.length > 0 && Ue(fe, D, z), Me.length > 0 && Ue(Me, D, z), le.buffers.depth.setTest(!0), le.buffers.depth.setMask(!0), le.buffers.color.setMask(!0), le.setPolygonOffset(!1);
  }
  function en(M, D, z) {
    const C = xe.isWebGL2;
    J === null && (J = new vn(1, 1, {
      generateMipmaps: !0,
      type: ce.has("EXT_color_buffer_half_float") ? Qn : _n,
      minFilter: Ni,
      samples: C && r === !0 ? 4 : 0
    })), p.getDrawingBufferSize(G), C ? J.setSize(G.x, G.y) : J.setSize(Cr(G.x), Cr(G.y));
    const V = p.getRenderTarget();
    p.setRenderTarget(J), p.clear();
    const fe = p.toneMapping;
    p.toneMapping = kt, Ue(M, D, z), p.toneMapping = fe, _e.updateMultisampleRenderTarget(J), _e.updateRenderTargetMipmap(J), p.setRenderTarget(V);
  }
  function Ue(M, D, z) {
    const C = D.isScene === !0 ? D.overrideMaterial : null;
    for (let V = 0, fe = M.length; V < fe; V++) {
      const Me = M[V], be = Me.object, we = Me.geometry, De = C === null ? Me.material : C, Te = Me.group;
      be.layers.test(z.layers) && Pt(be, D, z, we, De, Te);
    }
  }
  function Pt(M, D, z, C, V, fe) {
    M.onBeforeRender(p, D, z, C, V, fe), M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), V.onBeforeRender(p, D, z, C, M, fe), V.transparent === !0 && V.side === Gt ? (V.side = Mt, V.needsUpdate = !0, p.renderBufferDirect(z, D, C, V, M, fe), V.side = Bn, V.needsUpdate = !0, p.renderBufferDirect(z, D, C, V, M, fe), V.side = Gt) : p.renderBufferDirect(z, D, C, V, M, fe), M.onAfterRender(p, D, z, C, V, fe);
  }
  function _t(M, D, z) {
    D.isScene !== !0 && (D = ee);
    const C = ye.get(M), V = f.state.lights, fe = f.state.shadowsArray, Me = V.state.version, be = Ie.getParameters(M, V.state, fe, D, z), we = Ie.getProgramCacheKey(be);
    let De = C.programs;
    C.environment = M.isMeshStandardMaterial ? D.environment : null, C.fog = D.fog, C.envMap = (M.isMeshStandardMaterial ? tt : et).get(M.envMap || C.environment), De === void 0 && (M.addEventListener("dispose", Ne), De = /* @__PURE__ */ new Map(), C.programs = De);
    let Te = De.get(we);
    if (Te !== void 0) {
      if (C.currentProgram === Te && C.lightsStateVersion === Me)
        return zr(M, be), Te;
    } else
      be.uniforms = Ie.getUniforms(M), M.onBuild(z, be, p), M.onBeforeCompile(be, p), Te = Ie.acquireProgram(be, we), De.set(we, Te), C.uniforms = be.uniforms;
    const Ee = C.uniforms;
    (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (Ee.clippingPlanes = _.uniform), zr(M, be), C.needsLights = Pa(M), C.lightsStateVersion = Me, C.needsLights && (Ee.ambientLightColor.value = V.state.ambient, Ee.lightProbe.value = V.state.probe, Ee.directionalLights.value = V.state.directional, Ee.directionalLightShadows.value = V.state.directionalShadow, Ee.spotLights.value = V.state.spot, Ee.spotLightShadows.value = V.state.spotShadow, Ee.rectAreaLights.value = V.state.rectArea, Ee.ltc_1.value = V.state.rectAreaLTC1, Ee.ltc_2.value = V.state.rectAreaLTC2, Ee.pointLights.value = V.state.point, Ee.pointLightShadows.value = V.state.pointShadow, Ee.hemisphereLights.value = V.state.hemi, Ee.directionalShadowMap.value = V.state.directionalShadowMap, Ee.directionalShadowMatrix.value = V.state.directionalShadowMatrix, Ee.spotShadowMap.value = V.state.spotShadowMap, Ee.spotLightMatrix.value = V.state.spotLightMatrix, Ee.spotLightMap.value = V.state.spotLightMap, Ee.pointShadowMap.value = V.state.pointShadowMap, Ee.pointShadowMatrix.value = V.state.pointShadowMatrix);
    const Be = Te.getUniforms(), ot = Li.seqWithValue(Be.seq, Ee);
    return C.currentProgram = Te, C.uniformsList = ot, Te;
  }
  function zr(M, D) {
    const z = ye.get(M);
    z.outputEncoding = D.outputEncoding, z.instancing = D.instancing, z.skinning = D.skinning, z.morphTargets = D.morphTargets, z.morphNormals = D.morphNormals, z.morphColors = D.morphColors, z.morphTargetsCount = D.morphTargetsCount, z.numClippingPlanes = D.numClippingPlanes, z.numIntersection = D.numClipIntersection, z.vertexAlphas = D.vertexAlphas, z.vertexTangents = D.vertexTangents, z.toneMapping = D.toneMapping;
  }
  function Da(M, D, z, C, V) {
    D.isScene !== !0 && (D = ee), _e.resetTextureUnits();
    const fe = D.fog, Me = C.isMeshStandardMaterial ? D.environment : null, be = w === null ? p.outputEncoding : w.isXRRenderTarget === !0 ? w.texture.encoding : xn, we = (C.isMeshStandardMaterial ? tt : et).get(C.envMap || Me), De = C.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4, Te = !!C.normalMap && !!z.attributes.tangent, Ee = !!z.morphAttributes.position, Be = !!z.morphAttributes.normal, ot = !!z.morphAttributes.color, It = C.toneMapped ? p.toneMapping : kt, tn = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, Ge = tn !== void 0 ? tn.length : 0, Ae = ye.get(C), Bi = f.state.lights;
    if (H === !0 && (Q === !0 || M !== S)) {
      const lt = M === S && C.id === b;
      _.setState(C, M, lt);
    }
    let Ze = !1;
    C.version === Ae.__version ? (Ae.needsLights && Ae.lightsStateVersion !== Bi.state.version || Ae.outputEncoding !== be || V.isInstancedMesh && Ae.instancing === !1 || !V.isInstancedMesh && Ae.instancing === !0 || V.isSkinnedMesh && Ae.skinning === !1 || !V.isSkinnedMesh && Ae.skinning === !0 || Ae.envMap !== we || C.fog === !0 && Ae.fog !== fe || Ae.numClippingPlanes !== void 0 && (Ae.numClippingPlanes !== _.numPlanes || Ae.numIntersection !== _.numIntersection) || Ae.vertexAlphas !== De || Ae.vertexTangents !== Te || Ae.morphTargets !== Ee || Ae.morphNormals !== Be || Ae.morphColors !== ot || Ae.toneMapping !== It || xe.isWebGL2 === !0 && Ae.morphTargetsCount !== Ge) && (Ze = !0) : (Ze = !0, Ae.__version = C.version);
    let nn = Ae.currentProgram;
    Ze === !0 && (nn = _t(C, D, V));
    let Or = !1, qn = !1, Gi = !1;
    const it = nn.getUniforms(), rn = Ae.uniforms;
    if (le.useProgram(nn.program) && (Or = !0, qn = !0, Gi = !0), C.id !== b && (b = C.id, qn = !0), Or || S !== M) {
      if (it.setValue(k, "projectionMatrix", M.projectionMatrix), xe.logarithmicDepthBuffer && it.setValue(
        k,
        "logDepthBufFC",
        2 / (Math.log(M.far + 1) / Math.LN2)
      ), S !== M && (S = M, qn = !0, Gi = !0), C.isShaderMaterial || C.isMeshPhongMaterial || C.isMeshToonMaterial || C.isMeshStandardMaterial || C.envMap) {
        const lt = it.map.cameraPosition;
        lt !== void 0 && lt.setValue(
          k,
          j.setFromMatrixPosition(M.matrixWorld)
        );
      }
      (C.isMeshPhongMaterial || C.isMeshToonMaterial || C.isMeshLambertMaterial || C.isMeshBasicMaterial || C.isMeshStandardMaterial || C.isShaderMaterial) && it.setValue(k, "isOrthographic", M.isOrthographicCamera === !0), (C.isMeshPhongMaterial || C.isMeshToonMaterial || C.isMeshLambertMaterial || C.isMeshBasicMaterial || C.isMeshStandardMaterial || C.isShaderMaterial || C.isShadowMaterial || V.isSkinnedMesh) && it.setValue(k, "viewMatrix", M.matrixWorldInverse);
    }
    if (V.isSkinnedMesh) {
      it.setOptional(k, V, "bindMatrix"), it.setOptional(k, V, "bindMatrixInverse");
      const lt = V.skeleton;
      lt && (xe.floatVertexTextures ? (lt.boneTexture === null && lt.computeBoneTexture(), it.setValue(k, "boneTexture", lt.boneTexture, _e), it.setValue(k, "boneTextureSize", lt.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const Vi = z.morphAttributes;
    if ((Vi.position !== void 0 || Vi.normal !== void 0 || Vi.color !== void 0 && xe.isWebGL2 === !0) && te.update(V, z, C, nn), (qn || Ae.receiveShadow !== V.receiveShadow) && (Ae.receiveShadow = V.receiveShadow, it.setValue(k, "receiveShadow", V.receiveShadow)), C.isMeshGouraudMaterial && C.envMap !== null && (rn.envMap.value = we, rn.flipEnvMap.value = we.isCubeTexture && we.isRenderTargetTexture === !1 ? -1 : 1), qn && (it.setValue(k, "toneMappingExposure", p.toneMappingExposure), Ae.needsLights && Ra(rn, Gi), fe && C.fog === !0 && Rt.refreshFogUniforms(rn, fe), Rt.refreshMaterialUniforms(rn, C, q, P, J), Li.upload(k, Ae.uniformsList, rn, _e)), C.isShaderMaterial && C.uniformsNeedUpdate === !0 && (Li.upload(k, Ae.uniformsList, rn, _e), C.uniformsNeedUpdate = !1), C.isSpriteMaterial && it.setValue(k, "center", V.center), it.setValue(k, "modelViewMatrix", V.modelViewMatrix), it.setValue(k, "normalMatrix", V.normalMatrix), it.setValue(k, "modelMatrix", V.matrixWorld), C.isShaderMaterial || C.isRawShaderMaterial) {
      const lt = C.uniformsGroups;
      for (let ki = 0, Ia = lt.length; ki < Ia; ki++)
        if (xe.isWebGL2) {
          const Br = lt[ki];
          pe.update(Br, nn), pe.bind(Br, nn);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return nn;
  }
  function Ra(M, D) {
    M.ambientLightColor.needsUpdate = D, M.lightProbe.needsUpdate = D, M.directionalLights.needsUpdate = D, M.directionalLightShadows.needsUpdate = D, M.pointLights.needsUpdate = D, M.pointLightShadows.needsUpdate = D, M.spotLights.needsUpdate = D, M.spotLightShadows.needsUpdate = D, M.rectAreaLights.needsUpdate = D, M.hemisphereLights.needsUpdate = D;
  }
  function Pa(M) {
    return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return x;
  }, this.getActiveMipmapLevel = function() {
    return T;
  }, this.getRenderTarget = function() {
    return w;
  }, this.setRenderTargetTextures = function(M, D, z) {
    ye.get(M.texture).__webglTexture = D, ye.get(M.depthTexture).__webglTexture = z;
    const C = ye.get(M);
    C.__hasExternalTextures = !0, C.__hasExternalTextures && (C.__autoAllocateDepthBuffer = z === void 0, C.__autoAllocateDepthBuffer || ce.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), C.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(M, D) {
    const z = ye.get(M);
    z.__webglFramebuffer = D, z.__useDefaultFramebuffer = D === void 0;
  }, this.setRenderTarget = function(M, D = 0, z = 0) {
    w = M, x = D, T = z;
    let C = !0, V = null, fe = !1, Me = !1;
    if (M) {
      const we = ye.get(M);
      we.__useDefaultFramebuffer !== void 0 ? (le.bindFramebuffer(36160, null), C = !1) : we.__webglFramebuffer === void 0 ? _e.setupRenderTarget(M) : we.__hasExternalTextures && _e.rebindTextures(M, ye.get(M.texture).__webglTexture, ye.get(M.depthTexture).__webglTexture);
      const De = M.texture;
      (De.isData3DTexture || De.isDataArrayTexture || De.isCompressedArrayTexture) && (Me = !0);
      const Te = ye.get(M).__webglFramebuffer;
      M.isWebGLCubeRenderTarget ? (V = Te[D], fe = !0) : xe.isWebGL2 && M.samples > 0 && _e.useMultisampledRTT(M) === !1 ? V = ye.get(M).__webglMultisampledFramebuffer : V = Te, L.copy(M.viewport), F.copy(M.scissor), g = M.scissorTest;
    } else
      L.copy(R).multiplyScalar(q).floor(), F.copy(X).multiplyScalar(q).floor(), g = $;
    if (le.bindFramebuffer(36160, V) && xe.drawBuffers && C && le.drawBuffers(M, V), le.viewport(L), le.scissor(F), le.setScissorTest(g), fe) {
      const we = ye.get(M.texture);
      k.framebufferTexture2D(36160, 36064, 34069 + D, we.__webglTexture, z);
    } else if (Me) {
      const we = ye.get(M.texture), De = D || 0;
      k.framebufferTextureLayer(36160, 36064, we.__webglTexture, z || 0, De);
    }
    b = -1;
  }, this.readRenderTargetPixels = function(M, D, z, C, V, fe, Me) {
    if (!(M && M.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let be = ye.get(M).__webglFramebuffer;
    if (M.isWebGLCubeRenderTarget && Me !== void 0 && (be = be[Me]), be) {
      le.bindFramebuffer(36160, be);
      try {
        const we = M.texture, De = we.format, Te = we.type;
        if (De !== At && se.convert(De) !== k.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const Ee = Te === Qn && (ce.has("EXT_color_buffer_half_float") || xe.isWebGL2 && ce.has("EXT_color_buffer_float"));
        if (Te !== _n && se.convert(Te) !== k.getParameter(35738) && !(Te === fn && (xe.isWebGL2 || ce.has("OES_texture_float") || ce.has("WEBGL_color_buffer_float"))) && !Ee) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        D >= 0 && D <= M.width - C && z >= 0 && z <= M.height - V && k.readPixels(D, z, C, V, se.convert(De), se.convert(Te), fe);
      } finally {
        const we = w !== null ? ye.get(w).__webglFramebuffer : null;
        le.bindFramebuffer(36160, we);
      }
    }
  }, this.copyFramebufferToTexture = function(M, D, z = 0) {
    const C = Math.pow(2, -z), V = Math.floor(D.image.width * C), fe = Math.floor(D.image.height * C);
    _e.setTexture2D(D, 0), k.copyTexSubImage2D(3553, z, 0, 0, M.x, M.y, V, fe), le.unbindTexture();
  }, this.copyTextureToTexture = function(M, D, z, C = 0) {
    const V = D.image.width, fe = D.image.height, Me = se.convert(z.format), be = se.convert(z.type);
    _e.setTexture2D(z, 0), k.pixelStorei(37440, z.flipY), k.pixelStorei(37441, z.premultiplyAlpha), k.pixelStorei(3317, z.unpackAlignment), D.isDataTexture ? k.texSubImage2D(3553, C, M.x, M.y, V, fe, Me, be, D.image.data) : D.isCompressedTexture ? k.compressedTexSubImage2D(3553, C, M.x, M.y, D.mipmaps[0].width, D.mipmaps[0].height, Me, D.mipmaps[0].data) : k.texSubImage2D(3553, C, M.x, M.y, Me, be, D.image), C === 0 && z.generateMipmaps && k.generateMipmap(3553), le.unbindTexture();
  }, this.copyTextureToTexture3D = function(M, D, z, C, V = 0) {
    if (p.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const fe = M.max.x - M.min.x + 1, Me = M.max.y - M.min.y + 1, be = M.max.z - M.min.z + 1, we = se.convert(C.format), De = se.convert(C.type);
    let Te;
    if (C.isData3DTexture)
      _e.setTexture3D(C, 0), Te = 32879;
    else if (C.isDataArrayTexture)
      _e.setTexture2DArray(C, 0), Te = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    k.pixelStorei(37440, C.flipY), k.pixelStorei(37441, C.premultiplyAlpha), k.pixelStorei(3317, C.unpackAlignment);
    const Ee = k.getParameter(3314), Be = k.getParameter(32878), ot = k.getParameter(3316), It = k.getParameter(3315), tn = k.getParameter(32877), Ge = z.isCompressedTexture ? z.mipmaps[0] : z.image;
    k.pixelStorei(3314, Ge.width), k.pixelStorei(32878, Ge.height), k.pixelStorei(3316, M.min.x), k.pixelStorei(3315, M.min.y), k.pixelStorei(32877, M.min.z), z.isDataTexture || z.isData3DTexture ? k.texSubImage3D(Te, V, D.x, D.y, D.z, fe, Me, be, we, De, Ge.data) : z.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), k.compressedTexSubImage3D(Te, V, D.x, D.y, D.z, fe, Me, be, we, Ge.data)) : k.texSubImage3D(Te, V, D.x, D.y, D.z, fe, Me, be, we, De, Ge), k.pixelStorei(3314, Ee), k.pixelStorei(32878, Be), k.pixelStorei(3316, ot), k.pixelStorei(3315, It), k.pixelStorei(32877, tn), V === 0 && C.generateMipmaps && k.generateMipmap(Te), le.unbindTexture();
  }, this.initTexture = function(M) {
    M.isCubeTexture ? _e.setTextureCube(M, 0) : M.isData3DTexture ? _e.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? _e.setTexture2DArray(M, 0) : _e.setTexture2D(M, 0), le.unbindTexture();
  }, this.resetState = function() {
    x = 0, T = 0, w = null, le.reset(), W.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class Id extends ba {
}
Id.prototype.isWebGL1Renderer = !0;
class Fd extends mt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.backgroundIntensity = this.backgroundIntensity), t;
  }
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class Nd {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = Js(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = Js();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Js() {
  return (typeof performance > "u" ? Date : performance).now();
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Rr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Rr);
var Ud = `varying vec2 fragCoord;
void main () {
    fragCoord = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.0);
}`, zd = `uniform float u_time;
uniform float u_speed;
uniform vec3 iResolution;
uniform float width;

uniform vec4 pairs[1000];

varying vec2 fragCoord;

void main () {
    vec2 uv = (fragCoord-.5) * iResolution.xy/iResolution.y*2.;
    vec3 color = vec3(0.0);
    float x = fragCoord.x * iResolution.x;
    int y = int(((fragCoord.y*-1. + u_time / 10.) / width) * iResolution.y);
    vec4 pair = pairs[y];

    bool isFullOverlapA = pair.x >= pair.z && pair.x <= pair.w && pair.y >= pair.z && pair.y <= pair.w;
    bool isFullOverlapB = pair.z >= pair.x && pair.z <= pair.y && pair.w >= pair.x && pair.w <= pair.y;
    bool isFullOverlap = isFullOverlapA || isFullOverlapB;

    bool isOverlapA = pair.x >= pair.z && pair.x <= pair.w || pair.y >= pair.z && pair.y <= pair.w;
    bool isOverlapB = pair.z >= pair.x && pair.z <= pair.y || pair.w >= pair.x && pair.w <= pair.y;
    bool isOverlap = isOverlapA || isOverlapB;

    vec3 lineCol = isFullOverlap
        ? vec3(1., 0.02, 0.05)
        : isOverlap
        ? vec3(.99, .95, 0.35)
        : vec3(1.);

    if (y >= 0 && y < 1000 && x >= pair.x && x <= pair.y + width - 2.) {
        color = mix(color, lineCol, .5);
    }
    
    if (y >= 0 && y < 1000 && x >= pair.z && x <= pair.w + width - 2.) {
        color = mix(color, lineCol, .5);
    }

    gl_FragColor = vec4(color, 1.);
}`;
function Od(s) {
  return s.replace(/\r/g, "").split(`
`);
}
const Nr = class {
  constructor(e, t) {
    sn(this, "isFullOverlap", (e) => this.x1 >= e.x1 && this.x1 <= e.x2 && this.x2 >= e.x1 && this.x2 <= e.x2);
    sn(this, "isOverlap", (e) => this.x1 >= e.x1 && this.x1 <= e.x2 || this.x2 >= e.x1 && this.x2 <= e.x2);
    this.x1 = e[0] || e, this.x2 = e[1] || t;
  }
};
let Di = Nr;
sn(Di, "fromString", (e) => new Nr(e.split("-").map(Number)));
const Ur = class {
  constructor(e, t) {
    sn(this, "hasFullOverlap", () => this.a.isFullOverlap(this.b) || this.b.isFullOverlap(this.a));
    sn(this, "hasOverlap", () => this.a.isOverlap(this.b) || this.b.isOverlap(this.a));
    this.a = e[0] || e, this.b = e[1] || t;
  }
};
let Ri = Ur;
sn(Ri, "fromString", (e) => new Ur(e.split(",").map(Di.fromString)));
const Bd = (s) => Od(s).map(Ri.fromString), Gd = `33-62,26-62
49-89,49-88
2-4,3-92
7-98,7-98
6-74,6-73
78-79,13-78
90-95,95-95
62-66,56-67
2-93,4-92
12-64,11-11
7-83,5-91
20-87,20-88
29-93,26-92
19-20,20-31
62-62,7-63
9-83,9-84
8-27,28-95
6-49,6-48
7-71,65-71
90-96,19-89
13-97,98-99
17-75,75-76
90-91,44-90
5-62,24-92
45-76,46-76
9-22,23-23
93-94,35-93
32-34,33-48
43-44,6-44
79-86,80-86
7-7,6-93
77-82,83-91
59-60,32-59
7-27,7-7
2-23,22-23
35-35,6-36
32-34,11-33
24-35,28-34
37-62,62-64
9-18,18-18
8-53,2-7
2-99,1-99
15-95,65-94
17-71,6-18
38-71,13-63
6-77,4-9
1-99,2-98
13-67,13-66
45-87,45-86
13-59,12-82
18-79,17-19
83-83,36-83
38-77,38-76
17-17,16-41
78-94,79-94
36-87,6-91
30-38,29-29
54-56,22-55
43-43,37-43
2-99,1-1
16-88,15-17
13-14,2-14
26-57,26-58
19-86,19-86
97-98,67-97
1-92,2-92
1-3,3-77
25-54,54-54
44-53,46-60
16-74,74-74
4-7,8-28
96-99,95-99
37-70,36-80
59-68,60-60
47-95,29-87
91-91,68-91
18-91,19-90
16-27,5-28
94-96,63-95
3-20,19-73
18-74,8-80
6-71,3-72
52-71,53-93
6-8,7-97
68-77,22-78
29-76,30-30
13-98,13-99
7-73,3-74
64-98,16-74
20-78,9-21
17-65,18-18
71-96,27-96
55-91,46-56
93-96,5-92
15-15,14-77
18-49,17-49
77-78,70-77
31-88,31-87
38-85,57-86
39-87,87-87
26-77,76-77
1-1,3-47
5-96,95-96
25-78,15-60
11-84,84-84
22-30,22-30
6-85,83-86
32-40,32-39
4-97,4-97
34-90,26-91
23-68,23-67
41-51,30-33
21-83,22-82
21-85,1-74
72-74,6-73
6-6,5-94
10-83,10-83
11-85,5-12
81-82,82-82
4-82,82-82
25-89,25-25
70-79,74-78
17-51,26-50
7-70,6-70
21-81,21-80
72-88,71-71
68-72,21-73
74-95,73-75
15-94,12-13
47-96,48-96
58-70,10-58
69-69,63-69
7-95,7-94
13-66,13-65
1-18,2-18
4-90,4-89
24-84,23-23
89-90,14-89
8-10,7-16
16-18,21-96
19-30,1-29
78-99,9-97
2-9,6-19
58-82,53-85
51-96,51-97
11-70,69-70
1-2,2-95
93-95,41-94
95-95,10-96
18-18,17-48
1-99,2-2
66-68,67-98
5-7,6-90
49-94,50-66
12-41,2-91
10-93,93-94
27-51,27-52
9-15,15-99
16-47,15-48
11-89,25-85
39-77,7-64
9-91,91-92
65-66,22-66
9-83,9-31
8-78,8-77
2-98,2-99
33-53,25-50
11-91,9-97
46-90,2-91
69-70,70-95
39-53,15-39
63-85,64-85
15-82,13-13
38-55,56-56
14-34,14-33
28-47,24-46
8-98,7-98
24-35,27-98
44-67,45-64
65-90,65-91
23-89,21-24
1-2,4-48
12-97,13-89
11-91,41-90
72-72,11-72
5-61,6-75
25-77,25-78
1-98,5-96
22-57,22-56
69-92,25-69
6-85,5-85
46-48,19-47
19-25,24-94
6-96,3-12
18-67,67-68
42-43,42-96
95-95,74-95
20-38,37-68
2-72,2-73
21-23,25-71
4-29,4-29
87-88,41-88
59-66,66-92
54-95,54-96
5-88,88-88
73-74,46-74
12-13,12-41
5-11,7-12
62-64,18-63
98-98,2-98
69-77,28-70
7-62,29-61
7-7,6-98
35-94,9-35
77-78,77-90
10-10,9-86
26-32,4-26
79-92,27-85
40-88,41-82
20-58,15-59
64-97,63-65
6-23,2-24
11-15,13-14
16-88,15-26
35-77,36-77
47-94,25-48
17-54,5-53
97-98,98-98
9-87,35-86
46-89,2-46
11-49,33-48
41-80,40-98
11-95,10-10
22-71,11-71
14-63,64-64
49-51,50-97
1-81,82-82
36-93,1-93
38-80,38-39
41-66,10-65
20-44,19-21
42-98,41-98
65-78,66-77
2-5,4-96
15-62,62-63
7-85,6-8
46-82,45-81
45-47,46-85
18-39,37-44
40-64,63-64
24-49,24-48
64-94,63-63
22-23,5-23
13-96,12-12
43-75,43-75
15-96,70-95
42-43,42-53
64-66,42-77
86-94,88-93
35-94,9-93
5-98,6-6
21-97,20-20
7-99,8-8
12-12,11-88
6-48,7-48
60-73,61-73
28-56,27-79
39-61,2-64
78-78,28-79
35-97,13-96
8-97,9-90
6-96,4-4
23-98,22-97
11-78,11-79
37-92,37-92
33-66,32-67
27-88,87-88
32-89,90-90
7-96,7-97
10-98,10-10
2-83,82-84
2-13,13-82
23-27,22-24
46-85,47-89
16-71,70-71
4-79,3-76
96-96,1-96
15-89,15-88
22-32,26-82
21-21,20-21
5-67,6-68
46-60,25-61
56-95,34-99
11-74,11-75
2-14,14-97
4-97,11-92
19-34,18-18
4-20,5-33
91-91,68-91
2-99,1-2
68-87,68-86
3-98,3-3
91-99,9-90
21-58,26-56
33-70,34-64
81-81,82-83
49-66,48-50
10-11,11-62
7-92,29-83
19-89,88-89
7-42,42-90
60-76,76-99
51-53,52-91
33-56,34-57
5-88,46-87
15-96,15-95
8-27,27-95
96-98,38-96
9-40,41-43
68-83,68-82
5-11,7-93
50-50,8-50
26-69,68-70
23-44,13-82
90-94,93-95
1-95,1-96
29-31,30-83
49-81,48-50
41-70,42-70
10-73,11-72
9-10,16-18
72-73,1-73
47-71,47-48
4-97,23-96
10-96,10-96
15-43,43-80
57-82,18-57
4-19,2-2
46-81,38-82
55-72,24-55
63-64,60-64
12-99,22-97
31-62,53-67
41-87,67-86
30-30,31-82
20-34,19-35
76-77,43-77
25-52,32-53
50-95,51-98
50-50,49-75
4-91,90-90
61-89,60-89
4-93,4-94
22-93,22-94
50-66,49-58
22-89,23-88
20-94,33-93
12-30,11-71
11-54,11-75
6-60,5-6
36-45,3-46
84-96,31-83
25-25,25-29
17-18,17-30
45-69,45-70
64-98,65-65
5-60,16-59
81-81,25-81
23-69,66-70
34-97,35-96
7-90,6-97
76-79,75-75
27-97,27-96
14-34,23-32
28-95,94-96
36-68,36-67
25-27,26-96
93-95,67-94
29-91,30-30
57-58,29-58
44-65,43-45
2-16,16-34
15-99,16-43
33-62,33-62
1-79,1-80
60-96,60-97
28-28,28-50
90-94,33-89
14-51,13-15
3-76,3-77
21-48,25-87
23-25,24-97
74-76,74-75
34-36,35-74
78-96,79-96
3-94,5-90
81-95,81-94
62-70,61-73
55-55,20-55
88-90,6-89
88-88,3-89
14-99,13-15
6-78,29-77
63-73,72-73
38-38,38-87
5-93,5-94
66-90,45-94
42-68,41-43
62-90,86-90
16-50,15-31
80-81,63-81
49-62,38-50
70-90,53-96
19-19,20-81
7-16,15-75
9-98,92-97
29-95,28-95
99-99,1-97
39-96,40-40
1-1,2-99
24-28,7-23
9-57,8-74
27-31,26-27
6-93,5-93
39-89,38-40
43-84,84-85
3-69,2-2
24-88,87-88
6-97,2-96
5-93,4-5
43-43,44-86
17-73,17-72
85-86,28-85
9-35,35-36
14-93,13-22
62-64,30-63
71-71,48-71
48-88,49-78
13-57,58-96
21-81,10-19
37-39,36-37
14-17,10-15
23-74,73-75
4-29,1-5
2-96,95-99
13-82,12-13
51-98,51-97
21-21,20-37
17-68,17-69
32-49,68-74
55-73,49-74
11-53,10-12
2-4,3-99
55-56,53-56
14-24,13-25
19-58,18-58
62-87,62-86
11-93,93-94
44-64,43-80
2-82,3-82
37-38,33-38
97-98,18-98
12-47,46-47
5-95,4-96
22-98,16-21
1-70,69-70
8-93,8-92
36-89,36-90
84-96,82-86
38-38,37-89
77-96,96-96
80-82,23-81
48-92,14-49
80-80,5-80
49-80,20-81
77-85,76-78
6-6,5-90
42-97,42-96
98-99,45-99
25-95,94-96
1-66,7-66
43-44,44-65
14-71,3-82
4-11,4-49
31-43,33-42
65-99,9-66
48-98,98-98
4-78,5-77
21-38,22-22
5-99,99-99
1-1,3-17
53-97,17-54
8-57,7-7
83-95,25-96
43-49,42-42
80-90,81-90
33-65,34-60
48-65,11-66
4-99,6-92
7-60,6-60
3-47,47-85
27-59,26-28
57-76,73-77
52-60,51-72
2-99,98-99
37-70,70-70
19-95,5-12
1-98,1-2
84-89,39-85
24-89,89-98
15-16,15-24
10-10,9-77
9-39,8-58
13-73,13-74
32-60,13-61
55-70,57-65
54-56,42-55
2-27,11-26
9-83,8-85
39-40,12-39
50-52,15-51
97-97,4-97
58-59,2-58
36-37,37-85
32-77,31-33
73-96,6-94
84-86,52-85
24-26,25-75
2-79,1-2
36-36,35-68
6-50,5-50
6-94,94-95
6-28,3-29
53-53,33-53
5-98,95-97
33-91,34-34
18-83,84-98
41-41,3-41
34-90,89-90
73-73,4-73
56-57,57-78
2-4,4-94
61-70,53-71
73-74,74-74
3-99,5-98
7-66,66-73
4-13,12-13
71-79,70-80
58-93,57-59
7-90,8-90
53-94,22-53
9-47,10-47
19-99,37-98
55-55,55-55
48-84,28-85
57-90,57-88
70-70,3-71
6-68,6-68
1-4,5-97
12-42,13-13
2-78,2-77
29-61,7-86
71-71,43-71
63-74,42-75
83-83,58-83
4-20,3-4
30-92,31-31
2-15,8-40
13-69,12-14
81-82,21-81
33-45,33-44
87-92,18-88
52-96,95-96
10-53,11-52
81-95,81-96
8-8,4-7
4-99,3-5
51-77,52-76
17-89,16-16
19-21,20-80
1-3,2-94
96-97,3-97
50-58,57-86
38-98,38-39
8-97,5-9
11-96,95-97
28-43,27-44
21-26,20-25
58-97,12-92
1-3,3-88
11-47,10-72
1-71,3-85
40-40,39-97
3-89,3-90
7-92,37-91
73-89,61-90
61-80,28-92
61-62,11-61
19-80,19-80
4-6,5-78
6-54,16-81
92-97,20-91
61-62,5-62
40-65,39-39
57-66,54-67
2-98,3-76
13-99,12-88
96-97,2-97
46-56,56-57
7-94,11-94
5-78,4-5
31-71,31-79
47-47,48-83
72-91,72-92
36-37,37-70
57-98,98-98
7-99,7-98
2-99,2-98
27-96,95-96
19-27,28-93
1-9,8-52
92-92,1-92
38-84,84-85
94-97,22-95
19-37,32-36
4-17,17-96
27-80,28-99
40-60,59-60
8-96,8-97
16-75,15-36
33-73,34-73
54-76,75-76
49-87,86-87
11-38,38-91
40-69,68-69
39-41,40-40
90-90,64-90
11-82,12-56
28-90,89-90
90-95,8-91
9-92,10-91
10-98,28-97
29-30,30-91
26-91,26-27
7-91,69-92
21-93,22-63
6-8,7-35
71-71,63-71
39-47,13-48
15-79,15-15
9-73,9-73
46-69,17-88
16-97,18-86
8-65,64-65
1-44,2-43
33-78,32-32
23-97,40-97
21-22,21-74
93-93,10-93
21-22,21-42
2-5,5-18
21-51,18-37
38-92,47-77
83-84,3-83
16-94,15-95
1-92,92-93
1-98,98-98
48-89,34-47
9-44,10-45
88-90,43-89
3-16,17-29
39-44,1-40
41-67,38-75
2-6,1-7
8-67,9-55
42-60,42-61
18-52,31-51
46-47,47-74
24-69,23-24
30-30,30-31
1-84,83-84
2-87,1-87
9-50,9-51
28-83,20-34
19-47,40-51
3-86,4-4
17-79,1-2
26-75,25-75
8-16,17-54
35-90,42-97
1-18,23-62
2-12,1-39
13-90,12-96
71-91,71-91
23-60,12-24
26-84,54-83
18-24,18-25
18-56,23-55
32-59,31-33
35-52,34-81
22-72,22-71
8-38,7-37
34-69,69-69
10-79,15-68
16-87,24-28
20-50,8-51
6-52,52-84
86-86,21-87
26-94,26-93
63-82,63-81
5-18,17-91
7-18,7-28
10-36,10-95
44-96,9-84
48-51,49-62
90-98,89-98
31-31,32-56
75-75,74-75
28-80,79-92
7-63,26-62
4-5,5-18
40-84,21-85
43-51,42-44
4-91,35-95
51-73,51-52
4-51,51-51
80-80,52-80
46-85,19-84
9-11,10-36
32-33,33-90
3-92,4-92
6-96,5-99
77-78,66-78
7-31,9-87
11-70,32-69
46-57,25-74
4-42,41-42
28-92,91-92
7-23,21-22
7-97,17-97
12-94,6-13
59-84,59-83
46-46,47-78
10-99,9-99
1-73,13-72
1-73,2-2
15-91,16-84
4-84,1-85
3-98,2-98
89-89,2-90
16-96,16-96
30-69,31-70
16-68,73-89
13-30,12-29
27-97,98-99
58-95,8-94
18-18,17-83
1-55,3-55
37-43,42-89
1-89,1-90
51-53,23-52
50-57,58-91
95-96,25-96
41-41,27-41
26-76,59-77
85-87,25-86
14-62,15-63
98-98,51-98
81-98,50-97
1-72,2-73
1-4,3-64
12-82,11-97
6-24,24-24
55-85,54-65
6-68,67-69
2-3,3-73
4-91,4-86
36-99,35-99
10-79,21-78
20-39,39-97
7-82,6-8
58-91,38-58
13-63,14-39
42-44,43-96
84-95,82-84
29-65,30-65
44-58,57-58
8-34,34-35
11-36,11-35
26-94,72-93
12-26,14-88
3-91,4-89
6-6,5-99
96-97,95-96
38-51,30-45
20-98,21-77
16-98,16-97
5-97,12-12
14-25,25-92
30-65,30-31
52-53,35-53
71-73,22-94
6-96,3-99
8-42,7-7
28-96,29-97
67-91,90-92
3-95,12-95
8-98,9-9
27-27,26-87
7-79,78-79
36-90,36-89
84-85,21-84
69-69,68-92
19-98,61-99
16-98,98-99
1-96,95-96
16-84,16-85
18-87,87-88
92-97,85-95
13-83,83-84
20-67,3-21
23-71,55-72
62-97,61-61
82-91,51-81
24-25,25-93
58-58,59-99
39-93,38-93
7-64,14-63
35-99,36-98
89-89,29-90
77-78,67-78
3-90,89-90
26-90,26-89
22-38,22-37
66-66,65-94
71-75,68-74
47-93,7-93
9-90,73-87
39-39,38-82
27-40,33-39
66-93,67-92
9-86,86-87
13-95,34-94
47-78,14-46
2-96,2-96
4-30,23-29
9-88,21-89
2-61,2-60
15-69,15-68
20-91,20-90
38-77,70-76
8-65,9-9
96-97,14-97
55-67,67-67
12-78,26-83
1-95,1-1
56-99,64-98
1-56,13-57
14-84,8-96
37-38,38-76
4-99,5-5
46-87,27-86
80-80,4-80
9-25,25-78
33-85,34-35
26-77,70-76
68-98,67-98
8-12,17-66
2-41,2-42
8-46,47-47
8-92,5-8
1-5,5-98
6-94,7-7
96-97,73-96
19-51,50-51
30-95,31-85
16-91,17-91
11-13,12-62
2-99,3-99
44-91,58-90
28-63,1-18
46-92,19-52
37-54,3-55
67-68,68-82
2-99,98-99
8-40,40-40
7-58,6-58
9-75,9-75
4-39,39-39
16-70,16-71
27-82,81-82
38-83,38-82
4-76,75-97
5-42,6-41
43-82,82-82
27-27,26-77
14-14,13-74
17-87,87-94
14-78,13-62
54-85,53-86
1-15,1-95
69-79,70-74
5-86,10-85
29-39,49-78
41-99,41-42
15-95,14-15
32-78,33-78
16-94,21-93
5-5,4-94
1-65,8-64
2-99,5-98
34-59,38-58
36-43,7-36
5-21,20-62
11-92,7-7
23-91,24-91
6-90,5-91
18-60,15-64
40-87,39-41
58-81,57-58
3-88,4-88
49-50,32-49
28-34,27-90
30-38,5-31
8-91,7-92
43-81,44-81
10-97,9-99
3-86,2-3
80-98,4-92
2-2,1-99
15-41,15-42
27-28,27-83
9-83,4-10
48-90,47-90
31-67,2-32
80-80,5-80
10-85,10-84
30-84,29-29
16-45,17-45
34-35,34-41
28-30,29-68
9-25,25-69
65-66,56-66
19-36,20-20
53-53,53-98
6-22,10-60
29-29,28-93
20-56,54-55
8-83,8-83
13-87,87-88
40-81,24-66
82-83,30-82
68-70,1-69
88-89,20-88
1-99,2-99
4-73,5-55
71-72,18-72
47-47,28-47
53-69,52-69
14-29,28-29
53-82,83-87
3-4,10-19
59-93,1-92
23-94,23-95
27-56,26-26
58-94,57-59
87-87,49-88
75-78,69-89
18-96,19-87
3-98,90-99
29-45,45-58
2-66,58-65
15-76,14-88
2-92,92-92
31-79,32-79
9-98,9-99
7-90,6-99
19-19,18-72
86-86,85-98
10-13,12-93
2-47,48-51
9-62,1-9
6-95,6-94
4-98,7-97
80-99,99-99
34-71,50-57
48-67,31-66
53-88,53-53
5-55,5-54
56-60,55-55
13-45,12-45
4-78,5-45
52-84,84-84
52-98,52-97
7-8,9-92
1-98,2-17
42-79,9-80
57-64,38-59
31-37,37-72
21-99,1-25`, wa = Bd(Gd);
console.log(wa.length);
const Wt = document.querySelector("#shader"), Vd = {
  u_time: { value: 0 },
  iResolution: { value: [Wt.clientWidth, Wt.clientHeight, 0] }
};
let Jt = Wt.clientWidth / 100 * 0.99;
console.log(Jt);
const Ta = () => wa.map((s) => new $e(s.a.x1 * Jt, s.a.x2 * Jt, s.b.x1 * Jt, s.b.x2 * Jt)), Dr = {
  vertexShader: Ud,
  fragmentShader: zd,
  uniforms: {
    u_time: { value: 0 },
    u_speed: { value: 1 },
    width: { value: Jt },
    pairs: {
      value: Ta()
    }
  }
};
let kd = { materialOptions: Dr }, Ii = {};
function Ea() {
  Jt = Wt.clientWidth / 100 * 0.99, Dr.uniforms.width.value = Jt, Dr.uniforms.pairs.value = Ta(), Fr.setSize(Wt.clientWidth, Wt.clientHeight);
}
function Aa() {
  requestAnimationFrame(Aa), Ii.uniforms.u_time.value = La.getElapsedTime(), Ii.uniforms.iResolution.value = [Wt.clientWidth, Wt.clientHeight, 0], Fr.render(Ca, Hd);
}
function Wd() {
  const s = Object.assign(
    {
      side: Gt
    },
    kd.materialOptions
  );
  return Object.assign(s.uniforms, Vd), new Qt(s);
}
const Ca = new Fd(), Hd = new xa(-1, 1, 1, -1, 0, 1), Fr = new ba(), Xd = new zi(2, 2);
Ii = Wd();
const qd = new Vt(Xd, Ii);
Ca.add(qd);
const La = new Nd();
La.start();
Wt.appendChild(Fr.domElement);
window.addEventListener("resize", Ea);
Ea();
Aa();
