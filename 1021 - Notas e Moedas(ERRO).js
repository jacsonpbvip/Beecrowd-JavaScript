var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var dinheiro2 = lines.shift();
novoValor = dinheiro2.replace(",",".");
var dinheiro = parseFloat(novoValor);
troco = dinheiro;
var nota100 = 0;
var nota50 = 0;
var nota20 = 0;
var nota10 = 0;
var nota5 = 0;
var nota2 = 0;


var moeda1 = 0;
var moeda050 = 0;
var moeda025 = 0;
var moeda010 = 0;
var moeda05 = 0;
var moedas01 = 0;

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
                     if (troco >= 1) {
                        troco = troco - 1;
                        moeda1 = moeda1 + 1;
                     } else {
                        if (troco >= 0.50) {
                           troco = troco - 0.50;
                           moeda050 = moeda050 + 1;

                        } else {
                           if (troco >= 0.25) {
                              troco = troco - 0.25;
                              moeda025 = moeda025 + 1;

                           } else {
                              if (troco >= 0.10) {
                                 troco = troco - 0.10;
                                 moeda010 = moeda010 + 1;

                              } else {
                                 if (troco >= 0.05) {
                                    troco = troco - 0.05;
                                    moeda05 = moeda05 + 1;

                                 } else {
                                    if (troco > 0.01) {
                                       troco = troco - 0.01;
                                       moedas01 = moedas01 + 1;

                                    } else {
                                       troco = 0;
                                    }

                                 }

                              }

                           }
                        }

                     }
                  }
               }
            }

         }

      }
   }
}

while (troco > 0);

console.log("NOTAS:");
console.log(nota100 + " nota(s) de R$ 100.00");
console.log(nota50 + " nota(s) de R$ 50.00");
console.log(nota20 + " nota(s) de R$ 20.00");
console.log(nota10 + " nota(s) de R$ 10.00");
console.log(nota5 + " nota(s) de R$ 5.00");
console.log(nota2 + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(moeda1 + " moeda(s) de R$ 1.00");
console.log(moeda050 + " moeda(s) de R$ 0.50");
console.log(moeda025 + " moeda(s) de R$ 0.25");
console.log(moeda010 + " moeda(s) de R$ 0.10");
console.log(moeda05 + " moeda(s) de R$ 0.05");
console.log(moedas01 + " moeda(s) de R$ 0.01");