var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    var FlyingStars = (function (_super) {
        __extends(FlyingStars, _super);
        function FlyingStars() {
            _super.call(this);
            this.setRandomPosition();
            this.setRandomRadius();
        }
        FlyingStars.prototype.setRandomPosition = function () {
            this.x = Math.random() * L11_SeaworldInheritance.canvas.width - 200;
            this.y = Math.random() * L11_SeaworldInheritance.canvas.height - 100;
        };
        FlyingStars.prototype.setRandomRadius = function () {
            this.radius = Math.random() * 10;
        };
        FlyingStars.prototype.draw = function () {
            L11_SeaworldInheritance.crc2.beginPath();
            L11_SeaworldInheritance.crc2.fillStyle = "#FFFF00";
            L11_SeaworldInheritance.crc2.lineTo(this.x - 8, this.y);
            L11_SeaworldInheritance.crc2.lineTo(this.x + 2, this.y - 10);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 12, this.y - 6);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 20, this.y - 16);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 20, this.y - 4);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 32, this.y + 2);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 20, this.y + 2);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 20, this.y + 14);
            L11_SeaworldInheritance.crc2.lineTo(this.x - 12, this.y + 4);
            L11_SeaworldInheritance.crc2.lineTo(this.x, this.y + 10);
            L11_SeaworldInheritance.crc2.closePath();
            L11_SeaworldInheritance.crc2.fill();
        };
        FlyingStars.prototype.move = function () {
            this.x += 90;
            this.y += 3;
            if (this.x > L11_SeaworldInheritance.canvas.width) {
                this.x = 0;
            }
            if (this.x < 0) {
                this.x = L11_SeaworldInheritance.canvas.width;
            }
            if (this.y > L11_SeaworldInheritance.canvas.height) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = L11_SeaworldInheritance.canvas.height;
            }
        };
        return FlyingStars;
    }(L11_SeaworldInheritance.MovingObject));
    L11_SeaworldInheritance.FlyingStars = FlyingStars;
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {}));
//# sourceMappingURL=FlyingStars.js.map