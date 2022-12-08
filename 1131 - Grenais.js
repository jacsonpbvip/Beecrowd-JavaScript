var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var inter = 0;
var gremio = 0;
var empates = 0;
var qtdJogos = 0;

do {
    var entrada = lines.shift().split(' ');

    var golsInter = parseInt(entrada[0]);
    var golsGremio = parseInt(entrada[1]);

    if (golsInter > golsGremio) {
        inter = inter + 1;
    } else if (golsGremio > golsInter) {
        gremio = gremio + 1;
        
    }else if (golsGremio === golsInter){
        empates = empates + 1;
    }
    var qtdJogos = qtdJogos + 1;
    console.log('Novo grenal (1-sim 2-nao)');
    var continuar = parseInt(lines.shift());
    //console.log(inter,gremio);


} while (continuar === 1);
console.log(qtdJogos + " grenais");
console.log('Inter:' + inter);
console.log('Gremio:' + gremio);
console.log('Empates:' + empates);


if (gremio > inter) {
console.log('Gremio venceu mais');
}else if (inter > gremio){
console.log('Inter venceu mais');
}else if (gremio === inter){
    console.log('Nao houve vencedor');
}