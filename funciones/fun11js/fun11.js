function returnString(str) {
    return 'Mica'
    // retornar simplemente el mismo string que llega como parámetro: str
  }
  
  function sum(a, b) {
    return a + b
    // a y b son números
    // sumar a y b, y retornar el valor resultante de la suma
  }
  
  function res(a, b) {
    return a - b
    // a y b son números
    // restart a y b, y retornar el valor resultante de la resta
  }
  
  function mul(a, b) {
    return a * b
    // a y b son números
    // multiplicar a y b, y retornar el valor resultante de la multiplicación
  }
  
  function div(a, b) {
    return a / b
    // a y b son números
    // dividir a y b, y retornar el valor resultante de la división
  }
  
  
  console.log( returnString('Mica') === 'Mica' );
  console.log( sum(2, 2) === 4 );
  console.log( sum(5, -9) === -4 );
  console.log( res(4, 3) === 1 );
  console.log( res(2, 9) === -7 );
  console.log( mul(3, 4) === 12 );
  console.log( mul(-2, -5) === 10 );
  console.log( div(6, 3) === 2 );
  console.log( div(15, 3) === 5 );
  // deberias ver
  // true
  // true
  // true
  // true
  // true
  // true
  // true
  // true
  // true
  
  // o según el navegador que sés podés llegar a ver
  // (9) true