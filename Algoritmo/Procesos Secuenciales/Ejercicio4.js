// 4. Pídele al usuario que ingrese un número y muestra el doble de ese número.
// Análisis de los requisitos:
// Variables utilizadas:
// - Entrada: numero = "" (leer), doble = "" (calcular)
// - Proceso: doble = numero * 2
// - Salida: doble
// Pseudocódigo:
// Algoritmo doble
//   Definir numero, doble
//   Mostrar "EL DOBLE DE UN NÚMERO"
//   Mostrar "Por favor, introduce un número:"
//   Leer numero
//   Calcular el doble multiplicando el número por 2
//   Mostrar el doble obtenido
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

// JavaScript
function Doble() {
    let numero = read("Ingresa un número, por favor: ");
    if (!isNaN(numero)) {
        numero = parseFloat(numero);
        let doble = numero * 2;
        write("El doble de " + numero + " es: " + doble);
    } else {
        write("Por favor, ingresa un número válido.");
    }
}

Doble();
