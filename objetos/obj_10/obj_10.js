var disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
      nombre: 'Foo Fighters',
      anioFormacion: 1994
    }
  };

var nombreDisco = disco.nombre;
var anioDisco = disco.anioLanzamiento;
var nombreBanda = disco.banda['nombre'];

console.log("El disco " + nombreDisco + " de la banda " + nombreBanda + " se lanzó en el año " + anioDisco);

