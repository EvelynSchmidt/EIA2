var L10_Animation;
(function (L10_Animation) {
    window.addEventListener("load", init);
    var Fische = [];
    var Fische2 = [];
    var bubbles = [];
    var pflanze = [];
    var n = 30;
    var imgData;
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        L10_Animation.crc2 = canvas.getContext("2d");
        L10_Animation.ctx = canvas.getContext("2d");
        console.log(L10_Animation.crc2);
        //Hintergund mit Klasse erstellen
        var hg = new L10_Animation.Hintergrund;
        hg.paint();
        imgData = L10_Animation.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        //Fische
        for (var i = 0; i < n; i++) {
            var fish = new L10_Animation.Fisch();
            fish.x = Math.random() * L10_Animation.crc2.canvas.width;
            fish.y = Math.random() * L10_Animation.crc2.canvas.height;
            fish.r = 84;
            fish.g = 255;
            fish.b = 159;
            Fische.push(fish);
        }
        for (var i = 0; i < n; i++) {
            var fish = new L10_Animation.Fisch();
            fish.x = Math.random() * L10_Animation.crc2.canvas.width;
            fish.y = Math.random() * L10_Animation.crc2.canvas.height;
            fish.r = 106;
            fish.g = 90;
            fish.b = 205;
            Fische2.push(fish);
        }
        //Animation aufrufen
        animate();
    }
    function animate() {
        window.setTimeout(animate, 10);
        //console.log(animate);
        L10_Animation.crc2.putImageData(imgData, 0, 0);
        //crc2.clearRect( 0, 0, crc2.canvas.width, crc2.canvas.height );
        drawObjects();
        moveObjects();
    }
    function moveObjects() {
        for (var i = 0; i < Fische.length; i++) {
            Fische[i].move();
        }
        for (var i = 0; i < Fische2.length; i++) {
            Fische2[i].move();
        }
        for (var i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }
    function drawObjects() {
        for (var i = 0; i < Fische.length; i++)
            Fische[i].drawFish1();
        for (var i = 0; i < Fische2.length; i++)
            Fische[i].drawFish2();
        for (var i = 0; i < bubbles.length; i++)
            bubbles[i].drawBubbles();
    }
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Animation.js.map