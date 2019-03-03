var bandas = [
    { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
    { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
    { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
    { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
    { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
  ];

for (var i = 0; i < bandas.length; i++) {
    if (bandas[i].activa === true) {
        console.log(bandas[i].nombre + ' esta activa desde el año ' + bandas[i].fundacion);
    }
    else {
        console.log(bandas[i].nombre + ' no esta activa');
    }
}