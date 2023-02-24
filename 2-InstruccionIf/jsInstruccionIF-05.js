function mostrar()
{
	//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").valeu);

	if (edad < 13 || edad > 17) {
		
		alert('no es adolescente ');
	}


	//if (!(edad <= 13 && edad >= 17) ) {
		//alert('No es adolescente');	
	//}

}