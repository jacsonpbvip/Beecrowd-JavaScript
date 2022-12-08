var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

 var media = 0;
var array = [];
do {

    var entrada = parseFloat(lines.shift());
    //console.log(entrada)
     if (entrada >= 0.0 && entrada <= 10.0) {
        media = media + entrada;
        array.push(entrada);
    }else{
        console.log('nota invalida');
    }
    var calcularMedia = (array[0] + array[1]) / 2;
    //console.log(array)

} while (media < 10 );
console.log('media = ' + calcularMedia);