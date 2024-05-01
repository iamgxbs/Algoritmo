const solicitarEntrada = require('prompt-sync')();
const mostrarMensaje = console.log;

// 11. Solicitar al usuario un número y mostrar si es un número de un solo dígito.
// Análisis de los requerimientos 
// Variables del problema 
// - Entrada: NUMERO=""
// - Proceso: Si NUMERO > 10 entonces mostrar "El número que ingresó es de 2 dígitos"
//            Sino, mostrar "El número que ingresó es de 1 dígito"
// - Salida: Mostrar el mensaje correspondiente

// Pseudocódigo

// Algoritmo DIGITO
//   DEFINIR NUMERO Como Entero
//   Escribir "Solicitar un número y mostrar si es de 2 dígitos"
//   Leer NUMERO
//   Si NUMERO > 10 Entonces
//       Escribir "El número que ingresó es de 2 dígitos"
//   SiNo
//       Escribir "El número que ingresó es de 1 dígito"
//   FinSi
// FinAlgoritmo

// JavaScript
function verificarDigito() {
  let numero = parseInt(solicitarEntrada("Solicitar un número y mostrar si es de 2 dígitos: "));
  if (numero > 10) {
    mostrarMensaje("El número que ingresó es de 2 dígitos");
  } else {
    mostrarMensaje("El número que ingresó es de 1 dígito");
  }
}

verificarDigito();
