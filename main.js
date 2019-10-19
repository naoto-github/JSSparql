$(function(){

    var url = "https://jpsearch.go.jp/rdf/sparql";

    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    
    $.get(
	url,
	{query: prefix + myquery},
	success, "json"
    );

    function success(data){

	console.log(data);
	
	var vars = data.head.vars;
	var bindings = data.results.bindings;

	var json_text = "["

	for(var i=0; i<bindings.length; i++){
	    var record = "{";
	    for(var j=0; j<vars.length; j++){
		type = vars[j]
		value = bindings[i][vars[j]].value;

		if(type == "url"){
		    value = "<a href=" +value + ">" + value + "</a>";
		}
		
		record += `"` + type + `"` + ":" + `"` + value + `"`
		if(j != vars.length - 1){
		    record += ","
		}
	    }
	    record += "}"
	    if(i != bindings.length - 1){
		record += ","
	    }	    
	    json_text += record
	}

	json_text += "]"

	// console.log(json_text)

	json = JSON.parse(json_text);

	// console.log(json)
	
	$("#result").columns({
	    data: json,
	    size: 10
	});
	
    }
    
});
