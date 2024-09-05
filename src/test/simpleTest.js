console.log('Running simple test...');

function simpleTest() {
  const testValue = 42;
  if (testValue === 42) {
    console.log('Test passed: Value is 42');
  } else {
    console.error('Test failed: Value is not 42');
    process.exit(1);
  }
}

simpleTest();
console.log('All tests completed successfully');