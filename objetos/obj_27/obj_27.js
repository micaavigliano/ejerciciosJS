var user = {
    firstName: 'Mica',
    lastName: 'Avigliano',
    age: 25,
    getFullName: function() {
        return user.firstName + ' ' + user.lastName
    }

}

console.log(user.getFullName());
