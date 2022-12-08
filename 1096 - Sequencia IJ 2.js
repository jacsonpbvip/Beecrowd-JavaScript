var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i <= 10; i++) {
   if (i % 2 !== 0) {
         
    console.log("I=" + i + " J=7");    
    console.log("I=" + i + " J=6");  
    console.log("I=" + i + " J=5"); 
   }
   
}