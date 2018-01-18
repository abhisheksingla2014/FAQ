function render_questions(j,list){
	let elementid = 'ul'+(j+1).toString();
	document.getElementById(elementid).appendChild(list);
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		console.log(xhttp.responseText);
		var response = JSON.parse(xhttp.responseText);
		var questions = response.questions;
	    for(let j = 0;j < questions.length;j++){
	    	let output = '';		
	    	for(var i = j;i < questions[j].length;i++){
	    		let list = document.createElement("li");
	    		list.className = "questions";
	    		let span = document.createElement("span");
	    		span.className = "content-links";
	    		let node = document.createTextNode(questions[j][i]);
				span.appendChild(node);
				list.appendChild(span);
				render_questions(j,list);
	    	}
	    }	
	}
};
xhttp.open("GET", "/data/questions.json", true);
xhttp.send();