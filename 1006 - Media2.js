var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift();
var B = lines.shift();
var C = lines.shift();


var pesoA = 2.0;
var pesoB = 3.0;
var pesoC = 5.0;


var pesoTotal = pesoA + pesoB + pesoC;

var media = ((pesoA * A )+ (pesoB * B) + (pesoC * C)) / pesoTotal ;

console.log("MEDIA = " + media.toFixed(1));