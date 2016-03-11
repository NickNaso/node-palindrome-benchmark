var palindromeC = require('palindrome');
var palindromeJs = require('./palindrome.js');
var palindromeOneLiner = require('./palindrome_one_liner.js');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

suite.add('C palindrome', function() {
  palindromeC('a man a plan a cat a ham a yak a yam a hat a canal panama');
})
.add('Javascript palindrome one liner', function() {
  palindromeOneLiner('a man a plan a cat a ham a yak a yam a hat a canal panama');
})
.add('Javascript palindrome', function() {
  palindromeJs('a man a plan a cat a ham a yak a yam a hat a canal panama');
})
.on('cycle', cycle)
.on('complete', complete)
.run({ 'async': true });

function cycle(event) {
  console.log(String(event.target));
}

function complete(a,b) {
  console.log('Fastest: ' + this.filter('fastest').map('name'));
  console.log('Slowest: ' + this.filter('slowest').map('name'));
}