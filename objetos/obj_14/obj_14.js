var ganadoras = [
    {
      nombre: 'Bebe Zahara Benet',
      temporada: '1',
      foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
    },
    {
      nombre: 'Tyra Sanchez',
      temporada: '2',
      foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
    },
    { nombre: 'Raja',
      temporada: '3',
      foto: 'http://www.nokeynoshade.party/images/raja.jpg'
    },
    {
      nombre: 'Sharon Needles',
      temporada: '4',
      foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
    },
    {
      nombre: 'Jinkx Monsoon',
      temporada: '5',
      foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
    },
    {
      nombre: 'Bianca Del Rio',
      temporada: '6',
      foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
    }
  ];

//forEach, reduce, map

ganadoras.forEach(function(item, index, array){
    //console.log(item.nombre);
    //console.log(index);
    //console.log(array);
    console.log(item.nombre + ' ganó la temporada ' + item.temporada)
})