var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var entrada = lines.shift();
var xyz = entrada.split(' ');

var abc = entrada.split(' ');
var a = parseInt(abc[0]);
var b = parseInt(abc[1]);
var c = parseInt(abc[2]);


xyz.sort(function (a, b) {
   return a - b;
});

var x = parseInt(xyz[0]);
var y = parseInt(xyz[1]);
var z = parseInt(xyz[2]);

console.log(x);
console.log(y);
console.log(z);
console.log("")
console.log(a);
console.log(b);
console.log(c);

