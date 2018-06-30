var aqua;
(function (aqua) {
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
            aqua.crc2.fillStyle = "rgb(152,245,255)";
            aqua.crc2.fillRect(0, 0, aqua.crc2.canvas.width, aqua.crc2.canvas.height);
            aqua.crc2.fillStyle = "rgb(222,184,135)";
            aqua.crc2.fillRect(0, aqua.crc2.canvas.height - _sandHeight, aqua.crc2.canvas.width, aqua.crc2.canvas.height);
        };
        Hintergrund.prototype.drawPlant = function (_x, _y) {
            aqua.crc2.beginPath();
            aqua.crc2.fillStyle = "rgb(34,139,34)";
            aqua.crc2.moveTo(_x, _y);
            aqua.crc2.lineTo(_x + 10, _y - 100);
            aqua.crc2.lineTo(_x + 20, _y + 60);
            aqua.crc2.lineTo(_x + 20, _y - 40);
            aqua.crc2.lineTo(_x + 10, _y + 30);
            aqua.crc2.lineTo(_x + 10, _y - 35);
            aqua.crc2.lineTo(_x + 10, _y + 85);
            aqua.crc2.closePath();
            aqua.crc2.stroke();
            aqua.crc2.fill();
        };
        //Seestern
        Hintergrund.prototype.drawStarfish = function (_x, _y) {
            aqua.crc2.beginPath();
            aqua.crc2.fillStyle = "#FF33CC";
            aqua.crc2.moveTo(_x, _y + 25);
            aqua.crc2.lineTo(_x - 20, _y);
            aqua.crc2.lineTo(_x + 5, _y - 25);
            aqua.crc2.lineTo(_x - 30, _y - 18);
            aqua.crc2.lineTo(_x - 50, _y - 40);
            aqua.crc2.lineTo(_x - 50, _y - 12);
            aqua.crc2.lineTo(_x - 80, _y + 5);
            aqua.crc2.lineTo(_x - 50, _y + 8);
            aqua.crc2.lineTo(_x - 50, _y + 35);
            aqua.crc2.lineTo(_x - 30, _y + 12);
            aqua.crc2.lineTo(_x, _y + 25);
            aqua.crc2.closePath();
            aqua.crc2.fill();
            aqua.crc2.stroke();
        };
        Hintergrund.prototype.drawStone = function (_x, _y) {
            aqua.crc2.fillStyle = "#505050";
            aqua.crc2.beginPath();
            aqua.crc2.moveTo(_x, _y);
            aqua.crc2.bezierCurveTo(_x - 20, _y - 120, _x + 80, _y - 120, _x + 60, _y);
            aqua.crc2.closePath();
            aqua.crc2.stroke();
            aqua.crc2.fill();
        };
        return Hintergrund;
    }());
    aqua.Hintergrund = Hintergrund;
})(aqua || (aqua = {}));
//# sourceMappingURL=Background.js.map