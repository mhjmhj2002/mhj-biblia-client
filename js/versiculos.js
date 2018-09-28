function onBuscarVersiculo(){
	console.log("onBuscarVersiculo");

	let lblVersiculo = document.getElementById('lbl-versiculo');
	var vers = document.getElementById('versoes-dropdown').value
	var test = document.getElementById('testamentos-dropdown').value
	var liv = document.getElementById('livros-dropdown').value

	const urlVersiculos = 'http://www.mhj.kinghost.net:21137/versiculos/versiculo/' + vers + '/' + liv + '/4/8';

	const requestVersiculos = new XMLHttpRequest();
	requestVersiculos.open('GET', urlVersiculos, true);

	requestVersiculos.onload = function() {
	  if (requestVersiculos.status === 200) {
		const data = JSON.parse(requestVersiculos.responseText);
		lblVersiculo.innerHTML = data[i].ver_texto;
	   } else {
		// Reached the server, but it returned an error
	  }   
	}

	requestVersiculos.onerror = function() {
	  console.error('An error occurred fetching the JSON from ' + urlVersiculos);
	};

	requestVersiculos.send();
}