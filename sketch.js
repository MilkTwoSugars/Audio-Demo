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
    // Space to tick/beat
    key == " " ? clockController.tick() : null;

    // Enter to change sketch
    keyCode == ENTER ? sketchController.changeSketch() : null;

    // P key to enable autoplay
    keyCode == 80 ? sketchController.enableAutoplay() : null;

    // O key to disable autoplay
    keyCode == 79 ? sketchController.disableAutoplay() : null;
    
    // Number keys (1-6) to switch sketches
    keyCode == 49 ? sketchController.changeSketchTo(0) : null;
    keyCode == 50 ? sketchController.changeSketchTo(1) : null;
    keyCode == 51 ? sketchController.changeSketchTo(2) : null;
    keyCode == 52 ? sketchController.changeSketchTo(3) : null;
    keyCode == 53 ? sketchController.changeSketchTo(4) : null;
    keyCode == 54 ? sketchController.changeSketchTo(5) : null;
    // keyCode == 55 ? sketchController.changeSketchTo(6) : null;
    // keyCode == 56 ? sketchController.changeSketchTo(7) : null;
    // keyCode == 57 ? sketchController.changeSketchTo(8) : null;
    // keyCode == 48 ? sketchController.changeSketchTo(9) : null;

    // + key to increase threshold by 0.1
    keyCode == 189 ? clockController.decreaseThreshold() : null;

    // - key to decrease threshold by 0.1
    keyCode == 187 ? clockController.increaseThreshold() : null;

    // R key to reset threshold
    keyCode == 82 ? clockController.resetThreshold() : null;
  }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}