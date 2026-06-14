# Review / Polishing — Arbeitsstand (für Folge-Chats)

> Zweite versionierte Notiz neben `PROGRESS.md`. Stand: 2026-06-15.
> Methode: statische Prüfung + Mathe-Nachrechnen + Browser-Smoketest
> (Firefox headless, KaTeX-Renderprobe über **alle** Felder).
>
> **Umgesetzt in diesem Durchgang (verifiziert, noch nicht committet/gepusht):**
> **D1**, **D2**, **K1**. Smoketest danach: `tasks:169 cards:58 — broken renders: 0`.
> Entscheidungen des Nutzers: **E1** transparent lassen, **U1** Notizfeld lassen,
> Klausurdatum 07.07.2026 bestätigt. Offen geblieben (bewusst): **U2/U3/U4**.

## Auftrag & Geltungsbereich

Polishing-Durchgang: **Themen 1 + 2** auf (a) richtige Ergebnisse, (b) UI/UX-
Macken, (c) didaktische Sauberkeit prüfen. Themen 3–5 wurden im Smoketest
mitgerendert (ein kritischer Befund dort, s. **K1**), aber inhaltlich nicht
nachgerechnet.

## Gesamturteil Themen 1 & 2

- **Mathematik: fehlerfrei.** Stichprobenartig nachgerechnet (u.a. alle Extrema-
  Klassifizierungen T2, Lagrange-Rennstrecke `89,44 m`, Regression `151/14000`,
  Bogenlänge/Rotationskörper T1, uneigentliche Integrale). Kein falsches
  Endergebnis gefunden.
- **KaTeX: 0 kaputte Renderings** in T1/T2 (Smoketest, Produktionsmodus
  `throwOnError:false`). Struktur sauber: T1 = 69 Aufgaben/10 Karten,
  T2 = 54 Aufgaben/10 Karten, alle Block-Referenzen lösen auf, keine doppelten IDs.
- **UI** rendert auf Handybreite (414 px) sauber: Dashboard mit Countdown
  („Noch 22 Tage … 07.07.2026“), Aufgabenliste, Aufgabenansicht.

Befunde sind also überwiegend **Feinschliff** (Konsistenz/Didaktik/UX), kein
Mathe-Bugfix.

---

## Befunde (Themen 1 & 2)

### Mathe
Keine Fehler. Einziger Sonderfall ist die **bewusst dokumentierte** Druckfehler-
Stelle — s. **E1**.

### Didaktik / Konsistenz

**D1 — Lagrange-Multiplikator: Symbol uneinheitlich (μ vs. λ).** — ✅ ERLEDIGT
(alle `\lambda` → `\mu` in `thema2…js`, 22 Stellen; jetzt durchgängig μ).
Mal `μ`, mal `λ`, teils **innerhalb derselben Aufgabe**:
- `μ`: `t2-a13a`, `t2-a14`, `t2-a17`, Karte `t2-k09`.
- `λ`: `t2-a16a/b/c`.
- gemischt: `t2-a13b` — Hinweis schreibt „$x=0$ oder **μ**=1“, die Schritte
  rechnen mit **λ** („$2x=\lambda 2x$ … $x=0$ oder $\lambda=1$“).
- *Vorschlag:* projektweit auf **μ** vereinheitlichen (passt zur Karte `t2-k09`).
  Reines Suchen/Ersetzen in `data/thema2-mehrere-variablen.js`.

**D2 — 2.-Ordnungs-Ableitungen im `ergebnis` uneinheitlich.** — ✅ ERLEDIGT
(`t2-a0c-a` auf „2. Ordn. siehe Schritt.“ gekürzt, passt jetzt zu `-b … -f`).
`t2-a0c-a` nennt im Ergebnis schon einen gemischten Term
(„…2. Ordn. siehe Schritt **($f_{xy}=f_{yx}=6xy^2+4y^3$)**“), die Geschwister
`t2-a0c-b … -f` schreiben nur „2. Ordn. siehe Schritt.“ → angleichen (einheitlich
kurz, oder überall einen Kontrollterm).

### UI / UX

**U1 — Notizfeld (Scratchpad) Platzierung/Höhe.**
Das 320-px-Canvas „✏️ Notizen“ erscheint auf **jeder** Aufgabe zwischen
Aufgabentext und den Lösungs-Buttons — auch bei reinen **Verständnis**-Aufgaben,
wo kaum jemand zeichnet. Auf dem Handy schiebt es „Lösung anzeigen“ weit nach
unten (im Screenshot ~700 px Scrollweg). *Optionen:* einklappbar (Default zu),
kleinere Default-Höhe, oder per-Typ ausblenden. Reine Designentscheidung.

**U2 — `ergebnis`-Aufteilung an `" · "`.**
`app.js` zerlegt `ergebnis` an `" · "` in Zeilen. In T1/T2 ist das **gewollt**
(Teil a · Teil b) und sieht gut aus. *Querbefund (außer Scope):* `t4-a13` hat
`„0,6 · 0,75 · 1 · 0,8 · …“` → 9 Einzelzeilen, wirkt zerrissen. Bei späterem
T4-Durchgang bedenken.

**U3 — (Code, vom Nutzer deprorisiert) Resize-Listener-Leak im Scratchpad.**
`Scratch.init()` hängt bei **jedem** Re-Render einer Aufgabe (jeder Hinweis-/
Lösungs-/Schritt-Toggle rendert neu) einen weiteren `window`-`resize`-Listener an;
sie räumen sich erst beim nächsten Resize selbst ab. Harmlos, aber unsauber.

**U4 — (Code) `#/mix` würfelt bei jedem Aufruf neu.**
`renderMix()` ruft jedes Mal `starteMix()`. Browser-Zurück auf `#/mix` mitten in
einer Runde erzeugt also still einen neuen Aufgabensatz. Evtl. überraschend.

---

## K1 — KRITISCH (Thema 3) — ✅ ERLEDIGT & verifiziert

**KaTeX kann ein Hochkomma direkt nach `\,` nicht parsen** → roter Fehlertext
für die Nutzer:in. **Fix angewandt:** alle 17 `\,'` → `\,{}'` in `thema3…js`;
Smoketest danach 0 kaputte Renderings, In-App-Renderprobe der vormals kaputten
Felder (`t3-a13a/b`, `t3-a14a`) sauber.

- **Trigger (verifiziert, KaTeX 0.16.11):** `\,'` bricht. Belege aus der Renderprobe:
  - `\,'` → BROKEN · `a\,'b` → BROKEN · `\vec r\,'(t)` → BROKEN · `\vec r\,''(t)` → BROKEN
  - dagegen ok: `\,` allein, `x'` allein, `\frac23(t-1)^{3/2}`, `\begin{pmatrix}…`
  - Ursache: `\,` erzeugt einen Spacing-Knoten; das folgende Prime findet keine
    Basis → „Got group of unknown type: 'internal'“.
- **Betroffen:** ausschließlich `data/thema3-bereichs-kurvenintegrale.js` —
  **17 Vorkommen** von `\,'` (Ableitungsschreibweise `\vec r\,'(t)` der
  Kurvenintegrale, `t3-a13a/b`, `t3-a14a/b`, Block-Intro „Kurvenintegrale“ u.a.).
  Smoketest meldete **16 kaputte Mathe-Blöcke**. **T1, T2, T4, T5: 0 Vorkommen.**
- **Fix-Vorschlag:** das Prime an eine Basis binden statt an den Leerraum.
  Sauberste Variante: `\,'` → `\,{}'` (leere Gruppe als Basis), z.B.
  `\vec r\,{}'(t)`. Alternativ Reihenfolge tauschen: `\vec r'\,(t)`.
  Ein gezieltes Suchen/Ersetzen `\,'` → `\,{}'` in `thema3…js` behebt alle 17.
  **Nach dem Fix Smoketest erneut laufen lassen** (s.u.).

---

## Entscheidungen des Nutzers (2026-06-15)

1. **E1 — Druckfehler Üb2 A2(f) (`t1-a09f`).** → **transparent lassen** (Ergebnis
   „$8$ (bzw. $4$ …)“ bleibt; ehrlich, auch im Datei-Header dokumentiert). Keine Änderung.
2. **D1** → **μ** projektweit (umgesetzt, s.o.).
3. **U1 — Notizfeld** → **so lassen** wie es ist. Keine Änderung.
4. **Klausurdatum 07.07.2026** → **bestätigt.** Keine Änderung.

## Noch offen (bewusst nicht angefasst)

- **U2** — `t4-a13` zerfällt in 9 Ergebniszeilen (Thema 4, außer Scope).
- **U3** — Resize-Listener-Leak im Scratchpad (Code; vom Nutzer deprorisiert).
- **U4** — `#/mix` würfelt bei jedem Aufruf neu (Code).
- **Commit/Push:** wie in `PROGRESS.md` — der Nutzer pusht **bewusst**, nicht automatisch.

## Smoketest reproduzieren (für Folge-Chats)

`node` fehlt in der Umgebung; Render-Check läuft über Firefox headless. Server
starten (`python3 -m http.server 8742`), dann eine Test-HTML in den Projekt-Root
legen, die `vendor/katex` + alle `data/thema*.js` lädt und **jedes** Textfeld
(`aufgabe`, `hinweis`, `ergebnis`, `schritte[].text`, `karten.vorne/hinten`,
`einfuehrung`, Block-`intro`) mit der `md()`-Logik aus `js/katex-helper.js`
(`throwOnError:false`) rendert und das Ergebnis auf den String `katex-error`
prüft (= das, was die Nutzer:in als roten Fehler sieht). Screenshot via
`firefox --headless --new-instance --profile /tmp/ffprof --screenshot out.png URL`
(eigenes Profil nötig, sonst „Firefox is already running“). Test-HTML danach
wieder löschen — Arbeitsbaum sauber halten.
