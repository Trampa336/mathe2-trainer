# Mathe 2 Trainer

Lern-App für die Mathematik-2-Klausur (HTW Dresden, Prof. Hamann, Sommer 2026).
Komplett auf Deutsch, läuft lokal im Browser, kein Internet nötig.

## Starten

**Am einfachsten:** `index.html` doppelklicken (öffnet im Browser).

**Oder** mit lokalem Server (empfohlen, identisches Verhalten auf dem Handy im WLAN):

```bash
cd mathe2-trainer
python3 -m http.server 8742
# dann im Browser: http://localhost:8742
# am Handy (gleiches WLAN): http://<PC-IP>:8742
```

## Was drin ist

- **69 Übungsaufgaben** aus den Übungsblättern 1–14 mit Schritt-für-Schritt-Lösungen,
  alle Endergebnisse gegen die gedruckten Lösungen der Blätter geprüft
- **82 Formelkarten** (Leitner-System: Neu → Wackelig → Sicher)
- **Zufallsmix**: 5 zufällige Aufgaben, schwache Themen kommen öfter dran
- Selbsteinschätzung pro Aufgabe (Sicher / Mit Hilfe / Nicht gekonnt) steuert
  die Schwache-Themen-Hinweise auf dem Dashboard
- Themen lassen sich ausblenden (falls etwas nicht klausurrelevant ist)
- Fortschritt liegt im localStorage des Browsers (pro Gerät/Browser getrennt)

## Themen

1. Integralrechnung (Üb 1–4)
2. Funktionen mehrerer Variablen (Üb 5–8)
3. Bereichs- und Kurvenintegrale (Üb 9–11)
4. Ereignisse und Wahrscheinlichkeiten (Üb 12–13)
5. Zufallsgrößen und Verteilungen (Üb 14 + Üb 13/A11)

Bei einigen Aufgaben steht ein 🎬-Hinweis auf das passende Lösungsvideo im
Ordner `Mathematik 2/Repetitorien/`.

## Inhalte erweitern

Aufgaben/Karten liegen in `data/thema*.js` als einfache JS-Objekte mit
LaTeX-Strings (`$…$` inline, `$$…$$` abgesetzt, `**fett**`, Zeilenumbrüche).
Neue Aufgabe = Objekt in das `aufgaben`-Array kopieren und anpassen.
