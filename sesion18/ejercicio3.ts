// Ejercicio 3. Crecimiento de una secuencia
// Un equipo de estudiantes está modelando una secuencia en la que cada nuevo valor se obtiene sumando los dos valores anteriores. Los primeros valores son 0 y 1.

// Desarrolle una función recursiva que calcule un término de la sucesión de Fibonacci. Posteriormente, utilice la función para mostrar los primeros N términos.

// La solución debe:

// Indicar explícitamente el tipo de retorno.
// Contener los casos base correspondientes a las primeras posiciones.
// Calcular cada posición mediante llamadas recursivas.
// Solicitar o establecer la cantidad de términos que se mostrarán.
// Evitar posiciones negativas.
// Antes de ejecutar, dibuje el árbol de llamadas utilizado para obtener el término ubicado en la posición 4.

// Función recursiva para calcular un término de la sucesión de Fibonacci.
// Recibe la posición del término y devuelve un resultado de tipo number.
function calcularFibonacci(posicion: number): number {

  // Casos base:
  // Si la posición es 0, el resultado es 0.
  if (posicion === 0) {
    return 0;

  // Si la posición es 1, el resultado es 1.
  } else if (posicion === 1) {
    return 1;
  }

  // Caso recursivo:
  // Se suman los dos términos anteriores para obtener el término actual.
  return calcularFibonacci(posicion - 1) + calcularFibonacci(posicion - 2);
}

// Se establece la cantidad de términos de Fibonacci que se mostrarán.
const cantidadTerminos: number = 5;

// Se verifica que la cantidad de términos no sea negativa.
if (cantidadTerminos < 0) {
  // Si es negativa, se muestra un mensaje indicando que el valor no es válido.
  console.log("Debe ingresar un número entero mayor o igual que cero.");
} else {

  // Se muestra un mensaje indicando cuántos términos se van a mostrar.
  console.log(`Los primeros ${cantidadTerminos} términos de la sucesión de Fibonacci son:`);

  // Se utiliza un ciclo for para recorrer las posiciones de los términos.
  for (let i = 0; i < cantidadTerminos; i++) {

    // Se llama a la función recursiva y se muestra el resultado de cada posición.
    console.log(`F(${i}) = ${calcularFibonacci(i)}`);
  }
}

//                    fibonacci(4)
//                    /            \
//           fibonacci(3)        fibonacci(2)
//           /        \           /        \
//    fibonacci(2) fibonacci(1) fibonacci(1) fibonacci(0)
//     /      \
// fibonacci(1) fibonacci(0)


// fibonacci(4)
// = fibonacci(3) + fibonacci(2)
// = (fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))
// = ((1 + 0) + 1) + (1 + 0)
// = 3

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
