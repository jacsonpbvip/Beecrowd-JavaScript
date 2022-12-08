var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var array = [0];
var numeros = 0;
maiorNumero = 0;
for (let i = 0; i <= 100; i++) {
        entrada = parseInt(lines.shift());
       
          numeros = entrada;
          array.push(numeros);        
          if(entrada > maiorNumero){
            maiorNumero = entrada;

          }
}

console.log(maiorNumero);
console.log(array.indexOf(maiorNumero));