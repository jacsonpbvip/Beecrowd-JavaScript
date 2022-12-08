var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var calcular = 1;

for (let i = 1; i <= x; i++) {
calcular = calcular * i;
}
console.log(calcular);