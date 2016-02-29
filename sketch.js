var cityData = [
  {
    "State":"New Mexico",
    "City":"Albuquerque",
    "Population":558874,
    "Violent Crime":882.8
  },
  {
    "State":"California",
    "City":"Anaheim",
    "Population":346956,
    "Violent Crime":317.3
  },
  {
    "State":"Alaska",
    "City":"Anchorage",
    "Population":301306,
    "Violent Crime":864.6
  },
  {
    "State":"Texas",
    "City":"Arlington",
    "Population":382976,
    "Violent Crime":484.1
  },
  {
    "State":"Georgia",
    "City":"Atlanta",
    "Population":454363,
    "Violent Crime":1227.40
  },
  {
    "State":"Colorado",
    "City":"Aurora",
    "Population":350948,
    "Violent Crime":412.6
  },
  {
    "State":"Texas",
    "City":"Austin",
    "Population":903924,
    "Violent Crime":396.2
  },
  {
    "State":"California",
    "City":"Bakersfield",
    "Population":367406,
    "Violent Crime":456.7
  },
  {
    "State":"Maryland",
    "City":"Baltimore",
    "Population":623513,
    "Violent Crime":1338.50
  },
  {
    "State":"Massachusetts",
    "City":"Boston",
    "Population":654413,
    "Violent Crime":725.7
  },
  {
    "State":"New York",
    "City":"Buffalo",
    "Population":258419,
    "Violent Crime":1228.20
  },
  {
    "State":"Arizona",
    "City":"Chandler",
    "Population":252369,
    "Violent Crime":184.7
  },
  {
    "State":"North Carolina",
    "City":"Charlotte-Mecklenburg",
    "Population":856916,
    "Violent Crime":589.8
  },
  {
    "State":"California",
    "City":"Chula Vista",
    "Population":259894,
    "Violent Crime":235.5
  },
  {
    "State":"Illinois",
    "City":"Chicago",
    "Population":2724121,
    "Violent Crime":884.3
  },
  {
    "State":"Ohio",
    "City":"Cincinnati",
    "Population":297671,
    "Violent Crime":905.4
  },
  {
    "State":"Ohio",
    "City":"Cleveland",
    "Population":388655,
    "Violent Crime":1334.30
  },
  {
    "State":"Colorado",
    "City":"Colorado Springs",
    "Population":444949,
    "Violent Crime":458.3
  },
  {
    "State":"Ohio",
    "City":"Columbus",
    "Population":830811,
    "Violent Crime":549.2
  },
  {
    "State":"Texas",
    "City":"Corpus Christi",
    "Population":319211,
    "Violent Crime":656
  },
  {
    "State":"Texas",
    "City":"Dallas",
    "Population":1272396,
    "Violent Crime":664.7
  },
  {
    "State":"Colorado",
    "City":"Denver",
    "Population":665353,
    "Violent Crime":598.6
  },
  {
    "State":"Michigan",
    "City":"Detroit",
    "Population":684694,
    "Violent Crime":1988.60
  },
  {
    "State":"Texas",
    "City":"El Paso",
    "Population":680273,
    "Violent Crime":392.6
  },
  {
    "State":"Indiana",
    "City":"Fort Wayne",
    "Population":257172,
    "Violent Crime":317.3
  },
  {
    "State":"Texas",
    "City":"Fort Worth*",
    "Population":789035,
    "Violent Crime":560.2
  },
  {
    "State":"California",
    "City":"Fresno",
    "Population":513187,
    "Violent Crime":464.2
  },
  {
    "State":"North Carolina",
    "City":"Greensboro",
    "Population":282203,
    "Violent Crime":477
  },
  {
    "State":"Nevada",
    "City":"Henderson",
    "Population":274121,
    "Violent Crime":164.9
  },
  {
    "State":"Texas",
    "City":"Houston",
    "Population":2219933,
    "Violent Crime":991.4
  },
  {
    "State":"Indiana",
    "City":"Indianapolis",
    "Population":858238,
    "Violent Crime":1254.70
  },
  {
    "State":"Florida",
    "City":"Jacksonville",
    "Population":856021,
    "Violent Crime":683.7
  },
  {
    "State":"New Jersey",
    "City":"Jersey City",
    "Population":260005,
    "Violent Crime":531.1
  },
  {
    "State":"Missouri",
    "City":"Kansas City",
    "Population":468417,
    "Violent Crime":1251.40
  },
  {
    "State":"Texas",
    "City":"Laredo",
    "Population":250994,
    "Violent Crime":388.9
  },
  {
    "State":"Nevada",
    "City":"Las Vegas",
    "Population":1530899,
    "Violent Crime":841.1
  },
  {
    "State":"Kentucky",
    "City":"Lexington",
    "Population":311848,
    "Violent Crime":333.8
  },
  {
    "State":"Nebraska",
    "City":"Lincoln",
    "Population":271208,
    "Violent Crime":338.5
  },
  {
    "State":"California",
    "City":"Long Beach",
    "Population":471123,
    "Violent Crime":489
  },
  {
    "State":"California",
    "City":"Los Angeles",
    "Population":3906772,
    "Violent Crime":490.7
  },
  {
    "State":"Kentucky",
    "City":"Louisville Metro",
    "Population":677710,
    "Violent Crime":591
  },
  {
    "State":"Tennessee",
    "City":"Memphis",
    "Population":654922,
    "Violent Crime":1740.50
  },
  {
    "State":"Arizona",
    "City":"Mesa",
    "Population":462092,
    "Violent Crime":458.6
  },
  {
    "State":"Florida",
    "City":"Miami",
    "Population":421996,
    "Violent Crime":1060.00
  },
  {
    "State":"Wisconsin",
    "City":"Milwaukee",
    "Population":600374,
    "Violent Crime":1476.40
  },
  {
    "State":"Minnesota",
    "City":"Minneapolis",
    "Population":404461,
    "Violent Crime":1012.00
  },
  {
    "State":"Alabama",
    "City":"Mobile",
    "Population":250655,
    "Violent Crime":593.6
  },
  {
    "State":"Tennessee",
    "City":"Nashville",
    "Population":647689,
    "Violent Crime":1122.50
  },
  {
    "State":"Louisiana",
    "City":"New Orleans",
    "Population":387113,
    "Violent Crime":973.9
  },
  {
    "State":"New York",
    "City":"New York",
    "Population":8473938,
    "Violent Crime":596.7
  },
  {
    "State":"New Jersey",
    "City":"Newark",
    "Population":279110,
    "Violent Crime":1077.70
  },
  {
    "State":"California",
    "City":"Oakland",
    "Population":409994,
    "Violent Crime":1685.40
  },
  {
    "State":"Oklahoma",
    "City":"Oklahoma City",
    "Population":617975,
    "Violent Crime":773.8
  },
  {
    "State":"Nebraska",
    "City":"Omaha",
    "Population":438465,
    "Violent Crime":560.6
  },
  {
    "State":"Florida",
    "City":"Orlando",
    "Population":259675,
    "Violent Crime":901.1
  },
  {
    "State":"Pennsylvania",
    "City":"Philadelphia",
    "Population":1559062,
    "Violent Crime":1021.40
  },
  {
    "State":"Arizona",
    "City":"Phoenix",
    "Population":1529852,
    "Violent Crime":571.9
  },
  {
    "State":"Pennsylvania",
    "City":"Pittsburgh",
    "Population":307613,
    "Violent Crime":798.1
  },
  {
    "State":"Texas",
    "City":"Plano",
    "Population":277822,
    "Violent Crime":165.2
  },
  {
    "State":"Oregon",
    "City":"Portland",
    "Population":615672,
    "Violent Crime":472.8
  },
  {
    "State":"North Carolina",
    "City":"Raleigh*",
    "Population":428993,
    "Violent Crime":392.3
  },
  {
    "State":"California",
    "City":"Riverside",
    "Population":319453,
    "Violent Crime":433.2
  },
  {
    "State":"California",
    "City":"Sacramento",
    "Population":482767,
    "Violent Crime":614.8
  },
  {
    "State":"Texas",
    "City":"San Antonio",
    "Population":1428465,
    "Violent Crime":539.3
  },
  {
    "State":"California",
    "City":"San Diego",
    "Population":1368690,
    "Violent Crime":380.9
  },
  {
    "State":"California",
    "City":"San Francisco",
    "Population":850294,
    "Violent Crime":795.1
  },
  {
    "State":"California",
    "City":"San Jose",
    "Population":1009679,
    "Violent Crime":321.1
  },
  {
    "State":"California",
    "City":"Santa Ana",
    "Population":336462,
    "Violent Crime":374.5
  },
  {
    "State":"Washington",
    "City":"Seattle",
    "Population":663410,
    "Violent Crime":603.1
  },
  {
    "State":"Missouri",
    "City":"St. Louis",
    "Population":318574,
    "Violent Crime":1678.70
  },
  {
    "State":"Minnesota",
    "City":"St. Paul",
    "Population":297984,
    "Violent Crime":662.5
  },
  {
    "State":"Florida",
    "City":"St. Petersburg",
    "Population":250772,
    "Violent Crime":864.9
  },
  {
    "State":"California",
    "City":"Stockton",
    "Population":299519,
    "Violent Crime":1331.50
  },
  {
    "State":"Florida",
    "City":"Tampa",
    "Population":357124,
    "Violent Crime":582.4
  },
  {
    "State":"Ohio",
    "City":"Toledo",
    "Population":281150,
    "Violent Crime":1091.20
  },
  {
    "State":"Arizona",
    "City":"Tucson",
    "Population":525486,
    "Violent Crime":640.9
  },
  {
    "State":"Oklahoma",
    "City":"Tulsa",
    "Population":399556,
    "Violent Crime":805.1
  },
  {
    "State":"Virginia",
    "City":"Virginia Beach",
    "Population":451102,
    "Violent Crime":146.3
  },
  {
    "State":"District of Columbia",
    "City":"Washington",
    "Population":658893,
    "Violent Crime":1185.3
  },
  {
    "State":"Kansas",
    "City":"Wichita",
    "Population":386486,
    "Violent Crime":793.0
  }
  ];
  
function setup() {
  createCanvas(800,800)
  

    for (var i = 0; i < cityData.length; i++){
    var coordXPop = cityData[i][3];
    var coordYCrime = cityData[i][4];
    
    ellipse(coordXPop/10000,coordYCrime/10,20,20)
   }
  
}