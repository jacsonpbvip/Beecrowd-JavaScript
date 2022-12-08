var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());

do {
   var numero = parseInt(lines.shift());
   var primo = false;
   for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
         primo = true;
         i++;
      }
   }
   if (primo === true) {

      console.log(numero + ' nao eh primo');
   } else {
      console.log(numero + ' eh primo');

   }

   entrada = entrada - 1;

} while (entrada !== 0);