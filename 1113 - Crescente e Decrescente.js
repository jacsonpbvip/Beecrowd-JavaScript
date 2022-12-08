var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do {
        entrada = lines.shift().split(' ');
        
        var primeiroNumero = parseInt(entrada[0]);
        var segundoNumero = parseInt(entrada[1]);


        if (primeiroNumero > segundoNumero) {
            console.log("Decrescente");
        } else if (primeiroNumero < segundoNumero) {
            console.log("Crescente");
        }
        
        
           
} while (primeiroNumero !== segundoNumero);