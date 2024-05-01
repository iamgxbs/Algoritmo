// 2. Solicitar dos palabras al usuario y mostrarlas concatenadas.
// Análisis de los requisitos:
// Variables del problema:
// - Entrada: palabra1 = "" (leer), palabra2 = "" (leer), concatenar (proceso)
// - Proceso: concatenar = palabra1 + palabra2
// - Salida: concatenar
// Pseudocódigo:
// Algoritmo ejercicio2
//   Definir palabra1 = "", palabra2 = "", concatenar = ""
//   Mostrar "Ingrese la primera palabra:"
//   Leer palabra1
//   Mostrar "Ingrese la segunda palabra:"
//   Leer palabra2
//   concatenar = palabra1 + palabra2
//   Mostrar concatenar
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

// JavaScript
function ejercicio2() {
    let palabra1 = read("Por favor, ingrese la primera palabra: ");
    let palabra2 = read("Ahora, ingrese la segunda palabra: ");
    let concatenar = palabra1 + palabra2;
    write("La concatenación de las palabras es: " + concatenar);
}

ejercicio2();
