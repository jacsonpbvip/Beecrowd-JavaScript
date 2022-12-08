var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');



var entrada = parseInt(lines.shift());

var um = entrada * 1;
var dois = entrada * 2;
var tres = entrada * 3;
var quatro = entrada * 4;
var cinco = entrada * 5;
var seis = entrada * 6;
var sete = entrada * 7;
var oito = entrada * 8;
var nove = entrada * 9;
var dez = entrada * 10;




console.log("1 x " + entrada + " = " + um );
console.log("2 x " + entrada + " = " + dois );
console.log("3 x " + entrada + " = " + tres );
console.log("4 x " + entrada + " = " + quatro );
console.log("5 x " + entrada + " = " + cinco );
console.log("6 x " + entrada + " = " + seis );
console.log("7 x " + entrada + " = " + sete );
console.log("8 x " + entrada + " = " + oito );
console.log("9 x " + entrada + " = " + nove );
console.log("10 x " + entrada + " = " + dez );