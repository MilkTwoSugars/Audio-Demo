class SketchTwo {
    constructor() {
        this.modifier1 = 1;
        this.modifier2 = 1;
        this.modifier3 = 1;
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
        strokeWeight(1)

        for (var i = 0; i < 6; i++) {
            push()
            rotateX(frameCount * 0.005) + (i * this.modifier2)
            rotateY(frameCount * 0.001 + (i * this.modifier1))
            rotateZ(frameCount * 0.0013 + (i * this.modifier3))
            stroke((this.colour / i), 100, 255);
            sphere((this.s * i))
            pop()
        }

        this.modifier1 = lerp(this.modifier1, this.targetModifier, 0.07)
        this.modifier2 = lerp(this.modifier1, this.targetModifier, 0.08)
        this.modifier3 = lerp(this.modifier1, this.targetModifier, 0.09)
        this.colour = lerp(this.colour, this.targetColour, 0.1)
        this.s = lerp(this.s, this.ts, 0.01)

    }

    tick() {
        this.targetModifier += 0.05
        this.targetColour = random(255);
        this.ts = random(150, 500)
    }
}