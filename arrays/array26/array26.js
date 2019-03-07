var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
var numerosPares = [];
var numerosImpares = [];

for (var i = 0; i < masNumeros.length; i ++) {
    if (masNumeros[i] % 2) {
        numerosPares.push(masNumeros[i]);
    } else {
        numerosImpares.push(masNumeros[i])
    }
}

console.log(numerosImpares);
console.log(numerosPares);