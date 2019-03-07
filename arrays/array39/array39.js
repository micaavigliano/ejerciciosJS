var playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];
var posicionCancion = playlist.map(function(playlist, indice){
    return indice + ' - ' + playlist
});

console.log(posicionCancion);
