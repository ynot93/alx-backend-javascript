import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(setAmount) {
    if (typeof setAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = setAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(setCurrency) {
    if (!(setCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }
    this._amount = setCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and Conversion reate should be numbers');
    }
    return amount * conversionRate;
  }
}
