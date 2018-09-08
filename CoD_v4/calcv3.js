/*function to show inputs instead of alerts*/

function valueTypeInput() {

	if (document.getElementById('redcos').checked) {
		document.getElementById('redcosinput').style.display = 'block';
	}
	else document.getElementById('redcosinput').style.display = 'none';


	if (document.getElementById('avocos').checked) {
		document.getElementById('avocosinput').style.display = 'block';
	}
	else document.getElementById('avocosinput').style.display = 'none';


	if (document.getElementById('increv').checked) {
		document.getElementById('increvinput').style.display = 'block';
	}
	else document.getElementById('increvinput').style.display = 'none';

	if (document.getElementById('prorev').checked) {
		document.getElementById('prorevinput').style.display = 'block';
	}
	else document.getElementById('prorevinput').style.display = 'none';

}



/*function to get value type*/

function valueType() {

	/*case 1 - needs to be a Switch Statement -
	runs when the user input is = "reducecost"*/

	/*type reduce cost*/

	if (redcos.checked){
		var manpower = document.getElementById("redcostotalppl").value;
		var timespent = document.getElementById("redcostotalhrs").value;

			if (manpower != 0){
				var redcostotal = (manpower*25)*timespent; /*25 as multiplier is chosen, because a Full time employee earns approx that much an hour*/
				}

			else {
				console.log("Error");
			}
			document.getElementById("output").innerHTML=redcostotal;

}

/*type cost avoided*/

	else if (avocos.checked){
		var totalcostavoided = document.getElementById("avocosttl").value;
		var totalcosttime = document.getElementById("avocostime").value;

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
		var totalrevenueincrease = document.getElementById("increvsls").value;
		var howmanysalesperweek = document.getElementById("increvitm").value;

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
		var totalrevenueprotected = document.getElementById("prorevwek").value;

			if (totalrevenueprotected != 0){
				var prorevtotal = totalrevenueprotected;
				}
			else {
				console.log("Error")
			}
			document.getElementById("output").innerHTML=totalrevenueprotected;
		}

/*break*/
	else {
		console.log("Error");
		}
}
