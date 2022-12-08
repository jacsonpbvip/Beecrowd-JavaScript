var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var gasolina = 0;
var alcool = 0;
var disel = 0;

do {
   var entrada = parseInt(lines.shift());

   if (entrada === 2) {
      gasolina = gasolina + 1;
   } else if (entrada === 1) {
      alcool = alcool + 1;
   } else if (entrada === 3) {
      disel = disel + 1;
   }
} while (entrada !== 4);
console.log('MUITO OBRIGADO');
console.log('Alcool: ' + alcool);
console.log('Gasolina: ' + gasolina);
console.log('Diesel: ' + disel);