var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift();
var entrada2 = parseFloat(lines.shift());
var entradaLimpa = entrada.split(' ');

var n1 = entradaLimpa[0];
var n2 = entradaLimpa[1];
var n3 = entradaLimpa[2];
var n4 = entradaLimpa[3];

var median1 = (n1 / 10) * 2;
var median2 = (n2 / 10) * 3;
var median3 = (n3 / 10) * 4;
var median4 = (n4 / 10) * 1;

var mediaTotal = (median1 + median2 + median3 + median4);

if (mediaTotal >= 7.0) {
    console.log("Media: " + mediaTotal.toFixed(1));
    console.log("Aluno aprovado.");


}
if (mediaTotal < 4.9) {
    var mediaReprovado = (Math.trunc((mediaTotal)*10))/10;
    console.log("Media: " + mediaReprovado.toFixed(1));

}
if (entrada2 > 0) {


    mediaFinal = (entrada2 + mediaTotal) / 2;
    console.log("Media: " + mediaTotal.toFixed(1));
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + entrada2);

    if (mediaFinal >= 5) {
        console.log("Aluno aprovado.");
        console.log("Media final: " + mediaFinal.toFixed(1));


    } else {
        console.log("Aluno reprovado.");
    }
}
