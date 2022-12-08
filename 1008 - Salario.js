var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeroFuncionario =  lines.shift() ;
var horasTrabalhadas = lines.shift() ;
var valorHoras = lines.shift() ;

var salario = horasTrabalhadas * valorHoras;

console.log("NUMBER = " + numeroFuncionario);

console.log("SALARY = U$ " + salario.toFixed(2));