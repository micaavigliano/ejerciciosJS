var productos = [ 'celular', 'notebook', 'monitor' ];
var costos = [ 12.5, 56, 98 ];

var agregarIVA = function (costo) {
  return costo * 1.21;
}

var sumarGanancia = function (costo) {
  return costo * 1.5;
}

var preciosFinales = productos.map(function(productos){
    return productos + ' ' + costos

});

console.log(preciosFinales);