class SlinkySketch {
    constructor(audioController) {
        this.controller = audioController;
        this.maxTrail = 100;
        this.circles = [];
    }

    draw() {
        translate(width / 2, height / 2);

        let pos = createVector(sin(frameCount * 0.001) * 250, cos(frameCount * 0.2) * 250);
        let sizeX = sin(frameCount * 0.01) * 500;
        let sizeY = cos(frameCount * 0.03) * 500;
        let c = new SlinkyCircle(pos, sizeX, sizeY, this.maxTrail);

        this.circles.push(c);

        for (var i = 0; i < this.circles.length; i++) {
            this.circles[i].render(i);
        }

        fill(250)
        specularMaterial(0);
        noStroke();
        rotateY(frameCount * 0.01)
        sphere(sin(frameCount * 0.001) * 250);

        if (this.circles.length > this.maxTrail) {
            this.circles.splice(0, 1);
        }
    }
}

class SlinkyCircle {
    constructor(position, sizeX, sizeY, maxTrail) {
        this.pos = position;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.maxTrail = maxTrail;
    }

    render(i) {
        noFill();
        stroke(this.getColour(i), 50, 150);
        colorMode(HSB);
        strokeWeight(1);
        rotate(frameCount * 0.0001)
        //ellipse(this.pos.x, this.pos.x, this.sizeX, this.sizeY);
        push();
        translate(this.pos.x, this.pos.y);
        sphere(this.sizeX + this.sizeY, 1, 1);
        pop();
    }

    getColour(i) {
        return map(i, 0, this.maxTrail, 0, 255);
    }
}