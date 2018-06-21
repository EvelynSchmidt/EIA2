/*

Name:       Evelyn Schmidt
Matrikel:   257676
Datum:      17.06.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aquarium;
(function (Aquarium) {
    window.addEventListener("load", init);
    var crc2;
    var ctx;
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        ctx = canvas.getContext("2d");
        console.log(crc2);
        //Hintergrund
        drawBackground(150);
        //Felsen
        drawStone(300, 490);
        drawStone(30, 490);
        //Luftblasen random im Wasser
        for (var i = 0; i < 10; i++) {
            var x = Math.random() * crc2.canvas.width;
            var y = Math.random() * crc2.canvas.height;
            drawBubbles(x, y, 6);
        }
        //Fische blau
        for (var i = 0; i < 7; i++) {
            var x = Math.random() * crc2.canvas.width;
            var y = Math.random() * crc2.canvas.height;
            drawFish1(x, y);
        }
        //Fische schwarz
        for (var i = 0; i < 3; i++) {
            var x = Math.random() * crc2.canvas.width;
            var y = Math.random() * crc2.canvas.height;
            drawFish2(x, y);
        }
        //Pflanze 1
        drawPlant(110, 640);
        //Pflanze 2
        drawPlant(290, 640);
        //Funktion Luftblasen random im Wasser
        function drawBubbles(_x, _y, _radius) {
            ctx.beginPath();
            crc2.fillStyle = "rgb(0,0,255)";
            ctx.arc(_x, _y, _radius, 0, 2 * Math.PI);
            crc2.closePath();
            ctx.stroke();
            crc2.fill();
        }
        //Funktion Hintergrund
        function drawBackground(_sandHeight) {
            crc2.fillStyle = " rgb(152,245,255)";
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.fillStyle = "rgb(222,184,135)";
            crc2.fillRect(0, crc2.canvas.height - _sandHeight, crc2.canvas.width, crc2.canvas.height);
        }
        //Funktion lila Fische
        function drawFish1(_x, _y) {
            ctx.beginPath();
            crc2.fillStyle = "rgb(106,90,205)";
            ctx.moveTo(_x, _y);
            ctx.bezierCurveTo(_x + 30, _y, _x + 30, _y + 20, _x, _y + 20);
            crc2.moveTo(_x, _y + 20);
            crc2.lineTo(_x - 20, _y + 10);
            crc2.lineTo(_x - 25, _y + 15);
            crc2.lineTo(_x - 25, _y);
            crc2.lineTo(_x - 20, _y + 5);
            crc2.lineTo(_x, _y);
            crc2.closePath();
            ctx.stroke();
            ctx.fill();
            crc2.closePath();
        }
        //Funktion grün Fische
        function drawFish2(_x, _y) {
            ctx.beginPath();
            crc2.fillStyle = "rgb(84,255,159)";
            ctx.moveTo(_x, _y);
            ctx.bezierCurveTo(_x + 30, _y, _x + 30, _y + 20, _x, _y + 20);
            crc2.moveTo(_x, _y + 20);
            crc2.lineTo(_x - 20, _y + 10);
            crc2.lineTo(_x - 25, _y + 15);
            crc2.lineTo(_x - 25, _y + 0);
            crc2.lineTo(_x - 20, _y + 5);
            crc2.lineTo(_x, _y);
            crc2.closePath();
            ctx.stroke();
            ctx.fill();
            crc2.closePath();
        }
        //Funktion Pflanze 
        function drawPlant(_x, _y) {
            crc2.beginPath();
            crc2.fillStyle = "rgb(34,139,34)";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 10, _y - 100);
            crc2.lineTo(_x + 20, _y + 60);
            crc2.lineTo(_x + 20, _y - 40);
            crc2.lineTo(_x + 10, _y + 30);
            crc2.lineTo(_x + 10, _y - 35);
            crc2.lineTo(_x + 10, _y + 85);
            crc2.closePath();
            ctx.stroke();
            crc2.fill();
        }
        function drawStone(_x, _y) {
            crc2.fillStyle = "#505050";
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.bezierCurveTo(_x - 20, _y - 120, _x + 80, _y - 120, _x + 60, _y);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
        drawStarfish(100, 530);
        function drawStarfish(_x, _y) {
            crc2.beginPath();
            crc2.fillStyle = "#FF33CC";
            crc2.moveTo(_x, _y + 25);
            crc2.lineTo(_x - 20, _y);
            crc2.lineTo(_x + 5, _y - 25);
            crc2.lineTo(_x - 30, _y - 18);
            crc2.lineTo(_x - 50, _y - 40);
            crc2.lineTo(_x - 50, _y - 12);
            crc2.lineTo(_x - 80, _y + 5);
            crc2.lineTo(_x - 50, _y + 8);
            crc2.lineTo(_x - 50, _y + 35);
            crc2.lineTo(_x - 30, _y + 12);
            crc2.lineTo(_x, _y + 25);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=Canvas.js.map