var costos = [ 12.5, 56, 98, 45.75 ];

var agregarIVA = function (costo) {
  return costo * 1.21;
}

var sumarGanancia = function (costo) {
  return costo * 1.5;
}

var preciosFinales = costos.map(function(costos){
    return costos * 1.21 * 1.5
});

console.log(preciosFinales);