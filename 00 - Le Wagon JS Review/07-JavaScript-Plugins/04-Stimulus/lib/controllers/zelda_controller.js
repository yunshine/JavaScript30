import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    console.log("The Zelda controller is now loaded!");
  }
  
  static targets = [ "trigger" ];

  play() {
    console.log("Button clicked! TODO: play a sound");
    const sound = new Audio('secret.mp3');
    sound.play();

    console.log(this.triggerTarget);

    this.triggerTarget.innerText = "Bingo!";
    this.triggerTarget.setAttribute('disabled', '');
    sound.addEventListener("ended", () => {
      this.triggerTarget.removeAttribute('disabled');
      this.triggerTarget.innerText = "Click me!";
    });

  }
}
