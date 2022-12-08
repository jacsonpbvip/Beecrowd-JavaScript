var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());

for (let i = 1; i <= entrada; i++) {
     if (entrada % i === 0) {
      console.log(i);
     }
}