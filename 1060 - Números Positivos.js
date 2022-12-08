var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var v = [
    entrada1 = parseFloat(lines.shift()),
    entrada2 = parseFloat(lines.shift()),
    entrada3 = parseFloat(lines.shift()),
    entrada4 = parseFloat(lines.shift()),
    entrada5 = parseFloat(lines.shift()),
    entrada6 = parseFloat(lines.shift()),
];


var numerosPositivos =v.filter(saldo => saldo > 0);
var quantidade = 0;
for (var i = 0; i < numerosPositivos.length; i++) {
    if (numerosPositivos[i] >= 0) quantidade++;
}

console.log(quantidade + " valores positivos"); 