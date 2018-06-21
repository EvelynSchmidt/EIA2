namespace L10_Animation {
    
    window.addEventListener( "load", init );
    export let crc2: CanvasRenderingContext2D;
    export let ctx: CanvasRenderingContext2D;
    let Fische: Fisch[] = [];
    let Fische2: Fisch[] = [];
    let bubbles: Blase[] = [];
    let pflanze: Pflanze[] = [];
    let n: number = 30;
    let imgData: ImageData;

    function init( _event: Event ): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName( "canvas" )[0];
        crc2 = canvas.getContext( "2d" );
        ctx = canvas.getContext( "2d" );
        console.log( crc2 );

        //Hintergund mit Klasse erstellen
        let hg: Hintergrund = new Hintergrund;
        hg.paint();
        imgData = crc2.getImageData( 0, 0, canvas.width, canvas.height ); 
        console.log( imgData );


        //Fische

        for ( let i: number = 0; i < n; i++ ) {
            let fish: Fisch = new Fisch();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fish.r = 84;
            fish.g = 255;
            fish.b = 159;

            Fische.push( fish );
        }
        
        for ( let i: number = 0; i < n; i++ ) {
            let fish: Fisch = new Fisch();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fish.r = 106;
            fish.g = 90;
            fish.b = 205;

            Fische2.push( fish );
        }

        //Animation aufrufen

        animate();
    }

    function animate(): void {
        window.setTimeout( animate, 120 );

        //console.log(animate);

        crc2.putImageData( imgData, 0, 0 );

        //crc2.clearRect( 0, 0, crc2.canvas.width, crc2.canvas.height );
        drawObjects();
        moveObjects();
        
    }

    function moveObjects(): void {
        for ( let i: number = 0; i < Fische.length; i++ ) {
           Fische[i].move();
        }
        for ( let i: number = 0; i < Fische2.length; i++ ) {
           Fische2[i].move();
        }

        for ( let i: number = 0; i < bubbles.length; i++ ) {
            bubbles[i].move();
        }

    }

    function drawObjects(): void {
        for ( let i: number = 0; i < Fische.length; i++ )
            Fische[i].drawFish1();

        for ( let i: number = 0; i < Fische2.length; i++ )
            Fische[i].drawFish2();

        for ( let i: number = 0; i < bubbles.length; i++ )
            bubbles[i].drawBubbles();

}
}
