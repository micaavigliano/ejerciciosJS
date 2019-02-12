var nombre = null;
if (nombre) {
	console.log('Bienvenida, ' + nombre);
} else {
	console.log('Por favor, ingrese su nombre');
}

//aparece: "Por favor, ingrese su nombre" porque es un valor false (null)

var nombre = 'Micaela';
if (nombre) {
	console.log('Bienvenida, ' + nombre);
} else {
	console.log('Por favor, ingrese su nombre');
}

//aparece el valor de nombre ya que es un valor true