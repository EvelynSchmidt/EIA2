var L10_Animation;
(function (L10_Animation) {
    var BlasenRandom = (function () {
        function BlasenRandom() {
        }
        BlasenRandom.prototype.move = function () {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        };
        //Funktion Luftblasen random im Wasser
        BlasenRandom.prototype.drawBubblesRandom = function () {
            L10_Animation.ctx.beginPath();
            L10_Animation.crc2.fillStyle = "rgb(255,250,240)";
            L10_Animation.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            L10_Animation.crc2.closePath();
            L10_Animation.ctx.stroke();
            L10_Animation.crc2.fill();
        };
        return BlasenRandom;
    }());
    L10_Animation.BlasenRandom = BlasenRandom;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=BubbleRandom.js.map