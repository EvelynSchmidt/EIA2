namespace L10_Animation {
    export class Fisch {
        x: number;
        y: number;
        r: number;
        b: number;
        g: number;




        // declare method without keyword function
        move(): void {
            this.x += 3;
            this.y += 0;
        }

        //Funktion lila Fische

        drawFish1(): void {

            ctx.beginPath();
            crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20);
            crc2.moveTo(this.x, this.y + 20);
            crc2.lineTo(this.x - 20, this.y + 10);
            crc2.lineTo(this.x - 25, this.y + 15);
            crc2.lineTo(this.x - 25, this.y);
            crc2.lineTo(this.x - 20, this.y + 5);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            ctx.stroke();
            ctx.fill();
            crc2.closePath();
        }

        //Funktion grün Fisch  
        drawFish2(): void {

            ctx.beginPath();
            crc2.fillStyle = "rgb(84,255,159)";
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20);
            crc2.moveTo(this.x, this.y + 20);
            crc2.lineTo(this.x - 20, this.y + 10);
            crc2.lineTo(this.x - 25, this.y + 15);
            crc2.lineTo(this.x - 25, this.y + 0);
            crc2.lineTo(this.x - 20, this.y + 5);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            ctx.stroke();
            ctx.fill();
            crc2.closePath();
        }

    }
}