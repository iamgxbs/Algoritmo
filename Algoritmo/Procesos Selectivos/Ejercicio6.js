// 6. Solicitar al usuario un carácter y determinar si es una vocal o consonante.
// Análisis de los requerimientos 
// Variables del problema 
// - Entrada: letra=""
// - Proceso: Leer LETRA
// - Salida: Mostrar el mensaje si es una vocal o consonante

const solicitarEntrada = require('prompt-sync')();
const mostrarMensaje = console.log;

// Pseudocódigo

// Algoritmo VocalOConsonante
//   DEFINIR letra Como Caracter
//   Escribir "INGRESA UN CARÁCTER Y MUESTRA SI ES VOCAL O CONSONANTE"
//   Escribir "INGRESA EL CARÁCTER:"
//   Leer letra
//   Si letra es igual a "A" o letra es igual a "E" o letra es igual a "I" o letra es igual a "O" o letra es igual a "U" Entonces
//       Escribir "EL CARÁCTER INGRESADO ES UNA VOCAL"
//   Sino
//       Escribir "EL CARÁCTER INGRESADO ES UNA CONSONANTE"
//   FinSi
// FinAlgoritmo

// JavaScript
function vocalOConsonante() {
    mostrarMensaje("INGRESA UN CARÁCTER Y MUESTRA SI ES VOCAL O CONSONANTE");
    let letra = solicitarEntrada("INGRESA EL CARÁCTER: ");
    if (letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
        mostrarMensaje("EL CARÁCTER INGRESADO ES UNA VOCAL");
    } else {
        mostrarMensaje("EL CARÁCTER INGRESADO ES UNA CONSONANTE");
    }
}

vocalOConsonante();
