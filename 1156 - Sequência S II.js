var soma = 1;
var pares = 2;
for (let i = 3; i <= 39; i++) {
   if (i % 2 !== 0) {
      soma = soma + (i / pares);
      pares = pares * 2;
   }
}
console.log(soma.toFixed(2));