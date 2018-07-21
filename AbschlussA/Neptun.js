var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    var Neptun = (function (_super) {
        __extends(Neptun, _super);
        function Neptun() {
            _super.call(this);
            this.setRandomPosition();
            this.setRandomRadius();
        }
        Neptun.prototype.setRandomPosition = function () {
            this.x = Math.random() * L11_SeaworldInheritance.canvas.width - 200;
            this.y = Math.random() * L11_SeaworldInheritance.canvas.height - 100;
        };
        Neptun.prototype.setRandomRadius = function () {
            this.radius = Math.random() * 10;
        };
        Neptun.prototype.draw = function () {
            var img = new Image();
            img.src = 'Neptun.png';
            L11_SeaworldInheritance.crc2.drawImage(img, this.x, this.y, 200, 200);
        };
        Neptun.prototype.move = function () {
            this.x += Math.random() * 100;
            this.y += 0;
        };
        return Neptun;
    }(L11_SeaworldInheritance.MovingObject));
    L11_SeaworldInheritance.Neptun = Neptun;
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {}));
//# sourceMappingURL=Neptun.js.map