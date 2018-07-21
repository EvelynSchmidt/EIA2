namespace L11_SeaworldInheritance {
    export class Saturn extends MovingObject{

        radius: number;
       

        constructor() {
            super();
            this.setRandomPosition();
            this.setRandomRadius();
        }

        
        setRandomPosition(): void {
            this.x = Math.random() * canvas.width - 200;
            this.y = Math.random() * canvas.height - 100;
        }


        setRandomRadius(): void {
            this.radius = Math.random() * 10;
           
        }
draw(){
    var img = new Image(); 
    img.src = 'Saturn.png'; 
    crc2.drawImage(img,this.x,this.y, 200, 200); 
    
}
        move(): void {
            this.x += 0;
            this.y += Math.random()*100;
        }

    } //class BubblesLeft zu
} //namespace zu