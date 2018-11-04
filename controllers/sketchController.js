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

        if (this.sketchIndex > this.sketches.length) {
            this.sketchIndex = 0;
        }

        this.currentSketch = this.sketches[this.sketchIndex];
    }

    initialise() {
        let one = new SketchOne();

        this.sketches.push(one);
    }
}