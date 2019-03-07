var costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];
var losMasCaros = costos.filter(function(caro){
    return caro >= 53
});

console.log(losMasCaros);