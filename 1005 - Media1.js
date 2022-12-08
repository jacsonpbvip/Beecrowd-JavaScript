var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = lines.shift();
var B = lines.shift();

var pesoA = 3.5;
var pesoB = 7.5;

var pesoTotal = pesoA + pesoB;

var media = ((pesoA * A )+ (pesoB * B)) / pesoTotal ;

console.log("MEDIA = " + media.toFixed(5));