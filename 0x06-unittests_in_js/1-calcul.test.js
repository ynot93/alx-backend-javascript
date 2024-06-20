const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when adding 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when adding -0.4 and 0.4', function () {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when subtracting 1.4 from 4.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when subtracting 1.4 from 0.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.5, 1.4), 0);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when dividing 1.4 by 4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing 1.4 by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return "Error" when dividing 1.4 by 0.2', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
    });

    it('should return 2 when dividing 5.6 by 2.8', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 5.6, 2.8), 2);
    });
  });
});
