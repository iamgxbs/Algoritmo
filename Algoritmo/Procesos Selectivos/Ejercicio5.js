// 5. Pedir al usuario dos valores y determinar si son iguales o diferentes.
// Análisis de los requerimientos 
// Variables del problema 
// - Entrada: valor1="", valor2=""
// - Proceso: Leer VALOR1, Leer VALOR2
// - Salida: Mostrar el mensaje si son iguales o diferentes los valores

const solicitarValor = require('prompt-sync')();
const mostrarMensaje = console.log;

// Pseudocódigo

// Algoritmo IgualesODiferentes
//   Definir valor1, valor2 como Entero
//   Escribir "Ingrese dos valores y mostrar si son iguales o diferentes"
//   Escribir "VALOR 1:"
//   Leer valor1
//   Escribir "VALOR 2:"
//   Leer valor2
//   Si valor1 es igual a valor2 Entonces
//       Escribir "Los valores ingresados son iguales."
//   SiNo
//       Escribir "Los valores ingresados son diferentes."
//   FinSi
// FinAlgoritmo

// JavaScript
function igualesODiferentes() {
    let valor1 = 0, valor2 = 0;
    mostrarMensaje("Ingrese dos valores y mostrar si son iguales o diferentes");
    mostrarMensaje("VALOR 1:");
    valor1 = parseInt(solicitarValor(""));
    mostrarMensaje("VALOR 2:");
    valor2 = parseInt(solicitarValor(""));
    if (valor1 === valor2) {
        mostrarMensaje("Los valores ingresados son iguales.");
    } else {
        mostrarMensaje("Los valores ingresados son diferentes.");
    }
}

igualesODiferentes();
