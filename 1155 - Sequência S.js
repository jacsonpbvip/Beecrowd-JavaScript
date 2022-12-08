var s = 0;
for (let i = 1; i <= 100; i++) {
  s = (1/i) + s;
}
console.log(s.toFixed(2));