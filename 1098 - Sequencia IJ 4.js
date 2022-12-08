var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var j = 0;
var i1 = 1;
var i2 = 2;
var i3 = 3;
for (let i = 0; i < 10; i++) {
    if (i === 0) {
        console.log("I=" + j + " J=" + i1);
        console.log("I=" + j + " J=" + i2);
        console.log("I=" + j + " J=" + i3);
    } if (i === 4 || i === 9) {
        var j = j + 0.2;
        var k = i1 + j;
        var m = i2 + j;
        var o = i3 + j;
        console.log("I=" + j.toFixed(0) + " J=" + k.toFixed(0));
        console.log("I=" + j.toFixed(0) + " J=" + m.toFixed(0));
        console.log("I=" + j.toFixed(0) + " J=" + o.toFixed(0));
     } else {
        var j = j + 0.2;
        var k = i1 + j;
        var m = i2 + j;
        var o = i3 + j;
        console.log("I=" + j.toFixed(1) + " J=" + k.toFixed(1));
        console.log("I=" + j.toFixed(1) + " J=" + m.toFixed(1));
        console.log("I=" + j.toFixed(1) + " J=" + o.toFixed(1));
    }
   
}