var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift();
var abc = entrada.split(' ');

var horaInicial = parseInt(abc[0]);
var minutoInicial = parseInt(abc[1]);


var horaFinal = parseInt(abc[2]);
var minutoFinal = parseInt(abc[3]);

var calculoHoras = horaFinal - horaInicial;
if (calculoHoras < 0) {
   calculoHoras = 24 + (horaFinal -horaInicial)   
}
var calculoMinutos = minutoFinal - minutoInicial
if (calculoMinutos < 0) {
   calculoMinutos = 60 + (minutoFinal - minutoInicial)
   calculoHoras = calculoHoras - 1   
}
if (horaInicial === horaFinal && minutoFinal == minutoInicial) {
   console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)")
}else{
  console.log("O JOGO DUROU " + calculoHoras + " HORA(S) E " + calculoMinutos + " MINUTO(S)"); 
}



