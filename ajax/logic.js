function getInfo() {
	var nameToSearch = document.getElementById('search-box').value;
	var pName = {name: nameToSearch};
	var xhttp = new XMLHttpRequest();
	var url  = "http://irock.enroute.xyz:4000/search/";
	deleteElementById('main-presentation');
	


	xhttp.onreadystatechange = function () {
		var infoArr;
		if (this.readyState == 4 && this.status == 200) {
			infoArr = JSON.parse(this.responseText);
			processJSON(infoArr.response.docs);
		}
	}

	xhttp.open("POST",url, true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("name="+pName.name);
}
//Process the JSON file
	function processJSON(arr) {
		var out = "";
		var placeHolder = document.getElementById("main-presentation");
		var i;
		//alert(arr[0].nombre);
		
		for (i = 0; i < arr.length; i++) {
			out ='<div>' +
					'<p class="data-field">Nombre: ' +
						arr[i].nombre +
					'</p>' +
					'<p class="data-field">Cedula Profesional: ' +
						arr[i].numCedula +
					'</p>' +
					'<p class="data-field">Titulo: ' +
						arr[i].titulo +
					'</p>' +
				'</div>';
			console.log(out);
			var node = document.createElement('arcticle');
			var eCreated = placeHolder.appendChild(node);
			eCreated.setAttribute('id','person-' + arr[i].id);
			eCreated.setAttribute('class','info-card');
			eCreated.innerHTML = out;
		}
		
	}
//Process the JSON file
//
//Removes elements in new queries


function deleteElementById(idName) {
	var elements = document.getElementById(idName);
	while(elements.childNodes.length > 0) {
		elements.removeChild(elements.childNodes[0]);
	}
}

//Removes elements in new queries