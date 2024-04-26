export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(setValue) {
    if (typeof setValue !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = setValue;
  }

  get location() {
    return this._location;
  }

  set location(setValue) {
    if (typeof setValue !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = setValue;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
