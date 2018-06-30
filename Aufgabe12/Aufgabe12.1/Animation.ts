namespace aquaworld {
    
    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let afisch: number = 10;
    let bfisch: number = 30;
    let n: number = 30;
    let objects: MovingObjects[] = [];



    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        console.log( crc2 );

        //Hintergund mit Klasse erstellen
        let hg: Hintergrund = new Hintergrund;
        hg.paint();
        imgData = crc2.getImageData( 0, 0, canvas.width, canvas.height ); 
        console.log(imgData);
        
        canvas.addEventListener("click", insertNewObject);
        canvas.addEventListener("touchstart", insertNewObject);

        //Fische

        for ( let i: number = 0; i < afisch; i++ ) {
        let fish: Fisch = new Fisch(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height, "rgb(43,58,68)");            
            

            objects.push( fish );
        }
        
        for (let i: number = 0; i < n - 2; i++) {
            let blubb: Bubble = new Bubble(Math.random() * (1000 - 700) + 0, Math.random() * 180, "rgba(188,210,238,10)");
            blubb.r = Math.random() * 10;
            objects.push(blubb);
        }
         //Animation aufrufen

        animate();
    }
function insertNewObject(_event: MouseEvent): void {
        let cx: number = _event.pageX
        let cy: number = _event.pageY;
        let foodColor: string[] = ["rgba(200,150,100)", "rgba(100,50,7)", "rgba(200,134,74)", "rgba(2,50,223)"]
        let flake: Food = new Food(cx, cy, foodColor[Math.floor(Math.random()* 4)]);
        flake.r = Math.random() * 10;
        objects.push(flake);
    }


    function animate(): void {
        window.setTimeout( animate, 120 );


        crc2.putImageData( imgData, 0, 0 );

        moveObjects();
        drawObjects();

        
    }
        function drawObjects(): void {
        for ( let i: number = 0; i < objects.length; i++ )
            objects[i].draw();

}

    function moveObjects(): void {
        for ( let i: number = 0; i < objects.length; i++ ) {
           objects[i].move();
        }
 


}}