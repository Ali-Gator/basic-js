const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
/*
repeatTimes устанавливает число повторений str
separator это строка, разделяющая повторения str
addition это дополнительная строка, которая будет добавлена после каждого повторения str
additionRepeatTimes устанавливает число повторений addition
additionSeparator это строка, разделяющая повторения addition*/

function repeater( str, {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'} ) {
  str ? str.toString() : 'null';
  let add;
  if (addition !== undefined) {
    addition ? addition.toString() : 'null';
    add = `${addition}${additionRepeatTimes ? additionSeparator : ''}`.repeat((additionRepeatTimes ? additionRepeatTimes : 2) - 1) + (additionRepeatTimes ? addition : '');
  }

  return `${str}${add !== undefined ? add : ''}${repeatTimes ? separator : ''}`.repeat((repeatTimes ? repeatTimes : 2) - 1) + (repeatTimes ? `${str}${add !== undefined ? add : ''}` : '');
}

module.exports = {
  repeater
};
