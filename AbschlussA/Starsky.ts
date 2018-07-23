namespace L11_SeaworldInheritance {
    export class Starsky extends MovingObject {
        radius: number;
       

        constructor() {
            super();
            this.setRandomPosition();
        }

        
        setRandomPosition(): void {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
        }


     


       draw(): void {
        
        crc2.fillStyle = "#FFF"; 
        crc2.moveTo(this.x,this.y+5);
    
        crc2.lineTo(this.x - 4, this.y);
        crc2.lineTo(this.x +1, this.y -5);   
        crc2.lineTo(this.x -6, this.y - 3);
        crc2.lineTo(this.x -10, this.y - 8);
        crc2.lineTo(this.x - 10, this.y-2);
        crc2.lineTo(this.x -16, this.y + 1);
        crc2.lineTo(this.x - 10, this.y +1);
        crc2.lineTo(this.x -10, this.y +7);
        crc2.lineTo(this.x - 6, this.y +2);
    
        crc2.lineTo(this.x, this.y+5);
        crc2.closePath();
        crc2.fill();
}
       
        }}
