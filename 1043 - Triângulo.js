var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift();
var abc = entrada.split(' ');
abc.sort(function (x, y) {
    return y - x;
});
var a = parseInt(abc[0]).toFixed(1);
var b = parseInt(abc[1]).toFixed(1);
var c = parseInt(abc[2]).toFixed(1);

var a2 = a * a;
var b2 = b * b;
var c2 = c * c;
var b2c2 = b2 + c2;
var bc = b + c;

if (a >= bc) {
    console.log('NAO FORMA TRIANGULO');
}else{
 if (a2 === b2c2) {
    console.log('TRIANGULO RETANGULO');

} if (b2c2 < a2) {
    console.log('TRIANGULO OBTUSANGULO');

} if (a2 < b2c2) {
    console.log('TRIANGULO ACUTANGULO');

} if (a === b && b === c && c === a) {
    console.log('TRIANGULO EQUILATERO');
}else{
 if (a === b) {
    console.log('TRIANGULO ISOSCELES');

} if (c === b) {

    console.log('TRIANGULO ISOSCELES');
}}}

