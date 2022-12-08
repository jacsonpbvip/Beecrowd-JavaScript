var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var array = [];
do {
   var x = parseInt(lines.shift());
   if (x > 0) {
      array.push(x);
   }

} while (x > 0);
var soma = 0;
var contador = 0;
for (let i = 0; i < array.length; i++) {
   var soma = soma + array[i];
   contador = contador + 1;
}
var mediaIdade = soma / contador;

console.log(mediaIdade.toFixed(2));