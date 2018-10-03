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
			console.log(data[i].ver_texto);	
            result += " ";
            result += data[i].ver_versiculo;
            result += " ";
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

function onGetQuantidadeCapitulos(){
	console.log("onGetQuantidadeCapitulos");
	
	var liv = document.getElementById('livros-dropdown').value;

	const urlCapitulos = 'http://www.mhj.kinghost.net:21137/versiculos/capitulo/' + liv;

	const requestCapitulos = new XMLHttpRequest();
	requestCapitulos.open('GET', urlCapitulos, true);

	requestCapitulos.onload = function() {
	  if (requestCapitulos.status === 200) {
		const data = JSON.parse(requestCapitulos.responseText);		
		console.log(data[0].qtde_capitulos);
		
		document.getElementById('inp-capitulo').innerHTML = data[0].qtde_capitulos;
	   } else {
		// Reached the server, but it returned an error
	  }   
	}

	requestCapitulos.onerror = function() {
	  console.error('An error occurred fetching the JSON from ' + urlCapitulos);
	};

	requestCapitulos.send();
}
