const scherzfragen = [
    "Ich habe einen Ozean aber kein Wasser. Wer bin ich?",
    "Was wird beim Trocknen nass?",
    "Ein Mann fällt aus dem Fenster eines 20-stöckigen Wolkenkratzers. Er nimmt keinen Schaden. Wie konnte das geschehen?",
    "Was antwortet in allen Sprachen?",
    "Was ist die Steigerung von Buchstabensuppe?",
    "Wieso benutzen Beamte keine Taschentücher?",
    "Welche Vögel legen keine Eier?",
    "Wie oft kann man 1 von 20 abziehen?",
    "Welcher Zahn beißt nie?",
    "Welche Haarfarbe hatten die alten Römer?",
    "Was hat zwei Beine und kann nicht laufen?",
    "In welche Gläser sollte man keinen Wein gießen?",
    "Warum muss man in einer Apotheke immer so leise sein?",
    "Was sagt ein Hammer zu einem Daumen?",
    "Was ist ein Schokoladenkeks unter einem Baum?",
    "Einige Monate haben 30 Tage andere haben 31 Tage. Doch wie viel Monate haben 28 Tage?",
    "Wie viele Kartoffeln passen in einen leeren Sack?",
    "Wann sagt ein Chinese: Guten Morgen?",
    "Ein Auto fährt eine scharfe Linkskurve. Welches Rad dreht sich hierbei am wenigsten?",
    "Was steht auf dem Grabstein des Mathelehrers?",
    "Welcher Tag ist der gefährlichste Tage für U-Boot Fahrer?",
    "Was schwimmt auf dem Wasser und fängt mit Z an?",
    "Wie nennt man die Steigerung von Buchstabensuppe?",
    "Was wird beim Trocknen nass?",
    "Wo geht man durch ein Loch rein und durch zwei wieder raus?",
    "Ein Mann fällt aus dem Fenster eines 20-stöckigen Wolkenkratzers. Er nimmt keinen Schaden. Wie konnte das geschehen?",
    "Worauf sitzt man, schläft man und putzt sich die Zähne mit?",
    "Was antwortet in allen Sprachen? Was spricht ohne Mund? Was hört ohne Ohren?",
    "Welcher war der höchsten Berg der Welt bevor der Mount Everest entdeckt wurde?",
    "30 Schornsteine plus 23 Schornsteine plus 7 Schornsteine.",
    "Wie kann man auf Wasser gehen?",
    "Auf einer Stromleitung sitzen 20 Vögel. Ein Mann erschießt drei mit seinem Gewehr. Wie viele Vögel befinden sich noch auf der Stromleitung?",
    "Auf einem Hügel steht ein Esel. Der Hügel ist von einem sehr dichten Wald, einem sehr tiefen See und von Feuer umgeben. Wenn der Esel durch den Wald geht, bricht er sich die Hörner ab, wenn er durchs Feuer geht, kommt er im Feuer ums Leben. Er kann nicht schwimmen. Wie kommt der Esel nach Hause?",
    "Ein Flugzeug fliegt von Stadt A nach Stadt B in 1 Stunde und 20 Minuten und von Stadt B nach Stadt A in 80 Minuten. Warum ist das so?",
    "Wenn eine Katze in einer Minute eine Maus frisst, in wie vielen Minuten fressen hundert Katzen hundert Mäuse?",
    "Es gibt zwei Väter und zwei Söhne. Sie haben nur drei Apfelsinen zu essen. Wie teilen sie die Apfelsinen untereinander auf, so dass jeder eine Apfelsine bekommt?",
    "Was braucht man sofort oder nie mehr?",
    "Was wird größer, wenn man es herumdreht?",
    "Mit welchem Kamm kann man sich nicht kämmen?",
    "Welche Enten trinken Bier?",
    "Welche Frage kann man nie mit ja beantworten?",
    "Wer kann fünf aufeinander folgende Tage nennen, in denen kein a vorkommt?",
    "Auf welcher Straße ist noch keiner gefahren?",
    "Wie kommt eine Ameise über einen Fluß?",
    "Zwei Männer spielen im Lokal Backgammon. Sie machen fünf Spiele. Kein Spiel geht unentschieden aus, und jeder gewinnt gleich viele Spiele. Wie ist das möglich?"
];
const scherzantworten = [
    "Weltkarte",
    "Handtuch",
    "Nur aus dem ersten Stock gefallen",
    "Echo",
    "Wörthersee",
    "Weil Tempo draufsteht",
    "Männliche Vögel",
    "Einmal",
    "Löwenzahn",
    "Grau",
    "Eine Hose",
    "In volle Gläser",
    "Damit die Schlaftabletten nicht aufwachen",
    "Schön dich mal wieder zu treffen!",
    "Ein schattiges Plätzchen",
    "Alle",
    "Eine",
    "Wenn er deutsch gelernt hat",
    "Lenkrad",
    "Damit hat er nicht gerechnet",
    "Tag der offenen Tür",
    "Zwei Enten",
    "Wörtersee",
    "Das Handtuch",
    "Durch eine Hose",
    "Ist doch klar, er ist nur aus dem ersten Stock gefallen",
    "Ein Stuhl, ein Bett und eine Zahnbürste",
    "Das Echo",
    "Der Mount Everest (er war halt nur nicht entdeckt)",
    "Was kommt da heraus? Rauch",
    "Man wartet bis Winter und richtig kalt ist",
    "Keiner! Der Knall hat die anderen wegfliegen lassen",
    "Durch den Wald, weil Esel keine Hörner haben",
    "1 Stunde und 20 Minuten = 80 Minuten",
    "In einer Minute",
    "Es sind nur drei Personen (Großvater, Vater und Sohn), deshalb bekommt jeder eine Apfelsine",
    "Einen Fallschirm",
    "Die Zahl 6",
    "Mit dem Hahnenkamm",
    "Die Studenten",
    "Schläfst du?",
    "Vorgestern, gestern, heute, morgen, übermorgen",
    "Auf der Milchstraße",
    "Sie nimmt das A weg und fliegt drüber.",
    "Sie spielen mit verschiedenen Gegnern!",
];


export function randomJokeQuestion() {
    const indexNumber = Math.floor((Math.random() * 45) + 0);
    const scherzfrage = scherzfragen[indexNumber];
    const scherzantwort = scherzantworten[indexNumber];
    const scherzFrageAntwort = {
        Frage: scherzfrage,
        Antwort: scherzantwort
    };
    return scherzFrageAntwort;
}