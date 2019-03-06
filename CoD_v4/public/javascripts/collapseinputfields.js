/*function to show inputs instead of alerts*/


//Comment Nils: more generic. YYou are doing 4/5 times the same here with diffent names -> consider use parmater
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
