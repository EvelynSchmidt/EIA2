namespace Spaceworld {

    export function drawBackground(): void {
        drawGalaxy();

    function drawGalaxy(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(50, 0, 10, 300);
        gradient.addColorStop(0, "#7d1fce");
        gradient.addColorStop(1, "#53a8e7");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 700);
    }
       
}
}

   
