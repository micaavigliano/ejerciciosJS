var user = {
    username: 'ada_lovelace',
    password: '1234567890!',
    email: 'holi'
  };

var propiedades = Object.keys(user);
var mensaje = 'El usuario no tiene la propiedad email'

for (var i = 0; i < propiedades.length; i++) {
    if (propiedades[i] === 'email') {
        mensaje = 'El usuario tiene la propiedad email'
    }
}

console.log(mensaje);