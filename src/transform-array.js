const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (Array.isArray(arr)) {
        const result = [];

        arr.forEach((el, ind, array) => {
            if (el === '--discard-next') {
                if (array[ind + 1]) {
                    array[ind + 1] = '';
                }
                result.push('');
            } else if (el === '--discard-prev') {
                if (array[ind - 1]) {
                    result.pop();
                }
                result.push('');
            } else if (el === '--double-next') {
                result.push(array[ind + 1] ? array[ind + 1] : '');
            } else if (el === '--double-prev') {
                result.push(array[ind - 1] ? array[ind - 1] : '');
            } else result.push(el);
        });

        return result.filter(el => el !== '');
    }

    throw new Error('\'arr\' parameter must be an instance of the Array!');
}

module.exports = {
    transform
};
