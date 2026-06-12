/* Mathe 2 Trainer – Einseiten-App mit Hash-Routing.
   Ansichten: Dashboard, Aufgabenliste, Aufgabe (Schritt-für-Schritt),
   Formelkarten (Leitner), Zufallsmix. */
(function () {
  "use strict";

  const DATA = window.MATHE2_DATA;
  const app = document.getElementById("app");

  // ---------- Hilfsfunktionen ----------

  function sichtbareThemen() {
    return DATA.themen.filter((t) => !Store.isHidden(t.id));
  }

  function findThema(id) {
    return DATA.themen.find((t) => t.id === id) || null;
  }

  function findAufgabe(id) {
    for (const t of DATA.themen) {
      const a = t.aufgaben.find((x) => x.id === id);
      if (a) return { thema: t, aufgabe: a };
    }
    return null;
  }

  function sterne(n) {
    return "★".repeat(n) + "☆".repeat(Math.max(0, 3 - n));
  }

  function mische(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function gradeLabel(g) {
    return g === "sicher" ? "Sicher" : g === "hilfe" ? "Mit Hilfe" : g === "nicht" ? "Nicht gekonnt" : "Offen";
  }

  function typChip(a) {
    if (!a.typ) return "";
    const cls = a.typ.toLowerCase().replace(/ä/g, "ae").replace(/ü/g, "ue").replace(/ö/g, "oe");
    return '<span class="typ-chip typ-' + cls + '">' + a.typ + "</span>";
  }

  // ---------- Sitzungszustand (nicht persistiert) ----------

  const sitzung = {
    schritte: {},      // aufgabeId -> Anzahl aufgedeckter Schritte
    hinweis: {},       // aufgabeId -> Hinweis sichtbar?
    kartenQueue: null, // aktuelle Kartenrunde
    kartenIndex: 0,
    kartenStat: { gewusst: 0, nicht: 0 },
    kartenThema: null,
    flipped: false,
    mixQueue: null,
    mixIndex: 0,
  };

  // ---------- Dashboard ----------

  function renderDashboard() {
    const sichtbar = sichtbareThemen();
    const versteckt = DATA.themen.filter((t) => Store.isHidden(t.id));

    let html = "<h1>Womit willst du üben?</h1>";

    // Schwächste Themen ermitteln
    const schwach = sichtbar
      .map((t) => {
        const noten = t.aufgaben.map((a) => Store.getGrade(a.id));
        const schlecht = noten.filter((g) => g === "nicht").length + 0.5 * noten.filter((g) => g === "hilfe").length;
        return { t, schlecht };
      })
      .filter((x) => x.schlecht >= 1.5)
      .sort((a, b) => b.schlecht - a.schlecht);
    if (schwach.length) {
      html += '<div class="schwach-hinweis">📌 Wiederholen lohnt sich bei: <strong>' +
        schwach.map((x) => x.t.titel).join(", ") + "</strong></div>";
    }

    html += sichtbar.map((t) => themaCard(t, false)).join("");

    if (!sichtbar.length) {
      html += '<p class="leer-hinweis">Alle Themen sind ausgeblendet – unten wieder einblenden.</p>';
    }

    if (versteckt.length) {
      html += '<div class="hidden-bereich"><h2>Ausgeblendete Themen</h2>' +
        versteckt.map((t) => themaCard(t, true)) .join("") + "</div>";
    }

    html += '<p class="fussnote">Fortschritt wird lokal im Browser gespeichert. ' +
      '<button id="reset-btn">Alles zurücksetzen</button></p>';

    app.innerHTML = html;

    app.querySelectorAll("[data-toggle-thema]").forEach((btn) => {
      btn.addEventListener("click", () => {
        Store.toggleHidden(btn.dataset.toggleThema);
        renderDashboard();
      });
    });
    const reset = document.getElementById("reset-btn");
    if (reset) {
      reset.addEventListener("click", () => {
        if (confirm("Wirklich den gesamten Fortschritt löschen?")) {
          Store.resetAll();
          renderDashboard();
        }
      });
    }
  }

  function themaCard(t, istVersteckt) {
    const nA = t.aufgaben.length;
    const nSicher = t.aufgaben.filter((a) => Store.getGrade(a.id) === "sicher").length;
    const nK = t.karten.length;
    const nBox2 = t.karten.filter((k) => Store.getBox(k.id) === 2).length;
    const pA = nA ? Math.round((100 * nSicher) / nA) : 0;

    let aktionen;
    if (istVersteckt) {
      aktionen = '<button class="btn sekundaer" data-toggle-thema="' + t.id + '">Wieder einblenden</button>';
    } else {
      aktionen =
        (nA ? '<a class="btn" href="#/ueben/' + t.id + '">Üben (' + nA + ")</a>" : "") +
        (nK ? '<a class="btn sekundaer" href="#/karten/' + t.id + '">Formelkarten (' + nK + ")</a>" : "") +
        '<button class="btn leise" data-toggle-thema="' + t.id + '">Ausblenden</button>';
    }

    return (
      '<div class="card thema-card">' +
      '<div class="thema-kopf"><span class="thema-titel">' + t.titel + "</span>" +
      (nA === 0 && nK === 0 ? '<span class="abzeichen">Inhalte folgen</span>' : "") +
      "</div>" +
      '<div class="thema-unter">' + t.untertitel + "</div>" +
      (nA
        ? '<div class="progressbar"><div style="width:' + pA + '%"></div></div>' +
          '<div class="progress-label">' + nSicher + " von " + nA + " Aufgaben sicher" +
          (nK ? " · " + nBox2 + " von " + nK + " Karten sicher" : "") + "</div>"
        : "") +
      '<div class="thema-aktionen">' + aktionen + "</div>" +
      "</div>"
    );
  }

  // ---------- Aufgabenliste ----------

  function aufgabeZeile(a) {
    const g = Store.getGrade(a.id);
    return (
      '<a class="aufgabe-zeile" href="#/aufgabe/' + a.id + '">' +
      '<span class="status-punkt ' + (g || "") + '" title="' + gradeLabel(g) + '"></span>' +
      '<span class="aufgabe-info"><span class="aufgabe-titel">' + a.titel + "</span> " + typChip(a) + "<br>" +
      '<span class="aufgabe-quelle">' + a.quelle + "</span></span>" +
      '<span class="schwierigkeit">' + sterne(a.schwierigkeit) + "</span>" +
      "</a>"
    );
  }

  function renderUebenListe(themaId) {
    const t = findThema(themaId);
    if (!t) return renderDashboard();

    let html = '<a class="zurueck" href="#/">← Übersicht</a><h1>' + t.titel + "</h1>";
    if (t.einfuehrung) {
      html += '<div class="card einfuehrung">' + md(t.einfuehrung) + "</div>";
    }
    if (!t.aufgaben.length) {
      html += '<p class="leer-hinweis">Für dieses Thema sind noch keine Aufgaben eingepflegt.</p>';
    } else if (t.bloecke && t.bloecke.length) {
      const zugeordnet = new Set();
      for (const block of t.bloecke) {
        const liste = block.aufgaben
          .map((id) => t.aufgaben.find((a) => a.id === id))
          .filter(Boolean);
        liste.forEach((a) => zugeordnet.add(a.id));
        if (!liste.length) continue;
        html += "<h2>" + block.titel + "</h2>";
        if (block.intro) html += '<div class="block-intro">' + md(block.intro) + "</div>";
        html += '<div class="aufgaben-liste">' + liste.map(aufgabeZeile).join("") + "</div>";
      }
      const rest = t.aufgaben.filter((a) => !zugeordnet.has(a.id));
      if (rest.length) {
        html += "<h2>Weitere Aufgaben</h2><div class=\"aufgaben-liste\">" + rest.map(aufgabeZeile).join("") + "</div>";
      }
    } else {
      html += '<div class="aufgaben-liste">' + t.aufgaben.map(aufgabeZeile).join("") + "</div>";
    }
    app.innerHTML = html;
  }

  // ---------- Aufgabenansicht ----------

  function renderAufgabe(aufgabeId, mixModus) {
    const hit = findAufgabe(aufgabeId);
    if (!hit) return renderDashboard();
    const { thema, aufgabe } = hit;

    const offen = sitzung.schritte[aufgabe.id] || 0;
    const hinweisAn = !!sitzung.hinweis[aufgabe.id];
    const alleSchritteOffen = offen >= aufgabe.schritte.length;
    const idx = thema.aufgaben.indexOf(aufgabe);

    let html = "";
    if (mixModus) {
      html += '<a class="zurueck" href="#/">← Mix beenden</a>' +
        "<h1>Zufallsmix · Aufgabe " + (sitzung.mixIndex + 1) + " von " + sitzung.mixQueue.length + "</h1>";
    } else {
      html += '<a class="zurueck" href="#/ueben/' + thema.id + '">← ' + thema.titel + "</a>" +
        "<h1>" + aufgabe.titel + "</h1>";
    }

    html +=
      '<div class="aufgabe-quelle">' + aufgabe.quelle + " · " + sterne(aufgabe.schwierigkeit) + " " + typChip(aufgabe) + "</div>" +
      '<div class="card aufgabe-text">' + md(aufgabe.aufgabe) + "</div>";

    if (aufgabe.hinweis) {
      html += hinweisAn
        ? '<div class="hinweis-box">💡 ' + md(aufgabe.hinweis) + "</div>"
        : '<button class="btn sekundaer" id="hinweis-btn">💡 Hinweis anzeigen</button> ';
    }

    for (let i = 0; i < offen && i < aufgabe.schritte.length; i++) {
      const s = aufgabe.schritte[i];
      html += '<div class="schritt"><div class="schritt-titel">Schritt ' + (i + 1) + ": " + s.titel + "</div>" +
        md(s.text) + "</div>";
    }

    if (!alleSchritteOffen) {
      html += '<button class="btn" id="schritt-btn">' +
        (offen === 0 ? "Lösung Schritt für Schritt" : "Nächster Schritt") +
        " (" + offen + "/" + aufgabe.schritte.length + ")</button>";
    } else {
      html += '<div class="ergebnis-box"><strong>Ergebnis:</strong><br>' + md(aufgabe.ergebnis) + "</div>";
      if (aufgabe.video) {
        html += '<div class="video-hinweis">🎬 Passendes Video im Repetitorien-Ordner: ' + aufgabe.video + "</div>";
      }
      const g = Store.getGrade(aufgabe.id);
      html +=
        '<div class="bewertung"><div class="bewertung-frage">Wie gut hättest du das alleine geschafft?' +
        (g ? ' <span class="abzeichen">Bisher: ' + gradeLabel(g) + "</span>" : "") + "</div>" +
        '<div class="bewertung-buttons">' +
        '<button class="btn gruen" data-grade="sicher">✓ Sicher</button>' +
        '<button class="btn gelb" data-grade="hilfe">~ Mit Hilfe</button>' +
        '<button class="btn rot" data-grade="nicht">✗ Nicht gekonnt</button>' +
        "</div></div>";
    }

    // Navigation
    if (mixModus) {
      const letzte = sitzung.mixIndex >= sitzung.mixQueue.length - 1;
      html += '<div class="aufgabe-nav"><span></span>' +
        (letzte
          ? '<a class="btn sekundaer" href="#/">Mix abschließen</a>'
          : '<button class="btn sekundaer" id="mix-weiter">Nächste Aufgabe →</button>') +
        "</div>";
    } else {
      const prev = idx > 0 ? thema.aufgaben[idx - 1] : null;
      const next = idx < thema.aufgaben.length - 1 ? thema.aufgaben[idx + 1] : null;
      html += '<div class="aufgabe-nav">' +
        (prev ? '<a class="btn sekundaer" href="#/aufgabe/' + prev.id + '">← Vorherige</a>' : "<span></span>") +
        (next ? '<a class="btn sekundaer" href="#/aufgabe/' + next.id + '">Nächste →</a>' : "<span></span>") +
        "</div>";
    }

    app.innerHTML = html;

    const hb = document.getElementById("hinweis-btn");
    if (hb) hb.addEventListener("click", () => {
      sitzung.hinweis[aufgabe.id] = true;
      renderAufgabe(aufgabeId, mixModus);
    });
    const sb = document.getElementById("schritt-btn");
    if (sb) sb.addEventListener("click", () => {
      sitzung.schritte[aufgabe.id] = offen + 1;
      renderAufgabe(aufgabeId, mixModus);
      const schritte = app.querySelectorAll(".schritt");
      if (schritte.length) schritte[schritte.length - 1].scrollIntoView({ behavior: "smooth", block: "center" });
    });
    app.querySelectorAll("[data-grade]").forEach((btn) => {
      btn.addEventListener("click", () => {
        Store.setGrade(aufgabe.id, btn.dataset.grade);
        renderAufgabe(aufgabeId, mixModus);
      });
    });
    const mw = document.getElementById("mix-weiter");
    if (mw) mw.addEventListener("click", () => {
      sitzung.mixIndex++;
      window.scrollTo(0, 0);
      renderAufgabe(sitzung.mixQueue[sitzung.mixIndex], true);
    });

    if (!document.getElementById("schritt-btn") && !mixModus) {
      // nichts weiter
    }
  }

  // ---------- Formelkarten (Leitner) ----------

  function starteKartenRunde(themaId) {
    let karten;
    if (themaId === "alle") {
      karten = sichtbareThemen().flatMap((t) => t.karten);
    } else {
      const t = findThema(themaId);
      karten = t ? t.karten : [];
    }
    // Reihenfolge: erst Box 0 (neu/unsicher), dann Box 1, dann Box 2 – innerhalb gemischt
    const boxen = [[], [], []];
    karten.forEach((k) => boxen[Store.getBox(k.id)].push(k));
    sitzung.kartenQueue = mische(boxen[0]).concat(mische(boxen[1]), mische(boxen[2]));
    sitzung.kartenIndex = 0;
    sitzung.kartenStat = { gewusst: 0, nicht: 0 };
    sitzung.kartenThema = themaId;
    sitzung.flipped = false;
  }

  function renderKarten(themaId) {
    if (!sitzung.kartenQueue || sitzung.kartenThema !== themaId) starteKartenRunde(themaId);

    const t = themaId === "alle" ? null : findThema(themaId);
    const titel = t ? t.titel : "Alle Themen";
    const queue = sitzung.kartenQueue;

    if (!queue.length) {
      app.innerHTML = '<a class="zurueck" href="#/">← Übersicht</a><h1>' + titel + "</h1>" +
        '<p class="leer-hinweis">Für dieses Thema sind noch keine Formelkarten eingepflegt.</p>';
      return;
    }

    if (sitzung.kartenIndex >= queue.length) {
      const s = sitzung.kartenStat;
      app.innerHTML =
        '<a class="zurueck" href="#/">← Übersicht</a><h1>Runde geschafft! 🎉</h1>' +
        '<div class="card">Gewusst: <strong>' + s.gewusst + "</strong> · Nicht gewusst: <strong>" + s.nicht + "</strong></div>" +
        '<button class="btn" id="nochmal">Neue Runde</button> ' +
        '<a class="btn sekundaer" href="#/">Zur Übersicht</a>';
      document.getElementById("nochmal").addEventListener("click", () => {
        starteKartenRunde(themaId);
        renderKarten(themaId);
      });
      return;
    }

    const karte = queue[sitzung.kartenIndex];
    const box = Store.getBox(karte.id);
    const boxName = ["Neu/Unsicher", "Wackelig", "Sicher"][box];

    let html =
      '<a class="zurueck" href="#/">← Übersicht</a>' +
      "<h1>Formelkarten · " + titel + "</h1>" +
      '<div class="lernkarte" id="karte">' +
      '<div class="seite-label">' + (sitzung.flipped ? "Antwort" : "Frage – tippen zum Umdrehen") + "</div>" +
      "<div>" + md(sitzung.flipped ? karte.hinten : karte.vorne) + "</div>" +
      "</div>";

    if (sitzung.flipped) {
      html += '<div class="karten-buttons">' +
        '<button class="btn rot" id="k-nicht">✗ Nicht gewusst</button>' +
        '<button class="btn gruen" id="k-gewusst">✓ Gewusst</button>' +
        "</div>";
    }

    html += '<div class="karten-fortschritt">Karte ' + (sitzung.kartenIndex + 1) + " von " + queue.length +
      ' · Box: ' + boxName + "</div>" +
      '<div class="boxen-leiste">🔴 Neu/Unsicher → 🟡 Wackelig → 🟢 Sicher</div>';

    app.innerHTML = html;

    document.getElementById("karte").addEventListener("click", () => {
      sitzung.flipped = !sitzung.flipped;
      renderKarten(themaId);
    });
    const weiter = (gewusst) => {
      Store.setBox(karte.id, gewusst ? box + 1 : 0);
      sitzung.kartenStat[gewusst ? "gewusst" : "nicht"]++;
      sitzung.kartenIndex++;
      sitzung.flipped = false;
      renderKarten(themaId);
    };
    const kg = document.getElementById("k-gewusst");
    if (kg) kg.addEventListener("click", () => weiter(true));
    const kn = document.getElementById("k-nicht");
    if (kn) kn.addEventListener("click", () => weiter(false));
  }

  // ---------- Zufallsmix ----------

  function starteMix() {
    const pool = sichtbareThemen().flatMap((t) => t.aufgaben);
    if (!pool.length) {
      sitzung.mixQueue = [];
      return;
    }
    // Gewichtung: schwache Aufgaben kommen häufiger dran
    const gewicht = (a) => {
      const g = Store.getGrade(a.id);
      return g === "nicht" ? 4 : g === "hilfe" ? 3 : g === null ? 2 : 1;
    };
    const ziel = Math.min(5, pool.length);
    const auswahl = [];
    const rest = pool.slice();
    while (auswahl.length < ziel && rest.length) {
      const total = rest.reduce((s, a) => s + gewicht(a), 0);
      let r = Math.random() * total;
      let idx = 0;
      for (let i = 0; i < rest.length; i++) {
        r -= gewicht(rest[i]);
        if (r <= 0) { idx = i; break; }
      }
      auswahl.push(rest.splice(idx, 1)[0]);
    }
    sitzung.mixQueue = auswahl.map((a) => a.id);
    sitzung.mixIndex = 0;
    // Schritte der Mix-Aufgaben wieder verdecken
    auswahl.forEach((a) => { delete sitzung.schritte[a.id]; delete sitzung.hinweis[a.id]; });
  }

  function renderMix() {
    starteMix();
    if (!sitzung.mixQueue.length) {
      app.innerHTML = '<a class="zurueck" href="#/">← Übersicht</a>' +
        '<p class="leer-hinweis">Keine Aufgaben verfügbar – sind alle Themen ausgeblendet?</p>';
      return;
    }
    renderAufgabe(sitzung.mixQueue[0], true);
  }

  // ---------- Router ----------

  function route() {
    const hash = location.hash || "#/";
    const teile = hash.replace(/^#\//, "").split("/");
    window.scrollTo(0, 0);

    if (teile[0] === "ueben" && teile[1]) return renderUebenListe(teile[1]);
    if (teile[0] === "aufgabe" && teile[1]) {
      // Innerhalb eines laufenden Mixes bleiben wir im Mix-Modus
      const imMix = sitzung.mixQueue && sitzung.mixQueue[sitzung.mixIndex] === teile[1];
      return renderAufgabe(teile[1], !!imMix);
    }
    if (teile[0] === "karten" && teile[1]) {
      if (sitzung.kartenThema !== teile[1]) sitzung.kartenQueue = null;
      return renderKarten(teile[1]);
    }
    if (teile[0] === "mix") return renderMix();
    renderDashboard();
  }

  window.addEventListener("hashchange", route);
  route();
})();
