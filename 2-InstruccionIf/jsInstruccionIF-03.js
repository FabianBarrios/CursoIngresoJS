function mostrar()
{ //Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

	let edad;

	edad = parseInt(document.getElementById('txtIdEdad').value);

	if (edad >= 18) {

		alert('Es mayor de edad');
	}
	else{
		alert('Es menor de edad');
		
	}

}