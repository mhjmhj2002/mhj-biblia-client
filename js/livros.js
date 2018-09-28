function carregarComboLivros(){
	
	console.log("carregarComboLivros");
	
	let livrosDropdown = document.getElementById('livros-dropdown');
	livrosDropdown.length = 0;

	let defaultOptionLivros = document.createElement('option');
	defaultOptionLivros.text = 'Escolha um item';

	livrosDropdown.add(defaultOptionLivros);
	livrosDropdown.selectedIndex = 0;

	const urlLivros = 'http://www.mhj.kinghost.net:21137/livros/livro/' + document.getElementById('testamentos-dropdown').value;

	const request = new XMLHttpRequest();
	request.open('GET', urlLivros, true);

	request.onload = function() {
	  if (request.status === 200) {
		const data = JSON.parse(request.responseText);
		let option;
		for (let i = 0; i < data.length; i++) {
		  option = document.createElement('option');
		  option.text = data[i].liv_nome;
		  option.value = data[i].liv_id;
		  livrosDropdown.add(option);
		}
	   } else {
		// Reached the server, but it returned an error
	  }   
	}

	request.onerror = function() {
	  console.error('An error occurred fetching the JSON from ' + urlLivros);
	};

	request.send();
	
}

