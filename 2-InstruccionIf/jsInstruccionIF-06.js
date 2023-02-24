function mostrar()
{
	//Al ingresar una edad debemos informar 
	//si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad < 13 ) {
		
		alert( 'es un niño');
	}

	else if (edad >= 13 && edad <= 17 ) {

		alert( 'es adolescente ');
		
	} else { 
		alert( 'es mayor de edad')
	}
}