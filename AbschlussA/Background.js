var Spaceworld;
(function (Spaceworld) {
    function drawBackground() {
        drawGalaxy();
        function drawGalaxy() {
            var gradient = Spaceworld.crc2.createLinearGradient(50, 0, 10, 300);
            gradient.addColorStop(0, "#7d1fce");
            gradient.addColorStop(1, "#53a8e7");
            Spaceworld.crc2.fillStyle = gradient;
            Spaceworld.crc2.fillRect(0, 0, 1000, 700);
        }
    }
    Spaceworld.drawBackground = drawBackground;
})(Spaceworld || (Spaceworld = {}));
//# sourceMappingURL=Background.js.map