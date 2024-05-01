//1. Pedir al usuario un número y mostrar si es mayor o menor que 10.
// análisis de requerimientos 
//variables del problema 
// entrada : Numero=""(leer)
// los cálculos o procesos que se hacen con las variables 
//proceso: //SI Numero>10 Entonces
		//Mostrar "EL NUMERO INGRESADO ES MAYOR QUE 10"
	 // SiNo
			//Mostrar "EL NUMERO INGRESADO NO ES MAYOR QUE 10"
		//FinSi
//la información de las variables procesadas 
// salida: PRESENTAR EL MENSAJE SI ES MAYOR O MENOR DE Numero

const solicitarEntrada = require('prompt-sync')();
const mostrarMensaje = console.log

//Pseudocodigo
//Algoritmo MAYORDENumero
	//DEFINIR  Numero COMO ENTERO
	//Mostrar "INGRESAR UN NUMERO"
	//Leer Numero
	//SI Numero>10 Entonces
		//Mostrar "EL NUMERO INGRESADO ES MAYOR QUE 10"
	 // SiNo
			//Mostrar "EL NUMERO INGRESADO NO ES MAYOR QUE 10"
		//FinSi
		
//FinAlgoritmo

//JAVASCRIPT
function Ejercicio1() {
    let Numero=0;
        mostrarMensaje("INGRESAR UN NUMERO");
              Numero = solicitarEntrada("EL NUMERO ES: ");
        if (Numero > 10) {
          mostrarMensaje("EL NUMERO INGRESADO ES MAYOR QUE 10");
        } 
        else {
          mostrarMensaje("EL NUMERO INGRESADO NO ES MAYOR QUE 10");
        }
      }
compararNumero();