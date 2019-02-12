var a = 1;
var b = 3;

do{
    console.log("a", a, "b", b, "resultado", a + b);
    a = a + b;
    b += 2;
} while (b <= 1000)

