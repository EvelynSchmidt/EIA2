var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    var Saturn = (function (_super) {
        __extends(Saturn, _super);
        function Saturn() {
            _super.call(this);
            this.setRandomPosition();
            this.setRandomRadius();
        }
        Saturn.prototype.setRandomPosition = function () {
            this.x = Math.random() * L11_SeaworldInheritance.canvas.width - 200;
            this.y = Math.random() * L11_SeaworldInheritance.canvas.height - 100;
        };
        Saturn.prototype.setRandomRadius = function () {
            this.radius = Math.random() * 10;
        };
        Saturn.prototype.draw = function () {
            var img = new Image();
            img.src = 'Saturn.png';
            L11_SeaworldInheritance.crc2.drawImage(img, this.x, this.y, 200, 200);
        };
        Saturn.prototype.move = function () {
            this.x -= Math.random() * 50;
            this.y -= Math.random() + 30;
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
        return Saturn;
    }(L11_SeaworldInheritance.MovingObject));
    L11_SeaworldInheritance.Saturn = Saturn; //class BubblesLeft zu
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //namespace zu
//# sourceMappingURL=Saturn.js.map