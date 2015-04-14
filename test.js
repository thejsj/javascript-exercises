/*global describe: true, it: true */
require('should');
var each = require('./index.js').each;
var eachRecursive = require('./index.js').eachRecursive;
var map = require('./index.js').map;

describe('each', function () {

  describe('arrays', function () {

    it('should execute the same functions on all values of the array', function () {
      var sum = 0;
      each([1, 2, 3], function (value) {
        sum += value;
      });
      sum.should.equal(6);
    });

    it('should handle single value arrays', function () {
      var sum = 0;
      each([777], function (value) {
        sum += value ;
      });
      sum.should.equal(777);
    });

    it('should not do anything if the array contains no values', function () {
      var called = false;
      each([], function () {
        called = true;
      });
      called.should.equal(false);
    });

    it('should pass the indexes as second arguments to the callback function', function () {
      var indexSum = 0;
      each([9, 8, 7], function (val, i) {
        indexSum += i;
      });
      indexSum.should.equal(3);
    });

   it('should only iterate over the array elements, not properties of the array', function () {
      var animals = ['ant', 'bat', 'cat'];
      var iterationInputs = [];

      animals.shouldBeIgnored = 'Ignore me!';

      each(animals, function (animal, index, list) {
        iterationInputs.push([animal, index, list]);
      });

      (iterationInputs).should.eql([
        ['ant', 0, animals],
        ['bat', 1, animals],
        ['cat', 2, animals]
      ]);
    });

  });

  describe('objects', function () {

    it('should execute the same functions on all values of an object', function () {
      var sum = 0;
      each({ 'a': 5, 'b': 2, 'c': 3 }, function (value) {
        sum += value;
      });
      sum.should.equal(10);
    });

    it('should pass the indexes as second arguments to the callback function', function () {
      var indexConcat = '';
      each({ 'a': 5, 'b': 2, 'c': 3 }, function (value, i) {
        indexConcat =  '' + indexConcat + i;
      });
      indexConcat.should.equal('abc');
    });

    it('should iterate over objects, providing access to the element, index, and object itself', function () {
      var animals = {
        a: 'ant',
        b: 'bat',
        c: 'cat'
      };
      var iterationInputs = [];

      each(animals, function (animal, key, object) {
        iterationInputs.push([animal, key, object]);
      });

      (iterationInputs).should.eql([
        ['ant', 'a', animals],
        ['bat', 'b', animals],
        ['cat', 'c', animals]
      ]);
    });

  });

  describe('type checking', function () {
    it('should throw an error if incorrect types are passed', function () {
      each.bind(null, null, null).should.throw();
    });
  });

});

describe('eachRecursive', function () {

   it('should execute the same functions on all values of the array', function () {
      var sum = 0;
      each([1, 2, 3], function (value) {
        sum += value;
      });
      sum.should.equal(6);
    });

    it('should handle single value arrays', function () {
      var sum = 0;
      each([777], function (value) {
        sum += value ;
      });
      sum.should.equal(777);
    });

    it('should not do anything if the array contains no values', function () {
      var called = false;
      each([], function () {
        called = true;
      });
      called.should.equal(false);
    });

    it('should pass the indexes as second arguments to the callback function', function () {
      var indexSum = 0;
      each([9, 8, 7], function (val, i) {
        indexSum += i;
      });
      indexSum.should.equal(3);
    });

});

describe('map', function () {

  it('should map the values in an array', function () {
    var arr = [1, 1, 1];
    var result = map(arr, function (val) {
      return val * 3;
    });
    result.should.eql([3, 3, 3]);
  });

  it('should apply a function to every value in an array', function () {
    var doubled = map([1, 2, 3], function (num) {
      return num * 2;
    });

    (doubled).should.eql([2, 4, 6]);
  });
});
