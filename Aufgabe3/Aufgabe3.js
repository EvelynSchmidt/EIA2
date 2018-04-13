var Memoryspiel;
(function (Memoryspiel) {
    var numPlayers;
    var numPairs;
    var n = 0;
    var cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var cardList = [];
    function inputPairs() {
        var pairs = prompt("Wie viele Kartenpaare (min4 & max26)");
        var pairSum = parseInt(pairs);
        console.log("inputPairs");
        return pairSum;
    }
    var amount = inputPairs();
    console.log("Länge Infolist", cardContent.length);
    console.log("Content Infolist", cardContent);
    function shuffelAray(x) {
        for (var i = 1; i <= x; i++) {
            var content = cardContent[0];
            cardList.push(content);
            cardList.push(content);
            var removed = cardContent.splice(0, 1);
        }
        console.log("Content CardList", cardList);
    }
    function generateCards(y) {
        var node = document.getElementById("spielfeld");
        var childNodeHTML;
        var i = 0;
        while (i < (y * 2)) {
            var min = 0;
            var max = (cardList.length);
            // min = Math.ceil(min);
            //  max = Math.floor(max);
            var random = Math.floor(Math.random() * (max - min)) + min;
            console.log("Card:" + i);
            console.log(random);
            childNodeHTML = "<div  class='card' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardList.length);
            var content = cardList[random];
            var removed = cardList.splice(random, 1);
            console.log(cardList);
            i++;
        }
    }
    // Hauptprogramm
    function main() {
        shuffelAray(amount);
        console.log("main");
        // Content erzeugen
        generateCards(amount);
    }
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main);
})(Memoryspiel || (Memoryspiel = {}));
//# sourceMappingURL=Aufgabe3.js.map