import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range !== 'string') {
      throw new TypeError('Range must be a string');
    }

    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    if (typeof range !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this._range = value;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}

export default EVCar;
