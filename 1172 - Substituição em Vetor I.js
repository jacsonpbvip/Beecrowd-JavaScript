var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var array = [];
var numeroDeLinhas = 10;
do {
 var entrada = parseInt(lines.shift());
 array.push(entrada);
 numeroDeLinhas = numeroDeLinhas - 1;
} while (numeroDeLinhas !== 0);
contador = 0;
for (let i = 0; i < array.length; i++) {
   if (array[i] <= 0) {
      array[i] = 1;
   }
   console.log("X["+contador+"] = "+ array[i]);
   contador = contador + 1;
   
}