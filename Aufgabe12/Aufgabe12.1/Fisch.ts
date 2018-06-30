namespace aquaworld {
       export class Fisch extends MovingObjects {

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);

        }


    
        move(): void {
            this.x += 3;
            this.y += 0;
        }

   

        draw(): void {

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20);
            crc2.moveTo(this.x, this.y + 20);
            crc2.lineTo(this.x - 20, this.y + 10);
            crc2.lineTo(this.x - 25, this.y + 15);
            crc2.lineTo(this.x - 25, this.y);
            crc2.lineTo(this.x - 20, this.y + 5);
            crc2.lineTo(this.x, this.y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }
        }
          }