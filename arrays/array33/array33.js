var valores = [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ];
var dobles = [];

console.log('valores: ' + valores);
// console.log('Dobles: ' + dobles)

valores.forEach(function(valores, indice, array){
    dobles = valores * 2
    console.log('Dobles: ' + dobles)
})

