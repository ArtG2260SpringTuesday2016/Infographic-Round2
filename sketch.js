var dataValueText = "artist";

var obj = {};
for (var i = 0; i < thehits.length; i++) {
   obj[thehits[i]] = (obj[thehits[i]] || 0) + 1;
}

function setup() {
  createCanvas(1200, 500);
  textSize(24)
  textFont("Avenir");
  text("All The Hits" ,30,30)
  textSize(12)
  textFont("Avenir");
  text("Which artist had the most Billboard Weekly hits from 1970-2016?", 30, 60)

  
  
 var visTotals = function (obj) { 
   var j = 0;
 for (var prop in obj){
      fill ("#bada55")
      strokeWeight(0)
      var barHeight = obj[prop];
      var rectWidth=3;
      rectHeight=barHeight * -10;
      var spacing=j * (1 + rectWidth);
      rect(spacing, 500, rectWidth, rectHeight);
      j++
      
    }
    
  }
  visTotals(obj);

}

this.isMouseOnRect = function(x) {
  if (collidePointRect(mouseX,mouseY, spacing, 500, rectWidth, rectHeight)){
   dataValueText = this.thehits
    }


this.render = function(iterator) {
    var x = iterator * 10;
    this.isMouseOnRect(x);
  }
}

function draw() {
  textSize(22)
  textFont("Avenir");
  text(dataValueText, 30, 100);
}


