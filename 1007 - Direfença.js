var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift();
var B = lines.shift();
var C = lines.shift();
var D = lines.shift();

DIFERENCA = (A * B) - (C * D);

console.log("DIFERENCA = " + DIFERENCA);