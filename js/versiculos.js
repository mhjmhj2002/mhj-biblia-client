function onBuscarVersiculo(){
	console.log("onBuscarVersiculo");

	var vers = document.getElementById('versoes-dropdown').value;
	var liv = document.getElementById('livros-dropdown').value;
	var cap = document.getElementById('inp-capitulo').value;
	var verIni = document.getElementById('inp-vers-ini').value;
	var verFim = document.getElementById('inp-vers-fim').value;

	const urlVersiculos = 'http://www.mhj.kinghost.net:21137/versiculos/versiculo/' + vers + '/' + liv + '/' + cap + '/' + verIni + '/' + verFim;

	const requestVersiculos = new XMLHttpRequest();
	requestVersiculos.open('GET', urlVersiculos, true);

	requestVersiculos.onload = function() {
	  if (requestVersiculos.status === 200) {
		const data = JSON.parse(requestVersiculos.responseText);
		var result = "";
		for (let i = 0; i < data.length; i++) {
			console.log(data.ver_texto);
			result += data[i].ver_texto;
		}
		document.getElementById('lbl-versiculo').innerHTML = result;//data[0].ver_texto;
	   } else {
		// Reached the server, but it returned an error
	  }   
	}

	requestVersiculos.onerror = function() {
	  console.error('An error occurred fetching the JSON from ' + urlVersiculos);
	};

	requestVersiculos.send();
}