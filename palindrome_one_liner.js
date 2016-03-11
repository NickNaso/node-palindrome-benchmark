module.exports = function(str) {
  return str === str.split('').reverse().join('');
};