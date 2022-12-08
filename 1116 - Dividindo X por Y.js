var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


entrada = parseInt(lines.shift());
do {
    var qntEntradas = entrada - 1;

    var xy = lines.shift().split(' ');
    var primeiroNumero = parseFloat(xy[0]);
    var segundoNumero = parseFloat(xy[1]);


    var calcular = primeiroNumero / segundoNumero;


    if (calcular === Number.NEGATIVE_INFINITY || calcular === Number.POSITIVE_INFINITY) {
        console.log('divisao impossivel');

    } else {
        console.log(calcular.toFixed(1));

    }
    entrada = entrada - 1;
} while (qntEntradas > 0);