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

var title = function(){
  textSize(50)
  text("?who is taller?",50,50)
  fill(100)
}
var dad = function(){
  textSize(50)
  text("dad",50,500)
  fill(80)
}
var mom = function(){
  textSize(50)
  text("mom",150,500)
  fill(100)
}
var me = function(){
  textSize(50)
  text("me",270,500)
  fill(120)
}

var fifty = function(){
  textSize(30)
  text("50",520,420)
  fill(120)
}

var hundred = function(){
  textSize(30)
  text("50",520,370)
  fill(120)
}

var hundredfifty = function(){
  textSize(30)
  text("150",520,320)
  fill(120)
}
 
 var legend = function(){
  textSize(20)
  text("height in cm",300,80)
  fill(120) 
  
}
function setup() {
  createCanvas(1000, 500)
  noStroke()
  fill("orange")

  
  

  
  var visTotals = function (someData) {
    for (var i = 0; i < someData.length; i++){
       var pointX = i * 100;
       var rectHeight = barHeight * 10;
       var barWidth = 10;
       var spacing = 450 + barWidth;
      var barHeight = someData[i].heights / 10;
      rect(pointX, spacing, barWidth, -rectHeight)
    }
   


   
  }
  visTotals(myData);
}

var draw = function(){
  
rect(20,410,500,5)
rect(20,360,500,5)
rect(20,310,500,5)
title()
dad()
mom()
me()
legend()
fifty()
hundred()
hundredfifty()
}
