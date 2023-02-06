/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let importe;
	let aumento;
	let nuevoImporte;


	// tomar el dato por ID y convierte de string a número entero
	importe = parseInt(document.getElementById("txtIdSueldo").value);
	// a la variable importe le saco el 10% y lo guardo en la variable aumento
	aumento = importe *10 /100;
	// sumo el sueldo más el porcentaje de aumento para guardar en nuevoImporte el resultado
	nuevoImporte = importe + aumento;

	// Muestro el importe por Id 
	document.getElementById("txtIdResultado").value = nuevoImporte;
	
}
