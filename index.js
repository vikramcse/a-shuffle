'use strict';

module.exports = function (arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }

  var currentIndex = arr.length;
  var copy = arr.slice();

  while (currentIndex) {
    var randomIndex = Math.floor(Math.random() * currentIndex--);

    var temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  return arr;
};
