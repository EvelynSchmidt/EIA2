namespace L11_SeaworldInheritance {

    export function drawBackground(): void {
        var numCircles = 9900;

        drawGalaxy();
        drawStar( Math.random()*canvas.width, Math.random()*canvas.height);

    function drawGalaxy(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(50, 0, 10, 300);
        gradient.addColorStop(0, "#7d1fce");
        gradient.addColorStop(1, "#53a8e7");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 700);
    }
          
       function drawStar(_x:number, _y:number): void {
        crc2.beginPath();
        crc2.fillStyle = "#FFF"; 
        crc2.moveTo(_x, _y+5);
    
        crc2.lineTo(_x - 4, _y);
        crc2.lineTo(_x +1, _y -5);   
        crc2.lineTo(_x -6, _y - 3);
        crc2.lineTo(_x -10, _y - 8);
        crc2.lineTo(_x - 10, _y-2);
        crc2.lineTo(_x -16, _y + 1);
        crc2.lineTo(_x - 10, _y +1);
        crc2.lineTo(_x -10, _y +7);
        crc2.lineTo(_x - 6, _y +2);
    
        crc2.lineTo(_x, _y+5);
        crc2.closePath();
        crc2.fill();
}
}

   }
//namespace