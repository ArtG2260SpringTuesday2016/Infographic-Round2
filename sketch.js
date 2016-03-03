
// Snowfall in inches in Boston, MA on each day in January over the included years (2010-2016)
function setup(){
  createCanvas(1500, 1000)
  
  // snowInjan
  drawRectangleHelpers();
}
//var snowInJanuary = snowInjan


function calculateAvg(snowInjan){
  
  var avgSnowfall = {};
  
  // array for loop
  for (var i = 0; i < snowInjan.length; i++) {
   // represents a dictionary for the current year 
    var currentYear = snowInjan[i];
    // dictionary for loops
    for (var key in currentYear) {
      // key == "1" or "2" or "3", currentYear[key] == 0.006   (snowfall # in inches)
      // check if key already exists in dictionary 
      // -- if yes then update the value to be the new avg
      // if no then add the new key and value
      if (key in avgSnowfall) {
        avgSnowfall[key].push(currentYear[key]);
        
        // dict = {"1" : [6, 7, 8, 9, 10],
        //          "2" : [.006, .7, .4]}
      }
      else {
        // dict = {"1" : [6]}
        avgSnowfall[key] = [ currentYear[key] ];
        }
      }
    }
  
  // go through our new dictionary
  for(var key in avgSnowfall) {
    var valuesInArray = avgSnowfall[key];
  //  console.log('key: ' + key + ' -- ' + valuesInArray);
    var divisor = valuesInArray.length;
    var dividend = 0;
    // go through the array and sum up each element
    for (var i = 0; i < valuesInArray.length; i++) {
      if(valuesInArray[i] != -9999.000) {
        dividend += valuesInArray[i];
      }
    }
    
    // get the average for this day
    var avg = dividend/divisor;
    
    // update the value in the key value pair of the dictionary
    avgSnowfall[key] = avg;
  }
  return avgSnowfall;
}

  
  
function drawRectangleHelpers() {

  var avgSnowfall= calculateAvg(snowInJanuary);
  //   {
  //    "1" : .0056,
  //    "2" : .763, ...
  //  }
  
  for (var key in avgSnowfall) {
    var day = key;
    var avgValue = avgSnowfall[key];
    drawRectangle(day, avgValue);
  }

}
  
function drawRectangle(day, value) {
  var yCoord = 950-(value*100);
  var xCoord = (day * 25) + 250;
  
  rect(xCoord, yCoord, 15, value*100);
  text(day, xCoord, 980);
  text(value, xCoord, yCoord + 10);
}




