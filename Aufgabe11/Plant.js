var L10_Animation;
(function (L10_Animation) {
    var Pflanze = (function () {
        function Pflanze() {
        }
        // declare method without keyword function
        Pflanze.prototype.move = function () {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        };
        Pflanze.prototype.drawPlant = function () {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.fillStyle = "rgb(34,139,34)";
            L10_Animation.crc2.moveTo(this.x, this.y);
            L10_Animation.crc2.lineTo(this.x + 10, this.y - 100);
            L10_Animation.crc2.lineTo(this.x + 20, this.y + 60);
            L10_Animation.crc2.lineTo(this.x + 20, this.y - 40);
            L10_Animation.crc2.lineTo(this.x + 10, this.y + 30);
            L10_Animation.crc2.lineTo(this.x + 10, this.y - 35);
            L10_Animation.crc2.lineTo(this.x + 10, this.y + 85);
            L10_Animation.crc2.closePath();
            L10_Animation.ctx.stroke();
            L10_Animation.crc2.fill();
        };
        return Pflanze;
    }());
    L10_Animation.Pflanze = Pflanze;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Plant.js.map