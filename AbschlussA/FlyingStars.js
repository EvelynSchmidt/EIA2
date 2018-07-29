var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Spaceworld;
(function (Spaceworld) {
    var FlyingStars = (function (_super) {
        __extends(FlyingStars, _super);
        function FlyingStars() {
            _super.call(this);
            this.setRandomPosition();
        }
        FlyingStars.prototype.setRandomPosition = function () {
            this.x = Math.random() * Spaceworld.canvas.width - 200;
            this.y = Math.random() * Spaceworld.canvas.height - 100;
        };
        FlyingStars.prototype.draw = function () {
            Spaceworld.crc2.beginPath();
            Spaceworld.crc2.fillStyle = "#FFFF00";
            Spaceworld.crc2.lineTo(this.x - 8, this.y);
            Spaceworld.crc2.lineTo(this.x + 2, this.y - 10);
            Spaceworld.crc2.lineTo(this.x - 12, this.y - 6);
            Spaceworld.crc2.lineTo(this.x - 20, this.y - 16);
            Spaceworld.crc2.lineTo(this.x - 20, this.y - 4);
            Spaceworld.crc2.lineTo(this.x - 32, this.y + 2);
            Spaceworld.crc2.lineTo(this.x - 20, this.y + 2);
            Spaceworld.crc2.lineTo(this.x - 20, this.y + 14);
            Spaceworld.crc2.lineTo(this.x - 12, this.y + 4);
            Spaceworld.crc2.lineTo(this.x, this.y + 10);
            Spaceworld.crc2.closePath();
            Spaceworld.crc2.fill();
        };
        FlyingStars.prototype.move = function () {
            this.x += 90;
            this.y += 3;
            if (this.x > Spaceworld.canvas.width) {
                this.x = 0;
            }
            if (this.x < 0) {
                this.x = Spaceworld.canvas.width;
            }
            if (this.y > Spaceworld.canvas.height) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = Spaceworld.canvas.height;
            }
        };
        return FlyingStars;
    }(Spaceworld.MovingObject));
    Spaceworld.FlyingStars = FlyingStars;
})(Spaceworld || (Spaceworld = {}));
//# sourceMappingURL=FlyingStars.js.map