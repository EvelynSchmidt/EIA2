var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    var Starsky = (function (_super) {
        __extends(Starsky, _super);
        function Starsky() {
            _super.call(this);
            this.setRandomPosition();
        }
        Starsky.prototype.setRandomPosition = function () {
            this.x = Math.random() * L11_SeaworldInheritance.canvas.width;
            this.y = Math.random() * L11_SeaworldInheritance.canvas.height;
        };
        Starsky.prototype.draw = function () {
            L11_SeaworldInheritance.crc2.fillStyle = "#FFF";
            L11_SeaworldInheritance.crc2.moveTo(this.x, this.y + 5);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 4, this.y);
            L11_SeaworldInheritance.crc2.lineTo(this.x + 1, this.y - 5);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 6, this.y - 3);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 10, this.y - 8);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 10, this.y - 2);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 16, this.y + 1);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 10, this.y + 1);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 10, this.y + 7);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 6, this.y + 2);
            L11_SeaworldInheritance.crc2.lineTo(this.x, this.y + 5);
            L11_SeaworldInheritance.crc2.closePath();
            L11_SeaworldInheritance.crc2.fill();
        };
        return Starsky;
    }(L11_SeaworldInheritance.MovingObject));
    L11_SeaworldInheritance.Starsky = Starsky;
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {}));
//# sourceMappingURL=Starsky.js.map