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

    keyCode == 48 ? clockController.setThreshold(0) : null;
    keyCode == 49 ? clockController.setThreshold(0.1) : null;
    keyCode == 50 ? clockController.setThreshold(0.2) : null;
    keyCode == 51 ? clockController.setThreshold(0.3) : null;
    keyCode == 52 ? clockController.setThreshold(0.4) : null;
    keyCode == 53 ? clockController.setThreshold(0.5) : null;
    keyCode == 54 ? clockController.setThreshold(0.6) : null;
    keyCode == 55 ? clockController.setThreshold(0.7) : null;
    keyCode == 56 ? clockController.setThreshold(0.8) : null;
    keyCode == 57 ? clockController.setThreshold(0.9) : null;
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}