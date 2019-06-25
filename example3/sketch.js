var song;
var button;
var amplitude;

function preload() {
  song = loadSound("../audio/myBeat.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight-100);
    background(51);
    slider = createSlider(0,1,0.5,0.01);
    button = createButton("Play");
    button.mousePressed(togglePlay);
	// song.loop();
    amplitude = new p5.Amplitude();
}

function togglePlay() {
    if (!song.isPlaying()){
        song.loop();
        button.html("Pause");
    } else {
        song.stop();
        button.html("Play");
    }
}

function draw(){
    background(0);
    song.setVolume(slider.value());

    var vol = amplitude.getLevel();
    var diam = map(vol, 0, 1, 10, height);
    fill(255, 0, 255,200);
    ellipse(width/2, height/2, diam, diam);
}