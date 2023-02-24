function mostrar()
{
	//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
	
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	// uso el operador lógico 'Y' para unir el rango de las dos variables 
	if ( edad >=13 && edad <= 17 ) {
	
		alert('Es adolescente')
	}

	else{

		alert('No es adolescente')

	}

	// SI NO ESTOY FUERA DEL RANGO ENTONCES SOY ADOLESCENTE 
	//	if( !(edad < 13 || edad > 17 ) ){
	//		  alert( 'es adolescente');
	//	}
}