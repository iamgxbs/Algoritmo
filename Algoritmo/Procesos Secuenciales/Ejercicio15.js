//15. Dado un arreglo de 5 elementos, cambiar los valores del primer y último elemento entre sí.
// Analizando los requerimientos:
// Variables utilizadas:
// - Entrada: arreglo = [] (leer)
// - Proceso: Asignar valores a los elementos del arreglo y cambiar el primer y último elemento entre sí
// - Salida: Los números ingresados en el arreglo
// Pseudocódigo:
// Algoritmo cambiarPrimerYUltimoElemento
//   Definir arreglo como un arreglo de 5 elementos
//   Asignar valores a los elementos del arreglo:
//       arreglo[0] <- 3
//       arreglo[1] <- 8
//       arreglo[2] <- 12
//       arreglo[3] <- 17
//       arreglo[4] <- 22
//   Mostrar "Arreglo antes del intercambio:"
//   Para cada valor de i desde 0 hasta 4 hacer
//       Mostrar arreglo[i]
//   Fin Para
//   Definir temp como un entero
//   temp <- arreglo[0]
//   arreglo[0] <- arreglo[4]
//   arreglo[4] <- temp
//   Mostrar "Arreglo después del intercambio:"
//   Para cada valor de i desde 0 hasta 4 hacer
//       Mostrar arreglo[i]
//   Fin Para
// FinalAlgoritmo

const write = console.log;

//JavaScript

function cambiarPrimerYUltimoElemento() {
    let arreglo = [];

    arreglo[0] = 3;
    arreglo[1] = 8;
    arreglo[2] = 12;
    arreglo[3] = 17;
    arreglo[4] = 22;

    write("Arreglo antes del intercambio:");
    for (let i = 0; i < 5; i++) {
        write(arreglo[i]);
    }

    let temp = arreglo[0];
    arreglo[0] = arreglo[4];
    arreglo[4] = temp;

    write("Arreglo después del intercambio:");
    for (let i = 0; i < 5; i++) {
        write(arreglo[i]);
    }
}

cambiarPrimerYUltimoElemento();
