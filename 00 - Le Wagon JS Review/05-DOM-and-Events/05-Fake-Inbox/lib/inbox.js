/* eslint-disable no-multiple-empty-lines */

const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  const randomNumber = Math.random();
  if (randomNumber <= 0.2) {
    return true
  } else {
    return false;
  }
};

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  const subjects = ["Hi", "Hello", "I'll be taking my talents to South Beach"];
  const senders = ["Yun", "Eunjoo", "LeBron"];
  return message = {
    subject: subjects[Math.floor(Math.random() * subjects.length)],
    sender: senders[Math.floor(Math.random() * senders.length)],
  };
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  // const newObject = newMessage();
  // const newSender = newObject.sender;
  // const newSubject = newObject.subject;

  const newEmail = document.getElementById("inbox");
  const newLine = `<div class="row message unread">
      <div class="col-3">${message.sender}</div><div class="col-9">${message.subject}</div></div>`;
  newEmail.insertAdjacentHTML('afterbegin', newLine);
};

// const counterFunction = () => {
//   let emailCount = document.getElementById("count");
//   let emailInnerText = emailCount.innerText;
//   emailInnerText = emailInnerText.replace(/[{()}]/g, '');
//   let emailCountInteger = Number.parseInt(emailInnerText);
//   return emailCountInteger;
// };

let emailCount = 1;
const refresh = () => {
  if (hasNewMessage() == true) {
    appendMessageToDom(newMessage());
    emailCount = (emailCount +1);
    console.log(emailCount);
      // let emailCount = document.getElementById("count");
      // let emailInnerText = emailCount.innerText;
      // emailInnerText = emailInnerText.replace(/[{()}]/g, '');
      // let emailCountInteger = Number.parseInt(emailInnerText);
    // console.log(counterFunction() + 1);
  }
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
};

















// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

module.exports = { hasNewMessage, newMessage };
