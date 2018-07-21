var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    function drawBackground() {
        var numCircles = 9900;
        drawGalaxy();
        drawStar(Math.random() * L11_SeaworldInheritance.canvas.width, Math.random() * L11_SeaworldInheritance.canvas.height);
        function drawGalaxy() {
            var gradient = L11_SeaworldInheritance.crc2.createLinearGradient(50, 0, 10, 300);
            gradient.addColorStop(0, "#7d1fce");
            gradient.addColorStop(1, "#53a8e7");
            L11_SeaworldInheritance.crc2.fillStyle = gradient;
            L11_SeaworldInheritance.crc2.fillRect(0, 0, 1000, 700);
        }
        function drawStar(_x, _y) {
            L11_SeaworldInheritance.crc2.beginPath();
            L11_SeaworldInheritance.crc2.fillStyle = "#FFF";
            L11_SeaworldInheritance.crc2.moveTo(_x, _y + 5);
            L11_SeaworldInheritance.crc2.lineTo(_x - 4, _y);
            L11_SeaworldInheritance.crc2.lineTo(_x + 1, _y - 5);
            L11_SeaworldInheritance.crc2.lineTo(_x - 6, _y - 3);
            L11_SeaworldInheritance.crc2.lineTo(_x - 10, _y - 8);
            L11_SeaworldInheritance.crc2.lineTo(_x - 10, _y - 2);
            L11_SeaworldInheritance.crc2.lineTo(_x - 16, _y + 1);
            L11_SeaworldInheritance.crc2.lineTo(_x - 10, _y + 1);
            L11_SeaworldInheritance.crc2.lineTo(_x - 10, _y + 7);
            L11_SeaworldInheritance.crc2.lineTo(_x - 6, _y + 2);
            L11_SeaworldInheritance.crc2.lineTo(_x, _y + 5);
            L11_SeaworldInheritance.crc2.closePath();
            L11_SeaworldInheritance.crc2.fill();
        }
    }
    L11_SeaworldInheritance.drawBackground = drawBackground;
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {}));
//namespace 
//# sourceMappingURL=Background.js.map