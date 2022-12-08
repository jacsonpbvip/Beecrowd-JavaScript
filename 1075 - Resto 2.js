var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');



var entrada = parseInt(lines.shift());
for (let i = 1; i <= 10000; i++) {
    if ((i % entrada) === 2) {
        console.log(i);
    }   
}