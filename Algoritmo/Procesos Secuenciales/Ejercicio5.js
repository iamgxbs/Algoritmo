// 5. Pregunta al usuario cuántos años tiene y muestra cuántos años cumplirá el próximo año.
// Análisis de los requisitos:
// Variables utilizadas:
// - Entrada: edadUsuario = "" (leer), edadProximoAño = "" (calcular)
// - Proceso: edadProximoAño = edadUsuario + 1
// - Salida: edadProximoAño
// Pseudocódigo:
// Algoritmo PROXIMO AÑO
//   Definir edadUsuario, edadProximoAño
//   Preguntar al usuario: "¿Cuántos años tienes?"
//   Leer la edadUsuario
//   Calcular la edad que tendrá el próximo año sumando 1 a la edad actual
//   Mostrar: "El próximo año tendrás " + edadProximoAño + " años."
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

// JavaScript
function ProximoAño() {
    let edadUsuario = read("¿Cuántos años tienes? ");
    edadUsuario = parseInt(edadUsuario);

    if (!isNaN(edadUsuario)) {
        let edadProximoAño = edadUsuario + 1;
        write("El próximo año tendrás " + edadProximoAño + " años.");
    } else {
        write("Por favor, ingresa una edad válida.");
    }
}

ProximoAño();
