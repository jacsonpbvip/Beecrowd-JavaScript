var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = lines.shift();
var xy = X.split(' ');
var entrada = parseInt(xy);

 if (entrada === 1 ) {
   console.log('January');
 }else if (entrada === 2 ){
    console.log('February');
 }else if (entrada === 3){
    console.log('March');
 }else if (entrada === 4){
    console.log('April');
 }else if (entrada === 5){
    console.log('May');
 }else if (entrada === 6){
    console.log('June');
 }else if (entrada === 7){
    console.log('July');
 }else if (entrada === 8){
    console.log('August');
 }else if (entrada === 9){
    console.log('September');
 }else if (entrada === 10){
    console.log('October');
 }else if (entrada === 11){
    console.log('November');
 }else if (entrada === 12){
    console.log('December');
 }