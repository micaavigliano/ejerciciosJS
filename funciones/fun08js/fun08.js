var obtenerNombre = function() {
    return 'Micaela'
}

var obtenerSaludo = function() {
    return '¡Hola, ' + obtenerNombre() + '!'
}

var saludoTexto = obtenerSaludo();

console.log(saludoTexto);