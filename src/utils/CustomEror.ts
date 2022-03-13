class CustomEror {
  message: string;
  code: number;
  constructor(message, code) {
    this.message = message;
    this.code = code;
  }
}

export default CustomEror;
