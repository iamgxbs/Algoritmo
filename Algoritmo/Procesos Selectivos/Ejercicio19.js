const read = require('prompt-sync')();
const write = console.log;

// 19. Dado un arreglo de 5 elementos, se desea determinar si el primer elemento es mayor que el último elemento.
// Análisis del requerimiento
// ENT: a, b, c, d, e (valores de los elementos del arreglo)
// PRO: Leer los cinco elementos del arreglo.
//     Comparar el primer elemento con el último elemento.
//     Mostrar un mensaje indicando si el primer elemento es mayor que el último.
// SAL: Mostrar el resultado de la comparación.

// Pseudocódigo
// Algoritmo CompararElementos
// Definir a, b, c, d, e como enteros
// Definir p, u como enteros
// Escribir "Primer elemento:"
// Leer a
// Escribir "Segundo elemento:"
// Leer b
// Escribir "Tercer elemento:"
// Leer c
// Escribir "Cuarto elemento:"
// Leer d
// Escribir "Quinto elemento:"
// Leer e
// P = a
// U = e
// Si P > U Entonces
//     Escribir "El primer elemento es mayor que el último elemento."
// Sino
//     Escribir "El primer elemento no es mayor que el último elemento."
// FinSi
// FinAlgoritmo

// JavaScript

function CompararElementos() {
    let a = read("Primer elemento:"),
        b = read("Segundo elemento:"),
        c = read("Tercer elemento:"),
        d = read("Cuarto elemento:"),
        e = read("Quinto elemento:"),
        p = a,
        u = e;

    if (p > u) {
        write("El primer elemento es mayor que el último elemento.");
    } else {
        write("El primer elemento no es mayor que el último elemento.");
    }
}

CompararElementos();
