var requestURL = "./clients.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
request.send();
request.onload = function() {
    var jsondata2 = request.response;
    //console.log("jsondata2: \n"+jsondata2);
    var json = JSON.parse(jsondata2);
    //console.log("json: \n"+json);
    console.log(json.clients.length);
    for(var idx=0; idx < json.clients.length; idx++){
    	console.log(json.clients[idx].firstName);
    	//on remplis la liste de selection avec les prenoms de la liste et en valeur
    	// leur index, pour le récup plus facilement lors de la selection
    	$(".selectName").append('<option value="'+idx+'">'+json.clients[idx].firstName+'</option>');
    }
    $(".selectName").on("change",displayInfos);
    function displayInfos(){
    	var idSel= $(".selectName").find(":selected").attr("value");
    	console.log(idSel);
    	//quand on clique sur un nom, ça affiche les infos correspondantes
    	$(".infosClient").html('<div class="card-body"><div class="text-center card-title">'+json.clients[idSel].firstName+' '+json.clients[idSel].name+'</div><p>Age: '+json.clients[idSel].age+'</p><p>Métier: '+json.clients[idSel].profession+'</p><p>e-mail: '+json.clients[idSel].email+'</p><p>Téléphone: '+json.clients[idSel].phone+'</p></div>');
    	$(".img-fluid").attr("src",json.clients[idSel].imgsrc);
    }
}