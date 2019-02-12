//var contador = 15;
//var acumulado = ""; 
//var asterisco = "***************"

//while(contador > 0) {
//    acumulado = asterisco.slice(0, contador); //ahora acumulado va a valer desde la última posición hasta la primera
//    console.log(acumulado)
//    contador--
//}

//*************** 
//************** 
//*************
//************
//***********
//**********
//*********
//********
//*******
//******
//*****
//****
//***
//**
//*

// resta de estrellitas sin métodos:

var a = "";
var base = 15;
var resta = 15;

while (base > 0) {
    while (resta > 0) {
        a = a + "*"
        resta--
    }
    console.log(a, a.length)
    resta = base - 1
    a = ""
    base--
}

