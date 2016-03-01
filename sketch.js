var data = thehits.split(' ');
for (var i = 0; i < data.length; i++) {
  data[i] = data[i].length;
}

var obj = {};
for (var i = 0, j = data.length; i < j; i++) {
   obj[data[i]] = (obj[data[i]] || 0) + 1;
}

console.log(obj);

function setup() {
  createCanvas(600,600)
  for (var i = 0; i < obj.length; i++){
    fill(0, obj[i]*5);
    noStroke();
    rect(100 , (i*10)+100, 1000, 10);
 }
}


  


