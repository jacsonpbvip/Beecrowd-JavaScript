var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do {
    entrada = lines.shift().split(' ');


    var primeiroNumero = parseInt(entrada[0]);
    var segundoNumero = parseInt(entrada[1]);



    if (primeiroNumero > 0 && segundoNumero > 0) {
        console.log('primeiro');
    } else if (primeiroNumero > 0 && segundoNumero < 0) {
        console.log('quarto');
    } else if (primeiroNumero < 0 && segundoNumero > 0) {
        console.log('segundo');
    } else if (primeiroNumero < 0 && segundoNumero < 0) {
        console.log('terceiro');
    }

} while (primeiroNumero !== 0 || segundoNumero !== 0);