var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());

for (let i = 0; i <= entrada; i++) {
    if (i > 0) {
        notas = lines.shift().split(' ');
        media = ((notas[0] / 10) * 2) + ((notas[1] / 10) * 3) + ((notas[2] / 10) * 5);
        console.log(media.toFixed(1));
    }

}