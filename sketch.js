
var y = document.getElementsByTagName("style");
var CANVAS_HEIGHT = 1300;
var CANVAS_WIDTH = 900;

var DATE_WIDTH = 20;
var DATE_PADDING = 5;
var DATE_MARGIN = 20;

var Y_SCALE = 2; // for making the y axis bigger

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

var X_OFFSET = DATE_MARGIN;

function draw() {
  background(150,20,20);
  
  noStroke();
  fill(255); //target
  rect(590,160,20,20);
  text("Target", 620, 175);
  
  noStroke();
  fill(30,30,200); //won
  rect(590,200,20,20);
  text("Won", 620, 215);
  

  
  for (var i = 0; i < DATA.length; i++) {
    
    var targetHeight = DATA[i].target * Y_SCALE;
    var wonHeight = DATA[i].won * Y_SCALE;
    var check = collidePointRect(mouseX, mouseY, X_OFFSET, CANVAS_HEIGHT - targetHeight, DATE_WIDTH, targetHeight); 
     var checks = collidePointRect(mouseX, mouseY, X_OFFSET, CANVAS_HEIGHT - wonHeight, DATE_WIDTH, wonHeight);
  
    
  if(check) {
      textSize(30);
      text(X_OFFSET, 50, 500);
      text(X_OFFSET, 100, 500);
  } 
  
    
    noStroke();
    fill(255);
    rect(X_OFFSET, CANVAS_HEIGHT - targetHeight, DATE_WIDTH, targetHeight); // target
    
    X_OFFSET += DATE_WIDTH + DATE_PADDING;
    

    noStroke();
    fill(30,30,200);
    rect(X_OFFSET, CANVAS_HEIGHT - wonHeight, DATE_WIDTH, wonHeight); // won
    
    X_OFFSET += DATE_WIDTH + DATE_MARGIN;  
    
  }
  fill(0,150,255);
textSize(25);
textStyle(BOLD);
text("Hillary Clinton's Target Delegates vs. Won", 200, 130); 
textStyle(BOLD);
textSize(15);
text("Delegates", 20, 700);
  
    
var primaries = ["Feb 1", "Feb 9", "Feb 20", "Feb 27", "Mar 1", "Mar 5", "Mar 8", "Mar 12", "Mar 15", "Mar 21", "Mar 22"]  
for (i = 0; i < primaries.length; i++) {
  text(primaries[i], x, 1200);
  
}

/*
textSize(10);
text("Feb 1", 25, 1200);
text("Feb 9", 95, 1200);
text("Feb 20", 155, 1200);
text("Feb 27", 220, 1200);
text("Mar 1", 280, 1200);
text("Mar 5", 350, 1200);
text("Mar 8", 415, 1200);
text("Mar 12", 480, 1200);
text("Mar 15", 545, 1200);
text("Mar 21", 610, 1200);
text("Mar 22", 670, 1200);


  /*  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 80, 5); 
  pop(); */
  
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

}