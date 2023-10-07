/*
 * From a number generate a false array with format 1,2,3,...number
 * @param {number} number
 * @returns 1,2,3,...number
 */
const generatorStringArray = (number) => Array(number).fill(1).map((n, i) => i + 1).join();

module.exports = generatorStringArray;
