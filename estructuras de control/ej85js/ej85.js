var a = 0;
var b = 0;
var c = 1;
var vuelta = 0;
console.log(b);
console.log(c);

do {
    console.log(a + b);
    a + b;
    b = c;
    c = a;
    vuelta++;
} while (vuelta < 10);


