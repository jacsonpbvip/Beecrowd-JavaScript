var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var v = [
    entrada1 = parseInt(lines.shift()),
    entrada2 = parseInt(lines.shift()),
    entrada3 = parseInt(lines.shift()),
    entrada4 = parseInt(lines.shift()),
    entrada5 = parseInt(lines.shift()),
];

var numeros = v;
var numerosImpares = 0;
var numerosNegativos = 0;
var numerosPositivos = 0;
var numerosPares = 0;
for (var i = 0; i < numeros.length; i++) {    
    if (numeros[i] % 2 === 0) {
        numerosPares++;
    } else {
        numerosImpares++;
    }

    if (numeros[i] > 0) {
       numerosPositivos++;
    } else if (numeros[i] < 0) {
        numerosNegativos++;
    }
}


console.log(numerosPares + " valor(es) par(es)");
console.log(numerosImpares + " valor(es) impar(es)");
console.log(numerosPositivos + " valor(es) positivo(s)");
console.log(numerosNegativos + " valor(es) negativo(s)");