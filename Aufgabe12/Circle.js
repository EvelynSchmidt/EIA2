var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L11_Inheritance;
(function (L11_Inheritance) {
    var Circle = (function (_super) {
        __extends(Circle, _super);
        function Circle(_color) {
            _super.call(this, _color);
        }
        Circle.prototype.setRandomPosition = function () {
            this.x = Math.random() * L11_Inheritance.crc2.canvas.width;
            this.y = Math.random() * L11_Inheritance.crc2.canvas.height;
        };
        Circle.prototype.draw = function () {
            L11_Inheritance.crc2.fillStyle = this.color;
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.moveTo(this.x, this.y - 30);
            L11_Inheritance.crc2.lineTo(this.x + 30, this.y + 20);
            L11_Inheritance.crc2.lineTo(this.x - 30, this.y + 20);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.fill();
        };
        return Circle;
    }(L11_Inheritance.DavidStar));
    L11_Inheritance.Circle = Circle;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Circle.js.map