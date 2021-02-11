const text = document.querySelector('.main-text');
const button = document.querySelector('.main-button');
const form = document.querySelector('form');
const input = document.querySelector('input');
const submitButton = document.querySelector('.form-button');
const listContainer = document.querySelector('ul');
const names = document.querySelectorAll('li');


function doStuff() {
    if (this === button) {
        text.classList.toggle("crazy-styles");
    } else {
        this.classList.toggle("crazy-styles");
    }
    console.log(this);
}

function formJS(e) {
    e.preventDefault();

    const tag = document.createElement("li");
    const text = document.createTextNode(input.value);
    tag.appendChild(text);
    tag.classList.add("crazy-styles");

    let newElement = listContainer.append(tag);
    input.value = "";
}

button.addEventListener('click', doStuff);

names.forEach(name => {
    name.addEventListener('click', doStuff);
});

form.addEventListener('submit', formJS);
