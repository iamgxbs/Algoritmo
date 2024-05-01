const solicitarEntrada = require('prompt-sync')();
const mostrarMensaje = console.log;

// 13. Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
// Análisis de los requerimientos 
// Variables del problema 
// - Entrada: precio=0, descuento=0.0
// - Proceso: Leer el precio del producto y el porcentaje de descuento aplicado
//            Calcular el precio final luego de aplicar el descuento
// - Salida: Mostrar el precio final

// Pseudocódigo

// Algoritmo CalcularPrecioFinal
//   Definir precio, descuento, precioFinal Como Real
//   Escribir "Ingrese el precio del producto:"
//   Leer precio
//   Escribir "Ingrese el porcentaje de descuento aplicado:"
//   Leer descuento
//   precioFinal = precio - (precio * (descuento / 100))
//   Escribir "El precio final luego de aplicar el descuento es:", precioFinal
// FinAlgoritmo

// JavaScript
function calcularPrecioFinal() {
  const precio = parseFloat(solicitarEntrada("Ingrese el precio del producto: "));
  const descuento = parseFloat(solicitarEntrada("Ingrese el porcentaje de descuento aplicado: "));

  const precioFinal = precio - (precio * (descuento / 100));
  mostrarMensaje("El precio final luego de aplicar el descuento es: " + precioFinal);
}

calcularPrecioFinal();
