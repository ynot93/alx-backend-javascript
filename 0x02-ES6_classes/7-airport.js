export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'number') {
      throw new Error('Name must be a number');
    }
    if (typeof code !== 'number') {
      throw new Error('Code must be a number');
    }

    this._name = name;
    this._code = code;
  }
  
  toString() {
    return `[object ${this._code}]`;
  }
}
