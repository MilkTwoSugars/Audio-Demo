class SketchTwo {
    constructor() {
        this.modifier = 1;
        this.targetModifier = 1;

        this.colour = 255;
        this.targetColour = 255;

        this.s = 250;
        this.ts = 250;
    }

    draw() {
        colorMode(HSB);
        background(0);
        noFill();
        stroke(255);
        strokeWeight(2)

        for (var i = 0; i < 8; i++) {
            push()
            rotateX(frameCount * 0.005)
            rotateY(frameCount * 0.01 + (i * this.modifier))
            //rotateZ(frameCount * 0.015)
            stroke(this.colour, 255, 255);
            sphere((this.s * i))
            pop()
        }

        this.modifier = lerp(this.modifier, this.targetModifier, 0.1)
        this.colour = lerp(this.colour, this.targetColour, 0.1)
        this.s = lerp(this.s, this.ts, 0.1)

    }

    tick(){
        this.targetModifier += 1
        this.targetColour = random(255);
        this.ts = random(250, 500)
    }
}