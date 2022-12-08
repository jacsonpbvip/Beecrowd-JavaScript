var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());
var entrada = entrada - 1;
var normal = 1;
var quadrado = 1;
var cubo = 1;
console.log("1 1 1");
do {
    normal = normal + 1;
    quadrado = normal * normal;
    cubo = normal * normal * normal;
console.log(normal + ' ' + quadrado + ' ' + cubo);
entrada = entrada - 1;

} while (entrada !==0);