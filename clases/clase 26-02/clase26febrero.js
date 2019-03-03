//PROPIEDADES DINÁMICAS
//Se puede acceder a las propiedades utilizando corchetes y el nombre de la propiedad

var persona = {
    nombre: 'Mica',
    edad: 25,
    saludar: function() {
        console.log('¡Hola! Mi nombre es ' + this.nombre)
    }
}

console.log(persona['nombre']);
console.log(persona['edad']);