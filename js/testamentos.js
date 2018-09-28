let testamentosDropdown = document.getElementById('testamentos-dropdown');
testamentosDropdown.length = 0;

let defaultOptionTestamentos = document.createElement('option');
defaultOptionTestamentos.text = 'Escolha um item';

testamentosDropdown.add(defaultOptionTestamentos);
testamentosDropdown.selectedIndex = 0;

const urlTestamentos = 'http://www.mhj.kinghost.net:21137/testamentos/getAll';

const requestTestamentos = new XMLHttpRequest();
requestTestamentos.open('GET', urlTestamentos, true);

requestTestamentos.onload = function() {
  if (requestTestamentos.status === 200) {
    const data = JSON.parse(requestTestamentos.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].name;
      option.value = data[i].abbreviation;
      testamentosDropdown.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

requestTestamentos.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + urlTestamentos);
};

requestTestamentos.send();

function onSelectTestamentos(){
	carregarComboLivros();
}