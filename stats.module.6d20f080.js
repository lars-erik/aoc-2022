var v = function() {
  var m = 0, a = document.createElement("div");
  a.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", a.addEventListener("click", function(n) {
    n.preventDefault(), o(++m % a.children.length);
  }, !1);
  function i(n) {
    return a.appendChild(n.dom), n;
  }
  function o(n) {
    for (var l = 0; l < a.children.length; l++)
      a.children[l].style.display = l === n ? "block" : "none";
    m = n;
  }
  var f = (performance || Date).now(), r = f, e = 0, u = i(new v.Panel("FPS", "#0ff", "#002")), x = i(new v.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory)
    var h = i(new v.Panel("MB", "#f08", "#201"));
  return o(0), {
    REVISION: 16,
    dom: a,
    addPanel: i,
    showPanel: o,
    begin: function() {
      f = (performance || Date).now();
    },
    end: function() {
      e++;
      var n = (performance || Date).now();
      if (x.update(n - f, 200), n >= r + 1e3 && (u.update(e * 1e3 / (n - r), 100), r = n, e = 0, h)) {
        var l = performance.memory;
        h.update(l.usedJSHeapSize / 1048576, l.jsHeapSizeLimit / 1048576);
      }
      return n;
    },
    update: function() {
      f = this.end();
    },
    domElement: a,
    setMode: o
  };
};
v.Panel = function(m, a, i) {
  var o = 1 / 0, f = 0, r = Math.round, e = r(window.devicePixelRatio || 1), u = 80 * e, x = 48 * e, h = 3 * e, n = 2 * e, l = 3 * e, c = 15 * e, d = 74 * e, s = 30 * e, p = document.createElement("canvas");
  p.width = u, p.height = x, p.style.cssText = "width:80px;height:48px";
  var t = p.getContext("2d");
  return t.font = "bold " + 9 * e + "px Helvetica,Arial,sans-serif", t.textBaseline = "top", t.fillStyle = i, t.fillRect(0, 0, u, x), t.fillStyle = a, t.fillText(m, h, n), t.fillRect(l, c, d, s), t.fillStyle = i, t.globalAlpha = 0.9, t.fillRect(l, c, d, s), {
    dom: p,
    update: function(P, S) {
      o = Math.min(o, P), f = Math.max(f, P), t.fillStyle = i, t.globalAlpha = 1, t.fillRect(0, 0, u, c), t.fillStyle = a, t.fillText(r(P) + " " + m + " (" + r(o) + "-" + r(f) + ")", h, n), t.drawImage(p, l + e, c, d - e, s, l, c, d - e, s), t.fillRect(l + d - e, c, e, s), t.fillStyle = i, t.globalAlpha = 0.9, t.fillRect(l + d - e, c, e, r((1 - P / S) * s));
    }
  };
};
const T = v;
export {
  T as S
};
