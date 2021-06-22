class Microphone {

  constructor(color = 'black') {
    this.color = color;
    this.isOn = true;
  }

  toggleOnOf() {
    console.log(this.color)
  }
}

const microphone = new Microphone();

console.log(microphone);
microphone.toggleOnOf();


