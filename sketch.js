var x = document.getElementsByTagName("STYLE");
var CANVAS_HEIGHT = 1300;
var CANVAS_WIDTH = 900;

var DATE_WIDTH = 20;
var DATE_PADDING = 5;
var DATE_MARGIN = 20;

var Y_SCALE = 2; // for making the y axis bigger

var DATA = [
  {
    date: 'Feb 1',
    target: 18,
    won: 23,
  },
  {
    date: 'Feb 9',
    target: 9,
    won: 9,
  },
  {
    date: 'Feb 20',
    target: 17,
    won: 20,
  },
  {
    date: 'Feb 27', 
    target: 32,
    won: 39,
  },
  {
    date: 'Mar 1',
    target: 453,
    won: 519,
   },
   {
	date: 'Mar 5',
	target: 57,
	won: 56,
   },
   {
	date: 'Mar 8',
	target: 86,
	won: 95,
   },
   {
	date: 'Mar 12',
	target: 3,
	won: 4,
   },
   {
    date: 'Mar 15',
    target: 365,
    won: 396,
   },
   {
    date: 'Mar 21',
    target: 6.5,
    won: 4,
   },
   {
    date: 'Mar 22',
    target: 57,
    won: 55,
   },

];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}


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
  
  
  
  var xOffset = DATE_MARGIN;
  
  for (var i = 0; i < DATA.length; i++) {
    var targetHeight = DATA[i].target * Y_SCALE;
    var wonHeight = DATA[i].won * Y_SCALE;
    
    var check = collidePointRect(mouseX, mouseY, xOffset, CANVAS_HEIGHT - targetHeight, DATE_WIDTH, targetHeight);
    var check = collidePointRect(mouseX, mouseY, xOffset, CANVAS_HEIGHT - wonHeight, DATE_WIDTH, wonHeight);
    
    if(check) {
      textSize(30);
      text(xOffset, 50, 500);
      text(xOffset, 100, 500);
    }
    
    noStroke();
  fill(255);
    rect(xOffset, CANVAS_HEIGHT - targetHeight, DATE_WIDTH, targetHeight); // target
    
    xOffset += DATE_WIDTH + DATE_PADDING;
    

    noStroke();
    fill(30,30,200);
    rect(xOffset, CANVAS_HEIGHT - wonHeight, DATE_WIDTH, wonHeight); // won
    
    xOffset += DATE_WIDTH + DATE_MARGIN;  
    
    /*push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  star(20, 0, 25, 30, 10); 
  pop(); */
    
    push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 80, 5); 
  pop();
    
  
  }





fill(0,150,255);
textSize(25);
textStyle(BOLD);
text("Hillary Clinton's Target Delegates vs. Won", 200, 130);
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
textStyle(BOLD);
textSize(15);
text("Delegates", 20, 700);
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
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

