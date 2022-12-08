var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var entradaSegundos = parseInt(lines.shift()); 
var quantiaMinutos = entradaSegundos % 3600;
var quantiSegundos = quantiaMinutos % 60;

var horas = parseInt(entradaSegundos / 3600);

var minutos = parseInt(quantiaMinutos / 60);

var segundos = parseInt(quantiSegundos);

console.log(horas + ":" + minutos + ":" + segundos);