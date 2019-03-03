var user = {
    name: {
      first: 'Hedy',
      last: 'Lamarr',
      getFullName: function() {
        return this.first + ' ' + this.last
    }
    },
    age: 30,
    
  };

console.log(user[user.getFullName()]);
