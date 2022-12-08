var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var entrada = lines.shift();
var xy = entrada.split(' ');
var x = parseFloat(xy[0]);
var y = parseFloat(xy[1]);
if(x === 0.0 && y === 0.0){
   console.log("Origem");
}else if(x > 0.0 && y > 0.0){
   console.log("Q1");
}else if(x < 0.0 & y > 0.0){
   console.log("Q2");
}else if(x < 0.0 && y < 0.0){
   console.log("Q3");
}else if(x > 0.0 && y < 0.0){
   console.log("Q4");
}else if( y === 0.0){
   console.log("Eixo X");
}else if( x === 0.0){
   console.log("Eixo Y");
}