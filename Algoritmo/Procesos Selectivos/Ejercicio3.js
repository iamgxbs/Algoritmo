// 3. Pedir al usuario un número y mostrar si es par o impar.
// Análisis de requerimientos 
// Variables del problema 
// - Entrada: numero=""
// - Proceso: Leer NUMERO
// - Salida: Mostrar el mensaje si es par o impar

const leer = require('prompt-sync')();
const escribir = console.log;

// Pseudocódigo

// Algoritmo ParOImpar
//   Definir NUMERO como entero
//   Escribir "Ingrese un número:"
//   Leer NUMERO
//   Si NUMERO MOD 2 == 0 Entonces
//       Escribir "El número ingresado es par."
//   SiNo
//       Escribir "El número ingresado es impar."
//   FinSi
// FinAlgoritmo

// JavaScript
function parOImpar() {
    let numero = 0;
    escribir("Ingrese un número:");
    numero = parseInt(leer(""));
    if (numero % 2 === 0) {
        escribir("El número ingresado es par.");
    } else {
        escribir("El número ingresado es impar.");
    }
}

parOImpar();
