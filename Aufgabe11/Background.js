var L10_Animation;
(function (L10_Animation) {
    var Hintergrund = (function () {
        function Hintergrund() {
        }
        Hintergrund.prototype.paint = function () {
            this.drawBackground(260);
            this.drawStone(300, 380);
            this.drawStarfish(310, 500);
            this.drawPlant(110, 640);
            this.drawPlant(290, 640);
        };
        //Funktion Hintergrund
        Hintergrund.prototype.drawBackground = function (_sandHeight) {
            L10_Animation.crc2.fillStyle = "rgb(152,245,255)";
            L10_Animation.crc2.fillRect(0, 0, L10_Animation.crc2.canvas.width, L10_Animation.crc2.canvas.height);
            L10_Animation.crc2.fillStyle = "rgb(222,184,135)";
            L10_Animation.crc2.fillRect(0, L10_Animation.crc2.canvas.height - _sandHeight, L10_Animation.crc2.canvas.width, L10_Animation.crc2.canvas.height);
        };
        Hintergrund.prototype.drawPlant = function (_x, _y) {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.fillStyle = "rgb(34,139,34)";
            L10_Animation.crc2.moveTo(_x, _y);
            L10_Animation.crc2.lineTo(_x + 10, _y - 100);
            L10_Animation.crc2.lineTo(_x + 20, _y + 60);
            L10_Animation.crc2.lineTo(_x + 20, _y - 40);
            L10_Animation.crc2.lineTo(_x + 10, _y + 30);
            L10_Animation.crc2.lineTo(_x + 10, _y - 35);
            L10_Animation.crc2.lineTo(_x + 10, _y + 85);
            L10_Animation.crc2.closePath();
            L10_Animation.ctx.stroke();
            L10_Animation.crc2.fill();
        };
        //Seestern
        Hintergrund.prototype.drawStarfish = function (_x, _y) {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.fillStyle = "#FF33CC";
            L10_Animation.crc2.moveTo(_x, _y + 25);
            L10_Animation.crc2.lineTo(_x - 20, _y);
            L10_Animation.crc2.lineTo(_x + 5, _y - 25);
            L10_Animation.crc2.lineTo(_x - 30, _y - 18);
            L10_Animation.crc2.lineTo(_x - 50, _y - 40);
            L10_Animation.crc2.lineTo(_x - 50, _y - 12);
            L10_Animation.crc2.lineTo(_x - 80, _y + 5);
            L10_Animation.crc2.lineTo(_x - 50, _y + 8);
            L10_Animation.crc2.lineTo(_x - 50, _y + 35);
            L10_Animation.crc2.lineTo(_x - 30, _y + 12);
            L10_Animation.crc2.lineTo(_x, _y + 25);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.fill();
            L10_Animation.crc2.stroke();
        };
        Hintergrund.prototype.drawStone = function (_x, _y) {
            L10_Animation.crc2.fillStyle = "#505050";
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.moveTo(_x, _y);
            L10_Animation.crc2.bezierCurveTo(_x - 20, _y - 120, _x + 80, _y - 120, _x + 60, _y);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
        };
        return Hintergrund;
    }());
    L10_Animation.Hintergrund = Hintergrund;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Background.js.map