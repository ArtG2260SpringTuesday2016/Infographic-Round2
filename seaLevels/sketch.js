function setup() {
  createCanvas(1000,1000)
  
}

function draw() {
  futureLevels(1);
  line(2,900,980,900);
  line()
  
  
  
}

var seaLevels =[
  {
    name: "boston", 
    "yr": 2016, 
    "deviation": 2.81,
    "currentSealevel":8443970
  },
  {
    name: "new york",
    "yr": 2016,
    "deviation":2.5,
    "currentSealevel":8516945
  },
  {
    name: "san francisco",
    "yr": 2016,
    "deviation":1.92,
    "currentSealevel":9414290
  },
  {
    name: "kaluhaihi",
    "yr": 2016,
    "deviation":2.02, "currentSealevel":1615680
  },
  {
    name: "new orleans",
    "yr": 2016,
    "deviation":4.5,
    "currentSealevel":8761927
  },
  {
    name: "miami",
    "yr": 2016,
    "deviation":2.39,
    "currentSealevel":8723170
  },
  {
    name: "DC",
    "yr": 2016,
    "deviation":3.24,
    "currentSealevel":8594900
  }
]

var num = 0;
var height = 1000;
var width = 1000;



var futureLevels = function(num){
  debugger
  for(var i = 0; i < seaLevels.length; i++){
  var yearChange = seaLevels[i].deviation * num;
  var newLevel = seaLevels[i].currentSealevel + yearChange;
  
  var rectHeight = newLevel / 20000;
  console.log(rectHeight)
  var rectWidth = width / (2 * seaLevels.length);
  console.log(rectWidth)
  
  var spacer= rectWidth + 30
  var xSpacing = i * spacer
 
  fill('#00FFFF');
  noStroke();
  rect(xSpacing + 30, height, rectWidth, rectHeight * -1); 
 
  }
}


