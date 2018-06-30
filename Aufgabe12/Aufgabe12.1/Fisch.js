var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aquaworld;
(function (aquaworld) {
    var Fisch = (function (_super) {
        __extends(Fisch, _super);
        function Fisch(_x, _y, _color) {
            _super.call(this, _x, _y, _color);
        }
        Fisch.prototype.move = function () {
            this.x += 3;
            this.y += 0;
        };
        Fisch.prototype.draw = function () {
            aquaworld.crc2.beginPath();
            aquaworld.crc2.fillStyle = this.color;
            aquaworld.crc2.moveTo(this.x, this.y);
            aquaworld.crc2.bezierCurveTo(this.x + 30, this.y, this.x + 30, this.y + 20, this.x, this.y + 20);
            aquaworld.crc2.moveTo(this.x, this.y + 20);
            aquaworld.crc2.lineTo(this.x - 20, this.y + 10);
            aquaworld.crc2.lineTo(this.x - 25, this.y + 15);
            aquaworld.crc2.lineTo(this.x - 25, this.y);
            aquaworld.crc2.lineTo(this.x - 20, this.y + 5);
            aquaworld.crc2.lineTo(this.x, this.y);
            aquaworld.crc2.closePath();
            aquaworld.crc2.stroke();
            aquaworld.crc2.fill();
            aquaworld.crc2.closePath();
        };
        return Fisch;
    }(aquaworld.MovingObjects));
    aquaworld.Fisch = Fisch;
})(aquaworld || (aquaworld = {}));
//# sourceMappingURL=Fisch.js.map