var notasDeTPs = [4, 7, 8, 5, 10];
var notaFinal = notasDeTPs.reduce(function(total, nota){
    return total + nota;
});

console.log(notaFinal / 5);

