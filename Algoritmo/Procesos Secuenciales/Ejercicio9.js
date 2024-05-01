// 9. Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
// Análisis de los requisitos:
// Variables utilizadas:
// - Entrada: numero = 0.0, producto = 0.0
// - Proceso: Calcular el producto de multiplicar el número por cada valor del 1 al 10
// - Salida: producto
// Pseudocódigo:
// Algoritmo tablaMultiplicar
//   Definir numero, producto
//   Mostrar "Por favor, ingrese un número:"
//   Leer numero
//   Mostrar "Tabla de multiplicar de ", numero, ":"
//   Para cada valor de i desde 1 hasta 10 hacer
//       producto = numero * i
//       Mostrar numero, " x ", i, " = ", producto
//   Fin Para
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

// JavaScript
function tablaMultiplicar() {
    let numero, producto;
    write("Por favor, ingrese un número:");
    numero = parseInt(read());
    write("Tabla de multiplicar de " + numero + ":");
    for (let i = 1; i <= 10; i++) {
        producto = numero * i;
        write(numero + " x " + i + " = " + producto);
    }
}

tablaMultiplicar();
