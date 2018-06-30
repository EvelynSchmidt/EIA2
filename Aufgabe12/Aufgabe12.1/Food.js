var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aquaworld;
(function (aquaworld) {
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
            aquaworld.crc2.beginPath();
            aquaworld.crc2.moveTo(this.x - 2, this.y);
            aquaworld.crc2.lineTo(this.x + 1, this.y + 5);
            aquaworld.crc2.lineTo(this.x + 4, this.y - 3);
            aquaworld.crc2.lineTo(this.x + 7, this.y + 1);
            aquaworld.crc2.lineTo(this.x + -1, this.y + 3);
            aquaworld.crc2.lineTo(this.x - 1, this.y + 2);
            aquaworld.crc2.closePath();
            aquaworld.crc2.stroke();
            aquaworld.crc2.fillStyle = this.color;
            aquaworld.crc2.fill();
        };
        return Food;
    }(aquaworld.MovingObjects));
    aquaworld.Food = Food;
})(aquaworld || (aquaworld = {}));
//# sourceMappingURL=Food.js.map