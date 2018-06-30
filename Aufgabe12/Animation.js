var L11_Inheritance;
(function (L11_Inheritance) {
    window.addEventListener("load", init);
    var stars = [];
    var n = 30;
    function init(_event) {
        var canvas = document.getElementsByTagName("canvas")[0];
        L11_Inheritance.crc2 = canvas.getContext("2d");
        console.log(L11_Inheritance.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (var i = 0; i < n; i++) {
            var star = new L11_Inheritance.DavidStar("#c00000");
            stars.push(star);
            var rect = new L11_Inheritance.Rect("#fff900");
            stars.push(rect);
            var circle = new L11_Inheritance.Circle("#fff000");
            stars.push(circle);
        }
        animate();
    }
    function insertNewObject(_event) {
        // let star: DavidStar = new DavidStar("#ffff00");
        //stars.push(star);
        var _x = _event.pageX;
        var _y = _event.pageY;
        var zufall = Math.random() * 13;
        if (zufall < 4) {
            var star = new L11_Inheritance.DavidStar("#8000ff");
            star.x = _x;
            star.y = _y;
            stars.push(star);
        }
        else if (zufall < 8) {
            var rect = new L11_Inheritance.Rect("#a65dff");
            rect.x = _x;
            rect.y = _y;
            stars.push(rect);
        }
        else {
            var circle = new L11_Inheritance.Circle("#99abff");
            circle.x = _x;
            circle.y = _y;
            stars.push(circle);
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        L11_Inheritance.crc2.clearRect(0, 0, L11_Inheritance.crc2.canvas.width, L11_Inheritance.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (var i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (var i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(L11_Inheritance || (L11_Inheritance = {}));
//# sourceMappingURL=Animation.js.map