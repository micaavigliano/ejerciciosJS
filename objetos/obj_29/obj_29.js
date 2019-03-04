var shoppingCart = {
    owner: {
      id: 123,
      name: 'Ada Lovelace'
    },
    products: [],
    addProduct: function(objetoParaAgregar) {
        shoppingCart.products.push(objetoParaAgregar)    
    },
    getTotal: function(sumaObjeto){
        for (var i = 0; i < shoppingCart.products; i++) {
            shoppingCart.products['price'] + shoppingCart.products['price']
        }
    }
 }

var mouse = {
    id: 1,
    title: 'Mouse',
    price: 320,
    freeShipping: true,
};

var gabinete = {
    id: 2,
    title: 'Gabinete',
    price: 230,
    freeShipping: false,
};

var teclado = {
    id: 3,
    title: 'Teclado',
    price: 120.50,
    freeShipping: true,
}

var headset = {
    id: 4,
    title: 'Headset',
    price: 510,
    freeShipping: false,
}

var monitor = {
    id: 5,
    title: 'Monitor',
    price: 125.99,
    freeShipping: true,
}

shoppingCart.addProduct(mouse);
shoppingCart.addProduct(gabinete);
shoppingCart.addProduct(teclado);
shoppingCart.addProduct(headset);
shoppingCart.addProduct(monitor);
console.log(shoppingCart.products);

