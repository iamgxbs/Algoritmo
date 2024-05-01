//2. Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
//análisis de requerimientos 
//variables del problema 
// entrada : EDAD="(LEER)
// los cálculos o procesos que se hacen con las variables 
//proceso: //si EDAD>20 Entonces
		//Mostrar "ES MAYOR DE EDAD"
	//SiNo
		//Mostrar "ES MENOR DE EDAD"
	//FinSi
//la información de las variables procesadas 
// salida: MENSAJE SI ES O NO MAYOR DE EDAD


const solicitarEntrada = require('prompt-sync')();
const mostrarMensaje = console.log

//PSEUDOCODIGO

//Algoritmo adultoSL
	//Definir EDAD como entero
	//Mostrar "INGRESA TU EDAD PARA SABER SI ERES MAYOR O MENOR DE EDAD"
	//Mostrar "INGRESA TU EDAD"
	//Leer EDAD
		//si EDAD>20 Entonces
		//Mostrar "ES MAYOR DE EDAD"
	//SiNo
		//Mostrar "ES MENOR DE EDAD"
	//FinSi
//FinAlgoritmo


// JAVA SCRIPT

function adulto() {
    let edad = 0;
    mostrarMensaje("INGRESA TU EDAD PARA SABER SI ERES MAYOR O MENOR DE EDAD");
    edad = solicitarEntrada("INGRESA TU EDAD: ");
    if (edad > 20) {
      mostrarMensaje("ES MAYOR DE EDAD");
    } else {
      mostrarMensaje("ES MENOR DE EDAD");
    }
  }
    adulto();
