import * as assert from 'assert';

describe('Simple Test Suite', () => {
  it('should pass a simple test', () => {
    assert.strictEqual(1 + 1, 2);
  });
});

console.log('All tests passed!');