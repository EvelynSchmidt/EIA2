namespace aqua {
export class Bubble extends MovingObjects {
        r: number;

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);

        }

        move(): void {
            this.y += -15;

            if (this.y < 0) {
                this.y = 1200;
            }
        }


       
    }


}