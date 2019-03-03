var shoppingCart = {
    owner: {
      id: 123,
      name: 'Ada Lovelace'
    },
    products: [],
    addProduct: function() {
        shoppingCart.products.push (
            {
                id: 1,
                title: 'Mouse',
                price: 320,
                freeShipping: true,
            },
            {
                id: 2,
                title: 'Gabinete',
                price: 230,
                freeShipping: false,
            },
            {
                id: 3,
                title: 'Teclado',
                price: 120.50,
                freeShipping: true,
            },
            {
                id: 4,
                title: 'Headset',
                price: 510,
                freeShipping: false,
            },
            {
                id: 5,
                title: 'Monitor',
                price: 125.99,
                freeShipping: true,
            },
)
    },
}
shoppingCart.addProduct();
console.log(shoppingCart.products);
