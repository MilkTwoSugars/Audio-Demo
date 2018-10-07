class OrbSketch {
    constructor(audioController) {
        this.audioController = audioController;

        this.orbs = [];
        this.orbCount = 500;

        this.size = 500;
        this.targetSize = 500;

        for (var i = 0; i < this.orbCount; i++) {
            let o = new Orb(createVector(random(-width, width), random(-height/2, height / 2), 0), 50);
            this.orbs.push(o)
        }
    }

    draw() {
        translate(width / 2, height / 2)
        rotate(frameCount * 0.01)
        for (var i = 0; i < this.orbCount; i++){
            this.orbs[i].update(i + 1, this.audioController.trigger());
            this.orbs[i].render();
        }

        this.targetSize = this.audioController.trigger().value * 500;
        this.size = lerp(this.size, this.targetSize, 0.1);
        fill(255);
        normalMaterial();
        sphere(this.size);
    }
}

class Orb {
    constructor(position, size) {
        this.pos = position;
        this.size = size;
        this.sizeTarget = size;
    }

    update(i, event) {
        //this.pos.x+= 12;

        if(this.pos.x < width / 2 + 250 && this.pos.x > width / 2 - 250) {
            this.pos.x = random(width);
        }

        this.sizeTarget = event.value * event.value * i / 2;
        this.size = lerp(this.size, this.sizeTarget, 0.1);

        this.pos.y = sin(frameCount * 0.004 + i) * height;
        this.pos.z = cos(frameCount * 0.004 + i) * 500 + sin(frameCount * 0.09 + i) * 250;
        //this.pos.x = sin(frameCount * 0.07 + i) * 100 + sin(frameCount * 0.009 + i) * width;
    }

    render() {
        noStroke();
        push();
        fill(255);
        normalMaterial();
        translate(this.pos.x, this.pos.y, this.pos.z);
        sphere(this.size);
        pop();
    }
}