//4. Solicitar al usuario un número y mostrar si es positivo o negativo.
// Análisis de los requerimientos 
// Variables del problema 
// - Entrada: valor=""
// - Proceso: "Inserta un número y mostrar si es positivo o negativo"
// - Salida: Mostrar el mensaje si es positivo o negativo

const leer = require('prompt-sync')();
const escribir = console.log;

// Pseudocódigo

// Algoritmo PositivoONegativo
//   Definir valor como entero
//   Escribir "Inserta un número y mostrar si es positivo o negativo"
//   Leer valor
//   Si valor >= 0 Entonces
//       Escribir "Es positivo"
//   Sino 
//       Escribir "Es negativo"
//   FinSi
// FinAlgoritmo

// JavaScript
function positivoONegativo() {
    let valor = 0;
    escribir("Inserta un número y mostrar si es positivo o negativo");
    valor = parseInt(leer("Ingrese el número: "));
    if (valor >= 0) {
      escribir("Es positivo");
    } else {
      escribir("Es negativo");
    }
}

positivoONegativo();
