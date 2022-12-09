import { E as n4, c as D, d as I, T as N, Q as O5, e as A5, f as S, a as o4, g as Z, h as W, S as a4, W as i4, i as s4, j as o5, F as r4, A as c4, H as l4, k as h4, P as d4, l as u4, M as v, m as p4, b as f4, B as m4, C as b4, n as I5 } from "./parsing.1b372607.js";
const L5 = { type: "change" }, n5 = { type: "start" }, D5 = { type: "end" };
class y4 extends n4 {
  constructor(o, s) {
    super(), this.object = o, this.domElement = s, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new D(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: I.ROTATE, MIDDLE: I.DOLLY, RIGHT: I.PAN }, this.touches = { ONE: N.ROTATE, TWO: N.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return r.phi;
    }, this.getAzimuthalAngle = function() {
      return r.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(t) {
      t.addEventListener("keydown", P5), this._domElementKeyEvents = t;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(L5), e.update(), i = n.NONE;
    }, this.update = function() {
      const t = new D(), a = new O5().setFromUnitVectors(o.up, new D(0, 1, 0)), m = a.clone().invert(), b = new D(), x = new O5(), H = 2 * Math.PI;
      return function() {
        const S5 = e.object.position;
        t.copy(S5).sub(e.target), t.applyQuaternion(a), r.setFromVector3(t), e.autoRotate && i === n.NONE && C(_5()), e.enableDamping ? (r.theta += p.theta * e.dampingFactor, r.phi += p.phi * e.dampingFactor) : (r.theta += p.theta, r.phi += p.phi);
        let O = e.minAzimuthAngle, A = e.maxAzimuthAngle;
        return isFinite(O) && isFinite(A) && (O < -Math.PI ? O += H : O > Math.PI && (O -= H), A < -Math.PI ? A += H : A > Math.PI && (A -= H), O <= A ? r.theta = Math.max(O, Math.min(A, r.theta)) : r.theta = r.theta > (O + A) / 2 ? Math.max(O, r.theta) : Math.min(A, r.theta)), r.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, r.phi)), r.makeSafe(), r.radius *= y, r.radius = Math.max(e.minDistance, Math.min(e.maxDistance, r.radius)), e.enableDamping === !0 ? e.target.addScaledVector(d, e.dampingFactor) : e.target.add(d), t.setFromSpherical(r), t.applyQuaternion(m), S5.copy(e.target).add(t), e.object.lookAt(e.target), e.enableDamping === !0 ? (p.theta *= 1 - e.dampingFactor, p.phi *= 1 - e.dampingFactor, d.multiplyScalar(1 - e.dampingFactor)) : (p.set(0, 0, 0), d.set(0, 0, 0)), y = 1, f || b.distanceToSquared(e.object.position) > c || 8 * (1 - x.dot(e.object.quaternion)) > c ? (e.dispatchEvent(L5), b.copy(e.object.position), x.copy(e.object.quaternion), f = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", T5), e.domElement.removeEventListener("pointerdown", g5), e.domElement.removeEventListener("pointercancel", E5), e.domElement.removeEventListener("wheel", w5), e.domElement.removeEventListener("pointermove", $), e.domElement.removeEventListener("pointerup", e5), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", P5);
    };
    const e = this, n = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let i = n.NONE;
    const c = 1e-6, r = new A5(), p = new A5();
    let y = 1;
    const d = new D();
    let f = !1;
    const g = new S(), E = new S(), P = new S(), w = new S(), h = new S(), M = new S(), L = new S(), k = new S(), j = new S(), l = [], F = {};
    function _5() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function X() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function C(t) {
      p.theta -= t;
    }
    function G(t) {
      p.phi -= t;
    }
    const r5 = function() {
      const t = new D();
      return function(m, b) {
        t.setFromMatrixColumn(b, 0), t.multiplyScalar(-m), d.add(t);
      };
    }(), c5 = function() {
      const t = new D();
      return function(m, b) {
        e.screenSpacePanning === !0 ? t.setFromMatrixColumn(b, 1) : (t.setFromMatrixColumn(b, 0), t.crossVectors(e.object.up, t)), t.multiplyScalar(m), d.add(t);
      };
    }(), R = function() {
      const t = new D();
      return function(m, b) {
        const x = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const H = e.object.position;
          t.copy(H).sub(e.target);
          let U = t.length();
          U *= Math.tan(e.object.fov / 2 * Math.PI / 180), r5(2 * m * U / x.clientHeight, e.object.matrix), c5(2 * b * U / x.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (r5(m * (e.object.right - e.object.left) / e.object.zoom / x.clientWidth, e.object.matrix), c5(b * (e.object.top - e.object.bottom) / e.object.zoom / x.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function J(t) {
      e.object.isPerspectiveCamera ? y /= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * t)), e.object.updateProjectionMatrix(), f = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function l5(t) {
      e.object.isPerspectiveCamera ? y *= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / t)), e.object.updateProjectionMatrix(), f = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function h5(t) {
      g.set(t.clientX, t.clientY);
    }
    function K5(t) {
      L.set(t.clientX, t.clientY);
    }
    function d5(t) {
      w.set(t.clientX, t.clientY);
    }
    function F5(t) {
      E.set(t.clientX, t.clientY), P.subVectors(E, g).multiplyScalar(e.rotateSpeed);
      const a = e.domElement;
      C(2 * Math.PI * P.x / a.clientHeight), G(2 * Math.PI * P.y / a.clientHeight), g.copy(E), e.update();
    }
    function X5(t) {
      k.set(t.clientX, t.clientY), j.subVectors(k, L), j.y > 0 ? J(X()) : j.y < 0 && l5(X()), L.copy(k), e.update();
    }
    function G5(t) {
      h.set(t.clientX, t.clientY), M.subVectors(h, w).multiplyScalar(e.panSpeed), R(M.x, M.y), w.copy(h), e.update();
    }
    function U5(t) {
      t.deltaY < 0 ? l5(X()) : t.deltaY > 0 && J(X()), e.update();
    }
    function Z5(t) {
      let a = !1;
      switch (t.code) {
        case e.keys.UP:
          t.ctrlKey || t.metaKey || t.shiftKey ? G(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : R(0, e.keyPanSpeed), a = !0;
          break;
        case e.keys.BOTTOM:
          t.ctrlKey || t.metaKey || t.shiftKey ? G(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : R(0, -e.keyPanSpeed), a = !0;
          break;
        case e.keys.LEFT:
          t.ctrlKey || t.metaKey || t.shiftKey ? C(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : R(e.keyPanSpeed, 0), a = !0;
          break;
        case e.keys.RIGHT:
          t.ctrlKey || t.metaKey || t.shiftKey ? C(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : R(-e.keyPanSpeed, 0), a = !0;
          break;
      }
      a && (t.preventDefault(), e.update());
    }
    function u5() {
      if (l.length === 1)
        g.set(l[0].pageX, l[0].pageY);
      else {
        const t = 0.5 * (l[0].pageX + l[1].pageX), a = 0.5 * (l[0].pageY + l[1].pageY);
        g.set(t, a);
      }
    }
    function p5() {
      if (l.length === 1)
        w.set(l[0].pageX, l[0].pageY);
      else {
        const t = 0.5 * (l[0].pageX + l[1].pageX), a = 0.5 * (l[0].pageY + l[1].pageY);
        w.set(t, a);
      }
    }
    function f5() {
      const t = l[0].pageX - l[1].pageX, a = l[0].pageY - l[1].pageY, m = Math.sqrt(t * t + a * a);
      L.set(0, m);
    }
    function W5() {
      e.enableZoom && f5(), e.enablePan && p5();
    }
    function V5() {
      e.enableZoom && f5(), e.enableRotate && u5();
    }
    function m5(t) {
      if (l.length == 1)
        E.set(t.pageX, t.pageY);
      else {
        const m = t5(t), b = 0.5 * (t.pageX + m.x), x = 0.5 * (t.pageY + m.y);
        E.set(b, x);
      }
      P.subVectors(E, g).multiplyScalar(e.rotateSpeed);
      const a = e.domElement;
      C(2 * Math.PI * P.x / a.clientHeight), G(2 * Math.PI * P.y / a.clientHeight), g.copy(E);
    }
    function b5(t) {
      if (l.length === 1)
        h.set(t.pageX, t.pageY);
      else {
        const a = t5(t), m = 0.5 * (t.pageX + a.x), b = 0.5 * (t.pageY + a.y);
        h.set(m, b);
      }
      M.subVectors(h, w).multiplyScalar(e.panSpeed), R(M.x, M.y), w.copy(h);
    }
    function y5(t) {
      const a = t5(t), m = t.pageX - a.x, b = t.pageY - a.y, x = Math.sqrt(m * m + b * b);
      k.set(0, x), j.set(0, Math.pow(k.y / L.y, e.zoomSpeed)), J(j.y), L.copy(k);
    }
    function B5(t) {
      e.enableZoom && y5(t), e.enablePan && b5(t);
    }
    function q5(t) {
      e.enableZoom && y5(t), e.enableRotate && m5(t);
    }
    function g5(t) {
      e.enabled !== !1 && (l.length === 0 && (e.domElement.setPointerCapture(t.pointerId), e.domElement.addEventListener("pointermove", $), e.domElement.addEventListener("pointerup", e5)), t4(t), t.pointerType === "touch" ? $5(t) : Q5(t));
    }
    function $(t) {
      e.enabled !== !1 && (t.pointerType === "touch" ? e4(t) : J5(t));
    }
    function e5(t) {
      M5(t), l.length === 0 && (e.domElement.releasePointerCapture(t.pointerId), e.domElement.removeEventListener("pointermove", $), e.domElement.removeEventListener("pointerup", e5)), e.dispatchEvent(D5), i = n.NONE;
    }
    function E5(t) {
      M5(t);
    }
    function Q5(t) {
      let a;
      switch (t.button) {
        case 0:
          a = e.mouseButtons.LEFT;
          break;
        case 1:
          a = e.mouseButtons.MIDDLE;
          break;
        case 2:
          a = e.mouseButtons.RIGHT;
          break;
        default:
          a = -1;
      }
      switch (a) {
        case I.DOLLY:
          if (e.enableZoom === !1)
            return;
          K5(t), i = n.DOLLY;
          break;
        case I.ROTATE:
          if (t.ctrlKey || t.metaKey || t.shiftKey) {
            if (e.enablePan === !1)
              return;
            d5(t), i = n.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            h5(t), i = n.ROTATE;
          }
          break;
        case I.PAN:
          if (t.ctrlKey || t.metaKey || t.shiftKey) {
            if (e.enableRotate === !1)
              return;
            h5(t), i = n.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            d5(t), i = n.PAN;
          }
          break;
        default:
          i = n.NONE;
      }
      i !== n.NONE && e.dispatchEvent(n5);
    }
    function J5(t) {
      switch (i) {
        case n.ROTATE:
          if (e.enableRotate === !1)
            return;
          F5(t);
          break;
        case n.DOLLY:
          if (e.enableZoom === !1)
            return;
          X5(t);
          break;
        case n.PAN:
          if (e.enablePan === !1)
            return;
          G5(t);
          break;
      }
    }
    function w5(t) {
      e.enabled === !1 || e.enableZoom === !1 || i !== n.NONE || (t.preventDefault(), e.dispatchEvent(n5), U5(t), e.dispatchEvent(D5));
    }
    function P5(t) {
      e.enabled === !1 || e.enablePan === !1 || Z5(t);
    }
    function $5(t) {
      switch (x5(t), l.length) {
        case 1:
          switch (e.touches.ONE) {
            case N.ROTATE:
              if (e.enableRotate === !1)
                return;
              u5(), i = n.TOUCH_ROTATE;
              break;
            case N.PAN:
              if (e.enablePan === !1)
                return;
              p5(), i = n.TOUCH_PAN;
              break;
            default:
              i = n.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case N.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1)
                return;
              W5(), i = n.TOUCH_DOLLY_PAN;
              break;
            case N.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              V5(), i = n.TOUCH_DOLLY_ROTATE;
              break;
            default:
              i = n.NONE;
          }
          break;
        default:
          i = n.NONE;
      }
      i !== n.NONE && e.dispatchEvent(n5);
    }
    function e4(t) {
      switch (x5(t), i) {
        case n.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          m5(t), e.update();
          break;
        case n.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          b5(t), e.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          B5(t), e.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          q5(t), e.update();
          break;
        default:
          i = n.NONE;
      }
    }
    function T5(t) {
      e.enabled !== !1 && t.preventDefault();
    }
    function t4(t) {
      l.push(t);
    }
    function M5(t) {
      delete F[t.pointerId];
      for (let a = 0; a < l.length; a++)
        if (l[a].pointerId == t.pointerId) {
          l.splice(a, 1);
          return;
        }
    }
    function x5(t) {
      let a = F[t.pointerId];
      a === void 0 && (a = new S(), F[t.pointerId] = a), a.set(t.pageX, t.pageY);
    }
    function t5(t) {
      const a = t.pointerId === l[0].pointerId ? l[1] : l[0];
      return F[a.pointerId];
    }
    e.domElement.addEventListener("contextmenu", T5), e.domElement.addEventListener("pointerdown", g5), e.domElement.addEventListener("pointercancel", E5), e.domElement.addEventListener("wheel", w5, { passive: !1 }), this.update();
  }
}
var Y = function() {
  var u = 0, o = document.createElement("div");
  o.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", o.addEventListener("click", function(d) {
    d.preventDefault(), e(++u % o.children.length);
  }, !1);
  function s(d) {
    return o.appendChild(d.dom), d;
  }
  function e(d) {
    for (var f = 0; f < o.children.length; f++)
      o.children[f].style.display = f === d ? "block" : "none";
    u = d;
  }
  var n = (performance || Date).now(), i = n, c = 0, r = s(new Y.Panel("FPS", "#0ff", "#002")), p = s(new Y.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory)
    var y = s(new Y.Panel("MB", "#f08", "#201"));
  return e(0), {
    REVISION: 16,
    dom: o,
    addPanel: s,
    showPanel: e,
    begin: function() {
      n = (performance || Date).now();
    },
    end: function() {
      c++;
      var d = (performance || Date).now();
      if (p.update(d - n, 200), d >= i + 1e3 && (r.update(c * 1e3 / (d - i), 100), i = d, c = 0, y)) {
        var f = performance.memory;
        y.update(f.usedJSHeapSize / 1048576, f.jsHeapSizeLimit / 1048576);
      }
      return d;
    },
    update: function() {
      n = this.end();
    },
    domElement: o,
    setMode: e
  };
};
Y.Panel = function(u, o, s) {
  var e = 1 / 0, n = 0, i = Math.round, c = i(window.devicePixelRatio || 1), r = 80 * c, p = 48 * c, y = 3 * c, d = 2 * c, f = 3 * c, g = 15 * c, E = 74 * c, P = 30 * c, w = document.createElement("canvas");
  w.width = r, w.height = p, w.style.cssText = "width:80px;height:48px";
  var h = w.getContext("2d");
  return h.font = "bold " + 9 * c + "px Helvetica,Arial,sans-serif", h.textBaseline = "top", h.fillStyle = s, h.fillRect(0, 0, r, p), h.fillStyle = o, h.fillText(u, y, d), h.fillRect(f, g, E, P), h.fillStyle = s, h.globalAlpha = 0.9, h.fillRect(f, g, E, P), {
    dom: w,
    update: function(M, L) {
      e = Math.min(e, M), n = Math.max(n, M), h.fillStyle = s, h.globalAlpha = 1, h.fillRect(0, 0, r, g), h.fillStyle = o, h.fillText(i(M) + " " + u + " (" + i(e) + "-" + i(n) + ")", y, d), h.drawImage(w, f + c, g, E - c, P, f, g, E - c, P), h.fillRect(f + E - c, g, c, P), h.fillStyle = s, h.globalAlpha = 0.9, h.fillRect(f + E - c, g, c, i((1 - M / L) * P));
    }
  };
};
const g4 = Y;
class E4 {
  constructor(o) {
    this.trees = o;
  }
  updateVisibility() {
    let o = 0;
    for (let s = 0; s < this.trees.length; s++)
      for (let e = 0; e < this.trees[0].length; e++)
        o += this.trees[s][e].updateVisibility(this.trees);
    this.visibleTrees = o;
  }
}
class w4 {
  constructor(o, s, e) {
    this.x = o, this.y = s, this.height = e;
  }
  updateDirection(o, s, e, n, i) {
    let c = 0;
    for (let r = o; e(r); r += n) {
      const p = i(r), y = p !== this;
      if (y && c++, y && p.height >= this.height)
        break;
      r === s && (this.visible = !0);
    }
    this.visibleTrees.push(c);
  }
  updateVisibility(o) {
    this.visibleTrees = [], this.visible = !1;
    const s = (n) => o[n][this.x], e = (n) => o[this.y][n];
    return this.updateDirection(this.y, 0, (n) => n >= 0, -1, s), this.updateDirection(this.y, o.length - 1, (n) => n < o.length, 1, s), this.updateDirection(this.x, 0, (n) => n >= 0, -1, e), this.updateDirection(this.x, o[0].length - 1, (n) => n < o[0].length, 1, e), this.scenicScore = this.visibleTrees.reduce((n, i) => n * i, 1), this.visible ? 1 : 0;
  }
}
function P4(u) {
  let o = o4(u).map((e, n) => e.split("").map((i, c) => new w4(c, n, Number(i)))), s = new E4(o);
  return s.updateVisibility(), s;
}
const T4 = `300030213213113240234210203330153124541151003015456312312442524531405533542450111443312103110220211
133000004421300341005340432514034555543556261543410250030436135103304323425502113341331442032311030
213121312230422241205230130541010120012561656126511652636160154566425231221254515542342023142010133
210020103232311410025023513110540633654032560666266266442224400244155120504322112255323444432301210
300221311013444150512444105105055122104524660253365233115442634642236455351502043504233200041232000
000000011130235121555143014441555205423003555504400645452656322632050035240315440035451003103431431
012142333141321404105321351332544222551046221101044054031533500165110422142125530252401331243211232
020213033022012453014033014405001564353352011316633456214232621532251606161624054400501054130430422
042314012030233125141141244243333123002627374716422264424361631360462131201236611502353523210122300
211224020402441314100154352420322456122364263545772174674761655261311042611615130513350241030243433
314424032332214322125462603406635133652272743472434161773175755665106156425610245350415311352303020
430442043211531134103213404455524724321332213636522224572442553173311265220261503235505013340341232
001001325232413003110430361654232165433226632435251776357256175725724566400520111500101504331132114
334412500412200403511523220032572737752127755542727442166375451622531763242464326501020110104340144
121243523444032105062316052754715461676111661333423221122752355145371142754413605365235134243015313
242330445052105423412660066474767425155231852584272588286671442475372464535465114141632114402431330
122050043214212560234014261446673143437367834853285853825877263146536255554162263165412530555001012
310254352155555362305652565245733333847537568334443567664745527772362543753627625001150411055105112
025031121433111201225651315747477674878824738825265832254676344282526441156537710545602456542112210
105541425514161020436715372516214235452255778656548556525666534284848751622646711602335633004210430
120403544243300210571653423576358224736356674473762873838666826244548367625153434754030101342121403
432020535536321653451132344347283847864642562823856582222257783373625252524642355422611066341041555
105515504230051446254242173357243344432244287653558393463636636527332375861462227252610460111541451
424315140455252444231317616735826624757676779939449898765575452676252735247362276562636111623005500
021423534431553132473112715725478325366953865554356694548876447733778524336511267122410032353204044
445423066641156261422146768782747848378447486547353679545953363787428372464325267535533614266344140
152411666100126757726562222726546749954446865366696449877979478486373233467373175176717065434502141
140202601300054474441768586442348397689388764774948539945648798559996563788746555346275261454103223
544203021060377313252177225245274373949438556349734495443338667684563463227487637566451205231151234
225400103300571274173335762334287864949875576664869759876374397685438976626326425644665160321405114
230314645445261324544678872478778643594945995976689844475579675835534645236636838337776723535345500
150534014520772265552634657365463588877484555578696496798458453663473396824266754637171242001256124
501401625205514213726356888877344586367477569695884664945598775858874867554835685452612772106263532
003545414654644264168635752867577699868859699658765954768468556893987864886348334776371465025135140
251042560617345355567763755683459686855588797756945758776799955744646686687652842535676751665034401
302210131663435613688532374877833645976757884777578755957476749797784636464388672831672655516160250
111065246313516415337376337787538574959786899487589688777994584659853384389926247746333354700561235
110414613452245538424336745356686988599756856889899665657755876955474687659467286778227144340035665
412353204671232672374342364957877787589988865788855789958795889895469566379993753537827253655122163
220455060636641757662657656485887468555667756998687885558888697575769544353438542486665473665353031
061302402574166188357244985755358964658897589996959669756655586556668978665737857647731571412663614
451215265723364666667225569887469777655996787798658577588667964644965767693668287254634774752440436
301215542714677435434258733978685986666878695679857768798658676786669569956767732852857361576404432
154623106155526744253836847466987985777579987895579899887867686679478588489549787628542237217621402
016326557476722738858767965394776546697557589788987986685897875855497888993584977357781252535652100
516434443771523825524465875344974794885887577968879977777596685889766469448884476765464722367346613
663333275643147748552476447559494596988869978768877866788776955886649886647734953675545514515635060
564446265661363787884698458539864897955876879789888686667667695889588654946548558665552464445515100
444635271445544486468235896595657574556796676868879879878987585894795697656985562654886247765264633
462165473462113357828755539386966448779857797769787979697957598754959785656563752733766632117233453
324114033531125766355764993645548777979758996876999867877675777569547846779389355565826361114230641
224200317716278667488649555774497597689687678896896677969958769969794969974689727365357612457234644
402622076242363764226695388365948877677669866868687967866668896555954488854868827247567131532732161
351431525533425423868437845597564857555568597698676776879667799897879746844566636356646565257121003
225616611661632445584357877765956764697568598699686698997669677996868665573893357436745717575725454
464505117521646733487884876599599666866788675666888876875979598579854747435497874323277332541546013
052114137625735662285578885579794999468569858977677679667685665987955489696478687578266127111546664
316613323223637567683247984347647849968985558977789767985598956679896995585799768687622276617221641
150200045167123286782287837679577787677797988695867797789687586558667574856533357756471257515363540
252244417323233175887456579833456748749996686798597998557665769755856789834546748233733443273254100
356160635747716144466869844679547594648877886665966889699566759455979998476485752287252722716164416
425166022644275152644747799869954648746958878589556668589768447767896344585634858425817452170565306
345366062117166733576545864397534485854779888658678987596689784695568398698547735888734716543316365
533535636242332164847587898599999846566885656697676699688759667965889473655654364846464567176441222
145156433556112342733574868953399368585597766648768658747699944777476969449428537232155673534436334
054406066337214353545756523343684448899669455797588778689784798466937584849358665356646637313111401
254230005511427461268747424696354657897679767675549867458844878496487636435757334231367213603232112
555355424332316775464478853457754765559478879676449464477968898464959946683563372221445526535034024
414023123606577152476576548378794456898548667574545479875668799757679333543655778735436732625602102
103425425660432324255388475439558538899897884857688985496679573943943844375486647275716474356544432
452130224302617716756636522262934655383939784956995477695867446373399748438345254577364313526363420
000042112640363475341785644528248693738497465445788948789539367488865954668672787612122734016622455
023111166642052271313457755228576545698943896555698897675589438943493564742233477111247522056555041
204431055441351336464513762857847353357853376696786639733989764484974246522527515321225331245432343
411113064641332752327456644465236399895559367589866764738365755795443834767856231524273551544613205
002003415151314635554646457575673343677789786935595493666738344866563385573637543752334431304230033
232000241320312557743676572825328454583544756367648459896978649838474485587354722365706253422641104
140032334604361016614454563867878852473268539588353455546354984764388862653617247612502644151343100
230313534421421354553535613177284354853423658747835975969372246355755687417111117262662010635050245
455442045443411622436616447216784738377874843272575735853775463446344736154635424345111430260111355
015553515233634200652274644243776752756254628443363283782332853857876372453144557606024162435425502
414231425344640401425671247313254225752325627774572863823427628435276621555353276003524346445135344
444014215230466136522431711445473522537227372726657772534226483275376766662531115626523414452105414
433450111244440640533563144151113117278453728882746574687858827886235133216737041020563315330400051
043413224423155241164263423653444422516645633847447523577743865447652437564632624466116150042552500
034343233153545155011601574561726663612576786744276243622471222711311674626123164654601253202230221
334424544214152026360221522751357747561434577416644336551153665531545226246342213505320031201441042
444213310102503010334251632366652423612713524641262137252252513732611325223401240210534434334020134
113234310313013130034263432336443446455536236436221526156612252522132633100613031453230501112202424
142402332004051013660101510101263126711727662153761423762243333777317301206400030653210431512111444
411034340051512350022551420314334411275415543216224154457677376654154362121625361111251523342230021
401212212311255150514520514410354360022337233263271545513775531712533425164554033545254524043033243
040034023233143153232242654250224010246422671266544421771125320425056106225340103411544104041430023
202210233034441525003330614323226104160433060432454154126634040116105426512145204401511210203422322
011431432013322542545215145526600364414641235513425454443064214552663664101101323545031512031302333
020023210301103025401200032420642652143243335333016204055261530250106466135400230513140242434444003
310203111441432251152455421244135150164323516554016042002411655305545265404525521215102013341240121
012320311100031143153052200224256541012135453345356532252242115324133425054343145333123421144111230
311310344433212432240252542030050542510636225454204032233645040015025321421052152330422440232330022`, V = P4(T4);
console.log(V.trees.length * V.trees[0].length);
let N5 = V.trees.reduce(
  (u, o) => o.reduce((s, e) => (e.scenicScore > s.m && (s.m = e.scenicScore, s.tree = e), s), u),
  { tree: null, m: 0 }
).tree;
console.log(N5);
const B = document.querySelector("#scene"), v5 = new g4();
B.appendChild(v5.dom);
function j5() {
  q.setSize(B.clientWidth, B.clientHeight);
}
function C5() {
  requestAnimationFrame(C5), q.render(T, z), v5.update(), K.update();
}
function M4() {
  const u = new I5(), o = 3.5, s = 2.5, e = 4.5, n = new Z(0.1, e, s, 16), i = new W({ color: 2759173 }), c = new v(n, i);
  c.position.y = o + s / 2, u.add(c);
  const r = 3, p = new Z(r, r, o, 16), y = new W({ color: 2759173 }), d = new v(p, y);
  return d.position.y = o / 2, u.add(d), u;
}
const Y5 = 0.85, a5 = 0.15, k5 = 0.5, x4 = new Z(k5, k5 + 0.1, a5, 16), S4 = new W({ color: 4203786 }), O4 = new Z(0.01, 1.25, Y5, 16), R5 = [];
function H5(u) {
  let o = Math.sin(u * 3457.3937) * 2543.137;
  return o = o - parseInt(o), o;
}
function A4(u) {
  const o = new I5(), s = new v(x4, S4);
  s.position.y = a5 / 2, o.add(s);
  const e = 25;
  let n;
  if (u <= e) {
    let c = Math.floor(704538 + H5(u) * 335877);
    n = new W({ color: c }), R5.push(n);
  } else
    n = R5[Math.floor((H5(u) * 0.5 + 0.5) * e) % e];
  const i = new v(O4, n);
  return i.position.y = a5 + Y5 / 2, o.add(i), o;
}
const T = new a4(), q = new i4(), z = new s4(50, window.innerWidth / window.innerHeight, 0.1, 1e3);
z.position.x = 0;
z.position.z = 0;
z.position.y = 50;
T.background = new o5().setHSL(0.6, 0, 1);
T.fog = new r4(T.background, 1, 1e3);
const L4 = new c4(6316128, 0.9);
T.add(L4);
const _ = new l4(16777130, 16777130, 0.25);
_.color.setHSL(0.6, 1, 0.6);
_.groundColor.setHSL(0.095, 1, 0.75);
_.position.set(0, 800, 0);
T.add(_);
const i5 = new h4(15790272, 1);
i5.position.x = 0.3;
i5.position.z = 0.7;
T.add(i5);
let D4 = 0, z5;
V.trees.forEach((u, o) => {
  u.forEach((s, e) => {
    let n = A4(D4++);
    n.position.x = (e - 49) * 4, n.position.z = (o - 49) * 4;
    const i = Math.max(1, s.height * 2), c = s.height / 9 + 0.5;
    if (n.scale.y = i, n.scale.x = n.scale.z = c, s === N5) {
      let r = M4();
      r.position.copy(n.position), r.position.y = s.height * 2 - 5, console.log(r.position), T.add(r), z5 = r;
    }
    T.add(n);
  });
});
const k4 = new d4(2e3, 2e3, 1, 1), R4 = new u4({ color: 1077280 }), Q = new v(k4, R4);
Q.rotateX(Math.PI / -2);
Q.y = -0.05;
Q.receiveShadow = !0;
T.add(Q);
const H4 = document.getElementById("vertexShader").textContent, I4 = document.getElementById("fragmentShader").textContent, s5 = {
  topColor: { value: new o5(30719) },
  bottomColor: { value: new o5(16777215) },
  offset: { value: 33 },
  exponent: { value: 0.6 }
};
s5.topColor.value.copy(_.color);
T.fog.color.copy(s5.bottomColor.value);
const N4 = new p4(900, 32, 15), v4 = new f4({
  uniforms: s5,
  vertexShader: H4,
  fragmentShader: I4,
  side: m4
}), j4 = new v(N4, v4);
T.add(j4);
const K = new y4(z, q.domElement);
K.autoRotate = !0;
K.target = z5.position.clone();
console.log("looking at ", K.target);
K.update();
const C4 = new b4();
C4.start();
B.appendChild(q.domElement);
window.addEventListener("resize", j5);
j5();
C5();
