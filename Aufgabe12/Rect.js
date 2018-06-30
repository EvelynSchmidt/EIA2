var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L11_Inheritance;
(function (L11_Inheritance) {
    var Rect = (function (_super) {
        __extends(Rect, _super);
        function Rect(_color) {
            _super.call(this, _color);
        }
        Rect.prototype.setRandomPosition = function () {
            this.x = Math.random() * L11_Inheritance.crc2.canvas.width;
            this.y = Math.random() * L11_Inheritance.crc2.canvas.height;
        };
        Rect.prototype.draw = function () {
            L11_Inheritance.crc2.fillStyle = this.color;
            L11_Inheritance.crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        };
        return Rect;
    }(L11_Inheritance.DavidStar));
    L11_Inheritance.Rect = Rect;
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Rect.js.map