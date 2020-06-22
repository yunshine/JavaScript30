// TODO: Autocomplete the input with AJAX calls.
const input = document.querySelector('#search');
const results = document.querySelector('#results');

input.addEventListener("keyup", (event) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${event.currentTarget.value}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      results.innerHTML = '';
      data.words.forEach((suggestion) => {
        console.log(suggestion);
        results.insertAdjacentHTML("beforeend", `<li>${suggestion}</li>`);
      });
    });
});
