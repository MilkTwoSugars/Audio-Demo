class BoxsphereSketch {
    constructor(audioController) {
        this.controller = audioController;
        this.boxes = [];
        this.boxNumber = 50;

        this.size = 500;
        this.targetSize = 500;

        for (var i = 0; i < this.boxNumber; i++) {
            let index = floor(random(1, 5));
            let b = new Boxsphere(createVector(random(-width / 2, width / 2), random(-height / 2, height / 2)), random(50, 500), index, random(1, 4));
            this.boxes.push(b);
        }
    }

    draw() {
        let event = this.controller.trigger();

        translate(width / 2, height / 2)

        for (var i = 0; i < this.boxes.length; i++) {
            this.boxes[i].update(event);
            this.boxes[i].render(i);
        }

        this.targetSize = event.value * 500;
        this.size = lerp(this.size, this.targetSize, 0.01)

        translate(width / 3, -height / 3)
        noStroke();
        normalMaterial();
        sphere(this.size);
        rotateY(frameCount * 0.05)
        rotateZ(frameCount * 0.02)
        rotate(frameCount * 0.01)
        torus(this.size * 2, this.size / 10)
        rotate(frameCount * 0.01)
        torus(this.size * 1.5, this.size / 10)
    }


}

class Boxsphere {
    constructor(position, s, shape, speed) {
        this.pos = position;
        this.size = s;
        this.shape = shape;
        this.speed = 5;
        this.sizeTarget = s;
    }

    update(event) {
        this.sizeTarget = event.value * 500;
        this.size = lerp(this.size, this.sizeTarget, 0.05)
        this.pos.y = height / 2;
    }

    render(i) {
        push();
        noStroke();
        fill(255);
        normalMaterial();
        translate(this.pos.x, this.pos.y, 0);
        rotate(frameCount * 0.01 + i);
        rotateY(frameCount * 0.03 + i);
        rotateZ(frameCount * 0.04 + i)

        box(this.size)
        pop();
    }
}