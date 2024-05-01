// 11. Solicitar al usuario una distancia en metros y mostrarla en centímetros.
// Análisis de los requisitos:
// Variables utilizadas:
// - Entrada: distanciaMetros = 0.0, distanciaCentimetros = 0.0
// - Proceso: Calcular la distancia en centímetros multiplicando la distancia en metros por 100
// - Salida: distanciaCentimetros
// Pseudocódigo:
// Algoritmo convertirDistancia
//   Definir distanciaMetros, distanciaCentimetros como Enteros
//   Mostrar "Ingresa la distancia en metros y muéstrala en centímetros"
//   Mostrar "Ingresa la distancia en metros:"
//   Leer distanciaMetros
//   Calcular la distancia en centímetros multiplicando distanciaMetros por 100
//   Mostrar "Distancia en centímetros:"
//   Mostrar distanciaMetros, " metros son ", distanciaCentimetros, " centímetros."
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

// JavaScript
function convertirDistancia() {
    let distanciaMetros, distanciaCentimetros;

    write("Ingresa la distancia en metros y muéstrala en centímetros");

    write("Ingresa la distancia en metros:");
    distanciaMetros = parseInt(read());

    distanciaCentimetros = distanciaMetros * 100;

    write("Distancia en centímetros:");
    write(distanciaMetros + " metros son " + distanciaCentimetros + " centímetros.");
}

convertirDistancia();
