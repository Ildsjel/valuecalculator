/*function to get value type*/
//TODO replace all this logic with mongoose set functions and delete it
function valueType() {

	/*TODO in general: if the ver first thing is to use if/else and that is the only blocks, maybe you should either:
		- switch/case
		- "sub" or helper functions
		- make the bloody function more generic!
	*/

	/*case 1 - needs to be a Switch Statement -
	runs when the user input is = "reducecost"*/

	/*type reduce cost*/

	//TODO camelCase
	if (redcos.checked){
		var manpower = document.getElementById("redcostotalppl").value;
		var timespent = document.getElementById("redcostotalhrs").value;
		var futuremanpower = document.getElementById("redcosfutureppl").value;
		var futuretimespent = document.getElementById("redcosfuturehrs").value;
		var currentstate = ((manpower*25)*timespent); /*added constant 25 here for FTE Employee salary. needs to be replaced by a proper variable from DB*/
		var goalstate = ((futuremanpower*25)*futuretimespent);

			if (manpower != 0){
				var redcostotal = currentstate-goalstate;
				console.log(currentstate-goalstate);
				console.log(redcostotal);
				}

			else {
				console.log("Error");
			}
			document.getElementById("redcostotal").innerHTML=redcostotal;
			return redcostotal;




}


//TODO get rid of the spaces and breakline :)

/*type cost avoided*/

	else if (avocos.checked){
		var totalcostavoided = document.getElementById("avocosttl").value;
		var totalcosttime = document.getElementById("avocostime").value;
		var risk = document.getElementById("avocosrisk").value;

			if (totalcostavoided != 0){
				var avocostotal = totalcostavoided /** (risk * 52.14 / 100)*/;
				}
			else {
				console.log("Error");
			}
			document.getElementById("output").innerHTML=avocostotal;
		}

/*type increase revenue:*/

	else if (increv.checked){
		var revenueperweeknow = document.getElementById("slsnow").value;
		var salesperweeknow = document.getElementById("itmnow").value;
		var totalrevenueincrease = document.getElementById("increvsls").value;
		var howmanysalesperweek = document.getElementById("increvitm").value;

			if (totalrevenueincrease != 0){
				var increvtotal = (totalrevenueincrease*howmanysalesperweek) - (revenueperweeknow*salesperweeknow);
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

export * from "calcv3";