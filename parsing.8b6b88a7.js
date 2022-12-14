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
const wr = "147", Td = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Ed = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Ta = 0, Nr = 1, Ea = 2, Zs = 1, Aa = 2, Zn = 3, Un = 0, St = 1, $t = 2, Kt = 0, Fn = 1, Ur = 2, zr = 3, Or = 4, Ca = 5, Pn = 100, La = 101, Da = 102, Br = 103, Gr = 104, Ra = 200, Pa = 201, Ia = 202, Fa = 203, $s = 204, Js = 205, Na = 206, Ua = 207, za = 208, Oa = 209, Ba = 210, Ga = 0, Va = 1, ka = 2, gr = 3, Wa = 4, Ha = 5, Xa = 6, qa = 7, Tr = 0, Ya = 1, ja = 2, Vt = 0, Za = 1, $a = 2, Ja = 3, Ka = 4, Qa = 5, Ks = 300, zn = 301, On = 302, _r = 303, xr = 304, Li = 306, vr = 1e3, At = 1001, Mr = 1002, ot = 1003, Vr = 1004, kr = 1005, Mt = 1006, eo = 1007, Di = 1008, pn = 1009, to = 1010, no = 1011, Qs = 1012, io = 1013, un = 1014, hn = 1015, Jn = 1016, ro = 1017, so = 1018, Nn = 1020, ao = 1021, oo = 1022, Ct = 1023, lo = 1024, co = 1025, dn = 1026, Bn = 1027, uo = 1028, ho = 1029, fo = 1030, po = 1031, mo = 1033, Ui = 33776, zi = 33777, Oi = 33778, Bi = 33779, Wr = 35840, Hr = 35841, Xr = 35842, qr = 35843, go = 36196, Yr = 37492, jr = 37496, Zr = 37808, $r = 37809, Jr = 37810, Kr = 37811, Qr = 37812, es = 37813, ts = 37814, ns = 37815, is = 37816, rs = 37817, ss = 37818, as = 37819, os = 37820, ls = 37821, cs = 36492, mn = 3e3, Oe = 3001, _o = 3200, xo = 3201, Er = 0, vo = 1, Lt = "srgb", Kn = "srgb-linear", Gi = 7680, Mo = 519, us = 35044, hs = "300 es", Sr = 1035;
class Vn {
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
const et = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Vi = Math.PI / 180, ds = 180 / Math.PI;
function Qn() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (et[s & 255] + et[s >> 8 & 255] + et[s >> 16 & 255] + et[s >> 24 & 255] + "-" + et[e & 255] + et[e >> 8 & 255] + "-" + et[e >> 16 & 15 | 64] + et[e >> 24 & 255] + "-" + et[t & 63 | 128] + et[t >> 8 & 255] + "-" + et[t >> 16 & 255] + et[t >> 24 & 255] + et[n & 255] + et[n >> 8 & 255] + et[n >> 16 & 255] + et[n >> 24 & 255]).toLowerCase();
}
function lt(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function So(s, e) {
  return (s % e + e) % e;
}
function ki(s, e, t) {
  return (1 - t) * s + t * e;
}
function fs(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function yr(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function ri(s, e) {
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
function ht(s, e) {
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
class Re {
  constructor(e = 0, t = 0) {
    Re.prototype.isVector2 = !0, this.x = e, this.y = t;
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
class pt {
  constructor() {
    pt.prototype.isMatrix3 = !0, this.elements = [
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
    const u = this.elements;
    return u[0] = e, u[1] = i, u[2] = a, u[3] = t, u[4] = r, u[5] = c, u[6] = n, u[7] = o, u[8] = l, this;
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
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], u = n[4], d = n[7], f = n[2], m = n[5], x = n[8], p = i[0], h = i[3], _ = i[6], T = i[1], b = i[4], M = i[7], w = i[2], C = i[5], F = i[8];
    return r[0] = o * p + a * T + c * w, r[3] = o * h + a * b + c * C, r[6] = o * _ + a * M + c * F, r[1] = l * p + u * T + d * w, r[4] = l * h + u * b + d * C, r[7] = l * _ + u * M + d * F, r[2] = f * p + m * T + x * w, r[5] = f * h + m * b + x * C, r[8] = f * _ + m * M + x * F, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8];
    return t * o * u - t * a * l - n * r * u + n * a * c + i * r * l - i * o * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8], d = u * o - a * l, f = a * c - u * r, m = l * r - o * c, x = t * d + n * f + i * m;
    if (x === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / x;
    return e[0] = d * p, e[1] = (i * l - u * n) * p, e[2] = (a * n - i * o) * p, e[3] = f * p, e[4] = (u * t - i * c) * p, e[5] = (i * r - a * t) * p, e[6] = m * p, e[7] = (n * c - l * t) * p, e[8] = (o * t - n * r) * p, this;
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
    return this.premultiply(Wi.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Wi.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Wi.makeTranslation(e, t)), this;
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
const Wi = /* @__PURE__ */ new pt();
function ea(s) {
  for (let e = s.length - 1; e >= 0; --e)
    if (s[e] >= 65535)
      return !0;
  return !1;
}
function Ci(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function fn(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Ei(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
const Hi = {
  [Lt]: { [Kn]: fn },
  [Kn]: { [Lt]: Ei }
}, st = {
  legacyMode: !0,
  get workingColorSpace() {
    return Kn;
  },
  set workingColorSpace(s) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(s, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return s;
    if (Hi[e] && Hi[e][t] !== void 0) {
      const n = Hi[e][t];
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
}, ta = {
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
}, We = { r: 0, g: 0, b: 0 }, bt = { h: 0, s: 0, l: 0 }, si = { h: 0, s: 0, l: 0 };
function Xi(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
function ai(s, e) {
  return e.r = s.r, e.g = s.g, e.b = s.b, e;
}
class Ie {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Lt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, st.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = st.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, st.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = st.workingColorSpace) {
    if (e = So(e, 1), t = lt(t, 0, 1), n = lt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r;
      this.r = Xi(o, r, e + 1 / 3), this.g = Xi(o, r, e), this.b = Xi(o, r, e - 1 / 3);
    }
    return st.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Lt) {
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
            return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, st.toWorkingColorSpace(this, t), n(r[4]), this;
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, st.toWorkingColorSpace(this, t), n(r[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
            const c = parseFloat(r[1]) / 360, l = parseFloat(r[2]) / 100, u = parseFloat(r[3]) / 100;
            return n(r[4]), this.setHSL(c, l, u, t);
          }
          break;
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], o = r.length;
      if (o === 3)
        return this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255, this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255, this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255, st.toWorkingColorSpace(this, t), this;
      if (o === 6)
        return this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255, this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255, this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255, st.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Lt) {
    const n = ta[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = fn(e.r), this.g = fn(e.g), this.b = fn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ei(e.r), this.g = Ei(e.g), this.b = Ei(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Lt) {
    return st.fromWorkingColorSpace(ai(this, We), e), lt(We.r * 255, 0, 255) << 16 ^ lt(We.g * 255, 0, 255) << 8 ^ lt(We.b * 255, 0, 255) << 0;
  }
  getHexString(e = Lt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = st.workingColorSpace) {
    st.fromWorkingColorSpace(ai(this, We), t);
    const n = We.r, i = We.g, r = We.b, o = Math.max(n, i, r), a = Math.min(n, i, r);
    let c, l;
    const u = (a + o) / 2;
    if (a === o)
      c = 0, l = 0;
    else {
      const d = o - a;
      switch (l = u <= 0.5 ? d / (o + a) : d / (2 - o - a), o) {
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
    return e.h = c, e.s = l, e.l = u, e;
  }
  getRGB(e, t = st.workingColorSpace) {
    return st.fromWorkingColorSpace(ai(this, We), t), e.r = We.r, e.g = We.g, e.b = We.b, e;
  }
  getStyle(e = Lt) {
    return st.fromWorkingColorSpace(ai(this, We), e), e !== Lt ? `color(${e} ${We.r} ${We.g} ${We.b})` : `rgb(${We.r * 255 | 0},${We.g * 255 | 0},${We.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(bt), bt.h += e, bt.s += t, bt.l += n, this.setHSL(bt.h, bt.s, bt.l), this;
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
    this.getHSL(bt), e.getHSL(si);
    const n = ki(bt.h, si.h, t), i = ki(bt.s, si.s, t), r = ki(bt.l, si.l, t);
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
Ie.NAMES = ta;
let xn;
class na {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      xn === void 0 && (xn = Ci("canvas")), xn.width = e.width, xn.height = e.height;
      const n = xn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = xn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ci("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let o = 0; o < r.length; o++)
        r[o] = fn(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(fn(t[n] / 255) * 255) : t[n] = fn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class ia {
  constructor(e = null) {
    this.isSource = !0, this.uuid = Qn(), this.data = e, this.version = 0;
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
          i[o].isDataTexture ? r.push(qi(i[o].image)) : r.push(qi(i[o]));
      } else
        r = qi(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function qi(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? na.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let yo = 0;
class mt extends Vn {
  constructor(e = mt.DEFAULT_IMAGE, t = mt.DEFAULT_MAPPING, n = At, i = At, r = Mt, o = Di, a = Ct, c = pn, l = mt.DEFAULT_ANISOTROPY, u = mn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: yo++ }), this.uuid = Qn(), this.name = "", this.source = new ia(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new Re(0, 0), this.repeat = new Re(1, 1), this.center = new Re(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new pt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    if (this.mapping !== Ks)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case vr:
          e.x = e.x - Math.floor(e.x);
          break;
        case At:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Mr:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case vr:
          e.y = e.y - Math.floor(e.y);
          break;
        case At:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Mr:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
mt.DEFAULT_IMAGE = null;
mt.DEFAULT_MAPPING = Ks;
mt.DEFAULT_ANISOTROPY = 1;
class Je {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Je.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
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
    const c = e.elements, l = c[0], u = c[4], d = c[8], f = c[1], m = c[5], x = c[9], p = c[2], h = c[6], _ = c[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(d - p) < 0.01 && Math.abs(x - h) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(d + p) < 0.1 && Math.abs(x + h) < 0.1 && Math.abs(l + m + _ - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const b = (l + 1) / 2, M = (m + 1) / 2, w = (_ + 1) / 2, C = (u + f) / 4, F = (d + p) / 4, g = (x + h) / 4;
      return b > M && b > w ? b < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(b), i = C / n, r = F / n) : M > w ? M < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(M), n = C / i, r = g / i) : w < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(w), n = F / r, i = g / r), this.set(n, i, r, t), this;
    }
    let T = Math.sqrt((h - x) * (h - x) + (d - p) * (d - p) + (f - u) * (f - u));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (h - x) / T, this.y = (d - p) / T, this.z = (f - u) / T, this.w = Math.acos((l + m + _ - 1) / 2), this;
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
class gn extends Vn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Je(0, 0, e, t), this.scissorTest = !1, this.viewport = new Je(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new mt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Mt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
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
    return this.texture.source = new ia(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ra extends mt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ot, this.minFilter = ot, this.wrapR = At, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class bo extends mt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = ot, this.minFilter = ot, this.wrapR = At, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ei {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, o, a) {
    let c = n[i + 0], l = n[i + 1], u = n[i + 2], d = n[i + 3];
    const f = r[o + 0], m = r[o + 1], x = r[o + 2], p = r[o + 3];
    if (a === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = d;
      return;
    }
    if (a === 1) {
      e[t + 0] = f, e[t + 1] = m, e[t + 2] = x, e[t + 3] = p;
      return;
    }
    if (d !== p || c !== f || l !== m || u !== x) {
      let h = 1 - a;
      const _ = c * f + l * m + u * x + d * p, T = _ >= 0 ? 1 : -1, b = 1 - _ * _;
      if (b > Number.EPSILON) {
        const w = Math.sqrt(b), C = Math.atan2(w, _ * T);
        h = Math.sin(h * C) / w, a = Math.sin(a * C) / w;
      }
      const M = a * T;
      if (c = c * h + f * M, l = l * h + m * M, u = u * h + x * M, d = d * h + p * M, h === 1 - a) {
        const w = 1 / Math.sqrt(c * c + l * l + u * u + d * d);
        c *= w, l *= w, u *= w, d *= w;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, o) {
    const a = n[i], c = n[i + 1], l = n[i + 2], u = n[i + 3], d = r[o], f = r[o + 1], m = r[o + 2], x = r[o + 3];
    return e[t] = a * x + u * d + c * m - l * f, e[t + 1] = c * x + u * f + l * d - a * m, e[t + 2] = l * x + u * m + a * f - c * d, e[t + 3] = u * x - a * d - c * f - l * m, e;
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
    const n = e._x, i = e._y, r = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), u = a(i / 2), d = a(r / 2), f = c(n / 2), m = c(i / 2), x = c(r / 2);
    switch (o) {
      case "XYZ":
        this._x = f * u * d + l * m * x, this._y = l * m * d - f * u * x, this._z = l * u * x + f * m * d, this._w = l * u * d - f * m * x;
        break;
      case "YXZ":
        this._x = f * u * d + l * m * x, this._y = l * m * d - f * u * x, this._z = l * u * x - f * m * d, this._w = l * u * d + f * m * x;
        break;
      case "ZXY":
        this._x = f * u * d - l * m * x, this._y = l * m * d + f * u * x, this._z = l * u * x + f * m * d, this._w = l * u * d - f * m * x;
        break;
      case "ZYX":
        this._x = f * u * d - l * m * x, this._y = l * m * d + f * u * x, this._z = l * u * x - f * m * d, this._w = l * u * d + f * m * x;
        break;
      case "YZX":
        this._x = f * u * d + l * m * x, this._y = l * m * d + f * u * x, this._z = l * u * x - f * m * d, this._w = l * u * d - f * m * x;
        break;
      case "XZY":
        this._x = f * u * d - l * m * x, this._y = l * m * d - f * u * x, this._z = l * u * x + f * m * d, this._w = l * u * d + f * m * x;
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
    const t = e.elements, n = t[0], i = t[4], r = t[8], o = t[1], a = t[5], c = t[9], l = t[2], u = t[6], d = t[10], f = n + a + d;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (u - c) * m, this._y = (r - l) * m, this._z = (o - i) * m;
    } else if (n > a && n > d) {
      const m = 2 * Math.sqrt(1 + n - a - d);
      this._w = (u - c) / m, this._x = 0.25 * m, this._y = (i + o) / m, this._z = (r + l) / m;
    } else if (a > d) {
      const m = 2 * Math.sqrt(1 + a - n - d);
      this._w = (r - l) / m, this._x = (i + o) / m, this._y = 0.25 * m, this._z = (c + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + d - n - a);
      this._w = (o - i) / m, this._x = (r + l) / m, this._y = (c + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(lt(this.dot(e), -1, 1)));
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
    const n = e._x, i = e._y, r = e._z, o = e._w, a = t._x, c = t._y, l = t._z, u = t._w;
    return this._x = n * u + o * a + i * l - r * c, this._y = i * u + o * c + r * a - n * l, this._z = r * u + o * l + n * c - i * a, this._w = o * u - n * a - i * c - r * l, this._onChangeCallback(), this;
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
    const l = Math.sqrt(c), u = Math.atan2(l, a), d = Math.sin((1 - t) * u) / l, f = Math.sin(t * u) / l;
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
    return this.applyQuaternion(ps.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ps.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, i = this.z, r = e.x, o = e.y, a = e.z, c = e.w, l = c * t + o * i - a * n, u = c * n + a * t - r * i, d = c * i + r * n - o * t, f = -r * t - o * n - a * i;
    return this.x = l * c + f * -r + u * -a - d * -o, this.y = u * c + f * -o + d * -r - l * -a, this.z = d * c + f * -a + l * -o - u * -r, this;
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
    return Yi.copy(this).projectOnVector(e), this.sub(Yi);
  }
  reflect(e) {
    return this.sub(Yi.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(lt(n, -1, 1));
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
const Yi = /* @__PURE__ */ new I(), ps = /* @__PURE__ */ new ei();
class ti {
  constructor(e = new I(1 / 0, 1 / 0, 1 / 0), t = new I(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0;
    for (let c = 0, l = e.length; c < l; c += 3) {
      const u = e[c], d = e[c + 1], f = e[c + 2];
      u < t && (t = u), d < n && (n = d), f < i && (i = f), u > r && (r = u), d > o && (o = d), f > a && (a = f);
    }
    return this.min.set(t, n, i), this.max.set(r, o, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0;
    for (let c = 0, l = e.count; c < l; c++) {
      const u = e.getX(c), d = e.getY(c), f = e.getZ(c);
      u < t && (t = u), d < n && (n = d), f < i && (i = f), u > r && (r = u), d > o && (o = d), f > a && (a = f);
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
    const n = rn.copy(t).multiplyScalar(0.5);
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
          rn.fromBufferAttribute(r, o).applyMatrix4(e.matrixWorld), this.expandByPoint(rn);
      } else
        n.boundingBox === null && n.computeBoundingBox(), ji.copy(n.boundingBox), ji.applyMatrix4(e.matrixWorld), this.union(ji);
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
    return this.clampPoint(e.center, rn), rn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Xn), oi.subVectors(this.max, Xn), vn.subVectors(e.a, Xn), Mn.subVectors(e.b, Xn), Sn.subVectors(e.c, Xn), Wt.subVectors(Mn, vn), Ht.subVectors(Sn, Mn), sn.subVectors(vn, Sn);
    let t = [
      0,
      -Wt.z,
      Wt.y,
      0,
      -Ht.z,
      Ht.y,
      0,
      -sn.z,
      sn.y,
      Wt.z,
      0,
      -Wt.x,
      Ht.z,
      0,
      -Ht.x,
      sn.z,
      0,
      -sn.x,
      -Wt.y,
      Wt.x,
      0,
      -Ht.y,
      Ht.x,
      0,
      -sn.y,
      sn.x,
      0
    ];
    return !Zi(t, vn, Mn, Sn, oi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Zi(t, vn, Mn, Sn, oi)) ? !1 : (li.crossVectors(Wt, Ht), t = [li.x, li.y, li.z], Zi(t, vn, Mn, Sn, oi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return rn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(rn).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Nt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Nt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Nt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Nt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Nt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Nt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Nt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Nt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Nt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Nt = [
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I(),
  /* @__PURE__ */ new I()
], rn = /* @__PURE__ */ new I(), ji = /* @__PURE__ */ new ti(), vn = /* @__PURE__ */ new I(), Mn = /* @__PURE__ */ new I(), Sn = /* @__PURE__ */ new I(), Wt = /* @__PURE__ */ new I(), Ht = /* @__PURE__ */ new I(), sn = /* @__PURE__ */ new I(), Xn = /* @__PURE__ */ new I(), oi = /* @__PURE__ */ new I(), li = /* @__PURE__ */ new I(), an = /* @__PURE__ */ new I();
function Zi(s, e, t, n, i) {
  for (let r = 0, o = s.length - 3; r <= o; r += 3) {
    an.fromArray(s, r);
    const a = i.x * Math.abs(an.x) + i.y * Math.abs(an.y) + i.z * Math.abs(an.z), c = e.dot(an), l = t.dot(an), u = n.dot(an);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > a)
      return !1;
  }
  return !0;
}
const wo = /* @__PURE__ */ new ti(), qn = /* @__PURE__ */ new I(), $i = /* @__PURE__ */ new I();
class Ar {
  constructor(e = new I(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : wo.setFromPoints(e).getCenter(n);
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
    qn.subVectors(e, this.center);
    const t = qn.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(qn, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : ($i.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(qn.copy(e.center).add($i)), this.expandByPoint(qn.copy(e.center).sub($i))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ut = /* @__PURE__ */ new I(), Ji = /* @__PURE__ */ new I(), ci = /* @__PURE__ */ new I(), Xt = /* @__PURE__ */ new I(), Ki = /* @__PURE__ */ new I(), ui = /* @__PURE__ */ new I(), Qi = /* @__PURE__ */ new I();
class To {
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
    return this.origin.copy(this.at(e, Ut)), this;
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
    const t = Ut.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Ut.copy(this.direction).multiplyScalar(t).add(this.origin), Ut.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Ji.copy(e).add(t).multiplyScalar(0.5), ci.copy(t).sub(e).normalize(), Xt.copy(this.origin).sub(Ji);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(ci), a = Xt.dot(this.direction), c = -Xt.dot(ci), l = Xt.lengthSq(), u = Math.abs(1 - o * o);
    let d, f, m, x;
    if (u > 0)
      if (d = o * c - a, f = o * a - c, x = r * u, d >= 0)
        if (f >= -x)
          if (f <= x) {
            const p = 1 / u;
            d *= p, f *= p, m = d * (d + o * f + 2 * a) + f * (o * d + f + 2 * c) + l;
          } else
            f = r, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * c) + l;
        else
          f = -r, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * c) + l;
      else
        f <= -x ? (d = Math.max(0, -(-o * r + a)), f = d > 0 ? -r : Math.min(Math.max(-r, -c), r), m = -d * d + f * (f + 2 * c) + l) : f <= x ? (d = 0, f = Math.min(Math.max(-r, -c), r), m = f * (f + 2 * c) + l) : (d = Math.max(0, -(o * r + a)), f = d > 0 ? r : Math.min(Math.max(-r, -c), r), m = -d * d + f * (f + 2 * c) + l);
    else
      f = o > 0 ? -r : r, d = Math.max(0, -(o * f + a)), m = -d * d + f * (f + 2 * c) + l;
    return n && n.copy(this.direction).multiplyScalar(d).add(this.origin), i && i.copy(ci).multiplyScalar(f).add(Ji), m;
  }
  intersectSphere(e, t) {
    Ut.subVectors(e.center, this.origin);
    const n = Ut.dot(this.direction), i = Ut.dot(Ut) - n * n, r = e.radius * e.radius;
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
    const l = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (e.min.x - f.x) * l, i = (e.max.x - f.x) * l) : (n = (e.max.x - f.x) * l, i = (e.min.x - f.x) * l), u >= 0 ? (r = (e.min.y - f.y) * u, o = (e.max.y - f.y) * u) : (r = (e.max.y - f.y) * u, o = (e.min.y - f.y) * u), n > o || r > i || ((r > n || isNaN(n)) && (n = r), (o < i || isNaN(i)) && (i = o), d >= 0 ? (a = (e.min.z - f.z) * d, c = (e.max.z - f.z) * d) : (a = (e.max.z - f.z) * d, c = (e.min.z - f.z) * d), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Ut) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Ki.subVectors(t, e), ui.subVectors(n, e), Qi.crossVectors(Ki, ui);
    let o = this.direction.dot(Qi), a;
    if (o > 0) {
      if (i)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Xt.subVectors(this.origin, e);
    const c = a * this.direction.dot(ui.crossVectors(Xt, ui));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(Ki.cross(Xt));
    if (l < 0 || c + l > o)
      return null;
    const u = -a * Xt.dot(Qi);
    return u < 0 ? null : this.at(u / o, r);
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
class He {
  constructor() {
    He.prototype.isMatrix4 = !0, this.elements = [
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
  set(e, t, n, i, r, o, a, c, l, u, d, f, m, x, p, h) {
    const _ = this.elements;
    return _[0] = e, _[4] = t, _[8] = n, _[12] = i, _[1] = r, _[5] = o, _[9] = a, _[13] = c, _[2] = l, _[6] = u, _[10] = d, _[14] = f, _[3] = m, _[7] = x, _[11] = p, _[15] = h, this;
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
    return new He().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, i = 1 / yn.setFromMatrixColumn(e, 0).length(), r = 1 / yn.setFromMatrixColumn(e, 1).length(), o = 1 / yn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(i), l = Math.sin(i), u = Math.cos(r), d = Math.sin(r);
    if (e.order === "XYZ") {
      const f = o * u, m = o * d, x = a * u, p = a * d;
      t[0] = c * u, t[4] = -c * d, t[8] = l, t[1] = m + x * l, t[5] = f - p * l, t[9] = -a * c, t[2] = p - f * l, t[6] = x + m * l, t[10] = o * c;
    } else if (e.order === "YXZ") {
      const f = c * u, m = c * d, x = l * u, p = l * d;
      t[0] = f + p * a, t[4] = x * a - m, t[8] = o * l, t[1] = o * d, t[5] = o * u, t[9] = -a, t[2] = m * a - x, t[6] = p + f * a, t[10] = o * c;
    } else if (e.order === "ZXY") {
      const f = c * u, m = c * d, x = l * u, p = l * d;
      t[0] = f - p * a, t[4] = -o * d, t[8] = x + m * a, t[1] = m + x * a, t[5] = o * u, t[9] = p - f * a, t[2] = -o * l, t[6] = a, t[10] = o * c;
    } else if (e.order === "ZYX") {
      const f = o * u, m = o * d, x = a * u, p = a * d;
      t[0] = c * u, t[4] = x * l - m, t[8] = f * l + p, t[1] = c * d, t[5] = p * l + f, t[9] = m * l - x, t[2] = -l, t[6] = a * c, t[10] = o * c;
    } else if (e.order === "YZX") {
      const f = o * c, m = o * l, x = a * c, p = a * l;
      t[0] = c * u, t[4] = p - f * d, t[8] = x * d + m, t[1] = d, t[5] = o * u, t[9] = -a * u, t[2] = -l * u, t[6] = m * d + x, t[10] = f - p * d;
    } else if (e.order === "XZY") {
      const f = o * c, m = o * l, x = a * c, p = a * l;
      t[0] = c * u, t[4] = -d, t[8] = l * u, t[1] = f * d + p, t[5] = o * u, t[9] = m * d - x, t[2] = x * d - m, t[6] = a * u, t[10] = p * d + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Eo, e, Ao);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return dt.subVectors(e, t), dt.lengthSq() === 0 && (dt.z = 1), dt.normalize(), qt.crossVectors(n, dt), qt.lengthSq() === 0 && (Math.abs(n.z) === 1 ? dt.x += 1e-4 : dt.z += 1e-4, dt.normalize(), qt.crossVectors(n, dt)), qt.normalize(), hi.crossVectors(dt, qt), i[0] = qt.x, i[4] = hi.x, i[8] = dt.x, i[1] = qt.y, i[5] = hi.y, i[9] = dt.y, i[2] = qt.z, i[6] = hi.z, i[10] = dt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], u = n[1], d = n[5], f = n[9], m = n[13], x = n[2], p = n[6], h = n[10], _ = n[14], T = n[3], b = n[7], M = n[11], w = n[15], C = i[0], F = i[4], g = i[8], E = i[12], D = i[1], q = i[5], Z = i[9], N = i[13], R = i[2], W = i[6], j = i[10], K = i[14], X = i[3], Q = i[7], Y = i[11], G = i[15];
    return r[0] = o * C + a * D + c * R + l * X, r[4] = o * F + a * q + c * W + l * Q, r[8] = o * g + a * Z + c * j + l * Y, r[12] = o * E + a * N + c * K + l * G, r[1] = u * C + d * D + f * R + m * X, r[5] = u * F + d * q + f * W + m * Q, r[9] = u * g + d * Z + f * j + m * Y, r[13] = u * E + d * N + f * K + m * G, r[2] = x * C + p * D + h * R + _ * X, r[6] = x * F + p * q + h * W + _ * Q, r[10] = x * g + p * Z + h * j + _ * Y, r[14] = x * E + p * N + h * K + _ * G, r[3] = T * C + b * D + M * R + w * X, r[7] = T * F + b * q + M * W + w * Q, r[11] = T * g + b * Z + M * j + w * Y, r[15] = T * E + b * N + M * K + w * G, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], o = e[1], a = e[5], c = e[9], l = e[13], u = e[2], d = e[6], f = e[10], m = e[14], x = e[3], p = e[7], h = e[11], _ = e[15];
    return x * (+r * c * d - i * l * d - r * a * f + n * l * f + i * a * m - n * c * m) + p * (+t * c * m - t * l * f + r * o * f - i * o * m + i * l * u - r * c * u) + h * (+t * l * d - t * a * m - r * o * d + n * o * m + r * a * u - n * l * u) + _ * (-i * a * u - t * c * d + t * a * f + i * o * d - n * o * f + n * c * u);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8], d = e[9], f = e[10], m = e[11], x = e[12], p = e[13], h = e[14], _ = e[15], T = d * h * l - p * f * l + p * c * m - a * h * m - d * c * _ + a * f * _, b = x * f * l - u * h * l - x * c * m + o * h * m + u * c * _ - o * f * _, M = u * p * l - x * d * l + x * a * m - o * p * m - u * a * _ + o * d * _, w = x * d * c - u * p * c - x * a * f + o * p * f + u * a * h - o * d * h, C = t * T + n * b + i * M + r * w;
    if (C === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const F = 1 / C;
    return e[0] = T * F, e[1] = (p * f * r - d * h * r - p * i * m + n * h * m + d * i * _ - n * f * _) * F, e[2] = (a * h * r - p * c * r + p * i * l - n * h * l - a * i * _ + n * c * _) * F, e[3] = (d * c * r - a * f * r - d * i * l + n * f * l + a * i * m - n * c * m) * F, e[4] = b * F, e[5] = (u * h * r - x * f * r + x * i * m - t * h * m - u * i * _ + t * f * _) * F, e[6] = (x * c * r - o * h * r - x * i * l + t * h * l + o * i * _ - t * c * _) * F, e[7] = (o * f * r - u * c * r + u * i * l - t * f * l - o * i * m + t * c * m) * F, e[8] = M * F, e[9] = (x * d * r - u * p * r - x * n * m + t * p * m + u * n * _ - t * d * _) * F, e[10] = (o * p * r - x * a * r + x * n * l - t * p * l - o * n * _ + t * a * _) * F, e[11] = (u * a * r - o * d * r - u * n * l + t * d * l + o * n * m - t * a * m) * F, e[12] = w * F, e[13] = (u * p * i - x * d * i + x * n * f - t * p * f - u * n * h + t * d * h) * F, e[14] = (x * a * i - o * p * i - x * n * c + t * p * c + o * n * h - t * a * h) * F, e[15] = (o * d * i - u * a * i + u * n * c - t * d * c - o * n * f + t * a * f) * F, this;
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
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, o = e.x, a = e.y, c = e.z, l = r * o, u = r * a;
    return this.set(
      l * o + n,
      l * a - i * c,
      l * c + i * a,
      0,
      l * a + i * c,
      u * a + n,
      u * c - i * o,
      0,
      l * c - i * a,
      u * c + i * o,
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
    const i = this.elements, r = t._x, o = t._y, a = t._z, c = t._w, l = r + r, u = o + o, d = a + a, f = r * l, m = r * u, x = r * d, p = o * u, h = o * d, _ = a * d, T = c * l, b = c * u, M = c * d, w = n.x, C = n.y, F = n.z;
    return i[0] = (1 - (p + _)) * w, i[1] = (m + M) * w, i[2] = (x - b) * w, i[3] = 0, i[4] = (m - M) * C, i[5] = (1 - (f + _)) * C, i[6] = (h + T) * C, i[7] = 0, i[8] = (x + b) * F, i[9] = (h - T) * F, i[10] = (1 - (f + p)) * F, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = yn.set(i[0], i[1], i[2]).length();
    const o = yn.set(i[4], i[5], i[6]).length(), a = yn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], wt.copy(this);
    const l = 1 / r, u = 1 / o, d = 1 / a;
    return wt.elements[0] *= l, wt.elements[1] *= l, wt.elements[2] *= l, wt.elements[4] *= u, wt.elements[5] *= u, wt.elements[6] *= u, wt.elements[8] *= d, wt.elements[9] *= d, wt.elements[10] *= d, t.setFromRotationMatrix(wt), n.x = r, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, r, o) {
    const a = this.elements, c = 2 * r / (t - e), l = 2 * r / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i), f = -(o + r) / (o - r), m = -2 * o * r / (o - r);
    return a[0] = c, a[4] = 0, a[8] = u, a[12] = 0, a[1] = 0, a[5] = l, a[9] = d, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = f, a[14] = m, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, o) {
    const a = this.elements, c = 1 / (t - e), l = 1 / (n - i), u = 1 / (o - r), d = (t + e) * c, f = (n + i) * l, m = (o + r) * u;
    return a[0] = 2 * c, a[4] = 0, a[8] = 0, a[12] = -d, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -f, a[2] = 0, a[6] = 0, a[10] = -2 * u, a[14] = -m, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
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
const yn = /* @__PURE__ */ new I(), wt = /* @__PURE__ */ new He(), Eo = /* @__PURE__ */ new I(0, 0, 0), Ao = /* @__PURE__ */ new I(1, 1, 1), qt = /* @__PURE__ */ new I(), hi = /* @__PURE__ */ new I(), dt = /* @__PURE__ */ new I(), ms = /* @__PURE__ */ new He(), gs = /* @__PURE__ */ new ei();
class ni {
  constructor(e = 0, t = 0, n = 0, i = ni.DefaultOrder) {
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
    const i = e.elements, r = i[0], o = i[4], a = i[8], c = i[1], l = i[5], u = i[9], d = i[2], f = i[6], m = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(lt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-lt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(lt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, m), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-lt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(lt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, r)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-lt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return ms.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ms, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return gs.setFromEuler(this), this.setFromQuaternion(gs, e);
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
ni.DefaultOrder = "XYZ";
ni.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class sa {
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
let Co = 0;
const _s = /* @__PURE__ */ new I(), bn = /* @__PURE__ */ new ei(), zt = /* @__PURE__ */ new He(), di = /* @__PURE__ */ new I(), Yn = /* @__PURE__ */ new I(), Lo = /* @__PURE__ */ new I(), Do = /* @__PURE__ */ new ei(), xs = /* @__PURE__ */ new I(1, 0, 0), vs = /* @__PURE__ */ new I(0, 1, 0), Ms = /* @__PURE__ */ new I(0, 0, 1), Ro = { type: "added" }, Ss = { type: "removed" };
class Ke extends Vn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Co++ }), this.uuid = Qn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ke.DefaultUp.clone();
    const e = new I(), t = new ni(), n = new ei(), i = new I(1, 1, 1);
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
        value: new He()
      },
      normalMatrix: {
        value: new pt()
      }
    }), this.matrix = new He(), this.matrixWorld = new He(), this.matrixAutoUpdate = Ke.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = Ke.DefaultMatrixWorldAutoUpdate, this.layers = new sa(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return bn.setFromAxisAngle(e, t), this.quaternion.multiply(bn), this;
  }
  rotateOnWorldAxis(e, t) {
    return bn.setFromAxisAngle(e, t), this.quaternion.premultiply(bn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(xs, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(vs, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Ms, e);
  }
  translateOnAxis(e, t) {
    return _s.copy(e).applyQuaternion(this.quaternion), this.position.add(_s.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(xs, e);
  }
  translateY(e) {
    return this.translateOnAxis(vs, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Ms, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(zt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? di.copy(e) : di.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), Yn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? zt.lookAt(Yn, di, this.up) : zt.lookAt(di, Yn, this.up), this.quaternion.setFromRotationMatrix(zt), i && (zt.extractRotation(i.matrixWorld), bn.setFromRotationMatrix(zt), this.quaternion.premultiply(bn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Ro)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ss)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Ss);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), zt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), zt.multiply(e.parent.matrixWorld)), e.applyMatrix4(zt), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Yn, e, Lo), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Yn, Do, e), e;
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
          for (let l = 0, u = c.length; l < u; l++) {
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
      const a = o(e.geometries), c = o(e.materials), l = o(e.textures), u = o(e.images), d = o(e.shapes), f = o(e.skeletons), m = o(e.animations), x = o(e.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), x.length > 0 && (n.nodes = x);
    }
    return n.object = i, n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const u = a[l];
        delete u.metadata, c.push(u);
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
Ke.DefaultUp = /* @__PURE__ */ new I(0, 1, 0);
Ke.DefaultMatrixAutoUpdate = !0;
Ke.DefaultMatrixWorldAutoUpdate = !0;
const Tt = /* @__PURE__ */ new I(), Ot = /* @__PURE__ */ new I(), er = /* @__PURE__ */ new I(), Bt = /* @__PURE__ */ new I(), wn = /* @__PURE__ */ new I(), Tn = /* @__PURE__ */ new I(), ys = /* @__PURE__ */ new I(), tr = /* @__PURE__ */ new I(), nr = /* @__PURE__ */ new I(), ir = /* @__PURE__ */ new I();
class Gt {
  constructor(e = new I(), t = new I(), n = new I()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Tt.subVectors(e, t), i.cross(Tt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    Tt.subVectors(i, t), Ot.subVectors(n, t), er.subVectors(e, t);
    const o = Tt.dot(Tt), a = Tt.dot(Ot), c = Tt.dot(er), l = Ot.dot(Ot), u = Ot.dot(er), d = o * l - a * a;
    if (d === 0)
      return r.set(-2, -1, -1);
    const f = 1 / d, m = (l * c - a * u) * f, x = (o * u - a * c) * f;
    return r.set(1 - m - x, x, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Bt), Bt.x >= 0 && Bt.y >= 0 && Bt.x + Bt.y <= 1;
  }
  static getUV(e, t, n, i, r, o, a, c) {
    return this.getBarycoord(e, t, n, i, Bt), c.set(0, 0), c.addScaledVector(r, Bt.x), c.addScaledVector(o, Bt.y), c.addScaledVector(a, Bt.z), c;
  }
  static isFrontFacing(e, t, n, i) {
    return Tt.subVectors(n, t), Ot.subVectors(e, t), Tt.cross(Ot).dot(i) < 0;
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
    return Tt.subVectors(this.c, this.b), Ot.subVectors(this.a, this.b), Tt.cross(Ot).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Gt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Gt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return Gt.getUV(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Gt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Gt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let o, a;
    wn.subVectors(i, n), Tn.subVectors(r, n), tr.subVectors(e, n);
    const c = wn.dot(tr), l = Tn.dot(tr);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    nr.subVectors(e, i);
    const u = wn.dot(nr), d = Tn.dot(nr);
    if (u >= 0 && d <= u)
      return t.copy(i);
    const f = c * d - u * l;
    if (f <= 0 && c >= 0 && u <= 0)
      return o = c / (c - u), t.copy(n).addScaledVector(wn, o);
    ir.subVectors(e, r);
    const m = wn.dot(ir), x = Tn.dot(ir);
    if (x >= 0 && m <= x)
      return t.copy(r);
    const p = m * l - c * x;
    if (p <= 0 && l >= 0 && x <= 0)
      return a = l / (l - x), t.copy(n).addScaledVector(Tn, a);
    const h = u * x - m * d;
    if (h <= 0 && d - u >= 0 && m - x >= 0)
      return ys.subVectors(r, i), a = (d - u) / (d - u + (m - x)), t.copy(i).addScaledVector(ys, a);
    const _ = 1 / (h + p + f);
    return o = p * _, a = f * _, t.copy(n).addScaledVector(wn, o).addScaledVector(Tn, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Po = 0;
class kn extends Vn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Po++ }), this.uuid = Qn(), this.name = "", this.type = "Material", this.blending = Fn, this.side = Un, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = $s, this.blendDst = Js, this.blendEquation = Pn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = gr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Mo, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Gi, this.stencilZFail = Gi, this.stencilZPass = Gi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Fn && (n.blending = this.blending), this.side !== Un && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
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
class aa extends kn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ie(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Tr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Ve = /* @__PURE__ */ new I(), fi = /* @__PURE__ */ new Re();
class Rt {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = us, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
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
        fi.fromBufferAttribute(this, t), fi.applyMatrix3(e), this.setXY(t, fi.x, fi.y);
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
    return this.normalized && (t = ri(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = ht(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = ri(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = ht(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = ri(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = ht(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = ri(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = ht(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = ht(t, this.array), n = ht(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = ht(t, this.array), n = ht(n, this.array), i = ht(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = ht(t, this.array), n = ht(n, this.array), i = ht(i, this.array), r = ht(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== us && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
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
class oa extends Rt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class la extends Rt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class gt extends Rt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Io = 0;
const vt = /* @__PURE__ */ new He(), rr = /* @__PURE__ */ new Ke(), En = /* @__PURE__ */ new I(), ft = /* @__PURE__ */ new ti(), jn = /* @__PURE__ */ new ti(), $e = /* @__PURE__ */ new I();
class kt extends Vn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Io++ }), this.uuid = Qn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (ea(e) ? la : oa)(e, 1) : this.index = e, this;
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
      const r = new pt().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return vt.makeRotationFromQuaternion(e), this.applyMatrix4(vt), this;
  }
  rotateX(e) {
    return vt.makeRotationX(e), this.applyMatrix4(vt), this;
  }
  rotateY(e) {
    return vt.makeRotationY(e), this.applyMatrix4(vt), this;
  }
  rotateZ(e) {
    return vt.makeRotationZ(e), this.applyMatrix4(vt), this;
  }
  translate(e, t, n) {
    return vt.makeTranslation(e, t, n), this.applyMatrix4(vt), this;
  }
  scale(e, t, n) {
    return vt.makeScale(e, t, n), this.applyMatrix4(vt), this;
  }
  lookAt(e) {
    return rr.lookAt(e), rr.updateMatrix(), this.applyMatrix4(rr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(En).negate(), this.translate(En.x, En.y, En.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new gt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ti());
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
          ft.setFromBufferAttribute(r), this.morphTargetsRelative ? ($e.addVectors(this.boundingBox.min, ft.min), this.boundingBox.expandByPoint($e), $e.addVectors(this.boundingBox.max, ft.max), this.boundingBox.expandByPoint($e)) : (this.boundingBox.expandByPoint(ft.min), this.boundingBox.expandByPoint(ft.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ar());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new I(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (ft.setFromBufferAttribute(e), t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r];
          jn.setFromBufferAttribute(a), this.morphTargetsRelative ? ($e.addVectors(ft.min, jn.min), ft.expandByPoint($e), $e.addVectors(ft.max, jn.max), ft.expandByPoint($e)) : (ft.expandByPoint(jn.min), ft.expandByPoint(jn.max));
        }
      ft.getCenter(n);
      let i = 0;
      for (let r = 0, o = e.count; r < o; r++)
        $e.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared($e));
      if (t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r], c = this.morphTargetsRelative;
          for (let l = 0, u = a.count; l < u; l++)
            $e.fromBufferAttribute(a, l), c && (En.fromBufferAttribute(e, l), $e.add(En)), i = Math.max(i, n.distanceToSquared($e));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Rt(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array, l = [], u = [];
    for (let D = 0; D < a; D++)
      l[D] = new I(), u[D] = new I();
    const d = new I(), f = new I(), m = new I(), x = new Re(), p = new Re(), h = new Re(), _ = new I(), T = new I();
    function b(D, q, Z) {
      d.fromArray(i, D * 3), f.fromArray(i, q * 3), m.fromArray(i, Z * 3), x.fromArray(o, D * 2), p.fromArray(o, q * 2), h.fromArray(o, Z * 2), f.sub(d), m.sub(d), p.sub(x), h.sub(x);
      const N = 1 / (p.x * h.y - h.x * p.y);
      !isFinite(N) || (_.copy(f).multiplyScalar(h.y).addScaledVector(m, -p.y).multiplyScalar(N), T.copy(m).multiplyScalar(p.x).addScaledVector(f, -h.x).multiplyScalar(N), l[D].add(_), l[q].add(_), l[Z].add(_), u[D].add(T), u[q].add(T), u[Z].add(T));
    }
    let M = this.groups;
    M.length === 0 && (M = [{
      start: 0,
      count: n.length
    }]);
    for (let D = 0, q = M.length; D < q; ++D) {
      const Z = M[D], N = Z.start, R = Z.count;
      for (let W = N, j = N + R; W < j; W += 3)
        b(
          n[W + 0],
          n[W + 1],
          n[W + 2]
        );
    }
    const w = new I(), C = new I(), F = new I(), g = new I();
    function E(D) {
      F.fromArray(r, D * 3), g.copy(F);
      const q = l[D];
      w.copy(q), w.sub(F.multiplyScalar(F.dot(q))).normalize(), C.crossVectors(g, q);
      const N = C.dot(u[D]) < 0 ? -1 : 1;
      c[D * 4] = w.x, c[D * 4 + 1] = w.y, c[D * 4 + 2] = w.z, c[D * 4 + 3] = N;
    }
    for (let D = 0, q = M.length; D < q; ++D) {
      const Z = M[D], N = Z.start, R = Z.count;
      for (let W = N, j = N + R; W < j; W += 3)
        E(n[W + 0]), E(n[W + 1]), E(n[W + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Rt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, m = n.count; f < m; f++)
          n.setXYZ(f, 0, 0, 0);
      const i = new I(), r = new I(), o = new I(), a = new I(), c = new I(), l = new I(), u = new I(), d = new I();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const x = e.getX(f + 0), p = e.getX(f + 1), h = e.getX(f + 2);
          i.fromBufferAttribute(t, x), r.fromBufferAttribute(t, p), o.fromBufferAttribute(t, h), u.subVectors(o, r), d.subVectors(i, r), u.cross(d), a.fromBufferAttribute(n, x), c.fromBufferAttribute(n, p), l.fromBufferAttribute(n, h), a.add(u), c.add(u), l.add(u), n.setXYZ(x, a.x, a.y, a.z), n.setXYZ(p, c.x, c.y, c.z), n.setXYZ(h, l.x, l.y, l.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          i.fromBufferAttribute(t, f + 0), r.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), u.subVectors(o, r), d.subVectors(i, r), u.cross(d), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      $e.fromBufferAttribute(e, t), $e.normalize(), e.setXYZ(t, $e.x, $e.y, $e.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array, u = a.itemSize, d = a.normalized, f = new l.constructor(c.length * u);
      let m = 0, x = 0;
      for (let p = 0, h = c.length; p < h; p++) {
        a.isInterleavedBufferAttribute ? m = c[p] * a.data.stride + a.offset : m = c[p] * u;
        for (let _ = 0; _ < u; _++)
          f[x++] = l[m++];
      }
      return new Rt(f, u, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new kt(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const c = i[a], l = e(c, n);
      t.setAttribute(a, l);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const c = [], l = r[a];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u], m = e(f, n);
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
      const l = this.morphAttributes[c], u = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const m = l[d];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (i[c] = u, r = !0);
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
      const u = i[l];
      this.setAttribute(l, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const u = [], d = r[l];
      for (let f = 0, m = d.length; f < m; f++)
        u.push(d[f].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, u = o.length; l < u; l++) {
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
const bs = /* @__PURE__ */ new He(), An = /* @__PURE__ */ new To(), sr = /* @__PURE__ */ new Ar(), Yt = /* @__PURE__ */ new I(), jt = /* @__PURE__ */ new I(), Zt = /* @__PURE__ */ new I(), ar = /* @__PURE__ */ new I(), or = /* @__PURE__ */ new I(), lr = /* @__PURE__ */ new I(), pi = /* @__PURE__ */ new I(), mi = /* @__PURE__ */ new I(), gi = /* @__PURE__ */ new I(), _i = /* @__PURE__ */ new Re(), xi = /* @__PURE__ */ new Re(), vi = /* @__PURE__ */ new Re(), cr = /* @__PURE__ */ new I(), Mi = /* @__PURE__ */ new I();
class Jt extends Ke {
  constructor(e = new kt(), t = new aa()) {
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
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), sr.copy(n.boundingSphere), sr.applyMatrix4(r), e.ray.intersectsSphere(sr) === !1) || (bs.copy(r).invert(), An.copy(e.ray).applyMatrix4(bs), n.boundingBox !== null && An.intersectsBox(n.boundingBox) === !1))
      return;
    let o;
    const a = n.index, c = n.attributes.position, l = n.morphAttributes.position, u = n.morphTargetsRelative, d = n.attributes.uv, f = n.attributes.uv2, m = n.groups, x = n.drawRange;
    if (a !== null)
      if (Array.isArray(i))
        for (let p = 0, h = m.length; p < h; p++) {
          const _ = m[p], T = i[_.materialIndex], b = Math.max(_.start, x.start), M = Math.min(a.count, Math.min(_.start + _.count, x.start + x.count));
          for (let w = b, C = M; w < C; w += 3) {
            const F = a.getX(w), g = a.getX(w + 1), E = a.getX(w + 2);
            o = Si(this, T, e, An, c, l, u, d, f, F, g, E), o && (o.faceIndex = Math.floor(w / 3), o.face.materialIndex = _.materialIndex, t.push(o));
          }
        }
      else {
        const p = Math.max(0, x.start), h = Math.min(a.count, x.start + x.count);
        for (let _ = p, T = h; _ < T; _ += 3) {
          const b = a.getX(_), M = a.getX(_ + 1), w = a.getX(_ + 2);
          o = Si(this, i, e, An, c, l, u, d, f, b, M, w), o && (o.faceIndex = Math.floor(_ / 3), t.push(o));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(i))
        for (let p = 0, h = m.length; p < h; p++) {
          const _ = m[p], T = i[_.materialIndex], b = Math.max(_.start, x.start), M = Math.min(c.count, Math.min(_.start + _.count, x.start + x.count));
          for (let w = b, C = M; w < C; w += 3) {
            const F = w, g = w + 1, E = w + 2;
            o = Si(this, T, e, An, c, l, u, d, f, F, g, E), o && (o.faceIndex = Math.floor(w / 3), o.face.materialIndex = _.materialIndex, t.push(o));
          }
        }
      else {
        const p = Math.max(0, x.start), h = Math.min(c.count, x.start + x.count);
        for (let _ = p, T = h; _ < T; _ += 3) {
          const b = _, M = _ + 1, w = _ + 2;
          o = Si(this, i, e, An, c, l, u, d, f, b, M, w), o && (o.faceIndex = Math.floor(_ / 3), t.push(o));
        }
      }
  }
}
function Fo(s, e, t, n, i, r, o, a) {
  let c;
  if (e.side === St ? c = n.intersectTriangle(o, r, i, !0, a) : c = n.intersectTriangle(i, r, o, e.side !== $t, a), c === null)
    return null;
  Mi.copy(a), Mi.applyMatrix4(s.matrixWorld);
  const l = t.ray.origin.distanceTo(Mi);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Mi.clone(),
    object: s
  };
}
function Si(s, e, t, n, i, r, o, a, c, l, u, d) {
  Yt.fromBufferAttribute(i, l), jt.fromBufferAttribute(i, u), Zt.fromBufferAttribute(i, d);
  const f = s.morphTargetInfluences;
  if (r && f) {
    pi.set(0, 0, 0), mi.set(0, 0, 0), gi.set(0, 0, 0);
    for (let x = 0, p = r.length; x < p; x++) {
      const h = f[x], _ = r[x];
      h !== 0 && (ar.fromBufferAttribute(_, l), or.fromBufferAttribute(_, u), lr.fromBufferAttribute(_, d), o ? (pi.addScaledVector(ar, h), mi.addScaledVector(or, h), gi.addScaledVector(lr, h)) : (pi.addScaledVector(ar.sub(Yt), h), mi.addScaledVector(or.sub(jt), h), gi.addScaledVector(lr.sub(Zt), h)));
    }
    Yt.add(pi), jt.add(mi), Zt.add(gi);
  }
  s.isSkinnedMesh && (s.boneTransform(l, Yt), s.boneTransform(u, jt), s.boneTransform(d, Zt));
  const m = Fo(s, e, t, n, Yt, jt, Zt, cr);
  if (m) {
    a && (_i.fromBufferAttribute(a, l), xi.fromBufferAttribute(a, u), vi.fromBufferAttribute(a, d), m.uv = Gt.getUV(cr, Yt, jt, Zt, _i, xi, vi, new Re())), c && (_i.fromBufferAttribute(c, l), xi.fromBufferAttribute(c, u), vi.fromBufferAttribute(c, d), m.uv2 = Gt.getUV(cr, Yt, jt, Zt, _i, xi, vi, new Re()));
    const x = {
      a: l,
      b: u,
      c: d,
      normal: new I(),
      materialIndex: 0
    };
    Gt.getNormal(Yt, jt, Zt, x.normal), m.face = x;
  }
  return m;
}
class ii extends kt {
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
    const c = [], l = [], u = [], d = [];
    let f = 0, m = 0;
    x("z", "y", "x", -1, -1, n, t, e, o, r, 0), x("z", "y", "x", 1, -1, n, t, -e, o, r, 1), x("x", "z", "y", 1, 1, e, n, t, i, o, 2), x("x", "z", "y", 1, -1, e, n, -t, i, o, 3), x("x", "y", "z", 1, -1, e, t, n, i, r, 4), x("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(c), this.setAttribute("position", new gt(l, 3)), this.setAttribute("normal", new gt(u, 3)), this.setAttribute("uv", new gt(d, 2));
    function x(p, h, _, T, b, M, w, C, F, g, E) {
      const D = M / F, q = w / g, Z = M / 2, N = w / 2, R = C / 2, W = F + 1, j = g + 1;
      let K = 0, X = 0;
      const Q = new I();
      for (let Y = 0; Y < j; Y++) {
        const G = Y * q - N;
        for (let U = 0; U < W; U++) {
          const ie = U * D - Z;
          Q[p] = ie * T, Q[h] = G * b, Q[_] = R, l.push(Q.x, Q.y, Q.z), Q[p] = 0, Q[h] = 0, Q[_] = C > 0 ? 1 : -1, u.push(Q.x, Q.y, Q.z), d.push(U / F), d.push(1 - Y / g), K += 1;
        }
      }
      for (let Y = 0; Y < g; Y++)
        for (let G = 0; G < F; G++) {
          const U = f + G + W * Y, ie = f + G + W * (Y + 1), ee = f + (G + 1) + W * (Y + 1), re = f + (G + 1) + W * Y;
          c.push(U, ie, re), c.push(ie, ee, re), X += 6;
        }
      a.addGroup(m, X, E), m += X, f += K;
    }
  }
  static fromJSON(e) {
    return new ii(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Gn(s) {
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
function at(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = Gn(s[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function No(s) {
  const e = [];
  for (let t = 0; t < s.length; t++)
    e.push(s[t].clone());
  return e;
}
function ca(s) {
  return s.getRenderTarget() === null && s.outputEncoding === Oe ? Lt : Kn;
}
const Uo = { clone: Gn, merge: at };
var zo = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Oo = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class _n extends kn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = zo, this.fragmentShader = Oo, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Gn(e.uniforms), this.uniformsGroups = No(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class ua extends Ke {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new He(), this.projectionMatrix = new He(), this.projectionMatrixInverse = new He();
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
class Et extends ua {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ds * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Vi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ds * 2 * Math.atan(
      Math.tan(Vi * 0.5 * this.fov) / this.zoom
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
    let t = e * Math.tan(Vi * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
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
const Cn = -90, Ln = 1;
class Bo extends Ke {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new Et(Cn, Ln, e, t);
    i.layers = this.layers, i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const r = new Et(Cn, Ln, e, t);
    r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), this.add(r);
    const o = new Et(Cn, Ln, e, t);
    o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(0, 1, 0), this.add(o);
    const a = new Et(Cn, Ln, e, t);
    a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(0, -1, 0), this.add(a);
    const c = new Et(Cn, Ln, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
    const l = new Et(Cn, Ln, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, r, o, a, c, l] = this.children, u = e.getRenderTarget(), d = e.toneMapping, f = e.xr.enabled;
    e.toneMapping = Vt, e.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, r), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(u), e.toneMapping = d, e.xr.enabled = f, n.texture.needsPMREMUpdate = !0;
  }
}
class ha extends mt {
  constructor(e, t, n, i, r, o, a, c, l, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : zn, super(e, t, n, i, r, o, a, c, l, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Go extends gn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new ha(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Mt;
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
    }, i = new ii(5, 5, 5), r = new _n({
      name: "CubemapFromEquirect",
      uniforms: Gn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: St,
      blending: Kt
    });
    r.uniforms.tEquirect.value = t;
    const o = new Jt(i, r), a = t.minFilter;
    return t.minFilter === Di && (t.minFilter = Mt), new Bo(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const ur = /* @__PURE__ */ new I(), Vo = /* @__PURE__ */ new I(), ko = /* @__PURE__ */ new pt();
class on {
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
    const i = ur.subVectors(n, t).cross(Vo.subVectors(e, t)).normalize();
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
    const n = e.delta(ur), i = this.normal.dot(n);
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
    const n = t || ko.getNormalMatrix(e), i = this.coplanarPoint(ur).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
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
const Dn = /* @__PURE__ */ new Ar(), yi = /* @__PURE__ */ new I();
class Cr {
  constructor(e = new on(), t = new on(), n = new on(), i = new on(), r = new on(), o = new on()) {
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
    const t = this.planes, n = e.elements, i = n[0], r = n[1], o = n[2], a = n[3], c = n[4], l = n[5], u = n[6], d = n[7], f = n[8], m = n[9], x = n[10], p = n[11], h = n[12], _ = n[13], T = n[14], b = n[15];
    return t[0].setComponents(a - i, d - c, p - f, b - h).normalize(), t[1].setComponents(a + i, d + c, p + f, b + h).normalize(), t[2].setComponents(a + r, d + l, p + m, b + _).normalize(), t[3].setComponents(a - r, d - l, p - m, b - _).normalize(), t[4].setComponents(a - o, d - u, p - x, b - T).normalize(), t[5].setComponents(a + o, d + u, p + x, b + T).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), Dn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Dn);
  }
  intersectsSprite(e) {
    return Dn.center.set(0, 0, 0), Dn.radius = 0.7071067811865476, Dn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Dn);
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
      if (yi.x = i.normal.x > 0 ? e.max.x : e.min.x, yi.y = i.normal.y > 0 ? e.max.y : e.min.y, yi.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(yi) < 0)
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
function da() {
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
function Wo(s, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(l, u) {
    const d = l.array, f = l.usage, m = s.createBuffer();
    s.bindBuffer(u, m), s.bufferData(u, d, f), l.onUploadCallback();
    let x;
    if (d instanceof Float32Array)
      x = 5126;
    else if (d instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          x = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        x = 5123;
    else if (d instanceof Int16Array)
      x = 5122;
    else if (d instanceof Uint32Array)
      x = 5125;
    else if (d instanceof Int32Array)
      x = 5124;
    else if (d instanceof Int8Array)
      x = 5120;
    else if (d instanceof Uint8Array)
      x = 5121;
    else if (d instanceof Uint8ClampedArray)
      x = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + d);
    return {
      buffer: m,
      type: x,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function r(l, u, d) {
    const f = u.array, m = u.updateRange;
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
    ), m.count = -1), u.onUploadCallback();
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u && (s.deleteBuffer(u.buffer), n.delete(l));
  }
  function c(l, u) {
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
    d === void 0 ? n.set(l, i(l, u)) : d.version < l.version && (r(d.buffer, l, u), d.version = l.version);
  }
  return {
    get: o,
    remove: a,
    update: c
  };
}
class Lr extends kt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(i), l = a + 1, u = c + 1, d = e / a, f = t / c, m = [], x = [], p = [], h = [];
    for (let _ = 0; _ < u; _++) {
      const T = _ * f - o;
      for (let b = 0; b < l; b++) {
        const M = b * d - r;
        x.push(M, -T, 0), p.push(0, 0, 1), h.push(b / a), h.push(1 - _ / c);
      }
    }
    for (let _ = 0; _ < c; _++)
      for (let T = 0; T < a; T++) {
        const b = T + l * _, M = T + l * (_ + 1), w = T + 1 + l * (_ + 1), C = T + 1 + l * _;
        m.push(b, M, C), m.push(M, w, C);
      }
    this.setIndex(m), this.setAttribute("position", new gt(x, 3)), this.setAttribute("normal", new gt(p, 3)), this.setAttribute("uv", new gt(h, 2));
  }
  static fromJSON(e) {
    return new Lr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Ho = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, Xo = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, qo = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Yo = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, jo = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Zo = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, $o = "vec3 transformed = vec3( position );", Jo = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ko = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`, Qo = `#ifdef USE_IRIDESCENCE
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
#endif`, el = `#ifdef USE_BUMPMAP
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
#endif`, tl = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, nl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, il = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, rl = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, sl = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, al = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, ol = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, ll = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, cl = `#define PI 3.141592653589793
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
}`, ul = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, hl = `vec3 transformedNormal = objectNormal;
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
#endif`, dl = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, fl = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, pl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, ml = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, gl = "gl_FragColor = linearToOutputTexel( gl_FragColor );", _l = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, xl = `#ifdef USE_ENVMAP
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
#endif`, vl = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Ml = `#ifdef USE_ENVMAP
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
#endif`, Sl = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, yl = `#ifdef USE_ENVMAP
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
#endif`, bl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, wl = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Tl = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, El = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Al = `#ifdef USE_GRADIENTMAP
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
}`, Cl = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Ll = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Dl = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Rl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Pl = `uniform bool receiveShadow;
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
#endif`, Il = `#if defined( USE_ENVMAP )
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
#endif`, Fl = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Nl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Ul = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, zl = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Ol = `PhysicalMaterial material;
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
#endif`, Bl = `struct PhysicalMaterial {
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
}`, Gl = `
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
#endif`, Vl = `#if defined( RE_IndirectDiffuse )
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
#endif`, kl = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Wl = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Hl = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Xl = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, ql = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Yl = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, jl = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Zl = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, $l = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Jl = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Kl = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Ql = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, ec = `#ifdef USE_MORPHNORMALS
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
#endif`, tc = `#ifdef USE_MORPHTARGETS
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
#endif`, nc = `#ifdef USE_MORPHTARGETS
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
#endif`, ic = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`, rc = `#ifdef OBJECTSPACE_NORMALMAP
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
#endif`, sc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, ac = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, oc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, lc = `#ifdef USE_NORMALMAP
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
#endif`, cc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, uc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, hc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, dc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, fc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, pc = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, mc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, gc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, _c = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, xc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, vc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Mc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Sc = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, yc = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, bc = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, wc = `float getShadowMask() {
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
}`, Tc = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Ec = `#ifdef USE_SKINNING
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
#endif`, Ac = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Cc = `#ifdef USE_SKINNING
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
#endif`, Lc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Dc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Rc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Pc = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Ic = `#ifdef USE_TRANSMISSION
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
#endif`, Fc = `#ifdef USE_TRANSMISSION
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
#endif`, Nc = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, Uc = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, zc = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, Oc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, Bc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, Gc = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, Vc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const kc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Wc = `uniform sampler2D t2D;
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
}`, Hc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Xc = `#ifdef ENVMAP_TYPE_CUBE
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
}`, qc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Yc = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, jc = `#include <common>
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
}`, Zc = `#if DEPTH_PACKING == 3200
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
}`, $c = `#define DISTANCE
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
}`, Jc = `#define DISTANCE
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
}`, Kc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Qc = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, eu = `uniform float scale;
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
}`, tu = `uniform vec3 diffuse;
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
}`, nu = `#include <common>
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
}`, iu = `uniform vec3 diffuse;
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
}`, ru = `#define LAMBERT
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
}`, su = `#define LAMBERT
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
}`, au = `#define MATCAP
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
}`, ou = `#define MATCAP
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
}`, lu = `#define NORMAL
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
}`, cu = `#define NORMAL
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
}`, uu = `#define PHONG
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
}`, hu = `#define PHONG
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
}`, du = `#define STANDARD
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
}`, fu = `#define STANDARD
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
}`, pu = `#define TOON
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
}`, mu = `#define TOON
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
}`, gu = `uniform float size;
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
}`, _u = `uniform vec3 diffuse;
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
}`, xu = `#include <common>
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
}`, vu = `uniform vec3 color;
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
}`, Mu = `uniform float rotation;
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
}`, Su = `uniform vec3 diffuse;
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
  alphamap_fragment: Ho,
  alphamap_pars_fragment: Xo,
  alphatest_fragment: qo,
  alphatest_pars_fragment: Yo,
  aomap_fragment: jo,
  aomap_pars_fragment: Zo,
  begin_vertex: $o,
  beginnormal_vertex: Jo,
  bsdfs: Ko,
  iridescence_fragment: Qo,
  bumpmap_pars_fragment: el,
  clipping_planes_fragment: tl,
  clipping_planes_pars_fragment: nl,
  clipping_planes_pars_vertex: il,
  clipping_planes_vertex: rl,
  color_fragment: sl,
  color_pars_fragment: al,
  color_pars_vertex: ol,
  color_vertex: ll,
  common: cl,
  cube_uv_reflection_fragment: ul,
  defaultnormal_vertex: hl,
  displacementmap_pars_vertex: dl,
  displacementmap_vertex: fl,
  emissivemap_fragment: pl,
  emissivemap_pars_fragment: ml,
  encodings_fragment: gl,
  encodings_pars_fragment: _l,
  envmap_fragment: xl,
  envmap_common_pars_fragment: vl,
  envmap_pars_fragment: Ml,
  envmap_pars_vertex: Sl,
  envmap_physical_pars_fragment: Il,
  envmap_vertex: yl,
  fog_vertex: bl,
  fog_pars_vertex: wl,
  fog_fragment: Tl,
  fog_pars_fragment: El,
  gradientmap_pars_fragment: Al,
  lightmap_fragment: Cl,
  lightmap_pars_fragment: Ll,
  lights_lambert_fragment: Dl,
  lights_lambert_pars_fragment: Rl,
  lights_pars_begin: Pl,
  lights_toon_fragment: Fl,
  lights_toon_pars_fragment: Nl,
  lights_phong_fragment: Ul,
  lights_phong_pars_fragment: zl,
  lights_physical_fragment: Ol,
  lights_physical_pars_fragment: Bl,
  lights_fragment_begin: Gl,
  lights_fragment_maps: Vl,
  lights_fragment_end: kl,
  logdepthbuf_fragment: Wl,
  logdepthbuf_pars_fragment: Hl,
  logdepthbuf_pars_vertex: Xl,
  logdepthbuf_vertex: ql,
  map_fragment: Yl,
  map_pars_fragment: jl,
  map_particle_fragment: Zl,
  map_particle_pars_fragment: $l,
  metalnessmap_fragment: Jl,
  metalnessmap_pars_fragment: Kl,
  morphcolor_vertex: Ql,
  morphnormal_vertex: ec,
  morphtarget_pars_vertex: tc,
  morphtarget_vertex: nc,
  normal_fragment_begin: ic,
  normal_fragment_maps: rc,
  normal_pars_fragment: sc,
  normal_pars_vertex: ac,
  normal_vertex: oc,
  normalmap_pars_fragment: lc,
  clearcoat_normal_fragment_begin: cc,
  clearcoat_normal_fragment_maps: uc,
  clearcoat_pars_fragment: hc,
  iridescence_pars_fragment: dc,
  output_fragment: fc,
  packing: pc,
  premultiplied_alpha_fragment: mc,
  project_vertex: gc,
  dithering_fragment: _c,
  dithering_pars_fragment: xc,
  roughnessmap_fragment: vc,
  roughnessmap_pars_fragment: Mc,
  shadowmap_pars_fragment: Sc,
  shadowmap_pars_vertex: yc,
  shadowmap_vertex: bc,
  shadowmask_pars_fragment: wc,
  skinbase_vertex: Tc,
  skinning_pars_vertex: Ec,
  skinning_vertex: Ac,
  skinnormal_vertex: Cc,
  specularmap_fragment: Lc,
  specularmap_pars_fragment: Dc,
  tonemapping_fragment: Rc,
  tonemapping_pars_fragment: Pc,
  transmission_fragment: Ic,
  transmission_pars_fragment: Fc,
  uv_pars_fragment: Nc,
  uv_pars_vertex: Uc,
  uv_vertex: zc,
  uv2_pars_fragment: Oc,
  uv2_pars_vertex: Bc,
  uv2_vertex: Gc,
  worldpos_vertex: Vc,
  background_vert: kc,
  background_frag: Wc,
  backgroundCube_vert: Hc,
  backgroundCube_frag: Xc,
  cube_vert: qc,
  cube_frag: Yc,
  depth_vert: jc,
  depth_frag: Zc,
  distanceRGBA_vert: $c,
  distanceRGBA_frag: Jc,
  equirect_vert: Kc,
  equirect_frag: Qc,
  linedashed_vert: eu,
  linedashed_frag: tu,
  meshbasic_vert: nu,
  meshbasic_frag: iu,
  meshlambert_vert: ru,
  meshlambert_frag: su,
  meshmatcap_vert: au,
  meshmatcap_frag: ou,
  meshnormal_vert: lu,
  meshnormal_frag: cu,
  meshphong_vert: uu,
  meshphong_frag: hu,
  meshphysical_vert: du,
  meshphysical_frag: fu,
  meshtoon_vert: pu,
  meshtoon_frag: mu,
  points_vert: gu,
  points_frag: _u,
  shadow_vert: xu,
  shadow_frag: vu,
  sprite_vert: Mu,
  sprite_frag: Su
}, ne = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ie(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new pt() },
    uv2Transform: { value: /* @__PURE__ */ new pt() },
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
    normalScale: { value: /* @__PURE__ */ new Re(1, 1) }
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
    fogColor: { value: /* @__PURE__ */ new Ie(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new Ie(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new pt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ie(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Re(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new pt() }
  }
}, Dt = {
  basic: {
    uniforms: /* @__PURE__ */ at([
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
    uniforms: /* @__PURE__ */ at([
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
        emissive: { value: /* @__PURE__ */ new Ie(0) }
      }
    ]),
    vertexShader: Se.meshlambert_vert,
    fragmentShader: Se.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ at([
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
        emissive: { value: /* @__PURE__ */ new Ie(0) },
        specular: { value: /* @__PURE__ */ new Ie(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Se.meshphong_vert,
    fragmentShader: Se.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ at([
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
        emissive: { value: /* @__PURE__ */ new Ie(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Se.meshphysical_vert,
    fragmentShader: Se.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ at([
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
        emissive: { value: /* @__PURE__ */ new Ie(0) }
      }
    ]),
    vertexShader: Se.meshtoon_vert,
    fragmentShader: Se.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ at([
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
    uniforms: /* @__PURE__ */ at([
      ne.points,
      ne.fog
    ]),
    vertexShader: Se.points_vert,
    fragmentShader: Se.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ at([
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
    uniforms: /* @__PURE__ */ at([
      ne.common,
      ne.displacementmap
    ]),
    vertexShader: Se.depth_vert,
    fragmentShader: Se.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ at([
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
    uniforms: /* @__PURE__ */ at([
      ne.sprite,
      ne.fog
    ]),
    vertexShader: Se.sprite_vert,
    fragmentShader: Se.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new pt() },
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
    uniforms: /* @__PURE__ */ at([
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
    uniforms: /* @__PURE__ */ at([
      ne.lights,
      ne.fog,
      {
        color: { value: /* @__PURE__ */ new Ie(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Se.shadow_vert,
    fragmentShader: Se.shadow_frag
  }
};
Dt.physical = {
  uniforms: /* @__PURE__ */ at([
    Dt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Re(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ie(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Re() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ie(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new Ie(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: Se.meshphysical_vert,
  fragmentShader: Se.meshphysical_frag
};
const bi = { r: 0, b: 0, g: 0 };
function yu(s, e, t, n, i, r, o) {
  const a = new Ie(0);
  let c = r === !0 ? 0 : 1, l, u, d = null, f = 0, m = null;
  function x(h, _) {
    let T = !1, b = _.isScene === !0 ? _.background : null;
    b && b.isTexture && (b = (_.backgroundBlurriness > 0 ? t : e).get(b));
    const M = s.xr, w = M.getSession && M.getSession();
    w && w.environmentBlendMode === "additive" && (b = null), b === null ? p(a, c) : b && b.isColor && (p(b, 1), T = !0), (s.autoClear || T) && s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil), b && (b.isCubeTexture || b.mapping === Li) ? (u === void 0 && (u = new Jt(
      new ii(1, 1, 1),
      new _n({
        name: "BackgroundCubeMaterial",
        uniforms: Gn(Dt.backgroundCube.uniforms),
        vertexShader: Dt.backgroundCube.vertexShader,
        fragmentShader: Dt.backgroundCube.fragmentShader,
        side: St,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(C, F, g) {
      this.matrixWorld.copyPosition(g.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(u)), u.material.uniforms.envMap.value = b, u.material.uniforms.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, (d !== b || f !== b.version || m !== s.toneMapping) && (u.material.needsUpdate = !0, d = b, f = b.version, m = s.toneMapping), u.layers.enableAll(), h.unshift(u, u.geometry, u.material, 0, 0, null)) : b && b.isTexture && (l === void 0 && (l = new Jt(
      new Lr(2, 2),
      new _n({
        name: "BackgroundMaterial",
        uniforms: Gn(Dt.background.uniforms),
        vertexShader: Dt.background.vertexShader,
        fragmentShader: Dt.background.fragmentShader,
        side: Un,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = b, l.material.uniforms.backgroundIntensity.value = _.backgroundIntensity, b.matrixAutoUpdate === !0 && b.updateMatrix(), l.material.uniforms.uvTransform.value.copy(b.matrix), (d !== b || f !== b.version || m !== s.toneMapping) && (l.material.needsUpdate = !0, d = b, f = b.version, m = s.toneMapping), l.layers.enableAll(), h.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(h, _) {
    h.getRGB(bi, ca(s)), n.buffers.color.setClear(bi.r, bi.g, bi.b, _, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(h, _ = 1) {
      a.set(h), c = _, p(a, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(h) {
      c = h, p(a, c);
    },
    render: x
  };
}
function bu(s, e, t, n) {
  const i = s.getParameter(34921), r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || r !== null, a = {}, c = h(null);
  let l = c, u = !1;
  function d(R, W, j, K, X) {
    let Q = !1;
    if (o) {
      const Y = p(K, j, W);
      l !== Y && (l = Y, m(l.object)), Q = _(R, K, j, X), Q && T(R, K, j, X);
    } else {
      const Y = W.wireframe === !0;
      (l.geometry !== K.id || l.program !== j.id || l.wireframe !== Y) && (l.geometry = K.id, l.program = j.id, l.wireframe = Y, Q = !0);
    }
    X !== null && t.update(X, 34963), (Q || u) && (u = !1, g(R, W, j, K), X !== null && s.bindBuffer(34963, t.get(X).buffer));
  }
  function f() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function m(R) {
    return n.isWebGL2 ? s.bindVertexArray(R) : r.bindVertexArrayOES(R);
  }
  function x(R) {
    return n.isWebGL2 ? s.deleteVertexArray(R) : r.deleteVertexArrayOES(R);
  }
  function p(R, W, j) {
    const K = j.wireframe === !0;
    let X = a[R.id];
    X === void 0 && (X = {}, a[R.id] = X);
    let Q = X[W.id];
    Q === void 0 && (Q = {}, X[W.id] = Q);
    let Y = Q[K];
    return Y === void 0 && (Y = h(f()), Q[K] = Y), Y;
  }
  function h(R) {
    const W = [], j = [], K = [];
    for (let X = 0; X < i; X++)
      W[X] = 0, j[X] = 0, K[X] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: W,
      enabledAttributes: j,
      attributeDivisors: K,
      object: R,
      attributes: {},
      index: null
    };
  }
  function _(R, W, j, K) {
    const X = l.attributes, Q = W.attributes;
    let Y = 0;
    const G = j.getAttributes();
    for (const U in G)
      if (G[U].location >= 0) {
        const ee = X[U];
        let re = Q[U];
        if (re === void 0 && (U === "instanceMatrix" && R.instanceMatrix && (re = R.instanceMatrix), U === "instanceColor" && R.instanceColor && (re = R.instanceColor)), ee === void 0 || ee.attribute !== re || re && ee.data !== re.data)
          return !0;
        Y++;
      }
    return l.attributesNum !== Y || l.index !== K;
  }
  function T(R, W, j, K) {
    const X = {}, Q = W.attributes;
    let Y = 0;
    const G = j.getAttributes();
    for (const U in G)
      if (G[U].location >= 0) {
        let ee = Q[U];
        ee === void 0 && (U === "instanceMatrix" && R.instanceMatrix && (ee = R.instanceMatrix), U === "instanceColor" && R.instanceColor && (ee = R.instanceColor));
        const re = {};
        re.attribute = ee, ee && ee.data && (re.data = ee.data), X[U] = re, Y++;
      }
    l.attributes = X, l.attributesNum = Y, l.index = K;
  }
  function b() {
    const R = l.newAttributes;
    for (let W = 0, j = R.length; W < j; W++)
      R[W] = 0;
  }
  function M(R) {
    w(R, 0);
  }
  function w(R, W) {
    const j = l.newAttributes, K = l.enabledAttributes, X = l.attributeDivisors;
    j[R] = 1, K[R] === 0 && (s.enableVertexAttribArray(R), K[R] = 1), X[R] !== W && ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](R, W), X[R] = W);
  }
  function C() {
    const R = l.newAttributes, W = l.enabledAttributes;
    for (let j = 0, K = W.length; j < K; j++)
      W[j] !== R[j] && (s.disableVertexAttribArray(j), W[j] = 0);
  }
  function F(R, W, j, K, X, Q) {
    n.isWebGL2 === !0 && (j === 5124 || j === 5125) ? s.vertexAttribIPointer(R, W, j, X, Q) : s.vertexAttribPointer(R, W, j, K, X, Q);
  }
  function g(R, W, j, K) {
    if (n.isWebGL2 === !1 && (R.isInstancedMesh || K.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    b();
    const X = K.attributes, Q = j.getAttributes(), Y = W.defaultAttributeValues;
    for (const G in Q) {
      const U = Q[G];
      if (U.location >= 0) {
        let ie = X[G];
        if (ie === void 0 && (G === "instanceMatrix" && R.instanceMatrix && (ie = R.instanceMatrix), G === "instanceColor" && R.instanceColor && (ie = R.instanceColor)), ie !== void 0) {
          const ee = ie.normalized, re = ie.itemSize, k = t.get(ie);
          if (k === void 0)
            continue;
          const Ce = k.buffer, ce = k.type, xe = k.bytesPerElement;
          if (ie.isInterleavedBufferAttribute) {
            const le = ie.data, Fe = le.stride, ye = ie.offset;
            if (le.isInstancedInterleavedBuffer) {
              for (let _e = 0; _e < U.locationSize; _e++)
                w(U.location + _e, le.meshPerAttribute);
              R.isInstancedMesh !== !0 && K._maxInstanceCount === void 0 && (K._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let _e = 0; _e < U.locationSize; _e++)
                M(U.location + _e);
            s.bindBuffer(34962, Ce);
            for (let _e = 0; _e < U.locationSize; _e++)
              F(
                U.location + _e,
                re / U.locationSize,
                ce,
                ee,
                Fe * xe,
                (ye + re / U.locationSize * _e) * xe
              );
          } else {
            if (ie.isInstancedBufferAttribute) {
              for (let le = 0; le < U.locationSize; le++)
                w(U.location + le, ie.meshPerAttribute);
              R.isInstancedMesh !== !0 && K._maxInstanceCount === void 0 && (K._maxInstanceCount = ie.meshPerAttribute * ie.count);
            } else
              for (let le = 0; le < U.locationSize; le++)
                M(U.location + le);
            s.bindBuffer(34962, Ce);
            for (let le = 0; le < U.locationSize; le++)
              F(
                U.location + le,
                re / U.locationSize,
                ce,
                ee,
                re * xe,
                re / U.locationSize * le * xe
              );
          }
        } else if (Y !== void 0) {
          const ee = Y[G];
          if (ee !== void 0)
            switch (ee.length) {
              case 2:
                s.vertexAttrib2fv(U.location, ee);
                break;
              case 3:
                s.vertexAttrib3fv(U.location, ee);
                break;
              case 4:
                s.vertexAttrib4fv(U.location, ee);
                break;
              default:
                s.vertexAttrib1fv(U.location, ee);
            }
        }
      }
    }
    C();
  }
  function E() {
    Z();
    for (const R in a) {
      const W = a[R];
      for (const j in W) {
        const K = W[j];
        for (const X in K)
          x(K[X].object), delete K[X];
        delete W[j];
      }
      delete a[R];
    }
  }
  function D(R) {
    if (a[R.id] === void 0)
      return;
    const W = a[R.id];
    for (const j in W) {
      const K = W[j];
      for (const X in K)
        x(K[X].object), delete K[X];
      delete W[j];
    }
    delete a[R.id];
  }
  function q(R) {
    for (const W in a) {
      const j = a[W];
      if (j[R.id] === void 0)
        continue;
      const K = j[R.id];
      for (const X in K)
        x(K[X].object), delete K[X];
      delete j[R.id];
    }
  }
  function Z() {
    N(), u = !0, l !== c && (l = c, m(l.object));
  }
  function N() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: d,
    reset: Z,
    resetDefaultState: N,
    dispose: E,
    releaseStatesOfGeometry: D,
    releaseStatesOfProgram: q,
    initAttributes: b,
    enableAttribute: M,
    disableUnusedAttributes: C
  };
}
function wu(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(l) {
    r = l;
  }
  function a(l, u) {
    s.drawArrays(r, l, u), t.update(u, r, 1);
  }
  function c(l, u, d) {
    if (d === 0)
      return;
    let f, m;
    if (i)
      f = s, m = "drawArraysInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", f === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[m](r, l, u, d), t.update(u, r, d);
  }
  this.setMode = o, this.render = a, this.renderInstances = c;
}
function Tu(s, e, t) {
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
  const l = o || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, d = s.getParameter(34930), f = s.getParameter(35660), m = s.getParameter(3379), x = s.getParameter(34076), p = s.getParameter(34921), h = s.getParameter(36347), _ = s.getParameter(36348), T = s.getParameter(36349), b = f > 0, M = o || e.has("OES_texture_float"), w = b && M, C = o ? s.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: f,
    maxTextureSize: m,
    maxCubemapSize: x,
    maxAttributes: p,
    maxVertexUniforms: h,
    maxVaryings: _,
    maxFragmentUniforms: T,
    vertexTextures: b,
    floatFragmentTextures: M,
    floatVertexTextures: w,
    maxSamples: C
  };
}
function Eu(s) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const o = new on(), a = new pt(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f, m) {
    const x = d.length !== 0 || f || n !== 0 || i;
    return i = f, t = u(d, m, 0), n = d.length, x;
  }, this.beginShadows = function() {
    r = !0, u(null);
  }, this.endShadows = function() {
    r = !1, l();
  }, this.setState = function(d, f, m) {
    const x = d.clippingPlanes, p = d.clipIntersection, h = d.clipShadows, _ = s.get(d);
    if (!i || x === null || x.length === 0 || r && !h)
      r ? u(null) : l();
    else {
      const T = r ? 0 : n, b = T * 4;
      let M = _.clippingState || null;
      c.value = M, M = u(x, f, b, m);
      for (let w = 0; w !== b; ++w)
        M[w] = t[w];
      _.clippingState = M, this.numIntersection = p ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(d, f, m, x) {
    const p = d !== null ? d.length : 0;
    let h = null;
    if (p !== 0) {
      if (h = c.value, x !== !0 || h === null) {
        const _ = m + p * 4, T = f.matrixWorldInverse;
        a.getNormalMatrix(T), (h === null || h.length < _) && (h = new Float32Array(_));
        for (let b = 0, M = m; b !== p; ++b, M += 4)
          o.copy(d[b]).applyMatrix4(T, a), o.normal.toArray(h, M), h[M + 3] = o.constant;
      }
      c.value = h, c.needsUpdate = !0;
    }
    return e.numPlanes = p, e.numIntersection = 0, h;
  }
}
function Au(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === _r ? o.mapping = zn : a === xr && (o.mapping = On), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === _r || a === xr)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new Go(c.height / 2);
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
class fa extends ua {
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
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, o = r + l * this.view.width, a -= u * this.view.offsetY, c = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const In = 4, ws = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], cn = 20, hr = /* @__PURE__ */ new fa(), Ts = /* @__PURE__ */ new Ie();
let dr = null;
const ln = (1 + Math.sqrt(5)) / 2, Rn = 1 / ln, Es = [
  /* @__PURE__ */ new I(1, 1, 1),
  /* @__PURE__ */ new I(-1, 1, 1),
  /* @__PURE__ */ new I(1, 1, -1),
  /* @__PURE__ */ new I(-1, 1, -1),
  /* @__PURE__ */ new I(0, ln, Rn),
  /* @__PURE__ */ new I(0, ln, -Rn),
  /* @__PURE__ */ new I(Rn, 0, ln),
  /* @__PURE__ */ new I(-Rn, 0, ln),
  /* @__PURE__ */ new I(ln, Rn, 0),
  /* @__PURE__ */ new I(-ln, Rn, 0)
];
class As {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    dr = this._renderer.getRenderTarget(), this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Ds(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ls(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(dr), e.scissorTest = !1, wi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === zn || e.mapping === On ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), dr = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Mt,
      minFilter: Mt,
      generateMipmaps: !1,
      type: Jn,
      format: Ct,
      encoding: mn,
      depthBuffer: !1
    }, i = Cs(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Cs(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Cu(r)), this._blurMaterial = Lu(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Jt(this._lodPlanes[0], e);
    this._renderer.compile(t, hr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Et(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, f = u.toneMapping;
    u.getClearColor(Ts), u.toneMapping = Vt, u.autoClear = !1;
    const m = new aa({
      name: "PMREM.Background",
      side: St,
      depthWrite: !1,
      depthTest: !1
    }), x = new Jt(new ii(), m);
    let p = !1;
    const h = e.background;
    h ? h.isColor && (m.color.copy(h), e.background = null, p = !0) : (m.color.copy(Ts), p = !0);
    for (let _ = 0; _ < 6; _++) {
      const T = _ % 3;
      T === 0 ? (a.up.set(0, c[_], 0), a.lookAt(l[_], 0, 0)) : T === 1 ? (a.up.set(0, 0, c[_]), a.lookAt(0, l[_], 0)) : (a.up.set(0, c[_], 0), a.lookAt(0, 0, l[_]));
      const b = this._cubeSize;
      wi(i, T * b, _ > 2 ? b : 0, b, b), u.setRenderTarget(i), p && u.render(x, a), u.render(e, a);
    }
    x.geometry.dispose(), x.material.dispose(), u.toneMapping = f, u.autoClear = d, e.background = h;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === zn || e.mapping === On;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ds()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ls());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new Jt(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    wi(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, hr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), o = Es[(i - 1) % Es.length];
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
    const u = 3, d = new Jt(this._lodPlanes[i], l), f = l.uniforms, m = this._sizeLods[n] - 1, x = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * cn - 1), p = r / x, h = isFinite(r) ? 1 + Math.floor(u * p) : cn;
    h > cn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${cn}`);
    const _ = [];
    let T = 0;
    for (let F = 0; F < cn; ++F) {
      const g = F / p, E = Math.exp(-g * g / 2);
      _.push(E), F === 0 ? T += E : F < h && (T += 2 * E);
    }
    for (let F = 0; F < _.length; F++)
      _[F] = _[F] / T;
    f.envMap.value = e.texture, f.samples.value = h, f.weights.value = _, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: b } = this;
    f.dTheta.value = x, f.mipInt.value = b - n;
    const M = this._sizeLods[i], w = 3 * M * (i > b - In ? i - b + In : 0), C = 4 * (this._cubeSize - M);
    wi(t, w, C, 3 * M, 2 * M), c.setRenderTarget(t), c.render(d, hr);
  }
}
function Cu(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - In + 1 + ws.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let c = 1 / a;
    o > s - In ? c = ws[o - s + In - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), u = -l, d = 1 + l, f = [u, u, d, u, d, d, u, u, d, d, u, d], m = 6, x = 6, p = 3, h = 2, _ = 1, T = new Float32Array(p * x * m), b = new Float32Array(h * x * m), M = new Float32Array(_ * x * m);
    for (let C = 0; C < m; C++) {
      const F = C % 3 * 2 / 3 - 1, g = C > 2 ? 0 : -1, E = [
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
      T.set(E, p * x * C), b.set(f, h * x * C);
      const D = [C, C, C, C, C, C];
      M.set(D, _ * x * C);
    }
    const w = new kt();
    w.setAttribute("position", new Rt(T, p)), w.setAttribute("uv", new Rt(b, h)), w.setAttribute("faceIndex", new Rt(M, _)), e.push(w), i > In && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Cs(s, e, t) {
  const n = new gn(s, e, t);
  return n.texture.mapping = Li, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function wi(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function Lu(s, e, t) {
  const n = new Float32Array(cn), i = new I(0, 1, 0);
  return new _n({
    name: "SphericalGaussianBlur",
    defines: {
      n: cn,
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
    vertexShader: Dr(),
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
function Ls() {
  return new _n({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Dr(),
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
function Ds() {
  return new _n({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Dr(),
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
function Dr() {
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
function Du(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === _r || c === xr, u = c === zn || c === On;
      if (l || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let d = e.get(a);
          return t === null && (t = new As(s)), d = l ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d), e.set(a, d), d.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const d = a.image;
            if (l && d && d.height > 0 || u && d && i(d)) {
              t === null && (t = new As(s));
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
    for (let u = 0; u < l; u++)
      a[u] !== void 0 && c++;
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
function Ru(s) {
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
function Pu(s, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function o(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const x in f.attributes)
      e.remove(f.attributes[x]);
    f.removeEventListener("dispose", o), delete i[f.id];
    const m = r.get(f);
    m && (e.remove(m), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(d, f) {
    return i[f.id] === !0 || (f.addEventListener("dispose", o), i[f.id] = !0, t.memory.geometries++), f;
  }
  function c(d) {
    const f = d.attributes;
    for (const x in f)
      e.update(f[x], 34962);
    const m = d.morphAttributes;
    for (const x in m) {
      const p = m[x];
      for (let h = 0, _ = p.length; h < _; h++)
        e.update(p[h], 34962);
    }
  }
  function l(d) {
    const f = [], m = d.index, x = d.attributes.position;
    let p = 0;
    if (m !== null) {
      const T = m.array;
      p = m.version;
      for (let b = 0, M = T.length; b < M; b += 3) {
        const w = T[b + 0], C = T[b + 1], F = T[b + 2];
        f.push(w, C, C, F, F, w);
      }
    } else {
      const T = x.array;
      p = x.version;
      for (let b = 0, M = T.length / 3 - 1; b < M; b += 3) {
        const w = b + 0, C = b + 1, F = b + 2;
        f.push(w, C, C, F, F, w);
      }
    }
    const h = new (ea(f) ? la : oa)(f, 1);
    h.version = p;
    const _ = r.get(d);
    _ && e.remove(_), r.set(d, h);
  }
  function u(d) {
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
    getWireframeAttribute: u
  };
}
function Iu(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(f) {
    r = f;
  }
  let a, c;
  function l(f) {
    a = f.type, c = f.bytesPerElement;
  }
  function u(f, m) {
    s.drawElements(r, m, a, f * c), t.update(m, r, 1);
  }
  function d(f, m, x) {
    if (x === 0)
      return;
    let p, h;
    if (i)
      p = s, h = "drawElementsInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), h = "drawElementsInstancedANGLE", p === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[h](r, m, a, f * c, x), t.update(m, r, x);
  }
  this.setMode = o, this.setIndex = l, this.render = u, this.renderInstances = d;
}
function Fu(s) {
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
function Nu(s, e) {
  return s[0] - e[0];
}
function Uu(s, e) {
  return Math.abs(e[1]) - Math.abs(s[1]);
}
function zu(s, e, t) {
  const n = {}, i = new Float32Array(8), r = /* @__PURE__ */ new WeakMap(), o = new Je(), a = [];
  for (let l = 0; l < 8; l++)
    a[l] = [l, 0];
  function c(l, u, d, f) {
    const m = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const x = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, p = x !== void 0 ? x.length : 0;
      let h = r.get(u);
      if (h === void 0 || h.count !== p) {
        let W = function() {
          N.dispose(), r.delete(u), u.removeEventListener("dispose", W);
        };
        h !== void 0 && h.texture.dispose();
        const b = u.morphAttributes.position !== void 0, M = u.morphAttributes.normal !== void 0, w = u.morphAttributes.color !== void 0, C = u.morphAttributes.position || [], F = u.morphAttributes.normal || [], g = u.morphAttributes.color || [];
        let E = 0;
        b === !0 && (E = 1), M === !0 && (E = 2), w === !0 && (E = 3);
        let D = u.attributes.position.count * E, q = 1;
        D > e.maxTextureSize && (q = Math.ceil(D / e.maxTextureSize), D = e.maxTextureSize);
        const Z = new Float32Array(D * q * 4 * p), N = new ra(Z, D, q, p);
        N.type = hn, N.needsUpdate = !0;
        const R = E * 4;
        for (let j = 0; j < p; j++) {
          const K = C[j], X = F[j], Q = g[j], Y = D * q * 4 * j;
          for (let G = 0; G < K.count; G++) {
            const U = G * R;
            b === !0 && (o.fromBufferAttribute(K, G), Z[Y + U + 0] = o.x, Z[Y + U + 1] = o.y, Z[Y + U + 2] = o.z, Z[Y + U + 3] = 0), M === !0 && (o.fromBufferAttribute(X, G), Z[Y + U + 4] = o.x, Z[Y + U + 5] = o.y, Z[Y + U + 6] = o.z, Z[Y + U + 7] = 0), w === !0 && (o.fromBufferAttribute(Q, G), Z[Y + U + 8] = o.x, Z[Y + U + 9] = o.y, Z[Y + U + 10] = o.z, Z[Y + U + 11] = Q.itemSize === 4 ? o.w : 1);
          }
        }
        h = {
          count: p,
          texture: N,
          size: new Re(D, q)
        }, r.set(u, h), u.addEventListener("dispose", W);
      }
      let _ = 0;
      for (let b = 0; b < m.length; b++)
        _ += m[b];
      const T = u.morphTargetsRelative ? 1 : 1 - _;
      f.getUniforms().setValue(s, "morphTargetBaseInfluence", T), f.getUniforms().setValue(s, "morphTargetInfluences", m), f.getUniforms().setValue(s, "morphTargetsTexture", h.texture, t), f.getUniforms().setValue(s, "morphTargetsTextureSize", h.size);
    } else {
      const x = m === void 0 ? 0 : m.length;
      let p = n[u.id];
      if (p === void 0 || p.length !== x) {
        p = [];
        for (let M = 0; M < x; M++)
          p[M] = [M, 0];
        n[u.id] = p;
      }
      for (let M = 0; M < x; M++) {
        const w = p[M];
        w[0] = M, w[1] = m[M];
      }
      p.sort(Uu);
      for (let M = 0; M < 8; M++)
        M < x && p[M][1] ? (a[M][0] = p[M][0], a[M][1] = p[M][1]) : (a[M][0] = Number.MAX_SAFE_INTEGER, a[M][1] = 0);
      a.sort(Nu);
      const h = u.morphAttributes.position, _ = u.morphAttributes.normal;
      let T = 0;
      for (let M = 0; M < 8; M++) {
        const w = a[M], C = w[0], F = w[1];
        C !== Number.MAX_SAFE_INTEGER && F ? (h && u.getAttribute("morphTarget" + M) !== h[C] && u.setAttribute("morphTarget" + M, h[C]), _ && u.getAttribute("morphNormal" + M) !== _[C] && u.setAttribute("morphNormal" + M, _[C]), i[M] = F, T += F) : (h && u.hasAttribute("morphTarget" + M) === !0 && u.deleteAttribute("morphTarget" + M), _ && u.hasAttribute("morphNormal" + M) === !0 && u.deleteAttribute("morphNormal" + M), i[M] = 0);
      }
      const b = u.morphTargetsRelative ? 1 : 1 - T;
      f.getUniforms().setValue(s, "morphTargetBaseInfluence", b), f.getUniforms().setValue(s, "morphTargetInfluences", i);
    }
  }
  return {
    update: c
  };
}
function Ou(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(c) {
    const l = n.render.frame, u = c.geometry, d = e.get(c, u);
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
const pa = /* @__PURE__ */ new mt(), ma = /* @__PURE__ */ new ra(), ga = /* @__PURE__ */ new bo(), _a = /* @__PURE__ */ new ha(), Rs = [], Ps = [], Is = new Float32Array(16), Fs = new Float32Array(9), Ns = new Float32Array(4);
function Wn(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0)
    return s;
  const i = e * t;
  let r = Rs[i];
  if (r === void 0 && (r = new Float32Array(i), Rs[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, s[o].toArray(r, a);
  }
  return r;
}
function Xe(s, e) {
  if (s.length !== e.length)
    return !1;
  for (let t = 0, n = s.length; t < n; t++)
    if (s[t] !== e[t])
      return !1;
  return !0;
}
function qe(s, e) {
  for (let t = 0, n = e.length; t < n; t++)
    s[t] = e[t];
}
function Ri(s, e) {
  let t = Ps[e];
  t === void 0 && (t = new Int32Array(e), Ps[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = s.allocateTextureUnit();
  return t;
}
function Bu(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function Gu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Xe(t, e))
      return;
    s.uniform2fv(this.addr, e), qe(t, e);
  }
}
function Vu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (Xe(t, e))
      return;
    s.uniform3fv(this.addr, e), qe(t, e);
  }
}
function ku(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Xe(t, e))
      return;
    s.uniform4fv(this.addr, e), qe(t, e);
  }
}
function Wu(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Xe(t, e))
      return;
    s.uniformMatrix2fv(this.addr, !1, e), qe(t, e);
  } else {
    if (Xe(t, n))
      return;
    Ns.set(n), s.uniformMatrix2fv(this.addr, !1, Ns), qe(t, n);
  }
}
function Hu(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Xe(t, e))
      return;
    s.uniformMatrix3fv(this.addr, !1, e), qe(t, e);
  } else {
    if (Xe(t, n))
      return;
    Fs.set(n), s.uniformMatrix3fv(this.addr, !1, Fs), qe(t, n);
  }
}
function Xu(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (Xe(t, e))
      return;
    s.uniformMatrix4fv(this.addr, !1, e), qe(t, e);
  } else {
    if (Xe(t, n))
      return;
    Is.set(n), s.uniformMatrix4fv(this.addr, !1, Is), qe(t, n);
  }
}
function qu(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function Yu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Xe(t, e))
      return;
    s.uniform2iv(this.addr, e), qe(t, e);
  }
}
function ju(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Xe(t, e))
      return;
    s.uniform3iv(this.addr, e), qe(t, e);
  }
}
function Zu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Xe(t, e))
      return;
    s.uniform4iv(this.addr, e), qe(t, e);
  }
}
function $u(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function Ju(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (Xe(t, e))
      return;
    s.uniform2uiv(this.addr, e), qe(t, e);
  }
}
function Ku(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (Xe(t, e))
      return;
    s.uniform3uiv(this.addr, e), qe(t, e);
  }
}
function Qu(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (Xe(t, e))
      return;
    s.uniform4uiv(this.addr, e), qe(t, e);
  }
}
function eh(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || pa, i);
}
function th(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || ga, i);
}
function nh(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || _a, i);
}
function ih(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || ma, i);
}
function rh(s) {
  switch (s) {
    case 5126:
      return Bu;
    case 35664:
      return Gu;
    case 35665:
      return Vu;
    case 35666:
      return ku;
    case 35674:
      return Wu;
    case 35675:
      return Hu;
    case 35676:
      return Xu;
    case 5124:
    case 35670:
      return qu;
    case 35667:
    case 35671:
      return Yu;
    case 35668:
    case 35672:
      return ju;
    case 35669:
    case 35673:
      return Zu;
    case 5125:
      return $u;
    case 36294:
      return Ju;
    case 36295:
      return Ku;
    case 36296:
      return Qu;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return eh;
    case 35679:
    case 36299:
    case 36307:
      return th;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return nh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ih;
  }
}
function sh(s, e) {
  s.uniform1fv(this.addr, e);
}
function ah(s, e) {
  const t = Wn(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function oh(s, e) {
  const t = Wn(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function lh(s, e) {
  const t = Wn(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function ch(s, e) {
  const t = Wn(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function uh(s, e) {
  const t = Wn(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function hh(s, e) {
  const t = Wn(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function dh(s, e) {
  s.uniform1iv(this.addr, e);
}
function fh(s, e) {
  s.uniform2iv(this.addr, e);
}
function ph(s, e) {
  s.uniform3iv(this.addr, e);
}
function mh(s, e) {
  s.uniform4iv(this.addr, e);
}
function gh(s, e) {
  s.uniform1uiv(this.addr, e);
}
function _h(s, e) {
  s.uniform2uiv(this.addr, e);
}
function xh(s, e) {
  s.uniform3uiv(this.addr, e);
}
function vh(s, e) {
  s.uniform4uiv(this.addr, e);
}
function Mh(s, e, t) {
  const n = this.cache, i = e.length, r = Ri(t, i);
  Xe(n, r) || (s.uniform1iv(this.addr, r), qe(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture2D(e[o] || pa, r[o]);
}
function Sh(s, e, t) {
  const n = this.cache, i = e.length, r = Ri(t, i);
  Xe(n, r) || (s.uniform1iv(this.addr, r), qe(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture3D(e[o] || ga, r[o]);
}
function yh(s, e, t) {
  const n = this.cache, i = e.length, r = Ri(t, i);
  Xe(n, r) || (s.uniform1iv(this.addr, r), qe(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTextureCube(e[o] || _a, r[o]);
}
function bh(s, e, t) {
  const n = this.cache, i = e.length, r = Ri(t, i);
  Xe(n, r) || (s.uniform1iv(this.addr, r), qe(n, r));
  for (let o = 0; o !== i; ++o)
    t.setTexture2DArray(e[o] || ma, r[o]);
}
function wh(s) {
  switch (s) {
    case 5126:
      return sh;
    case 35664:
      return ah;
    case 35665:
      return oh;
    case 35666:
      return lh;
    case 35674:
      return ch;
    case 35675:
      return uh;
    case 35676:
      return hh;
    case 5124:
    case 35670:
      return dh;
    case 35667:
    case 35671:
      return fh;
    case 35668:
    case 35672:
      return ph;
    case 35669:
    case 35673:
      return mh;
    case 5125:
      return gh;
    case 36294:
      return _h;
    case 36295:
      return xh;
    case 36296:
      return vh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Mh;
    case 35679:
    case 36299:
    case 36307:
      return Sh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return yh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return bh;
  }
}
class Th {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = rh(t.type);
  }
}
class Eh {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = wh(t.type);
  }
}
class Ah {
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
const fr = /(\w+)(\])?(\[|\.)?/g;
function Us(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function Ch(s, e, t) {
  const n = s.name, i = n.length;
  for (fr.lastIndex = 0; ; ) {
    const r = fr.exec(n), o = fr.lastIndex;
    let a = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === i) {
      Us(t, l === void 0 ? new Th(a, s, e) : new Eh(a, s, e));
      break;
    } else {
      let d = t.map[a];
      d === void 0 && (d = new Ah(a), Us(t, d)), t = d;
    }
  }
}
class Ai {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), o = e.getUniformLocation(t, r.name);
      Ch(r, o, this);
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
function zs(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
let Lh = 0;
function Dh(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = i; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Rh(s) {
  switch (s) {
    case mn:
      return ["Linear", "( value )"];
    case Oe:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", s), ["Linear", "( value )"];
  }
}
function Os(s, e, t) {
  const n = s.getShaderParameter(e, 35713), i = s.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + Dh(s.getShaderSource(e), o);
  } else
    return i;
}
function Ph(s, e) {
  const t = Rh(e);
  return "vec4 " + s + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Ih(s, e) {
  let t;
  switch (e) {
    case Za:
      t = "Linear";
      break;
    case $a:
      t = "Reinhard";
      break;
    case Ja:
      t = "OptimizedCineon";
      break;
    case Ka:
      t = "ACESFilmic";
      break;
    case Qa:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Fh(s) {
  return [
    s.extensionDerivatives || !!s.envMapCubeUVHeight || s.bumpMap || s.tangentSpaceNormalMap || s.clearcoatNormalMap || s.flatShading || s.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) && s.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) && s.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter($n).join(`
`);
}
function Nh(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Uh(s, e) {
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
function $n(s) {
  return s !== "";
}
function Bs(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Gs(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const zh = /^[ \t]*#include +<([\w\d./]+)>/gm;
function br(s) {
  return s.replace(zh, Oh);
}
function Oh(s, e) {
  const t = Se[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return br(t);
}
const Bh = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Vs(s) {
  return s.replace(Bh, Gh);
}
function Gh(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function ks(s) {
  let e = "precision " + s.precision + ` float;
precision ` + s.precision + " int;";
  return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Vh(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === Zs ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === Aa ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === Zn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function kh(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case zn:
      case On:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Li:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Wh(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case On:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Hh(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Tr:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Ya:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case ja:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Xh(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function qh(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const c = Vh(t), l = kh(t), u = Wh(t), d = Hh(t), f = Xh(t), m = t.isWebGL2 ? "" : Fh(t), x = Nh(r), p = i.createProgram();
  let h, _, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (h = [
    x
  ].filter($n).join(`
`), h.length > 0 && (h += `
`), _ = [
    m,
    x
  ].filter($n).join(`
`), _.length > 0 && (_ += `
`)) : (h = [
    ks(t),
    "#define SHADER_NAME " + t.shaderName,
    x,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
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
  ].filter($n).join(`
`), _ = [
    m,
    ks(t),
    "#define SHADER_NAME " + t.shaderName,
    x,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + u : "",
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
    t.toneMapping !== Vt ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Vt ? Se.tonemapping_pars_fragment : "",
    t.toneMapping !== Vt ? Ih("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Se.encodings_pars_fragment,
    Ph("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter($n).join(`
`)), o = br(o), o = Bs(o, t), o = Gs(o, t), a = br(a), a = Bs(a, t), a = Gs(a, t), o = Vs(o), a = Vs(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, h = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + h, _ = [
    "#define varying in",
    t.glslVersion === hs ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === hs ? "" : "#define gl_FragColor pc_fragColor",
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
` + _);
  const b = T + h + o, M = T + _ + a, w = zs(i, 35633, b), C = zs(i, 35632, M);
  if (i.attachShader(p, w), i.attachShader(p, C), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p), s.debug.checkShaderErrors) {
    const E = i.getProgramInfoLog(p).trim(), D = i.getShaderInfoLog(w).trim(), q = i.getShaderInfoLog(C).trim();
    let Z = !0, N = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      Z = !1;
      const R = Os(i, w, "vertex"), W = Os(i, C, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(p, 35715) + `

Program Info Log: ` + E + `
` + R + `
` + W
      );
    } else
      E !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", E) : (D === "" || q === "") && (N = !1);
    N && (this.diagnostics = {
      runnable: Z,
      programLog: E,
      vertexShader: {
        log: D,
        prefix: h
      },
      fragmentShader: {
        log: q,
        prefix: _
      }
    });
  }
  i.deleteShader(w), i.deleteShader(C);
  let F;
  this.getUniforms = function() {
    return F === void 0 && (F = new Ai(i, p)), F;
  };
  let g;
  return this.getAttributes = function() {
    return g === void 0 && (g = Uh(i, p)), g;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(p), this.program = void 0;
  }, this.name = t.shaderName, this.id = Lh++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = w, this.fragmentShader = C, this;
}
let Yh = 0;
class jh {
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
    return n === void 0 && (n = new Zh(e), t.set(e, n)), n;
  }
}
class Zh {
  constructor(e) {
    this.id = Yh++, this.code = e, this.usedTimes = 0;
  }
}
function $h(s, e, t, n, i, r, o) {
  const a = new sa(), c = new jh(), l = [], u = i.isWebGL2, d = i.logarithmicDepthBuffer, f = i.vertexTextures;
  let m = i.precision;
  const x = {
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
  function p(g, E, D, q, Z) {
    const N = q.fog, R = Z.geometry, W = g.isMeshStandardMaterial ? q.environment : null, j = (g.isMeshStandardMaterial ? t : e).get(g.envMap || W), K = !!j && j.mapping === Li ? j.image.height : null, X = x[g.type];
    g.precision !== null && (m = i.getMaxPrecision(g.precision), m !== g.precision && console.warn("THREE.WebGLProgram.getParameters:", g.precision, "not supported, using", m, "instead."));
    const Q = R.morphAttributes.position || R.morphAttributes.normal || R.morphAttributes.color, Y = Q !== void 0 ? Q.length : 0;
    let G = 0;
    R.morphAttributes.position !== void 0 && (G = 1), R.morphAttributes.normal !== void 0 && (G = 2), R.morphAttributes.color !== void 0 && (G = 3);
    let U, ie, ee, re;
    if (X) {
      const Fe = Dt[X];
      U = Fe.vertexShader, ie = Fe.fragmentShader;
    } else
      U = g.vertexShader, ie = g.fragmentShader, c.update(g), ee = c.getVertexShaderID(g), re = c.getFragmentShaderID(g);
    const k = s.getRenderTarget(), Ce = g.alphaTest > 0, ce = g.clearcoat > 0, xe = g.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: X,
      shaderName: g.type,
      vertexShader: U,
      fragmentShader: ie,
      defines: g.defines,
      customVertexShaderID: ee,
      customFragmentShaderID: re,
      isRawShaderMaterial: g.isRawShaderMaterial === !0,
      glslVersion: g.glslVersion,
      precision: m,
      instancing: Z.isInstancedMesh === !0,
      instancingColor: Z.isInstancedMesh === !0 && Z.instanceColor !== null,
      supportsVertexTextures: f,
      outputEncoding: k === null ? s.outputEncoding : k.isXRRenderTarget === !0 ? k.texture.encoding : mn,
      map: !!g.map,
      matcap: !!g.matcap,
      envMap: !!j,
      envMapMode: j && j.mapping,
      envMapCubeUVHeight: K,
      lightMap: !!g.lightMap,
      aoMap: !!g.aoMap,
      emissiveMap: !!g.emissiveMap,
      bumpMap: !!g.bumpMap,
      normalMap: !!g.normalMap,
      objectSpaceNormalMap: g.normalMapType === vo,
      tangentSpaceNormalMap: g.normalMapType === Er,
      decodeVideoTexture: !!g.map && g.map.isVideoTexture === !0 && g.map.encoding === Oe,
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
      opaque: g.transparent === !1 && g.blending === Fn,
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
      skinning: Z.isSkinnedMesh === !0,
      morphTargets: R.morphAttributes.position !== void 0,
      morphNormals: R.morphAttributes.normal !== void 0,
      morphColors: R.morphAttributes.color !== void 0,
      morphTargetsCount: Y,
      morphTextureStride: G,
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
      shadowMapEnabled: s.shadowMap.enabled && D.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: g.toneMapped ? s.toneMapping : Vt,
      physicallyCorrectLights: s.physicallyCorrectLights,
      premultipliedAlpha: g.premultipliedAlpha,
      doubleSided: g.side === $t,
      flipSided: g.side === St,
      useDepthPacking: !!g.depthPacking,
      depthPacking: g.depthPacking || 0,
      index0AttributeName: g.index0AttributeName,
      extensionDerivatives: g.extensions && g.extensions.derivatives,
      extensionFragDepth: g.extensions && g.extensions.fragDepth,
      extensionDrawBuffers: g.extensions && g.extensions.drawBuffers,
      extensionShaderTextureLOD: g.extensions && g.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: g.customProgramCacheKey()
    };
  }
  function h(g) {
    const E = [];
    if (g.shaderID ? E.push(g.shaderID) : (E.push(g.customVertexShaderID), E.push(g.customFragmentShaderID)), g.defines !== void 0)
      for (const D in g.defines)
        E.push(D), E.push(g.defines[D]);
    return g.isRawShaderMaterial === !1 && (_(E, g), T(E, g), E.push(s.outputEncoding)), E.push(g.customProgramCacheKey), E.join();
  }
  function _(g, E) {
    g.push(E.precision), g.push(E.outputEncoding), g.push(E.envMapMode), g.push(E.envMapCubeUVHeight), g.push(E.combine), g.push(E.vertexUvs), g.push(E.fogExp2), g.push(E.sizeAttenuation), g.push(E.morphTargetsCount), g.push(E.morphAttributeCount), g.push(E.numDirLights), g.push(E.numPointLights), g.push(E.numSpotLights), g.push(E.numSpotLightMaps), g.push(E.numHemiLights), g.push(E.numRectAreaLights), g.push(E.numDirLightShadows), g.push(E.numPointLightShadows), g.push(E.numSpotLightShadows), g.push(E.numSpotLightShadowsWithMaps), g.push(E.shadowMapType), g.push(E.toneMapping), g.push(E.numClippingPlanes), g.push(E.numClipIntersection), g.push(E.depthPacking);
  }
  function T(g, E) {
    a.disableAll(), E.isWebGL2 && a.enable(0), E.supportsVertexTextures && a.enable(1), E.instancing && a.enable(2), E.instancingColor && a.enable(3), E.map && a.enable(4), E.matcap && a.enable(5), E.envMap && a.enable(6), E.lightMap && a.enable(7), E.aoMap && a.enable(8), E.emissiveMap && a.enable(9), E.bumpMap && a.enable(10), E.normalMap && a.enable(11), E.objectSpaceNormalMap && a.enable(12), E.tangentSpaceNormalMap && a.enable(13), E.clearcoat && a.enable(14), E.clearcoatMap && a.enable(15), E.clearcoatRoughnessMap && a.enable(16), E.clearcoatNormalMap && a.enable(17), E.iridescence && a.enable(18), E.iridescenceMap && a.enable(19), E.iridescenceThicknessMap && a.enable(20), E.displacementMap && a.enable(21), E.specularMap && a.enable(22), E.roughnessMap && a.enable(23), E.metalnessMap && a.enable(24), E.gradientMap && a.enable(25), E.alphaMap && a.enable(26), E.alphaTest && a.enable(27), E.vertexColors && a.enable(28), E.vertexAlphas && a.enable(29), E.vertexUvs && a.enable(30), E.vertexTangents && a.enable(31), E.uvsVertexOnly && a.enable(32), g.push(a.mask), a.disableAll(), E.fog && a.enable(0), E.useFog && a.enable(1), E.flatShading && a.enable(2), E.logarithmicDepthBuffer && a.enable(3), E.skinning && a.enable(4), E.morphTargets && a.enable(5), E.morphNormals && a.enable(6), E.morphColors && a.enable(7), E.premultipliedAlpha && a.enable(8), E.shadowMapEnabled && a.enable(9), E.physicallyCorrectLights && a.enable(10), E.doubleSided && a.enable(11), E.flipSided && a.enable(12), E.useDepthPacking && a.enable(13), E.dithering && a.enable(14), E.specularIntensityMap && a.enable(15), E.specularColorMap && a.enable(16), E.transmission && a.enable(17), E.transmissionMap && a.enable(18), E.thicknessMap && a.enable(19), E.sheen && a.enable(20), E.sheenColorMap && a.enable(21), E.sheenRoughnessMap && a.enable(22), E.decodeVideoTexture && a.enable(23), E.opaque && a.enable(24), g.push(a.mask);
  }
  function b(g) {
    const E = x[g.type];
    let D;
    if (E) {
      const q = Dt[E];
      D = Uo.clone(q.uniforms);
    } else
      D = g.uniforms;
    return D;
  }
  function M(g, E) {
    let D;
    for (let q = 0, Z = l.length; q < Z; q++) {
      const N = l[q];
      if (N.cacheKey === E) {
        D = N, ++D.usedTimes;
        break;
      }
    }
    return D === void 0 && (D = new qh(s, E, g, r), l.push(D)), D;
  }
  function w(g) {
    if (--g.usedTimes === 0) {
      const E = l.indexOf(g);
      l[E] = l[l.length - 1], l.pop(), g.destroy();
    }
  }
  function C(g) {
    c.remove(g);
  }
  function F() {
    c.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: h,
    getUniforms: b,
    acquireProgram: M,
    releaseProgram: w,
    releaseShaderCache: C,
    programs: l,
    dispose: F
  };
}
function Jh() {
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
function Kh(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function Ws(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function Hs() {
  const s = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(d, f, m, x, p, h) {
    let _ = s[e];
    return _ === void 0 ? (_ = {
      id: d.id,
      object: d,
      geometry: f,
      material: m,
      groupOrder: x,
      renderOrder: d.renderOrder,
      z: p,
      group: h
    }, s[e] = _) : (_.id = d.id, _.object = d, _.geometry = f, _.material = m, _.groupOrder = x, _.renderOrder = d.renderOrder, _.z = p, _.group = h), e++, _;
  }
  function a(d, f, m, x, p, h) {
    const _ = o(d, f, m, x, p, h);
    m.transmission > 0 ? n.push(_) : m.transparent === !0 ? i.push(_) : t.push(_);
  }
  function c(d, f, m, x, p, h) {
    const _ = o(d, f, m, x, p, h);
    m.transmission > 0 ? n.unshift(_) : m.transparent === !0 ? i.unshift(_) : t.unshift(_);
  }
  function l(d, f) {
    t.length > 1 && t.sort(d || Kh), n.length > 1 && n.sort(f || Ws), i.length > 1 && i.sort(f || Ws);
  }
  function u() {
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
    finish: u,
    sort: l
  };
}
function Qh() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let o;
    return r === void 0 ? (o = new Hs(), s.set(n, [o])) : i >= r.length ? (o = new Hs(), r.push(o)) : o = r[i], o;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function ed() {
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
            color: new Ie()
          };
          break;
        case "SpotLight":
          t = {
            position: new I(),
            direction: new I(),
            color: new Ie(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new I(),
            color: new Ie(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new I(),
            skyColor: new Ie(),
            groundColor: new Ie()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ie(),
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
function td() {
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
            shadowMapSize: new Re()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
let nd = 0;
function id(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function rd(s, e) {
  const t = new ed(), n = td(), i = {
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
  for (let u = 0; u < 9; u++)
    i.probe.push(new I());
  const r = new I(), o = new He(), a = new He();
  function c(u, d) {
    let f = 0, m = 0, x = 0;
    for (let q = 0; q < 9; q++)
      i.probe[q].set(0, 0, 0);
    let p = 0, h = 0, _ = 0, T = 0, b = 0, M = 0, w = 0, C = 0, F = 0, g = 0;
    u.sort(id);
    const E = d !== !0 ? Math.PI : 1;
    for (let q = 0, Z = u.length; q < Z; q++) {
      const N = u[q], R = N.color, W = N.intensity, j = N.distance, K = N.shadow && N.shadow.map ? N.shadow.map.texture : null;
      if (N.isAmbientLight)
        f += R.r * W * E, m += R.g * W * E, x += R.b * W * E;
      else if (N.isLightProbe)
        for (let X = 0; X < 9; X++)
          i.probe[X].addScaledVector(N.sh.coefficients[X], W);
      else if (N.isDirectionalLight) {
        const X = t.get(N);
        if (X.color.copy(N.color).multiplyScalar(N.intensity * E), N.castShadow) {
          const Q = N.shadow, Y = n.get(N);
          Y.shadowBias = Q.bias, Y.shadowNormalBias = Q.normalBias, Y.shadowRadius = Q.radius, Y.shadowMapSize = Q.mapSize, i.directionalShadow[p] = Y, i.directionalShadowMap[p] = K, i.directionalShadowMatrix[p] = N.shadow.matrix, M++;
        }
        i.directional[p] = X, p++;
      } else if (N.isSpotLight) {
        const X = t.get(N);
        X.position.setFromMatrixPosition(N.matrixWorld), X.color.copy(R).multiplyScalar(W * E), X.distance = j, X.coneCos = Math.cos(N.angle), X.penumbraCos = Math.cos(N.angle * (1 - N.penumbra)), X.decay = N.decay, i.spot[_] = X;
        const Q = N.shadow;
        if (N.map && (i.spotLightMap[F] = N.map, F++, Q.updateMatrices(N), N.castShadow && g++), i.spotLightMatrix[_] = Q.matrix, N.castShadow) {
          const Y = n.get(N);
          Y.shadowBias = Q.bias, Y.shadowNormalBias = Q.normalBias, Y.shadowRadius = Q.radius, Y.shadowMapSize = Q.mapSize, i.spotShadow[_] = Y, i.spotShadowMap[_] = K, C++;
        }
        _++;
      } else if (N.isRectAreaLight) {
        const X = t.get(N);
        X.color.copy(R).multiplyScalar(W), X.halfWidth.set(N.width * 0.5, 0, 0), X.halfHeight.set(0, N.height * 0.5, 0), i.rectArea[T] = X, T++;
      } else if (N.isPointLight) {
        const X = t.get(N);
        if (X.color.copy(N.color).multiplyScalar(N.intensity * E), X.distance = N.distance, X.decay = N.decay, N.castShadow) {
          const Q = N.shadow, Y = n.get(N);
          Y.shadowBias = Q.bias, Y.shadowNormalBias = Q.normalBias, Y.shadowRadius = Q.radius, Y.shadowMapSize = Q.mapSize, Y.shadowCameraNear = Q.camera.near, Y.shadowCameraFar = Q.camera.far, i.pointShadow[h] = Y, i.pointShadowMap[h] = K, i.pointShadowMatrix[h] = N.shadow.matrix, w++;
        }
        i.point[h] = X, h++;
      } else if (N.isHemisphereLight) {
        const X = t.get(N);
        X.skyColor.copy(N.color).multiplyScalar(W * E), X.groundColor.copy(N.groundColor).multiplyScalar(W * E), i.hemi[b] = X, b++;
      }
    }
    T > 0 && (e.isWebGL2 || s.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_FLOAT_1, i.rectAreaLTC2 = ne.LTC_FLOAT_2) : s.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ne.LTC_HALF_1, i.rectAreaLTC2 = ne.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = f, i.ambient[1] = m, i.ambient[2] = x;
    const D = i.hash;
    (D.directionalLength !== p || D.pointLength !== h || D.spotLength !== _ || D.rectAreaLength !== T || D.hemiLength !== b || D.numDirectionalShadows !== M || D.numPointShadows !== w || D.numSpotShadows !== C || D.numSpotMaps !== F) && (i.directional.length = p, i.spot.length = _, i.rectArea.length = T, i.point.length = h, i.hemi.length = b, i.directionalShadow.length = M, i.directionalShadowMap.length = M, i.pointShadow.length = w, i.pointShadowMap.length = w, i.spotShadow.length = C, i.spotShadowMap.length = C, i.directionalShadowMatrix.length = M, i.pointShadowMatrix.length = w, i.spotLightMatrix.length = C + F - g, i.spotLightMap.length = F, i.numSpotLightShadowsWithMaps = g, D.directionalLength = p, D.pointLength = h, D.spotLength = _, D.rectAreaLength = T, D.hemiLength = b, D.numDirectionalShadows = M, D.numPointShadows = w, D.numSpotShadows = C, D.numSpotMaps = F, i.version = nd++);
  }
  function l(u, d) {
    let f = 0, m = 0, x = 0, p = 0, h = 0;
    const _ = d.matrixWorldInverse;
    for (let T = 0, b = u.length; T < b; T++) {
      const M = u[T];
      if (M.isDirectionalLight) {
        const w = i.directional[f];
        w.direction.setFromMatrixPosition(M.matrixWorld), r.setFromMatrixPosition(M.target.matrixWorld), w.direction.sub(r), w.direction.transformDirection(_), f++;
      } else if (M.isSpotLight) {
        const w = i.spot[x];
        w.position.setFromMatrixPosition(M.matrixWorld), w.position.applyMatrix4(_), w.direction.setFromMatrixPosition(M.matrixWorld), r.setFromMatrixPosition(M.target.matrixWorld), w.direction.sub(r), w.direction.transformDirection(_), x++;
      } else if (M.isRectAreaLight) {
        const w = i.rectArea[p];
        w.position.setFromMatrixPosition(M.matrixWorld), w.position.applyMatrix4(_), a.identity(), o.copy(M.matrixWorld), o.premultiply(_), a.extractRotation(o), w.halfWidth.set(M.width * 0.5, 0, 0), w.halfHeight.set(0, M.height * 0.5, 0), w.halfWidth.applyMatrix4(a), w.halfHeight.applyMatrix4(a), p++;
      } else if (M.isPointLight) {
        const w = i.point[m];
        w.position.setFromMatrixPosition(M.matrixWorld), w.position.applyMatrix4(_), m++;
      } else if (M.isHemisphereLight) {
        const w = i.hemi[h];
        w.direction.setFromMatrixPosition(M.matrixWorld), w.direction.transformDirection(_), h++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: i
  };
}
function Xs(s, e) {
  const t = new rd(s, e), n = [], i = [];
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
function sd(s, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, o = 0) {
    const a = t.get(r);
    let c;
    return a === void 0 ? (c = new Xs(s, e), t.set(r, [c])) : o >= a.length ? (c = new Xs(s, e), a.push(c)) : c = a[o], c;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class ad extends kn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = _o, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class od extends kn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new I(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const ld = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, cd = `uniform sampler2D shadow_pass;
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
function ud(s, e, t) {
  let n = new Cr();
  const i = new Re(), r = new Re(), o = new Je(), a = new ad({ depthPacking: xo }), c = new od(), l = {}, u = t.maxTextureSize, d = { 0: St, 1: Un, 2: $t }, f = new _n({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Re() },
      radius: { value: 4 }
    },
    vertexShader: ld,
    fragmentShader: cd
  }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const x = new kt();
  x.setAttribute(
    "position",
    new Rt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const p = new Jt(x, f), h = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Zs, this.render = function(M, w, C) {
    if (h.enabled === !1 || h.autoUpdate === !1 && h.needsUpdate === !1 || M.length === 0)
      return;
    const F = s.getRenderTarget(), g = s.getActiveCubeFace(), E = s.getActiveMipmapLevel(), D = s.state;
    D.setBlending(Kt), D.buffers.color.setClear(1, 1, 1, 1), D.buffers.depth.setTest(!0), D.setScissorTest(!1);
    for (let q = 0, Z = M.length; q < Z; q++) {
      const N = M[q], R = N.shadow;
      if (R === void 0) {
        console.warn("THREE.WebGLShadowMap:", N, "has no shadow.");
        continue;
      }
      if (R.autoUpdate === !1 && R.needsUpdate === !1)
        continue;
      i.copy(R.mapSize);
      const W = R.getFrameExtents();
      if (i.multiply(W), r.copy(R.mapSize), (i.x > u || i.y > u) && (i.x > u && (r.x = Math.floor(u / W.x), i.x = r.x * W.x, R.mapSize.x = r.x), i.y > u && (r.y = Math.floor(u / W.y), i.y = r.y * W.y, R.mapSize.y = r.y)), R.map === null) {
        const K = this.type !== Zn ? { minFilter: ot, magFilter: ot } : {};
        R.map = new gn(i.x, i.y, K), R.map.texture.name = N.name + ".shadowMap", R.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(R.map), s.clear();
      const j = R.getViewportCount();
      for (let K = 0; K < j; K++) {
        const X = R.getViewport(K);
        o.set(
          r.x * X.x,
          r.y * X.y,
          r.x * X.z,
          r.y * X.w
        ), D.viewport(o), R.updateMatrices(N, K), n = R.getFrustum(), b(w, C, R.camera, N, this.type);
      }
      R.isPointLightShadow !== !0 && this.type === Zn && _(R, C), R.needsUpdate = !1;
    }
    h.needsUpdate = !1, s.setRenderTarget(F, g, E);
  };
  function _(M, w) {
    const C = e.update(p);
    f.defines.VSM_SAMPLES !== M.blurSamples && (f.defines.VSM_SAMPLES = M.blurSamples, m.defines.VSM_SAMPLES = M.blurSamples, f.needsUpdate = !0, m.needsUpdate = !0), M.mapPass === null && (M.mapPass = new gn(i.x, i.y)), f.uniforms.shadow_pass.value = M.map.texture, f.uniforms.resolution.value = M.mapSize, f.uniforms.radius.value = M.radius, s.setRenderTarget(M.mapPass), s.clear(), s.renderBufferDirect(w, null, C, f, p, null), m.uniforms.shadow_pass.value = M.mapPass.texture, m.uniforms.resolution.value = M.mapSize, m.uniforms.radius.value = M.radius, s.setRenderTarget(M.map), s.clear(), s.renderBufferDirect(w, null, C, m, p, null);
  }
  function T(M, w, C, F, g, E) {
    let D = null;
    const q = C.isPointLight === !0 ? M.customDistanceMaterial : M.customDepthMaterial;
    if (q !== void 0 ? D = q : D = C.isPointLight === !0 ? c : a, s.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const Z = D.uuid, N = w.uuid;
      let R = l[Z];
      R === void 0 && (R = {}, l[Z] = R);
      let W = R[N];
      W === void 0 && (W = D.clone(), R[N] = W), D = W;
    }
    return D.visible = w.visible, D.wireframe = w.wireframe, E === Zn ? D.side = w.shadowSide !== null ? w.shadowSide : w.side : D.side = w.shadowSide !== null ? w.shadowSide : d[w.side], D.alphaMap = w.alphaMap, D.alphaTest = w.alphaTest, D.map = w.map, D.clipShadows = w.clipShadows, D.clippingPlanes = w.clippingPlanes, D.clipIntersection = w.clipIntersection, D.displacementMap = w.displacementMap, D.displacementScale = w.displacementScale, D.displacementBias = w.displacementBias, D.wireframeLinewidth = w.wireframeLinewidth, D.linewidth = w.linewidth, C.isPointLight === !0 && D.isMeshDistanceMaterial === !0 && (D.referencePosition.setFromMatrixPosition(C.matrixWorld), D.nearDistance = F, D.farDistance = g), D;
  }
  function b(M, w, C, F, g) {
    if (M.visible === !1)
      return;
    if (M.layers.test(w.layers) && (M.isMesh || M.isLine || M.isPoints) && (M.castShadow || M.receiveShadow && g === Zn) && (!M.frustumCulled || n.intersectsObject(M))) {
      M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, M.matrixWorld);
      const q = e.update(M), Z = M.material;
      if (Array.isArray(Z)) {
        const N = q.groups;
        for (let R = 0, W = N.length; R < W; R++) {
          const j = N[R], K = Z[j.materialIndex];
          if (K && K.visible) {
            const X = T(M, K, F, C.near, C.far, g);
            s.renderBufferDirect(C, null, q, X, M, j);
          }
        }
      } else if (Z.visible) {
        const N = T(M, Z, F, C.near, C.far, g);
        s.renderBufferDirect(C, null, q, N, M, null);
      }
    }
    const D = M.children;
    for (let q = 0, Z = D.length; q < Z; q++)
      b(D[q], w, C, F, g);
  }
}
function hd(s, e, t) {
  const n = t.isWebGL2;
  function i() {
    let A = !1;
    const B = new Je();
    let $ = null;
    const oe = new Je(0, 0, 0, 0);
    return {
      setMask: function(he) {
        $ !== he && !A && (s.colorMask(he, he, he, he), $ = he);
      },
      setLocked: function(he) {
        A = he;
      },
      setClear: function(he, Pe, je, Qe, Qt) {
        Qt === !0 && (he *= Qe, Pe *= Qe, je *= Qe), B.set(he, Pe, je, Qe), oe.equals(B) === !1 && (s.clearColor(he, Pe, je, Qe), oe.copy(B));
      },
      reset: function() {
        A = !1, $ = null, oe.set(-1, 0, 0, 0);
      }
    };
  }
  function r() {
    let A = !1, B = null, $ = null, oe = null;
    return {
      setTest: function(he) {
        he ? Ce(2929) : ce(2929);
      },
      setMask: function(he) {
        B !== he && !A && (s.depthMask(he), B = he);
      },
      setFunc: function(he) {
        if ($ !== he) {
          switch (he) {
            case Ga:
              s.depthFunc(512);
              break;
            case Va:
              s.depthFunc(519);
              break;
            case ka:
              s.depthFunc(513);
              break;
            case gr:
              s.depthFunc(515);
              break;
            case Wa:
              s.depthFunc(514);
              break;
            case Ha:
              s.depthFunc(518);
              break;
            case Xa:
              s.depthFunc(516);
              break;
            case qa:
              s.depthFunc(517);
              break;
            default:
              s.depthFunc(515);
          }
          $ = he;
        }
      },
      setLocked: function(he) {
        A = he;
      },
      setClear: function(he) {
        oe !== he && (s.clearDepth(he), oe = he);
      },
      reset: function() {
        A = !1, B = null, $ = null, oe = null;
      }
    };
  }
  function o() {
    let A = !1, B = null, $ = null, oe = null, he = null, Pe = null, je = null, Qe = null, Qt = null;
    return {
      setTest: function(ze) {
        A || (ze ? Ce(2960) : ce(2960));
      },
      setMask: function(ze) {
        B !== ze && !A && (s.stencilMask(ze), B = ze);
      },
      setFunc: function(ze, It, xt) {
        ($ !== ze || oe !== It || he !== xt) && (s.stencilFunc(ze, It, xt), $ = ze, oe = It, he = xt);
      },
      setOp: function(ze, It, xt) {
        (Pe !== ze || je !== It || Qe !== xt) && (s.stencilOp(ze, It, xt), Pe = ze, je = It, Qe = xt);
      },
      setLocked: function(ze) {
        A = ze;
      },
      setClear: function(ze) {
        Qt !== ze && (s.clearStencil(ze), Qt = ze);
      },
      reset: function() {
        A = !1, B = null, $ = null, oe = null, he = null, Pe = null, je = null, Qe = null, Qt = null;
      }
    };
  }
  const a = new i(), c = new r(), l = new o(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
  let f = {}, m = {}, x = /* @__PURE__ */ new WeakMap(), p = [], h = null, _ = !1, T = null, b = null, M = null, w = null, C = null, F = null, g = null, E = !1, D = null, q = null, Z = null, N = null, R = null;
  const W = s.getParameter(35661);
  let j = !1, K = 0;
  const X = s.getParameter(7938);
  X.indexOf("WebGL") !== -1 ? (K = parseFloat(/^WebGL (\d)/.exec(X)[1]), j = K >= 1) : X.indexOf("OpenGL ES") !== -1 && (K = parseFloat(/^OpenGL ES (\d)/.exec(X)[1]), j = K >= 2);
  let Q = null, Y = {};
  const G = s.getParameter(3088), U = s.getParameter(2978), ie = new Je().fromArray(G), ee = new Je().fromArray(U);
  function re(A, B, $) {
    const oe = new Uint8Array(4), he = s.createTexture();
    s.bindTexture(A, he), s.texParameteri(A, 10241, 9728), s.texParameteri(A, 10240, 9728);
    for (let Pe = 0; Pe < $; Pe++)
      s.texImage2D(B + Pe, 0, 6408, 1, 1, 0, 6408, 5121, oe);
    return he;
  }
  const k = {};
  k[3553] = re(3553, 3553, 1), k[34067] = re(34067, 34069, 6), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), Ce(2929), c.setFunc(gr), it(!1), _t(Nr), Ce(2884), tt(Kt);
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
    let $ = p, oe = !1;
    if (A)
      if ($ = x.get(B), $ === void 0 && ($ = [], x.set(B, $)), A.isWebGLMultipleRenderTargets) {
        const he = A.texture;
        if ($.length !== he.length || $[0] !== 36064) {
          for (let Pe = 0, je = he.length; Pe < je; Pe++)
            $[Pe] = 36064 + Pe;
          $.length = he.length, oe = !0;
        }
      } else
        $[0] !== 36064 && ($[0] = 36064, oe = !0);
    else
      $[0] !== 1029 && ($[0] = 1029, oe = !0);
    oe && (t.isWebGL2 ? s.drawBuffers($) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL($));
  }
  function Fe(A) {
    return h !== A ? (s.useProgram(A), h = A, !0) : !1;
  }
  const ye = {
    [Pn]: 32774,
    [La]: 32778,
    [Da]: 32779
  };
  if (n)
    ye[Br] = 32775, ye[Gr] = 32776;
  else {
    const A = e.get("EXT_blend_minmax");
    A !== null && (ye[Br] = A.MIN_EXT, ye[Gr] = A.MAX_EXT);
  }
  const _e = {
    [Ra]: 0,
    [Pa]: 1,
    [Ia]: 768,
    [$s]: 770,
    [Ba]: 776,
    [za]: 774,
    [Na]: 772,
    [Fa]: 769,
    [Js]: 771,
    [Oa]: 775,
    [Ua]: 773
  };
  function tt(A, B, $, oe, he, Pe, je, Qe) {
    if (A === Kt) {
      _ === !0 && (ce(3042), _ = !1);
      return;
    }
    if (_ === !1 && (Ce(3042), _ = !0), A !== Ca) {
      if (A !== T || Qe !== E) {
        if ((b !== Pn || C !== Pn) && (s.blendEquation(32774), b = Pn, C = Pn), Qe)
          switch (A) {
            case Fn:
              s.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Ur:
              s.blendFunc(1, 1);
              break;
            case zr:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Or:
              s.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", A);
              break;
          }
        else
          switch (A) {
            case Fn:
              s.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Ur:
              s.blendFunc(770, 1);
              break;
            case zr:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Or:
              s.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", A);
              break;
          }
        M = null, w = null, F = null, g = null, T = A, E = Qe;
      }
      return;
    }
    he = he || B, Pe = Pe || $, je = je || oe, (B !== b || he !== C) && (s.blendEquationSeparate(ye[B], ye[he]), b = B, C = he), ($ !== M || oe !== w || Pe !== F || je !== g) && (s.blendFuncSeparate(_e[$], _e[oe], _e[Pe], _e[je]), M = $, w = oe, F = Pe, g = je), T = A, E = !1;
  }
  function nt(A, B) {
    A.side === $t ? ce(2884) : Ce(2884);
    let $ = A.side === St;
    B && ($ = !$), it($), A.blending === Fn && A.transparent === !1 ? tt(Kt) : tt(A.blending, A.blendEquation, A.blendSrc, A.blendDst, A.blendEquationAlpha, A.blendSrcAlpha, A.blendDstAlpha, A.premultipliedAlpha), c.setFunc(A.depthFunc), c.setTest(A.depthTest), c.setMask(A.depthWrite), a.setMask(A.colorWrite);
    const oe = A.stencilWrite;
    l.setTest(oe), oe && (l.setMask(A.stencilWriteMask), l.setFunc(A.stencilFunc, A.stencilRef, A.stencilFuncMask), l.setOp(A.stencilFail, A.stencilZFail, A.stencilZPass)), Ne(A.polygonOffset, A.polygonOffsetFactor, A.polygonOffsetUnits), A.alphaToCoverage === !0 ? Ce(32926) : ce(32926);
  }
  function it(A) {
    D !== A && (A ? s.frontFace(2304) : s.frontFace(2305), D = A);
  }
  function _t(A) {
    A !== Ta ? (Ce(2884), A !== q && (A === Nr ? s.cullFace(1029) : A === Ea ? s.cullFace(1028) : s.cullFace(1032))) : ce(2884), q = A;
  }
  function ke(A) {
    A !== Z && (j && s.lineWidth(A), Z = A);
  }
  function Ne(A, B, $) {
    A ? (Ce(32823), (N !== B || R !== $) && (s.polygonOffset(B, $), N = B, R = $)) : ce(32823);
  }
  function Pt(A) {
    A ? Ce(3089) : ce(3089);
  }
  function yt(A) {
    A === void 0 && (A = 33984 + W - 1), Q !== A && (s.activeTexture(A), Q = A);
  }
  function y(A, B, $) {
    $ === void 0 && (Q === null ? $ = 33984 + W - 1 : $ = Q);
    let oe = Y[$];
    oe === void 0 && (oe = { type: void 0, texture: void 0 }, Y[$] = oe), (oe.type !== A || oe.texture !== B) && (Q !== $ && (s.activeTexture($), Q = $), s.bindTexture(A, B || k[A]), oe.type = A, oe.texture = B);
  }
  function v() {
    const A = Y[Q];
    A !== void 0 && A.type !== void 0 && (s.bindTexture(A.type, null), A.type = void 0, A.texture = void 0);
  }
  function O() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function J() {
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
  function se() {
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
  function ae() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (A) {
      console.error("THREE.WebGLState:", A);
    }
  }
  function H() {
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
    ie.equals(A) === !1 && (s.scissor(A.x, A.y, A.z, A.w), ie.copy(A));
  }
  function de(A) {
    ee.equals(A) === !1 && (s.viewport(A.x, A.y, A.z, A.w), ee.copy(A));
  }
  function Le(A, B) {
    let $ = d.get(B);
    $ === void 0 && ($ = /* @__PURE__ */ new WeakMap(), d.set(B, $));
    let oe = $.get(A);
    oe === void 0 && (oe = s.getUniformBlockIndex(B, A.name), $.set(A, oe));
  }
  function Ue(A, B) {
    const oe = d.get(B).get(A);
    u.get(A) !== oe && (s.uniformBlockBinding(B, oe, A.__bindingPointIndex), u.set(A, oe));
  }
  function Ye() {
    s.disable(3042), s.disable(2884), s.disable(2929), s.disable(32823), s.disable(3089), s.disable(2960), s.disable(32926), s.blendEquation(32774), s.blendFunc(1, 0), s.blendFuncSeparate(1, 0, 1, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(513), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(519, 0, 4294967295), s.stencilOp(7680, 7680, 7680), s.clearStencil(0), s.cullFace(1029), s.frontFace(2305), s.polygonOffset(0, 0), s.activeTexture(33984), s.bindFramebuffer(36160, null), n === !0 && (s.bindFramebuffer(36009, null), s.bindFramebuffer(36008, null)), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), f = {}, Q = null, Y = {}, m = {}, x = /* @__PURE__ */ new WeakMap(), p = [], h = null, _ = !1, T = null, b = null, M = null, w = null, C = null, F = null, g = null, E = !1, D = null, q = null, Z = null, N = null, R = null, ie.set(0, 0, s.canvas.width, s.canvas.height), ee.set(0, 0, s.canvas.width, s.canvas.height), a.reset(), c.reset(), l.reset();
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
    useProgram: Fe,
    setBlending: tt,
    setMaterial: nt,
    setFlipSided: it,
    setCullFace: _t,
    setLineWidth: ke,
    setPolygonOffset: Ne,
    setScissorTest: Pt,
    activeTexture: yt,
    bindTexture: y,
    unbindTexture: v,
    compressedTexImage2D: O,
    compressedTexImage3D: J,
    texImage2D: ge,
    texImage3D: ue,
    updateUBOMapping: Le,
    uniformBlockBinding: Ue,
    texStorage2D: H,
    texStorage3D: pe,
    texSubImage2D: te,
    texSubImage3D: se,
    compressedTexSubImage2D: ve,
    compressedTexSubImage3D: ae,
    scissor: me,
    viewport: de,
    reset: Ye
  };
}
function dd(s, e, t, n, i, r, o) {
  const a = i.isWebGL2, c = i.maxTextures, l = i.maxCubemapSize, u = i.maxTextureSize, d = i.maxSamples, f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), x = /* @__PURE__ */ new WeakMap();
  let p;
  const h = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function T(y, v) {
    return _ ? new OffscreenCanvas(y, v) : Ci("canvas");
  }
  function b(y, v, O, J) {
    let te = 1;
    if ((y.width > J || y.height > J) && (te = J / Math.max(y.width, y.height)), te < 1 || v === !0)
      if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap) {
        const se = v ? yr : Math.floor, ve = se(te * y.width), ae = se(te * y.height);
        p === void 0 && (p = T(ve, ae));
        const H = O ? T(ve, ae) : p;
        return H.width = ve, H.height = ae, H.getContext("2d").drawImage(y, 0, 0, ve, ae), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + y.width + "x" + y.height + ") to (" + ve + "x" + ae + ")."), H;
      } else
        return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + y.width + "x" + y.height + ")."), y;
    return y;
  }
  function M(y) {
    return fs(y.width) && fs(y.height);
  }
  function w(y) {
    return a ? !1 : y.wrapS !== At || y.wrapT !== At || y.minFilter !== ot && y.minFilter !== Mt;
  }
  function C(y, v) {
    return y.generateMipmaps && v && y.minFilter !== ot && y.minFilter !== Mt;
  }
  function F(y) {
    s.generateMipmap(y);
  }
  function g(y, v, O, J, te = !1) {
    if (a === !1)
      return v;
    if (y !== null) {
      if (s[y] !== void 0)
        return s[y];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'");
    }
    let se = v;
    return v === 6403 && (O === 5126 && (se = 33326), O === 5131 && (se = 33325), O === 5121 && (se = 33321)), v === 33319 && (O === 5126 && (se = 33328), O === 5131 && (se = 33327), O === 5121 && (se = 33323)), v === 6408 && (O === 5126 && (se = 34836), O === 5131 && (se = 34842), O === 5121 && (se = J === Oe && te === !1 ? 35907 : 32856), O === 32819 && (se = 32854), O === 32820 && (se = 32855)), (se === 33325 || se === 33326 || se === 33327 || se === 33328 || se === 34842 || se === 34836) && e.get("EXT_color_buffer_float"), se;
  }
  function E(y, v, O) {
    return C(y, O) === !0 || y.isFramebufferTexture && y.minFilter !== ot && y.minFilter !== Mt ? Math.log2(Math.max(v.width, v.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? v.mipmaps.length : 1;
  }
  function D(y) {
    return y === ot || y === Vr || y === kr ? 9728 : 9729;
  }
  function q(y) {
    const v = y.target;
    v.removeEventListener("dispose", q), N(v), v.isVideoTexture && x.delete(v);
  }
  function Z(y) {
    const v = y.target;
    v.removeEventListener("dispose", Z), W(v);
  }
  function N(y) {
    const v = n.get(y);
    if (v.__webglInit === void 0)
      return;
    const O = y.source, J = h.get(O);
    if (J) {
      const te = J[v.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && R(y), Object.keys(J).length === 0 && h.delete(O);
    }
    n.remove(y);
  }
  function R(y) {
    const v = n.get(y);
    s.deleteTexture(v.__webglTexture);
    const O = y.source, J = h.get(O);
    delete J[v.__cacheKey], o.memory.textures--;
  }
  function W(y) {
    const v = y.texture, O = n.get(y), J = n.get(v);
    if (J.__webglTexture !== void 0 && (s.deleteTexture(J.__webglTexture), o.memory.textures--), y.depthTexture && y.depthTexture.dispose(), y.isWebGLCubeRenderTarget)
      for (let te = 0; te < 6; te++)
        s.deleteFramebuffer(O.__webglFramebuffer[te]), O.__webglDepthbuffer && s.deleteRenderbuffer(O.__webglDepthbuffer[te]);
    else {
      if (s.deleteFramebuffer(O.__webglFramebuffer), O.__webglDepthbuffer && s.deleteRenderbuffer(O.__webglDepthbuffer), O.__webglMultisampledFramebuffer && s.deleteFramebuffer(O.__webglMultisampledFramebuffer), O.__webglColorRenderbuffer)
        for (let te = 0; te < O.__webglColorRenderbuffer.length; te++)
          O.__webglColorRenderbuffer[te] && s.deleteRenderbuffer(O.__webglColorRenderbuffer[te]);
      O.__webglDepthRenderbuffer && s.deleteRenderbuffer(O.__webglDepthRenderbuffer);
    }
    if (y.isWebGLMultipleRenderTargets)
      for (let te = 0, se = v.length; te < se; te++) {
        const ve = n.get(v[te]);
        ve.__webglTexture && (s.deleteTexture(ve.__webglTexture), o.memory.textures--), n.remove(v[te]);
      }
    n.remove(v), n.remove(y);
  }
  let j = 0;
  function K() {
    j = 0;
  }
  function X() {
    const y = j;
    return y >= c && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + c), j += 1, y;
  }
  function Q(y) {
    const v = [];
    return v.push(y.wrapS), v.push(y.wrapT), v.push(y.wrapR || 0), v.push(y.magFilter), v.push(y.minFilter), v.push(y.anisotropy), v.push(y.internalFormat), v.push(y.format), v.push(y.type), v.push(y.generateMipmaps), v.push(y.premultiplyAlpha), v.push(y.flipY), v.push(y.unpackAlignment), v.push(y.encoding), v.join();
  }
  function Y(y, v) {
    const O = n.get(y);
    if (y.isVideoTexture && Pt(y), y.isRenderTargetTexture === !1 && y.version > 0 && O.__version !== y.version) {
      const J = y.image;
      if (J === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (J.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ce(O, y, v);
        return;
      }
    }
    t.bindTexture(3553, O.__webglTexture, 33984 + v);
  }
  function G(y, v) {
    const O = n.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      ce(O, y, v);
      return;
    }
    t.bindTexture(35866, O.__webglTexture, 33984 + v);
  }
  function U(y, v) {
    const O = n.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      ce(O, y, v);
      return;
    }
    t.bindTexture(32879, O.__webglTexture, 33984 + v);
  }
  function ie(y, v) {
    const O = n.get(y);
    if (y.version > 0 && O.__version !== y.version) {
      xe(O, y, v);
      return;
    }
    t.bindTexture(34067, O.__webglTexture, 33984 + v);
  }
  const ee = {
    [vr]: 10497,
    [At]: 33071,
    [Mr]: 33648
  }, re = {
    [ot]: 9728,
    [Vr]: 9984,
    [kr]: 9986,
    [Mt]: 9729,
    [eo]: 9985,
    [Di]: 9987
  };
  function k(y, v, O) {
    if (O ? (s.texParameteri(y, 10242, ee[v.wrapS]), s.texParameteri(y, 10243, ee[v.wrapT]), (y === 32879 || y === 35866) && s.texParameteri(y, 32882, ee[v.wrapR]), s.texParameteri(y, 10240, re[v.magFilter]), s.texParameteri(y, 10241, re[v.minFilter])) : (s.texParameteri(y, 10242, 33071), s.texParameteri(y, 10243, 33071), (y === 32879 || y === 35866) && s.texParameteri(y, 32882, 33071), (v.wrapS !== At || v.wrapT !== At) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), s.texParameteri(y, 10240, D(v.magFilter)), s.texParameteri(y, 10241, D(v.minFilter)), v.minFilter !== ot && v.minFilter !== Mt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const J = e.get("EXT_texture_filter_anisotropic");
      if (v.type === hn && e.has("OES_texture_float_linear") === !1 || a === !1 && v.type === Jn && e.has("OES_texture_half_float_linear") === !1)
        return;
      (v.anisotropy > 1 || n.get(v).__currentAnisotropy) && (s.texParameterf(y, J.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy);
    }
  }
  function Ce(y, v) {
    let O = !1;
    y.__webglInit === void 0 && (y.__webglInit = !0, v.addEventListener("dispose", q));
    const J = v.source;
    let te = h.get(J);
    te === void 0 && (te = {}, h.set(J, te));
    const se = Q(v);
    if (se !== y.__cacheKey) {
      te[se] === void 0 && (te[se] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, O = !0), te[se].usedTimes++;
      const ve = te[y.__cacheKey];
      ve !== void 0 && (te[y.__cacheKey].usedTimes--, ve.usedTimes === 0 && R(v)), y.__cacheKey = se, y.__webglTexture = te[se].texture;
    }
    return O;
  }
  function ce(y, v, O) {
    let J = 3553;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (J = 35866), v.isData3DTexture && (J = 32879);
    const te = Ce(y, v), se = v.source;
    t.bindTexture(J, y.__webglTexture, 33984 + O);
    const ve = n.get(se);
    if (se.version !== ve.__version || te === !0) {
      t.activeTexture(33984 + O), s.pixelStorei(37440, v.flipY), s.pixelStorei(37441, v.premultiplyAlpha), s.pixelStorei(3317, v.unpackAlignment), s.pixelStorei(37443, 0);
      const ae = w(v) && M(v.image) === !1;
      let H = b(v.image, ae, !1, u);
      H = yt(v, H);
      const pe = M(H) || a, ge = r.convert(v.format, v.encoding);
      let ue = r.convert(v.type), me = g(v.internalFormat, ge, ue, v.encoding, v.isVideoTexture);
      k(J, v, pe);
      let de;
      const Le = v.mipmaps, Ue = a && v.isVideoTexture !== !0, Ye = ve.__version === void 0 || te === !0, A = E(v, H, pe);
      if (v.isDepthTexture)
        me = 6402, a ? v.type === hn ? me = 36012 : v.type === un ? me = 33190 : v.type === Nn ? me = 35056 : me = 33189 : v.type === hn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), v.format === dn && me === 6402 && v.type !== Qs && v.type !== un && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), v.type = un, ue = r.convert(v.type)), v.format === Bn && me === 6402 && (me = 34041, v.type !== Nn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), v.type = Nn, ue = r.convert(v.type))), Ye && (Ue ? t.texStorage2D(3553, 1, me, H.width, H.height) : t.texImage2D(3553, 0, me, H.width, H.height, 0, ge, ue, null));
      else if (v.isDataTexture)
        if (Le.length > 0 && pe) {
          Ue && Ye && t.texStorage2D(3553, A, me, Le[0].width, Le[0].height);
          for (let B = 0, $ = Le.length; B < $; B++)
            de = Le[B], Ue ? t.texSubImage2D(3553, B, 0, 0, de.width, de.height, ge, ue, de.data) : t.texImage2D(3553, B, me, de.width, de.height, 0, ge, ue, de.data);
          v.generateMipmaps = !1;
        } else
          Ue ? (Ye && t.texStorage2D(3553, A, me, H.width, H.height), t.texSubImage2D(3553, 0, 0, 0, H.width, H.height, ge, ue, H.data)) : t.texImage2D(3553, 0, me, H.width, H.height, 0, ge, ue, H.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Ue && Ye && t.texStorage3D(35866, A, me, Le[0].width, Le[0].height, H.depth);
          for (let B = 0, $ = Le.length; B < $; B++)
            de = Le[B], v.format !== Ct ? ge !== null ? Ue ? t.compressedTexSubImage3D(35866, B, 0, 0, 0, de.width, de.height, H.depth, ge, de.data, 0, 0) : t.compressedTexImage3D(35866, B, me, de.width, de.height, H.depth, 0, de.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ue ? t.texSubImage3D(35866, B, 0, 0, 0, de.width, de.height, H.depth, ge, ue, de.data) : t.texImage3D(35866, B, me, de.width, de.height, H.depth, 0, ge, ue, de.data);
        } else {
          Ue && Ye && t.texStorage2D(3553, A, me, Le[0].width, Le[0].height);
          for (let B = 0, $ = Le.length; B < $; B++)
            de = Le[B], v.format !== Ct ? ge !== null ? Ue ? t.compressedTexSubImage2D(3553, B, 0, 0, de.width, de.height, ge, de.data) : t.compressedTexImage2D(3553, B, me, de.width, de.height, 0, de.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ue ? t.texSubImage2D(3553, B, 0, 0, de.width, de.height, ge, ue, de.data) : t.texImage2D(3553, B, me, de.width, de.height, 0, ge, ue, de.data);
        }
      else if (v.isDataArrayTexture)
        Ue ? (Ye && t.texStorage3D(35866, A, me, H.width, H.height, H.depth), t.texSubImage3D(35866, 0, 0, 0, 0, H.width, H.height, H.depth, ge, ue, H.data)) : t.texImage3D(35866, 0, me, H.width, H.height, H.depth, 0, ge, ue, H.data);
      else if (v.isData3DTexture)
        Ue ? (Ye && t.texStorage3D(32879, A, me, H.width, H.height, H.depth), t.texSubImage3D(32879, 0, 0, 0, 0, H.width, H.height, H.depth, ge, ue, H.data)) : t.texImage3D(32879, 0, me, H.width, H.height, H.depth, 0, ge, ue, H.data);
      else if (v.isFramebufferTexture) {
        if (Ye)
          if (Ue)
            t.texStorage2D(3553, A, me, H.width, H.height);
          else {
            let B = H.width, $ = H.height;
            for (let oe = 0; oe < A; oe++)
              t.texImage2D(3553, oe, me, B, $, 0, ge, ue, null), B >>= 1, $ >>= 1;
          }
      } else if (Le.length > 0 && pe) {
        Ue && Ye && t.texStorage2D(3553, A, me, Le[0].width, Le[0].height);
        for (let B = 0, $ = Le.length; B < $; B++)
          de = Le[B], Ue ? t.texSubImage2D(3553, B, 0, 0, ge, ue, de) : t.texImage2D(3553, B, me, ge, ue, de);
        v.generateMipmaps = !1;
      } else
        Ue ? (Ye && t.texStorage2D(3553, A, me, H.width, H.height), t.texSubImage2D(3553, 0, 0, 0, ge, ue, H)) : t.texImage2D(3553, 0, me, ge, ue, H);
      C(v, pe) && F(J), ve.__version = se.version, v.onUpdate && v.onUpdate(v);
    }
    y.__version = v.version;
  }
  function xe(y, v, O) {
    if (v.image.length !== 6)
      return;
    const J = Ce(y, v), te = v.source;
    t.bindTexture(34067, y.__webglTexture, 33984 + O);
    const se = n.get(te);
    if (te.version !== se.__version || J === !0) {
      t.activeTexture(33984 + O), s.pixelStorei(37440, v.flipY), s.pixelStorei(37441, v.premultiplyAlpha), s.pixelStorei(3317, v.unpackAlignment), s.pixelStorei(37443, 0);
      const ve = v.isCompressedTexture || v.image[0].isCompressedTexture, ae = v.image[0] && v.image[0].isDataTexture, H = [];
      for (let B = 0; B < 6; B++)
        !ve && !ae ? H[B] = b(v.image[B], !1, !0, l) : H[B] = ae ? v.image[B].image : v.image[B], H[B] = yt(v, H[B]);
      const pe = H[0], ge = M(pe) || a, ue = r.convert(v.format, v.encoding), me = r.convert(v.type), de = g(v.internalFormat, ue, me, v.encoding), Le = a && v.isVideoTexture !== !0, Ue = se.__version === void 0 || J === !0;
      let Ye = E(v, pe, ge);
      k(34067, v, ge);
      let A;
      if (ve) {
        Le && Ue && t.texStorage2D(34067, Ye, de, pe.width, pe.height);
        for (let B = 0; B < 6; B++) {
          A = H[B].mipmaps;
          for (let $ = 0; $ < A.length; $++) {
            const oe = A[$];
            v.format !== Ct ? ue !== null ? Le ? t.compressedTexSubImage2D(34069 + B, $, 0, 0, oe.width, oe.height, ue, oe.data) : t.compressedTexImage2D(34069 + B, $, de, oe.width, oe.height, 0, oe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Le ? t.texSubImage2D(34069 + B, $, 0, 0, oe.width, oe.height, ue, me, oe.data) : t.texImage2D(34069 + B, $, de, oe.width, oe.height, 0, ue, me, oe.data);
          }
        }
      } else {
        A = v.mipmaps, Le && Ue && (A.length > 0 && Ye++, t.texStorage2D(34067, Ye, de, H[0].width, H[0].height));
        for (let B = 0; B < 6; B++)
          if (ae) {
            Le ? t.texSubImage2D(34069 + B, 0, 0, 0, H[B].width, H[B].height, ue, me, H[B].data) : t.texImage2D(34069 + B, 0, de, H[B].width, H[B].height, 0, ue, me, H[B].data);
            for (let $ = 0; $ < A.length; $++) {
              const he = A[$].image[B].image;
              Le ? t.texSubImage2D(34069 + B, $ + 1, 0, 0, he.width, he.height, ue, me, he.data) : t.texImage2D(34069 + B, $ + 1, de, he.width, he.height, 0, ue, me, he.data);
            }
          } else {
            Le ? t.texSubImage2D(34069 + B, 0, 0, 0, ue, me, H[B]) : t.texImage2D(34069 + B, 0, de, ue, me, H[B]);
            for (let $ = 0; $ < A.length; $++) {
              const oe = A[$];
              Le ? t.texSubImage2D(34069 + B, $ + 1, 0, 0, ue, me, oe.image[B]) : t.texImage2D(34069 + B, $ + 1, de, ue, me, oe.image[B]);
            }
          }
      }
      C(v, ge) && F(34067), se.__version = te.version, v.onUpdate && v.onUpdate(v);
    }
    y.__version = v.version;
  }
  function le(y, v, O, J, te) {
    const se = r.convert(O.format, O.encoding), ve = r.convert(O.type), ae = g(O.internalFormat, se, ve, O.encoding);
    n.get(v).__hasExternalTextures || (te === 32879 || te === 35866 ? t.texImage3D(te, 0, ae, v.width, v.height, v.depth, 0, se, ve, null) : t.texImage2D(te, 0, ae, v.width, v.height, 0, se, ve, null)), t.bindFramebuffer(36160, y), Ne(v) ? f.framebufferTexture2DMultisampleEXT(36160, J, te, n.get(O).__webglTexture, 0, ke(v)) : (te === 3553 || te >= 34069 && te <= 34074) && s.framebufferTexture2D(36160, J, te, n.get(O).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Fe(y, v, O) {
    if (s.bindRenderbuffer(36161, y), v.depthBuffer && !v.stencilBuffer) {
      let J = 33189;
      if (O || Ne(v)) {
        const te = v.depthTexture;
        te && te.isDepthTexture && (te.type === hn ? J = 36012 : te.type === un && (J = 33190));
        const se = ke(v);
        Ne(v) ? f.renderbufferStorageMultisampleEXT(36161, se, J, v.width, v.height) : s.renderbufferStorageMultisample(36161, se, J, v.width, v.height);
      } else
        s.renderbufferStorage(36161, J, v.width, v.height);
      s.framebufferRenderbuffer(36160, 36096, 36161, y);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const J = ke(v);
      O && Ne(v) === !1 ? s.renderbufferStorageMultisample(36161, J, 35056, v.width, v.height) : Ne(v) ? f.renderbufferStorageMultisampleEXT(36161, J, 35056, v.width, v.height) : s.renderbufferStorage(36161, 34041, v.width, v.height), s.framebufferRenderbuffer(36160, 33306, 36161, y);
    } else {
      const J = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let te = 0; te < J.length; te++) {
        const se = J[te], ve = r.convert(se.format, se.encoding), ae = r.convert(se.type), H = g(se.internalFormat, ve, ae, se.encoding), pe = ke(v);
        O && Ne(v) === !1 ? s.renderbufferStorageMultisample(36161, pe, H, v.width, v.height) : Ne(v) ? f.renderbufferStorageMultisampleEXT(36161, pe, H, v.width, v.height) : s.renderbufferStorage(36161, H, v.width, v.height);
      }
    }
    s.bindRenderbuffer(36161, null);
  }
  function ye(y, v) {
    if (v && v.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, y), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), Y(v.depthTexture, 0);
    const J = n.get(v.depthTexture).__webglTexture, te = ke(v);
    if (v.depthTexture.format === dn)
      Ne(v) ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, J, 0, te) : s.framebufferTexture2D(36160, 36096, 3553, J, 0);
    else if (v.depthTexture.format === Bn)
      Ne(v) ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, J, 0, te) : s.framebufferTexture2D(36160, 33306, 3553, J, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function _e(y) {
    const v = n.get(y), O = y.isWebGLCubeRenderTarget === !0;
    if (y.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (O)
        throw new Error("target.depthTexture not supported in Cube render targets");
      ye(v.__webglFramebuffer, y);
    } else if (O) {
      v.__webglDepthbuffer = [];
      for (let J = 0; J < 6; J++)
        t.bindFramebuffer(36160, v.__webglFramebuffer[J]), v.__webglDepthbuffer[J] = s.createRenderbuffer(), Fe(v.__webglDepthbuffer[J], y, !1);
    } else
      t.bindFramebuffer(36160, v.__webglFramebuffer), v.__webglDepthbuffer = s.createRenderbuffer(), Fe(v.__webglDepthbuffer, y, !1);
    t.bindFramebuffer(36160, null);
  }
  function tt(y, v, O) {
    const J = n.get(y);
    v !== void 0 && le(J.__webglFramebuffer, y, y.texture, 36064, 3553), O !== void 0 && _e(y);
  }
  function nt(y) {
    const v = y.texture, O = n.get(y), J = n.get(v);
    y.addEventListener("dispose", Z), y.isWebGLMultipleRenderTargets !== !0 && (J.__webglTexture === void 0 && (J.__webglTexture = s.createTexture()), J.__version = v.version, o.memory.textures++);
    const te = y.isWebGLCubeRenderTarget === !0, se = y.isWebGLMultipleRenderTargets === !0, ve = M(y) || a;
    if (te) {
      O.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++)
        O.__webglFramebuffer[ae] = s.createFramebuffer();
    } else {
      if (O.__webglFramebuffer = s.createFramebuffer(), se)
        if (i.drawBuffers) {
          const ae = y.texture;
          for (let H = 0, pe = ae.length; H < pe; H++) {
            const ge = n.get(ae[H]);
            ge.__webglTexture === void 0 && (ge.__webglTexture = s.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && y.samples > 0 && Ne(y) === !1) {
        const ae = se ? v : [v];
        O.__webglMultisampledFramebuffer = s.createFramebuffer(), O.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, O.__webglMultisampledFramebuffer);
        for (let H = 0; H < ae.length; H++) {
          const pe = ae[H];
          O.__webglColorRenderbuffer[H] = s.createRenderbuffer(), s.bindRenderbuffer(36161, O.__webglColorRenderbuffer[H]);
          const ge = r.convert(pe.format, pe.encoding), ue = r.convert(pe.type), me = g(pe.internalFormat, ge, ue, pe.encoding, y.isXRRenderTarget === !0), de = ke(y);
          s.renderbufferStorageMultisample(36161, de, me, y.width, y.height), s.framebufferRenderbuffer(36160, 36064 + H, 36161, O.__webglColorRenderbuffer[H]);
        }
        s.bindRenderbuffer(36161, null), y.depthBuffer && (O.__webglDepthRenderbuffer = s.createRenderbuffer(), Fe(O.__webglDepthRenderbuffer, y, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (te) {
      t.bindTexture(34067, J.__webglTexture), k(34067, v, ve);
      for (let ae = 0; ae < 6; ae++)
        le(O.__webglFramebuffer[ae], y, v, 36064, 34069 + ae);
      C(v, ve) && F(34067), t.unbindTexture();
    } else if (se) {
      const ae = y.texture;
      for (let H = 0, pe = ae.length; H < pe; H++) {
        const ge = ae[H], ue = n.get(ge);
        t.bindTexture(3553, ue.__webglTexture), k(3553, ge, ve), le(O.__webglFramebuffer, y, ge, 36064 + H, 3553), C(ge, ve) && F(3553);
      }
      t.unbindTexture();
    } else {
      let ae = 3553;
      (y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (a ? ae = y.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(ae, J.__webglTexture), k(ae, v, ve), le(O.__webglFramebuffer, y, v, 36064, ae), C(v, ve) && F(ae), t.unbindTexture();
    }
    y.depthBuffer && _e(y);
  }
  function it(y) {
    const v = M(y) || a, O = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture];
    for (let J = 0, te = O.length; J < te; J++) {
      const se = O[J];
      if (C(se, v)) {
        const ve = y.isWebGLCubeRenderTarget ? 34067 : 3553, ae = n.get(se).__webglTexture;
        t.bindTexture(ve, ae), F(ve), t.unbindTexture();
      }
    }
  }
  function _t(y) {
    if (a && y.samples > 0 && Ne(y) === !1) {
      const v = y.isWebGLMultipleRenderTargets ? y.texture : [y.texture], O = y.width, J = y.height;
      let te = 16384;
      const se = [], ve = y.stencilBuffer ? 33306 : 36096, ae = n.get(y), H = y.isWebGLMultipleRenderTargets === !0;
      if (H)
        for (let pe = 0; pe < v.length; pe++)
          t.bindFramebuffer(36160, ae.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(36160, 36064 + pe, 36161, null), t.bindFramebuffer(36160, ae.__webglFramebuffer), s.framebufferTexture2D(36009, 36064 + pe, 3553, null, 0);
      t.bindFramebuffer(36008, ae.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, ae.__webglFramebuffer);
      for (let pe = 0; pe < v.length; pe++) {
        se.push(36064 + pe), y.depthBuffer && se.push(ve);
        const ge = ae.__ignoreDepthValues !== void 0 ? ae.__ignoreDepthValues : !1;
        if (ge === !1 && (y.depthBuffer && (te |= 256), y.stencilBuffer && (te |= 1024)), H && s.framebufferRenderbuffer(36008, 36064, 36161, ae.__webglColorRenderbuffer[pe]), ge === !0 && (s.invalidateFramebuffer(36008, [ve]), s.invalidateFramebuffer(36009, [ve])), H) {
          const ue = n.get(v[pe]).__webglTexture;
          s.framebufferTexture2D(36009, 36064, 3553, ue, 0);
        }
        s.blitFramebuffer(0, 0, O, J, 0, 0, O, J, te, 9728), m && s.invalidateFramebuffer(36008, se);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), H)
        for (let pe = 0; pe < v.length; pe++) {
          t.bindFramebuffer(36160, ae.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(36160, 36064 + pe, 36161, ae.__webglColorRenderbuffer[pe]);
          const ge = n.get(v[pe]).__webglTexture;
          t.bindFramebuffer(36160, ae.__webglFramebuffer), s.framebufferTexture2D(36009, 36064 + pe, 3553, ge, 0);
        }
      t.bindFramebuffer(36009, ae.__webglMultisampledFramebuffer);
    }
  }
  function ke(y) {
    return Math.min(d, y.samples);
  }
  function Ne(y) {
    const v = n.get(y);
    return a && y.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function Pt(y) {
    const v = o.render.frame;
    x.get(y) !== v && (x.set(y, v), y.update());
  }
  function yt(y, v) {
    const O = y.encoding, J = y.format, te = y.type;
    return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || y.format === Sr || O !== mn && (O === Oe ? a === !1 ? e.has("EXT_sRGB") === !0 && J === Ct ? (y.format = Sr, y.minFilter = Mt, y.generateMipmaps = !1) : v = na.sRGBToLinear(v) : (J !== Ct || te !== pn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", O)), v;
  }
  this.allocateTextureUnit = X, this.resetTextureUnits = K, this.setTexture2D = Y, this.setTexture2DArray = G, this.setTexture3D = U, this.setTextureCube = ie, this.rebindTextures = tt, this.setupRenderTarget = nt, this.updateRenderTargetMipmap = it, this.updateMultisampleRenderTarget = _t, this.setupDepthRenderbuffer = _e, this.setupFrameBufferTexture = le, this.useMultisampledRTT = Ne;
}
function fd(s, e, t) {
  const n = t.isWebGL2;
  function i(r, o = null) {
    let a;
    if (r === pn)
      return 5121;
    if (r === ro)
      return 32819;
    if (r === so)
      return 32820;
    if (r === to)
      return 5120;
    if (r === no)
      return 5122;
    if (r === Qs)
      return 5123;
    if (r === io)
      return 5124;
    if (r === un)
      return 5125;
    if (r === hn)
      return 5126;
    if (r === Jn)
      return n ? 5131 : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (r === ao)
      return 6406;
    if (r === Ct)
      return 6408;
    if (r === lo)
      return 6409;
    if (r === co)
      return 6410;
    if (r === dn)
      return 6402;
    if (r === Bn)
      return 34041;
    if (r === oo)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (r === Sr)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === uo)
      return 6403;
    if (r === ho)
      return 36244;
    if (r === fo)
      return 33319;
    if (r === po)
      return 33320;
    if (r === mo)
      return 36249;
    if (r === Ui || r === zi || r === Oi || r === Bi)
      if (o === Oe)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (r === Ui)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === zi)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Oi)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === Bi)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (r === Ui)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === zi)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Oi)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === Bi)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (r === Wr || r === Hr || r === Xr || r === qr)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (r === Wr)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === Hr)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === Xr)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === qr)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (r === go)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (r === Yr || r === jr)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (r === Yr)
          return o === Oe ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === jr)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (r === Zr || r === $r || r === Jr || r === Kr || r === Qr || r === es || r === ts || r === ns || r === is || r === rs || r === ss || r === as || r === os || r === ls)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (r === Zr)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === $r)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === Jr)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === Kr)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === Qr)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === es)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === ts)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === ns)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === is)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === rs)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === ss)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === as)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === os)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === ls)
          return o === Oe ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (r === cs)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (r === cs)
          return o === Oe ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    return r === Nn ? n ? 34042 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : s[r] !== void 0 ? s[r] : null;
  }
  return { convert: i };
}
class pd extends Et {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Ti extends Ke {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const md = { type: "move" };
class pr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Ti(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ti(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new I(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new I()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Ti(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new I(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new I()), this._grip;
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
          const h = t.getJointPose(p, n), _ = this._getHandJoint(l, p);
          h !== null && (_.matrix.fromArray(h.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.jointRadius = h.radius), _.visible = h !== null;
        }
        const u = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], f = u.position.distanceTo(d.position), m = 0.02, x = 5e-3;
        l.inputState.pinching && f > m + x ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && f <= m - x && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(md)));
    }
    return a !== null && (a.visible = i !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Ti();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class gd extends mt {
  constructor(e, t, n, i, r, o, a, c, l, u) {
    if (u = u !== void 0 ? u : dn, u !== dn && u !== Bn)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === dn && (n = un), n === void 0 && u === Bn && (n = Nn), super(null, i, r, o, a, c, u, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : ot, this.minFilter = c !== void 0 ? c : ot, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class _d extends Vn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, o = null, a = "local-floor", c = null, l = null, u = null, d = null, f = null, m = null;
    const x = t.getContextAttributes();
    let p = null, h = null;
    const _ = [], T = [], b = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), w = new Et();
    w.layers.enable(1), w.viewport = new Je();
    const C = new Et();
    C.layers.enable(2), C.viewport = new Je();
    const F = [w, C], g = new pd();
    g.layers.enable(1), g.layers.enable(2);
    let E = null, D = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(G) {
      let U = _[G];
      return U === void 0 && (U = new pr(), _[G] = U), U.getTargetRaySpace();
    }, this.getControllerGrip = function(G) {
      let U = _[G];
      return U === void 0 && (U = new pr(), _[G] = U), U.getGripSpace();
    }, this.getHand = function(G) {
      let U = _[G];
      return U === void 0 && (U = new pr(), _[G] = U), U.getHandSpace();
    };
    function q(G) {
      const U = T.indexOf(G.inputSource);
      if (U === -1)
        return;
      const ie = _[U];
      ie !== void 0 && ie.dispatchEvent({ type: G.type, data: G.inputSource });
    }
    function Z() {
      i.removeEventListener("select", q), i.removeEventListener("selectstart", q), i.removeEventListener("selectend", q), i.removeEventListener("squeeze", q), i.removeEventListener("squeezestart", q), i.removeEventListener("squeezeend", q), i.removeEventListener("end", Z), i.removeEventListener("inputsourceschange", N);
      for (let G = 0; G < _.length; G++) {
        const U = T[G];
        U !== null && (T[G] = null, _[G].disconnect(U));
      }
      E = null, D = null, e.setRenderTarget(p), f = null, d = null, u = null, i = null, h = null, Y.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(G) {
      r = G, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(G) {
      a = G, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(G) {
      c = G;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(G) {
      if (i = G, i !== null) {
        if (p = e.getRenderTarget(), i.addEventListener("select", q), i.addEventListener("selectstart", q), i.addEventListener("selectend", q), i.addEventListener("squeeze", q), i.addEventListener("squeezestart", q), i.addEventListener("squeezeend", q), i.addEventListener("end", Z), i.addEventListener("inputsourceschange", N), x.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const U = {
            antialias: i.renderState.layers === void 0 ? x.antialias : !0,
            alpha: x.alpha,
            depth: x.depth,
            stencil: x.stencil,
            framebufferScaleFactor: r
          };
          f = new XRWebGLLayer(i, t, U), i.updateRenderState({ baseLayer: f }), h = new gn(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: Ct,
              type: pn,
              encoding: e.outputEncoding,
              stencilBuffer: x.stencil
            }
          );
        } else {
          let U = null, ie = null, ee = null;
          x.depth && (ee = x.stencil ? 35056 : 33190, U = x.stencil ? Bn : dn, ie = x.stencil ? Nn : un);
          const re = {
            colorFormat: 32856,
            depthFormat: ee,
            scaleFactor: r
          };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(re), i.updateRenderState({ layers: [d] }), h = new gn(
            d.textureWidth,
            d.textureHeight,
            {
              format: Ct,
              type: pn,
              depthTexture: new gd(d.textureWidth, d.textureHeight, ie, void 0, void 0, void 0, void 0, void 0, void 0, U),
              stencilBuffer: x.stencil,
              encoding: e.outputEncoding,
              samples: x.antialias ? 4 : 0
            }
          );
          const k = e.properties.get(h);
          k.__ignoreDepthValues = d.ignoreDepthValues;
        }
        h.isXRRenderTarget = !0, this.setFoveation(1), c = null, o = await i.requestReferenceSpace(a), Y.setContext(i), Y.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function N(G) {
      for (let U = 0; U < G.removed.length; U++) {
        const ie = G.removed[U], ee = T.indexOf(ie);
        ee >= 0 && (T[ee] = null, _[ee].disconnect(ie));
      }
      for (let U = 0; U < G.added.length; U++) {
        const ie = G.added[U];
        let ee = T.indexOf(ie);
        if (ee === -1) {
          for (let k = 0; k < _.length; k++)
            if (k >= T.length) {
              T.push(ie), ee = k;
              break;
            } else if (T[k] === null) {
              T[k] = ie, ee = k;
              break;
            }
          if (ee === -1)
            break;
        }
        const re = _[ee];
        re && re.connect(ie);
      }
    }
    const R = new I(), W = new I();
    function j(G, U, ie) {
      R.setFromMatrixPosition(U.matrixWorld), W.setFromMatrixPosition(ie.matrixWorld);
      const ee = R.distanceTo(W), re = U.projectionMatrix.elements, k = ie.projectionMatrix.elements, Ce = re[14] / (re[10] - 1), ce = re[14] / (re[10] + 1), xe = (re[9] + 1) / re[5], le = (re[9] - 1) / re[5], Fe = (re[8] - 1) / re[0], ye = (k[8] + 1) / k[0], _e = Ce * Fe, tt = Ce * ye, nt = ee / (-Fe + ye), it = nt * -Fe;
      U.matrixWorld.decompose(G.position, G.quaternion, G.scale), G.translateX(it), G.translateZ(nt), G.matrixWorld.compose(G.position, G.quaternion, G.scale), G.matrixWorldInverse.copy(G.matrixWorld).invert();
      const _t = Ce + nt, ke = ce + nt, Ne = _e - it, Pt = tt + (ee - it), yt = xe * ce / ke * _t, y = le * ce / ke * _t;
      G.projectionMatrix.makePerspective(Ne, Pt, yt, y, _t, ke);
    }
    function K(G, U) {
      U === null ? G.matrixWorld.copy(G.matrix) : G.matrixWorld.multiplyMatrices(U.matrixWorld, G.matrix), G.matrixWorldInverse.copy(G.matrixWorld).invert();
    }
    this.updateCamera = function(G) {
      if (i === null)
        return;
      g.near = C.near = w.near = G.near, g.far = C.far = w.far = G.far, (E !== g.near || D !== g.far) && (i.updateRenderState({
        depthNear: g.near,
        depthFar: g.far
      }), E = g.near, D = g.far);
      const U = G.parent, ie = g.cameras;
      K(g, U);
      for (let re = 0; re < ie.length; re++)
        K(ie[re], U);
      g.matrixWorld.decompose(g.position, g.quaternion, g.scale), G.matrix.copy(g.matrix), G.matrix.decompose(G.position, G.quaternion, G.scale);
      const ee = G.children;
      for (let re = 0, k = ee.length; re < k; re++)
        ee[re].updateMatrixWorld(!0);
      ie.length === 2 ? j(g, w, C) : g.projectionMatrix.copy(w.projectionMatrix);
    }, this.getCamera = function() {
      return g;
    }, this.getFoveation = function() {
      if (d !== null)
        return d.fixedFoveation;
      if (f !== null)
        return f.fixedFoveation;
    }, this.setFoveation = function(G) {
      d !== null && (d.fixedFoveation = G), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = G);
    }, this.getPlanes = function() {
      return b;
    };
    let X = null;
    function Q(G, U) {
      if (l = U.getViewerPose(c || o), m = U, l !== null) {
        const ie = l.views;
        f !== null && (e.setRenderTargetFramebuffer(h, f.framebuffer), e.setRenderTarget(h));
        let ee = !1;
        ie.length !== g.cameras.length && (g.cameras.length = 0, ee = !0);
        for (let re = 0; re < ie.length; re++) {
          const k = ie[re];
          let Ce = null;
          if (f !== null)
            Ce = f.getViewport(k);
          else {
            const xe = u.getViewSubImage(d, k);
            Ce = xe.viewport, re === 0 && (e.setRenderTargetTextures(
              h,
              xe.colorTexture,
              d.ignoreDepthValues ? void 0 : xe.depthStencilTexture
            ), e.setRenderTarget(h));
          }
          let ce = F[re];
          ce === void 0 && (ce = new Et(), ce.layers.enable(re), ce.viewport = new Je(), F[re] = ce), ce.matrix.fromArray(k.transform.matrix), ce.projectionMatrix.fromArray(k.projectionMatrix), ce.viewport.set(Ce.x, Ce.y, Ce.width, Ce.height), re === 0 && g.matrix.copy(ce.matrix), ee === !0 && g.cameras.push(ce);
        }
      }
      for (let ie = 0; ie < _.length; ie++) {
        const ee = T[ie], re = _[ie];
        ee !== null && re !== void 0 && re.update(ee, U, c || o);
      }
      if (X && X(G, U), U.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: U.detectedPlanes });
        let ie = null;
        for (const ee of b)
          U.detectedPlanes.has(ee) || (ie === null && (ie = []), ie.push(ee));
        if (ie !== null)
          for (const ee of ie)
            b.delete(ee), M.delete(ee), n.dispatchEvent({ type: "planeremoved", data: ee });
        for (const ee of U.detectedPlanes)
          if (!b.has(ee))
            b.add(ee), M.set(ee, U.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: ee });
          else {
            const re = M.get(ee);
            ee.lastChangedTime > re && (M.set(ee, ee.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: ee }));
          }
      }
      m = null;
    }
    const Y = new da();
    Y.setAnimationLoop(Q), this.setAnimationLoop = function(G) {
      X = G;
    }, this.dispose = function() {
    };
  }
}
function xd(s, e) {
  function t(p, h) {
    h.color.getRGB(p.fogColor.value, ca(s)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function n(p, h, _, T, b) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? i(p, h) : h.isMeshToonMaterial ? (i(p, h), u(p, h)) : h.isMeshPhongMaterial ? (i(p, h), l(p, h)) : h.isMeshStandardMaterial ? (i(p, h), d(p, h), h.isMeshPhysicalMaterial && f(p, h, b)) : h.isMeshMatcapMaterial ? (i(p, h), m(p, h)) : h.isMeshDepthMaterial ? i(p, h) : h.isMeshDistanceMaterial ? (i(p, h), x(p, h)) : h.isMeshNormalMaterial ? i(p, h) : h.isLineBasicMaterial ? (r(p, h), h.isLineDashedMaterial && o(p, h)) : h.isPointsMaterial ? a(p, h, _, T) : h.isSpriteMaterial ? c(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function i(p, h) {
    p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map), h.alphaMap && (p.alphaMap.value = h.alphaMap), h.bumpMap && (p.bumpMap.value = h.bumpMap, p.bumpScale.value = h.bumpScale, h.side === St && (p.bumpScale.value *= -1)), h.displacementMap && (p.displacementMap.value = h.displacementMap, p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap), h.normalMap && (p.normalMap.value = h.normalMap, p.normalScale.value.copy(h.normalScale), h.side === St && p.normalScale.value.negate()), h.specularMap && (p.specularMap.value = h.specularMap), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const _ = e.get(h).envMap;
    if (_ && (p.envMap.value = _, p.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap) {
      p.lightMap.value = h.lightMap;
      const M = s.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = h.lightMapIntensity * M;
    }
    h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity);
    let T;
    h.map ? T = h.map : h.specularMap ? T = h.specularMap : h.displacementMap ? T = h.displacementMap : h.normalMap ? T = h.normalMap : h.bumpMap ? T = h.bumpMap : h.roughnessMap ? T = h.roughnessMap : h.metalnessMap ? T = h.metalnessMap : h.alphaMap ? T = h.alphaMap : h.emissiveMap ? T = h.emissiveMap : h.clearcoatMap ? T = h.clearcoatMap : h.clearcoatNormalMap ? T = h.clearcoatNormalMap : h.clearcoatRoughnessMap ? T = h.clearcoatRoughnessMap : h.iridescenceMap ? T = h.iridescenceMap : h.iridescenceThicknessMap ? T = h.iridescenceThicknessMap : h.specularIntensityMap ? T = h.specularIntensityMap : h.specularColorMap ? T = h.specularColorMap : h.transmissionMap ? T = h.transmissionMap : h.thicknessMap ? T = h.thicknessMap : h.sheenColorMap ? T = h.sheenColorMap : h.sheenRoughnessMap && (T = h.sheenRoughnessMap), T !== void 0 && (T.isWebGLRenderTarget && (T = T.texture), T.matrixAutoUpdate === !0 && T.updateMatrix(), p.uvTransform.value.copy(T.matrix));
    let b;
    h.aoMap ? b = h.aoMap : h.lightMap && (b = h.lightMap), b !== void 0 && (b.isWebGLRenderTarget && (b = b.texture), b.matrixAutoUpdate === !0 && b.updateMatrix(), p.uv2Transform.value.copy(b.matrix));
  }
  function r(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity;
  }
  function o(p, h) {
    p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale;
  }
  function a(p, h, _, T) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * _, p.scale.value = T * 0.5, h.map && (p.map.value = h.map), h.alphaMap && (p.alphaMap.value = h.alphaMap), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    let b;
    h.map ? b = h.map : h.alphaMap && (b = h.alphaMap), b !== void 0 && (b.matrixAutoUpdate === !0 && b.updateMatrix(), p.uvTransform.value.copy(b.matrix));
  }
  function c(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map), h.alphaMap && (p.alphaMap.value = h.alphaMap), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    let _;
    h.map ? _ = h.map : h.alphaMap && (_ = h.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), p.uvTransform.value.copy(_.matrix));
  }
  function l(p, h) {
    p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function u(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function d(p, h) {
    p.roughness.value = h.roughness, p.metalness.value = h.metalness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap), h.metalnessMap && (p.metalnessMap.value = h.metalnessMap), e.get(h).envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function f(p, h, _) {
    p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap)), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap), h.clearcoatNormalMap && (p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), p.clearcoatNormalMap.value = h.clearcoatNormalMap, h.side === St && p.clearcoatNormalScale.value.negate())), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap)), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = _.texture, p.transmissionSamplerSize.value.set(_.width, _.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap);
  }
  function m(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function x(p, h) {
    p.referencePosition.value.copy(h.referencePosition), p.nearDistance.value = h.nearDistance, p.farDistance.value = h.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function vd(s, e, t, n) {
  let i = {}, r = {}, o = [];
  const a = t.isWebGL2 ? s.getParameter(35375) : 0;
  function c(T, b) {
    const M = b.program;
    n.uniformBlockBinding(T, M);
  }
  function l(T, b) {
    let M = i[T.id];
    M === void 0 && (x(T), M = u(T), i[T.id] = M, T.addEventListener("dispose", h));
    const w = b.program;
    n.updateUBOMapping(T, w);
    const C = e.render.frame;
    r[T.id] !== C && (f(T), r[T.id] = C);
  }
  function u(T) {
    const b = d();
    T.__bindingPointIndex = b;
    const M = s.createBuffer(), w = T.__size, C = T.usage;
    return s.bindBuffer(35345, M), s.bufferData(35345, w, C), s.bindBuffer(35345, null), s.bindBufferBase(35345, b, M), M;
  }
  function d() {
    for (let T = 0; T < a; T++)
      if (o.indexOf(T) === -1)
        return o.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(T) {
    const b = i[T.id], M = T.uniforms, w = T.__cache;
    s.bindBuffer(35345, b);
    for (let C = 0, F = M.length; C < F; C++) {
      const g = M[C];
      if (m(g, C, w) === !0) {
        const E = g.value, D = g.__offset;
        typeof E == "number" ? (g.__data[0] = E, s.bufferSubData(35345, D, g.__data)) : (g.value.isMatrix3 ? (g.__data[0] = g.value.elements[0], g.__data[1] = g.value.elements[1], g.__data[2] = g.value.elements[2], g.__data[3] = g.value.elements[0], g.__data[4] = g.value.elements[3], g.__data[5] = g.value.elements[4], g.__data[6] = g.value.elements[5], g.__data[7] = g.value.elements[0], g.__data[8] = g.value.elements[6], g.__data[9] = g.value.elements[7], g.__data[10] = g.value.elements[8], g.__data[11] = g.value.elements[0]) : E.toArray(g.__data), s.bufferSubData(35345, D, g.__data));
      }
    }
    s.bindBuffer(35345, null);
  }
  function m(T, b, M) {
    const w = T.value;
    if (M[b] === void 0)
      return typeof w == "number" ? M[b] = w : M[b] = w.clone(), !0;
    if (typeof w == "number") {
      if (M[b] !== w)
        return M[b] = w, !0;
    } else {
      const C = M[b];
      if (C.equals(w) === !1)
        return C.copy(w), !0;
    }
    return !1;
  }
  function x(T) {
    const b = T.uniforms;
    let M = 0;
    const w = 16;
    let C = 0;
    for (let F = 0, g = b.length; F < g; F++) {
      const E = b[F], D = p(E);
      if (E.__data = new Float32Array(D.storage / Float32Array.BYTES_PER_ELEMENT), E.__offset = M, F > 0) {
        C = M % w;
        const q = w - C;
        C !== 0 && q - D.boundary < 0 && (M += w - C, E.__offset = M);
      }
      M += D.storage;
    }
    return C = M % w, C > 0 && (M += w - C), T.__size = M, T.__cache = {}, this;
  }
  function p(T) {
    const b = T.value, M = {
      boundary: 0,
      storage: 0
    };
    return typeof b == "number" ? (M.boundary = 4, M.storage = 4) : b.isVector2 ? (M.boundary = 8, M.storage = 8) : b.isVector3 || b.isColor ? (M.boundary = 16, M.storage = 12) : b.isVector4 ? (M.boundary = 16, M.storage = 16) : b.isMatrix3 ? (M.boundary = 48, M.storage = 48) : b.isMatrix4 ? (M.boundary = 64, M.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), M;
  }
  function h(T) {
    const b = T.target;
    b.removeEventListener("dispose", h);
    const M = o.indexOf(b.__bindingPointIndex);
    o.splice(M, 1), s.deleteBuffer(i[b.id]), delete i[b.id], delete r[b.id];
  }
  function _() {
    for (const T in i)
      s.deleteBuffer(i[T]);
    o = [], i = {}, r = {};
  }
  return {
    bind: c,
    update: l,
    dispose: _
  };
}
function Md() {
  const s = Ci("canvas");
  return s.style.display = "block", s;
}
function Sd(s = {}) {
  this.isWebGLRenderer = !0;
  const e = s.canvas !== void 0 ? s.canvas : Md(), t = s.context !== void 0 ? s.context : null, n = s.depth !== void 0 ? s.depth : !0, i = s.stencil !== void 0 ? s.stencil : !0, r = s.antialias !== void 0 ? s.antialias : !1, o = s.premultipliedAlpha !== void 0 ? s.premultipliedAlpha : !0, a = s.preserveDrawingBuffer !== void 0 ? s.preserveDrawingBuffer : !1, c = s.powerPreference !== void 0 ? s.powerPreference : "default", l = s.failIfMajorPerformanceCaveat !== void 0 ? s.failIfMajorPerformanceCaveat : !1;
  let u;
  t !== null ? u = t.getContextAttributes().alpha : u = s.alpha !== void 0 ? s.alpha : !1;
  let d = null, f = null;
  const m = [], x = [];
  this.domElement = e, this.debug = {
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = mn, this.physicallyCorrectLights = !1, this.toneMapping = Vt, this.toneMappingExposure = 1;
  const p = this;
  let h = !1, _ = 0, T = 0, b = null, M = -1, w = null;
  const C = new Je(), F = new Je();
  let g = null, E = e.width, D = e.height, q = 1, Z = null, N = null;
  const R = new Je(0, 0, E, D), W = new Je(0, 0, E, D);
  let j = !1;
  const K = new Cr();
  let X = !1, Q = !1, Y = null;
  const G = new He(), U = new Re(), ie = new I(), ee = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function re() {
    return b === null ? q : 1;
  }
  let k = t;
  function Ce(S, P) {
    for (let z = 0; z < S.length; z++) {
      const L = S[z], V = e.getContext(L, P);
      if (V !== null)
        return V;
    }
    return null;
  }
  try {
    const S = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: r,
      premultipliedAlpha: o,
      preserveDrawingBuffer: a,
      powerPreference: c,
      failIfMajorPerformanceCaveat: l
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${wr}`), e.addEventListener("webglcontextlost", me, !1), e.addEventListener("webglcontextrestored", de, !1), e.addEventListener("webglcontextcreationerror", Le, !1), k === null) {
      const P = ["webgl2", "webgl", "experimental-webgl"];
      if (p.isWebGL1Renderer === !0 && P.shift(), k = Ce(P, S), k === null)
        throw Ce(P) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    k.getShaderPrecisionFormat === void 0 && (k.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (S) {
    throw console.error("THREE.WebGLRenderer: " + S.message), S;
  }
  let ce, xe, le, Fe, ye, _e, tt, nt, it, _t, ke, Ne, Pt, yt, y, v, O, J, te, se, ve, ae, H, pe;
  function ge() {
    ce = new Ru(k), xe = new Tu(k, ce, s), ce.init(xe), ae = new fd(k, ce, xe), le = new hd(k, ce, xe), Fe = new Fu(), ye = new Jh(), _e = new dd(k, ce, le, ye, xe, ae, Fe), tt = new Au(p), nt = new Du(p), it = new Wo(k, xe), H = new bu(k, ce, it, xe), _t = new Pu(k, it, Fe, H), ke = new Ou(k, _t, it, Fe), te = new zu(k, xe, _e), v = new Eu(ye), Ne = new $h(p, tt, nt, ce, xe, H, v), Pt = new xd(p, ye), yt = new Qh(), y = new sd(ce, xe), J = new yu(p, tt, nt, le, ke, u, o), O = new ud(p, ke, xe), pe = new vd(k, Fe, xe, le), se = new wu(k, ce, Fe, xe), ve = new Iu(k, ce, Fe, xe), Fe.programs = Ne.programs, p.capabilities = xe, p.extensions = ce, p.properties = ye, p.renderLists = yt, p.shadowMap = O, p.state = le, p.info = Fe;
  }
  ge();
  const ue = new _d(p, k);
  this.xr = ue, this.getContext = function() {
    return k;
  }, this.getContextAttributes = function() {
    return k.getContextAttributes();
  }, this.forceContextLoss = function() {
    const S = ce.get("WEBGL_lose_context");
    S && S.loseContext();
  }, this.forceContextRestore = function() {
    const S = ce.get("WEBGL_lose_context");
    S && S.restoreContext();
  }, this.getPixelRatio = function() {
    return q;
  }, this.setPixelRatio = function(S) {
    S !== void 0 && (q = S, this.setSize(E, D, !1));
  }, this.getSize = function(S) {
    return S.set(E, D);
  }, this.setSize = function(S, P, z) {
    if (ue.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    E = S, D = P, e.width = Math.floor(S * q), e.height = Math.floor(P * q), z !== !1 && (e.style.width = S + "px", e.style.height = P + "px"), this.setViewport(0, 0, S, P);
  }, this.getDrawingBufferSize = function(S) {
    return S.set(E * q, D * q).floor();
  }, this.setDrawingBufferSize = function(S, P, z) {
    E = S, D = P, q = z, e.width = Math.floor(S * z), e.height = Math.floor(P * z), this.setViewport(0, 0, S, P);
  }, this.getCurrentViewport = function(S) {
    return S.copy(C);
  }, this.getViewport = function(S) {
    return S.copy(R);
  }, this.setViewport = function(S, P, z, L) {
    S.isVector4 ? R.set(S.x, S.y, S.z, S.w) : R.set(S, P, z, L), le.viewport(C.copy(R).multiplyScalar(q).floor());
  }, this.getScissor = function(S) {
    return S.copy(W);
  }, this.setScissor = function(S, P, z, L) {
    S.isVector4 ? W.set(S.x, S.y, S.z, S.w) : W.set(S, P, z, L), le.scissor(F.copy(W).multiplyScalar(q).floor());
  }, this.getScissorTest = function() {
    return j;
  }, this.setScissorTest = function(S) {
    le.setScissorTest(j = S);
  }, this.setOpaqueSort = function(S) {
    Z = S;
  }, this.setTransparentSort = function(S) {
    N = S;
  }, this.getClearColor = function(S) {
    return S.copy(J.getClearColor());
  }, this.setClearColor = function() {
    J.setClearColor.apply(J, arguments);
  }, this.getClearAlpha = function() {
    return J.getClearAlpha();
  }, this.setClearAlpha = function() {
    J.setClearAlpha.apply(J, arguments);
  }, this.clear = function(S = !0, P = !0, z = !0) {
    let L = 0;
    S && (L |= 16384), P && (L |= 256), z && (L |= 1024), k.clear(L);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", me, !1), e.removeEventListener("webglcontextrestored", de, !1), e.removeEventListener("webglcontextcreationerror", Le, !1), yt.dispose(), y.dispose(), ye.dispose(), tt.dispose(), nt.dispose(), ke.dispose(), H.dispose(), pe.dispose(), Ne.dispose(), ue.dispose(), ue.removeEventListener("sessionstart", oe), ue.removeEventListener("sessionend", he), Y && (Y.dispose(), Y = null), Pe.stop();
  };
  function me(S) {
    S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), h = !0;
  }
  function de() {
    console.log("THREE.WebGLRenderer: Context Restored."), h = !1;
    const S = Fe.autoReset, P = O.enabled, z = O.autoUpdate, L = O.needsUpdate, V = O.type;
    ge(), Fe.autoReset = S, O.enabled = P, O.autoUpdate = z, O.needsUpdate = L, O.type = V;
  }
  function Le(S) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
  }
  function Ue(S) {
    const P = S.target;
    P.removeEventListener("dispose", Ue), Ye(P);
  }
  function Ye(S) {
    A(S), ye.remove(S);
  }
  function A(S) {
    const P = ye.get(S).programs;
    P !== void 0 && (P.forEach(function(z) {
      Ne.releaseProgram(z);
    }), S.isShaderMaterial && Ne.releaseShaderCache(S));
  }
  this.renderBufferDirect = function(S, P, z, L, V, fe) {
    P === null && (P = ee);
    const Me = V.isMesh && V.matrixWorld.determinant() < 0, be = Sa(S, P, z, L, V);
    le.setMaterial(L, Me);
    let we = z.index, De = 1;
    L.wireframe === !0 && (we = _t.getWireframeAttribute(z), De = 2);
    const Te = z.drawRange, Ee = z.attributes.position;
    let Be = Te.start * De, ct = (Te.start + Te.count) * De;
    fe !== null && (Be = Math.max(Be, fe.start * De), ct = Math.min(ct, (fe.start + fe.count) * De)), we !== null ? (Be = Math.max(Be, 0), ct = Math.min(ct, we.count)) : Ee != null && (Be = Math.max(Be, 0), ct = Math.min(ct, Ee.count));
    const Ft = ct - Be;
    if (Ft < 0 || Ft === 1 / 0)
      return;
    H.setup(V, L, be, z, we);
    let en, Ge = se;
    if (we !== null && (en = it.get(we), Ge = ve, Ge.setIndex(en)), V.isMesh)
      L.wireframe === !0 ? (le.setLineWidth(L.wireframeLinewidth * re()), Ge.setMode(1)) : Ge.setMode(4);
    else if (V.isLine) {
      let Ae = L.linewidth;
      Ae === void 0 && (Ae = 1), le.setLineWidth(Ae * re()), V.isLineSegments ? Ge.setMode(1) : V.isLineLoop ? Ge.setMode(2) : Ge.setMode(3);
    } else
      V.isPoints ? Ge.setMode(0) : V.isSprite && Ge.setMode(4);
    if (V.isInstancedMesh)
      Ge.renderInstances(Be, Ft, V.count);
    else if (z.isInstancedBufferGeometry) {
      const Ae = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0, Pi = Math.min(z.instanceCount, Ae);
      Ge.renderInstances(Be, Ft, Pi);
    } else
      Ge.render(Be, Ft);
  }, this.compile = function(S, P) {
    function z(L, V, fe) {
      L.transparent === !0 && L.side === $t ? (L.side = St, L.needsUpdate = !0, xt(L, V, fe), L.side = Un, L.needsUpdate = !0, xt(L, V, fe), L.side = $t) : xt(L, V, fe);
    }
    f = y.get(S), f.init(), x.push(f), S.traverseVisible(function(L) {
      L.isLight && L.layers.test(P.layers) && (f.pushLight(L), L.castShadow && f.pushShadow(L));
    }), f.setupLights(p.physicallyCorrectLights), S.traverse(function(L) {
      const V = L.material;
      if (V)
        if (Array.isArray(V))
          for (let fe = 0; fe < V.length; fe++) {
            const Me = V[fe];
            z(Me, S, L);
          }
        else
          z(V, S, L);
    }), x.pop(), f = null;
  };
  let B = null;
  function $(S) {
    B && B(S);
  }
  function oe() {
    Pe.stop();
  }
  function he() {
    Pe.start();
  }
  const Pe = new da();
  Pe.setAnimationLoop($), typeof self < "u" && Pe.setContext(self), this.setAnimationLoop = function(S) {
    B = S, ue.setAnimationLoop(S), S === null ? Pe.stop() : Pe.start();
  }, ue.addEventListener("sessionstart", oe), ue.addEventListener("sessionend", he), this.render = function(S, P) {
    if (P !== void 0 && P.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (h === !0)
      return;
    S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), P.parent === null && P.matrixWorldAutoUpdate === !0 && P.updateMatrixWorld(), ue.enabled === !0 && ue.isPresenting === !0 && (ue.cameraAutoUpdate === !0 && ue.updateCamera(P), P = ue.getCamera()), S.isScene === !0 && S.onBeforeRender(p, S, P, b), f = y.get(S, x.length), f.init(), x.push(f), G.multiplyMatrices(P.projectionMatrix, P.matrixWorldInverse), K.setFromProjectionMatrix(G), Q = this.localClippingEnabled, X = v.init(this.clippingPlanes, Q, P), d = yt.get(S, m.length), d.init(), m.push(d), je(S, P, 0, p.sortObjects), d.finish(), p.sortObjects === !0 && d.sort(Z, N), X === !0 && v.beginShadows();
    const z = f.state.shadowsArray;
    if (O.render(z, S, P), X === !0 && v.endShadows(), this.info.autoReset === !0 && this.info.reset(), J.render(d, S), f.setupLights(p.physicallyCorrectLights), P.isArrayCamera) {
      const L = P.cameras;
      for (let V = 0, fe = L.length; V < fe; V++) {
        const Me = L[V];
        Qe(d, S, Me, Me.viewport);
      }
    } else
      Qe(d, S, P);
    b !== null && (_e.updateMultisampleRenderTarget(b), _e.updateRenderTargetMipmap(b)), S.isScene === !0 && S.onAfterRender(p, S, P), H.resetDefaultState(), M = -1, w = null, x.pop(), x.length > 0 ? f = x[x.length - 1] : f = null, m.pop(), m.length > 0 ? d = m[m.length - 1] : d = null;
  };
  function je(S, P, z, L) {
    if (S.visible === !1)
      return;
    if (S.layers.test(P.layers)) {
      if (S.isGroup)
        z = S.renderOrder;
      else if (S.isLOD)
        S.autoUpdate === !0 && S.update(P);
      else if (S.isLight)
        f.pushLight(S), S.castShadow && f.pushShadow(S);
      else if (S.isSprite) {
        if (!S.frustumCulled || K.intersectsSprite(S)) {
          L && ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(G);
          const Me = ke.update(S), be = S.material;
          be.visible && d.push(S, Me, be, z, ie.z, null);
        }
      } else if ((S.isMesh || S.isLine || S.isPoints) && (S.isSkinnedMesh && S.skeleton.frame !== Fe.render.frame && (S.skeleton.update(), S.skeleton.frame = Fe.render.frame), !S.frustumCulled || K.intersectsObject(S))) {
        L && ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(G);
        const Me = ke.update(S), be = S.material;
        if (Array.isArray(be)) {
          const we = Me.groups;
          for (let De = 0, Te = we.length; De < Te; De++) {
            const Ee = we[De], Be = be[Ee.materialIndex];
            Be && Be.visible && d.push(S, Me, Be, z, ie.z, Ee);
          }
        } else
          be.visible && d.push(S, Me, be, z, ie.z, null);
      }
    }
    const fe = S.children;
    for (let Me = 0, be = fe.length; Me < be; Me++)
      je(fe[Me], P, z, L);
  }
  function Qe(S, P, z, L) {
    const V = S.opaque, fe = S.transmissive, Me = S.transparent;
    f.setupLightsView(z), fe.length > 0 && Qt(V, P, z), L && le.viewport(C.copy(L)), V.length > 0 && ze(V, P, z), fe.length > 0 && ze(fe, P, z), Me.length > 0 && ze(Me, P, z), le.buffers.depth.setTest(!0), le.buffers.depth.setMask(!0), le.buffers.color.setMask(!0), le.setPolygonOffset(!1);
  }
  function Qt(S, P, z) {
    const L = xe.isWebGL2;
    Y === null && (Y = new gn(1, 1, {
      generateMipmaps: !0,
      type: ce.has("EXT_color_buffer_half_float") ? Jn : pn,
      minFilter: Di,
      samples: L && r === !0 ? 4 : 0
    })), p.getDrawingBufferSize(U), L ? Y.setSize(U.x, U.y) : Y.setSize(yr(U.x), yr(U.y));
    const V = p.getRenderTarget();
    p.setRenderTarget(Y), p.clear();
    const fe = p.toneMapping;
    p.toneMapping = Vt, ze(S, P, z), p.toneMapping = fe, _e.updateMultisampleRenderTarget(Y), _e.updateRenderTargetMipmap(Y), p.setRenderTarget(V);
  }
  function ze(S, P, z) {
    const L = P.isScene === !0 ? P.overrideMaterial : null;
    for (let V = 0, fe = S.length; V < fe; V++) {
      const Me = S[V], be = Me.object, we = Me.geometry, De = L === null ? Me.material : L, Te = Me.group;
      be.layers.test(z.layers) && It(be, P, z, we, De, Te);
    }
  }
  function It(S, P, z, L, V, fe) {
    S.onBeforeRender(p, P, z, L, V, fe), S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), V.onBeforeRender(p, P, z, L, S, fe), V.transparent === !0 && V.side === $t ? (V.side = St, V.needsUpdate = !0, p.renderBufferDirect(z, P, L, V, S, fe), V.side = Un, V.needsUpdate = !0, p.renderBufferDirect(z, P, L, V, S, fe), V.side = $t) : p.renderBufferDirect(z, P, L, V, S, fe), S.onAfterRender(p, P, z, L, V, fe);
  }
  function xt(S, P, z) {
    P.isScene !== !0 && (P = ee);
    const L = ye.get(S), V = f.state.lights, fe = f.state.shadowsArray, Me = V.state.version, be = Ne.getParameters(S, V.state, fe, P, z), we = Ne.getProgramCacheKey(be);
    let De = L.programs;
    L.environment = S.isMeshStandardMaterial ? P.environment : null, L.fog = P.fog, L.envMap = (S.isMeshStandardMaterial ? nt : tt).get(S.envMap || L.environment), De === void 0 && (S.addEventListener("dispose", Ue), De = /* @__PURE__ */ new Map(), L.programs = De);
    let Te = De.get(we);
    if (Te !== void 0) {
      if (L.currentProgram === Te && L.lightsStateVersion === Me)
        return Pr(S, be), Te;
    } else
      be.uniforms = Ne.getUniforms(S), S.onBuild(z, be, p), S.onBeforeCompile(be, p), Te = Ne.acquireProgram(be, we), De.set(we, Te), L.uniforms = be.uniforms;
    const Ee = L.uniforms;
    (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Ee.clippingPlanes = v.uniform), Pr(S, be), L.needsLights = ba(S), L.lightsStateVersion = Me, L.needsLights && (Ee.ambientLightColor.value = V.state.ambient, Ee.lightProbe.value = V.state.probe, Ee.directionalLights.value = V.state.directional, Ee.directionalLightShadows.value = V.state.directionalShadow, Ee.spotLights.value = V.state.spot, Ee.spotLightShadows.value = V.state.spotShadow, Ee.rectAreaLights.value = V.state.rectArea, Ee.ltc_1.value = V.state.rectAreaLTC1, Ee.ltc_2.value = V.state.rectAreaLTC2, Ee.pointLights.value = V.state.point, Ee.pointLightShadows.value = V.state.pointShadow, Ee.hemisphereLights.value = V.state.hemi, Ee.directionalShadowMap.value = V.state.directionalShadowMap, Ee.directionalShadowMatrix.value = V.state.directionalShadowMatrix, Ee.spotShadowMap.value = V.state.spotShadowMap, Ee.spotLightMatrix.value = V.state.spotLightMatrix, Ee.spotLightMap.value = V.state.spotLightMap, Ee.pointShadowMap.value = V.state.pointShadowMap, Ee.pointShadowMatrix.value = V.state.pointShadowMatrix);
    const Be = Te.getUniforms(), ct = Ai.seqWithValue(Be.seq, Ee);
    return L.currentProgram = Te, L.uniformsList = ct, Te;
  }
  function Pr(S, P) {
    const z = ye.get(S);
    z.outputEncoding = P.outputEncoding, z.instancing = P.instancing, z.skinning = P.skinning, z.morphTargets = P.morphTargets, z.morphNormals = P.morphNormals, z.morphColors = P.morphColors, z.morphTargetsCount = P.morphTargetsCount, z.numClippingPlanes = P.numClippingPlanes, z.numIntersection = P.numClipIntersection, z.vertexAlphas = P.vertexAlphas, z.vertexTangents = P.vertexTangents, z.toneMapping = P.toneMapping;
  }
  function Sa(S, P, z, L, V) {
    P.isScene !== !0 && (P = ee), _e.resetTextureUnits();
    const fe = P.fog, Me = L.isMeshStandardMaterial ? P.environment : null, be = b === null ? p.outputEncoding : b.isXRRenderTarget === !0 ? b.texture.encoding : mn, we = (L.isMeshStandardMaterial ? nt : tt).get(L.envMap || Me), De = L.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4, Te = !!L.normalMap && !!z.attributes.tangent, Ee = !!z.morphAttributes.position, Be = !!z.morphAttributes.normal, ct = !!z.morphAttributes.color, Ft = L.toneMapped ? p.toneMapping : Vt, en = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color, Ge = en !== void 0 ? en.length : 0, Ae = ye.get(L), Pi = f.state.lights;
    if (X === !0 && (Q === !0 || S !== w)) {
      const ut = S === w && L.id === M;
      v.setState(L, S, ut);
    }
    let Ze = !1;
    L.version === Ae.__version ? (Ae.needsLights && Ae.lightsStateVersion !== Pi.state.version || Ae.outputEncoding !== be || V.isInstancedMesh && Ae.instancing === !1 || !V.isInstancedMesh && Ae.instancing === !0 || V.isSkinnedMesh && Ae.skinning === !1 || !V.isSkinnedMesh && Ae.skinning === !0 || Ae.envMap !== we || L.fog === !0 && Ae.fog !== fe || Ae.numClippingPlanes !== void 0 && (Ae.numClippingPlanes !== v.numPlanes || Ae.numIntersection !== v.numIntersection) || Ae.vertexAlphas !== De || Ae.vertexTangents !== Te || Ae.morphTargets !== Ee || Ae.morphNormals !== Be || Ae.morphColors !== ct || Ae.toneMapping !== Ft || xe.isWebGL2 === !0 && Ae.morphTargetsCount !== Ge) && (Ze = !0) : (Ze = !0, Ae.__version = L.version);
    let tn = Ae.currentProgram;
    Ze === !0 && (tn = xt(L, P, V));
    let Ir = !1, Hn = !1, Ii = !1;
    const rt = tn.getUniforms(), nn = Ae.uniforms;
    if (le.useProgram(tn.program) && (Ir = !0, Hn = !0, Ii = !0), L.id !== M && (M = L.id, Hn = !0), Ir || w !== S) {
      if (rt.setValue(k, "projectionMatrix", S.projectionMatrix), xe.logarithmicDepthBuffer && rt.setValue(
        k,
        "logDepthBufFC",
        2 / (Math.log(S.far + 1) / Math.LN2)
      ), w !== S && (w = S, Hn = !0, Ii = !0), L.isShaderMaterial || L.isMeshPhongMaterial || L.isMeshToonMaterial || L.isMeshStandardMaterial || L.envMap) {
        const ut = rt.map.cameraPosition;
        ut !== void 0 && ut.setValue(
          k,
          ie.setFromMatrixPosition(S.matrixWorld)
        );
      }
      (L.isMeshPhongMaterial || L.isMeshToonMaterial || L.isMeshLambertMaterial || L.isMeshBasicMaterial || L.isMeshStandardMaterial || L.isShaderMaterial) && rt.setValue(k, "isOrthographic", S.isOrthographicCamera === !0), (L.isMeshPhongMaterial || L.isMeshToonMaterial || L.isMeshLambertMaterial || L.isMeshBasicMaterial || L.isMeshStandardMaterial || L.isShaderMaterial || L.isShadowMaterial || V.isSkinnedMesh) && rt.setValue(k, "viewMatrix", S.matrixWorldInverse);
    }
    if (V.isSkinnedMesh) {
      rt.setOptional(k, V, "bindMatrix"), rt.setOptional(k, V, "bindMatrixInverse");
      const ut = V.skeleton;
      ut && (xe.floatVertexTextures ? (ut.boneTexture === null && ut.computeBoneTexture(), rt.setValue(k, "boneTexture", ut.boneTexture, _e), rt.setValue(k, "boneTextureSize", ut.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const Fi = z.morphAttributes;
    if ((Fi.position !== void 0 || Fi.normal !== void 0 || Fi.color !== void 0 && xe.isWebGL2 === !0) && te.update(V, z, L, tn), (Hn || Ae.receiveShadow !== V.receiveShadow) && (Ae.receiveShadow = V.receiveShadow, rt.setValue(k, "receiveShadow", V.receiveShadow)), L.isMeshGouraudMaterial && L.envMap !== null && (nn.envMap.value = we, nn.flipEnvMap.value = we.isCubeTexture && we.isRenderTargetTexture === !1 ? -1 : 1), Hn && (rt.setValue(k, "toneMappingExposure", p.toneMappingExposure), Ae.needsLights && ya(nn, Ii), fe && L.fog === !0 && Pt.refreshFogUniforms(nn, fe), Pt.refreshMaterialUniforms(nn, L, q, D, Y), Ai.upload(k, Ae.uniformsList, nn, _e)), L.isShaderMaterial && L.uniformsNeedUpdate === !0 && (Ai.upload(k, Ae.uniformsList, nn, _e), L.uniformsNeedUpdate = !1), L.isSpriteMaterial && rt.setValue(k, "center", V.center), rt.setValue(k, "modelViewMatrix", V.modelViewMatrix), rt.setValue(k, "normalMatrix", V.normalMatrix), rt.setValue(k, "modelMatrix", V.matrixWorld), L.isShaderMaterial || L.isRawShaderMaterial) {
      const ut = L.uniformsGroups;
      for (let Ni = 0, wa = ut.length; Ni < wa; Ni++)
        if (xe.isWebGL2) {
          const Fr = ut[Ni];
          pe.update(Fr, tn), pe.bind(Fr, tn);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return tn;
  }
  function ya(S, P) {
    S.ambientLightColor.needsUpdate = P, S.lightProbe.needsUpdate = P, S.directionalLights.needsUpdate = P, S.directionalLightShadows.needsUpdate = P, S.pointLights.needsUpdate = P, S.pointLightShadows.needsUpdate = P, S.spotLights.needsUpdate = P, S.spotLightShadows.needsUpdate = P, S.rectAreaLights.needsUpdate = P, S.hemisphereLights.needsUpdate = P;
  }
  function ba(S) {
    return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return _;
  }, this.getActiveMipmapLevel = function() {
    return T;
  }, this.getRenderTarget = function() {
    return b;
  }, this.setRenderTargetTextures = function(S, P, z) {
    ye.get(S.texture).__webglTexture = P, ye.get(S.depthTexture).__webglTexture = z;
    const L = ye.get(S);
    L.__hasExternalTextures = !0, L.__hasExternalTextures && (L.__autoAllocateDepthBuffer = z === void 0, L.__autoAllocateDepthBuffer || ce.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), L.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(S, P) {
    const z = ye.get(S);
    z.__webglFramebuffer = P, z.__useDefaultFramebuffer = P === void 0;
  }, this.setRenderTarget = function(S, P = 0, z = 0) {
    b = S, _ = P, T = z;
    let L = !0, V = null, fe = !1, Me = !1;
    if (S) {
      const we = ye.get(S);
      we.__useDefaultFramebuffer !== void 0 ? (le.bindFramebuffer(36160, null), L = !1) : we.__webglFramebuffer === void 0 ? _e.setupRenderTarget(S) : we.__hasExternalTextures && _e.rebindTextures(S, ye.get(S.texture).__webglTexture, ye.get(S.depthTexture).__webglTexture);
      const De = S.texture;
      (De.isData3DTexture || De.isDataArrayTexture || De.isCompressedArrayTexture) && (Me = !0);
      const Te = ye.get(S).__webglFramebuffer;
      S.isWebGLCubeRenderTarget ? (V = Te[P], fe = !0) : xe.isWebGL2 && S.samples > 0 && _e.useMultisampledRTT(S) === !1 ? V = ye.get(S).__webglMultisampledFramebuffer : V = Te, C.copy(S.viewport), F.copy(S.scissor), g = S.scissorTest;
    } else
      C.copy(R).multiplyScalar(q).floor(), F.copy(W).multiplyScalar(q).floor(), g = j;
    if (le.bindFramebuffer(36160, V) && xe.drawBuffers && L && le.drawBuffers(S, V), le.viewport(C), le.scissor(F), le.setScissorTest(g), fe) {
      const we = ye.get(S.texture);
      k.framebufferTexture2D(36160, 36064, 34069 + P, we.__webglTexture, z);
    } else if (Me) {
      const we = ye.get(S.texture), De = P || 0;
      k.framebufferTextureLayer(36160, 36064, we.__webglTexture, z || 0, De);
    }
    M = -1;
  }, this.readRenderTargetPixels = function(S, P, z, L, V, fe, Me) {
    if (!(S && S.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let be = ye.get(S).__webglFramebuffer;
    if (S.isWebGLCubeRenderTarget && Me !== void 0 && (be = be[Me]), be) {
      le.bindFramebuffer(36160, be);
      try {
        const we = S.texture, De = we.format, Te = we.type;
        if (De !== Ct && ae.convert(De) !== k.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const Ee = Te === Jn && (ce.has("EXT_color_buffer_half_float") || xe.isWebGL2 && ce.has("EXT_color_buffer_float"));
        if (Te !== pn && ae.convert(Te) !== k.getParameter(35738) && !(Te === hn && (xe.isWebGL2 || ce.has("OES_texture_float") || ce.has("WEBGL_color_buffer_float"))) && !Ee) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        P >= 0 && P <= S.width - L && z >= 0 && z <= S.height - V && k.readPixels(P, z, L, V, ae.convert(De), ae.convert(Te), fe);
      } finally {
        const we = b !== null ? ye.get(b).__webglFramebuffer : null;
        le.bindFramebuffer(36160, we);
      }
    }
  }, this.copyFramebufferToTexture = function(S, P, z = 0) {
    const L = Math.pow(2, -z), V = Math.floor(P.image.width * L), fe = Math.floor(P.image.height * L);
    _e.setTexture2D(P, 0), k.copyTexSubImage2D(3553, z, 0, 0, S.x, S.y, V, fe), le.unbindTexture();
  }, this.copyTextureToTexture = function(S, P, z, L = 0) {
    const V = P.image.width, fe = P.image.height, Me = ae.convert(z.format), be = ae.convert(z.type);
    _e.setTexture2D(z, 0), k.pixelStorei(37440, z.flipY), k.pixelStorei(37441, z.premultiplyAlpha), k.pixelStorei(3317, z.unpackAlignment), P.isDataTexture ? k.texSubImage2D(3553, L, S.x, S.y, V, fe, Me, be, P.image.data) : P.isCompressedTexture ? k.compressedTexSubImage2D(3553, L, S.x, S.y, P.mipmaps[0].width, P.mipmaps[0].height, Me, P.mipmaps[0].data) : k.texSubImage2D(3553, L, S.x, S.y, Me, be, P.image), L === 0 && z.generateMipmaps && k.generateMipmap(3553), le.unbindTexture();
  }, this.copyTextureToTexture3D = function(S, P, z, L, V = 0) {
    if (p.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const fe = S.max.x - S.min.x + 1, Me = S.max.y - S.min.y + 1, be = S.max.z - S.min.z + 1, we = ae.convert(L.format), De = ae.convert(L.type);
    let Te;
    if (L.isData3DTexture)
      _e.setTexture3D(L, 0), Te = 32879;
    else if (L.isDataArrayTexture)
      _e.setTexture2DArray(L, 0), Te = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    k.pixelStorei(37440, L.flipY), k.pixelStorei(37441, L.premultiplyAlpha), k.pixelStorei(3317, L.unpackAlignment);
    const Ee = k.getParameter(3314), Be = k.getParameter(32878), ct = k.getParameter(3316), Ft = k.getParameter(3315), en = k.getParameter(32877), Ge = z.isCompressedTexture ? z.mipmaps[0] : z.image;
    k.pixelStorei(3314, Ge.width), k.pixelStorei(32878, Ge.height), k.pixelStorei(3316, S.min.x), k.pixelStorei(3315, S.min.y), k.pixelStorei(32877, S.min.z), z.isDataTexture || z.isData3DTexture ? k.texSubImage3D(Te, V, P.x, P.y, P.z, fe, Me, be, we, De, Ge.data) : z.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), k.compressedTexSubImage3D(Te, V, P.x, P.y, P.z, fe, Me, be, we, Ge.data)) : k.texSubImage3D(Te, V, P.x, P.y, P.z, fe, Me, be, we, De, Ge), k.pixelStorei(3314, Ee), k.pixelStorei(32878, Be), k.pixelStorei(3316, ct), k.pixelStorei(3315, Ft), k.pixelStorei(32877, en), V === 0 && L.generateMipmaps && k.generateMipmap(Te), le.unbindTexture();
  }, this.initTexture = function(S) {
    S.isCubeTexture ? _e.setTextureCube(S, 0) : S.isData3DTexture ? _e.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? _e.setTexture2DArray(S, 0) : _e.setTexture2D(S, 0), le.unbindTexture();
  }, this.resetState = function() {
    _ = 0, T = 0, b = null, le.reset(), H.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class yd extends Sd {
}
yd.prototype.isWebGL1Renderer = !0;
class xa {
  constructor(e, t = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new Ie(e), this.near = t, this.far = n;
  }
  clone() {
    return new xa(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
class Ad extends Ke {
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
class va extends kt {
  constructor(e = 1, t = 1, n = 1, i = 8, r = 1, o = !1, a = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: e,
      radiusBottom: t,
      height: n,
      radialSegments: i,
      heightSegments: r,
      openEnded: o,
      thetaStart: a,
      thetaLength: c
    };
    const l = this;
    i = Math.floor(i), r = Math.floor(r);
    const u = [], d = [], f = [], m = [];
    let x = 0;
    const p = [], h = n / 2;
    let _ = 0;
    T(), o === !1 && (e > 0 && b(!0), t > 0 && b(!1)), this.setIndex(u), this.setAttribute("position", new gt(d, 3)), this.setAttribute("normal", new gt(f, 3)), this.setAttribute("uv", new gt(m, 2));
    function T() {
      const M = new I(), w = new I();
      let C = 0;
      const F = (t - e) / n;
      for (let g = 0; g <= r; g++) {
        const E = [], D = g / r, q = D * (t - e) + e;
        for (let Z = 0; Z <= i; Z++) {
          const N = Z / i, R = N * c + a, W = Math.sin(R), j = Math.cos(R);
          w.x = q * W, w.y = -D * n + h, w.z = q * j, d.push(w.x, w.y, w.z), M.set(W, F, j).normalize(), f.push(M.x, M.y, M.z), m.push(N, 1 - D), E.push(x++);
        }
        p.push(E);
      }
      for (let g = 0; g < i; g++)
        for (let E = 0; E < r; E++) {
          const D = p[E][g], q = p[E + 1][g], Z = p[E + 1][g + 1], N = p[E][g + 1];
          u.push(D, q, N), u.push(q, Z, N), C += 6;
        }
      l.addGroup(_, C, 0), _ += C;
    }
    function b(M) {
      const w = x, C = new Re(), F = new I();
      let g = 0;
      const E = M === !0 ? e : t, D = M === !0 ? 1 : -1;
      for (let Z = 1; Z <= i; Z++)
        d.push(0, h * D, 0), f.push(0, D, 0), m.push(0.5, 0.5), x++;
      const q = x;
      for (let Z = 0; Z <= i; Z++) {
        const R = Z / i * c + a, W = Math.cos(R), j = Math.sin(R);
        F.x = E * j, F.y = h * D, F.z = E * W, d.push(F.x, F.y, F.z), f.push(0, D, 0), C.x = W * 0.5 + 0.5, C.y = j * 0.5 * D + 0.5, m.push(C.x, C.y), x++;
      }
      for (let Z = 0; Z < i; Z++) {
        const N = w + Z, R = q + Z;
        M === !0 ? u.push(R, R + 1, N) : u.push(R + 1, R, N), g += 3;
      }
      l.addGroup(_, g, M === !0 ? 1 : 2), _ += g;
    }
  }
  static fromJSON(e) {
    return new va(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength);
  }
}
class Ma extends kt {
  constructor(e = 1, t = 32, n = 16, i = 0, r = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: i,
      phiLength: r,
      thetaStart: o,
      thetaLength: a
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const c = Math.min(o + a, Math.PI);
    let l = 0;
    const u = [], d = new I(), f = new I(), m = [], x = [], p = [], h = [];
    for (let _ = 0; _ <= n; _++) {
      const T = [], b = _ / n;
      let M = 0;
      _ == 0 && o == 0 ? M = 0.5 / t : _ == n && c == Math.PI && (M = -0.5 / t);
      for (let w = 0; w <= t; w++) {
        const C = w / t;
        d.x = -e * Math.cos(i + C * r) * Math.sin(o + b * a), d.y = e * Math.cos(o + b * a), d.z = e * Math.sin(i + C * r) * Math.sin(o + b * a), x.push(d.x, d.y, d.z), f.copy(d).normalize(), p.push(f.x, f.y, f.z), h.push(C + M, 1 - b), T.push(l++);
      }
      u.push(T);
    }
    for (let _ = 0; _ < n; _++)
      for (let T = 0; T < t; T++) {
        const b = u[_][T + 1], M = u[_][T], w = u[_ + 1][T], C = u[_ + 1][T + 1];
        (_ !== 0 || o > 0) && m.push(b, M, C), (_ !== n - 1 || c < Math.PI) && m.push(M, w, C);
      }
    this.setIndex(m), this.setAttribute("position", new gt(x, 3)), this.setAttribute("normal", new gt(p, 3)), this.setAttribute("uv", new gt(h, 2));
  }
  static fromJSON(e) {
    return new Ma(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class Cd extends kn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Ie(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ie(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Er, this.normalScale = new Re(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Ld extends kn {
  constructor(e) {
    super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new Ie(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ie(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Er, this.normalScale = new Re(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Tr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Rr extends Ke {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ie(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
class Dd extends Rr {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Ke.DefaultUp), this.updateMatrix(), this.groundColor = new Ie(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const mr = /* @__PURE__ */ new He(), qs = /* @__PURE__ */ new I(), Ys = /* @__PURE__ */ new I();
class bd {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Re(512, 512), this.map = null, this.mapPass = null, this.matrix = new He(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Cr(), this._frameExtents = new Re(1, 1), this._viewportCount = 1, this._viewports = [
      new Je(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    qs.setFromMatrixPosition(e.matrixWorld), t.position.copy(qs), Ys.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ys), t.updateMatrixWorld(), mr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(mr), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(mr);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class wd extends bd {
  constructor() {
    super(new fa(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Rd extends Rr {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Ke.DefaultUp), this.updateMatrix(), this.target = new Ke(), this.shadow = new wd();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class Pd extends Rr {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class Id {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = js(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
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
      const t = js();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function js() {
  return (typeof performance > "u" ? Date : performance).now();
}
class Fd {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(lt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: wr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = wr);
function Nd(s) {
  return s.replace(/\r/g, "").split(`
`);
}
export {
  Pd as A,
  St as B,
  Id as C,
  $t as D,
  Vn as E,
  xa as F,
  Dd as H,
  Jt as M,
  fa as O,
  Lr as P,
  ei as Q,
  Ad as S,
  Ed as T,
  Je as V,
  Sd as W,
  Nd as a,
  _n as b,
  I as c,
  Td as d,
  Fd as e,
  Re as f,
  va as g,
  Cd as h,
  Et as i,
  Ie as j,
  Rd as k,
  Ld as l,
  Ma as m,
  Ke as n,
  ii as o
};
