// 7. Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
// Análisis de los requisitos:
// Variables utilizadas:
// - Entrada: gradosCelsius = 0.0 (leer), gradosFahrenheit = 0.0 (calcular)
// - Proceso: gradosFahrenheit = (gradosCelsius * 1.8) + 32
// - Salida: gradosFahrenheit
// Pseudocódigo:
// Algoritmo grados
//   Definir gradosCelsius, gradosFahrenheit
//   Mostrar "Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit."
//   Mostrar "Por favor, ingrese los grados Celsius (°C):"
//   Leer gradosCelsius
//   Calcular los grados Fahrenheit usando la fórmula (gradosCelsius * 1.8) + 32
//   Mostrar los grados Fahrenheit obtenidos
// FinalAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

// JavaScript
function grados() {
    let gradosCelsius = 0.0;
    let gradosFahrenheit = 0.0;

    write("Por favor, ingrese la temperatura en grados Celsius (°C):");
    gradosCelsius = parseFloat(read());

    if (!isNaN(gradosCelsius)) {
        gradosFahrenheit = (gradosCelsius * 1.8) + 32;
        write("La temperatura en grados Fahrenheit (°F) es: " + gradosFahrenheit);
    } else {
        write("Por favor, ingrese una temperatura válida en grados Celsius.");
    }
}

grados();
