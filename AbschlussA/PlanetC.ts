namespace L11_SeaworldInheritance {
    export class BubblesLeft extends Bubble {

        constructor() {
            super();
            this.setRandomRadius();
        }
        
        setRandomPosition(): void {
            this.x = Math.random() * (100 - 300) + 300; // Math.random() * (max - min) + min
            this.y = Math.random() * 325;
        }
        
        setNewRandomSpawnPoint(): void {
             this.x = Math.random() * (100 - 300) + 300;
             this.y = Math.random() * 100 + 325;
        }
            
        setRandomRadius(): void {
            this.radius = (Math.random() + 0.1) * 6;   
            
        }
        

    } //class BubblesLeft zu
} //namespace zu