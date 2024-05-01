// 6. Solicitar al usuario dos números y mostrar el resultado de multiplicarlos.
// Análisis de los requisitos:
// Variables utilizadas:
// - Entrada: numero1 = "" (leer), numero2 = "" (leer), resultadoMultiplicacion = "" (calcular)
// - Proceso: resultadoMultiplicacion = numero1 * numero2
// - Salida: resultadoMultiplicacion
// Pseudocódigo:
// Algoritmo multiplica
//   Definir numero1, numero2, resultadoMultiplicacion
//   Mostrar "Pedir al usuario dos números y mostrar el resultado de multiplicarlos."
//   Mostrar "Por favor, ingrese el primer número:"
//   Leer numero1
//   Mostrar "Por favor, ingrese el segundo número:"
//   Leer numero2
//   Calcular el resultado de la multiplicación multiplicando numero1 por numero2
//   Mostrar el resultado de la multiplicación
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

// JavaScript
function multiplica() {
    let numero1 = 0;
    let numero2 = 0;
    let resultadoMultiplicacion = 0;

    write("Por favor, ingrese dos números para multiplicarlos:");
    numero1 = parseInt(read("Ingrese el primer número: "));
    numero2 = parseInt(read("Ingrese el segundo número: "));

    if (!isNaN(numero1) && !isNaN(numero2)) {
        resultadoMultiplicacion = numero1 * numero2;
        write("El resultado de la multiplicación es: " + resultadoMultiplicacion);
    } else {
        write("Por favor, ingrese números válidos.");
    }
}

multiplica();
