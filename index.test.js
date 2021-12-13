const telephoneWords = require('./index');

describe('Test the implementation of telephone words', () => {
  it('should return a list of all the words that can be written with that number', () => {
    expect(telephoneWords('2745')).toContain('CSIL');
  });
  it('should return a list of all the words that can be written with that number', () => {
    expect(telephoneWords('7417')).toContain('SH1R');
  });
});
