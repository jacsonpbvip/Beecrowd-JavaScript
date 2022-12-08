var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


  var tempoGasto = parseFloat(lines.shift()) ;
  var velocidadeMedia = parseFloat(lines.shift()) ;
  var gastoCarro = 12 ;
  var distancia = tempoGasto * velocidadeMedia ;
  var gastoViagem = distancia / gastoCarro ;

  console.log(gastoViagem.toFixed(3)) ;