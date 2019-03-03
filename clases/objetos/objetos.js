//Objetos:
//Los objetos pueden tener propiedades
//Se definen como si fueran variables
//Se les asigna valor con dos puntos
//Se separan con comas
//Ejemplo:

// var persona = {
//     nombre: 'Ada',
//     edad: 27,
//     array: [1, 2, 3]
// }

// persona.nombre = 'Mica';
// persona.edad = 40;

// console.log(persona.nombre);
// console.log(persona.edad + 2);
// console.log(persona.array);
// console.log(persona)

// Los objetos son dinámicos ya que se pueden crear propiedades que no fueron definidas

// var persona = {
//     nombre: 'Ada',
//     edad: 27,
// };

// persona.dni = 37928575;
// console.log(persona);

// persona.DNI =  37928575;
// console.log(persona);

//Métodos
//una función asignada a un objeto como una propiedad

// var persona = {
//     nombre: 'Ada',
//     saludar: function(personaASaludar) {
//         console.log('¡Hola, ' + personaASaludar + ' !');
//     }
// }

// persona.saludar(123456);
// persona.saludar(true);
// persona.saludar(['Mica', ' Gian']);
// //siempre hay que llamar a la función declarada porque sino no se va a ejecutar
// persona.saludar('Mica');11

//Se puede acceder a las propiedades del objeto por medio de la palabra reservada: THIS

// var persona = {
//     nombre: 'Mica',
//     saludar: function() {
//         console.log('¡Hola! Mi nombre es ' + this.nombre);
//     }
// }

// persona.saludar();


//this es todo el objeto

//Dentro de un método se puede modificar una propiedad de un objeto
// var persona = {
//     nombre: 'Mica',
//     edad: 25,
//     darPlata: function(dineros){
//         dineros.billetera++
//         dineros.billetera = dineros.billetera = 1000
//         // otraPersona.billetera++
//         // otraPersona.billetera = otraPersona.billetera + 50 //equivalente a lo de arriba
//     } 
// }

// var otraPersona = {
//     nombre: 'Grace',
//     billetera: 0
// }

// var terceraPersona = {
//     nombre: 'Culo',
//     billetera: 0,
// }

// persona.darPlata(otraPersona);
// persona.darPlata(terceraPersona);
// console.log(otraPersona.billetera);
// console.log(terceraPersona.billetera);
// console.log(otraPersona.billetera);

// var biblioteca = [
//     {
//         titulo: 'Cumbres Borrascosas',
//         autor: 'Emily Brontë',
//         leido: true
//     },

//     {
//         titulo: 'Orlando',
//         autor: 'Virginia Woolf',
//         leido: false
//     },
 
//     {
//         titulo: 'Arbol de Diana',
//         autor: 'Alejandra Pizarnik',
//         leido: false
//     }
//   ];

// for (var i = 0; i < biblioteca.length; i++) {
//     // console.log(biblioteca[i].titulo);
//     // console.log(biblioteca[i].autor);
//     if (biblioteca[i].leido === true) {
//         console.log('El libro ' + biblioteca[i].titulo + ' de ' + biblioteca[i].autor + ' fue leído');
//     } else {
//         console.log('El libro ' + biblioteca[i].titulo + ' de ' + biblioteca[i].autor + ' no fue leído');
//     }
// } 
// //esta bien hecho, pero ahora vamos a hacerlo con .map
// //.map es el único método que acepta una función y recorre nuestro array. Es un tipo de FOR, pero recibe un array y devuelve un array. Es una propiedad que tiene una función dentro del objeto

// biblioteca.map(function (elemento, indice, array) {
//     if (elemento.leido === true) {
//         console.log('El libro ' + elemento.titulo + ' de ' + elemento.autor + ' fue leído');
//     } else {
//         console.log('El libro ' + elemento.titulo + ' de ' + elemento.autor + ' no fue leído');
//     }
// })

//                              REPASO DE ARRAYS, FUNCIONES Y OBJETOS (23/02)
// Arrays, funciones y objetos: son tipos de datos. Generalmente irán asociados a una variable

// ARRAY: tiene distintos tipos de datos y esos datos están ordenados. Los arrays gastan menos energía en la pc.


// var array = ['primero', 
//             12345, 
//             [1, 2, 3, 40], 
//             {nombre: 'Mica', edad: 25},
//             function consola() {console.log('Hola')}];

// //para llamar a la función hay que declarar la función:
// var hola = array[4];

// console.log(hola());


// array[1] = 'Micaela' // se puede modificar los arrays de esa manera

//para acceder a un array dentro de otro array hay que declarar una variable de ese array porque no puede
// haber una variable sin declarar

// var arrayAdentro = array[2]
// console.log(arrayAdentro[0]);

//array.length //nos da la longitud del elemento

// FOR: con el for uno recorre el array. 
//  for (var i = 0; i <= array.length; i++) {
//     console.log(array[i]);
//  }

//  console.log(array[3].edad) //para acceder al dato del objeto

//OBJETOS: 

// var persona = {
//     nombre: 'Mica',
//     edad: 25,
//     array: [1, 2, 3, 4],
//     funcion: function() {return 'hola'} // después del return la función deja de funcionar. Si se necesita retornar muchos datos es recomendable usar un array
// };

// console.log(persona.nombre.toUpperCase());
// console.log(persona.edad);

// console.log(persona.array.length); //esto es para saber la longitud del array
// console.log(persona.array[3]);
// console.log(persona.funcion());

// function saludar() {
//     return 'Hola'
// }

// console.log(saludar());
// document.write(saludar());
// alert(saludar());

// function calcularPromedio(numero1, numero2) {
//     var promedio = (numero1 + numero2) / 2
//     var multiplicar = promedio * 5
//     var dividir = multiplicar / 10
//     return dividir
// };

// console.log(calcularPromedio(1, 2));
// document.write(calcularPromedio(5, 9));
// alert(calcularPromedio(10, 20));

// 26 de febrero:

//PROPIEDADES DINÁMICAS
//Se puede acceder a las propiedades utilizando corchetes y el nombre de la propiedad

// var persona = {
//     nombre: 'Mica',
//     edad: 25,
//     saludar: function() {
//         console.log('¡Hola! Mi nombre es ' + this.nombre)
//     }
// }
// // console.log(persona.nombre.toUpperCase());
// // console.log(persona['nombre']); //propiedad dinámica. Es lo mismo que utilizar persona.nombre
// // console.log(persona['edad']);
// // //entre corchetes la nombre de la variedad y entre corchetes (como si fuera un string).

// var propNombre = 'nombre';
// var propEdad = 'edad';

// console.log(persona[propNombre]);
// console.log(persona[propEdad]);


//Object.keys
//retorna un array con las propiedades
//acepta un objeto como paramétro
//Devuelve un array con las propiedades del objeto

var persona = {
    nombre: 'Mica',
    edad: 25
}

// console.log(Object.keys(persona));

var propiedades = Object.keys(persona)

for (var i = 0; i < propiedades.length; i++) {
    //console.log('La propiedad ' +  propiedades[i] + ' tiene el valor ' + persona[propiedades[i]]);
    console.log('La propiedad ' + propiedades[i] + ' tiene el valor ' + persona[propiedades[i]])
}


