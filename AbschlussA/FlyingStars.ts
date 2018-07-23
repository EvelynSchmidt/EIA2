namespace L11_SeaworldInheritance {
    export class FlyingStars extends MovingObject {
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


        draw() {
            crc2.beginPath();
            crc2.fillStyle = "#FFFF00";

            crc2.lineTo(this.x - 8, this.y);
            crc2.lineTo(this.x + 2, this.y - 10);
            crc2.lineTo(this.x - 12, this.y - 6);
            crc2.lineTo(this.x - 20, this.y - 16);
            crc2.lineTo(this.x - 20, this.y - 4);
            crc2.lineTo(this.x - 32, this.y + 2);
            crc2.lineTo(this.x - 20, this.y + 2);
            crc2.lineTo(this.x - 20, this.y + 14);
            crc2.lineTo(this.x - 12, this.y + 4);

            crc2.lineTo(this.x, this.y + 10);
            crc2.closePath();
            crc2.fill();
        }

        move(): void {
            this.x += 90;
            this.y += 3;

            if (this.x > canvas.width) {
                this.x = 0;
            }
            if (this.x < 0) {
                this.x = canvas.width;
            }
            if (this.y > canvas.height) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = canvas.height;
            }

        }
    }
}
