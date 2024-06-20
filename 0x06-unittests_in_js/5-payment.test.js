const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20 and output 120', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should call Utils.calculateNumber with SUM, 10, 10 and output 20', function() {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
