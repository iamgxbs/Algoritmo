const solicitarEntrada = require('prompt-sync')();
const mostrarMensaje = console.log;

// 10. Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
// Análisis de los requerimientos 
// Variables del problema 
// - Entrada: numero=0
// - Proceso: Si numero > 100 entonces mostrar "El número ingresado es mayor que 100."
//            Sino, si numero < 100 entonces mostrar "El número ingresado es menor que 100."
//            Sino, mostrar "El número ingresado es igual a 100."
// - Salida: Mostrar el mensaje correspondiente

// Pseudocódigo

// Algoritmo CompararNumero
//   Definir numero Como Entero
//   Escribir "Ingrese un número:"
//   Leer numero
//   Si numero > 100 Entonces
//       Escribir "El número ingresado es mayor que 100."
//   SiNo
//       Si numero < 100 Entonces
//           Escribir "El número ingresado es menor que 100."
//       SiNo
//           Escribir "El número ingresado es igual a 100."
//       FinSi
//   FinSi
// FinAlgoritmo

// JavaScript
function compararNumero() {
  let numero = parseInt(solicitarEntrada("Ingrese un número:"));
  if (numero > 100) {
    mostrarMensaje("El número ingresado es mayor que 100.");
  } else {
    if (numero < 100) {
      mostrarMensaje("El número ingresado es menor que 100.");
    } else {
      mostrarMensaje("El número ingresado es igual a 100.");
    }
  }
}

compararNumero();
