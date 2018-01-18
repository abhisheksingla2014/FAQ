function route(pathname,handle,response){
	console.log("you have been routed to "+pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response);
		response.end();
	}
	else{
		console.log("this url is not valid");
		response.writeHead(404,{"Content-type" : "text/plain"});
		response.write("ERROR : Not a valid pathname" + pathname + "from route");
	}
}
exports.route = route;