class Password {
  digit = null;
  alphabet = "abcdefghijklmanopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  constructor(digit) {
    this.digit = digit;
  }

  generate() {
    let password = '';
    const size = this.alphabet.length;
    for (let i = 0; i < this.digit; i++) {
      password += this.alphabet[(Math.random() * (size - 1)).toFixed()]; // random integer between 0 and size - 1
    }
    return password;
  }
}

module.exports = Password;