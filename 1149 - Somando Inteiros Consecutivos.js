var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = (lines.shift()).split(' ');
var x = parseInt(entrada[0]);
var y = 0;
var soma = 0;
for (let i = 0; i < entrada.length; i++) {
  if (entrada[i] > 0) {
      y = entrada[i]; 
  }
}
for (let i = 0; i < y; i++) {
   soma = (x + i) + soma;
}
console.log(soma);