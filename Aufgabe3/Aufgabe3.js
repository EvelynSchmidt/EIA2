var Memoryspiel;
(function (Memoryspiel) {
    var cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var cardList = [];
    //Karteneingabe
    function EingabeKarten() {
        var Paare = prompt("Mit wie vielen Kartenpaaren möchtest du spielen? (2-26)");
        var PaarSumme = parseInt(Paare);
        console.log("EingabeKarten");
        return PaarSumme;
    }
    var amount = EingabeKarten();
    console.log("Länge Infolist", cardContent.length);
    console.log("Content Infolist", cardContent);
    function ArrayMischen(x) {
        for (var i = 1; i <= x; i++) {
            var content = cardContent[0];
            cardList.push(content);
            var removed = cardContent.splice(0, 1);
        }
        console.log("Content CardList", cardList);
    }
    //Karten erzeugen 
    function generateCards(y) {
        var node = document.getElementById("Spiel");
        var childNodeHTML;
        var i = 0;
        while (i < (y * 2)) {
            var min = 0;
            var max = (cardList.length);
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
        ArrayMischen(amount);
        console.log("main");
        // Content erzeugen
        generateCards(amount);
    }
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main);
})(Memoryspiel || (Memoryspiel = {}));
//# sourceMappingURL=Aufgabe3.js.map