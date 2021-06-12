const tituloNombre= document.getElementById("tituloNombre");
var texto = "Virginia Cano Rodríguez"
var letra = 0;

function escribirTitulo(){
	tituloNombre.innerText = texto.slice(0,letra);
	letra ++;
	if (letra <= texto.length){
		setTimeout(escribirTitulo,90);
	}

}

escribirTitulo();
