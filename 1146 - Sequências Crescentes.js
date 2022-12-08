var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do {
   var entrada = parseInt(lines.shift());
   var continuar = entrada;
   var array = []; 
   if (entrada > 0) {
      
   do {
     
      for (let i = 1; i <= entrada; i++) {
         array.push(i);
         continuar = continuar - 1;
      }
   } while (continuar !== 0);
   console.log(array.join(' '));
 }
   
   
} while (entrada !== 0);