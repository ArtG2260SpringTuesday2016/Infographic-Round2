//this graph will show who is the tallest in my family, father, mother, or me

var myData = [
    {
      "heights": 175,
      "heavy": 75,
      "genders": "m",
      "names": "cailin"
    },{
      "heights": 162,
      "heavy": 45,
      "genders": "f",
      "names": "lixin"
    },{
      "heights": 179,
      "heavy": 83,
      "genders": "m",
      "names": "david"
    },{
    },
    
  ];



function setup() {
  createCanvas(1000, 500)
  noStroke()
  fill("orange")
   
  var visTotals = function (someData) {
    for (var i = 0; i < someData.length; i++){
       var pointX = i * 50;
       var rectHeight = barHeight * 10;
       var barWidth = 10;
       var spacing = 5 + barWidth;
      var barHeight = someData[i].heights / 10;
      rect(pointX, spacing, barWidth, rectHeight)
    }
   

   
  }
  visTotals(myData);
}

function draw() {

}