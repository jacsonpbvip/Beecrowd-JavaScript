var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var entrada = lines.shift() ;

var entradaLimpa = entrada.split(' ');
var A = parseFloat(entradaLimpa[0]);
var B = parseFloat(entradaLimpa[1]);
var C = parseFloat(entradaLimpa[2]);

var trinagulo = (A * C)/2;
var circulo = 3.14159*(C*C);
var trapezio = ((A+B) * C)/2 ;
var quadrado = B * B;
var retangulo = A * B;

console.log("TRIANGULO: " + trinagulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));