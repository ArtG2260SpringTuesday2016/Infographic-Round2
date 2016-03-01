var stars = [];

var myData = [
  {
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "filler",
    "interest": 0
  },{
    "date": "1/4/16",
    "interest": 0
  },{
    "date": "1/5/16",
    "interest": 0
  },{
    "date": "1/6/16",
    "interest": 0
  },{
    "date": "1/7/16",
    "interest": 0
  },{
    "date": "1/8/16",
    "interest": 1
  },{
    "date": "1/9/16",
    "interest": 1
  },{
    "date": "1/10/16",
    "interest": 0
  },{
    "date": "1/11/16",
    "interest": 100
  },{
    "date": "1/12/16",
    "interest": 41
  },{
    "date": "1/13/16",
    "interest": 14
  },{
    "date": "1/14/16",
    "interest": 10
  },{
    "date": "1/15/16",
    "interest": 7
  },{
    "date": "1/16/16",
    "interest": 6
  },{
    "date": "1/17/16",
    "interest": 6
  },{
    "date": "1/18/16",
    "interest": 4
  },{
    "date": "1/19/16",
    "interest": 3
  },{
    "date": "1/20/16",
    "interest": 2
  },{
    "date": "1/21/16",
    "interest": 2
  },{
    "date": "1/22/16",
    "interest": 2
  },{
    "date": "1/23/16",
    "interest": 2
  },{
    "date": "1/24/16",
    "interest": 2
  },{
    "date": "1/25/16",
    "interest": 1
  },{
    "date": "1/26/16",
    "interest": 1
  },{
    "date": "1/27/16",
    "interest": 1
  },{
    "date": "1/28/16",
    "interest": 1
  },{
    "date": "1/29/16",
    "interest": 1
  },{
    "date": "1/30/16",
    "interest": 2
  }
];

var graph = function (someData) {
  for (var i = 0; i < someData.length; i++){
    var barWidth = 13
    var spacing = i * (margin + barWidth);
    var margin = 5;
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

// Adding Rocketship
noStroke()
fill(255)
ellipse(200, 100, 100, 100)
fill(220)
ellipse(220, 80, 30, 30)
ellipse(180, 70, 22, 22)
ellipse(180, 100, 15, 15)
// Creating Histogram
  noStroke()
  fill(34,148,143)
  graph(myData);

//Adding text to corner
  textSize(20)
  text("David Bowie in Google Searches", 617, 70),
  fill(34,148,143),
  rect(590,80,350,30),
  fill(255),
  text("From January 4 to January 30 2016", 603, 102)

// Adding Line at 0
  stroke(300);
  line(200, 250, 800, 250);

}

function draw() {



}
