//Kanye: Me vs We 

function setup() {
  createCanvas(600,600);
  background(51);
}

function draw() {
  kanye();
}


  
  function kanye() {
  
  var discography = [
  {album: "The College Dropout", song: "Intro", albumLoc: [30,500], lyrics: ""},
  {album: "The College Dropout", song: "We Don't Care", albumLoc: [100,500], lyrics: "Oh yeah, I've got the perfect song for the kids to sing And all my people that's... Drug dealin' just to get by Stack ya' money 'til it get sky high (Kids, sing! Kids, sing!) We wasn't s'posed to make it past 25 Joke's on you, we still alive Throw your hands up in the sky and say: We don't care what people say If this is your first time hearin' this You are about to experience somethin' so cold, man We never had nothin' handed, took nothin' for granted Took nothin' from no man, man, I'm my own man But as a shorty I looked up to the dopeman Only adult man I knew that wasn't broke, man Flickin' Starter coats, man Man, you don't know, man We don't care what people say This is for my niggas outside all winter Cause this summer they ain't finna say: next summer I'm finna Sittin' in the hood like community colleges This dope money here is Lil' Trey's scholarship Cause ain't no tuition for having no ambition And ain't no loans for sittin' your ass at home So we forced to sell crack, rap, and get a job You gotta do somethin' man, your ass is grown The second verse is for my dogs workin' 9 to 5 that still hustle Cause a nigga can't shine off $6.55 And everybody sellin' makeup, Jacob's And bootlegged tapes just to get they cake up We put shit on layaway, then come back We claim other people kids on our income tax We take that money, cop work, then push packs to get paid And we don't care what people say Momma say she wanna move South Scratchin' lottery tickets, eyes on a new house 'Round the same time, Doe ran up in dude house Couldn't get a job, so since he couldn't get work He figured he'd take work The drug game bulimic, it's hard to get weight A nigga's money is homo, it's hard to get straight But we gon' keep bakin' til the day we get cake And we don't care what people say You know the kids gon' act a fool When you stop the programs for after school And they DCFS, some of 'em dyslexic They favorite 50 Cent song 12 Questions We scream: rocks, blow, weed, park, see, now we smart We ain't retards, the way teachers thought Hold up, hold fast, we make more cash Now tell my momma I belong in that slow class Sad enough we on welfare They tryna put me on the school bus with the space for the wheelchair I'm tryna get the car with the chromie wheels here They tryna cut our lights out like we don't live here Look what was handed us, fathers abandoned us When we get them hammers, go on, call the ambulance Sometimes I feel no one in this world understands us But we don't care what people say My niggas"},
  ];
  
  for(var i = 0; i < discography.length; i++) {
    fill('hotpink');
    textSize(15);
    text(discography[i].album, discography[i].albumLoc[0], discography[i].albumLoc[1], 600, 600);
    
    //textSize(10);
    //text(discography[i].song, discography[i].albumLoc[0] + 50, discography[i].albumLoc[1], 600, 600);
    
    for(var j = 0; j < discography.length; j++) {
      var rectHeight = 100;
      var rectWidth = 20;
      noStroke();
      fill('hotpink');
      rect((discography[i].albumLoc[0] + 30),(discography[i].albumLoc[1] - 80),rectWidth,rectHeight);
      
    } 
  } 
}
/*
 for(i = 0; i < gdpArray.length; i++){
    fill('white');
    textSize(10);
    text(gdpArray[i].name, gdpArray[i].textLoc[0], gdpArray[i].textLoc[1], 600,600)
    text(gdpArray[i].gdpText, gdpArray[i].textLoc[0], gdpArray[i].textLoc[1] + 20, 600,600)

    for(j = 0; j < gdpArray.length; j++){
      var circDim = gdpArray[i].gdp/2000;
      noStroke();
      fill('yellow');
      ellipse((gdpArray[i].textLoc[0] + 30),(gdpArray[i].textLoc[1] - 150),circDim,circDim);
      //console.log(gdpArray[i].gdp[j]);
    }
  }*/