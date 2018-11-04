var sketchController;
var clockController;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    sketchController = new SketchController();
    clockController = new ClockController(sketchController);
}

function draw() {
    clockController.audio();
    sketchController.draw();
}

function mouseClicked() {
    clockController.tick();
}

function keyPressed() {
    key == " " ? clockController.tick() : null;
    keyCode == ENTER ? sketchController.changeSketch() : null;
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}