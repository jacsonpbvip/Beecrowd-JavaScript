var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var entrada = lines.shift();
var xyz = entrada.split(' ');
var a = parseFloat(xyz[0]);
var b = parseFloat(xyz[1]);
var c = parseFloat(xyz[2]);
var ab = a + b;
var ac = a + c;
var bc = b + c;

if(a < bc && b < ac && c < ab){
   perimetro = a + b + c;
  console.log("Perimetro = " + perimetro.toFixed(1));
}else{
   trapezio = ((a+b) * c)/2 ;
   console.log("Area = " + trapezio.toFixed(1));
}
