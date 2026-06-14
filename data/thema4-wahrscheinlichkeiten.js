/* Thema 4: Ereignisse und Wahrscheinlichkeiten
   Quellen: Übungsblätter 12–13, Arbeitsblatt 4.
   Alle Endergebnisse gegen die gedruckten Lösungen geprüft. */
window.MATHE2_DATA.themen.push({
  id: "t4",
  titel: "Ereignisse und Wahrscheinlichkeiten",
  untertitel: "Ereignisalgebra, Schaltungen, bedingte Wahrscheinlichkeit, totale Wahrscheinlichkeit, Bayes",
  einfuehrung: `**Worum geht es?** Zufällige Ereignisse sauber beschreiben und ihre Wahrscheinlichkeiten berechnen. Erst die Sprache (Mengenoperationen $\\cup,\\cap,\\bar A$ – z.B. für Ausfälle in Schaltungen), dann die Rechenregeln (Additionssatz, Unabhängigkeit), zuletzt die mächtigsten Werkzeuge: **totale Wahrscheinlichkeit** und **Bayes** für "Information fließt rückwärts"-Fragen.`,
  bloecke: [
    { titel: "Ereignisalgebra & Abzählen", intro: `Bevor gerechnet wird, wird übersetzt: "genau zwei", "höchstens eine", "System fällt aus" werden zu Formeln aus $\\cup$, $\\cap$ und $\\bar A$ (De Morgan!). Mit der **Siebformel** zählt man überlappende Mengen ab – und entlarvt sogar widersprüchliche Daten.`, aufgaben: ["t4-a01","t4-a02","t4-a03","t4-a04","t4-a07a","t4-a07b"] },
    { titel: "Rechnen mit Wahrscheinlichkeiten & Unabhängigkeit", intro: `Der Additionssatz verbindet $P(A\\cup B)$ mit $P(A\\cap B)$; bei **Unabhängigkeit** darf multipliziert werden. Standardtricks: "mindestens einer" über das Gegenereignis, Zuverlässigkeit von Reihen- ($p^n$) und Parallelschaltungen ($1-(1-p)^n$).`, aufgaben: ["t4-a05","t4-a06a","t4-a06b","t4-a08a","t4-a08b"] },
    { titel: "Bedingte Wahrscheinlichkeit, totale W. & Bayes", intro: `$P(A\\mid B)$: Wahrscheinlichkeit von $A$, wenn $B$ schon bekannt ist. Die **totale Wahrscheinlichkeit** setzt $P(A)$ aus Fallunterscheidungen zusammen; **Bayes** dreht die Richtung um ("Test positiv – wie wahrscheinlich wirklich krank?"). Der Krebstest zeigt, wie kontraintuitiv das sein kann – beliebter Klausurstoff.`, aufgaben: ["t4-a09","t4-a10","t4-a11","t4-a12a","t4-a12b","t4-a13"] },
  ],
  aufgaben: [
    {
      id: "t4-a01",
      typ: "Verständnis",
      titel: "Ereignisalgebra: Fertigungsabteilungen",
      quelle: "Übungsblatt 12, Aufgabe 1",
      schwierigkeit: 1,
      aufgabe: `Ein Betrieb hat 3 Abteilungen; $A_i=\\{$Abteilung $i$ arbeitet ungestört$\\}$.
**(a)** Drücken Sie aus: $A=\\{$alle ungestört$\\}$, $B=\\{$genau zwei ungestört$\\}$, $C=\\{$genau eine ungestört$\\}$.
**(b)** Formulieren Sie sprachlich: $D=\\bar A_1\\cap\\bar A_2\\cap\\bar A_3$, $E=A_1\\cup A_2\\cup A_3$, $F=C\\cup D$.`,
      hinweis: `"Genau zwei" = eine Abteilung gestört, zwei ungestört – alle drei Möglichkeiten mit "oder" (∪) verbinden.`,
      schritte: [
        { titel: "(a) Alle / genau zwei", text: `$$A=A_1\\cap A_2\\cap A_3$$
$$B=(\\bar A_1\\cap A_2\\cap A_3)\\cup(A_1\\cap\\bar A_2\\cap A_3)\\cup(A_1\\cap A_2\\cap\\bar A_3)$$` },
        { titel: "(a) Genau eine", text: `$$C=(A_1\\cap\\bar A_2\\cap\\bar A_3)\\cup(\\bar A_1\\cap A_2\\cap\\bar A_3)\\cup(\\bar A_1\\cap\\bar A_2\\cap A_3)$$` },
        { titel: "(b) Sprachlich", text: `$D$: "**keine** Abteilung arbeitet ungestört"
$E$: "**wenigstens eine** Abteilung arbeitet ungestört"
$F=C\\cup D$: "**höchstens eine** Abteilung arbeitet ungestört"` },
      ],
      ergebnis: `(a) siehe Schritte · (b) $D$ = keine, $E$ = mindestens eine, $F$ = höchstens eine Abteilung ungestört`,
    },
    {
      id: "t4-a02",
      typ: "Verständnis",
      titel: "Schaltung als Ereignisgleichung",
      quelle: "Übungsblatt 12, Aufgabe 2",
      schwierigkeit: 2,
      aufgabe: `$A_k=\\{$Element $k$ fällt aus$\\}$, $A=\\{$Gesamtsystem fällt aus$\\}$.
**(a)** Schaltplan: Element 1 in Reihe, dann parallel (oben: 2 und 3 in Reihe, unten: 4), dann Element 5 in Reihe. Drücken Sie $A$ durch $\\cup$ und $\\cap$ aus.
**(b)** Entwerfen Sie eine Schaltung zu $A=(A_1\\cap A_2)\\cup(A_3\\cap A_4)$.`,
      hinweis: `Reihenschaltung fällt aus, wenn EIN Element ausfällt (∪). Ein Parallelblock fällt aus, wenn ALLE Zweige ausfallen (∩). Der obere Zweig (2 und 3 in Reihe) fällt aus, wenn 2 **oder** 3 ausfällt.`,
      schritte: [
        { titel: "(a) Blockweise", text: `Reihenelement 1: $A_1$ · Reihenelement 5: $A_5$
Parallelblock fällt aus, wenn oberer **und** unterer Zweig ausfallen: oben $A_2\\cup A_3$, unten $A_4$:
$$A=A_1\\cup\\big((A_2\\cup A_3)\\cap A_4\\big)\\cup A_5$$` },
        { titel: "(b) Schaltung entwerfen", text: `$A_1\\cap A_2$: Block fällt nur aus, wenn 1 **und** 2 ausfallen ⟹ 1 und 2 **parallel**.
$\\cup$: Gesamtausfall, wenn einer der Blöcke ausfällt ⟹ Blöcke **in Reihe**:
Block (1 ∥ 2) — in Reihe — Block (3 ∥ 4)` },
      ],
      ergebnis: `(a) $A=A_1\\cup((A_2\\cup A_3)\\cap A_4)\\cup A_5$ · (b) zwei Parallelblöcke (1∥2) und (3∥4) in Reihe`,
    },
    {
      id: "t4-a03",
      typ: "Rechentechnik",
      titel: "Vier-Felder-Logik: Werkstücke",
      quelle: "Übungsblatt 12, Aufgabe 3",
      schwierigkeit: 1,
      aufgabe: `Bei 10 von 1000 Werkstücken waren Durchmesser **und** Länge falsch, bei 970 war der Durchmesser richtig, bei 950 die Länge richtig.
**(a)** Bei wie vielen Stücken waren (i) beide richtig, (ii) Durchmesser richtig & Länge falsch, (iii) Durchmesser falsch & Länge richtig?
**(b)** Zugehörige Wahrscheinlichkeiten bei zufälliger Auswahl?`,
      hinweis: `$|\\bar D\\cap\\bar L|=10$ ⟹ $|D\\cup L|=990$. Dann Siebformel: $|D\\cap L|=|D|+|L|-|D\\cup L|$.`,
      schritte: [
        { titel: "(a) Beide richtig", text: `$|D\\cup L|=1000-10=990$
$$|D\\cap L|=|D|+|L|-|D\\cup L|=970+950-990=930$$` },
        { titel: "(a) Rest", text: `(ii) $D$ richtig, $L$ falsch: $970-930=40$
(iii) $D$ falsch, $L$ richtig: $950-930=20$
(Kontrolle: $930+40+20+10=1000$ ✓)` },
        { titel: "(b) Wahrscheinlichkeiten", text: `$$P(\\text{i})=\\frac{930}{1000}=0{,}93\\qquad P(\\text{ii})=0{,}04\\qquad P(\\text{iii})=0{,}02$$` },
      ],
      ergebnis: `(a) 930 / 40 / 20 · (b) 0,93 / 0,04 / 0,02`,
    },
    {
      id: "t4-a04",
      typ: "Verständnis",
      titel: "Widerspruch in den Daten? (Siebformel)",
      quelle: "Übungsblatt 12, Aufgabe 4",
      schwierigkeit: 2,
      aufgabe: `100 Kugellagerringe, Fehlermerkmale: $|M_1|=50$, $|M_2|=30$, $|M_3|=23$, $|M_1\\cap M_2|=8$, $|M_1\\cap M_3|=20$, $|M_2\\cap M_3|=10$, $|M_1\\cap M_2\\cap M_3|=5$.
Stehen die Anzahlen im Widerspruch zueinander?`,
      hinweis: `Berechnen Sie die Anzahl der Ringe mit **genau einem** Fehler je Merkmal – darf nicht negativ werden!`,
      schritte: [
        { titel: "Nur M₃ berechnen", text: `Ringe mit **nur** Merkmal $M_3$:
$$|M_3|-|M_1\\cap M_3|-|M_2\\cap M_3|+|M_1\\cap M_2\\cap M_3|=23-20-10+5=-2$$` },
        { titel: "Schlussfolgerung", text: `Eine Anzahl kann nicht negativ sein ⟹ **ja, die Daten widersprechen sich.**
(Zum Vergleich: nur $M_1$: $50-8-20+5=27$ ✓, nur $M_2$: $30-8-10+5=17$ ✓ – nur $M_3$ ist unmöglich.)` },
      ],
      ergebnis: `Ja, Widerspruch: "nur $M_3$" ergäbe $-2$ Ringe.`,
    },
    {
      id: "t4-a05",
      typ: "Rechentechnik",
      titel: "Stromkreis: Wahrscheinlichkeit & Unabhängigkeit",
      quelle: "Übungsblatt 12, Aufgabe 5",
      schwierigkeit: 2,
      aufgabe: `Ein Stromkreis wird unterbrochen, wenn $e_1$ ausfällt **oder** $e_2$ und $e_3$ beide ausfallen. $A_i=\\{e_i$ fällt aus$\\}$, $B=\\{$unterbrochen$\\}$.
**(a)** Beschreiben Sie $\\bar B$ (Strom fließt).
**(b)** $P(A_1)=0{,}3$, $P(A_2)=P(A_3)=0{,}2$, $P(A_2\\cap A_3)=0{,}1$, $P(A_1\\cap A_2\\cap A_3)=0{,}05$.
(i) $P(\\bar B)$? (ii) Sind $A_2$, $A_3$ unabhängig?`,
      hinweis: `$B=A_1\\cup(A_2\\cap A_3)$; Additionssatz! Achtung: $(A_1)\\cap(A_2\\cap A_3)=A_1\\cap A_2\\cap A_3$.`,
      schritte: [
        { titel: "(a) Strom fließt", text: `$$\\bar B=\\overline{A_1\\cup(A_2\\cap A_3)}=\\bar A_1\\cap(\\bar A_2\\cup\\bar A_3)$$
(De Morgan: $e_1$ intakt **und** mindestens eines von $e_2,e_3$ intakt)` },
        { titel: "(b)(i) Additionssatz", text: `$$P(B)=P(A_1)+P(A_2\\cap A_3)-P(A_1\\cap A_2\\cap A_3)=0{,}3+0{,}1-0{,}05=0{,}35$$
$$P(\\bar B)=1-0{,}35=0{,}65$$` },
        { titel: "(b)(ii) Unabhängigkeit", text: `$$P(A_2)\\cdot P(A_3)=0{,}2\\cdot0{,}2=0{,}04\\neq0{,}1=P(A_2\\cap A_3)$$
⟹ $e_2$ und $e_3$ fallen **nicht unabhängig** voneinander aus.` },
      ],
      ergebnis: `(a) $\\bar B=\\bar A_1\\cap(\\bar A_2\\cup\\bar A_3)$ · (b)(i) $P(\\bar B)=0{,}65$ · (ii) nicht unabhängig`,
    },
    {
      id: "t4-a06a",
      typ: "Rechentechnik",
      titel: "PC-Komponenten: keine fällt aus",
      quelle: "Übungsblatt 12, Aufgabe 6a",
      schwierigkeit: 2,
      aufgabe: `Ausfallwahrscheinlichkeiten im 1. Jahr (unabhängig): Mainboard 0,05 · Netzteil 0,01 · Grafikkarte 0,03 · 4 RAM-Module je 0,08 · 2 Festplatten je 0,04.
$P($keine Komponente fällt aus$)$?`,
      hinweis: `Unabhängigkeit ⟹ multiplizieren. Pro Bauteil die Gegenwahrscheinlichkeit (intakt) verwenden.`,
      schritte: [
        { titel: "Lösung", text: `$$P=0{,}95\\cdot0{,}99\\cdot0{,}97\\cdot0{,}92^4\\cdot0{,}96^2\\approx0{,}6023$$` },
      ],
      ergebnis: `$\\approx0{,}6023$`,
    },
    {
      id: "t4-a06b",
      typ: "Rechentechnik",
      titel: "PC-Komponenten: mindestens ein RAM & eine Platte",
      quelle: "Übungsblatt 12, Aufgabe 6b",
      schwierigkeit: 2,
      aufgabe: `Ausfallwahrscheinlichkeiten im 1. Jahr (unabhängig): Mainboard 0,05 · Netzteil 0,01 · Grafikkarte 0,03 · 4 RAM-Module je 0,08 · 2 Festplatten je 0,04.
$P($mindestens ein RAM **und** mindestens eine Festplatte fallen aus$)$?`,
      hinweis: `"Mindestens einer" über das Gegenereignis: $1-P(\\text{keiner})$. RAM- und Platten-Block sind unabhängig ⟹ multiplizieren.`,
      schritte: [
        { titel: "Lösung", text: `$P(\\text{min. 1 RAM})=1-0{,}92^4\\approx0{,}28361$
$P(\\text{min. 1 Platte})=1-0{,}96^2=0{,}0784$
Unabhängig ⟹ $P=0{,}28361\\cdot0{,}0784\\approx0{,}02223$` },
      ],
      ergebnis: `$\\approx0{,}0222$`,
    },
    {
      id: "t4-a07a",
      typ: "Rechentechnik",
      titel: "Siebformel: Kongress-Sprachen (selbständig)",
      quelle: "Übungsblatt 12, Aufgabe 7",
      schwierigkeit: 2,
      aufgabe: `Von 500 Gästen sprechen 126 Spanisch, 380 Englisch, 206 Französisch; 6 nur Spanisch; 140 Englisch∩Französisch; 60 Französisch∩Spanisch; 18 alle drei.
**(a)** Wie viele sprechen keine der Sprachen? **(b)** Wie viele nur Englisch und Spanisch?`,
      hinweis: `Erst $|S\\cap E|$ aus "nur Spanisch = 6" bestimmen, dann Siebformel für $|S\\cup E\\cup F|$.`,
      schritte: [
        { titel: "|S∩E| bestimmen", text: `nur Spanisch: $|S|-|S\\cap E|-|S\\cap F|+|S\\cap E\\cap F|=6$
$$126-|S\\cap E|-60+18=6\\Rightarrow|S\\cap E|=78$$` },
        { titel: "(a) Siebformel", text: `$$|S\\cup E\\cup F|=126+380+206-78-140-60+18=452$$
Keine der drei Sprachen: $500-452=48$ Personen` },
        { titel: "(b)", text: `Nur Englisch **und** Spanisch (ohne Französisch): $|S\\cap E|-|S\\cap E\\cap F|=78-18=60$` },
      ],
      ergebnis: `(a) 48 · (b) 60`,
    },
    {
      id: "t4-a07b",
      typ: "Verständnis",
      titel: "Ereignisalgebra: Anlage mit zwei Kesseln (selbständig)",
      quelle: "Übungsblatt 12, Aufgabe 8",
      schwierigkeit: 2,
      aufgabe: `Eine Anlage besteht aus einer Maschine ($A=\\{$Maschine intakt$\\}$) und zwei Kesseln ($B_k=\\{$Kessel $k$ intakt$\\}$). Arbeitsfähig ist sie, wenn die Maschine **und** mindestens ein Kessel intakt sind. Beschreiben Sie $C=\\{$Anlage arbeitsfähig$\\}$ und $\\bar C$.`,
      hinweis: `"Mindestens ein Kessel" $=B_1\\cup B_2$. Für $\\bar C$ De Morgan anwenden.`,
      schritte: [
        { titel: "Lösung", text: `$$C=A\\cap(B_1\\cup B_2)\\qquad \\bar C=\\bar A\\cup(\\bar B_1\\cap\\bar B_2)$$
(De Morgan: nicht arbeitsfähig = Maschine defekt **oder** beide Kessel defekt)` },
      ],
      ergebnis: `$C=A\\cap(B_1\\cup B_2)$, $\\bar C=\\bar A\\cup(\\bar B_1\\cap\\bar B_2)$`,
    },
    {
      id: "t4-a08a",
      typ: "Anwendung",
      titel: "Zuverlässigkeit: Reihenschaltung",
      quelle: "Übungsblatt 13, Aufgabe 1a",
      schwierigkeit: 2,
      aufgabe: `Ein System besteht aus 20 unabhängigen Elementen gleicher Zuverlässigkeit $p$. Die Systemzuverlässigkeit soll mindestens 0,9 betragen. Wie groß muss $p$ mindestens sein bei **Reihenschaltung**?`,
      hinweis: `Reihe intakt = ALLE intakt ($p^{20}$).`,
      schritte: [
        { titel: "Lösung", text: `$$p^{20}\\ge0{,}9\\iff p\\ge\\sqrt[20]{0{,}9}\\approx0{,}9947$$
(jedes einzelne Element muss extrem zuverlässig sein!)` },
      ],
      ergebnis: `$p\\ge\\sqrt[20]{0{,}9}\\approx0{,}995$`,
    },
    {
      id: "t4-a08b",
      typ: "Anwendung",
      titel: "Zuverlässigkeit: Parallelschaltung",
      quelle: "Übungsblatt 13, Aufgabe 1b",
      schwierigkeit: 2,
      aufgabe: `Ein System besteht aus 20 unabhängigen Elementen gleicher Zuverlässigkeit $p$. Die Systemzuverlässigkeit soll mindestens 0,9 betragen. Wie groß muss $p$ mindestens sein bei **Parallelschaltung**?`,
      hinweis: `Parallel intakt = nicht alle ausgefallen ($1-(1-p)^{20}$).`,
      schritte: [
        { titel: "Lösung", text: `$$1-(1-p)^{20}\\ge0{,}9\\iff(1-p)^{20}\\le0{,}1\\iff p\\ge1-\\sqrt[20]{0{,}1}\\approx0{,}1087$$
(Redundanz: schon schwache Elemente reichen)` },
      ],
      ergebnis: `$p\\ge1-\\sqrt[20]{0{,}1}\\approx0{,}109$`,
    },
    {
      id: "t4-a09",
      typ: "Klausurtyp",
      titel: "Totale Wahrscheinlichkeit & Bayes: Züge",
      quelle: "Übungsblatt 13, Aufgabe 2",
      schwierigkeit: 2,
      aufgabe: `Täglich 60 Schnellzüge, 48 Nahverkehrszüge, 20 Güterzüge. Pünktlichkeit: 0,95 / 0,85 / 0,75.
**(a)** Mit welcher Wahrscheinlichkeit kommt ein beliebiger Zug pünktlich an?
**(b)** Mit welcher Wahrscheinlichkeit ist ein pünktlicher Zug ein Nahverkehrszug?`,
      hinweis: `128 Züge gesamt. (a) Satz der totalen Wahrscheinlichkeit, (b) Bayes — Zähler ist ein Summand aus (a).`,
      schritte: [
        { titel: "(a) Totale Wahrscheinlichkeit", text: `$P(S)=\\frac{60}{128}$, $P(N)=\\frac{48}{128}$, $P(G)=\\frac{20}{128}$:
$$P(p)=\\frac{60\\cdot0{,}95+48\\cdot0{,}85+20\\cdot0{,}75}{128}=\\frac{57+40{,}8+15}{128}=\\frac{112{,}8}{128}=0{,}88125$$` },
        { titel: "(b) Bayes", text: `$$P(N\\mid p)=\\frac{P(p\\mid N)P(N)}{P(p)}=\\frac{40{,}8/128}{112{,}8/128}=\\frac{40{,}8}{112{,}8}\\approx0{,}36$$` },
      ],
      ergebnis: `(a) $0{,}88125$ · (b) $\\approx0{,}36$`,
    },
    {
      id: "t4-a10",
      typ: "Klausurtyp",
      titel: "Bayes: Krebsdiagnose",
      quelle: "Übungsblatt 13, Aufgabe 3",
      schwierigkeit: 3,
      aufgabe: `Krebstest: $P(+\\mid K)=0{,}95$ (Sensitivität), $P(-\\mid\\bar K)=0{,}92$ (Spezifität). In der Bevölkerung sind 0,5 % erkrankt.
Der Test einer Person ist positiv – wie groß ist die Wahrscheinlichkeit, dass sie wirklich Krebs hat?`,
      hinweis: `$P(+\\mid\\bar K)=1-0{,}92=0{,}08$. Bayes mit totaler Wahrscheinlichkeit im Nenner. Das Ergebnis ist überraschend klein!`,
      schritte: [
        { titel: "Totale Wahrscheinlichkeit für +", text: `$$P(+)=P(+\\mid K)P(K)+P(+\\mid\\bar K)P(\\bar K)=0{,}95\\cdot0{,}005+0{,}08\\cdot0{,}995=0{,}00475+0{,}0796=0{,}08435$$` },
        { titel: "Bayes", text: `$$P(K\\mid+)=\\frac{0{,}95\\cdot0{,}005}{0{,}08435}=\\frac{0{,}00475}{0{,}08435}\\approx0{,}056$$
Nur ca. 5,6 % – die vielen Gesunden mit falsch-positivem Test dominieren!` },
      ],
      ergebnis: `$P(K\\mid+)\\approx0{,}056$ (5,6 %)`,
    },
    {
      id: "t4-a11",
      typ: "Klausurtyp",
      titel: "Schaltung mit bedingten Wahrscheinlichkeiten",
      quelle: "Übungsblatt 13, Aufgabe 4",
      schwierigkeit: 3,
      aufgabe: `Schaltung: $E_1$ in Reihe mit dem Parallelblock aus $E_2$ und $E_3$. Unabhängige Ausfälle: $p_1=0{,}03$, $p_2=0{,}06$, $p_3=0{,}05$.
**(a)** $P($System fällt aus$)$? **(b)** $P(E_2$ funktioniert $\\mid E_1,E_3$ ausgefallen$)$?
**(c)** $E_3$ defekt – $P($System funktioniert$)$? **(d)** System läuft nicht – $P(E_1$ defekt$)$?`,
      hinweis: `System funktioniert $\\iff$ $E_1$ funktioniert UND ($E_2$ oder $E_3$ funktioniert). (b): Unabhängigkeit! (d): "$E_1$ defekt" ist Teilmenge von "System defekt".`,
      schritte: [
        { titel: "(a) Systemausfall", text: `$$P(\\text{intakt})=(1-p_1)\\big(1-p_2p_3\\big)=0{,}97\\cdot(1-0{,}003)=0{,}97\\cdot0{,}997=0{,}96709$$
$$P(\\text{Ausfall})=1-0{,}96709=0{,}03291$$` },
        { titel: "(b) Unabhängigkeit", text: `$E_2$ ist von $E_1$, $E_3$ unabhängig – die Bedingung ändert nichts:
$$P(E_2\\text{ ok}\\mid E_1,E_3\\text{ defekt})=P(E_2\\text{ ok})=0{,}94$$` },
        { titel: "(c) E₃ defekt", text: `Dann muss der Strom über $E_2$: System ok $\\iff E_1$ ok und $E_2$ ok:
$$P=0{,}97\\cdot0{,}94=0{,}9118$$` },
        { titel: "(d) Bedingte W.", text: `$\\{E_1\\text{ defekt}\\}\\subset\\{\\text{System defekt}\\}$:
$$P(E_1\\text{ defekt}\\mid\\text{System defekt})=\\frac{P(E_1\\text{ defekt})}{P(\\text{System defekt})}=\\frac{0{,}03}{0{,}03291}\\approx0{,}9116$$` },
      ],
      ergebnis: `(a) $0{,}03291$ · (b) $0{,}94$ · (c) $0{,}9118$ · (d) $\\approx0{,}9116$`,
    },
    {
      id: "t4-a12a",
      typ: "Rechentechnik",
      titel: "Bedingte Wahrscheinlichkeit: Erzeugnisse (selbständig)",
      quelle: "Übungsblatt 13, Aufgabe 8",
      schwierigkeit: 2,
      aufgabe: `96 % der Erzeugnisse sind brauchbar ($A$); von den brauchbaren eignen sich 75 % für Präzisionsgeräte ($B$). (a) Relation zwischen $A$ und $B$? (b) $P(B\\mid A)$? (c) $P(A\\mid B)$? (d) $P(B\\mid\\bar A)$? (e) $P(B)$?`,
      hinweis: `Präzisionsteile müssen brauchbar sein ⟹ $B\\subset A$.`,
      schritte: [
        { titel: "Lösung", text: `(a) $B\\subset A$ · (b) $P(B\\mid A)=0{,}75$ · (c) $P(A\\mid B)=1$ (wegen $B\\subset A$) · (d) $P(B\\mid\\bar A)=0$
(e) $P(B)=P(B\\mid A)\\,P(A)=0{,}75\\cdot0{,}96=0{,}72$` },
      ],
      ergebnis: `$B\\subset A$; 0,75 / 1 / 0 / 0,72`,
    },
    {
      id: "t4-a12b",
      typ: "Rechentechnik",
      titel: "Totale W. & Bayes: drei Maschinen (selbständig)",
      quelle: "Übungsblatt 13, Aufgabe 9",
      schwierigkeit: 2,
      aufgabe: `Drei Maschinen produzieren im Verhältnis 1:1:2 mit Ausschussquoten 2 %, 1 %, 5 %. (a) $P($Ausschuss$)$? (b) $P($Maschine 3 $\\mid$ kein Ausschuss$)$?`,
      hinweis: `Anteile: $\\frac14,\\frac14,\\frac12$. (a) Satz der totalen Wahrscheinlichkeit, (b) Bayes mit Gut-Quote $0{,}95$ von Maschine 3.`,
      schritte: [
        { titel: "(a) Totale W.", text: `$$P(\\text{Ausschuss})=\\frac14\\cdot0{,}02+\\frac14\\cdot0{,}01+\\frac12\\cdot0{,}05=0{,}005+0{,}0025+0{,}025=0{,}0325$$` },
        { titel: "(b) Bayes", text: `$$P(M_3\\mid\\text{ok})=\\frac{\\frac12\\cdot0{,}95}{1-0{,}0325}=\\frac{0{,}475}{0{,}9675}\\approx0{,}491$$` },
      ],
      ergebnis: `(a) 0,0325 · (b) $\\approx0{,}491$`,
    },
    {
      id: "t4-a13",
      typ: "Rechentechnik",
      titel: "Rechnen mit A ⊂ B (selbständig)",
      quelle: "Übungsblatt 13, Aufgabe 10",
      schwierigkeit: 2,
      aufgabe: `Es gelte $A\\subset B$, $P(A)=0{,}6$, $P(B)=0{,}8$. Berechnen Sie:
(a) $P(A\\cap B)$ (b) $P(A\\mid B)$ (c) $P(B\\mid A)$ (d) $P(A\\cup B)$ (e) $P(\\bar A\\mid B)$
(f) $P(B\\mid\\bar A)$ (g) $P(A\\cup\\bar B)$ (h) $P(\\bar A\\setminus B)$ (i) $P(B\\setminus A)$`,
      hinweis: `Aus $A\\subset B$ folgt: $A\\cap B=A$, $A\\cup B=B$, $\\bar B\\subset\\bar A$. Skizze (Venn-Diagramm) hilft enorm.`,
      schritte: [
        { titel: "(a)–(d)", text: `(a) $P(A\\cap B)=P(A)=0{,}6$
(b) $P(A\\mid B)=\\frac{0{,}6}{0{,}8}=0{,}75$ · (c) $P(B\\mid A)=\\frac{P(A)}{P(A)}=1$
(d) $P(A\\cup B)=P(B)=0{,}8$` },
        { titel: "(e)–(f)", text: `(e) $P(\\bar A\\mid B)=1-P(A\\mid B)=0{,}25$
(f) $P(B\\mid\\bar A)=\\frac{P(B\\cap\\bar A)}{P(\\bar A)}=\\frac{0{,}8-0{,}6}{0{,}4}=0{,}5$` },
        { titel: "(g)–(i)", text: `(g) $A\\cap\\bar B=\\varnothing$ ⟹ $P(A\\cup\\bar B)=0{,}6+0{,}2=0{,}8$
(h) $\\bar A\\setminus B=\\bar A\\cap\\bar B=\\bar B$ (da $\\bar B\\subset\\bar A$) ⟹ $0{,}2$
(i) $P(B\\setminus A)=P(B)-P(A)=0{,}2$` },
      ],
      ergebnis: `0,6 · 0,75 · 1 · 0,8 · 0,25 · 0,5 · 0,8 · 0,2 · 0,2`,
    },
  ],
  karten: [
    { id: "t4-k01", vorne: `**De Morgan**: $\\overline{A\\cup B}=?$, $\\overline{A\\cap B}=?$`, hinten: `$$\\overline{A\\cup B}=\\bar A\\cap\\bar B\\qquad\\overline{A\\cap B}=\\bar A\\cup\\bar B$$ Strich "verteilen", Operator kippen.` },
    { id: "t4-k02", vorne: `**Additionssatz** für zwei Ereignisse?`, hinten: `$$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$$` },
    { id: "t4-k03", vorne: `**Siebformel** für drei Ereignisse?`, hinten: `$$P(A\\cup B\\cup C)=P(A)+P(B)+P(C)$$$$-P(A\\cap B)-P(A\\cap C)-P(B\\cap C)+P(A\\cap B\\cap C)$$` },
    { id: "t4-k04", vorne: `**Klassische (Laplace-)Wahrscheinlichkeit**?`, hinten: `$$P(A)=\\frac{\\text{Anzahl günstige Fälle}}{\\text{Anzahl mögliche Fälle}}$$ (alle Elementarereignisse gleich wahrscheinlich)` },
    { id: "t4-k05", vorne: `**Bedingte Wahrscheinlichkeit** $P(A\\mid B)$ – Definition?`, hinten: `$$P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}\\qquad(P(B)>0)$$` },
    { id: "t4-k06", vorne: `**Multiplikationssatz**?`, hinten: `$$P(A\\cap B)=P(A\\mid B)\\cdot P(B)=P(B\\mid A)\\cdot P(A)$$` },
    { id: "t4-k07", vorne: `**Unabhängigkeit** von $A$ und $B$ – Definition + Test?`, hinten: `$$A,B\\text{ unabhängig}\\iff P(A\\cap B)=P(A)\\cdot P(B)$$ Test: Produkt der Einzelwahrscheinlichkeiten mit $P(A\\cap B)$ vergleichen.` },
    { id: "t4-k08", vorne: `Satz der **totalen Wahrscheinlichkeit**?`, hinten: `Für eine Zerlegung $B_1,\\dots,B_n$ von $\\Omega$:
$$P(A)=\\sum_{i=1}^nP(A\\mid B_i)\\cdot P(B_i)$$` },
    { id: "t4-k09", vorne: `**Satz von Bayes**?`, hinten: `$$P(B_k\\mid A)=\\frac{P(A\\mid B_k)P(B_k)}{\\sum_iP(A\\mid B_i)P(B_i)}$$ Zähler = ein Summand des Nenners (totale W.).` },
    { id: "t4-k10", vorne: `**Zuverlässigkeit**: Reihen- vs. Parallelschaltung aus $n$ unabhängigen Elementen?`, hinten: `Reihe (alle nötig): $P_{\\text{System}}=p_1p_2\\cdots p_n$
Parallel (eines reicht): $P_{\\text{System}}=1-(1-p_1)\\cdots(1-p_n)$` },
    { id: "t4-k11", vorne: `"**Mindestens einer**" – Standard-Trick?`, hinten: `Über das Gegenereignis:
$$P(\\text{mindestens 1})=1-P(\\text{keiner})$$` },
    { id: "t4-k12", vorne: `Aus $A\\subset B$ folgt … ?`, hinten: `$A\\cap B=A$, $\\;A\\cup B=B$, $\\;P(A)\\le P(B)$, $\\;P(B\\mid A)=1$, $\\;\\bar B\\subset\\bar A$, $\\;P(B\\setminus A)=P(B)-P(A)$` },
  ],
});
