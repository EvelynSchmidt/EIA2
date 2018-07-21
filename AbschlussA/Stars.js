var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    var Food = (function (_super) {
        __extends(Food, _super);
        function Food(spawnX, spawnY) {
            _super.call(this);
            this.x = spawnX;
            this.y = spawnY;
            this.size = Math.random() * (5 - 4) + 4; // Math.random() * (max - min) + min
            this.speed = this.size;
            this.setRandomColor();
            this.stop = Math.random() * (550 - 680) + 680;
        }
        Food.prototype.setRandomColor = function () {
            var c = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#A19F30";
                    break;
                case 1:
                    this.color = "#A15A30";
                    break;
                case 2:
                    this.color = "#49854D";
                    break;
            }
        };
        Food.prototype.draw = function () {
            L11_SeaworldInheritance.crc2.fillStyle = this.color;
            L11_SeaworldInheritance.crc2.lineWidth = 0.2;
            L11_SeaworldInheritance.crc2.beginPath();
            L11_SeaworldInheritance.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            L11_SeaworldInheritance.crc2.closePath();
            L11_SeaworldInheritance.crc2.stroke();
            L11_SeaworldInheritance.crc2.fill();
        };
        Food.prototype.move = function () {
            if (this.y >= this.stop) {
                this.y = this.stop;
            }
            else {
                this.y += this.speed * 0.4;
            }
        };
        return Food;
    }(L11_SeaworldInheritance.MovingObject));
    L11_SeaworldInheritance.Food = Food; //class Food zu
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //namespace zu
//# sourceMappingURL=Stars.js.map