/*
 * Los ejercicios de este codigo se obtubieron de el siguiente manual:
 *
 *				http://librosweb.es/javascript/
 *
 * Para comenzar a programar en JavaScript.
 * @author: Daniel Bautista
 * twitter: @codeisaac
 * github: https://github.com/isaacbats
 */


//alert("Ya puedo ejecutar JS");
//				==============	CAPITULO 2	==============
/*
	El ejercicio 1 nos muestra como mostrar un dialogo en el navegador para poder
	transmitirle algun mensaje al usuario.
*/
function ejercicio1 () {
	// body...
	alert("Hola mundo ^_^");
	alert("Soy el primer script @ _ @");
}

//				==============	CAPITULO 3	==============
/*
	Uso de variables he insertar cadenas de texto con caracteres especiales
*/
function ejercicio2 () {
	// body...
	var mensaje = "Hola mundo ^_^\n" +
		  		  "\nQué facil es incluir \'comillas simples\'" + 
		  		  "\ny \"comillas dobles\" (\",)";
    // Observar que para poner las comillas simples y dobles usamos el backSlash (\)
    //para poder incluirlas dentro del String.
	alert(mensaje);
	
}

/*
	Creacion de array
*/
function ejercicio3 (){
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

	//Se utiliza un for - each para mostrar el contenido del array :D
	for (var i in meses) {
		alert(meses[i]);
	}
}

/*
	manejando operadores
*/
function ejercicio4 () {
	// body...
	var valores = [true, 5, false, "hola", "adios", 2];
	
	// se crea el if para usar los operadores de relacionales y la funcion length de
	// las cadenas de texto.
	if (valores[3].length > valores[4].length) {
		alert(valores[3] + " es de longitud mas grande que " + valores[4] +
			//Punto numero 1
			"\n" +
			"\n" + valores[3] + " > " + valores[4] + " = " + (valores[3] > valores[4]) +
			"\n" + valores[4] + " > " + valores[3] + " = " + (valores[4] > valores[3]) +
			//Punto nuemro 2
			"\n" +
			"\n" + valores[0] + " OR "  + valores[2] + " = " + (valores[0] || valores[2]) +
			"\n" + valores[2] + " AND " + valores[0] + " = " + (valores[2] && valores[0]) +
			//Punto numero 3
			"\n" +
			"\n" + valores[1] + " + " + valores[5] + " = " + (valores[1] + valores[5]) +		
			"\n" + valores[1] + " - " + valores[5] + " = " + (valores[1] - valores[5]) +		
			"\n" + valores[1] + " * " + valores[5] + " = " + (valores[1] * valores[5]) +		
			"\n" + valores[1] + " / " + valores[5] + " = " + (valores[1] / valores[5]) +		
			"\n" + valores[1] + " % " + valores[5] + " = " + (valores[1] % valores[5]));

	}else{
		alert(valores[4] + " es de longitud mas grande que " + valores[3] +
			//Punto numero 1
			"\n" +
			"\n" + valores[3] + " > " + valores[4] + " = " + (valores[3] > valores[4]) +
			"\n" + valores[4] + " > " + valores[3] + " = " + (valores[4] > valores[3]) +
			//Punto nuemro 2
			"\n" +
			"\n" + valores[0] + " OR "  + valores[2] + " = " + (valores[0] || valores[2]) +
			"\n" + valores[2] + " AND " + valores[0] + " = " + (valores[2] && valores[0]) +
			//Punto numero 3
			"\n" +
			"\n" + valores[1] + " + " + valores[5] + " = " + (valores[1] + valores[5]) +		
			"\n" + valores[1] + " - " + valores[5] + " = " + (valores[1] - valores[5]) +		
			"\n" + valores[1] + " * " + valores[5] + " = " + (valores[1] * valores[5]) +		
			"\n" + valores[1] + " / " + valores[5] + " = " + (valores[1] / valores[5]) +		
			"\n" + valores[1] + " % " + valores[5] + " = " + (valores[1] % valores[5]));		
	}
}

/*
	Estructuras de control de flujo
*/
function ejercicio5 (){

	var numero1 = 5;
	var numero2 = 8;
	 
	if(numero1 < numero2) {
	  alert(numero1 + " no es mayor que " + numero2);
	}
	if(numero2 > 0) {
	  alert(numero2 + " es positivo");
	}
	if(numero1 != 0 || numero1 < 0) {
	  alert(numero1 + " es negativo o distinto de cero");
	}
	if((numero1 + 1) < numero2) {
	  alert("Incrementar en 1 unidad el valor de " + numero1 + " no lo hace mayor o igual que " + numero2);
	}
}

/*
	Estructura de control de flujo 2 sentencia completa if...else
*/
function ejercicio6 () {
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	
	var dni = prompt("Introduce tu DNI: ");
	dni = parseInt(dni);
	var letra_dni = prompt("Introduce la letra de tu DNI: ");
	letra_dni = letra_dni.toUpperCase();

	 var valor = dni + letra_dni;
	 //alert(valor);

	if (!(/^\d{8}[A-Z]$/.test(valor))) {
		alert("El formato es correcto");
		//return false;
	}

	if(valor.charAt(8) != letras[(valor.substring(0, 8))%23]) {
  		alert("La letra no es correcta");
  		//return false;
	}

	if(dni <= 0 || dni > 99999999){
		alert("Numero no valido.");
	}else{
		var numLetra = dni % 23;
		var letra = letras[numLetra];

		if(letra == letra_dni){
			alert("DNI: " + dni + "-" + letra_dni);
		}else{
			alert(letra_dni + " no corresponde a tu DNI tu letra correcta es: " + letra + ".");
		}
	}

}

/*
	comenzamos con ciclos... FOR. Sacar el factorial de un numero entero
*/
function ejercicio7 (){
	var num = prompt("Factorial de un numero." +
		             "\n\nIngresa un numero entero: ");
	var fac = 1;
	
	for(var i = 1; i <= num; i++){
		fac *= i;
	}
	alert("El  factorial de " + num + " es " + fac);

}

//				==============	CAPITULO 4	==============
/*
	Aprendiendo  funciones... retorno de variables.
	Par, Impar
*/
function ejercicio8 () {
	// body...
	var num = prompt("Par o Impar." +
		             "\n\nIngresa un numero entero: ");
	// if(num % 2 == 0){
	// 	alert(num + " es par.");
	// }else{
	// 	alert(num + " es impar.");
	// }
	var result = parImpar(num);
	alert(num + " es " + result + ".");
}

function parImpar (numero) {
	if(numero % 2 == 0){
		return "par";
	}else{
		return "impar";
	}
}

/*
	Segundo ejercicio sobre funciones
	Mayusculas ó minusculas ó ambas.
*/

function ejercicio9 () {
	// body...
	var string = prompt("Mayusculas ó minusculas ó ambas." +
						"\n\nIngresa cualquier cadena de texto: ");
	var result = mayusMinus(string);
	alert("\"" + string + "\"\n Esta formada por " + result + ".");
	console.log(mayusMinus(string));
}

function mayusMinus (argument) {
	// body...
	if(argument == argument.toUpperCase()){
		return "mayusculas";
	}else if(argument == argument.toLowerCase()){
		return "minusculas";
	}else{
		return " mayusculas y minusculas";
	}
}

/*
	Tercer ejercicio sobre funciones 
	Palindromos.
*/

function ejercicio10 (){
	var frase = prompt("¿Es un palindromo?" +
							"\n\nEscribe una frase y verificare si es palindromo o no.");
	alert(palindromo(frase));
}

function palindromo (frase){
	frase = frase.toLowerCase();
	var fraseSpace = frase.split("");
	var arrayFrase="";
	var respuesta = frase.toUpperCase() + "\n\n";

	for(var i in frase){
		if(fraseSpace[i] != " "){
			arrayFrase += fraseSpace[i];
		}
	}
	
	var arrayNormal = arrayFrase.split("");
	var arrayInverso = arrayFrase.split("").reverse();
	var palindromo;
	var diferente = 0;
	for(var i in arrayNormal){
		if (arrayNormal[i] == arrayInverso[i]){
			palindromo = true;
		}else{
			palindromo = false;
			diferente++;
		}
	}

	if (diferente == 0){
		respuesta += " Es palindromo."
	}else{
		respuesta += " No es palindromo."
	}

	//alert(arrayNormal + "\n" + arrayInverso);
	return respuesta;

}

//				==============	CAPITULO 5	==============
/*
	Manipulacion de nodos	---		DOM
	Obtener informacion de una página
*/

function ejercicio11 (){
	 var documento = document.getElementById("ejerc11").getElementsByTagName("a");
	 var info = document.getElementById("info");
	 
	 var conteo = 0;
	 for(var i = 0; i < documento.length;  i++){
	 	if(documento[i].href == "http://prueba" || documento[i].href == "http://prueba/"){
	 		conteo ++;
	 	}
	 }

	 var parrafos = document.getElementById("ejerc11").getElementsByTagName("p");
	 var linksParrafo3 = parrafos[2].getElementsByTagName("a");

	 // alert("Solucion.\n\n" + 
	 // 	   "La pág dada tiene: " + documento.length + " enlaces.\n" +
	 // 	   "Penúltimo enlace: " + documento[documento.length - 2].href + "\n" +
	 // 	   "Numero de enlaces que enlazan a \"http://prueba\" : " + conteo + "\n" +
	 // 	   "Numero de enlaces en el tercer parrafo: " + linksParrafo3.length);

	 info.innerHTML = "Solucion.<br><br>" + 
	 	   "La pág dada tiene: " + documento.length + " enlaces.<br>" +
	 	   "Penúltimo enlace: " + documento[documento.length - 2].href + "<br>" +
	 	   "Numero de enlaces que enlazan a \"http://prueba\" : " + conteo + "<br>" +
	 	   "Numero de enlaces en el tercer parrafo: " + linksParrafo3.length;
	 	     
	 // for(var i = 0; i < numero; i++){
	 // 	alert(documento[i]);
	 // }
	 	
	 //document.write("<h1>Hola como estas</h1>");
}

/*
	Manipulacion de elementos (nodos)     -------   DOM
	asignar estilos especificos o modificar el 
	valor de su estilo y valores.
*/

function ejercicio12 (){
	var elemento = document.getElementById("adicional");
  		elemento.className = "visible";
  		
   var enlace = document.getElementById("enlace");
   	  enlace.className = "oculto";
  	  
  var boton = document.getElementById("botonOculto");
      boton.style.display = "inline";
}

function mostrar(){
	var division = document.getElementById("ejer12");
	    division.style.display = "inline";
	
	/*
		Si queremos hacer mas interactivo el ejemplo se puede hacer 
		que el boton de "Ver solucion" oculte la misma ventana
		por lo que hay que implementar mas codigo sobre el boton.
		O  crear otro boton con la funcion de cambiar
		el estilo de el div #ventana.
	*/

	// var boton = document.getElementById("botonVer");
	// 	boton.value = "Ocultar Solucion";

	// 	if(boton.value == "Ocultar Solucion"){
	// 		division.style.display = "none";
	// 		boton.value = "Ver solucion";
	// 	}
}

function ocultar(){
	var elemento = document.getElementById("adicional");
	    //elemento.style.display = "none";
	    elemento.className = "oculto"
	var boton = document.getElementById("botonOculto");
	    boton.style.display = "none";
	var enlace = document.getElementById("enlace");
	    enlace.className = "visible";
	    //enlace.style.display = "inline";
}

/*
	Crear nodos y añadirlos a la lista 
*/
function ejercicio13(){
	var division = document.getElementById("ejer13");
	    division.style.display = "inline";
}

function agrega1(){
	var lista = document.getElementById("lista");
	var nuevo = document.createElement("li");
	var contenido = document.createTextNode("Esto es un Nodo de mas");

	nuevo.appendChild(contenido);
	lista.appendChild(nuevo);
}

//Otra forma
function agrega2 () {
	var lista = document.getElementById("lista");
	var otroNuevo = "<li>Otra forma</li>";
	lista.innerHTML += otroNuevo;
}

//				==============	CAPITULO 6	==============
/*
	Manejando Eventos - Modelo básico de eventos
	Ocultar y mostrar informacion con un click.
*/
function ejercicio14(){
	var division = document.getElementById("ejer14");
	    division.style.display = "inline";
}

function muestraOculta(id){
	var parrafo = document.getElementById("contenidos_" + id);
	var alink =   document.getElementById("enlace_" + id);

	if(parrafo.style.display == "" || parrafo.style.display == "block"){
	    parrafo.style.display = "none";
	    alink.innerHTML = "Mostrar contenido";
	    //enlace.innerHTML = 'Mostrar contenidos';		
	}else{
		parrafo.style.display = "block";
		alink.innerHTML = "Ocultar contenido";
		//alink.innerHTML("Ocultar contenido");
	}

}

/*
	Obteniendo informacion de los Eventos
	Movimientos del mouse y eventos del teclado.
*/
function ejercicio15(elEvento){
	var division = document.getElementById("ejer15");
	var estiloDiv = {
		//'height'    : '250px',
		'width'		: '160px',
		'border'	: 'thin solid silver',
		'padding' 	: '.5em',
		//'position'	: 'absolute',
		'display'	: 'block'
	};
	estilos(division, estiloDiv);
	// console.log(estiloDiv);

	var evento = elEvento || window.event;
	if(evento.type == "mousemove"){
		var ie = navigator.userAgent.toLowerCase().indexOf("msie") != -1;
		division.style.background = "#00FF00";
		
		var relativaX, relativaY, absolutaX, absolutaY;

		if(ie){
			if(document.documentElement && document.documentElement.scrollTop){ 
                absolutaX = evento.clientX + document.documentElement.scrollLeft;
                absolutaY = evento.clientY + document.documentElement.scrollTop;
              }else { 
                absolutaX = evento.clientX + document.body.scrollLeft;
                absolutaY = evento.clientY + document.body.scrollTop;
              }
		}else{
			absolutaX = evento.pageX;
			absolutaY = evento.pageY;			
		}

		relativaX = evento.clientX;
		relativaY = evento.clientY;

		muestraInformacion(["Raton", 
			                "Navegador [" + relativaX + ", " + relativaY + "]", 
			                "Pagina [" + absolutaX + ", " + absolutaY + "]"], division);
	}
	if(evento.type == "keypress"){
		division.style.background = "#CCE6FF";

		var caracter = evento.charCode || evento.keyCode;
		var letra = String.fromCharCode(caracter);
		var codigo = letra.charCodeAt(0);

		muestraInformacion(["Teclado", 
			                "Carácter [" + letra + "]", 
			                "Código [" + codigo + "]"], division);
	}
	if(evento.type == "click"){
		division.style.background = "#FFFF00";
	}
//Para detectar los eventos.
document.onmousemove = ejercicio15;
document.onkeypress = ejercicio15;
//document.onclick = ejercicio15;
}

function muestraInformacion(mensaje, idtag){
	idtag.innerHTML = "<h1>" + mensaje[0] + "</h1>";
	for(var i = 1; i < mensaje.length; i++){
		idtag.innerHTML += "<p>" + mensaje[i] + "</p>";
	}
}

function estilos(elemento, listaEstilos){
	for(var estilo in listaEstilos){
		elemento.style[estilo] = listaEstilos[estilo];
	}
}

/*
	Obteniendo informacion de los Eventos
	Posicion del mouse 
*/
function ejercicio16(elEvento){
	var division = document.getElementById("ejer16");
	var estylDiv = {
		"background" : "#FFFFCC",
		"border"  : "thin solid silver", 
		"display" : "block",
		"padding" : ".5em",
		"width"   : "160px"

	};
	estilos(division, estylDiv);

	var evento = elEvento || window.event;
	var coorX = evento.clientX;
	var coorY = evento.clientY;

	var dimension = sizeWindowBrowser();
	var longX = dimension[0];
	var longY = dimension[1];

	var positionH = "";
	var positionV = "";

	if(coorX > (longX / 2)){
		positionH = "derecha";	
	}else{
		positionH = "izquierda";
	}

	if(coorY > (longY / 2)){
		positionV = "abajo";	
	}else{
		positionV = "arriba";
	}

	muestraInformacion(["Posicion", positionH, positionV], division);
	if(division.style.display == "block"){
		document.onclick = ejercicio16;		
	}
}

function sizeWindowBrowser(){
	var dimenciones = [];
	if(typeof(window.innerWidth) == 'number') {
        // No es IE
        dimensiones = [window.innerWidth, window.innerHeight];
      } else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6 en modo estandar (no quirks)
        dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
      } else if(document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE en modo quirks
        dimensiones = [document.body.clientWidth, document.body.clientHeight];
      }
     
      return dimensiones;
}

//				==============	CAPITULO 7	==============
/*
	Formularios - Utilidades básicas para formularios
	Maximo de caracteres en textarea.
*/

function ejercicio17(){
	var div = document.getElementById("ejer17");
		div.style.display = "block";
}

function limita(pushKey, maximoCaracteres){
	var elemento = document.getElementById("textare");

	//Obteniedo la  tecla pulsada 
	var tecla = window.event || pushKey;
	var codCaracter = tecla.keyCode || tecla.charCode;

	//Para utilizar las teclas con felchas
	if(codCaracter == 37 || codCaracter == 39){
		return true;
	}
	//Permitir borrar con Bacjspace ó con Supr.
	if(codCaracter == 8 || codCaracter == 46){
		return true;
	}else if(elemento.value.length >= maximoCaracteres){
		return false;
	}else{
		return true;
	}
}

function actualizaContador(maxCar){
	var elemento = document.getElementById("textare");
	var contador = document.getElementById("contador");

	if(elemento.value.length >= maxCar){
		contador.innerHTML = (maxCar - maxCar);
	}else{
		contador.innerHTML = (maxCar - elemento.value.length);
	}
}

//				==============	CAPITULO 8	==============
/*
	Otras Utilidades - Relojes, contadores e intervalos de tiempo
	Mostrar fecha
*/
function reloj (){
	var fechaHora = new Date();
	var horas = fechaHora.getHours();
	var minutos = fechaHora.getMinutes();
	var segundos = fechaHora.getSeconds();

	if(horas < 10) { horas = '0' + horas; }
	if(minutos < 10) { minutos = '0' + minutos; }
	if(segundos < 10) { segundos = '0' + segundos; }

	//alert(fechaHora + "\n" + horas + ":" + minutos + ":" + segundos);

	//document.getElementById("reloj").innerHTML = fechaHora;
	document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
	
	//Para que se actualiza con setTimeout()
	//setTimeout(reloj, 1000);
}

//La forma correcta la cualse debe de actualizar el reloj.
window.onload = function() {
  setInterval(reloj, 1000);

  //Muestra primer calendario
  Calendar.setup({
    inputField: "fecha",
    ifFormat:   "%d / %m / %Y",
    button:     "selector"
  });

  //Calendarion Modificado
  Calendar.setup({
    button:      "selectorM",
    displayArea: "fecha_usuario",
    daFormat:    "%A, %d de %B de %Y",
    ifFormat:    "%d/%m/%Y",
    inputField:  "fecha",
    weekNumbers: false
  });

}
// Con formato de 12 hrs
// var fechaHora = new Date();
// var horas = fechaHora.getHours();
// var minutos = fechaHora.getMinutes();
// var segundos = fechaHora.getSeconds();
 
// var sufijo = ' am';
// if(horas > 12) {
//   horas = horas - 12;
//   sufijo = ' pm';
// }
 
// if(horas < 10) { horas = '0' + horas; }
// if(minutos < 10) { minutos = '0' + minutos; }
// if(segundos < 10) { segundos = '0' + segundos; }
 
// document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos+sufijo;
 
// <div id="reloj" />


/*
	Otras Utilidades - Relojes, contadores e intervalos de tiempo
	Calendario
*/

function ejercicio18(){
	var div = document.getElementById("ejer18");
		div.style.display = "block";
	var texto = document.getElementById("calendarioM");
		texto.style.width = "250px";
}

/*
	Otras Utilidades - Relojes, contadores e intervalos de tiempo
	tooltip
*/

function ejercicio19(){
	var div = document.getElementById("ejer19");
	div.style.display = "block";

	/*
		overlib_pagedefaults es una funcion que no esta declaradaen este archivo de JavaScript
		dicha funcion se encuentra dentro de /librosWeb/js/overlib.js .
		Se puede usar desde este script ya que se enlaza por medio del tag <script> de la 
		página html principal que estamos utilizando.
	*/

	overlib_pagedefaults(
		ABOVE, 
		DELAY, 250,
		BGCOLOR, '#666666',
		FGCOLOR, '#ffffcc',
		OFFSETX, 15,
		TEXTFONT, "Arial, Helvetica, Verdana",
		TEXTSIZE, ".8em",
		WIDTH, 150
	);
}