function onBuscarVersiculo() {
	console.log("onBuscarVersiculo");

	var vers = document.getElementById('versoes-dropdown').value;
	var liv = document.getElementById('livros-dropdown').value;
	var cap = document.getElementById('capitulos-dropdown').value;
	var verIni = document.getElementById('versiculos-de-dropdown').value;
	var verFim = document.getElementById('versiculos-ate-dropdown').value;

	const urlVersiculos = 'http://www.mhj.kinghost.net:21137/versiculos/versiculo/' + vers + '/' + liv + '/' + cap + '/' + verIni + '/' + verFim;

	const requestVersiculos = new XMLHttpRequest();
	requestVersiculos.open('GET', urlVersiculos, true);

	requestVersiculos.onload = function () {
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

	requestVersiculos.onerror = function () {
		console.error('An error occurred fetching the JSON from ' + urlVersiculos);
	};

	requestVersiculos.send();
}

function onGetQuantidadeCapitulos() {
	console.log("onGetQuantidadeCapitulos");

	let capitulosDropdown = document.getElementById('capitulos-dropdown');
	capitulosDropdown.length = 0;
	let defaultOptionCapitulos = document.createElement('option');
	defaultOptionCapitulos.text = 'Escolha um item';

	capitulosDropdown.add(defaultOptionCapitulos);
	capitulosDropdown.selectedIndex = 0;

	var liv = document.getElementById('livros-dropdown').value;

	const urlCapitulos = 'http://www.mhj.kinghost.net:21137/versiculos/capitulo/' + liv;

	const requestCapitulos = new XMLHttpRequest();
	requestCapitulos.open('GET', urlCapitulos, true);

	requestCapitulos.onload = function () {
		if (requestCapitulos.status === 200) {

			const data = JSON.parse(requestCapitulos.responseText);
			console.log(data[0].qtde_capitulos);
			var qtdeCapitulos = data[0].qtde_capitulos;
			let option;

			for (let i = 1; i <= qtdeCapitulos; i++) {
				option = document.createElement('option');
				option.text = i;
				option.value = i;
				capitulosDropdown.add(option);
			}
		} else {
			// Reached the server, but it returned an error
		}
	}

	requestCapitulos.onerror = function () {
		console.error('An error occurred fetching the JSON from ' + urlCapitulos);
	};

	requestCapitulos.send();
}

function onGetQuantidadeVersiculos() {
	console.log("onGetQuantidadeVersiculos");

	let versiculosDeDropdown = document.getElementById('versiculos-de-dropdown');
	let versiculosAteDropdown = document.getElementById('versiculos-ate-dropdown');

	versiculosDeDropdown.length = 0;
	versiculosAteDropdown.length = 0;

	let defaultOptionVersiculosDe = document.createElement('option');
	defaultOptionVersiculosDe.text = 'Escolha um item';

	let defaultOptionVersiculosAte = document.createElement('option');
	defaultOptionVersiculosAte.text = 'Escolha um item';

	versiculosDeDropdown.add(defaultOptionVersiculosDe);
	versiculosDeDropdown.selectedIndex = 0;
	versiculosAteDropdown.add(defaultOptionVersiculosAte);
	versiculosAteDropdown.selectedIndex = 0;

	var liv = document.getElementById('livros-dropdown').value;
	var cap = document.getElementById('capitulos-dropdown').value;

	const urlVersiculos = 'http://www.mhj.kinghost.net:21137/versiculos/versiculo/' + liv + '/' + cap;

	const requestVersiculos = new XMLHttpRequest();
	requestVersiculos.open('GET', urlVersiculos, true);

	requestVersiculos.onload = function () {
		if (requestVersiculos.status === 200) {

			const data = JSON.parse(requestVersiculos.responseText);
			console.log(data[0].qtde_versiculos);
			var qtdeVersiculos = data[0].qtde_versiculos;
			let optionVersDe;
			let optionVersAte;

			for (let i = 1; i <= qtdeVersiculos; i++) {
				optionVersDe = document.createElement('option');
				optionVersDe.text = i;
				optionVersDe.value = i;
				versiculosDeDropdown.add(optionVersDe);
				
				optionVersAte = document.createElement('option');
				optionVersAte.text = i;
				optionVersAte.value = i;
				versiculosAteDropdown.add(optionVersAte);
			}
		} else {
			// Reached the server, but it returned an error
		}
	}

	requestVersiculos.onerror = function () {
		console.error('An error occurred fetching the JSON from ' + urlVersiculos);
	};

	requestVersiculos.send();
}
