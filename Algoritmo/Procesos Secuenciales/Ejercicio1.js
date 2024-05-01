// 1. Solicitar al usuario su nombre y darle la bienvenida.
// Análisis de los requisitos
// Variables del problema:
// - Entrada: nombre = "" (leer)
// - Proceso: saludo = "¡Hola, " + nombre + ", bienvenido!"
// - Salida: saludo

// PSEUDOCÓDIGO
// Algoritmo ejercicio1
//     Definir nombre=""
//     Mostrar "¡Hola! ¿Cuál es tu nombre?"
//     Leer nombre
//     Mostrar "¡Hola, " + nombre + ", bienvenido!"
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

// JavaScript
function ejercicio1() {
    let nombre = "";
    nombre = read("Hola, por favor, ingrese su nombre:   ");
    write("¡Hola " + nombre + ", bienvenido!");
}
ejercicio1();
