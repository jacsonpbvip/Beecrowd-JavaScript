var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());

do {
   var n = parseInt(lines.shift());
   var soma = 0;

   for (let i = 0; i < n; i++) {
      var verificar = n / i;
      var teste = Number.isInteger(verificar);
      if (teste === true) {
         soma = soma + i;
      }

   }
   if (soma === n) {
      console.log(n + ' eh perfeito');
   } else {
      console.log(n + ' nao eh perfeito');
   }
   entrada = entrada - 1;

} while (entrada !== 0);