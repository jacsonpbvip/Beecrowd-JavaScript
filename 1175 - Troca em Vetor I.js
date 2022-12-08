var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var array = [];
var contador = 0;
for (let i = 0; i < 20; i++) {
   var entrada = parseFloat(lines.shift());
   array.unshift(entrada);  
}
for (let j = 0; j < array.length; j++) {
   console.log("N[" + contador +"] = " + array[j]);
   contador = contador + 1;   
}