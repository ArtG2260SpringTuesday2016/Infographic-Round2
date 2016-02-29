//data is an array of objects consisting of 
//A string "Address"
//A string "EnergyStar_Certified"
//A string EnergyStar_Score
//An integer GHG_Emissions
//A string GHG_Intensity
//An integer Gross_Sq_Ft
//An unknown OnSite_Solar
//A string Owner_Submitted_Info
//A string Owner_Submitted_Link
//A string Percent_Electr
//A string Percent_Gas
//A string Percent_Steam
//A string Property_Name
//A string Property_Type
//A string Property_Uses
//An integer Site_EUI
//A string Site_Energy_Use
//A string Tax_Parcel
//An integer Water_Intensity
//An integer Year_Built
//A string ZIP

//For the purposes of this program only 
//Site_Energy_Use and Year_Built will be used
//in order to compare amount of energy used to the age of the building

var currentYear = 2016;
var age = 50;
var oldYear = currentYear - age;
//These variables will hold the information 
//for either new or old buildings
var Old = [];
var New = [];
//This function takes in data and 
//seperates the Site_Energy_Use based on
// the Year_Built:
// Old (older than 50 years) or
// New (equal or less than 50 years old)

var years = function(ar){
  for(i = 0; i < ar.length; i++){
   if(ar[i].Year_Built < oldYear){
     append(Old, ar[i].Site_Energy_Use)
   }
   else{
     append(New, ar[i].Site_Energy_Use)
   }
  }
}

//This function takes in an array of Site_Energy_Use
//and converts it into an array of numbers
//omitting any that appear as "Not Available"
var convert = function(ar){
  var newAr = [];
  for(i = 0; i < ar.length; i++){
  if (ar[i] != "Not Available"){
    append(newAr, (Number(ar[i].replace("* ",""))))
  }
  }
  return newAr;
}

function setup(){
years(data);
Old = convert(Old);
New = convert(New);

console.log(Old);
console.log(New);
console.log("hello".replace("h","f"));
console.log(Number(" 1".replace(" ","")));



//Compare old:energy to new:energy; two functions; one with all old energies,
//one with all new energies

}