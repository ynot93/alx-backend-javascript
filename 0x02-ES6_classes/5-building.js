export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new TypeError('Building is an abstract class');
    }
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    if (this.evacuationWarningMessage === undefined) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
