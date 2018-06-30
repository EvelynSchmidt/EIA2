var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aquaworld;
(function (aquaworld) {
    var Bubble = (function (_super) {
        __extends(Bubble, _super);
        function Bubble(_x, _y, _color) {
            _super.call(this, _x, _y, _color);
        }
        Bubble.prototype.move = function () {
            this.y += -15;
            if (this.y < 0) {
                this.y = 1200;
            }
        };
        Bubble.prototype.draw = function () {
            aquaworld.crc2.beginPath();
            aquaworld.crc2.arc(this.x, this.y, this.r, 0, 20 * Math.PI);
            aquaworld.crc2.fillStyle = this.color;
            aquaworld.crc2.closePath();
            aquaworld.crc2.stroke();
            aquaworld.crc2.fill();
        };
        return Bubble;
    }(aquaworld.MovingObjects));
    aquaworld.Bubble = Bubble;
})(aquaworld || (aquaworld = {}));
//# sourceMappingURL=Bubbles.js.map