var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
do {
   var y = parseInt(lines.shift());
} while (x >= y);
var soma = 0;
var contador = 0;
for (let i = 0; i < y; i++) {
   if (soma < y) {
      soma = (x + i) + soma;
      contador = contador + 1;
   } else {
      i++;
   }
}
console.log(contador);