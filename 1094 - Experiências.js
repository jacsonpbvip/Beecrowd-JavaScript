var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entradaQuantidade = parseInt(lines.shift());
var sapos = 0;
var coelhos = 0;
var ratos = 0;
do {
    var entrada = lines.shift();
    if (entrada.includes("C") === true) {
        var array = entrada.split(' ');
        coelhos = parseInt(array[0]) + coelhos;

    } if (entrada.includes("S") === true) {
        var array = entrada.split(' ');
        sapos = parseInt(array[0]) + sapos;

    } if (entrada.includes("R") === true) {
        var array = entrada.split(' ');
        ratos = parseInt(array[0]) + ratos;

    }

    entradaQuantidade = entradaQuantidade - 1;
} while (entradaQuantidade > 0);

totalCobaias = sapos + coelhos + ratos;

calcularPorcentagemCoelhos = (coelhos * 100) / totalCobaias;
calcularPorcentagemSapo = (sapos * 100) / totalCobaias;
calcularPorcentagemRatos = (ratos * 100) / totalCobaias;




console.log('Total: ' + totalCobaias + ' cobaias');
console.log('Total de coelhos: ' + coelhos);
console.log('Total de ratos: ' + ratos);
console.log('Total de sapos: ' + sapos);
console.log('Percentual de coelhos: ' + calcularPorcentagemCoelhos.toFixed(2) + " %");
console.log('Percentual de ratos: ' + calcularPorcentagemRatos.toFixed(2) + " %");
console.log('Percentual de sapos: ' + calcularPorcentagemSapo.toFixed(2) + " %");