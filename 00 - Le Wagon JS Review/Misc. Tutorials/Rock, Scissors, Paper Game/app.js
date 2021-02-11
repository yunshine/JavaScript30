const buttons = document.querySelectorAll('.button');
const humanChoiceContainer = document.querySelector('.human-choice-image-div');
const myChoiceImage = document.querySelector(".human-choice-image");

function showMyChoice(evt) {
    const choice = evt.target.innerText;
    // const myChoiceImage = document.createElement(".human-choice-image");

    myChoiceImage.setAttribute('src', `assets/${choice}.png`);
    myChoiceImage.setAttribute('alt', choice);
    // myChoiceImage.setAttribute('height', '1px');
    // myChoiceImage.setAttribute('width', '1px');
    // document.body.appendChild(myChoiceImage);

    // const text = document.createTextNode(input.value);
    // humanChoiceContainer.removeChild();
    // humanChoiceContainer.appendChild(myChoiceImage);
    // tag.classList.add("crazy-styles");

    // let newElement = listContainer.append(tag);
    // input.value = "";
    console.log(newImage);
}

buttons.forEach(button => {
    button.addEventListener('click', showMyChoice)
});