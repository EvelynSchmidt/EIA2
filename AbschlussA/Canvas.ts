namespace L11_SeaworldInheritance {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    export let movingObjects: MovingObject[] = [];

    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        var elem = document.getElementById('canvas');
        var elemLeft = elem.offsetLeft;
        var elemTop = elem.offsetTop;
        let element: number[] = [];


        drawBackground();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);



        document.getElementById('canvas').addEventListener('click', function(evt) {
            var x = evt.clientX - elemLeft
            var y = evt.clientY - elemTop;
            movingObjects.forEach(function(movingObjects) {
        if (y == movingObjects.y   && x == movingObjects.x ) {
            alert('clicked an element');
        }
    });

}, false);
      
        
        
        //Moving Objekte zum ersten mal Erzeugen

        for (let i: number = 0; i < 5; i++) {
            let Neptuneins: Neptun = new Neptun();
            movingObjects.push(Neptuneins);
        }
        for (let i: number = 0; i < 150; i++) {
            let Starskyeins: Starsky = new Starsky();
            movingObjects.push(Starskyeins);
        }

        for (let i: number = 0; i < 3; i++) {
            let Saturneins: Saturn = new Saturn();
            movingObjects.push(Saturneins);
        }

        for (let i: number = 0; i < 5; i++) {
            let Marseins: Mars = new Mars();
            movingObjects.push(Marseins);
        }

        for (let i: number = 0; i < 1; i++) {
            let UFOeins: UFO = new UFO();
            movingObjects.push(UFOeins);
        }
        for (let i: number = 0; i < 4; i++) {
            let flyingstarseins: FlyingStars = new FlyingStars();
            movingObjects.push(flyingstarseins);
        }
        animate();

    }
    function animate(): void {
        window.setTimeout(animate, 75);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
    } //animate zu

    function moveObjects(): void {

        //alle movingObjects bewegen
        for (let i: number = 0; i < movingObjects.length; i++) {

            movingObjects[i].move();
        }

    } //moveObjects zu

    function drawObjects(): void {

        //alle movingObjects malen
        for (let i: number = 0; i < movingObjects.length; i++)
            movingObjects[i].draw();

    }


}//drawObjects zu
