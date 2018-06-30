var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aqua;
(function (aqua) {
    var Fisch = (function (_super) {
        __extends(Fisch, _super);
        function Fisch(_x, _y, _color) {
            _super.call(this, _x, _y, _color);
        }
        Fisch.prototype.move = function () {
            this.x += 3;
            this.y += 0;
        };
        //Funktion lila Fische
        Fisch.prototype.draw = function () {
            aqua.crc2.beginPath();
            aqua.crc2.fillStyle = this.color;
            aqua.crc2.moveTo(this.x, this.y);
            aqua.crc2.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20);
            aqua.crc2.moveTo(this.x, this.y + 20);
            aqua.crc2.lineTo(this.x - 20, this.y + 10);
            aqua.crc2.lineTo(this.x - 25, this.y + 15);
            aqua.crc2.lineTo(this.x - 25, this.y);
            aqua.crc2.lineTo(this.x - 20, this.y + 5);
            aqua.crc2.lineTo(this.x, this.y);
            aqua.crc2.closePath();
            aqua.crc2.stroke();
            aqua.crc2.fill();
            aqua.crc2.closePath();
        };
        return Fisch;
    }(aqua.MovingObjects));
    aqua.Fisch = Fisch;
})(aqua || (aqua = {}));
//# sourceMappingURL=Fisch.js.map