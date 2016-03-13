var stateArea = [
  {"state":"Alaska", "area":571951.26},
{"state":"Texas", "area":261797.12},
{"state":"California", "area":155959.34},
{"state":"Montana", "area":145552.43},
{"state":"New Mexico", "area":121355.53},
{"state":"Arizona", "area":113634.57},
{"state":"Nevada", "area":109825.99},
{"state":"Colorado", "area":103717.53},
{"state":"Wyoming", "area":97100.40},
 {"state":"Oregon", "area":95996.79},
 {"state":"Idaho", "area":82747.21},
 {"state":"Utah", "area":82143.65},
 {"state":"Kansas", "area":81814.88},
 {"state":"Minnesota", "area":79610.08},
 {"state":"Nebraska", "area":76872.41},
 {"state":"South Dakota", "area":75884.64},
 {"state":"North Dakota", "area":68975.93},
 {"state":"Missouri", "area":68885.93},
 {"state":"Oklahoma", "area":68667.06},
 {"state":"Washington", "area":66544.06},
 {"state":"Georgia", "area":57906.14},
 {"state":"Michigan", "area":56803.82},
 {"state":"Iowa", "area":55869.36},
 {"state":"Illinois", "area":55583.58},
 {"state":"Wisconsin", "area":54310.10},
 {"state":"Florida", "area":53926.82},
 {"state":"Arkansas", "area":52068.17},
 {"state":"Alabama", "area":50744.00},
 {"state":"North Carolina", "area":48710.88},
 {"state":"New York", "area":47213.79},
 {"state":"Mississippi", "area":46906.96},
 {"state":"Pennsylvania", "area":44816.61},
 {"state":"Louisiana", "area":43561.85},
 {"state":"Tennessee", "area":41217.12},
 {"state":"Ohio", "area":40948.38},
 {"state":"Kentucky", "area":39728.18},
 {"state":"Virginia", "area":39594.07},
 {"state":"Indiana", "area":35866.90},
 {"state":"Maine", "area":30861.55},
 {"state":"South Carolina", "area":30109.47},
 {"state":"West Virginia", "area":24077.73},
 {"state":"Maryland", "area":9773.82},
 {"state":"Vermont", "area":9249.56},
 {"state":"New Hampshire", "area":8968.10},
 {"state":"Massachusetts", "area":7840.02},
 {"state":"New Jersey", "area":7417.34},
 {"state":"Hawaii", "area":6422.62},
 {"state":"Connecticut", "area":4844.80},
 {"state":"Delaware", "area":1953.56},
 {"state":"Rhode Island", "area":1044.93},
];


var crimeRates = [
  {"state":"Alaska", "crimeRate":4684},
{"state":"Texas", "crimeRate":109414},
{"state":"California", "crimeRate":153709},
{"state":"Montana", "crimeRate":3313},
{"state":"New Mexico", "crimeRate":12459},
{"state":"Arizona", "crimeRate":26916},
{"state":"Nevada", "crimeRate":18045	},
{"state":"Colorado", "crimeRate":16554},
{"state":"Wyoming", "crimeRate":1142},
 {"state":"Oregon", "crimeRate":9224},
 {"state":"Idaho", "crimeRate":3468},
 {"state":"Utah", "crimeRate":6346},
 {"state":"Kansas", "crimeRate":10123},
 {"state":"Minnesota", "crimeRate":12505},
 {"state":"Nebraska", "crimeRate":5275},
 {"state":"South Dakota", "crimeRate":2786},
 {"state":"North Dakota", "crimeRate":1960},
 {"state":"Missouri", "crimeRate":26856},
 {"state":"Oklahoma", "crimeRate":15744},
 {"state":"Washington", "crimeRate":20136},
 {"state":"Georgia", "crimeRate":38097},
 {"state":"Michigan", "crimeRate":42348},
 {"state":"Iowa", "crimeRate":8497},
 {"state":"Illinois", "crimeRate":47663},
 {"state":"Wisconsin", "crimeRate":16714},
 {"state":"Florida", "crimeRate":107521},
 {"state":"Arkansas", "crimeRate":14243},
 {"state":"Alabama", "crimeRate":20727},
 {"state":"North Carolina", "crimeRate":32767},
 {"state":"New York", "crimeRate":75398},
 {"state":"Mississippi", "crimeRate":8338},
 {"state":"Pennsylvania", "crimeRate":40164},
 {"state":"Louisiana", "crimeRate":23934},
 {"state":"Tennessee", "crimeRate":39848},
 {"state":"Ohio", "crimeRate":33030},
 {"state":"Kentucky", "crimeRate":9340},
 {"state":"Virginia", "crimeRate":16340},
 {"state":"Indiana", "crimeRate":24099},
 {"state":"Maine", "crimeRate":1700},
 {"state":"South Carolina", "crimeRate":24052},
 {"state":"West Virginia", "crimeRate":5588},
 {"state":"Maryland", "crimeRate":26661},
 {"state":"Vermont", "crimeRate":622},
 {"state":"New Hampshire", "crimeRate":2602},
 {"state":"Massachusetts", "crimeRate":26399},
 {"state":"New Jersey", "crimeRate":23346},
 {"state":"Hawaii", "crimeRate":3680},
 {"state":"Connecticut", "crimeRate":8522},
 {"state":"Delaware", "crimeRate":4576},
 {"state":"Rhode Island", "crimeRate":2313},
];




var area = function (someData) {
  var rorect1 = rect
  for (var i = 0; i < someData.length; i++){
    var barHeight = someData[i].area/1500;
    var barWidth = 15;
    var margin = barWidth / 2;
    var spacing = i * (margin + barWidth)*1.75;
    fill(102,178,255)
    rorect1(spacing,100, barWidth, barHeight * 10)
  }

}

var crime = function(bunchData){
    for(var i = 0; i < bunchData.length;i++){
    var barHeight = bunchData[i].crimeRate/100;
    var barWidth = 15;
    var margin = barWidth / 2;
    var spacing = i *(margin + barWidth) * 1.75
    fill(255,255,51)
    rect(spacing, 100, barWidth,barHeight)
  }
}

var Name = function(bunchData){
    for(var i = 0; i < bunchData.length;i++){
    var barHeight = bunchData[i].state;
    var barWidth = 15;
    var margin = barWidth / 2;
    var size = 12
    var spacing = i *(margin + barWidth) * 1.75
    fill(255)
    textSize(size)
    text(barHeight,spacing,50)
  }
}
  
  
  
function setup() {
  createCanvas(2000, 2000)
  
}


var draw = function(){
  background(0)
  Name(crimeRates)
    if(mouseIsPressed){
      crime(crimeRates)
    }else{
      area(stateArea)
    }
}

