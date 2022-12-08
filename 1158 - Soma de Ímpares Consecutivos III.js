var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());
do {
   var xy = lines.shift().split(' ');
   var x = parseInt(xy[0]);
   var y = parseInt(xy[1]);
   var z = (x + y + y);
   //console.log(x,y)
   var soma = 0;
   for (let i = x; i < z; i++) {
      if (i % 2 !== 0) {
         soma = soma + i;
      }
   }
   entrada = entrada - 1;
   console.log(soma);
} while (entrada !== 0);