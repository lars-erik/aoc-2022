var R = Object.defineProperty;
var U = (n, t, o) => t in n ? R(n, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[t] = o;
var x = (n, t, o) => (U(n, typeof t != "symbol" ? t + "" : t, o), o);
import { a as J, C as K, S as Q, k as A, W as Z, e as $, g as D, h as G, o as e1, M as H } from "./parsing.c9e1c62d.js";
import { S as t1, O as o1 } from "./stats.module.a5aba488.js";
const V = `495,144 -> 499,144
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
504,141 -> 508,141
498,135 -> 502,135
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
485,147 -> 490,147
483,153 -> 488,153
479,151 -> 484,151
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
510,141 -> 514,141
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
476,153 -> 481,153
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
515,165 -> 520,165
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
508,165 -> 513,165
494,155 -> 499,155
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
487,30 -> 487,31 -> 499,31 -> 499,30
497,129 -> 502,129
473,155 -> 478,155
517,123 -> 522,123
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
489,149 -> 494,149
507,126 -> 512,126
489,144 -> 493,144
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
486,151 -> 491,151
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
521,126 -> 526,126
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
487,155 -> 492,155
513,120 -> 518,120
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
482,149 -> 487,149
500,158 -> 500,159 -> 513,159
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
505,168 -> 510,168
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
509,117 -> 514,117
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
503,123 -> 508,123
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
510,123 -> 515,123
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
513,144 -> 517,144
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
501,138 -> 505,138
507,144 -> 511,144
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
492,141 -> 496,141
495,138 -> 499,138
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
498,141 -> 502,141
501,155 -> 506,155
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
497,153 -> 502,153
504,129 -> 509,129
518,129 -> 523,129
480,155 -> 485,155
513,114 -> 513,110 -> 513,114 -> 515,114 -> 515,110 -> 515,114 -> 517,114 -> 517,107 -> 517,114
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
498,53 -> 498,57 -> 495,57 -> 495,64 -> 508,64 -> 508,57 -> 502,57 -> 502,53
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
525,129 -> 530,129
504,135 -> 508,135
487,30 -> 487,31 -> 499,31 -> 499,30
487,30 -> 487,31 -> 499,31 -> 499,30
493,151 -> 498,151
514,126 -> 519,126
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
507,138 -> 511,138
495,37 -> 506,37
511,101 -> 511,96 -> 511,101 -> 513,101 -> 513,93 -> 513,101 -> 515,101 -> 515,94 -> 515,101
500,126 -> 505,126
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
519,168 -> 524,168
511,162 -> 516,162
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
492,40 -> 492,43 -> 484,43 -> 484,50 -> 499,50 -> 499,43 -> 496,43 -> 496,40
506,120 -> 511,120
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
501,132 -> 505,132
511,129 -> 516,129
494,80 -> 507,80
506,83 -> 506,85 -> 503,85 -> 503,88 -> 513,88 -> 513,85 -> 511,85 -> 511,83
501,144 -> 505,144
490,153 -> 495,153
512,168 -> 517,168
490,77 -> 490,68 -> 490,77 -> 492,77 -> 492,75 -> 492,77 -> 494,77 -> 494,74 -> 494,77 -> 496,77 -> 496,72 -> 496,77
507,181 -> 507,171 -> 507,181 -> 509,181 -> 509,173 -> 509,181 -> 511,181 -> 511,176 -> 511,181 -> 513,181 -> 513,176 -> 513,181
499,13 -> 499,17 -> 497,17 -> 497,25 -> 505,25 -> 505,17 -> 502,17 -> 502,13
500,158 -> 500,159 -> 513,159`;
function X(n, t) {
  let e = 0, i, m = Number.MAX_VALUE, l = 0, b = J(n).map((s) => s.split(" -> ").map((p) => {
    const a = p.split(",").map(Number);
    return e = Math.max(e, a[1]), m = Math.min(m, a[0]), l = Math.max(l, a[0]), a;
  })), d = [], S = [];
  for (let s = 0; s < b.length; s++)
    for (let p = 0; p < b[s].length - 1; p++) {
      let a = b[s][p], w = b[s][p + 1];
      for (let u = Math.min(a[1], w[1]); u <= Math.max(a[1], w[1]); u++)
        for (let M = Math.min(a[0], w[0]); M <= Math.max(a[0], w[0]); M++)
          d[u] = d[u] || [], d[u][M] = "#", S.push([M, u]);
    }
  e += 2, i = e, d[e - 1] = [], d[e] = [];
  for (let s = m - 500; s <= l + 500; s++)
    d[e][s] = "#", S.push([s, e]);
  return {
    cave: d,
    rockCoords: S,
    bounding: {
      minY: 0,
      maxY: e,
      minX: m,
      maxX: l,
      floorY: i
    }
  };
}
class n1 {
  constructor(t, o = 100) {
    x(this, "i", 0);
    x(this, "resting", []);
    x(this, "done", !1);
    x(this, "grain", [500, 0]);
    this.complex = t, this.maxIter = o, this.map = t.cave, this.map[0] || (this.map[0] = []);
  }
  enableFloor() {
    this.complex.bounding.maxY = this.complex.bounding.floorY;
  }
  disableFloor() {
    this.complex.bounding.maxY = this.complex.bounding.floorY - 2;
  }
  update() {
    if (!(this.i++ < this.maxIter && !this.done))
      return !1;
    const o = this.map;
    let e = this.grain, i = e[1] + 1;
    return i > this.complex.bounding.maxY ? (e[1]++, e[1] > this.complex.bounding.maxY + 10 && (this.grain = [500, 0]), !0) : (o[i] || (o[i] = []), o[i][e[0]] ? o[i][e[0] - 1] ? o[i][e[0] + 1] ? o[i][e[0]] && o[i][e[0] - 1] && o[i][e[0] + 1] ? (o[e[1]][e[0]] = "o", this.resting.push(e), e[1] === 0 && e[0] === 500 ? (this.done = !0, !1) : (this.grain = [500, 0], !0)) : (this.done = !0, !1) : (e[1] = i, e[0] = e[0] + 1, !0) : (e[1] = i, e[0] = e[0] - 1, !0) : (e[1] = i, !0));
  }
}
function B() {
  C.setSize(y.clientWidth, y.clientHeight);
}
const I = 1;
let F = 20, T = -I;
function N() {
  if (i1.innerHTML = r.resting.length, !r.done) {
    const n = P.getElapsedTime() * F;
    let t = Math.floor(n), o = n - t, e = n - T >= I, i = Math.max(1, t - T);
    if (e) {
      F = Math.pow(F, 1.001);
      for (let m = 0; m < i; m++) {
        if (r.grain[0] === 500 && r.grain[1] === 0) {
          if (c && k)
            if (k.y < -r.complex.bounding.maxY - 5) {
              if (h.remove(c), c = null, !q && t > 2e5) {
                q = !0, r.enableFloor();
                for (let l = 0; l < W.length; l++)
                  W[l].visible = !0;
              }
            } else
              c.position.copy(k);
          c = new H(j, s1), c.position.x = 500, h.add(c);
        }
        _ = new A(r.grain[0], -r.grain[1], 0), k = z, r.update(), z = new A(r.grain[0], -r.grain[1], 0);
      }
      T = t;
    }
    c.position.lerpVectors(_, z, o);
  }
  E.update(), requestAnimationFrame(N), C.render(h, f), O.update();
}
let c = null, _ = null, z = null, k = null;
const g = X(V), r = new n1(g, 5e6);
r.disableFloor();
const y = document.querySelector("#scene"), i1 = document.querySelector("#count"), O = new t1();
y.appendChild(O.dom);
const P = new K(), h = new Q(), Y = new A(500, g.bounding.maxY / -2, 0), C = new Z(), f = new $(50, window.innerWidth / window.innerHeight, 0.1, 1e3);
f.position.x = Y.x;
f.position.z = 210;
f.position.y = Y.y;
f.lookAt(Y);
let E = null;
E = new o1(f, C.domElement), E.target = Y;
const v = new D(15790320, 0.9);
v.position.x = 5;
v.position.z = 7;
v.position.y = 1;
h.add(v);
const L = new D(14737632, 0.7);
L.position.x = -5;
L.position.z = -5;
L.position.y = 10;
h.add(L);
const r1 = new G({ color: 8424064 }), s1 = new G({ color: 14745354 }), j = new e1(1.01, 1.01, 1.01), W = [];
let q = !1;
for (let n = 0; n < g.rockCoords.length; n++) {
  let t = new H(j, r1);
  t.position.x = g.rockCoords[n][0], t.position.y = -g.rockCoords[n][1], t.position.y < -r.complex.bounding.maxY && (t.visible = !1, W.push(t)), h.add(t);
}
y.appendChild(C.domElement);
window.addEventListener("resize", B);
B();
P.start();
N();
console.log(X(V));
