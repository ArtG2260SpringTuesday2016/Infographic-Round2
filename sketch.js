//Kanye: Me vs We

var meWords = ["I","me","Kanye","West"]
var weWords = ["you","we","youre","they", "he","she","them"]

// Splits a string into an array of words
var splitWords = function(aStringOfLyrics) {
  return aStringOfLyrics.toLowerCase().split(" ");
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

var tallyWordInSong = function(aStringOfLyrics) {
  return tallyWordsUp(splitWords(aStringOfLyrics))
}

// sample loop to see how many times Kanye says a word in an "album"
var albumWordCount = function(anAlbum, aWord) {
  var wordCount = 0;

  for (var i = 0; i < anAlbum.length; i++) {
    wordCount += tallyWordInSong(anAlbum[i].lyrics)[aWord] || 0;
  }
  return wordCount;
}

// example accessing songs in first album:
console.log(discography[0].name);
console.log('mentions of "your": ', albumWordCount(discography[0].songs, "your"));




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
