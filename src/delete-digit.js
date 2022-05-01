const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const arr = n.toString().split('');
  const obj = {};

  for (let i = arr.length - 1; i >= 0 ; i--) {
    let swap = arr[i]
    arr[i] = '';
    obj[i] = arr.join('');
    arr[i] = swap;
  }

  return +Object.values(obj).sort((a,b) => b-a)[0];
}

module.exports = {
  deleteDigit
};
