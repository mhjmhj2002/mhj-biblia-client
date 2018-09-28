let versiculosDropdown = document.getElementById('locality-versiculosDropdown');
versiculosDropdown.length = 0;

let defaultOptionVersiculos = document.createElement('option');
defaultOptionVersiculos.text = 'Choose State/Province';

versiculosDropdown.add(defaultOptionVersiculos);
versiculosDropdown.selectedIndex = 0;

const urlVersiculos = 'https://api.myjson.com/bins/7xq2x';

const requestVersiculos = new XMLHttpRequest();
requestVersiculos.open('GET', urlVersiculos, true);

requestVersiculos.onload = function() {
  if (requestVersiculos.status === 200) {
    const data = JSON.parse(requestVersiculos.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].name;
      option.value = data[i].abbreviation;
      versiculosDropdown.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

requestVersiculos.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + urlVersiculos);
};

requestVersiculos.send();