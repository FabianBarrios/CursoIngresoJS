/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    
    // transformo string a enteros con parseInt

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres; 

    alert('La suma de los precios es ' + suma);
    
}
function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let promedio;

    // transformo string a enteros con parseInt
    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    // sumo los 3 valores para así poder sacar el promedio dividiendo por la cantidad de valores a promediar 
    suma = precioUno + precioDos + precioTres;
    promedio = suma/3;

    alert(' el promedio del precio de los productos es '  +  promedio);

    // CICLO REPETITIVO 'for' para sacar n cantidad de promedios 
    // sería variable inicial = a algo, hasta q esta variable sea > o sea < dependiendo de lo que queramos 
    // a X valor y esta misma variable incrementa en uno en uno hasta q termine el ciclo 
    // for(i=0 ; i>x;i++) {}

    // let precios;
    // let suma = 0;
    //let promedio;

    //let nprecios = parseint(document.getElementById('txtIdPrecios').value);
    // for(i=0; i< nprecios; i++) {
     //   let = precios = parseint(document.getElementById('txtIdPrecios').value + i);
      //  suma = suma + precios; 
   // }
        
        //promedio = suma / nprecios
        //alert('el resultado es ' + promedio);
    

}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let iva;
    let precioFinal;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    
    suma = precioUno + precioDos + precioTres;
    // a la suma le saco el IVA 21% 
    iva = suma * 21 / 100;
    
    precioFinal = suma + iva;


    alert('El precio final con IVA incluído es ' + precioFinal);


}