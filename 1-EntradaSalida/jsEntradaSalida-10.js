/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe; 
	let descuento;
	let nuevoImporte;

	//tomamos un importe por id y lo convertimos en número con parseint
	importe = parseInt(document.getElementById("txtIdImporte").value);
	// a la variable importe le saco el 25% y lo guardo en la variable descuento
	descuento= importe *25 / 100;
	// resto el importe menos el porcentaje de descuento para guardar en nuevoImporte el resultado
	nuevoImporte = importe - descuento;
    // muestro 
	document.getElementById("txtIdResultado").value = nuevoImporte 

}
//opcion terminal => nueva terminal

//subida al repo
//git status (ver los cambios que tengo para subir);
//git add . (pasar los cambios a staged)
//git status (ver los cambios que tengo para subir);
//git commit -m "titulo del commit"
//git push

//bajada
//git pull

