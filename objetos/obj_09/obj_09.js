var datos = {
    id: 1,
    nombre: 'Mica ',
    apellido: 'Avigliano',
    email: 'ada.lovelace@gmail.com',
    telefono: '1234567890',
    edad: 29,
    programa: true
  };

  if (datos.programa == true) {
      datos.lenguajesFavoritos = ['Javascript', 'Angular'];
  }
  
  console.log('Hola, mi nombre es ' + datos.nombre + datos.apellido + ' y me gusta codear con ' + datos.lenguajesFavoritos[0], 'y', datos.lenguajesFavoritos[1]);