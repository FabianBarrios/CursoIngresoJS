/*
Debemos lograr tomar un dato por 'PROMPT'
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{   // ejemplo para mí
	/*let dato

	dato = document.getElementById('txtIdNombre').value = 'lo que quieras'

	console.dir(document.getElementById('txtIdNombre'));
*/

let nombre;

 nombre = prompt('ingrese nombre');

document.getElementById('txtIdNombre').value = nombre;
	//let num = Math.floor(Math.random()*10);
	//console.log(num);
}


