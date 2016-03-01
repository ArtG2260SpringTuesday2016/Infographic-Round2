var angles = [ 80, 20, 35, 45, 50, 50, 30, 50 ];

function setup() {
  createCanvas(720, 400);
  noStroke();
  noLoop();  
}

function draw() {
  background(100);
  pieChart(300, angles);
  pieChart2(300, angles);
}

function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    fill(random (0, 255), 0, 0);
    arc(width/1.35, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
}

function pieChart2(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    fill (0, 0, random (0, 255));
    arc(width/4, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }  
  
}