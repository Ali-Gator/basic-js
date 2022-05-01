const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(type = true) {
        this.type = type;
    }


    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }
        let diff = 0;
        let cipher = message.toUpperCase().split('').map((el, ind) => {
            const code = el.codePointAt(0);
            const keyStr = key.toUpperCase();

            if (code >= 65 && code <= 90) {
                return String.fromCodePoint(((code + keyStr.codePointAt((ind - diff) % keyStr.length)) % 26) + 65);
            }
            diff++;
            return el;
        });
        return this.type ? cipher.join('') : cipher.reverse().join('');

    }


    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error('Incorrect arguments!');
        }
        let diff = 0;
        let text = message.toUpperCase().split('').map((el, ind) => {
            const code = el.codePointAt(0);
            const keyStr = key.toUpperCase();

            if (code >= 65 && code <= 90) {
                return String.fromCodePoint(((26 + (code - keyStr.codePointAt((ind - diff) % keyStr.length))) % 26) + 65);
            }
            diff++;
            return el;
        });

        return this.type ? text.join('') : text.reverse().join('');
    }
}

const directMachine = new VigenereCipheringMachine();

// const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))
//  => 'ATTACK AT DAWN!'
// reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
//
// reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'


module.exports = {
    VigenereCipheringMachine
};
