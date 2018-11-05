class SketchThree {
    constructor() {
        this.cube = new SketchThreeCube(createVector(0, 0), 150);

        this.s = 250;
        this.ts = 250;

        this.colour = 255;
        this.targetColour = 255;
    }

    draw() {
        colorMode(HSB);
        background(0);
        noFill();
        stroke(255);
        strokeWeight(1)

        background(0);

        push()
        rotateZ(frameCount * 0.01)
        rotateY(frameCount * 0.0075)
        //rotateX(frameCount * 0.02)
        this.cube.update(this.s);
        this.cube.render(this.colour);
        pop();

        this.s = lerp(this.s, this.ts, 0.2)
        this.colour = lerp(this.colour, this.targetColour, 0.1);
    }

    tick() {
        this.ts = random(0, 255);
        this.targetColour = random(50, 75)
    }
}

class SketchThreeCube {
    constructor(position, size) {
        this.pos = position;
        this.size = size;
        this.trail = [];
    }

    update(s) {

        this.pos.x = sin(frameCount * 0.01) * width / 4;
        this.pos.y = sin(frameCount * 0.02) * height / 4
        this.pos.z = sin(frameCount * 0.03) * height / 4;
        this.size = s;

        this.trail.push(this.pos.copy())

        if (this.trail.length > 128) {
            this.trail.splice(0, 1);
        }
    }

    render(colour) {
        noFill();

        strokeWeight(1);
        for (var i = 0; i < this.trail.length; i++) {
            push();
            stroke(i, colour, 255);
            rotate(i)
            translate(this.trail[i].x, this.trail[i].y, this.trail[i].z);
            box(this.size * i, 0, 0);
            pop();
        }
    }
}