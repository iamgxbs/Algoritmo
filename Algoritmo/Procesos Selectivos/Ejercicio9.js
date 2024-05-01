const solicitarEntrada = require('prompt-sync')();
const mostrarMensaje = console.log;

// 9. Solicitar al usuario un número y mostrar si es divisible por 2.
// Análisis de los requerimientos 
// Variables del problema 
// - Entrada: numero=0
// - Proceso: reciduo = numero % 2
// - Salida: Mostrar si es divisible por 2

// Pseudocódigo

// Algoritmo DivisiblePorDos
//   Definir numero, reciduo Como Entero
//   Escribir "Ingrese un número:"
//   Leer numero
//   reciduo = numero % 2
//   Si reciduo es igual a 0 entonces
//     Escribir "El número es divisible por 2"
//   Sino
//     Escribir "El número no es divisible por 2"
//   FinSi
//   Escribir "Gracias por su visita..."
// FinAlgoritmo

// JavaScript
function divisiblePorDos() {
  let numero = 0, reciduo = 0;
  numero = solicitarEntrada("Ingrese un número: ");
  numero = parseInt(numero);
  reciduo = numero % 2;
  if (reciduo === 0) {
    mostrarMensaje("El número es divisible por 2");
  } else {
    mostrarMensaje("El número no es divisible por 2");
  }
  mostrarMensaje("Gracias por su visita...");
}

divisiblePorDos();
