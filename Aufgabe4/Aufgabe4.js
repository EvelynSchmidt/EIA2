var Memory;
(function (Memory) {
    var numPlayers;
    var numPairs;
    var cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var cardPush = [];
    var numPairsInt;
    var numPlayerInt;
    document.addEventListener('DOMContentLoaded', main);
    //Hauptfunktion Ablauf
    function main() {
        player();
        creatCardList(numPairsInt);
        enterName(numPlayerInt);
        creatCards(numPairsInt);
    }
    //Spieleranzahl eingeben
    function player() {
        var numPlayer = prompt("Gewünschte Anzahl der Spieler   min. 1 | max. 4", "");
        numPlayerInt = parseInt(numPlayer);
        if (numPlayerInt >= 1 && numPlayerInt <= 4) {
            return numPlayerInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 4");
            player();
        }
    }
    //Kartenpaare eingeben
    function pair() {
        var numPairs = prompt("Gewünschte Anzahl der Kartenpaare   min. 1 | max. 26");
        numPairsInt = parseInt(numPairs);
        if (numPairsInt >= 1 && numPairsInt <= 26) {
            return numPairsInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 26");
            pair();
        }
    }
    var amount = pair();
    //Spielernamen erzeugen
    function enterName(_numPlayer) {
        var node = document.getElementById("spielernamen");
        var childNodeHTML;
        for (var i = 0; i < _numPlayer; i++) {
            childNodeHTML = "<div>";
            childNodeHTML += "<h2>";
            childNodeHTML += "<p class='namen'>";
            childNodeHTML += "Player " + i;
            childNodeHTML += "</p>";
            childNodeHTML += "</h2>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
        }
    }
    //Inhalt der Karten erzeugen
    function creatCardList(x) {
        for (var i = 1; i <= x; i++) {
            var content = cardContent[0];
            cardPush.push(content);
            cardPush.push(content);
            var remove = cardContent.splice(0, 1);
        }
    }
    //Karten erstellen
    function creatCards(_numPairs) {
        var node = document.getElementById("spielfeld");
        var childNodeHTML;
        var i = 0;
        for (var i_1 = 0; i_1 < _numPairs * 2; i_1++) {
            var min = 0;
            var max = (cardPush.length);
            var random = Math.floor(Math.random() * Math.floor(max));
            childNodeHTML = "<div  class='card" + "hidden" + "' id='Karte" + i_1 + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            var remove = cardPush.splice(random, 1);
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Aufgabe4.js.map