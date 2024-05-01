// 10. Pedir al usuario dos números y mostrar el mayor.
// Análisis de los requisitos:
// Variables utilizadas:
// - Entrada: numero1 = 0.0, numero2 = 0.0
// - Proceso: Comparar los dos números y mostrar el mayor
// - Salida: El mayor de los dos números
// Pseudocódigo:
// Algoritmo encontrarMayor
//   Definir numero1, numero2 como enteros
//   Mostrar "Ingrese el primer número:"
//   Leer numero1
//   Mostrar "Ingrese el segundo número:"
//   Leer numero2
//   Si numero1 > numero2 Entonces
//       Mostrar "El primer número es mayor:"
//       Mostrar numero1
//   Sino Si numero2 > numero1 Entonces
//       Mostrar "El segundo número es mayor:"
//       Mostrar numero2
//   Sino
//       Mostrar "Ambos números son iguales."
//   FinSi
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

// JavaScript
function encontrarMayor() {
    let numero1, numero2;

    write("Ingrese el primer número:");
    numero1 = parseInt(read());

    write("Ingrese el segundo número:");
    numero2 = parseInt(read());

    if (numero1 > numero2) {
        write("El primer número es mayor:");
        write(numero1);
    } else if (numero2 > numero1) {
        write("El segundo número es mayor:");
        write(numero2);
    } else {
        write("Ambos números son iguales.");
    }
}

encontrarMayor();
