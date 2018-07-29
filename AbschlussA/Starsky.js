var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Spaceworld;
(function (Spaceworld) {
    var Starsky = (function (_super) {
        __extends(Starsky, _super);
        function Starsky() {
            _super.call(this);
            this.setRandomPosition();
        }
        Starsky.prototype.setRandomPosition = function () {
            this.x = Math.random() * Spaceworld.canvas.width;
            this.y = Math.random() * Spaceworld.canvas.height;
        };
        Starsky.prototype.draw = function () {
            Spaceworld.crc2.fillStyle = "#FFF";
            Spaceworld.crc2.moveTo(this.x, this.y + 5);
            Spaceworld.crc2.lineTo(this.x - 4, this.y);
            Spaceworld.crc2.lineTo(this.x + 1, this.y - 5);
            Spaceworld.crc2.lineTo(this.x - 6, this.y - 3);
            Spaceworld.crc2.lineTo(this.x - 10, this.y - 8);
            Spaceworld.crc2.lineTo(this.x - 10, this.y - 2);
            Spaceworld.crc2.lineTo(this.x - 16, this.y + 1);
            Spaceworld.crc2.lineTo(this.x - 10, this.y + 1);
            Spaceworld.crc2.lineTo(this.x - 10, this.y + 7);
            Spaceworld.crc2.lineTo(this.x - 6, this.y + 2);
            Spaceworld.crc2.lineTo(this.x, this.y + 5);
            Spaceworld.crc2.closePath();
            Spaceworld.crc2.fill();
        };
        return Starsky;
    }(Spaceworld.MovingObject));
    Spaceworld.Starsky = Starsky;
})(Spaceworld || (Spaceworld = {}));
//# sourceMappingURL=Starsky.js.map