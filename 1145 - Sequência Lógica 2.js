var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = (lines.shift()).split(' ');
var x = parseInt(entrada[0]);
var y = parseInt(entrada[1]);
var array = [];
linha = 0;
for (let i = 1; i <= y; i++) {
   
   linha = linha + 1;
   array.push(i);

  if (linha === x) {
   console.log(array.join(' '));   
   linha = 0;
   array = [];
  }
}