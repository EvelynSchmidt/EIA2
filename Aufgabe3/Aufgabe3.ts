namespace Memoryspiel {
    let cardContent: string [] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
    let cardList: string[]=[];

    //Karteneingabe
    function EingabeKarten() : number{
       // Eingabe vom Nutzer
    let Paare : string = prompt("Mit wie vielen Kartenpaaren möchtest du spielen? (2-26)") 
        // "Umwandlung von Eingabe in Variable
    let PaarSumme : number = parseInt(Paare)
       //Konsolenausgabe
       console.log("EingabeKarten")
        
    
       return PaarSumme;
    }
       
   let amount :number =  EingabeKarten();
   
        
    console.log("Länge Infolist", cardContent.length);
    console.log("Content Infolist", cardContent);
    
    
    
    
    function ArrayMischen (x:number): void {
        
        for (let i: number = 1; i <= x; i++) {
             
            
        var content : string = cardContent[0];  
        cardList.push (content);
            cardList.push (content);
         
             
            var removed = cardContent.splice(0, 1);
            
            
            
        }
    console.log("Content CardList", cardList);
   
    
    }
    
    
   //Karten erzeugen 
    function generateCards (y:number) : void{
        var node : any= document.getElementById("Spiel");
        var childNodeHTML : string;
        var i : number = 0;
        
        //Beginn Schleife 
        while (i < (y*2)) {
            let min: number = 0;
        let max: number = (cardList.length);
            // Random mischen
            let random: number = Math.floor(Math.random() * (max - min)) + min; 
            console.log("Card:" + i);
              console.log(random); 
          
            childNodeHTML = "<div  class='card' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + cardList.length)
            var content : string = cardList[random];  
             
            var removed = cardList.splice(random, 1);
            console.log(cardList);
            
            i++;
        }
    }
    
    
    // Hauptprogramm
    function main () : void {
        
         ArrayMischen(amount);
        
       
        
        
        console.log("main");
        
        // Content erzeugen
         generateCards(amount);
        }
    
    
    
    
    
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main); 
}
    
    
    


