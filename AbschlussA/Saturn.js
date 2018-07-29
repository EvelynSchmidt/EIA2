var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Spaceworld;
(function (Spaceworld) {
    var Saturn = (function (_super) {
        __extends(Saturn, _super);
        function Saturn() {
            _super.call(this);
            this.setRandomPosition();
        }
        Saturn.prototype.setRandomPosition = function () {
            this.x = Math.random() * Spaceworld.canvas.width - 200;
            this.y = Math.random() * Spaceworld.canvas.height - 100;
        };
        Saturn.prototype.draw = function () {
            var img = new Image();
            img.src = 'Saturn.png';
            Spaceworld.crc2.drawImage(img, this.x, this.y, 200, 200);
        };
        Saturn.prototype.move = function () {
            this.x -= Math.random() + 40;
            this.y -= Math.random() * 10;
            if (this.x > Spaceworld.canvas.width) {
                this.x = 0;
            }
            if (this.x < 0) {
                this.x = Spaceworld.canvas.width;
            }
            if (this.y > Spaceworld.canvas.height) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = Spaceworld.canvas.height;
            }
        };
        return Saturn;
    }(Spaceworld.MovingObject));
    Spaceworld.Saturn = Saturn; //class BubblesLeft zu
})(Spaceworld || (Spaceworld = {})); //namespace zu
//# sourceMappingURL=Saturn.js.map