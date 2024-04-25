export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('Sqft must be a number');
    }
    if (new.target === Building) {
      throw new TypeError('This is an abstract class');
    }
    if (this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
