/* Thema 3: Bereichs- und Kurvenintegrale
   Quellen: Übungsblätter 9–11, Arbeitsblatt 3, Repetitorien-Videos Bsp41–52.
   Üb 9 hat keine gedruckten Lösungen im PDF-Auszug – Ergebnisse dort selbst
   berechnet und per Tetraeder-Determinante bzw. Gegenrechnung kontrolliert.
   Üb 10/11: alle Endergebnisse gegen die gedruckten Lösungen geprüft. */
window.MATHE2_DATA.themen.push({
  id: "t3",
  titel: "Bereichs- und Kurvenintegrale",
  untertitel: "Ebene & räumliche Bereichsintegrale, Polar-/Zylinder-/Kugelkoordinaten, Kurvenintegrale 1. und 2. Art",
  einfuehrung: `**Worum geht es?** Integrieren über Flächen, Körper und Kurven statt nur über Intervalle. Das Prinzip ist immer gleich: Bereich beschreiben (Grenzen!), Integral von innen nach außen abarbeiten. Die Kunst ist die **Wahl der Koordinaten** – kartesisch, polar, zylindrisch oder kugelig – sie entscheidet, ob die Rechnung 3 Zeilen oder 3 Seiten lang wird. Laut Repetitorien ein Klausurschwerpunkt!`,
  bloecke: [
    { titel: "Ebene Bereichsintegrale (kartesisch)", intro: `Doppelintegrale $\\iint_B f\\,db$ über Normalbereiche: Randkurven schneiden, Grenzen aufstellen, von innen nach außen integrieren. Mit $f=1$ entsteht die **Fläche**, mit $f=\\varrho$ die **Masse**, mit $f=x$ bzw. $f=y$ der **Schwerpunkt** – und mit Dreifachintegralen das **Volumen**.`, aufgaben: ["t3-a01","t3-a02","t3-a03","t3-a04"] },
    { titel: "Polarkoordinaten", intro: `Sobald Kreise, Ringe oder Sektoren auftauchen (oder $x^2+y^2$ im Integranden steht), wechselt man zu $x=r\\cos\\varphi$, $y=r\\sin\\varphi$ – **mit Flächenelement $db=r\\,dr\\,d\\varphi$** (das $r$ ist der häufigste Klausurfehler!). Die Grenzen werden dann konstant und das Integral zerfällt in Faktoren.`, aufgaben: ["t3-a05","t3-a06","t3-a09"] },
    { titel: "Räumliche Integrale: Zylinder- & Kugelkoordinaten", intro: `Dasselbe Spiel in 3D: rotationssymmetrische Körper (Kegel, Bohrungen, Tori) in **Zylinderkoordinaten** ($db=r\\,dz\\,dr\\,d\\varphi$), Kugeln und Schalen in **Kugelkoordinaten** ($db=r^2\\sin\\vartheta\\,...$). Erster Schritt ist immer die **Beschreibung des Körpers** in den neuen Koordinaten – das allein gibt in der Klausur schon Punkte.`, aufgaben: ["t3-a07","t3-a08","t3-a10","t3-a15","t3-a11","t3-a12"] },
    { titel: "Kurvenintegrale", intro: `Integriert wird entlang einer Kurve $\\vec r(t)$. **1. Art** (skalar: Länge, Masse eines Drahtes): mit $|\\vec r\\,'(t)|\\,dt$. **2. Art** (vektoriell: Arbeit im Kraftfeld): mit dem Skalarprodukt $\\vec F\\cdot\\vec r\\,'(t)\\,dt$. Beide laufen auf ein gewöhnliches Integral über $t$ hinaus.`, aufgaben: ["t3-a13","t3-a14"] },
  ],
  aufgaben: [
    {
      id: "t3-a01",
      typ: "Rechentechnik",
      titel: "Ebene Bereichsintegrale (kartesisch)",
      quelle: "Übungsblatt 9, Aufgabe 1",
      schwierigkeit: 2,
      video: "Bsp41–Bsp46 (Ebene Bereichsintegrale)",
      aufgabe: `Skizzieren Sie jeweils $B$ und berechnen Sie $I=\\iint_B f(x,y)\\,db$:
**(a)** $f=x^2+4y$, $\\;B=\\{y\\ge\\frac{x^2}4,\\ x\\ge2y-12\\}$
**(b)** $f=xy$, $\\;B=\\{0\\le x\\le2,\\ y\\ge0,\\ y\\le x^2,\\ y\\le2-x\\}$
**(c)** $f=2xy+1$, $\\;B=\\{y\\ge x^2,\\ y\\le x+2,\\ y\\ge2x\\}$`,
      hinweis: `Normalbereich bzgl. $x$ aufstellen: Schnittpunkte der Randkurven bestimmen, dann $\\int_{x_1}^{x_2}\\int_{y_u(x)}^{y_o(x)}f\\,dy\\,dx$. Bei (b) und (c) muss der Bereich in zwei Teile zerlegt werden!`,
      schritte: [
        { titel: "(a) Grenzen", text: `Parabel $y=\\frac{x^2}4$ unten, Gerade $x=2y-12\\Leftrightarrow y=\\frac{x+12}2$ oben.
Schnitt: $\\frac{x^2}4=\\frac{x+12}2\\Rightarrow x^2-2x-24=0\\Rightarrow x=-4,\\ x=6$` },
        { titel: "(a) Integrieren", text: `$$I=\\int_{-4}^{6}\\int_{x^2/4}^{(x+12)/2}(x^2+4y)\\,dy\\,dx=\\int_{-4}^6\\Big(-\\tfrac38x^4+\\tfrac{x^3}2+\\tfrac{13}2x^2+12x+72\\Big)dx$$
$$=-660+130+\\tfrac{1820}3+120+720=\\frac{2750}{3}\\approx916{,}7$$` },
        { titel: "(b) Bereich teilen", text: `Obergrenze ist $\\min(x^2,\\,2-x)$; Schnitt $x^2=2-x$ bei $x=1$:
$x\\in[0,1]$: $y\\in[0,x^2]$, $\\quad x\\in[1,2]$: $y\\in[0,2-x]$` },
        { titel: "(b) Integrieren", text: `$$I=\\int_0^1 x\\cdot\\frac{x^4}2dx+\\int_1^2 x\\cdot\\frac{(2-x)^2}2dx=\\Big[\\frac{x^6}{12}\\Big]_0^1+\\frac12\\Big[2x^2-\\frac43x^3+\\frac{x^4}4\\Big]_1^2$$
$$=\\frac1{12}+\\frac12\\Big(\\frac43-\\frac{11}{12}\\Big)=\\frac1{12}+\\frac5{24}=\\frac{7}{24}$$` },
        { titel: "(c) Bereich teilen", text: `Untere Grenze $\\max(x^2,2x)$, obere $x+2$.
$x\\in[-1,0]$: $y\\in[x^2,x+2]$ · $x\\in[0,2]$: $y\\in[2x,x+2]$
(Schnittpunkte: $x^2=x+2$ bei $x=-1$; $2x=x+2$ bei $x=2$; $x^2=2x$ bei $x=0$)` },
        { titel: "(c) Integrieren", text: `Inneres Integral: $\\big[xy^2+y\\big]_{y_u}^{y_o}$.
$$\\int_{-1}^0\\big(-x^5+x^3+3x^2+5x+2\\big)dx=\\frac5{12},\\qquad \\int_0^2\\big(-3x^3+4x^2+3x+2\\big)dx=\\frac{26}3$$
$$I=\\frac5{12}+\\frac{26}3=\\frac{109}{12}\\approx9{,}08$$` },
      ],
      ergebnis: `(a) $\\frac{2750}3$ · (b) $\\frac7{24}$ · (c) $\\frac{109}{12}$`,
    },
    {
      id: "t3-a02",
      typ: "Rechentechnik",
      titel: "Masse eines ebenen Bereichs",
      quelle: "Übungsblatt 9, Aufgabe 2",
      schwierigkeit: 3,
      aufgabe: `$B=\\{(x,y)\\mid y\\le3,\\ 3x+y^2\\le9,\\ y\\ge-3(x+1)\\}$.
Berechnen Sie die Masse $m=\\iint_B\\varrho(x,y)\\,db$ mit Dichte $\\varrho(x,y)=6xy^2$.`,
      hinweis: `Hier ist $B$ ein Normalbereich bzgl. $y$: nach $x$ auflösen! $x\\le\\frac{9-y^2}3$ und $x\\ge-1-\\frac y3$. Schnitt der Ränder bei $y=-3$ und $y=4$ – mit $y\\le3$ läuft $y$ von $-3$ bis $3$.`,
      schritte: [
        { titel: "Grenzen", text: `$3x+y^2\\le9\\Rightarrow x\\le\\frac{9-y^2}3$; $\\;y\\ge-3(x+1)\\Rightarrow x\\ge-1-\\frac y3$
Gleichsetzen: $-3-y=9-y^2\\Rightarrow y^2-y-12=0\\Rightarrow y=-3,\\ y=4$; mit $y\\le3$:
$$m=\\int_{-3}^{3}\\int_{-1-y/3}^{(9-y^2)/3}6xy^2\\,dx\\,dy$$` },
        { titel: "Inneres Integral", text: `$$\\int 6xy^2dx=3y^2x^2\\ \\Rightarrow\\ 3y^2\\Big(\\frac{(9-y^2)^2}{9}-\\Big(1+\\frac y3\\Big)^2\\Big)=24y^2-2y^3-\\frac{19}3y^4+\\frac{y^6}3$$` },
        { titel: "Äußeres Integral", text: `Der ungerade Term $-2y^3$ fällt auf $[-3,3]$ weg:
$$m=2\\int_0^3\\Big(24y^2-\\frac{19}3y^4+\\frac{y^6}3\\Big)dy=2\\Big[8y^3-\\frac{19}{15}y^5+\\frac{y^7}{21}\\Big]_0^3=2\\cdot\\frac{1296}{105}=\\frac{864}{35}\\approx24{,}7$$` },
      ],
      ergebnis: `$m=\\frac{864}{35}\\approx24{,}69$`,
    },
    {
      id: "t3-a03",
      typ: "Anwendung",
      titel: "Flächeninhalt und Schwerpunkt",
      quelle: "Übungsblatt 9, Aufgabe 3",
      schwierigkeit: 2,
      aufgabe: `$B=\\{(x,y)\\mid x^2\\le y,\\ y\\le x+6,\\ y\\le-x+6\\}$.
Bestimmen Sie $Fl(B)=\\iint_B1\\,db$ und den geometrischen Schwerpunkt
$$x_0=\\frac1{Fl(B)}\\iint_Bx\\,db,\\qquad y_0=\\frac1{Fl(B)}\\iint_By\\,db$$`,
      hinweis: `$B$ ist symmetrisch zur $y$-Achse (Parabel + zwei gespiegelte Geraden) ⟹ $x_0=0$ geschenkt! Schnittpunkte: $x^2=x+6$ bei $x=-2$; $x^2=-x+6$ bei $x=2$.`,
      schritte: [
        { titel: "Bereich & Symmetrie", text: `Obergrenze $\\min(x+6,-x+6)$: für $x<0$ die Gerade $x+6$, für $x>0$ die Gerade $-x+6$. Definitionsbereich $x\\in[-2,2]$.
Symmetrie zur $y$-Achse ⟹ $x_0=0$.` },
        { titel: "Fläche", text: `$$Fl(B)=2\\int_0^2\\big((-x+6)-x^2\\big)dx=2\\Big[6x-\\frac{x^2}2-\\frac{x^3}3\\Big]_0^2=2\\cdot\\frac{22}3=\\frac{44}3$$` },
        { titel: "Schwerpunkt y₀", text: `$$\\iint_By\\,db=2\\int_0^2\\frac{(6-x)^2-x^4}{2}dx=\\Big[-\\frac{(6-x)^3}3-\\frac{x^5}5\\Big]_0^2=72-\\frac{64}3-\\frac{32}5=\\frac{664}{15}$$
$$y_0=\\frac{664/15}{44/3}=\\frac{166}{55}\\approx3{,}02$$` },
      ],
      ergebnis: `$Fl(B)=\\frac{44}3$, Schwerpunkt $(x_0,y_0)=\\big(0,\\frac{166}{55}\\big)\\approx(0;\\,3{,}02)$`,
    },
    {
      id: "t3-a04",
      typ: "Anwendung",
      titel: "Tetraeder-Volumina",
      quelle: "Übungsblatt 9, Aufgabe 4",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie $V(T)=\\iiint_T1\\,db$ der Tetraeder:
**(a)** $T$ begrenzt von $x=0$, $y=1$, $z=0$ und $x+2y+z=4$
**(b)** $T$ begrenzt von $x=2$, $y=1$, $z=0$ und $x+y+z=8$`,
      hinweis: `$z$ läuft von 0 bis zur schrägen Ebene; danach Normalbereich in der $x,y$-Ebene. Kontrolle: Spat-Formel $V=\\frac16|\\det(\\vec a,\\vec b,\\vec c)|$ mit den Kantenvektoren.`,
      schritte: [
        { titel: "(a) Grenzen", text: `$z$ von $0$ bis $4-x-2y$; in der Ebene: $x\\ge0$, $y\\ge1$, $x\\le4-2y$ ⟹ $y\\in[1,2]$:
$$V=\\int_1^2\\int_0^{4-2y}(4-x-2y)\\,dx\\,dy$$` },
        { titel: "(a) Auswerten", text: `Inneres Integral $=\\frac{(4-2y)^2}{2}$:
$$V=\\frac12\\int_1^2(4-2y)^2dy=\\frac12\\Big[-\\frac{(4-2y)^3}{6}\\Big]_1^2=\\frac12\\cdot\\frac{8}{6}=\\frac{2}{3}$$
Kontrolle: Ecken $(0,1,0),(2,1,0),(0,2,0),(0,1,2)$ ⟹ $V=\\frac16|{\\det}|=\\frac16\\cdot4=\\frac23$ ✓` },
        { titel: "(b) Analog", text: `$z$ von $0$ bis $8-x-y$; $x\\ge2$, $y\\ge1$, $x\\le8-y$ ⟹ $y\\in[1,6]$:
$$V=\\int_1^6\\int_2^{8-y}(8-x-y)\\,dx\\,dy=\\frac12\\int_1^6(6-y)^2dy=\\frac12\\cdot\\frac{125}{3}=\\frac{125}{6}$$
Kontrolle: Kanten von $(2,1,0)$: $(5,0,0),(0,5,0),(0,0,5)$ ⟹ $V=\\frac{125}6$ ✓` },
      ],
      ergebnis: `(a) $V=\\frac23$ · (b) $V=\\frac{125}6\\approx20{,}83$`,
    },
    {
      id: "t3-a05",
      typ: "Rechentechnik",
      titel: "Polarkoordinaten: Kreissektor",
      quelle: "Übungsblatt 10, Aufgabe 1",
      schwierigkeit: 2,
      aufgabe: `$B=\\{(x,y)\\mid x^2+y^2\\le9,\\ y\\ge x,\\ y\\ge-x\\}$.
**(a)** Skizze. **(b)** $B$ in Polarkoordinaten. **(c)** $Fl(B)$. **(d)** Schwerpunkt $(x_0,y_0)$.`,
      hinweis: `Die Bedingungen $y\\ge|x|$ schneiden den Winkel $\\varphi\\in[\\frac\\pi4,\\frac{3\\pi}4]$ aus. Flächenelement: $db=r\\,dr\\,d\\varphi$!`,
      schritte: [
        { titel: "(b) Polarkoordinaten", text: `$$x=r\\cos\\varphi,\\quad y=r\\sin\\varphi,\\qquad 0\\le r\\le3,\\quad \\frac\\pi4\\le\\varphi\\le\\frac{3\\pi}4$$
(Viertelkreis-Sektor "oben", Öffnungswinkel $\\frac\\pi2$)` },
        { titel: "(c) Fläche", text: `$$Fl(B)=\\int_{\\pi/4}^{3\\pi/4}\\int_0^3r\\,dr\\,d\\varphi=\\frac\\pi2\\cdot\\frac92=\\frac{9\\pi}{4}$$` },
        { titel: "(d) Schwerpunkt", text: `$x_0=0$ (Symmetrie zur $y$-Achse).
$$y_0=\\frac{4}{9\\pi}\\int_{\\pi/4}^{3\\pi/4}\\int_0^3 \\underbrace{r\\sin\\varphi}_{y}\\cdot r\\,dr\\,d\\varphi=\\frac4{9\\pi}\\cdot\\Big[\\tfrac{r^3}3\\Big]_0^3\\cdot\\underbrace{\\big[-\\cos\\varphi\\big]_{\\pi/4}^{3\\pi/4}}_{=\\sqrt2}=\\frac{4\\sqrt2}{\\pi}\\approx1{,}80$$` },
      ],
      ergebnis: `(b) $0\\le r\\le3$, $\\frac\\pi4\\le\\varphi\\le\\frac{3\\pi}4$ · (c) $\\frac{9\\pi}4$ · (d) $(0,\\frac{4\\sqrt2}\\pi)$`,
    },
    {
      id: "t3-a06",
      typ: "Rechentechnik",
      titel: "Polarkoordinaten: Masse eines Ringsegments",
      quelle: "Übungsblatt 10, Aufgabe 2",
      schwierigkeit: 2,
      aufgabe: `$B=\\{(x,y)\\mid 1\\le x^2+y^2\\le4,\\ y\\ge\\sqrt3\\,x,\\ x\\ge0\\}$.
**(a)** Skizze. **(b)** Polarkoordinaten-Beschreibung. **(c)** Masse $m(B)$ bei $\\varrho(x,y)=\\frac{4xy}{x^2+y^2}$.`,
      hinweis: `$y=\\sqrt3x$ ist die Gerade mit Winkel $\\frac\\pi3$; mit $x\\ge0$ läuft $\\varphi$ bis zur $y$-Achse ($\\frac\\pi2$). In Polarkoordinaten kürzt sich $x^2+y^2=r^2$ weg!`,
      schritte: [
        { titel: "(b) Beschreibung", text: `$$x=r\\cos\\varphi,\\ y=r\\sin\\varphi,\\qquad 1\\le r\\le2,\\quad\\frac\\pi3\\le\\varphi\\le\\frac\\pi2$$` },
        { titel: "(c) Integrand", text: `$$\\varrho=\\frac{4r^2\\cos\\varphi\\sin\\varphi}{r^2}=4\\cos\\varphi\\sin\\varphi,\\qquad m=\\int_{\\pi/3}^{\\pi/2}\\int_1^2 4\\cos\\varphi\\sin\\varphi\\cdot r\\,dr\\,d\\varphi$$` },
        { titel: "(c) Auswerten", text: `$$\\int_1^2r\\,dr=\\frac32,\\qquad \\int_{\\pi/3}^{\\pi/2}4\\sin\\varphi\\cos\\varphi\\,d\\varphi=\\big[2\\sin^2\\varphi\\big]_{\\pi/3}^{\\pi/2}=2-\\frac32=\\frac12$$
$$m=\\frac32\\cdot\\frac12=\\frac34$$` },
      ],
      ergebnis: `$m=\\frac34$`,
    },
    {
      id: "t3-a07",
      typ: "Verständnis",
      titel: "Räumliches Bereichsintegral: kartesisch vs. Zylinder",
      quelle: "Übungsblatt 10, Aufgabe 3",
      schwierigkeit: 3,
      video: "Bsp47–Bsp49 (Räumliche Bereichsintegrale)",
      aufgabe: `Der Körper $B$ liegt im 1. Oktanten ($x,y\\ge0$) und wird begrenzt von $x^2+y^2=4$, $z=0$ und $z=\\sqrt{x^2+y^2}$.
Berechnen Sie $m(B)=\\iiint_B 2yz\\,db$ **(i)** kartesisch und **(ii)** in Zylinderkoordinaten.`,
      hinweis: `Zylinderkoordinaten: $db=r\\,dz\\,dr\\,d\\varphi$, $z$ läuft von $0$ bis $r$ (Kegelfläche $z=\\sqrt{x^2+y^2}=r$).`,
      schritte: [
        { titel: "(i) Kartesisch", text: `$$m=\\int_0^2\\int_0^{\\sqrt{4-x^2}}\\int_0^{\\sqrt{x^2+y^2}}2yz\\,dz\\,dy\\,dx=\\int_0^2\\int_0^{\\sqrt{4-x^2}}y(x^2+y^2)\\,dy\\,dx$$
(inneres Integral: $\\int2z\\,dz=z^2=x^2+y^2$). Weiterrechnen führt (mühsam) auf $\\frac{32}5$.` },
        { titel: "(ii) Zylinderkoordinaten", text: `$y=r\\sin\\varphi$, $0\\le\\varphi\\le\\frac\\pi2$, $0\\le r\\le2$, $0\\le z\\le r$:
$$m=\\int_0^{\\pi/2}\\int_0^2\\int_0^r 2(r\\sin\\varphi)\\,z\\cdot r\\,dz\\,dr\\,d\\varphi$$` },
        { titel: "(ii) Auswerten", text: `$\\int_0^r2z\\,dz=r^2$ ⟹ Integrand $r^4\\sin\\varphi$:
$$m=\\underbrace{\\int_0^{\\pi/2}\\sin\\varphi\\,d\\varphi}_{=1}\\cdot\\underbrace{\\int_0^2r^4dr}_{=32/5}=\\frac{32}{5}$$
Deutlich schneller – Koordinatenwahl lohnt sich!` },
      ],
      ergebnis: `$m=\\frac{32}5=6{,}4$ (beide Wege)`,
    },
    {
      id: "t3-a08",
      typ: "Anwendung",
      titel: "Halber Kreiskegel",
      quelle: "Übungsblatt 10, Aufgabe 4",
      schwierigkeit: 2,
      aufgabe: `$B=\\{(x,y,z)\\mid x^2+y^2\\le16,\\ y\\ge0,\\ 0\\le z\\le8-2\\sqrt{x^2+y^2}\\}$.
**(a)** Schnitte mit $x,y$- und $y,z$-Ebene skizzieren. **(b)** Um welchen Körper handelt es sich? **(c)** Zylinderkoordinaten-Beschreibung. **(d)** Volumen $V(B)$.`,
      hinweis: `Bei $z=8-2r$: Deckfläche fällt von $z=8$ (bei $r=0$) linear auf $z=0$ (bei $r=4$).`,
      schritte: [
        { titel: "(b) Körper", text: `Schnitt mit $x,y$-Ebene: Halbkreis ($r\\le4$, $y\\ge0$). Schnitt mit $y,z$-Ebene: Dreieck mit $z=8-2|y|$.
⟹ $B$ ist ein **halber Kreiskegel** (Spitze oben bei $(0,0,8)$, Grundkreis Radius 4).` },
        { titel: "(c) Beschreibung", text: `$$x=r\\cos\\varphi,\\ y=r\\sin\\varphi,\\ z=z,\\qquad 0\\le r\\le4,\\ 0\\le\\varphi\\le\\pi,\\ 0\\le z\\le8-2r$$` },
        { titel: "(d) Volumen", text: `$$V=\\int_0^4\\int_0^\\pi\\int_0^{8-2r}r\\,dz\\,d\\varphi\\,dr=\\pi\\int_0^4r(8-2r)\\,dr=\\pi\\Big[4r^2-\\frac{2r^3}3\\Big]_0^4=\\pi\\Big(64-\\frac{128}3\\Big)=\\frac{64\\pi}{3}$$
Kontrolle: halber Kegel $=\\frac12\\cdot\\frac13\\pi R^2h=\\frac12\\cdot\\frac13\\pi\\cdot16\\cdot8=\\frac{64\\pi}3$ ✓` },
      ],
      ergebnis: `(b) halber Kreiskegel · (d) $V=\\frac{64\\pi}3\\approx67{,}0$`,
    },
    {
      id: "t3-a09",
      typ: "Rechentechnik",
      titel: "Polarkoordinaten-Training (selbständig)",
      quelle: "Übungsblatt 10, Aufgabe 5",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie mit Polarkoordinaten $I=\\iint_Bf\\,db$:
**(a)** $f=xy$, $B$: Halbkreis $x^2+y^2\\le a^2$, $x\\ge0$
**(b)** $f=x^2+y^2$, $B$: $1\\le x^2+y^2\\le4$, $y\\ge0$
**(c)** $f=4x^2+4y^2$, $B$: $x^2+y^2\\le16$, $y\\ge-x$`,
      hinweis: `(a) $\\varphi\\in[-\\frac\\pi2,\\frac\\pi2]$ – was passiert mit $\\int\\sin\\varphi\\cos\\varphi$ über das symmetrische Intervall? (c) $y\\ge-x$ ⟹ $\\varphi\\in[-\\frac\\pi4,\\frac{3\\pi}4]$.`,
      schritte: [
        { titel: "Teil (a)", text: `$$I=\\int_{-\\pi/2}^{\\pi/2}\\int_0^a r^2\\cos\\varphi\\sin\\varphi\\cdot r\\,dr\\,d\\varphi=\\frac{a^4}4\\cdot\\Big[\\frac{\\sin^2\\varphi}2\\Big]_{-\\pi/2}^{\\pi/2}=\\frac{a^4}4\\cdot0=0$$
(Symmetrie: $B$ symmetrisch zu $y=0$, $f$ dort ungerade ⟹ 0)` },
        { titel: "Teil (b)", text: `$$I=\\int_0^\\pi\\int_1^2 r^2\\cdot r\\,dr\\,d\\varphi=\\pi\\Big[\\frac{r^4}4\\Big]_1^2=\\pi\\cdot\\frac{15}4=\\frac{15\\pi}4$$` },
        { titel: "Teil (c)", text: `Halbkreisscheibe oberhalb von $y=-x$: $\\varphi\\in[-\\frac\\pi4,\\frac{3\\pi}4]$ (Länge $\\pi$):
$$I=\\int_{-\\pi/4}^{3\\pi/4}\\int_0^4 4r^2\\cdot r\\,dr\\,d\\varphi=\\pi\\cdot\\big[r^4\\big]_0^4=256\\pi$$` },
      ],
      ergebnis: `(a) $0$ · (b) $\\frac{15\\pi}4$ · (c) $256\\pi$`,
    },
    {
      id: "t3-a10",
      typ: "Rechentechnik",
      titel: "Zylinderkoordinaten: Volumen & Schwerpunkt (selbständig)",
      quelle: "Übungsblatt 10, Aufgabe 6",
      schwierigkeit: 3,
      aufgabe: `$B=\\{(x,y,z)\\mid 1\\le x^2+y^2\\le9,\\ 0\\le z\\le\\frac13(x^2+y^2)\\}$.
**(b)** Zylinderkoordinaten-Beschreibung. **(c)** Volumen. **(d)** $z_0=\\frac1{V}\\iiint_Bz\\,db$.`,
      hinweis: `$z$ läuft bis $\\frac{r^2}3$. Bei (d): $\\int_0^{h}z\\,dz=\\frac{h^2}2$ mit $h=\\frac{r^2}3$.`,
      schritte: [
        { titel: "(b)", text: `$$1\\le r\\le3,\\quad 0\\le\\varphi\\le2\\pi,\\quad 0\\le z\\le\\frac{r^2}3$$` },
        { titel: "(c) Volumen", text: `$$V=\\int_0^{2\\pi}\\int_1^3\\int_0^{r^2/3}r\\,dz\\,dr\\,d\\varphi=2\\pi\\int_1^3\\frac{r^3}3dr=2\\pi\\Big[\\frac{r^4}{12}\\Big]_1^3=2\\pi\\cdot\\frac{80}{12}=\\frac{40\\pi}{3}$$` },
        { titel: "(d) Schwerpunkt", text: `$$\\iiint_Bz\\,db=2\\pi\\int_1^3 r\\cdot\\frac{(r^2/3)^2}{2}dr=\\frac{\\pi}{9}\\Big[\\frac{r^6}{6}\\Big]_1^3=\\frac\\pi9\\cdot\\frac{728}6=\\frac{364\\pi}{27}$$
$$z_0=\\frac{364\\pi/27}{40\\pi/3}=\\frac{91}{90}\\approx1{,}01$$` },
      ],
      ergebnis: `(c) $V=\\frac{40\\pi}3$ · (d) $z_0=\\frac{91}{90}\\approx1{,}01$`,
    },
    {
      id: "t3-a11",
      typ: "Klausurtyp",
      titel: "Torus & durchbohrte Halbkugel",
      quelle: "Übungsblatt 11, Aufgaben 1 & 2",
      schwierigkeit: 3,
      aufgabe: `**(A)** Die Ellipse $\\frac{(x-7)^2}{3^2}+\\frac{z^2}{2^2}=1$ rotiert um die $z$-Achse (elliptischer Torus $T$). Geben Sie $V(T)$ als Dreifach-Integral in Zylinderkoordinaten an – mit Reihenfolge (a) $dz\\,dr\\,d\\varphi$ und (b) $dr\\,dz\\,d\\varphi$. (Zusatz: $V=?$)
**(B)** Eine obere Halbkugel (Radius 3) ist zentrisch zylindrisch durchbohrt (Radius 1). Volumen des Restkörpers?`,
      hinweis: `(A) Ellipse nach $z$ bzw. $r$ auflösen: $z=\\pm\\frac23\\sqrt{9-(r-7)^2}$ bzw. $r=7\\pm\\frac32\\sqrt{4-z^2}$. (B) $r$ von 1 bis 3, $z$ bis $\\sqrt{9-r^2}$.`,
      schritte: [
        { titel: "(A) Reihenfolge (a)", text: `$$V=\\int_0^{2\\pi}\\int_4^{10}\\int_{-\\frac23\\sqrt{9-(r-7)^2}}^{\\frac23\\sqrt{9-(r-7)^2}}r\\,dz\\,dr\\,d\\varphi$$` },
        { titel: "(A) Reihenfolge (b)", text: `$$V=\\int_0^{2\\pi}\\int_{-2}^{2}\\int_{7-\\frac32\\sqrt{4-z^2}}^{7+\\frac32\\sqrt{4-z^2}}r\\,dr\\,dz\\,d\\varphi$$
Zusatz: inneres Integral $\\frac12(r_o^2-r_u^2)=\\frac12\\cdot 7\\cdot 2\\cdot3\\sqrt{4-z^2}=21\\sqrt{4-z^2}$,
$\\int_{-2}^221\\sqrt{4-z^2}dz=21\\cdot\\frac{\\pi\\cdot4}2=42\\pi$ ⟹ $V=2\\pi\\cdot42\\pi=84\\pi^2$
(Guldin: $V=2\\pi\\cdot7\\cdot(\\pi\\cdot3\\cdot2)=84\\pi^2$ ✓)` },
        { titel: "(B) Bohrung", text: `$$V=\\int_0^{2\\pi}\\int_1^3\\int_0^{\\sqrt{9-r^2}}r\\,dz\\,dr\\,d\\varphi=2\\pi\\int_1^3r\\sqrt{9-r^2}\\,dr=2\\pi\\Big[-\\frac13(9-r^2)^{3/2}\\Big]_1^3$$
$$=2\\pi\\cdot\\frac{8^{3/2}}3=\\frac{32\\sqrt2\\,\\pi}{3}\\approx47{,}4$$` },
      ],
      ergebnis: `(A) $V=84\\pi^2$ · (B) $V=\\frac{32\\sqrt2\\pi}3$`,
    },
    {
      id: "t3-a12",
      typ: "Rechentechnik",
      titel: "Kugelkoordinaten: Halbkugelschale",
      quelle: "Übungsblatt 11, Aufgabe 3",
      schwierigkeit: 2,
      aufgabe: `$B=\\{(x,y,z)\\mid 1\\le x^2+y^2+z^2\\le4,\\ z\\ge0\\}$ (obere Halbkugelschale).
**(b)** Kugelkoordinaten-Beschreibung. **(c)** Masse $m(B)$ bei $\\varrho(x,y,z)=4z$.`,
      hinweis: `Kugelkoordinaten: $db=r^2\\sin\\vartheta\\,d\\vartheta\\,dr\\,d\\varphi$, $z=r\\cos\\vartheta$. Obere Hälfte: $\\vartheta\\in[0,\\frac\\pi2]$.`,
      schritte: [
        { titel: "(b) Beschreibung", text: `$$x=r\\cos\\varphi\\sin\\vartheta,\\quad y=r\\sin\\varphi\\sin\\vartheta,\\quad z=r\\cos\\vartheta$$
$$0\\le\\varphi\\le2\\pi,\\qquad 1\\le r\\le2,\\qquad 0\\le\\vartheta\\le\\frac\\pi2$$` },
        { titel: "(c) Aufstellen", text: `$$m=\\int_0^{2\\pi}\\int_1^2\\int_0^{\\pi/2}\\underbrace{4r\\cos\\vartheta}_{\\varrho}\\cdot\\underbrace{r^2\\sin\\vartheta}_{\\text{Jacobi}}\\,d\\vartheta\\,dr\\,d\\varphi$$` },
        { titel: "(c) Auswerten", text: `$$\\int_0^{\\pi/2}\\cos\\vartheta\\sin\\vartheta\\,d\\vartheta=\\Big[\\frac{\\sin^2\\vartheta}2\\Big]_0^{\\pi/2}=\\frac12,\\qquad\\int_1^2 4r^3dr=15$$
$$m=2\\pi\\cdot15\\cdot\\frac12=15\\pi$$` },
      ],
      ergebnis: `$m=15\\pi$`,
    },
    {
      id: "t3-a13",
      typ: "Klausurtyp",
      titel: "Kurvenintegrale 1. und 2. Art",
      quelle: "Übungsblatt 11, Aufgabe 4",
      schwierigkeit: 2,
      video: "Bsp50–Bsp52 (Kurvenintegrale)",
      aufgabe: `Kurve $K$: $\\vec r(t)=\\begin{pmatrix}\\sin t+2\\\\\\cos t\\\\\\frac23(t-1)^{3/2}\\end{pmatrix}$, $t\\in[1,4]$.
**(a)** Länge $\\ell(K)$.
**(b)** Arbeit $W$ im Kraftfeld $\\vec F(x,y,z)=(x-2,\\ y,\\ 3z)^T$ entlang $K$.`,
      hinweis: `(a) $\\ell=\\int|\\vec r\\,'(t)|\\,dt$. (b) $W=\\int_K\\vec F\\cdot d\\vec r=\\int \\vec F(\\vec r(t))\\cdot\\vec r\\,'(t)\\,dt$.`,
      schritte: [
        { titel: "(a) Tangentenvektor", text: `$$\\vec r\\,'(t)=\\begin{pmatrix}\\cos t\\\\-\\sin t\\\\(t-1)^{1/2}\\end{pmatrix},\\qquad |\\vec r\\,'(t)|=\\sqrt{\\cos^2t+\\sin^2t+(t-1)}=\\sqrt t$$` },
        { titel: "(a) Länge", text: `$$\\ell(K)=\\int_1^4\\sqrt t\\,dt=\\Big[\\frac23t^{3/2}\\Big]_1^4=\\frac23(8-1)=\\frac{14}3$$` },
        { titel: "(b) Skalarprodukt", text: `$\\vec F(\\vec r(t))=\\big(\\sin t,\\ \\cos t,\\ 2(t-1)^{3/2}\\big)^T$:
$$\\vec F\\cdot\\vec r\\,'=\\sin t\\cos t-\\cos t\\sin t+2(t-1)^{3/2}(t-1)^{1/2}=2(t-1)^2$$` },
        { titel: "(b) Arbeit", text: `$$W=\\int_1^4 2(t-1)^2dt=\\Big[\\frac23(t-1)^3\\Big]_1^4=\\frac23\\cdot27=18$$` },
      ],
      ergebnis: `(a) $\\ell(K)=\\frac{14}3$ · (b) $W=18$`,
    },
    {
      id: "t3-a14",
      typ: "Klausurtyp",
      titel: "Kurvenintegrale (selbständig)",
      quelle: "Übungsblatt 11, Aufgabe 6",
      schwierigkeit: 3,
      aufgabe: `Kurve $K$: $\\vec r(t)=(1+t,\\ \\sin t-1,\\ \\cos t)^T$, $t\\in[0,\\pi]$.
**(a)** In welchem Punkt schneidet $K$ die $x,y$-Ebene?
**(b)** Masse $m(K)$ bei Liniendichte $\\varrho=x^2\\big[(y+1)^2+z^2\\big]$.
**(c)** Arbeit $W$ im Kraftfeld $\\vec F=(xz,\\ y+1,\\ z)^T$.`,
      hinweis: `(b) ist ein KI 1. Art: $m=\\int\\varrho(\\vec r(t))\\,|\\vec r\\,'(t)|\\,dt$. Auf der Kurve gilt $(y+1)^2+z^2=\\sin^2t+\\cos^2t=1$!`,
      schritte: [
        { titel: "(a) Schnittpunkt", text: `$z=\\cos t=0\\Rightarrow t=\\frac\\pi2$:
$$P\\Big(1+\\frac\\pi2,\\ 0,\\ 0\\Big)$$` },
        { titel: "(b) Masse", text: `$\\vec r\\,'=(1,\\cos t,-\\sin t)$, $|\\vec r\\,'|=\\sqrt{1+\\cos^2t+\\sin^2t}=\\sqrt2$ (konstant!)
$\\varrho(\\vec r(t))=(1+t)^2\\cdot[\\sin^2t+\\cos^2t]=(1+t)^2$
$$m=\\int_0^\\pi(1+t)^2\\sqrt2\\,dt=\\sqrt2\\Big[\\frac{(1+t)^3}3\\Big]_0^\\pi=\\frac{\\sqrt2}3\\big((1+\\pi)^3-1\\big)\\approx33{,}0$$` },
        { titel: "(c) Arbeit", text: `$\\vec F(\\vec r(t))=\\big((1+t)\\cos t,\\ \\sin t,\\ \\cos t\\big)^T$
$$\\vec F\\cdot\\vec r\\,'=(1+t)\\cos t+\\sin t\\cos t-\\cos t\\sin t=(1+t)\\cos t$$
$$W=\\int_0^\\pi(1+t)\\cos t\\,dt=\\big[(1+t)\\sin t+\\cos t\\big]_0^\\pi=(-1)-(1)=-2$$
(partielle Integration; negative Arbeit: Bewegung gegen das Feld)` },
      ],
      ergebnis: `(a) $P(1+\\frac\\pi2,0,0)$ · (b) $m=\\frac{\\sqrt2}3\\big((1+\\pi)^3-1\\big)\\approx33{,}0$ · (c) $W=-2$`,
    },
    {
      id: "t3-a15",
      typ: "Verständnis",
      titel: "Körper aus zwei Hälften beschreiben (selbständig)",
      quelle: "Übungsblatt 11, Aufgabe 5",
      schwierigkeit: 2,
      aufgabe: `$B_o=\\{x^2+y^2\\le4,\\ 0\\le z\\le4-\\frac14(x^2+y^2)^2\\}$ (oben),
$B_u=\\{x^2+y^2\\le4,\\ -\\sqrt{4-(x^2+y^2)}\\le z\\le0\\}$ (unten, Halbkugel).
**(b)** $B_o$ in Zylinderkoordinaten. **(c)** $V(B_o)$. **(d)** $B_u$ in Zylinder- **und** Kugelkoordinaten.`,
      hinweis: `$(x^2+y^2)^2=r^4$. Die untere Hälfte ist eine nach unten geklappte Halbkugel mit Radius 2.`,
      schritte: [
        { titel: "(b) Obere Hälfte", text: `$$0\\le r\\le2,\\quad 0\\le\\varphi\\le2\\pi,\\quad 0\\le z\\le4-\\frac{r^4}4$$` },
        { titel: "(c) Volumen", text: `$$V(B_o)=2\\pi\\int_0^2 r\\Big(4-\\frac{r^4}4\\Big)dr=2\\pi\\Big[2r^2-\\frac{r^6}{24}\\Big]_0^2=2\\pi\\Big(8-\\frac{64}{24}\\Big)=\\frac{32\\pi}{3}$$` },
        { titel: "(d) Untere Hälfte", text: `**Zylinder:** $0\\le r\\le2$, $0\\le\\varphi\\le2\\pi$, $-\\sqrt{4-r^2}\\le z\\le0$
**Kugel:** $x=r\\cos\\varphi\\sin\\vartheta$, $y=r\\sin\\varphi\\sin\\vartheta$, $z=r\\cos\\vartheta$ mit
$$0\\le r\\le2,\\quad 0\\le\\varphi\\le2\\pi,\\quad \\frac\\pi2\\le\\vartheta\\le\\pi$$` },
      ],
      ergebnis: `(c) $V(B_o)=\\frac{32\\pi}3$ · (d) Halbkugel: $\\vartheta\\in[\\frac\\pi2,\\pi]$, $r\\le2$`,
    },
  ],
  karten: [
    { id: "t3-k01", vorne: `**Ebenes Bereichsintegral** über Normalbereich (bzgl. $x$) – wie aufstellen?`, hinten: `$$\\iint_Bf\\,db=\\int_{x_1}^{x_2}\\int_{y_u(x)}^{y_o(x)}f(x,y)\\,dy\\,dx$$ Von **innen nach außen** integrieren; innere Grenzen dürfen von $x$ abhängen.` },
    { id: "t3-k02", vorne: `**Polarkoordinaten**: Transformation + Flächenelement?`, hinten: `$$x=r\\cos\\varphi,\\quad y=r\\sin\\varphi,\\quad db=r\\,dr\\,d\\varphi$$ Den Faktor $r$ nie vergessen! Nützlich: $x^2+y^2=r^2$.` },
    { id: "t3-k03", vorne: `Wann lohnen sich **Polarkoordinaten**?`, hinten: `Wenn $B$ durch Kreise/Kreisringe/Sektoren begrenzt ist oder der Integrand $x^2+y^2$ enthält.` },
    { id: "t3-k04", vorne: `Formeln: **Fläche, Masse, Schwerpunkt** eines ebenen Bereichs?`, hinten: `$$Fl(B)=\\iint_B1\\,db,\\qquad m=\\iint_B\\varrho\\,db$$ $$x_0=\\frac1{Fl}\\iint_Bx\\,db,\\qquad y_0=\\frac1{Fl}\\iint_By\\,db$$` },
    { id: "t3-k05", vorne: `**Zylinderkoordinaten**: Transformation + Volumenelement?`, hinten: `$$x=r\\cos\\varphi,\\ y=r\\sin\\varphi,\\ z=z,\\qquad db=r\\,dz\\,dr\\,d\\varphi$$` },
    { id: "t3-k06", vorne: `**Kugelkoordinaten**: Transformation + Volumenelement?`, hinten: `$$x=r\\cos\\varphi\\sin\\vartheta,\\quad y=r\\sin\\varphi\\sin\\vartheta,\\quad z=r\\cos\\vartheta$$ $$db=r^2\\sin\\vartheta\\,d\\vartheta\\,dr\\,d\\varphi$$ ($\\vartheta$ von der positiven $z$-Achse gemessen, $\\vartheta\\in[0,\\pi]$)` },
    { id: "t3-k07", vorne: `Obere **Halbkugel** vom Radius $R$ in Kugelkoordinaten?`, hinten: `$$0\\le r\\le R,\\quad 0\\le\\varphi\\le2\\pi,\\quad 0\\le\\vartheta\\le\\frac\\pi2$$ (untere Hälfte: $\\frac\\pi2\\le\\vartheta\\le\\pi$)` },
    { id: "t3-k08", vorne: `**Volumen** eines Körpers $B$ als Bereichsintegral?`, hinten: `$$V(B)=\\iiint_B1\\,db$$ z.B. in Zylinderkoordinaten: $\\int\\!\\int\\!\\int r\\,dz\\,dr\\,d\\varphi$` },
    { id: "t3-k09", vorne: `**Kurvenintegral 1. Art** (z.B. Masse einer Kurve): Formel?`, hinten: `$$\\int_K\\varrho\\,ds=\\int_{t_1}^{t_2}\\varrho(\\vec r(t))\\cdot|\\vec r\\,'(t)|\\,dt$$ Skalares Integral – Orientierung egal.` },
    { id: "t3-k10", vorne: `**Länge einer Raumkurve** $\\vec r(t)$, $t\\in[t_1,t_2]$?`, hinten: `$$\\ell(K)=\\int_{t_1}^{t_2}|\\vec r\\,'(t)|\\,dt=\\int_{t_1}^{t_2}\\sqrt{x'^2+y'^2+z'^2}\\,dt$$` },
    { id: "t3-k11", vorne: `**Kurvenintegral 2. Art** (Arbeit im Kraftfeld): Formel?`, hinten: `$$W=\\int_K\\vec F\\cdot d\\vec r=\\int_{t_1}^{t_2}\\vec F(\\vec r(t))\\cdot\\vec r\\,'(t)\\,dt$$ Skalarprodukt! Orientierung der Kurve ändert das Vorzeichen.` },
    { id: "t3-k12", vorne: `Typische **Winkelbereiche**: $y\\ge x$ und $y\\ge-x$? $\\quad y\\ge\\sqrt3 x,\\ x\\ge0$?`, hinten: `$y\\ge|x|$: $\\varphi\\in[\\frac\\pi4,\\frac{3\\pi}4]$
$y\\ge\\sqrt3x,\\ x\\ge0$: $\\varphi\\in[\\frac\\pi3,\\frac\\pi2]$ ($\\tan\\varphi=\\sqrt3$ bei $\\frac\\pi3$)` },
    { id: "t3-k13", vorne: `Häufige Stammfunktion: $\\int r\\sqrt{a^2-r^2}\\,dr=?$`, hinten: `$$-\\frac13(a^2-r^2)^{3/2}+c$$ (Substitution $t=a^2-r^2$) – Standard bei Kugel-Aufgaben in Zylinderkoordinaten.` },
    { id: "t3-k14", vorne: `**Symmetrie-Trick** bei Bereichsintegralen?`, hinten: `Ist $B$ symmetrisch (z.B. zur $y$-Achse) und der Integrand in der gespiegelten Variable **ungerade** ⟹ Integral $=0$ (z.B. Schwerpunkt $x_0=0$). Spart viel Rechnung!` },
  ],
});
