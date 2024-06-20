import assert from 'assert';
import calculateNumber from './0-calcul.js';

describe('calculateNumber', function() {
  it('should return 4 when adding 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when adding 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when adding 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when adding 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 when adding -0.4 and 0.4', function() {
    assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
  });

  it('should return -1 when adding -0.5 and -0.6', function() {
    assert.strictEqual(calculateNumber(-0.5, -0.6), -1);
  });

  it('should return -1 when adding -1.6 and 0.5', function() {
    assert.strictEqual(calculateNumber(-1.6, 0.5), -1);
  });
});
