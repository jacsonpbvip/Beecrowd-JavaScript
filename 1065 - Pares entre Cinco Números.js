var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var v = [
    entrada1 = parseFloat(lines.shift()),
    entrada2 = parseFloat(lines.shift()),
    entrada3 = parseFloat(lines.shift()),
    entrada4 = parseFloat(lines.shift()),
    entrada5 = parseFloat(lines.shift()),
];

var contador = 0;
var numerosPares = v;
var quantidade = 0;
for (var i = 0; i < numerosPares.length; i++) {
    if (numerosPares[i]  % 2 === 0) quantidade++;
}

console.log(quantidade + " valores pares");