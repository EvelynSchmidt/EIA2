var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    window.addEventListener("load", init);
    var imgData;
    L11_SeaworldInheritance.movingObjects = [];
    L11_SeaworldInheritance.Flugobjekt = [];
    function init(_event) {
        L11_SeaworldInheritance.canvas = document.getElementsByTagName("canvas")[0];
        L11_SeaworldInheritance.crc2 = L11_SeaworldInheritance.canvas.getContext("2d");
        console.log(L11_SeaworldInheritance.crc2);
        var elem = document.getElementById('canvas');
        var elemLeft = elem.offsetLeft;
        var elemTop = elem.offsetTop;
        var element = [];
        var scoreText;
        var score = 3;
        L11_SeaworldInheritance.drawBackground();
        imgData = L11_SeaworldInheritance.crc2.getImageData(0, 0, L11_SeaworldInheritance.canvas.width, L11_SeaworldInheritance.canvas.height);
        //Moving Objekte zum ersten mal Erzeugen
        for (var i = 0; i < 4; i++) {
            var flyingstarseins = new L11_SeaworldInheritance.FlyingStars();
            L11_SeaworldInheritance.movingObjects.push(flyingstarseins);
        }
        for (var i = 0; i < 5; i++) {
            var Neptuneins = new L11_SeaworldInheritance.Neptun();
            L11_SeaworldInheritance.movingObjects.push(Neptuneins);
        }
        for (var i = 0; i < 150; i++) {
            var Starskyeins = new L11_SeaworldInheritance.Starsky();
            L11_SeaworldInheritance.movingObjects.push(Starskyeins);
        }
        for (var i = 0; i < 3; i++) {
            var Saturneins = new L11_SeaworldInheritance.Saturn();
            L11_SeaworldInheritance.movingObjects.push(Saturneins);
        }
        for (var i = 0; i < 5; i++) {
            var Marseins = new L11_SeaworldInheritance.Mars();
            L11_SeaworldInheritance.movingObjects.push(Marseins);
        }
        for (var i = 0; i < 1; i++) {
            var UFOeins = new L11_SeaworldInheritance.UFO();
            L11_SeaworldInheritance.movingObjects.push(UFOeins);
        }
        console.log(L11_SeaworldInheritance.Flugobjekt);
        animate();
        document.getElementById('canvas').addEventListener('click', function (evt) {
            var x = evt.clientX - elemLeft;
            var y = evt.clientY - elemTop;
            L11_SeaworldInheritance.movingObjects.forEach(function (movingObjects) {
                var distance = Math.sqrt(movingObjects.y - y) * (movingObjects.y - y) + (movingObjects.x - x) * (movingObjects.x - x);
                if (distance > 600) {
                    console.log(typeof movingObjects);
                }
                var playerScore = score.toString();
                document.getElementById('points').innerHTML = playerScore;
            });
        }, false);
        function animate() {
            window.setTimeout(animate, 75);
            L11_SeaworldInheritance.crc2.putImageData(imgData, 0, 0);
            moveObjects();
            drawObjects();
        } //animate zu
        function moveObjects() {
            //alle movingObjects bewegen
            for (var i = 0; i < L11_SeaworldInheritance.movingObjects.length; i++) {
                L11_SeaworldInheritance.movingObjects[i].move();
            }
        } //moveObjects zu
        function moveObjectsflugobjekt() {
            //alle movingObjects bewegen
            for (var i = 0; i < L11_SeaworldInheritance.flugobjekt.length; i++) {
                L11_SeaworldInheritance.Flugobjekt[i].move();
            }
        } //moveObjects zu
        function drawObjects() {
            //alle movingObjects malen
            for (var i = 0; i < L11_SeaworldInheritance.movingObjects.length; i++)
                L11_SeaworldInheritance.movingObjects[i].draw();
        }
        function drawObjectsflugobjekt() {
            //alle movingObjects bewegen
            for (var i = 0; i < L11_SeaworldInheritance.flugobjekt.length; i++) {
                L11_SeaworldInheritance.Flugobjekt[i].draw();
            }
        } //drawObjects zu
    }
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {}));
//# sourceMappingURL=Canvas.js.map