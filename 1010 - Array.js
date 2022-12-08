var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');



var X = lines.shift() ;
var Y = lines.shift() ;

var peca1 = X.split(' ');
var peca2 = Y.split(' ');

for (let index = 0; index < peca1.length; index++) {
    const element = peca1[index];    
    
}
for (let index = 0; index < peca2.length; index++) {
    const element = peca2[index];    
}

var peca1code = peca1[0];
var peca1Quantidade = peca1[1];
var peca1Valor = peca1[2];

var peca2code = peca2[0];
var peca2Quantidade = peca2[1];
var peca2Valor = peca2[2];


var somaPeca1 = peca1Quantidade * peca1Valor;
var somaPeca2 = peca2Quantidade * peca2Valor;


var soma = somaPeca1 +somaPeca2;
console.log("VALOR A PAGAR: R$ " + soma.toFixed(2));