/* Persistenz über localStorage: Selbsteinschätzung pro Aufgabe,
   Leitner-Box pro Formelkarte, ausgeblendete Themen. */
(function () {
  "use strict";

  const KEY = "mathe2.v1";

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  let state = load();
  state.aufgaben = state.aufgaben || {}; // id -> "sicher" | "hilfe" | "nicht"
  state.karten = state.karten || {};     // id -> 0 | 1 | 2  (Leitner-Box)
  state.hidden = state.hidden || [];     // Themen-IDs

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      /* z.B. Speicher voll – App funktioniert trotzdem, nur ohne Persistenz */
    }
  }

  window.Store = {
    getGrade(aufgabeId) {
      return state.aufgaben[aufgabeId] || null;
    },
    setGrade(aufgabeId, grade) {
      state.aufgaben[aufgabeId] = grade;
      save();
    },
    getBox(karteId) {
      return state.karten[karteId] || 0;
    },
    setBox(karteId, box) {
      state.karten[karteId] = Math.max(0, Math.min(2, box));
      save();
    },
    isHidden(themaId) {
      return state.hidden.includes(themaId);
    },
    toggleHidden(themaId) {
      const i = state.hidden.indexOf(themaId);
      if (i >= 0) state.hidden.splice(i, 1);
      else state.hidden.push(themaId);
      save();
    },
    resetAll() {
      state = { aufgaben: {}, karten: {}, hidden: [] };
      save();
    },
  };
})();
