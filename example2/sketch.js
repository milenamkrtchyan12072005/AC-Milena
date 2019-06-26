var mic;
var button;
var smoothMicLevel=5;
var t;


function setup() {
	createCanvas(windowWidth, windowHeight-100);
    background(0);
	button = createButton("Listen");
    button.mousePressed(toggleListen);
	mic = new p5.AudioIn()
    mic.start();
    t = 100;
}

function draw() {
  background(0, 5);
  micLevel = mic.getLevel();
  var x = width * noise(t);
  var y = height * noise(t+100);
  var r = 255 * noise(t+10);
  var g = 255 * noise(t+15);
  var b = 255 * noise(t+20);
  smoothMicLevel = lerp(smoothMicLevel, micLevel, 5);
  translate(width/2, height/2)
  noStroke();
  fill(r, g, b);
  
  for(var i = 0; i < 15; i++){
    rotate(PI/4); 
    ellipse(micLevel * x * i, micLevel * y * i, i, i);
    }
    
    t = t + 0.05;
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
