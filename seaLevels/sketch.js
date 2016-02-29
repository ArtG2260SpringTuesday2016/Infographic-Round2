var seaLevels =[{name: "boston", yr: "2016", deviation:[2.81], currentSealevel:[8443970]},
                            {name: "new york", yr: "2016", deviation:[2.5], currentSealevel:[8516945]},
                            {name: "san francisco", yr: "2016", deviation:[1.92], currentSealevel:[9414290]},
                            {name: "kaluhai, hi", yr: "2016", deviation:[2.02], currentSealevel:[1615680]},
                            {name: "new orleans", yr: "2016", deviation:[4.5], currentSealevel:[8761927]},
                            {name: "miami", yr: "2016", deviation:[2.39], currentSealevel:[8723170]},
                            {name: "DC", yr: "2016", deviation:[3.24], currentSealevel:[8594900]}];
                        
                            

function setup() {
  createCanvas(1000,1000)
  
 var futureLevels = function(num){
  
  for(var i = 0; i < seaLevels.length; i++){
  var yearChange = seaLevels[i][0] * num;
  var newLevel = seaLevels[i][1] + yearChange;
  
  var rectHeight = newLevel / height;
  console.log(rectHeight)
  var rectWidth = width / seaLevels.length;
  console.log(rectWidth)
 
  fill('#00FFFF');
  noStroke();
  rect(i * rectWidth, 0, rectWidth, rectHeight); 
 
  }
  
 }
  console.log(futureLevels(10))
}

function draw() {
  
}