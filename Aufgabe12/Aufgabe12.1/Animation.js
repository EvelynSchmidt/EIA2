var aquaworld;
(function (aquaworld) {
    window.addEventListener("load", init);
    var imgData;
    var afisch = 10;
    var bfisch = 30;
    var n = 30;
    var objects = [];
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        aquaworld.crc2 = canvas.getContext("2d");
        console.log(aquaworld.crc2);
        //Hintergund mit Klasse erstellen
        var hg = new aquaworld.Hintergrund;
        hg.paint();
        imgData = aquaworld.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        canvas.addEventListener("click", insertNewObject);
        canvas.addEventListener("touchstart", insertNewObject);
        //Fische
        for (var i = 0; i < afisch; i++) {
            var fish = new aquaworld.Fisch(Math.random() * aquaworld.crc2.canvas.width, Math.random() * aquaworld.crc2.canvas.height, "rgb(43,58,68)");
            objects.push(fish);
        }
        for (var i = 0; i < n - 2; i++) {
            var blubb = new aquaworld.Bubble(Math.random() * (1000 - 700) + 0, Math.random() * 180, "rgba(188,210,238,10)");
            blubb.r = Math.random() * 10;
            objects.push(blubb);
        }
        //Animation aufrufen
        animate();
    }
    function insertNewObject(_event) {
        var cx = _event.pageX;
        var cy = _event.pageY;
        var foodColor = ["rgba(200,150,100)", "rgba(100,50,7)", "rgba(200,134,74)", "rgba(2,50,223)"];
        var flake = new aquaworld.Food(cx, cy, foodColor[Math.floor(Math.random() * 4)]);
        flake.r = Math.random() * 10;
        objects.push(flake);
    }
    function animate() {
        window.setTimeout(animate, 120);
        aquaworld.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function drawObjects() {
        for (var i = 0; i < objects.length; i++)
            objects[i].draw();
    }
    function moveObjects() {
        for (var i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
})(aquaworld || (aquaworld = {}));
//# sourceMappingURL=Animation.js.map