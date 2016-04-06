
  

  var cityPopulationForGraph = function(cityDataNumber){
    return (cityDataNumber/3000)+50;
  }
  var cityCrimeForGraph = function(cityDataNumber){
    return height - (cityDataNumber/4)-50;
  }
  var dotSize = function(cityDataNumber){
    return cityDataNumber
  }
  
  var makesDataPoint = function(cityDataObject){
    
    var coordXPop = cityPopulationForGraph(cityDataObject.Population);
    var coordYCrime = cityCrimeForGraph(cityDataObject.ViolentCrime);
    var name = dotSize(8)
    
    fill(200)
    ellipse(coordXPop,coordYCrime,name,name)
  }
 
  
function setup() {
  textFont("Courier") 
  createCanvas(1050,600)
  background(102,130,132)

  for (var i = 0; i < cityData.length; i++){
    makesDataPoint(cityData[i])
  }
  
  


  textSize(30)
  fill(73,55,54)
  strokeWeight(2)
  textStyle(BOLD)
  stroke(200)
  text("City Population", 400,575)
  text("Crime Rate", 10,250,20,100)
  
  strokeWeight(1)
  textSize(20)
  text("42",85,535)
  text("2,120",47,30)
  
  text("180,000",112,557)
  text("2,940,000",925,557)
}

var dataPointText = "              City Crime Data: 2014                          Hover Over Points for More Information"

function draw(){
  
  var hit=false;
  for (var i = 0; i < cityData.length; i++){
   hit = collidePointCircle(mouseX,mouseY,(cityData[i].Population/3000)+50,height-(cityData[i].ViolentCrime/4)-50,8,8)
  
  if (hit){
    dataPointText =
    "Name: " + cityData[i].City + ", " + cityData[i].State + "\n" + 
    "Population: " + cityData[i].Population + " People" + "\n" +
    "Violent Crime Rate: " + cityData[i].ViolentCrime + " Cases per 100,000 People"
  }
  }
  fill(185,215,217)
  noStroke()
  rect(430,60,500,115,40)
  fill(123,59,59)
  textSize(15)
  textStyle(NORMAL)
  text(dataPointText,450,90,500,120)
  
  strokeWeight(2)
  stroke(123,59,59)
  line(110,20,110,580)
  line(20,540,1030,540)
  
  
  //noFill()
  //ellipse((180000/3000)+50,height - (42/4)-50,8,8)
  //ellipse((180000/3000)+50,height - (2120/4)-50,8,8)
  //ellipse((2940000/3000)+50,height - (42/4)-50,8,8)
}