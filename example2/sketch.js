var mic;
var button;
var smoothMicLevel=0;
var t;
var song;
var button;
var amplitude;

function preload() {
  song = loadSound("../audio/myBeat.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight-100);
    background(0);
	button = createButton("Listen");
    button.mousePressed(toggleListen);
	mic = new p5.AudioIn()
    mic.start();
    t = 0;
}

function draw() {
  background(0, 5);
  micLevel = mic.getLevel();
  var x = width * noise(t);
  var y = height * noise(t+5);
  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
  smoothMicLevel = lerp(smoothMicLevel, micLevel,0.2);
  noStroke();
  fill(r, g, b);
  ellipse(x, y, 120, 120);

  t = t + 0.005;
}

function toggleListen() {
	if (getAudioContext().state !== 'running') {
    	getAudioContext().resume();
		text('listening to audio', width/2, height/2);
		button.html("Stop");
	} else {
        text('click Play button to start', width/2, height/2);

        button.html("Listen");
    }
}
