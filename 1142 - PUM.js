var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = parseInt(lines.shift());
var um = 1;
var dois = 2;
var tres = 3;
for (let i = 0; i < entrada; i++) {
    console.log(um + " " + dois +" "+ tres + " PUM");
    um = um + 4;
    dois = dois + 4;
    tres = tres + 4;   
}