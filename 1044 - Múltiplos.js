var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var entrada = lines.shift();
var xy = entrada.split(' ');
xy.sort(function (x, y) {
   return x - y;
});

var x = parseInt(xy[0]);
var y = parseInt(xy[1]);

var div = y % x;
var div2 = div / y
if (div2 === 0) {
   console.log('Sao Multiplos');
} else {
   console.log('Nao sao Multiplos');
}
//console.log(x,y)
//console.log(div)
