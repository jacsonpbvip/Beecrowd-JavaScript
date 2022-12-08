var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


  var X = lines.shift() ;
  var Y = lines.shift() ;

  var linha1 = X.split(' ');
  var linha2 = Y.split(' '); 
  var X11 = linha1[0];
  var X22 = linha2[0];
  var Y11 = linha1[1];
  var Y22 = linha2[1];
  var X1 = parseFloat(X11);
  var X2 = parseFloat(X22); 
  var Y1 = parseFloat(Y11);
  var Y2 = parseFloat(Y22); 

   var  subtracaoX = X1 - X2;
   var  subtracaoY = Y1 - Y2;
   var  subtracaoXQuadrado = subtracaoX * subtracaoX;
   var  subtracaoYQuadrado = subtracaoY * subtracaoY;
   var  soma = subtracaoXQuadrado + subtracaoYQuadrado;
   var  valorFinal = Math.sqrt(soma) ;


   console.log(valorFinal.toFixed(4));