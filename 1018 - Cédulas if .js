
  var input = require('fs').readFileSync('/dev/stdin', 'utf8');
  var lines = input.split('\n');
  
  
  var dinheiro1 = lines.shift();
  
  var dinheiro = parseInt(dinheiro1);
  console.log(dinheiro);
  troco = dinheiro;
  var nota100 = 0;
  var nota50 = 0;
  var nota20 = 0;
  var nota10 = 0;
  var nota5 = 0;
  var nota2 = 0;
  var nota1 = 0;
  
  do {
     if (troco >= 100) {
        var troco = troco - 100;
        nota100 = nota100 + 1;
  
     } else {
        troco = troco;
        if (troco >= 50) {
           troco = troco - 50;
           nota50 = nota50 + 1;
  
        } else {
           if (troco >= 20) {
              troco = troco - 20;
              nota20 = nota20 + 1;
  
           } else {
              if (troco >= 10) {
                 troco = troco - 10;
                 nota10 = nota10 + 1;
  
              } else {
                 if (troco >= 5) {
                    troco = troco - 5;
                    nota5 = nota5 + 1;
                 } else {
                    if (troco >= 2) {
                       troco = troco - 2;
                       nota2 = nota2 + 1;
                    }
                    else {
                       troco = troco - 1;
                       nota1 = nota1 + 1;
                    }
                 }
              }
           }
  
        }
  
     }
  }
  while (troco > 0);
  //console.log(typeof (nota100));
  console.log(nota100 + " nota(s) de R$ 100,00");
  console.log(nota50 + " nota(s) de R$ 50,00");
  console.log(nota20 + " nota(s) de R$ 20,00");
  console.log(nota10 + " nota(s) de R$ 10,00");
  console.log(nota5 + " nota(s) de R$ 5,00");
  console.log(nota2 + " nota(s) de R$ 2,00");
  console.log(nota1 + " nota(s) de R$ 1,00");