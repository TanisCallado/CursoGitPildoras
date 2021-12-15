var nombre;
var fecha;
var direccion;
var telefono;
var presupuesto;
var rey=document;
var regalo1;
var regalo2;
var regalo3;

function resetear(){
	errorNombre.textContent="";
	errorFecha.textContent="";
	errorDir.textContent="";
	errorTel.textContent="";
	errorRegalos.textContent="";
}

function rellenarCarta(){
	fichaNombre.textContent="Nombre: " + nombre;
	fichaPrecio.textContent="Precio medio por regalo: " + parseInt((presupuesto)/3) + "€";
	fichaRey.textContent="Rey Mago Favorito: " + rey;
	fichaRegalo1.textContent="Regalo1: " + regalo1;
	fichaRegalo2.textContent="Regalo2: " + regalo2;
	fichaRegalo3.textContent="Regalo3: " + regalo3;
	switch(rey){
		case "Melchor":ficha.style.background="red";break;
		case "Gaspar":ficha.style.background="yellow";break;
		case "Baltasar":ficha.style.background="green";break;
}
ficha.style.display="block";

}

function inicializarVariables(){
	nombre=document.formulario.nombre.value;
	fecha=document.formulario.fechaNac.value;
	direccion=document.formulario.direccion.value;
	telefono=document.formulario.telefono.value;
	presupuesto=document.formulario.presupuesto.value;
	rey=document.formulario.reyMago.value;
	regalo1=document.formulario.regalo1.value;
	regalo2=document.formulario.regalo2.value;
	regalo3=document.formulario.regalo3.value;

}

function generarCarta(){
	inicializarVariables();
	resetear();
	var error=0;
	if(nombre.length==0){
		errorNombre.textContent="campo obligatorio";error++;
	}
	if(fecha.length==0){
		errorFecha.textContent="campo obligatorio";error++;
	}
	if(direccion.length==0){
		errorDir.textContent="campo obligatorio";error++;
	}
	if(telefono.length==0){
		errorTel.textContent="campo obligatorio";error++;
	}
	else{
		var patronTelefono=/^\(\+\d{2,3}\)\d{9}$/;
		if(patronTelefono.test(telefono)==false){
			errorTel.textContent+="Formato: (+34)123456789";error++;
		}
	}

if(regalo1.length==0 || regalo2.length==0 || regalo3.length==0){
	errorRegalos.textContent="campos obligatorios";error++;
}
if(error==0) rellenarCarta();
}

window.onload=function(){
	ficha.style.display="none";
	document.formulario.boton.addEventListener("click", generarCarta);
}