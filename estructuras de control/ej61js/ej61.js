//versión SWITCH
var numero = 4;
var nombreDelDia = null;

switch (numero) {
	case 7:
		nombreDelDia = 'El día seleccionado es domingo';
		break;
	case 6:
		nombreDelDia = 'El día seleccionado es sábado';
		break;
	case 5:
		nombreDelDia = 'El día seleccionado es viernes';
		break;
	case 4:
		nombreDelDia = 'El día seleccionado es jueves';
		break;
	case 3:
		nombreDelDia = 'El día seleccionado es miércoles';
		break;
	case 2:
		nombreDelDia = 'El día seleccionado es martes';
		break;
	case 1:
		nombreDelDia = 'El día seleccionado es lunes'
		break;
	default:
		nombreDelDia = 'Por favor seleccionar un número de 1 a 7';
}

console.log(nombreDelDia);

// versión IF/ELSE/IF

var numero = 4;
var nombreDelDia = null;

if (numero === 7){
	console.log(nombreDelDia = 'El día seleccionado es domingo');
	} else if (numero === 6) {
		console.log(nombreDelDia = 'El día seleccionado es sábado');
	} else if (numero === 5) {
		console.log(nombreDelDia = 'El día seleccionado es viernes');
	} else if (numero === 4) {
		console.log(nombreDelDia = 'El día seleccionado es jueves');
	} else if (numero === 3) {
		console.log(nombreDelDia = 'El día seleccionado es miércoles');
	} else if (numero === 2) {
		console.log(nombreDelDia = 'El día seleccionado es martes');
	} else if (numero === 1) {
		console.log(nombreDelDia = 'El día seleccionado es lunes');
	} else {
		console.log('Por favor seleccionar un número del 1 al 7');
	}


//FUNCIONAN AMBAS VERSIONES