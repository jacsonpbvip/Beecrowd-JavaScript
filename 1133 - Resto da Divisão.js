var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada1 = parseInt(lines.shift());
var entrada2 = parseInt(lines.shift());
var x = Math.min(entrada1,entrada2) +1;
var y = Math.max(entrada1,entrada2);
for (let i = x; i < y; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
        console.log(i);
    }
}