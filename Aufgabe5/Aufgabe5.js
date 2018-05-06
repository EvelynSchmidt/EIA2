var Memory5;
(function (Memory5) {
    var numPlayers;
    var numPairs;
    var cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var cardPush = [];
    var cardOpen = [];
    var numPairsInt;
    var numPlayerInt;
    var numCardsOpen = 0;
    var openArray = [];
    var takenCards = [];
    var x = 0;
    var inputs = document.getElementsByTagName("input");
    document.addEventListener('DOMContentLoaded', init);
    function init() {
        var startknopf = document.getElementById("startButton");
        startknopf.addEventListener("click", main);
    }
    //Hauptfunktion    
    function main() {
        var header = document.getElementsByTagName("header");
        header[0].classList.add("disappearedHeader");
        var players = parseInt(inputs[0].value);
        var amountCards = parseInt(inputs[5].value);
        if (players <= 4 && players > 0 && amountCards > 0 && amountCards <= 10) {
            createCardList();
            spielererzeugen();
            createCards();
        }
        else {
            alert("Falsche Eingabe");
            location.reload(true);
        }
    }
    //Spielernamen erzeugen
    function spielererzeugen() {
        var players = parseInt(inputs[0].value);
        var node = document.getElementById("spielername");
        var childNodeHTML;
        for (var i = 0; i < players; i++) {
            var playerName = inputs[i + 1].value;
            childNodeHTML = "<div>";
            childNodeHTML += "<h2>";
            childNodeHTML += "<p class='namen'>";
            childNodeHTML += playerName;
            childNodeHTML += "</p>";
            childNodeHTML += "<p  id='Punktestand" + i + "'>";
            childNodeHTML += "0";
            childNodeHTML += "</p>";
            childNodeHTML += "</h2>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
        }
    }
    //Inhalt der Karten erzeugen    
    function createCardList() {
        var amountCards = parseInt(inputs[5].value);
        var auswahl = document.getElementById("cardContent");
        var chosenCardContent = auswahl.value;
        for (var i = 1; i <= amountCards; i++) {
            var content = Memory5.decks[chosenCardContent].content[i - 1];
            cardPush.push(content);
            cardPush.push(content);
            var remove = cardContent.splice(0, 1);
        }
    }
    //Karten erstell   
    function createCards() {
        var amountCards = parseInt(inputs[5].value);
        var node = document.getElementById("spielfeld");
        var childNodeHTML;
        var i = 0;
        for (var i_1 = 0; i_1 < amountCards * 2; i_1++) {
            var random = Math.floor(Math.random() * Math.floor(cardPush.length));
            childNodeHTML = "<div  class='card" + "hidden" + "' id='Karte" + i_1 + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            var remove = cardPush.splice(random, 1);
            var hiddenCards = document.getElementsByClassName("cardhidden");
            for (var i_2 = 0; i_2 < hiddenCards.length; i_2++) {
                hiddenCards[i_2].addEventListener("click", cardStatus);
            }
        }
    }
    function compareCards() {
        var karte1 = document.getElementsByClassName("cardopen")[0];
        var karte2 = document.getElementsByClassName("cardopen")[1];
        openArray.push(karte1, karte2);
        console.log(openArray);
        if (openArray[0].innerHTML == openArray[1].innerHTML) {
            openArray[0].classList.remove("cardopen");
            openArray[0].classList.add("cardtaken");
            openArray[1].classList.remove("cardopen");
            openArray[1].classList.add("cardtaken");
            x++;
            ende();
            console.log("Kartenpaar abeglegt");
        }
        else {
            openArray[0].classList.remove("cardopen");
            openArray[0].classList.add("cardhidden");
            openArray[1].classList.remove("cardopen");
            openArray[1].classList.add("cardhidden");
        }
        numCardsOpen = 0;
        openArray.splice(0, 2);
    }
    function cardStatus(_event) {
        console.log("Test");
        var t = _event.currentTarget;
        if (numCardsOpen >= 0 && numCardsOpen < 2) {
            if (t.className == "cardhidden") {
                if (!(numCardsOpen > 2)) {
                    if (t.className = "cardhidden") {
                        t.classList.remove("cardhidden");
                        t.classList.add("cardopen");
                        numCardsOpen++;
                    }
                }
                if (numCardsOpen == 2) {
                    setTimeout(compareCards, 1500);
                }
                if (numCardsOpen > 2) {
                    t.classList.remove("cardopen");
                    t.classList.add("cardhidden");
                }
            }
        }
    }
    function ende() {
        if (x == numPairsInt) {
            alert("Herzlichen Glückwunsch!");
        }
    }
})(Memory5 || (Memory5 = {}));
//# sourceMappingURL=Aufgabe5.js.map