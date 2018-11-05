class SketchThree {
    constructor() {
        this.grid = [];

        let r1 = 0.1;

        this.m = 0.03;
        this.r = 0.001;

        for (var x = 0; x < 15; x++) {
            this.grid[x] = [];
            for (var y = 0; y < 15; y++) {
                let p = new BoxCell(createVector(x * 50, y * 50), 25, r1);
                this.grid[x][y] = p;
            }
            r1 += 0.1
        }
    }

    draw() {
        colorMode(HSB);
        background(0);
        noFill();
        stroke(255);
        strokeWeight(1)

        //rotate(this.r);
        //translate(-width / 4, -height / 2);
        push();
        for (var x = 0; x < 15; x++) {
            for (var y = 0; y < 15; y++) {
                this.grid[x][y].update();
                this.grid[x][y].render(map(x, 0, 25, 255, 100));
            }
        }
        pop();

        this.r += this.m;

        this.m-= 0.01;

        if (this.m < 0) {
            this.m = 0;
        }

    }

    tick() {

        this.m = 0.0006;

        for (var x = 0; x < 15; x++) {
            for (var y = 0; y < 15; y++) {
                this.grid[x][y].m = 0.03;
                this.grid[x][y].size = random(75, 100)
            }
        }
    }
}

class BoxCell {
    constructor(position, size, rotation) {
        this.pos = position;
        this.size = size;
        this.r = rotation;
        this.m = 0;
    }

    update() {
        this.r += this.m;
        this.m -= 0.001;
        if (this.m < 0) {
            this.m = 0;
        }
    }

    render(colour) {
        stroke(colour, 50, 255)
        rotate(frameCount * 0.000075)
        rotateY(frameCount * 0.00001)
        rotateZ(frameCount * 0.000075)
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        rotateX(frameCount * 0.01 + this.r);
        rotateY(frameCount * 0.02 + this.r);
        rotateZ(frameCount * 0.03 + this.r);
        let s1 = sin(frameCount * 0.01 + this.r) * 75;
        let s2 = cos(frameCount * 0.002 + this.r) * 50;
        let s3 = sin(frameCount * 0.006 + this.r) * 90;
        box(s1, s2, s3);
        pop();
    }
}