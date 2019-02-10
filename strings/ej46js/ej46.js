var usuarioYPassword = 'ada2019,12345';
var nombreDeUsuario = usuarioYPassword.substr(0, 7);
var password = usuarioYPassword.substr(8,5);
console.log("El usuario " + nombreDeUsuario + " tiene " + password + " como password")