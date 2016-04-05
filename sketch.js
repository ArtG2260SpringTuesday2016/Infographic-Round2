var albumNames= function(aDiscography) {
  //lists album names
  for (var i = 0; i < aDiscography.length; i++){
    for (var j = 0; j < aDiscography[i].songs.length; j++) {
      text(aDiscography[i].name, aDiscography[i].albumLoc[0],aDiscography[i].albumLoc[1],600,600);

    }
  }
}

// Splits a string into an array of words
var splitWords = function(aStringOfLyrics) {
  return aStringOfLyrics.toLowerCase().split(" ");
}

// Kanye: Me vs We
// Split this string instead of using an array because it's simpler than
// to lowercase an array.
var meWords = splitWords("I me Kanye West")
var weWords = splitWords("you we youre they he she them")

// Takes in an array of words and gives frequency
var tallyWordsUp = function(anArrayOfWords) {
  var wordObject = {};

  // Initalize values in object
  for (var word in anArrayOfWords) {
    wordObject[anArrayOfWords[word]] = 0
  }

  // Tally up occurences
  for (var otherWord in anArrayOfWords) {
    wordObject[anArrayOfWords[otherWord]] += 1
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

// returns an object of objects with counts
var countsOfAnAlbum = function (anAlbum, wordList) {
  var albumCount = {};
  albumCount[anAlbum.name] = {};

  for (var word in wordList) {
    for (var song in anAlbum.songs) {
      albumCount[anAlbum.name][wordList[String(word)]] = albumWordCount(anAlbum.songs, wordList[String(word)]);
    }
  }
  return albumCount;
}

// returns an array of objects with counts
var countsInAllAlbums = function(aDiscography, wordList) {
  var discographyCount = []

  for (var album in aDiscography) {
    discographyCount.push(countsOfAnAlbum(aDiscography[album], wordList));
  }
  return discographyCount;
}

console.log("meWords:")
console.log("  ", countsInAllAlbums(discography, meWords))
console.log("weWords:")
console.log("  ", countsInAllAlbums(discography, weWords))


var hoverOnAlbums = function(aDiscography) {
    for (var i = 0; i < aDiscography.length; i++){
        if((mouseX <= (aDiscography[i].albumLoc[0] + 100)
        && (mouseX >= (aDiscography[i].albumLoc[0] - 15)))
        && ((mouseY <= (aDiscography[i].albumLoc[1] +15))
        && (mouseY >= (aDiscography[i].albumLoc[1]-15)))) {
          fill(51)
          noStroke();
          rect(100, 100, 900, 400, 20)
          fill('hotpink')
          textSize(200);
          text(albumWordCount(aDiscography[i].songs, "me"), 240, 350);
          text(albumWordCount(aDiscography[i].songs, "we"), 690, 350);
        }
    }
}


function setup() {
  createCanvas(1120,600);
  background(51);
  fill('hotpink');
  textSize(25);
  textFont("Oswald");
  text("Kanye: Me vs We", 40, 50);
  albumNames(discography);

}

function draw() {
  // hoverOnAlbums(discography);
}
