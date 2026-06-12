/* Thema 2: Funktionen mehrerer Variablen
   Quellen: Übungsblätter 5–8, Arbeitsblatt 2, Repetitorien-Videos Bsp12–24.
   Alle Endergebnisse gegen die gedruckten Lösungen geprüft. */
window.MATHE2_DATA.themen.push({
  id: "t2",
  titel: "Funktionen mehrerer Variablen",
  untertitel: "Partielle Ableitungen, Tangentialebene, Fehlerrechnung, Extrema, Lagrange, Regression",
  einfuehrung: `**Worum geht es?** Funktionen $f(x,y)$ mit mehreren Eingängen – wie Temperaturfelder oder Bauteilformeln. Der rote Faden: **partielle Ableitungen** sind das Universalwerkzeug. Aus ihnen baut man die Tangentialebene (lineare Näherung), das totale Differential (⟹ Fehlerrechnung im Labor), findet Extrema (mit und ohne Nebenbedingung) und löst Ausgleichsprobleme (Regression).`,
  bloecke: [
    { titel: "Grundbegriffe", intro: `Das Fundament: Wo ist $f$ überhaupt definiert (**Definitionsbereich**)? Wie sieht $f$ aus (**Niveaulinien** = Höhenlinien wie auf der Wanderkarte)? Und wie ändert sich $f$ in $x$- bzw. $y$-Richtung (**partielle Ableitungen** – die jeweils anderen Variablen als Konstanten behandeln)?`, aufgaben: ["t2-a0a","t2-a0b","t2-a0c","t2-a0d","t2-a0e"] },
    { titel: "Linearisierung & Fehlerrechnung", intro: `Eine Idee, zwei Anwendungen: $f$ wird lokal durch seine **Tangentialebene** ersetzt. Geometrisch ergibt das die Ebenengleichung; rechnerisch das **totale Differential** $dz=f_x\\,dx+f_y\\,dy$ – und damit die Frage jedes Praktikums: Wie stark schlagen Messfehler auf das Ergebnis durch? (Absoluter Größtfehler mit Beträgen, relativer Fehler über die Exponentenregel.)`, aufgaben: ["t2-a01","t2-a05","t2-a02","t2-a03","t2-a04","t2-a06","t2-a07"] },
    { titel: "Extrema & Ausgleichsrechnung", intro: `Extrema in 2D: stationäre Stellen ($f_x=f_y=0$) finden, dann mit $D=f_{xx}f_{yy}-f_{xy}^2$ klassifizieren (Min/Max/Sattel). Auf **abgeschlossenen Bereichen** zusätzlich den Rand untersuchen. Die **Regression** ist dieselbe Theorie in Aktion: Die Fehlerquadratsumme ist eine Funktion der Parameter – ihr Minimum liefert die Ausgleichskurve.`, aufgaben: ["t2-a08","t2-a11","t2-a09","t2-a10","t2-a12"] },
    { titel: "Extrema mit Nebenbedingung", intro: `Jetzt darf $(x,y)$ nur noch auf einer Kurve $g(x,y)=0$ liegen (z.B. "auf der Ellipse"). Zwei Wege: **Lagrange** ($\\nabla f=\\mu\\nabla g$ plus NB – funktioniert immer) oder **Substitution** (NB auflösen und einsetzen – wenn möglich, meist schneller). Ob Min oder Max vorliegt, entscheidet das Niveaulinienbild, nicht die $D$-Formel!`, aufgaben: ["t2-a13","t2-a16","t2-a14","t2-a15","t2-a17"] },
  ],
  aufgaben: [
    {
      id: "t2-a0a",
      typ: "Verständnis",
      titel: "Definitionsbereiche bestimmen",
      quelle: "Übungsblatt 5, Aufgabe 1",
      schwierigkeit: 1,
      aufgabe: `Bestimmen Sie jeweils den größtmöglichen Definitionsbereich $D_i\\subseteq\\mathbb R^2$ und skizzieren Sie ihn:
$$f_1=\\sqrt{y-2x}\\qquad f_2=\\ln(y)-\\sqrt x\\qquad f_3=\\ln(x^2+y^2)$$
$$f_4=\\frac{1}{\\sqrt{1-x^2-y^2}}\\qquad f_5=\\sqrt{(x-3)y}\\qquad f_6=\\frac{\\sqrt{x-y}}{y}$$`,
      hinweis: `Checkliste: Wurzel ⟹ Radikand $\\ge0$; $\\ln$ ⟹ Argument $>0$; Nenner ⟹ $\\neq0$ (unter einer Wurzel im Nenner sogar $>0$). Bei $f_5$: Produkt $\\ge0$ ⟹ beide Faktoren gleiches Vorzeichen.`,
      schritte: [
        { titel: "f₁ bis f₃", text: `$D_1=\\{y\\ge2x\\}$ – Halbebene oberhalb der Geraden $y=2x$
$D_2=\\{x\\ge0\\ \\wedge\\ y>0\\}$ – rechter oberer Quadrant (ohne $x$-Achse)
$D_3=\\mathbb R^2\\setminus\\{(0,0)\\}$ – nur der Ursprung fällt raus ($x^2+y^2>0$ sonst überall)` },
        { titel: "f₄", text: `Wurzel im Nenner ⟹ $1-x^2-y^2>0$:
$$D_4=\\{x^2+y^2<1\\}$$ offene Einheitskreisscheibe (Rand gehört NICHT dazu)` },
        { titel: "f₅", text: `$(x-3)\\,y\\ge0$ ⟹ beide Faktoren $\\ge0$ oder beide $\\le0$:
$$D_5=\\{(x\\ge3\\wedge y\\ge0)\\ \\vee\\ (x\\le3\\wedge y\\le0)\\}$$ zwei "diagonal" liegende Viertelebenen mit Ecke $(3,0)$` },
        { titel: "f₆", text: `Radikand: $x-y\\ge0$; Nenner: $y\\neq0$:
$$D_6=\\{y\\le x\\ \\wedge\\ y\\neq0\\}$$` },
      ],
      ergebnis: `$D_1: y\\ge2x$ · $D_2: x\\ge0,y>0$ · $D_3: \\mathbb R^2\\setminus\\{(0,0)\\}$ · $D_4: x^2+y^2<1$ · $D_5$: $(x{\\ge}3,y{\\ge}0)\\vee(x{\\le}3,y{\\le}0)$ · $D_6: y\\le x,\\ y\\neq0$`,
    },
    {
      id: "t2-a0b",
      typ: "Verständnis",
      titel: "Niveaulinienbilder & Wertebereiche",
      quelle: "Übungsblatt 5, Aufgabe 2",
      schwierigkeit: 2,
      video: "Bsp12–Bsp13 (Niveaulinien)",
      aufgabe: `Zeichnen Sie je ein Niveaulinienbild (5 Niveaus $c$), beschreiben Sie den Graphen und geben Sie den Wertebereich $W_i$ an:
$$f_1=4-x-2y\\qquad f_2=x^2-2y\\qquad f_3=e^{-(x^2+y^2)}$$
$$f_4=\\sqrt{y-2x}\\qquad f_5=xy\\qquad f_6=\\frac{1}{1-x^2-y^2}$$`,
      hinweis: `Niveaulinie zu $c$: Gleichung $f(x,y)=c$ nach $y$ (oder nach $x^2+y^2$) auflösen und als Kurvenschar lesen.`,
      schritte: [
        { titel: "f₁ und f₂", text: `$N_c(f_1)$: $y=-\\frac12x+\\frac{4-c}2$ – **parallele Geraden**; Graph: Ebene; $W_1=\\mathbb R$
$N_c(f_2)$: $y=\\frac12x^2-\\frac c2$ – **verschobene Parabeln**; $W_2=\\mathbb R$` },
        { titel: "f₃", text: `$e^{-(x^2+y^2)}=c$ ⟹ $x^2+y^2=-\\ln c$ (nur $0<c\\le1$ möglich) – **Kreise** um den Ursprung; Graph: "Glockenhügel" der Höhe 1; $W_3=(0,1]$` },
        { titel: "f₄", text: `$\\sqrt{y-2x}=c$ ($c\\ge0$) ⟹ $y=2x+c^2$ – **parallele Geraden**, nur auf $D=\\{y\\ge2x\\}$; $W_4=[0,\\infty)$` },
        { titel: "f₅", text: `$xy=c$: für $c=0$ die beiden **Achsen**, sonst **Hyperbeln** $y=\\frac cx$; Graph: Sattelfläche; $W_5=\\mathbb R$` },
        { titel: "f₆", text: `$\\frac1{1-x^2-y^2}=c$ ⟹ $x^2+y^2=1-\\frac1c$ – **Kreise** (für $c\\ge1$ innen, $c<0$ außen vom Einheitskreis);
$W_6=(-\\infty,0)\\cup[1,\\infty)$ (Werte in $[0,1)$ werden nie angenommen!)` },
      ],
      ergebnis: `$W_1=W_2=W_5=\\mathbb R$, $W_3=(0,1]$, $W_4=[0,\\infty)$, $W_6=(-\\infty,0)\\cup[1,\\infty)$; Niveaulinien: Geraden / Parabeln / Kreise / Geraden / Hyperbeln / Kreise`,
    },
    {
      id: "t2-a0c",
      typ: "Rechentechnik",
      titel: "Partielle Ableitungen 1. und 2. Ordnung",
      quelle: "Übungsblatt 5, Aufgabe 3",
      schwierigkeit: 2,
      video: "Bsp14 (Partielle Ableitungen)",
      aufgabe: `Ermitteln Sie sämtliche partiellen Ableitungen 1. und 2. Ordnung:
**(a)** $f=x^2y^3+xy^4-x^2+2\\sqrt y$ $\\quad$ **(b)** $f=e^{x/y}$ $\\quad$ **(c)** $f=e^{2y}\\sin x+\\frac yx$
**(d)** $f=x\\ln(x^2-y)$ $\\quad$ **(e)** $f=\\frac{x+y}{x-y}$ $\\quad$ **(f)** $f=x^2ye^z+\\sin(x-y)-xz^3$`,
      hinweis: `Je eine Variable "lebt", alle anderen sind Konstanten. Kontrolle: Satz von Schwarz $f_{xy}=f_{yx}$ muss erfüllt sein!`,
      schritte: [
        { titel: "Teil (a)", text: `$f_x=2xy^3+y^4-2x$, $\\quad f_y=3x^2y^2+4xy^3+\\frac1{\\sqrt y}$
$f_{xx}=2y^3-2$, $\\quad f_{xy}=f_{yx}=6xy^2+4y^3$, $\\quad f_{yy}=6x^2y+12xy^2-\\frac1{2\\sqrt{y^3}}$` },
        { titel: "Teil (b)", text: `Kettenregel, innere Funktion $\\frac xy$:
$f_x=\\frac1ye^{x/y}$, $\\quad f_y=-\\frac{x}{y^2}e^{x/y}$
$f_{xx}=\\frac1{y^2}e^{x/y}$, $\\quad f_{xy}=f_{yx}=-\\frac{x+y}{y^3}e^{x/y}$, $\\quad f_{yy}=\\frac{x^2+2xy}{y^4}e^{x/y}$` },
        { titel: "Teil (c)", text: `$f_x=e^{2y}\\cos x-\\frac{y}{x^2}$, $\\quad f_y=2e^{2y}\\sin x+\\frac1x$
$f_{xx}=-e^{2y}\\sin x+\\frac{2y}{x^3}$, $\\quad f_{xy}=f_{yx}=2e^{2y}\\cos x-\\frac1{x^2}$, $\\quad f_{yy}=4e^{2y}\\sin x$` },
        { titel: "Teil (d)", text: `Produkt- + Kettenregel:
$f_x=\\ln(x^2-y)+\\frac{2x^2}{x^2-y}$, $\\quad f_y=\\frac{-x}{x^2-y}$
$f_{xx}=\\frac{2x^3-6xy}{(x^2-y)^2}$, $\\quad f_{xy}=f_{yx}=\\frac{x^2+y}{(x^2-y)^2}$, $\\quad f_{yy}=\\frac{-x}{(x^2-y)^2}$` },
        { titel: "Teil (e)", text: `Quotientenregel:
$f_x=\\frac{(x-y)-(x+y)}{(x-y)^2}=\\frac{-2y}{(x-y)^2}$, $\\quad f_y=\\frac{2x}{(x-y)^2}$
$f_{xx}=\\frac{4y}{(x-y)^3}$, $\\quad f_{xy}=f_{yx}=\\frac{-2(x+y)}{(x-y)^3}$, $\\quad f_{yy}=\\frac{4x}{(x-y)^3}$` },
        { titel: "Teil (f) – drei Variablen", text: `$f_x=2xye^z+\\cos(x-y)-z^3$, $\\quad f_y=x^2e^z-\\cos(x-y)$, $\\quad f_z=x^2ye^z-3xz^2$
$f_{xx}=2ye^z-\\sin(x-y)$, $f_{yy}=-\\sin(x-y)$, $f_{zz}=x^2ye^z-6xz$
$f_{xy}=2xe^z+\\sin(x-y)$, $f_{xz}=2xye^z-3z^2$, $f_{yz}=x^2e^z$ (jeweils $=f_{yx},f_{zx},f_{zy}$)` },
      ],
      ergebnis: `Siehe Schritte – Kontrolle jeweils über $f_{xy}=f_{yx}$ (Satz von Schwarz).`,
    },
    {
      id: "t2-a0d",
      typ: "Anwendung",
      titel: "Temperaturfeld auswerten",
      quelle: "Übungsblatt 5, Aufgabe 4",
      schwierigkeit: 2,
      aufgabe: `Über dem Erdboden herrsche die Temperaturverteilung
$$T(x,y,z)=\\frac{a\\,e^{-bz}}{1+c(x^2+y^2)},\\qquad a=30\\,°\\text{C},\\ b=0{,}1\\,\\text{m}^{-1},\\ c=0{,}1\\,\\text{m}^{-2}$$
Berechnen Sie $T$ und alle partiellen Ableitungen 1. Ordnung im Punkt $P(1\\,\\text{m},3\\,\\text{m},5\\,\\text{m})$ (mit Einheiten!).`,
      hinweis: `Erst allgemein ableiten (Quotienten-/Kettenregel), dann einsetzen. In $P$: $c(x^2+y^2)=0{,}1\\cdot10=1$, $bz=0{,}5$.`,
      schritte: [
        { titel: "Funktionswert", text: `$$T(P)=\\frac{30\\,e^{-0{,}5}}{1+1}=15\\,e^{-1/2}\\approx9{,}098\\ °\\text{C}$$` },
        { titel: "Ableitungen allgemein", text: `$$T_x=\\frac{-2acx\\,e^{-bz}}{(1+c(x^2+y^2))^2},\\qquad T_y=\\frac{-2acy\\,e^{-bz}}{(1+c(x^2+y^2))^2},\\qquad T_z=\\frac{-ab\\,e^{-bz}}{1+c(x^2+y^2)}$$` },
        { titel: "Einsetzen", text: `$$T_x(P)=\\frac{-2\\cdot30\\cdot0{,}1\\cdot1\\cdot e^{-1/2}}{4}=-\\frac32e^{-1/2}\\approx-0{,}9098\\ \\tfrac{°\\text{C}}{\\text m}$$
$$T_y(P)=-\\frac92e^{-1/2}\\approx-2{,}7294\\ \\tfrac{°\\text{C}}{\\text m},\\qquad T_z(P)=-\\frac{30\\cdot0{,}1\\,e^{-1/2}}{2}=-\\frac32e^{-1/2}\\approx-0{,}9098\\ \\tfrac{°\\text{C}}{\\text m}$$` },
      ],
      ergebnis: `$T\\approx9{,}098\\,°$C · $T_x=T_z=-\\frac32e^{-1/2}\\approx-0{,}91\\,\\frac{°\\text C}{\\text m}$ · $T_y=-\\frac92e^{-1/2}\\approx-2{,}73\\,\\frac{°\\text C}{\\text m}$`,
    },
    {
      id: "t2-a0e",
      typ: "Verständnis",
      titel: "Flächen im Raum & Ableitungs-Training (selbständig)",
      quelle: "Übungsblatt 5, Aufgaben 6 & 7 (Auswahl)",
      schwierigkeit: 2,
      aufgabe: `**(A)** Welche Flächen im $\\mathbb R^3$ beschreiben: (a) $z=x-y$, (b) $x^2+y^2=9,\\ z\\in\\mathbb R$, (c) $z=\\sqrt{4-x^2-y^2}$?
**(B)** Partielle Ableitungen 1. Ordnung: (b) $z=x^y$, (d) $z=\\ln(x^2+y)$, (g) $z=\\sqrt{x^2+y^2}$, (h) $z=e^{x^2+5xy-y^2}$`,
      hinweis: `(B)(b): Nach $x$ ist es eine Potenzfunktion, nach $y$ eine Exponentialfunktion ($x^y=e^{y\\ln x}$)!`,
      schritte: [
        { titel: "(A) Flächen", text: `(a) **Ebene** durch den Ursprung (Normalenvektor $(1,-1,-1)^T$)
(b) **Zylindermantel** mit Radius 3 um die $z$-Achse
(c) **obere Halbkugel** mit Radius 2 um den Ursprung ($z\\ge0$)` },
        { titel: "(B) (b) und (d)", text: `$z=x^y$: $\\;z_x=y\\,x^{y-1}$, $\\quad z_y=x^y\\ln x$
$z=\\ln(x^2+y)$: $\\;z_x=\\frac{2x}{x^2+y}$, $\\quad z_y=\\frac1{x^2+y}$` },
        { titel: "(B) (g) und (h)", text: `$z=\\sqrt{x^2+y^2}$: $\\;z_x=\\frac{x}{\\sqrt{x^2+y^2}}$, $\\quad z_y=\\frac{y}{\\sqrt{x^2+y^2}}$
$z=e^{x^2+5xy-y^2}$: $\\;z_x=(2x+5y)\\,e^{x^2+5xy-y^2}$, $\\quad z_y=(5x-2y)\\,e^{x^2+5xy-y^2}$` },
      ],
      ergebnis: `(A) Ebene / Zylinder (R=3) / obere Halbkugel (R=2) · (B) siehe Schritte`,
    },
    {
      id: "t2-a01",
      typ: "Rechentechnik",
      titel: "Tangentialebenen",
      quelle: "Übungsblatt 6, Aufgabe 1",
      schwierigkeit: 2,
      video: "Bsp15–Bsp17 (Tangentialebenen)",
      aufgabe: `Bestimmen Sie die Gleichung $z=T(x,y)$ der Tangentialebene an den Graphen von $f$ im Punkt $P_0(x_0,y_0,z_0)$ mit $z_0=f(x_0,y_0)$:
**(a)** $f(x,y)=(x^2+4)(3-y)+y^2+2y$, $(x_0,y_0)=(-1,2)$
**(b)** $f(x,y)=(x^2+8x+10)\\ln(y)+2y$, $(x_0,y_0)=(-3,1)$
**(c)** $f(x,y)=y\\ln(x)+4\\sqrt{\\frac yx}-x^2$, $(x_0,y_0)=(1,4)$
**(d)** $f(x,y)=\\sin(x-2y)$, $(x_0,y_0)=(\\pi,\\frac\\pi4)$`,
      hinweis: `Formel: $T(x,y)=f(x_0,y_0)+f_x(x_0,y_0)\\,(x-x_0)+f_y(x_0,y_0)\\,(y-y_0)$ — also immer: Funktionswert, beide partiellen Ableitungen, einsetzen.`,
      schritte: [
        { titel: "Teil (a)", text: `$f(-1,2)=5\\cdot1+4+4=13$
$f_x=2x(3-y)\\Rightarrow f_x(-1,2)=-2$; $\\quad f_y=-(x^2+4)+2y+2\\Rightarrow f_y(-1,2)=-5+6=1$
$$T(x,y)=13-2(x+1)+1\\cdot(y-2)=-2x+y+9$$` },
        { titel: "Teil (b)", text: `$f(-3,1)=(9-24+10)\\cdot\\ln1+2=2$
$f_x=(2x+8)\\ln y\\Rightarrow f_x(-3,1)=2\\cdot 0=0$; $\\quad f_y=\\frac{x^2+8x+10}{y}+2\\Rightarrow f_y(-3,1)=-5+2=-3$
$$T(x,y)=2+0-3(y-1)=-3y+5$$` },
        { titel: "Teil (c)", text: `$f(1,4)=0+4\\cdot2-1=7$
$f_x=\\frac yx-2\\sqrt y\\,x^{-3/2}-2x\\Rightarrow f_x(1,4)=4-4-2=-2$
$f_y=\\ln x+\\frac{2}{\\sqrt{xy}}\\Rightarrow f_y(1,4)=0+1=1$
$$T(x,y)=7-2(x-1)+(y-4)=-2x+y+5$$` },
        { titel: "Teil (d)", text: `$f(\\pi,\\tfrac\\pi4)=\\sin(\\pi-\\tfrac\\pi2)=\\sin\\tfrac\\pi2=1$
$f_x=\\cos(x-2y)=\\cos\\tfrac\\pi2=0$; $\\quad f_y=-2\\cos(x-2y)=0$
$$T(x,y)=1$$ (waagerechte Tangentialebene – $P_0$ ist stationäre Stelle!)` },
      ],
      ergebnis: `(a) $z=-2x+y+9$ · (b) $z=-3y+5$ · (c) $z=-2x+y+5$ · (d) $z=1$`,
    },
    {
      id: "t2-a02",
      typ: "Anwendung",
      titel: "Fehlerrechnung: Rohr-Widerstandsmoment",
      quelle: "Übungsblatt 6, Aufgabe 2",
      schwierigkeit: 2,
      video: "Bsp21–Bsp22 (Fehlerrechnung)",
      aufgabe: `Für ein Rohr wurden gemessen: $d=(58{,}7\\pm0{,}4)$ mm, $D=(71{,}3\\pm0{,}5)$ mm. Das Widerstandsmoment gegen Torsion ist
$$W_t(d,D)=\\frac{\\pi}{16}\\cdot\\frac{D^4-d^4}{D}$$
Berechnen Sie $W_t$ und schätzen Sie mit dem (totalen) Differential den maximalen absoluten Fehler $|\\Delta W_t|$ ab.`,
      hinweis: `Größtfehler: $|\\Delta W_t|\\approx\\Big|\\frac{\\partial W_t}{\\partial d}\\Big|\\,|\\Delta d|+\\Big|\\frac{\\partial W_t}{\\partial D}\\Big|\\,|\\Delta D|$. Vorher $W_t=\\frac\\pi{16}(D^3-\\frac{d^4}{D})$ umschreiben.`,
      schritte: [
        { titel: "Funktionswert", text: `$$W_t(58{,}7;\\,71{,}3)=\\frac{\\pi}{16}\\cdot\\frac{71{,}3^4-58{,}7^4}{71{,}3}\\approx 38\\,474{,}39\\ \\text{mm}^3$$` },
        { titel: "Partielle Ableitungen", text: `$W_t=\\frac{\\pi}{16}\\Big(D^3-\\frac{d^4}{D}\\Big)$:
$$\\frac{\\partial W_t}{\\partial d}=-\\frac{\\pi}{16}\\cdot\\frac{4d^3}{D},\\qquad \\frac{\\partial W_t}{\\partial D}=\\frac{\\pi}{16}\\Big(3D^2+\\frac{d^4}{D^2}\\Big)$$
Eingesetzt: $\\big|\\frac{\\partial W_t}{\\partial d}\\big|\\approx 2228{,}1$, $\\big|\\frac{\\partial W_t}{\\partial D}\\big|\\approx 3453{,}1$` },
        { titel: "Größtfehler", text: `$$|\\Delta W_t|\\approx 2228{,}1\\cdot0{,}4+3453{,}1\\cdot0{,}5\\approx 891{,}2+1726{,}6\\approx 2617{,}75\\ \\text{mm}^3$$` },
      ],
      ergebnis: `$W_t\\approx 38\\,474{,}39\\ \\text{mm}^3$, $\\quad|\\Delta W_t|\\approx 2617{,}75\\ \\text{mm}^3$`,
    },
    {
      id: "t2-a03",
      typ: "Anwendung",
      titel: "Kegelmantel mit Fehlerabschätzung",
      quelle: "Übungsblatt 6, Aufgabe 3",
      schwierigkeit: 3,
      aufgabe: `Die Gerade $y=\\frac rh x$, $x\\in[0,h]$, rotiert um die $x$-Achse (gerader Kreiskegel, Höhe $h$, Radius $r$).
**(a)** Zeigen Sie über das Mantelflächen-Integral, dass $M=\\pi r\\sqrt{h^2+r^2}$.
**(b)** Für $h=12\\,\\text{cm}\\pm1\\,\\text{mm}$, $r=5\\,\\text{cm}\\pm0{,}5\\,\\text{mm}$: Berechnen Sie $M$ und schätzen Sie $|\\Delta M|$ mit dem totalen Differential ab.`,
      hinweis: `$M=2\\pi\\int_0^h f(x)\\sqrt{1+(f'(x))^2}\\,dx$ mit $f(x)=\\frac rh x$ – die Wurzel ist hier konstant! Bei (b): $\\sqrt{144+25}=13$.`,
      schritte: [
        { titel: "(a) Integral aufstellen und lösen", text: `$f'(x)=\\frac rh$ (konstant):
$$M=2\\pi\\int_0^h \\frac rh x\\sqrt{1+\\frac{r^2}{h^2}}\\,dx=2\\pi\\frac rh\\cdot\\frac{\\sqrt{h^2+r^2}}{h}\\cdot\\Big[\\frac{x^2}2\\Big]_0^h=2\\pi\\frac rh\\cdot\\frac{\\sqrt{h^2+r^2}}{h}\\cdot\\frac{h^2}2=\\pi r\\sqrt{h^2+r^2}$$` },
        { titel: "(b) Funktionswert", text: `$$M(12,5)=\\pi\\cdot5\\cdot\\sqrt{144+25}=65\\pi\\approx 204{,}204\\ \\text{cm}^2$$` },
        { titel: "(b) Partielle Ableitungen", text: `$$M_h=\\frac{\\pi r h}{\\sqrt{h^2+r^2}}=\\frac{60\\pi}{13}\\approx14{,}50,\\qquad M_r=\\pi\\Big(\\sqrt{h^2+r^2}+\\frac{r^2}{\\sqrt{h^2+r^2}}\\Big)=\\pi\\cdot\\frac{194}{13}\\approx46{,}88$$` },
        { titel: "(b) Größtfehler", text: `$\\Delta h=0{,}1$ cm, $\\Delta r=0{,}05$ cm:
$$|\\Delta M|\\approx 14{,}50\\cdot0{,}1+46{,}88\\cdot0{,}05\\approx 1{,}450+2{,}344\\approx 3{,}794\\ \\text{cm}^2$$` },
      ],
      ergebnis: `(a) $M=\\pi r\\sqrt{h^2+r^2}$ · (b) $M=65\\pi\\approx204{,}204\\ \\text{cm}^2$, $|\\Delta M|\\approx3{,}794\\ \\text{cm}^2$`,
    },
    {
      id: "t2-a04",
      typ: "Anwendung",
      titel: "Relativer Fehler: Elastizitätsmodul",
      quelle: "Übungsblatt 6, Aufgabe 4",
      schwierigkeit: 2,
      aufgabe: `Der Elastizitätsmodul wird berechnet nach $E=\\dfrac{4F\\ell^3}{a^4h}$ mit den Messwerten
$\\ell=50\\,\\text{cm}\\pm5\\,\\text{mm}$, $a=2\\,\\text{cm}\\pm0{,}2\\,\\text{mm}$, $h=(3\\pm0{,}09)\\,\\text{mm}$, $F=(210\\pm0{,}65)\\,\\text{N}$.
**(a)** Berechnen Sie $E$ in N/mm².
**(b)** Schätzen Sie den maximalen relativen Fehler $\\big|\\frac{\\Delta E}{E}\\big|$ ab.`,
      hinweis: `Bei Potenzprodukten $E=c\\cdot F^1\\ell^3a^{-4}h^{-1}$ gilt der Merksatz: relativer Fehler = Summe der $|$Exponent$|\\cdot$relative Einzelfehler.`,
      schritte: [
        { titel: "(a) Einheiten + Wert", text: `Alles in mm und N: $\\ell=500$, $a=20$, $h=3$, $F=210$:
$$E=\\frac{4\\cdot210\\cdot500^3}{20^4\\cdot3}=\\frac{1{,}05\\cdot10^{11}}{4{,}8\\cdot10^5}=218\\,750\\ \\frac{\\text{N}}{\\text{mm}^2}$$` },
        { titel: "(b) Relativer Fehler", text: `$$\\Big|\\frac{\\Delta E}{E}\\Big|\\approx\\Big|\\frac{\\Delta F}{F}\\Big|+3\\Big|\\frac{\\Delta \\ell}{\\ell}\\Big|+4\\Big|\\frac{\\Delta a}{a}\\Big|+\\Big|\\frac{\\Delta h}{h}\\Big|$$
$$=\\frac{0{,}65}{210}+3\\cdot\\frac{5}{500}+4\\cdot\\frac{0{,}2}{20}+\\frac{0{,}09}{3}\\approx0{,}0031+0{,}03+0{,}04+0{,}03\\approx 0{,}1031$$
also gut 10 %.` },
      ],
      ergebnis: `(a) $E=218\\,750$ N/mm² · (b) $\\big|\\frac{\\Delta E}E\\big|\\approx0{,}1031\\;(\\approx10{,}3\\,\\%)$`,
    },
    {
      id: "t2-a05",
      typ: "Rechentechnik",
      titel: "Gradient, Tangential(hyper)ebene, totales Differential (selbständig)",
      quelle: "Übungsblatt 6, Aufgabe 5",
      schwierigkeit: 2,
      video: "Bsp14 (Partielle Ableitungen)",
      aufgabe: `Bestimmen Sie Gradient, Tangential(hyper)ebene und totales Differential:
**(a)** $f(x,y)=\\sin(x^2+y^2)$ an $(x_0,y_0)=(\\sqrt\\pi,\\sqrt{2\\pi})$
**(b)** $f(x,y,z)=(xy)^z$ an $(x_0,y_0,z_0)=(1,2,3)$`,
      hinweis: `(b): $(xy)^z=e^{z\\ln(xy)}$ schreiben und mit Kettenregel ableiten.`,
      schritte: [
        { titel: "(a) Gradient", text: `$x_0^2+y_0^2=3\\pi$, $f=\\sin(3\\pi)=0$, $\\cos(3\\pi)=-1$:
$$\\nabla f=\\begin{pmatrix}2x\\cos(x^2+y^2)\\\\2y\\cos(x^2+y^2)\\end{pmatrix}\\Rightarrow \\nabla f(x_0,y_0)=\\begin{pmatrix}-2\\sqrt\\pi\\\\-2\\sqrt{2\\pi}\\end{pmatrix}$$` },
        { titel: "(a) Ebene + Differential", text: `$$T(x,y)=0-2\\sqrt\\pi(x-\\sqrt\\pi)-2\\sqrt{2\\pi}(y-\\sqrt{2\\pi})=-2\\sqrt\\pi\\,x-2\\sqrt{2\\pi}\\,y+6\\pi$$
Totales Differential (allgemein): $dz=2x\\cos(x^2+y^2)\\,dx+2y\\cos(x^2+y^2)\\,dy$` },
        { titel: "(b) Gradient", text: `$f=e^{z\\ln(xy)}$: $f_x=(xy)^z\\cdot\\frac zx$, $f_y=(xy)^z\\cdot\\frac zy$, $f_z=(xy)^z\\ln(xy)$.
An $(1,2,3)$ mit $(xy)^z=2^3=8$:
$$\\nabla f(1,2,3)=\\begin{pmatrix}24\\\\12\\\\8\\ln2\\end{pmatrix}$$` },
        { titel: "(b) Hyperebene + Differential", text: `$$T(x,y,z)=8+24(x-1)+12(y-2)+8\\ln2\\,(z-3)$$
$$df=24\\,dx+12\\,dy+8\\ln2\\,dz \\text{ (an der Stelle)}$$` },
      ],
      ergebnis: `(a) $\\nabla f=(-2\\sqrt\\pi,-2\\sqrt{2\\pi})^T$, $T=-2\\sqrt\\pi x-2\\sqrt{2\\pi}y+6\\pi$
(b) $\\nabla f=(24,12,8\\ln2)^T$, $T=8+24(x-1)+12(y-2)+8\\ln2(z-3)$`,
    },
    {
      id: "t2-a06",
      typ: "Anwendung",
      titel: "Kleine Fehlerrechnungen (selbständig)",
      quelle: "Übungsblatt 6, Aufgaben 6 & 7",
      schwierigkeit: 1,
      aufgabe: `**(A) Schwingkreis:** $T=2\\pi\\sqrt{LC}$. Um wie viel Prozent ändert sich $T$, wenn $L$ um 5 % verkleinert und $C$ um 3 % vergrößert wird?
**(B) Parallelschaltung:** $R_1=(100\\pm10)\\,\\Omega$, $R_2=(400\\pm20)\\,\\Omega$. Berechnen Sie $R=\\frac{R_1R_2}{R_1+R_2}$ und die maximale Unsicherheit $\\delta R$ über das totale Differential.`,
      hinweis: `(A) $T=2\\pi L^{1/2}C^{1/2}$ ⟹ $\\frac{\\Delta T}{T}\\approx\\frac12\\frac{\\Delta L}{L}+\\frac12\\frac{\\Delta C}{C}$ (hier mit Vorzeichen rechnen, nicht Beträge – die Änderung ist gegeben, kein Messfehler). (B) $\\frac{\\partial R}{\\partial R_1}=\\frac{R_2^2}{(R_1+R_2)^2}$.`,
      schritte: [
        { titel: "(A) Schwingkreis", text: `$$\\frac{\\Delta T}{T}\\approx\\frac12\\cdot(-5\\,\\%)+\\frac12\\cdot(+3\\,\\%)=-1\\,\\%$$
$T$ verringert sich um etwa 1 %.` },
        { titel: "(B) Gesamtwiderstand", text: `$$R=\\frac{100\\cdot400}{500}=80\\ \\Omega$$` },
        { titel: "(B) Unsicherheit", text: `$$\\frac{\\partial R}{\\partial R_1}=\\frac{R_2^2}{(R_1+R_2)^2}=\\frac{160000}{250000}=0{,}64\\qquad \\frac{\\partial R}{\\partial R_2}=\\frac{R_1^2}{(R_1+R_2)^2}=0{,}04$$
$$\\delta R\\approx0{,}64\\cdot10+0{,}04\\cdot20=6{,}4+0{,}8=7{,}2\\ \\Omega$$` },
      ],
      ergebnis: `(A) $\\Delta T/T\\approx-1\\,\\%$ · (B) $R=80\\,\\Omega$, $\\delta R\\approx7{,}2\\,\\Omega$`,
    },
    {
      id: "t2-a07",
      typ: "Anwendung",
      titel: "Dichte eines Kupferdrahtes (selbständig)",
      quelle: "Übungsblatt 6, Aufgabe 8",
      schwierigkeit: 2,
      aufgabe: `Messwerte: $m=14\\,\\text{kg}\\pm150\\,\\text{g}$, $\\ell=(500\\pm0{,}5)\\,\\text{m}$, $r=(1\\pm0{,}005)\\,\\text{mm}$.
Geben Sie die Dichte $\\varrho=\\dfrac{m}{\\pi r^2\\ell}$ mit Toleranzgrenzen in der Form $\\varrho\\pm|\\Delta\\varrho|$ in g/cm³ an.`,
      hinweis: `Erst alles in g und cm umrechnen. Potenzprodukt ⟹ relative Fehler addieren (Faktor 2 beim Radius).`,
      schritte: [
        { titel: "Dichte", text: `In g/cm: $m=14000$ g, $\\ell=50000$ cm, $r=0{,}1$ cm:
$$\\varrho=\\frac{14000}{\\pi\\cdot0{,}01\\cdot50000}=\\frac{14000}{500\\pi}\\approx 8{,}913\\ \\text{g/cm}^3$$` },
        { titel: "Relativer Fehler", text: `$$\\Big|\\frac{\\Delta\\varrho}{\\varrho}\\Big|\\approx\\frac{|\\Delta m|}{m}+2\\frac{|\\Delta r|}{r}+\\frac{|\\Delta \\ell|}{\\ell}=\\frac{150}{14000}+2\\cdot0{,}005+\\frac{0{,}5}{500}\\approx0{,}0107+0{,}01+0{,}001=0{,}0217$$` },
        { titel: "Absoluter Fehler", text: `$$|\\Delta\\varrho|\\approx8{,}913\\cdot0{,}0217\\approx0{,}194\\ \\text{g/cm}^3$$
$$\\varrho\\approx(8{,}91\\pm0{,}19)\\ \\text{g/cm}^3$$` },
      ],
      ergebnis: `$\\varrho\\approx(8{,}91\\pm0{,}19)$ g/cm³`,
    },
    {
      id: "t2-a08",
      typ: "Klausurtyp",
      titel: "Lokale Extrema und Sattelstellen",
      quelle: "Übungsblatt 7, Aufgabe 1",
      schwierigkeit: 3,
      video: "Bsp23–Bsp24 (Lokale Extrema)",
      aufgabe: `Ermitteln Sie die lokalen Extremstellen und Sattelstellen:
**(a)** $f(x,y)=x^2(2-y)-y^3+3y^2+9y$
**(b)** $f(x,y)=3x^2-2x\\sqrt y+y-8x+8$
**(c)** $f(x,y)=\\frac13(x^3+y^3)+\\frac12(x^2+5y^2)-2x$
**(d)** $f(x,y)=2xy-y^2x-\\frac34e^x$`,
      hinweis: `Immer gleiches Schema: 1) $f_x=f_y=0$ lösen (stationäre Stellen), 2) $D=f_{xx}f_{yy}-f_{xy}^2$ auswerten: $D>0$ & $f_{xx}>0$ Min, $D>0$ & $f_{xx}<0$ Max, $D<0$ Sattel.`,
      schritte: [
        { titel: "(a) Stationäre Stellen", text: `$f_x=2x(2-y)=0$ ⟹ $x=0$ oder $y=2$
$f_y=-x^2-3y^2+6y+9=0$
$x=0$: $-3y^2+6y+9=0\\Rightarrow y^2-2y-3=0\\Rightarrow y=3,\\,y=-1$
$y=2$: $-x^2+9=0\\Rightarrow x=\\pm3$
Kandidaten: $(0,3),(0,-1),(3,2),(-3,2)$` },
        { titel: "(a) Klassifizieren", text: `$f_{xx}=2(2-y)$, $f_{yy}=-6y+6$, $f_{xy}=-2x$
$(0,-1)$: $D=6\\cdot12-0=72>0$, $f_{xx}=6>0$ ⟹ **lok. Minimum**
$(0,3)$: $D=(-2)(-12)=24>0$, $f_{xx}<0$ ⟹ **lok. Maximum**
$(\\pm3,2)$: $D=0-36<0$ ⟹ **Sattelstellen**` },
        { titel: "(b)", text: `($D_f$: $y>0$.) $f_x=6x-2\\sqrt y-8=0$, $f_y=-\\frac{x}{\\sqrt y}+1=0\\Rightarrow x=\\sqrt y$
Einsetzen: $6x-2x-8=0\\Rightarrow x=2,\\ y=4$.
$f_{xx}=6$, $f_{yy}=\\frac{x}{2y^{3/2}}=\\frac18$, $f_{xy}=-\\frac1{\\sqrt y}=-\\frac12$: $D=\\frac68-\\frac14=\\frac12>0$, $f_{xx}>0$
⟹ $(2,4)$ **lok. Minimumstelle**` },
        { titel: "(c)", text: `$f_x=x^2+x-2=0\\Rightarrow x=1,\\,x=-2$; $\\quad f_y=y^2+5y=0\\Rightarrow y=0,\\,y=-5$
$f_{xx}=2x+1$, $f_{yy}=2y+5$, $f_{xy}=0$ ⟹ $D=(2x+1)(2y+5)$
$(1,0)$: $D=15>0,\\,f_{xx}=3>0$ **Min** · $(-2,-5)$: $D=15>0,\\,f_{xx}=-3<0$ **Max**
$(1,-5)$, $(-2,0)$: $D<0$ **Sattelstellen**` },
        { titel: "(d)", text: `$f_y=2x-2yx=2x(1-y)=0$ ⟹ $x=0$ oder $y=1$
$f_x=2y-y^2-\\frac34e^x=0$
$x=0$: $y^2-2y+\\frac34=0\\Rightarrow y=\\frac12,\\,y=\\frac32$ · $y=1$: $e^x=\\frac43\\Rightarrow x=\\ln\\frac43$
$f_{xx}=-\\frac34e^x$, $f_{yy}=-2x$, $f_{xy}=2-2y$
$(0,\\frac12)$ und $(0,\\frac32)$: $f_{yy}=0$, $f_{xy}=\\pm1$ ⟹ $D=-1<0$ **Sattelstellen**
$(\\ln\\frac43,1)$: $f_{xy}=0$, $D=(-1)\\cdot(-2\\ln\\frac43)>0$, $f_{xx}=-1<0$ ⟹ **lok. Maximum**` },
      ],
      ergebnis: `(a) $(0,-1)$ Min, $(0,3)$ Max, $(\\pm3,2)$ Sattel · (b) $(2,4)$ Min
(c) $(1,0)$ Min, $(-2,-5)$ Max, $(1,-5),(-2,0)$ Sattel · (d) $(\\ln\\frac43,1)$ Max, $(0,\\frac12),(0,\\frac32)$ Sattel`,
    },
    {
      id: "t2-a09",
      typ: "Verständnis",
      titel: "Extrema auf Bereichen (Niveaulinien)",
      quelle: "Übungsblatt 7, Aufgabe 2",
      schwierigkeit: 2,
      video: "Bsp12–Bsp13 (Niveaulinien)",
      aufgabe: `**(a)** Dreiecksplatte $D=\\{(x,y)\\mid x\\le1,\\ y\\ge-x,\\ y\\le3x\\}$ mit Temperatur $T(x,y)=x^2-y+50$. Wo ist $T$ minimal/maximal?
**(b)** Rechteck $D=\\{(x,y)\\mid -1\\le x\\le2,\\ -2\\le y\\le0\\}$ mit Druck $p(x,y)=(y+1)^2+x+100$. Wo ist $p$ minimal/maximal?`,
      hinweis: `Erst prüfen: stationäre Stellen im Inneren? ($T_y=-1\\neq0$ bzw. $p_x=1\\neq0$ ⟹ keine!) Dann liegen Min/Max auf dem **Rand** – Eckpunkte und Randkanten untersuchen (oder Niveaulinien schieben).`,
      schritte: [
        { titel: "(a) Inneres + Eckpunkte", text: `$T_y=-1\\neq0$ ⟹ keine stationären Stellen im Inneren.
Ecken des Dreiecks: $(0,0)$ (Schnitt $y=-x$, $y=3x$), $(1,-1)$, $(1,3)$.
$T(0,0)=50$, $T(1,-1)=1+1+50=52$, $T(1,3)=1-3+50=48$` },
        { titel: "(a) Randkanten", text: `Kante $y=-x$ ($0\\le x\\le1$): $T=x^2+x+50$ wachsend ⟹ Max bei $x=1$.
Kante $y=3x$: $T=x^2-3x+50$ fallend auf $[0,1]$ ⟹ Min bei $x=1$.
Kante $x=1$: $T=51-y$, fällt mit $y$ ⟹ Max bei $y=-1$, Min bei $y=3$.
**Maximum** bei $P_1(1,-1)$ mit $52\\,°$C, **Minimum** bei $P_2(1,3)$ mit $48\\,°$C` },
        { titel: "(b)", text: `$p_x=1\\neq0$ ⟹ Extrema auf dem Rand.
$p$ wächst mit $x$ ⟹ Min auf $x=-1$, Max auf $x=2$.
$(y+1)^2$ minimal bei $y=-1$ (Wert 0), maximal bei $y=-2$ oder $y=0$ (Wert 1).
**Minimum** bei $P_1(-1,-1)$: $p=99$ Pa · **Maximum** bei $P_2(2,-2)$ und $P_3(2,0)$: $p=103$ Pa` },
      ],
      ergebnis: `(a) max. Temperatur bei $(1,-1)$, min. bei $(1,3)$ · (b) min. Druck bei $(-1,-1)$, max. bei $(2,-2)$ und $(2,0)$`,
    },
    {
      id: "t2-a10",
      typ: "Anwendung",
      titel: "Regressionsgerade: Dieselmotor",
      quelle: "Übungsblatt 7, Aufgabe 3",
      schwierigkeit: 2,
      aufgabe: `Messwerte (Drehzahl $x_i$ in U/min, Leistung $y_i$ in PS):
$$x_i:\\ 500,\\,1000,\\,1500,\\,2000,\\,2500,\\,3000,\\,3500$$
$$y_i:\\ 5,\\,8,\\,12,\\,17,\\,24,\\,31,\\,36$$
**(a)** Berechnen Sie die Regressionsgerade $y=b_1x+b_0$.
**(b)** Welche Leistung ist bei 2150 U/min zu erwarten?`,
      hinweis: `$b_1=\\dfrac{\\sum(x_i-\\bar x)(y_i-\\bar y)}{\\sum(x_i-\\bar x)^2}$, $\\;b_0=\\bar y-b_1\\bar x$. Mittelwerte: $\\bar x=2000$, $\\bar y=19$.`,
      schritte: [
        { titel: "Mittelwerte & Abweichungen", text: `$\\bar x=2000$, $\\bar y=19$.
$x_i-\\bar x$: $-1500,-1000,-500,0,500,1000,1500$
$y_i-\\bar y$: $-14,-11,-7,-2,5,12,17$` },
        { titel: "Summen", text: `$$\\sum(x_i-\\bar x)(y_i-\\bar y)=21000+11000+3500+0+2500+12000+25500=75\\,500$$
$$\\sum(x_i-\\bar x)^2=2\\,(1500^2+1000^2+500^2)=7\\,000\\,000$$` },
        { titel: "Koeffizienten", text: `$$b_1=\\frac{75500}{7000000}=\\frac{151}{14000}\\approx0{,}01079\\qquad b_0=19-\\frac{151}{14000}\\cdot2000=19-\\frac{151}{7}=-\\frac{18}{7}$$
$$y=\\frac{151}{14000}x-\\frac{18}{7}$$` },
        { titel: "(b) Prognose", text: `$$y(2150)=\\frac{151}{14000}\\cdot2150-\\frac{18}7\\approx 23{,}19-2{,}57\\approx 20{,}62\\ \\text{PS}$$` },
      ],
      ergebnis: `(a) $y=\\frac{151}{14000}x-\\frac{18}7$ · (b) $y(2150)\\approx20{,}62$ PS`,
    },
    {
      id: "t2-a11",
      typ: "Rechentechnik",
      titel: "Stationäre Stellen klassifizieren (selbständig)",
      quelle: "Übungsblatt 7, Aufgabe 4",
      schwierigkeit: 2,
      aufgabe: `Berechnen Sie für $f(x,y)=\\Big(\\frac12x^2-14\\Big)(y-2)-y^2$ alle stationären Stellen und entscheiden Sie: Sattel-, Minimal- oder Maximalstelle?`,
      hinweis: `$f_x=x(y-2)$ – Fallunterscheidung $x=0$ / $y=2$.`,
      schritte: [
        { titel: "Stationäre Stellen", text: `$f_x=x(y-2)=0$ ⟹ $x=0$ oder $y=2$
$f_y=\\frac12x^2-14-2y=0$
$x=0$: $-14-2y=0\\Rightarrow y=-7$ ⟹ $(0,-7)$
$y=2$: $\\frac12x^2=18\\Rightarrow x=\\pm6$ ⟹ $(6,2),(-6,2)$` },
        { titel: "Klassifizieren", text: `$f_{xx}=y-2$, $f_{yy}=-2$, $f_{xy}=x$
$(0,-7)$: $D=(-9)(-2)-0=18>0$, $f_{xx}=-9<0$ ⟹ **lok. Maximalstelle**
$(\\pm6,2)$: $D=0\\cdot(-2)-36<0$ ⟹ **Sattelstellen**` },
      ],
      ergebnis: `$(0,-7)$ lok. Maximalstelle · $(6,2)$ und $(-6,2)$ Sattelstellen`,
    },
    {
      id: "t2-a12",
      typ: "Klausurtyp",
      titel: "Regression vom Typ ax²+b (selbständig)",
      quelle: "Übungsblatt 7, Aufgabe 6",
      schwierigkeit: 3,
      aufgabe: `Für die Punkte $P_1(1,1)$, $P_2(2,3)$, $P_3(3,6)$, $P_4(4,8)$ bestimme man die Regressionsfunktion $f(x)=ax^2+b$ nach der Methode der kleinsten Quadrate:
**(a)** Minimierungsaufgabe aufstellen, **(b)** stationäre Stelle von $d(a,b)$ bestimmen und Art prüfen.`,
      hinweis: `$d(a,b)=\\sum_{i=1}^4(ax_i^2+b-y_i)^2$. Beide partiellen Ableitungen null setzen ⟹ lineares Gleichungssystem ("Normalgleichungen").`,
      schritte: [
        { titel: "(a) Zielfunktion", text: `$$d(a,b)=\\sum_{i=1}^4\\big(ax_i^2+b-y_i\\big)^2\\to\\min$$` },
        { titel: "(b) Normalgleichungen", text: `$\\frac{\\partial d}{\\partial a}=2\\sum(ax_i^2+b-y_i)x_i^2=0$, $\\frac{\\partial d}{\\partial b}=2\\sum(ax_i^2+b-y_i)=0$
Mit $\\sum x_i^2=30$, $\\sum x_i^4=354$, $\\sum y_i=18$, $\\sum x_i^2y_i=1+12+54+128=195$:
$$354a+30b=195\\qquad 30a+4b=18$$` },
        { titel: "(b) LGS lösen", text: `Aus der 2. Gleichung: $b=4{,}5-7{,}5a$. Einsetzen:
$354a+135-225a=195\\Rightarrow129a=60\\Rightarrow a=\\frac{60}{129}=\\frac{20}{43}$
$$b=4{,}5-7{,}5\\cdot\\frac{20}{43}=\\frac{87}{86}$$` },
        { titel: "(b) Art der Stelle", text: `Hesse von $d$: $d_{aa}=2\\cdot354$, $d_{bb}=2\\cdot4$, $d_{ab}=2\\cdot30$:
$D=4(354\\cdot4-30^2)=4\\cdot516>0$, $d_{aa}>0$ ⟹ **Minimalstelle** (wie erwartet).
$$f(x)=\\frac{20}{43}x^2+\\frac{87}{86}\\approx0{,}465x^2+1{,}012$$` },
      ],
      ergebnis: `$a=\\frac{20}{43}\\approx0{,}465$, $b=\\frac{87}{86}\\approx1{,}012$; $\\;f(x)=\\frac{20}{43}x^2+\\frac{87}{86}$ (Minimum der Fehlerquadratsumme)`,
    },
    {
      id: "t2-a13",
      typ: "Klausurtyp",
      titel: "Lagrange-Methode: Grundlagen",
      quelle: "Übungsblatt 8, Aufgabe 1",
      schwierigkeit: 3,
      aufgabe: `Ermitteln Sie die lokalen Extrempunkte unter der Nebenbedingung:
**(a)** $f(x,y)=4x-3y+1$, NB: $x^2+y^2=25$
**(b)** $f(x,y)=x^2+3y^2+4$, NB: $x^2-y-2=0$
(Lagrange-Methode; Art der Extrema über Niveaulinienbild/geometrische Überlegung.)`,
      hinweis: `$L(x,y,\\lambda)=f(x,y)+\\lambda g(x,y)$ mit $g=0$ als NB. Alle drei partiellen Ableitungen null setzen. Äquivalent: $\\nabla f=\\mu\\nabla g$ plus NB.`,
      schritte: [
        { titel: "(a) Gleichungssystem", text: `$g=x^2+y^2-25$. $\\nabla f=\\mu\\nabla g$:
$$4=\\mu\\,2x,\\qquad -3=\\mu\\,2y,\\qquad x^2+y^2=25$$
⟹ $x=\\frac{2}{\\mu}$, $y=-\\frac{3}{2\\mu}$. In NB: $\\frac4{\\mu^2}+\\frac9{4\\mu^2}=25\\Rightarrow\\frac{25}{4\\mu^2}=25\\Rightarrow\\mu=\\pm\\frac12$` },
        { titel: "(a) Auswerten", text: `$\\mu=\\frac12$: $(4,-3)$, $f=16+9+1=26$
$\\mu=-\\frac12$: $(-4,3)$, $f=-16-9+1=-24$
Geometrisch: Niveaulinien von $f$ sind parallele Geraden, der Kreis wird an genau zwei Punkten berührt ⟹
$(4,-3,26)$ **lok. Hochpunkt**, $(-4,3,-24)$ **lok. Tiefpunkt**` },
        { titel: "(b) Gleichungssystem", text: `$g=x^2-y-2$:
$$2x=\\lambda2x,\\qquad 6y=-\\lambda,\\qquad x^2=y+2$$
1. Gleichung: $x=0$ **oder** $\\lambda=1$.
$x=0$: $y=-2$ ⟹ Punkt $(0,-2)$, $f=0+12+4=16$
$\\lambda=1$: $y=-\\frac16$, $x^2=2-\\frac16=\\frac{11}6$ ⟹ $x=\\pm\\sqrt{\\tfrac{11}6}$, $f=\\frac{11}6+\\frac1{12}+4=\\frac{71}{12}$` },
        { titel: "(b) Auswerten", text: `Niveaulinien von $f$ sind Ellipsen um den Ursprung; entlang der Parabel $y=x^2-2$:
$(0,-2,16)$ **lok. Hochpunkt**, $\\big(\\pm\\sqrt{\\tfrac{11}6},-\\tfrac16,\\tfrac{71}{12}\\big)$ **lok. Tiefpunkte**` },
      ],
      ergebnis: `(a) Hochpunkt $(4,-3,26)$, Tiefpunkt $(-4,3,-24)$
(b) Hochpunkt $(0,-2,16)$, Tiefpunkte $(\\pm\\sqrt{11/6},-\\frac16,\\frac{71}{12})$`,
    },
    {
      id: "t2-a14",
      typ: "Klausurtyp",
      titel: "Lagrange: Abstand zur Rennstrecke",
      quelle: "Übungsblatt 8, Aufgabe 2",
      schwierigkeit: 3,
      aufgabe: `Eine Rennstrecke ist die Ellipse $g(x,y)=\\frac{x^2}9+\\frac{y^2}4-1=0$ (1 LE = 50 m). Eine Person steht in $Q(1,0)$ und muss mindestens 90 m Abstand halten.
Berechnen Sie den Punkt $P_{\\min}$ auf $K$ mit kleinstem Abstand zu $Q$ (Lagrange) und prüfen Sie, ob der Mindestabstand eingehalten wird.`,
      hinweis: `Statt $d$ die Funktion $f(x,y)=(x-1)^2+y^2$ minimieren (gleiche Minimalstelle, einfacher).`,
      schritte: [
        { titel: "Gleichungssystem", text: `$\\nabla f=\\mu\\nabla g$:
$$2(x-1)=\\mu\\frac{2x}9,\\qquad 2y=\\mu\\frac y2,\\qquad \\frac{x^2}9+\\frac{y^2}4=1$$
2. Gleichung: $y=0$ **oder** $\\mu=4$.` },
        { titel: "Fall μ=4", text: `$2(x-1)=\\frac{8x}9\\Rightarrow18x-18=8x\\Rightarrow x=\\frac95$
NB: $y^2=4\\Big(1-\\frac{81}{225}\\Big)=\\frac{576}{225}\\Rightarrow y=\\pm\\frac85$
$f=\\big(\\frac45\\big)^2+\\big(\\frac85\\big)^2=\\frac{80}{25}=\\frac{16}5$` },
        { titel: "Fall y=0 + Vergleich", text: `$y=0$: $x=\\pm3$, $f(3,0)=4$, $f(-3,0)=16$ – beide größer als $\\frac{16}5=3{,}2$.
⟹ $P_{\\min}=\\big(\\frac95,\\pm\\frac85\\big)$ mit $d=\\sqrt{\\frac{16}5}\\approx1{,}7889$ LE` },
        { titel: "Abstand prüfen", text: `$$d\\approx1{,}7889\\cdot50\\ \\text{m}\\approx89{,}44\\ \\text{m}<90\\ \\text{m}$$
Die Person hält den Mindestabstand **nicht** ein!` },
      ],
      ergebnis: `$P_{\\min}=(\\frac95,\\pm\\frac85)$, Abstand $\\approx89{,}44$ m $<90$ m ⟹ Sicherheitsabstand nicht eingehalten`,
    },
    {
      id: "t2-a15",
      typ: "Klausurtyp",
      titel: "Extrema mit Substitutionsmethode",
      quelle: "Übungsblatt 8, Aufgabe 3",
      schwierigkeit: 3,
      aufgabe: `Temperaturfeld $T(x,y,z)=5xy+xz$.
**(a)** Extremstellen von $T$ auf der Fläche $F$: $z=3x^2+y^2+4$.
**(b)** Extremstellen von $T$ auf der Kurve $K\\subset F$ mit zusätzlich $y=x-1$.`,
      hinweis: `NB ist nach $z$ (bzw. $y$) aufgelöst ⟹ einfach einsetzen und gewöhnliche Extremwertaufgabe in 2 (bzw. 1) Variablen lösen.`,
      schritte: [
        { titel: "(a) Einsetzen", text: `$$h(x,y)=5xy+x(3x^2+y^2+4)=3x^3+5xy+xy^2+4x$$
$h_x=9x^2+5y+y^2+4=0$, $\\quad h_y=5x+2xy=x(5+2y)=0$` },
        { titel: "(a) Stationäre Stellen", text: `$h_y=0$: $x=0$ oder $y=-\\frac52$
$x=0$: $y^2+5y+4=0\\Rightarrow y=-1,\\,y=-4$ ⟹ $(0,-1),\\ (0,-4)$
$y=-\\frac52$: $9x^2-\\frac{25}2+\\frac{25}4+4=9x^2-\\frac94=0\\Rightarrow x=\\pm\\frac12$ ⟹ $(\\pm\\frac12,-\\frac52)$` },
        { titel: "(a) Klassifizieren", text: `$h_{xx}=18x$, $h_{yy}=2x$, $h_{xy}=5+2y$
$(\\frac12,-\\frac52)$: $D=9\\cdot1-0=9>0$, $h_{xx}=9>0$ ⟹ **Min**, $z=11$
$(-\\frac12,-\\frac52)$: $D=9>0$, $h_{xx}<0$ ⟹ **Max**, $z=11$
$(0,-1)$: $D=0-3^2<0$ **Sattel** ($z=5$) · $(0,-4)$: $D=0-(-3)^2<0$ **Sattel** ($z=20$)` },
        { titel: "(b) Auf der Kurve", text: `$y=x-1$ zusätzlich einsetzen:
$$\\varphi(x)=5x(x-1)+x\\big(3x^2+(x-1)^2+4\\big)=4x^3+3x^2$$
$\\varphi'(x)=12x^2+6x=6x(2x+1)=0\\Rightarrow x=0,\\ x=-\\tfrac12$
$\\varphi''=24x+6$: $\\varphi''(0)=6>0$ **Min** bei $(0,-1,5)$; $\\varphi''(-\\frac12)=-6<0$ **Max** bei $(-\\frac12,-\\frac32,7)$` },
      ],
      ergebnis: `(a) $(\\frac12,-\\frac52,11)$ lok. Min, $(-\\frac12,-\\frac52,11)$ lok. Max, $(0,-1,5)$ und $(0,-4,20)$ Sattel
(b) $(0,-1,5)$ lok. Min, $(-\\frac12,-\\frac32,7)$ lok. Max`,
    },
    {
      id: "t2-a16",
      typ: "Rechentechnik",
      titel: "Lagrange-Training (selbständig)",
      quelle: "Übungsblatt 8, Aufgaben 4 & 5",
      schwierigkeit: 2,
      aufgabe: `Bestimmen Sie mit der Lagrange-Methode die möglichen Extremstellen von $f$ unter $g=0$:
**(a)** $f=x^2+y$, $g=x-y+2$
**(b)** $f=x+2y$, $g=x^2+y^2-1$
**(c)** $f=xy$, $g=\\frac{x^2}8+\\frac{y^2}2-1$
**(d)** Welcher Punkt des Kreises $(x-2)^2+y^2=9$ hat minimalen Abstand zum Ursprung?`,
      hinweis: `(d): $f=x^2+y^2$ minimieren. Geometrische Kontrolle: Kreis um $(2,0)$ mit Radius 3 – der Ursprung liegt innen.`,
      schritte: [
        { titel: "Teil (a)", text: `$2x=\\lambda$, $1=-\\lambda$ ⟹ $\\lambda=-1$, $x=-\\frac12$; NB: $y=x+2=\\frac32$
Stelle $\\big(-\\frac12,\\frac32\\big)$ (Minimum: auf der Geraden ist $f=x^2+x+2$ eine nach oben geöffnete Parabel).` },
        { titel: "Teil (b)", text: `$1=2\\lambda x$, $2=2\\lambda y$ ⟹ $y=2x$. NB: $x^2+4x^2=1\\Rightarrow x=\\pm\\frac1{\\sqrt5}$
$\\big(\\frac1{\\sqrt5},\\frac2{\\sqrt5}\\big)$: Max ($f=\\sqrt5$) · $\\big(-\\frac1{\\sqrt5},-\\frac2{\\sqrt5}\\big)$: Min ($f=-\\sqrt5$)` },
        { titel: "Teil (c)", text: `$y=\\lambda\\frac x4$, $x=\\lambda y$ ⟹ $y=\\frac{\\lambda^2}4 y\\Rightarrow\\lambda=\\pm2$
$\\lambda=2$: $y=\\frac x2$, NB: $\\frac{x^2}8+\\frac{x^2}8=1\\Rightarrow x=\\pm2$ ⟹ $(2,1),(-2,-1)$ mit $f=2$ (Maxima)
$\\lambda=-2$: $(2,-1),(-2,1)$ mit $f=-2$ (Minima)` },
        { titel: "Teil (d)", text: `$f=x^2+y^2$, $g=(x-2)^2+y^2-9$: $2x=\\lambda2(x-2)$, $2y=\\lambda2y$
$y$-Gleichung: $y=0$ oder $\\lambda=1$ (unmöglich, da dann $x=x-2$).
$y=0$: $(x-2)^2=9\\Rightarrow x=5$ oder $x=-1$.
$f(-1,0)=1$ ⟹ **Minimum** bei $(-1,0)$, Abstand $d=1$ · ($(5,0)$: Maximum, $d=5$)` },
      ],
      ergebnis: `(a) $(-\\frac12,\\frac32)$ · (b) $\\pm(\\frac1{\\sqrt5},\\frac2{\\sqrt5})$ · (c) $(\\pm2,\\pm1)$ Max bei gleichen, Min bei gemischten Vorzeichen · (d) $(-1,0)$, Abstand 1`,
    },
    {
      id: "t2-a17",
      typ: "Verständnis",
      titel: "Niveaulinien & Lagrange (selbständig)",
      quelle: "Übungsblatt 8, Aufgabe 6",
      schwierigkeit: 2,
      aufgabe: `$f(x,y)=\\dfrac{1}{x^2+y^2}$ auf $\\mathbb R^2\\setminus\\{(0,0)\\}$. Skizziert sind Höhenlinien: Kreise mit Radius 1, 3 und 5.
**(a)** Werte $h_1,h_2,h_3$? **(b)** $\\nabla f$; warum hat $f$ keine lokalen Extrema?
**(c)** Skizzieren Sie die NB $(x+y)^2=9$. **(d)** Extremstellen von $f$ unter dieser NB (Lagrange + Skizze).`,
      hinweis: `Höhenlinie zu $h$: $x^2+y^2=\\frac1h$ – Kreis mit Radius $\\frac{1}{\\sqrt h}$. Die NB sind zwei parallele Geraden $x+y=\\pm3$.`,
      schritte: [
        { titel: "(a) Niveauwerte", text: `Radius $r$ ⟹ $h=\\frac1{r^2}$:
$$h_1=1\\ (r=1),\\qquad h_2=\\frac19\\ (r=3),\\qquad h_3=\\frac1{25}\\ (r=5)$$` },
        { titel: "(b) Gradient", text: `$$\\nabla f=\\Big(-\\frac{2x}{(x^2+y^2)^2},\\ -\\frac{2y}{(x^2+y^2)^2}\\Big)^T$$
$\\nabla f=(0,0)$ würde $x=y=0$ erfordern – liegt nicht im Definitionsbereich ⟹ keine stationären Stellen, keine lokalen Extrema.` },
        { titel: "(c)+(d) Lagrange", text: `NB: zwei Geraden $x+y=3$ und $x+y=-3$. $g=(x+y)^2-9$, $\\nabla g=(2(x+y),2(x+y))$.
Lagrange-Gleichungen ⟹ $f_x=f_y$ ⟹ $x=y$.
$x=y$: $(2x)^2=9\\Rightarrow x=\\pm\\frac32$ ⟹ Stellen $(\\frac32,\\frac32)$ und $(-\\frac32,-\\frac32)$, $f=\\frac{1}{9/2}=\\frac29$` },
        { titel: "(d) Art der Stellen", text: `Auf jeder Geraden ist der Punkt mit $x=y$ der **ursprungsnächste** Punkt – dort ist $x^2+y^2$ minimal, also $f$ **maximal**.
⟹ beide Stellen sind **lokale Maximalstellen** unter der NB (gegen die Geraden-Enden fällt $f\\to0$).` },
      ],
      ergebnis: `(a) $h_1=1$, $h_2=\\frac19$, $h_3=\\frac1{25}$ · (b) $\\nabla f\\neq0$ überall ⟹ keine Extrema · (d) $(\\pm\\frac32,\\pm\\frac32)$ sind lok. Maximalstellen ($f=\\frac29$)`,
    },
  ],
  karten: [
    { id: "t2-k01", vorne: `Was bedeutet die **partielle Ableitung** $f_x$ — wie rechnest du sie, und wie **kontrollierst** du dich?`, hinten: `Änderungsrate von $f$ in **$x$-Richtung**: nach $x$ ableiten, **alle anderen Variablen wie Konstanten** behandeln.
**Kontrolle (Satz von Schwarz):** $f_{xy}=f_{yx}$ — stimmen deine gemischten 2. Ableitungen nicht überein, hast du dich verrechnet.` },
    { id: "t2-k02", vorne: `Was sagt dir der **Gradient** $\\nabla f$ **geometrisch**?`, hinten: `$\\nabla f=(f_x,f_y)^T$ zeigt in Richtung des **steilsten Anstiegs** und steht **senkrecht auf den Niveaulinien**. Seine Länge = Stärke des Anstiegs.` },
    { id: "t2-k03", vorne: `Wofür steht die **Tangentialebene**, und was brauchst du, um sie aufzustellen?`, hinten: `Sie ist die **lineare Näherung** von $f$ am Punkt. Zutaten: Funktionswert $f(x_0,y_0)$ **und beide** partiellen Ableitungen dort:
$$T=f_0+f_x(x-x_0)+f_y(y-y_0)$$` },
    { id: "t2-k04", vorne: `Was ist das **totale Differential** und wofür benutzt man es praktisch?`, hinten: `$dz=f_x\\,dx+f_y\\,dy$ — die linearisierte **Änderung** von $f$. Praktischer Hauptzweck: **Fehlerfortpflanzung** — wie wirken kleine Mess­ungenauigkeiten $dx,dy$ aufs Ergebnis?` },
    { id: "t2-k05", vorne: `**Fehlerrechnung:** Wann rechnest du mit **Beträgen**, wann mit **Exponenten**, wann **mit Vorzeichen**?`, hinten: `**Größtfehler** (Worst Case): $|\\Delta z|\\approx|f_x||\\Delta x|+|f_y||\\Delta y|$ — **Beträge**.
**Potenzprodukt** $z=c\\,x^m y^n$: $\\left|\\frac{\\Delta z}{z}\\right|\\approx|m|\\left|\\frac{\\Delta x}{x}\\right|+|n|\\left|\\frac{\\Delta y}{y}\\right|$.
**Gegebene Änderung** ("$L$ −5 %"): **mit Vorzeichen**, kein Worst Case.` },
    { id: "t2-k06", vorne: `Was ist eine **Niveaulinie**, und wozu hilft sie dir?`, hinten: `Menge aller Punkte mit **gleichem Funktionswert** $f(x,y)=c$ — wie Höhenlinien auf der Wanderkarte. Hilft, den Graphen zu verstehen und bei **Lagrange** Min/Max geometrisch zu entscheiden.` },
    { id: "t2-k07", vorne: `**Lokale Extrema** von $f(x,y)$: Welche zwei Schritte machst du, und was sagt die Diskriminante $D$?`, hinten: `1. **Stationäre Stellen:** $f_x=0$ **und** $f_y=0$.
2. **Klassifizieren** mit $D=f_{xx}f_{yy}-f_{xy}^2$:
$D>0,f_{xx}>0$ → **Min** · $D>0,f_{xx}<0$ → **Max** · $D<0$ → **Sattel** · $D=0$ → keine Aussage.` },
    { id: "t2-k08", vorne: `Du suchst Extrema auf einem **abgeschlossenen Bereich** $D$. Warum reichen stationäre Stellen nicht?`, hinten: `Das Maximum/Minimum kann auf dem **Rand** liegen, wo $f_x,f_y$ nicht null sein müssen. Also zusätzlich **Randkanten** (einsetzen / Niveaulinien schieben) und **Eckpunkte** prüfen, dann alle Kandidaten vergleichen.` },
    { id: "t2-k09", vorne: `**Lagrange:** Wann brauchst du es, was ist die Idee, und wie entscheidest du Min/Max?`, hinten: `Bei Extrema **unter einer Nebenbedingung** $g(x,y)=0$. Idee: $\\nabla f=\\mu\\nabla g$ plus $g=0$ (Gradienten im Optimum **parallel**).
Min oder Max? **Nicht über $D$** — über Niveaulinienbild oder Vergleich der Funktionswerte.
**Alternative:** Lässt sich $g=0$ nach einer Variablen auflösen → **einsetzen** (Substitution, oft schneller).` },
    { id: "t2-k10", vorne: `**Regression / kleinste Quadrate:** Was wird minimiert, und wie hängt das mit Extrema zusammen?`, hinten: `Die **Summe der quadrierten Abweichungen** $d=\\sum_i(f(x_i)-y_i)^2$. Das ist eine Funktion der **Parameter** — ihre partiellen Ableitungen $=0$ (Normalgleichungen) liefern das **Minimum** und damit die Ausgleichskurve.` },
  ],
});
