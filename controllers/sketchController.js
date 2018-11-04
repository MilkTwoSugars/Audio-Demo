class SketchController {
    constructor() {
        this.sketches = [];
        this.sketchIndex = 0;

        this.initialise();

        this.currentSketch = this.sketches[this.sketchIndex];
    }

    draw() {
        this.currentSketch.draw();
    }

    tick() {
        this.currentSketch.tick();
    }

    changeSketch() {
        this.sketchIndex++;

        console.log(this.sketchIndex);

        if (this.sketchIndex > this.sketches.length - 1) {
            this.sketchIndex = 0;
        }

        this.currentSketch = this.sketches[this.sketchIndex];
    }

    initialise() {
        this.sketches[0] = new SketchOne();
        this.sketches[1] = new SketchTwo();
    }
}