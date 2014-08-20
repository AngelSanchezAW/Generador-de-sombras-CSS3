window.onload = function() {
	document.propiedades.Generar.onclick = generar
	document.propiedades.derecha.onclick = generar 
	document.propiedades.abajo.onclick = generar 
	document.propiedades.desenfoque.onclick = generar 
	document.propiedades.ancho.onclick = generar  
	document.propiedades.interno.onclick = generar
}  

function generar() {
	
	


	derechaPropiedad = document.propiedades.derecha.value 
	abajoPropiedad = document.propiedades.abajo.value 
	desenfoquePropiedad= document.propiedades.desenfoque.value 
	colorPropiedad=  document.propiedades.colors.value
	anchoPropiedad=  document.propiedades.ancho.value  
	internoPropiedad=document.propiedades.interno.checked

	if (derechaPropiedad == "" ) {
		derechaPropiedad = 0;
	}

	if (abajoPropiedad == "" ) {
		abajoPropiedad = 0;
	} 

	if (desenfoquePropiedad == "" ) {
		desenfoquePropiedad = 0;
	}

	if (anchoPropiedad == "" ) {
		anchoPropiedad = 0;
	}

	 if (internoPropiedad==true) {
    	var sombra = "inset"+" "+derechaPropiedad+'px'+' '+abajoPropiedad+'px'+' '+desenfoquePropiedad+'px'+' '+anchoPropiedad+'px'+' '+colorPropiedad;
    } else {
    	var sombra = derechaPropiedad+'px'+' '+abajoPropiedad+'px'+' '+desenfoquePropiedad+'px'+' '+anchoPropiedad+'px'+' '+colorPropiedad;
    }

    document.getElementById("caja").style.boxShadow = sombra;
    

    document.getElementById("codigo").innerHTML = "#caja{"+"<br/>"+"box-shadow:"+sombra+";"+"<br/>"+"-moz-box-shadow:"+sombra+";"+"<br/>"+"-webkit-box-shadow:"+sombra+";"+"<br/>"+"}";
			 
}
 

	

	
  
