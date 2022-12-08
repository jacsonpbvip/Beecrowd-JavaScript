var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift();
var abc = entrada.split(' ');

var salario = parseFloat(abc[0]);
var newSalario = 0;
var reajuste = 0;
var aumento = 0;
var novoSalario = 0;

if (salario > 0 && salario <= 400) {
    reajuste = (salario / 100) * 15;
    novoSalario = reajuste + salario;
    aumento = 15;

} if (salario >= 400.01 && salario <= 800) {
    reajuste = (salario / 100) * 12;
    novoSalario = reajuste + salario;
    aumento = 12;

} if (salario >= 800.01 && salario <= 1200) {
    reajuste = (salario / 100) * 10;
    novoSalario = reajuste + salario;
    aumento = 10;

} if (salario >= 1200.01 && salario <= 2000) {
    reajuste = (salario / 100) * 7;
    novoSalario = reajuste + salario;
    aumento = 7;

} if(salario > 2000) {
    reajuste = (salario / 100) * 4;
    novoSalario = reajuste + salario;
    aumento = 4;

}

console.log('Novo salario: ' + novoSalario.toFixed(2));
console.log('Reajuste ganho: ' + reajuste.toFixed(2));
console.log('Em percentual: ' + aumento+" %");