class ClockController {
    constructor(sketchController) {
        this.sketchController = sketchController;

        this.input = new p5.AudioIn();
        this.input.start();
    }

    tick() {
        this.sketchController.tick();
    }

    audio(){
        this.input.getLevel() > 0.5 ? this.tick() : null;
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
