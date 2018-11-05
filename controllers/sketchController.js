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

    tick(volume) {
        this.currentSketch.tick(volume);
    }

    changeSketch() {
        this.sketchIndex++;

        console.log(this.sketchIndex);

        if (this.sketchIndex >= this.sketches.length) {
            this.sketchIndex = 0;
        }

        this.currentSketch = this.sketches[this.sketchIndex];
    }

    changeSketchTo(index) {
        this.sketchIndex = index;
        this.currentSketch = this.sketches[this.sketchIndex];
    }

    initialise() {
        this.sketches[0] = new SketchZero();
        this.sketches[1] = new SketchOne();
        this.sketches[2] = new SketchTwo();
        this.sketches[3] = new SketchThree();
        this.sketches[4] = new SketchFour();
    }
}