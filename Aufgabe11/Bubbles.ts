namespace L10_Animation {
    export class Blase {
        x: number;
        y: number;
        radius: number;

        // declare method without keyword function
        move(): void {
            this.x += 0
            this.y += 1
        }

        
        drawBubbles (): void {
        ctx.beginPath();
        crc2.fillStyle = "rgb(0,0,255)";
        ctx.arc( this.x, this.y, this.radius, 0, 2 * Math.PI );
        crc2.closePath();
        ctx.stroke();
        crc2.fill();
    }
    }
}