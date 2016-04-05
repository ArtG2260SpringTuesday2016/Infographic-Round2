
  

  var cityPopulationForGraph = function(cityDataNumber){
    return (cityDataNumber/3000)+50;
  }
  var cityCrimeForGraph = function(cityDataNumber){
    return cityDataNumber/4;
  }
  var dotSize = function(cityDataNumber){
    return cityDataNumber
  }
  
  var makesDataPoint = function(cityDataObject){
    
    var coordXPop = cityPopulationForGraph(cityDataObject.Population);
    var coordYCrime = cityCrimeForGraph(cityDataObject.ViolentCrime);
    var name = dotSize(7)
    
    ellipse(coordXPop,coordYCrime,name,name)
  }
 
  
function setup() {
  createCanvas(1000,600)
  

  for (var i = 0; i < cityData.length; i++){
    makesDataPoint(cityData[i])
  }
  
  


  textSize(20)
  text("City Population", 400,575)
  text("Crime Rate", 20,250,20,100)
}

var dataPointText = "Hover over points for more info"

function draw(){
  var hit=false;
  for (var i = 0; i < cityData.length; i++){
   hit = collidePointCircle(mouseX,mouseY,(cityData[i].Population/3000)+50,cityData[i].ViolentCrime/4,7,7)
  
  if (hit){
    dataPointText =
    "Name: " + cityData[i].City + "\n" + 
    "Population: " + cityData[i].Population + "\n" +
    "Violent Crime Rate: " + cityData[i].ViolentCrime
  }
  }
  text(dataPointText,500,400)
}