export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new TypeError('Name/Code must be a string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._name;
  }

  set code(setCode) {
    if (typeof setCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = setCode;
  }

  get name() {
    return this._name;
  }

  set name(setName) {
    if (typeof setName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = setName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
