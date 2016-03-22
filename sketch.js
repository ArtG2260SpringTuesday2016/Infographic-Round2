var data = [4062, 1735, 1474, 1880, 13461, 11230, 12974, 10683, 47062, 38221, 48112,  42521, 55342,  26617,  62236, 29665, 90, 100, 130, 150, 200, 300, 400];

function setup(){
createCanvas(1000,615);
}

function draw(){

for (var i=0; i <= 23; i++){
  var xPosition = 50*(i+3);
  var yPosition = 550;
  var rectWidth = 5;
  var datayear= -data[i]/120;
    if (0<= i && i <=3){
      fill(i*100,50,0);
      noStroke();
      rect(xPosition, yPosition, rectWidth, datayear);
    }
    if (4 <= i && i <=7) {
      fill((i-4)*100,50,0);
      noStroke();
      rect(xPosition, yPosition, rectWidth, datayear);
    }
    if (8<=i && i <=11){
      fill((i-8)*100,50,0);
      noStroke();
      rect(xPosition, yPosition, rectWidth, datayear);
      }
    if (12<=i && i <=16){
      fill((i-12)*100,50,0);
      noStroke();
      rect(xPosition, yPosition, rectWidth, datayear);
      }
    if (17<=i && i<=23){
      noFill();
      stroke(51);
      ellipse(150*(i-16)+3, -data[i]+600, 15, 15);
    }
}

stroke(0);
line(150, 560, 305, 560);
line(350, 560, 505, 560);
line(550, 560, 705, 560);
line(750, 560, 905, 560);
textSize(12);
noStroke();
fill(0);
text("2013", 215, 585);
text("2014", 415, 585);
text("2015", 615, 585);
text("2016", 815, 585);
fill(0,50,0);

}
