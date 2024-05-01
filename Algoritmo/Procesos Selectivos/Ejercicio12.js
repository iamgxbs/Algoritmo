const solicitarEntrada = require('prompt-sync')();
const mostrarMensaje = console.log;

// 12. Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
// Análisis de los requerimientos 
// Variables del problema 
// - Entrada: VALOR=0, VALORT=0
// - Proceso: Leer el monto total de la factura y el porcentaje de IVA aplicado
//            Calcular el monto total a pagar incluyendo el IVA
// - Salida: Mostrar el monto total a pagar

// Pseudocódigo

// Algoritmo CalcularIVA
//   Definir valor, valort Como Real
//   Escribir "Ingrese el monto total de la factura:"
//   Leer valor
//   Escribir "Ingrese el porcentaje de IVA aplicado:"
//   Leer valort
//   valort = valor * (1 + valort/100)
//   Escribir "SU MONTO A PAGAR ES DE:"
//   Escribir valort
// FinAlgoritmo

// JavaScript
function calcularIVA() {
  const valor = parseFloat(solicitarEntrada("Ingrese el monto total de la factura: "));
  const valort = parseFloat(solicitarEntrada("Ingrese el porcentaje de IVA aplicado: "));

  const montoConIva = valor * (1 + valort/100);
  mostrarMensaje("SU MONTO A PAGAR ES DE: " + montoConIva);
}

calcularIVA();
