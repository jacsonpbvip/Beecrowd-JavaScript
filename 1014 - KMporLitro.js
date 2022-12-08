var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var carro = {
 velocidade : parseInt(lines.shift()) ,
 gastoCombustivel : parseFloat(lines.shift()),
 
 kmPorLitros(){
 var litrosKm = this.velocidade / this.gastoCombustivel
 console.log(litrosKm.toFixed(3) + " km/l")
 },

}
 carro.kmPorLitros()