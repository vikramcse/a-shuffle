var expect = require('chai').expect;
var shuffle = require('./index.js');

describe('Tests for shuffle array', function () {
  it('should return shiffled array', function () {
    expect(shuffle([2, 11, 37, 42])).not.eql([2, 11, 37, 42]);
  });
});
