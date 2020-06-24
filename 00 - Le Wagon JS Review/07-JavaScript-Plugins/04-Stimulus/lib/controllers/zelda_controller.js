import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    this.originalTriggerText = this.triggerTarget.innerText;
    console.log("The Zelda controller is now loaded, and the original trigger text has been stored!");
  }
  
  static targets = [ "trigger" ];

  play() {
    console.log("Button clicked! TODO: play a sound");
    // const sound = new Audio('secret.mp3');
    const sound = new Audio(this.data.get('sound'));
    sound.play();

    console.log(this.triggerTarget);

    this.triggerTarget.innerText = "Bingo!";
    this.triggerTarget.setAttribute('disabled', '');
    sound.addEventListener("ended", () => {
      this.triggerTarget.removeAttribute('disabled');
      this.triggerTarget.innerText = this.originalTriggerText;
    });

  }
}
