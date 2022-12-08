
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var entradaDias = lines.shift();

var entrada = parseInt(entradaDias);
var diasTotais = entrada;
var dias = 0;
var meses = 0;
var anos = 0;

do {
   
   if (diasTotais >= 365) {
      anos = anos + 1;
      diasTotais = diasTotais - 365;

   } else {
      
      if (diasTotais >= 30) {
         meses = meses + 1;
         diasTotais = diasTotais - 30;

      } else {       
         dias = dias + diasTotais;
         diasTotais = 0;
      }
   }

} while (diasTotais > 0);
  
console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");