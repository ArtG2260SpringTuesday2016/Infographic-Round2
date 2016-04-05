var hit = false;
var obj = {};
for (var i = 0; i < thehits.length; i++) {
   obj[thehits[i]] = (obj[thehits[i]] || 0) + 1;
}
function setup() {
  createCanvas(1200, 500);
 
  
 var visTotals = function (obj) { 
   var j = 0;
 for (var prop in obj){
      var barHeight = obj[prop];
      var rectWidth=3;
      rectHeight=barHeight * -10;
      var spacing=j * (1 + rectWidth);
      rect(spacing, 500, rectWidth, rectHeight);
      j++
      
    }
    
         hit = collidePointRect(mouseX,mouseY,visTotals);
          if(hit){
		      fill('purple')
	        }else{
		      fill('green')
        	}
        }
  }
  visTotals(obj);
}




function draw(){
	noStroke();
	rect(400,100,200,100);



	if(hit){ //change color!
		fill('purple')
	}else{
		fill('green')
	}
}
