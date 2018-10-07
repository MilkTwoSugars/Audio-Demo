class AudioController {
    constructor(thresholdIsZero) {
        this.input = new p5.AudioIn();
        this.input.start();
        this.average = 0;
        this.levels = [];

        this.thresholdIsZero = thresholdIsZero;

        this.audioIndicator = new AudioIndicator();
    }

    update() {
        let volume = this.volume();

        this.levels.push(volume);

        if (this.levels.length > 100) {
            this.levels.splice(0, 1);
        }

        let total = 0;

        this.levels.forEach(x => total += x);

        this.average = total / this.levels.length;

    }

    trigger() {

        let volume = this.volume();

        this.update(volume);

        let threshold = this.thresholdIsZero ? 0 : this.average;

        let aboveThreshold = volume > threshold ? true : false;

        this.audioIndicator.updateFrequency(volume * 200);

        return new AudioEvent(aboveThreshold, this.average, volume);

    }

    volume() {
        return this.input.getLevel();
    }
}

class AudioEvent {
    constructor(aboveThreshold, average, value) {
        this.isAboveThreshold = aboveThreshold;
        this.average = average;
        this.value = value;
    }
}

class AudioIndicator {
    constructor() {
        this.osc = new p5.Oscillator();
        this.osc.setType('square');
        this.osc.freq(0);
        this.osc.amp(0.1);
        this.osc.start();
    }

    updateFrequency(value) {
        this.osc.freq(value);
    }
}