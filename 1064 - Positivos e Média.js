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

var contador = 0;
var numerosPositivos = v.filter(saldo => saldo > 0);
var quantidade = 0;
for (var i = 0; i < numerosPositivos.length; i++) {
    if (numerosPositivos[i] >= 0) quantidade++;
}

console.log(quantidade + " valores positivos");

var media = 0;
if (quantidade == 1) {
    media = numerosPositivos[0];
} else if (quantidade === 2) {
    media = (numerosPositivos[0] + numerosPositivos[1]) / 2;
} else if (quantidade === 3) {
    media = (numerosPositivos[0] + numerosPositivos[1] + numerosPositivos[2]) / 3;
} else if (quantidade === 4) {
    media = (numerosPositivos[0] + numerosPositivos[1] + numerosPositivos[2] + numerosPositivos[3]) / 4;
} else if (quantidade === 5) {
    media = (numerosPositivos[0] + numerosPositivos[1] + numerosPositivos[2] + numerosPositivos[3] + numerosPositivos[4]) / 5;
} else if (quantidade === 6) {
    media = (numerosPositivos[0] + numerosPositivos[1] + numerosPositivos[2] + numerosPositivos[3] + numerosPositivos[4] + numerosPositivos[5]) / 6;
}else{
    media = 0;
}
console.log(media.toFixed(1));