class SketchZero {
    constructor() {
        this.hasReset = true;
        this.randomNumber = random(100, 500);
        this.currentShape = 0;
        this.currentColour = 255;
    }

    draw() {
        colorMode(HSB);
        background(0);
        noFill();
        stroke(this.currentColour, 50, 255);
        

        let volume = clockController.getVolume();

        rotate(frameCount * 0.01)
        rotateY(frameCount * 0.02)

        if (volume > 0 && this.hasReset) {
            strokeWeight(2)
            box(250)
            this.hasReset = false;
        } else {
            strokeWeight(1)
            this.drawCurrentShape();
        }
    
        
        if (volume < clockController.threshold && !this.hasReset) {
            this.hasReset = true;
            this.randomNumber = random(50, 125);
            this.currentColour = random(255);
        }

        if (frameCount % 100 == 0) {
            this.currentShape++;
            this.currentShape = floor(random(0, 4))
            
        }
    }

    drawCurrentShape() {
        if (this.currentShape == 0) {
            sphere(this.randomNumber, 4, 4);
        }
        if (this.currentShape == 1) {
            box(random(100, 500), random(100, 500), random(100, 500))
        }
        if (this.currentShape == 2) {
            cone(this.randomNumber * 2, this.randomNumber * 2, 1, 1)
        }
        if (this.currentShape == 3) {
            box(random(100, 500), random(100, 500), random(100, 500))
        }
    }
    

    tick(){
        
    }
}