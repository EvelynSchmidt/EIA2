var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aqua;
(function (aqua) {
    var Food = (function (_super) {
        __extends(Food, _super);
        function Food(_x, _y, _color) {
            _super.call(this, _x, _y, _color);
        }
        Food.prototype.move = function () {
            this.y += 10;
            if (this.y > 1320) {
                this.y = 1320;
            }
        };
        Food.prototype.draw = function () {
            aqua.crc2.beginPath();
            aqua.crc2.moveTo(this.x - 6, this.y);
            aqua.crc2.lineTo(this.x + 12, this.y + 12);
            aqua.crc2.lineTo(this.x + 10, this.y - 3);
            aqua.crc2.lineTo(this.x + 3, this.y + 20);
            aqua.crc2.lineTo(this.x + -3, this.y + 9);
            aqua.crc2.lineTo(this.x - 6, this.y + 3);
            aqua.crc2.closePath();
            aqua.crc2.stroke();
            aqua.crc2.fillStyle = this.color;
            aqua.crc2.fill();
        };
        return Food;
    }(aqua.MovingObjects));
    aqua.Food = Food;
})(aqua || (aqua = {}));
//# sourceMappingURL=Food.js.map