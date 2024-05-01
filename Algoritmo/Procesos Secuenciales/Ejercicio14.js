// 14. Dado un arreglo de 5 elementos, presentar el primero, el del medio y el último.
// Análisis de los requisitos:
// Variables utilizadas:
// - Entrada: arr (arreglo de 5 elementos)
// - Proceso: Asignar valores a los elementos del arreglo y mostrar el primer, el del medio y el último elemento
// - Salida: Los elementos del arreglo indicados
// Pseudocódigo:
// Algoritmo mostrarElementos
//   Definir arr como un arreglo de 5 elementos
//   Asignar valores a los elementos del arreglo:
//       arr[0] <- 15
//       arr[1] <- 20
//       arr[2] <- 25
//       arr[3] <- 30
//       arr[4] <- 35
//   Mostrar "Primer elemento del arreglo:", arr[0]
//   Mostrar "Elemento del medio del arreglo:", arr[2]
//   Mostrar "Último elemento del arreglo:", arr[4]
// FinalAlgoritmo

const write = console.log;

// JavaScript
function mostrarElementos() {
  let arr = [];

  arr[0] = 15;
  arr[1] = 20;
  arr[2] = 25;
  arr[3] = 30;
  arr[4] = 35;

  write("Primer elemento del arreglo:", arr[0]);
  write("Elemento del medio del arreglo:", arr[2]);
  write("Último elemento del arreglo:", arr[4]);
}

mostrarElementos();
