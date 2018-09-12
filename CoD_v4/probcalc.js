/*probability calculation*/
function calculateprobability () {
  var riskpercentageperyear = document.getElementById("avocosrisk"); /*INPUT FIELD IN HTML*/
  var weeksperyear = 52; /*The total number of objects is weeks per year which results always in 4 weeks per month*/
  var affectedweeksofyear = (riskpercentageperyear * weeksperyear) / 100;
  var possiblecombinations = math.combinations(weeksperyear, affectedweeksofyear); /*!!THIS IS DOESNT WORK BECAUSE IT EXPECTS INTS!!*/
  var probability = possiblecombinations;

    if (probability !=0){

      document.getElementById("output2").innerHTML=probability;
    }
    else {
      console.log("error")
    }
}

/*
n = total number of objects in the set / k = Number of objects in the subset for combinations

*/
