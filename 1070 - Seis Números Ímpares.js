var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());
var entradaMaisSeis = entrada + 11;
for(i = entrada; i <= entradaMaisSeis; i++){
    if (i % 2 === 0) {        
    } else {
        console.log(i);
    }
}