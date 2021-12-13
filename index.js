const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ',
};

// helper recursive function
// takes the first digit
// for each letter add to prefix

const telephoneWords = (digitString) => {
  const result = [];

  const recursiveTelWords = (prefix, digits) => {
    if (digits.length === 0) {
      result.push(prefix);
      return;
    }
    const letters = phoneDigitsToLetters[digits[0]];
    for (let i = 0; i < letters.length; i += 1) {
      recursiveTelWords(prefix + letters[i], digits.slice(1));
    }
  };

  recursiveTelWords('', digitString);
  return result;
};

module.exports = telephoneWords;
