var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var entrada = lines.shift() ;

var entradaLimpa = entrada.split(' ');
var A = parseInt(entradaLimpa[0]);
var B = parseInt(entradaLimpa[1]);
var C = parseInt(entradaLimpa[2]);

 
var maiorAB = (A + B + Math.abs(A - B)) / 2 ;
var maiorXC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;

console.log(maiorXC + " eh o maior");