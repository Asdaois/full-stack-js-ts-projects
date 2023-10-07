/*
 * Do a regex to get the number of char in a words
 * @param{string} word
 */
const countChar = (char, word) => {
  const regex = new RegExp(char, 'gi');
  return word.match(regex)?.length ?? 0;
};

module.exports = countChar;
