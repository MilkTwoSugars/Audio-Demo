class SketchFour {
    constructor() {
        this.cube = new SketchFourClass(createVector(0, 0), 500)
    }

    draw() {
        colorMode(HSB);
        background(0);
        noFill();
        stroke(255);
        strokeWeight(1)


        push()
        rotateZ(frameCount * 0.01)
        rotateY(frameCount * 0.015)
        rotateX(frameCount * 0.02)
        this.cube.update();
        this.cube.render();
        pop()

    }


    tick() {
        this.cube.trail.forEach(t => t.targetSize = random(50, 150));
    }
}

class SketchFourClass {
    constructor(position, size) {
        this.pos = position;
        this.size = size;
        this.trail = [];
        this.counter = 0;
        this.up = true;
    }

    update() {

        this.pos.x = sin(frameCount * 0.01) * width / 4;
        this.pos.y = sin(frameCount * 0.02) * height / 4
        this.pos.z = sin(frameCount * 0.03) * height / 4;
        this.size = 100 + cos(frameCount * 0.004) * 50;

        let t = new SketchFourTrail(this.pos.copy(), this.size, this.counter);

        this.trail.push(t)

        this.up ? this.counter+= 10 : this.counter-= 10;

        if (this.trail.length > 255) {
            this.trail.splice(0, 1);
        }

        if (this.counter >= 255) {
            this.up = false
        }

        if (this.counter <= 0) {
            this.up = true;
        }
    }

    render() {
        noFill();

        
        for (var i = 0; i < this.trail.length; i++) {
            this.trail[i].render(i);
        }
    }
}

class SketchFourTrail {
    constructor(position, size, colour) {
        this.pos = position;
        this.size = size;
        this.colour = colour;
        this.targetSize = size;
        this.r = 0;
    }

    render(i) {
        this.r += 1
        this.size = lerp(this.size, this.targetSize, 0.4)

        strokeWeight(i / 255)

        rotate(this.r * 0.0004)
        push();
        //fill(this.colour, 75, 255, 0.6);
        stroke(this.colour, 175, 255);
        translate(this.pos.x, this.pos.y, this.pos.z);
        box(this.size, this.size, this.size);
        pop();

        if (this.r > 10000) {
            this.r = 0;
        }
    }
}