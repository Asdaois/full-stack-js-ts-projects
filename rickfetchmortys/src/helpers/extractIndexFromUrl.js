/*
 * Get the index at the end of a url
 * example: ...loctions/124
 * return: 124
 *  @param {string} url
 *  @return {number}
 */
const extractIndexFromUrl = (url) => {
  const regex = /\d{3}|\d{2}|\d/;
  const result = url.match(regex);

  if (!result) return null;
  return Number(result[0]) - 1;
};

module.exports = { extractIndexFromUrl };
