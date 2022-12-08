var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split("\n");

var raio = valores.shift();

var area = (raio * raio) * 3.14159;


console.log("A=" + area.toFixed(4));