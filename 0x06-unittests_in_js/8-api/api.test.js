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
