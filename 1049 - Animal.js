var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada1 = lines.shift().trim() ;
var entrada2 = lines.shift().trim() ;
var entrada3 = lines.shift().trim() ;

var animal = "";
if (entrada1 == "vertebrado") {
    if (entrada2 == "ave") {
        if (entrada3 == "carnivoro") {
          var  animal = "aguia";
        } else {
            animal = "pomba";
        }
    } if (entrada2 == "mamifero") {
        if (entrada3 == "onivoro") {
           var animal = "homem";

        } else {
          var  animal = "vaca";
        }

    }
} 
if (entrada1 == "invertebrado") {
    if (entrada2 == "inseto") {
        if (entrada3 == "hematofago") {
          var  animal = "pulga";

        } else {
          var  animal = "lagarta";

        }

    } if (entrada2 == "anelideo") {
        if (entrada3 == "hematofago") {
          var  animal = "sanguessuga";

        } else {
          var  animal = "minhoca";

        }

    }
}
console.log(animal);