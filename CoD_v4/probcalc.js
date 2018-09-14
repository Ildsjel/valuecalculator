/*probability calculation*/
function calculateprobability () {
  var riskpercentageperyear = document.getElementById("avocosrisk").value; /*INPUT FIELD IN HTML*/
  console.log(riskpercentageperyear);
  var weeksperyear = 52; /*The total number of objects is weeks per year which results always in 4 weeks per month. Are more accurate version calcs how many weeks are left for the current year*/
  console.log(weeksperyear);
  var affectedweeksofyear = (riskpercentageperyear * weeksperyear) / 100;
  console.log(affectedweeksofyear);
  /* var roundedaffectedweeksofyear = (affectedweeksofyear).toFixed(0); /*float needs to be cut for math function. otherwise it throws an execption*/
  /*console.log(roundedaffectedweeksofyear);*/
  var probability = affectedweeksofyear / weeksperyear;
  console.log(probability);
  var probabilitypercentage = (probability / weeksperyear) * 100;
  console.log(probabilitypercentage);
  var roundedprobabilitypercentage = (probabilitypercentage).toFixed(1);
  console.log(roundedprobabilitypercentage);

    if (probability !=0){

      document.getElementById("output2").innerHTML=roundedprobabilitypercentage;
    }
    else {
      console.log("error")
    }
}

/*
n = total number of objects in the set / k = Number of objects in the subset for combinations
for binominal distributions this could be helpful:


var possiblecombinations = math.combinations(weeksperyear, roundedaffectedweeksofyear); /*calculates all combinations possible*/
/* console.log(possiblecombinations);
var probability = (affectedweeksofyear / possiblecombinations) * 100; /*Laplace probability calc - Here it seems wrong. could be a bernoulli chain. needs*/
/* console.log(probability);
var roundedprobability = (probability).toFixed(2); /*rounding of percentage to make it readable*/
/* console.log(roundedprobability);
*/
