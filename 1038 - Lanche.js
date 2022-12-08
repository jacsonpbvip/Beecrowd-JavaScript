var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift();
var entrada1 = entrada.split(' ');
var code = parseInt(entrada1[0]);
var quantProduto = parseInt(entrada1[1]);
var valorProduto = 0;
if (code == "1") {
    valorProduto = 4.00; 
}
if (code == "2") {
    valorProduto = 4.50;
}
else if (code == "3") {
    valorProduto = 5.00;
}
else if (code == "4") {
    valorProduto = 2.00;
}
else if (code == "5") {
    valorProduto = 1.50;
}

var total = valorProduto * quantProduto;

console.log("Total: R$ " + total.toFixed(2));