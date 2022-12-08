var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift();
var abc = entrada.split(' ');



var horaInicial = parseInt(abc[0]);
var horaFinal = parseInt(abc[1]);

if (horaInicial > 12 || horaInicial === 0) {
   var calcularHoras = (24 - horaInicial) + horaFinal;
} else{
   var calcularHoras = horaFinal - horaInicial;
}

console.log('O JOGO DUROU '+ calcularHoras + ' HORA(S)');

//console.log(horaInicial,horaFinal)


