/* Thema 5: Zufallsgrößen und Verteilungen
   Quellen: Übungsblatt 14 (+ Üb 13, Aufgabe 11), Arbeitsblatt 5.
   Alle Endergebnisse gegen die gedruckten Lösungen geprüft. */
window.MATHE2_DATA.themen.push({
  id: "t5",
  titel: "Zufallsgrößen und Verteilungen",
  untertitel: "Diskrete & stetige Zufallsgrößen, Verteilungsfunktion, Dichte, Erwartungswert, Varianz, Median",
  einfuehrung: `**Worum geht es?** Eine Zufallsgröße $X$ übersetzt Zufall in Zahlen. Zwei Welten mit denselben Begriffen: **diskret** (Verteilungstabelle, Summen) und **stetig** (Dichtefunktion, Integrale – hier kommt Thema 1 zurück!). Für beide gilt: Verteilungsfunktion $F(t)=P(X\\le t)$ aufstellen, daraus Wahrscheinlichkeiten ablesen, mit $EX$ und Varianz die Verteilung charakterisieren.`,
  bloecke: [
    { titel: "Diskrete Zufallsgrößen", intro: `Alles steckt in der Tabelle $x_i\\mapsto p_i$ (Summe = 1, so findet man Parameter $c$). Daraus: **Treppenfunktion** $F$, Wahrscheinlichkeiten (Vorsicht bei $<$ vs. $\\le$ an Sprungstellen!), **Erwartungswert** $\\mu=\\sum x_ip_i$ und **Streuung** $\\sigma$.`, aufgaben: ["t5-a01","t5-a02","t5-a03","t5-a06"] },
    { titel: "Stetige Zufallsgrößen", intro: `Statt Tabelle eine **Dichte** $f$: Wahrscheinlichkeiten sind Flächen unter $f$. Arbeitsablauf wie im Rezept: Parameter über $\\int f=1$, dann $F(x)=\\int_{-\\infty}^x f$, dann ablesen ($P$, Median) und integrieren ($EX$, Varianz). Integrationstechnik aus Thema 1 wird hier direkt wiederverwendet.`, aufgaben: ["t5-a04","t5-a05"] },
  ],
  aufgaben: [
    {
      id: "t5-a01",
      typ: "Verständnis",
      titel: "Diskret oder stetig?",
      quelle: "Übungsblatt 14, Aufgabe 1",
      schwierigkeit: 1,
      aufgabe: `Entscheiden Sie, ob die Zufallsgröße diskret oder stetig ist, und geben Sie die möglichen Werte an:
**(a)** täglicher Verbrauch an Elektroenergie in einem Haushalt
**(b)** Anzahl der Ausschussteile eines Lieferpostens
**(c)** Benzinverbrauch eines PKW auf 100 km`,
      hinweis: `Diskret = abzählbar viele Werte (meist Anzahlen, 0, 1, 2, …). Stetig = alle Werte eines Intervalls möglich (Messgrößen).`,
      schritte: [
        { titel: "Entscheidung", text: `**(a) stetig** – Energieverbrauch kann jeden Wert $\\ge0$ annehmen (Messgröße), $X\\in[0,\\infty)$
**(b) diskret** – Anzahl: $X\\in\\{0,1,2,\\dots,n\\}$ ($n$ = Postengröße)
**(c) stetig** – Verbrauch in Litern, $X\\in[0,\\infty)$` },
      ],
      ergebnis: `(a) stetig · (b) diskret · (c) stetig`,
    },
    {
      id: "t5-a02",
      typ: "Rechentechnik",
      titel: "Verteilungstabelle & Verteilungsfunktion",
      quelle: "Übungsblatt 14, Aufgabe 2",
      schwierigkeit: 2,
      aufgabe: `Verteilungsgesetz von $X$ (mit Parameter $c$):
$$\\begin{array}{c|ccccc}x_i&0&1&3&4&6\\\\\\hline P(X=x_i)&0{,}1&0{,}25&0{,}5&0{,}05&c\\end{array}$$
**(a)** Bestimmen Sie $c$ und die Verteilungsfunktion $F_X$. **(b)** Skizze von $F_X$.
**(c)** $P(X\\le4)$, $P(X<3)$, $P(X\\ge3)$, $P(X\\le3)$?`,
      hinweis: `Summe aller Wahrscheinlichkeiten = 1. $F_X(t)=P(X\\le t)$ ist eine Treppenfunktion: an jeder Sprungstelle $x_i$ kommt $P(X=x_i)$ dazu.`,
      schritte: [
        { titel: "(a) Parameter c", text: `$$0{,}1+0{,}25+0{,}5+0{,}05+c=1\\Rightarrow c=0{,}1$$` },
        { titel: "(a) Verteilungsfunktion", text: `Kumulieren:
$$F_X(t)=\\begin{cases}0&t<0\\\\0{,}1&0\\le t<1\\\\0{,}35&1\\le t<3\\\\0{,}85&3\\le t<4\\\\0{,}9&4\\le t<6\\\\1&t\\ge6\\end{cases}$$
(b): Treppenfunktion mit Sprüngen bei 0, 1, 3, 4, 6.` },
        { titel: "(c) Wahrscheinlichkeiten", text: `$P(A)=P(X\\le4)=F(4)=0{,}9$
$P(B)=P(X<3)=F(3^-)=0{,}35$ (Sprungstelle 3 zählt NICHT mit!)
$P(C)=P(X\\ge3)=1-P(X<3)=0{,}65$
$P(D)=P(X\\le3)=F(3)=0{,}85$` },
      ],
      ergebnis: `(a) $c=0{,}1$ · (c) $P(A)=0{,}9$, $P(B)=0{,}35$, $P(C)=0{,}65$, $P(D)=0{,}85$`,
    },
    {
      id: "t5-a03",
      typ: "Klausurtyp",
      titel: "Erwartungswert & Streuung: Störungen",
      quelle: "Übungsblatt 14, Aufgabe 3",
      schwierigkeit: 2,
      aufgabe: `Anzahl $X$ der Störungen pro Zeiteinheit:
$$\\begin{array}{c|ccccc}x_i&0&1&2&3&4\\\\\\hline P(X=x_i)&0{,}12&0{,}34&0{,}35&0{,}16&0{,}03\\end{array}$$
**(a)** Verteilungsfunktion grafisch. **(b)** $P($höchstens 2 Störungen$)$?
**(c)** Wie viele Störungen treten im Mittel auf? **(d)** Wie weit weichen die Störungen durchschnittlich vom Mittelwert ab?`,
      hinweis: `(c) $\\mu=EX=\\sum x_ip_i$. (d) gesucht ist die Standardabweichung $\\sigma=\\sqrt{D^2X}$; Verschiebungssatz: $D^2X=E(X^2)-\\mu^2$.`,
      schritte: [
        { titel: "(a)+(b)", text: `Treppenfunktion: $F=0$; $0{,}12$; $0{,}46$; $0{,}81$; $0{,}97$; $1$ (Sprünge bei 0–4).
$$P(X\\le2)=F(2)=0{,}12+0{,}34+0{,}35=0{,}81$$` },
        { titel: "(c) Erwartungswert", text: `$$\\mu=0\\cdot0{,}12+1\\cdot0{,}34+2\\cdot0{,}35+3\\cdot0{,}16+4\\cdot0{,}03=1{,}64$$` },
        { titel: "(d) Standardabweichung", text: `$$E(X^2)=1\\cdot0{,}34+4\\cdot0{,}35+9\\cdot0{,}16+16\\cdot0{,}03=3{,}66$$
$$D^2X=3{,}66-1{,}64^2=0{,}9704\\qquad\\sigma=\\sqrt{0{,}9704}\\approx0{,}985$$` },
      ],
      ergebnis: `(b) $0{,}81$ · (c) $\\mu=1{,}64$ · (d) $\\sigma\\approx0{,}985$`,
    },
    {
      id: "t5-a04",
      typ: "Klausurtyp",
      titel: "Stetige Zufallsgröße: Haltbarkeitsdauer",
      quelle: "Übungsblatt 14, Aufgabe 4",
      schwierigkeit: 2,
      aufgabe: `Haltbarkeitsdauer (in Stunden) mit Dichte
$$f(x)=\\begin{cases}20000\\,(x+100)^{-3}&x>0\\\\0&\\text{sonst}\\end{cases}$$
Berechnen Sie die Wahrscheinlichkeit, dass die Haltbarkeit
**(a)** höchstens 100 h, **(b)** mindestens 200 h, **(c)** zwischen 80 und 120 h beträgt.`,
      hinweis: `Erst $F(x)=\\int_0^xf(t)\\,dt$ bestimmen, dann nur noch einsetzen: $P(a\\le X\\le b)=F(b)-F(a)$.`,
      schritte: [
        { titel: "Verteilungsfunktion", text: `$$F(x)=\\int_0^x20000(t+100)^{-3}dt=\\Big[-10000(t+100)^{-2}\\Big]_0^x=1-\\frac{10000}{(x+100)^2}\\quad(x>0)$$` },
        { titel: "Teil (a)", text: `$$P(X\\le100)=F(100)=1-\\frac{10000}{200^2}=1-\\frac14=0{,}75$$` },
        { titel: "Teil (b)", text: `$$P(X\\ge200)=1-F(200)=\\frac{10000}{300^2}=\\frac19=0{,}\\overline1$$` },
        { titel: "Teil (c)", text: `$$P(80\\le X\\le120)=F(120)-F(80)=\\frac{10000}{180^2}-\\frac{10000}{220^2}\\approx0{,}3086-0{,}2066\\approx0{,}102$$` },
      ],
      ergebnis: `(a) $0{,}75$ · (b) $\\frac19\\approx0{,}111$ · (c) $\\approx0{,}102$`,
    },
    {
      id: "t5-a05",
      typ: "Klausurtyp",
      titel: "Dichte mit Parameter: Median, EX, Varianz",
      quelle: "Übungsblatt 14, Aufgabe 5",
      schwierigkeit: 3,
      aufgabe: `$$f(x)=\\begin{cases}a\\cos\\big(\\frac\\pi2x\\big)&x\\in[0,1]\\\\0&\\text{sonst}\\end{cases}$$
**(a)** Bestimmen Sie $a$, sodass $f$ eine Dichte ist. **(b)** Verteilungsfunktion $F$.
**(c)** Median $m$ (mit $F(m)=\\frac12$). **(d)** $\\mu=EX$. **(e)** Formel für $\\sigma^2=D^2X$.`,
      hinweis: `(a) $\\int_0^1f\\,dx=1$. (d) $EX=\\int xf(x)dx$ – partielle Integration. (e) Verschiebungssatz.`,
      schritte: [
        { titel: "(a) Normierung", text: `$$\\int_0^1a\\cos\\Big(\\frac\\pi2x\\Big)dx=a\\cdot\\frac2\\pi\\Big[\\sin\\Big(\\frac\\pi2x\\Big)\\Big]_0^1=\\frac{2a}\\pi\\stackrel!=1\\Rightarrow a=\\frac\\pi2$$` },
        { titel: "(b) Verteilungsfunktion", text: `$$F(x)=\\begin{cases}0&x<0\\\\\\sin\\big(\\frac\\pi2x\\big)&0\\le x\\le1\\\\1&x>1\\end{cases}$$` },
        { titel: "(c) Median", text: `$$\\sin\\Big(\\frac\\pi2m\\Big)=\\frac12\\Rightarrow\\frac\\pi2m=\\frac\\pi6\\Rightarrow m=\\frac13$$` },
        { titel: "(d) Erwartungswert", text: `Partielle Integration ($\\int x\\cos(bx)dx=\\frac xb\\sin(bx)+\\frac1{b^2}\\cos(bx)$, $b=\\frac\\pi2$):
$$EX=\\frac\\pi2\\int_0^1x\\cos\\Big(\\frac\\pi2x\\Big)dx=\\Big[x\\sin\\Big(\\frac\\pi2x\\Big)+\\frac2\\pi\\cos\\Big(\\frac\\pi2x\\Big)\\Big]_0^1=1-\\frac2\\pi\\approx0{,}363$$` },
        { titel: "(e) Varianz", text: `$$\\sigma^2=\\int_0^1x^2\\cdot\\frac\\pi2\\cos\\Big(\\frac\\pi2x\\Big)dx-\\Big(1-\\frac2\\pi\\Big)^2=\\frac{4(\\pi-3)}{\\pi^2}\\approx0{,}0574$$
(Integral mit TR/Software; zweimal partiell integrieren möglich)` },
      ],
      ergebnis: `(a) $a=\\frac\\pi2$ · (b) $F=\\sin(\\frac\\pi2x)$ auf $[0,1]$ · (c) $m=\\frac13$ · (d) $EX=1-\\frac2\\pi$ · (e) $\\sigma^2=\\frac{4(\\pi-3)}{\\pi^2}$`,
    },
    {
      id: "t5-a06",
      typ: "Rechentechnik",
      titel: "Zündholzschachteln (selbständig)",
      quelle: "Übungsblatt 13, Aufgabe 11",
      schwierigkeit: 2,
      aufgabe: `Anzahl $X$ der Hölzer pro Schachtel:
$$\\begin{array}{c|ccccccc}x_i&37&38&39&40&41&42&43\\\\\\hline p_i&0{,}05&0{,}1&0{,}15&0{,}4&0{,}15&0{,}1&0{,}05\\end{array}$$
**(a)** Verteilungsfunktion grafisch. **(b)** Durchschnittliche Anzahl? **(c)** $P(|X-\\mu|<3)$?`,
      hinweis: `Die Verteilung ist symmetrisch um 40! (c) bedeutet $X\\in\\{38,\\dots,42\\}$.`,
      schritte: [
        { titel: "(b) Erwartungswert", text: `Verteilung symmetrisch um 40 ⟹ $\\mu=40$.
(Nachrechnen: $37\\cdot0{,}05+38\\cdot0{,}1+\\dots+43\\cdot0{,}05=40$ ✓)` },
        { titel: "(c) Abweichung", text: `$|X-40|<3\\iff X\\in\\{38,39,40,41,42\\}$:
$$P=0{,}1+0{,}15+0{,}4+0{,}15+0{,}1=0{,}9$$` },
      ],
      ergebnis: `(b) $\\mu=40$ · (c) $0{,}9$`,
    },
  ],
  karten: [
    { id: "t5-k01", vorne: `**Diskrete vs. stetige** Zufallsgröße?`, hinten: `Diskret: abzählbar viele Werte (Anzahlen) – Verteilungstabelle.
Stetig: alle Werte eines Intervalls (Messgrößen) – Dichtefunktion $f$.` },
    { id: "t5-k02", vorne: `**Verteilungsfunktion** $F_X$ – Definition und Grundeigenschaften?`, hinten: `$$F_X(t)=P(X\\le t)$$ monoton wachsend, $\\lim_{t\\to-\\infty}F=0$, $\\lim_{t\\to\\infty}F=1$. Diskret: Treppenfunktion; stetig: $F(x)=\\int_{-\\infty}^xf(t)dt$.` },
    { id: "t5-k03", vorne: `Bedingung an eine **Verteilungstabelle** / eine **Dichte** $f$?`, hinten: `$$\\sum_ip_i=1\\qquad\\text{bzw.}\\qquad f\\ge0,\\ \\int_{-\\infty}^\\infty f(x)\\,dx=1$$ (so bestimmt man unbekannte Parameter!)` },
    { id: "t5-k04", vorne: `$P(a<X\\le b)$ aus der Verteilungsfunktion?`, hinten: `$$P(a<X\\le b)=F(b)-F(a)$$ Diskret aufpassen: $P(X<x)$ vs. $P(X\\le x)$ unterscheiden sich an Sprungstellen um $P(X=x)$!` },
    { id: "t5-k05", vorne: `**Erwartungswert**: diskret und stetig?`, hinten: `$$EX=\\sum_ix_i\\,p_i\\qquad\\text{bzw.}\\qquad EX=\\int_{-\\infty}^\\infty x\\,f(x)\\,dx$$` },
    { id: "t5-k06", vorne: `**Varianz** – Definition und Verschiebungssatz?`, hinten: `$$D^2X=E\\big((X-\\mu)^2\\big)=E(X^2)-\\mu^2$$ mit $E(X^2)=\\sum x_i^2p_i$ bzw. $\\int x^2f\\,dx$.` },
    { id: "t5-k07", vorne: `**Standardabweichung**?`, hinten: `$$\\sigma=\\sqrt{D^2X}$$ "durchschnittliche Abweichung vom Mittelwert" – gleiche Einheit wie $X$.` },
    { id: "t5-k08", vorne: `**Median** $m$ einer stetigen Zufallsgröße?`, hinten: `$$F(m)=P(X\\le m)=\\frac12$$ Gleichung nach $m$ auflösen.` },
    { id: "t5-k09", vorne: `Bei stetigem $X$: $P(X=a)=?$ und Konsequenz?`, hinten: `$$P(X=a)=0$$ ⟹ $P(X\\le a)=P(X<a)$, Randpunkte egal: $P(a\\le X\\le b)=P(a<X<b)=F(b)-F(a)$` },
    { id: "t5-k10", vorne: `Zusammenhang **Dichte ↔ Verteilungsfunktion**?`, hinten: `$$F(x)=\\int_{-\\infty}^xf(t)\\,dt\\qquad f(x)=F'(x)$$` },
    { id: "t5-k11", vorne: `"X weicht um weniger als $k$ vom Mittel ab" – wie rechnen (diskret)?`, hinten: `$$P(|X-\\mu|<k)$$ = Summe der $p_i$ aller Werte $x_i$ mit $\\mu-k<x_i<\\mu+k$ (Grenzen ausschließen!)` },
    { id: "t5-k12", vorne: `**Symmetrie-Trick** beim Erwartungswert?`, hinten: `Ist die Verteilung symmetrisch um einen Wert $c$ ⟹ $EX=c$ ohne Rechnung (z.B. Tabelle symmetrisch um 40 ⟹ $\\mu=40$).` },
  ],
});
