const read = require('prompt-sync')();
const write = console.log;

// 17. La asociación de vinicultores establece un precio inicial por kilogramo de banano, clasificado en tipos A y B, y tamaños 1 y 2. Para cada venta, se determina cuánto recibirá un productor por el banano entregado, teniendo en cuenta lo siguiente:
// Si el banano es de tipo A, se agregan $2 al precio inicial si es tamaño 1; y $3 si es tamaño 2.
// Si el banano es de tipo B, se descuentan $3 si es tamaño 1, y $5 si es tamaño 2. Se requiere calcular la ganancia obtenida.
//* Análisis del requerimiento
// ENT: tipo=""(LEER), tamaño=00(LEER)
// PRO:  Escribir "INGRESA EL TIPO DEL BANANO (A O B)"
// Leer tipo 
// Escribir "INGRESA EL TAMAÑO DEL BANANO (1 O 2)"
// LEER tamaño
// Escribir "INGRESA EL PRECIO "
// Leer precioInicial
// SI tipo = "A" Entonces
//     precioFinal = precioInicial + 2
// SINO 
//     SI tipo = "B" Entonces
//         precioFinal = precioInicial + 3
//     FinSi
// FinSi
// SI tamaño = "1" Entonces
//     precioFinal = precioInicial - 3
// Sino 
//     SI tamaño = "2" Entonces
//         precioFinal = precioInicial - 5
//     FinSi
// Escribir "PRECIO FINAL DEL BANANO ES:"
// ESCRIBIR precioFinal "$"
// SAL: precioFinal

// Pseudocódigo
// Algoritmo CalcularPrecioBanano
// Definir tipo, tamaño Como Caracter
// Definir precioInicial, precioFinal Como Real
// Escribir "INGRESA EL TIPO DEL BANANO (A O B)"
// Leer tipo 
// Escribir "INGRESA EL TAMAÑO DEL BANANO (1 O 2)"
// LEER tamaño
// Escribir "INGRESA EL PRECIO "
// Leer precioInicial
// SI tipo = "A" Entonces
//     precioFinal = precioInicial + 2
// SINO 
//     SI tipo = "B" Entonces
//         precioFinal = precioInicial + 3
//     FinSi
// FinSi
// SI tamaño = "1" Entonces
//     precioFinal -= 3
// Sino 
//     SI tamaño = "2" Entonces
//         precioFinal -= 5
//     FinSi
// Escribir "PRECIO FINAL DEL BANANO ES:"
// ESCRIBIR precioFinal "$"
// FinAlgoritmo

// JavaScript

function CalcularPrecioBanano() {
    let tipo = read("INGRESA EL TIPO DEL BANANO (A O B)"),
        tamaño = read("INGRESA EL TAMAÑO DEL BANANO (1 O 2)"),
        precioInicial = read("INGRESA EL PRECIO "),
        precioFinal;

    if (tipo == "A") {
        precioFinal = precioInicial + 2;
    } else if (tipo == "B") {
        precioFinal = precioInicial + 3;
    }

    if (tamaño == "1") {
        precioFinal -= 3;
    } else if (tamaño == "2") {
        precioFinal -= 5;
    }

    write("PRECIO FINAL DEL BANANO ES: $" + precioFinal);
}

CalcularPrecioBanano();
