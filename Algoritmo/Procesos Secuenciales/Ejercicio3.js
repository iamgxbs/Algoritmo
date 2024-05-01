// 3. Pedir al usuario que ingrese dos números y mostrar la suma de ambos.
// Análisis de los requisitos:
// Variables utilizadas:
// - Entrada: numero1 = "" (leer), numero2 = "" (leer), total (calcular)
// - Proceso: total = numero1 + numero2
// - Salida: total
// Pseudocódigo:
// Algoritmo ejercicio3
//   Definir numero1, numero2, total
//   Mostrar "Por favor, introduzca el primer número:"
//   Leer numero1
//   Mostrar "Ahora, introduzca el segundo número:"
//   Leer numero2
//   Calcular total sumando numero1 y numero2
//   Mostrar el resultado de la suma
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

// JavaScript
function SUMA() {
    let numero1 = read("Por favor, ingrese el primer número: ");
    numero1 = parseFloat(numero1);
    let numero2 = read("Ahora, por favor, ingrese el segundo número: ");
    numero2 = parseFloat(numero2);
    let total = numero1 + numero2;
    write("La suma de los números que ingresaste es: " + total);
}

SUMA();
