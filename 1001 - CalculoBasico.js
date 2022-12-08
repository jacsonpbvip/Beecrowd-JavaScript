var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split("\n");

var valor1 = parseInt(valores.shift());
var valor2 = parseInt(valores.shift());
var soma = valor1 + valor2

console.log("X = " + soma);