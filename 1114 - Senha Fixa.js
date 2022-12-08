var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

do {
        entrada = lines.shift().split(' ');
        
        var senha = parseInt(entrada[0]);
        

        if (senha === 2002) {
            console.log("Acesso Permitido");
        } else {
            console.log("Senha Invalida");
        }
           
} while (senha !== 2002);