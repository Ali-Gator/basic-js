const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    const arr = str.split('');
    let quan = 1;
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            quan += 1;
            continue;
        }
        res.push(quan);
        res.push(arr[i]);
        quan = 1;
    }

    return res.filter(el => el != 1).join('');
}

module.exports = {
    encodeLine
};
