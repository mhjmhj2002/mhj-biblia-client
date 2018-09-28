let livrosDropdown = document.getElementById('livros-dropdown');
livrosDropdown.length = 0;

let defaultOptionLivros = document.createElement('option');
defaultOptionLivros.text = 'Escolha um item';

livrosDropdown.add(defaultOptionLivros);
livrosDropdown.selectedIndex = 0;

const urlLivros = 'https://api.myjson.com/bins/7xq2x';

const request = new XMLHttpRequest();
request.open('GET', urlLivros, true);

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].name;
      option.value = data[i].abbreviation;
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