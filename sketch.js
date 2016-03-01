var angles = [ 80, 20, 35, 45, 50, 50, 30, 50 ];

function setup() {
  createCanvas(720, 400);
  noStroke();
  noLoop();  
}

function draw() {
  background(100);
  pieChart(300, angles);
}

function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    var bluee = map(i, 0, data.length, 0, 255);
    fill(bluee);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
  
  
}