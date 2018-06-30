var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aqua;
(function (aqua) {
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
            aqua.crc2.beginPath();
            aqua.crc2.arc(this.x, this.y, this.r, 0, 20 * Math.PI);
            aqua.crc2.fillStyle = this.color;
            aqua.crc2.closePath();
            aqua.crc2.stroke();
            aqua.crc2.fill();
        };
        return Bubble;
    }(aqua.MovingObjects));
    aqua.Bubble = Bubble;
})(aqua || (aqua = {}));
//# sourceMappingURL=Bubbles.js.map