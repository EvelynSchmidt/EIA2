namespace L10_Animation {
    export class Pflanze {
        x: number;
        y: number;

        // declare method without keyword function
        move(): void {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }

          
        drawPlant(): void {

        crc2.beginPath();
        crc2.fillStyle = "rgb(34,139,34)";
        crc2.moveTo( this.x, this.y );
        crc2.lineTo( this.x + 10, this.y - 100 );
        crc2.lineTo( this.x + 20, this.y + 60 );
        crc2.lineTo( this.x + 20, this.y - 40 );
        crc2.lineTo( this.x + 10, this.y + 30 );
        crc2.lineTo( this.x + 10, this.y - 35 );
        crc2.lineTo( this.x + 10, this.y + 85 );
        crc2.closePath();
        ctx.stroke();
        crc2.fill();
    }
    }
}