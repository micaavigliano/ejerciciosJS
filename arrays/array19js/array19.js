var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];

// var playlistNirvana = playlistNirvana.toString();
// console.log(playlistNirvana);

// do {
//     console.log(playlistFoo[0]);
//     console.log(playlistFoo[1]);
//     console.log(playlistFoo[2]);
// } while (playlistFoo = 0);

var playlistCompleta = playlistNirvana.concat(playlistFoo);
console.log(playlistCompleta);

for (var i = 0; i < playlistCompleta.length; i++) {
    console.log(playlistCompleta[i])
}

