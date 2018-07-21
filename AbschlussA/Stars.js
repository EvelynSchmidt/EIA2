var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    var UFO = (function (_super) {
        __extends(UFO, _super);
        function UFO() {
            _super.call(this);
            this.setRandomPosition();
            this.setRandomRadius();
        }
        UFO.prototype.setRandomPosition = function () {
            this.x = Math.random() * L11_SeaworldInheritance.canvas.width - 200;
            this.y = Math.random() * L11_SeaworldInheritance.canvas.height - 200;
        };
        UFO.prototype.setRandomRadius = function () {
            this.radius = Math.random() * 10;
        };
        UFO.prototype.draw = function () {
            var img = new Image();
            img.src = 'UFO.png';
            L11_SeaworldInheritance.crc2.drawImage(img, this.x, this.y, 200, 200);
        };
        UFO.prototype.move = function () {
            this.x += Math.random() * 100;
            this.y += Math.random() * 30;
        };
        return UFO;
    }(L11_SeaworldInheritance.MovingObject));
    L11_SeaworldInheritance.UFO = UFO;
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //namespace zu
//# sourceMappingURL=Stars.js.map