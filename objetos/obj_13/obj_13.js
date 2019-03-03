var playlistSpotify = {
    nombre: 'Indie',
    privada: false,
    canciones: ['Mountain At My Gates - Foals', 'Re-Wired - Kasabian', 'D is for Dangerous - Arctic Monkeys']
}

console.log('Lista de Mica');
if (playlistSpotify.privada == false) {
    console.log('Privada: No')
} else {
    console.log('Privada: Sí')
};
console.log('Canciones:');
console.log(playlistSpotify.canciones[0]);
console.log(playlistSpotify.canciones[1]);
console.log(playlistSpotify.canciones[2]);