var numbers = [6, 1, 34, 94, 3, 17];
var mul = numbers.reduce(function(total, nota){
    return total * nota
});

console.log(mul);