const solicitarEntrada = require('prompt-sync')();
const mostrarMensaje = console.log;

// 8. Pedir al usuario un número y mostrar si es múltiplo de 3
// Análisis de los requerimientos 
// Variables del problema 
// - Entrada: numero=0
// - Proceso: reciduo = numero % 3
// - Salida: Mostrar si es múltiplo de 3

// Pseudocódigo

// Algoritmo MultiploDeTres
//   Definir numero, reciduo Como Entero
//   Escribir "Ingrese un número:"
//   Leer numero
//   reciduo = numero % 3
//   Si reciduo es igual a 0 entonces
//     Escribir "El número es múltiplo de 3"
//   Sino
//     Escribir "El número no es múltiplo de 3"
//   FinSi
//   Escribir "Gracias por su visita..."
// FinAlgoritmo

// JavaScript
function multiploDeTres() {
  let numero = 0, reciduo = 0;
  numero = solicitarEntrada("Ingrese un número: ");
  numero = parseInt(numero);
  reciduo = numero % 3;
  if (reciduo === 0) {
    mostrarMensaje("El número es múltiplo de 3");
  } else {
    mostrarMensaje("El número no es múltiplo de 3");
  }
  mostrarMensaje("Gracias por su visita...");
}

multiploDeTres();
