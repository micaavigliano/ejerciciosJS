var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
var numerosPares = [];
var numerosImpares = [];

masNumeros.forEach(function(masNumeros){
    if(masNumeros % 2){
        numerosPares.push(masNumeros);
    } else {
        numerosImpares.push(masNumeros);
    }
})

console.log(numerosPares);
console.log(numerosImpares);