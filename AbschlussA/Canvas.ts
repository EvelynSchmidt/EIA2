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
        var scoreText: number;

        var score: number = 3;


        drawBackground();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);



        //Moving Objekte zum ersten mal Erzeugen

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


        document.getElementById('canvas').addEventListener('click', function(evt) {
            var x = evt.clientX - elemLeft;
            var y = evt.clientY - elemTop;

            movingObjects.forEach(function(movingObjects) {
                let distance: number = Math.sqrt(movingObjects.y - y) * (movingObjects.y - y) + (movingObjects.x - x) * (movingObjects.x - x);


                if (distance > 600) {


                  console.log(movingObjects.constructor.name);
                 }
                let playerScore: string = score.toString();
                document.getElementById('points').innerHTML = playerScore;


            });

        }, false);

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

     
        } //moveObjects zu
        function drawObjects(): void {

            //alle movingObjects malen
            for (let i: number = 0; i < movingObjects.length; i++)
                movingObjects[i].draw();

        }
     


        } //drawObjects zu
    
