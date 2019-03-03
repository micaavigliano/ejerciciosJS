var user = {
    id: 13456789,
    firstName: 'Ada',
    lastName: 'Lovelace',
    url: 'wwww.culitos.com.ar',
    skills: ['HTML', 'CSS', 'JS', 'SASS']
};

var newUser = {
    id: user.id,
    url: user.url,
    skills: user.skills,
};

newUser.name = {first: user.firstName, last: user.lastName}

console.log(user);
console.log(newUser);