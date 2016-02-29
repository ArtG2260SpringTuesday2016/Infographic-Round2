var homeRun = homeRuns.split(' ');
for (var i = 0; i < homeRun.length; i++) {
  homeRun[i] = homeRun[i];
}

var hitters = hitters.split(' ');
for (var i = 0; i < hitters.length; i++) {
  hitters[i] = hitters[i];
}


function setup() {
  createCanvas(800,800)
  
  textSize(32)

  for (var i = 0; i < homeRun.length; i++){
    var ellipseHeight = homeRun[i]*PI ;
    var ellipseWidth =  700;

    fill (random(1,255), random (1,255), random(1,255));
    noStroke()
    text(homeRun[i], [i*70], (ellipseWidth+5));
    ellipse([i*80] , (ellipseWidth - ellipseHeight), ellipseHeight, ellipseHeight);
    
  }
  
  
  for (var i = 0; i < hitters.length; i++){
    
    text(hitters[i], [i*70], (ellipseWidth-200));
  
  }
}

