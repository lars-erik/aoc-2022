import { E as t4, c as P, d as j, T as I, Q as S5, e as x5, f as b, a as n4, g as X, h as G, S as o4, W as a4, i as i4, j as n5, F as s4, A as r4, H as c4, k as l4, P as h4, l as u4, M as R, m as d4, b as p4, B as f4, C as m4, n as j5 } from "./parsing.8b6b88a7.js";
import { S as b4 } from "./stats.module.6d20f080.js";
const L5 = { type: "change" }, t5 = { type: "start" }, A5 = { type: "end" };
class g4 extends t4 {
  constructor(a, r) {
    super(), this.object = a, this.domElement = r, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new P(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: j.ROTATE, MIDDLE: j.DOLLY, RIGHT: j.PAN }, this.touches = { ONE: I.ROTATE, TWO: I.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return s.phi;
    }, this.getAzimuthalAngle = function() {
      return s.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(t) {
      t.addEventListener("keydown", w5), this._domElementKeyEvents = t;
    }, this.saveState = function() {
      e.target0.copy(e.target), e.position0.copy(e.object.position), e.zoom0 = e.object.zoom;
    }, this.reset = function() {
      e.target.copy(e.target0), e.object.position.copy(e.position0), e.object.zoom = e.zoom0, e.object.updateProjectionMatrix(), e.dispatchEvent(L5), e.update(), i = n.NONE;
    }, this.update = function() {
      const t = new P(), o = new S5().setFromUnitVectors(a.up, new P(0, 1, 0)), h = o.clone().invert(), u = new P(), m = new S5(), N = 2 * Math.PI;
      return function() {
        const O5 = e.object.position;
        t.copy(O5).sub(e.target), t.applyQuaternion(o), s.setFromVector3(t), e.autoRotate && i === n.NONE && H(v5()), e.enableDamping ? (s.theta += p.theta * e.dampingFactor, s.phi += p.phi * e.dampingFactor) : (s.theta += p.theta, s.phi += p.phi);
        let E = e.minAzimuthAngle, w = e.maxAzimuthAngle;
        return isFinite(E) && isFinite(w) && (E < -Math.PI ? E += N : E > Math.PI && (E -= N), w < -Math.PI ? w += N : w > Math.PI && (w -= N), E <= w ? s.theta = Math.max(E, Math.min(w, s.theta)) : s.theta = s.theta > (E + w) / 2 ? Math.max(E, s.theta) : Math.min(w, s.theta)), s.phi = Math.max(e.minPolarAngle, Math.min(e.maxPolarAngle, s.phi)), s.makeSafe(), s.radius *= g, s.radius = Math.max(e.minDistance, Math.min(e.maxDistance, s.radius)), e.enableDamping === !0 ? e.target.addScaledVector(y, e.dampingFactor) : e.target.add(y), t.setFromSpherical(s), t.applyQuaternion(h), O5.copy(e.target).add(t), e.object.lookAt(e.target), e.enableDamping === !0 ? (p.theta *= 1 - e.dampingFactor, p.phi *= 1 - e.dampingFactor, y.multiplyScalar(1 - e.dampingFactor)) : (p.set(0, 0, 0), y.set(0, 0, 0)), g = 1, _ || u.distanceToSquared(e.object.position) > d || 8 * (1 - m.dot(e.object.quaternion)) > d ? (e.dispatchEvent(L5), u.copy(e.object.position), m.copy(e.object.quaternion), _ = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      e.domElement.removeEventListener("contextmenu", P5), e.domElement.removeEventListener("pointerdown", g5), e.domElement.removeEventListener("pointercancel", y5), e.domElement.removeEventListener("wheel", E5), e.domElement.removeEventListener("pointermove", J), e.domElement.removeEventListener("pointerup", $), e._domElementKeyEvents !== null && e._domElementKeyEvents.removeEventListener("keydown", w5);
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
    const d = 1e-6, s = new x5(), p = new x5();
    let g = 1;
    const y = new P();
    let _ = !1;
    const M = new b(), T = new b(), x = new b(), O = new b(), S = new b(), L = new b(), A = new b(), D = new b(), C = new b(), c = [], K = {};
    function v5() {
      return 2 * Math.PI / 60 / 60 * e.autoRotateSpeed;
    }
    function F() {
      return Math.pow(0.95, e.zoomSpeed);
    }
    function H(t) {
      p.theta -= t;
    }
    function U(t) {
      p.phi -= t;
    }
    const s5 = function() {
      const t = new P();
      return function(h, u) {
        t.setFromMatrixColumn(u, 0), t.multiplyScalar(-h), y.add(t);
      };
    }(), r5 = function() {
      const t = new P();
      return function(h, u) {
        e.screenSpacePanning === !0 ? t.setFromMatrixColumn(u, 1) : (t.setFromMatrixColumn(u, 0), t.crossVectors(e.object.up, t)), t.multiplyScalar(h), y.add(t);
      };
    }(), k = function() {
      const t = new P();
      return function(h, u) {
        const m = e.domElement;
        if (e.object.isPerspectiveCamera) {
          const N = e.object.position;
          t.copy(N).sub(e.target);
          let Z = t.length();
          Z *= Math.tan(e.object.fov / 2 * Math.PI / 180), s5(2 * h * Z / m.clientHeight, e.object.matrix), r5(2 * u * Z / m.clientHeight, e.object.matrix);
        } else
          e.object.isOrthographicCamera ? (s5(h * (e.object.right - e.object.left) / e.object.zoom / m.clientWidth, e.object.matrix), r5(u * (e.object.top - e.object.bottom) / e.object.zoom / m.clientHeight, e.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), e.enablePan = !1);
      };
    }();
    function Q(t) {
      e.object.isPerspectiveCamera ? g /= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom * t)), e.object.updateProjectionMatrix(), _ = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function c5(t) {
      e.object.isPerspectiveCamera ? g *= t : e.object.isOrthographicCamera ? (e.object.zoom = Math.max(e.minZoom, Math.min(e.maxZoom, e.object.zoom / t)), e.object.updateProjectionMatrix(), _ = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), e.enableZoom = !1);
    }
    function l5(t) {
      M.set(t.clientX, t.clientY);
    }
    function _5(t) {
      A.set(t.clientX, t.clientY);
    }
    function h5(t) {
      O.set(t.clientX, t.clientY);
    }
    function K5(t) {
      T.set(t.clientX, t.clientY), x.subVectors(T, M).multiplyScalar(e.rotateSpeed);
      const o = e.domElement;
      H(2 * Math.PI * x.x / o.clientHeight), U(2 * Math.PI * x.y / o.clientHeight), M.copy(T), e.update();
    }
    function F5(t) {
      D.set(t.clientX, t.clientY), C.subVectors(D, A), C.y > 0 ? Q(F()) : C.y < 0 && c5(F()), A.copy(D), e.update();
    }
    function U5(t) {
      S.set(t.clientX, t.clientY), L.subVectors(S, O).multiplyScalar(e.panSpeed), k(L.x, L.y), O.copy(S), e.update();
    }
    function Z5(t) {
      t.deltaY < 0 ? c5(F()) : t.deltaY > 0 && Q(F()), e.update();
    }
    function X5(t) {
      let o = !1;
      switch (t.code) {
        case e.keys.UP:
          t.ctrlKey || t.metaKey || t.shiftKey ? U(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : k(0, e.keyPanSpeed), o = !0;
          break;
        case e.keys.BOTTOM:
          t.ctrlKey || t.metaKey || t.shiftKey ? U(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : k(0, -e.keyPanSpeed), o = !0;
          break;
        case e.keys.LEFT:
          t.ctrlKey || t.metaKey || t.shiftKey ? H(2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : k(e.keyPanSpeed, 0), o = !0;
          break;
        case e.keys.RIGHT:
          t.ctrlKey || t.metaKey || t.shiftKey ? H(-2 * Math.PI * e.rotateSpeed / e.domElement.clientHeight) : k(-e.keyPanSpeed, 0), o = !0;
          break;
      }
      o && (t.preventDefault(), e.update());
    }
    function u5() {
      if (c.length === 1)
        M.set(c[0].pageX, c[0].pageY);
      else {
        const t = 0.5 * (c[0].pageX + c[1].pageX), o = 0.5 * (c[0].pageY + c[1].pageY);
        M.set(t, o);
      }
    }
    function d5() {
      if (c.length === 1)
        O.set(c[0].pageX, c[0].pageY);
      else {
        const t = 0.5 * (c[0].pageX + c[1].pageX), o = 0.5 * (c[0].pageY + c[1].pageY);
        O.set(t, o);
      }
    }
    function p5() {
      const t = c[0].pageX - c[1].pageX, o = c[0].pageY - c[1].pageY, h = Math.sqrt(t * t + o * o);
      A.set(0, h);
    }
    function G5() {
      e.enableZoom && p5(), e.enablePan && d5();
    }
    function V5() {
      e.enableZoom && p5(), e.enableRotate && u5();
    }
    function f5(t) {
      if (c.length == 1)
        T.set(t.pageX, t.pageY);
      else {
        const h = e5(t), u = 0.5 * (t.pageX + h.x), m = 0.5 * (t.pageY + h.y);
        T.set(u, m);
      }
      x.subVectors(T, M).multiplyScalar(e.rotateSpeed);
      const o = e.domElement;
      H(2 * Math.PI * x.x / o.clientHeight), U(2 * Math.PI * x.y / o.clientHeight), M.copy(T);
    }
    function m5(t) {
      if (c.length === 1)
        S.set(t.pageX, t.pageY);
      else {
        const o = e5(t), h = 0.5 * (t.pageX + o.x), u = 0.5 * (t.pageY + o.y);
        S.set(h, u);
      }
      L.subVectors(S, O).multiplyScalar(e.panSpeed), k(L.x, L.y), O.copy(S);
    }
    function b5(t) {
      const o = e5(t), h = t.pageX - o.x, u = t.pageY - o.y, m = Math.sqrt(h * h + u * u);
      D.set(0, m), C.set(0, Math.pow(D.y / A.y, e.zoomSpeed)), Q(C.y), A.copy(D);
    }
    function W5(t) {
      e.enableZoom && b5(t), e.enablePan && m5(t);
    }
    function B5(t) {
      e.enableZoom && b5(t), e.enableRotate && f5(t);
    }
    function g5(t) {
      e.enabled !== !1 && (c.length === 0 && (e.domElement.setPointerCapture(t.pointerId), e.domElement.addEventListener("pointermove", J), e.domElement.addEventListener("pointerup", $)), e4(t), t.pointerType === "touch" ? J5(t) : q5(t));
    }
    function J(t) {
      e.enabled !== !1 && (t.pointerType === "touch" ? $5(t) : Q5(t));
    }
    function $(t) {
      M5(t), c.length === 0 && (e.domElement.releasePointerCapture(t.pointerId), e.domElement.removeEventListener("pointermove", J), e.domElement.removeEventListener("pointerup", $)), e.dispatchEvent(A5), i = n.NONE;
    }
    function y5(t) {
      M5(t);
    }
    function q5(t) {
      let o;
      switch (t.button) {
        case 0:
          o = e.mouseButtons.LEFT;
          break;
        case 1:
          o = e.mouseButtons.MIDDLE;
          break;
        case 2:
          o = e.mouseButtons.RIGHT;
          break;
        default:
          o = -1;
      }
      switch (o) {
        case j.DOLLY:
          if (e.enableZoom === !1)
            return;
          _5(t), i = n.DOLLY;
          break;
        case j.ROTATE:
          if (t.ctrlKey || t.metaKey || t.shiftKey) {
            if (e.enablePan === !1)
              return;
            h5(t), i = n.PAN;
          } else {
            if (e.enableRotate === !1)
              return;
            l5(t), i = n.ROTATE;
          }
          break;
        case j.PAN:
          if (t.ctrlKey || t.metaKey || t.shiftKey) {
            if (e.enableRotate === !1)
              return;
            l5(t), i = n.ROTATE;
          } else {
            if (e.enablePan === !1)
              return;
            h5(t), i = n.PAN;
          }
          break;
        default:
          i = n.NONE;
      }
      i !== n.NONE && e.dispatchEvent(t5);
    }
    function Q5(t) {
      switch (i) {
        case n.ROTATE:
          if (e.enableRotate === !1)
            return;
          K5(t);
          break;
        case n.DOLLY:
          if (e.enableZoom === !1)
            return;
          F5(t);
          break;
        case n.PAN:
          if (e.enablePan === !1)
            return;
          U5(t);
          break;
      }
    }
    function E5(t) {
      e.enabled === !1 || e.enableZoom === !1 || i !== n.NONE || (t.preventDefault(), e.dispatchEvent(t5), Z5(t), e.dispatchEvent(A5));
    }
    function w5(t) {
      e.enabled === !1 || e.enablePan === !1 || X5(t);
    }
    function J5(t) {
      switch (T5(t), c.length) {
        case 1:
          switch (e.touches.ONE) {
            case I.ROTATE:
              if (e.enableRotate === !1)
                return;
              u5(), i = n.TOUCH_ROTATE;
              break;
            case I.PAN:
              if (e.enablePan === !1)
                return;
              d5(), i = n.TOUCH_PAN;
              break;
            default:
              i = n.NONE;
          }
          break;
        case 2:
          switch (e.touches.TWO) {
            case I.DOLLY_PAN:
              if (e.enableZoom === !1 && e.enablePan === !1)
                return;
              G5(), i = n.TOUCH_DOLLY_PAN;
              break;
            case I.DOLLY_ROTATE:
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
      i !== n.NONE && e.dispatchEvent(t5);
    }
    function $5(t) {
      switch (T5(t), i) {
        case n.TOUCH_ROTATE:
          if (e.enableRotate === !1)
            return;
          f5(t), e.update();
          break;
        case n.TOUCH_PAN:
          if (e.enablePan === !1)
            return;
          m5(t), e.update();
          break;
        case n.TOUCH_DOLLY_PAN:
          if (e.enableZoom === !1 && e.enablePan === !1)
            return;
          W5(t), e.update();
          break;
        case n.TOUCH_DOLLY_ROTATE:
          if (e.enableZoom === !1 && e.enableRotate === !1)
            return;
          B5(t), e.update();
          break;
        default:
          i = n.NONE;
      }
    }
    function P5(t) {
      e.enabled !== !1 && t.preventDefault();
    }
    function e4(t) {
      c.push(t);
    }
    function M5(t) {
      delete K[t.pointerId];
      for (let o = 0; o < c.length; o++)
        if (c[o].pointerId == t.pointerId) {
          c.splice(o, 1);
          return;
        }
    }
    function T5(t) {
      let o = K[t.pointerId];
      o === void 0 && (o = new b(), K[t.pointerId] = o), o.set(t.pageX, t.pageY);
    }
    function e5(t) {
      const o = t.pointerId === c[0].pointerId ? c[1] : c[0];
      return K[o.pointerId];
    }
    e.domElement.addEventListener("contextmenu", P5), e.domElement.addEventListener("pointerdown", g5), e.domElement.addEventListener("pointercancel", y5), e.domElement.addEventListener("wheel", E5, { passive: !1 }), this.update();
  }
}
class y4 {
  constructor(a) {
    this.trees = a;
  }
  updateVisibility() {
    let a = 0;
    for (let r = 0; r < this.trees.length; r++)
      for (let e = 0; e < this.trees[0].length; e++)
        a += this.trees[r][e].updateVisibility(this.trees);
    this.visibleTrees = a;
  }
}
class E4 {
  constructor(a, r, e) {
    this.x = a, this.y = r, this.height = e;
  }
  updateDirection(a, r, e, n, i) {
    let d = 0;
    for (let s = a; e(s); s += n) {
      const p = i(s), g = p !== this;
      if (g && d++, g && p.height >= this.height)
        break;
      s === r && (this.visible = !0);
    }
    this.visibleTrees.push(d);
  }
  updateVisibility(a) {
    this.visibleTrees = [], this.visible = !1;
    const r = (n) => a[n][this.x], e = (n) => a[this.y][n];
    return this.updateDirection(this.y, 0, (n) => n >= 0, -1, r), this.updateDirection(this.y, a.length - 1, (n) => n < a.length, 1, r), this.updateDirection(this.x, 0, (n) => n >= 0, -1, e), this.updateDirection(this.x, a[0].length - 1, (n) => n < a[0].length, 1, e), this.scenicScore = this.visibleTrees.reduce((n, i) => n * i, 1), this.visible ? 1 : 0;
  }
}
function w4(l) {
  let a = n4(l).map((e, n) => e.split("").map((i, d) => new E4(d, n, Number(i)))), r = new y4(a);
  return r.updateVisibility(), r;
}
const P4 = `300030213213113240234210203330153124541151003015456312312442524531405533542450111443312103110220211
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
311310344433212432240252542030050542510636225454204032233645040015025321421052152330422440232330022`, V = w4(P4);
console.log(V.trees.length * V.trees[0].length);
let I5 = V.trees.reduce(
  (l, a) => a.reduce((r, e) => (e.scenicScore > r.m && (r.m = e.scenicScore, r.tree = e), r), l),
  { tree: null, m: 0 }
).tree;
console.log(I5);
const W = document.querySelector("#scene"), R5 = new b4();
W.appendChild(R5.dom);
function C5() {
  B.setSize(W.clientWidth, W.clientHeight);
}
function H5() {
  requestAnimationFrame(H5), B.render(f, Y), R5.update(), v.update();
}
function M4() {
  const l = new j5(), a = 3.5, r = 2.5, e = 4.5, n = new X(0.1, e, r, 16), i = new G({ color: 2759173 }), d = new R(n, i);
  d.position.y = a + r / 2, l.add(d);
  const s = 3, p = new X(s, s, a, 16), g = new G({ color: 2759173 }), y = new R(p, g);
  return y.position.y = a / 2, l.add(y), l;
}
const Y5 = 0.85, o5 = 0.15, D5 = 0.5, T4 = new X(D5, D5 + 0.1, o5, 16), O4 = new G({ color: 4203786 }), S4 = new X(0.01, 1.25, Y5, 16), k5 = [];
function N5(l) {
  let a = Math.sin(l * 3457.3937) * 2543.137;
  return a = a - parseInt(a), a;
}
function x4(l) {
  const a = new j5(), r = new R(T4, O4);
  r.position.y = o5 / 2, a.add(r);
  const e = 25;
  let n;
  if (l <= e) {
    let d = Math.floor(704538 + N5(l) * 335877);
    n = new G({ color: d }), k5.push(n);
  } else
    n = k5[Math.floor((N5(l) * 0.5 + 0.5) * e) % e];
  const i = new R(S4, n);
  return i.position.y = o5 + Y5 / 2, a.add(i), a;
}
const f = new o4(), B = new a4(), Y = new i4(50, window.innerWidth / window.innerHeight, 0.1, 1e3);
Y.position.x = 0;
Y.position.z = 0;
Y.position.y = 50;
f.background = new n5().setHSL(0.6, 0, 1);
f.fog = new s4(f.background, 1, 1e3);
const L4 = new r4(6316128, 0.9);
f.add(L4);
const z = new c4(16777130, 16777130, 0.25);
z.color.setHSL(0.6, 1, 0.6);
z.groundColor.setHSL(0.095, 1, 0.75);
z.position.set(0, 800, 0);
f.add(z);
const a5 = new l4(15790272, 1);
a5.position.x = 0.3;
a5.position.z = 0.7;
f.add(a5);
let A4 = 0, z5;
V.trees.forEach((l, a) => {
  l.forEach((r, e) => {
    let n = x4(A4++);
    n.position.x = (e - 49) * 4, n.position.z = (a - 49) * 4;
    const i = Math.max(1, r.height * 2), d = r.height / 9 + 0.5;
    if (n.scale.y = i, n.scale.x = n.scale.z = d, r === I5) {
      let s = M4();
      s.position.copy(n.position), s.position.y = r.height * 2 - 5, console.log(s.position), f.add(s), z5 = s;
    }
    f.add(n);
  });
});
const D4 = new h4(2e3, 2e3, 1, 1), k4 = new u4({ color: 1077280 }), q = new R(D4, k4);
q.rotateX(Math.PI / -2);
q.y = -0.05;
q.receiveShadow = !0;
f.add(q);
const N4 = document.getElementById("vertexShader").textContent, j4 = document.getElementById("fragmentShader").textContent, i5 = {
  topColor: { value: new n5(30719) },
  bottomColor: { value: new n5(16777215) },
  offset: { value: 33 },
  exponent: { value: 0.6 }
};
i5.topColor.value.copy(z.color);
f.fog.color.copy(i5.bottomColor.value);
const I4 = new d4(900, 32, 15), R4 = new p4({
  uniforms: i5,
  vertexShader: N4,
  fragmentShader: j4,
  side: f4
}), C4 = new R(I4, R4);
f.add(C4);
const v = new g4(Y, B.domElement);
v.autoRotate = !0;
v.target = z5.position.clone();
console.log("looking at ", v.target);
v.update();
const H4 = new m4();
H4.start();
W.appendChild(B.domElement);
window.addEventListener("resize", C5);
C5();
H5();
