/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// Declaro las variables
let nombre; 
let edad;

// tomo el valor por Id 
nombre = document.getElementById("txtIdNombre").value;
edad = document.getElementById("txtIdEdad").value;
// Los muestro concatenados por alert
alert(' usted se llama ' + nombre + ' Y tiene ' + edad + ' años');



}

