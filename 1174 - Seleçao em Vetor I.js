var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var array = [];

for (let i = 0; i < 100; i++) {
   var entrada = parseFloat(lines.shift());
   array.push(entrada);   
}
for (let j = 0; j < array.length; j++) {
   if (array[j] <= 10) {
      console.log("A[" + j + "] = " + array[j].toFixed(1));
   }
}