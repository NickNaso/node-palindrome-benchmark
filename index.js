var palindromeC = require('palindrome');
var palindromeJs = require('./palindrome.js');
var palindromeOneLiner = require('./palindrome_one_liner.js');
var fs = require('fs');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var smallPalindrome = 'a man a plan a cat a ham a yak a yam a hat a canal panama';
var bigPalindrome = fs.readFileSync('./biggest_palindrome.txt').toString();

suite
.add('C palindrome', function() {
  palindromeC(smallPalindrome);
})
.add('Javascript palindrome', function() {
  palindromeJs(smallPalindrome);
})
.add('Javascript palindrome one liner', function() {
  palindromeOneLiner(smallPalindrome);
})
.on('cycle', cycle)
.on('complete', complete)
.run({ 'async': true });

function cycle(event) {
  console.log(String(event.target));
}

function complete(a, b) {

  console.log('Fastest: ' + this.filter('fastest').map('name'));
  console.log('Slowest: ' + this.filter('slowest').map('name'));
}