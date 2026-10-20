function calcularFactorial(numero: number): number {
  // Caso base
  if (numero === 0 || numero === 1) {
    return 1;
  }

  // Caso recursivo
  return numero * calcularFactorial(numero - 1);
}

const numero: number = 4;
if (!Number.isNaN(numero) || numero < 0) { 
console.log(
 "Debe ingresar un número entero mayor o igual que cero." ); 
} 
else { 
const factorial: number = calcularFactorial(numero);

 console.log( `El factorial de ${numero} es ${factorial}.`
 );
}

