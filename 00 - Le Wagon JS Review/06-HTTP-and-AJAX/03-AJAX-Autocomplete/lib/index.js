// TODO: Autocomplete the input with AJAX calls.
const input = document.querySelector('#search');
const results = document.querySelector('#results');

const autocomplete = (query) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${query.value}`)
  // fetch("https://wagon-dictionary.herokuapp.com/autocomplete/hat")
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
});

input.addEventListener('keyup', autocomplete);
