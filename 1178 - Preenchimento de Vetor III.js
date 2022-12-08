var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseFloat(lines.shift());
for (let i = 0; i < 100; i++) {
   //decimal com 4 casas
   var x = entrada.toLocaleString('pt-br', { minimumFractionDigits: 4,useGrouping: false});
   //trocar ',' por '.'
   console.log("N["+i+"] = " + x.toString().replace(",", "."));
   entrada = entrada / 2;   
}