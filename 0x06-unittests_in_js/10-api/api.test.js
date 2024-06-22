const { expect } = require('chai');
const request = require('request');

describe('Index page', function() {
    it('should return status code 200', function(done) {
      request('http://localhost:7865', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  
    it('should return the correct message', function(done) {
      request('http://localhost:7865', (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

describe('Cart page', function() {
  it('should return status code 200 when acessing cart correctly', function(done) {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message when acessing cart correctly', function(done) {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when acessing cart with string param', function(done) {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', () => {
  it('should return status code 200', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct payment methods', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login', () => {
  it('should return the correct message with POST /login', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: {
        userName: 'Betty'
      }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
