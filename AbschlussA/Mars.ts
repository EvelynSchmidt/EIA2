namespace L11_SeaworldInheritance {
    export class Mars extends MovingObject {
        radius: number;
       

        constructor() {
            super();
            this.setRandomPosition();
            this.setRandomRadius();
        }

        
        setRandomPosition(): void {
            this.x = Math.random() * canvas.width - 200;
            this.y = Math.random() * canvas.height - 200;
        }


        setRandomRadius(): void {
            this.radius = Math.random() * 10;
           
        }


draw() 
 {  
    var img = new Image(); 
    img.src = 'Mars1.png'; 
    crc2.drawImage(img,this.x,this.y, 200, 200); 
    
}
        move(): void {
            this.x += Math.random()*100;
            this.y += Math.random()*30;
            
        }
        

        }}
