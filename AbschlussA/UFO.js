var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Spaceworld;
(function (Spaceworld) {
    var UFO = (function (_super) {
        __extends(UFO, _super);
        function UFO() {
            _super.call(this);
            this.setRandomPosition();
        }
        UFO.prototype.setRandomPosition = function () {
            this.x = Math.random() * Spaceworld.canvas.width - 200;
            this.y = Math.random() * Spaceworld.canvas.height - 200;
        };
        UFO.prototype.draw = function () {
            var img = new Image();
            img.src = 'UFO.png';
            Spaceworld.crc2.drawImage(img, this.x, this.y, 200, 200);
        };
        UFO.prototype.move = function () {
            this.x -= Math.random() + 13;
            this.y += Math.random() * 3;
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
        return UFO;
    }(Spaceworld.MovingObject));
    Spaceworld.UFO = UFO;
})(Spaceworld || (Spaceworld = {})); //namespace zu
//# sourceMappingURL=UFO.js.map