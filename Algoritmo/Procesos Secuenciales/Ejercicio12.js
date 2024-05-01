// 12. Pedir 5 números y asignarlos en un arreglo.
// Análisis de los requisitos:
// Variables utilizadas:
// - Entrada: arreglo = [] (leer)
// - Proceso: Asignar valores a los elementos del arreglo y mostrarlos en pantalla
// - Salida: Los números ingresados en el arreglo
// Pseudocódigo:
// Algoritmo asignarNumerosArreglo
//   Definir arreglo como un arreglo de 5 elementos
//   Asignar valores a los elementos del arreglo:
//       arreglo[0] <- 2
//       arreglo[1] <- 4
//       arreglo[2] <- 6
//       arreglo[3] <- 8
//       arreglo[4] <- 10
//   Mostrar "Pedir 5 números:"
//   Para cada valor de i desde 0 hasta 4 hacer
//       Mostrar arreglo[i]
//   Fin Para
// FinalAlgoritmo

const write = console.log;

// JavaScript

// Declarar un arreglo con 5 elementos
let arreglo = [];

// Asignar valores a los elementos del arreglo y mostrarlos en pantalla
function asignarNumerosArreglo() {
    arreglo[0] = 2;
    arreglo[1] = 4;
    arreglo[2] = 6;
    arreglo[3] = 8;
    arreglo[4] = 10;

    write("Pedir 5 números:");
    for (let i = 0; i < 5; i++) {
        write(arreglo[i]);
    }
}

asignarNumerosArreglo();
