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
  const dado = data;
  let option;
  for (let i = 0; i < dado.length; i++) {
    option = document.createElement('option');
    option.text = dado[i].vrs_nome;
    option.value = dado[i].vrs_id;
    versoesDropdown.add(option);
  }
});