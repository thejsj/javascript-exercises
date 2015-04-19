var each = function (collection, callback) {
  // Your function here
};

var eachRecursive = function (array, f) {
  // Your function here
  var prev;
  if (array[0] == undefined) {
    return true;
  }
  f(array[0]);
  prev = array.shift();
  eachRecursive(array,f);
};

var map = function (collection, iteratee) {
 // Your function here
};

exports.each = each;
exports.eachRecursive = eachRecursive;
exports.map = map;
