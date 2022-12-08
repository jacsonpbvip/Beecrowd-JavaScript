var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada1 = lines.shift();
var entrada2 = lines.shift();
var x = Math.min(entrada1,entrada2);
var y = Math.max(entrada1,entrada2);
var soma = 0;
for (let i = x; i <= y; i++) {
    if (i % 13 !== 0) {
        soma = soma + i;
    }
}
console.log(soma);