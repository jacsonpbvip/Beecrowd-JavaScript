var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');



var entradaQuantidade = parseInt(lines.shift());
for (let i = 0; i < entradaQuantidade; i++) {
    var entrada = parseFloat(lines.shift());
    if (entrada === 0) {
        console.log("NULL");
    }
    else if (entrada % 2 === 0 && entrada > 0) {
        console.log("EVEN POSITIVE");
    } else if (entrada % 2 === 0 && entrada < 0) {
        console.log("EVEN NEGATIVE");
    } else if (entrada % 2 !== 0 && entrada > 0) {
        console.log("ODD POSITIVE");
    } else if (entrada % 2 !== 0 && entrada < 0){
        console.log("ODD NEGATIVE");
    }

}