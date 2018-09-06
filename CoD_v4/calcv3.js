
/*function to get value type*/

function valueType() {

	/*case 1 - needs to be a Switch Statement -
	runs when the user input is = "reducecost"*/

	/*type reduce cost*/

	if (redcos.checked){
		var manpower = prompt("Please enter how many people are involved in the current process", "10");
		var timespent = prompt("Please enter how many hours a week the process takes", "10");

			if (manpower != 0){
				var redcostotal = manpower*timespent;
				}
			else {
				console.log("Error");
			}
			document.getElementById("output").innerHTML=redcostotal;

}

/*type cost avoided*/

	else if (avocos.checked){
		var totalcostavoided = prompt("Please enter how much cost in total will be avoided", "10");
		var totalcosttime = prompt("Please enter when the cost will occur", "10.10.18");

			if (totalcostavoided != 0){
				var avocostotal = totalcostavoided;
				}
			else {
				console.log("Error");
			}
			document.getElementById("output").innerHTML=totalcostavoided;
		}

/*type increase revenue:*/

	else if (increv.checked){
		var totalrevenueincrease = prompt("Please enter how much revenue will increase per sales", "10");
		var howmanysalesperweek = prompt("Please enter how much you can sell per week", "10");

			if (totalrevenueincrease != 0){
				var increvtotal = totalrevenueincrease*howmanysalesperweek;
				}
			else {
				console.log("Error");
			}
			document.getElementById("output").innerHTML=increvtotal;
		}

/*type protect revenue*/

	else if (prorev.checked){
		var totalrevenueprotected = prompt("Please enter how much revenue will be protected per week", "10");

			if (totalrevenueprotected != 0){
				var prorevtotal = totalrevenueprotected;
				}
			else {
				console.log("Error")
			}
			document.getElementById("output").innerHTML=totalrevenueprotected;
		}


	else {
		console.log("Error");
		}
}
