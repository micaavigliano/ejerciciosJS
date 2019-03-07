var notasDeTPs = [4, 7, 8, 5, 10];
var notaFinal = 0;

for (var i = 0; i < notasDeTPs.length; i++) {
    (notaFinal += notasDeTPs[i])
}

console.log(notaFinal / notasDeTPs.length);