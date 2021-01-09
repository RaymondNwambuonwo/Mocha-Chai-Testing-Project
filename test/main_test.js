// test suite
//describe is a function in mocha that takes 2 arguments, a string and another function. You use the string to decsribe what the suite will cover.
// write a test or trivial check is called a sanity check to make sure eveyrthing is working before starting.

let expect = require('chai').expect;

describe('Mocha', function () {
  // test spec (unit test), containg specs in function called `it` similar to describe, first argument is string that describes behavior this particular unit test is responsible for. The second argument is a function which contains all expectations for this unit. 
  it('should run our tests using npm', function () {
    expect(true).to.be.ok;
  });
});