namespace L10_Animation {


    export class Hintergrund {

        public paint(): void {
            this.drawBackground( 260 );
            this.drawStone( 300, 380 );
           
            this.drawStarfish( 310, 500 );
            this.drawPlant( 110, 640 );
            this.drawPlant( 290, 640  );
           
        }

        
        //Funktion Hintergrund

        drawBackground( _sandHeight: number ): void {
            crc2.fillStyle = "rgb(152,245,255)";
            crc2.fillRect( 0, 0, crc2.canvas.width, crc2.canvas.height );

            crc2.fillStyle = "rgb(222,184,135)";
            crc2.fillRect( 0, crc2.canvas.height - _sandHeight, crc2.canvas.width, crc2.canvas.height );
        }

     
    drawPlant( _x: number, _y: number ): void {

        crc2.beginPath();
        crc2.fillStyle = "rgb(34,139,34)";
        crc2.moveTo( _x, _y );
        crc2.lineTo( _x + 10, _y - 100 );
        crc2.lineTo( _x + 20, _y + 60 );
        crc2.lineTo( _x + 20, _y - 40 );
        crc2.lineTo( _x + 10, _y + 30 );
        crc2.lineTo( _x + 10, _y - 35 );
        crc2.lineTo( _x + 10, _y + 85 );
        crc2.closePath();
        ctx.stroke();
        crc2.fill();
    }
        //Seestern

        
        
        drawStarfish(_x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "#FF33CC"; 
        crc2.moveTo(_x, _y+25);
    
        crc2.lineTo(_x - 20, _y);
        crc2.lineTo(_x +5, _y -25);   
        crc2.lineTo(_x -30, _y - 18);
        crc2.lineTo(_x -50, _y - 40);
        crc2.lineTo(_x - 50, _y-12);
        crc2.lineTo(_x -80, _y + 5);
        crc2.lineTo(_x - 50, _y +8);
        crc2.lineTo(_x -50, _y +35);
        crc2.lineTo(_x - 30, _y +12);
    
        crc2.lineTo(_x, _y+25);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
}

    drawStone(_x:number, _y:number) : void {
       
        crc2.fillStyle = "#505050";
        
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x-20, _y-120, _x+80, _y-120, _x+60, _y);
        crc2.closePath();
        
        crc2.stroke();
        crc2.fill();
     

}}}