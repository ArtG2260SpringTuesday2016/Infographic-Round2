var homeRun = homeRuns.split(' ');
for (var i = 0; i < homeRun.length; i++) {
  homeRun[i] = homeRun[i];
}

var hitters = hitters.split(' ');
for (var i = 0; i < hitters.length; i++) {
  hitters[i] = hitters[i];
}

var isOverCircle;

function setup() {
  createCanvas(800,800)
  
  textSize(32)

  for (var i = 0; i < homeRun.length; i++){
    var ellipseHeight = homeRun[i]*PI ;
    var ellipseWidth =  700;
 var distance = dist(mouseX, mouseY, ellipseHeight, ellipseHeight); 
  
  if(distance < 100)
  {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }
  
    fill (random(1,255), random (1,255), random(1,255));
    noStroke()
    text(homeRun[i], [i*70], (ellipseWidth+5));
    if(isOverCircle == true)
  {
    fill(1);
    cursor(HAND);
    text ('I WORK!!!', 250, 250)
  } 
  else {
    fill(200); 
    cursor(ARROW);
  
  }
    ellipse([i*80] , (ellipseWidth - ellipseHeight), ellipseHeight, ellipseHeight);
    
  }
  
  
  for (var i = 0; i < hitters.length; i++){
    fill (random(1,255), random (1,255), random(1,255));
    text(hitters[i], [i*170], (ellipseWidth-200));
  
  }
}

function draw(){
  
  var distance = dist(mouseX, mouseY, 200, 200); 
  
  if(distance < 50)
  {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }
  
   if(isOverCircle == true)
  {
    fill(100);
    cursor(HAND);
    text ('I WORK!!!', 250, 250)
  } else {
    fill(200); 
    cursor(ARROW);
  
  }
   ellipse(200, 200, 100, 100);
  
 
  
}