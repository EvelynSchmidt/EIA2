var Spaceworld;
(function (Spaceworld) {
    window.addEventListener("load", init);
    var imgData;
    Spaceworld.movingObjects = [];
    function init(_event) {
        Spaceworld.canvas = document.getElementsByTagName("canvas")[0];
        Spaceworld.crc2 = Spaceworld.canvas.getContext("2d");
        console.log(Spaceworld.crc2);
        var elem = document.getElementById('canvas');
        var elemLeft = elem.offsetLeft;
        var elemTop = elem.offsetTop;
        var element = [];
        var scoreText;
        var score = 0;
        Spaceworld.drawBackground();
        imgData = Spaceworld.crc2.getImageData(0, 0, Spaceworld.canvas.width, Spaceworld.canvas.height);
        //Objekte erzeugen
        for (var i = 0; i < 4; i++) {
            var flyingstarseins = new Spaceworld.FlyingStars();
            Spaceworld.movingObjects.push(flyingstarseins);
        }
        for (var i = 0; i < 5; i++) {
            var Neptuneins = new Spaceworld.Neptun();
            Spaceworld.movingObjects.push(Neptuneins);
        }
        for (var i = 0; i < 150; i++) {
            var Starskyeins = new Spaceworld.Starsky();
            Spaceworld.movingObjects.push(Starskyeins);
        }
        for (var i = 0; i < 3; i++) {
            var Saturneins = new Spaceworld.Saturn();
            Spaceworld.movingObjects.push(Saturneins);
        }
        for (var i = 0; i < 5; i++) {
            var Marseins = new Spaceworld.Mars();
            Spaceworld.movingObjects.push(Marseins);
        }
        for (var i = 0; i < 1; i++) {
            var UFOeins = new Spaceworld.UFO();
            Spaceworld.movingObjects.push(UFOeins);
        }
        animate();
        //KLick evennt
        document.getElementById('canvas').addEventListener('click', function (evt) {
            Spaceworld.movingObjects.forEach(function (movingObject) {
                var x = evt.clientX - elemLeft;
                var y = evt.clientY - elemTop;
                var distance = Math.sqrt((movingObject.y - y) * (movingObject.y - y) + (movingObject.x - x) * (movingObject.x - x));
                //initieren Distanz
                if (distance < 30) {
                    if (movingObject.constructor.prototype === Spaceworld.UFO.prototype) {
                        score += 50;
                    }
                    else {
                        score--;
                    }
                } // Score
                if (score < 0) {
                    alert("Gameover! Try again. May the force be with you");
                    score = 0;
                }
                var playerScore = score.toString();
                document.getElementById('points').innerHTML = playerScore;
            });
        }, false);
        function animate() {
            window.setTimeout(animate, 75);
            Spaceworld.crc2.putImageData(imgData, 0, 0);
            moveObjects();
            drawObjects();
        }
        function moveObjects() {
            //alle movingObjects bewegen
            for (var i = 0; i < Spaceworld.movingObjects.length; i++) {
                Spaceworld.movingObjects[i].move();
            }
        }
    } //moveObjects zu
    function drawObjects() {
        //alle movingObjects malen
        for (var i = 0; i < Spaceworld.movingObjects.length; i++)
            Spaceworld.movingObjects[i].draw();
    }
})(Spaceworld || (Spaceworld = {}));
//# sourceMappingURL=Canvas.js.map