var L10_Animation;
(function (L10_Animation) {
    var Blase = (function () {
        function Blase() {
        }
        // declare method without keyword function
        Blase.prototype.move = function () {
            this.x += 0;
            this.y += 1;
        };
        Blase.prototype.drawBubbles = function () {
            L10_Animation.ctx.beginPath();
            L10_Animation.crc2.fillStyle = "rgb(0,0,255)";
            L10_Animation.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L10_Animation.crc2.closePath();
            L10_Animation.ctx.stroke();
            L10_Animation.crc2.fill();
        };
        return Blase;
    }());
    L10_Animation.Blase = Blase;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Bubbles.js.map