const {NotImplementedError} = require('../extensions/index.js');
const {assert} = require('chai');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    result: [],
    getLength() {
        return this.result.length;
    },
    addLink(value) {
        this.result.push(value !== undefined ? value : '');
        return this;
    },
    removeLink(position) {
        if (position > 0 && position <= this.getLength() && position % 1 === 0) {
            this.result.splice(position - 1, 1);
            return this;
        }
        this.result = [];
        throw new Error('You can\'t remove incorrect link!');
    },
    reverseChain() {
        this.result.reverse();
        return this;
    },
    finishChain() {
        const chain = [...this.result];
        this.result = [];
        return chain.filter(el => el !== '').map(el => `( ${el} )`).join('~~');
    }
};


module.exports = {
    chainMaker
};
