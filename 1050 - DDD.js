var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = lines.shift();
var xy = X.split(' ');
var entrada = parseInt(xy);

if (entrada === 61) {
    console.log("Brasilia");   
}else if (entrada === 71) {
    console.log("Salvador");   
}else if (entrada === 11) {
    console.log("Sao Paulo");  
}else if (entrada === 21) {
    console.log("Rio de Janeiro");  
}else if (entrada === 32) {
    console.log("Juiz de Fora");  
}else if (entrada === 19) {
    console.log("Campinas"); 
}else if (entrada === 27) {
    console.log("Vitoria");
}else if (entrada === 31) {
    console.log("Belo Horizonte");  
}else{
  console.log("DDD nao cadastrado");
}