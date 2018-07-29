namespace Spaceworld {

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
        var scoreText: number;

        var score: number = 0;


        drawBackground();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);



        //Objekte erzeugen

        for (let i: number = 0; i < 4; i++) {
            let flyingstarseins: FlyingStars = new FlyingStars();
            movingObjects.push(flyingstarseins);
        }
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
        animate();

//KLick evennt
        document.getElementById('canvas').addEventListener('click', function(evt) {

            movingObjects.forEach(function(movingObject: MovingObject) {
                var x = evt.clientX - elemLeft;
                var y = evt.clientY - elemTop;
                let distance: number = Math.sqrt((movingObject.y - y) * (movingObject.y - y) + (movingObject.x - x) * (movingObject.x - x));
//initieren Distanz
                if (distance < 30) {
                    if (movingObject.constructor.prototype === UFO.prototype) {
                        score += 50
                    }
                    else { score-- }

                }// Score
                if (score < 0) { alert("Gameover! Try again. May the force be with you"); score = 0; }
                let playerScore: string = score.toString();
                document.getElementById('points').innerHTML = playerScore;

            });


        }, false);


        function animate(): void {
            window.setTimeout(animate, 75);
            crc2.putImageData(imgData, 0, 0);

            moveObjects();
            drawObjects();

        } 

        function moveObjects(): void {

            //alle movingObjects bewegen
            for (let i: number = 0; i < movingObjects.length; i++) {

                movingObjects[i].move();
            }

        } 


    } //moveObjects zu
    function drawObjects(): void {

        //alle movingObjects malen
        for (let i: number = 0; i < movingObjects.length; i++)
            movingObjects[i].draw();




    } 
}
