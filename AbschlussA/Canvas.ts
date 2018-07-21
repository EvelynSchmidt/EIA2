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
        canvas.addEventListener("click", insertFood);

        drawBackground();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);


        //Moving Objekte zum ersten mal Erzeugen
        //Fische
        for (let i: number = 0; i < 5; i++) {
            let oneFish: Neptun = new Neptun();
            movingObjects.push(oneFish);
        }

        //Bubbles rechts
        for (let i: number = 0; i < 150; i++) {
            let oneBubble: Bubble = new Bubble();
            movingObjects.push(oneBubble);
        }
        //Bubbles links
        for (let i: number = 0; i < 18; i++) {
            let oneBubble: BubblesLeft = new BubblesLeft();
            movingObjects.push(oneBubble);
        }

         for (let i: number = 0; i < 10; i++) {
            let Marseins: Mars = new Mars();
            movingObjects.push(Marseins);
        }

        animate();

    } //init zu
    function insertFood(_event: MouseEvent): void {
        //Abfrage f�r x und y des MouseEvents
        let spawnX: number = _event.clientX;
        let spawnY: number = _event.clientY;

        for (let i: number = 0; i < 4; i++) {
            let food: Food = new Food(spawnX, spawnY);
            movingObjects.push(food);
            spawnX += Math.random() * 70;
            spawnX -= Math.random() * 70;
            spawnY += Math.random() * 10;

            // Fish finden, der Flocke fressen soll
            for (let j: number = 0; j < 8; j++) {
                let fish: PlanetB = <PlanetB>movingObjects[j];
                if (fish.food == null) {
                    
                    break;
                }
            }
            /*
            for (let j: number = 0; j < moveObjects.length; j++) {
                if (movingObjects[j] instanceof Fish)
                    console.log(movingObjects[j]);
            }
            */
        }
    }

    function animate(): void {
        window.setTimeout(animate, 10);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        moveObjects();
        drawObjects();
    } //animate zu

    function moveObjects(): void {

        //alle movingObjects bewegen
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].checkPosition();
            movingObjects[i].move();
        }

    } //moveObjects zu

    function drawObjects(): void {

        //alle movingObjects malen
        for (let i: number = 0; i < movingObjects.length; i++)
            movingObjects[i].draw();

    } //drawObjects zu
} //namespace zu