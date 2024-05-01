// 13. Dado un arreglo de 5 nombres, presentarlos todos.
// Análisis de los requisitos:
// Variables utilizadas:
// - Entrada: nombres = [] (leer)
// - Proceso: Asignar valores a los elementos del arreglo y mostrarlos en pantalla
// - Salida: Los nombres ingresados en el arreglo
// Pseudocódigo:
// Algoritmo presentarNombres
//   Definir nombres como un arreglo de 5 elementos
//   Asignar valores a los elementos del arreglo:
//       nombres[0] <- "Roberto"
//       nombres[1] <- "María"
//       nombres[2] <- "Pedro"
//       nombres[3] <- "Ana"
//       nombres[4] <- "Carlos"
//   Mostrar "Los nombres son:"
//   Para cada valor de i desde 0 hasta 4 hacer
//       Mostrar nombres[i]
//   Fin Para
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

// JavaScript
function presentarNombres() {
    let nombres = [];
    nombres[0] = "Roberto";
    nombres[1] = "María";
    nombres[2] = "Pedro";
    nombres[3] = "Ana";
    nombres[4] = "Carlos";

    write("Los nombres son:");
    for (let i = 0; i < 5; i++) {
        write(nombres[i]);
    }
}

presentarNombres();
