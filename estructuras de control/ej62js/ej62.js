//VERSION SWITCH
​
var numeroDeMes = 18;
var nombreDelMes = null;
var cantidadDeDias = null;

switch(numeroDeMes) {
	case 1:
		nombreDelMes = 'El mes es enero '
		cantidadDeDias = 'y tiene 31 días.'
		break;
	case 2:
		nombreDelMes = 'El mes es febrero '
		cantidadDeDias = 'y tiene 28/29 días.'
		break;
	case 3:
		nombreDelMes = 'El mes es marzo '
		cantidadDeDias = 'y tiene 31 días.'
		break;
	case 4:
		nombreDelMes = 'El mes es abril '
		cantidadDeDias = 'y tiene 30 días.'
		break;
	case 5:
		nombreDelMes = 'El mes es mayo '
		cantidadDeDias = 'y tiene 31 días.'
		break;
	case 6:
		nombreDelMes = 'El mes es junio '
		cantidadDeDias = 'y tiene 30 días.'
		break;
	case 7:
		nombreDelMes = 'El mes es julio '
		cantidadDeDias = 'y tiene 31 días.'
		break;
	case 8:
		nombreDelMes = 'El mes es agosto '
		cantidadDeDias = 'y tiene 31 días.'
		break;
	case 9:
		nombreDelMes = 'El mes es septiembre '
		cantidadDeDias = 'y tiene 30 días.'
		break;
	case 10:
		nombreDelMes = 'El mes es octubre '
		cantidadDeDias = 'y tiene 31 días.'
		break;
	case 11:
		nombreDelMes = 'El mes es noviembre '
		cantidadDeDias = 'y tiene 30 días.'
		break;
	case 12:
		nombreDelMes = 'El mes es diciembre '
		cantidadDeDias = 'y tiene 31 días.'
		break;
	default:
		nombreDelMes = 'Ingrese un número entre 1 y 12';
		cantidadDeDias = '';
}
 console.log(nombreDelMes + cantidadDeDias);
// Versión SWITCH funciona con todas las variantes.
​
//VERSION IF/ELSE/IF
​
var numeroDeMes = 5;

if (numeroDeMes === 1) {
	console.log('El mes seleccionado es enero y tiene 31 días.');
} else if (numeroDeMes === 2) {
	console.log('El mes seleccionado es febrero y tiene 28/29 días.');
} else if (numeroDeMes === 3) {
	console.log('El mes seleccionado es marzo y tiene 31 días.');
} else if (numeroDeMes === 4) {
	console.log('El mes seleccionado es abril y tiene 30 días.');
} else if (numeroDeMes === 5) {
	console.log('El mes seleccionado es mayo y tiene 31 días.');
} else if (numeroDeMes === 6) {
	console.log('El mes seleccionado es junio y tiene 30 días.');
} else if (numeroDeMes === 7) {
	console.log('El mes seleccionado es julio y tiene 31 días.');
} else if (numeroDeMes === 8) {
	console.log('El mes seleccionado es agosto y tiene 31 días');
} else if (numeroDeMes === 9) {
	console.log('El mes seleccionado es septiembre y tiene 30 días.');
} else if (numeroDeMes === 10) {
	console.log('El mes seleccionado es octubre y tiene 31 días.');
} else if (numeroDeMes === 11) {
	console.log('El mes seleccionado es noviembre y tiene 30 días.');
} else if (numeroDeMes === 12) {
	console.log('El mes seleccionado es diciembre y tiene 31 días.');
} else {
	console.log('Por favor ingrese un número entre 1 y 12');
}
​
//IT'S ALIVE