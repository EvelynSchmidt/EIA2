var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    var BubblesLeft = (function (_super) {
        __extends(BubblesLeft, _super);
        function BubblesLeft() {
            _super.call(this);
            this.setRandomRadius();
        }
        BubblesLeft.prototype.setRandomPosition = function () {
            this.x = Math.random() * (100 - 300) + 300; // Math.random() * (max - min) + min
            this.y = Math.random() * 325;
        };
        BubblesLeft.prototype.setNewRandomSpawnPoint = function () {
            this.x = Math.random() * (100 - 300) + 300;
            this.y = Math.random() * 100 + 325;
        };
        BubblesLeft.prototype.setRandomRadius = function () {
            this.radius = (Math.random() + 0.1) * 6;
        };
        return BubblesLeft;
    }(L11_SeaworldInheritance.Bubble));
    L11_SeaworldInheritance.BubblesLeft = BubblesLeft; //class BubblesLeft zu
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //namespace zu
//# sourceMappingURL=PlanetC.js.map