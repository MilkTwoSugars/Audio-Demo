var sketchController;
var clockController;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    sketchController = new SketchController();
    clockController = new ClockController(sketchController);
}

function draw() {
    sketchController.draw();
}

function mouseClicked() {
    clockController.tick();
}

function keyPressed() {
    key == " " ? clockController.tick() : null;
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}