class ClockController {
    constructor(sketchController) {
        this.sketchController = sketchController;

        this.input = new p5.AudioIn();
        this.input.start();

        this.threshold = 0.5;

        this.hasReset = true;
    }

    tick() {
        let v = this.input ? this.input.getLevel() : 0;
        this.sketchController.tick(v);
    }

    audio(){
        this.input.getLevel() > this.threshold ? this.tick() : null;
    }

    resetThreshold() {
        this.threshold = 0.5;
        console.log("Threshold is now " + this.threshold);
    }

    increaseThreshold(){
        this.threshold += 1 / 10;

        if (this.threshold > 0.9) {
            this.threshold = 0.9
        }

        console.log("Threshold is now " + this.threshold)
    }

    decreaseThreshold(){
        this.threshold -= 1 / 10;

        if (this.threshold < 0) {
            this.threshold = 0
        }

        console.log("Threshold is now " + this.threshold)
    }

    getVolume() {
        return this.input.getLevel();
    }
}

//#region Midi Capture
var midi, data;
var keys = {};
var count = 0;

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({
        sysex: false
    }).then(onMIDISuccess, onMIDIFailure);
} else {
    alert("No MIDI support in your browser.");
}

function onMIDISuccess(midiAccess) {
    midi = midiAccess;

    var inputs = midi.inputs.values();
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
        input.value.onmidimessage = onMIDIMessage;
    }
}

function onMIDIFailure(error) {
    console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + error);
}

function onMIDIMessage(message) {
    data = message.data;
    playNote(data);
}

function playNote(data) {
    if (data[2] != 127) {
            clockController.tick();
    }
}
//#endregion
