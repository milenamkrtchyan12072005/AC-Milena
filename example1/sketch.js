function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(0);
    noFill();
    stroke(random(255), random(255), random(255));
  
    beginShape();
    for (var x = 0; x < width; x++) {
      var nx = map(x, 0, width, 0, 10);
      var y = height * noise(nx);
      vertex(x, y);
    }
    endShape();
  }