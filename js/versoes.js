let versoesDropdown = document.getElementById('versoes-dropdown');
versoesDropdown.length = 0;

let defaultOptionVersoes = document.createElement('option');
defaultOptionVersoes.text = 'Escolha um item';

versoesDropdown.add(defaultOptionVersoes);
versoesDropdown.selectedIndex = 0;

const urlVersoes = 'http://www.mhj.net.br:21137/versoes/getAll';

const requestVersoes = new XMLHttpRequest();
requestVersoes.open('GET', urlVersoes, true);

requestVersoes.onload = function() {
  if (requestVersoes.status === 200) {
    const data = JSON.parse(requestVersoes.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].vrs_nome;
      option.value = data[i].vrs_id;
      versoesDropdown.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

requestVersoes.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + urlVersoes);
};

requestVersoes.send();