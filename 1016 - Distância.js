
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


  var kilometros = parseFloat(lines.shift()) ;
  
  var distancia = kilometros * 2;

  console.log(distancia + " minutos");