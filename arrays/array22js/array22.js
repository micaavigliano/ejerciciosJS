var womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Bill Gates"];
var fueraMachirulo = womenInTech.pop();
console.log(womenInTech);

var holaFemitech = womenInTech.push('Parisa Tabriz');
console.log(womenInTech);

var longitud = womenInTech.length;
console.log('La longitud del array es: ' + longitud);

var enLaPosicion3 = womenInTech[3];
console.log('En la posición 3 está: ' + enLaPosicion3);

for (var i = 0; i < womenInTech.length; i++) {
    console.log(womenInTech[i])
}