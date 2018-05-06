namespace Memory5 {

    let numPlayers: number;
    let numPairs: number;
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardPush: string[] = [];
    let cardOpen: string[] = []
    var numPairsInt: number;
    var numPlayerInt: number;
    let numCardsOpen: number = 0;
    let openArray: any[] = []
    let takenCards: any = [];
    let x: number = 0; 
   

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
   
    document.addEventListener('DOMContentLoaded', init);

     function init(): void {
        let startknopf: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");
        startknopf.addEventListener("click", main);
      }
   
    //Hauptfunktion    
    function main(): void {
        let header: NodeListOf<HTMLElement> = document.getElementsByTagName("header");
        header[0].classList.add("disappearedHeader")

        let players: number = parseInt(inputs[0].value);
        let amountCards: number = parseInt(inputs[5].value);

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
    function spielererzeugen(): void {
        let players: number = parseInt(inputs[0].value);
       
        let node: any = document.getElementById("spielername");
        let childNodeHTML: string;

        for (let i: number = 0; i < players; i++) {
                let playerName: string = inputs[i + 1].value

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
    function createCardList(): void {
        let amountCards: number = parseInt(inputs[5].value);
        let auswahl: HTMLSelectElement = <HTMLSelectElement>document.getElementById("cardContent");
        let chosenCardContent: string = auswahl.value;
        
        
        for (let i: number = 1; i <= amountCards; i++) {
            var content: string = decks[chosenCardContent].content[i -1];
           
            cardPush.push(content);
            cardPush.push(content);

            var remove = cardContent.splice(0, 1);

        }
    }


    //Karten erstell   
    function createCards(): void {
        let amountCards: number = parseInt(inputs[5].value);
        let node: any = document.getElementById("spielfeld");
        let childNodeHTML: string;
        let i: number = 0;


        for (let i: number = 0; i < amountCards * 2; i++) {
            

            var random: number = Math.floor(Math.random() * Math.floor(cardPush.length));


            childNodeHTML = "<div  class='card" + "hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;

            var remove = cardPush.splice(random, 1)

            var hiddenCards = document.getElementsByClassName("cardhidden")
            for (let i: number = 0; i < hiddenCards.length; i++) {


                hiddenCards[i].addEventListener("click", cardStatus);
            }

        }


    }
    function compareCards(): void {
        let karte1: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("cardopen")[0];
        let karte2: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("cardopen")[1];

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



        } else {
            openArray[0].classList.remove("cardopen");
            openArray[0].classList.add("cardhidden");


            openArray[1].classList.remove("cardopen");
            openArray[1].classList.add("cardhidden");

        }

        numCardsOpen = 0;
        openArray.splice(0, 2);

    }
    function cardStatus(_event: MouseEvent): void {
        console.log("Test")
        let t: HTMLElement = <HTMLElement>_event.currentTarget;
        
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

    function ende(): void {
        if (x == numPairsInt) {

            alert("Herzlichen Glückwunsch!");

        }

    }
}
