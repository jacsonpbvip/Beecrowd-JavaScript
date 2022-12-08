var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());

for(i = 0; i <= entrada; i++){
    if (i % 2 === 0 && i > 0) {
        //console.log(i);
        var calcular = i*i;
        console.log(i + "^2 = " + calcular);
    }
}