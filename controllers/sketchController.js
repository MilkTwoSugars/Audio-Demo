class SketchController {
    constructor() {
        this.sketches = [];
        this.currentSketch = null;
        this.backdrop = new Backdrop();

        this.audioController = new AudioController(true);

        this.index = 0;

        this.initialise();
    }

    draw() {
        translate(-width / 2, -height / 2);
        this.backdrop.draw();
        this.currentSketch.draw();
    }

    randomSketch() {
        this.currentSketch = this.sketches[this.index];

        this.index++;
        if (this.index > this.sketches.length - 1) {
            this.index = 0;
        }
    }

    initialise() {
        //let sketch0 = new CubeGridSketch(this.audioController);
        let sketch1 = new OrbSketch(this.audioController);
        let sketch3 = new BoxsphereSketch(this.audioController);

        this.sketches.push(sketch3, sketch1);
        this.randomSketch();
    }
}

