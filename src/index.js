module.exports = function reverse (n) {
    let result = '';
    for (let char of String(Math.abs(n))) {
          result = char + result;
    }
  return Number(result);
}