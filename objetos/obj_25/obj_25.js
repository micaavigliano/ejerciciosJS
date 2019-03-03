var pelicula = {
    titulo: 'The Dark Knight',
    anio: 2008,
    director: 'Christopher Nolan',
    mostrarInfo: function() {
        console.log('Película: ' + pelicula.titulo + ' - ' + 'Año: ' + pelicula.anio + ' - ' + 'Director: ' + pelicula.director)
    }
  };

pelicula.mostrarInfo();