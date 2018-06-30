var aquaworld;
(function (aquaworld) {
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
            aquaworld.crc2.fillStyle = "rgb(152,245,255)";
            aquaworld.crc2.fillRect(0, 0, aquaworld.crc2.canvas.width, aquaworld.crc2.canvas.height);
            aquaworld.crc2.fillStyle = "rgb(222,184,135)";
            aquaworld.crc2.fillRect(0, aquaworld.crc2.canvas.height - _sandHeight, aquaworld.crc2.canvas.width, aquaworld.crc2.canvas.height);
        };
        Hintergrund.prototype.drawPlant = function (_x, _y) {
            aquaworld.crc2.beginPath();
            aquaworld.crc2.fillStyle = "rgb(34,139,34)";
            aquaworld.crc2.moveTo(_x, _y);
            aquaworld.crc2.lineTo(_x + 10, _y - 100);
            aquaworld.crc2.lineTo(_x + 20, _y + 60);
            aquaworld.crc2.lineTo(_x + 20, _y - 40);
            aquaworld.crc2.lineTo(_x + 10, _y + 30);
            aquaworld.crc2.lineTo(_x + 10, _y - 35);
            aquaworld.crc2.lineTo(_x + 10, _y + 85);
            aquaworld.crc2.closePath();
            aquaworld.crc2.stroke();
            aquaworld.crc2.fill();
        };
        //Seestern
        Hintergrund.prototype.drawStarfish = function (_x, _y) {
            aquaworld.crc2.beginPath();
            aquaworld.crc2.fillStyle = "#FF33CC";
            aquaworld.crc2.moveTo(_x, _y + 25);
            aquaworld.crc2.lineTo(_x - 20, _y);
            aquaworld.crc2.lineTo(_x + 5, _y - 25);
            aquaworld.crc2.lineTo(_x - 30, _y - 18);
            aquaworld.crc2.lineTo(_x - 50, _y - 40);
            aquaworld.crc2.lineTo(_x - 50, _y - 12);
            aquaworld.crc2.lineTo(_x - 80, _y + 5);
            aquaworld.crc2.lineTo(_x - 50, _y + 8);
            aquaworld.crc2.lineTo(_x - 50, _y + 35);
            aquaworld.crc2.lineTo(_x - 30, _y + 12);
            aquaworld.crc2.lineTo(_x, _y + 25);
            aquaworld.crc2.closePath();
            aquaworld.crc2.fill();
            aquaworld.crc2.stroke();
        };
        Hintergrund.prototype.drawStone = function (_x, _y) {
            aquaworld.crc2.fillStyle = "#505050";
            aquaworld.crc2.beginPath();
            aquaworld.crc2.moveTo(_x, _y);
            aquaworld.crc2.bezierCurveTo(_x - 20, _y - 120, _x + 80, _y - 120, _x + 60, _y);
            aquaworld.crc2.closePath();
            aquaworld.crc2.stroke();
            aquaworld.crc2.fill();
        };
        return Hintergrund;
    }());
    aquaworld.Hintergrund = Hintergrund;
})(aquaworld || (aquaworld = {}));
//# sourceMappingURL=Background.js.map