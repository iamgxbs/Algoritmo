const read = require('prompt-sync')();
const write = console.log;

// 22. Dado un arreglo de 5 elementos, se desea encontrar la suma de dichos elementos.
// Análisis del requerimiento
// ENT: arreglo (para almacenar los 5 elementos)
// PRO: Leer los cinco elementos del arreglo.
//      Calcular la suma de los elementos.
// SAL: Mostrar la suma de los elementos del arreglo.

// Pseudocódigo
// Algoritmo SumaElementos
//     Definir arreglo[5] como entero
//     Definir suma como entero
//     Escribir "Ingrese los 5 elementos del arreglo:"
//     Leer arreglo[1]
//     Leer arreglo[2]
//     Leer arreglo[3]
//     Leer arreglo[4]
//     Leer arreglo[5]
//     suma = arreglo[1] + arreglo[2] + arreglo[3] + arreglo[4] + arreglo[5]
//     Escribir "La suma de los elementos del arreglo es:", suma
// FinAlgoritmo

// JavaScript
function SumaElementos() {
    let arreglo = [];
    let suma = 0;

    write("Ingrese los 5 elementos del arreglo:");
    for (let i = 0; i < 5; i++) {
        arreglo[i] = parseFloat(read(`Elemento ${i + 1}: `));
        suma += arreglo[i];
    }

    write("La suma de los elementos del arreglo es:", suma);
}

SumaElementos();
