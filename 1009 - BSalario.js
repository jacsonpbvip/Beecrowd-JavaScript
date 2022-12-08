var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nomeVendendor =  lines.shift() ;
var salarioFixo = parseFloat( lines.shift() );
var vendasEfetuadas = parseFloat( lines.shift() );

var salarioFinal = salarioFixo + ((vendasEfetuadas/100)*15);

console.log("TOTAL = R$ " + salarioFinal.toFixed(2));