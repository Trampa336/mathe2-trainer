/* Thema 1: Integralrechnung
   Quellen: Übungsblätter 1–4, Arbeitsblatt 1, Repetitorien-Videos Bsp01–11.
   Alle Endergebnisse gegen die gedruckten Lösungen der Übungsblätter geprüft.
   Anmerkung Üb2 A2(f): gedrucktes Ergebnis 4 passt zu ∫8·ln(x)/x dx; mit ln(x²)=2ln(x)
   ergäbe sich 8 – vermutlich Druckfehler im Blatt, im Lösungsschritt erläutert.
   Anmerkung Üb2 A1(f): Vorzeichen von ln(x²+2) per Ableiten verifiziert (−1, nicht +2). */
window.MATHE2_DATA.themen.push({
  id: "t1",
  titel: "Integralrechnung",
  untertitel: "Integrationsmethoden, bestimmte & uneigentliche Integrale, numerische Integration, Anwendungen",
  einfuehrung: `**Worum geht es?** Zu einer Funktion $f$ eine Stammfunktion $F$ finden (unbestimmtes Integral) und damit Flächen, Längen und Volumina berechnen (bestimmtes Integral, Hauptsatz). Die Klausur-Kernfähigkeit ist das **Erkennen der richtigen Methode**: Vereinfachen? Substitution? Partiell? PBZ? Danach kommen Sonderfälle (unendliche Grenzen, Polstellen) und die geometrischen Anwendungen.`,
  bloecke: [
    { titel: "Integrationsmethoden", intro: `Der Werkzeugkasten, aufeinander aufbauend: erst die **Grundintegrale** und Potenzregeln (alles andere wird darauf zurückgeführt), dann **lineare** und **allgemeine Substitution** (innere Funktion erkennen!), dann **partielle Integration** (für Produkte). Der Methoden-Mix am Ende trainiert das Entscheiden ohne Vorgabe – genau das passiert in der Klausur.`, aufgaben: ["t1-a01a","t1-a01b","t1-a01c","t1-a01d","t1-a01e","t1-a01f","t1-a02a","t1-a02b","t1-a02c","t1-a02d","t1-a02e","t1-a02f","t1-a03a","t1-a03b","t1-a03c","t1-a03d","t1-a03e","t1-a03f","t1-a04a","t1-a04b","t1-a04c","t1-a04d","t1-a04e","t1-a04f","t1-a05b","t1-a05f","t1-a05g","t1-a05i","t1-a05k","t1-a05l"] },
    { titel: "Partialbruchzerlegung (PBZ)", intro: `Spezialmethode für **gebrochenrationale** Integranden $\\frac{p(x)}{q(x)}$. Immer dasselbe Schema: echt gebrochen? (sonst Polynomdivision) → Nenner faktorisieren → Ansatz → Koeffizienten bestimmen → Partialbrüche einzeln integrieren ($\\ln$, $\\frac{1}{(x-a)^k}$, $\\arctan$).`, aufgaben: ["t1-a06a","t1-a06b","t1-a06c","t1-a07d","t1-a07e","t1-a07f","t1-a08"] },
    { titel: "Bestimmte, numerische & uneigentliche Integrale", intro: `Mit dem **Hauptsatz** werden aus Stammfunktionen Zahlen: $\\int_a^b f\\,dx=F(b)-F(a)$. Existiert keine elementare Stammfunktion (z.B. $e^{x^2}$), nähert man **numerisch** (Trapez-/Simpson-Regel). Bei unendlichen Grenzen oder Polstellen wird das Integral als **Grenzwert** definiert – die zentrale Frage ist dann: konvergent oder divergent?`, aufgaben: ["t1-a09a","t1-a09b","t1-a09c","t1-a09d","t1-a09e","t1-a09f","t1-a10a","t1-a10b","t1-a10c","t1-a10f","t1-a11a","t1-a11b","t1-a11c","t1-a12a","t1-a12b","t1-a13a","t1-a13b","t1-a13c","t1-a14a","t1-a14b","t1-a14c","t1-a14d","t1-a14e","t1-a14f"] },
    { titel: "Geometrische Anwendungen", intro: `Hier zahlt sich alles aus: **Bogenlänge** $\\int\\sqrt{1+(f')^2}\\,dx$ (Trick: die Wurzel wird fast immer ein vollständiges Quadrat) und **Rotationskörper** ($V_x=\\pi\\int f^2dx$, $M_x=2\\pi\\int f\\sqrt{1+(f')^2}\\,dx$). Typische anwendungsnahe Klausuraufgaben mit Technik-Kontext.`, aufgaben: ["t1-a15a","t1-a15b","t1-a15c","t1-a16","t1-a17a","t1-a17b","t1-a18a","t1-a18b"] },
  ],
  aufgaben: [
    {
      id: "t1-a01a",
      typ: "Rechentechnik",
      titel: "Grundintegrale & Potenzregeln (a)",
      quelle: "Übungsblatt 1, Aufgabe 1a",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie das folgende unbestimmte Integral:
$$\\int\\Big(x^2+2x+\\tfrac1x\\Big)\\,dx$$`,
      hinweis: `Brüche zuerst aufteilen ($\\frac{a\\pm b}{c}=\\frac ac\\pm\\frac bc$) und Wurzeln als Potenzen schreiben ($\\sqrt[n]{x^m}=x^{m/n}$). Dann gilt immer $\\int x^\\alpha dx=\\frac{1}{\\alpha+1}x^{\\alpha+1}+c$ (für $\\alpha\\neq -1$).`,
      schritte: [
        { titel: "Lösung", text: `Summandenweise integrieren:
$$\\int x^2dx+\\int 2x\\,dx+\\int\\tfrac1x dx=\\frac{x^3}{3}+x^2+\\ln|x|+c$$` },
      ],
      ergebnis: `$\\frac{x^3}{3}+x^2+\\ln|x|+c$`,
    },
    {
      id: "t1-a01b",
      typ: "Rechentechnik",
      titel: "Grundintegrale & Potenzregeln (b)",
      quelle: "Übungsblatt 1, Aufgabe 1b",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie das folgende unbestimmte Integral:
$$\\int\\frac{10x^5-1}{x^2}\\,dx$$`,
      hinweis: `Brüche zuerst aufteilen ($\\frac{a\\pm b}{c}=\\frac ac\\pm\\frac bc$) und Wurzeln als Potenzen schreiben ($\\sqrt[n]{x^m}=x^{m/n}$). Dann gilt immer $\\int x^\\alpha dx=\\frac{1}{\\alpha+1}x^{\\alpha+1}+c$ (für $\\alpha\\neq -1$).`,
      schritte: [
        { titel: "Lösung", text: `Bruch aufteilen: $\\frac{10x^5-1}{x^2}=10x^3-x^{-2}$.
$$\\int(10x^3-x^{-2})dx=\\frac{10}{4}x^4+x^{-1}+c=\\frac52 x^4+\\frac1x+c$$` },
      ],
      ergebnis: `$\\frac52x^4+\\frac1x+c$`,
    },
    {
      id: "t1-a01c",
      typ: "Rechentechnik",
      titel: "Grundintegrale & Potenzregeln (c)",
      quelle: "Übungsblatt 1, Aufgabe 1c",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie das folgende unbestimmte Integral:
$$\\int\\Big(\\tfrac{1}{\\sqrt{x}}-\\tfrac{1}{\\sqrt[3]{x^2}}\\Big)\\,dx$$`,
      hinweis: `Brüche zuerst aufteilen ($\\frac{a\\pm b}{c}=\\frac ac\\pm\\frac bc$) und Wurzeln als Potenzen schreiben ($\\sqrt[n]{x^m}=x^{m/n}$). Dann gilt immer $\\int x^\\alpha dx=\\frac{1}{\\alpha+1}x^{\\alpha+1}+c$ (für $\\alpha\\neq -1$).`,
      schritte: [
        { titel: "Lösung", text: `Als Potenzen: $x^{-1/2}-x^{-2/3}$.
$$\\int x^{-1/2}dx-\\int x^{-2/3}dx=2x^{1/2}-3x^{1/3}+c=2\\sqrt{x}-3\\sqrt[3]{x}+c$$` },
      ],
      ergebnis: `$2\\sqrt x-3\\sqrt[3]x+c$`,
    },
    {
      id: "t1-a01d",
      typ: "Rechentechnik",
      titel: "Grundintegrale & Potenzregeln (d)",
      quelle: "Übungsblatt 1, Aufgabe 1d",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie das folgende unbestimmte Integral:
$$\\int\\frac{x-4}{\\sqrt[3]{x^4}}\\,dx$$`,
      hinweis: `Brüche zuerst aufteilen ($\\frac{a\\pm b}{c}=\\frac ac\\pm\\frac bc$) und Wurzeln als Potenzen schreiben ($\\sqrt[n]{x^m}=x^{m/n}$). Dann gilt immer $\\int x^\\alpha dx=\\frac{1}{\\alpha+1}x^{\\alpha+1}+c$ (für $\\alpha\\neq -1$).`,
      schritte: [
        { titel: "Lösung", text: `$\\frac{x-4}{x^{4/3}}=x^{-1/3}-4x^{-4/3}$.
$$\\int\\big(x^{-1/3}-4x^{-4/3}\\big)dx=\\frac32 x^{2/3}+12\\,x^{-1/3}+c=\\frac32\\sqrt[3]{x^2}+\\frac{12}{\\sqrt[3]{x}}+c$$` },
      ],
      ergebnis: `$\\frac32x^{2/3}+12x^{-1/3}+c$`,
    },
    {
      id: "t1-a01e",
      typ: "Rechentechnik",
      titel: "Grundintegrale & Potenzregeln (e)",
      quelle: "Übungsblatt 1, Aufgabe 1e",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie das folgende unbestimmte Integral:
$$\\int\\frac{2e^{2x}+e^{x+2}+3e^x}{e^x}\\,dx$$`,
      hinweis: `Brüche zuerst aufteilen ($\\frac{a\\pm b}{c}=\\frac ac\\pm\\frac bc$) und Wurzeln als Potenzen schreiben ($\\sqrt[n]{x^m}=x^{m/n}$). Dann gilt immer $\\int x^\\alpha dx=\\frac{1}{\\alpha+1}x^{\\alpha+1}+c$ (für $\\alpha\\neq -1$).`,
      schritte: [
        { titel: "Lösung", text: `Durch $e^x$ kürzen: $\\frac{2e^{2x}+e^{x+2}+3e^x}{e^x}=2e^x+e^2+3$ (beachte $e^{x+2}=e^x\\cdot e^2$).
$$\\int(2e^x+e^2+3)dx=2e^x+(e^2+3)\\,x+c$$` },
      ],
      ergebnis: `$2e^x+(e^2+3)x+c$`,
    },
    {
      id: "t1-a01f",
      typ: "Rechentechnik",
      titel: "Grundintegrale & Potenzregeln (f)",
      quelle: "Übungsblatt 1, Aufgabe 1f",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie das folgende unbestimmte Integral:
$$\\int\\big(-4\\cos(x)+3\\sin(x)\\big)\\,dx$$`,
      hinweis: `Brüche zuerst aufteilen ($\\frac{a\\pm b}{c}=\\frac ac\\pm\\frac bc$) und Wurzeln als Potenzen schreiben ($\\sqrt[n]{x^m}=x^{m/n}$). Dann gilt immer $\\int x^\\alpha dx=\\frac{1}{\\alpha+1}x^{\\alpha+1}+c$ (für $\\alpha\\neq -1$).`,
      schritte: [
        { titel: "Lösung", text: `$$\\int(-4\\cos x+3\\sin x)dx=-4\\sin(x)-3\\cos(x)+c$$
(denn $\\int\\cos=\\sin$, $\\int\\sin=-\\cos$)` },
      ],
      ergebnis: `$-4\\sin x-3\\cos x+c$`,
    },
    {
      id: "t1-a02a",
      typ: "Rechentechnik",
      titel: "Lineare Substitution (a)",
      quelle: "Übungsblatt 1, Aufgabe 2a",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie mittels linearer Substitution ($\\int f(ax+b)\\,dx=\\tfrac1a F(ax+b)+c$):
$$\\int e^{-x}dx$$`,
      hinweis: `Stammfunktion der äußeren Funktion bilden, inneres Argument unverändert lassen, durch die innere Ableitung $a$ teilen.`,
      schritte: [
        { titel: "Lösung", text: `$a=-1$: $\\int e^{-x}dx=\\frac{1}{-1}e^{-x}+c=-e^{-x}+c$` },
      ],
      ergebnis: `$-e^{-x}+c$`,
    },
    {
      id: "t1-a02b",
      typ: "Rechentechnik",
      titel: "Lineare Substitution (b)",
      quelle: "Übungsblatt 1, Aufgabe 2b",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie mittels linearer Substitution ($\\int f(ax+b)\\,dx=\\tfrac1a F(ax+b)+c$):
$$\\int\\sin(2x+7)\\,dx$$`,
      hinweis: `Stammfunktion der äußeren Funktion bilden, inneres Argument unverändert lassen, durch die innere Ableitung $a$ teilen.`,
      schritte: [
        { titel: "Lösung", text: `$a=2$, $\\int\\sin=-\\cos$: $\\int\\sin(2x+7)dx=-\\frac12\\cos(2x+7)+c$` },
      ],
      ergebnis: `$-\\frac12\\cos(2x+7)+c$`,
    },
    {
      id: "t1-a02c",
      typ: "Rechentechnik",
      titel: "Lineare Substitution (c)",
      quelle: "Übungsblatt 1, Aufgabe 2c",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie mittels linearer Substitution ($\\int f(ax+b)\\,dx=\\tfrac1a F(ax+b)+c$):
$$\\int\\frac{1}{3x-9}\\,dx$$`,
      hinweis: `Stammfunktion der äußeren Funktion bilden, inneres Argument unverändert lassen, durch die innere Ableitung $a$ teilen.`,
      schritte: [
        { titel: "Lösung", text: `$a=3$, $\\int\\frac1x=\\ln|x|$: $\\int\\frac{dx}{3x-9}=\\frac13\\ln|3x-9|+c$` },
      ],
      ergebnis: `$\\frac13\\ln|3x-9|+c$`,
    },
    {
      id: "t1-a02d",
      typ: "Rechentechnik",
      titel: "Lineare Substitution (d)",
      quelle: "Übungsblatt 1, Aufgabe 2d",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie mittels linearer Substitution ($\\int f(ax+b)\\,dx=\\tfrac1a F(ax+b)+c$):
$$\\int(-4x+10)^9dx$$`,
      hinweis: `Stammfunktion der äußeren Funktion bilden, inneres Argument unverändert lassen, durch die innere Ableitung $a$ teilen.`,
      schritte: [
        { titel: "Lösung", text: `$a=-4$, Potenzregel: $\\int(-4x+10)^9dx=\\frac{1}{-4}\\cdot\\frac{(-4x+10)^{10}}{10}+c=-\\frac{1}{40}(-4x+10)^{10}+c$` },
      ],
      ergebnis: `$-\\frac1{40}(-4x+10)^{10}+c$`,
    },
    {
      id: "t1-a02e",
      typ: "Rechentechnik",
      titel: "Lineare Substitution (e)",
      quelle: "Übungsblatt 1, Aufgabe 2e",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie mittels linearer Substitution ($\\int f(ax+b)\\,dx=\\tfrac1a F(ax+b)+c$):
$$\\int\\frac{1}{\\sqrt{-x+6}}\\,dx$$`,
      hinweis: `Stammfunktion der äußeren Funktion bilden, inneres Argument unverändert lassen, durch die innere Ableitung $a$ teilen.`,
      schritte: [
        { titel: "Lösung", text: `$(-x+6)^{-1/2}$, $a=-1$: $\\int(-x+6)^{-1/2}dx=\\frac{1}{-1}\\cdot 2(-x+6)^{1/2}+c=-2\\sqrt{6-x}+c$` },
      ],
      ergebnis: `$-2\\sqrt{6-x}+c$`,
    },
    {
      id: "t1-a02f",
      typ: "Rechentechnik",
      titel: "Lineare Substitution (f)",
      quelle: "Übungsblatt 1, Aufgabe 2f",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie mittels linearer Substitution ($\\int f(ax+b)\\,dx=\\tfrac1a F(ax+b)+c$):
$$\\int\\cos\\Big(\\frac x3\\Big)dx$$`,
      hinweis: `Stammfunktion der äußeren Funktion bilden, inneres Argument unverändert lassen, durch die innere Ableitung $a$ teilen.`,
      schritte: [
        { titel: "Lösung", text: `$a=\\frac13$: $\\int\\cos(\\tfrac x3)dx=3\\sin\\Big(\\frac x3\\Big)+c$` },
      ],
      ergebnis: `$3\\sin(\\frac x3)+c$`,
    },
    {
      id: "t1-a03a",
      typ: "Rechentechnik",
      titel: "Substitution (a)",
      quelle: "Übungsblatt 1, Aufgabe 3a",
      schwierigkeit: 2,
      video: "Bsp04–Bsp06 (Substitution)",
      aufgabe: `Lösen Sie mittels geeigneter Substitution:
$$\\int x^2e^{x^3+5}dx$$`,
      hinweis: `Substituiere $t=x^3+5$ – die Ableitung $3x^2$ steht (bis auf den Faktor 3) als Faktor im Integranden da.`,
      schritte: [
        { titel: "Lösung", text: `$t=x^3+5$, $dt=3x^2dx \\Rightarrow x^2dx=\\frac{dt}{3}$:
$$\\int x^2e^{x^3+5}dx=\\frac13\\int e^t dt=\\frac13 e^{x^3+5}+c$$` },
      ],
      ergebnis: `$\\frac13e^{x^3+5}+c$`,
    },
    {
      id: "t1-a03b",
      typ: "Rechentechnik",
      titel: "Substitution (b)",
      quelle: "Übungsblatt 1, Aufgabe 3b",
      schwierigkeit: 2,
      video: "Bsp04–Bsp06 (Substitution)",
      aufgabe: `Lösen Sie mittels geeigneter Substitution:
$$\\int\\frac{3e^x}{(e^x+10)^4}dx$$`,
      hinweis: `Substituiere $t=e^x+10$ – die Ableitung $e^x$ steht als Faktor im Integranden da.`,
      schritte: [
        { titel: "Lösung", text: `$t=e^x+10$, $dt=e^x dx$:
$$3\\int t^{-4}dt=3\\cdot\\frac{t^{-3}}{-3}+c=-\\frac{1}{(e^x+10)^3}+c$$` },
      ],
      ergebnis: `$-\\frac{1}{(e^x+10)^3}+c$`,
    },
    {
      id: "t1-a03c",
      typ: "Rechentechnik",
      titel: "Substitution (c)",
      quelle: "Übungsblatt 1, Aufgabe 3c",
      schwierigkeit: 2,
      video: "Bsp04–Bsp06 (Substitution)",
      aufgabe: `Lösen Sie mittels geeigneter Substitution:
$$\\int\\frac{\\cos x}{1+2\\sin x}dx$$`,
      hinweis: `Substituiere $t=1+2\\sin x$ – die Ableitung $2\\cos x$ steht als Faktor im Integranden da.`,
      schritte: [
        { titel: "Lösung", text: `$t=1+2\\sin x$, $dt=2\\cos x\\,dx$:
$$\\frac12\\int\\frac{dt}{t}=\\frac12\\ln|1+2\\sin x|+c$$` },
      ],
      ergebnis: `$\\frac12\\ln|1+2\\sin x|+c$`,
    },
    {
      id: "t1-a03d",
      typ: "Rechentechnik",
      titel: "Substitution (d)",
      quelle: "Übungsblatt 1, Aufgabe 3d",
      schwierigkeit: 2,
      video: "Bsp04–Bsp06 (Substitution)",
      aufgabe: `Lösen Sie mittels geeigneter Substitution:
$$\\int x\\sqrt{1-x^2}\\,dx$$`,
      hinweis: `Substituiere $t=1-x^2$ – die Ableitung $-2x$ steht (bis auf den Faktor) als Faktor im Integranden da.`,
      schritte: [
        { titel: "Lösung", text: `$t=1-x^2$, $dt=-2x\\,dx \\Rightarrow x\\,dx=-\\frac{dt}{2}$:
$$-\\frac12\\int\\sqrt t\\,dt=-\\frac12\\cdot\\frac23 t^{3/2}+c=-\\frac13(1-x^2)^{3/2}+c$$` },
      ],
      ergebnis: `$-\\frac13(1-x^2)^{3/2}+c$`,
    },
    {
      id: "t1-a03e",
      typ: "Rechentechnik",
      titel: "Substitution (e)",
      quelle: "Übungsblatt 1, Aufgabe 3e",
      schwierigkeit: 2,
      video: "Bsp04–Bsp06 (Substitution)",
      aufgabe: `Lösen Sie mittels geeigneter Substitution:
$$\\int\\frac{\\ln^5(x)}{3x}dx$$`,
      hinweis: `Substituiere $t=\\ln x$ – die Ableitung $\\frac1x$ steht als Faktor im Integranden da.`,
      schritte: [
        { titel: "Lösung", text: `$t=\\ln x$, $dt=\\frac{dx}{x}$:
$$\\frac13\\int t^5dt=\\frac13\\cdot\\frac{t^6}{6}+c=\\frac{1}{18}\\ln^6(x)+c$$` },
      ],
      ergebnis: `$\\frac1{18}\\ln^6 x+c$`,
    },
    {
      id: "t1-a03f",
      typ: "Rechentechnik",
      titel: "Substitution (f)",
      quelle: "Übungsblatt 1, Aufgabe 3f",
      schwierigkeit: 2,
      video: "Bsp04–Bsp06 (Substitution)",
      aufgabe: `Lösen Sie mittels geeigneter Substitution:
$$\\int\\sin(x)\\cos(x)\\,dx$$`,
      hinweis: `Substituiere $t=\\sin x$ – die Ableitung $\\cos x$ steht als Faktor im Integranden da.`,
      schritte: [
        { titel: "Lösung", text: `$t=\\sin x$, $dt=\\cos x\\,dx$:
$$\\int t\\,dt=\\frac{t^2}{2}+c=\\frac12\\sin^2(x)+c$$` },
      ],
      ergebnis: `$\\frac12\\sin^2 x+c$`,
    },
    {
      id: "t1-a04a",
      typ: "Rechentechnik",
      titel: "Partielle Integration (a)",
      quelle: "Übungsblatt 1, Aufgabe 4a",
      schwierigkeit: 2,
      video: "Bsp01–Bsp03 (Partielle Integration)",
      aufgabe: `Lösen Sie mittels partieller Integration ($\\int uv'\\,dx=uv-\\int u'v\\,dx$):
$$\\int x\\cos(x)\\,dx$$`,
      hinweis: `Wahl von $u=x$ (wird beim Ableiten zu $1$), $v'=\\cos x$ (leicht integrierbar).`,
      schritte: [
        { titel: "Lösung", text: `$u=x$, $v'=\\cos x$ ⟹ $u'=1$, $v=\\sin x$:
$$\\int x\\cos x\\,dx=x\\sin x-\\int\\sin x\\,dx=x\\sin x+\\cos x+c$$` },
      ],
      ergebnis: `$x\\sin x+\\cos x+c$`,
    },
    {
      id: "t1-a04b",
      typ: "Rechentechnik",
      titel: "Partielle Integration (b)",
      quelle: "Übungsblatt 1, Aufgabe 4b",
      schwierigkeit: 2,
      video: "Bsp01–Bsp03 (Partielle Integration)",
      aufgabe: `Lösen Sie mittels partieller Integration ($\\int uv'\\,dx=uv-\\int u'v\\,dx$):
$$\\int(x^2-1)e^x dx$$`,
      hinweis: `Wahl von $u=x^2-1$ (Polynom wird beim Ableiten einfacher), $v'=e^x$. Hier ist die partielle Integration zweimal nötig.`,
      schritte: [
        { titel: "Lösung", text: `$u=x^2-1$, $v'=e^x$: $(x^2-1)e^x-\\int 2x e^x dx$.
Nochmal partiell ($u=2x$): $\\int 2xe^xdx=2xe^x-2e^x$.
$$\\Rightarrow (x^2-1)e^x-2xe^x+2e^x+c=(x^2-2x+1)e^x+c=(x-1)^2e^x+c$$` },
      ],
      ergebnis: `$(x-1)^2e^x+c$`,
    },
    {
      id: "t1-a04c",
      typ: "Rechentechnik",
      titel: "Partielle Integration (c)",
      quelle: "Übungsblatt 1, Aufgabe 4c",
      schwierigkeit: 2,
      video: "Bsp01–Bsp03 (Partielle Integration)",
      aufgabe: `Lösen Sie mittels partieller Integration ($\\int uv'\\,dx=uv-\\int u'v\\,dx$):
$$\\int\\sqrt x\\,\\ln(x)\\,dx$$`,
      hinweis: `Wahl von $u=\\ln x$ (wird beim Ableiten zu $\\frac1x$), $v'=\\sqrt x=x^{1/2}$.`,
      schritte: [
        { titel: "Lösung", text: `$u=\\ln x$, $v'=x^{1/2}$ ⟹ $v=\\frac23x^{3/2}$:
$$\\frac23x^{3/2}\\ln x-\\int\\frac23x^{3/2}\\cdot\\frac1x dx=\\frac23x^{3/2}\\ln x-\\frac23\\int x^{1/2}dx=\\frac23x^{3/2}\\ln(x)-\\frac49x^{3/2}+c$$` },
      ],
      ergebnis: `$\\frac23x^{3/2}\\ln x-\\frac49x^{3/2}+c$`,
    },
    {
      id: "t1-a04d",
      typ: "Rechentechnik",
      titel: "Partielle Integration (d)",
      quelle: "Übungsblatt 1, Aufgabe 4d",
      schwierigkeit: 2,
      video: "Bsp01–Bsp03 (Partielle Integration)",
      aufgabe: `Lösen Sie mittels partieller Integration ($\\int uv'\\,dx=uv-\\int u'v\\,dx$):
$$\\int\\ln(x)\\,dx$$`,
      hinweis: `Trick: $\\ln(x)=1\\cdot\\ln(x)$, also $u=\\ln x$, $v'=1$ ⟹ $v=x$.`,
      schritte: [
        { titel: "Lösung", text: `Trick: $u=\\ln x$, $v'=1$ ⟹ $v=x$:
$$\\int\\ln x\\,dx=x\\ln x-\\int x\\cdot\\frac1x dx=x\\ln(x)-x+c$$` },
      ],
      ergebnis: `$x\\ln x-x+c$`,
    },
    {
      id: "t1-a04e",
      typ: "Rechentechnik",
      titel: "Partielle Integration (e)",
      quelle: "Übungsblatt 1, Aufgabe 4e",
      schwierigkeit: 2,
      video: "Bsp01–Bsp03 (Partielle Integration)",
      aufgabe: `Lösen Sie mittels partieller Integration ($\\int uv'\\,dx=uv-\\int u'v\\,dx$):
$$\\int\\sin(x)\\cos(x)\\,dx$$`,
      hinweis: `Wahl von $u=\\sin x$, $v'=\\cos x$. Nach der partiellen Integration erscheint das Ausgangsintegral wieder – nach diesem auflösen!`,
      schritte: [
        { titel: "Lösung", text: `$u=\\sin x$, $v'=\\cos x$: $\\int\\sin x\\cos x\\,dx=\\sin^2x-\\int\\sin x\\cos x\\,dx$.
Auflösen: $2\\int\\sin x\\cos x\\,dx=\\sin^2 x$ ⟹ $\\int\\sin x\\cos x\\,dx=\\frac12\\sin^2(x)+c$
(gleiches Ergebnis wie per Substitution!)` },
      ],
      ergebnis: `$\\frac12\\sin^2x+c$`,
    },
    {
      id: "t1-a04f",
      typ: "Rechentechnik",
      titel: "Partielle Integration (f)",
      quelle: "Übungsblatt 1, Aufgabe 4f",
      schwierigkeit: 2,
      video: "Bsp01–Bsp03 (Partielle Integration)",
      aufgabe: `Lösen Sie mittels partieller Integration ($\\int uv'\\,dx=uv-\\int u'v\\,dx$):
$$\\int e^x\\sin(x)\\,dx$$`,
      hinweis: `Zweimal partiell integrieren mit $u=e^x$, dann nach dem gesuchten Integral $I$ auflösen (es kommt im Kreis zurück).`,
      schritte: [
        { titel: "Lösung", text: `Zweimal partiell mit $u=e^x$:
$I=\\int e^x\\sin x\\,dx=-e^x\\cos x+\\int e^x\\cos x\\,dx=-e^x\\cos x+e^x\\sin x-I$
$$\\Rightarrow 2I=e^x(\\sin x-\\cos x) \\Rightarrow I=\\frac12e^x(\\sin x-\\cos x)+c$$` },
      ],
      ergebnis: `$\\frac12e^x(\\sin x-\\cos x)+c$`,
    },
    {
      id: "t1-a05b",
      typ: "Rechentechnik",
      titel: "Methoden-Mix (selbständig) (b)",
      quelle: "Übungsblatt 1, Aufgabe 5b",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie mit geeigneter Methode:
$$\\int\\frac{x^2-x-2}{4x}dx$$`,
      hinweis: `Erst vereinfachen: Bruch aufteilen, dann gliedweise integrieren.`,
      schritte: [
        { titel: "Lösung", text: `$\\frac{x^2-x-2}{4x}=\\frac x4-\\frac14-\\frac{1}{2x}$
$$\\int\\Big(\\frac x4-\\frac14-\\frac1{2x}\\Big)dx=\\frac{x^2}{8}-\\frac x4-\\frac12\\ln|x|+c$$` },
      ],
      ergebnis: `$\\frac{x^2}8-\\frac x4-\\frac12\\ln|x|+c$`,
    },
    {
      id: "t1-a05f",
      typ: "Rechentechnik",
      titel: "Methoden-Mix (selbständig) (f)",
      quelle: "Übungsblatt 1, Aufgabe 5f",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie mit geeigneter Methode:
$$\\int x\\cos(x^2-1)\\,dx$$`,
      hinweis: `Substitution: die innere Ableitung steht (bis auf einen Faktor) als Faktor da. $t=x^2-1$.`,
      schritte: [
        { titel: "Lösung", text: `$t=x^2-1$, $dt=2x\\,dx$:
$$\\frac12\\int\\cos t\\,dt=\\frac12\\sin(x^2-1)+c$$` },
      ],
      ergebnis: `$\\frac12\\sin(x^2-1)+c$`,
    },
    {
      id: "t1-a05g",
      typ: "Rechentechnik",
      titel: "Methoden-Mix (selbständig) (g)",
      quelle: "Übungsblatt 1, Aufgabe 5g",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie mit geeigneter Methode:
$$\\int\\cos^5(x)\\sin(x)\\,dx$$`,
      hinweis: `Regel $\\int f^nf'\\,dx=\\frac{f^{n+1}}{n+1}+c$ mit $f=\\cos x$, $f'=-\\sin x$.`,
      schritte: [
        { titel: "Lösung", text: `$f=\\cos x$, $f'=-\\sin x$: $\\int\\cos^5x\\sin x\\,dx=-\\int f^5f'dx$
$$=-\\frac{f^6}{6}+c=-\\frac{\\cos^6(x)}{6}+c$$` },
      ],
      ergebnis: `$-\\frac{\\cos^6x}{6}+c$`,
    },
    {
      id: "t1-a05i",
      typ: "Rechentechnik",
      titel: "Methoden-Mix (selbständig) (i)",
      quelle: "Übungsblatt 1, Aufgabe 5i",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie mit geeigneter Methode:
$$\\int\\frac{1}{x\\ln(x)}dx$$`,
      hinweis: `Substitution $t=\\ln x$, $dt=\\frac{dx}{x}$.`,
      schritte: [
        { titel: "Lösung", text: `$t=\\ln x$, $dt=\\frac{dx}x$:
$$\\int\\frac{dt}{t}=\\ln|t|+c=\\ln|\\ln(x)|+c$$` },
      ],
      ergebnis: `$\\ln|\\ln x|+c$`,
    },
    {
      id: "t1-a05k",
      typ: "Rechentechnik",
      titel: "Methoden-Mix (selbständig) (k)",
      quelle: "Übungsblatt 1, Aufgabe 5k",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie mit geeigneter Methode:
$$\\int\\sin(x)\\,e^{\\cos(x)}dx$$`,
      hinweis: `Substitution $t=\\cos x$, $dt=-\\sin x\\,dx$.`,
      schritte: [
        { titel: "Lösung", text: `$t=\\cos x$, $dt=-\\sin x\\,dx$:
$$-\\int e^tdt=-e^{\\cos(x)}+c$$` },
      ],
      ergebnis: `$-e^{\\cos x}+c$`,
    },
    {
      id: "t1-a05l",
      typ: "Rechentechnik",
      titel: "Methoden-Mix (selbständig) (l)",
      quelle: "Übungsblatt 1, Aufgabe 5l",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie mit geeigneter Methode:
$$\\int e^{\\sqrt x}\\,dx$$`,
      hinweis: `$t=\\sqrt x$ substituieren, danach partiell integrieren.`,
      schritte: [
        { titel: "Lösung", text: `$t=\\sqrt x$, $x=t^2$, $dx=2t\\,dt$:
$$\\int e^{\\sqrt x}dx=2\\int t\\,e^t dt=2e^t(t-1)+c=2e^{\\sqrt x}(\\sqrt x-1)+c$$
(dabei $\\int te^tdt=te^t-e^t$ partiell)` },
      ],
      ergebnis: `$2e^{\\sqrt x}(\\sqrt x-1)+c$`,
    },
    {
      id: "t1-a06a",
      typ: "Rechentechnik",
      titel: "Partialbruchzerlegung – Grundtypen (a)",
      quelle: "Übungsblatt 2, Aufgabe 1a",
      schwierigkeit: 2,
      video: "Bsp07–Bsp08 (PBZ)",
      aufgabe: `Lösen Sie mittels Partialbruchzerlegung bzw. passender Grundintegrale:
$$\\int\\frac{2x}{x^2+4}dx$$`,
      hinweis: `Zähler = Ableitung des Nenners ⟹ $\\ln$-Regel: $\\int\\frac{f'}{f}dx=\\ln|f|+c$.`,
      schritte: [
        { titel: "Lösung", text: `Es gilt $(x^2+4)'=2x$, also $\\int\\frac{f'}{f}dx=\\ln|f|+c$:
$$\\int\\frac{2x}{x^2+4}dx=\\ln(x^2+4)+c$$
(Betrag unnötig, da $x^2+4>0$)` },
      ],
      ergebnis: `$\\ln(x^2+4)+c$`,
    },
    {
      id: "t1-a06b",
      typ: "Rechentechnik",
      titel: "Partialbruchzerlegung – Grundtypen (b)",
      quelle: "Übungsblatt 2, Aufgabe 1b",
      schwierigkeit: 2,
      video: "Bsp07–Bsp08 (PBZ)",
      aufgabe: `Lösen Sie mittels Partialbruchzerlegung bzw. passender Grundintegrale:
$$\\int\\frac{2}{x^2+4}dx$$`,
      hinweis: `arctan-Grundintegral $\\int\\frac{dx}{x^2+a^2}=\\frac1a\\arctan\\frac xa+c$.`,
      schritte: [
        { titel: "Lösung", text: `Grundintegral $\\int\\frac{dx}{x^2+a^2}=\\frac1a\\arctan\\frac xa+c$ mit $a=2$:
$$\\int\\frac{2}{x^2+4}dx=2\\cdot\\frac12\\arctan\\Big(\\frac x2\\Big)+c=\\arctan\\Big(\\frac x2\\Big)+c$$` },
      ],
      ergebnis: `$\\arctan(\\frac x2)+c$`,
    },
    {
      id: "t1-a06c",
      typ: "Rechentechnik",
      titel: "Partialbruchzerlegung – Grundtypen (c)",
      quelle: "Übungsblatt 2, Aufgabe 1c",
      schwierigkeit: 2,
      video: "Bsp07–Bsp08 (PBZ)",
      aufgabe: `Lösen Sie mittels Partialbruchzerlegung bzw. passender Grundintegrale:
$$\\int\\frac{2}{x^2+3x-4}dx$$`,
      hinweis: `Nenner faktorisieren: $x^2+3x-4=(x+4)(x-1)$, dann Partialbruchzerlegung ansetzen.`,
      schritte: [
        { titel: "PBZ-Ansatz", text: `Nullstellen des Nenners: $x^2+3x-4=(x+4)(x-1)$.
Ansatz: $\\frac{2}{(x+4)(x-1)}=\\frac{A}{x+4}+\\frac{B}{x-1}$
Multiplizieren mit dem Nenner: $2=A(x-1)+B(x+4)$.
$x=1$: $2=5B\\Rightarrow B=\\frac25$. $\\quad x=-4$: $2=-5A\\Rightarrow A=-\\frac25$.` },
        { titel: "Integrieren", text: `$$\\int\\frac{2\\,dx}{x^2+3x-4}=-\\frac25\\ln|x+4|+\\frac25\\ln|x-1|+c$$` },
      ],
      ergebnis: `$\\frac25\\ln|x-1|-\\frac25\\ln|x+4|+c$`,
    },
    {
      id: "t1-a07d",
      typ: "Rechentechnik",
      titel: "PBZ mit Polynomdivision & mehrfachen Faktoren (d)",
      quelle: "Übungsblatt 2, Aufgabe 1d",
      schwierigkeit: 3,
      aufgabe: `Lösen Sie mittels Partialbruchzerlegung:
$$\\int\\frac{x^4}{x^2-4x+4}dx$$`,
      hinweis: `Zählergrad ≥ Nennergrad ⟹ erst Polynomdivision! Der Nenner ist $(x-2)^2$.`,
      schritte: [
        { titel: "Polynomdivision & Ansatz", text: `$x^4:(x^2-4x+4)=x^2+4x+12+\\dfrac{32x-48}{(x-2)^2}$
PBZ: $\\frac{32x-48}{(x-2)^2}=\\frac{A}{x-2}+\\frac{B}{(x-2)^2}$ ⟹ $32x-48=A(x-2)+B$
⟹ $A=32$, $B=64-48=16$.` },
        { titel: "Integrieren", text: `$$\\int=\\frac{x^3}{3}+2x^2+12x+32\\ln|x-2|-\\frac{16}{x-2}+c$$
(beachte $\\int\\frac{16}{(x-2)^2}dx=-\\frac{16}{x-2}$)` },
      ],
      ergebnis: `$\\frac{x^3}3+2x^2+12x+32\\ln|x-2|-\\frac{16}{x-2}+c$`,
    },
    {
      id: "t1-a07e",
      typ: "Rechentechnik",
      titel: "PBZ mit Polynomdivision & mehrfachen Faktoren (e)",
      quelle: "Übungsblatt 2, Aufgabe 1e",
      schwierigkeit: 3,
      aufgabe: `Lösen Sie mittels Partialbruchzerlegung:
$$\\int\\frac{9x-27}{(x+2)^2(x-1)}dx$$`,
      hinweis: `Doppelte Nullstelle: Ansatz $\\frac{A}{x+2}+\\frac{B}{(x+2)^2}+\\frac{C}{x-1}$.`,
      schritte: [
        { titel: "Ansatz & Koeffizienten", text: `$\\frac{9x-27}{(x+2)^2(x-1)}=\\frac{A}{x+2}+\\frac{B}{(x+2)^2}+\\frac{C}{x-1}$
$9x-27=A(x+2)(x-1)+B(x-1)+C(x+2)^2$
$x=1$: $-18=9C\\Rightarrow C=-2$. $\\quad x=-2$: $-45=-3B\\Rightarrow B=15$.
Koeffizient von $x^2$: $0=A+C\\Rightarrow A=2$.` },
        { titel: "Integrieren", text: `Mit $\\int\\frac{15}{(x+2)^2}dx=-\\frac{15}{x+2}$:
$$\\int=2\\ln|x+2|-\\frac{15}{x+2}-2\\ln|x-1|+c$$` },
      ],
      ergebnis: `$2\\ln|x+2|-2\\ln|x-1|-\\frac{15}{x+2}+c$`,
    },
    {
      id: "t1-a07f",
      typ: "Rechentechnik",
      titel: "PBZ mit Polynomdivision & mehrfachen Faktoren (f)",
      quelle: "Übungsblatt 2, Aufgabe 1f",
      schwierigkeit: 3,
      aufgabe: `Lösen Sie mittels Partialbruchzerlegung:
$$\\int\\frac{x^3+6x+20}{x^4+2x^2}dx$$`,
      hinweis: `$x^4+2x^2=x^2(x^2+2)$ ⟹ Ansatz $\\frac Ax+\\frac B{x^2}+\\frac{Cx+D}{x^2+2}$.`,
      schritte: [
        { titel: "Ansatz & Koeffizienten", text: `$x^4+2x^2=x^2(x^2+2)$:
$\\frac{x^3+6x+20}{x^2(x^2+2)}=\\frac Ax+\\frac{B}{x^2}+\\frac{Cx+D}{x^2+2}$
$x^3+6x+20=Ax(x^2+2)+B(x^2+2)+(Cx+D)x^2$
Konstante: $20=2B\\Rightarrow B=10$. $x$: $6=2A\\Rightarrow A=3$.
$x^3$: $1=A+C\\Rightarrow C=-2$. $x^2$: $0=B+D\\Rightarrow D=-10$.` },
        { titel: "Integrieren", text: `$$\\int\\frac3x dx=3\\ln|x|,\\quad \\int\\frac{10}{x^2}dx=-\\frac{10}x$$
$$\\int\\frac{-2x}{x^2+2}dx=-\\ln(x^2+2),\\quad \\int\\frac{-10}{x^2+2}dx=-\\frac{10}{\\sqrt2}\\arctan\\frac{x}{\\sqrt2}=-5\\sqrt2\\arctan\\frac{x}{\\sqrt2}$$
Gesamt: $3\\ln|x|-\\frac{10}x-\\ln(x^2+2)-5\\sqrt2\\arctan\\big(\\frac{x}{\\sqrt2}\\big)+c$
(Kontrolle durch Ableiten bestätigt dieses Ergebnis.)` },
      ],
      ergebnis: `$3\\ln|x|-\\frac{10}x-\\ln(x^2+2)-5\\sqrt2\\arctan(\\frac x{\\sqrt2})+c$`,
    },
    {
      id: "t1-a08",
      typ: "Klausurtyp",
      titel: "PBZ-Komplettbeispiel (selbständig)",
      quelle: "Übungsblatt 3, Aufgabe 4",
      schwierigkeit: 3,
      aufgabe: `Lösen Sie das unbestimmte Integral
$$I=\\int\\frac{2x^3-12x^2+20x-2}{x^2-6x+9}\\,dx$$`,
      hinweis: `Unecht gebrochenrational ⟹ Polynomdivision. Der Nenner ist $(x-3)^2$.`,
      schritte: [
        { titel: "Polynomdivision", text: `$(2x^3-12x^2+20x-2):(x^2-6x+9)=2x+\\dfrac{2x-2}{x^2-6x+9}$
denn $2x\\cdot(x^2-6x+9)=2x^3-12x^2+18x$, Rest: $2x-2$.` },
        { titel: "PBZ des Restbruchs", text: `$\\frac{2x-2}{(x-3)^2}=\\frac{A}{x-3}+\\frac{B}{(x-3)^2}$
$2x-2=A(x-3)+B$ ⟹ $A=2$, $-2=-3A+B\\Rightarrow B=4$.` },
        { titel: "Integrieren", text: `$$I=\\int\\Big(2x+\\frac{2}{x-3}+\\frac{4}{(x-3)^2}\\Big)dx=x^2+2\\ln|x-3|-\\frac{4}{x-3}+c$$` },
      ],
      ergebnis: `$I=x^2+2\\ln|x-3|-\\dfrac{4}{x-3}+c$`,
    },
    {
      id: "t1-a09a",
      typ: "Rechentechnik",
      titel: "Bestimmte Integrale (a)",
      quelle: "Übungsblatt 2, Aufgabe 2a",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_0^1\\frac{dx}{1+x^2}$$`,
      hinweis: `Stammfunktion bestimmen, dann Hauptsatz: $\\int_a^b f\\,dx=F(b)-F(a)$.`,
      schritte: [
        { titel: "Lösung", text: `$$\\int_0^1\\frac{dx}{1+x^2}=\\big[\\arctan x\\big]_0^1=\\frac{\\pi}{4}-0=\\frac{\\pi}{4}$$` },
      ],
      ergebnis: `$\\frac\\pi4$`,
    },
    {
      id: "t1-a09b",
      typ: "Rechentechnik",
      titel: "Bestimmte Integrale (b)",
      quelle: "Übungsblatt 2, Aufgabe 2b",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_0^{\\pi/3}\\tan(x)\\,dx$$`,
      hinweis: `Stammfunktion bestimmen, dann Hauptsatz: $\\int_a^b f\\,dx=F(b)-F(a)$.`,
      schritte: [
        { titel: "Lösung", text: `$\\int\\tan x\\,dx=-\\ln|\\cos x|$:
$$\\big[-\\ln|\\cos x|\\big]_0^{\\pi/3}=-\\ln\\tfrac12+\\ln 1=\\ln(2)$$` },
      ],
      ergebnis: `$\\ln 2$`,
    },
    {
      id: "t1-a09c",
      typ: "Rechentechnik",
      titel: "Bestimmte Integrale (c)",
      quelle: "Übungsblatt 2, Aufgabe 2c",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_9^{16}e^{\\sqrt x}\\,dx$$`,
      hinweis: `Stammfunktion bestimmen, dann Hauptsatz: $\\int_a^b f\\,dx=F(b)-F(a)$.`,
      schritte: [
        { titel: "Lösung", text: `Stammfunktion (Substitution + partiell): $\\int e^{\\sqrt x}dx=2e^{\\sqrt x}(\\sqrt x-1)$.
$$\\big[2e^{\\sqrt x}(\\sqrt x-1)\\big]_9^{16}=2e^4\\cdot3-2e^3\\cdot2=6e^4-4e^3$$` },
      ],
      ergebnis: `$6e^4-4e^3$`,
    },
    {
      id: "t1-a09d",
      typ: "Rechentechnik",
      titel: "Bestimmte Integrale (d)",
      quelle: "Übungsblatt 2, Aufgabe 2d",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_0^{\\ln 2}xe^{-x}dx$$`,
      hinweis: `Stammfunktion bestimmen (partielle Integration), dann Hauptsatz: $\\int_a^b f\\,dx=F(b)-F(a)$.`,
      schritte: [
        { titel: "Lösung", text: `Partiell: $\\int xe^{-x}dx=-xe^{-x}+\\int e^{-x}dx=-(x+1)e^{-x}$.
$$\\big[-(x+1)e^{-x}\\big]_0^{\\ln2}=-(\\ln2+1)\\cdot\\tfrac12+1=\\frac12-\\frac12\\ln(2)\\approx 0{,}1534$$` },
      ],
      ergebnis: `$\\frac12-\\frac12\\ln2$`,
    },
    {
      id: "t1-a09e",
      typ: "Rechentechnik",
      titel: "Bestimmte Integrale (e)",
      quelle: "Übungsblatt 2, Aufgabe 2e",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_0^1\\frac{4x^2}{\\sqrt[3]{5x^3+7}}dx$$`,
      hinweis: `Substitution: bei Substitution in bestimmten Integralen die Grenzen mitsubstituieren!`,
      schritte: [
        { titel: "Lösung", text: `$t=5x^3+7$, $dt=15x^2dx$; Grenzen: $x{=}0\\to t{=}7$, $x{=}1\\to t{=}12$:
$$\\frac{4}{15}\\int_7^{12}t^{-1/3}dt=\\frac{4}{15}\\cdot\\frac32\\big[t^{2/3}\\big]_7^{12}=\\frac25\\Big(12^{2/3}-7^{2/3}\\Big)$$` },
      ],
      ergebnis: `$\\frac25(12^{2/3}-7^{2/3})$`,
    },
    {
      id: "t1-a09f",
      typ: "Rechentechnik",
      titel: "Bestimmte Integrale (f)",
      quelle: "Übungsblatt 2, Aufgabe 2f",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_1^e\\frac{8\\ln(x^2)}{x}dx$$`,
      hinweis: `Substitution $t=\\ln x$, beachte $\\ln(x^2)=2\\ln x$.`,
      schritte: [
        { titel: "Lösung", text: `$\\ln(x^2)=2\\ln x$ ⟹ Integrand $=\\frac{16\\ln x}{x}$, $t=\\ln x$:
$$16\\Big[\\frac{\\ln^2x}{2}\\Big]_1^e=8(1-0)=8$$
**Achtung:** Das Blatt nennt 4 – das passt zu $\\int_1^e\\frac{8\\ln(x)}{x}dx=4$. Mit $\\ln(x^2)$ wie gedruckt ist 8 korrekt (vermutlich Druckfehler im Blatt).` },
      ],
      ergebnis: `$8$ (bzw. $4$, falls $\\ln(x)$ statt $\\ln(x^2)$ gemeint war)`,
    },
    {
      id: "t1-a10a",
      typ: "Rechentechnik",
      titel: "Bestimmte Integrale (selbständig) (a)",
      quelle: "Übungsblatt 2, Aufgabe 3a",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_1^{\\sqrt{19}}\\frac{x}{\\sqrt{4x^2+5}}dx$$`,
      hinweis: `Substitution $t=4x^2+5$.`,
      schritte: [
        { titel: "Lösung", text: `$t=4x^2+5$, $dt=8x\\,dx$; Grenzen $t: 9\\to 81$:
$$\\frac18\\int_9^{81}t^{-1/2}dt=\\frac18\\big[2\\sqrt t\\big]_9^{81}=\\frac14(9-3)=\\frac32$$` },
      ],
      ergebnis: `$\\frac32$`,
    },
    {
      id: "t1-a10b",
      typ: "Rechentechnik",
      titel: "Bestimmte Integrale (selbständig) (b)",
      quelle: "Übungsblatt 2, Aufgabe 3b",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_0^{\\sqrt3}x\\arctan(x)\\,dx$$`,
      hinweis: `Partielle Integration mit $u=\\arctan x$, $v'=x$. Danach $\\frac{x^2}{1+x^2}=1-\\frac{1}{1+x^2}$ nutzen.`,
      schritte: [
        { titel: "Lösung", text: `Partiell, $u=\\arctan x$, $v'=x$:
$$\\Big[\\frac{x^2}2\\arctan x\\Big]_0^{\\sqrt3}-\\frac12\\int_0^{\\sqrt3}\\frac{x^2}{1+x^2}dx=\\frac32\\cdot\\frac\\pi3-\\frac12\\big[x-\\arctan x\\big]_0^{\\sqrt3}$$
$$=\\frac\\pi2-\\frac12\\Big(\\sqrt3-\\frac\\pi3\\Big)=\\frac{2\\pi}{3}-\\frac{\\sqrt3}{2}\\approx 1{,}228$$` },
      ],
      ergebnis: `$\\frac{2\\pi}3-\\frac{\\sqrt3}2$`,
    },
    {
      id: "t1-a10c",
      typ: "Rechentechnik",
      titel: "Bestimmte Integrale (selbständig) (c)",
      quelle: "Übungsblatt 2, Aufgabe 3c",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_2^8\\frac{dt}{t^2+t}$$`,
      hinweis: `$t^2+t=t(t+1)$, dann Partialbruchzerlegung.`,
      schritte: [
        { titel: "Lösung", text: `$\\frac{1}{t(t+1)}=\\frac1t-\\frac1{t+1}$:
$$\\Big[\\ln\\frac{t}{t+1}\\Big]_2^8=\\ln\\frac89-\\ln\\frac23=\\ln\\Big(\\frac89\\cdot\\frac32\\Big)=\\ln\\frac43$$` },
      ],
      ergebnis: `$\\ln\\frac43$`,
    },
    {
      id: "t1-a10f",
      typ: "Rechentechnik",
      titel: "Bestimmte Integrale (selbständig) (f)",
      quelle: "Übungsblatt 2, Aufgabe 3f",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_0^{1/2}\\frac{5x}{\\sqrt{1-x^2}}dx$$`,
      hinweis: `Substitution $t=1-x^2$ (oder direkt die Stammfunktion erkennen).`,
      schritte: [
        { titel: "Lösung", text: `$t=1-x^2$, $dt=-2x\\,dx$, oder direkt: Stammfunktion $-5\\sqrt{1-x^2}$:
$$\\big[-5\\sqrt{1-x^2}\\big]_0^{1/2}=-5\\cdot\\frac{\\sqrt3}2+5=5-\\frac{5\\sqrt3}{2}\\approx 0{,}670$$` },
      ],
      ergebnis: `$5-\\frac{5\\sqrt3}2$`,
    },
    {
      id: "t1-a11a",
      typ: "Rechentechnik",
      titel: "Numerische Integration – Trapezregel",
      quelle: "Übungsblatt 3, Aufgabe 1a",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie das Integral $I=\\displaystyle\\int_{-1/2}^{1/2}e^{x^2}dx$ näherungsweise mit der **Trapezregel** mit $n=10$ Teilintervallen.`,
      hinweis: `$h=\\frac{b-a}{n}=0{,}1$. Trapezregel: $I\\approx\\frac h2\\big(f(a)+f(b)+2\\sum f(\\text{innere Stützstellen})\\big)$.`,
      schritte: [
        { titel: "Stützstellen", text: `$a=-0{,}5$, $b=0{,}5$, $h=0{,}1$, Stützstellen $x_k=-0{,}5+k\\cdot 0{,}1$ für $k=0,\\dots,10$, Funktionswerte $f(x_k)=e^{x_k^2}$. Wegen Symmetrie gilt $f(-x)=f(x)$.` },
        { titel: "Trapezregel", text: `$$T_{10}=\\frac{h}{2}\\Big(f(x_0)+f(x_{10})+2\\sum_{k=1}^{9}f(x_k)\\Big)\\approx 1{,}09211$$` },
      ],
      ergebnis: `$T_{10}\\approx 1{,}09211$
(Das Integral selbst ist nicht elementar lösbar – darum die Näherung!)`,
    },
    {
      id: "t1-a11b",
      typ: "Rechentechnik",
      titel: "Numerische Integration – Simpson-Regel",
      quelle: "Übungsblatt 3, Aufgabe 1b",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie das Integral $I=\\displaystyle\\int_{-1/2}^{1/2}e^{x^2}dx$ näherungsweise mit der **Simpson-Regel** mit $m=10$ Teilintervallen.`,
      hinweis: `$h=\\frac{b-a}{m}=0{,}1$. Simpson-Regel: ungerade Indizes mit Faktor 4, gerade innere mit Faktor 2, Randpunkte mit Faktor 1 – alles mal $\\frac h3$.`,
      schritte: [
        { titel: "Stützstellen", text: `$a=-0{,}5$, $b=0{,}5$, $h=0{,}1$, Stützstellen $x_k=-0{,}5+k\\cdot 0{,}1$ für $k=0,\\dots,10$, Funktionswerte $f(x_k)=e^{x_k^2}$. Wegen Symmetrie gilt $f(-x)=f(x)$.` },
        { titel: "Simpson-Regel", text: `Ungerade Indizes mit Faktor 4, gerade innere mit Faktor 2:
$$S_{10}=\\frac h3\\Big(f(x_0)+f(x_{10})+4\\!\\!\\sum_{k\\,\\text{ungerade}}\\!\\!f(x_k)+2\\!\\!\\sum_{k\\,\\text{gerade innen}}\\!\\!f(x_k)\\Big)\\approx 1{,}08998$$` },
      ],
      ergebnis: `$S_{10}\\approx 1{,}08998$
(Das Integral selbst ist nicht elementar lösbar – darum die Näherung!)`,
    },
    {
      id: "t1-a11c",
      typ: "Rechentechnik",
      titel: "Numerische Integration – Taylorpolynom",
      quelle: "Übungsblatt 3, Aufgabe 1c",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie das Integral $I=\\displaystyle\\int_{-1/2}^{1/2}e^{x^2}dx$ näherungsweise mit dem **Taylorpolynom 4. Grades** um $x_0=0$.`,
      hinweis: `Taylor: $e^{x^2}\\approx 1+x^2+\\frac{x^4}{2}$ (aus $e^u\\approx 1+u+\\frac{u^2}{2}$ mit $u=x^2$).`,
      schritte: [
        { titel: "Taylorpolynom", text: `$e^u\\approx 1+u+\\frac{u^2}2$ mit $u=x^2$: $\\;T_4(x)=1+x^2+\\frac{x^4}{2}$
$$\\int_{-1/2}^{1/2}T_4\\,dx=\\Big[x+\\frac{x^3}3+\\frac{x^5}{10}\\Big]_{-1/2}^{1/2}=2\\Big(\\frac12+\\frac1{24}+\\frac1{320}\\Big)\\approx 1{,}0896$$` },
      ],
      ergebnis: `$\\approx 1{,}0896$
(Das Integral selbst ist nicht elementar lösbar – darum die Näherung!)`,
    },
    {
      id: "t1-a12a",
      typ: "Verständnis",
      titel: "Drei Wege zu einem Integral",
      quelle: "Übungsblatt 3, Aufgabe 2a",
      schwierigkeit: 2,
      aufgabe: `Gegeben sei $f(x)=\\dfrac{-6x^2-8}{x^3+4x}$.
Bestimmen Sie $\\int f(x)\\,dx$ auf drei Wegen: (i) Substitution des Nenners, (ii) Partialbruchzerlegung, (iii) Regel $\\int\\frac{f'}{f}dx=\\ln|f|+C$.`,
      hinweis: `Der Zähler ist genau $-2\\cdot$(Ableitung des Nenners) – das funktioniert für alle drei Wege.`,
      schritte: [
        { titel: "Weg 1: Substitution", text: `$t=x^3+4x$, $dt=(3x^2+4)dx$. Zähler: $-6x^2-8=-2(3x^2+4)$:
$$\\int\\frac{-2\\,dt}{t}=-2\\ln|t|+C=-2\\ln|x^3+4x|+C$$` },
        { titel: "Weg 2: PBZ (Kontrolle)", text: `$\\frac{-6x^2-8}{x(x^2+4)}=\\frac Ax+\\frac{Bx+C}{x^2+4}$ ⟹ $-6x^2-8=A(x^2+4)+(Bx+C)x$
$x=0$: $A=-2$; $x^2$: $-6=A+B\\Rightarrow B=-4$; $x$: $C=0$.
$$\\int\\Big(\\frac{-2}x+\\frac{-4x}{x^2+4}\\Big)dx=-2\\ln|x|-2\\ln(x^2+4)+C=-2\\ln|x^3+4x|+C\\ \\checkmark$$` },
        { titel: "Weg 3: ln-Regel", text: `$f(x)=-2\\cdot\\frac{(x^3+4x)'}{x^3+4x}$ ⟹ sofort $-2\\ln|x^3+4x|+C$.` },
      ],
      ergebnis: `$\\int f\\,dx=-2\\ln|x^3+4x|+C$ (alle drei Wege)`,
    },
    {
      id: "t1-a12b",
      typ: "Verständnis",
      titel: "Uneigentliches Integral & Konvergenz",
      quelle: "Übungsblatt 3, Aufgabe 2b",
      schwierigkeit: 2,
      aufgabe: `Gegeben sei $f(x)=\\dfrac{-6x^2-8}{x^3+4x}$ mit Stammfunktion $F(x)=-2\\ln|x^3+4x|+C$.
Berechnen Sie $I=\\displaystyle\\int_0^2 f(x)\\,dx$. Konvergent oder divergent?`,
      hinweis: `Was passiert mit der Stammfunktion bei $x\\to0$?`,
      schritte: [
        { titel: "Uneigentliches Integral", text: `Bei $x=0$ ist der Nenner $0$ ⟹ Polstelle am linken Rand:
$$I=\\lim_{\\varepsilon\\to0^+}\\big[-2\\ln|x^3+4x|\\big]_\\varepsilon^2=-2\\ln(16)+2\\lim_{\\varepsilon\\to0^+}\\ln(\\varepsilon^3+4\\varepsilon)=-\\infty$$
$I$ ist **bestimmt divergent** (gegen $-\\infty$).` },
      ],
      ergebnis: `$I=-\\infty$, bestimmt divergent`,
    },
    {
      id: "t1-a13a",
      typ: "Rechentechnik",
      titel: "Uneigentliche Integrale (a)",
      quelle: "Übungsblatt 3, Aufgabe 3a",
      schwierigkeit: 2,
      video: "Bsp09–Bsp11 (Uneigentliche Integrale)",
      aufgabe: `Berechnen Sie das folgende uneigentliche Integral:
$$\\int_0^{\\pi/2}\\frac{\\cos x}{1-\\sin x}dx$$`,
      hinweis: `Polstelle bei $x=\\frac\\pi2$ (dort $\\sin x=1$) – als Grenzwert betrachten.`,
      schritte: [
        { titel: "Lösung", text: `$t=1-\\sin x$: Stammfunktion $-\\ln|1-\\sin x|$. Bei $x\\to\\frac\\pi2$: $1-\\sin x\\to 0^+$:
$$\\lim_{b\\to\\pi/2}\\big[-\\ln(1-\\sin x)\\big]_0^b=\\lim(-\\ln(1-\\sin b))+\\ln 1=+\\infty$$
**Divergent** (gegen $\\infty$).` },
      ],
      ergebnis: `divergent ($\\infty$)`,
    },
    {
      id: "t1-a13b",
      typ: "Rechentechnik",
      titel: "Uneigentliche Integrale (b)",
      quelle: "Übungsblatt 3, Aufgabe 3b",
      schwierigkeit: 2,
      video: "Bsp09–Bsp11 (Uneigentliche Integrale)",
      aufgabe: `Berechnen Sie das folgende uneigentliche Integral:
$$\\int_1^\\infty\\frac{dx}{x^3+x^2}$$`,
      hinweis: `Partialbruchzerlegung mit $x^2(x+1)$.`,
      schritte: [
        { titel: "PBZ", text: `$\\frac1{x^2(x+1)}=\\frac Ax+\\frac B{x^2}+\\frac C{x+1}$: $1=Ax(x+1)+B(x+1)+Cx^2$
$x=0$: $B=1$; $x=-1$: $C=1$; $x^2$: $0=A+C\\Rightarrow A=-1$.
Stammfunktion: $F(x)=-\\ln|x|-\\frac1x+\\ln|x+1|=\\ln\\frac{x+1}{x}-\\frac1x$` },
        { titel: "Grenzwert", text: `$$\\lim_{b\\to\\infty}\\Big[\\ln\\frac{x+1}x-\\frac1x\\Big]_1^b=(\\ln1-0)-(\\ln2-1)=1-\\ln(2)\\approx 0{,}307$$
**Konvergent.**` },
      ],
      ergebnis: `$1-\\ln 2$, konvergent`,
    },
    {
      id: "t1-a13c",
      typ: "Rechentechnik",
      titel: "Uneigentliche Integrale (c)",
      quelle: "Übungsblatt 3, Aufgabe 3c",
      schwierigkeit: 2,
      video: "Bsp09–Bsp11 (Uneigentliche Integrale)",
      aufgabe: `Berechnen Sie das folgende uneigentliche Integral:
$$\\int_{-1}^{1}\\frac{3}{x^2}e^{3/x}dx$$`,
      hinweis: `Polstelle bei $x=0$ liegt im Inneren des Intervalls ⟹ aufteilen!`,
      schritte: [
        { titel: "Lösung", text: `Stammfunktion: $t=\\frac3x$ ⟹ $\\int\\frac3{x^2}e^{3/x}dx=-e^{3/x}+C$.
Polstelle bei $x=0$ **im Inneren** ⟹ aufteilen in $\\int_{-1}^0+\\int_0^1$.
Rechter Teil: $\\lim_{\\varepsilon\\to0^+}\\big[-e^{3/x}\\big]_\\varepsilon^1=-e^3+\\lim_{\\varepsilon\\to0^+}e^{3/\\varepsilon}=+\\infty$
**Divergent** (gegen $\\infty$) – der linke Teil kann das nicht mehr retten.` },
      ],
      ergebnis: `divergent ($\\infty$)`,
    },
    {
      id: "t1-a14a",
      typ: "Rechentechnik",
      titel: "Uneigentliche Integrale (selbständig) (a)",
      quelle: "Übungsblatt 3, Aufgabe 5a",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_0^\\infty xe^{-x^2}dx$$`,
      hinweis: `Stammfunktion: $-\\frac12e^{-x^2}$.`,
      schritte: [
        { titel: "Lösung", text: `$$\\lim_{b\\to\\infty}\\Big[-\\frac12e^{-x^2}\\Big]_0^b=0+\\frac12=\\frac12 \\quad\\textbf{konvergent}$$` },
      ],
      ergebnis: `$\\frac12$, konvergent`,
    },
    {
      id: "t1-a14b",
      typ: "Rechentechnik",
      titel: "Uneigentliche Integrale (selbständig) (b)",
      quelle: "Übungsblatt 3, Aufgabe 5b",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_{-\\infty}^\\infty xe^{-x^2}dx$$`,
      hinweis: `Stammfunktion: $-\\frac12e^{-x^2}$. Beide Grenzwerte ($-\\infty$ und $+\\infty$) müssen einzeln existieren.`,
      schritte: [
        { titel: "Lösung", text: `Beide Hälften konvergieren: $\\int_{-\\infty}^0=-\\frac12$, $\\int_0^\\infty=\\frac12$.
$$\\int_{-\\infty}^\\infty xe^{-x^2}dx=0 \\quad\\textbf{konvergent}$$` },
      ],
      ergebnis: `$0$, konvergent`,
    },
    {
      id: "t1-a14c",
      typ: "Rechentechnik",
      titel: "Uneigentliche Integrale (selbständig) (c)",
      quelle: "Übungsblatt 3, Aufgabe 5c",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_1^3\\frac{2x}{\\sqrt{9-x^2}}dx$$`,
      hinweis: `Stammfunktion: $-2\\sqrt{9-x^2}$. Polstelle (Wurzel wird 0) bei $x=3$.`,
      schritte: [
        { titel: "Lösung", text: `Polstelle bei $x=3$ (Wurzel wird 0):
$$\\lim_{b\\to3^-}\\big[-2\\sqrt{9-x^2}\\big]_1^b=0+2\\sqrt8=4\\sqrt2 \\quad\\textbf{konvergent}$$` },
      ],
      ergebnis: `$4\\sqrt2$, konvergent`,
    },
    {
      id: "t1-a14d",
      typ: "Rechentechnik",
      titel: "Uneigentliche Integrale (selbständig) (d)",
      quelle: "Übungsblatt 3, Aufgabe 5d",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_0^1\\frac{dx}{x\\ln x}$$`,
      hinweis: `Stammfunktion: $\\ln|\\ln x|$. Was passiert bei $x\\to1^-$?`,
      schritte: [
        { titel: "Lösung", text: `Stammfunktion $\\ln|\\ln x|$. Bei $x\\to1^-$: $|\\ln x|\\to0^+$ ⟹ $\\ln|\\ln x|\\to-\\infty$.
**Divergent.**` },
      ],
      ergebnis: `divergent`,
    },
    {
      id: "t1-a14e",
      typ: "Rechentechnik",
      titel: "Uneigentliche Integrale (selbständig) (e)",
      quelle: "Übungsblatt 3, Aufgabe 5e",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_0^3\\frac{dx}{x-1}$$`,
      hinweis: `Stammfunktion: $\\ln|x-1|$. Polstelle $x=1$ liegt im Inneren ⟹ aufteilen!`,
      schritte: [
        { titel: "Lösung", text: `Polstelle $x=1$ innen, aufteilen: $\\int_0^1\\frac{dx}{x-1}=\\lim_{b\\to1^-}\\ln|x-1|\\Big|_0^b=-\\infty$
**Divergent.** (Achtung: "links $-\\infty$, rechts $+\\infty$ hebt sich" gilt NICHT – beide Teile müssen einzeln konvergieren.)` },
      ],
      ergebnis: `divergent`,
    },
    {
      id: "t1-a14f",
      typ: "Rechentechnik",
      titel: "Uneigentliche Integrale (selbständig) (f)",
      quelle: "Übungsblatt 3, Aufgabe 5f",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\int_0^3\\frac{dx}{(x-1)^2}$$`,
      hinweis: `Stammfunktion: $-\\frac1{x-1}$. Polstelle $x=1$ liegt im Inneren ⟹ aufteilen!`,
      schritte: [
        { titel: "Lösung", text: `$\\int_0^1\\frac{dx}{(x-1)^2}=\\lim_{b\\to1^-}\\Big[-\\frac1{x-1}\\Big]_0^b=+\\infty$
**Divergent** (gegen $+\\infty$).` },
      ],
      ergebnis: `divergent ($+\\infty$)`,
    },
    {
      id: "t1-a15a",
      typ: "Anwendung",
      titel: "Bogenlängen (a)",
      quelle: "Übungsblatt 4, Aufgabe 1a",
      schwierigkeit: 3,
      aufgabe: `Berechnen Sie die Bogenlänge des Graphen von $f_1(x)=\\sqrt{x^3}$ auf $[0,5]$
($s=\\int_a^b\\sqrt{1+(f'(x))^2}\\,dx$).`,
      hinweis: `Ziel ist immer, $1+(f')^2$ zu einem vollständigen Quadrat zu machen (binomische Formeln!), damit die Wurzel verschwindet.`,
      schritte: [
        { titel: "Lösung", text: `$f_1=x^{3/2}$, $f_1'=\\frac32x^{1/2}$, $1+(f_1')^2=1+\\frac94x$:
$$s=\\int_0^5\\sqrt{1+\\tfrac94x}\\,dx=\\Big[\\frac{8}{27}\\big(1+\\tfrac94x\\big)^{3/2}\\Big]_0^5=\\frac8{27}\\Big(\\big(\\tfrac{49}4\\big)^{3/2}-1\\Big)=\\frac8{27}\\Big(\\frac{343}8-1\\Big)=\\frac{335}{27}$$` },
      ],
      ergebnis: `$\\frac{335}{27}$`,
    },
    {
      id: "t1-a15b",
      typ: "Anwendung",
      titel: "Bogenlängen (b)",
      quelle: "Übungsblatt 4, Aufgabe 1b",
      schwierigkeit: 3,
      aufgabe: `Berechnen Sie die Bogenlänge des Graphen von $f_2(x)=\\frac12(e^x+e^{-x})$ auf $[-1,1]$
($s=\\int_a^b\\sqrt{1+(f'(x))^2}\\,dx$).`,
      hinweis: `Ziel ist immer, $1+(f')^2$ zu einem vollständigen Quadrat zu machen (binomische Formeln!), damit die Wurzel verschwindet.`,
      schritte: [
        { titel: "Lösung", text: `$f_2'=\\frac12(e^x-e^{-x})$. Mit binomischen Formeln:
$$1+(f_2')^2=1+\\tfrac14(e^{2x}-2+e^{-2x})=\\tfrac14(e^{2x}+2+e^{-2x})=\\Big(\\tfrac{e^x+e^{-x}}2\\Big)^2$$
$$s=\\int_{-1}^1\\frac{e^x+e^{-x}}2dx=\\Big[\\frac{e^x-e^{-x}}2\\Big]_{-1}^1=e-e^{-1}$$` },
      ],
      ergebnis: `$e-e^{-1}$`,
    },
    {
      id: "t1-a15c",
      typ: "Anwendung",
      titel: "Bogenlängen (c)",
      quelle: "Übungsblatt 4, Aufgabe 1c",
      schwierigkeit: 3,
      aufgabe: `Berechnen Sie die Bogenlänge des Graphen von $f_3(x)=\\ln(x^2-1)$ auf $[2,3]$
($s=\\int_a^b\\sqrt{1+(f'(x))^2}\\,dx$).`,
      hinweis: `Ziel ist immer, $1+(f')^2$ zu einem vollständigen Quadrat zu machen (binomische Formeln!), damit die Wurzel verschwindet.`,
      schritte: [
        { titel: "Lösung", text: `$f_3'=\\frac{2x}{x^2-1}$:
$$1+(f_3')^2=\\frac{(x^2-1)^2+4x^2}{(x^2-1)^2}=\\frac{(x^2+1)^2}{(x^2-1)^2}$$
$$s=\\int_2^3\\frac{x^2+1}{x^2-1}dx=\\int_2^3\\Big(1+\\frac1{x-1}-\\frac1{x+1}\\Big)dx=\\Big[x+\\ln\\frac{x-1}{x+1}\\Big]_2^3=1+\\ln\\frac{3}{2}$$` },
      ],
      ergebnis: `$1+\\ln\\frac32$`,
    },
    {
      id: "t1-a16",
      typ: "Anwendung",
      titel: "Zykloide – Bogenlänge parametrisch",
      quelle: "Übungsblatt 4, Aufgabe 2",
      schwierigkeit: 3,
      aufgabe: `Ein Nocken erzeugt eine Hubbewegung; die Kontaktbahn ist die Zykloide
$$x(t)=a(t-\\sin t),\\quad y(t)=a(1-\\cos t),\\quad a=2\\,\\text{cm}$$
Bestimmen Sie die Kurvenlänge für $t\\in[0,2\\pi]$ mit $s=\\int_{t_1}^{t_2}\\sqrt{(x'(t))^2+(y'(t))^2}\\,dt$.`,
      hinweis: `$\\sin^2+\\cos^2=1$ und die Halbwinkelformel $1-\\cos t=2\\sin^2(\\frac t2)$ benutzen.`,
      schritte: [
        { titel: "Ableitungen", text: `$x'(t)=a(1-\\cos t)$, $y'(t)=a\\sin t$
$$(x')^2+(y')^2=a^2\\big((1-\\cos t)^2+\\sin^2t\\big)=a^2(1-2\\cos t+\\underbrace{\\cos^2t+\\sin^2t}_{=1})=2a^2(1-\\cos t)$$` },
        { titel: "Halbwinkelformel", text: `$1-\\cos t=2\\sin^2(\\frac t2)$:
$$\\sqrt{(x')^2+(y')^2}=\\sqrt{4a^2\\sin^2(\\tfrac t2)}=2a\\,\\big|\\sin(\\tfrac t2)\\big|=2a\\sin(\\tfrac t2)\\ \\text{für } t\\in[0,2\\pi]$$
(auf $[0,2\\pi]$ ist $\\frac t2\\in[0,\\pi]$, also $\\sin\\geq0$)` },
        { titel: "Integrieren", text: `$$s=\\int_0^{2\\pi}2a\\sin(\\tfrac t2)\\,dt=2a\\big[-2\\cos(\\tfrac t2)\\big]_0^{2\\pi}=2a(2+2)=8a$$
Mit $a=2$ cm: $s=16$ cm.` },
      ],
      ergebnis: `$s=8a=16\\,$cm`,
    },
    {
      id: "t1-a17a",
      typ: "Anwendung",
      titel: "Rotationskörper: Diffusor – Volumen",
      quelle: "Übungsblatt 4, Aufgabe 4a",
      schwierigkeit: 3,
      aufgabe: `Der Innenradius eines rotationssymmetrischen Diffusors ist $y=\\sqrt{e^x+1}$ für $x\\in[\\ln 2,\\ln 8]$ (in dm).
Berechnen Sie das **Volumen** der Innenwand: $V_x=\\pi\\int_a^b y^2\\,dx$.`,
      hinweis: `$y^2=e^x+1$ – direkt integrieren.`,
      schritte: [
        { titel: "Lösung", text: `$y^2=e^x+1$:
$$V_x=\\pi\\int_{\\ln2}^{\\ln8}(e^x+1)dx=\\pi\\big[e^x+x\\big]_{\\ln2}^{\\ln8}=\\pi\\big(8+\\ln8-2-\\ln2\\big)=\\pi\\big(6+\\ln 4\\big)\\ [\\text{dm}^3]$$` },
      ],
      ergebnis: `$V_x=\\pi(6+\\ln 4)\\,$dm³ $\\approx 23{,}2\\,$dm³`,
    },
    {
      id: "t1-a17b",
      typ: "Anwendung",
      titel: "Rotationskörper: Diffusor – Mantelfläche",
      quelle: "Übungsblatt 4, Aufgabe 4b",
      schwierigkeit: 3,
      aufgabe: `Der Innenradius eines rotationssymmetrischen Diffusors ist $y=\\sqrt{e^x+1}$ für $x\\in[\\ln 2,\\ln 8]$ (in dm).
Berechnen Sie die **Mantelfläche** der Innenwand: $M_x=2\\pi\\int_a^b y\\sqrt{1+(y')^2}\\,dx$.`,
      hinweis: `$y\\sqrt{1+(y')^2}$ unter EINE Wurzel ziehen – es entsteht ein vollständiges Quadrat $(e^x+2)^2$.`,
      schritte: [
        { titel: "Wurzel vereinfachen", text: `$y'=\\dfrac{e^x}{2\\sqrt{e^x+1}}$ ⟹ $1+(y')^2=1+\\dfrac{e^{2x}}{4(e^x+1)}$
$$y\\sqrt{1+(y')^2}=\\sqrt{(e^x+1)+\\frac{e^{2x}}4}=\\frac12\\sqrt{e^{2x}+4e^x+4}=\\frac{e^x+2}2$$` },
        { titel: "Integrieren", text: `$$M_x=2\\pi\\int_{\\ln2}^{\\ln8}\\frac{e^x+2}2dx=\\pi\\big[e^x+2x\\big]_{\\ln2}^{\\ln8}=\\pi\\big(8+2\\ln8-2-2\\ln2\\big)=\\pi\\big(6+\\ln 16\\big)\\ [\\text{dm}^2]$$` },
      ],
      ergebnis: `$M_x=\\pi(6+\\ln 16)\\,$dm² $\\approx 27{,}6\\,$dm²`,
    },
    {
      id: "t1-a18a",
      typ: "Anwendung",
      titel: "Unendlicher Rotationskörper (selbständig) – Volumen",
      quelle: "Übungsblatt 4, Aufgabe 7a",
      schwierigkeit: 3,
      aufgabe: `Der Rotationskörper $K$ entsteht durch Rotation von $y=e^{-x}$, $x\\in[0,\\infty)$, um die $x$-Achse.
Berechnen Sie das **Volumen** $V_x$.`,
      hinweis: `Einfaches uneigentliches Integral $V_x=\\pi\\int_0^\\infty y^2\\,dx$.`,
      schritte: [
        { titel: "Lösung", text: `$$V_x=\\pi\\int_0^\\infty e^{-2x}dx=\\pi\\lim_{b\\to\\infty}\\Big[-\\frac12e^{-2x}\\Big]_0^b=\\pi\\cdot\\frac12=\\frac{\\pi}{2}$$` },
      ],
      ergebnis: `$V_x=\\frac\\pi2$`,
    },
    {
      id: "t1-a18b",
      typ: "Anwendung",
      titel: "Unendlicher Rotationskörper (selbständig) – Mantelfläche",
      quelle: "Übungsblatt 4, Aufgabe 7b",
      schwierigkeit: 3,
      aufgabe: `Der Rotationskörper $K$ entsteht durch Rotation von $y=e^{-x}$, $x\\in[0,\\infty)$, um die $x$-Achse.
Berechnen Sie die **Mantelfläche** $M_x$.
Hilfe: $\\int\\sqrt{1+x^2}\\,dx=\\frac12\\big(x\\sqrt{1+x^2}+\\ln|2x+2\\sqrt{1+x^2}|\\big)+c$`,
      hinweis: `Substitution $u=e^{-x}$ führt auf $\\int_0^1\\sqrt{1+u^2}\\,du$ – dafür ist die gegebene Hilfsformel gedacht.`,
      schritte: [
        { titel: "Substitution", text: `$M_x=2\\pi\\int_0^\\infty e^{-x}\\sqrt{1+e^{-2x}}\\,dx$. Mit $u=e^{-x}$, $du=-e^{-x}dx$; Grenzen $x:0\\to\\infty$ ⟹ $u:1\\to0$:
$$M_x=2\\pi\\int_0^1\\sqrt{1+u^2}\\,du$$` },
        { titel: "Auswerten", text: `Mit der gegebenen Stammfunktion:
$$\\int_0^1\\sqrt{1+u^2}du=\\frac12\\Big(\\sqrt2+\\ln(2+2\\sqrt2)-\\ln2\\Big)=\\frac12\\big(\\sqrt2+\\ln(1+\\sqrt2)\\big)$$
$$M_x=\\pi\\big(\\sqrt2+\\ln(1+\\sqrt2)\\big)\\approx 7{,}21$$` },
      ],
      ergebnis: `$M_x=\\pi(\\sqrt2+\\ln(1+\\sqrt2))\\approx 7{,}21$
Bemerkenswert: endliches Volumen und endliche Mantelfläche trotz unendlicher Länge!`,
    },
  ],
  karten: [
    { id: "t1-k01", vorne: `**Strategie:** Du sollst ein unbestimmtes Integral lösen. In welcher **Reihenfolge** prüfst du die Methoden?`, hinten: `1. **Umformen/Vereinfachen** (Bruch aufteilen, Wurzeln als Potenzen, ausmultiplizieren)
2. **Grundintegral** oder **lineare Substitution** $f(ax+b)$?
3. Steht die **innere Ableitung als Faktor** da → **Substitution**
4. **Produkt** (Polynom·$e^x$/$\\sin$/$\\ln$) → **partielle Integration**
5. **Gebrochenrational** → **Partialbruchzerlegung**` },
    { id: "t1-k02", vorne: `Woran **erkennst** du, dass **Substitution** der richtige Weg ist?`, hinten: `Im Integranden steckt eine **innere Funktion** $g(x)$, deren **Ableitung $g'(x)$** (bis auf einen konstanten Faktor) als Faktor mit dabei ist.
Beispiel: $\\int x^2 e^{x^3+5}\\,dx$ — die Ableitung von $x^3+5$ ist $3x^2$, steht (bis auf Faktor) da. Setze $t=x^3+5$.` },
    { id: "t1-k03", vorne: `**Partielle Integration:** Wie wählst du $u$ und $v'$? Und welche **zwei Sondertricks** musst du kennen?`, hinten: `$u$ = der Teil, der beim **Ableiten einfacher** wird (Polynom, $\\ln x$, $\\arctan x$); $v'$ = leicht integrierbar.
**Trick 1:** $\\int\\ln x\\,dx$ — kein Produkt? Nimm $u=\\ln x,\\ v'=1$.
**Trick 2:** $\\int e^x\\sin x\\,dx$ — zweimal partiell, dann nach dem Integral **auflösen** (es kommt im Kreis zurück).` },
    { id: "t1-k04", vorne: `Woran erkennst du sofort, dass ein Integral einen **Logarithmus** ergibt?`, hinten: `Der **Zähler ist die Ableitung des Nenners** (oder ein Vielfaches davon):
$$\\int\\frac{f'(x)}{f(x)}\\,dx=\\ln|f(x)|+c$$
Beispiel: $\\int\\frac{2x}{x^2+4}dx=\\ln(x^2+4)+c$. **Betragsstriche** nicht vergessen.` },
    { id: "t1-k05", vorne: `**Partialbruchzerlegung:** Was prüfst du **zuerst**, und welcher **Ansatz** gehört zu welchem Nennerfaktor?`, hinten: `Zuerst: **echt gebrochenrational** (Zählergrad < Nennergrad)? Wenn nein → erst **Polynomdivision**.
Dann je Faktor: $(x-a)^k$ → $\\frac{A_1}{x-a}+\\dots+\\frac{A_k}{(x-a)^k}$;
nicht faktorisierbares $x^2+px+q$ → $\\frac{Bx+C}{x^2+px+q}$ (linearer Zähler!).` },
    { id: "t1-k06", vorne: `Was sagt der **Hauptsatz** anschaulich, und worauf achtest du beim **Substituieren bestimmter** Integrale?`, hinten: `Hauptsatz: $\\int_a^b f\\,dx=F(b)-F(a)$ für **irgendeine** Stammfunktion ($c$ fällt weg) — er verbindet Fläche und Stammfunktion.
Bei Substitution: **Grenzen mitsubstituieren** (dann keine Rücksubstitution) — oder mit den **alten** Grenzen nach Rücksubstitution. Nicht mischen!` },
    { id: "t1-k07", vorne: `Wann brauchst du **numerische** Integration, und was unterscheidet **Trapez-** von **Simpson-Regel**?`, hinten: `Wenn es **keine elementare Stammfunktion** gibt (z.B. $e^{x^2}$) oder nur **Messwerte** vorliegen.
**Trapez:** Stützstellen durch **Geraden** verbinden. **Simpson:** durch **Parabeln** → **genauer**, braucht aber eine **gerade** Anzahl Teilintervalle.` },
    { id: "t1-k08", vorne: `Woran erkennst du ein **uneigentliches** Integral, und wann **konvergiert** es?`, hinten: `Erkennen: (1) eine Grenze ist **$\\pm\\infty$**, oder (2) der Integrand hat eine **Polstelle** im Bereich. Dann nicht einfach einsetzen, sondern als **Grenzwert** rechnen.
**Konvergent**, wenn dieser Grenzwert **existiert und endlich** ist — sonst divergent.` },
    { id: "t1-k09", vorne: `Eine **Polstelle liegt mitten** im Integrationsintervall. Wie gehst du vor — und welcher Fehler droht?`, hinten: `Am Pol $p$ **aufteilen**: $\\int_a^b=\\int_a^p+\\int_p^b$, jeden Teil als Grenzwert.
**Falle:** **beide** Teile müssen **einzeln** konvergieren. $+\\infty$ und $-\\infty$ heben sich **nicht** auf — durchintegrieren über den Pol ist falsch.` },
    { id: "t1-k10", vorne: `**Anwendungen:** Was ist der Trick bei der **Bogenlänge**, und wie unterscheiden sich **Volumen** und **Mantelfläche** (Rotation um $x$)?`, hinten: `Bogenlänge $s=\\int\\sqrt{1+(f')^2}\\,dx$ — Trick: $1+(f')^2$ wird fast immer ein **vollständiges Quadrat** (binomische Formeln), dann verschwindet die Wurzel.
$V_x=\\pi\\int f^2\\,dx$ (nur Funktion²). $M_x=2\\pi\\int f\\sqrt{1+(f')^2}\\,dx$ — Mantel braucht zusätzlich den **Bogenlängenfaktor**.` },
  ],
});
