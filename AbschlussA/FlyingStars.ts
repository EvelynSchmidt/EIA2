/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst und Franziska Hei� erarbeitet */

namespace L11_SeaworldInheritance {
    export class PlanetB extends MovingObject {
        color: string;
        speed: number;
        food: Food;
                radius: number;

        private huntspeed: number = 0.1;
        private distanceToEat: number = 5;

        constructor() {
            super();
           
        }

draw(): void {
            crc2.fillStyle = "rgb(204, 238, 255, 0.55)";
            crc2.lineWidth = 0.5;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

       
        }

    } //class fish zu
 //namespace zu} //namespace zu