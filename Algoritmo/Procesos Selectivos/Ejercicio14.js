const leer = require('prompt-sync')();
const escribir = console.log;

// 14. Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 80 puntos.
// Análisis de requerimientos 
// Variables del problema 
// - Entrada: nota=0
// - Proceso: Leer la nota del examen y determinar si el estudiante aprobó o reprobó
// - Salida: Mostrar el mensaje correspondiente

// Pseudocódigo

// Algoritmo Examen
//   Definir nota Como Entero
//   Escribir "NOTA DEL EXAMEN"
//   Leer nota
//   Si nota >= 80 Entonces
//       Escribir "EL ESTUDIANTE APROBÓ"
//   SiNo
//       Escribir "EL ESTUDIANTE REPROBÓ"
//   FinSi
// FinAlgoritmo

// JavaScript
function examen() {
  let nota;
  nota = parseInt(leer("NOTA DEL EXAMEN: "));
  
  if (nota >= 80) {
    escribir("EL ESTUDIANTE APROBÓ");
  } else {
    escribir("EL ESTUDIANTE REPROBÓ");
  }
}

examen();
