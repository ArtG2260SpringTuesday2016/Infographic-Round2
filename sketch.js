var obj = {};
for (var i = 0; i < thehits.length; i++) {
   obj[thehits[i]] = (obj[thehits[i]] || 0) + 1;
}

var visTotals = function (obj) {
  var j = 0;
  var rectWidth = 3;
  var barHeight;
  var spacing;

  for (var prop in obj) {
   fill ("#bada55")
   strokeWeight(0)
   barHeight = obj[prop];
   rectHeight = barHeight * -10;
   spacing = j * (1 + rectWidth);
   rect(spacing, 500, rectWidth, rectHeight);
   j++;
 }
}

function setup() {
  createCanvas(1200, 500);
  textSize(24)
  textFont("Avenir");
  text("All The Hits" ,30,30)
  textSize(12)
  textFont("Avenir");
  text("Which artist had the most Billboard Weekly hits from 1970-2016?", 30, 60);
}

function draw() {
  fill(333)
  textSize(22)
  textFont("Avenir");
  visTotals(obj);
}
