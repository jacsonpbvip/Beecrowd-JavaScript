var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());
for(i = 0; i <= entrada; i++){
    if (i % 2 === 0) {        
    } else {
        console.log(i);
    }
}