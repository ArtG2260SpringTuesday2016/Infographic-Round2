var data = [4062, 1735, 1474, 1880, 13461, 11230, 12974, 10683, 47062, 38221, 48112,  42521, 55342,  26617,  62236, 29665];

var words = {}
words["text"] =  "";
words["x"] = 0;
words["y"] = 0;

function setup(){
createCanvas(1000,615);
}

function draw(){
background(255)

for (var i=0; i <= 16; i++){

  var xPosition = 50*(i+3);
  var yPosition = 550;
  var rectWidth = 5;
  var datayear= -data[i]/120;

  var check = collidePointCircle(mouseX,mouseY,153, 470, 10, 10); //see if the mouse is in the rect

	if(check){ //change color!
		words["text"] = "90 Million";
    words["x"] = 130;
    words["y"] = 450;
		noStroke;
	}

	var check1 = collidePointCircle(mouseX,mouseY, 176, 460, 10, 10); //see if the mouse is in the rect

	if(check1){ //change color!
	  noStroke;
		words["text"] = "100 Million";
    words["x"] = 150;
    words["y"] = 450;
	}

	var check2 = collidePointCircle(mouseX,mouseY, 268, 430, 10, 10); //see if the mouse is in the rect

	if(check2){ //change color!
	  noStroke;
		words["text"] = "130 Million";
    words["x"] = 245;
    words["y"] = 415;
	}


	var check3 = collidePointCircle(mouseX,mouseY, 337, 410, 10, 10); //see if the mouse is in the rect

	if(check3){ //change color!
	  noStroke;
		words["text"] = "150 Million";
    words["x"] = 310;
    words["y"] = 400;
	}

	var check4 = collidePointCircle(mouseX,mouseY, 517, 360, 10, 10); //see if the mouse is in the rect

	if(check4){ //change color!
	  noStroke;
		words["text"] = "200 Million";
    words["x"] = 500;
    words["y"] = 345;
	}

	var check5 = collidePointCircle(mouseX,mouseY, 751, 260, 10, 10); //see if the mouse is in the rect

	if(check5){ //change color!
	  noStroke;
		words["text"] = "300 Million";
    words["x"] = 730;
    words["y"] = 245;
	}

	var check6 = collidePointCircle(mouseX,mouseY, 889, 160, 10, 10); //see if the mouse is in the rect

	if(check6){ //change color!
	  noStroke;
		words["text"] = "400 Million";
    words["x"] = 860;
    words["y"] = 150;
    
	}	
	
	var check7 = collidePointRect(mouseX,mouseY, xPosition, yPosition+datayear, rectWidth, -datayear); //see if the mouse is in the rect

	if(check7){
	  noStroke;
	  words["text"] = data[i];
		words["x"] = 500;
		words["y"] = 100;
	}

  text(words["text"], words["x"], words["y"])

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

noFill();
stroke(51);
ellipse(153, 470, 10, 10);
ellipse(176, 460, 10, 10);
ellipse(268, 430, 10, 10);
ellipse(337, 410, 10, 10);
ellipse(517, 360, 10, 10);
ellipse(751, 260, 10, 10);
ellipse(889, 160, 10, 10);

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

text("Fashion Week Instagram Hashtag Uses Versus Instagram Population Growth", 250, 15);
text("#nyfw__", 25, 40);
text("#lfw__", 25, 70);
text("#pfw__", 25, 100);
text("#mfw__", 25, 130);

fill(0,50,0);
rect(10,30,10,10);

fill(100,50,0);
rect(10,60,10,10);

fill(200, 50, 0);
rect(10,90,10,10);

fill(300, 50, 0);
rect(10,120,10,10);

noFill();
stroke(51);
ellipse(15,150,10,10);
fill(51);
noStroke();
text("Instagram Population", 25, 155);



}



var instapop = [90, 100, 130, 150, 200, 300, 400];
var instatime= [1, 2, 6, 9, 15, 24, 33];
