let versoesDropdown = document.getElementById('versoes-dropdown');
versoesDropdown.length = 0;

let defaultOptionVersoes = document.createElement('option');
defaultOptionVersoes.text = 'Escolha um item';

versoesDropdown.add(defaultOptionVersoes);
versoesDropdown.selectedIndex = 0;

const urlVersoes = url + ':' + port + '/versoes/getAll';

$.ajax({
  url: urlVersoes
}).then(function(data) {
  let option;
  for (let i = 0; i < data.length; i++) {
    option = document.createElement('option');
    option.text = data[i].vrs_nome;
    option.value = data[i].vrs_id;
    versoesDropdown.add(option);
  }
});