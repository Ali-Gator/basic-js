const {NotImplementedError} = require('../extensions/index.js');
const {assert} = require('chai');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

    constructor() {
        this.depth = 1;
    }

    calculateDepth(arr) {
        if (arr.some(el => Array.isArray(el))) {
            const newArr = arr.flat(1);
            this.depth++;
            return this.calculateDepth(newArr);
        }

        const res = this.depth;
        this.depth = 1;
        return res;
    }
}

module.exports = {
    DepthCalculator
};
