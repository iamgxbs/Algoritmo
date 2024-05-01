// 8. Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
// Análisis de los requisitos:
// Variables utilizadas:
// - Entrada: nombre = "" (leer)
// - Proceso: repetir nombre 3 veces usando un bucle
// - Salida: Se repite el nombre 3 veces en la pantalla
// Pseudocódigo:
// Algoritmo repetirNombre
//   Definir nombre
//   Mostrar "Ingrese un nombre para repetirlo 3 veces"
//   Mostrar "Por favor, ingrese el nombre:"
//   Leer nombre
//   Para i desde 1 hasta 3 hacer
//       Mostrar nombre
//   Fin Para
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

// JavaScript
function repetirNombre() {
    write("Ingrese un nombre para repetirlo 3 veces:");
    let nombre = read("Por favor, ingrese el nombre: ");
    for (let i = 0; i < 3; i++) {
        write(nombre);
    }
}

repetirNombre();
