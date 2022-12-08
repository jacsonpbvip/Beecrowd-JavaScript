var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var impar = [];
var par = [];
var contador = 15;
do {
   var entrada = parseInt(lines.shift());
   if (entrada % 2 !== 0) {
      impar.push(entrada);
   } else if (entrada % 2 === 0){
      par.push(entrada);
   }

   if (impar.length === 5) {
      for (let i = 0; i < impar.length; i++) {
         console.log('impar[' + i + '] = ' + impar[i]);

      }
      var impar = [];
      
   }
   if (par.length === 5) {
      for (let j = 0; j < par.length; j++) {
         console.log('par[' + j + '] = ' + par[j]);

      }
      var par = [];
      
   }

   contador = contador - 1;
} while (contador !== 0);

for (let n = 0; n < impar.length; n++) {
   console.log('impar[' + n + '] = ' + impar[n]);

}
for (let m = 0; m < par.length; m++) {
   console.log('par[' + m + '] = ' + par[m]);

}