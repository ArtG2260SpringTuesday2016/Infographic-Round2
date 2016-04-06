var homeRun = homeRuns.split(' ');
var hitters = hitters.split(' ');
var ellipseWidth = 700;
var circleSize=function(){
  for (var i = 0; i < homeRun.length; i++) {
    var ellipseHeight = homeRun[i] * PI;
    

    fill(random(1, 255), random(1, 255), random(1, 255));
    noStroke()

    ellipse([i * 80], (ellipseWidth - ellipseHeight), ellipseHeight, ellipseHeight);
  }
}

function setup() {
  createCanvas(800, 800)
    circleSize()
  
}

function draw() {


  var batters = function() {
    if (collidePointCircle((ellipseWidth - ellipseHeight), ellipseHeight, ellipseHeight)) {
      return 
    } else {
      return ""
    }
  }
  for (var i = 0; i < hitters.length; i++) {
    fill('pink');
    text([i], [i * 170], (ellipseWidth - 200));
  }
}