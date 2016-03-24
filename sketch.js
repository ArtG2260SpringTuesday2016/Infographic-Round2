//Kanye: Me vs We

var meWords = ["I","me","Kanye","West"]
var weWords = ["you","we","youre","they", "he","she","them"]

// Splits a string into an array of words
var splitWords = function(aString) {
  return aString.split(" ");
}

// Takes in an array of words and gives frequency
var tallyWordsUp = function(anArrayOfWords) {
  var wordObject = {};

  // Initalize values in object
  for (word in anArrayOfWords) {
    wordObject[anArrayOfWords[word]] = 0
  }

  // Tally up occurences
  for (word in anArrayOfWords) {
    wordObject[anArrayOfWords[word]] += 1
  }
  return wordObject;
}




function setup() {
  createCanvas(1120,600);
  background(51);
  fill('hotpink');
  textSize(25);
  textFont("Helvetica")
  text("Kanye: Me vs We", 40, 50);
  textSize(12);
}

function draw() {

}
