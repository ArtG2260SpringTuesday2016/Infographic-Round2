var angles = [ 80, 20, 35, 45, 50, 50, 30, 50 ];
var blues = [];
var reds = [];

function setup() {
  createCanvas(720, 400);
  for (var i=0; i<8; i++){
    blues.push(random(0,255))
    reds.push(random(0,255))
  }
  console.log(blues);
}

function draw() {
function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    fill(reds[i], 0, 0);
    arc(width/1.35, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
}

function pieChart2(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    fill (0,0,blues[i]);
    arc(width/4, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }  

}  
  
  var mouseloc = dist(mouseX, mouseY, 182, 200); 
  var mouseloc2 = dist(mouseX, mouseY, 532, 200); 
  
  if(mouseloc < 150)
  {
    hovercircle = true;
  }else
  {
    hovercircle = false;
  }
  
   if(hovercircle == true)
  {
    fill(100);
    text ('Blue 15% Azure 10% Teal 30% Cyan 20% Denim 13% Skyblue 10%', 10, 40)
  }else 
  {
   strokeWeight(0);
   fill(255);
   rect (10, 30, 500, 50);
  }

  if(mouseloc2 < 150)
  {
    hovercircle = true;
  }else
  {
    hovercircle = false;
  }
  
  if(hovercircle == true)
  {
    fill(100);
    text ('red 10% pink 19% lava 30% Rose 10% Flame 13% Crimson 20%', 400, 40)
  }else
  {
   strokeWeight(0);
   fill(255);
   rect (400, 30, 500, 50);
  }
  pieChart(300, angles);
  pieChart2(300, angles);
  text('Blue Shades', 150, 360, 500, 500);
  text('Red Shades', 500, 360, 500, 500);


 }



