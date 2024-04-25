const CarType = Symbol('Car');

class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new TypeError('Color must be a string');
    }
    
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[CarType] = true;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}

export default Car;
