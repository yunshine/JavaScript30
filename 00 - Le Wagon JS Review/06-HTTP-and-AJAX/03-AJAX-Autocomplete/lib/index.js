// TODO: Autocomplete the input with AJAX calls.
const input = document.querySelector('#search');
const results = document.querySelector('#results');

// const autocomplete = (query) => {
//   fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${query.currentTarget.value}`)
//   // fetch("https://wagon-dictionary.herokuapp.com/autocomplete/hat")
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// input.addEventListener('keyup', autocomplete);


input.addEventListener("keyup", (event) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${event.currentTarget.value}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      data.words.forEach((suggestion) => {
        console.log(suggestion);
        results.insertAdjacentHTML("beforeend", `<li>${suggestion}</li>`);
      });
    });
});