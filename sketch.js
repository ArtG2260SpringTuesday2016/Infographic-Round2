var myData = [
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
 {"state":"Washington D. C.", "area":61.4}
];


var crimeRates = [
  {
    "State":"New Mexico",
    "City":"Albuquerque",
    "Population":"558,874",
    "ViolentCrime":"882.8"
  },
  {
    "State":"California",
    "City":"Anaheim",
    "Population":"346,956",
    "ViolentCrime":"317.3"
  },
  {
    "State":"Alaska",
    "City":"Anchorage",
    "Population":"301,306",
    "ViolentCrime":"864.6"
  },
  {
    "State":"Texas",
    "City":"Arlington",
    "Population":"382,976",
    "ViolentCrime":"484.1"
  },
  {
    "State":"Georgia",
    "City":"Atlanta",
    "Population":"454,363",
    "ViolentCrime":"1,227.40"
  },
  {
    "State":"Colorado",
    "City":"Aurora",
    "Population":"350,948",
    "ViolentCrime":"412.6"
  },
  {
    "State":"Texas",
    "City":"Austin",
    "Population":"903,924",
    "ViolentCrime":"396.2"
  },
  {
    "State":"California",
    "City":"Bakersfield",
    "Population":"367,406",
    "ViolentCrime":"456.7"
  },
  {
    "State":"Maryland",
    "City":"Baltimore",
    "Population":"623,513",
    "ViolentCrime":"1,338.50"
  },
  {
    "State":"Massachusetts",
    "City":"Boston",
    "Population":"654,413",
    "ViolentCrime":"725.7"
  },
  {
    "State":"New York",
    "City":"Buffalo",
    "Population":"258,419",
    "ViolentCrime":"1,228.20"
  },
  {
    "State":"Arizona",
    "City":"Chandler",
    "Population":"252,369",
    "ViolentCrime":"184.7"
  },
  {
    "State":"North Carolina",
    "City":"Charlotte-Mecklenburg",
    "Population":"856,916",
    "ViolentCrime":"589.8"
  },
  {
    "State":"California",
    "City":"Chula Vista",
    "Population":"259,894",
    "ViolentCrime":"235.5"
  },
  {
    "State":"Illinois",
    "City":"Chicago",
    "Population":"2,724,121",
    "ViolentCrime":"884.3"
  },
  {
    "State":"Ohio",
    "City":"Cincinnati",
    "Population":"297,671",
    "ViolentCrime":"905.4"
  },
  {
    "State":"Ohio",
    "City":"Cleveland",
    "Population":"388,655",
    "ViolentCrime":"1,334.30"
  },
  {
    "State":"Colorado",
    "City":"Colorado Springs",
    "Population":"444,949",
    "ViolentCrime":"458.3"
  },
  {
    "State":"Ohio",
    "City":"Columbus",
    "Population":"830,811",
    "ViolentCrime":"549.2"
  },
  {
    "State":"Texas",
    "City":"Corpus Christi",
    "Population":"319,211",
    "ViolentCrime":"656"
  },
  {
    "State":"Texas",
    "City":"Dallas",
    "Population":"1,272,396",
    "ViolentCrime":"664.7"
  },
  {
    "State":"Colorado",
    "City":"Denver",
    "Population":"665,353",
    "ViolentCrime":"598.6"
  },
  {
    "State":"Michigan",
    "City":"Detroit",
    "Population":"684,694",
    "ViolentCrime":"1,988.60"
  },
  {
    "State":"Texas",
    "City":"El Paso",
    "Population":"680,273",
    "ViolentCrime":"392.6"
  },
  {
    "State":"Indiana",
    "City":"Fort Wayne",
    "Population":"257,172",
    "ViolentCrime":"317.3"
  },
  {
    "State":"Texas",
    "City":"Fort Worth*",
    "Population":"789,035",
    "ViolentCrime":"560.2"
  },
  {
    "State":"California",
    "City":"Fresno",
    "Population":"513,187",
    "ViolentCrime":"464.2"
  },
  {
    "State":"North Carolina",
    "City":"Greensboro",
    "Population":"282,203",
    "ViolentCrime":"477"
  },
  {
    "State":"Nevada",
    "City":"Henderson",
    "Population":"274,121",
    "ViolentCrime":"164.9"
  },
  {
    "State":"Texas",
    "City":"Houston",
    "Population":"2,219,933",
    "ViolentCrime":"991.4"
  },
  {
    "State":"Indiana",
    "City":"Indianapolis",
    "Population":"858,238",
    "ViolentCrime":"1,254.70"
  },
  {
    "State":"Florida",
    "City":"Jacksonville",
    "Population":"856,021",
    "ViolentCrime":"683.7"
  },
  {
    "State":"New Jersey",
    "City":"Jersey City",
    "Population":"260,005",
    "ViolentCrime":"531.1"
  },
  {
    "State":"Missouri",
    "City":"Kansas City",
    "Population":"468,417",
    "ViolentCrime":"1,251.40"
  },
  {
    "State":"Texas",
    "City":"Laredo",
    "Population":"250,994",
    "ViolentCrime":"388.9"
  },
  {
    "State":"Nevada",
    "City":"Las Vegas",
    "Population":"1,530,899",
    "ViolentCrime":"841.1"
  },
  {
    "State":"Kentucky",
    "City":"Lexington",
    "Population":"311,848",
    "ViolentCrime":"333.8"
  },
  {
    "State":"Nebraska",
    "City":"Lincoln",
    "Population":"271,208",
    "ViolentCrime":"338.5"
  },
  {
    "State":"California",
    "City":"Long Beach",
    "Population":"471,123",
    "ViolentCrime":"489"
  },
  {
    "State":"California",
    "City":"Los Angeles",
    "Population":"3,906,772",
    "ViolentCrime":"490.7"
  },
  {
    "State":"Kentucky",
    "City":"Louisville Metro",
    "Population":"677,710",
    "ViolentCrime":"591"
  },
  {
    "State":"Tennessee",
    "City":"Memphis",
    "Population":"654,922",
    "ViolentCrime":"1,740.50"
  },
  {
    "State":"Arizona",
    "City":"Mesa",
    "Population":"462,092",
    "ViolentCrime":"458.6"
  },
  {
    "State":"Florida",
    "City":"Miami",
    "Population":"421,996",
    "ViolentCrime":"1,060.00"
  },
  {
    "State":"Wisconsin",
    "City":"Milwaukee",
    "Population":"600,374",
    "ViolentCrime":"1,476.40"
  },
  {
    "State":"Minnesota",
    "City":"Minneapolis",
    "Population":"404,461",
    "ViolentCrime":"1,012.00"
  },
  {
    "State":"Alabama",
    "City":"Mobile",
    "Population":"250,655",
    "ViolentCrime":"593.6"
  },
  {
    "State":"Tennessee",
    "City":"Nashville",
    "Population":"647,689",
    "ViolentCrime":"1,122.50"
  },
  {
    "State":"Louisiana",
    "City":"New Orleans",
    "Population":"387,113",
    "ViolentCrime":"973.9"
  },
  {
    "State":"New York",
    "City":"New York",
    "Population":"8,473,938",
    "ViolentCrime":"596.7"
  },
  {
    "State":"New Jersey",
    "City":"Newark",
    "Population":"279,110",
    "ViolentCrime":"1,077.70"
  },
  {
    "State":"California",
    "City":"Oakland",
    "Population":"409,994",
    "ViolentCrime":"1,685.40"
  },
  {
    "State":"Oklahoma",
    "City":"Oklahoma City",
    "Population":"617,975",
    "ViolentCrime":"773.8"
  },
  {
    "State":"Nebraska",
    "City":"Omaha",
    "Population":"438,465",
    "ViolentCrime":"560.6"
  },
  {
    "State":"Florida",
    "City":"Orlando",
    "Population":"259,675",
    "Violent Crime":"901.1"
  },
  {
    "State":"Pennsylvania",
    "City":"Philadelphia",
    "Population":"1,559,062",
    "ViolentCrime":"1,021.40"
  },
  {
    "State":"Arizona",
    "City":"Phoenix",
    "Population":"1,529,852",
    "ViolentCrime":"571.9"
  },
  {
    "State":"Pennsylvania",
    "City":"Pittsburgh",
    "Population":"307,613",
    "ViolentCrime":"798.1"
  },
  {
    "State":"Texas",
    "City":"Plano",
    "Population":"277,822",
    "Violent Crime":"165.2"
  },
  {
    "State":"Oregon",
    "City":"Portland",
    "Population":"615,672",
    "ViolentCrime":"472.8"
  },
  {
    "State":"North Carolina",
    "City":"Raleigh*",
    "Population":"428,993",
    "ViolentCrime":"392.3"
  },
  {
    "State":"California",
    "City":"Riverside",
    "Population":"319,453",
    "Violent Crime":"433.2"
  },
  {
    "State":"California",
    "City":"Sacramento",
    "Population":"482,767",
    "ViolentCrime":"614.8"
  },
  {
    "State":"Texas",
    "City":"San Antonio",
    "Population":"1,428,465",
    "ViolentCrime":"539.3"
  },
  {
    "State":"California",
    "City":"San Diego",
    "Population":"1,368,690",
    "ViolentCrime":"380.9"
  },
  {
    "State":"California",
    "City":"San Francisco",
    "Population":"850,294",
    "ViolentCrime":"795.1"
  },
  {
    "State":"California",
    "City":"San Jose",
    "Population":"1,009,679",
    "ViolentCrime":"321.1"
  },
  {
    "State":"California",
    "City":"Santa Ana",
    "Population":"336,462",
    "ViolentCrime":"374.5"
  },
  {
    "State":"Washington",
    "City":"Seattle",
    "Population":"663,410",
    "ViolentCrime":"603.1"
  },
  {
    "State":"Missouri",
    "City":"St. Louis",
    "Population":"318,574",
    "ViolentCrime":"1,678.70"
  },
  {
    "State":"Minnesota",
    "City":"St. Paul",
    "Population":"297,984",
    "ViolentCrime":"662.5"
  },
  {
    "State":"Florida",
    "City":"St. Petersburg",
    "Population":"250,772",
    "ViolentCrime":"864.9"
  },
  {
    "State":"California",
    "City":"Stockton",
    "Population":"299,519",
    "Violent Crime":"1,331.50"
  },
  {
    "State":"Florida",
    "City":"Tampa",
    "Population":"357,124",
    "Violent Crime":"582.4"
  },
  {
    "State":"Ohio",
    "City":"Toledo",
    "Population":"281,150",
    "Violent Crime":"1,091.20"
  },
  {
    "State":"Arizona",
    "City":"Tucson*",
    "Population":"525,486",
    "ViolentCrime":"640.9"
  },
  {
    "State":"Oklahoma",
    "City":"Tulsa",
    "Population":"399,556",
    "ViolentCrime":"805.1"
  },
  {
    "State":"Virginia",
    "City":"Virginia Beach",
    "Population":"451,102",
    "ViolentCrime":"146.3"
  },
  {
    "State":"District of Columbia",
    "City":"Washington",
    "Population":"658,893",
    "ViolentCrime":"1,185.30"
  },
  {
    "State":"Kansas",
    "City":"Wichita*",
    "Population":"386,486",
    "ViolentCrime":"793"
  }
];





var area = function (someData) {
  for (var i = 0; i < someData.length; i++){
    var barHeight = someData[i].area/1500;
    var barWidth = 15;
    var margin = barWidth / 2;
    var spacing = i * (margin + barWidth)*1.5;

    rect(spacing,0, barWidth, barHeight * 10)
  }
}

var crime = function(bunchData){
    for(var i = 0; i < bunchData.length;i++){
    var barHeight = bunchData[i].ViolentCrime/5;
    var barWidth = 15;
    var margin = barWidth / 2;
    var spacing = i *(margin + barWidth) * 1.5
    rect(spacing, 0, barWidth,barHeight)
  }
}

  
  
  
  
function setup() {
  createCanvas(2000, 2000)

  
  
}

function draw() {
if (mouseIsPressed)
  crime(crimeRates)
  else area(myData)
}