const read = require('prompt-sync')();
const write = console.log;

// 18. "Somos más" es una empresa de banquetes con tarifas variables. El costo por platillo por persona es de $20.00, pero se aplican descuentos por volumen:
// Si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00 por platillo. Para más de 200 personas, el costo por platillo es de $10.00.
// Se requiere un algoritmo para determinar el presupuesto que se debe presentar a los clientes para un evento, considerando un impuesto del 15%.

// Análisis del requerimiento
// ENT: numpersonas=00(leer)
// PRO: Si numPersonas <= 100 Entonces
// costoPlatillo = 20.00
// Sino Si numPersonas > 100 Y numPersonas <= 200 Entonces
// costoPlatillo = 15.00
// Sino
// costoPlatillo = 10.00
// FinSi
// presupuestoSinIVA = numPersonas * costoPlatillo
// presupuestoConIVA = presupuestoSinIVA * 1.15
// Escribir "El presupuesto total con IVA para", numPersonas, "personas es:", presupuestoConIVA
// SAL: presupuestoConIva

// Pseudocódigo
// Algoritmo CalcularPresupuestoBanquete
// Escribir "Ingrese el número de personas:"
// Leer numPersonas
// Si numPersonas <= 100 Entonces
// costoPlatillo = 20.00
// Sino Si numPersonas > 100 Y numPersonas <= 200 Entonces
// costoPlatillo = 15.00
// Sino
// costoPlatillo = 10.00
// FinSi
// presupuestoSinIVA = numPersonas * costoPlatillo
// presupuestoConIVA = presupuestoSinIVA * 1.15
// Escribir "El presupuesto total con IVA para", numPersonas, "personas es:", presupuestoConIVA
// FinAlgoritmo

// JavaScript

function CalcularPresupuestoBanquete() {
    let numPersonas = parseInt(read("Ingrese el número de personas:"));
    let costoPlatillo, presupuestoSinIVA, presupuestoConIVA;

    if (numPersonas <= 100) {
        costoPlatillo = 20.00;
    } else if (numPersonas > 100 && numPersonas <= 200) {
        costoPlatillo = 15.00;
    } else {
        costoPlatillo = 10.00;
    }

    presupuestoSinIVA = numPersonas * costoPlatillo;
    presupuestoConIVA = presupuestoSinIVA * 1.15;

    write("El presupuesto total con IVA para", numPersonas, "personas es:", presupuestoConIVA);
}

CalcularPresupuestoBanquete();
