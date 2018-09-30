function onBuscarVersiculo(){
	console.log("onBuscarVersiculo");

	var vers = document.getElementById('versoes-dropdown').value;
	var liv = document.getElementById('livros-dropdown').value;
	var cap = document.getElementById('inp-capitulo').value;
	var ver = document.getElementById('inp-versiculo').value;

	const urlVersiculos = 'http://www.mhj.kinghost.net:21137/versiculos/versiculo/' + vers + '/' + liv + '/' + cap '/' + ver;

	const requestVersiculos = new XMLHttpRequest();
	requestVersiculos.open('GET', urlVersiculos, true);

	requestVersiculos.onload = function() {
	  if (requestVersiculos.status === 200) {
		const data = JSON.parse(requestVersiculos.responseText);
		console.log(data.ver_texto);
		document.getElementById('lbl-versiculo').innerHTML = data[0].ver_texto;
	   } else {
		// Reached the server, but it returned an error
	  }   
	}

	requestVersiculos.onerror = function() {
	  console.error('An error occurred fetching the JSON from ' + urlVersiculos);
	};

	requestVersiculos.send();
}