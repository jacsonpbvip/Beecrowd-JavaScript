var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do {
   var entrada = parseInt(lines.shift());
   var soma = 0;
   if (entrada !== 0) {

      for (let i = entrada; i < (entrada + 10); i++) {
         if (i % 2 === 0) {
            soma = soma + i;
         }
      }
      console.log(soma);
   }

} while (entrada !== 0);