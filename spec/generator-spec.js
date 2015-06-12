var chai = require('chai');
var generator = require('../generator.js')
chai.should();

describe('generate', function () {


  it('should be a function', function () {
    generator.should.be.a.function;
  });
  it('should return an array', function () {
    generator(5).should.be.an('array');
    generator(7).length.should.be.equal(7);
  });
  it('should scramble up the numbers', function () {
    var run1 = generator(5);
    var run2 = generator(5);
    console.log(run1,run2)
    run1.should.not.deep.equal(run2);
  });
  it('should contain all integers between and including 0 and n-1', function () {
    var orderedArrray = [];
    for (var i = 0; i < 25; i++) {
      orderedArrray[i] = i;
    };
    var sortedResult = generator(25).sort(function(a, b) {
    return a - b;
    });
    orderedArrray.should.deep.equal(sortedResult);
  });

});


