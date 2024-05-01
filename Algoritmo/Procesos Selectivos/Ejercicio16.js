const read = require('prompt-sync')();
const write = console.log;

// 16.	Solicitar al usuario su salario mensual y calcular su salario anual. Si el salario anual supera los $30,000, se aplica un impuesto del 15% sobre el excedente y se muestra el salario neto anual.
// Análisis del requerimiento
// ENT: salarioMensual=0(leer), salarioAnual=0(calcular), excedente=0(calcular), impuesto=0(calcular), salarioNetoAnual=0(calcular)
// PRO: salarioAnual <- salarioMensual * 12
//     Si salarioAnual > 30000 Entonces
//         excedente <- salarioAnual - 30000
//         impuesto <- excedente * 0.15
//         salarioNetoAnual <- salarioAnual - impuesto
//     Sino
//         salarioNetoAnual <- salarioAnual
// SAL: salarioNetoAnual

// Pseudocódigo

// Algoritmo CalcularSalarioAnual
//     Definir salarioMensual, salarioAnual, excedente, impuesto, salarioNetoAnual Como Real
//     Escribir "Ingrese su salario mensual: "
//     Leer salarioMensual
//     salarioAnual <- salarioMensual * 12
//     Si salarioAnual > 30000 Entonces
//         excedente <- salarioAnual - 30000
//         impuesto <- excedente * 0.15
//         salarioNetoAnual <- salarioAnual - impuesto
//     Sino
//         salarioNetoAnual <- salarioAnual
// FinAlgoritmo

// JavaScript

function CalcularSalarioAnual() {
    let salarioMensual = parseFloat(read("Ingrese su salario mensual:"));
    let salarioAnual = salarioMensual * 12;
    let salarioNetoAnual;

    if (salarioAnual > 30000) {
        let excedente = salarioAnual - 30000;
        let impuesto = excedente * 0.15;
        salarioNetoAnual = salarioAnual - impuesto;
    } else {
        salarioNetoAnual = salarioAnual;
    }

    write("Su salario neto anual es:", salarioNetoAnual);
}

CalcularSalarioAnual();
