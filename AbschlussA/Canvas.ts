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
    

        drawBackground();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);


        //Moving Objekte zum ersten mal Erzeugen
        //Fische
        for (let i: number = 0; i < 5; i++) {
            let oneFish: Neptun = new Neptun();
            movingObjects.push(oneFish);
        }

        //Bubbles rechts
        for (let i: number = 0; i < 100; i++) {
            let oneBubble: Bubble = new Bubble();
            movingObjects.push(oneBubble);
        }
        //Bubbles links
        for (let i: number = 0; i < 3; i++) {
            let oneBubble: Saturn = new Saturn();
            movingObjects.push(oneBubble);
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
            
            movingObjects[i].move();
        }

    } //moveObjects zu

    function drawObjects(): void {

        //alle movingObjects malen
        for (let i: number = 0; i < movingObjects.length; i++)
            movingObjects[i].draw();

    } //drawObjects zu
} //namespace zu