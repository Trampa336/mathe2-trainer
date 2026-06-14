/* Handschrift-Notizfeld pro Aufgabe.
   Zeichnen mit Stylus (oder Maus zum Testen) über Pointer Events;
   ein Finger scrollt die Seite (touch-action: pan-y), Handballen werden
   als "touch" ignoriert. Striche werden mit Mittelpunkt-Glättung gezogen
   (Samsung-Notes-Gefühl) und pro Aufgabe als PNG in localStorage gesichert. */
(function () {
  "use strict";

  const PEN_WIDTH = 2.4;
  const ERASER_WIDTH = 18;

  function html() {
    return (
      '<div class="scratch card" data-scratch>' +
      '<div class="scratch-bar">' +
      '<span class="scratch-titel">✏️ Notizen</span>' +
      '<button class="scratch-tool aktiv" data-tool="stift">Stift</button>' +
      '<button class="scratch-tool" data-tool="radierer">Radierer</button>' +
      '<button class="scratch-leeren" data-tool="leeren">Leeren</button>' +
      "</div>" +
      '<canvas class="scratch-canvas"></canvas>' +
      "</div>"
    );
  }

  function init(aufgabeId) {
    const wrap = document.querySelector(".scratch[data-scratch]");
    if (!wrap) return;
    const canvas = wrap.querySelector(".scratch-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let tool = "stift";
    let zeichnet = false;
    let prev = null;    // letzter Roh-Punkt {x, y}
    let prevMid = null; // letzter Mittelpunkt – Startpunkt der nächsten Kurve

    // Backing-Store an Anzeigegröße × DPR koppeln -> scharfe Linien.
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    }

    function restore() {
      const data = Store.getSketch(aufgabeId);
      if (!data) return;
      const img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.clientWidth, canvas.clientHeight);
      };
      img.src = data;
    }

    resize();
    restore();

    function punkt(e) {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    function darfZeichnen(e) {
      // Stift und Maus zeichnen; Finger (touch) scrollt -> ignorieren.
      return e.pointerType === "pen" || e.pointerType === "mouse";
    }

    function strichStil(e) {
      if (tool === "radierer") {
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = ERASER_WIDTH;
      } else {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = "#f2f4f8";
        // Stylus-Druck (falls vorhanden) leicht in die Strichbreite einrechnen.
        const druck = e.pressure && e.pressure > 0 ? e.pressure : 0.5;
        ctx.lineWidth = PEN_WIDTH * (0.6 + druck);
      }
    }

    canvas.addEventListener("pointerdown", function (e) {
      if (!darfZeichnen(e)) return;
      e.preventDefault();
      zeichnet = true;
      prev = punkt(e);
      prevMid = prev;
      strichStil(e);
      // Einzelner Tipp -> kleiner Punkt.
      ctx.beginPath();
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(prev.x + 0.01, prev.y + 0.01);
      ctx.stroke();
      if (canvas.setPointerCapture) canvas.setPointerCapture(e.pointerId);
    });

    canvas.addEventListener("pointermove", function (e) {
      if (!zeichnet || !darfZeichnen(e)) return;
      e.preventDefault();
      const p = punkt(e);
      // Mittelpunkt-Glättung: Kurve von Mittelpunkt zu Mittelpunkt,
      // der echte Punkt dient als Kontrollpunkt -> weiche Striche.
      const mid = { x: (prev.x + p.x) / 2, y: (prev.y + p.y) / 2 };
      strichStil(e);
      ctx.beginPath();
      ctx.moveTo(prevMid.x, prevMid.y);
      ctx.quadraticCurveTo(prev.x, prev.y, mid.x, mid.y);
      ctx.stroke();
      prev = p;
      prevMid = mid;
    });

    function ende(e) {
      if (!zeichnet) return;
      zeichnet = false;
      prev = null;
      prevMid = null;
      try {
        Store.setSketch(aufgabeId, canvas.toDataURL("image/png"));
      } catch (err) {
        /* toDataURL kann bei sehr großem Canvas scheitern – ignorieren */
      }
    }

    canvas.addEventListener("pointerup", ende);
    canvas.addEventListener("pointercancel", ende);
    canvas.addEventListener("pointerleave", ende);

    wrap.querySelectorAll("[data-tool]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const t = btn.dataset.tool;
        if (t === "leeren") {
          if (!confirm("Notizen zu dieser Aufgabe löschen?")) return;
          ctx.save();
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.restore();
          Store.clearSketch(aufgabeId);
          return;
        }
        tool = t;
        wrap.querySelectorAll(".scratch-tool").forEach(function (b) {
          b.classList.toggle("aktiv", b.dataset.tool === t);
        });
      });
    });

    // Bei Drehung/Größenänderung: Bild sichern, neu dimensionieren, neu zeichnen.
    let resizeTimer = null;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (!document.body.contains(canvas)) {
          window.removeEventListener("resize", onResize);
          return;
        }
        resize();
        restore();
      }, 150);
    }
    window.addEventListener("resize", onResize);
  }

  window.Scratch = { html: html, init: init };
})();
