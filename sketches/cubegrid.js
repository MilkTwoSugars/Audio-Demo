class CubeGridSketch {
    constructor(audioController) {
        this.audioController = audioController;

        this.cubes = [];

        this.res = 100;

        this.cols = width / this.res;
        this.rows = height / this.res;

        for (var x = 0; x < this.cols; x++) {
            this.cubes[x] = new Array();
            for (var y = 0; y < this.rows; y++) {
                let c = new CGCube(createVector(x * this.res, y * this.res), this.res);
                this.cubes[x][y] = c;
            }
        }
        console.log(this.cubes.length);
    }

    draw() {
        //translate(width / 2, height / 2)
        for (var x = 0; x < this.cols; x++) {
            for (var y = 0; y < this.rows; y++) {
                let event = this.audioController.trigger();
                this.cubes[x][y].update(event);
                this.cubes[x][y].render();
            }
        }
    }
}

class CGCube {
    constructor(position, cubeSize) {
        this.pos = position;
        this.size = cubeSize;
        this.targetSize = cubeSize;
        this.res = cubeSize;
        this.rotation = 0;
    }

    update(event) {
        this.targetSize = event.value * this.res;
        this.rotation += event.value;
        this.size = lerp(this.size, this.targetSize, 0.05);
    }

    render() {
        push();
        translate(this.pos.x, this.pos.y);
        fill(255);
        noStroke();
        rotate((frameCount + this.pos.x) * 0.1);
        normalMaterial();
        box(this.size);      
        pop();
    }
}