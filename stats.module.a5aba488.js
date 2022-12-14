import { E as Ie, k as x, l as N, T as j, Q as ue, m as fe, n as M } from "./parsing.c9e1c62d.js";
const me = { type: "change" }, F = { type: "start" }, de = { type: "end" };
class je extends Ie {
  constructor(d, g) {
    super(), this.object = d, this.domElement = g, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new x(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: N.ROTATE, MIDDLE: N.DOLLY, RIGHT: N.PAN }, this.touches = { ONE: j.ROTATE, TWO: j.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return l.phi;
    }, this.getAzimuthalAngle = function() {
      return l.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(t) {
      t.addEventListener("keydown", se), this._domElementKeyEvents = t;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(me), e.update(), a = o.NONE;
    }, this.update = function() {
      const t = new x(), n = new ue().setFromUnitVectors(d.up, new x(0, 1, 0)), u = n.clone().invert(), f = new x(), T = new ue(), I = 2 * Math.PI;
      return function() {
        const pe = e.object.position;
        t.copy(pe).sub(e.target), t.applyQuaternion(n), l.setFromVector3(t), e.autoRotate && a === o.NONE && H(he()), e.enableDamping ? (l.theta += h.theta * e.dampingFactor, l.phi += h.phi * e.dampingFactor) : (l.theta += h.theta, l.phi += h.phi);
        let w = e.minAzimuthAngle, A = e.maxAzimuthAngle;
        return isFinite(w) && isFinite(A) && (w < -Math.PI ? w += I : w > Math.PI && (w -= I), A < -Math.PI ? A += I : A > Math.PI && (A -= I), w <= A ? l.theta = Math.max(w, Math.min(A, l.theta)) : l.theta = l.theta > (w + A) / 2 ? Math.max(w, l.theta) : Math.min(A, l.theta)), l.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, l.phi)), l.makeSafe(), l.radius *= O, l.radius = Math.max(e.minDistance, Math.min(e.maxDistance, l.radius)), e.enableDamping === !0 ? e.target.addScaledVector(c, e.dampingFactor) : e.target.add(c), t.setFromSpherical(l), t.applyQuaternion(u), pe.copy(e.target).add(t), e.object.lookAt(e.target), e.enableDamping === !0 ? (h.theta *= 1 - e.dampingFactor, h.phi *= 1 - e.dampingFactor, c.multiplyScalar(1 - e.dampingFactor)) : (h.set(0, 0, 0), c.set(0, 0, 0)), O = 1, p || f.distanceToSquared(e.object.position) > r || 8 * (1 - T.dot(e.object.quaternion)) > r ? (e.dispatchEvent(me), f.copy(e.object.position), T.copy(e.object.quaternion), p = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", le), e.domElement.removeEventListener("pointerdown", oe), e.domElement.removeEventListener("pointercancel", ae), e.domElement.removeEventListener("wheel", ie), e.domElement.removeEventListener("pointermove", U), e.domElement.removeEventListener("pointerup", X), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", se);
    };
    const e = this, o = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let a = o.NONE;
    const r = 1e-6, l = new fe(), h = new fe();
    let O = 1;
    const c = new x();
    let p = !1;
    const m = new M(), b = new M(), E = new M(), y = new M(), s = new M(), P = new M(), S = new M(), R = new M(), k = new M(), i = [], _ = {};
    function he() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function C() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function H(t) {
      h.theta -= t;
    }
    function v(t) {
      h.phi -= t;
    }
    const G = function() {
      const t = new x();
      return function(u, f) {
        t.setFromMatrixColumn(f, 0), t.multiplyScalar(-u), c.add(t);
      };
    }(), V = function() {
      const t = new x();
      return function(u, f) {
        e.screenSpacePanning === !0 ? t.setFromMatrixColumn(f, 1) : (t.setFromMatrixColumn(f, 0), t.crossVectors(e.object.up, t)), t.multiplyScalar(u), c.add(t);
      };
    }(), L = function() {
      const t = new x();
      return function(u, f) {
        const T = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const I = e.object.position;
          t.copy(I).sub(e.target);
          let z = t.length();
          z *= Math.tan(e.object.fov / 2 * Math.PI / 180), G(2 * u * z / T.clientHeight, e.object.matrix), V(2 * f * z / T.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (G(u * (e.object.right - e.object.left) / e.object.zoom / T.clientWidth, e.object.matrix), V(f * (e.object.top - e.object.bottom) / e.object.zoom / T.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function K(t) {
      e.object.isPerspectiveCamera ? O /= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * t)), e.object.updateProjectionMatrix(), p = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function W(t) {
      e.object.isPerspectiveCamera ? O *= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / t)), e.object.updateProjectionMatrix(), p = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function B(t) {
      m.set(t.clientX, t.clientY);
    }
    function be(t) {
      S.set(t.clientX, t.clientY);
    }
    function q(t) {
      y.set(t.clientX, t.clientY);
    }
    function ye(t) {
      b.set(t.clientX, t.clientY), E.subVectors(b, m).multiplyScalar(e.rotateSpeed);
      const n = e.domElement;
      H(2 * Math.PI * E.x / n.clientHeight), v(2 * Math.PI * E.y / n.clientHeight), m.copy(b), e.update();
    }
    function Ee(t) {
      R.set(t.clientX, t.clientY), k.subVectors(R, S), k.y > 0 ? K(C()) : k.y < 0 && W(C()), S.copy(R), e.update();
    }
    function ge(t) {
      s.set(t.clientX, t.clientY), P.subVectors(s, y).multiplyScalar(e.panSpeed), L(P.x, P.y), y.copy(s), e.update();
    }
    function Pe(t) {
      t.deltaY < 0 ? W(C()) : t.deltaY > 0 && K(C()), e.update();
    }
    function Te(t) {
      let n = !1;
      switch (t.code) {
        case e.keys.UP:
          t.ctrlKey || t.metaKey || t.shiftKey ? v(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : L(0, e.keyPanSpeed), n = !0;
          break;
        case e.keys.BOTTOM:
          t.ctrlKey || t.metaKey || t.shiftKey ? v(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : L(0, -e.keyPanSpeed), n = !0;
          break;
        case e.keys.LEFT:
          t.ctrlKey || t.metaKey || t.shiftKey ? H(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : L(e.keyPanSpeed, 0), n = !0;
          break;
        case e.keys.RIGHT:
          t.ctrlKey || t.metaKey || t.shiftKey ? H(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : L(-e.keyPanSpeed, 0), n = !0;
          break;
      }
      n && (t.preventDefault(), e.update());
    }
    function Q() {
      if (i.length === 1)
        m.set(i[0].pageX, i[0].pageY);
      else {
        const t = 0.5 * (i[0].pageX + i[1].pageX), n = 0.5 * (i[0].pageY + i[1].pageY);
        m.set(t, n);
      }
    }
    function J() {
      if (i.length === 1)
        y.set(i[0].pageX, i[0].pageY);
      else {
        const t = 0.5 * (i[0].pageX + i[1].pageX), n = 0.5 * (i[0].pageY + i[1].pageY);
        y.set(t, n);
      }
    }
    function $() {
      const t = i[0].pageX - i[1].pageX, n = i[0].pageY - i[1].pageY, u = Math.sqrt(t * t + n * n);
      S.set(0, u);
    }
    function Oe() {
      e.enableZoom && $(), e.enablePan && J();
    }
    function Me() {
      e.enableZoom && $(), e.enableRotate && Q();
    }
    function ee(t) {
      if (i.length == 1)
        b.set(t.pageX, t.pageY);
      else {
        const u = Z(t), f = 0.5 * (t.pageX + u.x), T = 0.5 * (t.pageY + u.y);
        b.set(f, T);
      }
      E.subVectors(b, m).multiplyScalar(e.rotateSpeed);
      const n = e.domElement;
      H(2 * Math.PI * E.x / n.clientHeight), v(2 * Math.PI * E.y / n.clientHeight), m.copy(b);
    }
    function te(t) {
      if (i.length === 1)
        s.set(t.pageX, t.pageY);
      else {
        const n = Z(t), u = 0.5 * (t.pageX + n.x), f = 0.5 * (t.pageY + n.y);
        s.set(u, f);
      }
      P.subVectors(s, y).multiplyScalar(e.panSpeed), L(P.x, P.y), y.copy(s);
    }
    function ne(t) {
      const n = Z(t), u = t.pageX - n.x, f = t.pageY - n.y, T = Math.sqrt(u * u + f * f);
      R.set(0, T), k.set(0, Math.pow(R.y / S.y, e.zoomSpeed)), K(k.y), S.copy(R);
    }
    function we(t) {
      e.enableZoom && ne(t), e.enablePan && te(t);
    }
    function Ae(t) {
      e.enableZoom && ne(t), e.enableRotate && ee(t);
    }
    function oe(t) {
      e.enabled !== !1 && (i.length === 0 && (e.domElement.setPointerCapture(t.pointerId), e.domElement.addEventListener("pointermove", U), e.domElement.addEventListener("pointerup", X)), Le(t), t.pointerType === "touch" ? De(t) : Se(t));
    }
    function U(t) {
      e.enabled !== !1 && (t.pointerType === "touch" ? Re(t) : xe(t));
    }
    function X(t) {
      re(t), i.length === 0 && (e.domElement.releasePointerCapture(t.pointerId), e.domElement.removeEventListener("pointermove", U), e.domElement.removeEventListener("pointerup", X)), e.dispatchEvent(de), a = o.NONE;
    }
    function ae(t) {
      re(t);
    }
    function Se(t) {
      let n;
      switch (t.button) {
        case 0:
          n = e.mouseButtons.LEFT;
          break;
        case 1:
          n = e.mouseButtons.MIDDLE;
          break;
        case 2:
          n = e.mouseButtons.RIGHT;
          break;
        default:
          n = -1;
      }
      switch (n) {
        case N.DOLLY:
          if (e.enableZoom === !1)
            return;
          be(t), a = o.DOLLY;
          break;
        case N.ROTATE:
          if (t.ctrlKey || t.metaKey || t.shiftKey) {
            if (e.enablePan === !1)
              return;
            q(t), a = o.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            B(t), a = o.ROTATE;
          }
          break;
        case N.PAN:
          if (t.ctrlKey || t.metaKey || t.shiftKey) {
            if (e.enableRotate === !1)
              return;
            B(t), a = o.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            q(t), a = o.PAN;
          }
          break;
        default:
          a = o.NONE;
      }
      a !== o.NONE && e.dispatchEvent(F);
    }
    function xe(t) {
      switch (a) {
        case o.ROTATE:
          if (e.enableRotate === !1)
            return;
          ye(t);
          break;
        case o.DOLLY:
          if (e.enableZoom === !1)
            return;
          Ee(t);
          break;
        case o.PAN:
          if (e.enablePan === !1)
            return;
          ge(t);
          break;
      }
    }
    function ie(t) {
      e.enabled === !1 || e.enableZoom === !1 || a !== o.NONE || (t.preventDefault(), e.dispatchEvent(F), Pe(t), e.dispatchEvent(de));
    }
    function se(t) {
      e.enabled === !1 || e.enablePan === !1 || Te(t);
    }
    function De(t) {
      switch (ce(t), i.length) {
        case 1:
          switch (e.touches.ONE) {
            case j.ROTATE:
              if (e.enableRotate === !1)
                return;
              Q(), a = o.TOUCH_ROTATE;
              break;
            case j.PAN:
              if (e.enablePan === !1)
                return;
              J(), a = o.TOUCH_PAN;
              break;
            default:
              a = o.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case j.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1)
                return;
              Oe(), a = o.TOUCH_DOLLY_PAN;
              break;
            case j.DOLLY_ROTATE:
              if (e.enableZoom === !1 && e.enableRotate === !1)
                return;
              Me(), a = o.TOUCH_DOLLY_ROTATE;
              break;
            default:
              a = o.NONE;
          }
          break;
        default:
          a = o.NONE;
      }
      a !== o.NONE && e.dispatchEvent(F);
    }
    function Re(t) {
      switch (ce(t), a) {
        case o.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          ee(t), e.update();
          break;
        case o.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          te(t), e.update();
          break;
        case o.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          we(t), e.update();
          break;
        case o.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          Ae(t), e.update();
          break;
        default:
          a = o.NONE;
      }
    }
    function le(t) {
      e.enabled !== !1 && t.preventDefault();
    }
    function Le(t) {
      i.push(t);
    }
    function re(t) {
      delete _[t.pointerId];
      for (let n = 0; n < i.length; n++)
        if (i[n].pointerId == t.pointerId) {
          i.splice(n, 1);
          return;
        }
    }
    function ce(t) {
      let n = _[t.pointerId];
      n === void 0 && (n = new M(), _[t.pointerId] = n), n.set(t.pageX, t.pageY);
    }
    function Z(t) {
      const n = t.pointerId === i[0].pointerId ? i[1] : i[0];
      return _[n.pointerId];
    }
    e.domElement.addEventListener("contextmenu", le), e.domElement.addEventListener("pointerdown", oe), e.domElement.addEventListener("pointercancel", ae), e.domElement.addEventListener("wheel", ie, { passive: !1 }), this.update();
  }
}
var Y = function() {
  var D = 0, d = document.createElement("div");
  d.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", d.addEventListener("click", function(c) {
    c.preventDefault(), e(++D % d.children.length);
  }, !1);
  function g(c) {
    return d.appendChild(c.dom), c;
  }
  function e(c) {
    for (var p = 0; p < d.children.length; p++)
      d.children[p].style.display = p === c ? "block" : "none";
    D = c;
  }
  var o = (performance || Date).now(), a = o, r = 0, l = g(new Y.Panel("FPS", "#0ff", "#002")), h = g(new Y.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory)
    var O = g(new Y.Panel("MB", "#f08", "#201"));
  return e(0), {
    REVISION: 16,
    dom: d,
    addPanel: g,
    showPanel: e,
    begin: function() {
      o = (performance || Date).now();
    },
    end: function() {
      r++;
      var c = (performance || Date).now();
      if (h.update(c - o, 200), c >= a + 1e3 && (l.update(r * 1e3 / (c - a), 100), a = c, r = 0, O)) {
        var p = performance.memory;
        O.update(p.usedJSHeapSize / 1048576, p.jsHeapSizeLimit / 1048576);
      }
      return c;
    },
    update: function() {
      o = this.end();
    },
    domElement: d,
    setMode: e
  };
};
Y.Panel = function(D, d, g) {
  var e = 1 / 0, o = 0, a = Math.round, r = a(window.devicePixelRatio || 1), l = 80 * r, h = 48 * r, O = 3 * r, c = 2 * r, p = 3 * r, m = 15 * r, b = 74 * r, E = 30 * r, y = document.createElement("canvas");
  y.width = l, y.height = h, y.style.cssText = "width:80px;height:48px";
  var s = y.getContext("2d");
  return s.font = "bold " + 9 * r + "px Helvetica,Arial,sans-serif", s.textBaseline = "top", s.fillStyle = g, s.fillRect(0, 0, l, h), s.fillStyle = d, s.fillText(D, O, c), s.fillRect(p, m, b, E), s.fillStyle = g, s.globalAlpha = 0.9, s.fillRect(p, m, b, E), {
    dom: y,
    update: function(P, S) {
      e = Math.min(e, P), o = Math.max(o, P), s.fillStyle = g, s.globalAlpha = 1, s.fillRect(0, 0, l, m), s.fillStyle = d, s.fillText(a(P) + " " + D + " (" + a(e) + "-" + a(o) + ")", O, c), s.drawImage(y, p + r, m, b - r, E, p, m, b - r, E), s.fillRect(p + b - r, m, r, E), s.fillStyle = g, s.globalAlpha = 0.9, s.fillRect(p + b - r, m, r, a((1 - P / S) * E));
    }
  };
};
const ke = Y;
export {
  je as O,
  ke as S
};
