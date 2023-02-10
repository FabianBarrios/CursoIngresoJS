/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let alambre;
    let largo; 
    let ancho; 
    let perimetro

    // calcular el perimetro del rectángulo b + a * 2 

    largo = parseInt(document.getElementById('txtIdLargo').value);
    ancho = parseInt(document.getElementById('txtIdAncho').value);
    perimetro = (largo + ancho ) * 2;
    alambre = perimetro * 3;

    alert('Se necesitan comprar ' + alambre  +  ' mtrs de alambre ' );

}
function Circulo () 
{
	let alambre; 
    let radio; 
    let perimetro;
    let PI;

    PI = 3.14;
    radio = parseInt(document.getElementById('txtIdRadio').value);
    perimetro = 2 * PI * radio;
    alambre = perimetro * 3 

    alert('Se necesitan comprar ' + alambre  +  ' mtrs de alambre ')





}
function Materiales () 
{
	
}