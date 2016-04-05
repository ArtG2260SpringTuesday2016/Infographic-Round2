var myData = data
var stars = [];
var moon = {
  name: "Moon",
  size: 100,
  x: 200,
  y: 100
};

var graph = function (someData) {
  for (var i = 0; i < someData.length; i++){
    var barWidth = 13
    var spacing = i * (5 + barWidth);
    var barHeight = someData[i].interest;

    rect(spacing, 250, barWidth, barHeight * 2)
    rect(spacing, 250, barWidth, barHeight * -2)
  }
}

function setup() {
  createCanvas(1000, 500)
  background(0)

// Drawing Random Stars
  for (var i = 0; i < 100; i++){
    stars[i] = new Star();
  }
  for (var i = 0; i < stars.length; i++){
    stars[i].move();
    stars[i].display();
  }

function Star(){
  this.x = random(0, width);
  this.y = random(0, height);
    this.display = function (){
      noStroke()
      fill(255)
      ellipse(this.x, this.y, 5, 5);
      }
      this.move = function(){
        this.x = this.x + random (0, 0);
        this.y = this.y + random (0, 0);
      }
    }

// Adding Moon
  noStroke()
  fill(255) // White Moon
  ellipse(moon.x, moon.y, moon.size, moon.size) // 200,100,100,100
  fill(220) // Grey Circles
  ellipse(moon.x + 20, moon.y - 20, moon.size - 70, moon.size - 70)
  ellipse(moon.x - 20, moon.y - 30, moon.size - 78, moon.size - 78)
  ellipse(moon.x - 20, moon.y, moon.size - 85, moon.size - 85)

// Adding Line at 0
  stroke(300);
  line(200, 250, 800, 250);

// Creating Histogram
  noStroke()
  fill(34,148,143) // Blue for Histogram
  graph(myData);

// Adding Text to Corner
  textSize(20)
  text("David Bowie in Google Searches", 617, 70),
  fill(34,148,143),
  rect(590,80,350,30), // Rectangle Behind Text
  fill(255),
  text("From January 4 to January 30 2016", 603, 102)
}

  function mouseMoved() {
    for(i = 0; i < myData.length; i++) {
      var spd = myData[i];
      var barWidth = 13
      var spacing = i * (5 + barWidth);
    if (abs((spacing + (barWidth / 2)) - mouseX) < (barWidth / 2) && spd.date != "filler") {
      fill(0)
      rect(0, 175, width, 60)
      noStroke()
      fill(34,148,143) // Blue for Histogram
      graph(myData);
      fill(255)
      textSize(15)
      text(spd.date,spacing + (barWidth / 2),200)
      text("Interest Level: " + spd.interest, spacing + (barWidth / 2), 220, "hotpink")
      }
    }
  }
