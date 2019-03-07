var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistEscuchada = ['School'];

var primeraCancionEliminada = playlist.shift();
console.log(playlist);

var cancionAgregada = playlistEscuchada.push(primeraCancionEliminada);
console.log(playlistEscuchada);