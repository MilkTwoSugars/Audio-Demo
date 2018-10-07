var sketchController;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    sketchController = new SketchController();
}

function draw() {
    sketchController.draw();
}

function mouseClicked() {
    sketchController.randomSketch();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}