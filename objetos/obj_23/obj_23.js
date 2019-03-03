  var user = {
    username: 'ada_lovelace',
    password: '1234567890!',
  };

  var user2 = {
    username: 'grace_hopper',
    password: '1234567890!',
    email: 'grace@hopper.com',
  };
  

function hasProperty(object, property) {
    
    var propiedades = Object.keys(object);

    for (var i = 0; i < propiedades.length; i++) {
        // console.log(propiedades[i])
    if(propiedades[i] == property) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
  }

//se puede hacer solo con IF, pero lo quise hacer con Object.keys para romperme la cabeza y porque me odio. chau
  
  console.log( hasProperty(user, 'email') ); // false
  console.log( hasProperty(user, 'password') ); // true
  console.log( hasProperty(user, 'id') ); // false
  
  console.log( hasProperty(user2, 'email') ); // true
  console.log( hasProperty(user2, 'password') ); // true
  console.log( hasProperty(user2, 'id') ); // false