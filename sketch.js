//Kanye: Me vs We
var meWords = ["I","me","Kanye","West","Ye","mine","Mr.West","Mr. West","I'll","I'm","Im","Yeezy"];
var weWords = ["you","we","youre","they", "he","she","them","you're","his","her"];
var godWords = ["god","God", "jesus", "Jesus", "God's","Lord"];

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

// Takes in an array of words and gives frequency
var tallyWordsUp = function(anArrayOfWords) {
  var wordObject = {};

  // Initalize values in object
  for (word in anArrayOfWords) {
    wordObject[anArrayOfWords[word]] = 0;
  }

  // Tally up occurences
  for (word in anArrayOfWords) {
    wordObject[anArrayOfWords[word]] += 1;
  }
  return wordObject;
  
}


var wordCounts = function (firstList, anArrayOfWords) {
anArrayOfWords = tallyWordsUp(anArrayOfWords)
  var tempList = {};

  for (var i = 0; i < firstList.length; i++) {
    var currentWord = anArrayOfWords[firstList[i]];
    if ( currentWord !== false ||  currentWord !== undefined || currentWord !== null) {
        tempList[currentWord] = 0;
    }
  }
    for (var i = 0; i < firstList.length; i++) {
    var currentWord = anArrayOfWords[firstList[i]];
    if ( currentWord !== false ||  currentWord !== undefined || currentWord !== null) {
        tempList[currentWord] += 1;
      }
      return tempList;
    }
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

// Example accessing songs in first album:
// console.log(discography[0].name);
// console.log('  mentions of "you": ', albumWordCount(discography[0].songs, "we"));
// console.log('  mentions of "me": ', albumWordCount(discography[0].songs, "me"));

// // Another sample to see this in every album
// var countsInAllAlbums = function(aDiscography) {
//   for (var i = 0; i < aDiscography.length; i++) {
//     console.log(aDiscography[i].name)
//     console.log('  mentions of "we": ', albumWordCount(aDiscography[i].songs, "we"));
//     console.log('  mentions of "me": ', albumWordCount(aDiscography[i].songs, "me"));
//   }
// }

// countsInAllAlbums(discography);

var hoverOnAlbums = function(aDiscography) {
    for (var i = 0; i < aDiscography.length; i++){
        if((mouseX <= (aDiscography[i].albumLoc[0] + 100) 
        && (mouseX >= (aDiscography[i].albumLoc[0] - 15))) 
        && ((mouseY <= (aDiscography[i].albumLoc[1] +15)) 
        && (mouseY >= (aDiscography[i].albumLoc[1]-15)))) {
          fill(51)
          noStroke();
          rect(10, 100, 1200, 400, 20);
          fill('#bada55');
          textSize(200);
          
          text(albumWordCount(aDiscography[i].songs, "me"), 50, 400);
          text(albumWordCount(aDiscography[i].songs, "we"), 470, 400);
          text(albumWordCount(aDiscography[i].songs, "god"), 890, 400);
          
        }
    }
}


function setup() {
  createCanvas(1120,600);
  background(51);
  fill('bada55');
  textSize(25);
  textFont("Oswald");
  text("Kanye: Me vs We vs God", 40, 50);
  textSize(15);
  text("who does Kanye reference most?", 40, 90)
  textSize(12);
  albumNames(discography);
  
}

function draw() {
  hoverOnAlbums(discography);
}