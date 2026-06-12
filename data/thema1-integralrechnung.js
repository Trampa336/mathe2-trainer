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
    { titel: "Integrationsmethoden", intro: `Der Werkzeugkasten, aufeinander aufbauend: erst die **Grundintegrale** und Potenzregeln (alles andere wird darauf zurückgeführt), dann **lineare** und **allgemeine Substitution** (innere Funktion erkennen!), dann **partielle Integration** (für Produkte). Der Methoden-Mix am Ende trainiert das Entscheiden ohne Vorgabe – genau das passiert in der Klausur.`, aufgaben: ["t1-a01","t1-a02","t1-a03","t1-a04","t1-a05"] },
    { titel: "Partialbruchzerlegung (PBZ)", intro: `Spezialmethode für **gebrochenrationale** Integranden $\\frac{p(x)}{q(x)}$. Immer dasselbe Schema: echt gebrochen? (sonst Polynomdivision) → Nenner faktorisieren → Ansatz → Koeffizienten bestimmen → Partialbrüche einzeln integrieren ($\\ln$, $\\frac{1}{(x-a)^k}$, $\\arctan$).`, aufgaben: ["t1-a06","t1-a07","t1-a08"] },
    { titel: "Bestimmte, numerische & uneigentliche Integrale", intro: `Mit dem **Hauptsatz** werden aus Stammfunktionen Zahlen: $\\int_a^b f\\,dx=F(b)-F(a)$. Existiert keine elementare Stammfunktion (z.B. $e^{x^2}$), nähert man **numerisch** (Trapez-/Simpson-Regel). Bei unendlichen Grenzen oder Polstellen wird das Integral als **Grenzwert** definiert – die zentrale Frage ist dann: konvergent oder divergent?`, aufgaben: ["t1-a09","t1-a10","t1-a11","t1-a12","t1-a13","t1-a14"] },
    { titel: "Geometrische Anwendungen", intro: `Hier zahlt sich alles aus: **Bogenlänge** $\\int\\sqrt{1+(f')^2}\\,dx$ (Trick: die Wurzel wird fast immer ein vollständiges Quadrat) und **Rotationskörper** ($V_x=\\pi\\int f^2dx$, $M_x=2\\pi\\int f\\sqrt{1+(f')^2}\\,dx$). Typische anwendungsnahe Klausuraufgaben mit Technik-Kontext.`, aufgaben: ["t1-a15","t1-a16","t1-a17","t1-a18"] },
  ],
  aufgaben: [
    {
      id: "t1-a01",
      typ: "Rechentechnik",
      titel: "Grundintegrale & Potenzregeln",
      quelle: "Übungsblatt 1, Aufgabe 1",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie die folgenden unbestimmten Integrale:
$$\\text{(a)}\\ \\int\\Big(x^2+2x+\\tfrac1x\\Big)\\,dx \\qquad \\text{(b)}\\ \\int\\frac{10x^5-1}{x^2}\\,dx \\qquad \\text{(c)}\\ \\int\\Big(\\tfrac{1}{\\sqrt{x}}-\\tfrac{1}{\\sqrt[3]{x^2}}\\Big)\\,dx$$
$$\\text{(d)}\\ \\int\\frac{x-4}{\\sqrt[3]{x^4}}\\,dx \\qquad \\text{(e)}\\ \\int\\frac{2e^{2x}+e^{x+2}+3e^x}{e^x}\\,dx \\qquad \\text{(f)}\\ \\int\\big(-4\\cos(x)+3\\sin(x)\\big)\\,dx$$`,
      hinweis: `Brüche zuerst aufteilen ($\\frac{a\\pm b}{c}=\\frac ac\\pm\\frac bc$) und Wurzeln als Potenzen schreiben ($\\sqrt[n]{x^m}=x^{m/n}$). Dann gilt immer $\\int x^\\alpha dx=\\frac{1}{\\alpha+1}x^{\\alpha+1}+c$ (für $\\alpha\\neq -1$).`,
      schritte: [
        { titel: "Teil (a)", text: `Summandenweise integrieren:
$$\\int x^2dx+\\int 2x\\,dx+\\int\\tfrac1x dx=\\frac{x^3}{3}+x^2+\\ln|x|+c$$` },
        { titel: "Teil (b)", text: `Bruch aufteilen: $\\frac{10x^5-1}{x^2}=10x^3-x^{-2}$.
$$\\int(10x^3-x^{-2})dx=\\frac{10}{4}x^4+x^{-1}+c=\\frac52 x^4+\\frac1x+c$$` },
        { titel: "Teil (c)", text: `Als Potenzen: $x^{-1/2}-x^{-2/3}$.
$$\\int x^{-1/2}dx-\\int x^{-2/3}dx=2x^{1/2}-3x^{1/3}+c=2\\sqrt{x}-3\\sqrt[3]{x}+c$$` },
        { titel: "Teil (d)", text: `$\\frac{x-4}{x^{4/3}}=x^{-1/3}-4x^{-4/3}$.
$$\\int\\big(x^{-1/3}-4x^{-4/3}\\big)dx=\\frac32 x^{2/3}+12\\,x^{-1/3}+c=\\frac32\\sqrt[3]{x^2}+\\frac{12}{\\sqrt[3]{x}}+c$$` },
        { titel: "Teil (e)", text: `Durch $e^x$ kürzen: $\\frac{2e^{2x}+e^{x+2}+3e^x}{e^x}=2e^x+e^2+3$ (beachte $e^{x+2}=e^x\\cdot e^2$).
$$\\int(2e^x+e^2+3)dx=2e^x+(e^2+3)\\,x+c$$` },
        { titel: "Teil (f)", text: `$$\\int(-4\\cos x+3\\sin x)dx=-4\\sin(x)-3\\cos(x)+c$$
(denn $\\int\\cos=\\sin$, $\\int\\sin=-\\cos$)` },
      ],
      ergebnis: `(a) $\\frac{x^3}{3}+x^2+\\ln|x|+c$ · (b) $\\frac52x^4+\\frac1x+c$ · (c) $2\\sqrt x-3\\sqrt[3]x+c$ · (d) $\\frac32x^{2/3}+12x^{-1/3}+c$ · (e) $2e^x+(e^2+3)x+c$ · (f) $-4\\sin x-3\\cos x+c$`,
    },
    {
      id: "t1-a02",
      typ: "Rechentechnik",
      titel: "Lineare Substitution",
      quelle: "Übungsblatt 1, Aufgabe 2",
      schwierigkeit: 1,
      aufgabe: `Lösen Sie mittels linearer Substitution ($\\int f(ax+b)\\,dx=\\tfrac1a F(ax+b)+c$):
$$\\text{(a)}\\ \\int e^{-x}dx \\qquad \\text{(b)}\\ \\int\\sin(2x+7)\\,dx \\qquad \\text{(c)}\\ \\int\\frac{1}{3x-9}\\,dx$$
$$\\text{(d)}\\ \\int(-4x+10)^9dx \\qquad \\text{(e)}\\ \\int\\frac{1}{\\sqrt{-x+6}}\\,dx \\qquad \\text{(f)}\\ \\int\\cos\\Big(\\frac x3\\Big)dx$$`,
      hinweis: `Stammfunktion der äußeren Funktion bilden, inneres Argument unverändert lassen, durch die innere Ableitung $a$ teilen.`,
      schritte: [
        { titel: "Teil (a)", text: `$a=-1$: $\\int e^{-x}dx=\\frac{1}{-1}e^{-x}+c=-e^{-x}+c$` },
        { titel: "Teil (b)", text: `$a=2$, $\\int\\sin=-\\cos$: $\\int\\sin(2x+7)dx=-\\frac12\\cos(2x+7)+c$` },
        { titel: "Teil (c)", text: `$a=3$, $\\int\\frac1x=\\ln|x|$: $\\int\\frac{dx}{3x-9}=\\frac13\\ln|3x-9|+c$` },
        { titel: "Teil (d)", text: `$a=-4$, Potenzregel: $\\int(-4x+10)^9dx=\\frac{1}{-4}\\cdot\\frac{(-4x+10)^{10}}{10}+c=-\\frac{1}{40}(-4x+10)^{10}+c$` },
        { titel: "Teil (e)", text: `$(-x+6)^{-1/2}$, $a=-1$: $\\int(-x+6)^{-1/2}dx=\\frac{1}{-1}\\cdot 2(-x+6)^{1/2}+c=-2\\sqrt{6-x}+c$` },
        { titel: "Teil (f)", text: `$a=\\frac13$: $\\int\\cos(\\tfrac x3)dx=3\\sin\\Big(\\frac x3\\Big)+c$` },
      ],
      ergebnis: `(a) $-e^{-x}+c$ · (b) $-\\frac12\\cos(2x+7)+c$ · (c) $\\frac13\\ln|3x-9|+c$ · (d) $-\\frac1{40}(-4x+10)^{10}+c$ · (e) $-2\\sqrt{6-x}+c$ · (f) $3\\sin(\\frac x3)+c$`,
    },
    {
      id: "t1-a03",
      typ: "Rechentechnik",
      titel: "Substitution",
      quelle: "Übungsblatt 1, Aufgabe 3",
      schwierigkeit: 2,
      video: "Bsp04–Bsp06 (Substitution)",
      aufgabe: `Lösen Sie mittels geeigneter Substitution:
$$\\text{(a)}\\ \\int x^2e^{x^3+5}dx \\qquad \\text{(b)}\\ \\int\\frac{3e^x}{(e^x+10)^4}dx \\qquad \\text{(c)}\\ \\int\\frac{\\cos x}{1+2\\sin x}dx$$
$$\\text{(d)}\\ \\int x\\sqrt{1-x^2}\\,dx \\qquad \\text{(e)}\\ \\int\\frac{\\ln^5(x)}{3x}dx \\qquad \\text{(f)}\\ \\int\\sin(x)\\cos(x)\\,dx$$`,
      hinweis: `Substituiere immer den "inneren" Term, dessen Ableitung (bis auf einen Faktor) als Faktor im Integranden steht: (a) $t=x^3+5$, (b) $t=e^x+10$, (c) $t=1+2\\sin x$, (d) $t=1-x^2$, (e) $t=\\ln x$, (f) $t=\\sin x$.`,
      schritte: [
        { titel: "Teil (a)", text: `$t=x^3+5$, $dt=3x^2dx \\Rightarrow x^2dx=\\frac{dt}{3}$:
$$\\int x^2e^{x^3+5}dx=\\frac13\\int e^t dt=\\frac13 e^{x^3+5}+c$$` },
        { titel: "Teil (b)", text: `$t=e^x+10$, $dt=e^x dx$:
$$3\\int t^{-4}dt=3\\cdot\\frac{t^{-3}}{-3}+c=-\\frac{1}{(e^x+10)^3}+c$$` },
        { titel: "Teil (c)", text: `$t=1+2\\sin x$, $dt=2\\cos x\\,dx$:
$$\\frac12\\int\\frac{dt}{t}=\\frac12\\ln|1+2\\sin x|+c$$` },
        { titel: "Teil (d)", text: `$t=1-x^2$, $dt=-2x\\,dx \\Rightarrow x\\,dx=-\\frac{dt}{2}$:
$$-\\frac12\\int\\sqrt t\\,dt=-\\frac12\\cdot\\frac23 t^{3/2}+c=-\\frac13(1-x^2)^{3/2}+c$$` },
        { titel: "Teil (e)", text: `$t=\\ln x$, $dt=\\frac{dx}{x}$:
$$\\frac13\\int t^5dt=\\frac13\\cdot\\frac{t^6}{6}+c=\\frac{1}{18}\\ln^6(x)+c$$` },
        { titel: "Teil (f)", text: `$t=\\sin x$, $dt=\\cos x\\,dx$:
$$\\int t\\,dt=\\frac{t^2}{2}+c=\\frac12\\sin^2(x)+c$$` },
      ],
      ergebnis: `(a) $\\frac13e^{x^3+5}+c$ · (b) $-\\frac{1}{(e^x+10)^3}+c$ · (c) $\\frac12\\ln|1+2\\sin x|+c$ · (d) $-\\frac13(1-x^2)^{3/2}+c$ · (e) $\\frac1{18}\\ln^6 x+c$ · (f) $\\frac12\\sin^2 x+c$`,
    },
    {
      id: "t1-a04",
      typ: "Rechentechnik",
      titel: "Partielle Integration",
      quelle: "Übungsblatt 1, Aufgabe 4",
      schwierigkeit: 2,
      video: "Bsp01–Bsp03 (Partielle Integration)",
      aufgabe: `Lösen Sie mittels partieller Integration ($\\int uv'\\,dx=uv-\\int u'v\\,dx$):
$$\\text{(a)}\\ \\int x\\cos(x)\\,dx \\qquad \\text{(b)}\\ \\int(x^2-1)e^x dx \\qquad \\text{(c)}\\ \\int\\sqrt x\\,\\ln(x)\\,dx$$
$$\\text{(d)}\\ \\int\\ln(x)\\,dx \\qquad \\text{(e)}\\ \\int\\sin(x)\\cos(x)\\,dx \\qquad \\text{(f)}\\ \\int e^x\\sin(x)\\,dx$$`,
      hinweis: `Wahl von $u$: was beim Ableiten einfacher wird (Polynome, $\\ln$). Bei (d): $\\ln(x)=1\\cdot\\ln(x)$ mit $v'=1$. Bei (f): zweimal partiell integrieren, dann nach dem Integral auflösen.`,
      schritte: [
        { titel: "Teil (a)", text: `$u=x$, $v'=\\cos x$ ⟹ $u'=1$, $v=\\sin x$:
$$\\int x\\cos x\\,dx=x\\sin x-\\int\\sin x\\,dx=x\\sin x+\\cos x+c$$` },
        { titel: "Teil (b)", text: `$u=x^2-1$, $v'=e^x$: $(x^2-1)e^x-\\int 2x e^x dx$.
Nochmal partiell ($u=2x$): $\\int 2xe^xdx=2xe^x-2e^x$.
$$\\Rightarrow (x^2-1)e^x-2xe^x+2e^x+c=(x^2-2x+1)e^x+c=(x-1)^2e^x+c$$` },
        { titel: "Teil (c)", text: `$u=\\ln x$, $v'=x^{1/2}$ ⟹ $v=\\frac23x^{3/2}$:
$$\\frac23x^{3/2}\\ln x-\\int\\frac23x^{3/2}\\cdot\\frac1x dx=\\frac23x^{3/2}\\ln x-\\frac23\\int x^{1/2}dx=\\frac23x^{3/2}\\ln(x)-\\frac49x^{3/2}+c$$` },
        { titel: "Teil (d)", text: `Trick: $u=\\ln x$, $v'=1$ ⟹ $v=x$:
$$\\int\\ln x\\,dx=x\\ln x-\\int x\\cdot\\frac1x dx=x\\ln(x)-x+c$$` },
        { titel: "Teil (e)", text: `$u=\\sin x$, $v'=\\cos x$: $\\int\\sin x\\cos x\\,dx=\\sin^2x-\\int\\sin x\\cos x\\,dx$.
Auflösen: $2\\int\\sin x\\cos x\\,dx=\\sin^2 x$ ⟹ $\\int\\sin x\\cos x\\,dx=\\frac12\\sin^2(x)+c$
(gleiches Ergebnis wie per Substitution!)` },
        { titel: "Teil (f)", text: `Zweimal partiell mit $u=e^x$:
$I=\\int e^x\\sin x\\,dx=-e^x\\cos x+\\int e^x\\cos x\\,dx=-e^x\\cos x+e^x\\sin x-I$
$$\\Rightarrow 2I=e^x(\\sin x-\\cos x) \\Rightarrow I=\\frac12e^x(\\sin x-\\cos x)+c$$` },
      ],
      ergebnis: `(a) $x\\sin x+\\cos x+c$ · (b) $(x-1)^2e^x+c$ · (c) $\\frac23x^{3/2}\\ln x-\\frac49x^{3/2}+c$ · (d) $x\\ln x-x+c$ · (e) $\\frac12\\sin^2x+c$ · (f) $\\frac12e^x(\\sin x-\\cos x)+c$`,
    },
    {
      id: "t1-a05",
      typ: "Rechentechnik",
      titel: "Methoden-Mix (selbständig)",
      quelle: "Übungsblatt 1, Aufgabe 5 (Auswahl)",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie mit geeigneter Methode:
$$\\text{(b)}\\ \\int\\frac{x^2-x-2}{4x}dx \\qquad \\text{(f)}\\ \\int x\\cos(x^2-1)\\,dx \\qquad \\text{(g)}\\ \\int\\cos^5(x)\\sin(x)\\,dx$$
$$\\text{(i)}\\ \\int\\frac{1}{x\\ln(x)}dx \\qquad \\text{(k)}\\ \\int\\sin(x)\\,e^{\\cos(x)}dx \\qquad \\text{(l)}\\ \\int e^{\\sqrt x}\\,dx$$`,
      hinweis: `Erst entscheiden: Vereinfachen? Substitution (steht die innere Ableitung als Faktor da)? Partielle Integration? Bei (l): $t=\\sqrt x$ substituieren, danach partiell integrieren.`,
      schritte: [
        { titel: "Teil (b) – Vereinfachen", text: `$\\frac{x^2-x-2}{4x}=\\frac x4-\\frac14-\\frac{1}{2x}$
$$\\int\\Big(\\frac x4-\\frac14-\\frac1{2x}\\Big)dx=\\frac{x^2}{8}-\\frac x4-\\frac12\\ln|x|+c$$` },
        { titel: "Teil (f) – Substitution", text: `$t=x^2-1$, $dt=2x\\,dx$:
$$\\frac12\\int\\cos t\\,dt=\\frac12\\sin(x^2-1)+c$$` },
        { titel: "Teil (g) – Regel ∫fⁿf′", text: `$f=\\cos x$, $f'=-\\sin x$: $\\int\\cos^5x\\sin x\\,dx=-\\int f^5f'dx$
$$=-\\frac{f^6}{6}+c=-\\frac{\\cos^6(x)}{6}+c$$` },
        { titel: "Teil (i) – Substitution", text: `$t=\\ln x$, $dt=\\frac{dx}x$:
$$\\int\\frac{dt}{t}=\\ln|t|+c=\\ln|\\ln(x)|+c$$` },
        { titel: "Teil (k) – Substitution", text: `$t=\\cos x$, $dt=-\\sin x\\,dx$:
$$-\\int e^tdt=-e^{\\cos(x)}+c$$` },
        { titel: "Teil (l) – Substitution + partiell", text: `$t=\\sqrt x$, $x=t^2$, $dx=2t\\,dt$:
$$\\int e^{\\sqrt x}dx=2\\int t\\,e^t dt=2e^t(t-1)+c=2e^{\\sqrt x}(\\sqrt x-1)+c$$
(dabei $\\int te^tdt=te^t-e^t$ partiell)` },
      ],
      ergebnis: `(b) $\\frac{x^2}8-\\frac x4-\\frac12\\ln|x|+c$ · (f) $\\frac12\\sin(x^2-1)+c$ · (g) $-\\frac{\\cos^6x}{6}+c$ · (i) $\\ln|\\ln x|+c$ · (k) $-e^{\\cos x}+c$ · (l) $2e^{\\sqrt x}(\\sqrt x-1)+c$`,
    },
    {
      id: "t1-a06",
      typ: "Rechentechnik",
      titel: "Partialbruchzerlegung – Grundtypen",
      quelle: "Übungsblatt 2, Aufgabe 1 (a)–(c)",
      schwierigkeit: 2,
      video: "Bsp07–Bsp08 (PBZ)",
      aufgabe: `Lösen Sie mittels Partialbruchzerlegung bzw. passender Grundintegrale:
$$\\text{(a)}\\ \\int\\frac{2x}{x^2+4}dx \\qquad \\text{(b)}\\ \\int\\frac{2}{x^2+4}dx \\qquad \\text{(c)}\\ \\int\\frac{2}{x^2+3x-4}dx$$`,
      hinweis: `(a) Zähler = Ableitung des Nenners ⟹ $\\ln$-Regel. (b) arctan-Grundintegral. (c) Nenner faktorisieren: $x^2+3x-4=(x+4)(x-1)$, dann PBZ.`,
      schritte: [
        { titel: "Teil (a) – ln-Regel", text: `Es gilt $(x^2+4)'=2x$, also $\\int\\frac{f'}{f}dx=\\ln|f|+c$:
$$\\int\\frac{2x}{x^2+4}dx=\\ln(x^2+4)+c$$
(Betrag unnötig, da $x^2+4>0$)` },
        { titel: "Teil (b) – arctan", text: `Grundintegral $\\int\\frac{dx}{x^2+a^2}=\\frac1a\\arctan\\frac xa+c$ mit $a=2$:
$$\\int\\frac{2}{x^2+4}dx=2\\cdot\\frac12\\arctan\\Big(\\frac x2\\Big)+c=\\arctan\\Big(\\frac x2\\Big)+c$$` },
        { titel: "Teil (c) – PBZ-Ansatz", text: `Nullstellen des Nenners: $x^2+3x-4=(x+4)(x-1)$.
Ansatz: $\\frac{2}{(x+4)(x-1)}=\\frac{A}{x+4}+\\frac{B}{x-1}$
Multiplizieren mit dem Nenner: $2=A(x-1)+B(x+4)$.
$x=1$: $2=5B\\Rightarrow B=\\frac25$. $\\quad x=-4$: $2=-5A\\Rightarrow A=-\\frac25$.` },
        { titel: "Teil (c) – Integrieren", text: `$$\\int\\frac{2\\,dx}{x^2+3x-4}=-\\frac25\\ln|x+4|+\\frac25\\ln|x-1|+c$$` },
      ],
      ergebnis: `(a) $\\ln(x^2+4)+c$ · (b) $\\arctan(\\frac x2)+c$ · (c) $\\frac25\\ln|x-1|-\\frac25\\ln|x+4|+c$`,
    },
    {
      id: "t1-a07",
      typ: "Rechentechnik",
      titel: "PBZ mit Polynomdivision & mehrfachen Faktoren",
      quelle: "Übungsblatt 2, Aufgabe 1 (d)–(f)",
      schwierigkeit: 3,
      aufgabe: `Lösen Sie mittels Partialbruchzerlegung:
$$\\text{(d)}\\ \\int\\frac{x^4}{x^2-4x+4}dx \\qquad \\text{(e)}\\ \\int\\frac{9x-27}{(x+2)^2(x-1)}dx \\qquad \\text{(f)}\\ \\int\\frac{x^3+6x+20}{x^4+2x^2}dx$$`,
      hinweis: `(d) Zählergrad ≥ Nennergrad ⟹ erst Polynomdivision! Nenner $=(x-2)^2$. (e) Doppelte Nullstelle: Ansatz $\\frac{A}{x+2}+\\frac{B}{(x+2)^2}+\\frac{C}{x-1}$. (f) $x^4+2x^2=x^2(x^2+2)$ ⟹ Ansatz $\\frac Ax+\\frac B{x^2}+\\frac{Cx+D}{x^2+2}$.`,
      schritte: [
        { titel: "Teil (d) – Polynomdivision", text: `$x^4:(x^2-4x+4)=x^2+4x+12+\\dfrac{32x-48}{(x-2)^2}$
PBZ: $\\frac{32x-48}{(x-2)^2}=\\frac{A}{x-2}+\\frac{B}{(x-2)^2}$ ⟹ $32x-48=A(x-2)+B$
⟹ $A=32$, $B=64-48=16$.` },
        { titel: "Teil (d) – Integrieren", text: `$$\\int=\\frac{x^3}{3}+2x^2+12x+32\\ln|x-2|-\\frac{16}{x-2}+c$$
(beachte $\\int\\frac{16}{(x-2)^2}dx=-\\frac{16}{x-2}$)` },
        { titel: "Teil (e) – Ansatz & Koeffizienten", text: `$\\frac{9x-27}{(x+2)^2(x-1)}=\\frac{A}{x+2}+\\frac{B}{(x+2)^2}+\\frac{C}{x-1}$
$9x-27=A(x+2)(x-1)+B(x-1)+C(x+2)^2$
$x=1$: $-18=9C\\Rightarrow C=-2$. $\\quad x=-2$: $-45=-3B\\Rightarrow B=15$.
Koeffizient von $x^2$: $0=A+C\\Rightarrow A=2$.` },
        { titel: "Teil (e) – Integrieren", text: `Mit $\\int\\frac{15}{(x+2)^2}dx=-\\frac{15}{x+2}$:
$$\\int=2\\ln|x+2|-\\frac{15}{x+2}-2\\ln|x-1|+c$$` },
        { titel: "Teil (f) – Ansatz & Koeffizienten", text: `$x^4+2x^2=x^2(x^2+2)$:
$\\frac{x^3+6x+20}{x^2(x^2+2)}=\\frac Ax+\\frac{B}{x^2}+\\frac{Cx+D}{x^2+2}$
$x^3+6x+20=Ax(x^2+2)+B(x^2+2)+(Cx+D)x^2$
Konstante: $20=2B\\Rightarrow B=10$. $x$: $6=2A\\Rightarrow A=3$.
$x^3$: $1=A+C\\Rightarrow C=-2$. $x^2$: $0=B+D\\Rightarrow D=-10$.` },
        { titel: "Teil (f) – Integrieren", text: `$$\\int\\frac3x dx=3\\ln|x|,\\quad \\int\\frac{10}{x^2}dx=-\\frac{10}x$$
$$\\int\\frac{-2x}{x^2+2}dx=-\\ln(x^2+2),\\quad \\int\\frac{-10}{x^2+2}dx=-\\frac{10}{\\sqrt2}\\arctan\\frac{x}{\\sqrt2}=-5\\sqrt2\\arctan\\frac{x}{\\sqrt2}$$
Gesamt: $3\\ln|x|-\\frac{10}x-\\ln(x^2+2)-5\\sqrt2\\arctan\\big(\\frac{x}{\\sqrt2}\\big)+c$
(Kontrolle durch Ableiten bestätigt dieses Ergebnis.)` },
      ],
      ergebnis: `(d) $\\frac{x^3}3+2x^2+12x+32\\ln|x-2|-\\frac{16}{x-2}+c$
(e) $2\\ln|x+2|-2\\ln|x-1|-\\frac{15}{x+2}+c$
(f) $3\\ln|x|-\\frac{10}x-\\ln(x^2+2)-5\\sqrt2\\arctan(\\frac x{\\sqrt2})+c$`,
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
      id: "t1-a09",
      typ: "Rechentechnik",
      titel: "Bestimmte Integrale",
      quelle: "Übungsblatt 2, Aufgabe 2",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\text{(a)}\\ \\int_0^1\\frac{dx}{1+x^2} \\qquad \\text{(b)}\\ \\int_0^{\\pi/3}\\tan(x)\\,dx \\qquad \\text{(c)}\\ \\int_9^{16}e^{\\sqrt x}\\,dx$$
$$\\text{(d)}\\ \\int_0^{\\ln 2}xe^{-x}dx \\qquad \\text{(e)}\\ \\int_0^1\\frac{4x^2}{\\sqrt[3]{5x^3+7}}dx \\qquad \\text{(f)}\\ \\int_1^e\\frac{8\\ln(x^2)}{x}dx$$`,
      hinweis: `Stammfunktion bestimmen, dann Hauptsatz: $\\int_a^b f\\,dx=F(b)-F(a)$. Bei Substitution: Grenzen mitsubstituieren!`,
      schritte: [
        { titel: "Teil (a)", text: `$$\\int_0^1\\frac{dx}{1+x^2}=\\big[\\arctan x\\big]_0^1=\\frac{\\pi}{4}-0=\\frac{\\pi}{4}$$` },
        { titel: "Teil (b)", text: `$\\int\\tan x\\,dx=-\\ln|\\cos x|$:
$$\\big[-\\ln|\\cos x|\\big]_0^{\\pi/3}=-\\ln\\tfrac12+\\ln 1=\\ln(2)$$` },
        { titel: "Teil (c)", text: `Aus Aufgabe "Methoden-Mix": $\\int e^{\\sqrt x}dx=2e^{\\sqrt x}(\\sqrt x-1)$.
$$\\big[2e^{\\sqrt x}(\\sqrt x-1)\\big]_9^{16}=2e^4\\cdot3-2e^3\\cdot2=6e^4-4e^3$$` },
        { titel: "Teil (d)", text: `Partiell: $\\int xe^{-x}dx=-xe^{-x}+\\int e^{-x}dx=-(x+1)e^{-x}$.
$$\\big[-(x+1)e^{-x}\\big]_0^{\\ln2}=-(\\ln2+1)\\cdot\\tfrac12+1=\\frac12-\\frac12\\ln(2)\\approx 0{,}1534$$` },
        { titel: "Teil (e)", text: `$t=5x^3+7$, $dt=15x^2dx$; Grenzen: $x{=}0\\to t{=}7$, $x{=}1\\to t{=}12$:
$$\\frac{4}{15}\\int_7^{12}t^{-1/3}dt=\\frac{4}{15}\\cdot\\frac32\\big[t^{2/3}\\big]_7^{12}=\\frac25\\Big(12^{2/3}-7^{2/3}\\Big)$$` },
        { titel: "Teil (f)", text: `$\\ln(x^2)=2\\ln x$ ⟹ Integrand $=\\frac{16\\ln x}{x}$, $t=\\ln x$:
$$16\\Big[\\frac{\\ln^2x}{2}\\Big]_1^e=8(1-0)=8$$
**Achtung:** Das Blatt nennt 4 – das passt zu $\\int_1^e\\frac{8\\ln(x)}{x}dx=4$. Mit $\\ln(x^2)$ wie gedruckt ist 8 korrekt (vermutlich Druckfehler im Blatt).` },
      ],
      ergebnis: `(a) $\\frac\\pi4$ · (b) $\\ln 2$ · (c) $6e^4-4e^3$ · (d) $\\frac12-\\frac12\\ln2$ · (e) $\\frac25(12^{2/3}-7^{2/3})$ · (f) $8$ (bzw. $4$, falls $\\ln(x)$ statt $\\ln(x^2)$ gemeint war)`,
    },
    {
      id: "t1-a10",
      typ: "Rechentechnik",
      titel: "Bestimmte Integrale (selbständig)",
      quelle: "Übungsblatt 2, Aufgabe 3 (Auswahl)",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\text{(a)}\\ \\int_1^{\\sqrt{19}}\\frac{x}{\\sqrt{4x^2+5}}dx \\qquad \\text{(b)}\\ \\int_0^{\\sqrt3}x\\arctan(x)\\,dx$$
$$\\text{(c)}\\ \\int_2^8\\frac{dt}{t^2+t} \\qquad \\text{(f)}\\ \\int_0^{1/2}\\frac{5x}{\\sqrt{1-x^2}}dx$$`,
      hinweis: `(a) $t=4x^2+5$. (b) partiell mit $u=\\arctan x$, dann $\\frac{x^2}{1+x^2}=1-\\frac{1}{1+x^2}$. (c) $t^2+t=t(t+1)$, PBZ. (f) $t=1-x^2$.`,
      schritte: [
        { titel: "Teil (a)", text: `$t=4x^2+5$, $dt=8x\\,dx$; Grenzen $t: 9\\to 81$:
$$\\frac18\\int_9^{81}t^{-1/2}dt=\\frac18\\big[2\\sqrt t\\big]_9^{81}=\\frac14(9-3)=\\frac32$$` },
        { titel: "Teil (b)", text: `Partiell, $u=\\arctan x$, $v'=x$:
$$\\Big[\\frac{x^2}2\\arctan x\\Big]_0^{\\sqrt3}-\\frac12\\int_0^{\\sqrt3}\\frac{x^2}{1+x^2}dx=\\frac32\\cdot\\frac\\pi3-\\frac12\\big[x-\\arctan x\\big]_0^{\\sqrt3}$$
$$=\\frac\\pi2-\\frac12\\Big(\\sqrt3-\\frac\\pi3\\Big)=\\frac{2\\pi}{3}-\\frac{\\sqrt3}{2}\\approx 1{,}228$$` },
        { titel: "Teil (c)", text: `$\\frac{1}{t(t+1)}=\\frac1t-\\frac1{t+1}$:
$$\\Big[\\ln\\frac{t}{t+1}\\Big]_2^8=\\ln\\frac89-\\ln\\frac23=\\ln\\Big(\\frac89\\cdot\\frac32\\Big)=\\ln\\frac43$$` },
        { titel: "Teil (f)", text: `$t=1-x^2$, $dt=-2x\\,dx$, oder direkt: Stammfunktion $-5\\sqrt{1-x^2}$:
$$\\big[-5\\sqrt{1-x^2}\\big]_0^{1/2}=-5\\cdot\\frac{\\sqrt3}2+5=5-\\frac{5\\sqrt3}{2}\\approx 0{,}670$$` },
      ],
      ergebnis: `(a) $\\frac32$ · (b) $\\frac{2\\pi}3-\\frac{\\sqrt3}2$ · (c) $\\ln\\frac43$ · (f) $5-\\frac{5\\sqrt3}2$`,
    },
    {
      id: "t1-a11",
      typ: "Rechentechnik",
      titel: "Numerische Integration",
      quelle: "Übungsblatt 3, Aufgabe 1",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie näherungsweise $I=\\displaystyle\\int_{-1/2}^{1/2}e^{x^2}dx$ mit
(a) der **Trapezregel** mit $n=10$ Teilintervallen,
(b) der **Simpson-Regel** mit $m=10$ Teilintervallen,
(c) dem **Taylorpolynom** 4. Grades um $x_0=0$.`,
      hinweis: `$h=\\frac{b-a}{n}=0{,}1$. Trapezregel: $I\\approx\\frac h2\\big(f(a)+f(b)+2\\sum f(\\text{innere Stützstellen})\\big)$. Taylor: $e^{x^2}\\approx 1+x^2+\\frac{x^4}{2}$.`,
      schritte: [
        { titel: "Stützstellen", text: `$a=-0{,}5$, $b=0{,}5$, $h=0{,}1$, Stützstellen $x_k=-0{,}5+k\\cdot 0{,}1$ für $k=0,\\dots,10$, Funktionswerte $f(x_k)=e^{x_k^2}$. Wegen Symmetrie gilt $f(-x)=f(x)$.` },
        { titel: "Teil (a) – Trapezregel", text: `$$T_{10}=\\frac{h}{2}\\Big(f(x_0)+f(x_{10})+2\\sum_{k=1}^{9}f(x_k)\\Big)\\approx 1{,}09211$$` },
        { titel: "Teil (b) – Simpson-Regel", text: `Ungerade Indizes mit Faktor 4, gerade innere mit Faktor 2:
$$S_{10}=\\frac h3\\Big(f(x_0)+f(x_{10})+4\\!\\!\\sum_{k\\,\\text{ungerade}}\\!\\!f(x_k)+2\\!\\!\\sum_{k\\,\\text{gerade innen}}\\!\\!f(x_k)\\Big)\\approx 1{,}08998$$` },
        { titel: "Teil (c) – Taylorpolynom", text: `$e^u\\approx 1+u+\\frac{u^2}2$ mit $u=x^2$: $\\;T_4(x)=1+x^2+\\frac{x^4}{2}$
$$\\int_{-1/2}^{1/2}T_4\\,dx=\\Big[x+\\frac{x^3}3+\\frac{x^5}{10}\\Big]_{-1/2}^{1/2}=2\\Big(\\frac12+\\frac1{24}+\\frac1{320}\\Big)\\approx 1{,}0896$$` },
      ],
      ergebnis: `(a) $T_{10}\\approx 1{,}09211$ · (b) $S_{10}\\approx 1{,}08998$ · (c) $\\approx 1{,}0896$
(Das Integral selbst ist nicht elementar lösbar – darum die Näherungen!)`,
    },
    {
      id: "t1-a12",
      typ: "Verständnis",
      titel: "Drei Wege zu einem Integral + Konvergenz",
      quelle: "Übungsblatt 3, Aufgabe 2",
      schwierigkeit: 2,
      aufgabe: `Gegeben sei $f(x)=\\dfrac{-6x^2-8}{x^3+4x}$.
**(a)** Bestimmen Sie $\\int f(x)\\,dx$ auf drei Wegen: (i) Substitution des Nenners, (ii) PBZ, (iii) Regel $\\int\\frac{f'}{f}dx=\\ln|f|+C$.
**(b)** Berechnen Sie $I=\\int_0^2 f(x)\\,dx$. Konvergent oder divergent?`,
      hinweis: `Der Zähler ist genau $-2\\cdot$(Ableitung des Nenners). Bei (b): Was passiert bei $x=0$?`,
      schritte: [
        { titel: "(a)(i) Substitution", text: `$t=x^3+4x$, $dt=(3x^2+4)dx$. Zähler: $-6x^2-8=-2(3x^2+4)$:
$$\\int\\frac{-2\\,dt}{t}=-2\\ln|t|+C=-2\\ln|x^3+4x|+C$$` },
        { titel: "(a)(ii) PBZ (Kontrolle)", text: `$\\frac{-6x^2-8}{x(x^2+4)}=\\frac Ax+\\frac{Bx+C}{x^2+4}$ ⟹ $-6x^2-8=A(x^2+4)+(Bx+C)x$
$x=0$: $A=-2$; $x^2$: $-6=A+B\\Rightarrow B=-4$; $x$: $C=0$.
$$\\int\\Big(\\frac{-2}x+\\frac{-4x}{x^2+4}\\Big)dx=-2\\ln|x|-2\\ln(x^2+4)+C=-2\\ln|x^3+4x|+C\\ \\checkmark$$` },
        { titel: "(a)(iii) ln-Regel", text: `$f(x)=-2\\cdot\\frac{(x^3+4x)'}{x^3+4x}$ ⟹ sofort $-2\\ln|x^3+4x|+C$.` },
        { titel: "(b) Uneigentliches Integral", text: `Bei $x=0$ ist der Nenner $0$ ⟹ Polstelle am linken Rand:
$$I=\\lim_{\\varepsilon\\to0^+}\\big[-2\\ln|x^3+4x|\\big]_\\varepsilon^2=-2\\ln(16)+2\\lim_{\\varepsilon\\to0^+}\\ln(\\varepsilon^3+4\\varepsilon)=-\\infty$$
$I$ ist **bestimmt divergent** (gegen $-\\infty$).` },
      ],
      ergebnis: `(a) $\\int f\\,dx=-2\\ln|x^3+4x|+C$ (alle drei Wege) · (b) $I=-\\infty$, bestimmt divergent`,
    },
    {
      id: "t1-a13",
      typ: "Rechentechnik",
      titel: "Uneigentliche Integrale",
      quelle: "Übungsblatt 3, Aufgabe 3",
      schwierigkeit: 2,
      video: "Bsp09–Bsp11 (Uneigentliche Integrale)",
      aufgabe: `Berechnen Sie die folgenden uneigentlichen Integrale:
$$\\text{(a)}\\ \\int_0^{\\pi/2}\\frac{\\cos x}{1-\\sin x}dx \\qquad \\text{(b)}\\ \\int_1^\\infty\\frac{dx}{x^3+x^2} \\qquad \\text{(c)}\\ \\int_{-1}^{1}\\frac{3}{x^2}e^{3/x}dx$$`,
      hinweis: `(a) Polstelle bei $x=\\frac\\pi2$ (dort $\\sin x=1$). (b) PBZ mit $x^2(x+1)$. (c) Polstelle bei $x=0$ im Inneren ⟹ aufteilen!`,
      schritte: [
        { titel: "Teil (a)", text: `$t=1-\\sin x$: Stammfunktion $-\\ln|1-\\sin x|$. Bei $x\\to\\frac\\pi2$: $1-\\sin x\\to 0^+$:
$$\\lim_{b\\to\\pi/2}\\big[-\\ln(1-\\sin x)\\big]_0^b=\\lim(-\\ln(1-\\sin b))+\\ln 1=+\\infty$$
**Divergent** (gegen $\\infty$).` },
        { titel: "Teil (b) – PBZ", text: `$\\frac1{x^2(x+1)}=\\frac Ax+\\frac B{x^2}+\\frac C{x+1}$: $1=Ax(x+1)+B(x+1)+Cx^2$
$x=0$: $B=1$; $x=-1$: $C=1$; $x^2$: $0=A+C\\Rightarrow A=-1$.
Stammfunktion: $F(x)=-\\ln|x|-\\frac1x+\\ln|x+1|=\\ln\\frac{x+1}{x}-\\frac1x$` },
        { titel: "Teil (b) – Grenzwert", text: `$$\\lim_{b\\to\\infty}\\Big[\\ln\\frac{x+1}x-\\frac1x\\Big]_1^b=(\\ln1-0)-(\\ln2-1)=1-\\ln(2)\\approx 0{,}307$$
**Konvergent.**` },
        { titel: "Teil (c)", text: `Stammfunktion: $t=\\frac3x$ ⟹ $\\int\\frac3{x^2}e^{3/x}dx=-e^{3/x}+C$.
Polstelle bei $x=0$ **im Inneren** ⟹ aufteilen in $\\int_{-1}^0+\\int_0^1$.
Rechter Teil: $\\lim_{\\varepsilon\\to0^+}\\big[-e^{3/x}\\big]_\\varepsilon^1=-e^3+\\lim_{\\varepsilon\\to0^+}e^{3/\\varepsilon}=+\\infty$
**Divergent** (gegen $\\infty$) – der linke Teil kann das nicht mehr retten.` },
      ],
      ergebnis: `(a) divergent ($\\infty$) · (b) $1-\\ln 2$, konvergent · (c) divergent ($\\infty$)`,
    },
    {
      id: "t1-a14",
      typ: "Rechentechnik",
      titel: "Uneigentliche Integrale (selbständig)",
      quelle: "Übungsblatt 3, Aufgabe 5",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie:
$$\\text{(a)}\\ \\int_0^\\infty xe^{-x^2}dx \\qquad \\text{(b)}\\ \\int_{-\\infty}^\\infty xe^{-x^2}dx \\qquad \\text{(c)}\\ \\int_1^3\\frac{2x}{\\sqrt{9-x^2}}dx$$
$$\\text{(d)}\\ \\int_0^1\\frac{dx}{x\\ln x} \\qquad \\text{(e)}\\ \\int_0^3\\frac{dx}{x-1} \\qquad \\text{(f)}\\ \\int_0^3\\frac{dx}{(x-1)^2}$$`,
      hinweis: `Stammfunktionen: (a,b) $-\\frac12e^{-x^2}$, (c) $-2\\sqrt{9-x^2}$, (d) $\\ln|\\ln x|$, (e) $\\ln|x-1|$, (f) $-\\frac1{x-1}$. Bei (e),(f): Polstelle $x=1$ im Inneren!`,
      schritte: [
        { titel: "Teil (a)", text: `$$\\lim_{b\\to\\infty}\\Big[-\\frac12e^{-x^2}\\Big]_0^b=0+\\frac12=\\frac12 \\quad\\textbf{konvergent}$$` },
        { titel: "Teil (b)", text: `Beide Hälften konvergieren: $\\int_{-\\infty}^0=-\\frac12$, $\\int_0^\\infty=\\frac12$.
$$\\int_{-\\infty}^\\infty xe^{-x^2}dx=0 \\quad\\textbf{konvergent}$$` },
        { titel: "Teil (c)", text: `Polstelle bei $x=3$ (Wurzel wird 0):
$$\\lim_{b\\to3^-}\\big[-2\\sqrt{9-x^2}\\big]_1^b=0+2\\sqrt8=4\\sqrt2 \\quad\\textbf{konvergent}$$` },
        { titel: "Teil (d)", text: `Stammfunktion $\\ln|\\ln x|$. Bei $x\\to1^-$: $|\\ln x|\\to0^+$ ⟹ $\\ln|\\ln x|\\to-\\infty$.
**Divergent.**` },
        { titel: "Teil (e)", text: `Polstelle $x=1$ innen, aufteilen: $\\int_0^1\\frac{dx}{x-1}=\\lim_{b\\to1^-}\\ln|x-1|\\Big|_0^b=-\\infty$
**Divergent.** (Achtung: "links $-\\infty$, rechts $+\\infty$ hebt sich" gilt NICHT – beide Teile müssen einzeln konvergieren.)` },
        { titel: "Teil (f)", text: `$\\int_0^1\\frac{dx}{(x-1)^2}=\\lim_{b\\to1^-}\\Big[-\\frac1{x-1}\\Big]_0^b=+\\infty$
**Divergent** (gegen $+\\infty$).` },
      ],
      ergebnis: `(a) $\\frac12$ · (b) $0$ · (c) $4\\sqrt2$ · (d) divergent · (e) divergent · (f) divergent ($+\\infty$)`,
    },
    {
      id: "t1-a15",
      typ: "Anwendung",
      titel: "Bogenlängen",
      quelle: "Übungsblatt 4, Aufgabe 1",
      schwierigkeit: 3,
      aufgabe: `Berechnen Sie die Bogenlängen der Graphen ($s=\\int_a^b\\sqrt{1+(f'(x))^2}\\,dx$):
**(a)** $f_1(x)=\\sqrt{x^3}$ auf $[0,5]$
**(b)** $f_2(x)=\\frac12(e^x+e^{-x})$ auf $[-1,1]$
**(c)** $f_3(x)=\\ln(x^2-1)$ auf $[2,3]$`,
      hinweis: `Ziel ist immer, $1+(f')^2$ zu einem vollständigen Quadrat zu machen (binomische Formeln!), damit die Wurzel verschwindet.`,
      schritte: [
        { titel: "Teil (a)", text: `$f_1=x^{3/2}$, $f_1'=\\frac32x^{1/2}$, $1+(f_1')^2=1+\\frac94x$:
$$s=\\int_0^5\\sqrt{1+\\tfrac94x}\\,dx=\\Big[\\frac{8}{27}\\big(1+\\tfrac94x\\big)^{3/2}\\Big]_0^5=\\frac8{27}\\Big(\\big(\\tfrac{49}4\\big)^{3/2}-1\\Big)=\\frac8{27}\\Big(\\frac{343}8-1\\Big)=\\frac{335}{27}$$` },
        { titel: "Teil (b)", text: `$f_2'=\\frac12(e^x-e^{-x})$. Mit binomischen Formeln:
$$1+(f_2')^2=1+\\tfrac14(e^{2x}-2+e^{-2x})=\\tfrac14(e^{2x}+2+e^{-2x})=\\Big(\\tfrac{e^x+e^{-x}}2\\Big)^2$$
$$s=\\int_{-1}^1\\frac{e^x+e^{-x}}2dx=\\Big[\\frac{e^x-e^{-x}}2\\Big]_{-1}^1=e-e^{-1}$$` },
        { titel: "Teil (c)", text: `$f_3'=\\frac{2x}{x^2-1}$:
$$1+(f_3')^2=\\frac{(x^2-1)^2+4x^2}{(x^2-1)^2}=\\frac{(x^2+1)^2}{(x^2-1)^2}$$
$$s=\\int_2^3\\frac{x^2+1}{x^2-1}dx=\\int_2^3\\Big(1+\\frac1{x-1}-\\frac1{x+1}\\Big)dx=\\Big[x+\\ln\\frac{x-1}{x+1}\\Big]_2^3=1+\\ln\\frac{3}{2}$$` },
      ],
      ergebnis: `(a) $\\frac{335}{27}$ · (b) $e-e^{-1}$ · (c) $1+\\ln\\frac32$`,
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
      id: "t1-a17",
      typ: "Anwendung",
      titel: "Rotationskörper: Diffusor",
      quelle: "Übungsblatt 4, Aufgabe 4",
      schwierigkeit: 3,
      aufgabe: `Der Innenradius eines rotationssymmetrischen Diffusors ist $y=\\sqrt{e^x+1}$ für $x\\in[\\ln 2,\\ln 8]$ (in dm).
Berechnen Sie **Volumen** und **Mantelfläche** der Innenwand.
$$V_x=\\pi\\int_a^b y^2\\,dx,\\qquad M_x=2\\pi\\int_a^b y\\sqrt{1+(y')^2}\\,dx$$`,
      hinweis: `Beim Mantel: $y\\sqrt{1+(y')^2}$ unter EINE Wurzel ziehen – es entsteht ein vollständiges Quadrat $(e^x+2)^2$.`,
      schritte: [
        { titel: "Volumen", text: `$y^2=e^x+1$:
$$V_x=\\pi\\int_{\\ln2}^{\\ln8}(e^x+1)dx=\\pi\\big[e^x+x\\big]_{\\ln2}^{\\ln8}=\\pi\\big(8+\\ln8-2-\\ln2\\big)=\\pi\\big(6+\\ln 4\\big)\\ [\\text{dm}^3]$$` },
        { titel: "Mantel – Wurzel vereinfachen", text: `$y'=\\dfrac{e^x}{2\\sqrt{e^x+1}}$ ⟹ $1+(y')^2=1+\\dfrac{e^{2x}}{4(e^x+1)}$
$$y\\sqrt{1+(y')^2}=\\sqrt{(e^x+1)+\\frac{e^{2x}}4}=\\frac12\\sqrt{e^{2x}+4e^x+4}=\\frac{e^x+2}2$$` },
        { titel: "Mantel – Integrieren", text: `$$M_x=2\\pi\\int_{\\ln2}^{\\ln8}\\frac{e^x+2}2dx=\\pi\\big[e^x+2x\\big]_{\\ln2}^{\\ln8}=\\pi\\big(8+2\\ln8-2-2\\ln2\\big)=\\pi\\big(6+\\ln 16\\big)\\ [\\text{dm}^2]$$` },
      ],
      ergebnis: `$V_x=\\pi(6+\\ln 4)\\,$dm³ $\\approx 23{,}2\\,$dm³ · $M_x=\\pi(6+\\ln 16)\\,$dm² $\\approx 27{,}6\\,$dm²`,
    },
    {
      id: "t1-a18",
      typ: "Anwendung",
      titel: "Unendlicher Rotationskörper (selbständig)",
      quelle: "Übungsblatt 4, Aufgabe 7",
      schwierigkeit: 3,
      aufgabe: `Der Rotationskörper $K$ entsteht durch Rotation von $y=e^{-x}$, $x\\in[0,\\infty)$, um die $x$-Achse.
**(a)** Volumen $V_x$? **(b)** Mantelfläche $M_x$?
Hilfe: $\\int\\sqrt{1+x^2}\\,dx=\\frac12\\big(x\\sqrt{1+x^2}+\\ln|2x+2\\sqrt{1+x^2}|\\big)+c$`,
      hinweis: `(a) ist ein einfaches uneigentliches Integral. (b) Substitution $u=e^{-x}$ führt auf $\\int_0^1\\sqrt{1+u^2}\\,du$.`,
      schritte: [
        { titel: "(a) Volumen", text: `$$V_x=\\pi\\int_0^\\infty e^{-2x}dx=\\pi\\lim_{b\\to\\infty}\\Big[-\\frac12e^{-2x}\\Big]_0^b=\\pi\\cdot\\frac12=\\frac{\\pi}{2}$$` },
        { titel: "(b) Substitution", text: `$M_x=2\\pi\\int_0^\\infty e^{-x}\\sqrt{1+e^{-2x}}\\,dx$. Mit $u=e^{-x}$, $du=-e^{-x}dx$; Grenzen $x:0\\to\\infty$ ⟹ $u:1\\to0$:
$$M_x=2\\pi\\int_0^1\\sqrt{1+u^2}\\,du$$` },
        { titel: "(b) Auswerten", text: `Mit der gegebenen Stammfunktion:
$$\\int_0^1\\sqrt{1+u^2}du=\\frac12\\Big(\\sqrt2+\\ln(2+2\\sqrt2)-\\ln2\\Big)=\\frac12\\big(\\sqrt2+\\ln(1+\\sqrt2)\\big)$$
$$M_x=\\pi\\big(\\sqrt2+\\ln(1+\\sqrt2)\\big)\\approx 7{,}21$$` },
      ],
      ergebnis: `(a) $V_x=\\frac\\pi2$ · (b) $M_x=\\pi(\\sqrt2+\\ln(1+\\sqrt2))\\approx 7{,}21$
Bemerkenswert: endliches Volumen und endliche Mantelfläche trotz unendlicher Länge!`,
    },
  ],
  karten: [
    { id: "t1-k01", vorne: `$\\int x^\\alpha\\,dx=?$`, hinten: `$$\\frac{1}{\\alpha+1}x^{\\alpha+1}+c\\quad(\\alpha\\neq-1)$$` },
    { id: "t1-k02", vorne: `$\\int\\frac1x\\,dx=?$`, hinten: `$$\\ln|x|+c$$ (Betragsstriche nicht vergessen!)` },
    { id: "t1-k03", vorne: `$\\int e^x dx=?$ $\\quad\\int a^x dx=?$`, hinten: `$$\\int e^xdx=e^x+c\\qquad \\int a^xdx=\\frac{1}{\\ln a}a^x+c\\ (a>0)$$` },
    { id: "t1-k04", vorne: `$\\int\\sin x\\,dx=?$ $\\quad\\int\\cos x\\,dx=?$`, hinten: `$$\\int\\sin x\\,dx=-\\cos x+c\\qquad\\int\\cos x\\,dx=\\sin x+c$$ Merke: beim Integrieren von $\\sin$ kommt das Minus.` },
    { id: "t1-k05", vorne: `$\\int\\frac{1}{\\cos^2x}dx=?$ $\\quad\\int\\tan x\\,dx=?$`, hinten: `$$\\int\\frac{dx}{\\cos^2x}=\\tan x+c\\qquad\\int\\tan x\\,dx=-\\ln|\\cos x|+c$$` },
    { id: "t1-k06", vorne: `$\\int\\frac{1}{1+x^2}dx=?$`, hinten: `$$\\arctan(x)+c$$ Allgemeiner: $\\int\\frac{dx}{x^2+a^2}=\\frac1a\\arctan\\frac xa+c$` },
    { id: "t1-k07", vorne: `Formel: **Partielle Integration**`, hinten: `$$\\int u\\,v'\\,dx=u\\,v-\\int u'\\,v\\,dx$$ Wahl: $u$ = wird beim Ableiten einfacher (Polynom, $\\ln$); $v'$ = leicht integrierbar.` },
    { id: "t1-k08", vorne: `Formel: **Lineare Substitution** $\\int f(ax+b)\\,dx$`, hinten: `$$\\int f(ax+b)\\,dx=\\frac1a F(ax+b)+c$$ ($F$ = Stammfunktion von $f$)` },
    { id: "t1-k09", vorne: `**Substitution**: die 5 Schritte`, hinten: `1. $t=g(x)$ aufstellen
2. $\\frac{dt}{dx}=g'(x)$ ⟹ $dx=\\frac{dt}{g'(x)}$
3. $x$ und $dx$ im Integranden eliminieren
4. Nach $t$ integrieren
5. Rücksubstitution $t=g(x)$
(Bei bestimmten Integralen: Grenzen mitsubstituieren, dann keine Rücksubstitution.)` },
    { id: "t1-k10", vorne: `$\\int\\frac{f'(x)}{f(x)}dx=?$`, hinten: `$$\\ln|f(x)|+c$$ (Regel I3 – Zähler ist Ableitung des Nenners)` },
    { id: "t1-k11", vorne: `$\\int (f(x))^n\\cdot f'(x)\\,dx=?$`, hinten: `$$\\frac{1}{n+1}(f(x))^{n+1}+c$$ (Regel I4)` },
    { id: "t1-k12", vorne: `**PBZ**: Wann anwendbar, was prüft man zuerst?`, hinten: `Für gebrochenrationale Funktionen $\\frac{p(x)}{q(x)}$.
Zuerst prüfen: **echt** gebrochenrational (Zählergrad < Nennergrad)?
Wenn nicht ⟹ erst **Polynomdivision**!` },
    { id: "t1-k13", vorne: `**PBZ-Ansatz** für $k$-fache reelle Nullstelle $(x-a)^k$`, hinten: `$$\\frac{A_1}{x-a}+\\frac{A_2}{(x-a)^2}+\\dots+\\frac{A_k}{(x-a)^k}$$` },
    { id: "t1-k14", vorne: `**PBZ-Ansatz** für unzerlegbaren quadratischen Faktor $x^2+bx+c$`, hinten: `$$\\frac{Bx+C}{x^2+bx+c}$$ (bei $l$-facher Potenz entsprechend bis $\\frac{B_lx+C_l}{(x^2+bx+c)^l}$)` },
    { id: "t1-k15", vorne: `$\\int\\frac{A}{x-a}dx=?$ $\\quad\\int\\frac{A}{(x-a)^k}dx$ für $k>1$?`, hinten: `$$\\int\\frac A{x-a}dx=A\\ln|x-a|+c$$ $$\\int\\frac A{(x-a)^k}dx=-\\frac{1}{k-1}\\cdot\\frac{A}{(x-a)^{k-1}}+c$$` },
    { id: "t1-k16", vorne: `$\\int\\frac{1}{x^2+px+q}dx$ (mit $p^2-4q<0$) $=?$`, hinten: `$$\\frac{2}{\\sqrt{4q-p^2}}\\arctan\\Big(\\frac{2x+p}{\\sqrt{4q-p^2}}\\Big)+c$$` },
    { id: "t1-k17", vorne: `**Hauptsatz** der Differential- und Integralrechnung`, hinten: `Ist $G$ irgendeine Stammfunktion von $f$, so gilt
$$\\int_a^b f(x)\\,dx=G(b)-G(a)$$` },
    { id: "t1-k18", vorne: `Formel: **Trapezregel**`, hinten: `$$I\\approx\\frac h2\\Big(f(a)+f(b)+2\\sum_{k=1}^{n-1}f(a+kh)\\Big)$$ mit $h=\\frac{b-a}n$` },
    { id: "t1-k19", vorne: `Formel: **Simpson-Regel**`, hinten: `$$I\\approx\\frac h3\\Big(f(a)+f(b)+4\\!\\!\\sum_{\\text{ungerade }j}\\!\\!f(x_j)+2\\!\\!\\sum_{\\text{gerade innere }k}\\!\\!f(x_k)\\Big)$$ $m=2n$ = **gerade** Anzahl Teilintervalle, $h=\\frac{b-a}m$` },
    { id: "t1-k20", vorne: `**Uneigentliches Integral** mit unendlicher Grenze: Definition?`, hinten: `$$\\int_a^\\infty f(x)dx:=\\lim_{b\\to\\infty}\\int_a^b f(x)dx$$ Konvergent, falls der Grenzwert existiert und endlich ist; sonst divergent.` },
    { id: "t1-k21", vorne: `**Uneigentliches Integral**: Polstelle im Inneren von $[a,b]$ – Vorgehen?`, hinten: `Bei Polstelle $p$: aufteilen
$$\\int_a^b=\\int_a^p+\\int_p^b$$
**Beide** Teile müssen einzeln konvergieren! ($\\infty-\\infty$ hebt sich NICHT weg)` },
    { id: "t1-k22", vorne: `Formel: **Bogenlänge** eines Graphen $y=f(x)$, $x\\in[a,b]$`, hinten: `$$s=\\int_a^b\\sqrt{1+(f'(x))^2}\\,dx$$ Trick: $1+(f')^2$ oft ein vollständiges Quadrat (binomische Formeln).` },
    { id: "t1-k23", vorne: `Formel: **Bogenlänge** einer parametrischen Kurve $(x(t),y(t))$`, hinten: `$$s=\\int_{t_1}^{t_2}\\sqrt{(x'(t))^2+(y'(t))^2}\\,dt$$` },
    { id: "t1-k24", vorne: `Formel: **Volumen** Rotationskörper (Rotation um $x$-Achse)`, hinten: `$$V_x=\\pi\\int_a^b (f(x))^2\\,dx$$` },
    { id: "t1-k25", vorne: `Formel: **Mantelfläche** Rotationskörper (Rotation um $x$-Achse)`, hinten: `$$M_x=2\\pi\\int_a^b f(x)\\sqrt{1+(f'(x))^2}\\,dx$$` },
    { id: "t1-k26", vorne: `Halbwinkelformel für $1-\\cos x$ (wichtig bei Zykloiden!)`, hinten: `$$1-\\cos x=2\\sin^2\\Big(\\frac x2\\Big)$$` },
  ],
});
