// 7. Solicitar dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo.
// Análisis de los requerimientos 
// Variables del problema 
// - Entrada: nombre1="", nombre2=""
// - Proceso: Leer NOMBRE1, Leer NOMBRE2
// - Salida: Mostrar el mensaje correspondiente

const solicitarEntrada = require('prompt-sync')();
const mostrarMensaje = console.log;

// Pseudocódigo

// Algoritmo CompararNombres
//   DEFINIR nombre1, nombre2 Como Caracter
//   Escribir "INGRESA DOS NOMBRES E INDICAR SI SON IGUALES, SI EL PRIMER NOMBRE ES MAYOR QUE EL SEGUNDO"
//   Escribir "PRIMER NOMBRE:"
//   Leer nombre1
//   Escribir "SEGUNDO NOMBRE:"
//   Leer nombre2
//   Si nombre1 es igual a nombre2 Entonces
//       Escribir "SON IGUALES"
//   SiNo
//       Escribir "NO SON IGUALES"
//   FinSi
//   Si nombre1 es mayor que nombre2 Entonces
//       Escribir "El primer nombre es mayor en orden alfabético que el segundo."
//   Sino Si nombre1 es menor que nombre2 Entonces
//       Escribir "El segundo nombre es mayor en orden alfabético que el primero."
//   SiNo
//       Escribir "Los nombres son iguales en orden alfabético."
//   FinSi
// FinAlgoritmo

// JavaScript
function compararNombres() {
    mostrarMensaje("INGRESA DOS NOMBRES E INDICAR SI SON IGUALES, SI EL PRIMER NOMBRE ES MAYOR QUE EL SEGUNDO");
    let nombre1 = solicitarEntrada("PRIMER NOMBRE: ");
    let nombre2 = solicitarEntrada("SEGUNDO NOMBRE: ");

    if (nombre1 === nombre2) {
        mostrarMensaje("SON IGUALES");
    } else {
        mostrarMensaje("NO SON IGUALES");
    }

    if (nombre1 > nombre2) {
        mostrarMensaje("El primer nombre es mayor en orden alfabético que el segundo.");
    } else if (nombre1 < nombre2) {
        mostrarMensaje("El segundo nombre es mayor en orden alfabético que el primero.");
    } else {
        mostrarMensaje("Los nombres son iguales en orden alfabético.");
    }
}

compararNombres();
