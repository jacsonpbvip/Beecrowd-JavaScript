var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());
var array = [];

var calcular = 1000 / entrada;

for (let j = 0; j < calcular; j++) {
   for (let i = 0; i < entrada; i++) {

      array.push(i);
   }
}
for (let y = 0; y < array.length; y++) {
   if (y <= 1000) {

      console.log("N [" + y + "] = " + array[y]);
   } else {
      y++;
   }   
   
}