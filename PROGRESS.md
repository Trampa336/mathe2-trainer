# Atomisierung der Themen 2–5 — Arbeitsstand (für Folge-Chats)

> Zentrale, versionierte Notiz zum laufenden Umbau. **Neuer Chat liest zuerst
> diese Datei.** Wird nach jedem umgebauten Thema aktualisiert.

## Ziel

**Thema 1 ist die Referenz:** jede Übungs-Teilaufgabe ist eine eigene, atomare
Karte mit *einem* `ergebnis` und eigener Selbsteinschätzung. Themen 2–5 bündelten
ursprünglich ganze mehrteilige Übungen (a/b/c …) in eine Karte — diese werden in
den Thema-1-Stil überführt. **Nur Datendateien** (`data/thema*.js`); `app.js`,
`css/`, `index.html` unterstützen den atomaren Stil bereits.

## Split-Regel

- **SPLIT** (eine Karte je Teil), wenn die Teilaufgaben **unabhängige
  Parallel-Drills** derselben Technik sind (verschiedene Funktionen/Bereiche).
  Jede Karte: eigener `hinweis`, ein `schritte`-Eintrag `titel: "Lösung"` (plus
  ggf. ein vorgelagerter „Grenzen/Bereich“-Schritt), ein `ergebnis`.
- **KEEP** (eine Mehrschritt-Karte), wenn die Teile **eine zusammenhängende
  Herleitung zu EINEM Endergebnis** bilden oder spätere Teile frühere brauchen.
- **Trivial-Ausnahme:** kurze Checklisten auf demselben Setup → KEEP.
- **Zahl-Endergebnisse bleiben unverändert** (gegen gedruckte Lösungen geprüft) —
  beim Splitten nur umverteilen, keine Mathematik neu herleiten.

**ID-Schema:** Basis-ID + Teilbuchstabe. `t3-a01` → `t3-a01a/b/c`. Endet die
Basis-ID schon auf einen Buchstaben (`t2-a0c`), Suffix mit Bindestrich
(`t2-a0c-a`). KEEP-Karten behalten ihre ID. Beim Splitten die `bloecke[*].aufgaben`-
Arrays neu verdrahten (alte ID durch neue Teil-IDs ersetzen, keine ID verlieren).

## Stand

| Thema | Datei | Status | Karten |
|---|---|---|---|
| 1 Integralrechnung | `thema1-integralrechnung.js` | Referenz (gold standard) | 69 |
| 2 Funktionen mehrerer Variablen | `thema2-mehrere-variablen.js` | **fertig** | 22 → 54 |
| 3 Bereichs- & Kurvenintegrale | `thema3-bereichs-kurvenintegrale.js` | **fertig** | 15 → 23 |
| 4 Wahrscheinlichkeiten | `thema4-wahrscheinlichkeiten.js` | **fertig** | 13 → 17 |
| 5 Zufallsgrößen | `thema5-zufallsgroessen.js` | **fertig** (feinprüft, alles KEEP) | 6 |

Thema 3 gesplittet: a01→3, a04→2, a09→3, a11→2 (Torus/Bohrung), a13→2
(Länge/Arbeit), a14→2 (Schnittpunkt+Masse / Arbeit). Rest KEEP.

Thema 4 gesplittet: a06→2 (keine fällt aus / min. RAM+Platte), a07→2 (Sprachen-
Siebformel / Anlage-Ereignisalgebra), a08→2 (Reihe / Parallel), a12→2 (Erzeugnisse /
drei Maschinen). Rest KEEP. Thema 5: alle 6 sind zusammenhängende Ein-Setup-
Herleitungen (bzw. Trivial-Checkliste a01) → KEEP, keine Änderung.

**Atomisierung abgeschlossen.** Gesamt 169 Übungsaufgaben, 58 Formelkarten.

## Verifikation nach jeder Datei

`node` ist in der Arbeitsumgebung **nicht** installiert → statisch mit Python
(`FILE`/`PFX` anpassen):

```bash
cd mathe2-trainer && python3 - <<'PY'
import re
FILE="data/thema3-bereichs-kurvenintegrale.js"; PFX="t3"
src=open(FILE,encoding="utf-8").read(); lines=src.splitlines()
print("Backticks gerade:", src.count("`")%2==0, "| { }:", src.count("{"), src.count("}"),
      "| ${:", "${" in src, "| endet });:", src.rstrip().endswith("});"))
ref=[]; nb=0
for l in lines:
    m=re.search(r'aufgaben:\s*\[([^\]]+)\]', l)
    if m and '"' in m.group(1): ref+=re.findall(r'"([^"]+)"', m.group(1)); nb+=1
ids=[re.search(r'id:\s*"([^"]+)"', l).group(1) for l in lines if re.match(r'\s+id:\s*"'+PFX+'-a', l)]
idset, refset=set(ids), set(ref)
print("Blöcke:",nb,"| Aufgaben:",len(ids),"| Referenzen:",len(ref))
print("fehlt:", [r for r in ref if r not in idset] or "keine",
      "| orphan:", [a for a in ids if a not in refset] or "keine",
      "| mehrfach:", [x for i,x in enumerate(ref) if ref.index(x)!=i] or "keine",
      "| doppel-id:", [x for i,x in enumerate(ids) if ids.index(x)!=i] or "keine")
PY
```

Erwartet: Backticks gerade `True`, Braces ausgeglichen, kein `${`, endet `});`,
keine fehlenden/orphan/doppelten IDs. Danach optional Browser-Smoketest:
`python3 -m http.server 8742` → `http://localhost:8742`.

## Offene Punkte

- ~~Thema 4 umbauen + verifizieren~~ ✓ (17 Karten, Verifikation sauber)
- ~~Thema 5 feinprüfen~~ ✓ (alles KEEP)
- ~~README-Aufgabenzahl aktualisieren~~ ✓ (69 → 169 Übungsaufgaben, 82 → 58 Formelkarten)
- ~~Browser-Smoketest über alle Themen~~ ✓ (Dashboard zeigt 69/54/23/17/6; Split-Karten
  t4-a06a/a07b/a12b rendern mit KaTeX korrekt)
- **Commit/Push:** auf Zuruf (der Nutzer pusht bewusst, nicht automatisch).
