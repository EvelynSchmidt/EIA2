var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    window.addEventListener("load", init);
    var imgData;
    L11_SeaworldInheritance.movingObjects = [];
    function init(_event) {
        L11_SeaworldInheritance.canvas = document.getElementsByTagName("canvas")[0];
        L11_SeaworldInheritance.crc2 = L11_SeaworldInheritance.canvas.getContext("2d");
        console.log(L11_SeaworldInheritance.crc2);
        L11_SeaworldInheritance.canvas.addEventListener("click", insertFood);
        L11_SeaworldInheritance.drawBackground();
        imgData = L11_SeaworldInheritance.crc2.getImageData(0, 0, L11_SeaworldInheritance.canvas.width, L11_SeaworldInheritance.canvas.height);
        //Moving Objekte zum ersten mal Erzeugen
        //Fische
        for (var i = 0; i < 5; i++) {
            var oneFish = new L11_SeaworldInheritance.Neptun();
            L11_SeaworldInheritance.movingObjects.push(oneFish);
        }
        //Bubbles rechts
        for (var i = 0; i < 150; i++) {
            var oneBubble = new L11_SeaworldInheritance.Bubble();
            L11_SeaworldInheritance.movingObjects.push(oneBubble);
        }
        //Bubbles links
        for (var i = 0; i < 18; i++) {
            var oneBubble = new L11_SeaworldInheritance.BubblesLeft();
            L11_SeaworldInheritance.movingObjects.push(oneBubble);
        }
        for (var i = 0; i < 10; i++) {
            var Marseins = new L11_SeaworldInheritance.Mars();
            L11_SeaworldInheritance.movingObjects.push(Marseins);
        }
        animate();
    } //init zu
    function insertFood(_event) {
        //Abfrage f�r x und y des MouseEvents
        var spawnX = _event.clientX;
        var spawnY = _event.clientY;
        for (var i = 0; i < 4; i++) {
            var food = new L11_SeaworldInheritance.Food(spawnX, spawnY);
            L11_SeaworldInheritance.movingObjects.push(food);
            spawnX += Math.random() * 70;
            spawnX -= Math.random() * 70;
            spawnY += Math.random() * 10;
            // Fish finden, der Flocke fressen soll
            for (var j = 0; j < 8; j++) {
                var fish = L11_SeaworldInheritance.movingObjects[j];
                if (fish.food == null) {
                    break;
                }
            }
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        L11_SeaworldInheritance.crc2.clearRect(0, 0, L11_SeaworldInheritance.crc2.canvas.width, L11_SeaworldInheritance.crc2.canvas.height);
        L11_SeaworldInheritance.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    } //animate zu
    function moveObjects() {
        //alle movingObjects bewegen
        for (var i = 0; i < L11_SeaworldInheritance.movingObjects.length; i++) {
            L11_SeaworldInheritance.movingObjects[i].checkPosition();
            L11_SeaworldInheritance.movingObjects[i].move();
        }
    } //moveObjects zu
    function drawObjects() {
        //alle movingObjects malen
        for (var i = 0; i < L11_SeaworldInheritance.movingObjects.length; i++)
            L11_SeaworldInheritance.movingObjects[i].draw();
    } //drawObjects zu
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //namespace zu
//# sourceMappingURL=Canvas.js.map