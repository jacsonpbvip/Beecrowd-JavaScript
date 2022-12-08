var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift();
var entrada2 = lines.shift().split(' ');
var index = 0;
var menorValor = 999999999999999;
for (let i = 0; i < entrada2.length; i++) {
   if (entrada2[i] < menorValor) {
      var menorValor = parseInt(entrada2[i]);
      var index = i;      
   }
}
console.log('Menor valor: ' + menorValor);
console.log('Posicao: ' + index);