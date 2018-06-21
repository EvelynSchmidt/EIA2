var L10_Animation;
(function (L10_Animation) {
    var Fisch = (function () {
        function Fisch() {
        }
        // declare method without keyword function
        Fisch.prototype.move = function () {
            this.x += 3;
            this.y += 0;
        };
        //Funktion lila Fische
        Fisch.prototype.drawFish1 = function () {
            L10_Animation.ctx.beginPath();
            L10_Animation.crc2.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            L10_Animation.ctx.moveTo(this.x, this.y);
            L10_Animation.ctx.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20);
            L10_Animation.crc2.moveTo(this.x, this.y + 20);
            L10_Animation.crc2.lineTo(this.x - 20, this.y + 10);
            L10_Animation.crc2.lineTo(this.x - 25, this.y + 15);
            L10_Animation.crc2.lineTo(this.x - 25, this.y);
            L10_Animation.crc2.lineTo(this.x - 20, this.y + 5);
            L10_Animation.crc2.lineTo(this.x, this.y);
            L10_Animation.crc2.closePath();
            L10_Animation.ctx.stroke();
            L10_Animation.ctx.fill();
            L10_Animation.crc2.closePath();
        };
        //Funktion grün Fisch  
        Fisch.prototype.drawFish2 = function () {
            L10_Animation.ctx.beginPath();
            L10_Animation.crc2.fillStyle = "rgb(84,255,159)";
            L10_Animation.ctx.moveTo(this.x, this.y);
            L10_Animation.ctx.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20);
            L10_Animation.crc2.moveTo(this.x, this.y + 20);
            L10_Animation.crc2.lineTo(this.x - 20, this.y + 10);
            L10_Animation.crc2.lineTo(this.x - 25, this.y + 15);
            L10_Animation.crc2.lineTo(this.x - 25, this.y + 0);
            L10_Animation.crc2.lineTo(this.x - 20, this.y + 5);
            L10_Animation.crc2.lineTo(this.x, this.y);
            L10_Animation.crc2.closePath();
            L10_Animation.ctx.stroke();
            L10_Animation.ctx.fill();
            L10_Animation.crc2.closePath();
        };
        return Fisch;
    }());
    L10_Animation.Fisch = Fisch;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Fisch.js.map