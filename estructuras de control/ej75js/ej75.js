//serie fibonacci

var a = 0;
var b = 0;
var c = 1;
var vuelta = 0;
console.log(b);
console.log(c);
while (vuelta < 10) {
    a = b + c;
    console.log(a);
    b = c;
    c = a;
    vuelta++;
}


