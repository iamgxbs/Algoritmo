const read = require('prompt-sync')();
const write = console.log;

// 21. Dado un arreglo de 3 elementos, se desea encontrar cuál de ellos es el mayor.
// Análisis del requerimiento
// ENT: arreglo (para almacenar los 3 elementos)
// PRO: Leer los tres elementos del arreglo.
//      Determinar cuál de los elementos es el mayor.
// SAL: Mostrar el mayor elemento del arreglo.

// Pseudocódigo
// Algoritmo MayorElemento
//     Definir arreglo[3] como entero
//     Definir mayor como entero
//     Escribir "Ingrese los 3 elementos del arreglo:"
//     Leer arreglo[1]
//     Leer arreglo[2]
//     Leer arreglo[3]
//     mayor = arreglo[1]
//     Si arreglo[2] > mayor Entonces
//         mayor = arreglo[2]
//     FinSi
//     Si arreglo[3] > mayor Entonces
//         mayor = arreglo[3]
//     FinSi
//     Escribir "El mayor elemento del arreglo es:", mayor
// FinAlgoritmo

// JavaScript

function MayorElemento() {
    let arreglo = [];
    let mayor;

    write("Ingrese los 3 elementos del arreglo:");
    arreglo[0] = parseFloat(read("Elemento 1:"));
    arreglo[1] = parseFloat(read("Elemento 2:"));
    arreglo[2] = parseFloat(read("Elemento 3:"));

    mayor = arreglo[0];

    if (arreglo[1] > mayor) {
        mayor = arreglo[1];
    }

    if (arreglo[2] > mayor) {
        mayor = arreglo[2];
    }

    write("El mayor elemento del arreglo es:", mayor);
}

MayorElemento();
