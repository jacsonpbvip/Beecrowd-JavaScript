var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var array = [];
var entrada = parseInt(lines.shift());

for (let i = 0; i < 10; i++) {
   array.push(entrada);
   entrada = entrada + entrada   ;
}
for (let j = 0; j < array.length; j++) {
   console.log("N["+j+"] = "+array[j]);
}
